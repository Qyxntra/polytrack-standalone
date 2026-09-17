/**
 * PolyTrack Vehicle Models, Superpowers & Customization Engine
 * Developed for PolyTrack Standalone
 * 
 * Vehicles:
 * - f1: Formule 1 (Original) - Vitesse Pure & Appui Maximal (4 roues)
 * - voiture: Sportive GT - ⚡ Turbo Nitro Boost (+40 km/h avec [Espace] ou [Shift]) (4 roues)
 * - camionnette: Le Mastodonte (Pick-up / Baja Trophy) - 🛡️ Blindage Lourd & Super Grip (Ground Slam) (4 roues)
 * - avion: Aéroplane (Jet Glider) - ✈️ Vol Plané Aérodynamique (3 roues: 1 avant centre, 2 arrière)
 */
(function() {
  'use strict';

  // --- AUDIO SYNTHESIZER (Web Audio API for UI feedback) ---
  const AudioFX = {
    ctx: null,
    init: function() {
      if (!this.ctx && typeof AudioContext !== 'undefined') {
        try {
          this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {}
      }
    },
    playHover: function() {
      try {
        this.init();
        if (!this.ctx || this.ctx.state === 'suspended') return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.03);
        gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.03);
      } catch (e) {}
    },
    playSelect: function() {
      try {
        this.init();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') {
          this.ctx.resume().catch(() => {});
        }
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(520, this.ctx.currentTime);
        osc.frequency.setValueAtTime(780, this.ctx.currentTime + 0.06);
        gain.gain.setValueAtTime(0.07, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.14);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.14);
      } catch (e) {}
    }
  };

  // --- 1. ADVANCED SOLID LOW-POLY GEOMETRY BUILDER ---
  function createSolidBuilder(THREE, B) {
    // 4 Contiguous Material Buckets:
    // 0: Main (Car primary paint color)
    // 1: AirIntake (Dark intake grilles, tinted glass, canopy, tires)
    // 2: Metal (Chrome frame, splitters, diffusers, exhausts, struts, rims, rotors)
    // 3: BrakeLight (Rear lights, jet thrusters, calipers, hooks, tow rings)
    const buckets = { 0: [], 1: [], 2: [], 3: [] };

    const baseChassis = B && B.models && B.models.chassis;
    const BufferGeometryClass = (THREE && (THREE.BufferGeometry || THREE.LoY)) || (baseChassis && baseChassis.geometry && baseChassis.geometry.constructor);
    const BufferAttributeClass = (THREE && (THREE.BufferAttribute || THREE.THS)) || (baseChassis && baseChassis.geometry && baseChassis.geometry.attributes.position && baseChassis.geometry.attributes.position.constructor);

    function addTri(p1, p2, p3, norm, matIdx) {
      const b = buckets[matIdx] || (buckets[matIdx] = []);
      b.push({
        positions: [p1[0], p1[1], p1[2], p2[0], p2[1], p2[2], p3[0], p3[1], p3[2]],
        normals: [norm[0], norm[1], norm[2], norm[0], norm[1], norm[2], norm[0], norm[1], norm[2]],
        uvs: [0, 0, 1, 0, 0.5, 1]
      });
    }

    // CCW Quad with explicit outward normal
    function addQuad(p1, p2, p3, p4, norm, matIdx) {
      addTri(p1, p2, p3, norm, matIdx);
      addTri(p1, p3, p4, norm, matIdx);
    }

    // 1. Complete 6-faced solid box with strict outward normals
    function addBox(x1, y1, z1, x2, y2, z2, matIdx) {
      const minX = Math.min(x1, x2), maxX = Math.max(x1, x2);
      const minY = Math.min(y1, y2), maxY = Math.max(y1, y2);
      const minZ = Math.min(z1, z2), maxZ = Math.max(z1, z2);

      addQuad([minX, minY, maxZ], [maxX, minY, maxZ], [maxX, maxY, maxZ], [minX, maxY, maxZ], [0, 0, 1], matIdx);  // Front (+Z)
      addQuad([maxX, minY, minZ], [minX, minY, minZ], [minX, maxY, minZ], [maxX, maxY, minZ], [0, 0, -1], matIdx); // Back (-Z)
      addQuad([minX, maxY, maxZ], [maxX, maxY, maxZ], [maxX, maxY, minZ], [minX, maxY, minZ], [0, 1, 0], matIdx);  // Top (+Y)
      addQuad([minX, minY, minZ], [maxX, minY, minZ], [maxX, minY, maxZ], [minX, minY, maxZ], [0, -1, 0], matIdx); // Bottom (-Y)
      addQuad([maxX, minY, maxZ], [maxX, minY, minZ], [maxX, maxY, minZ], [maxX, maxY, maxZ], [1, 0, 0], matIdx);  // Right (+X)
      addQuad([minX, minY, minZ], [minX, minY, maxZ], [minX, maxY, maxZ], [minX, maxY, minZ], [-1, 0, 0], matIdx); // Left (-X)
    }

    // 2. Complete 6-faced sloped box along Z (hood, windshield, roof rake)
    function addSlopedBox(minX, maxX, minY, maxYFront, maxYBack, minZ, maxZ, matIdx) {
      addQuad([minX, minY, minZ], [maxX, minY, minZ], [maxX, minY, maxZ], [minX, minY, maxZ], [0, -1, 0], matIdx); // Bottom
      addQuad([minX, minY, maxZ], [maxX, minY, maxZ], [maxX, maxYFront, maxZ], [minX, maxYFront, maxZ], [0, 0, 1], matIdx); // Front
      addQuad([maxX, minY, minZ], [minX, minY, minZ], [minX, maxYBack, minZ], [maxX, maxYBack, minZ], [0, 0, -1], matIdx); // Back
      const dy = maxYBack - maxYFront;
      const dz = maxZ - minZ;
      const len = Math.hypot(dy, dz) || 1;
      addQuad([minX, maxYFront, maxZ], [maxX, maxYFront, maxZ], [maxX, maxYBack, minZ], [minX, maxYBack, minZ], [0, dz / len, dy / len], matIdx); // Top
      addQuad([maxX, minY, maxZ], [maxX, minY, minZ], [maxX, maxYBack, minZ], [maxX, maxYFront, maxZ], [1, 0, 0], matIdx); // Right
      addQuad([minX, minY, minZ], [minX, minY, maxZ], [minX, maxYFront, maxZ], [minX, maxYBack, minZ], [-1, 0, 0], matIdx); // Left
    }

    // 3. Complete 6-faced tapered box (different widths at front and back)
    function addTaperedBox(x1Front, x2Front, x1Back, x2Back, minY, maxY, minZ, maxZ, matIdx) {
      addQuad([x1Back, minY, minZ], [x2Back, minY, minZ], [x2Front, minY, maxZ], [x1Front, minY, maxZ], [0, -1, 0], matIdx); // Bottom
      addQuad([x1Front, maxY, maxZ], [x2Front, maxY, maxZ], [x2Back, maxY, minZ], [x1Back, maxY, minZ], [0, 1, 0], matIdx);  // Top
      addQuad([x1Front, minY, maxZ], [x2Front, minY, maxZ], [x2Front, maxY, maxZ], [x1Front, maxY, maxZ], [0, 0, 1], matIdx); // Front
      addQuad([x2Back, minY, minZ], [x1Back, minY, minZ], [x1Back, maxY, minZ], [x2Back, maxY, minZ], [0, 0, -1], matIdx);   // Back
      const dxR = x2Back - x2Front;
      const dzR = maxZ - minZ;
      const lenR = Math.hypot(dxR, dzR) || 1;
      addQuad([x2Front, minY, maxZ], [x2Back, minY, minZ], [x2Back, maxY, minZ], [x2Front, maxY, maxZ], [dzR / lenR, 0, -dxR / lenR], matIdx); // Right
      const dxL = x1Back - x1Front;
      const dzL = maxZ - minZ;
      const lenL = Math.hypot(dxL, dzL) || 1;
      addQuad([x1Back, minY, minZ], [x1Front, minY, maxZ], [x1Front, maxY, maxZ], [x1Back, maxY, minZ], [-dzL / lenL, 0, dxL / lenL], matIdx); // Left
    }

    // 4. Faceted cylinder along Z (exhaust pipes, spotlights, jet thrusters)
    function addCylinderZ(cx, cy, czFront, czBack, rFront, rBack, segments, matIdx) {
      const minZ = Math.min(czFront, czBack);
      const maxZ = Math.max(czFront, czBack);
      const step = (Math.PI * 2) / segments;
      for (let i = 0; i < segments; i++) {
        const a1 = i * step;
        const a2 = (i + 1) * step;
        const x1F = cx + Math.cos(a1) * rFront, y1F = cy + Math.sin(a1) * rFront;
        const x2F = cx + Math.cos(a2) * rFront, y2F = cy + Math.sin(a2) * rFront;
        const x1B = cx + Math.cos(a1) * rBack,  y1B = cy + Math.sin(a1) * rBack;
        const x2B = cx + Math.cos(a2) * rBack,  y2B = cy + Math.sin(a2) * rBack;

        const midAngle = (a1 + a2) / 2;
        const norm = [Math.cos(midAngle), Math.sin(midAngle), 0];
        addQuad([x1F, y1F, maxZ], [x2F, y2F, maxZ], [x2B, y2B, minZ], [x1B, y1B, minZ], norm, matIdx);
        addTri([cx, cy, maxZ], [x1F, y1F, maxZ], [x2F, y2F, maxZ], [0, 0, 1], matIdx);
        addTri([cx, cy, minZ], [x2B, y2B, minZ], [x1B, y1B, minZ], [0, 0, -1], matIdx);
      }
    }

    // 5. Faceted cylinder along X (brake rotors, axle tubes)
    function addCylinderX(cxLeft, cxRight, cy, cz, r, segments, matIdx) {
      const minX = Math.min(cxLeft, cxRight);
      const maxX = Math.max(cxLeft, cxRight);
      const step = (Math.PI * 2) / segments;
      for (let i = 0; i < segments; i++) {
        const a1 = i * step;
        const a2 = (i + 1) * step;
        const z1 = cz + Math.cos(a1) * r, y1 = cy + Math.sin(a1) * r;
        const z2 = cz + Math.cos(a2) * r, y2 = cy + Math.sin(a2) * r;
        const midAngle = (a1 + a2) / 2;
        const norm = [0, Math.sin(midAngle), Math.cos(midAngle)];
        addQuad([minX, y1, z1], [maxX, y1, z1], [maxX, y2, z2], [minX, y2, z2], norm, matIdx);
        addTri([minX, cy, cz], [minX, y2, z2], [minX, y1, z1], [-1, 0, 0], matIdx);
        addTri([maxX, cy, cz], [maxX, y1, z1], [maxX, y2, z2], [1, 0, 0], matIdx);
      }
    }

    // 6. Faceted wheel along X axis (for airplane landing gear & truck spare tire)
    function addWheelX(cx, cy, cz, radius, width, matRim, matTire) {
      const halfW = width / 2;
      const xLeft = cx - halfW;
      const xRight = cx + halfW;
      const rimRadius = radius * 0.55;
      const segments = 8;
      const step = (Math.PI * 2) / segments;

      for (let i = 0; i < segments; i++) {
        const a1 = i * step;
        const a2 = (i + 1) * step;
        const z1 = cz + Math.cos(a1) * radius, y1 = cy + Math.sin(a1) * radius;
        const z2 = cz + Math.cos(a2) * radius, y2 = cy + Math.sin(a2) * radius;
        const z1R = cz + Math.cos(a1) * rimRadius, y1R = cy + Math.sin(a1) * rimRadius;
        const z2R = cz + Math.cos(a2) * rimRadius, y2R = cy + Math.sin(a2) * rimRadius;

        const midAngle = (a1 + a2) / 2;
        const treadNorm = [0, Math.sin(midAngle), Math.cos(midAngle)];

        addQuad([xLeft, y1, z1], [xRight, y1, z1], [xRight, y2, z2], [xLeft, y2, z2], treadNorm, matTire);
        addQuad([xLeft, y2, z2], [xLeft, y1, z1], [xLeft, y1R, z1R], [xLeft, y2R, z2R], [-1, 0, 0], matTire);
        addQuad([xRight, y1, z1], [xRight, y2, z2], [xRight, y2R, z2R], [xRight, y1R, z1R], [1, 0, 0], matTire);
        addTri([xLeft, cy, cz], [xLeft, y1R, z1R], [xLeft, y2R, z2R], [-1, 0, 0], matRim);
        addTri([xRight, cy, cz], [xRight, y2R, z2R], [xRight, y1R, z1R], [1, 0, 0], matRim);
      }
    }

    // 7. Ventilated brake rotor + racing caliper
    function addBrakeRotor(cx, cy, cz, radius, isRightSide) {
      const halfThick = 0.012;
      addCylinderX(cx - halfThick, cx + halfThick, cy, cz, radius, 8, 2);
      const calX1 = cx - halfThick * 1.6;
      const calX2 = cx + halfThick * 1.6;
      const calZ1 = cz + radius * 0.35;
      const calZ2 = cz + radius * 0.95;
      const calY1 = cy + radius * 0.35;
      const calY2 = cy + radius * 0.95;
      addBox(calX1, calY1, calZ1, calX2, calY2, calZ2, 3); // Red Brembo caliper (BrakeLight)
    }

    function build() {
      if (!BufferGeometryClass || !BufferAttributeClass) {
        throw new Error('Three.js BufferGeometry or BufferAttribute class not found');
      }

      const flatPositions = [];
      const flatNormals = [];
      const flatUvs = [];
      const groups = [];
      let currentOffset = 0;

      for (let m = 0; m <= 3; m++) {
        const list = buckets[m] || [];
        const count = list.length * 3;
        if (count > 0) {
          groups.push({ start: currentOffset, count: count, materialIndex: m });
          for (let i = 0; i < list.length; i++) {
            const t = list[i];
            flatPositions.push(...t.positions);
            flatNormals.push(...t.normals);
            flatUvs.push(...t.uvs);
          }
          currentOffset += count;
        }
      }

      const geom = new BufferGeometryClass();
      geom.setAttribute('position', new BufferAttributeClass(new Float32Array(flatPositions), 3));
      geom.setAttribute('normal', new BufferAttributeClass(new Float32Array(flatNormals), 3));
      geom.setAttribute('uv', new BufferAttributeClass(new Float32Array(flatUvs), 2));

      for (let i = 0; i < groups.length; i++) {
        const g = groups[i];
        geom.addGroup(g.start, g.count, g.materialIndex);
      }

      return geom;
    }

    return { addBox, addSlopedBox, addTaperedBox, addCylinderZ, addCylinderX, addWheelX, addBrakeRotor, build };
  }

  // --- 2. HIGH-FIDELITY LOW-POLY VEHICLE GEOMETRIES ---

  // 1. Sportive GT (Voiture Supercar / Hypercar)
  function buildSportsCarGeometry(THREE, B) {
    const b = createSolidBuilder(THREE, B);

    // Full underbody belly pan (Metal 2)
    b.addBox(-0.68, -0.32, -1.85, 0.68, -0.22, 1.62, 2);

    // Aerodynamic front chin splitter with center aero intake tunnel (Metal 2)
    b.addBox(-0.72, -0.29, 1.62, 0.72, -0.21, 1.86, 2);
    b.addBox(-0.74, -0.26, 1.70, -0.69, -0.06, 1.88, 2); // left winglet
    b.addBox(0.69, -0.26, 1.70, 0.74, -0.06, 1.88, 2);  // right winglet

    // Front bumper dive planes (canards)
    b.addBox(-0.70, -0.16, 1.68, -0.55, -0.12, 1.80, 2); // lower canard L
    b.addBox(0.55, -0.16, 1.68, 0.70, -0.12, 1.80, 2);  // lower canard R
    b.addBox(-0.68, -0.08, 1.66, -0.56, -0.04, 1.76, 2); // upper canard L
    b.addBox(0.56, -0.08, 1.66, 0.68, -0.04, 1.76, 2);  // upper canard R

    // Triple front grille & brake cooling ducts
    b.addBox(-0.38, -0.23, 1.68, 0.38, -0.05, 1.80, 1);  // center radiator intake
    b.addBox(-0.66, -0.23, 1.65, -0.42, -0.07, 1.78, 1); // left brake duct
    b.addBox(0.42, -0.23, 1.65, 0.66, -0.07, 1.78, 1);  // right brake duct
    b.addBox(-0.68, -0.06, 1.54, 0.68, 0.05, 1.74, 0);   // front bumper fascia

    // Slanted modern LED headlights with dual projector cores & sharp upper eyelid
    b.addBox(-0.65, -0.03, 1.62, -0.40, 0.06, 1.76, 1);  // black housing L
    b.addBox(0.40, -0.03, 1.62, 0.65, 0.06, 1.76, 1);   // black housing R
    b.addBox(-0.62, -0.01, 1.64, -0.43, 0.04, 1.77, 2);  // LED projector L
    b.addBox(0.43, -0.01, 1.64, 0.62, 0.04, 1.77, 2);   // LED projector R
    b.addBox(-0.65, 0.05, 1.63, -0.41, 0.08, 1.77, 0);  // sharp eyelid L
    b.addBox(0.41, 0.05, 1.63, 0.65, 0.08, 1.77, 0);   // sharp eyelid R

    // Sculpted hood with twin recessed extractor vents & center power spine
    b.addSlopedBox(-0.48, 0.48, -0.18, 0.03, 0.15, 0.35, 1.64, 0);
    b.addBox(-0.32, 0.04, 0.75, -0.08, 0.08, 1.20, 1); // hood extractor L
    b.addBox(0.08, 0.04, 0.75, 0.32, 0.08, 1.20, 1);  // hood extractor R
    b.addBox(-0.28, 0.07, 0.82, -0.12, 0.09, 0.88, 2); // louver blade L1
    b.addBox(-0.28, 0.07, 0.98, -0.12, 0.09, 1.04, 2); // louver blade L2
    b.addBox(0.12, 0.07, 0.82, 0.28, 0.09, 0.88, 2);  // louver blade R1
    b.addBox(0.12, 0.07, 0.98, 0.28, 0.09, 1.04, 2);  // louver blade R2
    b.addBox(-0.05, 0.05, 0.40, 0.05, 0.12, 1.55, 0);  // center aero spine

    // Widebody front wheel arches with top heat extraction louvers
    b.addBox(-0.72, -0.20, 0.40, -0.46, 0.13, 1.62, 0);
    b.addBox(0.46, -0.20, 0.40, 0.72, 0.13, 1.62, 0);
    b.addBox(-0.68, 0.12, 0.85, -0.52, 0.14, 1.15, 1); // fender louver L
    b.addBox(0.52, 0.12, 0.85, 0.68, 0.14, 1.15, 1);  // fender louver R

    // Aerodynamic side skirts with carbon ground-effect blades
    b.addBox(-0.72, -0.29, -0.85, -0.56, -0.20, 0.45, 2);
    b.addBox(0.56, -0.29, -0.85, 0.72, -0.20, 0.45, 2);
    b.addBox(-0.74, -0.28, -0.86, -0.68, -0.10, -0.70, 2); // skirt rear fin L
    b.addBox(0.68, -0.28, -0.86, 0.74, -0.10, -0.70, 2);  // skirt rear fin R

    // Cockpit, Windshield & Double-Bubble Roof
    b.addSlopedBox(-0.45, 0.45, 0.08, 0.14, 0.41, 0.05, 0.45, 1); // windshield
    b.addBox(-0.45, 0.38, -0.65, -0.06, 0.43, 0.05, 0);           // roof left bubble
    b.addBox(0.06, 0.38, -0.65, 0.45, 0.43, 0.05, 0);            // roof right bubble
    b.addBox(-0.06, 0.36, -0.65, 0.06, 0.40, 0.05, 0);            // roof central aerodynamic recess
    b.addBox(-0.08, 0.40, -0.40, 0.08, 0.46, -0.10, 1);          // roof NACA intake scoop

    // Modeled Cockpit Interior
    b.addBox(-0.12, 0.15, 0.10, 0.12, 0.22, 0.13, 2);            // F1/GT yoke steering wheel
    b.addBox(-0.02, 0.21, 0.10, 0.02, 0.23, 0.135, 3);           // 12-o'clock red center stripe
    b.addBox(-0.16, 0.13, 0.14, 0.16, 0.18, 0.19, 2);            // digital dashboard cluster
    b.addBox(-0.30, 0.16, -0.26, -0.12, 0.32, -0.16, 1);         // bucket seat headrest L
    b.addBox(0.12, 0.16, -0.26, 0.30, 0.32, -0.16, 1);          // bucket seat headrest R
    b.addBox(-0.42, 0.15, -0.60, 0.42, 0.38, -0.57, 2);          // roll cage main hoop

    // Doors & Side Windows
    b.addBox(-0.70, -0.20, -0.65, -0.44, 0.14, 0.40, 0);
    b.addBox(0.44, -0.20, -0.65, 0.70, 0.14, 0.40, 0);
    b.addBox(-0.47, 0.14, -0.60, -0.43, 0.37, 0.05, 1);
    b.addBox(0.43, 0.14, -0.60, 0.47, 0.37, 0.05, 1);

    // Aerodynamic side mirrors
    b.addBox(-0.66, 0.15, 0.25, -0.48, 0.23, 0.36, 2);
    b.addBox(0.48, 0.15, 0.25, 0.66, 0.23, 0.36, 2);

    // Supercar side air intakes behind doors with carbon split vanes
    b.addBox(-0.72, -0.06, -0.80, -0.48, 0.22, -0.35, 1);
    b.addBox(0.48, -0.06, -0.80, 0.72, 0.22, -0.35, 1);
    b.addBox(-0.73, 0.07, -0.78, -0.47, 0.09, -0.37, 2); // carbon aero vane L
    b.addBox(0.47, 0.07, -0.78, 0.73, 0.09, -0.37, 2);  // carbon aero vane R

    // Muscular flared widebody rear wheel arches with extraction vents
    b.addBox(-0.75, -0.20, -1.70, -0.48, 0.16, -0.75, 0);
    b.addBox(0.48, -0.20, -1.70, 0.75, 0.16, -0.75, 0);
    b.addBox(-0.74, -0.10, -1.75, -0.58, 0.10, -1.65, 1); // rear brake vent L
    b.addBox(0.58, -0.10, -1.75, 0.74, 0.10, -1.65, 1);  // rear brake vent R

    // Fastback rear window with 4 cooling louvers
    b.addSlopedBox(-0.45, 0.45, 0.10, 0.41, 0.12, -1.18, -0.62, 1);
    b.addBox(-0.36, 0.29, -0.76, 0.36, 0.32, -0.68, 0); // louver 1
    b.addBox(-0.36, 0.22, -0.90, 0.36, 0.25, -0.82, 0); // louver 2
    b.addBox(-0.36, 0.16, -1.04, 0.36, 0.19, -0.96, 0); // louver 3
    b.addBox(-0.36, 0.11, -1.16, 0.36, 0.14, -1.10, 0); // louver 4

    // Rear deck, bumper fascia & honeycomb insert
    b.addBox(-0.55, -0.08, -1.75, 0.55, 0.13, -1.18, 0);
    b.addBox(-0.70, -0.26, -1.86, 0.70, -0.02, -1.70, 0);
    b.addBox(-0.66, -0.24, -1.87, 0.66, -0.04, -1.85, 1); // black honeycomb insert

    // Full-width modern cyber LED lightbar (BrakeLight 3)
    b.addBox(-0.68, -0.03, -1.88, 0.68, 0.05, -1.82, 3);
    b.addBox(-0.06, -0.26, -1.90, 0.06, -0.16, -1.84, 3); // central F1 rain/brake light

    // 6-fin high-downforce racing diffuser
    b.addBox(-0.68, -0.32, -1.92, 0.68, -0.18, -1.65, 2); // diffuser floor ramp
    b.addBox(-0.52, -0.32, -1.94, -0.49, -0.16, -1.68, 2); // fin 1
    b.addBox(-0.32, -0.32, -1.94, -0.29, -0.16, -1.68, 2); // fin 2
    b.addBox(-0.12, -0.32, -1.94, -0.09, -0.16, -1.68, 2); // fin 3
    b.addBox(0.09, -0.32, -1.94, 0.12, -0.16, -1.68, 2);  // fin 4
    b.addBox(0.29, -0.32, -1.94, 0.32, -0.16, -1.68, 2);  // fin 5
    b.addBox(0.49, -0.32, -1.94, 0.52, -0.16, -1.68, 2);  // fin 6

    // Quad Titanium Exhausts with glowing afterburner cores
    b.addCylinderZ(-0.30, -0.14, -1.96, -1.82, 0.045, 0.045, 6, 2);
    b.addCylinderZ(-0.20, -0.14, -1.96, -1.82, 0.045, 0.045, 6, 2);
    b.addCylinderZ(-0.30, -0.14, -1.97, -1.95, 0.035, 0.035, 6, 3); // inner flame core L1
    b.addCylinderZ(-0.20, -0.14, -1.97, -1.95, 0.035, 0.035, 6, 3); // inner flame core L2
    b.addCylinderZ(0.20, -0.14, -1.96, -1.82, 0.045, 0.045, 6, 2);
    b.addCylinderZ(0.30, -0.14, -1.96, -1.82, 0.045, 0.045, 6, 2);
    b.addCylinderZ(0.20, -0.14, -1.97, -1.95, 0.035, 0.035, 6, 3); // inner flame core R1
    b.addCylinderZ(0.30, -0.14, -1.97, -1.95, 0.035, 0.035, 6, 3); // inner flame core R2

    // GT Swan-Neck Wing with Gurney Flap & Endplates
    b.addBox(-0.38, 0.08, -1.80, -0.34, 0.34, -1.68, 2); // left swan pylon
    b.addBox(0.34, 0.08, -1.80, 0.38, 0.34, -1.68, 2);  // right swan pylon
    b.addBox(-0.74, 0.30, -1.90, 0.74, 0.35, -1.62, 0);  // wing main aerofoil blade (Body Paint)
    b.addBox(-0.74, 0.34, -1.92, 0.74, 0.37, -1.88, 2);  // carbon gurney flap
    b.addBox(-0.76, 0.22, -1.94, -0.72, 0.40, -1.60, 2); // left endplate
    b.addBox(0.72, 0.22, -1.94, 0.76, 0.40, -1.60, 2);  // right endplate

    // Ventilated Brake Rotors & Red Calipers at 4 Wheel Locations
    b.addBrakeRotor(-0.56, -0.42, 1.28, 0.18, false); // FL
    b.addBrakeRotor(0.56, -0.42, 1.28, 0.18, true);   // FR
    b.addBrakeRotor(-0.56, -0.42, -1.28, 0.18, false);// RL
    b.addBrakeRotor(0.56, -0.42, -1.28, 0.18, true);  // RR

    return b.build();
  }

  // 2. Le Mastodonte (Camionnette Baja Trophy Truck & Blindage Lourd)
  function buildVanGeometry(THREE, B) {
    const b = createSolidBuilder(THREE, B);

    // Heavy steel underbody belly plate (Metal 2)
    b.addBox(-0.72, -0.32, -1.85, 0.72, -0.20, 1.62, 2);

    // Pre-runner tubular front bumper & bash plate
    b.addSlopedBox(-0.58, 0.58, -0.32, -0.22, 0.06, 1.65, 1.84, 2);
    b.addBox(-0.72, -0.26, 1.68, 0.72, 0.10, 1.84, 2);
    b.addBox(-0.45, 0.08, 1.76, 0.45, 0.16, 1.84, 2); // upper bullbar brush loop

    // Integrated Electric Winch (drum, cable & red hook)
    b.addBox(-0.24, -0.20, 1.68, 0.24, -0.06, 1.78, 1); // winch housing
    b.addBox(-0.14, -0.18, 1.74, 0.14, -0.08, 1.80, 2); // cable drum
    b.addBox(-0.06, -0.20, 1.80, 0.06, -0.12, 1.86, 3); // red recovery hook
    b.addBox(-0.35, -0.28, 1.82, -0.26, -0.18, 1.88, 3); // D-ring shackle L
    b.addBox(0.26, -0.28, 1.82, 0.35, -0.18, 1.88, 3);  // D-ring shackle R

    // Aggressive black honeycomb grille with bold center chrome bar
    b.addBox(-0.52, -0.12, 1.60, 0.52, 0.18, 1.68, 1);
    b.addBox(-0.48, 0.01, 1.62, 0.48, 0.07, 1.70, 2); // bold chrome center bar

    // Quad square LED projector headlights & amber clearance lights
    b.addBox(-0.66, -0.02, 1.62, -0.48, 0.18, 1.70, 2); // headlights L
    b.addBox(0.48, -0.02, 1.62, 0.66, 0.18, 1.70, 2);  // headlights R
    b.addBox(-0.20, 0.15, 1.64, -0.12, 0.18, 1.69, 3); // clearance light 1
    b.addBox(-0.04, 0.15, 1.64, 0.04, 0.18, 1.69, 3);  // clearance light 2
    b.addBox(0.12, 0.15, 1.64, 0.20, 0.18, 1.69, 3);   // clearance light 3

    // Heavy power-bulge hood with twin cowl induction scoops
    b.addBox(-0.54, -0.05, 0.48, 0.54, 0.22, 1.60, 0);
    b.addBox(-0.26, 0.20, 0.65, 0.26, 0.27, 1.45, 0); // power dome
    b.addBox(-0.20, 0.22, 1.40, -0.05, 0.26, 1.47, 1); // cowl scoop L
    b.addBox(0.05, 0.22, 1.40, 0.20, 0.26, 1.47, 1);  // cowl scoop R

    // Chunky squared fender flares with rivet bolt studs
    b.addBox(-0.76, -0.22, 0.45, -0.50, 0.22, 1.60, 0);
    b.addBox(0.50, -0.22, 0.45, 0.76, 0.22, 1.60, 0);
    b.addBox(-0.77, 0.10, 0.80, -0.74, 0.14, 0.84, 2); // rivet stud L
    b.addBox(0.74, 0.10, 0.80, 0.77, 0.14, 0.84, 2);  // rivet stud R

    // External Snorkel on right A-pillar with cyclone head
    b.addBox(0.54, 0.05, 0.28, 0.62, 0.54, 0.38, 1);
    b.addCylinderZ(0.58, 0.52, 0.33, 0.45, 0.07, 0.07, 6, 1); // cyclone intake head

    // Tubular rock sliders with diamond tread plates
    b.addBox(-0.74, -0.28, -0.80, -0.58, -0.22, 0.55, 2);
    b.addBox(0.58, -0.28, -0.80, 0.74, -0.22, 0.55, 2);
    b.addBox(-0.72, -0.22, -0.40, -0.60, -0.21, 0.20, 2); // step tread L
    b.addBox(0.60, -0.22, -0.40, 0.72, -0.21, 0.20, 2);  // step tread R

    // Upright Truck Cabin & Visor
    b.addSlopedBox(-0.52, 0.52, 0.18, 0.22, 0.52, 0.18, 0.48, 1); // windshield
    b.addBox(-0.56, 0.50, 0.16, 0.56, 0.57, 0.26, 0);            // sun visor brow
    b.addBox(-0.54, 0.48, -0.68, 0.54, 0.55, 0.22, 0);            // cab roof
    b.addBox(-0.74, -0.22, -0.68, -0.50, 0.24, 0.48, 0);          // doors
    b.addBox(0.50, -0.22, -0.68, 0.74, 0.24, 0.48, 0);
    b.addBox(-0.55, 0.22, -0.62, -0.50, 0.48, 0.20, 1);          // side windows
    b.addBox(0.50, 0.22, -0.62, 0.55, 0.48, 0.20, 1);
    b.addBox(-0.50, 0.22, -0.70, 0.50, 0.48, -0.66, 1);          // cab rear window

    // Roof expedition rack with 5 KC-style round rally spotlights
    b.addBox(-0.58, 0.54, -0.62, 0.58, 0.60, 0.18, 2); // rack basket
    b.addCylinderZ(-0.40, 0.62, 0.22, 0.12, 0.055, 0.055, 6, 2);
    b.addCylinderZ(-0.20, 0.62, 0.22, 0.12, 0.055, 0.055, 6, 2);
    b.addCylinderZ(0.00, 0.62, 0.22, 0.12, 0.055, 0.055, 6, 2);
    b.addCylinderZ(0.20, 0.62, 0.22, 0.12, 0.055, 0.055, 6, 2);
    b.addCylinderZ(0.40, 0.62, 0.22, 0.12, 0.055, 0.055, 6, 2);
    // Glowing projector cores in the spotlights
    b.addCylinderZ(-0.40, 0.62, 0.23, 0.21, 0.04, 0.04, 6, 3);
    b.addCylinderZ(-0.20, 0.62, 0.23, 0.21, 0.04, 0.04, 6, 3);
    b.addCylinderZ(0.00, 0.62, 0.23, 0.21, 0.04, 0.04, 6, 3);
    b.addCylinderZ(0.20, 0.62, 0.23, 0.21, 0.04, 0.04, 6, 3);
    b.addCylinderZ(0.40, 0.62, 0.23, 0.21, 0.04, 0.04, 6, 3);

    // OPEN TUBULAR BAJA TROPHY TRUCK BED
    b.addBox(-0.76, -0.22, -1.82, -0.52, 0.28, -0.68, 0); // left bed wall
    b.addBox(0.52, -0.22, -1.82, 0.76, 0.28, -0.68, 0);  // right bed wall
    b.addBox(-0.52, -0.16, -1.78, 0.52, -0.12, -0.68, 2); // metal diamond bed floor plate

    // Roll-Cage Tubular Truss & Crossbars over the bed
    b.addBox(-0.54, 0.24, -0.72, 0.54, 0.55, -0.66, 2);  // main roll hoop behind cab
    b.addBox(-0.52, 0.20, -1.75, -0.46, 0.52, -0.70, 2); // rear diagonal strut L
    b.addBox(0.46, 0.20, -1.75, 0.52, 0.52, -0.70, 2);  // rear diagonal strut R
    b.addBox(-0.48, 0.32, -1.30, 0.48, 0.36, -1.24, 2);  // transverse crossbar

    // REAL SPARE OFFROAD WHEEL & TIRE MOUNTED AT 45° IN THE BED
    b.addWheelX(0, 0.12, -1.22, 0.24, 0.20, 2, 1);
    // Y-Strap Ratchet Tie-Down over the spare tire
    b.addBox(-0.03, 0.36, -1.24, 0.03, 0.39, -1.18, 3);  // center ratchet buckle
    b.addBox(-0.02, 0.20, -1.23, 0.02, 0.37, -1.20, 3);  // strap vertical
    b.addBox(-0.16, 0.12, -1.23, -0.02, 0.36, -1.20, 3); // strap diagonal L
    b.addBox(0.02, 0.12, -1.23, 0.16, 0.36, -1.20, 3);  // strap diagonal R

    // Angled side-exit twin exhausts before the rear tires
    b.addBox(-0.74, -0.24, -0.80, -0.66, -0.18, -0.66, 2);
    b.addBox(0.66, -0.24, -0.80, 0.74, -0.18, -0.66, 2);

    // Heavy rear tubular bumper & tow hitch receiver
    b.addBox(-0.74, -0.32, -1.95, 0.74, -0.16, -1.82, 2);
    b.addBox(-0.10, -0.28, -1.98, 0.10, -0.20, -1.90, 2); // hitch receiver
    b.addBox(-0.04, -0.28, -2.00, 0.04, -0.22, -1.96, 3); // red hitch pin

    // Vertical rear taillights & chase bar
    b.addBox(-0.72, -0.08, -1.88, -0.58, 0.26, -1.82, 3); // taillight L
    b.addBox(0.58, -0.08, -1.88, 0.72, 0.26, -1.82, 3);  // taillight R
    b.addBox(-0.30, 0.50, -0.74, 0.30, 0.54, -0.70, 3);  // amber chase bar

    // Heavy-Duty Brake Rotors & Calipers at 4 Wheel Locations
    b.addBrakeRotor(-0.58, -0.42, 1.28, 0.19, false); // FL
    b.addBrakeRotor(0.58, -0.42, 1.28, 0.19, true);   // FR
    b.addBrakeRotor(-0.58, -0.42, -1.28, 0.19, false);// RL
    b.addBrakeRotor(0.58, -0.42, -1.28, 0.19, true);  // RR

    return b.build();
  }

  // 3. Aéroplane (Jet Glider - Tricycle 3 Roues: 1 avant centre, 2 arrière)
  function buildPlaneGeometry(THREE, B) {
    const b = createSolidBuilder(THREE, B);

    // Fuselage belly pan (Metal 2)
    b.addBox(-0.42, -0.28, -1.80, 0.42, -0.15, 1.65, 2);

    // Supersonic needle radome with pitot boom & AOA vanes
    b.addTaperedBox(-0.16, 0.16, -0.30, 0.30, -0.20, 0.08, 1.65, 2.15, 1);
    b.addBox(-0.02, -0.07, 2.15, 0.02, -0.03, 2.32, 2); // long pitot probe
    b.addBox(-0.06, -0.06, 2.05, 0.06, -0.04, 2.08, 2); // AOA sensor vanes
    b.addTaperedBox(-0.30, 0.30, -0.44, 0.44, -0.22, 0.18, 0.85, 1.65, 0);

    // Dual forward canard control wings with chrome leading trims
    b.addBox(-0.72, -0.06, 0.95, -0.40, -0.01, 1.30, 0);
    b.addBox(0.40, -0.06, 0.95, 0.72, -0.01, 1.30, 0);
    b.addBox(-0.73, -0.06, 1.26, -0.40, -0.01, 1.32, 2); // canard trim L
    b.addBox(0.40, -0.06, 1.26, 0.73, -0.01, 1.32, 2);  // canard trim R

    // SINGLE FRONT CENTER LANDING GEAR & 8-SIDED WHEEL (EXACTLY 3 WHEELS CONFIG)
    // Sits at Y = -0.53 with radius 0.20, giving bottom at Y = -0.730 (matching rear wheels at -0.738)
    b.addBox(-0.035, -0.53, 1.28, 0.035, -0.18, 1.38, 2); // vertical steel oleo strut
    b.addBox(-0.05, -0.45, 1.36, 0.05, -0.33, 1.44, 2);   // scissor torque link
    b.addBox(-0.08, -0.35, 1.30, -0.04, -0.30, 1.38, 2);  // taxi spotlight L
    b.addBox(0.04, -0.35, 1.30, 0.08, -0.30, 1.38, 2);   // taxi spotlight R
    b.addBox(-0.10, -0.36, 1.22, 0.10, -0.30, 1.48, 0);   // aerodynamic gravel mudguard
    b.addWheelX(0, -0.53, 1.35, 0.20, 0.14, 2, 1);        // 8-sided nose wheel (rim=2, tire=1)

    // Jet Cockpit Canopy with Arch & Interior
    b.addSlopedBox(-0.30, 0.30, 0.08, 0.14, 0.44, 0.30, 0.98, 1);
    b.addBox(-0.30, 0.38, -0.30, 0.30, 0.46, 0.32, 1);
    b.addSlopedBox(-0.30, 0.30, 0.08, 0.44, 0.14, -0.78, -0.28, 1);
    b.addBox(-0.31, 0.10, -0.02, 0.31, 0.46, 0.04, 0); // canopy structural arch

    // Cockpit Interior (HUD collimator & Ejection Seat)
    b.addBox(-0.10, 0.18, 0.44, 0.10, 0.28, 0.48, 2);  // holographic HUD frame
    b.addBox(-0.03, 0.12, 0.08, 0.03, 0.22, 0.12, 2);  // fighter jet control stick
    b.addBox(-0.15, 0.18, -0.22, 0.15, 0.36, -0.12, 1); // ejection seat headrest
    b.addBox(-0.05, 0.36, -0.20, 0.05, 0.40, -0.14, 3); // yellow/black ejection handle

    // Supersonic side air intakes (F-22 style caret intakes) with internal compressor faces
    b.addBox(-0.56, -0.22, -0.22, -0.38, 0.12, 0.48, 1);
    b.addBox(0.38, -0.22, -0.22, 0.56, 0.12, 0.48, 1);
    b.addBox(-0.54, -0.18, 0.05, -0.40, 0.08, 0.10, 2); // compressor fan face L
    b.addBox(0.40, -0.18, 0.05, 0.54, 0.08, 0.10, 2);  // compressor fan face R
    b.addBox(-0.58, -0.24, -0.24, -0.55, 0.14, 0.50, 2); // boundary layer splitter L
    b.addBox(0.55, -0.24, -0.24, 0.58, 0.14, 0.50, 2);  // boundary layer splitter R

    // Mid & aft faceted fuselage
    b.addBox(-0.44, -0.24, -0.75, 0.44, 0.20, 0.88, 0);
    b.addBox(-0.36, -0.20, -1.78, 0.36, 0.16, -0.75, 0);

    // Swept double-delta wings with chrome leading edges & winglets
    b.addTaperedBox(-2.15, -0.40, -1.88, -0.40, -0.16, -0.02, -0.68, 0.38, 0);
    b.addTaperedBox(0.40, 2.15, 0.40, 1.88, -0.16, -0.02, -0.68, 0.38, 0);
    b.addBox(-2.15, -0.16, 0.30, -0.40, -0.01, 0.42, 2); // chrome leading edge L
    b.addBox(0.40, -0.16, 0.30, 2.15, -0.01, 0.42, 2);  // chrome leading edge R

    // Wingtip EW Pods & Navigation Lights
    b.addBox(-2.18, -0.14, -0.70, -2.10, 0.08, 0.35, 1); // pod body L
    b.addBox(2.10, -0.14, -0.70, 2.18, 0.08, 0.35, 1);  // pod body R
    b.addBox(-2.20, -0.06, 0.32, -2.16, 0.02, 0.38, 3); // port nav light (Red)
    b.addBox(2.16, -0.06, 0.32, 2.20, 0.02, 0.38, 2);  // starboard nav light
    b.addBox(-2.18, -0.15, -0.65, -2.12, 0.45, 0.12, 2); // winglet L
    b.addBox(2.12, -0.15, -0.65, 2.18, 0.45, 0.12, 2);  // winglet R

    // Twin Canted Vertical Fins (V-tail fighter jet)
    b.addSlopedBox(-0.38, -0.24, 0.10, 0.10, 0.78, -1.85, -1.15, 0);
    b.addSlopedBox(0.24, 0.38, 0.10, 0.10, 0.78, -1.85, -1.15, 0);
    b.addBox(-0.39, 0.72, -1.85, -0.23, 0.80, -1.25, 2); // fin tip EW cap L
    b.addBox(0.23, 0.72, -1.85, 0.39, 0.80, -1.25, 2);  // fin tip EW cap R

    // Dual Ventral Aerodynamic Strakes under Aft Fuselage
    b.addBox(-0.26, -0.34, -1.75, -0.22, -0.22, -1.25, 2);
    b.addBox(0.22, -0.34, -1.75, 0.26, -0.22, -1.25, 2);

    // Horizontal tailplanes / elevators
    b.addBox(-1.00, 0.00, -1.88, -0.32, 0.08, -1.35, 0);
    b.addBox(0.32, 0.00, -1.88, 1.00, 0.08, -1.35, 0);

    // Dual 3D Thrust-Vectoring Jet Nozzles & Glowing Afterburners
    b.addCylinderZ(-0.25, -0.08, -1.65, -1.98, 0.15, 0.14, 8, 2);
    b.addCylinderZ(0.25, -0.08, -1.65, -1.98, 0.15, 0.14, 8, 2);
    b.addCylinderZ(-0.25, -0.08, -1.97, -2.02, 0.11, 0.10, 8, 3); // afterburner core L
    b.addCylinderZ(0.25, -0.08, -1.97, -2.02, 0.11, 0.10, 8, 3);  // afterburner core R

    // Rear Wheel Brakes
    b.addBrakeRotor(-0.56, -0.42, -1.28, 0.18, false); // RL
    b.addBrakeRotor(0.56, -0.42, -1.28, 0.18, true);   // RR

    return b.build();
  }

  // --- 3. VEHICLE REGISTRY ---
  const VEHICLES = {
    f1: {
      id: 'f1',
      name: 'Formule 1 (F1)',
      tag: 'MONOPLACE F1',
      subtitle: 'Vitesse Pure & Appui Maximal',
      icon: '🏎️',
      color: '#e11d48',
      powerName: 'Appui Aérodynamique',
      powerKey: 'PASSIF PERMANENT',
      powerDesc: 'Vitesse de pointe chirurgicale (320 km/h) et appui maximal au sol en virage rapide.',
      stats: { speed: 98, accel: 92, grip: 90, aero: 85 },
      statLabels: { speed: '320 km/h', accel: '1.8s', grip: 'Aéro Max', aero: 'Effet de Sol' }
    },
    voiture: {
      id: 'voiture',
      name: 'Sportive GT',
      tag: 'HYPERCAR CYBER',
      subtitle: 'Turbo Nitro Boost & Dérapage',
      icon: '🚗',
      color: '#3b82f6',
      powerName: '⚡ Turbo Nitro Boost',
      powerKey: '[ESPACE] OU [SHIFT]',
      powerDesc: 'Poussée supersonique (+40 km/h) avec traînées de vitesse. Se recharge en roulant.',
      stats: { speed: 90, accel: 98, grip: 85, aero: 65 },
      statLabels: { speed: '300 km/h', accel: '1.5s (Boost)', grip: 'Précision', aero: 'Aileron GT' }
    },
    camionnette: {
      id: 'camionnette',
      name: 'Le Mastodonte',
      tag: 'OFFROAD BAJA',
      subtitle: 'Pick-up / Blindage Lourd',
      icon: '🚐',
      color: '#f59e0b',
      powerName: '🛡️ Blindage & Ground Slam',
      powerKey: 'AU SOL & SAUTS',
      powerDesc: 'Châssis lourd insensible aux tête-à-queue et impulsion Ground Slam (+15 km/h) à l\'atterrissage.',
      stats: { speed: 76, accel: 82, grip: 100, aero: 30 },
      statLabels: { speed: '265 km/h', accel: '2.2s', grip: 'Super Grip', aero: 'Blindage' }
    },
    avion: {
      id: 'avion',
      name: 'Aéroplane (Jet Glider)',
      tag: 'CHASSEUR SUPERSONIQUE',
      subtitle: 'Tricycle 3 Roues & Vol Plané',
      icon: '✈️',
      color: '#10b981',
      powerName: '✈️ Vol Plané Aérodynamique',
      powerKey: 'EN L\'AIR (SAUTS)',
      powerDesc: 'Plane et flotte dans les airs pendant 3.5s sur les grands sauts. 3 roues (1 avant centre, 2 arrière).',
      stats: { speed: 88, accel: 78, grip: 72, aero: 100 },
      statLabels: { speed: '295 km/h', accel: '2.3s', grip: 'Tricycle', aero: 'Vol Plané 3.5s' }
    }
  };

  const STORAGE_KEY = 'polytrack_vehicle_type';

  function getSelectedVehicleType() {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v && VEHICLES[v]) return v;
    } catch (e) {}
    return 'f1';
  }

  function setSelectedVehicleType(type) {
    if (!VEHICLES[type]) return;
    try {
      localStorage.setItem(STORAGE_KEY, type);
    } catch (e) {}
    window._selectedVehicleType = type;
  }

  // --- 4. CHASSIS MESH INSTANTIATION & VISIBILITY ---
  function createVehicleChassis(B, THREE) {
    const vType = window._selectedVehicleType || getSelectedVehicleType();
    const baseChassis = B.models.chassis;

    let geom;
    if (vType === 'voiture') {
      geom = buildSportsCarGeometry(THREE, B);
    } else if (vType === 'camionnette') {
      geom = buildVanGeometry(THREE, B);
    } else if (vType === 'avion') {
      geom = buildPlaneGeometry(THREE, B);
    } else {
      return baseChassis.clone();
    }

    const MeshClass = (THREE && (THREE.Mesh || THREE.vY)) || baseChassis.constructor;

    let baseMaterials = baseChassis.material;
    let clonedMaterials;
    if (Array.isArray(baseMaterials)) {
      clonedMaterials = baseMaterials.map(m => {
        const cloned = m.clone();
        cloned.side = 2; // THREE.DoubleSide
        cloned.shadowSide = 2;
        cloned.transparent = false;
        cloned.depthWrite = true;
        cloned.depthTest = true;
        return cloned;
      });
    } else if (baseMaterials) {
      const cloned = baseMaterials.clone();
      cloned.side = 2;
      cloned.shadowSide = 2;
      cloned.transparent = false;
      cloned.depthWrite = true;
      cloned.depthTest = true;
      clonedMaterials = [cloned, cloned.clone(), cloned.clone(), cloned.clone()];
    }

    const newMesh = new MeshClass(geom, clonedMaterials);
    newMesh.castShadow = true;
    newMesh.receiveShadow = true;
    return newMesh;
  }

  function applyWheelVisibility(carInstance, l, xe, ye, vType) {
    if (!carInstance || !xe) return;
    vType = vType || window._selectedVehicleType || getSelectedVehicleType();
    try {
      const wheels = (0, l.gn)(carInstance, xe, "f");
      if (Array.isArray(wheels)) {
        if (vType === 'avion') {
          // Exactly 3 wheels: 1 front center (built into chassis geometry) + 2 rear wheels
          if (wheels[0]) wheels[0].visible = false;
          if (wheels[1]) wheels[1].visible = false;
          if (wheels[2]) wheels[2].visible = true;
          if (wheels[3]) wheels[3].visible = true;
        } else {
          // Standard 4 wheels
          for (let i = 0; i < wheels.length; i++) {
            if (wheels[i]) wheels[i].visible = true;
          }
        }
      }
      if (ye) {
        const suspension = (0, l.gn)(carInstance, ye, "f");
        if (suspension) {
          suspension.visible = (vType !== 'avion');
        }
      }
    } catch (e) {
      console.warn('[PolyTrack] Error applying wheel visibility:', e);
    }
  }

  function changeVehicleChassis(carInstance, vType, THREE, l, B, be, me, D, Oe, we, xe, ye) {
    setSelectedVehicleType(vType);
    window._selectedVehicleType = vType;

    const oldMesh = (0, l.gn)(carInstance, be, "f");
    const carGroup = (0, l.gn)(carInstance, me, "f");
    if (!oldMesh || !carGroup) return;

    // 1. Capture the existing matrix so the new mesh NEVER drops to (0,0,0) under the floor!
    const oldMatrix = oldMesh.matrix ? oldMesh.matrix.clone() : null;

    carGroup.remove(oldMesh);
    const newMesh = createVehicleChassis(B, THREE);
    newMesh.matrixAutoUpdate = false;

    // 2. Immediately inherit transform from previous mesh
    if (oldMatrix) {
      newMesh.matrix.copy(oldMatrix);
    }

    (0, l.GG)(carInstance, be, newMesh, "f");

    if (D && Oe) {
      (0, l.GG)(carInstance, D, newMesh.material, "f");
      (0, l.GG)(carInstance, Oe, newMesh.geometry, "f");
    }
    if (we) {
      (0, l.GG)(carInstance, we, newMesh.material[0], "f");
    }

    carGroup.add(newMesh);

    // 3. Compute exact matrix from carInstance position & quaternion
    try {
      if (typeof carInstance.getMatrix4 === 'function') {
        const mat = carInstance.getMatrix4();
        if (mat) {
          newMesh.matrix.copy(mat);
          const massOffset = (B && B.massOffset !== undefined) ? B.massOffset : 0.6;
          const Kn4Class = THREE && (THREE.Matrix4 || THREE.kn4 || (mat && mat.constructor));
          if (Kn4Class) {
            newMesh.matrix.multiply(new Kn4Class().makeTranslation(0, massOffset, 0));
          }
        }
      }
    } catch (e) {
      console.warn('[PolyTrack] Matrix calculation error:', e);
    }

    // 4. Trigger carInstance.update(0) to update wheels, suspension and chassis matrix
    if (typeof carInstance.update === 'function') {
      try {
        carInstance.update(0);
      } catch (e) {
        console.warn('[PolyTrack] carInstance.update error:', e);
      }
    }

    // 5. Apply wheel and suspension visibility
    applyWheelVisibility(carInstance, l, xe, ye, vType);

    // 6. Refresh colors on new mesh from car style
    try {
      const style = carInstance.getCarStyle && carInstance.getCarStyle();
      if (style) {
        carInstance.setCarStyle(style);
      }
    } catch (e) {}

    console.log('[PolyTrack] Vehicle morphed to:', vType);
  }

  // --- 5. POWER LOGIC & IN-GAME ESPORTS TELEMETRY HUD ---
  const powerState = {
    // Nitro (Voiture)
    nitroFuel: 100,
    maxNitro: 100,
    isNitroBoosting: false,
    nitroKeyHeld: false,

    // Glider (Avion)
    isGliding: false,
    glideRemaining: 3.5,
    maxGlide: 3.5,
    airborneFrames: 0,

    // Heavy Tank (Camionnette)
    slamCharged: false,
    slamTriggered: false,

    // UI Elements
    hudEl: null,
    fxOverlayEl: null
  };

  window.addEventListener('keydown', e => {
    if (e.code === 'Space' || e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      powerState.nitroKeyHeld = true;
    }
  });
  window.addEventListener('keyup', e => {
    if (e.code === 'Space' || e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      powerState.nitroKeyHeld = false;
    }
  });

  function setupHUD() {
    if (powerState.hudEl && document.body.contains(powerState.hudEl)) return;

    // In-game Telemetry HUD container
    const hud = document.createElement('div');
    hud.id = 'polytrack-power-hud';
    hud.style.cssText = `
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;
      pointer-events: none;
      font-family: forced_square, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    `;
    document.body.appendChild(hud);
    powerState.hudEl = hud;

    // Fullscreen FX overlay for Nitro speed lines and impact flashes
    if (!powerState.fxOverlayEl || !document.body.contains(powerState.fxOverlayEl)) {
      const fx = document.createElement('div');
      fx.id = 'polytrack-fx-overlay';
      fx.style.cssText = `
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 900;
        transition: opacity 0.2s ease;
        opacity: 0;
      `;
      document.body.appendChild(fx);
      powerState.fxOverlayEl = fx;
    }
  }

  function updatePower(carInstance, dt, THREE, l, be, te, ie, xe, ye) {
    if (ie && !(0, l.gn)(carInstance, ie, "f")) return;

    const vType = window._selectedVehicleType || getSelectedVehicleType();
    
    // Maintain wheel visibility in race
    if (xe) {
      applyWheelVisibility(carInstance, l, xe, ye, vType);
    }

    const state = (0, l.gn)(carInstance, te, "f");
    if (!state || !state.hasStarted || state.finishFrames != null) {
      if (powerState.hudEl) powerState.hudEl.style.opacity = '0';
      if (powerState.fxOverlayEl) powerState.fxOverlayEl.style.opacity = '0';
      return;
    }

    setupHUD();
    powerState.hudEl.style.opacity = '1';

    // Check if wheels touch ground
    const contacts = state.wheelContact || [];
    const isGrounded = contacts.some(c => c != null && c !== false);

    // --- 1. AVION: GLIDER ABILITY ---
    if (vType === 'avion') {
      if (!isGrounded) {
        powerState.airborneFrames++;
        if (powerState.airborneFrames > 8 && powerState.glideRemaining > 0) {
          powerState.isGliding = true;
          powerState.glideRemaining = Math.max(0, powerState.glideRemaining - dt);

          if (state.position && state.position.y !== undefined) {
            const liftRate = 14.5 * (powerState.glideRemaining / powerState.maxGlide);
            state.position.y += liftRate * dt;

            const forwardX = -Math.sin(state.quaternion.y * 2);
            const forwardZ = -Math.cos(state.quaternion.y * 2);
            state.position.x += forwardX * 3.8 * dt;
            state.position.z += forwardZ * 3.8 * dt;
          }
        }
      } else {
        powerState.airborneFrames = 0;
        powerState.isGliding = false;
        powerState.glideRemaining = powerState.maxGlide;
      }

      const pct = Math.round((powerState.glideRemaining / powerState.maxGlide) * 100);
      const isGliding = powerState.isGliding;

      if (powerState.fxOverlayEl) {
        if (isGliding) {
          powerState.fxOverlayEl.style.background = 'radial-gradient(circle, transparent 70%, rgba(16, 185, 129, 0.15) 100%)';
          powerState.fxOverlayEl.style.opacity = '1';
        } else {
          powerState.fxOverlayEl.style.opacity = '0';
        }
      }

      powerState.hudEl.innerHTML = `
        <div style="background: rgba(8, 18, 14, 0.90); backdrop-filter: blur(12px); border: 1.5px solid ${isGliding ? '#34d399' : '#10b981'}; border-radius: 10px; padding: 7px 16px; display: flex; align-items: center; gap: 12px; box-shadow: 0 8px 24px ${isGliding ? 'rgba(52,211,153,0.5)' : 'rgba(16,185,129,0.3)'}; min-width: 280px;">
          <div style="font-size: 24px; filter: drop-shadow(0 0 8px #34d399);">✈️</div>
          <div style="display: flex; flex-direction: column; gap: 4px; flex-grow: 1;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <span style="font-size: 13px; font-weight: 800; letter-spacing: 0.5px; color: ${isGliding ? '#6ee7b7' : '#a7f3d0'};">
                ${isGliding ? '🚀 VOL PLANÉ ACTIF (PORTANCE MAX)' : (isGrounded ? '✈️ TRAIN TRICYCLE AU SOL • PRÊT' : 'RECHARGE PORTANCE AU SOL')}
              </span>
              <span style="font-size: 13px; font-weight: 900; color: #34d399;">${powerState.glideRemaining.toFixed(1)}s</span>
            </div>
            <div style="width: 100%; height: 7px; background: rgba(255,255,255,0.12); border-radius: 999px; overflow: hidden; position: relative;">
              <div style="width: ${pct}%; height: 100%; background: linear-gradient(90deg, #059669, #10b981, #34d399); transition: width 0.08s linear;"></div>
            </div>
          </div>
        </div>
      `;
    }

    // --- 2. VOITURE: TURBO NITRO BOOST ---
    else if (vType === 'voiture') {
      const controls = carInstance.getControls ? carInstance.getControls() : {};
      const wantsNitro = powerState.nitroKeyHeld || (controls.up && state.speedKmh > 190);

      if (wantsNitro && powerState.nitroFuel > 4) {
        powerState.isNitroBoosting = true;
        powerState.nitroFuel = Math.max(0, powerState.nitroFuel - 36 * dt);

        const speedBoost = 42; // +42 km/h boost
        state.speedKmh = Math.min(325, state.speedKmh + speedBoost * dt);

        if (state.position) {
          const q = state.quaternion || { y: 0, w: 1 };
          const forwardX = -2 * (q.x * q.z + q.w * q.y);
          const forwardZ = 1 - 2 * (q.x * q.x + q.y * q.y);
          state.position.x += forwardX * 9.2 * dt;
          state.position.z += forwardZ * 9.2 * dt;
        }

        if (powerState.fxOverlayEl) {
          powerState.fxOverlayEl.style.background = 'radial-gradient(circle, transparent 65%, rgba(56, 189, 248, 0.25) 90%, rgba(37, 99, 235, 0.45) 100%)';
          powerState.fxOverlayEl.style.opacity = '1';
        }
      } else {
        powerState.isNitroBoosting = false;
        powerState.nitroFuel = Math.min(powerState.maxNitro, powerState.nitroFuel + 20 * dt);
        if (powerState.fxOverlayEl) {
          powerState.fxOverlayEl.style.opacity = '0';
        }
      }

      const pct = Math.round((powerState.nitroFuel / powerState.maxNitro) * 100);
      const isBoosting = powerState.isNitroBoosting;

      powerState.hudEl.innerHTML = `
        <div style="background: rgba(10, 18, 32, 0.90); backdrop-filter: blur(12px); border: 1.5px solid ${isBoosting ? '#38bdf8' : '#2563eb'}; border-radius: 10px; padding: 7px 16px; display: flex; align-items: center; gap: 12px; box-shadow: 0 8px 24px ${isBoosting ? 'rgba(56,189,248,0.6)' : 'rgba(37,99,235,0.3)'}; min-width: 280px;">
          <div style="font-size: 24px; filter: drop-shadow(0 0 8px #38bdf8);">⚡</div>
          <div style="display: flex; flex-direction: column; gap: 4px; flex-grow: 1;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <span style="font-size: 13px; font-weight: 800; letter-spacing: 0.5px; color: ${isBoosting ? '#7dd3fc' : '#93c5fd'};">
                ${isBoosting ? '🔥 TURBO NITRO BOOST ACTIF (+40 KM/H)' : 'NITRO BOOST [ESPACE / SHIFT]'}
              </span>
              <span style="font-size: 13px; font-weight: 900; color: #38bdf8;">${pct}%</span>
            </div>
            <div style="width: 100%; height: 7px; background: rgba(255,255,255,0.12); border-radius: 999px; overflow: hidden; position: relative;">
              <div style="width: ${pct}%; height: 100%; background: linear-gradient(90deg, #1d4ed8, #2563eb, #38bdf8, #67e8f9); transition: width 0.08s linear;"></div>
            </div>
          </div>
        </div>
      `;
    }

    // --- 3. CAMIONNETTE: BLINDAGE & SUPER GRIP ---
    else if (vType === 'camionnette') {
      if (!isGrounded) {
        powerState.airborneFrames++;
        if (powerState.airborneFrames > 12) powerState.slamCharged = true;
      } else {
        if (powerState.slamCharged) {
          powerState.slamCharged = false;
          state.speedKmh = Math.min(285, state.speedKmh + 18);
          powerState.slamTriggered = true;
          if (powerState.fxOverlayEl) {
            powerState.fxOverlayEl.style.background = 'radial-gradient(circle, transparent 60%, rgba(245, 158, 11, 0.35) 100%)';
            powerState.fxOverlayEl.style.opacity = '1';
            setTimeout(() => { if (powerState.fxOverlayEl) powerState.fxOverlayEl.style.opacity = '0'; }, 300);
          }
          setTimeout(() => { powerState.slamTriggered = false; }, 1400);
        }
        powerState.airborneFrames = 0;
      }

      if (state.angularVelocity) {
        state.angularVelocity.x *= 0.82;
        state.angularVelocity.z *= 0.82;
      }

      powerState.hudEl.innerHTML = `
        <div style="background: rgba(24, 16, 6, 0.90); backdrop-filter: blur(12px); border: 1.5px solid ${powerState.slamTriggered ? '#f59e0b' : '#d97706'}; border-radius: 10px; padding: 7px 16px; display: flex; align-items: center; gap: 12px; box-shadow: 0 8px 24px rgba(245,158,11,0.35); min-width: 280px;">
          <div style="font-size: 24px; filter: drop-shadow(0 0 8px #f59e0b);">🛡️</div>
          <div style="display: flex; flex-direction: column; gap: 2px;">
            <div style="font-size: 13px; font-weight: 800; letter-spacing: 0.5px; color: ${powerState.slamTriggered ? '#fef08a' : '#fde68a'};">
              ${powerState.slamTriggered ? '💥 GROUND SLAM ABSORBÉ ! (+18 KM/H)' : (powerState.slamCharged ? '⚡ SLAM CHARGÉ... PRÊT À L\'IMPACT !' : 'BLINDAGE LOURD : SUPER GRIP')}
            </div>
            <div style="font-size: 11px; color: #f59e0b; opacity: 0.95;">
              ${powerState.slamCharged ? 'Impact imminent avec propulsion au sol' : 'Adhérence maximale & stabilité anti tête-à-queue'}
            </div>
          </div>
        </div>
      `;
    }

    // --- 4. FORMULE 1 ---
    else {
      powerState.hudEl.innerHTML = `
        <div style="background: rgba(24, 8, 12, 0.90); backdrop-filter: blur(12px); border: 1.5px solid #e11d48; border-radius: 10px; padding: 7px 16px; display: flex; align-items: center; gap: 12px; box-shadow: 0 8px 24px rgba(225,29,72,0.35); min-width: 280px;">
          <div style="font-size: 24px; filter: drop-shadow(0 0 8px #fb7185);">🏎️</div>
          <div style="display: flex; flex-direction: column; gap: 2px;">
            <div style="font-size: 13px; font-weight: 800; letter-spacing: 0.5px; color: #fecdd3;">
              FORMULE 1 • APPUI AÉRODYNAMIQUE DRS
            </div>
            <div style="font-size: 11px; color: #f43f5e; opacity: 0.95;">
              Vitesse de pointe chirurgicale & tenue en virage
            </div>
          </div>
        </div>
      `;
    }
  }

  function disposePower() {
    if (powerState.hudEl && powerState.hudEl.parentNode) {
      powerState.hudEl.parentNode.removeChild(powerState.hudEl);
      powerState.hudEl = null;
    }
    if (powerState.fxOverlayEl && powerState.fxOverlayEl.parentNode) {
      powerState.fxOverlayEl.parentNode.removeChild(powerState.fxOverlayEl);
      powerState.fxOverlayEl = null;
    }
    powerState.isGliding = false;
    powerState.isNitroBoosting = false;
  }

  // --- 6. GARAGE UI ENHANCEMENTS & SHOWROOM STYLING ---
  function injectGlobalStyles() {
    if (document.getElementById('polytrack-enhanced-ui-styles')) return;
    const style = document.createElement('style');
    style.id = 'polytrack-enhanced-ui-styles';
    style.textContent = `
      /* Enhanced Garage & UI Styles */
      .vehicle-tab-btn {
        position: relative;
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(37, 99, 235, 0.25) 100%) !important;
        border: 1px solid rgba(96, 165, 250, 0.4) !important;
        transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
      }
      .vehicle-tab-btn:hover {
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(37, 99, 235, 0.4) 100%) !important;
        border-color: rgba(147, 197, 253, 0.7) !important;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
      }
      .vehicle-tab-btn.selected {
        background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%) !important;
        border-color: #93c5fd !important;
        color: #fff !important;
        box-shadow: 0 0 15px rgba(59, 130, 246, 0.5) !important;
      }
      .vehicle-tab-btn .tab-badge-new {
        position: absolute;
        top: -4px;
        right: -4px;
        background: #ef4444;
        color: #fff;
        font-size: 8px;
        font-weight: 900;
        padding: 1px 4px;
        border-radius: 4px;
        letter-spacing: 0.5px;
        box-shadow: 0 2px 5px rgba(239, 68, 68, 0.5);
      }
      .vehicle-options-panel::-webkit-scrollbar {
        width: 5px;
      }
      .vehicle-options-panel::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.2);
      }
      .vehicle-options-panel::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 4px;
      }
      .vehicle-options-panel::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.4);
      }
      @keyframes pulseGlow {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.04); opacity: 0.85; }
      }
    `;
    document.head.appendChild(style);
  }

  function createGarageVehiclePanel(soundEngine, uiContainer) {
    injectGlobalStyles();

    const panel = document.createElement('div');
    panel.className = 'panel options-panel hidden vehicle-options-panel';
    panel.style.cssText = `
      display: flex;
      flex-direction: column;
      padding: 14px;
      gap: 12px;
      width: 330px;
      box-sizing: border-box;
      position: absolute;
      right: var(--safe-area-right);
      bottom: 64px;
      height: calc(100% - 128px);
      background: linear-gradient(180deg, rgba(13, 19, 33, 0.94) 0%, rgba(9, 14, 26, 0.96) 100%);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-left: 1px solid rgba(255, 255, 255, 0.12);
      box-shadow: -10px 0 35px rgba(0, 0, 0, 0.6), inset 1px 0 0 rgba(255, 255, 255, 0.08);
      overflow-y: auto;
      pointer-events: auto;
      font-family: inherit;
    `;

    const header = document.createElement('div');
    header.style.cssText = 'padding: 4px 0 12px 0; border-bottom: 1px solid rgba(255,255,255,0.12); margin-bottom: 2px;';
    header.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="font-size: 18px; font-weight: 900; color: #fff; text-transform: uppercase; letter-spacing: 0.8px;">
          SÉLECTION DU BOLIDE
        </div>
        <span style="font-size: 10px; background: rgba(59,130,246,0.2); color: #60a5fa; font-weight: bold; padding: 2px 7px; border-radius: 999px; border: 1px solid rgba(59,130,246,0.4);">
          4 MODÈLES
        </span>
      </div>
      <div style="font-size: 11px; color: rgba(255,255,255,0.65); margin-top: 4px; line-height: 1.35;">
        Chaque véhicule dispose d'un style 3D unique et d'un super-pouvoir exclusif en piste !
      </div>
    `;
    panel.appendChild(header);

    const currentSelected = getSelectedVehicleType();

    Object.values(VEHICLES).forEach(v => {
      const isSelected = v.id === currentSelected;
      const card = document.createElement('button');
      card.className = 'vehicle-card-btn' + (isSelected ? ' selected' : '');
      card.dataset.vehicleId = v.id;
      card.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 12px 14px;
        background: ${isSelected ? 'rgba(255, 255, 255, 0.10)' : 'rgba(255, 255, 255, 0.03)'};
        border: 2px solid ${isSelected ? v.color : 'rgba(255, 255, 255, 0.08)'};
        border-radius: 10px;
        cursor: pointer;
        text-align: left;
        transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        position: relative;
        font-family: inherit;
        box-shadow: ${isSelected ? `0 4px 20px ${v.color}40` : 'none'};
      `;

      card.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="font-size: 26px; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.06); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
              ${v.icon}
            </div>
            <div>
              <div style="font-size: 15px; font-weight: 800; color: #fff; letter-spacing: 0.3px;">${v.name}</div>
              <div style="font-size: 10px; color: ${v.color}; font-weight: bold; text-transform: uppercase; letter-spacing: 0.4px;">${v.tag}</div>
            </div>
          </div>
          <span class="active-badge" style="display: ${isSelected ? 'inline-block' : 'none'}; font-size: 10px; background: ${v.color}; color: #000; font-weight: 900; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 0 10px ${v.color}80;">
            ACTIF
          </span>
        </div>

        <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.07); border-radius: 8px; padding: 8px 10px; margin-top: 2px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 3px;">
            <span style="font-size: 12px; font-weight: 800; color: ${v.color};">${v.powerName}</span>
            <span style="font-size: 9px; background: rgba(255,255,255,0.1); color: #e2e8f0; padding: 1px 5px; border-radius: 3px; font-weight: bold;">${v.powerKey}</span>
          </div>
          <div style="font-size: 11px; color: rgba(255,255,255,0.72); line-height: 1.35;">
            ${v.powerDesc}
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 5px; margin-top: 2px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.08); font-size: 10px;">
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
            <span style="color: rgba(255,255,255,0.55); width: 68px;">Vitesse Max</span>
            <div style="flex-grow: 1; height: 5px; background: rgba(255,255,255,0.1); border-radius: 999px; overflow: hidden;">
              <div style="width: ${v.stats.speed}%; height: 100%; background: linear-gradient(90deg, #3b82f6, #60a5fa);"></div>
            </div>
            <span style="color: #f1f5f9; font-weight: bold; width: 72px; text-align: right;">${v.statLabels.speed}</span>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
            <span style="color: rgba(255,255,255,0.55); width: 68px;">Accélération</span>
            <div style="flex-grow: 1; height: 5px; background: rgba(255,255,255,0.1); border-radius: 999px; overflow: hidden;">
              <div style="width: ${v.stats.accel}%; height: 100%; background: linear-gradient(90deg, #10b981, #34d399);"></div>
            </div>
            <span style="color: #f1f5f9; font-weight: bold; width: 72px; text-align: right;">${v.statLabels.accel}</span>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
            <span style="color: rgba(255,255,255,0.55); width: 68px;">Adhérence</span>
            <div style="flex-grow: 1; height: 5px; background: rgba(255,255,255,0.1); border-radius: 999px; overflow: hidden;">
              <div style="width: ${v.stats.grip}%; height: 100%; background: linear-gradient(90deg, #f59e0b, #fbbf24);"></div>
            </div>
            <span style="color: #f1f5f9; font-weight: bold; width: 72px; text-align: right;">${v.statLabels.grip}</span>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
            <span style="color: rgba(255,255,255,0.55); width: 68px;">Portance Aéro</span>
            <div style="flex-grow: 1; height: 5px; background: rgba(255,255,255,0.1); border-radius: 999px; overflow: hidden;">
              <div style="width: ${v.stats.aero}%; height: 100%; background: linear-gradient(90deg, #8b5cf6, #a78bfa);"></div>
            </div>
            <span style="color: #f1f5f9; font-weight: bold; width: 72px; text-align: right;">${v.statLabels.aero}</span>
          </div>
        </div>
      `;

      card.addEventListener('mouseenter', () => {
        AudioFX.playHover();
        if (!card.classList.contains('selected')) {
          card.style.background = 'rgba(255, 255, 255, 0.08)';
          card.style.borderColor = 'rgba(255, 255, 255, 0.3)';
          card.style.transform = 'translateY(-2px)';
        }
      });
      card.addEventListener('mouseleave', () => {
        if (!card.classList.contains('selected')) {
          card.style.background = 'rgba(255, 255, 255, 0.03)';
          card.style.borderColor = 'rgba(255, 255, 255, 0.08)';
          card.style.transform = 'translateY(0)';
        }
      });

      card.addEventListener('click', () => {
        AudioFX.playSelect();
        if (soundEngine && soundEngine.playUIClick) soundEngine.playUIClick();
        setSelectedVehicleType(v.id);
        refreshGaragePanelSelection();
        if (window._garageCarInstance && window._garageCarInstance.setVehicleType) {
          window._garageCarInstance.setVehicleType(v.id);
        }
        if (window._currentCarInstance && window._currentCarInstance.setVehicleType) {
          window._currentCarInstance.setVehicleType(v.id);
        }
      });

      panel.appendChild(card);
    });

    if (uiContainer) uiContainer.appendChild(panel);
    return panel;
  }

  function refreshGaragePanelSelection() {
    const current = getSelectedVehicleType();
    const panel = document.querySelector('.vehicle-options-panel');
    if (!panel) return;
    panel.querySelectorAll('.vehicle-card-btn').forEach(b => {
      const vId = b.dataset.vehicleId;
      const isThis = vId === current;
      const v = VEHICLES[vId] || {};
      b.classList.toggle('selected', isThis);
      b.style.borderColor = isThis ? (v.color || '#3b82f6') : 'rgba(255, 255, 255, 0.08)';
      b.style.background = isThis ? 'rgba(255, 255, 255, 0.10)' : 'rgba(255, 255, 255, 0.03)';
      b.style.transform = isThis ? 'scale(1.01)' : 'scale(1)';
      b.style.boxShadow = isThis ? `0 4px 20px ${v.color}40` : 'none';
      const badge = b.querySelector('.active-badge');
      if (badge) badge.style.display = isThis ? 'inline-block' : 'none';
    });

    // Make sure garage car matrix & wheels are updated
    if (window._garageCarInstance && typeof window._garageCarInstance.update === 'function') {
      window._garageCarInstance.update(0);
    }
  }

  // --- 7. AUTO-GARAGE DOM WATCHER & TAB INJECTOR ---
  function setupGarageWatcher() {
    function checkGarageUI() {
      const panelUI = document.querySelector('.customization-panel-ui');
      if (!panelUI) return;

      const tabBar = panelUI.querySelector('.tab-bar');
      if (!tabBar) return;

      let vPanel = panelUI.querySelector('.vehicle-options-panel');
      if (!vPanel) {
        vPanel = createGarageVehiclePanel(null, panelUI);
      }

      let vehicleBtn = tabBar.querySelector('.vehicle-tab-btn');
      if (!vehicleBtn) {
        const existingButtons = Array.from(tabBar.querySelectorAll('.button'));
        const found = existingButtons.find(b => b.textContent && (b.textContent.includes('Véhicule') || b.textContent.includes('Skins')));
        if (found) {
          vehicleBtn = found;
          vehicleBtn.classList.add('vehicle-tab-btn');
        } else {
          vehicleBtn = document.createElement('button');
          vehicleBtn.className = 'button vehicle-tab-btn';
          vehicleBtn.type = 'button';
          vehicleBtn.innerHTML = 'Skins / Véhicules <span class="tab-badge-new">NEW</span>';
          tabBar.appendChild(vehicleBtn);
        }
      }

      if (vehicleBtn && !vehicleBtn.dataset.wired) {
        vehicleBtn.dataset.wired = 'true';

        vehicleBtn.addEventListener('click', (e) => {
          e.preventDefault();
          AudioFX.playSelect();
          tabBar.querySelectorAll('.button').forEach(b => b.classList.remove('selected'));
          vehicleBtn.classList.add('selected');

          Array.from(panelUI.children).forEach(child => {
            if (child !== tabBar && child.classList) {
              child.classList.add('hidden');
            }
          });

          vPanel.classList.remove('hidden');
          vPanel.style.display = 'flex';
          refreshGaragePanelSelection();

          if (window._garageCarInstance && typeof window._garageCarInstance.update === 'function') {
            window._garageCarInstance.update(0);
          }
        });

        tabBar.querySelectorAll('.button').forEach(b => {
          if (b !== vehicleBtn && !b.dataset.vehicleWired) {
            b.dataset.vehicleWired = 'true';
            b.addEventListener('click', () => {
              if (vehicleBtn) vehicleBtn.classList.remove('selected');
              if (vPanel) {
                vPanel.classList.add('hidden');
                vPanel.style.display = 'none';
              }
            });
          }
        });
      }
    }

    checkGarageUI();
    setInterval(checkGarageUI, 350);

    if (typeof MutationObserver !== 'undefined' && document.body) {
      const observer = new MutationObserver(checkGarageUI);
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }

  // --- 8. PUBLIC API ---
  window.PolyTrackVehicles = {
    VEHICLES,
    getSelectedVehicleType,
    setSelectedVehicleType,
    createVehicleChassis,
    changeVehicleChassis,
    applyWheelVisibility,
    updatePower,
    disposePower,
    buildSportsCarGeometry,
    buildVanGeometry,
    buildPlaneGeometry,
    createGarageVehiclePanel,
    refreshGaragePanelSelection,
    setupGarageWatcher
  };

  window._selectedVehicleType = getSelectedVehicleType();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupGarageWatcher);
  } else {
    setupGarageWatcher();
  }
  console.log('[PolyTrack] Enhanced Vehicle Models & Powers Engine Loaded. Active Vehicle:', window._selectedVehicleType);
})();
