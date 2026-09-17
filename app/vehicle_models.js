/**
 * PolyTrack Vehicle Models, Superpowers & Customization Engine
 * Developed for PolyTrack Standalone
 * 
 * Vehicles:
 * - f1: Formule 1 (Original) - Vitesse Pure & Appui Maximal
 * - voiture: Sportive GT - ⚡ Turbo Nitro Boost (+35 km/h avec [Espace] ou [Shift])
 * - camionnette: Le Mastodonte (Van/Pick-up) - 🛡️ Blindage Lourd & Super Grip (Ground Slam)
 * - avion: Aéroplane (Planeur) - ✈️ Vol Plané Aérodynamique (3 roues: 1 avant, 2 arrière)
 */
(function() {
  'use strict';

  // --- 1. DENSE SOLID GEOMETRY BUILDER (NO HOLES / NO SEE-THROUGH SURFACES) ---
  function createSolidBuilder(THREE, B) {
    // 4 Material Buckets:
    // 0: Main (Primary vehicle paint)
    // 1: AirIntake (Dark intake grilles, canopy, windows, tires)
    // 2: Metal (Chrome frame, splitters, landing gear strut, rims)
    // 3: BrakeLight (Rear lights, jet thruster glow)
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

    // Complete 6-faced solid box with strict outward normals
    function addBox(x1, y1, z1, x2, y2, z2, matIdx) {
      const minX = Math.min(x1, x2), maxX = Math.max(x1, x2);
      const minY = Math.min(y1, y2), maxY = Math.max(y1, y2);
      const minZ = Math.min(z1, z2), maxZ = Math.max(z1, z2);

      // Front (+Z)
      addQuad([minX, minY, maxZ], [maxX, minY, maxZ], [maxX, maxY, maxZ], [minX, maxY, maxZ], [0, 0, 1], matIdx);
      // Back (-Z)
      addQuad([maxX, minY, minZ], [minX, minY, minZ], [minX, maxY, minZ], [maxX, maxY, minZ], [0, 0, -1], matIdx);
      // Top (+Y)
      addQuad([minX, maxY, maxZ], [maxX, maxY, maxZ], [maxX, maxY, minZ], [minX, maxY, minZ], [0, 1, 0], matIdx);
      // Bottom (-Y)
      addQuad([minX, minY, minZ], [maxX, minY, minZ], [maxX, minY, maxZ], [minX, minY, maxZ], [0, -1, 0], matIdx);
      // Right (+X)
      addQuad([maxX, minY, maxZ], [maxX, minY, minZ], [maxX, maxY, minZ], [maxX, maxY, maxZ], [1, 0, 0], matIdx);
      // Left (-X)
      addQuad([minX, minY, minZ], [minX, minY, maxZ], [minX, maxY, maxZ], [minX, maxY, minZ], [-1, 0, 0], matIdx);
    }

    // Complete 6-faced sloped box (e.g. hood, windshield, fastback)
    function addSlopedBox(minX, maxX, minY, maxYFront, maxYBack, minZ, maxZ, matIdx) {
      // Bottom (-Y)
      addQuad([minX, minY, minZ], [maxX, minY, minZ], [maxX, minY, maxZ], [minX, minY, maxZ], [0, -1, 0], matIdx);
      // Front (+Z)
      addQuad([minX, minY, maxZ], [maxX, minY, maxZ], [maxX, maxYFront, maxZ], [minX, maxYFront, maxZ], [0, 0, 1], matIdx);
      // Back (-Z)
      addQuad([maxX, minY, minZ], [minX, minY, minZ], [minX, maxYBack, minZ], [maxX, maxYBack, minZ], [0, 0, -1], matIdx);
      // Top (+Y Sloped)
      const dy = maxYBack - maxYFront;
      const dz = maxZ - minZ;
      const len = Math.hypot(dy, dz) || 1;
      addQuad([minX, maxYFront, maxZ], [maxX, maxYFront, maxZ], [maxX, maxYBack, minZ], [minX, maxYBack, minZ], [0, dz / len, dy / len], matIdx);
      // Right (+X)
      addQuad([maxX, minY, maxZ], [maxX, minY, minZ], [maxX, maxYBack, minZ], [maxX, maxYFront, maxZ], [1, 0, 0], matIdx);
      // Left (-X)
      addQuad([minX, minY, minZ], [minX, minY, maxZ], [minX, maxYFront, maxZ], [minX, maxYBack, minZ], [-1, 0, 0], matIdx);
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

      // Group triangles cleanly into contiguous ranges per material index
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

    return { addBox, addSlopedBox, build };
  }

  // --- 2. 3D VEHICLE GEOMETRIES ---

  // 1. Sportive GT (Voiture)
  function buildSportsCarGeometry(THREE, B) {
    const b = createSolidBuilder(THREE, B);
    // Full underbody belly pan (Metal)
    b.addBox(-0.68, -0.32, -1.85, 0.68, -0.22, 1.60, 2);
    // Front splitter & bumper
    b.addBox(-0.66, -0.28, 1.55, 0.66, -0.16, 1.72, 2);
    b.addBox(-0.46, -0.22, 1.62, 0.46, -0.06, 1.68, 1);
    b.addBox(-0.65, -0.16, 1.48, 0.65, 0.02, 1.66, 0);
    // Headlights
    b.addBox(-0.62, -0.06, 1.52, -0.42, 0.04, 1.64, 2);
    b.addBox(0.42, -0.06, 1.52, 0.62, 0.04, 1.64, 2);
    // Hood & scoop
    b.addSlopedBox(-0.48, 0.48, -0.20, 0.02, 0.12, 0.40, 1.52, 0);
    b.addBox(-0.25, 0.03, 0.70, 0.25, 0.06, 1.15, 1);
    // Front Fenders
    b.addBox(-0.68, -0.20, 0.40, -0.48, 0.08, 1.52, 0);
    b.addBox(0.48, -0.20, 0.40, 0.68, 0.08, 1.52, 0);
    // Cabin & Windshield
    b.addSlopedBox(-0.46, 0.46, 0.06, 0.12, 0.38, 0.05, 0.42, 1);
    b.addBox(-0.46, 0.34, -0.65, 0.46, 0.40, 0.06, 0);
    b.addBox(-0.68, -0.22, -0.65, -0.46, 0.12, 0.40, 0);
    b.addBox(0.46, -0.22, -0.65, 0.68, 0.12, 0.40, 0);
    b.addBox(-0.48, 0.12, -0.60, -0.45, 0.34, 0.05, 1);
    b.addBox(0.45, 0.12, -0.60, 0.48, 0.34, 0.05, 1);
    b.addSlopedBox(-0.46, 0.46, 0.08, 0.38, 0.12, -1.15, -0.65, 1);
    // Rear deck & bumper
    b.addBox(-0.50, -0.10, -1.65, 0.50, 0.10, -1.15, 0);
    b.addBox(-0.68, -0.22, -1.70, -0.50, 0.10, -0.65, 0);
    b.addBox(0.50, -0.22, -1.70, 0.68, 0.10, -0.65, 0);
    b.addBox(-0.66, -0.25, -1.82, 0.66, -0.02, -1.65, 0);
    b.addBox(-0.62, -0.32, -1.88, 0.62, -0.20, -1.65, 2);
    b.addBox(-0.60, -0.05, -1.84, -0.35, 0.05, -1.78, 3);
    b.addBox(0.35, -0.05, -1.84, 0.60, 0.05, -1.78, 3);
    // GT Wing
    b.addBox(-0.66, 0.24, -1.86, 0.66, 0.28, -1.64, 2);
    b.addBox(-0.42, 0.08, -1.76, -0.38, 0.25, -1.68, 2);
    b.addBox(0.38, 0.08, -1.76, 0.42, 0.25, -1.68, 2);
    b.addBox(-0.68, 0.20, -1.88, -0.65, 0.32, -1.62, 2);
    b.addBox(0.65, 0.20, -1.88, 0.68, 0.32, -1.62, 2);
    return b.build();
  }

  // 2. Le Mastodonte (Camionnette)
  function buildVanGeometry(THREE, B) {
    const b = createSolidBuilder(THREE, B);
    // Heavy underbody belly plate (Metal)
    b.addBox(-0.70, -0.32, -1.85, 0.70, -0.20, 1.62, 2);
    // Heavy steel bullbar & grille
    b.addBox(-0.66, -0.28, 1.62, 0.66, 0.15, 1.76, 2);
    b.addBox(-0.52, -0.16, 1.56, 0.52, 0.16, 1.64, 1);
    b.addBox(-0.64, -0.02, 1.57, -0.48, 0.14, 1.63, 2);
    b.addBox(0.48, -0.02, 1.57, 0.64, 0.14, 1.63, 2);
    // Hood & Fenders
    b.addBox(-0.52, -0.05, 0.48, 0.52, 0.20, 1.58, 0);
    b.addBox(-0.72, -0.22, 0.48, -0.50, 0.18, 1.58, 0);
    b.addBox(0.50, -0.22, 0.48, 0.72, 0.18, 1.58, 0);
    // High Truck Cabin
    b.addSlopedBox(-0.52, 0.52, 0.16, 0.20, 0.50, 0.20, 0.48, 1);
    b.addBox(-0.54, 0.48, -0.68, 0.54, 0.55, 0.22, 0);
    b.addBox(-0.72, -0.22, -0.68, -0.50, 0.24, 0.48, 0);
    b.addBox(0.50, -0.22, -0.68, 0.72, 0.24, 0.48, 0);
    b.addBox(-0.55, 0.22, -0.62, -0.50, 0.48, 0.20, 1);
    b.addBox(0.50, 0.22, -0.62, 0.55, 0.48, 0.20, 1);
    b.addBox(-0.50, 0.22, -0.70, 0.50, 0.48, -0.66, 1);
    // Enclosed Van Cargo
    b.addBox(-0.72, -0.22, -1.82, -0.50, 0.32, -0.68, 0);
    b.addBox(0.50, -0.22, -1.82, 0.72, 0.32, -0.68, 0);
    b.addBox(-0.54, 0.48, -1.80, 0.54, 0.54, -0.68, 0);
    b.addBox(-0.52, -0.20, -1.80, 0.52, 0.48, -0.68, 0);
    b.addBox(-0.68, -0.22, -1.86, 0.68, 0.32, -1.78, 0);
    b.addBox(-0.70, -0.32, -1.92, 0.70, -0.18, -1.80, 2);
    b.addBox(-0.68, -0.05, -1.87, -0.56, 0.25, -1.81, 3);
    b.addBox(0.56, -0.05, -1.87, 0.68, 0.25, -1.81, 3);
    // Roof Rack
    b.addBox(-0.56, 0.54, -1.65, 0.56, 0.60, 0.15, 2);
    return b.build();
  }

  // 3. Aéroplane / Planeur (Avion: 3 Roues - 1 avant centre, 2 arrière)
  function buildPlaneGeometry(THREE, B) {
    const b = createSolidBuilder(THREE, B);
    // Fuselage belly pan
    b.addBox(-0.40, -0.26, -1.75, 0.40, -0.15, 1.60, 2);
    // Pointed Nose cone
    b.addBox(-0.25, -0.22, 1.58, 0.25, 0.05, 1.95, 1);
    b.addBox(-0.38, -0.24, 0.85, 0.38, 0.14, 1.60, 0);
    // Cockpit Canopy
    b.addSlopedBox(-0.28, 0.28, 0.08, 0.12, 0.40, 0.35, 0.90, 1);
    b.addBox(-0.28, 0.36, -0.25, 0.28, 0.42, 0.38, 1);
    b.addSlopedBox(-0.28, 0.28, 0.08, 0.40, 0.14, -0.72, -0.22, 1);
    // Mid & Aft Fuselage
    b.addBox(-0.42, -0.24, -0.75, 0.42, 0.18, 0.88, 0);
    b.addBox(-0.34, -0.20, -1.75, 0.34, 0.14, -0.75, 0);
    // Swept Glider Wings
    b.addBox(-1.90, -0.15, -0.55, -0.38, -0.03, 0.35, 0);
    b.addBox(0.38, -0.15, -0.55, 1.90, -0.03, 0.35, 0);
    b.addBox(-1.90, -0.16, 0.32, -0.38, -0.02, 0.42, 2);
    b.addBox(0.38, -0.16, 0.32, 1.90, -0.02, 0.42, 2);
    b.addBox(-1.92, -0.15, -0.58, -1.86, 0.40, 0.15, 2);
    b.addBox(1.86, -0.15, -0.58, 1.92, 0.40, 0.15, 2);
    // Vertical Tailfin & Stabilizers
    b.addBox(-0.06, 0.12, -1.78, 0.06, 0.75, -1.05, 0);
    b.addBox(-0.07, 0.70, -1.78, 0.07, 0.78, -1.15, 2);
    b.addBox(-0.85, 0.02, -1.80, -0.15, 0.10, -1.30, 0);
    b.addBox(0.15, 0.02, -1.80, 0.85, 0.10, -1.30, 0);
    // Jet Thrusters
    b.addBox(-0.32, -0.22, -1.98, -0.10, 0.02, -1.60, 2);
    b.addBox(0.10, -0.22, -1.98, 0.32, 0.02, -1.60, 2);
    b.addBox(-0.30, -0.20, -2.00, -0.12, 0.00, -1.96, 3);
    b.addBox(0.12, -0.20, -2.00, 0.30, 0.00, -1.96, 3);

    // Front Nose Landing Gear & Wheel (3 Wheels Setup: 1 front center wheel, 2 rear wheels)
    b.addBox(-0.04, -0.38, 1.25, 0.04, -0.18, 1.45, 2); // Metal strut
    b.addBox(-0.08, -0.44, 1.25, 0.08, -0.24, 1.45, 2); // Central wheel rim
    b.addBox(-0.11, -0.46, 1.22, 0.11, -0.22, 1.48, 1); // Central tire

    return b.build();
  }

  // --- 3. VEHICLE REGISTRY ---
  const VEHICLES = {
    f1: {
      id: 'f1',
      name: 'Formule 1 (F1)',
      subtitle: 'Vitesse Pure & Appui Maximal',
      icon: '🏎️',
      color: '#e11d48',
      powerName: 'Appui Aérodynamique',
      powerDesc: 'Vitesse de pointe exceptionnelle et adhérence accrue sur l\'asphalte.',
      speedStat: '★★★★★',
      accelStat: '★★★★☆',
      gripStat:  '★★★★☆',
      glidStat:  '★☆☆☆☆'
    },
    voiture: {
      id: 'voiture',
      name: 'Sportive GT',
      subtitle: 'Turbo Nitro Boost & Dérapage',
      icon: '🚗',
      color: '#3b82f6',
      powerName: '⚡ Turbo Nitro Boost',
      powerDesc: 'Boost explosif (+35 km/h) avec [Espace] ou [Shift] ! Se recharge en roulant.',
      speedStat: '★★★★☆',
      accelStat: '★★★★★',
      gripStat:  '★★★★☆',
      glidStat:  '★★☆☆☆'
    },
    camionnette: {
      id: 'camionnette',
      name: 'Le Mastodonte',
      subtitle: 'Pick-up / Blindage Lourd',
      icon: '🚐',
      color: '#f59e0b',
      powerName: '🛡️ Blindage & Super Grip',
      powerDesc: 'Châssis lourd insensible aux tête-à-queue et atterrissage Ground Slam amorti.',
      speedStat: '★★★☆☆',
      accelStat: '★★★★★',
      gripStat:  '★★★★★',
      glidStat:  '★☆☆☆☆'
    },
    avion: {
      id: 'avion',
      name: 'Aéroplane (Planeur)',
      subtitle: 'Tricycle 3 Roues & Vol Plané',
      icon: '✈️',
      color: '#10b981',
      powerName: '✈️ Vol Plané Aérodynamique',
      powerDesc: 'Plane dans les airs lors des grands sauts ! 3 roues (1 avant centre, 2 arrière).',
      speedStat: '★★★★☆',
      accelStat: '★★★☆☆',
      gripStat:  '★★★☆☆',
      glidStat:  '★★★★★'
    }
  };

  function getSelectedVehicleType() {
    try {
      return localStorage.getItem('polytrack_vehicle_type') || 'f1';
    } catch (e) {
      return 'f1';
    }
  }

  function setSelectedVehicleType(type) {
    if (!VEHICLES[type]) type = 'f1';
    try {
      localStorage.setItem('polytrack_vehicle_type', type);
    } catch (e) {}
    window._selectedVehicleType = type;
    window.dispatchEvent(new CustomEvent('polytrack_vehicle_changed', { detail: { vehicleType: type } }));
  }

  // --- 4. CHASSIS CREATION, WHEELS VISIBILITY & MORPHING ---
  function createVehicleChassis(B, THREE) {
    const vType = window._selectedVehicleType || getSelectedVehicleType();
    if (vType === 'f1' || !B || !B.models || !B.models.chassis) {
      return B.models.chassis.clone();
    }
    const baseChassis = B.models.chassis;
    const baseMats = Array.isArray(baseChassis.material) ? baseChassis.material : [baseChassis.material];
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

    const clonedMats = baseMats.map(m => {
      const c = m.clone();
      c.side = 2; // DoubleSide (THREE.DoubleSide)
      c.shadowSide = 2;
      c.transparent = false;
      c.depthWrite = true;
      c.depthTest = true;
      c.needsUpdate = true;
      return c;
    });

    const MeshClass = (THREE && (THREE.Mesh || THREE.eaF)) || baseChassis.constructor;
    const mesh = new MeshClass(geom, clonedMats);
    mesh.name = "Body_" + vType;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  }

  // Toggles 3-wheel tricycle setup for Airplane (1 front center, 2 rear) vs 4-wheel cars
  function applyWheelVisibility(carInstance, l, xe, ye, vType) {
    if (!carInstance) return;
    vType = vType || window._selectedVehicleType || getSelectedVehicleType();

    try {
      if (l && xe) {
        const wheels = (0, l.gn)(carInstance, xe, "f");
        if (wheels && Array.isArray(wheels) && wheels.length >= 4) {
          if (vType === 'avion') {
            wheels[0].visible = false; // Front Left wheel hidden
            wheels[1].visible = false; // Front Right wheel hidden
            wheels[2].visible = true;  // Rear Left wheel visible
            wheels[3].visible = true;  // Rear Right wheel visible
          } else {
            wheels[0].visible = true;
            wheels[1].visible = true;
            wheels[2].visible = true;
            wheels[3].visible = true;
          }
        }
      }

      if (l && ye) {
        const susp = (0, l.gn)(carInstance, ye, "f");
        if (susp) {
          susp.visible = (vType !== 'avion');
        }
      }
    } catch (e) {}

    // Fallback: iterate over carGroup children if available
    try {
      const carGroup = carInstance.carGroup || carInstance._carGroup || (carInstance.children && carInstance);
      if (carGroup && carGroup.children) {
        carGroup.children.forEach(child => {
          if (child && child.name && !child.name.startsWith('Body_')) {
            if (vType === 'avion') {
              if (child.position && child.position.z > 0.4) {
                child.visible = false;
              }
            } else {
              child.visible = true;
            }
          }
        });
      }
    } catch (e) {}
  }

  function changeVehicleChassis(carInstance, vType, THREE, l, B, be, me, D, Oe, we, xe, ye) {
    if (!carInstance || !THREE || !l || !B || !be || !me) return;
    setSelectedVehicleType(vType);
    const oldMesh = (0, l.gn)(carInstance, be, "f");
    const carGroup = (0, l.gn)(carInstance, me, "f");
    if (!oldMesh || !carGroup) return;

    carGroup.remove(oldMesh);
    const newMesh = createVehicleChassis(B, THREE);
    newMesh.matrixAutoUpdate = false;
    (0, l.GG)(carInstance, be, newMesh, "f");

    if (D && Oe) {
      (0, l.gn)(carInstance, D, "m", Oe).call(carInstance, newMesh);
    }

    if (we) {
      const exhaustMesh = (0, l.gn)(carInstance, we, "f");
      if (exhaustMesh) newMesh.add(exhaustMesh);
    }

    carGroup.add(newMesh);

    // Apply wheel and suspension visibility
    applyWheelVisibility(carInstance, l, xe, ye, vType);

    // Refresh colors on new mesh from car style
    try {
      const style = carInstance.getCarStyle && carInstance.getCarStyle();
      if (style) {
        newMesh.traverse(t => {
          if (t && t.material) {
            const mats = Array.isArray(t.material) ? t.material : [t.material];
            for (const m of mats) {
              if (m.name === "Main" && m.color) m.color.set(style.primaryColor);
              else if (m.name === "Metal" && m.color) m.color.set(style.frameColor);
              else if (m.name === "Rim" && m.color) m.color.set(style.rimsColor);
            }
          }
        });
      }
    } catch (e) {
      console.warn('[PolyTrack] Vehicle color refresh:', e);
    }

    console.log('[PolyTrack] Switched vehicle body to:', vType);
  }

  // --- 5. IN-GAME SUPERPOWERS & HUD SYSTEM ---
  const powerState = {
    // Avion: Glide
    isGliding: false,
    glideRemaining: 3.5,
    maxGlide: 3.5,
    airborneFrames: 0,
    
    // Voiture: Nitro
    nitroFuel: 100,
    maxNitro: 100,
    isNitroBoosting: false,
    nitroKeyHeld: false,

    // Camionnette: Stability & Slam
    slamCharged: false,
    slamTriggered: false,

    // Global
    hudEl: null
  };

  // Keyboard listener for Space and Shift (Nitro Boost)
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
      transition: opacity 0.2s ease;
    `;
    document.body.appendChild(hud);
    powerState.hudEl = hud;
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
            state.position.x += forwardX * 3.5 * dt;
            state.position.z += forwardZ * 3.5 * dt;
          }
        }
      } else {
        powerState.airborneFrames = 0;
        powerState.isGliding = false;
        powerState.glideRemaining = powerState.maxGlide;
      }

      const pct = Math.round((powerState.glideRemaining / powerState.maxGlide) * 100);
      const isGliding = powerState.isGliding;
      powerState.hudEl.innerHTML = `
        <div style="background: rgba(15, 23, 42, 0.85); border: 2px solid #10b981; border-radius: 8px; padding: 6px 14px; display: flex; align-items: center; gap: 10px; box-shadow: 0 4px 15px rgba(16,185,129,0.35);">
          <span style="font-size: 20px;">✈️</span>
          <div style="display: flex; flex-direction: column; gap: 3px;">
            <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: bold; color: #6ee7b7;">
              <span>${isGliding ? 'VOL PLANÉ ACTIF !' : (isGrounded ? 'PLANEUR PRÊT' : 'RECHARGE AU SOL')}</span>
              <span>${powerState.glideRemaining.toFixed(1)}s</span>
            </div>
            <div style="width: 140px; height: 8px; background: rgba(255,255,255,0.15); border-radius: 4px; overflow: hidden;">
              <div style="width: ${pct}%; height: 100%; background: linear-gradient(90deg, #10b981, #34d399); transition: width 0.1s linear;"></div>
            </div>
          </div>
        </div>
      `;
    }

    // --- 2. VOITURE: TURBO NITRO BOOST ---
    else if (vType === 'voiture') {
      const controls = carInstance.getControls ? carInstance.getControls() : {};
      const wantsNitro = powerState.nitroKeyHeld || (controls.up && state.speedKmh > 180);

      if (wantsNitro && powerState.nitroFuel > 5) {
        powerState.isNitroBoosting = true;
        powerState.nitroFuel = Math.max(0, powerState.nitroFuel - 38 * dt);

        const speedBoost = 40; // +40 km/h
        state.speedKmh = Math.min(320, state.speedKmh + speedBoost * dt);

        if (state.position) {
          const q = state.quaternion || { y: 0, w: 1 };
          const forwardX = -2 * (q.x * q.z + q.w * q.y);
          const forwardZ = 1 - 2 * (q.x * q.x + q.y * q.y);
          state.position.x += forwardX * 8.5 * dt;
          state.position.z += forwardZ * 8.5 * dt;
        }
      } else {
        powerState.isNitroBoosting = false;
        powerState.nitroFuel = Math.min(powerState.maxNitro, powerState.nitroFuel + 18 * dt);
      }

      const pct = Math.round((powerState.nitroFuel / powerState.maxNitro) * 100);
      const isBoosting = powerState.isNitroBoosting;
      powerState.hudEl.innerHTML = `
        <div style="background: rgba(15, 23, 42, 0.85); border: 2px solid ${isBoosting ? '#38bdf8' : '#2563eb'}; border-radius: 8px; padding: 6px 14px; display: flex; align-items: center; gap: 10px; box-shadow: 0 4px 15px ${isBoosting ? 'rgba(56,189,248,0.6)' : 'rgba(37,99,235,0.3)'};">
          <span style="font-size: 20px;">⚡</span>
          <div style="display: flex; flex-direction: column; gap: 3px;">
            <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: bold; color: ${isBoosting ? '#7dd3fc' : '#93c5fd'};">
              <span>${isBoosting ? 'TURBO NITRO ACTIF !' : 'NITRO BOOST [Espace / Shift]'}</span>
              <span>${pct}%</span>
            </div>
            <div style="width: 140px; height: 8px; background: rgba(255,255,255,0.15); border-radius: 4px; overflow: hidden;">
              <div style="width: ${pct}%; height: 100%; background: linear-gradient(90deg, #2563eb, #38bdf8); transition: width 0.1s linear;"></div>
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
          state.speedKmh = Math.min(280, state.speedKmh + 15);
          powerState.slamTriggered = true;
          setTimeout(() => { powerState.slamTriggered = false; }, 1200);
        }
        powerState.airborneFrames = 0;
      }

      if (state.angularVelocity) {
        state.angularVelocity.x *= 0.85;
        state.angularVelocity.z *= 0.85;
      }

      powerState.hudEl.innerHTML = `
        <div style="background: rgba(15, 23, 42, 0.85); border: 2px solid #f59e0b; border-radius: 8px; padding: 6px 14px; display: flex; align-items: center; gap: 10px; box-shadow: 0 4px 15px rgba(245,158,11,0.35);">
          <span style="font-size: 20px;">🛡️</span>
          <div style="display: flex; flex-direction: column;">
            <div style="font-size: 13px; font-weight: bold; color: #fcd34d;">
              ${powerState.slamTriggered ? 'GROUND SLAM ABSORBÉ ! (+15 km/h)' : 'BLINDAGE LOURD : SUPER GRIP'}
            </div>
            <div style="font-size: 11px; color: #fbbf24; opacity: 0.9;">
              Tenue de route renforcée & zéro tête-à-queue
            </div>
          </div>
        </div>
      `;
    }

    // --- 4. FORMULE 1 ---
    else {
      powerState.hudEl.innerHTML = `
        <div style="background: rgba(15, 23, 42, 0.85); border: 2px solid #e11d48; border-radius: 8px; padding: 6px 14px; display: flex; align-items: center; gap: 10px; box-shadow: 0 4px 15px rgba(225,29,72,0.35);">
          <span style="font-size: 20px;">🏎️</span>
          <div style="display: flex; flex-direction: column;">
            <div style="font-size: 13px; font-weight: bold; color: #fda4af;">
              FORMULE 1 : APPUI AÉRODYNAMIQUE MAXIMAL
            </div>
            <div style="font-size: 11px; color: #f43f5e; opacity: 0.9;">
              Vitesse de pointe & agilité chirurgicale
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
    powerState.isGliding = false;
    powerState.isNitroBoosting = false;
  }

  // --- 6. GARAGE UI TAB & CARDS ---
  function createGarageVehiclePanel(soundEngine, uiContainer) {
    const panel = document.createElement('div');
    panel.className = 'panel options-panel hidden vehicle-options-panel';
    panel.style.cssText = `
      display: flex;
      flex-direction: column;
      padding: 12px;
      gap: 10px;
      width: 290px;
      box-sizing: border-box;
      position: absolute;
      right: var(--safe-area-right);
      bottom: 64px;
      height: calc(100% - 128px);
      background-color: var(--surface-secondary-color);
      overflow-y: auto;
      pointer-events: auto;
    `;

    const header = document.createElement('div');
    header.style.cssText = 'padding: 4px 0 10px 0; border-bottom: 1px solid rgba(255,255,255,0.12); margin-bottom: 2px;';
    header.innerHTML = `
      <div style="font-size: 20px; font-weight: bold; color: #fff; text-transform: uppercase; letter-spacing: 0.5px;">Choix du Véhicule</div>
      <div style="font-size: 11px; color: rgba(255,255,255,0.65); margin-top: 3px;">Chaque modèle offre un pouvoir exclusif !</div>
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
        gap: 6px;
        padding: 12px;
        background: ${isSelected ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.04)'};
        border: 2px solid ${isSelected ? v.color : 'rgba(255, 255, 255, 0.1)'};
        border-radius: 8px;
        cursor: pointer;
        text-align: left;
        transition: all 0.18s ease;
        position: relative;
        font-family: inherit;
      `;

      card.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 22px;">${v.icon}</span>
            <div>
              <div style="font-size: 15px; font-weight: bold; color: #fff;">${v.name}</div>
              <div style="font-size: 10px; color: rgba(255,255,255,0.55);">${v.subtitle}</div>
            </div>
          </div>
          <span class="active-badge" style="display: ${isSelected ? 'inline-block' : 'none'}; font-size: 10px; background: ${v.color}; color: #000; font-weight: bold; padding: 2px 7px; border-radius: 4px; text-transform: uppercase;">ACTIF</span>
        </div>
        <div style="font-size: 12px; font-weight: bold; color: ${v.color}; margin-top: 2px;">
          ${v.powerName}
        </div>
        <div style="font-size: 11px; color: rgba(255,255,255,0.75); line-height: 1.35;">
          ${v.powerDesc}
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; margin-top: 4px; padding-top: 6px; border-top: 1px solid rgba(255,255,255,0.06); font-size: 10px; color: rgba(255,255,255,0.5);">
          <div>Vitesse: <span style="color:#f1f5f9">${v.speedStat}</span></div>
          <div>Accél: <span style="color:#f1f5f9">${v.accelStat}</span></div>
          <div>Grip: <span style="color:#f1f5f9">${v.gripStat}</span></div>
          <div>Plané: <span style="color:#f1f5f9">${v.glidStat}</span></div>
        </div>
      `;

      card.addEventListener('mouseenter', () => {
        if (!card.classList.contains('selected')) {
          card.style.background = 'rgba(255, 255, 255, 0.08)';
          card.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        }
      });
      card.addEventListener('mouseleave', () => {
        if (!card.classList.contains('selected')) {
          card.style.background = 'rgba(255, 255, 255, 0.04)';
          card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        }
      });

      card.addEventListener('click', () => {
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
      b.style.borderColor = isThis ? (v.color || '#3b82f6') : 'rgba(255, 255, 255, 0.1)';
      b.style.background = isThis ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.04)';
      const badge = b.querySelector('.active-badge');
      if (badge) badge.style.display = isThis ? 'inline-block' : 'none';
    });
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
          vehicleBtn.innerHTML = 'Skins / Véhicules <img class="button-icon" src="images/vehicles_tab.svg" alt="">';
          tabBar.appendChild(vehicleBtn);
        }
      }

      if (vehicleBtn && !vehicleBtn.dataset.wired) {
        vehicleBtn.dataset.wired = 'true';

        vehicleBtn.addEventListener('click', (e) => {
          e.preventDefault();
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
  console.log('[PolyTrack] Vehicle Models & Powers Engine Loaded. Active Vehicle:', window._selectedVehicleType);
})();
