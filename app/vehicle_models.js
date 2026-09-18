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
    },
    playDrsOpen: function() {
      try {
        this.init();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') {
          this.ctx.resume().catch(() => {});
        }
        const t = this.ctx.currentTime;
        // 1. High-tech actuator chirp
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(1400, t);
        osc.frequency.exponentialRampToValueAtTime(2600, t + 0.04);
        osc.frequency.exponentialRampToValueAtTime(900, t + 0.08);
        gain.gain.setValueAtTime(0.06, t);
        gain.gain.linearRampToValueAtTime(0.001, t + 0.08);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.08);

        // 2. Aerodynamic air rush puff
        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(360, t);
        osc2.frequency.exponentialRampToValueAtTime(120, t + 0.16);
        gain2.gain.setValueAtTime(0.05, t);
        gain2.gain.linearRampToValueAtTime(0.001, t + 0.16);
        osc2.connect(gain2);
        gain2.connect(this.ctx.destination);
        osc2.start(t);
        osc2.stop(t + 0.16);
      } catch (e) {}
    },
    playDrsClose: function() {
      try {
        this.init();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') {
          this.ctx.resume().catch(() => {});
        }
        const t = this.ctx.currentTime;
        // Mechanical wing flap clamp / latch snap
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(820, t);
        osc.frequency.exponentialRampToValueAtTime(160, t + 0.06);
        gain.gain.setValueAtTime(0.08, t);
        gain.gain.linearRampToValueAtTime(0.001, t + 0.06);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.06);
      } catch (e) {}
    },
    playTurboSpool: function() {
      try {
        this.init();
        if (!this.ctx || this.ctx.state === 'suspended') return;
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, t);
        osc.frequency.exponentialRampToValueAtTime(2600, t + 0.22);
        gain.gain.setValueAtTime(0.04, t);
        gain.gain.linearRampToValueAtTime(0.001, t + 0.22);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.22);
      } catch (e) {}
    },
    playTurboBlowoff: function() {
      try {
        this.init();
        if (!this.ctx || this.ctx.state === 'suspended') return;
        const t = this.ctx.currentTime;
        // High-pressure turbo blow-off valve release
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(1800, t);
        osc.frequency.exponentialRampToValueAtTime(300, t + 0.18);
        gain.gain.setValueAtTime(0.06, t);
        gain.gain.linearRampToValueAtTime(0.001, t + 0.18);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.18);
      } catch (e) {}
    },
    turbo: {
      osc: null,
      gain: null,
      isActive: false
    },
    startTurbo: function() {
      try {
        this.init();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') {
          this.ctx.resume().catch(() => {});
        }
        if (this.turbo.isActive) return;
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(650, t);
        osc.frequency.exponentialRampToValueAtTime(1400, t + 0.35);
        gain.gain.setValueAtTime(0.001, t);
        gain.gain.linearRampToValueAtTime(0.040, t + 0.12);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        this.turbo = { osc, gain, isActive: true };
      } catch (e) {}
    },
    updateTurbo: function(speedKmh) {
      if (!this.turbo.isActive || !this.ctx) return;
      try {
        const t = this.ctx.currentTime;
        const freq = 900 + Math.min(1200, (speedKmh || 200) * 3.5);
        this.turbo.osc.frequency.setTargetAtTime(freq, t, 0.08);
      } catch (e) {}
    },
    stopTurbo: function() {
      if (!this.turbo.isActive || !this.ctx) return;
      try {
        const t = this.ctx.currentTime;
        const tb = this.turbo;
        this.turbo.isActive = false;
        tb.gain.gain.linearRampToValueAtTime(0.001, t + 0.12);
        setTimeout(() => {
          try {
            if (tb.osc) tb.osc.stop();
            if (tb.osc) tb.osc.disconnect();
            if (tb.gain) tb.gain.disconnect();
          } catch (e) {}
        }, 140);
      } catch (e) {}
    },
    playAfterburner: function() {
      try {
        this.init();
        if (!this.ctx || this.ctx.state === 'suspended') return;
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(95, t);
        osc.frequency.exponentialRampToValueAtTime(280, t + 0.15);
        gain.gain.setValueAtTime(0.08, t);
        gain.gain.linearRampToValueAtTime(0.001, t + 0.20);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.20);
      } catch (e) {}
    },
    playGliderGlide: function() {
      try {
        this.init();
        if (!this.ctx || this.ctx.state === 'suspended') return;
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, t);
        osc.frequency.linearRampToValueAtTime(460, t + 0.12);
        osc.frequency.linearRampToValueAtTime(280, t + 0.25);
        gain.gain.setValueAtTime(0.04, t);
        gain.gain.linearRampToValueAtTime(0.001, t + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.25);
      } catch (e) {}
    },
    playKineticRam: function() {
      try {
        this.init();
        if (!this.ctx || this.ctx.state === 'suspended') return;
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(180, t);
        osc.frequency.exponentialRampToValueAtTime(45, t + 0.16);
        gain.gain.setValueAtTime(0.09, t);
        gain.gain.linearRampToValueAtTime(0.001, t + 0.16);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.16);
      } catch (e) {}
    },
    playGroundSlam: function() {
      try {
        this.init();
        if (!this.ctx || this.ctx.state === 'suspended') return;
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(120, t);
        osc.frequency.exponentialRampToValueAtTime(32, t + 0.28);
        gain.gain.setValueAtTime(0.12, t);
        gain.gain.linearRampToValueAtTime(0.001, t + 0.28);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.28);
      } catch (e) {}
    },
    // Continuous Jet Turbine Synthesizer (Fighter Jet Engine Loop)
    jet: {
      whineOsc: null,
      whineGain: null,
      rumbleOsc: null,
      rumbleFilter: null,
      rumbleGain: null,
      masterGain: null,
      isActive: false
    },
    startJet: function(speedKmh) {
      try {
        this.init();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') {
          this.ctx.resume().catch(() => {});
        }
        if (this.jet.isActive) return;

        const t = this.ctx.currentTime;
        const master = this.ctx.createGain();
        master.gain.setValueAtTime(0.001, t);
        master.gain.linearRampToValueAtTime(0.08, t + 0.25);
        master.connect(this.ctx.destination);

        // 1. High-frequency turbine spool whine (sine)
        const whine = this.ctx.createOscillator();
        whine.type = 'sine';
        const whineGain = this.ctx.createGain();
        whineGain.gain.setValueAtTime(0.032, t);
        whine.frequency.setValueAtTime(850, t);
        whine.connect(whineGain);
        whineGain.connect(master);
        whine.start(t);

        // 2. Combustion jet thrust rumble (sawtooth through lowpass filter)
        const rumble = this.ctx.createOscillator();
        rumble.type = 'sawtooth';
        rumble.frequency.setValueAtTime(65, t);
        const rumbleFilter = this.ctx.createBiquadFilter();
        rumbleFilter.type = 'lowpass';
        rumbleFilter.frequency.setValueAtTime(260, t);
        rumbleFilter.Q.setValueAtTime(2.5, t);
        const rumbleGain = this.ctx.createGain();
        rumbleGain.gain.setValueAtTime(0.065, t);
        rumble.connect(rumbleFilter);
        rumbleFilter.connect(rumbleGain);
        rumbleGain.connect(master);
        rumble.start(t);

        this.jet = {
          whineOsc: whine,
          whineGain: whineGain,
          rumbleOsc: rumble,
          rumbleFilter: rumbleFilter,
          rumbleGain: rumbleGain,
          masterGain: master,
          isActive: true
        };
      } catch (e) {}
    },
    updateJet: function(speedKmh, isAfterburner, isAirbrake) {
      if (!this.jet.isActive || !this.ctx) return;
      try {
        const t = this.ctx.currentTime;
        const speed = Math.max(100, Math.min(350, speedKmh || 220));
        const speedNorm = (speed - 100) / 250; // 0 to 1

        let targetWhineFreq = 800 + speedNorm * 800; // 800Hz to 1600Hz
        let targetRumbleCutoff = 220 + speedNorm * 320; // 220Hz to 540Hz
        let targetMasterVol = 0.08 + speedNorm * 0.04;

        if (isAfterburner) {
          targetWhineFreq = 1900 + Math.random() * 90;
          targetRumbleCutoff = 750;
          targetMasterVol = 0.16;
        } else if (isAirbrake) {
          targetWhineFreq = 580;
          targetRumbleCutoff = 180;
          targetMasterVol = 0.055;
        }

        this.jet.whineOsc.frequency.setTargetAtTime(targetWhineFreq, t, 0.08);
        this.jet.rumbleFilter.frequency.setTargetAtTime(targetRumbleCutoff, t, 0.08);
        this.jet.masterGain.gain.setTargetAtTime(targetMasterVol, t, 0.08);
      } catch (e) {}
    },
    stopJet: function() {
      if (!this.jet.isActive || !this.ctx) return;
      try {
        const t = this.ctx.currentTime;
        const j = this.jet;
        this.jet.isActive = false;
        if (j.masterGain) {
          j.masterGain.gain.linearRampToValueAtTime(0.001, t + 0.20);
        }
        setTimeout(() => {
          try {
            if (j.whineOsc) j.whineOsc.stop();
            if (j.rumbleOsc) j.rumbleOsc.stop();
            if (j.whineOsc) j.whineOsc.disconnect();
            if (j.rumbleOsc) j.rumbleOsc.disconnect();
            if (j.masterGain) j.masterGain.disconnect();
          } catch (e) {}
        }, 220);
      } catch (e) {}
    },
    playAfterburnerBoom: function() {
      try {
        this.init();
        if (!this.ctx || this.ctx.state === 'suspended') return;
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(110, t);
        osc.frequency.exponentialRampToValueAtTime(35, t + 0.18);
        gain.gain.setValueAtTime(0.12, t);
        gain.gain.linearRampToValueAtTime(0.001, t + 0.18);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.18);
      } catch (e) {}
    },
    playAirbrakeHiss: function() {
      try {
        this.init();
        if (!this.ctx || this.ctx.state === 'suspended') return;
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(480, t);
        osc.frequency.exponentialRampToValueAtTime(160, t + 0.22);
        gain.gain.setValueAtTime(0.05, t);
        gain.gain.linearRampToValueAtTime(0.001, t + 0.22);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.22);
      } catch (e) {}
    },
    playTouchdown: function() {
      try {
        this.init();
        if (!this.ctx || this.ctx.state === 'suspended') return;
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(2200, t);
        osc.frequency.exponentialRampToValueAtTime(1200, t + 0.08);
        gain.gain.setValueAtTime(0.06, t);
        gain.gain.linearRampToValueAtTime(0.001, t + 0.08);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.08);
      } catch (e) {}
    },
    playKersSurge: function() {
      try {
        this.init();
        if (!this.ctx || this.ctx.state === 'suspended') return;
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1100, t);
        osc.frequency.exponentialRampToValueAtTime(2800, t + 0.26);
        gain.gain.setValueAtTime(0.045, t);
        gain.gain.linearRampToValueAtTime(0.001, t + 0.26);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.26);
      } catch (e) {}
    },
    playAntiLagPop: function() {
      try {
        this.init();
        if (!this.ctx || this.ctx.state === 'suspended') return;
        const t = this.ctx.currentTime;
        [0, 0.07].forEach((offset, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = idx === 0 ? 'triangle' : 'sawtooth';
          osc.frequency.setValueAtTime(160 - idx * 30, t + offset);
          osc.frequency.exponentialRampToValueAtTime(32, t + offset + 0.05);
          gain.gain.setValueAtTime(0.10, t + offset);
          gain.gain.linearRampToValueAtTime(0.001, t + offset + 0.05);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(t + offset);
          osc.stop(t + offset + 0.05);
        });
      } catch (e) {}
    },
    playShockwaveImpact: function() {
      try {
        this.init();
        if (!this.ctx || this.ctx.state === 'suspended') return;
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(95, t);
        osc.frequency.exponentialRampToValueAtTime(20, t + 0.35);
        gain.gain.setValueAtTime(0.15, t);
        gain.gain.linearRampToValueAtTime(0.001, t + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.35);
      } catch (e) {}
    },
    playFuelReadyBeep: function() {
      try {
        this.init();
        if (!this.ctx || this.ctx.state === 'suspended') return;
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(880, t);
        osc.frequency.setValueAtTime(1320, t + 0.07);
        gain.gain.setValueAtTime(0.05, t);
        gain.gain.linearRampToValueAtTime(0.001, t + 0.15);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.15);
      } catch (e) {}
    }
  };

  // --- 1. ADVANCED SOLID LOW-POLY GEOMETRY BUILDER ---
  function createSolidBuilder(THREE, B) {
    // 5 Contiguous Material Buckets:
    // 0: Main (Car primary paint color + dynamic pattern texture & secondary color)
    // 1: AirIntake (Dark intake grilles, tinted glass, canopy, tires)
    // 2: Metal (Chrome frame, splitters, diffusers, exhausts, struts, rotors)
    // 3: BrakeLight (Rear lights, jet thrusters, calipers, hooks, tow rings)
    // 4: Rim (Wheel rims for custom wheels e.g. airplane nose wheel & spare tire)
    const buckets = { 0: [], 1: [], 2: [], 3: [], 4: [] };

    const baseChassis = B && B.models && B.models.chassis;
    const BufferGeometryClass = (THREE && (THREE.BufferGeometry || THREE.LoY)) || (baseChassis && baseChassis.geometry && baseChassis.geometry.constructor);
    const BufferAttributeClass = (THREE && (THREE.BufferAttribute || THREE.THS)) || (baseChassis && baseChassis.geometry && baseChassis.geometry.attributes.position && baseChassis.geometry.attributes.position.constructor);

    function computeUV(p) {
      // Planar top-down mapping strictly conforming to PolyTrack car patterns
      // X = 0 -> u = 0.32205; scaleX = 0.38
      // Z = -1.92 -> v ~ 0.06; Z = +1.82 -> v ~ 0.88; scaleZ = 0.22
      const u = Math.max(0, Math.min(1, 0.32205 + p[0] * 0.38));
      const v = Math.max(0, Math.min(1, 0.48 + p[2] * 0.22));
      return [u, v];
    }

    function addTri(p1, p2, p3, norm, matIdx, customUVs) {
      const b = buckets[matIdx] || (buckets[matIdx] = []);
      let uvs;
      if (customUVs) {
        uvs = customUVs;
      } else if (matIdx === 0) {
        const uv1 = computeUV(p1);
        const uv2 = computeUV(p2);
        const uv3 = computeUV(p3);
        uvs = [uv1[0], uv1[1], uv2[0], uv2[1], uv3[0], uv3[1]];
      } else {
        uvs = [0, 0, 1, 0, 0.5, 1];
      }
      b.push({
        positions: [p1[0], p1[1], p1[2], p2[0], p2[1], p2[2], p3[0], p3[1], p3[2]],
        normals: [norm[0], norm[1], norm[2], norm[0], norm[1], norm[2], norm[0], norm[1], norm[2]],
        uvs: uvs
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

      for (let m = 0; m <= 4; m++) {
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

    // Stainless splitter support tie-rods
    b.addBox(-0.25, -0.21, 1.82, -0.23, -0.07, 1.76, 2); // left tie-rod
    b.addBox(0.23, -0.21, 1.82, 0.25, -0.07, 1.76, 2);  // right tie-rod

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

    // Aerodynamic Diffuser Exhaust Tunnel (houses the active PolyTrack selected exhaust model)
    b.addBox(-0.25, -0.26, -1.94, 0.25, -0.10, -1.82, 2); // metal exhaust port shroud
    b.addBox(-0.22, -0.24, -1.96, 0.22, -0.12, -1.84, 1); // dark recessed exhaust tunnel interior

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
    b.addWheelX(0, 0.12, -1.22, 0.24, 0.20, 4, 1); // rim=4 (Rim), tire=1 (AirIntake)
    // Y-Strap Ratchet Tie-Down over the spare tire
    b.addBox(-0.03, 0.36, -1.24, 0.03, 0.39, -1.18, 3);  // center ratchet buckle
    b.addBox(-0.02, 0.20, -1.23, 0.02, 0.37, -1.20, 3);  // strap vertical
    b.addBox(-0.16, 0.12, -1.23, -0.02, 0.36, -1.20, 3); // strap diagonal L
    b.addBox(0.02, 0.12, -1.23, 0.16, 0.36, -1.20, 3);  // strap diagonal R

    // Heavy rear exhaust mounting shroud under bumper (houses active selected exhaust model)
    b.addBox(-0.25, -0.30, -1.94, 0.25, -0.16, -1.80, 2);

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

    // Heavy Baja Long-Travel Coilover Springs (damper shaft: Metal 2, heavy orange spring: BrakeLight 3)
    b.addCylinderZ(-0.52, -0.32, 1.28, 0.22, 0.04, 0.04, 6, 2);
    b.addCylinderZ(-0.52, -0.30, 1.28, 0.16, 0.06, 0.06, 6, 3);
    b.addCylinderZ(0.52, -0.32, 1.28, 0.22, 0.04, 0.04, 6, 2);
    b.addCylinderZ(0.52, -0.30, 1.28, 0.16, 0.06, 0.06, 6, 3);
    b.addCylinderZ(-0.52, -0.32, -1.28, 0.22, 0.04, 0.04, 6, 2);
    b.addCylinderZ(-0.52, -0.30, -1.28, 0.16, 0.06, 0.06, 6, 3);
    b.addCylinderZ(0.52, -0.32, -1.28, 0.22, 0.04, 0.04, 6, 2);
    b.addCylinderZ(0.52, -0.30, -1.28, 0.16, 0.06, 0.06, 6, 3);

    // Off-Road High-Lift Recovery Jack on left bed rail
    b.addBox(-0.58, 0.26, -1.65, -0.54, 0.32, -0.75, 3); // red I-beam spine
    b.addBox(-0.60, 0.24, -1.60, -0.52, 0.34, -1.50, 2); // runner mechanism
    b.addBox(-0.61, 0.28, -1.55, -0.51, 0.40, -1.53, 2); // operating handle

    // Dual Expedition Jerry Cans in right bed corner
    b.addBox(0.32, -0.12, -1.65, 0.46, 0.20, -1.45, 3);  // red jerry can 1
    b.addBox(0.35, 0.20, -1.62, 0.43, 0.24, -1.48, 2);  // handle 1
    b.addBox(0.32, -0.12, -1.42, 0.46, 0.20, -1.22, 3);  // red jerry can 2
    b.addBox(0.35, 0.20, -1.39, 0.43, 0.24, -1.25, 2);  // handle 2

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
    b.addWheelX(0, -0.53, 1.35, 0.20, 0.14, 4, 1);        // 8-sided nose wheel (rim=4 Rim, tire=1)

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
      shortName: 'F1',
      badge: 'DRS+KERS',
      tag: 'MONOPLACE F1',
      image: 'images/vehicle_f1.svg',
      subtitle: 'DRS Actif & Batterie KERS 340 km/h',
      icon: '🏎️',
      color: '#ef4444',
      powerName: 'DRS Aérodynamique & KERS',
      powerKey: 'MAINTENIR [SHIFT]',
      powerDesc: 'Ouvre l\'aileron DRS pour annuler la traînée et libère le KERS jusqu\'à 340 km/h. Se referme au relâchement.',
      stats: { speed: 99, accel: 95, grip: 92, aero: 98 },
      statLabels: { speed: '340 km/h', accel: '1.7s', grip: 'Aéro Max', aero: 'DRS Actif' }
    },
    voiture: {
      id: 'voiture',
      name: 'Sportive GT',
      shortName: 'SPORT GT',
      badge: 'NITRO',
      tag: 'HYPERCAR CYBER',
      image: 'images/vehicle_gt.svg',
      subtitle: 'Turbo Nitro Boost & Flammes 3D',
      icon: '🚗',
      color: '#06b6d4',
      powerName: '⚡ Turbo Nitro Overboost',
      powerKey: '[SHIFT] OU [ESPACE]',
      powerDesc: 'Propulsion supersonique (+45 km/h) avec flammes 3D cyan. Recharge 3x plus vite en dérapage contrôlé.',
      stats: { speed: 92, accel: 98, grip: 88, aero: 75 },
      statLabels: { speed: '330 km/h', accel: '1.4s (Nitro)', grip: 'Drift Boost', aero: 'Aileron GT' }
    },
    camionnette: {
      id: 'camionnette',
      name: 'Le Mastodonte',
      shortName: 'PICK-UP',
      badge: 'BÉLIER',
      tag: 'OFFROAD BAJA',
      image: 'images/vehicle_van.svg',
      subtitle: 'Bélier Cinétique & Ground Slam',
      icon: '🚙',
      color: '#f59e0b',
      powerName: '🛡️ Bélier Cinétique & Slam',
      powerKey: 'MAINTENIR [SHIFT] / SAUTS',
      powerDesc: 'Poussée bélier bulldozer avec blindage anti-spin sur [Shift] et Super Ground Slam (+28 km/h) à l\'atterrissage.',
      stats: { speed: 82, accel: 86, grip: 100, aero: 40 },
      statLabels: { speed: '285 km/h', accel: '2.0s', grip: 'Super Grip', aero: 'Blindage' }
    },
    avion: {
      id: 'avion',
      name: 'Aéroplane (Jet Glider)',
      shortName: 'AVION',
      badge: 'POSTCOMBUSTION',
      tag: 'CHASSEUR SUPERSONIQUE',
      image: 'images/vehicle_plane.svg',
      subtitle: 'Guidage à la Souris & Accélération Continue',
      icon: '✈️',
      color: '#a855f7',
      powerName: '✈️ Guidage Souris & Postcombustion',
      powerKey: 'TREMPLIN + SOURIS',
      powerDesc: 'Prenez un tremplin pour décoller ! L\'avion accélère en continu dans les airs et suit les mouvements de votre souris (Haut pour monter, Bas pour descendre, Gauche/Droite pour virer).',
      stats: { speed: 96, accel: 92, grip: 74, aero: 100 },
      statLabels: { speed: '380 km/h', accel: 'Continu En L\'Air', grip: 'Tricycle', aero: 'Guidage Souris' }
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

  // --- 4. CHASSIS MESH INSTANTIATION, VISIBILITY & CUSTOMIZATION ENGINE ---
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

    // Material 4: Rim material for custom wheels (e.g. airplane nose wheel & spare tire)
    let rimMat = null;
    if (B && B.models && B.models.rims) {
      try {
        const firstRim = B.models.rims.get(0);
        if (firstRim && firstRim.material) {
          const rimMats = Array.isArray(firstRim.material) ? firstRim.material : [firstRim.material];
          const found = rimMats.find(m => m && m.name === 'Rim');
          if (found) rimMat = found.clone();
        }
      } catch (e) {}
    }
    if (!rimMat && clonedMaterials[2]) {
      rimMat = clonedMaterials[2].clone();
      rimMat.name = 'Rim';
    }
    if (rimMat) {
      rimMat.side = 2;
      rimMat.shadowSide = 2;
      clonedMaterials[4] = rimMat;
    }

    const newMesh = new MeshClass(geom, clonedMaterials);
    newMesh.castShadow = true;
    newMesh.receiveShadow = true;
    return newMesh;
  }

  // --- 4.5 FORMULE 1 DRS WING FLAP BUILDER & ATTACHMENT ---
  function buildDrsFlapGeometry(THREE, B) {
    const b = createSolidBuilder(THREE, B);
    // Flap aerofoil blade:
    // Span X: -0.58 to +0.58 (1.16m wide, nestled between rear wing endplates)
    // Thickness Y: -0.012 to +0.012 (2.4 cm)
    // Chord Z: 0.00 to +0.16 (pivots along rear edge at 0, extends forward to 0.16)
    // Material 0: Main (car primary paint & dynamic pattern)
    b.addBox(-0.58, -0.012, 0.00, 0.58, 0.012, 0.16, 0);

    // Center hydraulic actuator pod (Metal chrome/titanium)
    b.addBox(-0.04, -0.018, 0.02, 0.04, 0.022, 0.14, 2);

    // Left & right hinge pivot lugs (Metal)
    b.addBox(-0.585, -0.015, -0.012, -0.575, 0.015, 0.012, 2);
    b.addBox(0.575, -0.015, -0.012, 0.585, 0.015, 0.012, 2);

    // Hydraulic piston rod & brackets (Metal)
    b.addBox(-0.015, -0.035, 0.06, 0.015, -0.015, 0.10, 2);

    return b.build();
  }

  function ensureF1DrsFlap(carInstance, l, be, THREE, B) {
    if (!carInstance || !be) return null;
    try {
      const chassisMesh = (0, l.gn)(carInstance, be, "f");
      if (!chassisMesh) return null;

      if (carInstance._drsFlapGroup && carInstance._drsFlapGroup.parent === chassisMesh) {
        return carInstance._drsFlapGroup;
      }

      if (carInstance._drsFlapGroup && carInstance._drsFlapGroup.parent) {
        try { carInstance._drsFlapGroup.parent.remove(carInstance._drsFlapGroup); } catch (e) {}
      }

      const geom = buildDrsFlapGeometry(THREE, B);
      if (!geom) return null;

      let clonedMats;
      if (Array.isArray(chassisMesh.material)) {
        clonedMats = chassisMesh.material.map(m => m ? m.clone() : m);
      } else if (chassisMesh.material) {
        clonedMats = [chassisMesh.material.clone(), chassisMesh.material.clone(), chassisMesh.material.clone(), chassisMesh.material.clone()];
      }

      const MeshClass = (THREE && (THREE.Mesh || THREE.vY)) || (chassisMesh && chassisMesh.constructor);
      const flapMesh = new MeshClass(geom, clonedMats);
      flapMesh.castShadow = true;
      flapMesh.receiveShadow = true;

      const GroupClass = (THREE && (THREE.Group || THREE.YJl)) || (chassisMesh && chassisMesh.parent && chassisMesh.parent.constructor);
      const drsGroup = new GroupClass();
      drsGroup.name = 'F1_DRS_Flap';
      drsGroup.add(flapMesh);
      // Position pivot on the upper rear wing element
      drsGroup.position.set(0, 0.355, -1.82);

      chassisMesh.add(drsGroup);
      carInstance._drsFlapGroup = drsGroup;
      return drsGroup;
    } catch (e) {
      console.warn('[PolyTrack] Error in ensureF1DrsFlap:', e);
      return null;
    }
  }

  function getFlameMaterials(chassisMesh, hexColor) {
    let mats = [];
    try {
      if (chassisMesh && Array.isArray(chassisMesh.material)) {
        mats = chassisMesh.material.map(m => m ? m.clone() : m);
      } else if (chassisMesh && chassisMesh.material) {
        mats = [chassisMesh.material.clone(), chassisMesh.material.clone(), chassisMesh.material.clone(), chassisMesh.material.clone(), chassisMesh.material.clone()];
      }
      for (let i = 0; i < mats.length; i++) {
        if (mats[i] && mats[i].color) {
          try { mats[i].color.set(hexColor); } catch (e) {}
        }
      }
    } catch (e) {}
    return mats;
  }

  // --- 4.6 3D REACTIVE CYAN NITRO EXHAUST FLAMES (VOITURE GT) ---
  function buildGtNitroFlamesGeometry(THREE, B) {
    const b = createSolidBuilder(THREE, B);
    // Twin faceted nitro flame plumes shooting rearward from diffuser exhaust tunnel
    // Left flame plume (Z extends from 0.0 down to -0.42, centered around X = -0.11, Y = 0)
    b.addSlopedBox(-0.16, -0.06, -0.05, 0.05, 0.05, -0.42, 0.00, 3);
    b.addSlopedBox(-0.14, -0.08, -0.03, 0.03, 0.03, -0.25, 0.00, 2);
    // Right flame plume
    b.addSlopedBox(0.06, 0.16, -0.05, 0.05, 0.05, -0.42, 0.00, 3);
    b.addSlopedBox(0.08, 0.14, -0.03, 0.03, 0.03, -0.25, 0.00, 2);
    return b.build();
  }

  function ensureGtNitroFlames(carInstance, l, be, THREE, B) {
    if (!carInstance || !be) return null;
    try {
      const chassisMesh = (0, l.gn)(carInstance, be, "f");
      if (!chassisMesh) return null;

      if (carInstance._gtNitroFlames && carInstance._gtNitroFlames.parent === chassisMesh) {
        return carInstance._gtNitroFlames;
      }

      if (carInstance._gtNitroFlames && carInstance._gtNitroFlames.parent) {
        try { carInstance._gtNitroFlames.parent.remove(carInstance._gtNitroFlames); } catch (e) {}
      }

      const geom = buildGtNitroFlamesGeometry(THREE, B);
      if (!geom) return null;

      const flameMats = getFlameMaterials(chassisMesh, '#00e5ff');
      const MeshClass = (THREE && (THREE.Mesh || THREE.vY)) || (chassisMesh && chassisMesh.constructor);
      const flameMesh = new MeshClass(geom, flameMats);
      flameMesh.name = 'GT_Nitro_Flames';
      flameMesh.position.set(0, -0.18, -1.95);
      flameMesh.visible = false;

      chassisMesh.add(flameMesh);
      carInstance._gtNitroFlames = flameMesh;
      return flameMesh;
    } catch (e) {
      console.warn('[PolyTrack] Error in ensureGtNitroFlames:', e);
      return null;
    }
  }

  // --- 4.7 3D REACTIVE SUPERSONIC PURPLE AFTERBURNER FLAMES (AVION) ---
  function buildPlaneJetFlamesGeometry(THREE, B) {
    const b = createSolidBuilder(THREE, B);
    // Twin supersonic afterburner flame spikes shooting rearward from nozzles
    // Left nozzle: X = -0.25, Y = 0, Z extends from 0.0 down to -0.65
    b.addSlopedBox(-0.33, -0.17, -0.07, 0.07, 0.07, -0.65, 0.00, 3);
    b.addSlopedBox(-0.29, -0.21, -0.04, 0.04, 0.04, -0.40, 0.00, 2);
    // Right nozzle: X = +0.25, Y = 0, Z extends from 0.0 down to -0.65
    b.addSlopedBox(0.17, 0.33, -0.07, 0.07, 0.07, -0.65, 0.00, 3);
    b.addSlopedBox(0.21, 0.29, -0.04, 0.04, 0.04, -0.40, 0.00, 2);
    return b.build();
  }

  function ensurePlaneJetFlames(carInstance, l, be, THREE, B) {
    if (!carInstance || !be) return null;
    try {
      const chassisMesh = (0, l.gn)(carInstance, be, "f");
      if (!chassisMesh) return null;

      if (carInstance._planeJetFlames && carInstance._planeJetFlames.parent === chassisMesh) {
        return carInstance._planeJetFlames;
      }

      if (carInstance._planeJetFlames && carInstance._planeJetFlames.parent) {
        try { carInstance._planeJetFlames.parent.remove(carInstance._planeJetFlames); } catch (e) {}
      }

      const geom = buildPlaneJetFlamesGeometry(THREE, B);
      if (!geom) return null;

      const flameMats = getFlameMaterials(chassisMesh, '#d946ef');
      const MeshClass = (THREE && (THREE.Mesh || THREE.vY)) || (chassisMesh && chassisMesh.constructor);
      const flameMesh = new MeshClass(geom, flameMats);
      flameMesh.name = 'Plane_Jet_Flames';
      flameMesh.position.set(0, -0.08, -2.02);
      flameMesh.visible = false;

      chassisMesh.add(flameMesh);
      carInstance._planeJetFlames = flameMesh;
      return flameMesh;
    } catch (e) {
      console.warn('[PolyTrack] Error in ensurePlaneJetFlames:', e);
      return null;
    }
  }

  // --- 4.8 3D AERODYNAMIC WINGTIP VORTEX VAPOR TRAILS (AVION) ---
  function buildPlaneVortexTrailsGeometry(THREE, B) {
    const b = createSolidBuilder(THREE, B);
    // Twin sleek ribbon streams extending backward from each wingtip EW pod
    // Left wingtip: X = -2.15, Y = 0.12, Z from -0.65 to -3.20
    b.addBox(-2.17, 0.10, -3.20, -2.13, 0.14, -0.65, 2);
    // Right wingtip: X = +2.15, Y = 0.12, Z from -0.65 to -3.20
    b.addBox(2.13, 0.10, -3.20, 2.17, 0.14, -0.65, 2);
    return b.build();
  }

  function ensurePlaneVortexTrails(carInstance, l, be, THREE, B) {
    if (!carInstance || !be) return null;
    try {
      const chassisMesh = (0, l.gn)(carInstance, be, "f");
      if (!chassisMesh) return null;

      if (carInstance._planeVortexTrails && carInstance._planeVortexTrails.parent === chassisMesh) {
        return carInstance._planeVortexTrails;
      }

      if (carInstance._planeVortexTrails && carInstance._planeVortexTrails.parent) {
        try { carInstance._planeVortexTrails.parent.remove(carInstance._planeVortexTrails); } catch (e) {}
      }

      const geom = buildPlaneVortexTrailsGeometry(THREE, B);
      if (!geom) return null;

      const vaporMats = getFlameMaterials(chassisMesh, '#e0f2fe');
      for (let i = 0; i < vaporMats.length; i++) {
        if (vaporMats[i]) {
          vaporMats[i].transparent = true;
          vaporMats[i].opacity = 0.82;
        }
      }
      const MeshClass = (THREE && (THREE.Mesh || THREE.vY)) || (chassisMesh && chassisMesh.constructor);
      const vaporMesh = new MeshClass(geom, vaporMats);
      vaporMesh.name = 'Plane_Vortex_Trails';
      vaporMesh.position.set(0, 0, 0);
      vaporMesh.visible = false;

      chassisMesh.add(vaporMesh);
      carInstance._planeVortexTrails = vaporMesh;
      return vaporMesh;
    } catch (e) {
      console.warn('[PolyTrack] Error in ensurePlaneVortexTrails:', e);
      return null;
    }
  }

  // --- 4.9 3D GROUND IMPACT SHOCKWAVE RING (CAMIONNETTE) ---
  function buildShockwaveGeometry(THREE, B) {
    const b = createSolidBuilder(THREE, B);
    const rOuter = 2.4, rInner = 1.8;
    for (let i = 0; i < 8; i++) {
      const a1 = (i / 8) * Math.PI * 2;
      const a2 = ((i + 1) / 8) * Math.PI * 2;
      const x1 = Math.cos(a1) * rOuter, z1 = Math.sin(a1) * rOuter;
      const x2 = Math.cos(a2) * rOuter, z2 = Math.sin(a2) * rOuter;
      const x3 = Math.cos(a2) * rInner, z3 = Math.sin(a2) * rInner;
      const x4 = Math.cos(a1) * rInner, z4 = Math.sin(a1) * rInner;
      b.addQuad([
        [x1, 0.03, z1],
        [x2, 0.03, z2],
        [x3, 0.03, z3],
        [x4, 0.03, z4]
      ], 3);
    }
    return b.build();
  }

  function ensureCamionnetteShockwave(carInstance, l, be, THREE, B) {
    if (!carInstance || !be) return null;
    try {
      const chassisMesh = (0, l.gn)(carInstance, be, "f");
      if (!chassisMesh) return null;

      if (carInstance._shockwaveMesh && carInstance._shockwaveMesh.parent === chassisMesh) {
        return carInstance._shockwaveMesh;
      }

      if (carInstance._shockwaveMesh && carInstance._shockwaveMesh.parent) {
        try { carInstance._shockwaveMesh.parent.remove(carInstance._shockwaveMesh); } catch (e) {}
      }

      const geom = buildShockwaveGeometry(THREE, B);
      if (!geom) return null;

      const shockMats = getFlameMaterials(chassisMesh, '#f59e0b');
      for (let i = 0; i < shockMats.length; i++) {
        if (shockMats[i]) {
          shockMats[i].transparent = true;
          shockMats[i].opacity = 0.9;
        }
      }
      const MeshClass = (THREE && (THREE.Mesh || THREE.vY)) || (chassisMesh && chassisMesh.constructor);
      const shockMesh = new MeshClass(geom, shockMats);
      shockMesh.name = 'Camionnette_Shockwave';
      shockMesh.position.set(0, -0.60, 0);
      shockMesh.visible = false;

      chassisMesh.add(shockMesh);
      carInstance._shockwaveMesh = shockMesh;
      return shockMesh;
    } catch (e) {
      console.warn('[PolyTrack] Error in ensureCamionnetteShockwave:', e);
      return null;
    }
  }

  function applyExhaustTransform(exhaustMesh, vType) {
    if (!exhaustMesh) return;
    vType = vType || window._selectedVehicleType || getSelectedVehicleType();
    if (vType === 'voiture') {
      exhaustMesh.position.set(0, 0.18, 0.05);
      exhaustMesh.scale.set(0.95, 0.95, 0.95);
      exhaustMesh.visible = true;
    } else if (vType === 'camionnette') {
      exhaustMesh.position.set(0, 0.14, 0.05);
      exhaustMesh.scale.set(1.15, 1.15, 1.15);
      exhaustMesh.visible = true;
    } else if (vType === 'avion') {
      exhaustMesh.position.set(0, 0.30, 0.02);
      exhaustMesh.scale.set(0.9, 0.9, 0.9);
      exhaustMesh.visible = true;
    } else {
      // f1
      exhaustMesh.position.set(0, 0, 0);
      exhaustMesh.scale.set(1, 1, 1);
      exhaustMesh.visible = true;
    }
  }

  function applyWheelVisibility(carInstance, l, xe, ye, vType) {
    if (!carInstance || !xe) return;
    vType = vType || window._selectedVehicleType || getSelectedVehicleType();

    // Auto-hook carInstance for future style updates
    if (!carInstance._polytrackCustomHooked && window._cachedWeakMaps) {
      const { B, be, me, D, Oe, we } = window._cachedWeakMaps;
      hookCarInstance(carInstance, l, B, be, me, D, Oe, we, xe, ye);
    }

    try {
      const wheels = (0, l.gn)(carInstance, xe, "f");
      if (Array.isArray(wheels)) {
        if (vType === 'avion') {
          // Exactly 3 wheels: 1 front center (built into chassis geometry) + 2 rear wheels with user selected rims
          if (wheels[0]) wheels[0].visible = false;
          if (wheels[1]) wheels[1].visible = false;
          if (wheels[2]) wheels[2].visible = true;
          if (wheels[3]) wheels[3].visible = true;
        } else {
          // Standard 4 wheels for F1, Voiture GT, Camionnette
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
      if (window._cachedWeakMaps && window._cachedWeakMaps.we) {
        const exhaustMesh = (0, l.gn)(carInstance, window._cachedWeakMaps.we, "f");
        if (exhaustMesh) {
          applyExhaustTransform(exhaustMesh, vType);
        }
      }
    } catch (e) {
      console.warn('[PolyTrack] Error applying wheel visibility:', e);
    }
  }

  function hookCarInstance(carInstance, l, B, be, me, D, Oe, we, xe, ye) {
    if (!carInstance || carInstance._polytrackCustomHooked) return;
    carInstance._polytrackCustomHooked = true;

    // Cache WeakMaps globally so garage watchers and event handlers can re-use them
    window._cachedWeakMaps = { l, B, be, me, D, Oe, we, xe, ye };

    const origSetCarStyle = carInstance.setCarStyle;
    carInstance.setCarStyle = function(style) {
      if (typeof origSetCarStyle === 'function') {
        origSetCarStyle.call(this, style);
      }

      const vType = window._selectedVehicleType || getSelectedVehicleType();

      // 1. Enforce wheel visibility: For 'avion', ONLY 2 rear wheels with the new rims are visible!
      try {
        applyWheelVisibility(this, l, xe, ye, vType);
      } catch (e) {}

      // 2. Re-apply exhaust transform if exhaust model was replaced
      try {
        if (we) {
          const exhaustMesh = (0, l.gn)(this, we, "f");
          if (exhaustMesh) {
            applyExhaustTransform(exhaustMesh, vType);
          }
        }
      } catch (e) {}

      // 3. Propagate rim color to any custom materials named 'Rim' (e.g. plane nose wheel & spare tire)
      try {
        if (me && style && style.rimsColor) {
          const group = (0, l.gn)(this, me, "f");
          if (group) {
            group.traverse(child => {
              if (child.material) {
                const mats = Array.isArray(child.material) ? child.material : [child.material];
                for (const m of mats) {
                  if (m && m.name === 'Rim') {
                    m.color.set(style.rimsColor);
                  }
                }
              }
            });
          }
        }
      } catch (e) {}

      // 4. Update DRS flap materials if present
      try {
        if (this._drsFlapGroup) {
          const chassis = (0, l.gn)(this, be, "f");
          if (chassis && chassis.material) {
            const childMesh = this._drsFlapGroup.children[0];
            if (childMesh && Array.isArray(chassis.material)) {
              childMesh.material = chassis.material.map(m => m ? m.clone() : m);
            }
          }
        }
      } catch (e) {}
    };
  }

  function changeVehicleChassis(carInstance, vType, THREE, l, B, be, me, D, Oe, we, xe, ye) {
    try {
      setSelectedVehicleType(vType);
      window._selectedVehicleType = vType;

      if (!carInstance || !l) return;

      // Ensure carInstance is hooked for all future style changes (paint, pattern, rims, exhaust)
      hookCarInstance(carInstance, l, B, be, me, D, Oe, we, xe, ye);

      let oldMesh = null;
      let carGroup = null;

      try {
        if (be) oldMesh = (0, l.gn)(carInstance, be, "f");
      } catch (e) {
        console.warn('[PolyTrack] Safe warning: get oldMesh:', e);
      }

      try {
        if (me) carGroup = (0, l.gn)(carInstance, me, "f");
      } catch (e) {
        console.warn('[PolyTrack] Safe warning: get carGroup:', e);
      }

      if (!carGroup) return;

      // Detach existing exhaust mesh from oldMesh before removing oldMesh
      let exhaustMesh = null;
      try {
        if (we) exhaustMesh = (0, l.gn)(carInstance, we, "f");
      } catch (e) {}

      if (exhaustMesh && exhaustMesh.parent) {
        try {
          exhaustMesh.parent.remove(exhaustMesh);
        } catch (e) {}
      }

      // Detach existing dynamic child groups before replacing chassis mesh
      try {
        if (carInstance._drsFlapGroup && carInstance._drsFlapGroup.parent) {
          carInstance._drsFlapGroup.parent.remove(carInstance._drsFlapGroup);
          carInstance._drsFlapGroup = null;
        }
        if (carInstance._gtNitroFlames && carInstance._gtNitroFlames.parent) {
          carInstance._gtNitroFlames.parent.remove(carInstance._gtNitroFlames);
          carInstance._gtNitroFlames = null;
        }
        if (carInstance._planeJetFlames && carInstance._planeJetFlames.parent) {
          carInstance._planeJetFlames.parent.remove(carInstance._planeJetFlames);
          carInstance._planeJetFlames = null;
        }
      } catch (e) {}

      // 1. Capture the existing matrix so the new mesh NEVER drops to (0,0,0) under the floor!
      const oldMatrix = (oldMesh && oldMesh.matrix) ? oldMesh.matrix.clone() : null;

      if (oldMesh) {
        try {
          carGroup.remove(oldMesh);
        } catch (e) {}
      }

      const newMesh = createVehicleChassis(B, THREE);
      if (!newMesh) return;
      newMesh.matrixAutoUpdate = false;

      // 2. Immediately inherit transform from previous mesh
      if (oldMatrix) {
        newMesh.matrix.copy(oldMatrix);
      }

      try {
        if (be) {
          (0, l.GG)(carInstance, be, newMesh, "f");
        }
      } catch (e) {
        console.warn('[PolyTrack] Safe warning: set chassis mesh field be:', e);
      }

      if (D && Oe && typeof Oe === 'function') {
        try {
          (0, l.gn)(carInstance, D, "m", Oe).call(carInstance, newMesh);
        } catch (e) {
          console.warn('[PolyTrack] Safe warning: Method Oe:', e);
        }
      }

      try {
        carGroup.add(newMesh);
      } catch (e) {}

      // 3. Re-attach exhaust to newMesh and apply proper transform
      if (exhaustMesh) {
        try {
          newMesh.add(exhaustMesh);
          applyExhaustTransform(exhaustMesh, vType);
        } catch (e) {
          console.warn('[PolyTrack] Error attaching exhaust:', e);
        }
      }

      // 4. Compute exact matrix from carInstance position & quaternion
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

      // 5. Trigger carInstance.update(0) to update wheels, suspension and chassis matrix
      if (typeof carInstance.update === 'function') {
        try {
          carInstance.update(0);
        } catch (e) {
          console.warn('[PolyTrack] carInstance.update error:', e);
        }
      }

      // 6. Apply wheel and suspension visibility
      try {
        applyWheelVisibility(carInstance, l, xe, ye, vType);
      } catch (e) {}

      // 7. Refresh colors on new mesh from car style
      try {
        const style = carInstance.getCarStyle && carInstance.getCarStyle();
        if (style) {
          carInstance.setCarStyle(style);
        }
      } catch (e) {}

      // 8. Dynamic attachments visibility & initialization (DRS Flap, GT Nitro Flames, Plane Jet Flames)
      try {
        if (vType === 'f1') {
          ensureF1DrsFlap(carInstance, l, be, THREE, B);
          if (carInstance._drsFlapGroup) carInstance._drsFlapGroup.visible = true;
        } else if (carInstance._drsFlapGroup) {
          carInstance._drsFlapGroup.visible = false;
        }

        if (vType === 'voiture') {
          ensureGtNitroFlames(carInstance, l, be, THREE, B);
          if (carInstance._gtNitroFlames) carInstance._gtNitroFlames.visible = false;
        } else if (carInstance._gtNitroFlames) {
          carInstance._gtNitroFlames.visible = false;
        }

        if (vType === 'avion') {
          ensurePlaneJetFlames(carInstance, l, be, THREE, B);
          if (carInstance._planeJetFlames) carInstance._planeJetFlames.visible = false;
        } else if (carInstance._planeJetFlames) {
          carInstance._planeJetFlames.visible = false;
        }
      } catch (e) {}

      console.log('[PolyTrack] Vehicle morphed to:', vType);
    } catch (outerErr) {
      console.error('[PolyTrack] changeVehicleChassis recovered safely:', outerErr);
    }
  }

  // --- 5. POWER LOGIC & IN-GAME ESPORTS TELEMETRY HUD ---
  const powerState = {
    // Keys
    shiftKeyHeld: false,
    spaceKeyHeld: false,
    drsKeyHeld: false,
    sKeyHeld: false,
    wKeyHeld: false,
    isAfterburner: false,
    wasAfterburner: false,
    isAirbrake: false,
    wasAirbrake: false,

    // DRS (Formule 1)
    drsFlapAngle: 0,
    isDrsActive: false,
    wasDrsActive: false,
    drsEnergy: 100,
    maxDrsEnergy: 100,

    // Nitro (Voiture GT)
    nitroFuel: 100,
    maxNitro: 100,
    isNitroBoosting: false,
    wasNitroBoosting: false,

    // Heavy Tank & Bélier Cinétique (Camionnette)
    isRamming: false,
    wasRamming: false,
    ramEnergy: 100,
    maxRamEnergy: 100,
    slamCharged: false,
    slamTriggered: false,
    shockwaveScale: 0.5,

    // Flight & Aerodynamic Jet Glider (Avion)
    isFlying: false,
    wasFlying: false,
    isFalling: false,
    wasFalling: false,
    wasRechargingFuel: false,
    fallVy: 0,
    flightBlend: 0,
    flightFuel: 100,
    maxFlightFuel: 100,
    flightFuelCooldown: 0,
    flightHeading: 0,
    flightQuat: null,
    flightPos: null,
    flightSpeed: 220,
    flightTime: 0,
    takeoffGroundY: 0,
    planeAltitude: 0,
    targetAltitude: 0,
    planeRoll: 0,
    planePitch: 0,
    planeYaw: 0,
    airThrust: 0,
    mouseX: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    mouseY: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
    mouseAimX: 0,
    mouseAimY: 0,
    mouseLeftClick: false,
    mouseRightClick: false,
    crosshairEl: null,

    // UI Elements
    hudEl: null,
    fxOverlayEl: null
  };

  // Mouse & Touch Tracking for Aerodynamic Flight (0ms Direct Reticle Tracking)
  window.addEventListener('mousemove', e => {
    powerState.mouseX = e.clientX;
    powerState.mouseY = e.clientY;
    const halfW = (window.innerWidth / 2) || 1;
    const halfH = (window.innerHeight / 2) || 1;
    powerState.mouseAimX = Math.max(-1, Math.min(1, (e.clientX - halfW) / halfW));
    powerState.mouseAimY = Math.max(-1, Math.min(1, (e.clientY - halfH) / halfH));
    if (powerState.crosshairEl && powerState.isFlying) {
      powerState.crosshairEl.style.left = e.clientX + 'px';
      powerState.crosshairEl.style.top = e.clientY + 'px';
    }
  });

  window.addEventListener('mousedown', e => {
    if (e.button === 0) powerState.mouseLeftClick = true;
    else if (e.button === 2) powerState.mouseRightClick = true;
  });
  window.addEventListener('mouseup', e => {
    if (e.button === 0) powerState.mouseLeftClick = false;
    else if (e.button === 2) powerState.mouseRightClick = false;
  });

  window.addEventListener('touchmove', e => {
    if (e.touches && e.touches[0]) {
      const t = e.touches[0];
      powerState.mouseX = t.clientX;
      powerState.mouseY = t.clientY;
      const halfW = (window.innerWidth / 2) || 1;
      const halfH = (window.innerHeight / 2) || 1;
      powerState.mouseAimX = Math.max(-1, Math.min(1, (t.clientX - halfW) / halfW));
      powerState.mouseAimY = Math.max(-1, Math.min(1, (t.clientY - halfH) / halfH));
      if (powerState.crosshairEl && powerState.isFlying) {
        powerState.crosshairEl.style.left = t.clientX + 'px';
        powerState.crosshairEl.style.top = t.clientY + 'px';
      }
    }
  }, { passive: true });

  window.addEventListener('keydown', e => {
    if (e.code === 'Space') {
      powerState.spaceKeyHeld = true;
    }
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      powerState.shiftKeyHeld = true;
      powerState.drsKeyHeld = true;
    }
    if (e.code === 'KeyS' || e.code === 'ArrowDown') {
      powerState.sKeyHeld = true;
    }
    if (e.code === 'KeyW' || e.code === 'ArrowUp') {
      powerState.wKeyHeld = true;
    }
  });
  window.addEventListener('keyup', e => {
    if (e.code === 'Space') {
      powerState.spaceKeyHeld = false;
    }
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      powerState.shiftKeyHeld = false;
      powerState.drsKeyHeld = false;
    }
    if (e.code === 'KeyS' || e.code === 'ArrowDown') {
      powerState.sKeyHeld = false;
    }
    if (e.code === 'KeyW' || e.code === 'ArrowUp') {
      powerState.wKeyHeld = false;
    }
  });
  window.addEventListener('blur', () => {
    powerState.spaceKeyHeld = false;
    powerState.shiftKeyHeld = false;
    powerState.drsKeyHeld = false;
    powerState.sKeyHeld = false;
    powerState.wKeyHeld = false;
    powerState.mouseLeftClick = false;
    powerState.mouseRightClick = false;
    powerState.mouseAimX = 0;
    powerState.mouseAimY = 0;
    document.body.classList.remove('polytrack-flying');
  });

  function ensureDrsHUD() {
    injectGlobalStyles();

    // Clean up any old center-screen HUD if left over
    const oldHud = document.getElementById('polytrack-power-hud');
    if (oldHud && oldHud.parentNode) {
      oldHud.parentNode.removeChild(oldHud);
    }

    const speedo = document.querySelector('.speedometer-ui');
    if (!speedo) return null;

    // If an old speedometer-row was created, unwrap nativeBox so .speedometer-ui > .box styles apply cleanly
    const row = speedo.querySelector('.speedometer-row');
    if (row) {
      const oldNativeBox = row.querySelector('.box:not(.polytrack-drs-box)');
      if (oldNativeBox) {
        speedo.appendChild(oldNativeBox);
      }
      row.parentNode.removeChild(row);
    }

    const nativeBox = speedo.querySelector('.box:not(.polytrack-drs-box)');
    if (!nativeBox) return null;

    let drsBox = speedo.querySelector('#polytrack-drs-box');
    if (!drsBox) {
      drsBox = document.createElement('div');
      drsBox.id = 'polytrack-drs-box';
      drsBox.className = 'box polytrack-drs-box disabled';
      drsBox.title = 'Maintenir [Shift] ou cliquer';
      drsBox.innerHTML = `
        <div class="container">
          <div class="drs-content">
            <span class="drs-label">DRS</span>
            <span class="drs-pct">100%</span>
          </div>
          <div class="drs-meter">
            <div class="drs-meter-fill"></div>
          </div>
        </div>
      `;

      // Touch / mouse click support
      drsBox.addEventListener('pointerdown', (e) => {
        e.stopPropagation();
        e.preventDefault();
        powerState.shiftKeyHeld = true;
        powerState.drsKeyHeld = true;
      });
      const release = () => {
        powerState.shiftKeyHeld = false;
        powerState.drsKeyHeld = false;
      };
      drsBox.addEventListener('pointerup', release);
      drsBox.addEventListener('pointerleave', release);
      drsBox.addEventListener('pointercancel', release);

      // Append directly to speedo
      speedo.appendChild(drsBox);
    }

    speedo.style.overflow = 'visible';
    if (nativeBox && drsBox && nativeBox.offsetHeight > 0) {
      drsBox.style.height = nativeBox.offsetHeight + 'px';
    }

    // Fullscreen FX overlay for speed lines and impact flashes
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

    return drsBox;
  }

  function ensureFlightCrosshair() {
    let el = document.getElementById('polytrack-flight-crosshair');
    if (!el || !document.body.contains(el)) {
      el = document.createElement('div');
      el.id = 'polytrack-flight-crosshair';
      el.style.cssText = `
        position: fixed;
        width: 170px;
        height: 110px;
        top: 50%;
        left: 50%;
        pointer-events: none;
        z-index: 950;
        transform: translate(-50%, -50%);
        transition: opacity 0.15s ease;
        opacity: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        will-change: left, top;
        user-select: none;
      `;
      el.innerHTML = `
        <div class="hud-mode-badge" style="
          font-family: monospace, sans-serif;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          padding: 2px 7px;
          border-radius: 4px;
          background: rgba(0, 0, 0, 0.70);
          border: 1px solid #c084fc;
          color: #c084fc;
          margin-bottom: 3px;
          text-shadow: 0 0 6px rgba(192, 132, 252, 0.6);
          white-space: nowrap;
        ">✈️ CRUISE</div>

        <div style="position: relative; width: 140px; height: 60px; display: flex; align-items: center; justify-content: center;">
          <svg class="hud-svg" width="140" height="60" viewBox="0 0 140 60" fill="none" style="overflow: visible;">
            <!-- Outer Reticle & Center Pip -->
            <circle cx="70" cy="30" r="16" stroke="rgba(192, 132, 252, 0.6)" stroke-width="1.5" stroke-dasharray="4 3"/>
            <circle cx="70" cy="30" r="3.5" fill="#c084fc"/>
            <line x1="70" y1="10" x2="70" y2="18" stroke="#f3e8ff" stroke-width="2" stroke-linecap="round"/>
            <line x1="70" y1="42" x2="70" y2="50" stroke="#f3e8ff" stroke-width="2" stroke-linecap="round"/>

            <!-- Rotating Artificial Horizon Pitch Ladder Wings -->
            <g class="hud-horizon-wings" style="transform-origin: 70px 30px;">
              <line x1="12" y1="30" x2="48" y2="30" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
              <polyline points="48,30 55,36" stroke="#38bdf8" stroke-width="2" fill="none"/>
              <line x1="92" y1="30" x2="128" y2="30" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
              <polyline points="92,30 85,36" stroke="#38bdf8" stroke-width="2" fill="none"/>
            </g>
          </svg>

          <!-- Digital Speed Readout Badge on the Right -->
          <div class="hud-speed-badge" style="
            position: absolute;
            right: -24px;
            top: 20px;
            font-family: monospace, sans-serif;
            font-size: 10px;
            font-weight: 800;
            color: #f8fafc;
            background: rgba(0, 0, 0, 0.65);
            padding: 2px 5px;
            border-radius: 4px;
            border: 1px solid rgba(255, 255, 255, 0.25);
            white-space: nowrap;
          ">220 KM/H</div>
        </div>

        <div class="hud-hints" style="
          font-family: monospace, sans-serif;
          font-size: 9px;
          font-weight: 700;
          color: rgba(248, 250, 252, 0.75);
          background: rgba(0, 0, 0, 0.55);
          padding: 1px 6px;
          border-radius: 3px;
          margin-top: 3px;
          letter-spacing: 0.5px;
          white-space: nowrap;
        ">[SHIFT] BOOST • [S] FREIN</div>
      `;
      document.body.appendChild(el);
      powerState.crosshairEl = el;
    }
    return el;
  }

  function renderTelemetryHUD(opts) {
    const drsBox = ensureDrsHUD();
    if (!drsBox) return;

    drsBox.style.display = 'flex';
    const labelEl = drsBox.querySelector('.drs-label');
    if (labelEl) {
      labelEl.textContent = opts.label || 'DRS';
    }

    const pctEl = drsBox.querySelector('.drs-pct');
    const fillEl = drsBox.querySelector('.drs-meter-fill');
    const pctVal = Math.max(0, Math.min(100, Math.round(opts.percent !== undefined ? opts.percent : 100)));
    if (pctEl) {
      pctEl.textContent = pctVal + '%';
    }
    if (fillEl) {
      fillEl.style.width = pctVal + '%';
    }

    drsBox.style.setProperty('--drs-glow', opts.glowColor || 'rgba(34, 197, 94, 0.85)');
    drsBox.style.setProperty('--drs-bg', opts.bgColor || 'rgba(21, 128, 61, 0.95)');

    if (opts.isActive) {
      drsBox.className = 'box polytrack-drs-box active';
    } else if (opts.isReady && pctVal > 4) {
      drsBox.className = 'box polytrack-drs-box ready';
    } else {
      drsBox.className = 'box polytrack-drs-box disabled';
    }

    // Shift-lights LED bar for Formula 1
    let shiftLightsEl = drsBox.querySelector('.f1-shift-lights');
    if (opts.shiftLights) {
      if (!shiftLightsEl) {
        shiftLightsEl = document.createElement('div');
        shiftLightsEl.className = 'f1-shift-lights';
        shiftLightsEl.style.cssText = `
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 3px;
          padding: 2px 5px;
          background: rgba(0, 0, 0, 0.80);
          border-radius: 5px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          pointer-events: none;
        `;
        for (let i = 0; i < 5; i++) {
          const dot = document.createElement('span');
          dot.className = 'shift-dot dot-' + i;
          dot.style.cssText = `
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #27272a;
            transition: background 0.08s ease;
          `;
          shiftLightsEl.appendChild(dot);
        }
        drsBox.appendChild(shiftLightsEl);
      }
      shiftLightsEl.style.display = 'flex';
      const spd = opts.speed || 0;
      const dots = shiftLightsEl.querySelectorAll('.shift-dot');
      const colors = ['#22c55e', '#22c55e', '#eab308', '#ef4444', '#38bdf8'];
      dots.forEach((dot, idx) => {
        const threshold = 130 + idx * 42;
        if (opts.isActive) {
          dot.style.background = '#38bdf8';
          dot.style.boxShadow = '0 0 6px #38bdf8';
        } else if (spd >= threshold) {
          dot.style.background = colors[idx];
          dot.style.boxShadow = `0 0 5px ${colors[idx]}`;
        } else {
          dot.style.background = '#27272a';
          dot.style.boxShadow = 'none';
        }
      });
    } else if (shiftLightsEl) {
      shiftLightsEl.style.display = 'none';
    }

    // Drift recharge badge for GT Voiture
    let driftBadge = drsBox.querySelector('.gt-drift-badge');
    if (opts.driftBonus) {
      if (!driftBadge) {
        driftBadge = document.createElement('div');
        driftBadge.className = 'gt-drift-badge';
        driftBadge.style.cssText = `
          position: absolute;
          top: -14px;
          right: 0;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.5px;
          color: #00e5ff;
          background: rgba(0, 0, 0, 0.85);
          padding: 1px 5px;
          border-radius: 4px;
          border: 1px solid #00e5ff;
          pointer-events: none;
        `;
        driftBadge.textContent = 'DRIFT x2.5';
        drsBox.appendChild(driftBadge);
      }
      driftBadge.style.display = 'block';
    } else if (driftBadge) {
      driftBadge.style.display = 'none';
    }
  }

  // Pure mathematical Euler YXZ to Quaternion converter (100% crash-proof in minified Three.js)
  function makeQuatFromYXZ(pitch, heading, roll, quatTarget) {
    const c1 = Math.cos(pitch / 2), c2 = Math.cos(heading / 2), c3 = Math.cos(roll / 2);
    const s1 = Math.sin(pitch / 2), s2 = Math.sin(heading / 2), s3 = Math.sin(roll / 2);
    const x = s1 * c2 * c3 + c1 * s2 * s3;
    const y = c1 * s2 * c3 - s1 * c2 * s3;
    const z = c1 * c2 * s3 - s1 * s2 * c3;
    const w = c1 * c2 * c3 + s1 * s2 * s3;
    if (quatTarget && typeof quatTarget.set === 'function') {
      quatTarget.set(x, y, z, w);
      return quatTarget;
    }
    return { x, y, z, w, _x: x, _y: y, _z: z, _w: w };
  }

  function updatePower(carInstance, dt, THREE, l, be, te, ie, xe, ye, ne) {
    if (ie && !(0, l.gn)(carInstance, ie, "f")) return;

    const vType = window._selectedVehicleType || getSelectedVehicleType();
    
    // Maintain wheel visibility in race
    if (xe) {
      applyWheelVisibility(carInstance, l, xe, ye, vType);
    }

    const state = (0, l.gn)(carInstance, te, "f");
    if (!state || !state.hasStarted || state.finishFrames != null) {
      const drsBox = document.getElementById('polytrack-drs-box');
      if (drsBox) drsBox.style.display = 'none';
      if (powerState.fxOverlayEl) powerState.fxOverlayEl.style.opacity = '0';
      if (powerState.crosshairEl) powerState.crosshairEl.style.opacity = '0';
      document.body.classList.remove('polytrack-flying');
      powerState.flightBlend = 0;
      powerState.flightPos = null;
      powerState.flightTime = 0;
      powerState.planeAltitude = 0;
      powerState.targetAltitude = 0;
      powerState.planeRoll = 0;
      powerState.planePitch = 0;
      powerState.planeYaw = 0;
      powerState.isFlying = false;
      powerState.isFalling = false;
      powerState.fallVy = 0;
      return;
    }

    // Hook carInstance position & orientation for plane flight if not already hooked
    if (!carInstance._planeFlightHooked) {
      carInstance._planeFlightHooked = true;
      const origGetPosition = carInstance.getPosition;
      carInstance._origGetPosition = origGetPosition;
      carInstance.getPosition = function() {
        const p = origGetPosition.call(this);
        const curType = window._selectedVehicleType || getSelectedVehicleType();
        if (curType === 'avion' && (powerState.isFlying || powerState.isFalling) && powerState.flightPos) {
          p.x = powerState.flightPos.x;
          p.y = powerState.flightPos.y;
          p.z = powerState.flightPos.z;
        }
        return p;
      };

      const origGetQuaternion = carInstance.getQuaternion;
      carInstance._origGetQuaternion = origGetQuaternion;
      carInstance.getQuaternion = function() {
        const q = origGetQuaternion.call(this);
        const curType = window._selectedVehicleType || getSelectedVehicleType();
        if (curType === 'avion' && (powerState.isFlying || powerState.isFalling) && powerState.flightQuat) {
          try {
            q.copy(powerState.flightQuat);
          } catch (e) {
            q.x = powerState.flightQuat.x;
            q.y = powerState.flightQuat.y;
            q.z = powerState.flightQuat.z;
            q.w = powerState.flightQuat.w;
          }
        }
        return q;
      };
    }

    // Check if wheels touch ground
    const contacts = state.wheelContact || [];
    const isGrounded = contacts.some(c => c != null && c !== false);
    const speed = Math.round(state.speedKmh || 0);
    const controls = carInstance.getControls ? carInstance.getControls() : {};
    const isUp = !!controls.up;
    const isDown = !!controls.down;
    const isLeft = !!controls.left;
    const isRight = !!controls.right;

    // Reset flight state on car respawn
    if (controls.reset) {
      if (powerState.crosshairEl) powerState.crosshairEl.style.opacity = '0';
      powerState.flightBlend = 0;
      powerState.planeAltitude = 0;
      powerState.targetAltitude = 0;
      powerState.flightHeading = 0;
      powerState.planeRoll = 0;
      powerState.planePitch = 0;
      powerState.planeYaw = 0;
      powerState.airThrust = 0;
      powerState.isFlying = false;
      powerState.wasFlying = false;
      powerState.isFalling = false;
      powerState.fallVy = 0;
      powerState.flightPos = null;
      powerState.flightFuel = 100;
      powerState.flightFuelCooldown = 0;
      powerState.nitroFuel = 100;
      powerState.ramEnergy = 100;
      powerState.drsEnergy = 100;
    }

    // Hide unneeded dynamic meshes for other vehicle types
    if (vType !== 'f1' && carInstance._drsFlapGroup) {
      carInstance._drsFlapGroup.visible = false;
    }
    if (vType !== 'voiture' && carInstance._gtNitroFlames) {
      carInstance._gtNitroFlames.visible = false;
    }
    if (vType !== 'avion' && carInstance._planeJetFlames) {
      carInstance._planeJetFlames.visible = false;
    }
    if (vType !== 'avion' && carInstance._planeVortexTrails) {
      carInstance._planeVortexTrails.visible = false;
    }
    if (vType !== 'camionnette' && carInstance._shockwaveMesh) {
      carInstance._shockwaveMesh.visible = false;
    }

    // --- 1. FORMULE 1: DRS (Drag Reduction System) + KERS HYBRID SURGE ---
    if (vType === 'f1') {
      const flap = ensureF1DrsFlap(carInstance, l, be, THREE, window._cachedWeakMaps && window._cachedWeakMaps.B);
      if (flap) flap.visible = true;

      const wantsDrs = powerState.drsKeyHeld || powerState.shiftKeyHeld;
      const isMovingForward = state.speedKmh > 15;
      const canDrs = powerState.drsEnergy > 2;
      const isDrsActive = wantsDrs && isMovingForward && canDrs;

      // Sound feedback on state transition: DRS open + KERS hybrid electric surge
      if (isDrsActive && !powerState.wasDrsActive) {
        AudioFX.playDrsOpen();
        AudioFX.playKersSurge();
      } else if (!isDrsActive && powerState.wasDrsActive) {
        AudioFX.playDrsClose();
      }
      powerState.wasDrsActive = isDrsActive;

      // Animate 3D DRS Flap on rear wing (rotates up ~28 degrees when open)
      const targetAngle = isDrsActive ? -0.48 : 0.0;
      powerState.drsFlapAngle += (targetAngle - powerState.drsFlapAngle) * Math.min(1, dt * 24);
      if (carInstance._drsFlapGroup) {
        carInstance._drsFlapGroup.rotation.x = powerState.drsFlapAngle;
        carInstance._drsFlapGroup.visible = true;
      }

      if (isDrsActive) {
        // Drain DRS energy at ~18%/sec (gives ~5.5s of continuous DRS)
        powerState.drsEnergy = Math.max(0, powerState.drsEnergy - 18 * dt);

        const accelBoost = controls.up ? 42 : 18;
        state.speedKmh = Math.min(345, state.speedKmh + accelBoost * dt);

        // Forward aerodynamic thrust vector
        if (state.position) {
          const q = state.quaternion || { y: 0, w: 1 };
          const forwardX = -2 * (q.x * q.z + q.w * q.y);
          const forwardZ = 1 - 2 * (q.x * q.x + q.y * q.y);
          const aeroFactor = Math.min(1.35, Math.max(0.35, state.speedKmh / 130));
          state.position.x += forwardX * (9.8 * aeroFactor) * dt;
          state.position.z += forwardZ * (9.8 * aeroFactor) * dt;
        }

        // Screen aerodynamic speed lines FX
        if (powerState.fxOverlayEl) {
          if (state.speedKmh > 180) {
            powerState.fxOverlayEl.style.background = 'radial-gradient(circle, transparent 65%, rgba(34, 197, 94, 0.20) 90%, rgba(16, 185, 129, 0.35) 100%)';
            powerState.fxOverlayEl.style.opacity = '1';
          } else {
            powerState.fxOverlayEl.style.opacity = '0';
          }
        }
      } else {
        // Regenerate DRS energy when closed at ~22%/sec (fully charged in ~4.5s)
        powerState.drsEnergy = Math.min(powerState.maxDrsEnergy, powerState.drsEnergy + 22 * dt);
        if (powerState.fxOverlayEl) {
          powerState.fxOverlayEl.style.opacity = '0';
        }
      }

      renderTelemetryHUD({
        label: isDrsActive ? 'DRS+KERS' : 'DRS',
        percent: powerState.drsEnergy,
        isReady: isMovingForward && powerState.drsEnergy > 5,
        isActive: isDrsActive,
        glowColor: isDrsActive ? 'rgba(56, 189, 248, 0.95)' : 'rgba(34, 197, 94, 0.9)',
        bgColor: isDrsActive ? 'rgba(14, 116, 144, 0.95)' : 'rgba(21, 128, 61, 0.95)',
        shiftLights: true,
        speed: state.speedKmh
      });
    }

    // --- 2. VOITURE: TURBO NITRO BOOST & 3D REACTIVE FLAMES ---
    else if (vType === 'voiture') {
      const flames = ensureGtNitroFlames(carInstance, l, be, THREE, window._cachedWeakMaps && window._cachedWeakMaps.B);
      const wantsNitro = powerState.shiftKeyHeld || powerState.spaceKeyHeld || (controls.up && state.speedKmh > 190 && powerState.nitroFuel > 15);
      const isNitroActive = wantsNitro && powerState.nitroFuel > 2;

      if (isNitroActive && !powerState.wasNitroBoosting) {
        AudioFX.startTurbo();
        AudioFX.playTurboSpool();
      } else if (!isNitroActive && powerState.wasNitroBoosting) {
        AudioFX.stopTurbo();
        AudioFX.playTurboBlowoff();
        AudioFX.playAntiLagPop();
      }
      powerState.wasNitroBoosting = isNitroActive;
      powerState.isNitroBoosting = isNitroActive;

      // 3D reactive flame jitter
      if (flames) {
        flames.visible = isNitroActive;
        if (isNitroActive) {
          const jitter = 0.88 + Math.random() * 0.28;
          flames.scale.set(jitter, jitter, 1.0 + Math.random() * 0.4);
        }
      }

      const isDrifting = Math.abs(state.angularVelocity ? state.angularVelocity.y : 0) > 0.85;

      if (isNitroActive) {
        AudioFX.updateTurbo(state.speedKmh);
        // Nitro fuel drains at 25%/sec (~4 seconds of boost)
        powerState.nitroFuel = Math.max(0, powerState.nitroFuel - 25 * dt);
        state.speedKmh = Math.min(330, state.speedKmh + 45 * dt);

        if (state.position) {
          const q = state.quaternion || { y: 0, w: 1 };
          const forwardX = -2 * (q.x * q.z + q.w * q.y);
          const forwardZ = 1 - 2 * (q.x * q.x + q.y * q.y);
          state.position.x += forwardX * 10.2 * dt;
          state.position.z += forwardZ * 10.2 * dt;
        }

        if (powerState.fxOverlayEl) {
          powerState.fxOverlayEl.style.background = 'radial-gradient(circle, transparent 65%, rgba(6, 182, 212, 0.25) 90%, rgba(14, 165, 233, 0.45) 100%)';
          powerState.fxOverlayEl.style.opacity = '1';
        }
      } else {
        // Regenerates at 22%/sec (or 55%/sec when drifting!)
        const rechargeRate = isDrifting ? 55 : 22;
        powerState.nitroFuel = Math.min(powerState.maxNitro, powerState.nitroFuel + rechargeRate * dt);
        if (powerState.fxOverlayEl) {
          powerState.fxOverlayEl.style.opacity = '0';
        }
      }

      renderTelemetryHUD({
        label: isDrifting ? 'DRIFT x2.5' : 'BOOST',
        percent: powerState.nitroFuel,
        isReady: powerState.nitroFuel > 5,
        isActive: isNitroActive,
        glowColor: 'rgba(0, 229, 255, 0.9)',
        bgColor: 'rgba(8, 145, 178, 0.95)',
        driftBonus: isDrifting
      });
    }

    // --- 3. CAMIONNETTE: BÉLIER CINÉTIQUE & SUPER GROUND SLAM ---
    else if (vType === 'camionnette') {
      const shockwave = ensureCamionnetteShockwave(carInstance, l, be, THREE, window._cachedWeakMaps && window._cachedWeakMaps.B);
      const wantsRam = powerState.shiftKeyHeld;
      const isRamActive = wantsRam && powerState.ramEnergy > 2;

      if (isRamActive && !powerState.wasRamming) {
        AudioFX.playKineticRam();
      }
      powerState.wasRamming = isRamActive;
      powerState.isRamming = isRamActive;

      if (isRamActive) {
        // Ram energy drains at 25%/sec (~4 seconds of boost)
        powerState.ramEnergy = Math.max(0, powerState.ramEnergy - 25 * dt);
        state.speedKmh = Math.min(285, state.speedKmh + 24 * dt);

        // Anti-spin heavy bulldozer stabilization
        if (state.angularVelocity) {
          state.angularVelocity.x *= 0.75;
          state.angularVelocity.y *= 0.85;
          state.angularVelocity.z *= 0.75;
        }
        if (state.position) {
          const q = state.quaternion || { y: 0, w: 1 };
          const forwardX = -2 * (q.x * q.z + q.w * q.y);
          const forwardZ = 1 - 2 * (q.x * q.x + q.y * q.y);
          state.position.x += forwardX * 6.8 * dt;
          state.position.z += forwardZ * 6.8 * dt;
        }
        if (powerState.fxOverlayEl) {
          powerState.fxOverlayEl.style.background = 'radial-gradient(circle, transparent 65%, rgba(245, 158, 11, 0.22) 90%, rgba(217, 119, 6, 0.38) 100%)';
          powerState.fxOverlayEl.style.opacity = '1';
        }
      } else {
        // Regenerates at 22%/sec
        powerState.ramEnergy = Math.min(powerState.maxRamEnergy, powerState.ramEnergy + 22 * dt);
        if (powerState.fxOverlayEl && !powerState.slamTriggered) {
          powerState.fxOverlayEl.style.opacity = '0';
        }
      }

      // Ground slam detection on landing
      if (!isGrounded) {
        powerState.airborneFrames++;
        if (powerState.airborneFrames > 12) powerState.slamCharged = true;
      } else {
        if (powerState.slamCharged) {
          powerState.slamCharged = false;
          state.speedKmh = Math.min(295, state.speedKmh + 32);
          AudioFX.playGroundSlam();
          AudioFX.playShockwaveImpact();
          powerState.slamTriggered = true;
          powerState.shockwaveScale = 0.5;
          if (shockwave) {
            shockwave.visible = true;
            shockwave.scale.set(0.5, 1.0, 0.5);
          }
          if (powerState.fxOverlayEl) {
            powerState.fxOverlayEl.style.background = 'radial-gradient(circle, transparent 50%, rgba(245, 158, 11, 0.48) 100%)';
            powerState.fxOverlayEl.style.opacity = '1';
            setTimeout(() => { if (powerState.fxOverlayEl && !powerState.isRamming) powerState.fxOverlayEl.style.opacity = '0'; }, 340);
          }
          setTimeout(() => {
            powerState.slamTriggered = false;
            if (shockwave) shockwave.visible = false;
          }, 600);
        }
        powerState.airborneFrames = 0;
      }

      // Animate expanding 3D shockwave ring
      if (powerState.slamTriggered && shockwave) {
        powerState.shockwaveScale = (powerState.shockwaveScale || 0.5) + dt * 5.0;
        shockwave.scale.set(powerState.shockwaveScale, 1.0, powerState.shockwaveScale);
        if (powerState.shockwaveScale > 2.6) {
          shockwave.visible = false;
        }
      }

      renderTelemetryHUD({
        label: powerState.slamCharged ? 'SLAM READY' : (powerState.slamTriggered ? 'IMPACT !' : 'BOOST'),
        percent: powerState.ramEnergy,
        isReady: powerState.ramEnergy > 5 || powerState.slamCharged,
        isActive: isRamActive || powerState.slamTriggered,
        glowColor: 'rgba(245, 158, 11, 0.9)',
        bgColor: 'rgba(180, 83, 9, 0.95)'
      });
    }

    // --- 4. AVION: VOL AÉRODYNAMIQUE 3D COMPLET & CHUTE LIBRE NATURELLE (PAS D'ATTERRISSAGE FORCÉ) ---
    else if (vType === 'avion') {
      const jetFlames = ensurePlaneJetFlames(carInstance, l, be, THREE, window._cachedWeakMaps && window._cachedWeakMaps.B);
      const vortexTrails = ensurePlaneVortexTrails(carInstance, l, be, THREE, window._cachedWeakMaps && window._cachedWeakMaps.B);
      const inputCtrl = ne ? (0, l.gn)(carInstance, ne, "f") : null;

      // Détection contact sol réel
      if (!isGrounded) {
        powerState.airborneFrames++;
      } else {
        powerState.airborneFrames = 0;
      }

      // Ensure flightQuat exists
      if (!powerState.flightQuat) {
        const QuatClass = (THREE && (THREE.Quaternion || THREE.PTz)) || (carInstance.getQuaternion ? carInstance.getQuaternion().constructor : null);
        if (QuatClass) {
          try {
            powerState.flightQuat = new QuatClass();
          } catch (e) {}
        }
      }

      // Rechargement progressif du carburant AU SOL UNIQUEMENT avec temps de recharge (pas instantané !)
      const onRealGround = isGrounded && !powerState.isFlying && !powerState.isFalling && powerState.airborneFrames === 0;
      if (onRealGround) {
        if (powerState.flightFuelCooldown > 0) {
          powerState.flightFuelCooldown = Math.max(0, powerState.flightFuelCooldown - dt);
        } else if (powerState.flightFuel < powerState.maxFlightFuel) {
          // Recharge douce et progressive (~12.5%/s -> ~8s pour une jauge pleine)
          powerState.flightFuel = Math.min(powerState.maxFlightFuel, powerState.flightFuel + 12.5 * dt);
          if (powerState.flightFuel >= 100 && powerState.wasRechargingFuel) {
            AudioFX.playFuelReadyBeep();
            powerState.wasRechargingFuel = false;
          } else if (powerState.flightFuel < 100) {
            powerState.wasRechargingFuel = true;
          }
        }
      }

      // Condition de décollage : être en l'air avec un minimum de 15% de fuel (évite les micro-décollages saccadés)
      const canTakeoff = powerState.flightFuel >= 15;

      // Flight Takeoff Trigger:
      // Active dès que le véhicule quitte le sol (tremplin / saut) avec au moins 15% de fuel
      if (!powerState.isFlying && !powerState.isFalling && !isGrounded && powerState.airborneFrames >= 1 && canTakeoff) {
        powerState.isFlying = true;
        powerState.isFalling = false;
        powerState.flightTime = 0;
        const p = state.position || { x: 0, y: 0, z: 0 };
        powerState.flightPos = { x: p.x, y: p.y, z: p.z };
        powerState.takeoffGroundY = p.y;
        powerState.flightSpeed = Math.min(270, Math.max(180, (state.speedKmh || 220)));
        powerState.fallVy = 0;

        // Capture initial launch heading from vehicle orientation
        const sq = state.quaternion || { x: 0, y: 0, z: 0, w: 1 };
        const fx = 2 * (sq.x * sq.z + sq.w * sq.y);
        const fz = 1 - 2 * (sq.x * sq.x + sq.y * sq.y);
        powerState.flightHeading = Math.atan2(fx, fz);
        powerState.planePitch = 0;
        powerState.planeRoll = 0;
        powerState.planeYaw = 0;
        
        AudioFX.startJet(powerState.flightSpeed);
        AudioFX.playAfterburnerBoom();
      }

      // Normalized mouse offset with ultra-tight deadzone for instant response and center stability
      const deadzone = 0.015;
      let aimX = 0;
      if (Math.abs(powerState.mouseAimX) > deadzone) {
        aimX = (powerState.mouseAimX - Math.sign(powerState.mouseAimX) * deadzone) / (1 - deadzone);
      }
      let aimY = 0;
      if (Math.abs(powerState.mouseAimY) > deadzone) {
        aimY = (powerState.mouseAimY - Math.sign(powerState.mouseAimY) * deadzone) / (1 - deadzone);
      }

      // --- CAS 1 : VOL ACTIF PROPULSÉ (isFlying) ---
      if (powerState.isFlying) {
        powerState.flightTime += dt;

        // Interactive Flight Modes: Afterburner & Airbrake
        const wantsAfterburner = (powerState.shiftKeyHeld || powerState.spaceKeyHeld || powerState.mouseLeftClick) && powerState.flightFuel > 2;
        const wantsAirbrake = (powerState.sKeyHeld || powerState.mouseRightClick) && !wantsAfterburner;

        if (wantsAfterburner && !powerState.wasAfterburner) {
          AudioFX.playAfterburnerBoom();
        }
        if (wantsAirbrake && !powerState.wasAirbrake) {
          AudioFX.playAirbrakeHiss();
        }
        powerState.wasAfterburner = wantsAfterburner;
        powerState.wasAirbrake = wantsAirbrake;
        powerState.isAfterburner = wantsAfterburner;
        powerState.isAirbrake = wantsAirbrake;

        // Dynamic Fuel Consumption rate:
        // Afterburner consumes ~24%/s, Airbrake saves fuel at ~7.5%/s, Cruise consumes ~15%/s
        const fuelDrainRate = wantsAfterburner ? 24.0 : (wantsAirbrake ? 7.5 : 15.0);
        powerState.flightFuel = Math.max(0, powerState.flightFuel - fuelDrainRate * dt);

        document.body.classList.add('polytrack-flying');

        // Commandes : plein gaz automatique en vol, neutralisation des touches gauche/droite pour pilotage souris pur
        if (inputCtrl) {
          inputCtrl.up = true;
          inputCtrl.left = false;
          inputCtrl.right = false;
          inputCtrl.down = false;
        }

        // 1. Déflexion du cap et attitude selon la souris
        if (Math.abs(aimX) > 0.005) {
          powerState.flightHeading -= aimX * (wantsAirbrake ? 4.2 : 3.6) * dt;
        }
        const targetYaw = -aimX * 0.38;
        const targetRoll = aimX * 0.38;
        const targetPitch = aimY * 0.38;

        const snapRate = Math.min(1.0, dt * 32.0);
        powerState.planeYaw += (targetYaw - powerState.planeYaw) * snapRate;
        powerState.planePitch += (targetPitch - powerState.planePitch) * snapRate;
        powerState.planeRoll += (targetRoll - powerState.planeRoll) * snapRate;

        const totalYaw = powerState.flightHeading + (powerState.planeYaw || 0);

        if (powerState.flightQuat) {
          try {
            makeQuatFromYXZ(powerState.planePitch, totalYaw, powerState.planeRoll, powerState.flightQuat);
            if (state.quaternion) {
              state.quaternion.x = powerState.flightQuat.x;
              state.quaternion.y = powerState.flightQuat.y;
              state.quaternion.z = powerState.flightQuat.z;
              state.quaternion.w = powerState.flightQuat.w;
            }
          } catch (e) {}
        }

        // 2. Vitesse et propulsion : Afterburner (jusqu'à 330 km/h) / Airbrake (160 km/h) / Cruise (285 km/h)
        if (wantsAfterburner) {
          powerState.flightSpeed = Math.min(330, (powerState.flightSpeed || 220) + 52 * dt);
        } else if (wantsAirbrake) {
          powerState.flightSpeed = Math.max(160, (powerState.flightSpeed || 220) - 75 * dt);
        } else {
          powerState.flightSpeed = Math.min(285, (powerState.flightSpeed || 220) + 24 * dt);
        }
        state.speedKmh = powerState.flightSpeed;
        const speedMps = powerState.flightSpeed / 3.6;

        // Modulation de la boucle sonore continue de turbine
        AudioFX.updateJet(powerState.flightSpeed, wantsAfterburner, wantsAirbrake);

        // Vitesse verticale (Vy)
        let Vy = 0;
        if (aimY < 0) {
          const climb = -aimY;
          Vy = 6.0 + climb * (wantsAfterburner ? 32.0 : 24.0);
        } else if (aimY > 0) {
          const dive = aimY;
          Vy = -dive * (wantsAirbrake ? 16.0 : 26.0);
        } else {
          Vy = wantsAirbrake ? -0.5 : 1.0;
        }

        const pitchCos = Math.cos(powerState.planePitch);
        const forwardSpeed = speedMps * Math.max(0.7, pitchCos);
        const Vx = -Math.sin(totalYaw) * forwardSpeed;
        const Vz = Math.cos(totalYaw) * forwardSpeed;

        if (!powerState.flightPos && state.position) {
          powerState.flightPos = { x: state.position.x, y: state.position.y, z: state.position.z };
        }
        if (powerState.flightPos) {
          powerState.flightPos.x += Vx * dt;
          powerState.flightPos.y += Vy * dt;
          powerState.flightPos.z += Vz * dt;

          if (state.position) {
            state.position.x = powerState.flightPos.x;
            state.position.y = powerState.flightPos.y;
            state.position.z = powerState.flightPos.z;
          }
          if (state.velocity) {
            state.velocity.x = Vx;
            state.velocity.y = Vy;
            state.velocity.z = Vz;
          }
        }

        // 3. Effets Visuels : Screen FX Overlay
        if (powerState.fxOverlayEl) {
          if (wantsAfterburner) {
            powerState.fxOverlayEl.style.background = 'radial-gradient(circle, transparent 58%, rgba(244, 63, 94, 0.22) 85%, rgba(192, 132, 252, 0.40) 100%)';
            powerState.fxOverlayEl.style.opacity = '1';
          } else if (wantsAirbrake) {
            powerState.fxOverlayEl.style.background = 'radial-gradient(circle, transparent 65%, rgba(56, 189, 248, 0.20) 95%)';
            powerState.fxOverlayEl.style.opacity = '1';
          } else {
            powerState.fxOverlayEl.style.background = 'radial-gradient(circle, transparent 68%, rgba(168, 85, 247, 0.16) 90%, rgba(192, 132, 252, 0.28) 100%)';
            powerState.fxOverlayEl.style.opacity = '1';
          }
        }

        // 4. 3D Jet Flames Modulation
        if (jetFlames) {
          jetFlames.visible = true;
          if (wantsAfterburner) {
            const j = 1.35 + Math.random() * 0.35;
            jetFlames.scale.set(j, j, 1.6 + Math.random() * 0.4);
          } else if (wantsAirbrake) {
            const j = 0.45 + Math.random() * 0.15;
            jetFlames.scale.set(j, j, 0.55);
          } else {
            const j = 0.85 + Math.random() * 0.25;
            jetFlames.scale.set(j, j, 1.05 + Math.random() * 0.3);
          }
        }

        // 5. 3D Wingtip Vortex Vapor Trails
        const isHighG = Math.abs(aimX) > 0.32 || wantsAfterburner || wantsAirbrake;
        if (vortexTrails) {
          vortexTrails.visible = isHighG;
          if (isHighG) {
            vortexTrails.scale.set(1.0, 1.0, 0.85 + Math.random() * 0.3);
          }
        }

        // Fin du vol propulsé :
        // 1. Plus de carburant -> PAS D'ATTERRISSAGE FORCÉ ! L'AVION COMMENCE SA CHUTE LIBRE NATURELLE
        if (powerState.flightFuel <= 0) {
          powerState.isFlying = false;
          powerState.isFalling = true; // Déclenche la chute libre sous gravité
          powerState.fallVy = Vy;
          powerState.flightFuelCooldown = 2.5; // Cooldown de 2.5s après la fin du vol
          AudioFX.stopJet();
          if (jetFlames) jetFlames.visible = false;
          if (vortexTrails) vortexTrails.visible = false;
        }
        // 2. Vol en piqué vers la piste qui atteint le sol réel
        else if (powerState.flightTime > 0.5 && powerState.flightPos && powerState.flightPos.y <= (powerState.takeoffGroundY + 0.4) && (isGrounded || powerState.flightPos.y <= powerState.takeoffGroundY)) {
          powerState.isFlying = false;
          powerState.isFalling = false;
          powerState.flightPos = null;
          powerState.flightFuelCooldown = 2.0;
          AudioFX.stopJet();
          AudioFX.playTouchdown();
          if (jetFlames) jetFlames.visible = false;
          if (vortexTrails) vortexTrails.visible = false;
        }
      }

      // --- CAS 2 : CHUTE LIBRE NATURELLE SOUS GRAVITÉ ("FAIT QUE JUSTE ON TOMBE") ---
      else if (powerState.isFalling && powerState.flightPos) {
        document.body.classList.remove('polytrack-flying');
        if (powerState.fxOverlayEl) powerState.fxOverlayEl.style.opacity = '0';
        if (jetFlames) jetFlames.visible = false;
        if (vortexTrails) vortexTrails.visible = false;
        AudioFX.stopJet();

        // Gravité accélérant la chute vers le bas
        powerState.fallVy = (powerState.fallVy || 0) - 26.0 * dt;

        // Vitesse horizontale amortie progressivement par la traînée de l'air
        powerState.flightSpeed = Math.max(0, (powerState.flightSpeed || 200) - 16.0 * dt);
        state.speedKmh = powerState.flightSpeed;
        const speedMps = powerState.flightSpeed / 3.6;

        const totalYaw = powerState.flightHeading + (powerState.planeYaw || 0);
        const Vx = -Math.sin(totalYaw) * speedMps;
        const Vz = Math.cos(totalYaw) * speedMps;

        powerState.flightPos.x += Vx * dt;
        powerState.flightPos.y += powerState.fallVy * dt;
        powerState.flightPos.z += Vz * dt;

        if (state.position) {
          state.position.x = powerState.flightPos.x;
          state.position.y = powerState.flightPos.y;
          state.position.z = powerState.flightPos.z;
        }
        if (state.velocity) {
          state.velocity.x = Vx;
          state.velocity.y = powerState.fallVy;
          state.velocity.z = Vz;
        }

        // Nez plongeant naturellement selon le vecteur de vitesse de chute
        const targetPitch = Math.max(-0.6, Math.min(0.6, Math.atan2(-powerState.fallVy, Math.max(4, speedMps))));
        powerState.planePitch += (targetPitch - powerState.planePitch) * Math.min(1.0, dt * 6.0);
        powerState.planeRoll += (0 - powerState.planeRoll) * Math.min(1.0, dt * 4.0);

        if (powerState.flightQuat) {
          try {
            makeQuatFromYXZ(powerState.planePitch, totalYaw, powerState.planeRoll, powerState.flightQuat);
            if (state.quaternion) {
              state.quaternion.x = powerState.flightQuat.x;
              state.quaternion.y = powerState.flightQuat.y;
              state.quaternion.z = powerState.flightQuat.z;
              state.quaternion.w = powerState.flightQuat.w;
            }
          } catch (e) {}
        }

        // Fin de la chute libre : contact avec la piste ou le sol
        if (powerState.flightPos.y <= (powerState.takeoffGroundY + 0.3) || (isGrounded && powerState.flightPos.y <= powerState.takeoffGroundY + 1.2)) {
          powerState.isFalling = false;
          powerState.flightPos = null;
          powerState.flightFuelCooldown = 2.5; // Cooldown de 2.5s avant de démarrer la recharge
          AudioFX.playTouchdown();
        }
      }

      // --- CAS 3 : AU SOL (100% ZQSD SANS INTERFÉRENCE) ---
      else {
        document.body.classList.remove('polytrack-flying');
        if (powerState.fxOverlayEl) powerState.fxOverlayEl.style.opacity = '0';
        if (jetFlames) jetFlames.visible = false;
        if (vortexTrails) vortexTrails.visible = false;
        AudioFX.stopJet();
        powerState.flightPos = null;
        powerState.isFalling = false;
        powerState.isFlying = false;
        powerState.isAfterburner = false;
        powerState.isAirbrake = false;
        powerState.planePitch = 0;
        powerState.planeRoll = 0;
        powerState.planeYaw = 0;
      }

      // Viseur HUD Cockpit de chasse : visible UNIQUEMENT pendant le vol actif propulsé
      const crosshair = ensureFlightCrosshair();
      if (crosshair) {
        const crosshairOpacity = powerState.isFlying ? 1 : 0;
        crosshair.style.opacity = String(crosshairOpacity);
        if (powerState.isFlying) {
          crosshair.style.left = powerState.mouseX + 'px';
          crosshair.style.top = powerState.mouseY + 'px';

          // Orientation des ailes d'horizon artificiel selon le roulis de l'avion
          const wingsEl = crosshair.querySelector('.hud-horizon-wings');
          if (wingsEl) {
            const rollDeg = (-(powerState.planeRoll || 0) * (180 / Math.PI)).toFixed(1);
            wingsEl.setAttribute('transform', `rotate(${rollDeg} 70 30)`);
          }

          // Badge de vitesse numérique
          const speedEl = crosshair.querySelector('.hud-speed-badge');
          if (speedEl) {
            speedEl.textContent = Math.round(powerState.flightSpeed || 220) + ' KM/H';
          }

          // Badge de mode interactif
          const modeEl = crosshair.querySelector('.hud-mode-badge');
          if (modeEl) {
            if (powerState.isAfterburner) {
              modeEl.textContent = '🔥 AFTERBURNER';
              modeEl.style.color = '#f43f5e';
              modeEl.style.borderColor = '#f43f5e';
              modeEl.style.textShadow = '0 0 8px rgba(244, 63, 94, 0.85)';
            } else if (powerState.isAirbrake) {
              modeEl.textContent = '🛑 AIRBRAKE';
              modeEl.style.color = '#38bdf8';
              modeEl.style.borderColor = '#38bdf8';
              modeEl.style.textShadow = '0 0 8px rgba(56, 189, 248, 0.85)';
            } else {
              modeEl.textContent = '✈️ CRUISE';
              modeEl.style.color = '#c084fc';
              modeEl.style.borderColor = '#c084fc';
              modeEl.style.textShadow = '0 0 8px rgba(192, 132, 252, 0.6)';
            }
          }
        }
      }

      // HUD télémétrie FLIGHT
      const isCoolingDown = onRealGround && powerState.flightFuelCooldown > 0;
      renderTelemetryHUD({
        label: isCoolingDown ? 'COOLDOWN' : (powerState.isAfterburner ? 'BURNER' : (powerState.isAirbrake ? 'AIRBRAKE' : 'FLIGHT')),
        percent: powerState.flightFuel,
        isReady: powerState.flightFuel >= 15,
        isActive: powerState.isFlying,
        glowColor: powerState.isFlying 
          ? (powerState.isAfterburner ? 'rgba(244, 63, 94, 0.95)' : (powerState.isAirbrake ? 'rgba(56, 189, 248, 0.95)' : 'rgba(168, 85, 247, 0.95)'))
          : (powerState.isFalling ? 'rgba(239, 68, 68, 0.85)' : 'rgba(56, 189, 248, 0.85)'),
        bgColor: powerState.isFlying 
          ? (powerState.isAfterburner ? 'rgba(159, 18, 57, 0.95)' : (powerState.isAirbrake ? 'rgba(14, 116, 144, 0.95)' : 'rgba(126, 34, 206, 0.95)'))
          : (powerState.isFalling ? 'rgba(153, 27, 27, 0.95)' : 'rgba(14, 116, 144, 0.95)')
      });
    }
  }

  function disposePower() {
    try { AudioFX.stopJet(); } catch (e) {}
    try { AudioFX.stopTurbo(); } catch (e) {}
    const drsBox = document.getElementById('polytrack-drs-box');
    if (drsBox && drsBox.parentNode) {
      drsBox.parentNode.removeChild(drsBox);
    }
    const oldHud = document.getElementById('polytrack-power-hud');
    if (oldHud && oldHud.parentNode) {
      oldHud.parentNode.removeChild(oldHud);
    }
    if (powerState.fxOverlayEl && powerState.fxOverlayEl.parentNode) {
      powerState.fxOverlayEl.parentNode.removeChild(powerState.fxOverlayEl);
      powerState.fxOverlayEl = null;
    }
    if (powerState.crosshairEl && powerState.crosshairEl.parentNode) {
      powerState.crosshairEl.parentNode.removeChild(powerState.crosshairEl);
      powerState.crosshairEl = null;
    }
    document.body.classList.remove('polytrack-flying');
    powerState.isFlying = false;
    powerState.wasFlying = false;
    powerState.isFalling = false;
    powerState.wasFalling = false;
    powerState.isAfterburner = false;
    powerState.wasAfterburner = false;
    powerState.isAirbrake = false;
    powerState.wasAirbrake = false;
    powerState.fallVy = 0;
    powerState.flightPos = null;
    powerState.flightTime = 0;
    powerState.flightFuelCooldown = 0;
    powerState.planeAltitude = 0;
    powerState.planeRoll = 0;
    powerState.planePitch = 0;
    powerState.planeYaw = 0;
    powerState.isNitroBoosting = false;
    powerState.isDrsActive = false;
    powerState.wasDrsActive = false;
    powerState.isRamming = false;
    powerState.wasRamming = false;
  }

  // --- 6. GARAGE UI ENHANCEMENTS & SHOWROOM STYLING ---
  function injectGlobalStyles() {
    let style = document.getElementById('polytrack-enhanced-ui-styles');
    if (!style) {
      style = document.createElement('style');
      style.id = 'polytrack-enhanced-ui-styles';
      document.head.appendChild(style);
    }
    style.textContent = `
      /* Vehicle Options Panel: exactly like native PolyTrack options panels (Rims, Patterns, Exhausts) */
      .customization-panel-ui > .vehicle-options-panel {
        z-index: 10;
      }
      .customization-panel-ui > .options-panel > button.vehicle-option-btn {
        position: relative;
        display: block;
        margin: 0 0 2px 0;
        padding: 5px;
        background-color: var(--button-color);
        border: 2px solid rgb(38, 31, 88);
        cursor: pointer;
        box-sizing: border-box;
      }
      .customization-panel-ui > .options-panel > button.vehicle-option-btn:hover {
        background-color: var(--button-hover-color);
      }
      .customization-panel-ui > .options-panel > button.vehicle-option-btn.selected {
        background-color: var(--button-hover-color);
        box-shadow: inset 0 0 5px #fff;
        border: 2px solid #fff;
      }
      .customization-panel-ui > .options-panel > button.vehicle-option-btn > img {
        display: block;
        margin: 0 auto;
        padding: 0;
        width: 128px;
        height: 128px;
        filter: drop-shadow(0 0 2px #000);
        pointer-events: none;
      }
      .customization-panel-ui > .options-panel > button.vehicle-option-btn .vehicle-pill-badge {
        position: absolute;
        bottom: 6px;
        left: 6px;
        right: 6px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgba(10, 15, 29, 0.88);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 3px;
        padding: 3px 6px;
        pointer-events: none;
        font-family: inherit;
      }
      .customization-panel-ui > .options-panel > button.vehicle-option-btn .vehicle-pill-badge .v-name {
        font-size: 11px;
        font-weight: 900;
        color: #fff;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }
      .customization-panel-ui > .options-panel > button.vehicle-option-btn .vehicle-pill-badge .v-badge {
        font-size: 9px;
        font-weight: 800;
        color: #fff;
        padding: 1px 5px;
        border-radius: 2px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }
      /* Speedometer UI container */
      .speedometer-ui {
        overflow: visible !important;
      }

      /* Guaranteed restoration of native KM/H box */
      .speedometer-ui > .box:not(.polytrack-drs-box),
      .speedometer-ui .box:not(.polytrack-drs-box) {
        margin: 0 !important;
        padding: 8px 10px !important;
        min-width: 140px !important;
        line-height: 0 !important;
        font-size: 40px !important;
        color: var(--text-color, #ffffff) !important;
        text-align: right !important;
        opacity: 0.9 !important;
        clip-path: polygon(8px 0, 100% 0, 100% 100%, 0 100%) !important;
        background-color: var(--surface-color, #0b1226) !important;
        display: block !important;
      }

      .speedometer-ui.up > .box:not(.polytrack-drs-box),
      .speedometer-ui.up .box:not(.polytrack-drs-box) {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 8px 100%) !important;
      }

      .speedometer-ui > .box:not(.polytrack-drs-box) > .container,
      .speedometer-ui .box:not(.polytrack-drs-box) > .container {
        margin: 0 !important;
        padding: 0 0 0 16px !important;
        clip-path: polygon(6px 0, 100% 0, 100% 100%, 0 100%) !important;
        background-color: var(--surface-tertiary-color, #1a2544) !important;
        display: flex !important;
        align-items: center !important;
        justify-content: flex-end !important;
        box-sizing: border-box !important;
      }

      .speedometer-ui.up > .box:not(.polytrack-drs-box) > .container,
      .speedometer-ui.up .box:not(.polytrack-drs-box) > .container {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 6px 100%) !important;
      }

      .speedometer-ui > .box:not(.polytrack-drs-box) > .container > span:last-of-type,
      .speedometer-ui .box:not(.polytrack-drs-box) > .container > span:last-of-type {
        opacity: 0.5 !important;
        margin: 0 0.3em 0 0.25em !important;
        padding: 0 !important;
        font-size: 0.5em !important;
      }
      .speedometer-ui > .box:not(.polytrack-drs-box) > .container > span > span,
      .speedometer-ui .box:not(.polytrack-drs-box) > .container > span > span {
        display: inline-block !important;
        width: 0.5em !important;
        text-align: center !important;
      }

      /* Native-Style Telemetry Power Box (DRS / BOOST / FLIGHT / SLAM) to the left of KM/H */
      .speedometer-ui #polytrack-drs-box,
      .speedometer-ui > #polytrack-drs-box {
        position: absolute !important;
        right: 100% !important;
        bottom: 0 !important;
        margin: 0 4px 0 0 !important;
        padding: 8px 10px !important;
        min-width: 108px !important;
        line-height: normal !important;
        color: var(--text-color, #ffffff) !important;
        text-align: center !important;
        opacity: 0.92 !important;
        clip-path: polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%) !important;
        background-color: var(--surface-color, #0b1226) !important;
        cursor: pointer !important;
        user-select: none !important;
        display: flex !important;
        box-sizing: border-box !important;
        transition: transform 0.08s ease, filter 0.12s ease !important;
        z-index: 10 !important;
      }

      .speedometer-ui.up #polytrack-drs-box,
      .speedometer-ui.up > #polytrack-drs-box {
        bottom: auto !important;
        top: 0 !important;
        clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%) !important;
      }

      .speedometer-ui #polytrack-drs-box > .container,
      .speedometer-ui > #polytrack-drs-box > .container {
        position: relative !important;
        margin: 0 !important;
        padding: 4px 12px 7px 12px !important;
        clip-path: polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%) !important;
        background-color: var(--surface-tertiary-color, #1a2544) !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: stretch !important;
        justify-content: center !important;
        width: 100% !important;
        height: 100% !important;
        box-sizing: border-box !important;
        transition: background-color 0.12s ease, box-shadow 0.12s ease !important;
      }

      .speedometer-ui.up #polytrack-drs-box > .container,
      .speedometer-ui.up > #polytrack-drs-box > .container {
        clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 100%, 6px 100%) !important;
      }

      .speedometer-ui #polytrack-drs-box .drs-content,
      .speedometer-ui > #polytrack-drs-box .drs-content {
        display: flex !important;
        align-items: baseline !important;
        justify-content: space-between !important;
        gap: 6px !important;
        width: 100% !important;
      }

      .speedometer-ui #polytrack-drs-box .drs-label,
      .speedometer-ui > #polytrack-drs-box .drs-label {
        font-family: ForcedSquare, forced_square, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        font-size: 20px !important;
        font-weight: 900 !important;
        font-style: italic !important;
        letter-spacing: 1.2px !important;
        color: var(--text-color, #ffffff) !important;
        opacity: 0.55 !important;
        text-transform: uppercase !important;
        white-space: nowrap !important;
        transition: opacity 0.12s ease, color 0.12s ease, text-shadow 0.12s ease !important;
      }

      .speedometer-ui #polytrack-drs-box .drs-pct,
      .speedometer-ui > #polytrack-drs-box .drs-pct {
        font-family: ForcedSquare, forced_square, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        font-size: 15px !important;
        font-weight: 900 !important;
        font-style: italic !important;
        letter-spacing: 0.5px !important;
        color: #ffffff !important;
        opacity: 0.75 !important;
        text-align: right !important;
        white-space: nowrap !important;
        min-width: 36px !important;
        transition: opacity 0.12s ease, color 0.12s ease, text-shadow 0.12s ease !important;
      }

      .speedometer-ui #polytrack-drs-box .drs-meter,
      .speedometer-ui > #polytrack-drs-box .drs-meter {
        position: absolute !important;
        bottom: 3px !important;
        left: 8px !important;
        right: 8px !important;
        height: 3px !important;
        background: rgba(255, 255, 255, 0.15) !important;
        border-radius: 2px !important;
        overflow: hidden !important;
      }

      .speedometer-ui #polytrack-drs-box .drs-meter-fill,
      .speedometer-ui > #polytrack-drs-box .drs-meter-fill {
        height: 100% !important;
        width: 100%;
        background-color: var(--drs-glow, #22c55e) !important;
        box-shadow: 0 0 6px var(--drs-glow, #22c55e) !important;
        border-radius: 2px !important;
        transition: width 0.06s linear, background-color 0.15s ease !important;
      }

      /* Ready State: Available to fire */
      .speedometer-ui #polytrack-drs-box.ready .drs-label,
      .speedometer-ui > #polytrack-drs-box.ready .drs-label {
        opacity: 0.95 !important;
        color: #ffffff !important;
      }
      .speedometer-ui #polytrack-drs-box.ready .drs-pct,
      .speedometer-ui > #polytrack-drs-box.ready .drs-pct {
        opacity: 0.95 !important;
      }

      /* Active State: [Shift] held & power running */
      .speedometer-ui #polytrack-drs-box.active,
      .speedometer-ui > #polytrack-drs-box.active {
        transform: translateY(2px) !important;
        filter: drop-shadow(0 0 10px var(--drs-glow, rgba(34, 197, 94, 0.85))) !important;
      }
      .speedometer-ui #polytrack-drs-box.active > .container,
      .speedometer-ui > #polytrack-drs-box.active > .container {
        background-color: var(--drs-bg, rgba(21, 128, 61, 0.95)) !important;
      }
      .speedometer-ui #polytrack-drs-box.active .drs-label,
      .speedometer-ui > #polytrack-drs-box.active .drs-label {
        opacity: 1 !important;
        color: #ffffff !important;
        text-shadow: 0 0 10px #ffffff, 0 0 18px var(--drs-glow, #4ade80) !important;
      }
      .speedometer-ui #polytrack-drs-box.active .drs-pct,
      .speedometer-ui > #polytrack-drs-box.active .drs-pct {
        opacity: 1 !important;
        color: #ffffff !important;
        text-shadow: 0 0 8px #ffffff, 0 0 14px var(--drs-glow, #4ade80) !important;
      }

      /* Disabled State: empty / recharging */
      .speedometer-ui #polytrack-drs-box.disabled,
      .speedometer-ui > #polytrack-drs-box.disabled {
        opacity: 0.65 !important;
        filter: grayscale(0.5) !important;
      }
      .speedometer-ui #polytrack-drs-box.disabled .drs-label,
      .speedometer-ui > #polytrack-drs-box.disabled .drs-label {
        opacity: 0.3 !important;
      }
      .speedometer-ui #polytrack-drs-box.disabled .drs-pct,
      .speedometer-ui > #polytrack-drs-box.disabled .drs-pct {
        opacity: 0.35 !important;
      }

      /* In-flight precision crosshair cursor */
      body.polytrack-flying,
      body.polytrack-flying * {
        cursor: crosshair !important;
      }

      .customization-panel-ui > .options-panel > button.vehicle-option-btn .vehicle-preview-tooltip {
        position: absolute;
        right: calc(100% + 8px);
        top: 50%;
        transform: translateY(-50%);
        width: 250px;
        background: rgba(10, 16, 30, 0.96);
        border: 2px solid var(--surface-tertiary-color);
        border-radius: 8px;
        padding: 12px 14px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.7);
        pointer-events: none;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.15s ease-out, visibility 0.15s ease-out;
        z-index: 100;
        font-family: inherit;
        text-align: left;
        box-sizing: border-box;
      }
      .customization-panel-ui > .options-panel > button.vehicle-option-btn:hover .vehicle-preview-tooltip {
        opacity: 1;
        visibility: visible;
      }
      .vehicle-preview-tooltip .vtt-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 4px;
      }
      .vehicle-preview-tooltip .vtt-title {
        font-size: 13px;
        font-weight: 900;
        color: #ffffff;
        text-transform: uppercase;
        letter-spacing: 0.4px;
      }
      .vehicle-preview-tooltip .vtt-badge {
        font-size: 9px;
        font-weight: 800;
        padding: 2px 5px;
        border-radius: 3px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }
    `;
    document.head.appendChild(style);
  }

  function createGarageVehiclePanel(soundEngine, uiContainer) {
    injectGlobalStyles();

    let panel = document.querySelector('.vehicle-options-panel');
    if (panel) return panel;

    panel = document.createElement('div');
    panel.className = 'panel options-panel hidden vehicle-options-panel';

    const currentSelected = getSelectedVehicleType();

    Object.values(VEHICLES).forEach(v => {
      const isSelected = v.id === currentSelected;
      const btn = document.createElement('button');
      btn.className = 'vehicle-option-btn' + (isSelected ? ' selected' : '');
      btn.dataset.vehicleId = v.id;
      btn.type = 'button';

      // 128x128 3D Preview render (Pure render, exactly matching native PolyTrack Exhausts / Patterns)
      const img = document.createElement('img');
      img.src = v.image || `images/vehicle_${v.id}.svg`;
      img.alt = v.name;
      img.width = 128;
      img.height = 128;
      btn.appendChild(img);

      // Tooltip on hover (slides out cleanly to the left without obstructing the car)
      const tooltip = document.createElement('div');
      tooltip.className = 'vehicle-preview-tooltip';
      tooltip.innerHTML = `
        <div class="vtt-header">
          <span class="vtt-title">${v.name}</span>
          <span class="vtt-badge" style="background: ${v.color}25; color: ${v.color}; border: 1px solid ${v.color}60;">${v.badge || 'POUVOIR'}</span>
        </div>
        <div class="vtt-power" style="color: ${v.color}; font-size: 11.5px; font-weight: 900; margin: 4px 0 2px 0;">${v.powerName}</div>
        <div class="vtt-key" style="display: inline-flex; align-items: center; gap: 4px; background: rgba(255,255,255,0.08); border-radius: 4px; padding: 2px 6px; font-size: 9.5px; font-weight: 800; color: #e2e8f0; margin-bottom: 6px;">
          🎮 <span>${v.powerKey}</span>
        </div>
        <div class="vtt-desc" style="font-size: 10px; line-height: 1.4; color: #cbd5e1; margin-bottom: 8px;">${v.powerDesc}</div>
        <div class="vtt-stats" style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 6px; font-size: 9.5px;">
          <div><span style="opacity: 0.6;">Vmax :</span> <b style="color: #fff;">${v.statLabels.speed}</b></div>
          <div><span style="opacity: 0.6;">0-100 :</span> <b style="color: #fff;">${v.statLabels.accel}</b></div>
          <div><span style="opacity: 0.6;">Grip :</span> <b style="color: #fff;">${v.statLabels.grip}</b></div>
          <div><span style="opacity: 0.6;">Spécial :</span> <b style="color: ${v.color};">${v.statLabels.aero}</b></div>
        </div>
      `;
      btn.appendChild(tooltip);

      btn.addEventListener('mouseenter', () => {
        AudioFX.playHover();
      });

      btn.addEventListener('click', () => {
        try {
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
        } catch (e) {
          console.warn('[PolyTrack] Vehicle selection click error:', e);
        }
      });

      panel.appendChild(btn);
    });

    if (uiContainer) uiContainer.appendChild(panel);
    return panel;
  }

  function refreshGaragePanelSelection() {
    const current = getSelectedVehicleType();
    const panel = document.querySelector('.vehicle-options-panel');
    if (!panel) return;
    panel.querySelectorAll('.vehicle-option-btn').forEach(b => {
      const vId = b.dataset.vehicleId;
      const isThis = vId === current;
      b.classList.toggle('selected', isThis);
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
        const found = existingButtons.find(b => b.textContent && (b.textContent.includes('Cars') || b.textContent.includes('Véhicule') || b.textContent.includes('Skins')));
        if (found) {
          vehicleBtn = found;
          vehicleBtn.classList.add('vehicle-tab-btn');
          if (!vehicleBtn.textContent.includes('Cars')) {
            vehicleBtn.innerHTML = 'Cars <img class="button-icon" src="images/vehicles_tab.svg">';
          }
        } else {
          vehicleBtn = document.createElement('button');
          vehicleBtn.className = 'button vehicle-tab-btn';
          vehicleBtn.type = 'button';
          vehicleBtn.innerHTML = 'Cars <img class="button-icon" src="images/vehicles_tab.svg">';
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
            if (child !== tabBar && child.classList && child.classList.contains('panel')) {
              child.classList.add('hidden');
            }
          });

          vPanel.classList.remove('hidden');
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
    applyExhaustTransform,
    hookCarInstance,
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
