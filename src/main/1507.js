var i = require("./1635.js");
var r = require("./4922.js");
var a = require("./9437.js");
const s = new r.kn4();
class o {
  constructor(e) {
    e = e || {};
    this.zNear = e.webGL === true ? -1 : 0;
    this.vertices = {
      near: [new r.Pq0(), new r.Pq0(), new r.Pq0(), new r.Pq0()],
      far: [new r.Pq0(), new r.Pq0(), new r.Pq0(), new r.Pq0()]
    };
    if (e.projectionMatrix !== undefined) {
      this.setFromProjectionMatrix(e.projectionMatrix, e.maxFar || 10000);
    }
  }
  setFromProjectionMatrix(e, t) {
    const n = this.zNear;
    const i = e.elements[11] === 0;
    s.copy(e).invert();
    this.vertices.near[0].set(1, 1, n);
    this.vertices.near[1].set(1, -1, n);
    this.vertices.near[2].set(-1, -1, n);
    this.vertices.near[3].set(-1, 1, n);
    this.vertices.near.forEach(function (e) {
      e.applyMatrix4(s);
    });
    this.vertices.far[0].set(1, 1, 1);
    this.vertices.far[1].set(1, -1, 1);
    this.vertices.far[2].set(-1, -1, 1);
    this.vertices.far[3].set(-1, 1, 1);
    this.vertices.far.forEach(function (e) {
      e.applyMatrix4(s);
      const n = Math.abs(e.z);
      if (i) {
        e.z *= Math.min(t / n, 1);
      } else {
        e.multiplyScalar(Math.min(t / n, 1));
      }
    });
    return this.vertices;
  }
  split(e, t) {
    while (e.length > t.length) {
      t.push(new o());
    }
    t.length = e.length;
    for (let n = 0; n < e.length; n++) {
      const i = t[n];
      if (n === 0) {
        for (let e = 0; e < 4; e++) {
          i.vertices.near[e].copy(this.vertices.near[e]);
        }
      } else {
        for (let t = 0; t < 4; t++) {
          i.vertices.near[t].lerpVectors(this.vertices.near[t], this.vertices.far[t], e[n - 1]);
        }
      }
      if (n === e.length - 1) {
        for (let e = 0; e < 4; e++) {
          i.vertices.far[e].copy(this.vertices.far[e]);
        }
      } else {
        for (let t = 0; t < 4; t++) {
          i.vertices.far[t].lerpVectors(this.vertices.near[t], this.vertices.far[t], e[n]);
        }
      }
    }
  }
  toSpace(e, t) {
    for (let n = 0; n < 4; n++) {
      t.vertices.near[n].copy(this.vertices.near[n]).applyMatrix4(e);
      t.vertices.far[n].copy(this.vertices.far[n]).applyMatrix4(e);
    }
  }
}
const l = {
  lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n\n#ifdef USE_CLEARCOAT\n\n\tgeometryClearcoatNormal = clearcoatNormal;\n\n#endif\n\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometryViewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\t// Iridescence F0 approximation\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\n\nIncidentLight directLight;\n\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n\t\tpointLight = pointLights[ i ];\n\n\t\tgetPointLightInfo( pointLight, geometryPosition, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tSpotLight spotLight;\n \tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n\t\tspotLight = spotLights[ i ];\n\n\t\tgetSpotLightInfo( spotLight, geometryPosition, directLight );\n\n  \t\t// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct ) && defined( USE_CSM ) && defined( CSM_CASCADES )\n\n\tDirectionalLight directionalLight;\n\tfloat linearDepth = (vViewPosition.z) / (shadowFar - cameraNear);\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\n\t#if defined( USE_SHADOWMAP ) && defined( CSM_FADE )\n\t\tvec2 cascade;\n\t\tfloat cascadeCenter;\n\t\tfloat closestEdge;\n\t\tfloat margin;\n\t\tfloat csmx;\n\t\tfloat csmy;\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\t\tdirectionalLight = directionalLights[ i ];\n\t\t\tgetDirectionalLightInfo( directionalLight, directLight );\n\n\t\t\t#if ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\t\t\t// NOTE: Depth gets larger away from the camera.\n\t\t\t\t// cascade.x is closer, cascade.y is further\n\t\t\t\tcascade = CSM_cascades[ i ];\n\t\t\t\tcascadeCenter = ( cascade.x + cascade.y ) / 2.0;\n\t\t\t\tclosestEdge = linearDepth < cascadeCenter ? cascade.x : cascade.y;\n\t\t\t\tmargin = 0.25 * pow( closestEdge, 2.0 );\n\t\t\t\tcsmx = cascade.x - margin / 2.0;\n\t\t\t\tcsmy = cascade.y + margin / 2.0;\n\t\t\t\tif( linearDepth >= csmx && ( linearDepth < csmy || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 ) ) {\n\n\t\t\t\t\tfloat dist = min( linearDepth - csmx, csmy - linearDepth );\n\t\t\t\t\tfloat ratio = clamp( dist / margin, 0.0, 1.0 );\n\n\t\t\t\t\tvec3 prevColor = directLight.color;\n\t\t\t\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\t\t\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\n\t\t\t\t\tbool shouldFadeLastCascade = UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 && linearDepth > cascadeCenter;\n\t\t\t\t\tdirectLight.color = mix( prevColor, directLight.color, shouldFadeLastCascade ? ratio : 1.0 );\n\n\t\t\t\t\tReflectedLight prevLight = reflectedLight;\n\t\t\t\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\n\t\t\t\t\tbool shouldBlend = UNROLLED_LOOP_INDEX != CSM_CASCADES - 1 || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 && linearDepth < cascadeCenter;\n\t\t\t\t\tfloat blendRatio = shouldBlend ? ratio : 1.0;\n\n\t\t\t\t\treflectedLight.directDiffuse = mix( prevLight.directDiffuse, reflectedLight.directDiffuse, blendRatio );\n\t\t\t\t\treflectedLight.directSpecular = mix( prevLight.directSpecular, reflectedLight.directSpecular, blendRatio );\n\t\t\t\t\treflectedLight.indirectDiffuse = mix( prevLight.indirectDiffuse, reflectedLight.indirectDiffuse, blendRatio );\n\t\t\t\t\treflectedLight.indirectSpecular = mix( prevLight.indirectSpecular, reflectedLight.indirectSpecular, blendRatio );\n\n\t\t\t\t}\n\t\t\t#endif\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#elif defined (USE_SHADOWMAP)\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\t\tdirectionalLight = directionalLights[ i ];\n\t\t\tgetDirectionalLightInfo( directionalLight, directLight );\n\n\t\t\t#if ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\n\t\t\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\t\t\tif(linearDepth >= CSM_cascades[UNROLLED_LOOP_INDEX].x && linearDepth < CSM_cascades[UNROLLED_LOOP_INDEX].y) directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\n\t\t\t\tif(linearDepth >= CSM_cascades[UNROLLED_LOOP_INDEX].x && (linearDepth < CSM_cascades[UNROLLED_LOOP_INDEX].y || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1)) RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\n\t\t\t#endif\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\n\t#elif ( NUM_DIR_LIGHT_SHADOWS > 0 )\n\t\t// note: no loop here - all CSM lights are in fact one light only\n\t\tgetDirectionalLightInfo( directionalLights[0], directLight );\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\n\t#endif\n\n\t#if ( NUM_DIR_LIGHTS > NUM_DIR_LIGHT_SHADOWS)\n\t\t// compute the lights not casting shadows (if any)\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = NUM_DIR_LIGHT_SHADOWS; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\t\tdirectionalLight = directionalLights[ i ];\n\n\t\t\tgetDirectionalLightInfo( directionalLight, directLight );\n\n\t\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\n\t#endif\n\n#endif\n\n\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct ) && !defined( USE_CSM ) && !defined( CSM_CASCADES )\n\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tdirectionalLight = directionalLights[ i ];\n\n\t\tgetDirectionalLightInfo( directionalLight, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\n\tRectAreaLight rectAreaLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if defined( RE_IndirectDiffuse )\n\n\tvec3 iblIrradiance = vec3( 0.0 );\n\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\n\t#if defined( USE_LIGHT_PROBES )\n\n\t\tirradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n\n\t#endif\n\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\n\t#endif\n\n#endif\n\n#if defined( RE_IndirectSpecular )\n\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n\n#endif\n",
  lights_pars_begin: "\n#if defined( USE_CSM ) && defined( CSM_CASCADES )\nuniform vec2 CSM_cascades[CSM_CASCADES];\nuniform float cameraNear;\nuniform float shadowFar;\n#endif\n\t" + a.vxI.lights_pars_begin
};
const c = new r.kn4();
const h = new o({
  webGL: true
});
const d = new r.Pq0();
const u = new r.NRn();
const f = [];
const p = [];
const g = new r.kn4();
const m = new r.kn4();
const _A = new r.Pq0(0, 1, 0);
class v {
  constructor(e) {
    this.camera = e.camera;
    this.parent = e.parent;
    this.cascades = e.cascades || 3;
    this.maxFar = e.maxFar || 100000;
    this.mode = e.mode || "practical";
    this.shadowMapSize = e.shadowMapSize || 2048;
    this.shadowBias = e.shadowBias || 0.000001;
    this.lightDirection = e.lightDirection || new r.Pq0(1, -1, 1).normalize();
    this.lightIntensity = e.lightIntensity || 3;
    this.lightNear = e.lightNear || 1;
    this.lightFar = e.lightFar || 2000;
    this.lightMargin = e.lightMargin || 200;
    this.customSplitsCallback = e.customSplitsCallback;
    this.fade = false;
    this.mainFrustum = new o({
      webGL: true
    });
    this.frustums = [];
    this.breaks = [];
    this.lights = [];
    this.shaders = new Map();
    this._createLights();
    this.updateFrustums();
    this._injectInclude();
  }
  _createLights() {
    for (let e = 0; e < this.cascades; e++) {
      const e = new r.ZyN(16777215, this.lightIntensity);
      e.castShadow = true;
      e.shadow.mapSize.width = this.shadowMapSize;
      e.shadow.mapSize.height = this.shadowMapSize;
      e.shadow.camera.near = this.lightNear;
      e.shadow.camera.far = this.lightFar;
      e.shadow.bias = this.shadowBias;
      this.parent.add(e);
      this.parent.add(e.target);
      this.lights.push(e);
    }
  }
  _initCascades() {
    const e = this.camera;
    e.updateProjectionMatrix();
    this.mainFrustum.setFromProjectionMatrix(e.projectionMatrix, this.maxFar);
    this.mainFrustum.split(this.breaks, this.frustums);
  }
  _updateShadowBounds() {
    const e = this.frustums;
    for (let t = 0; t < e.length; t++) {
      const e = this.lights[t].shadow.camera;
      const n = this.frustums[t];
      const i = n.vertices.near;
      const r = n.vertices.far;
      const a = r[0];
      let s;
      s = a.distanceTo(r[2]) > a.distanceTo(i[2]) ? r[2] : i[2];
      let o = a.distanceTo(s);
      if (this.fade) {
        const e = this.camera;
        const t = Math.max(e.far, this.maxFar);
        const i = n.vertices.far[0].z / (t - e.near);
        o += Math.pow(i, 2) * 0.25 * (t - e.near);
      }
      e.left = -o / 2;
      e.right = o / 2;
      e.top = o / 2;
      e.bottom = -o / 2;
      e.updateProjectionMatrix();
    }
  }
  _getBreaks() {
    const e = this.camera;
    const t = Math.min(e.far, this.maxFar);
    this.breaks.length = 0;
    switch (this.mode) {
      case "uniform":
        n(this.cascades, e.near, t, this.breaks);
        break;
      case "logarithmic":
        i(this.cascades, e.near, t, this.breaks);
        break;
      case "practical":
        (function (e, t, a, s, o) {
          f.length = 0;
          p.length = 0;
          i(e, t, a, p);
          n(e, t, a, f);
          for (let t = 1; t < e; t++) {
            o.push(r.cj9.lerp(f[t - 1], p[t - 1], s));
          }
          o.push(1);
        })(this.cascades, e.near, t, 0.5, this.breaks);
        break;
      case "custom":
        if (this.customSplitsCallback === undefined) {
          console.error("CSM: Custom split scheme callback not defined.");
        }
        this.customSplitsCallback(this.cascades, e.near, t, this.breaks);
    }
    function n(e, t, n, i) {
      for (let r = 1; r < e; r++) {
        i.push((t + (n - t) * r / e) / n);
      }
      i.push(1);
    }
    function i(e, t, n, i) {
      for (let r = 1; r < e; r++) {
        i.push(t * (n / t) ** (r / e) / n);
      }
      i.push(1);
    }
  }
  update() {
    const e = this.camera;
    const t = this.frustums;
    g.lookAt(new r.Pq0(), this.lightDirection, _A);
    m.copy(g).invert();
    for (let n = 0; n < t.length; n++) {
      const i = this.lights[n];
      const r = i.shadow.camera;
      const a = (r.right - r.left) / this.shadowMapSize;
      const s = (r.top - r.bottom) / this.shadowMapSize;
      c.multiplyMatrices(m, e.matrixWorld);
      t[n].toSpace(c, h);
      const o = h.vertices.near;
      const l = h.vertices.far;
      u.makeEmpty();
      for (let e = 0; e < 4; e++) {
        u.expandByPoint(o[e]);
        u.expandByPoint(l[e]);
      }
      u.getCenter(d);
      d.z = u.max.z + this.lightMargin;
      d.x = Math.floor(d.x / a) * a;
      d.y = Math.floor(d.y / s) * s;
      d.applyMatrix4(g);
      i.position.copy(d);
      i.target.position.copy(d);
      i.target.position.x += this.lightDirection.x;
      i.target.position.y += this.lightDirection.y;
      i.target.position.z += this.lightDirection.z;
    }
  }
  _injectInclude() {
    a.vxI.lights_fragment_begin = l.lights_fragment_begin;
    a.vxI.lights_pars_begin = l.lights_pars_begin;
  }
  setupMaterial(e) {
    e.defines = e.defines || {};
    e.defines.USE_CSM = 1;
    e.defines.CSM_CASCADES = this.cascades;
    if (this.fade) {
      e.defines.CSM_FADE = "";
    }
    const t = [];
    const n = this;
    const i = this.shaders;
    e.onBeforeCompile = function (r) {
      const a = Math.min(n.camera.far, n.maxFar);
      n._getExtendedBreaks(t);
      r.uniforms.CSM_cascades = {
        value: t
      };
      r.uniforms.cameraNear = {
        value: n.camera.near
      };
      r.uniforms.shadowFar = {
        value: a
      };
      i.set(e, r);
    };
    i.set(e, null);
  }
  _updateUniforms() {
    const e = Math.min(this.camera.far, this.maxFar);
    this.shaders.forEach(function (t, n) {
      if (t !== null) {
        const n = t.uniforms;
        this._getExtendedBreaks(n.CSM_cascades.value);
        n.cameraNear.value = this.camera.near;
        n.shadowFar.value = e;
      }
      if (!this.fade && "CSM_FADE" in n.defines) {
        delete n.defines.CSM_FADE;
        n.needsUpdate = true;
      } else if (this.fade && !("CSM_FADE" in n.defines)) {
        n.defines.CSM_FADE = "";
        n.needsUpdate = true;
      }
    }, this);
  }
  _getExtendedBreaks(e) {
    while (e.length < this.breaks.length) {
      e.push(new r.I9Y());
    }
    e.length = this.breaks.length;
    for (let t = 0; t < this.cascades; t++) {
      const n = this.breaks[t];
      const i = this.breaks[t - 1] || 0;
      e[t].x = i;
      e[t].y = n;
    }
  }
  updateFrustums() {
    this._getBreaks();
    this._initCascades();
    this._updateShadowBounds();
    this._updateUniforms();
  }
  remove() {
    for (let e = 0; e < this.lights.length; e++) {
      this.parent.remove(this.lights[e].target);
      this.parent.remove(this.lights[e]);
    }
  }
  dispose() {
    const e = this.shaders;
    e.forEach(function (e, t) {
      delete t.onBeforeCompile;
      delete t.defines.USE_CSM;
      delete t.defines.CSM_CASCADES;
      delete t.defines.CSM_FADE;
      if (e !== null) {
        delete e.uniforms.CSM_cascades;
        delete e.uniforms.cameraNear;
        delete e.uniforms.shadowFar;
      }
      t.needsUpdate = true;
    });
    e.clear();
  }
}
var b;
var y;
var w;
var x;
var S;
var k;
var T;
var E;
var M;
var _;
var C;
var R;
var P;
var I;
var L;
var U;
var N;
var z;
var D;
var B;
var G;
var F;
var O;
var W = require("./5287.js");
class V {
  constructor(e, t, n = null) {
    b.add(this);
    w.set(this, undefined);
    x.set(this, undefined);
    S.set(this, undefined);
    k.set(this, undefined);
    T.set(this, false);
    E.set(this, undefined);
    M.set(this, new r.ubm());
    _.set(this, null);
    C.set(this, null);
    R.set(this, []);
    P.set(this, null);
    I.set(this, new r.Pq0(8, 10, 10));
    L.set(this, []);
    U.set(this, []);
    (0, i.GG)(this, w, e, "f");
    (0, i.GG)(this, x, t, "f");
    (0, i.GG)(this, S, n, "f");
    const s = {
      antialias: t?.getSettingBoolean(W.A.Antialiasing) ?? true,
      powerPreference: "high-performance",
      canvas: e,
      alpha: true
    };
    try {
      s.failIfMajorPerformanceCaveat = true;
      (0, i.GG)(this, k, new a.JeP(s), "f");
      (0, i.GG)(this, T, false, "f");
    } catch {
      try {
        s.failIfMajorPerformanceCaveat = false;
        (0, i.GG)(this, k, new a.JeP(s), "f");
        (0, i.GG)(this, T, true, "f");
      } catch (e) {
        throw new Error("Failed to create WebGL renderer: " + String(e) + "\nPlease make sure your device and browser supports WebGL and that hardware acceleration is enabled in your browser settings.");
      }
    }
    (0, i.gn)(this, k, "f").outputColorSpace = r.Zr2;
    (0, i.gn)(this, k, "f").debug.checkShaderErrors = false;
    (0, i.GG)(this, E, new r.Z58(), "f");
    (0, i.gn)(this, b, "m", G).call(this);
    (0, i.gn)(this, E, "f").add(new r.dth(3891597, 11714755, 4.7));
    document.addEventListener("fullscreenchange", () => {
      (0, i.gn)(this, b, "m", F).call(this);
    });
    (0, i.gn)(this, w, "f").addEventListener("webglcontextrestored", () => {
      for (const e of (0, i.gn)(this, U, "f")) {
        e();
      }
    });
    if (window.electron != null) {
      window.electron.addFullscreenChangeListener(() => {
        (0, i.gn)(this, b, "m", F).call(this);
      });
    }
  }
  clear() {
    (0, i.gn)(this, k, "f").clear();
  }
  update(e) {
    (0, i.gn)(this, I, "f").copy(e.getSunPosition());
    let t = (0, i.gn)(this, x, "f")?.getSettingInteger(W.A.ShadowQuality) ?? 0;
    if (!this.isShadowQualitySupported(t)) {
      t = 0;
    }
    if (!Number.isSafeInteger(t) || t <= 2 || t > 5) {
      if ((0, i.gn)(this, _, "f") != null) {
        (0, i.gn)(this, _, "f").remove();
        (0, i.gn)(this, _, "f").dispose();
        (0, i.GG)(this, _, null, "f");
        (0, i.GG)(this, C, null, "f");
      }
      if ((0, i.gn)(this, P, "f") == null) {
        (0, i.GG)(this, P, new r.ZyN(16777215, 4.7), "f");
        (0, i.gn)(this, P, "f").position.copy((0, i.gn)(this, I, "f"));
        (0, i.gn)(this, E, "f").add((0, i.gn)(this, P, "f"));
        (0, i.gn)(this, E, "f").add((0, i.gn)(this, P, "f").target);
      }
      if (t == 1 || t == 2) {
        if (!(0, i.gn)(this, P, "f").castShadow) {
          const e = (0, i.gn)(this, b, "m", B).call(this, t);
          (0, i.gn)(this, P, "f").castShadow = true;
          (0, i.gn)(this, P, "f").shadow.camera.top = 10;
          (0, i.gn)(this, P, "f").shadow.camera.right = 10;
          (0, i.gn)(this, P, "f").shadow.camera.bottom = -10;
          (0, i.gn)(this, P, "f").shadow.camera.left = -10;
          (0, i.gn)(this, P, "f").shadow.camera.near = 1;
          (0, i.gn)(this, P, "f").shadow.camera.far = 50;
          (0, i.gn)(this, P, "f").shadow.mapSize.width = e;
          (0, i.gn)(this, P, "f").shadow.mapSize.height = e;
          (0, i.gn)(this, P, "f").shadow.normalBias = 0.03;
          (0, i.gn)(this, P, "f").shadow.intensity = 0.6;
        }
        (0, i.gn)(this, P, "f").position.addVectors((0, i.gn)(this, M, "f").position, (0, i.gn)(this, I, "f").multiplyScalar(12.5));
        (0, i.gn)(this, P, "f").target.position.copy((0, i.gn)(this, M, "f").position);
        (0, i.gn)(this, k, "f").shadowMap.enabled = true;
      } else {
        (0, i.gn)(this, P, "f").castShadow = false;
        (0, i.gn)(this, P, "f").shadow.map?.dispose();
        (0, i.gn)(this, P, "f").shadow.map = null;
        (0, i.gn)(this, k, "f").shadowMap.enabled = false;
      }
    } else {
      if ((0, i.gn)(this, _, "f") != null && (0, i.gn)(this, C, "f") != t) {
        (0, i.gn)(this, _, "f").remove();
        (0, i.gn)(this, _, "f").dispose();
        (0, i.GG)(this, _, null, "f");
        (0, i.GG)(this, C, null, "f");
        (0, i.gn)(this, k, "f").compile((0, i.gn)(this, E, "f"), (0, i.gn)(this, M, "f"));
      }
      if ((0, i.gn)(this, _, "f") == null) {
        (0, i.gn)(this, k, "f").shadowMap.enabled = true;
        (0, i.GG)(this, _, (0, i.gn)(this, b, "m", N).call(this, t), "f");
        (0, i.GG)(this, C, t, "f");
        for (const {
          material: e,
          onBeforeCompile: t,
          customProgramCacheKey: n
        } of (0, i.gn)(this, R, "f")) {
          (0, i.gn)(this, b, "m", D).call(this, e, t, n);
        }
      }
      if ((0, i.gn)(this, P, "f") != null) {
        (0, i.gn)(this, E, "f").remove((0, i.gn)(this, P, "f"));
        (0, i.gn)(this, E, "f").remove((0, i.gn)(this, P, "f").target);
        (0, i.GG)(this, P, null, "f");
      }
      (0, i.gn)(this, _, "f").lightDirection = (0, i.gn)(this, I, "f").clone().negate().normalize();
      (0, i.gn)(this, _, "f").update();
    }
    (0, i.gn)(this, b, "m", z).call(this);
    (0, i.gn)(this, b, "m", G).call(this);
    (0, i.gn)(this, k, "f").render((0, i.gn)(this, E, "f"), (0, i.gn)(this, M, "f"));
  }
  addMaterial(e) {
    const t = Array.isArray(e) ? e : [e];
    for (const e of t) {
      const t = e.onBeforeCompile.bind(e);
      const n = e.onBeforeCompile.toString();
      (0, i.gn)(this, R, "f").push({
        material: e,
        onBeforeCompile: t,
        customProgramCacheKey: n
      });
      if ((0, i.gn)(this, _, "f") != null) {
        (0, i.gn)(this, b, "m", D).call(this, e, t, n);
      }
    }
  }
  removeMaterial(e) {
    if (Array.isArray(e)) {
      for (const t of e) {
        const e = (0, i.gn)(this, R, "f").findIndex(e => e.material == t);
        if (e >= 0) {
          (0, i.gn)(this, R, "f").splice(e, 1);
        }
      }
    } else {
      const t = (0, i.gn)(this, R, "f").findIndex(t => t.material == e);
      if (t >= 0) {
        (0, i.gn)(this, R, "f").splice(t, 1);
      }
    }
  }
  isTrackShadowsEnabled() {
    const e = (0, i.gn)(this, x, "f")?.getSettingInteger(W.A.ShadowQuality) ?? 0;
    return e == 3 || e == 4 || e == 5;
  }
  isShadowQualitySupported(e) {
    return !Number.isSafeInteger(e) || e <= 0 || e > 5 || (0, i.gn)(this, k, "f").capabilities.maxTextureSize >= (0, i.gn)(this, b, "m", B).call(this, e);
  }
  getMaxAnisotropy() {
    return (0, i.gn)(this, k, "f").capabilities.getMaxAnisotropy();
  }
  get isUsingSoftwareRenderer() {
    return (0, i.gn)(this, T, "f");
  }
  get isFullscreen() {
    if (window.electron != null) {
      return window.electron.isFullscreen();
    } else {
      return document.fullscreenElement != null;
    }
  }
  async toggleFullscreen() {
    if (this.isFullscreen) {
      if (window.electron != null) {
        window.electron.setFullscreen(false);
      } else {
        await document.exitFullscreen();
      }
    } else if (window.electron != null) {
      window.electron.setFullscreen(true);
    } else {
      await document.body.requestFullscreen();
    }
  }
  addFullscreenChangeListener(e) {
    (0, i.gn)(this, L, "f").push(e);
  }
  removeFullscreenChangeListener(e) {
    const t = (0, i.gn)(this, L, "f").indexOf(e);
    if (t >= 0) {
      (0, i.gn)(this, L, "f").splice(t, 1);
    }
  }
  addContextRestoredEventListener(e) {
    (0, i.gn)(this, U, "f").push(e);
  }
  removeContextRestoredEventListener(e) {
    const t = (0, i.gn)(this, U, "f").indexOf(e);
    if (t >= 0) {
      (0, i.gn)(this, U, "f").splice(t, 1);
    }
  }
  get csm() {
    return (0, i.gn)(this, _, "f");
  }
  setCamera(e) {
    (0, i.GG)(this, M, e, "f");
    (0, i.gn)(this, b, "m", z).call(this);
    if ((0, i.gn)(this, _, "f") != null) {
      (0, i.gn)(this, _, "f").camera = e;
      (0, i.gn)(this, b, "m", O).call(this);
    }
  }
  get camera() {
    return (0, i.gn)(this, M, "f");
  }
  get canvas() {
    return (0, i.gn)(this, w, "f");
  }
  setAnimationLoop(e) {
    (0, i.gn)(this, k, "f").setAnimationLoop(e);
  }
  get scene() {
    return (0, i.gn)(this, E, "f");
  }
}
y = V;
w = new WeakMap();
x = new WeakMap();
S = new WeakMap();
k = new WeakMap();
T = new WeakMap();
E = new WeakMap();
M = new WeakMap();
_ = new WeakMap();
C = new WeakMap();
R = new WeakMap();
P = new WeakMap();
I = new WeakMap();
L = new WeakMap();
U = new WeakMap();
b = new WeakSet();
N = function (e) {
  if (e != 3 && e != 4 && e != 5) {
    throw new Error("Unsupported shadow quality: " + e.toString());
  }
  const t = (0, i.gn)(this, b, "m", B).call(this, e);
  let n;
  let a;
  switch (e) {
    case 5:
      n = 2000;
      break;
    case 4:
      n = 1000;
      break;
    case 3:
      n = 500;
  }
  switch (e) {
    case 5:
      a = 5;
      break;
    case 4:
    case 3:
      a = 4;
  }
  const s = new v({
    maxFar: n,
    lightFar: 15000,
    lightNear: 10,
    lightMargin: 5000,
    cascades: a,
    mode: "custom",
    customSplitsCallback: (t, n, i, r) => {
      if (e == 5) {
        r.push((15 - n) / i);
        r.push((40 - n) / i);
        r.push((150 - n) / i);
        r.push((500 - n) / i);
        r.push(1);
      } else if (e == 4) {
        r.push((15 - n) / i);
        r.push((80 - n) / i);
        r.push((300 - n) / i);
        r.push(1);
      } else {
        r.push((15 - n) / i);
        r.push((60 - n) / i);
        r.push((150 - n) / i);
        r.push(1);
      }
    },
    parent: (0, i.gn)(this, E, "f"),
    shadowMapSize: t,
    lightDirection: new r.Pq0(0, 0, -1),
    lightIntensity: 4.7,
    camera: (0, i.gn)(this, M, "f")
  });
  s.fade = true;
  if (e == 5) {
    s.lights[0].shadow.normalBias = 0.025;
    s.lights[1].shadow.normalBias = 0.04;
    s.lights[2].shadow.normalBias = 0.11;
    s.lights[3].shadow.normalBias = 0.32;
    s.lights[4].shadow.normalBias = 1.25;
  } else if (e == 4) {
    s.lights[0].shadow.normalBias = 0.041;
    s.lights[1].shadow.normalBias = 0.13;
    s.lights[2].shadow.normalBias = 0.48;
    s.lights[3].shadow.normalBias = 1.25;
  } else {
    s.lights[0].shadow.normalBias = 0.08;
    s.lights[1].shadow.normalBias = 0.21;
    s.lights[2].shadow.normalBias = 0.6;
    s.lights[3].shadow.normalBias = 1.9;
  }
  for (const e of s.lights) {
    e.shadow.intensity = 0.6;
  }
  return s;
};
z = function () {
  let e;
  let t = (0, i.gn)(this, x, "f")?.getSettingFloat(W.A.RenderScale) ?? 1;
  t = Number.isFinite(t) ? Math.min(Math.max(t, 0.1), 2) : 1;
  if ((0, i.gn)(this, M, "f") instanceof r.ubm) {
    const e = window.innerWidth / window.innerHeight;
    const t = new r.I9Y();
    (0, i.gn)(this, k, "f").getSize(t);
    const n = Math.max(1, e * 0.5);
    if (t.width != window.innerWidth || t.height != window.innerHeight || (0, i.gn)(this, M, "f").aspect != e || (0, i.gn)(this, M, "f").zoom != n) {
      (0, i.gn)(this, k, "f").setSize(window.innerWidth, window.innerHeight);
      (0, i.gn)(this, M, "f").aspect = e;
      (0, i.gn)(this, M, "f").zoom = n;
      (0, i.gn)(this, b, "m", O).call(this);
      (0, i.gn)(this, M, "f").updateProjectionMatrix();
    }
  }
  e = (0, i.gn)(this, x, "f")?.getSettingBoolean(W.A.ScreenPixelDensity) ?? 1 ? window.devicePixelRatio : 1;
  const n = (0, i.gn)(this, k, "f").getPixelRatio();
  const a = Math.min((0, i.gn)(this, k, "f").capabilities.maxTextureSize / window.innerWidth, (0, i.gn)(this, k, "f").capabilities.maxTextureSize / window.innerHeight);
  const s = Math.min(e * t, a);
  if (n != s) {
    (0, i.gn)(this, k, "f").setPixelRatio(s);
  }
};
D = function (e, t, n) {
  const r = Array.isArray(e) ? e : [e];
  for (const e of r) {
    (0, i.gn)(this, _, "f")?.setupMaterial(e);
    const r = e.onBeforeCompile.toString();
    const a = e.onBeforeCompile.bind(e);
    e.onBeforeCompile = (e, n) => {
      a(e, n);
      t(e, n);
    };
    e.customProgramCacheKey = () => r + n;
    e.needsUpdate = true;
  }
};
B = function (e) {
  switch (e) {
    case 5:
      return 8192;
    case 4:
      return 4096;
    case 3:
      return 2048;
    case 2:
    case 1:
      return 1024;
    default:
      throw new Error("Unsupported shadow quality: " + e.toString());
  }
};
G = function () {
  let e;
  e = (0, i.gn)(this, S, "f") ?? (0, i.gn)(this, x, "f")?.getSettingBoolean(W.A.FogEnabled) ?? true;
  if (e) {
    if ((0, i.gn)(this, E, "f").fog == null) {
      (0, i.gn)(this, E, "f").fog = new r.jUj(10211839, 0, y.maxViewDistance);
    }
  } else if ((0, i.gn)(this, E, "f").fog != null) {
    (0, i.gn)(this, E, "f").fog = null;
  }
};
F = function () {
  for (const e of (0, i.gn)(this, L, "f")) {
    e();
  }
};
O = function () {
  if ((0, i.gn)(this, _, "f") != null) {
    if ((0, i.gn)(this, M, "f") instanceof r.ubm) {
      const e = (0, i.gn)(this, M, "f").fov;
      (0, i.gn)(this, M, "f").fov = 100;
      (0, i.gn)(this, _, "f").updateFrustums();
      (0, i.gn)(this, M, "f").fov = e;
      (0, i.gn)(this, M, "f").updateProjectionMatrix();
    } else {
      (0, i.gn)(this, _, "f").updateFrustums();
    }
  }
};
V.maxViewDistance = 10000;
export const A = V;