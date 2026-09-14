var i = require("./4922.js");
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
function r() {
  let e = null;
  let t = false;
  let n = null;
  let i = null;
  function r(t, a) {
    n(t, a);
    i = e.requestAnimationFrame(r);
  }
  return {
    start: function () {
      if (t !== true && n !== null) {
        i = e.requestAnimationFrame(r);
        t = true;
      }
    },
    stop: function () {
      e.cancelAnimationFrame(i);
      t = false;
    },
    setAnimationLoop: function (e) {
      n = e;
    },
    setContext: function (t) {
      e = t;
    }
  };
}
function a(e) {
  const t = new WeakMap();
  return {
    get: function (e) {
      if (e.isInterleavedBufferAttribute) {
        e = e.data;
      }
      return t.get(e);
    },
    remove: function (n) {
      if (n.isInterleavedBufferAttribute) {
        n = n.data;
      }
      const i = t.get(n);
      if (i) {
        e.deleteBuffer(i.buffer);
        t.delete(n);
      }
    },
    update: function (n, i) {
      if (n.isInterleavedBufferAttribute) {
        n = n.data;
      }
      if (n.isGLBufferAttribute) {
        const e = t.get(n);
        if (!e || e.version < n.version) {
          t.set(n, {
            buffer: n.buffer,
            type: n.type,
            bytesPerElement: n.elementSize,
            version: n.version
          });
        }
        return;
      }
      const r = t.get(n);
      if (r === undefined) {
        t.set(n, function (t, n) {
          const i = t.array;
          const r = t.usage;
          const a = i.byteLength;
          const s = e.createBuffer();
          let o;
          e.bindBuffer(n, s);
          e.bufferData(n, i, r);
          t.onUploadCallback();
          if (i instanceof Float32Array) {
            o = e.FLOAT;
          } else if (typeof Float16Array != "undefined" && i instanceof Float16Array) {
            o = e.HALF_FLOAT;
          } else if (i instanceof Uint16Array) {
            o = t.isFloat16BufferAttribute ? e.HALF_FLOAT : e.UNSIGNED_SHORT;
          } else if (i instanceof Int16Array) {
            o = e.SHORT;
          } else if (i instanceof Uint32Array) {
            o = e.UNSIGNED_INT;
          } else if (i instanceof Int32Array) {
            o = e.INT;
          } else if (i instanceof Int8Array) {
            o = e.BYTE;
          } else if (i instanceof Uint8Array) {
            o = e.UNSIGNED_BYTE;
          } else {
            if (!(i instanceof Uint8ClampedArray)) {
              throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + i);
            }
            o = e.UNSIGNED_BYTE;
          }
          return {
            buffer: s,
            type: o,
            bytesPerElement: i.BYTES_PER_ELEMENT,
            version: t.version,
            size: a
          };
        }(n, i));
      } else if (r.version < n.version) {
        if (r.size !== n.array.byteLength) {
          throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
        }
        (function (t, n, i) {
          const r = n.array;
          const a = n.updateRanges;
          e.bindBuffer(i, t);
          if (a.length === 0) {
            e.bufferSubData(i, 0, r);
          } else {
            a.sort((e, t) => e.start - t.start);
            let t = 0;
            for (let e = 1; e < a.length; e++) {
              const n = a[t];
              const i = a[e];
              if (i.start <= n.start + n.count + 1) {
                n.count = Math.max(n.count, i.start + i.count - n.start);
              } else {
                ++t;
                a[t] = i;
              }
            }
            a.length = t + 1;
            for (let t = 0, n = a.length; t < n; t++) {
              const n = a[t];
              e.bufferSubData(i, n.start * r.BYTES_PER_ELEMENT, r, n.start, n.count);
            }
            n.clearUpdateRanges();
          }
          n.onUploadCallback();
        })(r.buffer, n, i);
        r.version = n.version;
      }
    }
  };
}
export const vxI = {
  alphahash_fragment: "#ifdef USE_ALPHAHASH\n\tif ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
  alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n\tconst float ALPHA_HASH_SCALE = 0.05;\n\tfloat hash2D( vec2 value ) {\n\t\treturn fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n\t}\n\tfloat hash3D( vec3 value ) {\n\t\treturn hash2D( vec2( hash2D( value.xy ), value.z ) );\n\t}\n\tfloat getAlphaHashThreshold( vec3 position ) {\n\t\tfloat maxDeriv = max(\n\t\t\tlength( dFdx( position.xyz ) ),\n\t\t\tlength( dFdy( position.xyz ) )\n\t\t);\n\t\tfloat pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n\t\tvec2 pixScales = vec2(\n\t\t\texp2( floor( log2( pixScale ) ) ),\n\t\t\texp2( ceil( log2( pixScale ) ) )\n\t\t);\n\t\tvec2 alpha = vec2(\n\t\t\thash3D( floor( pixScales.x * position.xyz ) ),\n\t\t\thash3D( floor( pixScales.y * position.xyz ) )\n\t\t);\n\t\tfloat lerpFactor = fract( log2( pixScale ) );\n\t\tfloat x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n\t\tfloat a = min( lerpFactor, 1.0 - lerpFactor );\n\t\tvec3 cases = vec3(\n\t\t\tx * x / ( 2.0 * a * ( 1.0 - a ) ),\n\t\t\t( x - 0.5 * a ) / ( 1.0 - a ),\n\t\t\t1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n\t\t);\n\t\tfloat threshold = ( x < ( 1.0 - a ) )\n\t\t\t? ( ( x < a ) ? cases.x : cases.y )\n\t\t\t: cases.z;\n\t\treturn clamp( threshold , 1.0e-6, 1.0 );\n\t}\n#endif",
  alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
  alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
  alphatest_fragment: "#ifdef USE_ALPHATEST\n\t#ifdef ALPHA_TO_COVERAGE\n\tdiffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n\tif ( diffuseColor.a == 0.0 ) discard;\n\t#else\n\tif ( diffuseColor.a < alphaTest ) discard;\n\t#endif\n#endif",
  alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",
  aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_CLEARCOAT ) \n\t\tclearcoatSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_SHEEN ) \n\t\tsheenSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",
  aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
  batching_pars_vertex: "#ifdef USE_BATCHING\n\t#if ! defined( GL_ANGLE_multi_draw )\n\t#define gl_DrawID _gl_DrawID\n\tuniform int _gl_DrawID;\n\t#endif\n\tuniform highp sampler2D batchingTexture;\n\tuniform highp usampler2D batchingIdTexture;\n\tmat4 getBatchingMatrix( const in float i ) {\n\t\tint size = textureSize( batchingTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n\tfloat getIndirectIndex( const in int i ) {\n\t\tint size = textureSize( batchingIdTexture, 0 ).x;\n\t\tint x = i % size;\n\t\tint y = i / size;\n\t\treturn float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n\t}\n#endif\n#ifdef USE_BATCHING_COLOR\n\tuniform sampler2D batchingColorTexture;\n\tvec3 getBatchingColor( const in float i ) {\n\t\tint size = textureSize( batchingColorTexture, 0 ).x;\n\t\tint j = int( i );\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\treturn texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;\n\t}\n#endif",
  batching_vertex: "#ifdef USE_BATCHING\n\tmat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif",
  begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n\tvPosition = vec3( position );\n#endif",
  beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
  bsdfs: "float G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n} // validated",
  iridescence_fragment: "#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\treturn vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif",
  bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vBumpMapUv );\n\t\tvec2 dSTdy = dFdy( vBumpMapUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n\t\tvec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
  clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#ifdef ALPHA_TO_COVERAGE\n\t\tfloat distanceToPlane, distanceGradient;\n\t\tfloat clipOpacity = 1.0;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tdistanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n\t\t\tdistanceGradient = fwidth( distanceToPlane ) / 2.0;\n\t\t\tclipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n\t\t\tif ( clipOpacity == 0.0 ) discard;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\t\tfloat unionClipOpacity = 1.0;\n\t\t\t#pragma unroll_loop_start\n\t\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\t\tplane = clippingPlanes[ i ];\n\t\t\t\tdistanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n\t\t\t\tdistanceGradient = fwidth( distanceToPlane ) / 2.0;\n\t\t\t\tunionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n\t\t\t}\n\t\t\t#pragma unroll_loop_end\n\t\t\tclipOpacity *= 1.0 - unionClipOpacity;\n\t\t#endif\n\t\tdiffuseColor.a *= clipOpacity;\n\t\tif ( diffuseColor.a == 0.0 ) discard;\n\t#else\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\t\tbool clipped = true;\n\t\t\t#pragma unroll_loop_start\n\t\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\t\tplane = clippingPlanes[ i ];\n\t\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t\t}\n\t\t\t#pragma unroll_loop_end\n\t\t\tif ( clipped ) discard;\n\t\t#endif\n\t#endif\n#endif",
  clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
  clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
  clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
  color_fragment: "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
  color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
  color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n\tvarying vec3 vColor;\n#endif",
  color_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif\n#ifdef USE_BATCHING_COLOR\n\tvec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );\n\tvColor.xyz *= batchingColor.xyz;\n#endif",
  common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n\tvarying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
  cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\thighp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
  defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n\tmat3 bm = mat3( batchingMatrix );\n\ttransformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n\ttransformedNormal = bm * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = bm * transformedTangent;\n\t#endif\n#endif\n#ifdef USE_INSTANCING\n\tmat3 im = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n\ttransformedNormal = im * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = im * transformedTangent;\n\t#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\ttransformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
  displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
  displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
  emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n\t#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n\t\temissiveColor = sRGBTransferEOTF( emissiveColor );\n\t#endif\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
  emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
  colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  colorspace_pars_fragment: "vec4 LinearTransferOETF( in vec4 value ) {\n\treturn value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
  envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
  envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform mat3 envMapRotation;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n#endif",
  envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
  envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
  envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\t#ifdef USE_ANISOTROPY\n\t\tvec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n\t\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\t\tvec3 bentNormal = cross( bitangent, viewDir );\n\t\t\t\tbentNormal = normalize( cross( bentNormal, bitangent ) );\n\t\t\t\tbentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n\t\t\t\treturn getIBLRadiance( viewDir, bentNormal, roughness );\n\t\t\t#else\n\t\t\t\treturn vec3( 0.0 );\n\t\t\t#endif\n\t\t}\n\t#endif\n#endif",
  envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
  fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",
  fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",
  fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
  fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
  gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}",
  lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
  lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
  lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert",
  lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n\tuniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif ( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",
  lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
  lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon",
  lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
  lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong",
  lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef USE_SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULAR_COLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n\t\t#endif\n\t\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n\tmaterial.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\t#ifdef USE_ANISOTROPYMAP\n\t\tmat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n\t\tvec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n\t\tvec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n\t#else\n\t\tvec2 anisotropyV = anisotropyVector;\n\t#endif\n\tmaterial.anisotropy = length( anisotropyV );\n\tif( material.anisotropy == 0.0 ) {\n\t\tanisotropyV = vec2( 1.0, 0.0 );\n\t} else {\n\t\tanisotropyV /= material.anisotropy;\n\t\tmaterial.anisotropy = saturate( material.anisotropy );\n\t}\n\tmaterial.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n\tmaterial.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n\tmaterial.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",
  lights_physical_pars_fragment: "uniform sampler2D dfgLUT;\nstruct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\tfloat dispersion;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat anisotropy;\n\t\tfloat alphaT;\n\t\tvec3 anisotropyT;\n\t\tvec3 anisotropyB;\n\t#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n\tfloat V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n\t\tfloat gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n\t\tfloat gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n\t\tfloat v = 0.5 / ( gv + gl );\n\t\treturn saturate(v);\n\t}\n\tfloat D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n\t\tfloat a2 = alphaT * alphaB;\n\t\thighp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n\t\thighp float v2 = dot( v, v );\n\t\tfloat w2 = a2 / v2;\n\t\treturn RECIPROCAL_PI * a2 * pow2 ( w2 );\n\t}\n#endif\n#ifdef USE_CLEARCOAT\n\tvec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n\t\tvec3 f0 = material.clearcoatF0;\n\t\tfloat f90 = material.clearcoatF90;\n\t\tfloat roughness = material.clearcoatRoughness;\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n\tvec3 f0 = material.specularColor;\n\tfloat f90 = material.specularF90;\n\tfloat roughness = material.roughness;\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t#ifdef USE_IRIDESCENCE\n\t\tF = mix( F, material.iridescenceFresnel, material.iridescence );\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat dotTL = dot( material.anisotropyT, lightDir );\n\t\tfloat dotTV = dot( material.anisotropyT, viewDir );\n\t\tfloat dotTH = dot( material.anisotropyT, halfDir );\n\t\tfloat dotBL = dot( material.anisotropyB, lightDir );\n\t\tfloat dotBV = dot( material.anisotropyB, viewDir );\n\t\tfloat dotBH = dot( material.anisotropyB, halfDir );\n\t\tfloat V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n\t\tfloat D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n\t#else\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t#endif\n\treturn F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 uv = vec2( roughness, dotNV );\n\treturn texture2D( dfgLUT, uv ).rg;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nvec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n\tvec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );\n\tvec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );\n\tvec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;\n\tvec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;\n\tfloat Ess_V = dfgV.x + dfgV.y;\n\tfloat Ess_L = dfgL.x + dfgL.y;\n\tfloat Ems_V = 1.0 - Ess_V;\n\tfloat Ems_L = 1.0 - Ess_L;\n\tvec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;\n\tvec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );\n\tfloat compensationFactor = Ems_V * Ems_L;\n\tvec3 multiScatter = Fms * compensationFactor;\n\treturn singleScatter + multiScatter;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometryNormal;\n\t\tvec3 viewDir = geometryViewDir;\n\t\tvec3 position = geometryPosition;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
  lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n\tgeometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometryViewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometryPosition, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometryPosition, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if defined( USE_LIGHT_PROBES )\n\t\tirradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
  lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometryNormal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\t#ifdef USE_ANISOTROPY\n\t\tradiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n\t#else\n\t\tradiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",
  lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",
  logdepthbuf_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n\tgl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
  logdepthbuf_pars_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
  logdepthbuf_pars_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
  logdepthbuf_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n\tvFragDepth = 1.0 + gl_Position.w;\n\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif",
  map_fragment: "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vMapUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",
  map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
  map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t#if defined( USE_POINTS_UV )\n\t\tvec2 uv = vUv;\n\t#else\n\t\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
  map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n\tvarying vec2 vUv;\n#else\n\t#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t\tuniform mat3 uvTransform;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
  metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
  metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
  morphinstance_vertex: "#ifdef USE_INSTANCING_MORPH\n\tfloat morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\tfloat morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tmorphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n\t}\n#endif",
  morphcolor_vertex: "#if defined( USE_MORPHCOLORS )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",
  morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t}\n#endif",
  morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_INSTANCING_MORPH\n\t\tuniform float morphTargetBaseInfluence;\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t#endif\n\tuniform sampler2DArray morphTargetsTexture;\n\tuniform ivec2 morphTargetsTextureSize;\n\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t}\n#endif",
  morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t}\n#endif",
  normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal *= faceDirection;\n\t#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn = getTangentFrame( - vViewPosition, normal,\n\t\t#if defined( USE_NORMALMAP )\n\t\t\tvNormalMapUv\n\t\t#elif defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tvClearcoatNormalMapUv\n\t\t#else\n\t\t\tvUv\n\t\t#endif\n\t\t);\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn[0] *= faceDirection;\n\t\ttbn[1] *= faceDirection;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn2[0] *= faceDirection;\n\t\ttbn2[1] *= faceDirection;\n\t#endif\n#endif\nvec3 nonPerturbedNormal = normal;",
  normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n\tnormal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n\tvec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\tnormal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
  normal_pars_fragment: "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
  normal_pars_vertex: "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
  normal_vertex: "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",
  normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n\tmat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( uv.st );\n\t\tvec2 st1 = dFdy( uv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n\t\treturn mat3( T * scale, B * scale, N );\n\t}\n#endif",
  clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = nonPerturbedNormal;\n#endif",
  clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\tclearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
  clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif",
  iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif",
  opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
  packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n\tif( v <= 0.0 )\n\t\treturn vec4( 0., 0., 0., 0. );\n\tif( v >= 1.0 )\n\t\treturn vec4( 1., 1., 1., 1. );\n\tfloat vuf;\n\tfloat af = modf( v * PackFactors.a, vuf );\n\tfloat bf = modf( vuf * ShiftRight8, vuf );\n\tfloat gf = modf( vuf * ShiftRight8, vuf );\n\treturn vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n\tif( v <= 0.0 )\n\t\treturn vec3( 0., 0., 0. );\n\tif( v >= 1.0 )\n\t\treturn vec3( 1., 1., 1. );\n\tfloat vuf;\n\tfloat bf = modf( v * PackFactors.b, vuf );\n\tfloat gf = modf( vuf * ShiftRight8, vuf );\n\treturn vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n\tif( v <= 0.0 )\n\t\treturn vec2( 0., 0. );\n\tif( v >= 1.0 )\n\t\treturn vec2( 1., 1. );\n\tfloat vuf;\n\tfloat gf = modf( v * 256., vuf );\n\treturn vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n\treturn dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n\treturn v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * depth - far );\n}",
  premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
  project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n\tmvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
  dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
  dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
  roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
  roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
  shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n\tuniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\tfloat depth = unpackRGBAToDepth( texture2D( depths, uv ) );\n\t\t#ifdef USE_REVERSED_DEPTH_BUFFER\n\t\t\treturn step( depth, compare );\n\t\t#else\n\t\t\treturn step( compare, depth );\n\t\t#endif\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow( sampler2D shadow, vec2 uv, float compare ) {\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\t#ifdef USE_REVERSED_DEPTH_BUFFER\n\t\t\tfloat hard_shadow = step( distribution.x, compare );\n\t\t#else\n\t\t\tfloat hard_shadow = step( compare, distribution.x );\n\t\t#endif\n\t\tif ( hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n\t\tbool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn mix( 1.0, shadow, shadowIntensity );\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tfloat shadow = 1.0;\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\t\n\t\tfloat lightToPositionLength = length( lightToPosition );\n\t\tif ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {\n\t\t\tfloat dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\t\tdp += shadowBias;\n\t\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\t\tshadow = (\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t\t) * ( 1.0 / 9.0 );\n\t\t\t#else\n\t\t\t\tshadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t\t#endif\n\t\t}\n\t\treturn mix( 1.0, shadow, shadowIntensity );\n\t}\n#endif",
  shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n\tuniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
  shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\tvec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n#endif",
  shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
  skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
  skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tint size = textureSize( boneTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n#endif",
  skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
  skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
  specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
  specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
  tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
  tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n\tvec3( 1.6605, - 0.1246, - 0.0182 ),\n\tvec3( - 0.5876, 1.1329, - 0.1006 ),\n\tvec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n\tvec3( 0.6274, 0.0691, 0.0164 ),\n\tvec3( 0.3293, 0.9195, 0.0880 ),\n\tvec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n\tvec3 x2 = x * x;\n\tvec3 x4 = x2 * x2;\n\treturn + 15.5 * x4 * x2\n\t\t- 40.14 * x4 * x\n\t\t+ 31.96 * x4\n\t\t- 6.868 * x2 * x\n\t\t+ 0.4298 * x2\n\t\t+ 0.1191 * x\n\t\t- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n\tconst mat3 AgXInsetMatrix = mat3(\n\t\tvec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n\t\tvec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n\t\tvec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n\t);\n\tconst mat3 AgXOutsetMatrix = mat3(\n\t\tvec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n\t\tvec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n\t\tvec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n\t);\n\tconst float AgxMinEv = - 12.47393;\tconst float AgxMaxEv = 4.026069;\n\tcolor *= toneMappingExposure;\n\tcolor = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n\tcolor = AgXInsetMatrix * color;\n\tcolor = max( color, 1e-10 );\tcolor = log2( color );\n\tcolor = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n\tcolor = clamp( color, 0.0, 1.0 );\n\tcolor = agxDefaultContrastApprox( color );\n\tcolor = AgXOutsetMatrix * color;\n\tcolor = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n\tcolor = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n\tcolor = clamp( color, 0.0, 1.0 );\n\treturn color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n\tconst float StartCompression = 0.8 - 0.04;\n\tconst float Desaturation = 0.15;\n\tcolor *= toneMappingExposure;\n\tfloat x = min( color.r, min( color.g, color.b ) );\n\tfloat offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n\tcolor -= offset;\n\tfloat peak = max( color.r, max( color.g, color.b ) );\n\tif ( peak < StartCompression ) return color;\n\tfloat d = 1. - StartCompression;\n\tfloat newPeak = 1. - d * d / ( peak + d - StartCompression );\n\tcolor *= newPeak / peak;\n\tfloat g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n\treturn mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
  transmission_fragment: "#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmitted = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
  transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tfloat w0( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n\t}\n\tfloat w1( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n\t}\n\tfloat w2( float a ){\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n\t}\n\tfloat w3( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * a * a );\n\t}\n\tfloat g0( float a ) {\n\t\treturn w0( a ) + w1( a );\n\t}\n\tfloat g1( float a ) {\n\t\treturn w2( a ) + w3( a );\n\t}\n\tfloat h0( float a ) {\n\t\treturn - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n\t}\n\tfloat h1( float a ) {\n\t\treturn 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n\t}\n\tvec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n\t\tuv = uv * texelSize.zw + 0.5;\n\t\tvec2 iuv = floor( uv );\n\t\tvec2 fuv = fract( uv );\n\t\tfloat g0x = g0( fuv.x );\n\t\tfloat g1x = g1( fuv.x );\n\t\tfloat h0x = h0( fuv.x );\n\t\tfloat h1x = h1( fuv.x );\n\t\tfloat h0y = h0( fuv.y );\n\t\tfloat h1y = h1( fuv.y );\n\t\tvec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\treturn g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n\t\t\tg1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n\t}\n\tvec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n\t\tvec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n\t\tvec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n\t\tvec2 fLodSizeInv = 1.0 / fLodSize;\n\t\tvec2 cLodSizeInv = 1.0 / cLodSize;\n\t\tvec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n\t\tvec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n\t\treturn mix( fSample, cSample, fract( lod ) );\n\t}\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\treturn textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n\t}\n\tvec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( isinf( attenuationDistance ) ) {\n\t\t\treturn vec3( 1.0 );\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec4 transmittedLight;\n\t\tvec3 transmittance;\n\t\t#ifdef USE_DISPERSION\n\t\t\tfloat halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n\t\t\tvec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n\t\t\tfor ( int i = 0; i < 3; i ++ ) {\n\t\t\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n\t\t\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\t\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\t\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\t\t\trefractionCoords += 1.0;\n\t\t\t\trefractionCoords /= 2.0;\n\t\t\t\tvec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n\t\t\t\ttransmittedLight[ i ] = transmissionSample[ i ];\n\t\t\t\ttransmittedLight.a += transmissionSample.a;\n\t\t\t\ttransmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n\t\t\t}\n\t\t\ttransmittedLight.a /= 3.0;\n\t\t#else\n\t\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\t\trefractionCoords += 1.0;\n\t\t\trefractionCoords /= 2.0;\n\t\t\ttransmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\t\ttransmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\t#endif\n\t\tvec3 attenuatedColor = transmittance * transmittedLight.rgb;\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\tfloat transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n\t}\n#endif",
  uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",
  uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tuniform mat3 mapTransform;\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform mat3 alphaMapTransform;\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tuniform mat3 lightMapTransform;\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tuniform mat3 aoMapTransform;\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tuniform mat3 bumpMapTransform;\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tuniform mat3 normalMapTransform;\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tuniform mat3 displacementMapTransform;\n\tvarying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tuniform mat3 emissiveMapTransform;\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tuniform mat3 metalnessMapTransform;\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tuniform mat3 roughnessMapTransform;\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tuniform mat3 anisotropyMapTransform;\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tuniform mat3 clearcoatMapTransform;\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform mat3 clearcoatNormalMapTransform;\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform mat3 clearcoatRoughnessMapTransform;\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tuniform mat3 sheenColorMapTransform;\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tuniform mat3 sheenRoughnessMapTransform;\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tuniform mat3 iridescenceMapTransform;\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform mat3 iridescenceThicknessMapTransform;\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tuniform mat3 specularMapTransform;\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tuniform mat3 specularColorMapTransform;\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tuniform mat3 specularIntensityMapTransform;\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",
  uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n\tvMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n\tvAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n\tvLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n\tvAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n\tvBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n\tvNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tvDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n\tvMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n\tvSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tvTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n\tvThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
  worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_BATCHING\n\t\tworldPosition = batchingMatrix * worldPosition;\n\t#endif\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
  background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
  background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\ttexColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
  backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
  backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n\tuniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n\tuniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n\t#else\n\t\tvec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
  cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
  cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = texColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
  depth_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#include <morphinstance_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
  depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <clipping_planes_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <logdepthbuf_fragment>\n\t#ifdef USE_REVERSED_DEPTH_BUFFER\n\t\tfloat fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];\n\t#else\n\t\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;\n\t#endif\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#elif DEPTH_PACKING == 3202\n\t\tgl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n\t#elif DEPTH_PACKING == 3203\n\t\tgl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n\t#endif\n}",
  distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#include <morphinstance_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
  distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <clipping_planes_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
  equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
  equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
  linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
  linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
  meshbasic_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
  meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
  meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
  meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
  meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",
  meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
  meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
  meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef USE_SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULAR_COLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n\tuniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\tuniform vec2 anisotropyVector;\n\t#ifdef USE_ANISOTROPYMAP\n\t\tuniform sampler2D anisotropyMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n\t#endif\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
  meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\nvoid main() {\n\t#ifdef USE_POINTS_UV\n\t\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\t#endif\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
  points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
  shadow_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
  shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n}",
  sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix[ 3 ];\n\tvec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
  sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n}"
};
const o = {
  common: {
    diffuse: {
      value: new i.Q1f(16777215)
    },
    opacity: {
      value: 1
    },
    map: {
      value: null
    },
    mapTransform: {
      value: new i.dwI()
    },
    alphaMap: {
      value: null
    },
    alphaMapTransform: {
      value: new i.dwI()
    },
    alphaTest: {
      value: 0
    }
  },
  specularmap: {
    specularMap: {
      value: null
    },
    specularMapTransform: {
      value: new i.dwI()
    }
  },
  envmap: {
    envMap: {
      value: null
    },
    envMapRotation: {
      value: new i.dwI()
    },
    flipEnvMap: {
      value: -1
    },
    reflectivity: {
      value: 1
    },
    ior: {
      value: 1.5
    },
    refractionRatio: {
      value: 0.98
    },
    dfgLUT: {
      value: null
    }
  },
  aomap: {
    aoMap: {
      value: null
    },
    aoMapIntensity: {
      value: 1
    },
    aoMapTransform: {
      value: new i.dwI()
    }
  },
  lightmap: {
    lightMap: {
      value: null
    },
    lightMapIntensity: {
      value: 1
    },
    lightMapTransform: {
      value: new i.dwI()
    }
  },
  bumpmap: {
    bumpMap: {
      value: null
    },
    bumpMapTransform: {
      value: new i.dwI()
    },
    bumpScale: {
      value: 1
    }
  },
  normalmap: {
    normalMap: {
      value: null
    },
    normalMapTransform: {
      value: new i.dwI()
    },
    normalScale: {
      value: new i.I9Y(1, 1)
    }
  },
  displacementmap: {
    displacementMap: {
      value: null
    },
    displacementMapTransform: {
      value: new i.dwI()
    },
    displacementScale: {
      value: 1
    },
    displacementBias: {
      value: 0
    }
  },
  emissivemap: {
    emissiveMap: {
      value: null
    },
    emissiveMapTransform: {
      value: new i.dwI()
    }
  },
  metalnessmap: {
    metalnessMap: {
      value: null
    },
    metalnessMapTransform: {
      value: new i.dwI()
    }
  },
  roughnessmap: {
    roughnessMap: {
      value: null
    },
    roughnessMapTransform: {
      value: new i.dwI()
    }
  },
  gradientmap: {
    gradientMap: {
      value: null
    }
  },
  fog: {
    fogDensity: {
      value: 0.00025
    },
    fogNear: {
      value: 1
    },
    fogFar: {
      value: 2000
    },
    fogColor: {
      value: new i.Q1f(16777215)
    }
  },
  lights: {
    ambientLightColor: {
      value: []
    },
    lightProbe: {
      value: []
    },
    directionalLights: {
      value: [],
      properties: {
        direction: {},
        color: {}
      }
    },
    directionalLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    directionalShadowMap: {
      value: []
    },
    directionalShadowMatrix: {
      value: []
    },
    spotLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        direction: {},
        distance: {},
        coneCos: {},
        penumbraCos: {},
        decay: {}
      }
    },
    spotLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    spotLightMap: {
      value: []
    },
    spotShadowMap: {
      value: []
    },
    spotLightMatrix: {
      value: []
    },
    pointLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        decay: {},
        distance: {}
      }
    },
    pointLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {},
        shadowCameraNear: {},
        shadowCameraFar: {}
      }
    },
    pointShadowMap: {
      value: []
    },
    pointShadowMatrix: {
      value: []
    },
    hemisphereLights: {
      value: [],
      properties: {
        direction: {},
        skyColor: {},
        groundColor: {}
      }
    },
    rectAreaLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        width: {},
        height: {}
      }
    },
    ltc_1: {
      value: null
    },
    ltc_2: {
      value: null
    }
  },
  points: {
    diffuse: {
      value: new i.Q1f(16777215)
    },
    opacity: {
      value: 1
    },
    size: {
      value: 1
    },
    scale: {
      value: 1
    },
    map: {
      value: null
    },
    alphaMap: {
      value: null
    },
    alphaMapTransform: {
      value: new i.dwI()
    },
    alphaTest: {
      value: 0
    },
    uvTransform: {
      value: new i.dwI()
    }
  },
  sprite: {
    diffuse: {
      value: new i.Q1f(16777215)
    },
    opacity: {
      value: 1
    },
    center: {
      value: new i.I9Y(0.5, 0.5)
    },
    rotation: {
      value: 0
    },
    map: {
      value: null
    },
    mapTransform: {
      value: new i.dwI()
    },
    alphaMap: {
      value: null
    },
    alphaMapTransform: {
      value: new i.dwI()
    },
    alphaTest: {
      value: 0
    }
  }
};
const l = {
  basic: {
    uniforms: (0, i.Iit)([o.common, o.specularmap, o.envmap, o.aomap, o.lightmap, o.fog]),
    vertexShader: vxI.meshbasic_vert,
    fragmentShader: vxI.meshbasic_frag
  },
  lambert: {
    uniforms: (0, i.Iit)([o.common, o.specularmap, o.envmap, o.aomap, o.lightmap, o.emissivemap, o.bumpmap, o.normalmap, o.displacementmap, o.fog, o.lights, {
      emissive: {
        value: new i.Q1f(0)
      }
    }]),
    vertexShader: vxI.meshlambert_vert,
    fragmentShader: vxI.meshlambert_frag
  },
  phong: {
    uniforms: (0, i.Iit)([o.common, o.specularmap, o.envmap, o.aomap, o.lightmap, o.emissivemap, o.bumpmap, o.normalmap, o.displacementmap, o.fog, o.lights, {
      emissive: {
        value: new i.Q1f(0)
      },
      specular: {
        value: new i.Q1f(1118481)
      },
      shininess: {
        value: 30
      }
    }]),
    vertexShader: vxI.meshphong_vert,
    fragmentShader: vxI.meshphong_frag
  },
  standard: {
    uniforms: (0, i.Iit)([o.common, o.envmap, o.aomap, o.lightmap, o.emissivemap, o.bumpmap, o.normalmap, o.displacementmap, o.roughnessmap, o.metalnessmap, o.fog, o.lights, {
      emissive: {
        value: new i.Q1f(0)
      },
      roughness: {
        value: 1
      },
      metalness: {
        value: 0
      },
      envMapIntensity: {
        value: 1
      }
    }]),
    vertexShader: vxI.meshphysical_vert,
    fragmentShader: vxI.meshphysical_frag
  },
  toon: {
    uniforms: (0, i.Iit)([o.common, o.aomap, o.lightmap, o.emissivemap, o.bumpmap, o.normalmap, o.displacementmap, o.gradientmap, o.fog, o.lights, {
      emissive: {
        value: new i.Q1f(0)
      }
    }]),
    vertexShader: vxI.meshtoon_vert,
    fragmentShader: vxI.meshtoon_frag
  },
  matcap: {
    uniforms: (0, i.Iit)([o.common, o.bumpmap, o.normalmap, o.displacementmap, o.fog, {
      matcap: {
        value: null
      }
    }]),
    vertexShader: vxI.meshmatcap_vert,
    fragmentShader: vxI.meshmatcap_frag
  },
  points: {
    uniforms: (0, i.Iit)([o.points, o.fog]),
    vertexShader: vxI.points_vert,
    fragmentShader: vxI.points_frag
  },
  dashed: {
    uniforms: (0, i.Iit)([o.common, o.fog, {
      scale: {
        value: 1
      },
      dashSize: {
        value: 1
      },
      totalSize: {
        value: 2
      }
    }]),
    vertexShader: vxI.linedashed_vert,
    fragmentShader: vxI.linedashed_frag
  },
  depth: {
    uniforms: (0, i.Iit)([o.common, o.displacementmap]),
    vertexShader: vxI.depth_vert,
    fragmentShader: vxI.depth_frag
  },
  normal: {
    uniforms: (0, i.Iit)([o.common, o.bumpmap, o.normalmap, o.displacementmap, {
      opacity: {
        value: 1
      }
    }]),
    vertexShader: vxI.meshnormal_vert,
    fragmentShader: vxI.meshnormal_frag
  },
  sprite: {
    uniforms: (0, i.Iit)([o.sprite, o.fog]),
    vertexShader: vxI.sprite_vert,
    fragmentShader: vxI.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: {
        value: new i.dwI()
      },
      t2D: {
        value: null
      },
      backgroundIntensity: {
        value: 1
      }
    },
    vertexShader: vxI.background_vert,
    fragmentShader: vxI.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: {
        value: null
      },
      flipEnvMap: {
        value: -1
      },
      backgroundBlurriness: {
        value: 0
      },
      backgroundIntensity: {
        value: 1
      },
      backgroundRotation: {
        value: new i.dwI()
      }
    },
    vertexShader: vxI.backgroundCube_vert,
    fragmentShader: vxI.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: {
        value: null
      },
      tFlip: {
        value: -1
      },
      opacity: {
        value: 1
      }
    },
    vertexShader: vxI.cube_vert,
    fragmentShader: vxI.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: {
        value: null
      }
    },
    vertexShader: vxI.equirect_vert,
    fragmentShader: vxI.equirect_frag
  },
  distanceRGBA: {
    uniforms: (0, i.Iit)([o.common, o.displacementmap, {
      referencePosition: {
        value: new i.Pq0()
      },
      nearDistance: {
        value: 1
      },
      farDistance: {
        value: 1000
      }
    }]),
    vertexShader: vxI.distanceRGBA_vert,
    fragmentShader: vxI.distanceRGBA_frag
  },
  shadow: {
    uniforms: (0, i.Iit)([o.lights, o.fog, {
      color: {
        value: new i.Q1f(0)
      },
      opacity: {
        value: 1
      }
    }]),
    vertexShader: vxI.shadow_vert,
    fragmentShader: vxI.shadow_frag
  }
};
l.physical = {
  uniforms: (0, i.Iit)([l.standard.uniforms, {
    clearcoat: {
      value: 0
    },
    clearcoatMap: {
      value: null
    },
    clearcoatMapTransform: {
      value: new i.dwI()
    },
    clearcoatNormalMap: {
      value: null
    },
    clearcoatNormalMapTransform: {
      value: new i.dwI()
    },
    clearcoatNormalScale: {
      value: new i.I9Y(1, 1)
    },
    clearcoatRoughness: {
      value: 0
    },
    clearcoatRoughnessMap: {
      value: null
    },
    clearcoatRoughnessMapTransform: {
      value: new i.dwI()
    },
    dispersion: {
      value: 0
    },
    iridescence: {
      value: 0
    },
    iridescenceMap: {
      value: null
    },
    iridescenceMapTransform: {
      value: new i.dwI()
    },
    iridescenceIOR: {
      value: 1.3
    },
    iridescenceThicknessMinimum: {
      value: 100
    },
    iridescenceThicknessMaximum: {
      value: 400
    },
    iridescenceThicknessMap: {
      value: null
    },
    iridescenceThicknessMapTransform: {
      value: new i.dwI()
    },
    sheen: {
      value: 0
    },
    sheenColor: {
      value: new i.Q1f(0)
    },
    sheenColorMap: {
      value: null
    },
    sheenColorMapTransform: {
      value: new i.dwI()
    },
    sheenRoughness: {
      value: 1
    },
    sheenRoughnessMap: {
      value: null
    },
    sheenRoughnessMapTransform: {
      value: new i.dwI()
    },
    transmission: {
      value: 0
    },
    transmissionMap: {
      value: null
    },
    transmissionMapTransform: {
      value: new i.dwI()
    },
    transmissionSamplerSize: {
      value: new i.I9Y()
    },
    transmissionSamplerMap: {
      value: null
    },
    thickness: {
      value: 0
    },
    thicknessMap: {
      value: null
    },
    thicknessMapTransform: {
      value: new i.dwI()
    },
    attenuationDistance: {
      value: 0
    },
    attenuationColor: {
      value: new i.Q1f(0)
    },
    specularColor: {
      value: new i.Q1f(1, 1, 1)
    },
    specularColorMap: {
      value: null
    },
    specularColorMapTransform: {
      value: new i.dwI()
    },
    specularIntensity: {
      value: 1
    },
    specularIntensityMap: {
      value: null
    },
    specularIntensityMapTransform: {
      value: new i.dwI()
    },
    anisotropyVector: {
      value: new i.I9Y()
    },
    anisotropyMap: {
      value: null
    },
    anisotropyMapTransform: {
      value: new i.dwI()
    }
  }]),
  vertexShader: vxI.meshphysical_vert,
  fragmentShader: vxI.meshphysical_frag
};
const c = {
  r: 0,
  b: 0,
  g: 0
};
const h = new i.O9p();
const d = new i.kn4();
function u(e, t, n, r, a, s, o) {
  const u = new i.Q1f(0);
  let f;
  let p;
  let g = s === true ? 0 : 1;
  let m = null;
  let A = 0;
  let v = null;
  function b(e) {
    let i = e.isScene === true ? e.background : null;
    if (i && i.isTexture) {
      i = (e.backgroundBlurriness > 0 ? n : t).get(i);
    }
    return i;
  }
  function y(t, n) {
    t.getRGB(c, (0, i._Ut)(e));
    r.buffers.color.setClear(c.r, c.g, c.b, n, o);
  }
  return {
    getClearColor: function () {
      return u;
    },
    setClearColor: function (e, t = 1) {
      u.set(e);
      g = t;
      y(u, g);
    },
    getClearAlpha: function () {
      return g;
    },
    setClearAlpha: function (e) {
      g = e;
      y(u, g);
    },
    render: function (t) {
      let n = false;
      const i = b(t);
      if (i === null) {
        y(u, g);
      } else if (i && i.isColor) {
        y(i, 1);
        n = true;
      }
      const a = e.xr.getEnvironmentBlendMode();
      if (a === "additive") {
        r.buffers.color.setClear(0, 0, 0, 1, o);
      } else if (a === "alpha-blend") {
        r.buffers.color.setClear(0, 0, 0, 0, o);
      }
      if (e.autoClear || n) {
        r.buffers.depth.setTest(true);
        r.buffers.depth.setMask(true);
        r.buffers.color.setMask(true);
        e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil);
      }
    },
    addToRenderList: function (t, n) {
      const r = b(n);
      if (r && (r.isCubeTexture || r.mapping === i.Om)) {
        if (p === undefined) {
          p = new i.eaF(new i.iNn(1, 1, 1), new i.BKk({
            name: "BackgroundCubeMaterial",
            uniforms: (0, i.lxW)(l.backgroundCube.uniforms),
            vertexShader: l.backgroundCube.vertexShader,
            fragmentShader: l.backgroundCube.fragmentShader,
            side: i.hsX,
            depthTest: false,
            depthWrite: false,
            fog: false,
            allowOverride: false
          }));
          p.geometry.deleteAttribute("normal");
          p.geometry.deleteAttribute("uv");
          p.onBeforeRender = function (e, t, n) {
            this.matrixWorld.copyPosition(n.matrixWorld);
          };
          Object.defineProperty(p.material, "envMap", {
            get: function () {
              return this.uniforms.envMap.value;
            }
          });
          a.update(p);
        }
        h.copy(n.backgroundRotation);
        h.x *= -1;
        h.y *= -1;
        h.z *= -1;
        if (r.isCubeTexture && r.isRenderTargetTexture === false) {
          h.y *= -1;
          h.z *= -1;
        }
        p.material.uniforms.envMap.value = r;
        p.material.uniforms.flipEnvMap.value = r.isCubeTexture && r.isRenderTargetTexture === false ? -1 : 1;
        p.material.uniforms.backgroundBlurriness.value = n.backgroundBlurriness;
        p.material.uniforms.backgroundIntensity.value = n.backgroundIntensity;
        p.material.uniforms.backgroundRotation.value.setFromMatrix4(d.makeRotationFromEuler(h));
        p.material.toneMapped = i.ppV.getTransfer(r.colorSpace) !== i.KLL;
        if (m !== r || A !== r.version || v !== e.toneMapping) {
          p.material.needsUpdate = true;
          m = r;
          A = r.version;
          v = e.toneMapping;
        }
        p.layers.enableAll();
        t.unshift(p, p.geometry, p.material, 0, 0, null);
      } else if (r && r.isTexture) {
        if (f === undefined) {
          f = new i.eaF(new i.bdM(2, 2), new i.BKk({
            name: "BackgroundMaterial",
            uniforms: (0, i.lxW)(l.background.uniforms),
            vertexShader: l.background.vertexShader,
            fragmentShader: l.background.fragmentShader,
            side: i.hB5,
            depthTest: false,
            depthWrite: false,
            fog: false,
            allowOverride: false
          }));
          f.geometry.deleteAttribute("normal");
          Object.defineProperty(f.material, "map", {
            get: function () {
              return this.uniforms.t2D.value;
            }
          });
          a.update(f);
        }
        f.material.uniforms.t2D.value = r;
        f.material.uniforms.backgroundIntensity.value = n.backgroundIntensity;
        f.material.toneMapped = i.ppV.getTransfer(r.colorSpace) !== i.KLL;
        if (r.matrixAutoUpdate === true) {
          r.updateMatrix();
        }
        f.material.uniforms.uvTransform.value.copy(r.matrix);
        if (m !== r || A !== r.version || v !== e.toneMapping) {
          f.material.needsUpdate = true;
          m = r;
          A = r.version;
          v = e.toneMapping;
        }
        f.layers.enableAll();
        t.unshift(f, f.geometry, f.material, 0, 0, null);
      }
    },
    dispose: function () {
      if (p !== undefined) {
        p.geometry.dispose();
        p.material.dispose();
        p = undefined;
      }
      if (f !== undefined) {
        f.geometry.dispose();
        f.material.dispose();
        f = undefined;
      }
    }
  };
}
function f(e, t) {
  const n = e.getParameter(e.MAX_VERTEX_ATTRIBS);
  const r = {};
  const a = h(null);
  let s = a;
  let o = false;
  function l(t) {
    return e.bindVertexArray(t);
  }
  function c(t) {
    return e.deleteVertexArray(t);
  }
  function h(e) {
    const t = [];
    const i = [];
    const r = [];
    for (let e = 0; e < n; e++) {
      t[e] = 0;
      i[e] = 0;
      r[e] = 0;
    }
    return {
      geometry: null,
      program: null,
      wireframe: false,
      newAttributes: t,
      enabledAttributes: i,
      attributeDivisors: r,
      object: e,
      attributes: {},
      index: null
    };
  }
  function d() {
    const e = s.newAttributes;
    for (let t = 0, n = e.length; t < n; t++) {
      e[t] = 0;
    }
  }
  function u(e) {
    f(e, 0);
  }
  function f(t, n) {
    const i = s.newAttributes;
    const r = s.enabledAttributes;
    const a = s.attributeDivisors;
    i[t] = 1;
    if (r[t] === 0) {
      e.enableVertexAttribArray(t);
      r[t] = 1;
    }
    if (a[t] !== n) {
      e.vertexAttribDivisor(t, n);
      a[t] = n;
    }
  }
  function p() {
    const t = s.newAttributes;
    const n = s.enabledAttributes;
    for (let i = 0, r = n.length; i < r; i++) {
      if (n[i] !== t[i]) {
        e.disableVertexAttribArray(i);
        n[i] = 0;
      }
    }
  }
  function g(t, n, i, r, a, s, o) {
    if (o === true) {
      e.vertexAttribIPointer(t, n, i, a, s);
    } else {
      e.vertexAttribPointer(t, n, i, r, a, s);
    }
  }
  function m() {
    A();
    o = true;
    if (s !== a) {
      s = a;
      l(s.object);
    }
  }
  function A() {
    a.geometry = null;
    a.program = null;
    a.wireframe = false;
  }
  return {
    setup: function (n, a, c, m, A) {
      let v = false;
      const b = function (t, n, i) {
        const a = i.wireframe === true;
        let s = r[t.id];
        if (s === undefined) {
          s = {};
          r[t.id] = s;
        }
        let o = s[n.id];
        if (o === undefined) {
          o = {};
          s[n.id] = o;
        }
        let l = o[a];
        if (l === undefined) {
          l = h(e.createVertexArray());
          o[a] = l;
        }
        return l;
      }(m, c, a);
      if (s !== b) {
        s = b;
        l(s.object);
      }
      v = function (e, t, n, i) {
        const r = s.attributes;
        const a = t.attributes;
        let o = 0;
        const l = n.getAttributes();
        for (const t in l) {
          if (l[t].location >= 0) {
            const n = r[t];
            let i = a[t];
            if (i === undefined) {
              if (t === "instanceMatrix" && e.instanceMatrix) {
                i = e.instanceMatrix;
              }
              if (t === "instanceColor" && e.instanceColor) {
                i = e.instanceColor;
              }
            }
            if (n === undefined) {
              return true;
            }
            if (n.attribute !== i) {
              return true;
            }
            if (i && n.data !== i.data) {
              return true;
            }
            o++;
          }
        }
        return s.attributesNum !== o || s.index !== i;
      }(n, m, c, A);
      if (v) {
        (function (e, t, n, i) {
          const r = {};
          const a = t.attributes;
          let o = 0;
          const l = n.getAttributes();
          for (const t in l) {
            if (l[t].location >= 0) {
              let n = a[t];
              if (n === undefined) {
                if (t === "instanceMatrix" && e.instanceMatrix) {
                  n = e.instanceMatrix;
                }
                if (t === "instanceColor" && e.instanceColor) {
                  n = e.instanceColor;
                }
              }
              const i = {
                attribute: n
              };
              if (n && n.data) {
                i.data = n.data;
              }
              r[t] = i;
              o++;
            }
          }
          s.attributes = r;
          s.attributesNum = o;
          s.index = i;
        })(n, m, c, A);
      }
      if (A !== null) {
        t.update(A, e.ELEMENT_ARRAY_BUFFER);
      }
      if (v || o) {
        o = false;
        (function (n, r, a, s) {
          d();
          const o = s.attributes;
          const l = a.getAttributes();
          const c = r.defaultAttributeValues;
          for (const r in l) {
            const a = l[r];
            if (a.location >= 0) {
              let l = o[r];
              if (l === undefined) {
                if (r === "instanceMatrix" && n.instanceMatrix) {
                  l = n.instanceMatrix;
                }
                if (r === "instanceColor" && n.instanceColor) {
                  l = n.instanceColor;
                }
              }
              if (l !== undefined) {
                const r = l.normalized;
                const o = l.itemSize;
                const c = t.get(l);
                if (c === undefined) {
                  continue;
                }
                const h = c.buffer;
                const d = c.type;
                const p = c.bytesPerElement;
                const m = d === e.INT || d === e.UNSIGNED_INT || l.gpuType === i.Yuy;
                if (l.isInterleavedBufferAttribute) {
                  const t = l.data;
                  const i = t.stride;
                  const c = l.offset;
                  if (t.isInstancedInterleavedBuffer) {
                    for (let e = 0; e < a.locationSize; e++) {
                      f(a.location + e, t.meshPerAttribute);
                    }
                    if (n.isInstancedMesh !== true && s._maxInstanceCount === undefined) {
                      s._maxInstanceCount = t.meshPerAttribute * t.count;
                    }
                  } else {
                    for (let e = 0; e < a.locationSize; e++) {
                      u(a.location + e);
                    }
                  }
                  e.bindBuffer(e.ARRAY_BUFFER, h);
                  for (let e = 0; e < a.locationSize; e++) {
                    g(a.location + e, o / a.locationSize, d, r, i * p, (c + o / a.locationSize * e) * p, m);
                  }
                } else {
                  if (l.isInstancedBufferAttribute) {
                    for (let e = 0; e < a.locationSize; e++) {
                      f(a.location + e, l.meshPerAttribute);
                    }
                    if (n.isInstancedMesh !== true && s._maxInstanceCount === undefined) {
                      s._maxInstanceCount = l.meshPerAttribute * l.count;
                    }
                  } else {
                    for (let e = 0; e < a.locationSize; e++) {
                      u(a.location + e);
                    }
                  }
                  e.bindBuffer(e.ARRAY_BUFFER, h);
                  for (let e = 0; e < a.locationSize; e++) {
                    g(a.location + e, o / a.locationSize, d, r, o * p, o / a.locationSize * e * p, m);
                  }
                }
              } else if (c !== undefined) {
                const t = c[r];
                if (t !== undefined) {
                  switch (t.length) {
                    case 2:
                      e.vertexAttrib2fv(a.location, t);
                      break;
                    case 3:
                      e.vertexAttrib3fv(a.location, t);
                      break;
                    case 4:
                      e.vertexAttrib4fv(a.location, t);
                      break;
                    default:
                      e.vertexAttrib1fv(a.location, t);
                  }
                }
              }
            }
          }
          p();
        })(n, a, c, m);
        if (A !== null) {
          e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(A).buffer);
        }
      }
    },
    reset: m,
    resetDefaultState: A,
    dispose: function () {
      m();
      for (const e in r) {
        const t = r[e];
        for (const e in t) {
          const n = t[e];
          for (const e in n) {
            c(n[e].object);
            delete n[e];
          }
          delete t[e];
        }
        delete r[e];
      }
    },
    releaseStatesOfGeometry: function (e) {
      if (r[e.id] === undefined) {
        return;
      }
      const t = r[e.id];
      for (const e in t) {
        const n = t[e];
        for (const e in n) {
          c(n[e].object);
          delete n[e];
        }
        delete t[e];
      }
      delete r[e.id];
    },
    releaseStatesOfProgram: function (e) {
      for (const t in r) {
        const n = r[t];
        if (n[e.id] === undefined) {
          continue;
        }
        const i = n[e.id];
        for (const e in i) {
          c(i[e].object);
          delete i[e];
        }
        delete n[e.id];
      }
    },
    initAttributes: d,
    enableAttribute: u,
    disableUnusedAttributes: p
  };
}
function p(e, t, n) {
  let i;
  function r(t, r, a) {
    if (a !== 0) {
      e.drawArraysInstanced(i, t, r, a);
      n.update(r, i, a);
    }
  }
  this.setMode = function (e) {
    i = e;
  };
  this.render = function (t, r) {
    e.drawArrays(i, t, r);
    n.update(r, i, 1);
  };
  this.renderInstances = r;
  this.renderMultiDraw = function (e, r, a) {
    if (a === 0) {
      return;
    }
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, e, 0, r, 0, a);
    let s = 0;
    for (let e = 0; e < a; e++) {
      s += r[e];
    }
    n.update(s, i, 1);
  };
  this.renderMultiDrawInstances = function (e, a, s, o) {
    if (s === 0) {
      return;
    }
    const l = t.get("WEBGL_multi_draw");
    if (l === null) {
      for (let t = 0; t < e.length; t++) {
        r(e[t], a[t], o[t]);
      }
    } else {
      l.multiDrawArraysInstancedWEBGL(i, e, 0, a, 0, o, 0, s);
      let t = 0;
      for (let e = 0; e < s; e++) {
        t += a[e] * o[e];
      }
      n.update(t, i, 1);
    }
  };
}
function g(e, t, n, r) {
  let a;
  function s(t) {
    if (t === "highp") {
      if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) {
        return "highp";
      }
      t = "mediump";
    }
    if (t === "mediump" && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0) {
      return "mediump";
    } else {
      return "lowp";
    }
  }
  let o = n.precision !== undefined ? n.precision : "highp";
  const l = s(o);
  if (l !== o) {
    (0, i.R8M)("WebGLRenderer:", o, "not supported, using", l, "instead.");
    o = l;
  }
  const c = n.logarithmicDepthBuffer === true;
  const h = n.reversedDepthBuffer === true && t.has("EXT_clip_control");
  const d = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);
  const u = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
  return {
    isWebGL2: true,
    getMaxAnisotropy: function () {
      if (a !== undefined) {
        return a;
      }
      if (t.has("EXT_texture_filter_anisotropic") === true) {
        const n = t.get("EXT_texture_filter_anisotropic");
        a = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else {
        a = 0;
      }
      return a;
    },
    getMaxPrecision: s,
    textureFormatReadable: function (t) {
      return t === i.GWd || r.convert(t) === e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT);
    },
    textureTypeReadable: function (n) {
      const a = n === i.ix0 && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
      return n === i.OUM || r.convert(n) === e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE) || n === i.RQf || !!a;
    },
    precision: o,
    logarithmicDepthBuffer: c,
    reversedDepthBuffer: h,
    maxTextures: d,
    maxVertexTextures: u,
    maxTextureSize: e.getParameter(e.MAX_TEXTURE_SIZE),
    maxCubemapSize: e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),
    maxAttributes: e.getParameter(e.MAX_VERTEX_ATTRIBS),
    maxVertexUniforms: e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),
    maxVaryings: e.getParameter(e.MAX_VARYING_VECTORS),
    maxFragmentUniforms: e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),
    vertexTextures: u > 0,
    maxSamples: e.getParameter(e.MAX_SAMPLES)
  };
}
function m(e) {
  const t = this;
  let n = null;
  let r = 0;
  let a = false;
  let s = false;
  const o = new i.Zcv();
  const l = new i.dwI();
  const c = {
    value: null,
    needsUpdate: false
  };
  function h(e, n, i, r) {
    const a = e !== null ? e.length : 0;
    let s = null;
    if (a !== 0) {
      s = c.value;
      if (r !== true || s === null) {
        const t = i + a * 4;
        const r = n.matrixWorldInverse;
        l.getNormalMatrix(r);
        if (s === null || s.length < t) {
          s = new Float32Array(t);
        }
        for (let t = 0, n = i; t !== a; ++t, n += 4) {
          o.copy(e[t]).applyMatrix4(r, l);
          o.normal.toArray(s, n);
          s[n + 3] = o.constant;
        }
      }
      c.value = s;
      c.needsUpdate = true;
    }
    t.numPlanes = a;
    t.numIntersection = 0;
    return s;
  }
  this.uniform = c;
  this.numPlanes = 0;
  this.numIntersection = 0;
  this.init = function (e, t) {
    const n = e.length !== 0 || t || r !== 0 || a;
    a = t;
    r = e.length;
    return n;
  };
  this.beginShadows = function () {
    s = true;
    h(null);
  };
  this.endShadows = function () {
    s = false;
  };
  this.setGlobalState = function (e, t) {
    n = h(e, t, 0);
  };
  this.setState = function (i, o, l) {
    const d = i.clippingPlanes;
    const u = i.clipIntersection;
    const f = i.clipShadows;
    const p = e.get(i);
    if (!a || d === null || d.length === 0 || s && !f) {
      if (s) {
        h(null);
      } else {
        (function () {
          if (c.value !== n) {
            c.value = n;
            c.needsUpdate = r > 0;
          }
          t.numPlanes = r;
          t.numIntersection = 0;
        })();
      }
    } else {
      const e = s ? 0 : r;
      const t = e * 4;
      let i = p.clippingState || null;
      c.value = i;
      i = h(d, o, t, l);
      for (let e = 0; e !== t; ++e) {
        i[e] = n[e];
      }
      p.clippingState = i;
      this.numIntersection = u ? this.numPlanes : 0;
      this.numPlanes += e;
    }
  };
}
function A(e) {
  let t = new WeakMap();
  function n(e, t) {
    if (t === i.wfO) {
      e.mapping = i.hy7;
    } else if (t === i.uV5) {
      e.mapping = i.xFO;
    }
    return e;
  }
  function r(e) {
    const n = e.target;
    n.removeEventListener("dispose", r);
    const i = t.get(n);
    if (i !== undefined) {
      t.delete(n);
      i.dispose();
    }
  }
  return {
    get: function (a) {
      if (a && a.isTexture) {
        const s = a.mapping;
        if (s === i.wfO || s === i.uV5) {
          if (t.has(a)) {
            return n(t.get(a).texture, a.mapping);
          }
          {
            const s = a.image;
            if (s && s.height > 0) {
              const o = new i.o6l(s.height);
              o.fromEquirectangularTexture(e, a);
              t.set(a, o);
              a.addEventListener("dispose", r);
              return n(o.texture, a.mapping);
            }
            return null;
          }
        }
      }
      return a;
    },
    dispose: function () {
      t = new WeakMap();
    }
  };
}
const v = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582];
const b = 20;
const y = new i.qUd();
const w = new i.Q1f();
let x = null;
let S = 0;
let k = 0;
let T = false;
const E = new i.Pq0();
class M {
  constructor(e) {
    this._renderer = e;
    this._pingPongRenderTarget = null;
    this._lodMax = 0;
    this._cubeSize = 0;
    this._sizeLods = [];
    this._sigmas = [];
    this._lodMeshes = [];
    this._backgroundBox = null;
    this._cubemapMaterial = null;
    this._equirectMaterial = null;
    this._blurMaterial = null;
    this._ggxMaterial = null;
  }
  fromScene(e, t = 0, n = 0.1, i = 100, r = {}) {
    const {
      size: a = 256,
      position: s = E
    } = r;
    x = this._renderer.getRenderTarget();
    S = this._renderer.getActiveCubeFace();
    k = this._renderer.getActiveMipmapLevel();
    T = this._renderer.xr.enabled;
    this._renderer.xr.enabled = false;
    this._setSize(a);
    const o = this._allocateTargets();
    o.depthBuffer = true;
    this._sceneToCubeUV(e, n, i, o, s);
    if (t > 0) {
      this._blur(o, 0, 0, t);
    }
    this._applyPMREM(o);
    this._cleanup(o);
    return o;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    if (this._cubemapMaterial === null) {
      this._cubemapMaterial = P();
      this._compileMaterial(this._cubemapMaterial);
    }
  }
  compileEquirectangularShader() {
    if (this._equirectMaterial === null) {
      this._equirectMaterial = R();
      this._compileMaterial(this._equirectMaterial);
    }
  }
  dispose() {
    this._dispose();
    if (this._cubemapMaterial !== null) {
      this._cubemapMaterial.dispose();
    }
    if (this._equirectMaterial !== null) {
      this._equirectMaterial.dispose();
    }
    if (this._backgroundBox !== null) {
      this._backgroundBox.geometry.dispose();
      this._backgroundBox.material.dispose();
    }
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e));
    this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    if (this._blurMaterial !== null) {
      this._blurMaterial.dispose();
    }
    if (this._ggxMaterial !== null) {
      this._ggxMaterial.dispose();
    }
    if (this._pingPongRenderTarget !== null) {
      this._pingPongRenderTarget.dispose();
    }
    for (let e = 0; e < this._lodMeshes.length; e++) {
      this._lodMeshes[e].geometry.dispose();
    }
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(x, S, k);
    this._renderer.xr.enabled = T;
    e.scissorTest = false;
    C(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    if (e.mapping === i.hy7 || e.mapping === i.xFO) {
      this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width);
    } else {
      this._setSize(e.image.width / 4);
    }
    x = this._renderer.getRenderTarget();
    S = this._renderer.getActiveCubeFace();
    k = this._renderer.getActiveMipmapLevel();
    T = this._renderer.xr.enabled;
    this._renderer.xr.enabled = false;
    const n = t || this._allocateTargets();
    this._textureToCubeUV(e, n);
    this._applyPMREM(n);
    this._cleanup(n);
    return n;
  }
  _allocateTargets() {
    const e = Math.max(this._cubeSize, 112) * 3;
    const t = this._cubeSize * 4;
    const n = {
      magFilter: i.k6q,
      minFilter: i.k6q,
      generateMipmaps: false,
      type: i.ix0,
      format: i.GWd,
      colorSpace: i.Zr2,
      depthBuffer: false
    };
    const r = _(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      if (this._pingPongRenderTarget !== null) {
        this._dispose();
      }
      this._pingPongRenderTarget = _(e, t, n);
      const {
        _lodMax: r
      } = this;
      ({
        lodMeshes: this._lodMeshes,
        sizeLods: this._sizeLods,
        sigmas: this._sigmas
      } = function (e) {
        const t = [];
        const n = [];
        const r = [];
        let a = e;
        const s = e - 4 + 1 + v.length;
        for (let o = 0; o < s; o++) {
          const s = Math.pow(2, a);
          t.push(s);
          let l = 1 / s;
          if (o > e - 4) {
            l = v[o - e + 4 - 1];
          } else if (o === 0) {
            l = 0;
          }
          n.push(l);
          const c = 1 / (s - 2);
          const h = -c;
          const d = 1 + c;
          const u = [h, h, d, h, d, d, h, h, d, d, h, d];
          const f = 6;
          const p = 6;
          const g = 3;
          const m = 2;
          const A = 1;
          const b = new Float32Array(g * p * f);
          const y = new Float32Array(m * p * f);
          const w = new Float32Array(A * p * f);
          for (let e = 0; e < f; e++) {
            const t = e % 3 * 2 / 3 - 1;
            const n = e > 2 ? 0 : -1;
            const i = [t, n, 0, t + 2 / 3, n, 0, t + 2 / 3, n + 1, 0, t, n, 0, t + 2 / 3, n + 1, 0, t, n + 1, 0];
            b.set(i, g * p * e);
            y.set(u, m * p * e);
            const r = [e, e, e, e, e, e];
            w.set(r, A * p * e);
          }
          const x = new i.LoY();
          x.setAttribute("position", new i.THS(b, g));
          x.setAttribute("uv", new i.THS(y, m));
          x.setAttribute("faceIndex", new i.THS(w, A));
          r.push(new i.eaF(x, null));
          if (a > 4) {
            a--;
          }
        }
        return {
          lodMeshes: r,
          sizeLods: t,
          sigmas: n
        };
      }(r));
      this._blurMaterial = function (e, t, n) {
        const r = new Float32Array(b);
        const a = new i.Pq0(0, 1, 0);
        const s = new i.BKk({
          name: "SphericalGaussianBlur",
          defines: {
            n: b,
            CUBEUV_TEXEL_WIDTH: 1 / t,
            CUBEUV_TEXEL_HEIGHT: 1 / n,
            CUBEUV_MAX_MIP: `${e}.0`
          },
          uniforms: {
            envMap: {
              value: null
            },
            samples: {
              value: 1
            },
            weights: {
              value: r
            },
            latitudinal: {
              value: false
            },
            dTheta: {
              value: 0
            },
            mipInt: {
              value: 0
            },
            poleAxis: {
              value: a
            }
          },
          vertexShader: I(),
          fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
          blending: i.XIg,
          depthTest: false,
          depthWrite: false
        });
        return s;
      }(r, e, t);
      this._ggxMaterial = function (e, t, n) {
        const r = new i.BKk({
          name: "PMREMGGXConvolution",
          defines: {
            GGX_SAMPLES: 256,
            CUBEUV_TEXEL_WIDTH: 1 / t,
            CUBEUV_TEXEL_HEIGHT: 1 / n,
            CUBEUV_MAX_MIP: `${e}.0`
          },
          uniforms: {
            envMap: {
              value: null
            },
            roughness: {
              value: 0
            },
            mipInt: {
              value: 0
            }
          },
          vertexShader: I(),
          fragmentShader: "\n\n\t\t\tprecision highp float;\n\t\t\tprecision highp int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform float roughness;\n\t\t\tuniform float mipInt;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\t#define PI 3.14159265359\n\n\t\t\t// Van der Corput radical inverse\n\t\t\tfloat radicalInverse_VdC(uint bits) {\n\t\t\t\tbits = (bits << 16u) | (bits >> 16u);\n\t\t\t\tbits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);\n\t\t\t\tbits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);\n\t\t\t\tbits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);\n\t\t\t\tbits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);\n\t\t\t\treturn float(bits) * 2.3283064365386963e-10; // / 0x100000000\n\t\t\t}\n\n\t\t\t// Hammersley sequence\n\t\t\tvec2 hammersley(uint i, uint N) {\n\t\t\t\treturn vec2(float(i) / float(N), radicalInverse_VdC(i));\n\t\t\t}\n\n\t\t\t// GGX VNDF importance sampling (Eric Heitz 2018)\n\t\t\t// \"Sampling the GGX Distribution of Visible Normals\"\n\t\t\t// https://jcgt.org/published/0007/04/01/\n\t\t\tvec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {\n\t\t\t\tfloat alpha = roughness * roughness;\n\n\t\t\t\t// Section 3.2: Transform view direction to hemisphere configuration\n\t\t\t\tvec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));\n\n\t\t\t\t// Section 4.1: Orthonormal basis\n\t\t\t\tfloat lensq = Vh.x * Vh.x + Vh.y * Vh.y;\n\t\t\t\tvec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);\n\t\t\t\tvec3 T2 = cross(Vh, T1);\n\n\t\t\t\t// Section 4.2: Parameterization of projected area\n\t\t\t\tfloat r = sqrt(Xi.x);\n\t\t\t\tfloat phi = 2.0 * PI * Xi.y;\n\t\t\t\tfloat t1 = r * cos(phi);\n\t\t\t\tfloat t2 = r * sin(phi);\n\t\t\t\tfloat s = 0.5 * (1.0 + Vh.z);\n\t\t\t\tt2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;\n\n\t\t\t\t// Section 4.3: Reprojection onto hemisphere\n\t\t\t\tvec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;\n\n\t\t\t\t// Section 3.4: Transform back to ellipsoid configuration\n\t\t\t\treturn normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));\n\t\t\t}\n\n\t\t\tvoid main() {\n\t\t\t\tvec3 N = normalize(vOutputDirection);\n\t\t\t\tvec3 V = N; // Assume view direction equals normal for pre-filtering\n\n\t\t\t\tvec3 prefilteredColor = vec3(0.0);\n\t\t\t\tfloat totalWeight = 0.0;\n\n\t\t\t\t// For very low roughness, just sample the environment directly\n\t\t\t\tif (roughness < 0.001) {\n\t\t\t\t\tgl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\t// Tangent space basis for VNDF sampling\n\t\t\t\tvec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);\n\t\t\t\tvec3 tangent = normalize(cross(up, N));\n\t\t\t\tvec3 bitangent = cross(N, tangent);\n\n\t\t\t\tfor(uint i = 0u; i < uint(GGX_SAMPLES); i++) {\n\t\t\t\t\tvec2 Xi = hammersley(i, uint(GGX_SAMPLES));\n\n\t\t\t\t\t// For PMREM, V = N, so in tangent space V is always (0, 0, 1)\n\t\t\t\t\tvec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);\n\n\t\t\t\t\t// Transform H back to world space\n\t\t\t\t\tvec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);\n\t\t\t\t\tvec3 L = normalize(2.0 * dot(V, H) * H - V);\n\n\t\t\t\t\tfloat NdotL = max(dot(N, L), 0.0);\n\n\t\t\t\t\tif(NdotL > 0.0) {\n\t\t\t\t\t\t// Sample environment at fixed mip level\n\t\t\t\t\t\t// VNDF importance sampling handles the distribution filtering\n\t\t\t\t\t\tvec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);\n\n\t\t\t\t\t\t// Weight by NdotL for the split-sum approximation\n\t\t\t\t\t\t// VNDF PDF naturally accounts for the visible microfacet distribution\n\t\t\t\t\t\tprefilteredColor += sampleColor * NdotL;\n\t\t\t\t\t\ttotalWeight += NdotL;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tif (totalWeight > 0.0) {\n\t\t\t\t\tprefilteredColor = prefilteredColor / totalWeight;\n\t\t\t\t}\n\n\t\t\t\tgl_FragColor = vec4(prefilteredColor, 1.0);\n\t\t\t}\n\t\t",
          blending: i.XIg,
          depthTest: false,
          depthWrite: false
        });
        return r;
      }(r, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new i.eaF(new i.LoY(), e);
    this._renderer.compile(t, y);
  }
  _sceneToCubeUV(e, t, n, r, a) {
    const s = new i.ubm(90, 1, t, n);
    const o = [1, -1, 1, 1, 1, 1];
    const l = [1, 1, 1, -1, -1, -1];
    const c = this._renderer;
    const h = c.autoClear;
    const d = c.toneMapping;
    c.getClearColor(w);
    c.toneMapping = i.y_p;
    c.autoClear = false;
    if (c.state.buffers.depth.getReversed()) {
      c.setRenderTarget(r);
      c.clearDepth();
      c.setRenderTarget(null);
    }
    if (this._backgroundBox === null) {
      this._backgroundBox = new i.eaF(new i.iNn(), new i.V9B({
        name: "PMREM.Background",
        side: i.hsX,
        depthWrite: false,
        depthTest: false
      }));
    }
    const u = this._backgroundBox;
    const f = u.material;
    let p = false;
    const g = e.background;
    if (g) {
      if (g.isColor) {
        f.color.copy(g);
        e.background = null;
        p = true;
      }
    } else {
      f.color.copy(w);
      p = true;
    }
    for (let t = 0; t < 6; t++) {
      const n = t % 3;
      if (n === 0) {
        s.up.set(0, o[t], 0);
        s.position.set(a.x, a.y, a.z);
        s.lookAt(a.x + l[t], a.y, a.z);
      } else if (n === 1) {
        s.up.set(0, 0, o[t]);
        s.position.set(a.x, a.y, a.z);
        s.lookAt(a.x, a.y + l[t], a.z);
      } else {
        s.up.set(0, o[t], 0);
        s.position.set(a.x, a.y, a.z);
        s.lookAt(a.x, a.y, a.z + l[t]);
      }
      const i = this._cubeSize;
      C(r, n * i, t > 2 ? i : 0, i, i);
      c.setRenderTarget(r);
      if (p) {
        c.render(u, s);
      }
      c.render(e, s);
    }
    c.toneMapping = d;
    c.autoClear = h;
    e.background = g;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer;
    const r = e.mapping === i.hy7 || e.mapping === i.xFO;
    if (r) {
      if (this._cubemapMaterial === null) {
        this._cubemapMaterial = P();
      }
      this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1;
    } else if (this._equirectMaterial === null) {
      this._equirectMaterial = R();
    }
    const a = r ? this._cubemapMaterial : this._equirectMaterial;
    const s = this._lodMeshes[0];
    s.material = a;
    a.uniforms.envMap.value = e;
    const o = this._cubeSize;
    C(t, 0, 0, o * 3, o * 2);
    n.setRenderTarget(t);
    n.render(s, y);
  }
  _applyPMREM(e) {
    const t = this._renderer;
    const n = t.autoClear;
    t.autoClear = false;
    const i = this._lodMeshes.length;
    for (let t = 1; t < i; t++) {
      this._applyGGXFilter(e, t - 1, t);
    }
    t.autoClear = n;
  }
  _applyGGXFilter(e, t, n) {
    const i = this._renderer;
    const r = this._pingPongRenderTarget;
    const a = this._ggxMaterial;
    const s = this._lodMeshes[n];
    s.material = a;
    const o = a.uniforms;
    const l = n / (this._lodMeshes.length - 1);
    const c = t / (this._lodMeshes.length - 1);
    const h = Math.sqrt(l * l - c * c) * (0.05 + l * 0.95);
    const {
      _lodMax: d
    } = this;
    const u = this._sizeLods[n];
    const f = u * 3 * (n > d - 4 ? n - d + 4 : 0);
    const p = (this._cubeSize - u) * 4;
    o.envMap.value = e.texture;
    o.roughness.value = h;
    o.mipInt.value = d - t;
    C(r, f, p, u * 3, u * 2);
    i.setRenderTarget(r);
    i.render(s, y);
    o.envMap.value = r.texture;
    o.roughness.value = 0;
    o.mipInt.value = d - n;
    C(e, f, p, u * 3, u * 2);
    i.setRenderTarget(e);
    i.render(s, y);
  }
  _blur(e, t, n, i, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, i, "latitudinal", r);
    this._halfBlur(a, e, n, n, i, "longitudinal", r);
  }
  _halfBlur(e, t, n, r, a, s, o) {
    const l = this._renderer;
    const c = this._blurMaterial;
    if (s !== "latitudinal" && s !== "longitudinal") {
      (0, i.z3S)("blur direction must be either latitudinal or longitudinal!");
    }
    const h = this._lodMeshes[r];
    h.material = c;
    const d = c.uniforms;
    const u = this._sizeLods[n] - 1;
    const f = isFinite(a) ? Math.PI / (u * 2) : Math.PI * 2 / 39;
    const p = a / f;
    const g = isFinite(a) ? 1 + Math.floor(p * 3) : b;
    if (g > b) {
      (0, i.R8M)(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);
    }
    const m = [];
    let A = 0;
    for (let e = 0; e < b; ++e) {
      const t = e / p;
      const n = Math.exp(-t * t / 2);
      m.push(n);
      if (e === 0) {
        A += n;
      } else if (e < g) {
        A += n * 2;
      }
    }
    for (let e = 0; e < m.length; e++) {
      m[e] = m[e] / A;
    }
    d.envMap.value = e.texture;
    d.samples.value = g;
    d.weights.value = m;
    d.latitudinal.value = s === "latitudinal";
    if (o) {
      d.poleAxis.value = o;
    }
    const {
      _lodMax: v
    } = this;
    d.dTheta.value = f;
    d.mipInt.value = v - n;
    const w = this._sizeLods[r];
    C(t, w * 3 * (r > v - 4 ? r - v + 4 : 0), (this._cubeSize - w) * 4, w * 3, w * 2);
    l.setRenderTarget(t);
    l.render(h, y);
  }
}
function _(e, t, n) {
  const r = new i.nWS(e, t, n);
  r.texture.mapping = i.Om;
  r.texture.name = "PMREM.cubeUv";
  r.scissorTest = true;
  return r;
}
function C(e, t, n, i, r) {
  e.viewport.set(t, n, i, r);
  e.scissor.set(t, n, i, r);
}
function R() {
  return new i.BKk({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: {
        value: null
      }
    },
    vertexShader: I(),
    fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",
    blending: i.XIg,
    depthTest: false,
    depthWrite: false
  });
}
function P() {
  return new i.BKk({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: {
        value: null
      },
      flipEnvMap: {
        value: -1
      }
    },
    vertexShader: I(),
    fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",
    blending: i.XIg,
    depthTest: false,
    depthWrite: false
  });
}
function I() {
  return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t";
}
function L(e) {
  let t = new WeakMap();
  let n = null;
  function r(e) {
    const n = e.target;
    n.removeEventListener("dispose", r);
    const i = t.get(n);
    if (i !== undefined) {
      t.delete(n);
      i.dispose();
    }
  }
  return {
    get: function (a) {
      if (a && a.isTexture) {
        const s = a.mapping;
        const o = s === i.wfO || s === i.uV5;
        const l = s === i.hy7 || s === i.xFO;
        if (o || l) {
          let i = t.get(a);
          const s = i !== undefined ? i.texture.pmremVersion : 0;
          if (a.isRenderTargetTexture && a.pmremVersion !== s) {
            if (n === null) {
              n = new M(e);
            }
            i = o ? n.fromEquirectangular(a, i) : n.fromCubemap(a, i);
            i.texture.pmremVersion = a.pmremVersion;
            t.set(a, i);
            return i.texture;
          }
          if (i !== undefined) {
            return i.texture;
          }
          {
            const s = a.image;
            if (o && s && s.height > 0 || l && s && function (e) {
              let t = 0;
              const n = 6;
              for (let i = 0; i < n; i++) {
                if (e[i] !== undefined) {
                  t++;
                }
              }
              return t === n;
            }(s)) {
              if (n === null) {
                n = new M(e);
              }
              i = o ? n.fromEquirectangular(a) : n.fromCubemap(a);
              i.texture.pmremVersion = a.pmremVersion;
              t.set(a, i);
              a.addEventListener("dispose", r);
              return i.texture;
            } else {
              return null;
            }
          }
        }
      }
      return a;
    },
    dispose: function () {
      t = new WeakMap();
      if (n !== null) {
        n.dispose();
        n = null;
      }
    }
  };
}
function U(e) {
  const t = {};
  function n(n) {
    if (t[n] !== undefined) {
      return t[n];
    }
    const i = e.getExtension(n);
    t[n] = i;
    return i;
  }
  return {
    has: function (e) {
      return n(e) !== null;
    },
    init: function () {
      n("EXT_color_buffer_float");
      n("WEBGL_clip_cull_distance");
      n("OES_texture_float_linear");
      n("EXT_color_buffer_half_float");
      n("WEBGL_multisampled_render_to_texture");
      n("WEBGL_render_shared_exponent");
    },
    get: function (e) {
      const t = n(e);
      if (t === null) {
        (0, i.mcG)("WebGLRenderer: " + e + " extension not supported.");
      }
      return t;
    }
  };
}
function N(e, t, n, r) {
  const a = {};
  const s = new WeakMap();
  function o(e) {
    const i = e.target;
    if (i.index !== null) {
      t.remove(i.index);
    }
    for (const e in i.attributes) {
      t.remove(i.attributes[e]);
    }
    i.removeEventListener("dispose", o);
    delete a[i.id];
    const l = s.get(i);
    if (l) {
      t.remove(l);
      s.delete(i);
    }
    r.releaseStatesOfGeometry(i);
    if (i.isInstancedBufferGeometry === true) {
      delete i._maxInstanceCount;
    }
    n.memory.geometries--;
  }
  function l(e) {
    const n = [];
    const r = e.index;
    const a = e.attributes.position;
    let o = 0;
    if (r !== null) {
      const e = r.array;
      o = r.version;
      for (let t = 0, i = e.length; t < i; t += 3) {
        const i = e[t + 0];
        const r = e[t + 1];
        const a = e[t + 2];
        n.push(i, r, r, a, a, i);
      }
    } else {
      if (a === undefined) {
        return;
      }
      {
        const e = a.array;
        o = a.version;
        for (let t = 0, i = e.length / 3 - 1; t < i; t += 3) {
          const e = t + 0;
          const i = t + 1;
          const r = t + 2;
          n.push(e, i, i, r, r, e);
        }
      }
    }
    const l = new ((0, i.AQS)(n) ? i.MW4 : i.A$4)(n, 1);
    l.version = o;
    const c = s.get(e);
    if (c) {
      t.remove(c);
    }
    s.set(e, l);
  }
  return {
    get: function (e, t) {
      if (a[t.id] !== true) {
        t.addEventListener("dispose", o);
        a[t.id] = true;
        n.memory.geometries++;
      }
      return t;
    },
    update: function (n) {
      const i = n.attributes;
      for (const n in i) {
        t.update(i[n], e.ARRAY_BUFFER);
      }
    },
    getWireframeAttribute: function (e) {
      const t = s.get(e);
      if (t) {
        const n = e.index;
        if (n !== null && t.version < n.version) {
          l(e);
        }
      } else {
        l(e);
      }
      return s.get(e);
    }
  };
}
function z(e, t, n) {
  let i;
  let r;
  let a;
  function s(t, s, o) {
    if (o !== 0) {
      e.drawElementsInstanced(i, s, r, t * a, o);
      n.update(s, i, o);
    }
  }
  this.setMode = function (e) {
    i = e;
  };
  this.setIndex = function (e) {
    r = e.type;
    a = e.bytesPerElement;
  };
  this.render = function (t, s) {
    e.drawElements(i, s, r, t * a);
    n.update(s, i, 1);
  };
  this.renderInstances = s;
  this.renderMultiDraw = function (e, a, s) {
    if (s === 0) {
      return;
    }
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, a, 0, r, e, 0, s);
    let o = 0;
    for (let e = 0; e < s; e++) {
      o += a[e];
    }
    n.update(o, i, 1);
  };
  this.renderMultiDrawInstances = function (e, o, l, c) {
    if (l === 0) {
      return;
    }
    const h = t.get("WEBGL_multi_draw");
    if (h === null) {
      for (let t = 0; t < e.length; t++) {
        s(e[t] / a, o[t], c[t]);
      }
    } else {
      h.multiDrawElementsInstancedWEBGL(i, o, 0, r, e, 0, c, 0, l);
      let t = 0;
      for (let e = 0; e < l; e++) {
        t += o[e] * c[e];
      }
      n.update(t, i, 1);
    }
  };
}
function D(e) {
  const t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  return {
    memory: {
      geometries: 0,
      textures: 0
    },
    render: t,
    programs: null,
    autoReset: true,
    reset: function () {
      t.calls = 0;
      t.triangles = 0;
      t.points = 0;
      t.lines = 0;
    },
    update: function (n, r, a) {
      t.calls++;
      switch (r) {
        case e.TRIANGLES:
          t.triangles += a * (n / 3);
          break;
        case e.LINES:
          t.lines += a * (n / 2);
          break;
        case e.LINE_STRIP:
          t.lines += a * (n - 1);
          break;
        case e.LINE_LOOP:
          t.lines += a * n;
          break;
        case e.POINTS:
          t.points += a * n;
          break;
        default:
          (0, i.z3S)("WebGLInfo: Unknown draw mode:", r);
      }
    }
  };
}
function B(e, t, n) {
  const r = new WeakMap();
  const a = new i.IUQ();
  return {
    update: function (s, o, l) {
      const c = s.morphTargetInfluences;
      const h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color;
      const d = h !== undefined ? h.length : 0;
      let u = r.get(o);
      if (u === undefined || u.count !== d) {
        if (u !== undefined) {
          u.texture.dispose();
        }
        const f = o.morphAttributes.position !== undefined;
        const p = o.morphAttributes.normal !== undefined;
        const g = o.morphAttributes.color !== undefined;
        const m = o.morphAttributes.position || [];
        const A = o.morphAttributes.normal || [];
        const v = o.morphAttributes.color || [];
        let b = 0;
        if (f === true) {
          b = 1;
        }
        if (p === true) {
          b = 2;
        }
        if (g === true) {
          b = 3;
        }
        let y = o.attributes.position.count * b;
        let w = 1;
        if (y > t.maxTextureSize) {
          w = Math.ceil(y / t.maxTextureSize);
          y = t.maxTextureSize;
        }
        const x = new Float32Array(y * w * 4 * d);
        const S = new i.rFo(x, y, w, d);
        S.type = i.RQf;
        S.needsUpdate = true;
        const k = b * 4;
        for (let E = 0; E < d; E++) {
          const M = m[E];
          const _ = A[E];
          const C = v[E];
          const R = y * w * 4 * E;
          for (let P = 0; P < M.count; P++) {
            const I = P * k;
            if (f === true) {
              a.fromBufferAttribute(M, P);
              x[R + I + 0] = a.x;
              x[R + I + 1] = a.y;
              x[R + I + 2] = a.z;
              x[R + I + 3] = 0;
            }
            if (p === true) {
              a.fromBufferAttribute(_, P);
              x[R + I + 4] = a.x;
              x[R + I + 5] = a.y;
              x[R + I + 6] = a.z;
              x[R + I + 7] = 0;
            }
            if (g === true) {
              a.fromBufferAttribute(C, P);
              x[R + I + 8] = a.x;
              x[R + I + 9] = a.y;
              x[R + I + 10] = a.z;
              x[R + I + 11] = C.itemSize === 4 ? a.w : 1;
            }
          }
        }
        function T() {
          S.dispose();
          r.delete(o);
          o.removeEventListener("dispose", T);
        }
        u = {
          count: d,
          texture: S,
          size: new i.I9Y(y, w)
        };
        r.set(o, u);
        o.addEventListener("dispose", T);
      }
      if (s.isInstancedMesh === true && s.morphTexture !== null) {
        l.getUniforms().setValue(e, "morphTexture", s.morphTexture, n);
      } else {
        let L = 0;
        for (let N = 0; N < c.length; N++) {
          L += c[N];
        }
        const U = o.morphTargetsRelative ? 1 : 1 - L;
        l.getUniforms().setValue(e, "morphTargetBaseInfluence", U);
        l.getUniforms().setValue(e, "morphTargetInfluences", c);
      }
      l.getUniforms().setValue(e, "morphTargetsTexture", u.texture, n);
      l.getUniforms().setValue(e, "morphTargetsTextureSize", u.size);
    }
  };
}
function G(e, t, n, i) {
  let r = new WeakMap();
  function a(e) {
    const t = e.target;
    t.removeEventListener("dispose", a);
    n.remove(t.instanceMatrix);
    if (t.instanceColor !== null) {
      n.remove(t.instanceColor);
    }
  }
  return {
    update: function (s) {
      const o = i.render.frame;
      const l = s.geometry;
      const c = t.get(s, l);
      if (r.get(c) !== o) {
        t.update(c);
        r.set(c, o);
      }
      if (s.isInstancedMesh) {
        if (s.hasEventListener("dispose", a) === false) {
          s.addEventListener("dispose", a);
        }
        if (r.get(s) !== o) {
          n.update(s.instanceMatrix, e.ARRAY_BUFFER);
          if (s.instanceColor !== null) {
            n.update(s.instanceColor, e.ARRAY_BUFFER);
          }
          r.set(s, o);
        }
      }
      if (s.isSkinnedMesh) {
        const e = s.skeleton;
        if (r.get(e) !== o) {
          e.update();
          r.set(e, o);
        }
      }
      return c;
    },
    dispose: function () {
      r = new WeakMap();
    }
  };
}
const F = new i.gPd();
const O = new i.VCu(1, 1);
const W = new i.rFo();
const V = new i.dYF();
const H = new i.b4q();
const j = [];
const K = [];
const q = new Float32Array(16);
const Q = new Float32Array(9);
const J = new Float32Array(4);
function X(e, t, n) {
  const i = e[0];
  if (i <= 0 || i > 0) {
    return e;
  }
  const r = t * n;
  let a = j[r];
  if (a === undefined) {
    a = new Float32Array(r);
    j[r] = a;
  }
  if (t !== 0) {
    i.toArray(a, 0);
    for (let i = 1, r = 0; i !== t; ++i) {
      r += n;
      e[i].toArray(a, r);
    }
  }
  return a;
}
function Y(e, t) {
  if (e.length !== t.length) {
    return false;
  }
  for (let n = 0, i = e.length; n < i; n++) {
    if (e[n] !== t[n]) {
      return false;
    }
  }
  return true;
}
function Z(e, t) {
  for (let n = 0, i = t.length; n < i; n++) {
    e[n] = t[n];
  }
}
function $(e, t) {
  let n = K[t];
  if (n === undefined) {
    n = new Int32Array(t);
    K[t] = n;
  }
  for (let i = 0; i !== t; ++i) {
    n[i] = e.allocateTextureUnit();
  }
  return n;
}
function ee(e, t) {
  const n = this.cache;
  if (n[0] !== t) {
    e.uniform1f(this.addr, t);
    n[0] = t;
  }
}
function te(e, t) {
  const n = this.cache;
  if (t.x !== undefined) {
    if (n[0] !== t.x || n[1] !== t.y) {
      e.uniform2f(this.addr, t.x, t.y);
      n[0] = t.x;
      n[1] = t.y;
    }
  } else {
    if (Y(n, t)) {
      return;
    }
    e.uniform2fv(this.addr, t);
    Z(n, t);
  }
}
function ne(e, t) {
  const n = this.cache;
  if (t.x !== undefined) {
    if (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) {
      e.uniform3f(this.addr, t.x, t.y, t.z);
      n[0] = t.x;
      n[1] = t.y;
      n[2] = t.z;
    }
  } else if (t.r !== undefined) {
    if (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) {
      e.uniform3f(this.addr, t.r, t.g, t.b);
      n[0] = t.r;
      n[1] = t.g;
      n[2] = t.b;
    }
  } else {
    if (Y(n, t)) {
      return;
    }
    e.uniform3fv(this.addr, t);
    Z(n, t);
  }
}
function ie(e, t) {
  const n = this.cache;
  if (t.x !== undefined) {
    if (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) {
      e.uniform4f(this.addr, t.x, t.y, t.z, t.w);
      n[0] = t.x;
      n[1] = t.y;
      n[2] = t.z;
      n[3] = t.w;
    }
  } else {
    if (Y(n, t)) {
      return;
    }
    e.uniform4fv(this.addr, t);
    Z(n, t);
  }
}
function re(e, t) {
  const n = this.cache;
  const i = t.elements;
  if (i === undefined) {
    if (Y(n, t)) {
      return;
    }
    e.uniformMatrix2fv(this.addr, false, t);
    Z(n, t);
  } else {
    if (Y(n, i)) {
      return;
    }
    J.set(i);
    e.uniformMatrix2fv(this.addr, false, J);
    Z(n, i);
  }
}
function ae(e, t) {
  const n = this.cache;
  const i = t.elements;
  if (i === undefined) {
    if (Y(n, t)) {
      return;
    }
    e.uniformMatrix3fv(this.addr, false, t);
    Z(n, t);
  } else {
    if (Y(n, i)) {
      return;
    }
    Q.set(i);
    e.uniformMatrix3fv(this.addr, false, Q);
    Z(n, i);
  }
}
function se(e, t) {
  const n = this.cache;
  const i = t.elements;
  if (i === undefined) {
    if (Y(n, t)) {
      return;
    }
    e.uniformMatrix4fv(this.addr, false, t);
    Z(n, t);
  } else {
    if (Y(n, i)) {
      return;
    }
    q.set(i);
    e.uniformMatrix4fv(this.addr, false, q);
    Z(n, i);
  }
}
function oe(e, t) {
  const n = this.cache;
  if (n[0] !== t) {
    e.uniform1i(this.addr, t);
    n[0] = t;
  }
}
function le(e, t) {
  const n = this.cache;
  if (t.x !== undefined) {
    if (n[0] !== t.x || n[1] !== t.y) {
      e.uniform2i(this.addr, t.x, t.y);
      n[0] = t.x;
      n[1] = t.y;
    }
  } else {
    if (Y(n, t)) {
      return;
    }
    e.uniform2iv(this.addr, t);
    Z(n, t);
  }
}
function ce(e, t) {
  const n = this.cache;
  if (t.x !== undefined) {
    if (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) {
      e.uniform3i(this.addr, t.x, t.y, t.z);
      n[0] = t.x;
      n[1] = t.y;
      n[2] = t.z;
    }
  } else {
    if (Y(n, t)) {
      return;
    }
    e.uniform3iv(this.addr, t);
    Z(n, t);
  }
}
function he(e, t) {
  const n = this.cache;
  if (t.x !== undefined) {
    if (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) {
      e.uniform4i(this.addr, t.x, t.y, t.z, t.w);
      n[0] = t.x;
      n[1] = t.y;
      n[2] = t.z;
      n[3] = t.w;
    }
  } else {
    if (Y(n, t)) {
      return;
    }
    e.uniform4iv(this.addr, t);
    Z(n, t);
  }
}
function de(e, t) {
  const n = this.cache;
  if (n[0] !== t) {
    e.uniform1ui(this.addr, t);
    n[0] = t;
  }
}
function ue(e, t) {
  const n = this.cache;
  if (t.x !== undefined) {
    if (n[0] !== t.x || n[1] !== t.y) {
      e.uniform2ui(this.addr, t.x, t.y);
      n[0] = t.x;
      n[1] = t.y;
    }
  } else {
    if (Y(n, t)) {
      return;
    }
    e.uniform2uiv(this.addr, t);
    Z(n, t);
  }
}
function fe(e, t) {
  const n = this.cache;
  if (t.x !== undefined) {
    if (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) {
      e.uniform3ui(this.addr, t.x, t.y, t.z);
      n[0] = t.x;
      n[1] = t.y;
      n[2] = t.z;
    }
  } else {
    if (Y(n, t)) {
      return;
    }
    e.uniform3uiv(this.addr, t);
    Z(n, t);
  }
}
function pe(e, t) {
  const n = this.cache;
  if (t.x !== undefined) {
    if (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) {
      e.uniform4ui(this.addr, t.x, t.y, t.z, t.w);
      n[0] = t.x;
      n[1] = t.y;
      n[2] = t.z;
      n[3] = t.w;
    }
  } else {
    if (Y(n, t)) {
      return;
    }
    e.uniform4uiv(this.addr, t);
    Z(n, t);
  }
}
function ge(e, t, n) {
  const r = this.cache;
  const a = n.allocateTextureUnit();
  let s;
  if (r[0] !== a) {
    e.uniform1i(this.addr, a);
    r[0] = a;
  }
  if (this.type === e.SAMPLER_2D_SHADOW) {
    O.compareFunction = i.TiK;
    s = O;
  } else {
    s = F;
  }
  n.setTexture2D(t || s, a);
}
function me(e, t, n) {
  const i = this.cache;
  const r = n.allocateTextureUnit();
  if (i[0] !== r) {
    e.uniform1i(this.addr, r);
    i[0] = r;
  }
  n.setTexture3D(t || V, r);
}
function Ae(e, t, n) {
  const i = this.cache;
  const r = n.allocateTextureUnit();
  if (i[0] !== r) {
    e.uniform1i(this.addr, r);
    i[0] = r;
  }
  n.setTextureCube(t || H, r);
}
function ve(e, t, n) {
  const i = this.cache;
  const r = n.allocateTextureUnit();
  if (i[0] !== r) {
    e.uniform1i(this.addr, r);
    i[0] = r;
  }
  n.setTexture2DArray(t || W, r);
}
function be(e, t) {
  e.uniform1fv(this.addr, t);
}
function ye(e, t) {
  const n = X(t, this.size, 2);
  e.uniform2fv(this.addr, n);
}
function we(e, t) {
  const n = X(t, this.size, 3);
  e.uniform3fv(this.addr, n);
}
function xe(e, t) {
  const n = X(t, this.size, 4);
  e.uniform4fv(this.addr, n);
}
function Se(e, t) {
  const n = X(t, this.size, 4);
  e.uniformMatrix2fv(this.addr, false, n);
}
function ke(e, t) {
  const n = X(t, this.size, 9);
  e.uniformMatrix3fv(this.addr, false, n);
}
function Te(e, t) {
  const n = X(t, this.size, 16);
  e.uniformMatrix4fv(this.addr, false, n);
}
function Ee(e, t) {
  e.uniform1iv(this.addr, t);
}
function Me(e, t) {
  e.uniform2iv(this.addr, t);
}
function _e(e, t) {
  e.uniform3iv(this.addr, t);
}
function Ce(e, t) {
  e.uniform4iv(this.addr, t);
}
function Re(e, t) {
  e.uniform1uiv(this.addr, t);
}
function Pe(e, t) {
  e.uniform2uiv(this.addr, t);
}
function Ie(e, t) {
  e.uniform3uiv(this.addr, t);
}
function Le(e, t) {
  e.uniform4uiv(this.addr, t);
}
function Ue(e, t, n) {
  const i = this.cache;
  const r = t.length;
  const a = $(n, r);
  if (!Y(i, a)) {
    e.uniform1iv(this.addr, a);
    Z(i, a);
  }
  for (let e = 0; e !== r; ++e) {
    n.setTexture2D(t[e] || F, a[e]);
  }
}
function Ne(e, t, n) {
  const i = this.cache;
  const r = t.length;
  const a = $(n, r);
  if (!Y(i, a)) {
    e.uniform1iv(this.addr, a);
    Z(i, a);
  }
  for (let e = 0; e !== r; ++e) {
    n.setTexture3D(t[e] || V, a[e]);
  }
}
function ze(e, t, n) {
  const i = this.cache;
  const r = t.length;
  const a = $(n, r);
  if (!Y(i, a)) {
    e.uniform1iv(this.addr, a);
    Z(i, a);
  }
  for (let e = 0; e !== r; ++e) {
    n.setTextureCube(t[e] || H, a[e]);
  }
}
function De(e, t, n) {
  const i = this.cache;
  const r = t.length;
  const a = $(n, r);
  if (!Y(i, a)) {
    e.uniform1iv(this.addr, a);
    Z(i, a);
  }
  for (let e = 0; e !== r; ++e) {
    n.setTexture2DArray(t[e] || W, a[e]);
  }
}
class Be {
  constructor(e, t, n) {
    this.id = e;
    this.addr = n;
    this.cache = [];
    this.type = t.type;
    this.setValue = function (e) {
      switch (e) {
        case 5126:
          return ee;
        case 35664:
          return te;
        case 35665:
          return ne;
        case 35666:
          return ie;
        case 35674:
          return re;
        case 35675:
          return ae;
        case 35676:
          return se;
        case 5124:
        case 35670:
          return oe;
        case 35667:
        case 35671:
          return le;
        case 35668:
        case 35672:
          return ce;
        case 35669:
        case 35673:
          return he;
        case 5125:
          return de;
        case 36294:
          return ue;
        case 36295:
          return fe;
        case 36296:
          return pe;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
          return ge;
        case 35679:
        case 36299:
        case 36307:
          return me;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
          return Ae;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
          return ve;
      }
    }(t.type);
  }
}
class Ge {
  constructor(e, t, n) {
    this.id = e;
    this.addr = n;
    this.cache = [];
    this.type = t.type;
    this.size = t.size;
    this.setValue = function (e) {
      switch (e) {
        case 5126:
          return be;
        case 35664:
          return ye;
        case 35665:
          return we;
        case 35666:
          return xe;
        case 35674:
          return Se;
        case 35675:
          return ke;
        case 35676:
          return Te;
        case 5124:
        case 35670:
          return Ee;
        case 35667:
        case 35671:
          return Me;
        case 35668:
        case 35672:
          return _e;
        case 35669:
        case 35673:
          return Ce;
        case 5125:
          return Re;
        case 36294:
          return Pe;
        case 36295:
          return Ie;
        case 36296:
          return Le;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
          return Ue;
        case 35679:
        case 36299:
        case 36307:
          return Ne;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
          return ze;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
          return De;
      }
    }(t.type);
  }
}
class Fe {
  constructor(e) {
    this.id = e;
    this.seq = [];
    this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, a = i.length; r !== a; ++r) {
      const a = i[r];
      a.setValue(e, t[a.id], n);
    }
  }
}
const Oe = /(\w+)(\])?(\[|\.)?/g;
function We(e, t) {
  e.seq.push(t);
  e.map[t.id] = t;
}
function Ve(e, t, n) {
  const i = e.name;
  const r = i.length;
  for (Oe.lastIndex = 0;;) {
    const a = Oe.exec(i);
    const s = Oe.lastIndex;
    let o = a[1];
    const l = a[2] === "]";
    const c = a[3];
    if (l) {
      o |= 0;
    }
    if (c === undefined || c === "[" && s + 2 === r) {
      We(n, c === undefined ? new Be(o, e, t) : new Ge(o, e, t));
      break;
    }
    {
      let e = n.map[o];
      if (e === undefined) {
        e = new Fe(o);
        We(n, e);
      }
      n = e;
    }
  }
}
class He {
  constructor(e, t) {
    this.seq = [];
    this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const n = e.getActiveUniform(t, i);
      Ve(n, e.getUniformLocation(t, n.name), this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    if (r !== undefined) {
      r.setValue(e, n, i);
    }
  }
  setOptional(e, t, n) {
    const i = t[n];
    if (i !== undefined) {
      this.setValue(e, n, i);
    }
  }
  static upload(e, t, n, i) {
    for (let r = 0, a = t.length; r !== a; ++r) {
      const a = t[r];
      const s = n[a.id];
      if (s.needsUpdate !== false) {
        a.setValue(e, s.value, i);
      }
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const r = e[i];
      if (r.id in t) {
        n.push(r);
      }
    }
    return n;
  }
}
function je(e, t, n) {
  const i = e.createShader(t);
  e.shaderSource(i, n);
  e.compileShader(i);
  return i;
}
let Ke = 0;
const qe = new i.dwI();
function Qe(e, t, n) {
  const i = e.getShaderParameter(t, e.COMPILE_STATUS);
  const r = (e.getShaderInfoLog(t) || "").trim();
  if (i && r === "") {
    return "";
  }
  const a = /ERROR: 0:(\d+)/.exec(r);
  if (a) {
    const i = parseInt(a[1]);
    return n.toUpperCase() + "\n\n" + r + "\n\n" + function (e, t) {
      const n = e.split("\n");
      const i = [];
      const r = Math.max(t - 6, 0);
      const a = Math.min(t + 6, n.length);
      for (let e = r; e < a; e++) {
        const r = e + 1;
        i.push(`${r === t ? ">" : " "} ${r}: ${n[e]}`);
      }
      return i.join("\n");
    }(e.getShaderSource(t), i);
  }
  return r;
}
function Je(e, t) {
  const n = function (e) {
    i.ppV._getMatrix(qe, i.ppV.workingColorSpace, e);
    const t = `mat3( ${qe.elements.map(e => e.toFixed(4))} )`;
    switch (i.ppV.getTransfer(e)) {
      case i.VxR:
        return [t, "LinearTransferOETF"];
      case i.KLL:
        return [t, "sRGBTransferOETF"];
      default:
        (0, i.R8M)("WebGLProgram: Unsupported color space: ", e);
        return [t, "LinearTransferOETF"];
    }
  }(t);
  return [`vec4 ${e}( vec4 value ) {`, `\treturn ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`, "}"].join("\n");
}
function Xe(e, t) {
  let n;
  switch (t) {
    case i.kyO:
      n = "Linear";
      break;
    case i.Mjd:
      n = "Reinhard";
      break;
    case i.nNL:
      n = "Cineon";
      break;
    case i.FV:
      n = "ACESFilmic";
      break;
    case i.LAk:
      n = "AgX";
      break;
    case i.aJ8:
      n = "Neutral";
      break;
    case i.g7M:
      n = "Custom";
      break;
    default:
      (0, i.R8M)("WebGLProgram: Unsupported toneMapping:", t);
      n = "Linear";
  }
  return "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
}
const Ye = new i.Pq0();
function Ze() {
  i.ppV.getLuminanceCoefficients(Ye);
  return ["float luminance( const in vec3 rgb ) {", `\tconst vec3 weights = vec3( ${Ye.x.toFixed(4)}, ${Ye.y.toFixed(4)}, ${Ye.z.toFixed(4)} );`, "\treturn dot( weights, rgb );", "}"].join("\n");
}
function $e(e) {
  return e !== "";
}
function et(e, t) {
  const n = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function tt(e, t) {
  return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const nt = /^[ \t]*#include +<([\w\d./]+)>/gm;
function it(e) {
  return e.replace(nt, at);
}
const rt = new Map();
function at(e, t) {
  let n = vxI[t];
  if (n === undefined) {
    const e = rt.get(t);
    if (e === undefined) {
      throw new Error("Can not resolve #include <" + t + ">");
    }
    n = vxI[e];
    (0, i.R8M)("WebGLRenderer: Shader chunk \"%s\" has been deprecated. Use \"%s\" instead.", t, e);
  }
  return it(n);
}
const st = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function ot(e) {
  return e.replace(st, lt);
}
function lt(e, t, n, i) {
  let r = "";
  for (let e = parseInt(t); e < parseInt(n); e++) {
    r += i.replace(/\[\s*i\s*\]/g, "[ " + e + " ]").replace(/UNROLLED_LOOP_INDEX/g, e);
  }
  return r;
}
function ct(e) {
  let t = `precision ${e.precision} float;\n\tprecision ${e.precision} int;\n\tprecision ${e.precision} sampler2D;\n\tprecision ${e.precision} samplerCube;\n\tprecision ${e.precision} sampler3D;\n\tprecision ${e.precision} sampler2DArray;\n\tprecision ${e.precision} sampler2DShadow;\n\tprecision ${e.precision} samplerCubeShadow;\n\tprecision ${e.precision} sampler2DArrayShadow;\n\tprecision ${e.precision} isampler2D;\n\tprecision ${e.precision} isampler3D;\n\tprecision ${e.precision} isamplerCube;\n\tprecision ${e.precision} isampler2DArray;\n\tprecision ${e.precision} usampler2D;\n\tprecision ${e.precision} usampler3D;\n\tprecision ${e.precision} usamplerCube;\n\tprecision ${e.precision} usampler2DArray;\n\t`;
  if (e.precision === "highp") {
    t += "\n#define HIGH_PRECISION";
  } else if (e.precision === "mediump") {
    t += "\n#define MEDIUM_PRECISION";
  } else if (e.precision === "lowp") {
    t += "\n#define LOW_PRECISION";
  }
  return t;
}
function ht(e, t, n, r) {
  const a = e.getContext();
  const o = n.defines;
  let l = n.vertexShader;
  let c = n.fragmentShader;
  const h = function (e) {
    let t = "SHADOWMAP_TYPE_BASIC";
    if (e.shadowMapType === i.QP0) {
      t = "SHADOWMAP_TYPE_PCF";
    } else if (e.shadowMapType === i.Wk7) {
      t = "SHADOWMAP_TYPE_PCF_SOFT";
    } else if (e.shadowMapType === i.RyA) {
      t = "SHADOWMAP_TYPE_VSM";
    }
    return t;
  }(n);
  const d = function (e) {
    let t = "ENVMAP_TYPE_CUBE";
    if (e.envMap) {
      switch (e.envMapMode) {
        case i.hy7:
        case i.xFO:
          t = "ENVMAP_TYPE_CUBE";
          break;
        case i.Om:
          t = "ENVMAP_TYPE_CUBE_UV";
      }
    }
    return t;
  }(n);
  const u = function (e) {
    let t = "ENVMAP_MODE_REFLECTION";
    if (e.envMap && e.envMapMode === i.xFO) {
      t = "ENVMAP_MODE_REFRACTION";
    }
    return t;
  }(n);
  const f = function (e) {
    let t = "ENVMAP_BLENDING_NONE";
    if (e.envMap) {
      switch (e.combine) {
        case i.caT:
          t = "ENVMAP_BLENDING_MULTIPLY";
          break;
        case i.KRh:
          t = "ENVMAP_BLENDING_MIX";
          break;
        case i.XrR:
          t = "ENVMAP_BLENDING_ADD";
      }
    }
    return t;
  }(n);
  const p = function (e) {
    const t = e.envMapCubeUVHeight;
    if (t === null) {
      return null;
    }
    const n = Math.log2(t) - 2;
    const i = 1 / t;
    return {
      texelWidth: 1 / (Math.max(Math.pow(2, n), 112) * 3),
      texelHeight: i,
      maxMip: n
    };
  }(n);
  const g = function (e) {
    return [e.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", e.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter($e).join("\n");
  }(n);
  const m = function (e) {
    const t = [];
    for (const n in e) {
      const i = e[n];
      if (i !== false) {
        t.push("#define " + n + " " + i);
      }
    }
    return t.join("\n");
  }(o);
  const A = a.createProgram();
  let v;
  let b;
  let y = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
  if (n.isRawShaderMaterial) {
    v = ["#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, m].filter($e).join("\n");
    if (v.length > 0) {
      v += "\n";
    }
    b = ["#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, m].filter($e).join("\n");
    if (b.length > 0) {
      b += "\n";
    }
  } else {
    v = [ct(n), "#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, m, n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", n.batching ? "#define USE_BATCHING" : "", n.batchingColor ? "#define USE_BATCHING_COLOR" : "", n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + u : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.anisotropy ? "#define USE_ANISOTROPY" : "", n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaHash ? "#define USE_ALPHAHASH" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n.mapUv ? "#define MAP_UV " + n.mapUv : "", n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "", n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "", n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "", n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "", n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "", n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "", n.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv : "", n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "", n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "", n.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv : "", n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "", n.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv : "", n.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv : "", n.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv : "", n.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv : "", n.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv : "", n.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv : "", n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "", n.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv : "", n.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv : "", n.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv : "", n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "", n.vertexTangents && n.flatShading === false ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUv1s ? "#define USE_UV1" : "", n.vertexUv2s ? "#define USE_UV2" : "", n.vertexUv3s ? "#define USE_UV3" : "", n.pointsUvs ? "#define USE_POINTS_UV" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && n.flatShading === false ? "#define USE_MORPHNORMALS" : "", n.morphColors ? "#define USE_MORPHCOLORS" : "", n.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "", n.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + h : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "\tuniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "\tattribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "\tattribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "\tattribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter($e).join("\n");
    b = [ct(n), "#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, m, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + d : "", n.envMap ? "#define " + u : "", n.envMap ? "#define " + f : "", p ? "#define CUBEUV_TEXEL_WIDTH " + p.texelWidth : "", p ? "#define CUBEUV_TEXEL_HEIGHT " + p.texelHeight : "", p ? "#define CUBEUV_MAX_MIP " + p.maxMip + ".0" : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.anisotropy ? "#define USE_ANISOTROPY" : "", n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n.clearcoat ? "#define USE_CLEARCOAT" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.dispersion ? "#define USE_DISPERSION" : "", n.iridescence ? "#define USE_IRIDESCENCE" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaTest ? "#define USE_ALPHATEST" : "", n.alphaHash ? "#define USE_ALPHAHASH" : "", n.sheen ? "#define USE_SHEEN" : "", n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.vertexTangents && n.flatShading === false ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor || n.batchingColor ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUv1s ? "#define USE_UV1" : "", n.vertexUv2s ? "#define USE_UV2" : "", n.vertexUv3s ? "#define USE_UV3" : "", n.pointsUvs ? "#define USE_POINTS_UV" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + h : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", n.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", n.toneMapping !== i.y_p ? "#define TONE_MAPPING" : "", n.toneMapping !== i.y_p ? vxI.tonemapping_pars_fragment : "", n.toneMapping !== i.y_p ? Xe("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", n.opaque ? "#define OPAQUE" : "", vxI.colorspace_pars_fragment, Je("linearToOutputTexel", n.outputColorSpace), Ze(), n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter($e).join("\n");
  }
  l = it(l);
  l = et(l, n);
  l = tt(l, n);
  c = it(c);
  c = et(c, n);
  c = tt(c, n);
  l = ot(l);
  c = ot(c);
  if (n.isRawShaderMaterial !== true) {
    y = "#version 300 es\n";
    v = [g, "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + v;
    b = ["#define varying in", n.glslVersion === i.Wdf ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", n.glslVersion === i.Wdf ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + b;
  }
  const w = y + v + l;
  const x = y + b + c;
  const S = je(a, a.VERTEX_SHADER, w);
  const k = je(a, a.FRAGMENT_SHADER, x);
  function T(t) {
    if (e.debug.checkShaderErrors) {
      const n = a.getProgramInfoLog(A) || "";
      const r = a.getShaderInfoLog(S) || "";
      const s = a.getShaderInfoLog(k) || "";
      const o = n.trim();
      const l = r.trim();
      const c = s.trim();
      let h = true;
      let d = true;
      if (a.getProgramParameter(A, a.LINK_STATUS) === false) {
        h = false;
        if (typeof e.debug.onShaderError == "function") {
          e.debug.onShaderError(a, A, S, k);
        } else {
          const e = Qe(a, S, "vertex");
          const n = Qe(a, k, "fragment");
          (0, i.z3S)("THREE.WebGLProgram: Shader Error " + a.getError() + " - VALIDATE_STATUS " + a.getProgramParameter(A, a.VALIDATE_STATUS) + "\n\nMaterial Name: " + t.name + "\nMaterial Type: " + t.type + "\n\nProgram Info Log: " + o + "\n" + e + "\n" + n);
        }
      } else if (o !== "") {
        (0, i.R8M)("WebGLProgram: Program Info Log:", o);
      } else if (l === "" || c === "") {
        d = false;
      }
      if (d) {
        t.diagnostics = {
          runnable: h,
          programLog: o,
          vertexShader: {
            log: l,
            prefix: v
          },
          fragmentShader: {
            log: c,
            prefix: b
          }
        };
      }
    }
    a.deleteShader(S);
    a.deleteShader(k);
    E = new He(a, A);
    M = function (e, t) {
      const n = {};
      const i = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
      for (let r = 0; r < i; r++) {
        const i = e.getActiveAttrib(t, r);
        const a = i.name;
        let s = 1;
        if (i.type === e.FLOAT_MAT2) {
          s = 2;
        }
        if (i.type === e.FLOAT_MAT3) {
          s = 3;
        }
        if (i.type === e.FLOAT_MAT4) {
          s = 4;
        }
        n[a] = {
          type: i.type,
          location: e.getAttribLocation(t, a),
          locationSize: s
        };
      }
      return n;
    }(a, A);
  }
  let E;
  let M;
  a.attachShader(A, S);
  a.attachShader(A, k);
  if (n.index0AttributeName !== undefined) {
    a.bindAttribLocation(A, 0, n.index0AttributeName);
  } else if (n.morphTargets === true) {
    a.bindAttribLocation(A, 0, "position");
  }
  a.linkProgram(A);
  this.getUniforms = function () {
    if (E === undefined) {
      T(this);
    }
    return E;
  };
  this.getAttributes = function () {
    if (M === undefined) {
      T(this);
    }
    return M;
  };
  let _ = n.rendererExtensionParallelShaderCompile === false;
  this.isReady = function () {
    if (_ === false) {
      _ = a.getProgramParameter(A, 37297);
    }
    return _;
  };
  this.destroy = function () {
    r.releaseStatesOfProgram(this);
    a.deleteProgram(A);
    this.program = undefined;
  };
  this.type = n.shaderType;
  this.name = n.shaderName;
  this.id = Ke++;
  this.cacheKey = t;
  this.usedTimes = 1;
  this.program = A;
  this.vertexShader = S;
  this.fragmentShader = k;
  return this;
}
let dt = 0;
class ut {
  constructor() {
    this.shaderCache = new Map();
    this.materialCache = new Map();
  }
  update(e) {
    const t = e.vertexShader;
    const n = e.fragmentShader;
    const i = this._getShaderStage(t);
    const r = this._getShaderStage(n);
    const a = this._getShaderCacheForMaterial(e);
    if (a.has(i) === false) {
      a.add(i);
      i.usedTimes++;
    }
    if (a.has(r) === false) {
      a.add(r);
      r.usedTimes++;
    }
    return this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const e of t) {
      e.usedTimes--;
      if (e.usedTimes === 0) {
        this.shaderCache.delete(e.code);
      }
    }
    this.materialCache.delete(e);
    return this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear();
    this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    if (n === undefined) {
      n = new Set();
      t.set(e, n);
    }
    return n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    if (n === undefined) {
      n = new ft(e);
      t.set(e, n);
    }
    return n;
  }
}
class ft {
  constructor(e) {
    this.id = dt++;
    this.code = e;
    this.usedTimes = 0;
  }
}
function pt(e, t, n, r, a, s, o) {
  const c = new i.zgK();
  const h = new ut();
  const d = new Set();
  const u = [];
  const f = a.logarithmicDepthBuffer;
  const p = a.vertexTextures;
  let g = a.precision;
  const m = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function A(e) {
    d.add(e);
    if (e === 0) {
      return "uv";
    } else {
      return `uv${e}`;
    }
  }
  return {
    getParameters: function (s, c, u, v, b) {
      const y = v.fog;
      const w = b.geometry;
      const x = s.isMeshStandardMaterial ? v.environment : null;
      const S = (s.isMeshStandardMaterial ? n : t).get(s.envMap || x);
      const k = S && S.mapping === i.Om ? S.image.height : null;
      const T = m[s.type];
      if (s.precision !== null) {
        g = a.getMaxPrecision(s.precision);
        if (g !== s.precision) {
          (0, i.R8M)("WebGLProgram.getParameters:", s.precision, "not supported, using", g, "instead.");
        }
      }
      const E = w.morphAttributes.position || w.morphAttributes.normal || w.morphAttributes.color;
      const M = E !== undefined ? E.length : 0;
      let _;
      let C;
      let R;
      let P;
      let I = 0;
      if (w.morphAttributes.position !== undefined) {
        I = 1;
      }
      if (w.morphAttributes.normal !== undefined) {
        I = 2;
      }
      if (w.morphAttributes.color !== undefined) {
        I = 3;
      }
      if (T) {
        const e = l[T];
        _ = e.vertexShader;
        C = e.fragmentShader;
      } else {
        _ = s.vertexShader;
        C = s.fragmentShader;
        h.update(s);
        R = h.getVertexShaderID(s);
        P = h.getFragmentShaderID(s);
      }
      const L = e.getRenderTarget();
      const U = e.state.buffers.depth.getReversed();
      const N = b.isInstancedMesh === true;
      const z = b.isBatchedMesh === true;
      const D = !!s.map;
      const B = !!s.matcap;
      const G = !!S;
      const F = !!s.aoMap;
      const O = !!s.lightMap;
      const W = !!s.bumpMap;
      const V = !!s.normalMap;
      const H = !!s.displacementMap;
      const j = !!s.emissiveMap;
      const K = !!s.metalnessMap;
      const q = !!s.roughnessMap;
      const Q = s.anisotropy > 0;
      const J = s.clearcoat > 0;
      const X = s.dispersion > 0;
      const Y = s.iridescence > 0;
      const Z = s.sheen > 0;
      const $ = s.transmission > 0;
      const ee = Q && !!s.anisotropyMap;
      const te = J && !!s.clearcoatMap;
      const ne = J && !!s.clearcoatNormalMap;
      const ie = J && !!s.clearcoatRoughnessMap;
      const re = Y && !!s.iridescenceMap;
      const ae = Y && !!s.iridescenceThicknessMap;
      const se = Z && !!s.sheenColorMap;
      const oe = Z && !!s.sheenRoughnessMap;
      const le = !!s.specularMap;
      const ce = !!s.specularColorMap;
      const he = !!s.specularIntensityMap;
      const de = $ && !!s.transmissionMap;
      const ue = $ && !!s.thicknessMap;
      const fe = !!s.gradientMap;
      const pe = !!s.alphaMap;
      const ge = s.alphaTest > 0;
      const me = !!s.alphaHash;
      const Ae = !!s.extensions;
      let ve = i.y_p;
      if (s.toneMapped) {
        if (L === null || L.isXRRenderTarget === true) {
          ve = e.toneMapping;
        }
      }
      const be = {
        shaderID: T,
        shaderType: s.type,
        shaderName: s.name,
        vertexShader: _,
        fragmentShader: C,
        defines: s.defines,
        customVertexShaderID: R,
        customFragmentShaderID: P,
        isRawShaderMaterial: s.isRawShaderMaterial === true,
        glslVersion: s.glslVersion,
        precision: g,
        batching: z,
        batchingColor: z && b._colorsTexture !== null,
        instancing: N,
        instancingColor: N && b.instanceColor !== null,
        instancingMorph: N && b.morphTexture !== null,
        supportsVertexTextures: p,
        outputColorSpace: L === null ? e.outputColorSpace : L.isXRRenderTarget === true ? L.texture.colorSpace : i.Zr2,
        alphaToCoverage: !!s.alphaToCoverage,
        map: D,
        matcap: B,
        envMap: G,
        envMapMode: G && S.mapping,
        envMapCubeUVHeight: k,
        aoMap: F,
        lightMap: O,
        bumpMap: W,
        normalMap: V,
        displacementMap: p && H,
        emissiveMap: j,
        normalMapObjectSpace: V && s.normalMapType === i.vyJ,
        normalMapTangentSpace: V && s.normalMapType === i.bI3,
        metalnessMap: K,
        roughnessMap: q,
        anisotropy: Q,
        anisotropyMap: ee,
        clearcoat: J,
        clearcoatMap: te,
        clearcoatNormalMap: ne,
        clearcoatRoughnessMap: ie,
        dispersion: X,
        iridescence: Y,
        iridescenceMap: re,
        iridescenceThicknessMap: ae,
        sheen: Z,
        sheenColorMap: se,
        sheenRoughnessMap: oe,
        specularMap: le,
        specularColorMap: ce,
        specularIntensityMap: he,
        transmission: $,
        transmissionMap: de,
        thicknessMap: ue,
        gradientMap: fe,
        opaque: s.transparent === false && s.blending === i.NTi && s.alphaToCoverage === false,
        alphaMap: pe,
        alphaTest: ge,
        alphaHash: me,
        combine: s.combine,
        mapUv: D && A(s.map.channel),
        aoMapUv: F && A(s.aoMap.channel),
        lightMapUv: O && A(s.lightMap.channel),
        bumpMapUv: W && A(s.bumpMap.channel),
        normalMapUv: V && A(s.normalMap.channel),
        displacementMapUv: H && A(s.displacementMap.channel),
        emissiveMapUv: j && A(s.emissiveMap.channel),
        metalnessMapUv: K && A(s.metalnessMap.channel),
        roughnessMapUv: q && A(s.roughnessMap.channel),
        anisotropyMapUv: ee && A(s.anisotropyMap.channel),
        clearcoatMapUv: te && A(s.clearcoatMap.channel),
        clearcoatNormalMapUv: ne && A(s.clearcoatNormalMap.channel),
        clearcoatRoughnessMapUv: ie && A(s.clearcoatRoughnessMap.channel),
        iridescenceMapUv: re && A(s.iridescenceMap.channel),
        iridescenceThicknessMapUv: ae && A(s.iridescenceThicknessMap.channel),
        sheenColorMapUv: se && A(s.sheenColorMap.channel),
        sheenRoughnessMapUv: oe && A(s.sheenRoughnessMap.channel),
        specularMapUv: le && A(s.specularMap.channel),
        specularColorMapUv: ce && A(s.specularColorMap.channel),
        specularIntensityMapUv: he && A(s.specularIntensityMap.channel),
        transmissionMapUv: de && A(s.transmissionMap.channel),
        thicknessMapUv: ue && A(s.thicknessMap.channel),
        alphaMapUv: pe && A(s.alphaMap.channel),
        vertexTangents: !!w.attributes.tangent && (V || Q),
        vertexColors: s.vertexColors,
        vertexAlphas: s.vertexColors === true && !!w.attributes.color && w.attributes.color.itemSize === 4,
        pointsUvs: b.isPoints === true && !!w.attributes.uv && (D || pe),
        fog: !!y,
        useFog: s.fog === true,
        fogExp2: !!y && y.isFogExp2,
        flatShading: s.flatShading === true && s.wireframe === false,
        sizeAttenuation: s.sizeAttenuation === true,
        logarithmicDepthBuffer: f,
        reversedDepthBuffer: U,
        skinning: b.isSkinnedMesh === true,
        morphTargets: w.morphAttributes.position !== undefined,
        morphNormals: w.morphAttributes.normal !== undefined,
        morphColors: w.morphAttributes.color !== undefined,
        morphTargetsCount: M,
        morphTextureStride: I,
        numDirLights: c.directional.length,
        numPointLights: c.point.length,
        numSpotLights: c.spot.length,
        numSpotLightMaps: c.spotLightMap.length,
        numRectAreaLights: c.rectArea.length,
        numHemiLights: c.hemi.length,
        numDirLightShadows: c.directionalShadowMap.length,
        numPointLightShadows: c.pointShadowMap.length,
        numSpotLightShadows: c.spotShadowMap.length,
        numSpotLightShadowsWithMaps: c.numSpotLightShadowsWithMaps,
        numLightProbes: c.numLightProbes,
        numClippingPlanes: o.numPlanes,
        numClipIntersection: o.numIntersection,
        dithering: s.dithering,
        shadowMapEnabled: e.shadowMap.enabled && u.length > 0,
        shadowMapType: e.shadowMap.type,
        toneMapping: ve,
        decodeVideoTexture: D && s.map.isVideoTexture === true && i.ppV.getTransfer(s.map.colorSpace) === i.KLL,
        decodeVideoTextureEmissive: j && s.emissiveMap.isVideoTexture === true && i.ppV.getTransfer(s.emissiveMap.colorSpace) === i.KLL,
        premultipliedAlpha: s.premultipliedAlpha,
        doubleSided: s.side === i.$EB,
        flipSided: s.side === i.hsX,
        useDepthPacking: s.depthPacking >= 0,
        depthPacking: s.depthPacking || 0,
        index0AttributeName: s.index0AttributeName,
        extensionClipCullDistance: Ae && s.extensions.clipCullDistance === true && r.has("WEBGL_clip_cull_distance"),
        extensionMultiDraw: (Ae && s.extensions.multiDraw === true || z) && r.has("WEBGL_multi_draw"),
        rendererExtensionParallelShaderCompile: r.has("KHR_parallel_shader_compile"),
        customProgramCacheKey: s.customProgramCacheKey()
      };
      be.vertexUv1s = d.has(1);
      be.vertexUv2s = d.has(2);
      be.vertexUv3s = d.has(3);
      d.clear();
      return be;
    },
    getProgramCacheKey: function (t) {
      const n = [];
      if (t.shaderID) {
        n.push(t.shaderID);
      } else {
        n.push(t.customVertexShaderID);
        n.push(t.customFragmentShaderID);
      }
      if (t.defines !== undefined) {
        for (const e in t.defines) {
          n.push(e);
          n.push(t.defines[e]);
        }
      }
      if (t.isRawShaderMaterial === false) {
        (function (e, t) {
          e.push(t.precision);
          e.push(t.outputColorSpace);
          e.push(t.envMapMode);
          e.push(t.envMapCubeUVHeight);
          e.push(t.mapUv);
          e.push(t.alphaMapUv);
          e.push(t.lightMapUv);
          e.push(t.aoMapUv);
          e.push(t.bumpMapUv);
          e.push(t.normalMapUv);
          e.push(t.displacementMapUv);
          e.push(t.emissiveMapUv);
          e.push(t.metalnessMapUv);
          e.push(t.roughnessMapUv);
          e.push(t.anisotropyMapUv);
          e.push(t.clearcoatMapUv);
          e.push(t.clearcoatNormalMapUv);
          e.push(t.clearcoatRoughnessMapUv);
          e.push(t.iridescenceMapUv);
          e.push(t.iridescenceThicknessMapUv);
          e.push(t.sheenColorMapUv);
          e.push(t.sheenRoughnessMapUv);
          e.push(t.specularMapUv);
          e.push(t.specularColorMapUv);
          e.push(t.specularIntensityMapUv);
          e.push(t.transmissionMapUv);
          e.push(t.thicknessMapUv);
          e.push(t.combine);
          e.push(t.fogExp2);
          e.push(t.sizeAttenuation);
          e.push(t.morphTargetsCount);
          e.push(t.morphAttributeCount);
          e.push(t.numDirLights);
          e.push(t.numPointLights);
          e.push(t.numSpotLights);
          e.push(t.numSpotLightMaps);
          e.push(t.numHemiLights);
          e.push(t.numRectAreaLights);
          e.push(t.numDirLightShadows);
          e.push(t.numPointLightShadows);
          e.push(t.numSpotLightShadows);
          e.push(t.numSpotLightShadowsWithMaps);
          e.push(t.numLightProbes);
          e.push(t.shadowMapType);
          e.push(t.toneMapping);
          e.push(t.numClippingPlanes);
          e.push(t.numClipIntersection);
          e.push(t.depthPacking);
        })(n, t);
        (function (e, t) {
          c.disableAll();
          if (t.supportsVertexTextures) {
            c.enable(0);
          }
          if (t.instancing) {
            c.enable(1);
          }
          if (t.instancingColor) {
            c.enable(2);
          }
          if (t.instancingMorph) {
            c.enable(3);
          }
          if (t.matcap) {
            c.enable(4);
          }
          if (t.envMap) {
            c.enable(5);
          }
          if (t.normalMapObjectSpace) {
            c.enable(6);
          }
          if (t.normalMapTangentSpace) {
            c.enable(7);
          }
          if (t.clearcoat) {
            c.enable(8);
          }
          if (t.iridescence) {
            c.enable(9);
          }
          if (t.alphaTest) {
            c.enable(10);
          }
          if (t.vertexColors) {
            c.enable(11);
          }
          if (t.vertexAlphas) {
            c.enable(12);
          }
          if (t.vertexUv1s) {
            c.enable(13);
          }
          if (t.vertexUv2s) {
            c.enable(14);
          }
          if (t.vertexUv3s) {
            c.enable(15);
          }
          if (t.vertexTangents) {
            c.enable(16);
          }
          if (t.anisotropy) {
            c.enable(17);
          }
          if (t.alphaHash) {
            c.enable(18);
          }
          if (t.batching) {
            c.enable(19);
          }
          if (t.dispersion) {
            c.enable(20);
          }
          if (t.batchingColor) {
            c.enable(21);
          }
          if (t.gradientMap) {
            c.enable(22);
          }
          e.push(c.mask);
          c.disableAll();
          if (t.fog) {
            c.enable(0);
          }
          if (t.useFog) {
            c.enable(1);
          }
          if (t.flatShading) {
            c.enable(2);
          }
          if (t.logarithmicDepthBuffer) {
            c.enable(3);
          }
          if (t.reversedDepthBuffer) {
            c.enable(4);
          }
          if (t.skinning) {
            c.enable(5);
          }
          if (t.morphTargets) {
            c.enable(6);
          }
          if (t.morphNormals) {
            c.enable(7);
          }
          if (t.morphColors) {
            c.enable(8);
          }
          if (t.premultipliedAlpha) {
            c.enable(9);
          }
          if (t.shadowMapEnabled) {
            c.enable(10);
          }
          if (t.doubleSided) {
            c.enable(11);
          }
          if (t.flipSided) {
            c.enable(12);
          }
          if (t.useDepthPacking) {
            c.enable(13);
          }
          if (t.dithering) {
            c.enable(14);
          }
          if (t.transmission) {
            c.enable(15);
          }
          if (t.sheen) {
            c.enable(16);
          }
          if (t.opaque) {
            c.enable(17);
          }
          if (t.pointsUvs) {
            c.enable(18);
          }
          if (t.decodeVideoTexture) {
            c.enable(19);
          }
          if (t.decodeVideoTextureEmissive) {
            c.enable(20);
          }
          if (t.alphaToCoverage) {
            c.enable(21);
          }
          e.push(c.mask);
        })(n, t);
        n.push(e.outputColorSpace);
      }
      n.push(t.customProgramCacheKey);
      return n.join();
    },
    getUniforms: function (e) {
      const t = m[e.type];
      let n;
      if (t) {
        const e = l[t];
        n = i.LlO.clone(e.uniforms);
      } else {
        n = e.uniforms;
      }
      return n;
    },
    acquireProgram: function (t, n) {
      let i;
      for (let e = 0, t = u.length; e < t; e++) {
        const t = u[e];
        if (t.cacheKey === n) {
          i = t;
          ++i.usedTimes;
          break;
        }
      }
      if (i === undefined) {
        i = new ht(e, n, t, s);
        u.push(i);
      }
      return i;
    },
    releaseProgram: function (e) {
      if (--e.usedTimes == 0) {
        const t = u.indexOf(e);
        u[t] = u[u.length - 1];
        u.pop();
        e.destroy();
      }
    },
    releaseShaderCache: function (e) {
      h.remove(e);
    },
    programs: u,
    dispose: function () {
      h.dispose();
    }
  };
}
function gt() {
  let e = new WeakMap();
  return {
    has: function (t) {
      return e.has(t);
    },
    get: function (t) {
      let n = e.get(t);
      if (n === undefined) {
        n = {};
        e.set(t, n);
      }
      return n;
    },
    remove: function (t) {
      e.delete(t);
    },
    update: function (t, n, i) {
      e.get(t)[n] = i;
    },
    dispose: function () {
      e = new WeakMap();
    }
  };
}
function mt(e, t) {
  if (e.groupOrder !== t.groupOrder) {
    return e.groupOrder - t.groupOrder;
  } else if (e.renderOrder !== t.renderOrder) {
    return e.renderOrder - t.renderOrder;
  } else if (e.material.id !== t.material.id) {
    return e.material.id - t.material.id;
  } else if (e.z !== t.z) {
    return e.z - t.z;
  } else {
    return e.id - t.id;
  }
}
function At(e, t) {
  if (e.groupOrder !== t.groupOrder) {
    return e.groupOrder - t.groupOrder;
  } else if (e.renderOrder !== t.renderOrder) {
    return e.renderOrder - t.renderOrder;
  } else if (e.z !== t.z) {
    return t.z - e.z;
  } else {
    return e.id - t.id;
  }
}
function vt() {
  const e = [];
  let t = 0;
  const n = [];
  const i = [];
  const r = [];
  function a(n, i, r, a, s, o) {
    let l = e[t];
    if (l === undefined) {
      l = {
        id: n.id,
        object: n,
        geometry: i,
        material: r,
        groupOrder: a,
        renderOrder: n.renderOrder,
        z: s,
        group: o
      };
      e[t] = l;
    } else {
      l.id = n.id;
      l.object = n;
      l.geometry = i;
      l.material = r;
      l.groupOrder = a;
      l.renderOrder = n.renderOrder;
      l.z = s;
      l.group = o;
    }
    t++;
    return l;
  }
  return {
    opaque: n,
    transmissive: i,
    transparent: r,
    init: function () {
      t = 0;
      n.length = 0;
      i.length = 0;
      r.length = 0;
    },
    push: function (e, t, s, o, l, c) {
      const h = a(e, t, s, o, l, c);
      if (s.transmission > 0) {
        i.push(h);
      } else if (s.transparent === true) {
        r.push(h);
      } else {
        n.push(h);
      }
    },
    unshift: function (e, t, s, o, l, c) {
      const h = a(e, t, s, o, l, c);
      if (s.transmission > 0) {
        i.unshift(h);
      } else if (s.transparent === true) {
        r.unshift(h);
      } else {
        n.unshift(h);
      }
    },
    finish: function () {
      for (let n = t, i = e.length; n < i; n++) {
        const t = e[n];
        if (t.id === null) {
          break;
        }
        t.id = null;
        t.object = null;
        t.geometry = null;
        t.material = null;
        t.group = null;
      }
    },
    sort: function (e, t) {
      if (n.length > 1) {
        n.sort(e || mt);
      }
      if (i.length > 1) {
        i.sort(t || At);
      }
      if (r.length > 1) {
        r.sort(t || At);
      }
    }
  };
}
function bt() {
  let e = new WeakMap();
  return {
    get: function (t, n) {
      const i = e.get(t);
      let r;
      if (i === undefined) {
        r = new vt();
        e.set(t, [r]);
      } else if (n >= i.length) {
        r = new vt();
        i.push(r);
      } else {
        r = i[n];
      }
      return r;
    },
    dispose: function () {
      e = new WeakMap();
    }
  };
}
function yt() {
  const e = {};
  return {
    get: function (t) {
      if (e[t.id] !== undefined) {
        return e[t.id];
      }
      let n;
      switch (t.type) {
        case "DirectionalLight":
          n = {
            direction: new i.Pq0(),
            color: new i.Q1f()
          };
          break;
        case "SpotLight":
          n = {
            position: new i.Pq0(),
            direction: new i.Pq0(),
            color: new i.Q1f(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          n = {
            position: new i.Pq0(),
            color: new i.Q1f(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          n = {
            direction: new i.Pq0(),
            skyColor: new i.Q1f(),
            groundColor: new i.Q1f()
          };
          break;
        case "RectAreaLight":
          n = {
            color: new i.Q1f(),
            position: new i.Pq0(),
            halfWidth: new i.Pq0(),
            halfHeight: new i.Pq0()
          };
      }
      e[t.id] = n;
      return n;
    }
  };
}
let wt = 0;
function xt(e, t) {
  return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (e.map ? 1 : 0);
}
function St(e) {
  const t = new yt();
  const n = function () {
    const e = {};
    return {
      get: function (t) {
        if (e[t.id] !== undefined) {
          return e[t.id];
        }
        let n;
        switch (t.type) {
          case "DirectionalLight":
          case "SpotLight":
            n = {
              shadowIntensity: 1,
              shadowBias: 0,
              shadowNormalBias: 0,
              shadowRadius: 1,
              shadowMapSize: new i.I9Y()
            };
            break;
          case "PointLight":
            n = {
              shadowIntensity: 1,
              shadowBias: 0,
              shadowNormalBias: 0,
              shadowRadius: 1,
              shadowMapSize: new i.I9Y(),
              shadowCameraNear: 1,
              shadowCameraFar: 1000
            };
        }
        e[t.id] = n;
        return n;
      }
    };
  }();
  const r = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let e = 0; e < 9; e++) {
    r.probe.push(new i.Pq0());
  }
  const a = new i.Pq0();
  const s = new i.kn4();
  const l = new i.kn4();
  return {
    setup: function (i) {
      let a = 0;
      let s = 0;
      let l = 0;
      for (let e = 0; e < 9; e++) {
        r.probe[e].set(0, 0, 0);
      }
      let c = 0;
      let h = 0;
      let d = 0;
      let u = 0;
      let f = 0;
      let p = 0;
      let g = 0;
      let m = 0;
      let A = 0;
      let v = 0;
      let b = 0;
      i.sort(xt);
      for (let e = 0, o = i.length; e < o; e++) {
        const o = i[e];
        const y = o.color;
        const w = o.intensity;
        const x = o.distance;
        const S = o.shadow && o.shadow.map ? o.shadow.map.texture : null;
        if (o.isAmbientLight) {
          a += y.r * w;
          s += y.g * w;
          l += y.b * w;
        } else if (o.isLightProbe) {
          for (let e = 0; e < 9; e++) {
            r.probe[e].addScaledVector(o.sh.coefficients[e], w);
          }
          b++;
        } else if (o.isDirectionalLight) {
          const e = t.get(o);
          e.color.copy(o.color).multiplyScalar(o.intensity);
          if (o.castShadow) {
            const e = o.shadow;
            const t = n.get(o);
            t.shadowIntensity = e.intensity;
            t.shadowBias = e.bias;
            t.shadowNormalBias = e.normalBias;
            t.shadowRadius = e.radius;
            t.shadowMapSize = e.mapSize;
            r.directionalShadow[c] = t;
            r.directionalShadowMap[c] = S;
            r.directionalShadowMatrix[c] = o.shadow.matrix;
            p++;
          }
          r.directional[c] = e;
          c++;
        } else if (o.isSpotLight) {
          const e = t.get(o);
          e.position.setFromMatrixPosition(o.matrixWorld);
          e.color.copy(y).multiplyScalar(w);
          e.distance = x;
          e.coneCos = Math.cos(o.angle);
          e.penumbraCos = Math.cos(o.angle * (1 - o.penumbra));
          e.decay = o.decay;
          r.spot[d] = e;
          const i = o.shadow;
          if (o.map) {
            r.spotLightMap[A] = o.map;
            A++;
            i.updateMatrices(o);
            if (o.castShadow) {
              v++;
            }
          }
          r.spotLightMatrix[d] = i.matrix;
          if (o.castShadow) {
            const e = n.get(o);
            e.shadowIntensity = i.intensity;
            e.shadowBias = i.bias;
            e.shadowNormalBias = i.normalBias;
            e.shadowRadius = i.radius;
            e.shadowMapSize = i.mapSize;
            r.spotShadow[d] = e;
            r.spotShadowMap[d] = S;
            m++;
          }
          d++;
        } else if (o.isRectAreaLight) {
          const e = t.get(o);
          e.color.copy(y).multiplyScalar(w);
          e.halfWidth.set(o.width * 0.5, 0, 0);
          e.halfHeight.set(0, o.height * 0.5, 0);
          r.rectArea[u] = e;
          u++;
        } else if (o.isPointLight) {
          const e = t.get(o);
          e.color.copy(o.color).multiplyScalar(o.intensity);
          e.distance = o.distance;
          e.decay = o.decay;
          if (o.castShadow) {
            const e = o.shadow;
            const t = n.get(o);
            t.shadowIntensity = e.intensity;
            t.shadowBias = e.bias;
            t.shadowNormalBias = e.normalBias;
            t.shadowRadius = e.radius;
            t.shadowMapSize = e.mapSize;
            t.shadowCameraNear = e.camera.near;
            t.shadowCameraFar = e.camera.far;
            r.pointShadow[h] = t;
            r.pointShadowMap[h] = S;
            r.pointShadowMatrix[h] = o.shadow.matrix;
            g++;
          }
          r.point[h] = e;
          h++;
        } else if (o.isHemisphereLight) {
          const e = t.get(o);
          e.skyColor.copy(o.color).multiplyScalar(w);
          e.groundColor.copy(o.groundColor).multiplyScalar(w);
          r.hemi[f] = e;
          f++;
        }
      }
      if (u > 0) {
        if (e.has("OES_texture_float_linear") === true) {
          r.rectAreaLTC1 = o.LTC_FLOAT_1;
          r.rectAreaLTC2 = o.LTC_FLOAT_2;
        } else {
          r.rectAreaLTC1 = o.LTC_HALF_1;
          r.rectAreaLTC2 = o.LTC_HALF_2;
        }
      }
      r.ambient[0] = a;
      r.ambient[1] = s;
      r.ambient[2] = l;
      const y = r.hash;
      if (y.directionalLength !== c || y.pointLength !== h || y.spotLength !== d || y.rectAreaLength !== u || y.hemiLength !== f || y.numDirectionalShadows !== p || y.numPointShadows !== g || y.numSpotShadows !== m || y.numSpotMaps !== A || y.numLightProbes !== b) {
        r.directional.length = c;
        r.spot.length = d;
        r.rectArea.length = u;
        r.point.length = h;
        r.hemi.length = f;
        r.directionalShadow.length = p;
        r.directionalShadowMap.length = p;
        r.pointShadow.length = g;
        r.pointShadowMap.length = g;
        r.spotShadow.length = m;
        r.spotShadowMap.length = m;
        r.directionalShadowMatrix.length = p;
        r.pointShadowMatrix.length = g;
        r.spotLightMatrix.length = m + A - v;
        r.spotLightMap.length = A;
        r.numSpotLightShadowsWithMaps = v;
        r.numLightProbes = b;
        y.directionalLength = c;
        y.pointLength = h;
        y.spotLength = d;
        y.rectAreaLength = u;
        y.hemiLength = f;
        y.numDirectionalShadows = p;
        y.numPointShadows = g;
        y.numSpotShadows = m;
        y.numSpotMaps = A;
        y.numLightProbes = b;
        r.version = wt++;
      }
    },
    setupView: function (e, t) {
      let n = 0;
      let i = 0;
      let o = 0;
      let c = 0;
      let h = 0;
      const d = t.matrixWorldInverse;
      for (let t = 0, u = e.length; t < u; t++) {
        const u = e[t];
        if (u.isDirectionalLight) {
          const e = r.directional[n];
          e.direction.setFromMatrixPosition(u.matrixWorld);
          a.setFromMatrixPosition(u.target.matrixWorld);
          e.direction.sub(a);
          e.direction.transformDirection(d);
          n++;
        } else if (u.isSpotLight) {
          const e = r.spot[o];
          e.position.setFromMatrixPosition(u.matrixWorld);
          e.position.applyMatrix4(d);
          e.direction.setFromMatrixPosition(u.matrixWorld);
          a.setFromMatrixPosition(u.target.matrixWorld);
          e.direction.sub(a);
          e.direction.transformDirection(d);
          o++;
        } else if (u.isRectAreaLight) {
          const e = r.rectArea[c];
          e.position.setFromMatrixPosition(u.matrixWorld);
          e.position.applyMatrix4(d);
          l.identity();
          s.copy(u.matrixWorld);
          s.premultiply(d);
          l.extractRotation(s);
          e.halfWidth.set(u.width * 0.5, 0, 0);
          e.halfHeight.set(0, u.height * 0.5, 0);
          e.halfWidth.applyMatrix4(l);
          e.halfHeight.applyMatrix4(l);
          c++;
        } else if (u.isPointLight) {
          const e = r.point[i];
          e.position.setFromMatrixPosition(u.matrixWorld);
          e.position.applyMatrix4(d);
          i++;
        } else if (u.isHemisphereLight) {
          const e = r.hemi[h];
          e.direction.setFromMatrixPosition(u.matrixWorld);
          e.direction.transformDirection(d);
          h++;
        }
      }
    },
    state: r
  };
}
function kt(e) {
  const t = new St(e);
  const n = [];
  const i = [];
  const r = {
    lightsArray: n,
    shadowsArray: i,
    camera: null,
    lights: t,
    transmissionRenderTarget: {}
  };
  return {
    init: function (e) {
      r.camera = e;
      n.length = 0;
      i.length = 0;
    },
    state: r,
    setupLights: function () {
      t.setup(n);
    },
    setupLightsView: function (e) {
      t.setupView(n, e);
    },
    pushLight: function (e) {
      n.push(e);
    },
    pushShadow: function (e) {
      i.push(e);
    }
  };
}
function Tt(e) {
  let t = new WeakMap();
  return {
    get: function (n, i = 0) {
      const r = t.get(n);
      let a;
      if (r === undefined) {
        a = new kt(e);
        t.set(n, [a]);
      } else if (i >= r.length) {
        a = new kt(e);
        r.push(a);
      } else {
        a = r[i];
      }
      return a;
    },
    dispose: function () {
      t = new WeakMap();
    }
  };
}
function Et(e, t, n) {
  let r = new i.PPD();
  const a = new i.I9Y();
  const s = new i.I9Y();
  const o = new i.IUQ();
  const l = new i.CSG({
    depthPacking: i.N5j
  });
  const c = new i.aVO();
  const h = {};
  const d = n.maxTextureSize;
  const u = {
    [i.hB5]: i.hsX,
    [i.hsX]: i.hB5,
    [i.$EB]: i.$EB
  };
  const f = new i.BKk({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: {
        value: null
      },
      resolution: {
        value: new i.I9Y()
      },
      radius: {
        value: 4
      }
    },
    vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
    fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
  });
  const p = f.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new i.LoY();
  g.setAttribute("position", new i.THS(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const m = new i.eaF(g, f);
  const A = this;
  this.enabled = false;
  this.autoUpdate = true;
  this.needsUpdate = false;
  this.type = i.QP0;
  let v = this.type;
  function b(n, r) {
    const s = t.update(m);
    if (f.defines.VSM_SAMPLES !== n.blurSamples) {
      f.defines.VSM_SAMPLES = n.blurSamples;
      p.defines.VSM_SAMPLES = n.blurSamples;
      f.needsUpdate = true;
      p.needsUpdate = true;
    }
    if (n.mapPass === null) {
      n.mapPass = new i.nWS(a.x, a.y);
    }
    f.uniforms.shadow_pass.value = n.map.texture;
    f.uniforms.resolution.value = n.mapSize;
    f.uniforms.radius.value = n.radius;
    e.setRenderTarget(n.mapPass);
    e.clear();
    e.renderBufferDirect(r, null, s, f, m, null);
    p.uniforms.shadow_pass.value = n.mapPass.texture;
    p.uniforms.resolution.value = n.mapSize;
    p.uniforms.radius.value = n.radius;
    e.setRenderTarget(n.map);
    e.clear();
    e.renderBufferDirect(r, null, s, p, m, null);
  }
  function y(t, n, r, a) {
    let s = null;
    const o = r.isPointLight === true ? t.customDistanceMaterial : t.customDepthMaterial;
    if (o !== undefined) {
      s = o;
    } else {
      s = r.isPointLight === true ? c : l;
      if (e.localClippingEnabled && n.clipShadows === true && Array.isArray(n.clippingPlanes) && n.clippingPlanes.length !== 0 || n.displacementMap && n.displacementScale !== 0 || n.alphaMap && n.alphaTest > 0 || n.map && n.alphaTest > 0 || n.alphaToCoverage === true) {
        const e = s.uuid;
        const t = n.uuid;
        let i = h[e];
        if (i === undefined) {
          i = {};
          h[e] = i;
        }
        let r = i[t];
        if (r === undefined) {
          r = s.clone();
          i[t] = r;
          n.addEventListener("dispose", x);
        }
        s = r;
      }
    }
    s.visible = n.visible;
    s.wireframe = n.wireframe;
    if (a === i.RyA) {
      s.side = n.shadowSide !== null ? n.shadowSide : n.side;
    } else {
      s.side = n.shadowSide !== null ? n.shadowSide : u[n.side];
    }
    s.alphaMap = n.alphaMap;
    s.alphaTest = n.alphaToCoverage === true ? 0.5 : n.alphaTest;
    s.map = n.map;
    s.clipShadows = n.clipShadows;
    s.clippingPlanes = n.clippingPlanes;
    s.clipIntersection = n.clipIntersection;
    s.displacementMap = n.displacementMap;
    s.displacementScale = n.displacementScale;
    s.displacementBias = n.displacementBias;
    s.wireframeLinewidth = n.wireframeLinewidth;
    s.linewidth = n.linewidth;
    if (r.isPointLight === true && s.isMeshDistanceMaterial === true) {
      e.properties.get(s).light = r;
    }
    return s;
  }
  function w(n, a, s, o, l) {
    if (n.visible === false) {
      return;
    }
    if (n.layers.test(a.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && l === i.RyA) && (!n.frustumCulled || r.intersectsObject(n))) {
      n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, n.matrixWorld);
      const i = t.update(n);
      const r = n.material;
      if (Array.isArray(r)) {
        const t = i.groups;
        for (let c = 0, h = t.length; c < h; c++) {
          const h = t[c];
          const d = r[h.materialIndex];
          if (d && d.visible) {
            const t = y(n, d, o, l);
            n.onBeforeShadow(e, n, a, s, i, t, h);
            e.renderBufferDirect(s, null, i, t, n, h);
            n.onAfterShadow(e, n, a, s, i, t, h);
          }
        }
      } else if (r.visible) {
        const t = y(n, r, o, l);
        n.onBeforeShadow(e, n, a, s, i, t, null);
        e.renderBufferDirect(s, null, i, t, n, null);
        n.onAfterShadow(e, n, a, s, i, t, null);
      }
    }
    const c = n.children;
    for (let e = 0, t = c.length; e < t; e++) {
      w(c[e], a, s, o, l);
    }
  }
  function x(e) {
    e.target.removeEventListener("dispose", x);
    for (const t in h) {
      const n = h[t];
      const i = e.target.uuid;
      if (i in n) {
        n[i].dispose();
        delete n[i];
      }
    }
  }
  this.render = function (t, n, l) {
    if (A.enabled === false) {
      return;
    }
    if (A.autoUpdate === false && A.needsUpdate === false) {
      return;
    }
    if (t.length === 0) {
      return;
    }
    const c = e.getRenderTarget();
    const h = e.getActiveCubeFace();
    const u = e.getActiveMipmapLevel();
    const f = e.state;
    f.setBlending(i.XIg);
    if (f.buffers.depth.getReversed() === true) {
      f.buffers.color.setClear(0, 0, 0, 0);
    } else {
      f.buffers.color.setClear(1, 1, 1, 1);
    }
    f.buffers.depth.setTest(true);
    f.setScissorTest(false);
    const p = v !== i.RyA && this.type === i.RyA;
    const g = v === i.RyA && this.type !== i.RyA;
    for (let c = 0, h = t.length; c < h; c++) {
      const h = t[c];
      const u = h.shadow;
      if (u === undefined) {
        (0, i.R8M)("WebGLShadowMap:", h, "has no shadow.");
        continue;
      }
      if (u.autoUpdate === false && u.needsUpdate === false) {
        continue;
      }
      a.copy(u.mapSize);
      const m = u.getFrameExtents();
      a.multiply(m);
      s.copy(u.mapSize);
      if (a.x > d || a.y > d) {
        if (a.x > d) {
          s.x = Math.floor(d / m.x);
          a.x = s.x * m.x;
          u.mapSize.x = s.x;
        }
        if (a.y > d) {
          s.y = Math.floor(d / m.y);
          a.y = s.y * m.y;
          u.mapSize.y = s.y;
        }
      }
      if (u.map === null || p === true || g === true) {
        const e = this.type !== i.RyA ? {
          minFilter: i.hxR,
          magFilter: i.hxR
        } : {};
        if (u.map !== null) {
          u.map.dispose();
        }
        u.map = new i.nWS(a.x, a.y, e);
        u.map.texture.name = h.name + ".shadowMap";
        u.camera.updateProjectionMatrix();
      }
      e.setRenderTarget(u.map);
      e.clear();
      const A = u.getViewportCount();
      for (let e = 0; e < A; e++) {
        const t = u.getViewport(e);
        o.set(s.x * t.x, s.y * t.y, s.x * t.z, s.y * t.w);
        f.viewport(o);
        u.updateMatrices(h, e);
        r = u.getFrustum();
        w(n, l, u.camera, h, this.type);
      }
      if (u.isPointLightShadow !== true && this.type === i.RyA) {
        b(u, l);
      }
      u.needsUpdate = false;
    }
    v = this.type;
    A.needsUpdate = false;
    e.setRenderTarget(c, h, u);
  };
}
const Mt = {
  [i.eHc]: i.lGu,
  [i.brA]: i.K52,
  [i.U3G]: i.bw0,
  [i.xSv]: i.Gwm,
  [i.lGu]: i.eHc,
  [i.K52]: i.brA,
  [i.bw0]: i.U3G,
  [i.Gwm]: i.xSv
};
function _t(e, t) {
  const n = new function () {
    let t = false;
    const n = new i.IUQ();
    let r = null;
    const a = new i.IUQ(0, 0, 0, 0);
    return {
      setMask: function (n) {
        if (r !== n && !t) {
          e.colorMask(n, n, n, n);
          r = n;
        }
      },
      setLocked: function (e) {
        t = e;
      },
      setClear: function (t, i, r, s, o) {
        if (o === true) {
          t *= s;
          i *= s;
          r *= s;
        }
        n.set(t, i, r, s);
        if (a.equals(n) === false) {
          e.clearColor(t, i, r, s);
          a.copy(n);
        }
      },
      reset: function () {
        t = false;
        r = null;
        a.set(-1, 0, 0, 0);
      }
    };
  }();
  const r = new function () {
    let n = false;
    let r = false;
    let a = null;
    let s = null;
    let o = null;
    return {
      setReversed: function (e) {
        if (r !== e) {
          const n = t.get("EXT_clip_control");
          if (e) {
            n.clipControlEXT(n.LOWER_LEFT_EXT, n.ZERO_TO_ONE_EXT);
          } else {
            n.clipControlEXT(n.LOWER_LEFT_EXT, n.NEGATIVE_ONE_TO_ONE_EXT);
          }
          r = e;
          const i = o;
          o = null;
          this.setClear(i);
        }
      },
      getReversed: function () {
        return r;
      },
      setTest: function (t) {
        if (t) {
          O(e.DEPTH_TEST);
        } else {
          W(e.DEPTH_TEST);
        }
      },
      setMask: function (t) {
        if (a !== t && !n) {
          e.depthMask(t);
          a = t;
        }
      },
      setFunc: function (t) {
        if (r) {
          t = Mt[t];
        }
        if (s !== t) {
          switch (t) {
            case i.eHc:
              e.depthFunc(e.NEVER);
              break;
            case i.lGu:
              e.depthFunc(e.ALWAYS);
              break;
            case i.brA:
              e.depthFunc(e.LESS);
              break;
            case i.xSv:
              e.depthFunc(e.LEQUAL);
              break;
            case i.U3G:
              e.depthFunc(e.EQUAL);
              break;
            case i.Gwm:
              e.depthFunc(e.GEQUAL);
              break;
            case i.K52:
              e.depthFunc(e.GREATER);
              break;
            case i.bw0:
              e.depthFunc(e.NOTEQUAL);
              break;
            default:
              e.depthFunc(e.LEQUAL);
          }
          s = t;
        }
      },
      setLocked: function (e) {
        n = e;
      },
      setClear: function (t) {
        if (o !== t) {
          if (r) {
            t = 1 - t;
          }
          e.clearDepth(t);
          o = t;
        }
      },
      reset: function () {
        n = false;
        a = null;
        s = null;
        o = null;
        r = false;
      }
    };
  }();
  const a = new function () {
    let t = false;
    let n = null;
    let i = null;
    let r = null;
    let a = null;
    let s = null;
    let o = null;
    let l = null;
    let c = null;
    return {
      setTest: function (n) {
        if (!t) {
          if (n) {
            O(e.STENCIL_TEST);
          } else {
            W(e.STENCIL_TEST);
          }
        }
      },
      setMask: function (i) {
        if (n !== i && !t) {
          e.stencilMask(i);
          n = i;
        }
      },
      setFunc: function (t, n, s) {
        if (i !== t || r !== n || a !== s) {
          e.stencilFunc(t, n, s);
          i = t;
          r = n;
          a = s;
        }
      },
      setOp: function (t, n, i) {
        if (s !== t || o !== n || l !== i) {
          e.stencilOp(t, n, i);
          s = t;
          o = n;
          l = i;
        }
      },
      setLocked: function (e) {
        t = e;
      },
      setClear: function (t) {
        if (c !== t) {
          e.clearStencil(t);
          c = t;
        }
      },
      reset: function () {
        t = false;
        n = null;
        i = null;
        r = null;
        a = null;
        s = null;
        o = null;
        l = null;
        c = null;
      }
    };
  }();
  const s = new WeakMap();
  const o = new WeakMap();
  let l = {};
  let c = {};
  let h = new WeakMap();
  let d = [];
  let u = null;
  let f = false;
  let p = null;
  let g = null;
  let m = null;
  let A = null;
  let v = null;
  let b = null;
  let y = null;
  let w = new i.Q1f(0, 0, 0);
  let x = 0;
  let S = false;
  let k = null;
  let T = null;
  let E = null;
  let M = null;
  let _ = null;
  const C = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let R = false;
  let P = 0;
  const I = e.getParameter(e.VERSION);
  if (I.indexOf("WebGL") !== -1) {
    P = parseFloat(/^WebGL (\d)/.exec(I)[1]);
    R = P >= 1;
  } else if (I.indexOf("OpenGL ES") !== -1) {
    P = parseFloat(/^OpenGL ES (\d)/.exec(I)[1]);
    R = P >= 2;
  }
  let L = null;
  let U = {};
  const N = e.getParameter(e.SCISSOR_BOX);
  const z = e.getParameter(e.VIEWPORT);
  const D = new i.IUQ().fromArray(N);
  const B = new i.IUQ().fromArray(z);
  function G(t, n, i, r) {
    const a = new Uint8Array(4);
    const s = e.createTexture();
    e.bindTexture(t, s);
    e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST);
    e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
    for (let s = 0; s < i; s++) {
      if (t === e.TEXTURE_3D || t === e.TEXTURE_2D_ARRAY) {
        e.texImage3D(n, 0, e.RGBA, 1, 1, r, 0, e.RGBA, e.UNSIGNED_BYTE, a);
      } else {
        e.texImage2D(n + s, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, a);
      }
    }
    return s;
  }
  const F = {};
  function O(t) {
    if (l[t] !== true) {
      e.enable(t);
      l[t] = true;
    }
  }
  function W(t) {
    if (l[t] !== false) {
      e.disable(t);
      l[t] = false;
    }
  }
  F[e.TEXTURE_2D] = G(e.TEXTURE_2D, e.TEXTURE_2D, 1);
  F[e.TEXTURE_CUBE_MAP] = G(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6);
  F[e.TEXTURE_2D_ARRAY] = G(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1);
  F[e.TEXTURE_3D] = G(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1);
  n.setClear(0, 0, 0, 1);
  r.setClear(1);
  a.setClear(0);
  O(e.DEPTH_TEST);
  r.setFunc(i.xSv);
  K(false);
  q(i.Vb5);
  O(e.CULL_FACE);
  j(i.XIg);
  const V = {
    [i.gO9]: e.FUNC_ADD,
    [i.FXf]: e.FUNC_SUBTRACT,
    [i.nST]: e.FUNC_REVERSE_SUBTRACT
  };
  V[i.znC] = e.MIN;
  V[i.$ei] = e.MAX;
  const H = {
    [i.ojh]: e.ZERO,
    [i.qad]: e.ONE,
    [i.f4X]: e.SRC_COLOR,
    [i.ie2]: e.SRC_ALPHA,
    [i.hgQ]: e.SRC_ALPHA_SATURATE,
    [i.wn6]: e.DST_COLOR,
    [i.hdd]: e.DST_ALPHA,
    [i.LiQ]: e.ONE_MINUS_SRC_COLOR,
    [i.OuU]: e.ONE_MINUS_SRC_ALPHA,
    [i.aEY]: e.ONE_MINUS_DST_COLOR,
    [i.Nt7]: e.ONE_MINUS_DST_ALPHA,
    [i.RrE]: e.CONSTANT_COLOR,
    [i.$Yl]: e.ONE_MINUS_CONSTANT_COLOR,
    [i.e0p]: e.CONSTANT_ALPHA,
    [i.ov9]: e.ONE_MINUS_CONSTANT_ALPHA
  };
  function j(t, n, r, a, s, o, l, c, h, d) {
    if (t !== i.XIg) {
      if (f === false) {
        O(e.BLEND);
        f = true;
      }
      if (t === i.bCz) {
        s = s || n;
        o = o || r;
        l = l || a;
        if (n !== g || s !== v) {
          e.blendEquationSeparate(V[n], V[s]);
          g = n;
          v = s;
        }
        if (r !== m || a !== A || o !== b || l !== y) {
          e.blendFuncSeparate(H[r], H[a], H[o], H[l]);
          m = r;
          A = a;
          b = o;
          y = l;
        }
        if (c.equals(w) === false || h !== x) {
          e.blendColor(c.r, c.g, c.b, h);
          w.copy(c);
          x = h;
        }
        p = t;
        S = false;
      } else if (t !== p || d !== S) {
        if (g !== i.gO9 || v !== i.gO9) {
          e.blendEquation(e.FUNC_ADD);
          g = i.gO9;
          v = i.gO9;
        }
        if (d) {
          switch (t) {
            case i.NTi:
              e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
              break;
            case i.EZo:
              e.blendFunc(e.ONE, e.ONE);
              break;
            case i.Kwu:
              e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
              break;
            case i.EdD:
              e.blendFuncSeparate(e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE);
              break;
            default:
              (0, i.z3S)("WebGLState: Invalid blending: ", t);
          }
        } else {
          switch (t) {
            case i.NTi:
              e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
              break;
            case i.EZo:
              e.blendFuncSeparate(e.SRC_ALPHA, e.ONE, e.ONE, e.ONE);
              break;
            case i.Kwu:
              (0, i.z3S)("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case i.EdD:
              (0, i.z3S)("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              (0, i.z3S)("WebGLState: Invalid blending: ", t);
          }
        }
        m = null;
        A = null;
        b = null;
        y = null;
        w.set(0, 0, 0);
        x = 0;
        p = t;
        S = d;
      }
    } else if (f === true) {
      W(e.BLEND);
      f = false;
    }
  }
  function K(t) {
    if (k !== t) {
      if (t) {
        e.frontFace(e.CW);
      } else {
        e.frontFace(e.CCW);
      }
      k = t;
    }
  }
  function q(t) {
    if (t !== i.WNZ) {
      O(e.CULL_FACE);
      if (t !== T) {
        if (t === i.Vb5) {
          e.cullFace(e.BACK);
        } else if (t === i.Jnc) {
          e.cullFace(e.FRONT);
        } else {
          e.cullFace(e.FRONT_AND_BACK);
        }
      }
    } else {
      W(e.CULL_FACE);
    }
    T = t;
  }
  function Q(t, n, i) {
    if (t) {
      O(e.POLYGON_OFFSET_FILL);
      if (M !== n || _ !== i) {
        e.polygonOffset(n, i);
        M = n;
        _ = i;
      }
    } else {
      W(e.POLYGON_OFFSET_FILL);
    }
  }
  return {
    buffers: {
      color: n,
      depth: r,
      stencil: a
    },
    enable: O,
    disable: W,
    bindFramebuffer: function (t, n) {
      return c[t] !== n && (e.bindFramebuffer(t, n), c[t] = n, t === e.DRAW_FRAMEBUFFER && (c[e.FRAMEBUFFER] = n), t === e.FRAMEBUFFER && (c[e.DRAW_FRAMEBUFFER] = n), true);
    },
    drawBuffers: function (t, n) {
      let i = d;
      let r = false;
      if (t) {
        i = h.get(n);
        if (i === undefined) {
          i = [];
          h.set(n, i);
        }
        const a = t.textures;
        if (i.length !== a.length || i[0] !== e.COLOR_ATTACHMENT0) {
          for (let t = 0, n = a.length; t < n; t++) {
            i[t] = e.COLOR_ATTACHMENT0 + t;
          }
          i.length = a.length;
          r = true;
        }
      } else if (i[0] !== e.BACK) {
        i[0] = e.BACK;
        r = true;
      }
      if (r) {
        e.drawBuffers(i);
      }
    },
    useProgram: function (t) {
      return u !== t && (e.useProgram(t), u = t, true);
    },
    setBlending: j,
    setMaterial: function (t, s) {
      if (t.side === i.$EB) {
        W(e.CULL_FACE);
      } else {
        O(e.CULL_FACE);
      }
      let o = t.side === i.hsX;
      if (s) {
        o = !o;
      }
      K(o);
      if (t.blending === i.NTi && t.transparent === false) {
        j(i.XIg);
      } else {
        j(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.blendColor, t.blendAlpha, t.premultipliedAlpha);
      }
      r.setFunc(t.depthFunc);
      r.setTest(t.depthTest);
      r.setMask(t.depthWrite);
      n.setMask(t.colorWrite);
      const l = t.stencilWrite;
      a.setTest(l);
      if (l) {
        a.setMask(t.stencilWriteMask);
        a.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask);
        a.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass);
      }
      Q(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits);
      if (t.alphaToCoverage === true) {
        O(e.SAMPLE_ALPHA_TO_COVERAGE);
      } else {
        W(e.SAMPLE_ALPHA_TO_COVERAGE);
      }
    },
    setFlipSided: K,
    setCullFace: q,
    setLineWidth: function (t) {
      if (t !== E) {
        if (R) {
          e.lineWidth(t);
        }
        E = t;
      }
    },
    setPolygonOffset: Q,
    setScissorTest: function (t) {
      if (t) {
        O(e.SCISSOR_TEST);
      } else {
        W(e.SCISSOR_TEST);
      }
    },
    activeTexture: function (t = e.TEXTURE0 + C - 1) {
      if (L !== t) {
        e.activeTexture(t);
        L = t;
      }
    },
    bindTexture: function (t, n, i = L === null ? e.TEXTURE0 + C - 1 : L) {
      let r = U[i];
      if (r === undefined) {
        r = {
          type: undefined,
          texture: undefined
        };
        U[i] = r;
      }
      if (r.type !== t || r.texture !== n) {
        if (L !== i) {
          e.activeTexture(i);
          L = i;
        }
        e.bindTexture(t, n || F[t]);
        r.type = t;
        r.texture = n;
      }
    },
    unbindTexture: function () {
      const t = U[L];
      if (t !== undefined && t.type !== undefined) {
        e.bindTexture(t.type, null);
        t.type = undefined;
        t.texture = undefined;
      }
    },
    compressedTexImage2D: function () {
      try {
        e.compressedTexImage2D(...arguments);
      } catch (e) {
        e("WebGLState:", e);
      }
    },
    compressedTexImage3D: function () {
      try {
        e.compressedTexImage3D(...arguments);
      } catch (e) {
        e("WebGLState:", e);
      }
    },
    texImage2D: function () {
      try {
        e.texImage2D(...arguments);
      } catch (e) {
        e("WebGLState:", e);
      }
    },
    texImage3D: function () {
      try {
        e.texImage3D(...arguments);
      } catch (e) {
        e("WebGLState:", e);
      }
    },
    updateUBOMapping: function (t, n) {
      let i = o.get(n);
      if (i === undefined) {
        i = new WeakMap();
        o.set(n, i);
      }
      let r = i.get(t);
      if (r === undefined) {
        r = e.getUniformBlockIndex(n, t.name);
        i.set(t, r);
      }
    },
    uniformBlockBinding: function (t, n) {
      const i = o.get(n).get(t);
      if (s.get(n) !== i) {
        e.uniformBlockBinding(n, i, t.__bindingPointIndex);
        s.set(n, i);
      }
    },
    texStorage2D: function () {
      try {
        e.texStorage2D(...arguments);
      } catch (e) {
        e("WebGLState:", e);
      }
    },
    texStorage3D: function () {
      try {
        e.texStorage3D(...arguments);
      } catch (e) {
        e("WebGLState:", e);
      }
    },
    texSubImage2D: function () {
      try {
        e.texSubImage2D(...arguments);
      } catch (e) {
        e("WebGLState:", e);
      }
    },
    texSubImage3D: function () {
      try {
        e.texSubImage3D(...arguments);
      } catch (e) {
        e("WebGLState:", e);
      }
    },
    compressedTexSubImage2D: function () {
      try {
        e.compressedTexSubImage2D(...arguments);
      } catch (e) {
        e("WebGLState:", e);
      }
    },
    compressedTexSubImage3D: function () {
      try {
        e.compressedTexSubImage3D(...arguments);
      } catch (e) {
        e("WebGLState:", e);
      }
    },
    scissor: function (t) {
      if (D.equals(t) === false) {
        e.scissor(t.x, t.y, t.z, t.w);
        D.copy(t);
      }
    },
    viewport: function (t) {
      if (B.equals(t) === false) {
        e.viewport(t.x, t.y, t.z, t.w);
        B.copy(t);
      }
    },
    reset: function () {
      e.disable(e.BLEND);
      e.disable(e.CULL_FACE);
      e.disable(e.DEPTH_TEST);
      e.disable(e.POLYGON_OFFSET_FILL);
      e.disable(e.SCISSOR_TEST);
      e.disable(e.STENCIL_TEST);
      e.disable(e.SAMPLE_ALPHA_TO_COVERAGE);
      e.blendEquation(e.FUNC_ADD);
      e.blendFunc(e.ONE, e.ZERO);
      e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO);
      e.blendColor(0, 0, 0, 0);
      e.colorMask(true, true, true, true);
      e.clearColor(0, 0, 0, 0);
      e.depthMask(true);
      e.depthFunc(e.LESS);
      r.setReversed(false);
      e.clearDepth(1);
      e.stencilMask(4294967295);
      e.stencilFunc(e.ALWAYS, 0, 4294967295);
      e.stencilOp(e.KEEP, e.KEEP, e.KEEP);
      e.clearStencil(0);
      e.cullFace(e.BACK);
      e.frontFace(e.CCW);
      e.polygonOffset(0, 0);
      e.activeTexture(e.TEXTURE0);
      e.bindFramebuffer(e.FRAMEBUFFER, null);
      e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null);
      e.bindFramebuffer(e.READ_FRAMEBUFFER, null);
      e.useProgram(null);
      e.lineWidth(1);
      e.scissor(0, 0, e.canvas.width, e.canvas.height);
      e.viewport(0, 0, e.canvas.width, e.canvas.height);
      l = {};
      L = null;
      U = {};
      c = {};
      h = new WeakMap();
      d = [];
      u = null;
      f = false;
      p = null;
      g = null;
      m = null;
      A = null;
      v = null;
      b = null;
      y = null;
      w = new i.Q1f(0, 0, 0);
      x = 0;
      S = false;
      k = null;
      T = null;
      E = null;
      M = null;
      _ = null;
      D.set(0, 0, e.canvas.width, e.canvas.height);
      B.set(0, 0, e.canvas.width, e.canvas.height);
      n.reset();
      r.reset();
      a.reset();
    }
  };
}
function Ct(e, t, n, r, a, s, o) {
  const l = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null;
  const c = typeof navigator != "undefined" && /OculusBrowser/g.test(navigator.userAgent);
  const h = new i.I9Y();
  const d = new WeakMap();
  let u;
  const f = new WeakMap();
  let p = false;
  try {
    p = typeof OffscreenCanvas != "undefined" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch (e) {}
  function g(e, t) {
    if (p) {
      return new OffscreenCanvas(e, t);
    } else {
      return (0, i.qq$)("canvas");
    }
  }
  function m(e, t, n) {
    let r = 1;
    const a = H(e);
    if (a.width > n || a.height > n) {
      r = n / Math.max(a.width, a.height);
    }
    if (r < 1) {
      if (typeof HTMLImageElement != "undefined" && e instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && e instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && e instanceof ImageBitmap || typeof VideoFrame != "undefined" && e instanceof VideoFrame) {
        const n = Math.floor(r * a.width);
        const s = Math.floor(r * a.height);
        if (u === undefined) {
          u = g(n, s);
        }
        const o = t ? g(n, s) : u;
        o.width = n;
        o.height = s;
        o.getContext("2d").drawImage(e, 0, 0, n, s);
        (0, i.R8M)("WebGLRenderer: Texture has been resized from (" + a.width + "x" + a.height + ") to (" + n + "x" + s + ").");
        return o;
      }
      if ("data" in e) {
        (0, i.R8M)("WebGLRenderer: Image in DataTexture is too big (" + a.width + "x" + a.height + ").");
      }
      return e;
    }
    return e;
  }
  function A(e) {
    return e.generateMipmaps;
  }
  function v(t) {
    e.generateMipmap(t);
  }
  function b(t) {
    if (t.isWebGLCubeRenderTarget) {
      return e.TEXTURE_CUBE_MAP;
    } else if (t.isWebGL3DRenderTarget) {
      return e.TEXTURE_3D;
    } else if (t.isWebGLArrayRenderTarget || t.isCompressedArrayTexture) {
      return e.TEXTURE_2D_ARRAY;
    } else {
      return e.TEXTURE_2D;
    }
  }
  function y(n, r, a, s, o = false) {
    if (n !== null) {
      if (e[n] !== undefined) {
        return e[n];
      }
      (0, i.R8M)("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
    }
    let l = r;
    if (r === e.RED) {
      if (a === e.FLOAT) {
        l = e.R32F;
      }
      if (a === e.HALF_FLOAT) {
        l = e.R16F;
      }
      if (a === e.UNSIGNED_BYTE) {
        l = e.R8;
      }
    }
    if (r === e.RED_INTEGER) {
      if (a === e.UNSIGNED_BYTE) {
        l = e.R8UI;
      }
      if (a === e.UNSIGNED_SHORT) {
        l = e.R16UI;
      }
      if (a === e.UNSIGNED_INT) {
        l = e.R32UI;
      }
      if (a === e.BYTE) {
        l = e.R8I;
      }
      if (a === e.SHORT) {
        l = e.R16I;
      }
      if (a === e.INT) {
        l = e.R32I;
      }
    }
    if (r === e.RG) {
      if (a === e.FLOAT) {
        l = e.RG32F;
      }
      if (a === e.HALF_FLOAT) {
        l = e.RG16F;
      }
      if (a === e.UNSIGNED_BYTE) {
        l = e.RG8;
      }
    }
    if (r === e.RG_INTEGER) {
      if (a === e.UNSIGNED_BYTE) {
        l = e.RG8UI;
      }
      if (a === e.UNSIGNED_SHORT) {
        l = e.RG16UI;
      }
      if (a === e.UNSIGNED_INT) {
        l = e.RG32UI;
      }
      if (a === e.BYTE) {
        l = e.RG8I;
      }
      if (a === e.SHORT) {
        l = e.RG16I;
      }
      if (a === e.INT) {
        l = e.RG32I;
      }
    }
    if (r === e.RGB_INTEGER) {
      if (a === e.UNSIGNED_BYTE) {
        l = e.RGB8UI;
      }
      if (a === e.UNSIGNED_SHORT) {
        l = e.RGB16UI;
      }
      if (a === e.UNSIGNED_INT) {
        l = e.RGB32UI;
      }
      if (a === e.BYTE) {
        l = e.RGB8I;
      }
      if (a === e.SHORT) {
        l = e.RGB16I;
      }
      if (a === e.INT) {
        l = e.RGB32I;
      }
    }
    if (r === e.RGBA_INTEGER) {
      if (a === e.UNSIGNED_BYTE) {
        l = e.RGBA8UI;
      }
      if (a === e.UNSIGNED_SHORT) {
        l = e.RGBA16UI;
      }
      if (a === e.UNSIGNED_INT) {
        l = e.RGBA32UI;
      }
      if (a === e.BYTE) {
        l = e.RGBA8I;
      }
      if (a === e.SHORT) {
        l = e.RGBA16I;
      }
      if (a === e.INT) {
        l = e.RGBA32I;
      }
    }
    if (r === e.RGB) {
      if (a === e.UNSIGNED_INT_5_9_9_9_REV) {
        l = e.RGB9_E5;
      }
      if (a === e.UNSIGNED_INT_10F_11F_11F_REV) {
        l = e.R11F_G11F_B10F;
      }
    }
    if (r === e.RGBA) {
      const t = o ? i.VxR : i.ppV.getTransfer(s);
      if (a === e.FLOAT) {
        l = e.RGBA32F;
      }
      if (a === e.HALF_FLOAT) {
        l = e.RGBA16F;
      }
      if (a === e.UNSIGNED_BYTE) {
        l = t === i.KLL ? e.SRGB8_ALPHA8 : e.RGBA8;
      }
      if (a === e.UNSIGNED_SHORT_4_4_4_4) {
        l = e.RGBA4;
      }
      if (a === e.UNSIGNED_SHORT_5_5_5_1) {
        l = e.RGB5_A1;
      }
    }
    if (l === e.R16F || l === e.R32F || l === e.RG16F || l === e.RG32F || l === e.RGBA16F || l === e.RGBA32F) {
      t.get("EXT_color_buffer_float");
    }
    return l;
  }
  function w(t, n) {
    let r;
    if (t) {
      if (n === null || n === i.bkx || n === i.V3x) {
        r = e.DEPTH24_STENCIL8;
      } else if (n === i.RQf) {
        r = e.DEPTH32F_STENCIL8;
      } else if (n === i.cHt) {
        r = e.DEPTH24_STENCIL8;
        (0, i.R8M)("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.");
      }
    } else if (n === null || n === i.bkx || n === i.V3x) {
      r = e.DEPTH_COMPONENT24;
    } else if (n === i.RQf) {
      r = e.DEPTH_COMPONENT32F;
    } else if (n === i.cHt) {
      r = e.DEPTH_COMPONENT16;
    }
    return r;
  }
  function x(e, t) {
    if (A(e) === true || e.isFramebufferTexture && e.minFilter !== i.hxR && e.minFilter !== i.k6q) {
      return Math.log2(Math.max(t.width, t.height)) + 1;
    } else if (e.mipmaps !== undefined && e.mipmaps.length > 0) {
      return e.mipmaps.length;
    } else if (e.isCompressedTexture && Array.isArray(e.image)) {
      return t.mipmaps.length;
    } else {
      return 1;
    }
  }
  function S(e) {
    const t = e.target;
    t.removeEventListener("dispose", S);
    (function (e) {
      const t = r.get(e);
      if (t.__webglInit === undefined) {
        return;
      }
      const n = e.source;
      const i = f.get(n);
      if (i) {
        const r = i[t.__cacheKey];
        r.usedTimes--;
        if (r.usedTimes === 0) {
          T(e);
        }
        if (Object.keys(i).length === 0) {
          f.delete(n);
        }
      }
      r.remove(e);
    })(t);
    if (t.isVideoTexture) {
      d.delete(t);
    }
  }
  function k(t) {
    const n = t.target;
    n.removeEventListener("dispose", k);
    (function (t) {
      const n = r.get(t);
      if (t.depthTexture) {
        t.depthTexture.dispose();
        r.remove(t.depthTexture);
      }
      if (t.isWebGLCubeRenderTarget) {
        for (let t = 0; t < 6; t++) {
          if (Array.isArray(n.__webglFramebuffer[t])) {
            for (let i = 0; i < n.__webglFramebuffer[t].length; i++) {
              e.deleteFramebuffer(n.__webglFramebuffer[t][i]);
            }
          } else {
            e.deleteFramebuffer(n.__webglFramebuffer[t]);
          }
          if (n.__webglDepthbuffer) {
            e.deleteRenderbuffer(n.__webglDepthbuffer[t]);
          }
        }
      } else {
        if (Array.isArray(n.__webglFramebuffer)) {
          for (let t = 0; t < n.__webglFramebuffer.length; t++) {
            e.deleteFramebuffer(n.__webglFramebuffer[t]);
          }
        } else {
          e.deleteFramebuffer(n.__webglFramebuffer);
        }
        if (n.__webglDepthbuffer) {
          e.deleteRenderbuffer(n.__webglDepthbuffer);
        }
        if (n.__webglMultisampledFramebuffer) {
          e.deleteFramebuffer(n.__webglMultisampledFramebuffer);
        }
        if (n.__webglColorRenderbuffer) {
          for (let t = 0; t < n.__webglColorRenderbuffer.length; t++) {
            if (n.__webglColorRenderbuffer[t]) {
              e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);
            }
          }
        }
        if (n.__webglDepthRenderbuffer) {
          e.deleteRenderbuffer(n.__webglDepthRenderbuffer);
        }
      }
      const i = t.textures;
      for (let t = 0, n = i.length; t < n; t++) {
        const n = r.get(i[t]);
        if (n.__webglTexture) {
          e.deleteTexture(n.__webglTexture);
          o.memory.textures--;
        }
        r.remove(i[t]);
      }
      r.remove(t);
    })(n);
  }
  function T(t) {
    const n = r.get(t);
    e.deleteTexture(n.__webglTexture);
    const i = t.source;
    delete f.get(i)[n.__cacheKey];
    o.memory.textures--;
  }
  let E = 0;
  function M(t, a) {
    const s = r.get(t);
    if (t.isVideoTexture) {
      (function (e) {
        const t = o.render.frame;
        if (d.get(e) !== t) {
          d.set(e, t);
          e.update();
        }
      })(t);
    }
    if (t.isRenderTargetTexture === false && t.isExternalTexture !== true && t.version > 0 && s.__version !== t.version) {
      const e = t.image;
      if (e === null) {
        (0, i.R8M)("WebGLRenderer: Texture marked for update but no image data found.");
      } else {
        if (e.complete !== false) {
          U(s, t, a);
          return;
        }
        (0, i.R8M)("WebGLRenderer: Texture marked for update but image is incomplete");
      }
    } else if (t.isExternalTexture) {
      s.__webglTexture = t.sourceTexture ? t.sourceTexture : null;
    }
    n.bindTexture(e.TEXTURE_2D, s.__webglTexture, e.TEXTURE0 + a);
  }
  const _ = {
    [i.GJx]: e.REPEAT,
    [i.ghU]: e.CLAMP_TO_EDGE,
    [i.kTW]: e.MIRRORED_REPEAT
  };
  const C = {
    [i.hxR]: e.NEAREST,
    [i.pHI]: e.NEAREST_MIPMAP_NEAREST,
    [i.Cfg]: e.NEAREST_MIPMAP_LINEAR,
    [i.k6q]: e.LINEAR,
    [i.kRr]: e.LINEAR_MIPMAP_NEAREST,
    [i.$_I]: e.LINEAR_MIPMAP_LINEAR
  };
  const R = {
    [i.amv]: e.NEVER,
    [i.FFZ]: e.ALWAYS,
    [i.vim]: e.LESS,
    [i.TiK]: e.LEQUAL,
    [i.kO0]: e.EQUAL,
    [i.gWB]: e.GEQUAL,
    [i.eoi]: e.GREATER,
    [i.jzd]: e.NOTEQUAL
  };
  function P(n, s) {
    if (s.type === i.RQf && t.has("OES_texture_float_linear") === false && (s.magFilter === i.k6q || s.magFilter === i.kRr || s.magFilter === i.Cfg || s.magFilter === i.$_I || s.minFilter === i.k6q || s.minFilter === i.kRr || s.minFilter === i.Cfg || s.minFilter === i.$_I)) {
      (0, i.R8M)("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");
    }
    e.texParameteri(n, e.TEXTURE_WRAP_S, _[s.wrapS]);
    e.texParameteri(n, e.TEXTURE_WRAP_T, _[s.wrapT]);
    if (n === e.TEXTURE_3D || n === e.TEXTURE_2D_ARRAY) {
      e.texParameteri(n, e.TEXTURE_WRAP_R, _[s.wrapR]);
    }
    e.texParameteri(n, e.TEXTURE_MAG_FILTER, C[s.magFilter]);
    e.texParameteri(n, e.TEXTURE_MIN_FILTER, C[s.minFilter]);
    if (s.compareFunction) {
      e.texParameteri(n, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE);
      e.texParameteri(n, e.TEXTURE_COMPARE_FUNC, R[s.compareFunction]);
    }
    if (t.has("EXT_texture_filter_anisotropic") === true) {
      if (s.magFilter === i.hxR) {
        return;
      }
      if (s.minFilter !== i.Cfg && s.minFilter !== i.$_I) {
        return;
      }
      if (s.type === i.RQf && t.has("OES_texture_float_linear") === false) {
        return;
      }
      if (s.anisotropy > 1 || r.get(s).__currentAnisotropy) {
        const i = t.get("EXT_texture_filter_anisotropic");
        e.texParameterf(n, i.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, a.getMaxAnisotropy()));
        r.get(s).__currentAnisotropy = s.anisotropy;
      }
    }
  }
  function I(t, n) {
    let i = false;
    if (t.__webglInit === undefined) {
      t.__webglInit = true;
      n.addEventListener("dispose", S);
    }
    const r = n.source;
    let a = f.get(r);
    if (a === undefined) {
      a = {};
      f.set(r, a);
    }
    const s = function (e) {
      const t = [];
      t.push(e.wrapS);
      t.push(e.wrapT);
      t.push(e.wrapR || 0);
      t.push(e.magFilter);
      t.push(e.minFilter);
      t.push(e.anisotropy);
      t.push(e.internalFormat);
      t.push(e.format);
      t.push(e.type);
      t.push(e.generateMipmaps);
      t.push(e.premultiplyAlpha);
      t.push(e.flipY);
      t.push(e.unpackAlignment);
      t.push(e.colorSpace);
      return t.join();
    }(n);
    if (s !== t.__cacheKey) {
      if (a[s] === undefined) {
        a[s] = {
          texture: e.createTexture(),
          usedTimes: 0
        };
        o.memory.textures++;
        i = true;
      }
      a[s].usedTimes++;
      const r = a[t.__cacheKey];
      if (r !== undefined) {
        a[t.__cacheKey].usedTimes--;
        if (r.usedTimes === 0) {
          T(n);
        }
      }
      t.__cacheKey = s;
      t.__webglTexture = a[s].texture;
    }
    return i;
  }
  function L(e, t, n) {
    return Math.floor(Math.floor(e / n) / t);
  }
  function U(t, o, l) {
    let c = e.TEXTURE_2D;
    if (o.isDataArrayTexture || o.isCompressedArrayTexture) {
      c = e.TEXTURE_2D_ARRAY;
    }
    if (o.isData3DTexture) {
      c = e.TEXTURE_3D;
    }
    const h = I(t, o);
    const d = o.source;
    n.bindTexture(c, t.__webglTexture, e.TEXTURE0 + l);
    const u = r.get(d);
    if (d.version !== u.__version || h === true) {
      n.activeTexture(e.TEXTURE0 + l);
      const t = i.ppV.getPrimaries(i.ppV.workingColorSpace);
      const r = o.colorSpace === i.jf0 ? null : i.ppV.getPrimaries(o.colorSpace);
      const f = o.colorSpace === i.jf0 || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
      e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, o.flipY);
      e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, o.premultiplyAlpha);
      e.pixelStorei(e.UNPACK_ALIGNMENT, o.unpackAlignment);
      e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, f);
      let p = m(o.image, false, a.maxTextureSize);
      p = V(o, p);
      const g = s.convert(o.format, o.colorSpace);
      const b = s.convert(o.type);
      let S;
      let k = y(o.internalFormat, g, b, o.colorSpace, o.isVideoTexture);
      P(c, o);
      const T = o.mipmaps;
      const E = o.isVideoTexture !== true;
      const M = u.__version === undefined || h === true;
      const _ = d.dataReady;
      const C = x(o, p);
      if (o.isDepthTexture) {
        k = w(o.format === i.dcC, o.type);
        if (M) {
          if (E) {
            n.texStorage2D(e.TEXTURE_2D, 1, k, p.width, p.height);
          } else {
            n.texImage2D(e.TEXTURE_2D, 0, k, p.width, p.height, 0, g, b, null);
          }
        }
      } else if (o.isDataTexture) {
        if (T.length > 0) {
          if (E && M) {
            n.texStorage2D(e.TEXTURE_2D, C, k, T[0].width, T[0].height);
          }
          for (let t = 0, i = T.length; t < i; t++) {
            S = T[t];
            if (E) {
              if (_) {
                n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, S.width, S.height, g, b, S.data);
              }
            } else {
              n.texImage2D(e.TEXTURE_2D, t, k, S.width, S.height, 0, g, b, S.data);
            }
          }
          o.generateMipmaps = false;
        } else if (E) {
          if (M) {
            n.texStorage2D(e.TEXTURE_2D, C, k, p.width, p.height);
          }
          if (_) {
            (function (t, i, r, a) {
              const s = t.updateRanges;
              if (s.length === 0) {
                n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, i.width, i.height, r, a, i.data);
              } else {
                s.sort((e, t) => e.start - t.start);
                let o = 0;
                for (let e = 1; e < s.length; e++) {
                  const t = s[o];
                  const n = s[e];
                  const r = t.start + t.count;
                  const a = L(n.start, i.width, 4);
                  const l = L(t.start, i.width, 4);
                  if (n.start <= r + 1 && a === l && L(n.start + n.count - 1, i.width, 4) === a) {
                    t.count = Math.max(t.count, n.start + n.count - t.start);
                  } else {
                    ++o;
                    s[o] = n;
                  }
                }
                s.length = o + 1;
                const l = e.getParameter(e.UNPACK_ROW_LENGTH);
                const c = e.getParameter(e.UNPACK_SKIP_PIXELS);
                const h = e.getParameter(e.UNPACK_SKIP_ROWS);
                e.pixelStorei(e.UNPACK_ROW_LENGTH, i.width);
                for (let t = 0, o = s.length; t < o; t++) {
                  const o = s[t];
                  const l = Math.floor(o.start / 4);
                  const c = Math.ceil(o.count / 4);
                  const h = l % i.width;
                  const d = Math.floor(l / i.width);
                  const u = c;
                  const f = 1;
                  e.pixelStorei(e.UNPACK_SKIP_PIXELS, h);
                  e.pixelStorei(e.UNPACK_SKIP_ROWS, d);
                  n.texSubImage2D(e.TEXTURE_2D, 0, h, d, u, f, r, a, i.data);
                }
                t.clearUpdateRanges();
                e.pixelStorei(e.UNPACK_ROW_LENGTH, l);
                e.pixelStorei(e.UNPACK_SKIP_PIXELS, c);
                e.pixelStorei(e.UNPACK_SKIP_ROWS, h);
              }
            })(o, p, g, b);
          }
        } else {
          n.texImage2D(e.TEXTURE_2D, 0, k, p.width, p.height, 0, g, b, p.data);
        }
      } else if (o.isCompressedTexture) {
        if (o.isCompressedArrayTexture) {
          if (E && M) {
            n.texStorage3D(e.TEXTURE_2D_ARRAY, C, k, T[0].width, T[0].height, p.depth);
          }
          for (let t = 0, r = T.length; t < r; t++) {
            S = T[t];
            if (o.format !== i.GWd) {
              if (g !== null) {
                if (E) {
                  if (_) {
                    if (o.layerUpdates.size > 0) {
                      const r = (0, i.Nex)(S.width, S.height, o.format, o.type);
                      for (const i of o.layerUpdates) {
                        const a = S.data.subarray(i * r / S.data.BYTES_PER_ELEMENT, (i + 1) * r / S.data.BYTES_PER_ELEMENT);
                        n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, t, 0, 0, i, S.width, S.height, 1, g, a);
                      }
                      o.clearLayerUpdates();
                    } else {
                      n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, t, 0, 0, 0, S.width, S.height, p.depth, g, S.data);
                    }
                  }
                } else {
                  n.compressedTexImage3D(e.TEXTURE_2D_ARRAY, t, k, S.width, S.height, p.depth, 0, S.data, 0, 0);
                }
              } else {
                (0, i.R8M)("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
              }
            } else if (E) {
              if (_) {
                n.texSubImage3D(e.TEXTURE_2D_ARRAY, t, 0, 0, 0, S.width, S.height, p.depth, g, b, S.data);
              }
            } else {
              n.texImage3D(e.TEXTURE_2D_ARRAY, t, k, S.width, S.height, p.depth, 0, g, b, S.data);
            }
          }
        } else {
          if (E && M) {
            n.texStorage2D(e.TEXTURE_2D, C, k, T[0].width, T[0].height);
          }
          for (let t = 0, r = T.length; t < r; t++) {
            S = T[t];
            if (o.format !== i.GWd) {
              if (g !== null) {
                if (E) {
                  if (_) {
                    n.compressedTexSubImage2D(e.TEXTURE_2D, t, 0, 0, S.width, S.height, g, S.data);
                  }
                } else {
                  n.compressedTexImage2D(e.TEXTURE_2D, t, k, S.width, S.height, 0, S.data);
                }
              } else {
                (0, i.R8M)("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
              }
            } else if (E) {
              if (_) {
                n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, S.width, S.height, g, b, S.data);
              }
            } else {
              n.texImage2D(e.TEXTURE_2D, t, k, S.width, S.height, 0, g, b, S.data);
            }
          }
        }
      } else if (o.isDataArrayTexture) {
        if (E) {
          if (M) {
            n.texStorage3D(e.TEXTURE_2D_ARRAY, C, k, p.width, p.height, p.depth);
          }
          if (_) {
            if (o.layerUpdates.size > 0) {
              const t = (0, i.Nex)(p.width, p.height, o.format, o.type);
              for (const i of o.layerUpdates) {
                const r = p.data.subarray(i * t / p.data.BYTES_PER_ELEMENT, (i + 1) * t / p.data.BYTES_PER_ELEMENT);
                n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, i, p.width, p.height, 1, g, b, r);
              }
              o.clearLayerUpdates();
            } else {
              n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, 0, p.width, p.height, p.depth, g, b, p.data);
            }
          }
        } else {
          n.texImage3D(e.TEXTURE_2D_ARRAY, 0, k, p.width, p.height, p.depth, 0, g, b, p.data);
        }
      } else if (o.isData3DTexture) {
        if (E) {
          if (M) {
            n.texStorage3D(e.TEXTURE_3D, C, k, p.width, p.height, p.depth);
          }
          if (_) {
            n.texSubImage3D(e.TEXTURE_3D, 0, 0, 0, 0, p.width, p.height, p.depth, g, b, p.data);
          }
        } else {
          n.texImage3D(e.TEXTURE_3D, 0, k, p.width, p.height, p.depth, 0, g, b, p.data);
        }
      } else if (o.isFramebufferTexture) {
        if (M) {
          if (E) {
            n.texStorage2D(e.TEXTURE_2D, C, k, p.width, p.height);
          } else {
            let t = p.width;
            let i = p.height;
            for (let r = 0; r < C; r++) {
              n.texImage2D(e.TEXTURE_2D, r, k, t, i, 0, g, b, null);
              t >>= 1;
              i >>= 1;
            }
          }
        }
      } else if (T.length > 0) {
        if (E && M) {
          const t = H(T[0]);
          n.texStorage2D(e.TEXTURE_2D, C, k, t.width, t.height);
        }
        for (let t = 0, i = T.length; t < i; t++) {
          S = T[t];
          if (E) {
            if (_) {
              n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, g, b, S);
            }
          } else {
            n.texImage2D(e.TEXTURE_2D, t, k, g, b, S);
          }
        }
        o.generateMipmaps = false;
      } else if (E) {
        if (M) {
          const t = H(p);
          n.texStorage2D(e.TEXTURE_2D, C, k, t.width, t.height);
        }
        if (_) {
          n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, g, b, p);
        }
      } else {
        n.texImage2D(e.TEXTURE_2D, 0, k, g, b, p);
      }
      if (A(o)) {
        v(c);
      }
      u.__version = d.version;
      if (o.onUpdate) {
        o.onUpdate(o);
      }
    }
    t.__version = o.version;
  }
  function N(t, i, a, o, c, h) {
    const d = s.convert(a.format, a.colorSpace);
    const u = s.convert(a.type);
    const f = y(a.internalFormat, d, u, a.colorSpace);
    const p = r.get(i);
    const g = r.get(a);
    g.__renderTarget = i;
    if (!p.__hasExternalTextures) {
      const t = Math.max(1, i.width >> h);
      const r = Math.max(1, i.height >> h);
      if (c === e.TEXTURE_3D || c === e.TEXTURE_2D_ARRAY) {
        n.texImage3D(c, h, f, t, r, i.depth, 0, d, u, null);
      } else {
        n.texImage2D(c, h, f, t, r, 0, d, u, null);
      }
    }
    n.bindFramebuffer(e.FRAMEBUFFER, t);
    if (W(i)) {
      l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, o, c, g.__webglTexture, 0, O(i));
    } else if (c === e.TEXTURE_2D || c >= e.TEXTURE_CUBE_MAP_POSITIVE_X && c <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z) {
      e.framebufferTexture2D(e.FRAMEBUFFER, o, c, g.__webglTexture, h);
    }
    n.bindFramebuffer(e.FRAMEBUFFER, null);
  }
  function z(t, n, i) {
    e.bindRenderbuffer(e.RENDERBUFFER, t);
    if (n.depthBuffer) {
      const r = n.depthTexture;
      const a = r && r.isDepthTexture ? r.type : null;
      const s = w(n.stencilBuffer, a);
      const o = n.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
      const c = O(n);
      if (W(n)) {
        l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, c, s, n.width, n.height);
      } else if (i) {
        e.renderbufferStorageMultisample(e.RENDERBUFFER, c, s, n.width, n.height);
      } else {
        e.renderbufferStorage(e.RENDERBUFFER, s, n.width, n.height);
      }
      e.framebufferRenderbuffer(e.FRAMEBUFFER, o, e.RENDERBUFFER, t);
    } else {
      const t = n.textures;
      for (let r = 0; r < t.length; r++) {
        const a = t[r];
        const o = s.convert(a.format, a.colorSpace);
        const c = s.convert(a.type);
        const h = y(a.internalFormat, o, c, a.colorSpace);
        const d = O(n);
        if (i && W(n) === false) {
          e.renderbufferStorageMultisample(e.RENDERBUFFER, d, h, n.width, n.height);
        } else if (W(n)) {
          l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, d, h, n.width, n.height);
        } else {
          e.renderbufferStorage(e.RENDERBUFFER, h, n.width, n.height);
        }
      }
    }
    e.bindRenderbuffer(e.RENDERBUFFER, null);
  }
  function D(t, a) {
    if (a && a.isWebGLCubeRenderTarget) {
      throw new Error("Depth Texture with cube render targets is not supported");
    }
    n.bindFramebuffer(e.FRAMEBUFFER, t);
    if (!a.depthTexture || !a.depthTexture.isDepthTexture) {
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    }
    const s = r.get(a.depthTexture);
    s.__renderTarget = a;
    if (!s.__webglTexture || a.depthTexture.image.width !== a.width || a.depthTexture.image.height !== a.height) {
      a.depthTexture.image.width = a.width;
      a.depthTexture.image.height = a.height;
      a.depthTexture.needsUpdate = true;
    }
    M(a.depthTexture, 0);
    const o = s.__webglTexture;
    const c = O(a);
    if (a.depthTexture.format === i.zdS) {
      if (W(a)) {
        l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, o, 0, c);
      } else {
        e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, o, 0);
      }
    } else {
      if (a.depthTexture.format !== i.dcC) {
        throw new Error("Unknown depthTexture format");
      }
      if (W(a)) {
        l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.TEXTURE_2D, o, 0, c);
      } else {
        e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.TEXTURE_2D, o, 0);
      }
    }
  }
  function B(t) {
    const i = r.get(t);
    const a = t.isWebGLCubeRenderTarget === true;
    if (i.__boundDepthTexture !== t.depthTexture) {
      const e = t.depthTexture;
      if (i.__depthDisposeCallback) {
        i.__depthDisposeCallback();
      }
      if (e) {
        const t = () => {
          delete i.__boundDepthTexture;
          delete i.__depthDisposeCallback;
          e.removeEventListener("dispose", t);
        };
        e.addEventListener("dispose", t);
        i.__depthDisposeCallback = t;
      }
      i.__boundDepthTexture = e;
    }
    if (t.depthTexture && !i.__autoAllocateDepthBuffer) {
      if (a) {
        throw new Error("target.depthTexture not supported in Cube render targets");
      }
      const e = t.texture.mipmaps;
      if (e && e.length > 0) {
        D(i.__webglFramebuffer[0], t);
      } else {
        D(i.__webglFramebuffer, t);
      }
    } else if (a) {
      i.__webglDepthbuffer = [];
      for (let r = 0; r < 6; r++) {
        n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[r]);
        if (i.__webglDepthbuffer[r] === undefined) {
          i.__webglDepthbuffer[r] = e.createRenderbuffer();
          z(i.__webglDepthbuffer[r], t, false);
        } else {
          const n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
          const a = i.__webglDepthbuffer[r];
          e.bindRenderbuffer(e.RENDERBUFFER, a);
          e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, a);
        }
      }
    } else {
      const r = t.texture.mipmaps;
      if (r && r.length > 0) {
        n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[0]);
      } else {
        n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer);
      }
      if (i.__webglDepthbuffer === undefined) {
        i.__webglDepthbuffer = e.createRenderbuffer();
        z(i.__webglDepthbuffer, t, false);
      } else {
        const n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
        const r = i.__webglDepthbuffer;
        e.bindRenderbuffer(e.RENDERBUFFER, r);
        e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, r);
      }
    }
    n.bindFramebuffer(e.FRAMEBUFFER, null);
  }
  const G = [];
  const F = [];
  function O(e) {
    return Math.min(a.maxSamples, e.samples);
  }
  function W(e) {
    const n = r.get(e);
    return e.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === true && n.__useRenderToTexture !== false;
  }
  function V(e, t) {
    const n = e.colorSpace;
    const r = e.format;
    const a = e.type;
    if (e.isCompressedTexture !== true && e.isVideoTexture !== true) {
      if (n !== i.Zr2 && n !== i.jf0) {
        if (i.ppV.getTransfer(n) === i.KLL) {
          if (r !== i.GWd || a !== i.OUM) {
            (0, i.R8M)("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.");
          }
        } else {
          (0, i.z3S)("WebGLTextures: Unsupported texture color space:", n);
        }
      }
    }
    return t;
  }
  function H(e) {
    if (typeof HTMLImageElement != "undefined" && e instanceof HTMLImageElement) {
      h.width = e.naturalWidth || e.width;
      h.height = e.naturalHeight || e.height;
    } else if (typeof VideoFrame != "undefined" && e instanceof VideoFrame) {
      h.width = e.displayWidth;
      h.height = e.displayHeight;
    } else {
      h.width = e.width;
      h.height = e.height;
    }
    return h;
  }
  this.allocateTextureUnit = function () {
    const e = E;
    if (e >= a.maxTextures) {
      (0, i.R8M)("WebGLTextures: Trying to use " + e + " texture units while this GPU supports only " + a.maxTextures);
    }
    E += 1;
    return e;
  };
  this.resetTextureUnits = function () {
    E = 0;
  };
  this.setTexture2D = M;
  this.setTexture2DArray = function (t, i) {
    const a = r.get(t);
    if (t.isRenderTargetTexture === false && t.version > 0 && a.__version !== t.version) {
      U(a, t, i);
    } else {
      if (t.isExternalTexture) {
        a.__webglTexture = t.sourceTexture ? t.sourceTexture : null;
      }
      n.bindTexture(e.TEXTURE_2D_ARRAY, a.__webglTexture, e.TEXTURE0 + i);
    }
  };
  this.setTexture3D = function (t, i) {
    const a = r.get(t);
    if (t.isRenderTargetTexture === false && t.version > 0 && a.__version !== t.version) {
      U(a, t, i);
    } else {
      n.bindTexture(e.TEXTURE_3D, a.__webglTexture, e.TEXTURE0 + i);
    }
  };
  this.setTextureCube = function (t, o) {
    const l = r.get(t);
    if (t.version > 0 && l.__version !== t.version) {
      (function (t, o, l) {
        if (o.image.length !== 6) {
          return;
        }
        const c = I(t, o);
        const h = o.source;
        n.bindTexture(e.TEXTURE_CUBE_MAP, t.__webglTexture, e.TEXTURE0 + l);
        const d = r.get(h);
        if (h.version !== d.__version || c === true) {
          n.activeTexture(e.TEXTURE0 + l);
          const t = i.ppV.getPrimaries(i.ppV.workingColorSpace);
          const r = o.colorSpace === i.jf0 ? null : i.ppV.getPrimaries(o.colorSpace);
          const u = o.colorSpace === i.jf0 || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
          e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, o.flipY);
          e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, o.premultiplyAlpha);
          e.pixelStorei(e.UNPACK_ALIGNMENT, o.unpackAlignment);
          e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, u);
          const f = o.isCompressedTexture || o.image[0].isCompressedTexture;
          const p = o.image[0] && o.image[0].isDataTexture;
          const g = [];
          for (let e = 0; e < 6; e++) {
            g[e] = f || p ? p ? o.image[e].image : o.image[e] : m(o.image[e], true, a.maxCubemapSize);
            g[e] = V(o, g[e]);
          }
          const b = g[0];
          const w = s.convert(o.format, o.colorSpace);
          const S = s.convert(o.type);
          const k = y(o.internalFormat, w, S, o.colorSpace);
          const T = o.isVideoTexture !== true;
          const E = d.__version === undefined || c === true;
          const M = h.dataReady;
          let _;
          let C = x(o, b);
          P(e.TEXTURE_CUBE_MAP, o);
          if (f) {
            if (T && E) {
              n.texStorage2D(e.TEXTURE_CUBE_MAP, C, k, b.width, b.height);
            }
            for (let t = 0; t < 6; t++) {
              _ = g[t].mipmaps;
              for (let r = 0; r < _.length; r++) {
                const a = _[r];
                if (o.format !== i.GWd) {
                  if (w !== null) {
                    if (T) {
                      if (M) {
                        n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, a.width, a.height, w, a.data);
                      }
                    } else {
                      n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, k, a.width, a.height, 0, a.data);
                    }
                  } else {
                    (0, i.R8M)("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");
                  }
                } else if (T) {
                  if (M) {
                    n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, a.width, a.height, w, S, a.data);
                  }
                } else {
                  n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, k, a.width, a.height, 0, w, S, a.data);
                }
              }
            }
          } else {
            _ = o.mipmaps;
            if (T && E) {
              if (_.length > 0) {
                C++;
              }
              const t = H(g[0]);
              n.texStorage2D(e.TEXTURE_CUBE_MAP, C, k, t.width, t.height);
            }
            for (let t = 0; t < 6; t++) {
              if (p) {
                if (T) {
                  if (M) {
                    n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, g[t].width, g[t].height, w, S, g[t].data);
                  }
                } else {
                  n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, k, g[t].width, g[t].height, 0, w, S, g[t].data);
                }
                for (let i = 0; i < _.length; i++) {
                  const r = _[i].image[t].image;
                  if (T) {
                    if (M) {
                      n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, i + 1, 0, 0, r.width, r.height, w, S, r.data);
                    }
                  } else {
                    n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, i + 1, k, r.width, r.height, 0, w, S, r.data);
                  }
                }
              } else {
                if (T) {
                  if (M) {
                    n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, w, S, g[t]);
                  }
                } else {
                  n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, k, w, S, g[t]);
                }
                for (let i = 0; i < _.length; i++) {
                  const r = _[i];
                  if (T) {
                    if (M) {
                      n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, i + 1, 0, 0, w, S, r.image[t]);
                    }
                  } else {
                    n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, i + 1, k, w, S, r.image[t]);
                  }
                }
              }
            }
          }
          if (A(o)) {
            v(e.TEXTURE_CUBE_MAP);
          }
          d.__version = h.version;
          if (o.onUpdate) {
            o.onUpdate(o);
          }
        }
        t.__version = o.version;
      })(l, t, o);
    } else {
      n.bindTexture(e.TEXTURE_CUBE_MAP, l.__webglTexture, e.TEXTURE0 + o);
    }
  };
  this.rebindTextures = function (t, n, i) {
    const a = r.get(t);
    if (n !== undefined) {
      N(a.__webglFramebuffer, t, t.texture, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, 0);
    }
    if (i !== undefined) {
      B(t);
    }
  };
  this.setupRenderTarget = function (t) {
    const i = t.texture;
    const a = r.get(t);
    const l = r.get(i);
    t.addEventListener("dispose", k);
    const c = t.textures;
    const h = t.isWebGLCubeRenderTarget === true;
    const d = c.length > 1;
    if (!d) {
      if (l.__webglTexture === undefined) {
        l.__webglTexture = e.createTexture();
      }
      l.__version = i.version;
      o.memory.textures++;
    }
    if (h) {
      a.__webglFramebuffer = [];
      for (let t = 0; t < 6; t++) {
        if (i.mipmaps && i.mipmaps.length > 0) {
          a.__webglFramebuffer[t] = [];
          for (let n = 0; n < i.mipmaps.length; n++) {
            a.__webglFramebuffer[t][n] = e.createFramebuffer();
          }
        } else {
          a.__webglFramebuffer[t] = e.createFramebuffer();
        }
      }
    } else {
      if (i.mipmaps && i.mipmaps.length > 0) {
        a.__webglFramebuffer = [];
        for (let t = 0; t < i.mipmaps.length; t++) {
          a.__webglFramebuffer[t] = e.createFramebuffer();
        }
      } else {
        a.__webglFramebuffer = e.createFramebuffer();
      }
      if (d) {
        for (let t = 0, n = c.length; t < n; t++) {
          const n = r.get(c[t]);
          if (n.__webglTexture === undefined) {
            n.__webglTexture = e.createTexture();
            o.memory.textures++;
          }
        }
      }
      if (t.samples > 0 && W(t) === false) {
        a.__webglMultisampledFramebuffer = e.createFramebuffer();
        a.__webglColorRenderbuffer = [];
        n.bindFramebuffer(e.FRAMEBUFFER, a.__webglMultisampledFramebuffer);
        for (let n = 0; n < c.length; n++) {
          const i = c[n];
          a.__webglColorRenderbuffer[n] = e.createRenderbuffer();
          e.bindRenderbuffer(e.RENDERBUFFER, a.__webglColorRenderbuffer[n]);
          const r = s.convert(i.format, i.colorSpace);
          const o = s.convert(i.type);
          const l = y(i.internalFormat, r, o, i.colorSpace, t.isXRRenderTarget === true);
          const h = O(t);
          e.renderbufferStorageMultisample(e.RENDERBUFFER, h, l, t.width, t.height);
          e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + n, e.RENDERBUFFER, a.__webglColorRenderbuffer[n]);
        }
        e.bindRenderbuffer(e.RENDERBUFFER, null);
        if (t.depthBuffer) {
          a.__webglDepthRenderbuffer = e.createRenderbuffer();
          z(a.__webglDepthRenderbuffer, t, true);
        }
        n.bindFramebuffer(e.FRAMEBUFFER, null);
      }
    }
    if (h) {
      n.bindTexture(e.TEXTURE_CUBE_MAP, l.__webglTexture);
      P(e.TEXTURE_CUBE_MAP, i);
      for (let n = 0; n < 6; n++) {
        if (i.mipmaps && i.mipmaps.length > 0) {
          for (let r = 0; r < i.mipmaps.length; r++) {
            N(a.__webglFramebuffer[n][r], t, i, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, r);
          }
        } else {
          N(a.__webglFramebuffer[n], t, i, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0);
        }
      }
      if (A(i)) {
        v(e.TEXTURE_CUBE_MAP);
      }
      n.unbindTexture();
    } else if (d) {
      for (let i = 0, s = c.length; i < s; i++) {
        const s = c[i];
        const o = r.get(s);
        let l = e.TEXTURE_2D;
        if (t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) {
          l = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY;
        }
        n.bindTexture(l, o.__webglTexture);
        P(l, s);
        N(a.__webglFramebuffer, t, s, e.COLOR_ATTACHMENT0 + i, l, 0);
        if (A(s)) {
          v(l);
        }
      }
      n.unbindTexture();
    } else {
      let r = e.TEXTURE_2D;
      if (t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) {
        r = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY;
      }
      n.bindTexture(r, l.__webglTexture);
      P(r, i);
      if (i.mipmaps && i.mipmaps.length > 0) {
        for (let n = 0; n < i.mipmaps.length; n++) {
          N(a.__webglFramebuffer[n], t, i, e.COLOR_ATTACHMENT0, r, n);
        }
      } else {
        N(a.__webglFramebuffer, t, i, e.COLOR_ATTACHMENT0, r, 0);
      }
      if (A(i)) {
        v(r);
      }
      n.unbindTexture();
    }
    if (t.depthBuffer) {
      B(t);
    }
  };
  this.updateRenderTargetMipmap = function (e) {
    const t = e.textures;
    for (let i = 0, a = t.length; i < a; i++) {
      const a = t[i];
      if (A(a)) {
        const t = b(e);
        const i = r.get(a).__webglTexture;
        n.bindTexture(t, i);
        v(t);
        n.unbindTexture();
      }
    }
  };
  this.updateMultisampleRenderTarget = function (t) {
    if (t.samples > 0) {
      if (W(t) === false) {
        const i = t.textures;
        const a = t.width;
        const s = t.height;
        let o = e.COLOR_BUFFER_BIT;
        const l = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
        const h = r.get(t);
        const d = i.length > 1;
        if (d) {
          for (let t = 0; t < i.length; t++) {
            n.bindFramebuffer(e.FRAMEBUFFER, h.__webglMultisampledFramebuffer);
            e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, null);
            n.bindFramebuffer(e.FRAMEBUFFER, h.__webglFramebuffer);
            e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, null, 0);
          }
        }
        n.bindFramebuffer(e.READ_FRAMEBUFFER, h.__webglMultisampledFramebuffer);
        const u = t.texture.mipmaps;
        if (u && u.length > 0) {
          n.bindFramebuffer(e.DRAW_FRAMEBUFFER, h.__webglFramebuffer[0]);
        } else {
          n.bindFramebuffer(e.DRAW_FRAMEBUFFER, h.__webglFramebuffer);
        }
        for (let n = 0; n < i.length; n++) {
          if (t.resolveDepthBuffer) {
            if (t.depthBuffer) {
              o |= e.DEPTH_BUFFER_BIT;
            }
            if (t.stencilBuffer && t.resolveStencilBuffer) {
              o |= e.STENCIL_BUFFER_BIT;
            }
          }
          if (d) {
            e.framebufferRenderbuffer(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, h.__webglColorRenderbuffer[n]);
            const t = r.get(i[n]).__webglTexture;
            e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0);
          }
          e.blitFramebuffer(0, 0, a, s, 0, 0, a, s, o, e.NEAREST);
          if (c === true) {
            G.length = 0;
            F.length = 0;
            G.push(e.COLOR_ATTACHMENT0 + n);
            if (t.depthBuffer && t.resolveDepthBuffer === false) {
              G.push(l);
              F.push(l);
              e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, F);
            }
            e.invalidateFramebuffer(e.READ_FRAMEBUFFER, G);
          }
        }
        n.bindFramebuffer(e.READ_FRAMEBUFFER, null);
        n.bindFramebuffer(e.DRAW_FRAMEBUFFER, null);
        if (d) {
          for (let t = 0; t < i.length; t++) {
            n.bindFramebuffer(e.FRAMEBUFFER, h.__webglMultisampledFramebuffer);
            e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, h.__webglColorRenderbuffer[t]);
            const a = r.get(i[t]).__webglTexture;
            n.bindFramebuffer(e.FRAMEBUFFER, h.__webglFramebuffer);
            e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, a, 0);
          }
        }
        n.bindFramebuffer(e.DRAW_FRAMEBUFFER, h.__webglMultisampledFramebuffer);
      } else if (t.depthBuffer && t.resolveDepthBuffer === false && c) {
        const n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
        e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [n]);
      }
    }
  };
  this.setupDepthRenderbuffer = B;
  this.setupFrameBufferTexture = N;
  this.useMultisampledRTT = W;
}
function Rt(e, t) {
  return {
    convert: function (n, r = i.jf0) {
      let a;
      const s = i.ppV.getTransfer(r);
      if (n === i.OUM) {
        return e.UNSIGNED_BYTE;
      }
      if (n === i.Wew) {
        return e.UNSIGNED_SHORT_4_4_4_4;
      }
      if (n === i.gJ2) {
        return e.UNSIGNED_SHORT_5_5_5_1;
      }
      if (n === i.Dmk) {
        return e.UNSIGNED_INT_5_9_9_9_REV;
      }
      if (n === i.yT7) {
        return e.UNSIGNED_INT_10F_11F_11F_REV;
      }
      if (n === i.tJf) {
        return e.BYTE;
      }
      if (n === i.fBL) {
        return e.SHORT;
      }
      if (n === i.cHt) {
        return e.UNSIGNED_SHORT;
      }
      if (n === i.Yuy) {
        return e.INT;
      }
      if (n === i.bkx) {
        return e.UNSIGNED_INT;
      }
      if (n === i.RQf) {
        return e.FLOAT;
      }
      if (n === i.ix0) {
        return e.HALF_FLOAT;
      }
      if (n === i.wrO) {
        return e.ALPHA;
      }
      if (n === i.HIg) {
        return e.RGB;
      }
      if (n === i.GWd) {
        return e.RGBA;
      }
      if (n === i.zdS) {
        return e.DEPTH_COMPONENT;
      }
      if (n === i.dcC) {
        return e.DEPTH_STENCIL;
      }
      if (n === i.VT0) {
        return e.RED;
      }
      if (n === i.ZQM) {
        return e.RED_INTEGER;
      }
      if (n === i.paN) {
        return e.RG;
      }
      if (n === i.TkQ) {
        return e.RG_INTEGER;
      }
      if (n === i.c90) {
        return e.RGBA_INTEGER;
      }
      if (n === i.IE4 || n === i.Nz6 || n === i.jR7 || n === i.BXX) {
        if (s === i.KLL) {
          a = t.get("WEBGL_compressed_texture_s3tc_srgb");
          if (a === null) {
            return null;
          }
          if (n === i.IE4) {
            return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          }
          if (n === i.Nz6) {
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          }
          if (n === i.jR7) {
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          }
          if (n === i.BXX) {
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
          }
        } else {
          a = t.get("WEBGL_compressed_texture_s3tc");
          if (a === null) {
            return null;
          }
          if (n === i.IE4) {
            return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
          }
          if (n === i.Nz6) {
            return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          }
          if (n === i.jR7) {
            return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          }
          if (n === i.BXX) {
            return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
          }
        }
      }
      if (n === i.k6Q || n === i.kTp || n === i.HXV || n === i.pBf) {
        a = t.get("WEBGL_compressed_texture_pvrtc");
        if (a === null) {
          return null;
        }
        if (n === i.k6Q) {
          return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        }
        if (n === i.kTp) {
          return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        }
        if (n === i.HXV) {
          return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        }
        if (n === i.pBf) {
          return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        }
      }
      if (n === i.CVz || n === i.Riy || n === i.KDk) {
        a = t.get("WEBGL_compressed_texture_etc");
        if (a === null) {
          return null;
        }
        if (n === i.CVz || n === i.Riy) {
          if (s === i.KLL) {
            return a.COMPRESSED_SRGB8_ETC2;
          } else {
            return a.COMPRESSED_RGB8_ETC2;
          }
        }
        if (n === i.KDk) {
          if (s === i.KLL) {
            return a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC;
          } else {
            return a.COMPRESSED_RGBA8_ETC2_EAC;
          }
        }
      }
      if (n === i.qa3 || n === i.B_h || n === i.czI || n === i.rSH || n === i.Qrf || n === i.psI || n === i.a5J || n === i._QJ || n === i.uB5 || n === i.lyL || n === i.bC7 || n === i.y3Z || n === i.ojs || n === i.S$4) {
        a = t.get("WEBGL_compressed_texture_astc");
        if (a === null) {
          return null;
        }
        if (n === i.qa3) {
          if (s === i.KLL) {
            return a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
          } else {
            return a.COMPRESSED_RGBA_ASTC_4x4_KHR;
          }
        }
        if (n === i.B_h) {
          if (s === i.KLL) {
            return a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
          } else {
            return a.COMPRESSED_RGBA_ASTC_5x4_KHR;
          }
        }
        if (n === i.czI) {
          if (s === i.KLL) {
            return a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
          } else {
            return a.COMPRESSED_RGBA_ASTC_5x5_KHR;
          }
        }
        if (n === i.rSH) {
          if (s === i.KLL) {
            return a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
          } else {
            return a.COMPRESSED_RGBA_ASTC_6x5_KHR;
          }
        }
        if (n === i.Qrf) {
          if (s === i.KLL) {
            return a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
          } else {
            return a.COMPRESSED_RGBA_ASTC_6x6_KHR;
          }
        }
        if (n === i.psI) {
          if (s === i.KLL) {
            return a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
          } else {
            return a.COMPRESSED_RGBA_ASTC_8x5_KHR;
          }
        }
        if (n === i.a5J) {
          if (s === i.KLL) {
            return a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
          } else {
            return a.COMPRESSED_RGBA_ASTC_8x6_KHR;
          }
        }
        if (n === i._QJ) {
          if (s === i.KLL) {
            return a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
          } else {
            return a.COMPRESSED_RGBA_ASTC_8x8_KHR;
          }
        }
        if (n === i.uB5) {
          if (s === i.KLL) {
            return a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
          } else {
            return a.COMPRESSED_RGBA_ASTC_10x5_KHR;
          }
        }
        if (n === i.lyL) {
          if (s === i.KLL) {
            return a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
          } else {
            return a.COMPRESSED_RGBA_ASTC_10x6_KHR;
          }
        }
        if (n === i.bC7) {
          if (s === i.KLL) {
            return a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
          } else {
            return a.COMPRESSED_RGBA_ASTC_10x8_KHR;
          }
        }
        if (n === i.y3Z) {
          if (s === i.KLL) {
            return a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
          } else {
            return a.COMPRESSED_RGBA_ASTC_10x10_KHR;
          }
        }
        if (n === i.ojs) {
          if (s === i.KLL) {
            return a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
          } else {
            return a.COMPRESSED_RGBA_ASTC_12x10_KHR;
          }
        }
        if (n === i.S$4) {
          if (s === i.KLL) {
            return a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
          } else {
            return a.COMPRESSED_RGBA_ASTC_12x12_KHR;
          }
        }
      }
      if (n === i.Fn || n === i.H23 || n === i.W9U) {
        a = t.get("EXT_texture_compression_bptc");
        if (a === null) {
          return null;
        }
        if (n === i.Fn) {
          if (s === i.KLL) {
            return a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
          } else {
            return a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
          }
        }
        if (n === i.H23) {
          return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        }
        if (n === i.W9U) {
          return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
        }
      }
      if (n === i.Kef || n === i.XG_ || n === i.HO_ || n === i.CWW) {
        a = t.get("EXT_texture_compression_rgtc");
        if (a === null) {
          return null;
        }
        if (n === i.Kef) {
          return a.COMPRESSED_RED_RGTC1_EXT;
        }
        if (n === i.XG_) {
          return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        }
        if (n === i.HO_) {
          return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        }
        if (n === i.CWW) {
          return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
        }
      }
      if (n === i.V3x) {
        return e.UNSIGNED_INT_24_8;
      } else if (e[n] !== undefined) {
        return e[n];
      } else {
        return null;
      }
    }
  };
}
class Pt {
  constructor() {
    this.texture = null;
    this.mesh = null;
    this.depthNear = 0;
    this.depthFar = 0;
  }
  init(e, t) {
    if (this.texture === null) {
      const n = new i.rjZ(e.texture);
      if (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) {
        this.depthNear = e.depthNear;
        this.depthFar = e.depthFar;
      }
      this.texture = n;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport;
      const n = new i.BKk({
        vertexShader: "\nvoid main() {\n\n\tgl_Position = vec4( position, 1.0 );\n\n}",
        fragmentShader: "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n\tvec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n\tif ( coord.x >= 1.0 ) {\n\n\t\tgl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n\t} else {\n\n\t\tgl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n\t}\n\n}",
        uniforms: {
          depthColor: {
            value: this.texture
          },
          depthWidth: {
            value: t.z
          },
          depthHeight: {
            value: t.w
          }
        }
      });
      this.mesh = new i.eaF(new i.bdM(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null;
    this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class It extends i.Qev {
  constructor(e, t) {
    super();
    const n = this;
    let a = null;
    let s = 1;
    let o = null;
    let l = "local-floor";
    let c = 1;
    let h = null;
    let d = null;
    let u = null;
    let f = null;
    let p = null;
    let g = null;
    const m = typeof XRWebGLBinding != "undefined";
    const A = new Pt();
    const v = {};
    const b = t.getContextAttributes();
    let y = null;
    let w = null;
    const x = [];
    const S = [];
    const k = new i.I9Y();
    let T = null;
    const E = new i.ubm();
    E.viewport = new i.IUQ();
    const M = new i.ubm();
    M.viewport = new i.IUQ();
    const _ = [E, M];
    const C = new i.nZQ();
    let R = null;
    let P = null;
    function I(e) {
      const t = S.indexOf(e.inputSource);
      if (t === -1) {
        return;
      }
      const n = x[t];
      if (n !== undefined) {
        n.update(e.inputSource, e.frame, h || o);
        n.dispatchEvent({
          type: e.type,
          data: e.inputSource
        });
      }
    }
    function L() {
      a.removeEventListener("select", I);
      a.removeEventListener("selectstart", I);
      a.removeEventListener("selectend", I);
      a.removeEventListener("squeeze", I);
      a.removeEventListener("squeezestart", I);
      a.removeEventListener("squeezeend", I);
      a.removeEventListener("end", L);
      a.removeEventListener("inputsourceschange", U);
      for (let e = 0; e < x.length; e++) {
        const t = S[e];
        if (t !== null) {
          S[e] = null;
          x[e].disconnect(t);
        }
      }
      R = null;
      P = null;
      A.reset();
      for (const e in v) {
        delete v[e];
      }
      e.setRenderTarget(y);
      p = null;
      f = null;
      u = null;
      a = null;
      w = null;
      G.stop();
      n.isPresenting = false;
      e.setPixelRatio(T);
      e.setSize(k.width, k.height, false);
      n.dispatchEvent({
        type: "sessionend"
      });
    }
    function U(e) {
      for (let t = 0; t < e.removed.length; t++) {
        const n = e.removed[t];
        const i = S.indexOf(n);
        if (i >= 0) {
          S[i] = null;
          x[i].disconnect(n);
        }
      }
      for (let t = 0; t < e.added.length; t++) {
        const n = e.added[t];
        let i = S.indexOf(n);
        if (i === -1) {
          for (let e = 0; e < x.length; e++) {
            if (e >= S.length) {
              S.push(n);
              i = e;
              break;
            }
            if (S[e] === null) {
              S[e] = n;
              i = e;
              break;
            }
          }
          if (i === -1) {
            break;
          }
        }
        const r = x[i];
        if (r) {
          r.connect(n);
        }
      }
    }
    this.cameraAutoUpdate = true;
    this.enabled = false;
    this.isPresenting = false;
    this.getController = function (e) {
      let t = x[e];
      if (t === undefined) {
        t = new i.R3r();
        x[e] = t;
      }
      return t.getTargetRaySpace();
    };
    this.getControllerGrip = function (e) {
      let t = x[e];
      if (t === undefined) {
        t = new i.R3r();
        x[e] = t;
      }
      return t.getGripSpace();
    };
    this.getHand = function (e) {
      let t = x[e];
      if (t === undefined) {
        t = new i.R3r();
        x[e] = t;
      }
      return t.getHandSpace();
    };
    this.setFramebufferScaleFactor = function (e) {
      s = e;
      if (n.isPresenting === true) {
        (0, i.R8M)("WebXRManager: Cannot change framebuffer scale while presenting.");
      }
    };
    this.setReferenceSpaceType = function (e) {
      l = e;
      if (n.isPresenting === true) {
        (0, i.R8M)("WebXRManager: Cannot change reference space type while presenting.");
      }
    };
    this.getReferenceSpace = function () {
      return h || o;
    };
    this.setReferenceSpace = function (e) {
      h = e;
    };
    this.getBaseLayer = function () {
      if (f !== null) {
        return f;
      } else {
        return p;
      }
    };
    this.getBinding = function () {
      if (u === null && m) {
        u = new XRWebGLBinding(a, t);
      }
      return u;
    };
    this.getFrame = function () {
      return g;
    };
    this.getSession = function () {
      return a;
    };
    this.setSession = async function (r) {
      a = r;
      if (a !== null) {
        y = e.getRenderTarget();
        a.addEventListener("select", I);
        a.addEventListener("selectstart", I);
        a.addEventListener("selectend", I);
        a.addEventListener("squeeze", I);
        a.addEventListener("squeezestart", I);
        a.addEventListener("squeezeend", I);
        a.addEventListener("end", L);
        a.addEventListener("inputsourceschange", U);
        if (b.xrCompatible !== true) {
          await t.makeXRCompatible();
        }
        T = e.getPixelRatio();
        e.getSize(k);
        if (m && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let n = null;
          let r = null;
          let o = null;
          if (b.depth) {
            o = b.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24;
            n = b.stencil ? i.dcC : i.zdS;
            r = b.stencil ? i.V3x : i.bkx;
          }
          const l = {
            colorFormat: t.RGBA8,
            depthFormat: o,
            scaleFactor: s
          };
          u = this.getBinding();
          f = u.createProjectionLayer(l);
          a.updateRenderState({
            layers: [f]
          });
          e.setPixelRatio(1);
          e.setSize(f.textureWidth, f.textureHeight, false);
          w = new i.nWS(f.textureWidth, f.textureHeight, {
            format: i.GWd,
            type: i.OUM,
            depthTexture: new i.VCu(f.textureWidth, f.textureHeight, r, undefined, undefined, undefined, undefined, undefined, undefined, n),
            stencilBuffer: b.stencil,
            colorSpace: e.outputColorSpace,
            samples: b.antialias ? 4 : 0,
            resolveDepthBuffer: f.ignoreDepthValues === false,
            resolveStencilBuffer: f.ignoreDepthValues === false
          });
        } else {
          const n = {
            antialias: b.antialias,
            alpha: true,
            depth: b.depth,
            stencil: b.stencil,
            framebufferScaleFactor: s
          };
          p = new XRWebGLLayer(a, t, n);
          a.updateRenderState({
            baseLayer: p
          });
          e.setPixelRatio(1);
          e.setSize(p.framebufferWidth, p.framebufferHeight, false);
          w = new i.nWS(p.framebufferWidth, p.framebufferHeight, {
            format: i.GWd,
            type: i.OUM,
            colorSpace: e.outputColorSpace,
            stencilBuffer: b.stencil,
            resolveDepthBuffer: p.ignoreDepthValues === false,
            resolveStencilBuffer: p.ignoreDepthValues === false
          });
        }
        w.isXRRenderTarget = true;
        this.setFoveation(c);
        h = null;
        o = await a.requestReferenceSpace(l);
        G.setContext(a);
        G.start();
        n.isPresenting = true;
        n.dispatchEvent({
          type: "sessionstart"
        });
      }
    };
    this.getEnvironmentBlendMode = function () {
      if (a !== null) {
        return a.environmentBlendMode;
      }
    };
    this.getDepthTexture = function () {
      return A.getDepthTexture();
    };
    const N = new i.Pq0();
    const z = new i.Pq0();
    function D(e, t) {
      if (t === null) {
        e.matrixWorld.copy(e.matrix);
      } else {
        e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix);
      }
      e.matrixWorldInverse.copy(e.matrixWorld).invert();
    }
    this.updateCamera = function (e) {
      if (a === null) {
        return;
      }
      let t = e.near;
      let n = e.far;
      if (A.texture !== null) {
        if (A.depthNear > 0) {
          t = A.depthNear;
        }
        if (A.depthFar > 0) {
          n = A.depthFar;
        }
      }
      C.near = M.near = E.near = t;
      C.far = M.far = E.far = n;
      if (R !== C.near || P !== C.far) {
        a.updateRenderState({
          depthNear: C.near,
          depthFar: C.far
        });
        R = C.near;
        P = C.far;
      }
      C.layers.mask = e.layers.mask | 6;
      E.layers.mask = C.layers.mask & 3;
      M.layers.mask = C.layers.mask & 5;
      const r = e.parent;
      const s = C.cameras;
      D(C, r);
      for (let e = 0; e < s.length; e++) {
        D(s[e], r);
      }
      if (s.length === 2) {
        (function (e, t, n) {
          N.setFromMatrixPosition(t.matrixWorld);
          z.setFromMatrixPosition(n.matrixWorld);
          const i = N.distanceTo(z);
          const r = t.projectionMatrix.elements;
          const a = n.projectionMatrix.elements;
          const s = r[14] / (r[10] - 1);
          const o = r[14] / (r[10] + 1);
          const l = (r[9] + 1) / r[5];
          const c = (r[9] - 1) / r[5];
          const h = (r[8] - 1) / r[0];
          const d = (a[8] + 1) / a[0];
          const u = s * h;
          const f = s * d;
          const p = i / (-h + d);
          const g = p * -h;
          t.matrixWorld.decompose(e.position, e.quaternion, e.scale);
          e.translateX(g);
          e.translateZ(p);
          e.matrixWorld.compose(e.position, e.quaternion, e.scale);
          e.matrixWorldInverse.copy(e.matrixWorld).invert();
          if (r[10] === -1) {
            e.projectionMatrix.copy(t.projectionMatrix);
            e.projectionMatrixInverse.copy(t.projectionMatrixInverse);
          } else {
            const t = s + p;
            const n = o + p;
            const r = u - g;
            const a = f + (i - g);
            const h = l * o / n * t;
            const d = c * o / n * t;
            e.projectionMatrix.makePerspective(r, a, h, d, t, n);
            e.projectionMatrixInverse.copy(e.projectionMatrix).invert();
          }
        })(C, E, M);
      } else {
        C.projectionMatrix.copy(E.projectionMatrix);
      }
      (function (e, t, n) {
        if (n === null) {
          e.matrix.copy(t.matrixWorld);
        } else {
          e.matrix.copy(n.matrixWorld);
          e.matrix.invert();
          e.matrix.multiply(t.matrixWorld);
        }
        e.matrix.decompose(e.position, e.quaternion, e.scale);
        e.updateMatrixWorld(true);
        e.projectionMatrix.copy(t.projectionMatrix);
        e.projectionMatrixInverse.copy(t.projectionMatrixInverse);
        if (e.isPerspectiveCamera) {
          e.fov = i.a55 * 2 * Math.atan(1 / e.projectionMatrix.elements[5]);
          e.zoom = 1;
        }
      })(e, C, r);
    };
    this.getCamera = function () {
      return C;
    };
    this.getFoveation = function () {
      if (f !== null || p !== null) {
        return c;
      }
    };
    this.setFoveation = function (e) {
      c = e;
      if (f !== null) {
        f.fixedFoveation = e;
      }
      if (p !== null && p.fixedFoveation !== undefined) {
        p.fixedFoveation = e;
      }
    };
    this.hasDepthSensing = function () {
      return A.texture !== null;
    };
    this.getDepthSensingMesh = function () {
      return A.getMesh(C);
    };
    this.getCameraTexture = function (e) {
      return v[e];
    };
    let B = null;
    const G = new r();
    G.setAnimationLoop(function (t, r) {
      d = r.getViewerPose(h || o);
      g = r;
      if (d !== null) {
        const t = d.views;
        if (p !== null) {
          e.setRenderTargetFramebuffer(w, p.framebuffer);
          e.setRenderTarget(w);
        }
        let r = false;
        if (t.length !== C.cameras.length) {
          C.cameras.length = 0;
          r = true;
        }
        for (let n = 0; n < t.length; n++) {
          const a = t[n];
          let s = null;
          if (p !== null) {
            s = p.getViewport(a);
          } else {
            const t = u.getViewSubImage(f, a);
            s = t.viewport;
            if (n === 0) {
              e.setRenderTargetTextures(w, t.colorTexture, t.depthStencilTexture);
              e.setRenderTarget(w);
            }
          }
          let o = _[n];
          if (o === undefined) {
            o = new i.ubm();
            o.layers.enable(n);
            o.viewport = new i.IUQ();
            _[n] = o;
          }
          o.matrix.fromArray(a.transform.matrix);
          o.matrix.decompose(o.position, o.quaternion, o.scale);
          o.projectionMatrix.fromArray(a.projectionMatrix);
          o.projectionMatrixInverse.copy(o.projectionMatrix).invert();
          o.viewport.set(s.x, s.y, s.width, s.height);
          if (n === 0) {
            C.matrix.copy(o.matrix);
            C.matrix.decompose(C.position, C.quaternion, C.scale);
          }
          if (r === true) {
            C.cameras.push(o);
          }
        }
        const s = a.enabledFeatures;
        if (s && s.includes("depth-sensing") && a.depthUsage == "gpu-optimized" && m) {
          u = n.getBinding();
          const e = u.getDepthInformation(t[0]);
          if (e && e.isValid && e.texture) {
            A.init(e, a.renderState);
          }
        }
        if (s && s.includes("camera-access") && m) {
          e.state.unbindTexture();
          u = n.getBinding();
          for (let e = 0; e < t.length; e++) {
            const n = t[e].camera;
            if (n) {
              let e = v[n];
              if (!e) {
                e = new i.rjZ();
                v[n] = e;
              }
              const t = u.getCameraImage(n);
              e.sourceTexture = t;
            }
          }
        }
      }
      for (let e = 0; e < x.length; e++) {
        const t = S[e];
        const n = x[e];
        if (t !== null && n !== undefined) {
          n.update(t, r, h || o);
        }
      }
      if (B) {
        B(t, r);
      }
      if (r.detectedPlanes) {
        n.dispatchEvent({
          type: "planesdetected",
          data: r
        });
      }
      g = null;
    });
    this.setAnimationLoop = function (e) {
      B = e;
    };
    this.dispose = function () {};
  }
}
const Lt = new i.O9p();
const Ut = new i.kn4();
function Nt(e, t) {
  function n(e, t) {
    if (e.matrixAutoUpdate === true) {
      e.updateMatrix();
    }
    t.value.copy(e.matrix);
  }
  function r(e, r) {
    e.opacity.value = r.opacity;
    if (r.color) {
      e.diffuse.value.copy(r.color);
    }
    if (r.emissive) {
      e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity);
    }
    if (r.map) {
      e.map.value = r.map;
      n(r.map, e.mapTransform);
    }
    if (r.alphaMap) {
      e.alphaMap.value = r.alphaMap;
      n(r.alphaMap, e.alphaMapTransform);
    }
    if (r.bumpMap) {
      e.bumpMap.value = r.bumpMap;
      n(r.bumpMap, e.bumpMapTransform);
      e.bumpScale.value = r.bumpScale;
      if (r.side === i.hsX) {
        e.bumpScale.value *= -1;
      }
    }
    if (r.normalMap) {
      e.normalMap.value = r.normalMap;
      n(r.normalMap, e.normalMapTransform);
      e.normalScale.value.copy(r.normalScale);
      if (r.side === i.hsX) {
        e.normalScale.value.negate();
      }
    }
    if (r.displacementMap) {
      e.displacementMap.value = r.displacementMap;
      n(r.displacementMap, e.displacementMapTransform);
      e.displacementScale.value = r.displacementScale;
      e.displacementBias.value = r.displacementBias;
    }
    if (r.emissiveMap) {
      e.emissiveMap.value = r.emissiveMap;
      n(r.emissiveMap, e.emissiveMapTransform);
    }
    if (r.specularMap) {
      e.specularMap.value = r.specularMap;
      n(r.specularMap, e.specularMapTransform);
    }
    if (r.alphaTest > 0) {
      e.alphaTest.value = r.alphaTest;
    }
    const a = t.get(r);
    const s = a.envMap;
    const o = a.envMapRotation;
    if (s) {
      e.envMap.value = s;
      Lt.copy(o);
      Lt.x *= -1;
      Lt.y *= -1;
      Lt.z *= -1;
      if (s.isCubeTexture && s.isRenderTargetTexture === false) {
        Lt.y *= -1;
        Lt.z *= -1;
      }
      e.envMapRotation.value.setFromMatrix4(Ut.makeRotationFromEuler(Lt));
      e.flipEnvMap.value = s.isCubeTexture && s.isRenderTargetTexture === false ? -1 : 1;
      e.reflectivity.value = r.reflectivity;
      e.ior.value = r.ior;
      e.refractionRatio.value = r.refractionRatio;
    }
    if (r.lightMap) {
      e.lightMap.value = r.lightMap;
      e.lightMapIntensity.value = r.lightMapIntensity;
      n(r.lightMap, e.lightMapTransform);
    }
    if (r.aoMap) {
      e.aoMap.value = r.aoMap;
      e.aoMapIntensity.value = r.aoMapIntensity;
      n(r.aoMap, e.aoMapTransform);
    }
  }
  return {
    refreshFogUniforms: function (t, n) {
      n.color.getRGB(t.fogColor.value, (0, i._Ut)(e));
      if (n.isFog) {
        t.fogNear.value = n.near;
        t.fogFar.value = n.far;
      } else if (n.isFogExp2) {
        t.fogDensity.value = n.density;
      }
    },
    refreshMaterialUniforms: function (e, a, s, o, l) {
      if (a.isMeshBasicMaterial || a.isMeshLambertMaterial) {
        r(e, a);
      } else if (a.isMeshToonMaterial) {
        r(e, a);
        (function (e, t) {
          if (t.gradientMap) {
            e.gradientMap.value = t.gradientMap;
          }
        })(e, a);
      } else if (a.isMeshPhongMaterial) {
        r(e, a);
        (function (e, t) {
          e.specular.value.copy(t.specular);
          e.shininess.value = Math.max(t.shininess, 0.0001);
        })(e, a);
      } else if (a.isMeshStandardMaterial) {
        r(e, a);
        (function (e, t) {
          e.metalness.value = t.metalness;
          if (t.metalnessMap) {
            e.metalnessMap.value = t.metalnessMap;
            n(t.metalnessMap, e.metalnessMapTransform);
          }
          e.roughness.value = t.roughness;
          if (t.roughnessMap) {
            e.roughnessMap.value = t.roughnessMap;
            n(t.roughnessMap, e.roughnessMapTransform);
          }
          if (t.envMap) {
            e.envMapIntensity.value = t.envMapIntensity;
          }
        })(e, a);
        if (a.isMeshPhysicalMaterial) {
          (function (e, t, r) {
            e.ior.value = t.ior;
            if (t.sheen > 0) {
              e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen);
              e.sheenRoughness.value = t.sheenRoughness;
              if (t.sheenColorMap) {
                e.sheenColorMap.value = t.sheenColorMap;
                n(t.sheenColorMap, e.sheenColorMapTransform);
              }
              if (t.sheenRoughnessMap) {
                e.sheenRoughnessMap.value = t.sheenRoughnessMap;
                n(t.sheenRoughnessMap, e.sheenRoughnessMapTransform);
              }
            }
            if (t.clearcoat > 0) {
              e.clearcoat.value = t.clearcoat;
              e.clearcoatRoughness.value = t.clearcoatRoughness;
              if (t.clearcoatMap) {
                e.clearcoatMap.value = t.clearcoatMap;
                n(t.clearcoatMap, e.clearcoatMapTransform);
              }
              if (t.clearcoatRoughnessMap) {
                e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap;
                n(t.clearcoatRoughnessMap, e.clearcoatRoughnessMapTransform);
              }
              if (t.clearcoatNormalMap) {
                e.clearcoatNormalMap.value = t.clearcoatNormalMap;
                n(t.clearcoatNormalMap, e.clearcoatNormalMapTransform);
                e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale);
                if (t.side === i.hsX) {
                  e.clearcoatNormalScale.value.negate();
                }
              }
            }
            if (t.dispersion > 0) {
              e.dispersion.value = t.dispersion;
            }
            if (t.iridescence > 0) {
              e.iridescence.value = t.iridescence;
              e.iridescenceIOR.value = t.iridescenceIOR;
              e.iridescenceThicknessMinimum.value = t.iridescenceThicknessRange[0];
              e.iridescenceThicknessMaximum.value = t.iridescenceThicknessRange[1];
              if (t.iridescenceMap) {
                e.iridescenceMap.value = t.iridescenceMap;
                n(t.iridescenceMap, e.iridescenceMapTransform);
              }
              if (t.iridescenceThicknessMap) {
                e.iridescenceThicknessMap.value = t.iridescenceThicknessMap;
                n(t.iridescenceThicknessMap, e.iridescenceThicknessMapTransform);
              }
            }
            if (t.transmission > 0) {
              e.transmission.value = t.transmission;
              e.transmissionSamplerMap.value = r.texture;
              e.transmissionSamplerSize.value.set(r.width, r.height);
              if (t.transmissionMap) {
                e.transmissionMap.value = t.transmissionMap;
                n(t.transmissionMap, e.transmissionMapTransform);
              }
              e.thickness.value = t.thickness;
              if (t.thicknessMap) {
                e.thicknessMap.value = t.thicknessMap;
                n(t.thicknessMap, e.thicknessMapTransform);
              }
              e.attenuationDistance.value = t.attenuationDistance;
              e.attenuationColor.value.copy(t.attenuationColor);
            }
            if (t.anisotropy > 0) {
              e.anisotropyVector.value.set(t.anisotropy * Math.cos(t.anisotropyRotation), t.anisotropy * Math.sin(t.anisotropyRotation));
              if (t.anisotropyMap) {
                e.anisotropyMap.value = t.anisotropyMap;
                n(t.anisotropyMap, e.anisotropyMapTransform);
              }
            }
            e.specularIntensity.value = t.specularIntensity;
            e.specularColor.value.copy(t.specularColor);
            if (t.specularColorMap) {
              e.specularColorMap.value = t.specularColorMap;
              n(t.specularColorMap, e.specularColorMapTransform);
            }
            if (t.specularIntensityMap) {
              e.specularIntensityMap.value = t.specularIntensityMap;
              n(t.specularIntensityMap, e.specularIntensityMapTransform);
            }
          })(e, a, l);
        }
      } else if (a.isMeshMatcapMaterial) {
        r(e, a);
        (function (e, t) {
          if (t.matcap) {
            e.matcap.value = t.matcap;
          }
        })(e, a);
      } else if (a.isMeshDepthMaterial) {
        r(e, a);
      } else if (a.isMeshDistanceMaterial) {
        r(e, a);
        (function (e, n) {
          const i = t.get(n).light;
          e.referencePosition.value.setFromMatrixPosition(i.matrixWorld);
          e.nearDistance.value = i.shadow.camera.near;
          e.farDistance.value = i.shadow.camera.far;
        })(e, a);
      } else if (a.isMeshNormalMaterial) {
        r(e, a);
      } else if (a.isLineBasicMaterial) {
        (function (e, t) {
          e.diffuse.value.copy(t.color);
          e.opacity.value = t.opacity;
          if (t.map) {
            e.map.value = t.map;
            n(t.map, e.mapTransform);
          }
        })(e, a);
        if (a.isLineDashedMaterial) {
          (function (e, t) {
            e.dashSize.value = t.dashSize;
            e.totalSize.value = t.dashSize + t.gapSize;
            e.scale.value = t.scale;
          })(e, a);
        }
      } else if (a.isPointsMaterial) {
        (function (e, t, i, r) {
          e.diffuse.value.copy(t.color);
          e.opacity.value = t.opacity;
          e.size.value = t.size * i;
          e.scale.value = r * 0.5;
          if (t.map) {
            e.map.value = t.map;
            n(t.map, e.uvTransform);
          }
          if (t.alphaMap) {
            e.alphaMap.value = t.alphaMap;
            n(t.alphaMap, e.alphaMapTransform);
          }
          if (t.alphaTest > 0) {
            e.alphaTest.value = t.alphaTest;
          }
        })(e, a, s, o);
      } else if (a.isSpriteMaterial) {
        (function (e, t) {
          e.diffuse.value.copy(t.color);
          e.opacity.value = t.opacity;
          e.rotation.value = t.rotation;
          if (t.map) {
            e.map.value = t.map;
            n(t.map, e.mapTransform);
          }
          if (t.alphaMap) {
            e.alphaMap.value = t.alphaMap;
            n(t.alphaMap, e.alphaMapTransform);
          }
          if (t.alphaTest > 0) {
            e.alphaTest.value = t.alphaTest;
          }
        })(e, a);
      } else if (a.isShadowMaterial) {
        e.color.value.copy(a.color);
        e.opacity.value = a.opacity;
      } else if (a.isShaderMaterial) {
        a.uniformsNeedUpdate = false;
      }
    }
  };
}
function zt(e, t, n, r) {
  let a = {};
  let s = {};
  let o = [];
  const l = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(e, t, n, i) {
    const r = e.value;
    const a = t + "_" + n;
    if (i[a] === undefined) {
      i[a] = typeof r == "number" || typeof r == "boolean" ? r : r.clone();
      return true;
    }
    {
      const e = i[a];
      if (typeof r == "number" || typeof r == "boolean") {
        if (e !== r) {
          i[a] = r;
          return true;
        }
      } else if (e.equals(r) === false) {
        e.copy(r);
        return true;
      }
    }
    return false;
  }
  function h(e) {
    const t = {
      boundary: 0,
      storage: 0
    };
    if (typeof e == "number" || typeof e == "boolean") {
      t.boundary = 4;
      t.storage = 4;
    } else if (e.isVector2) {
      t.boundary = 8;
      t.storage = 8;
    } else if (e.isVector3 || e.isColor) {
      t.boundary = 16;
      t.storage = 12;
    } else if (e.isVector4) {
      t.boundary = 16;
      t.storage = 16;
    } else if (e.isMatrix3) {
      t.boundary = 48;
      t.storage = 48;
    } else if (e.isMatrix4) {
      t.boundary = 64;
      t.storage = 64;
    } else if (e.isTexture) {
      (0, i.R8M)("WebGLRenderer: Texture samplers can not be part of an uniforms group.");
    } else {
      (0, i.R8M)("WebGLRenderer: Unsupported uniform value type.", e);
    }
    return t;
  }
  function d(t) {
    const n = t.target;
    n.removeEventListener("dispose", d);
    const i = o.indexOf(n.__bindingPointIndex);
    o.splice(i, 1);
    e.deleteBuffer(a[n.id]);
    delete a[n.id];
    delete s[n.id];
  }
  return {
    bind: function (e, t) {
      const n = t.program;
      r.uniformBlockBinding(e, n);
    },
    update: function (n, u) {
      let f = a[n.id];
      if (f === undefined) {
        (function (e) {
          const t = e.uniforms;
          let n = 0;
          const i = 16;
          for (let e = 0, r = t.length; e < r; e++) {
            const r = Array.isArray(t[e]) ? t[e] : [t[e]];
            for (let e = 0, t = r.length; e < t; e++) {
              const t = r[e];
              const a = Array.isArray(t.value) ? t.value : [t.value];
              for (let e = 0, r = a.length; e < r; e++) {
                const r = h(a[e]);
                const s = n % i;
                const o = s % r.boundary;
                const l = s + o;
                n += o;
                if (l !== 0 && i - l < r.storage) {
                  n += i - l;
                }
                t.__data = new Float32Array(r.storage / Float32Array.BYTES_PER_ELEMENT);
                t.__offset = n;
                n += r.storage;
              }
            }
          }
          const r = n % i;
          if (r > 0) {
            n += i - r;
          }
          e.__size = n;
          e.__cache = {};
        })(n);
        f = function (t) {
          const n = function () {
            for (let e = 0; e < l; e++) {
              if (o.indexOf(e) === -1) {
                o.push(e);
                return e;
              }
            }
            (0, i.z3S)("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.");
            return 0;
          }();
          t.__bindingPointIndex = n;
          const r = e.createBuffer();
          const a = t.__size;
          const s = t.usage;
          e.bindBuffer(e.UNIFORM_BUFFER, r);
          e.bufferData(e.UNIFORM_BUFFER, a, s);
          e.bindBuffer(e.UNIFORM_BUFFER, null);
          e.bindBufferBase(e.UNIFORM_BUFFER, n, r);
          return r;
        }(n);
        a[n.id] = f;
        n.addEventListener("dispose", d);
      }
      const p = u.program;
      r.updateUBOMapping(n, p);
      const g = t.render.frame;
      if (s[n.id] !== g) {
        (function (t) {
          const n = a[t.id];
          const i = t.uniforms;
          const r = t.__cache;
          e.bindBuffer(e.UNIFORM_BUFFER, n);
          for (let t = 0, n = i.length; t < n; t++) {
            const n = Array.isArray(i[t]) ? i[t] : [i[t]];
            for (let i = 0, a = n.length; i < a; i++) {
              const a = n[i];
              if (c(a, t, i, r) === true) {
                const t = a.__offset;
                const n = Array.isArray(a.value) ? a.value : [a.value];
                let i = 0;
                for (let r = 0; r < n.length; r++) {
                  const s = n[r];
                  const o = h(s);
                  if (typeof s == "number" || typeof s == "boolean") {
                    a.__data[0] = s;
                    e.bufferSubData(e.UNIFORM_BUFFER, t + i, a.__data);
                  } else if (s.isMatrix3) {
                    a.__data[0] = s.elements[0];
                    a.__data[1] = s.elements[1];
                    a.__data[2] = s.elements[2];
                    a.__data[3] = 0;
                    a.__data[4] = s.elements[3];
                    a.__data[5] = s.elements[4];
                    a.__data[6] = s.elements[5];
                    a.__data[7] = 0;
                    a.__data[8] = s.elements[6];
                    a.__data[9] = s.elements[7];
                    a.__data[10] = s.elements[8];
                    a.__data[11] = 0;
                  } else {
                    s.toArray(a.__data, i);
                    i += o.storage / Float32Array.BYTES_PER_ELEMENT;
                  }
                }
                e.bufferSubData(e.UNIFORM_BUFFER, t, a.__data);
              }
            }
          }
          e.bindBuffer(e.UNIFORM_BUFFER, null);
        })(n);
        s[n.id] = g;
      }
    },
    dispose: function () {
      for (const t in a) {
        e.deleteBuffer(a[t]);
      }
      o = [];
      a = {};
      s = {};
    }
  };
}
const Dt = new Uint16Array([11481, 15204, 11534, 15171, 11808, 15015, 12385, 14843, 12894, 14716, 13396, 14600, 13693, 14483, 13976, 14366, 14237, 14171, 14405, 13961, 14511, 13770, 14605, 13598, 14687, 13444, 14760, 13305, 14822, 13066, 14876, 12857, 14923, 12675, 14963, 12517, 14997, 12379, 15025, 12230, 15049, 12023, 15070, 11843, 15086, 11687, 15100, 11551, 15111, 11433, 15120, 11330, 15127, 11217, 15132, 11060, 15135, 10922, 15138, 10801, 15139, 10695, 15139, 10600, 13012, 14923, 13020, 14917, 13064, 14886, 13176, 14800, 13349, 14666, 13513, 14526, 13724, 14398, 13960, 14230, 14200, 14020, 14383, 13827, 14488, 13651, 14583, 13491, 14667, 13348, 14740, 13132, 14803, 12908, 14856, 12713, 14901, 12542, 14938, 12394, 14968, 12241, 14992, 12017, 15010, 11822, 15024, 11654, 15034, 11507, 15041, 11380, 15044, 11269, 15044, 11081, 15042, 10913, 15037, 10764, 15031, 10635, 15023, 10520, 15014, 10419, 15003, 10330, 13657, 14676, 13658, 14673, 13670, 14660, 13698, 14622, 13750, 14547, 13834, 14442, 13956, 14317, 14112, 14093, 14291, 13889, 14407, 13704, 14499, 13538, 14586, 13389, 14664, 13201, 14733, 12966, 14792, 12758, 14842, 12577, 14882, 12418, 14915, 12272, 14940, 12033, 14959, 11826, 14972, 11646, 14980, 11490, 14983, 11355, 14983, 11212, 14979, 11008, 14971, 10830, 14961, 10675, 14950, 10540, 14936, 10420, 14923, 10315, 14909, 10204, 14894, 10041, 14089, 14460, 14090, 14459, 14096, 14452, 14112, 14431, 14141, 14388, 14186, 14305, 14252, 14130, 14341, 13941, 14399, 13756, 14467, 13585, 14539, 13430, 14610, 13272, 14677, 13026, 14737, 12808, 14790, 12617, 14833, 12449, 14869, 12303, 14896, 12065, 14916, 11845, 14929, 11655, 14937, 11490, 14939, 11347, 14936, 11184, 14930, 10970, 14921, 10783, 14912, 10621, 14900, 10480, 14885, 10356, 14867, 10247, 14848, 10062, 14827, 9894, 14805, 9745, 14400, 14208, 14400, 14206, 14402, 14198, 14406, 14174, 14415, 14122, 14427, 14035, 14444, 13913, 14469, 13767, 14504, 13613, 14548, 13463, 14598, 13324, 14651, 13082, 14704, 12858, 14752, 12658, 14795, 12483, 14831, 12330, 14860, 12106, 14881, 11875, 14895, 11675, 14903, 11501, 14905, 11351, 14903, 11178, 14900, 10953, 14892, 10757, 14880, 10589, 14865, 10442, 14847, 10313, 14827, 10162, 14805, 9965, 14782, 9792, 14757, 9642, 14731, 9507, 14562, 13883, 14562, 13883, 14563, 13877, 14566, 13862, 14570, 13830, 14576, 13773, 14584, 13689, 14595, 13582, 14613, 13461, 14637, 13336, 14668, 13120, 14704, 12897, 14741, 12695, 14776, 12516, 14808, 12358, 14835, 12150, 14856, 11910, 14870, 11701, 14878, 11519, 14882, 11361, 14884, 11187, 14880, 10951, 14871, 10748, 14858, 10572, 14842, 10418, 14823, 10286, 14801, 10099, 14777, 9897, 14751, 9722, 14725, 9567, 14696, 9430, 14666, 9309, 14702, 13604, 14702, 13604, 14702, 13600, 14703, 13591, 14705, 13570, 14707, 13533, 14709, 13477, 14712, 13400, 14718, 13305, 14727, 13106, 14743, 12907, 14762, 12716, 14784, 12539, 14807, 12380, 14827, 12190, 14844, 11943, 14855, 11727, 14863, 11539, 14870, 11376, 14871, 11204, 14868, 10960, 14858, 10748, 14845, 10565, 14829, 10406, 14809, 10269, 14786, 10058, 14761, 9852, 14734, 9671, 14705, 9512, 14674, 9374, 14641, 9253, 14608, 9076, 14821, 13366, 14821, 13365, 14821, 13364, 14821, 13358, 14821, 13344, 14821, 13320, 14819, 13252, 14817, 13145, 14815, 13011, 14814, 12858, 14817, 12698, 14823, 12539, 14832, 12389, 14841, 12214, 14850, 11968, 14856, 11750, 14861, 11558, 14866, 11390, 14867, 11226, 14862, 10972, 14853, 10754, 14840, 10565, 14823, 10401, 14803, 10259, 14780, 10032, 14754, 9820, 14725, 9635, 14694, 9473, 14661, 9333, 14627, 9203, 14593, 8988, 14557, 8798, 14923, 13014, 14922, 13014, 14922, 13012, 14922, 13004, 14920, 12987, 14919, 12957, 14915, 12907, 14909, 12834, 14902, 12738, 14894, 12623, 14888, 12498, 14883, 12370, 14880, 12203, 14878, 11970, 14875, 11759, 14873, 11569, 14874, 11401, 14872, 11243, 14865, 10986, 14855, 10762, 14842, 10568, 14825, 10401, 14804, 10255, 14781, 10017, 14754, 9799, 14725, 9611, 14692, 9445, 14658, 9301, 14623, 9139, 14587, 8920, 14548, 8729, 14509, 8562, 15008, 12672, 15008, 12672, 15008, 12671, 15007, 12667, 15005, 12656, 15001, 12637, 14997, 12605, 14989, 12556, 14978, 12490, 14966, 12407, 14953, 12313, 14940, 12136, 14927, 11934, 14914, 11742, 14903, 11563, 14896, 11401, 14889, 11247, 14879, 10992, 14866, 10767, 14851, 10570, 14833, 10400, 14812, 10252, 14789, 10007, 14761, 9784, 14731, 9592, 14698, 9424, 14663, 9279, 14627, 9088, 14588, 8868, 14548, 8676, 14508, 8508, 14467, 8360, 15080, 12386, 15080, 12386, 15079, 12385, 15078, 12383, 15076, 12378, 15072, 12367, 15066, 12347, 15057, 12315, 15045, 12253, 15030, 12138, 15012, 11998, 14993, 11845, 14972, 11685, 14951, 11530, 14935, 11383, 14920, 11228, 14904, 10981, 14887, 10762, 14870, 10567, 14850, 10397, 14827, 10248, 14803, 9997, 14774, 9771, 14743, 9578, 14710, 9407, 14674, 9259, 14637, 9048, 14596, 8826, 14555, 8632, 14514, 8464, 14471, 8317, 14427, 8182, 15139, 12008, 15139, 12008, 15138, 12008, 15137, 12007, 15135, 12003, 15130, 11990, 15124, 11969, 15115, 11929, 15102, 11872, 15086, 11794, 15064, 11693, 15041, 11581, 15013, 11459, 14987, 11336, 14966, 11170, 14944, 10944, 14921, 10738, 14898, 10552, 14875, 10387, 14850, 10239, 14824, 9983, 14794, 9758, 14762, 9563, 14728, 9392, 14692, 9244, 14653, 9014, 14611, 8791, 14569, 8597, 14526, 8427, 14481, 8281, 14436, 8110, 14391, 7885, 15188, 11617, 15188, 11617, 15187, 11617, 15186, 11618, 15183, 11617, 15179, 11612, 15173, 11601, 15163, 11581, 15150, 11546, 15133, 11495, 15110, 11427, 15083, 11346, 15051, 11246, 15024, 11057, 14996, 10868, 14967, 10687, 14938, 10517, 14911, 10362, 14882, 10206, 14853, 9956, 14821, 9737, 14787, 9543, 14752, 9375, 14715, 9228, 14675, 8980, 14632, 8760, 14589, 8565, 14544, 8395, 14498, 8248, 14451, 8049, 14404, 7824, 14357, 7630, 15228, 11298, 15228, 11298, 15227, 11299, 15226, 11301, 15223, 11303, 15219, 11302, 15213, 11299, 15204, 11290, 15191, 11271, 15174, 11217, 15150, 11129, 15119, 11015, 15087, 10886, 15057, 10744, 15024, 10599, 14990, 10455, 14957, 10318, 14924, 10143, 14891, 9911, 14856, 9701, 14820, 9516, 14782, 9352, 14744, 9200, 14703, 8946, 14659, 8725, 14615, 8533, 14568, 8366, 14521, 8220, 14472, 7992, 14423, 7770, 14374, 7578, 14315, 7408, 15260, 10819, 15260, 10819, 15259, 10822, 15258, 10826, 15256, 10832, 15251, 10836, 15246, 10841, 15237, 10838, 15225, 10821, 15207, 10788, 15183, 10734, 15151, 10660, 15120, 10571, 15087, 10469, 15049, 10359, 15012, 10249, 14974, 10041, 14937, 9837, 14900, 9647, 14860, 9475, 14820, 9320, 14779, 9147, 14736, 8902, 14691, 8688, 14646, 8499, 14598, 8335, 14549, 8189, 14499, 7940, 14448, 7720, 14397, 7529, 14347, 7363, 14256, 7218, 15285, 10410, 15285, 10411, 15285, 10413, 15284, 10418, 15282, 10425, 15278, 10434, 15272, 10442, 15264, 10449, 15252, 10445, 15235, 10433, 15210, 10403, 15179, 10358, 15149, 10301, 15113, 10218, 15073, 10059, 15033, 9894, 14991, 9726, 14951, 9565, 14909, 9413, 14865, 9273, 14822, 9073, 14777, 8845, 14730, 8641, 14682, 8459, 14633, 8300, 14583, 8129, 14531, 7883, 14479, 7670, 14426, 7482, 14373, 7321, 14305, 7176, 14201, 6939, 15305, 9939, 15305, 9940, 15305, 9945, 15304, 9955, 15302, 9967, 15298, 9989, 15293, 10010, 15286, 10033, 15274, 10044, 15258, 10045, 15233, 10022, 15205, 9975, 15174, 9903, 15136, 9808, 15095, 9697, 15053, 9578, 15009, 9451, 14965, 9327, 14918, 9198, 14871, 8973, 14825, 8766, 14775, 8579, 14725, 8408, 14675, 8259, 14622, 8058, 14569, 7821, 14515, 7615, 14460, 7435, 14405, 7276, 14350, 7108, 14256, 6866, 14149, 6653, 15321, 9444, 15321, 9445, 15321, 9448, 15320, 9458, 15317, 9470, 15314, 9490, 15310, 9515, 15302, 9540, 15292, 9562, 15276, 9579, 15251, 9577, 15226, 9559, 15195, 9519, 15156, 9463, 15116, 9389, 15071, 9304, 15025, 9208, 14978, 9023, 14927, 8838, 14878, 8661, 14827, 8496, 14774, 8344, 14722, 8206, 14667, 7973, 14612, 7749, 14556, 7555, 14499, 7382, 14443, 7229, 14385, 7025, 14322, 6791, 14210, 6588, 14100, 6409, 15333, 8920, 15333, 8921, 15332, 8927, 15332, 8943, 15329, 8965, 15326, 9002, 15322, 9048, 15316, 9106, 15307, 9162, 15291, 9204, 15267, 9221, 15244, 9221, 15212, 9196, 15175, 9134, 15133, 9043, 15088, 8930, 15040, 8801, 14990, 8665, 14938, 8526, 14886, 8391, 14830, 8261, 14775, 8087, 14719, 7866, 14661, 7664, 14603, 7482, 14544, 7322, 14485, 7178, 14426, 6936, 14367, 6713, 14281, 6517, 14166, 6348, 14054, 6198, 15341, 8360, 15341, 8361, 15341, 8366, 15341, 8379, 15339, 8399, 15336, 8431, 15332, 8473, 15326, 8527, 15318, 8585, 15302, 8632, 15281, 8670, 15258, 8690, 15227, 8690, 15191, 8664, 15149, 8612, 15104, 8543, 15055, 8456, 15001, 8360, 14948, 8259, 14892, 8122, 14834, 7923, 14776, 7734, 14716, 7558, 14656, 7397, 14595, 7250, 14534, 7070, 14472, 6835, 14410, 6628, 14350, 6443, 14243, 6283, 14125, 6135, 14010, 5889, 15348, 7715, 15348, 7717, 15348, 7725, 15347, 7745, 15345, 7780, 15343, 7836, 15339, 7905, 15334, 8000, 15326, 8103, 15310, 8193, 15293, 8239, 15270, 8270, 15240, 8287, 15204, 8283, 15163, 8260, 15118, 8223, 15067, 8143, 15014, 8014, 14958, 7873, 14899, 7723, 14839, 7573, 14778, 7430, 14715, 7293, 14652, 7164, 14588, 6931, 14524, 6720, 14460, 6531, 14396, 6362, 14330, 6210, 14207, 6015, 14086, 5781, 13969, 5576, 15352, 7114, 15352, 7116, 15352, 7128, 15352, 7159, 15350, 7195, 15348, 7237, 15345, 7299, 15340, 7374, 15332, 7457, 15317, 7544, 15301, 7633, 15280, 7703, 15251, 7754, 15216, 7775, 15176, 7767, 15131, 7733, 15079, 7670, 15026, 7588, 14967, 7492, 14906, 7387, 14844, 7278, 14779, 7171, 14714, 6965, 14648, 6770, 14581, 6587, 14515, 6420, 14448, 6269, 14382, 6123, 14299, 5881, 14172, 5665, 14049, 5477, 13929, 5310, 15355, 6329, 15355, 6330, 15355, 6339, 15355, 6362, 15353, 6410, 15351, 6472, 15349, 6572, 15344, 6688, 15337, 6835, 15323, 6985, 15309, 7142, 15287, 7220, 15260, 7277, 15226, 7310, 15188, 7326, 15142, 7318, 15090, 7285, 15036, 7239, 14976, 7177, 14914, 7045, 14849, 6892, 14782, 6736, 14714, 6581, 14645, 6433, 14576, 6293, 14506, 6164, 14438, 5946, 14369, 5733, 14270, 5540, 14140, 5369, 14014, 5216, 13892, 5043, 15357, 5483, 15357, 5484, 15357, 5496, 15357, 5528, 15356, 5597, 15354, 5692, 15351, 5835, 15347, 6011, 15339, 6195, 15328, 6317, 15314, 6446, 15293, 6566, 15268, 6668, 15235, 6746, 15197, 6796, 15152, 6811, 15101, 6790, 15046, 6748, 14985, 6673, 14921, 6583, 14854, 6479, 14785, 6371, 14714, 6259, 14643, 6149, 14571, 5946, 14499, 5750, 14428, 5567, 14358, 5401, 14242, 5250, 14109, 5111, 13980, 4870, 13856, 4657, 15359, 4555, 15359, 4557, 15358, 4573, 15358, 4633, 15357, 4715, 15355, 4841, 15353, 5061, 15349, 5216, 15342, 5391, 15331, 5577, 15318, 5770, 15299, 5967, 15274, 6150, 15243, 6223, 15206, 6280, 15161, 6310, 15111, 6317, 15055, 6300, 14994, 6262, 14928, 6208, 14860, 6141, 14788, 5994, 14715, 5838, 14641, 5684, 14566, 5529, 14492, 5384, 14418, 5247, 14346, 5121, 14216, 4892, 14079, 4682, 13948, 4496, 13822, 4330, 15359, 3498, 15359, 3501, 15359, 3520, 15359, 3598, 15358, 3719, 15356, 3860, 15355, 4137, 15351, 4305, 15344, 4563, 15334, 4809, 15321, 5116, 15303, 5273, 15280, 5418, 15250, 5547, 15214, 5653, 15170, 5722, 15120, 5761, 15064, 5763, 15002, 5733, 14935, 5673, 14865, 5597, 14792, 5504, 14716, 5400, 14640, 5294, 14563, 5185, 14486, 5041, 14410, 4841, 14335, 4655, 14191, 4482, 14051, 4325, 13918, 4183, 13790, 4012, 15360, 2282, 15360, 2285, 15360, 2306, 15360, 2401, 15359, 2547, 15357, 2748, 15355, 3103, 15352, 3349, 15345, 3675, 15336, 4020, 15324, 4272, 15307, 4496, 15285, 4716, 15255, 4908, 15220, 5086, 15178, 5170, 15128, 5214, 15072, 5234, 15010, 5231, 14943, 5206, 14871, 5166, 14796, 5102, 14718, 4971, 14639, 4833, 14559, 4687, 14480, 4541, 14402, 4401, 14315, 4268, 14167, 4142, 14025, 3958, 13888, 3747, 13759, 3556, 15360, 923, 15360, 925, 15360, 946, 15360, 1052, 15359, 1214, 15357, 1494, 15356, 1892, 15352, 2274, 15346, 2663, 15338, 3099, 15326, 3393, 15309, 3679, 15288, 3980, 15260, 4183, 15226, 4325, 15185, 4437, 15136, 4517, 15080, 4570, 15018, 4591, 14950, 4581, 14877, 4545, 14800, 4485, 14720, 4411, 14638, 4325, 14556, 4231, 14475, 4136, 14395, 3988, 14297, 3803, 14145, 3628, 13999, 3465, 13861, 3314, 13729, 3177, 15360, 263, 15360, 264, 15360, 272, 15360, 325, 15359, 407, 15358, 548, 15356, 780, 15352, 1144, 15347, 1580, 15339, 2099, 15328, 2425, 15312, 2795, 15292, 3133, 15264, 3329, 15232, 3517, 15191, 3689, 15143, 3819, 15088, 3923, 15025, 3978, 14956, 3999, 14882, 3979, 14804, 3931, 14722, 3855, 14639, 3756, 14554, 3645, 14470, 3529, 14388, 3409, 14279, 3289, 14124, 3173, 13975, 3055, 13834, 2848, 13701, 2658, 15360, 49, 15360, 49, 15360, 52, 15360, 75, 15359, 111, 15358, 201, 15356, 283, 15353, 519, 15348, 726, 15340, 1045, 15329, 1415, 15314, 1795, 15295, 2173, 15269, 2410, 15237, 2649, 15197, 2866, 15150, 3054, 15095, 3140, 15032, 3196, 14963, 3228, 14888, 3236, 14808, 3224, 14725, 3191, 14639, 3146, 14553, 3088, 14466, 2976, 14382, 2836, 14262, 2692, 14103, 2549, 13952, 2409, 13808, 2278, 13674, 2154, 15360, 4, 15360, 4, 15360, 4, 15360, 13, 15359, 33, 15358, 59, 15357, 112, 15353, 199, 15348, 302, 15341, 456, 15331, 628, 15316, 827, 15297, 1082, 15272, 1332, 15241, 1601, 15202, 1851, 15156, 2069, 15101, 2172, 15039, 2256, 14970, 2314, 14894, 2348, 14813, 2358, 14728, 2344, 14640, 2311, 14551, 2263, 14463, 2203, 14376, 2133, 14247, 2059, 14084, 1915, 13930, 1761, 13784, 1609, 13648, 1464, 15360, 0, 15360, 0, 15360, 0, 15360, 3, 15359, 18, 15358, 26, 15357, 53, 15354, 80, 15348, 97, 15341, 165, 15332, 238, 15318, 326, 15299, 427, 15275, 529, 15245, 654, 15207, 771, 15161, 885, 15108, 994, 15046, 1089, 14976, 1170, 14900, 1229, 14817, 1266, 14731, 1284, 14641, 1282, 14550, 1260, 14460, 1223, 14370, 1174, 14232, 1116, 14066, 1050, 13909, 981, 13761, 910, 13623, 839]);
let Bt = null;
export class JeP {
  constructor(e = {}) {
    const {
      canvas: t = (0, i.lPF)(),
      context: n = null,
      depth: s = true,
      stencil: o = false,
      alpha: l = false,
      antialias: c = false,
      premultipliedAlpha: h = true,
      preserveDrawingBuffer: d = false,
      powerPreference: v = "default",
      failIfMajorPerformanceCaveat: b = false,
      reversedDepthBuffer: y = false
    } = e;
    let w;
    this.isWebGLRenderer = true;
    if (n !== null) {
      if (typeof WebGLRenderingContext != "undefined" && n instanceof WebGLRenderingContext) {
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      }
      w = n.getContextAttributes().alpha;
    } else {
      w = l;
    }
    const x = new Set([i.c90, i.TkQ, i.ZQM]);
    const S = new Set([i.OUM, i.bkx, i.cHt, i.V3x, i.Wew, i.gJ2]);
    const k = new Uint32Array(4);
    const T = new Int32Array(4);
    let E = null;
    let M = null;
    const _ = [];
    const C = [];
    this.domElement = t;
    this.debug = {
      checkShaderErrors: true,
      onShaderError: null
    };
    this.autoClear = true;
    this.autoClearColor = true;
    this.autoClearDepth = true;
    this.autoClearStencil = true;
    this.sortObjects = true;
    this.clippingPlanes = [];
    this.localClippingEnabled = false;
    this.toneMapping = i.y_p;
    this.toneMappingExposure = 1;
    this.transmissionResolutionScale = 1;
    const R = this;
    let P = false;
    this._outputColorSpace = i.er$;
    let I = 0;
    let F = 0;
    let O = null;
    let W = -1;
    let V = null;
    const H = new i.IUQ();
    const j = new i.IUQ();
    let K = null;
    const q = new i.Q1f(0);
    let Q = 0;
    let J = t.width;
    let X = t.height;
    let Y = 1;
    let Z = null;
    let $ = null;
    const ee = new i.IUQ(0, 0, J, X);
    const te = new i.IUQ(0, 0, J, X);
    let ne = false;
    const ie = new i.PPD();
    let re = false;
    let ae = false;
    const se = new i.kn4();
    const oe = new i.Pq0();
    const le = new i.IUQ();
    const ce = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: true
    };
    let he = false;
    function de() {
      if (O === null) {
        return Y;
      } else {
        return 1;
      }
    }
    let ue;
    let fe;
    let pe;
    let ge;
    let me;
    let Ae;
    let ve;
    let be;
    let ye;
    let we;
    let xe;
    let Se;
    let ke;
    let Te;
    let Ee;
    let Me;
    let _e;
    let Ce;
    let Re;
    let Pe;
    let Ie;
    let Le;
    let Ue;
    let Ne;
    let ze = n;
    function De(e, n) {
      return t.getContext(e, n);
    }
    try {
      const e = {
        alpha: true,
        depth: s,
        stencil: o,
        antialias: c,
        premultipliedAlpha: h,
        preserveDrawingBuffer: d,
        powerPreference: v,
        failIfMajorPerformanceCaveat: b
      };
      if ("setAttribute" in t) {
        t.setAttribute("data-engine", `three.js r${i.sPf}`);
      }
      t.addEventListener("webglcontextlost", Fe, false);
      t.addEventListener("webglcontextrestored", Oe, false);
      t.addEventListener("webglcontextcreationerror", We, false);
      if (ze === null) {
        const t = "webgl2";
        ze = De(t, e);
        if (ze === null) {
          throw De(t) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
        }
      }
    } catch (e) {
      e("WebGLRenderer: " + e.message);
      throw e;
    }
    function Be() {
      ue = new U(ze);
      ue.init();
      Le = new Rt(ze, ue);
      fe = new g(ze, ue, e, Le);
      pe = new _t(ze, ue);
      if (fe.reversedDepthBuffer && y) {
        pe.buffers.depth.setReversed(true);
      }
      ge = new D(ze);
      me = new gt();
      Ae = new Ct(ze, ue, pe, me, fe, Le, ge);
      ve = new A(R);
      be = new L(R);
      ye = new a(ze);
      Ue = new f(ze, ye);
      we = new N(ze, ye, ge, Ue);
      xe = new G(ze, we, ye, ge);
      Re = new B(ze, fe, Ae);
      Me = new m(me);
      Se = new pt(R, ve, be, ue, fe, Ue, Me);
      ke = new Nt(R, me);
      Te = new bt();
      Ee = new Tt(ue);
      Ce = new u(R, ve, be, pe, xe, w, h);
      _e = new Et(R, xe, fe);
      Ne = new zt(ze, ge, fe, pe);
      Pe = new p(ze, ue, ge);
      Ie = new z(ze, ue, ge);
      ge.programs = Se.programs;
      R.capabilities = fe;
      R.extensions = ue;
      R.properties = me;
      R.renderLists = Te;
      R.shadowMap = _e;
      R.state = pe;
      R.info = ge;
    }
    Be();
    const Ge = new It(R, ze);
    function Fe(e) {
      e.preventDefault();
      (0, i.Rm2)("WebGLRenderer: Context Lost.");
      P = true;
    }
    function Oe() {
      (0, i.Rm2)("WebGLRenderer: Context Restored.");
      P = false;
      const e = ge.autoReset;
      const t = _e.enabled;
      const n = _e.autoUpdate;
      const r = _e.needsUpdate;
      const a = _e.type;
      Be();
      ge.autoReset = e;
      _e.enabled = t;
      _e.autoUpdate = n;
      _e.needsUpdate = r;
      _e.type = a;
    }
    function We(e) {
      (0, i.z3S)("WebGLRenderer: A WebGL context could not be created. Reason: ", e.statusMessage);
    }
    function Ve(e) {
      const t = e.target;
      t.removeEventListener("dispose", Ve);
      (function (e) {
        (function (e) {
          const t = me.get(e).programs;
          if (t !== undefined) {
            t.forEach(function (e) {
              Se.releaseProgram(e);
            });
            if (e.isShaderMaterial) {
              Se.releaseShaderCache(e);
            }
          }
        })(e);
        me.remove(e);
      })(t);
    }
    function je(e, t, n) {
      if (e.transparent === true && e.side === i.$EB && e.forceSinglePass === false) {
        e.side = i.hsX;
        e.needsUpdate = true;
        tt(e, t, n);
        e.side = i.hB5;
        e.needsUpdate = true;
        tt(e, t, n);
        e.side = i.$EB;
      } else {
        tt(e, t, n);
      }
    }
    this.xr = Ge;
    this.getContext = function () {
      return ze;
    };
    this.getContextAttributes = function () {
      return ze.getContextAttributes();
    };
    this.forceContextLoss = function () {
      const e = ue.get("WEBGL_lose_context");
      if (e) {
        e.loseContext();
      }
    };
    this.forceContextRestore = function () {
      const e = ue.get("WEBGL_lose_context");
      if (e) {
        e.restoreContext();
      }
    };
    this.getPixelRatio = function () {
      return Y;
    };
    this.setPixelRatio = function (e) {
      if (e !== undefined) {
        Y = e;
        this.setSize(J, X, false);
      }
    };
    this.getSize = function (e) {
      return e.set(J, X);
    };
    this.setSize = function (e, n, r = true) {
      if (Ge.isPresenting) {
        (0, i.R8M)("WebGLRenderer: Can't change size while VR device is presenting.");
      } else {
        J = e;
        X = n;
        t.width = Math.floor(e * Y);
        t.height = Math.floor(n * Y);
        if (r === true) {
          t.style.width = e + "px";
          t.style.height = n + "px";
        }
        this.setViewport(0, 0, e, n);
      }
    };
    this.getDrawingBufferSize = function (e) {
      return e.set(J * Y, X * Y).floor();
    };
    this.setDrawingBufferSize = function (e, n, i) {
      J = e;
      X = n;
      Y = i;
      t.width = Math.floor(e * i);
      t.height = Math.floor(n * i);
      this.setViewport(0, 0, e, n);
    };
    this.getCurrentViewport = function (e) {
      return e.copy(H);
    };
    this.getViewport = function (e) {
      return e.copy(ee);
    };
    this.setViewport = function (e, t, n, i) {
      if (e.isVector4) {
        ee.set(e.x, e.y, e.z, e.w);
      } else {
        ee.set(e, t, n, i);
      }
      pe.viewport(H.copy(ee).multiplyScalar(Y).round());
    };
    this.getScissor = function (e) {
      return e.copy(te);
    };
    this.setScissor = function (e, t, n, i) {
      if (e.isVector4) {
        te.set(e.x, e.y, e.z, e.w);
      } else {
        te.set(e, t, n, i);
      }
      pe.scissor(j.copy(te).multiplyScalar(Y).round());
    };
    this.getScissorTest = function () {
      return ne;
    };
    this.setScissorTest = function (e) {
      pe.setScissorTest(ne = e);
    };
    this.setOpaqueSort = function (e) {
      Z = e;
    };
    this.setTransparentSort = function (e) {
      $ = e;
    };
    this.getClearColor = function (e) {
      return e.copy(Ce.getClearColor());
    };
    this.setClearColor = function () {
      Ce.setClearColor(...arguments);
    };
    this.getClearAlpha = function () {
      return Ce.getClearAlpha();
    };
    this.setClearAlpha = function () {
      Ce.setClearAlpha(...arguments);
    };
    this.clear = function (e = true, t = true, n = true) {
      let i = 0;
      if (e) {
        let e = false;
        if (O !== null) {
          const t = O.texture.format;
          e = x.has(t);
        }
        if (e) {
          const e = O.texture.type;
          const t = S.has(e);
          const n = Ce.getClearColor();
          const i = Ce.getClearAlpha();
          const r = n.r;
          const a = n.g;
          const s = n.b;
          if (t) {
            k[0] = r;
            k[1] = a;
            k[2] = s;
            k[3] = i;
            ze.clearBufferuiv(ze.COLOR, 0, k);
          } else {
            T[0] = r;
            T[1] = a;
            T[2] = s;
            T[3] = i;
            ze.clearBufferiv(ze.COLOR, 0, T);
          }
        } else {
          i |= ze.COLOR_BUFFER_BIT;
        }
      }
      if (t) {
        i |= ze.DEPTH_BUFFER_BIT;
      }
      if (n) {
        i |= ze.STENCIL_BUFFER_BIT;
        this.state.buffers.stencil.setMask(4294967295);
      }
      ze.clear(i);
    };
    this.clearColor = function () {
      this.clear(true, false, false);
    };
    this.clearDepth = function () {
      this.clear(false, true, false);
    };
    this.clearStencil = function () {
      this.clear(false, false, true);
    };
    this.dispose = function () {
      t.removeEventListener("webglcontextlost", Fe, false);
      t.removeEventListener("webglcontextrestored", Oe, false);
      t.removeEventListener("webglcontextcreationerror", We, false);
      Ce.dispose();
      Te.dispose();
      Ee.dispose();
      me.dispose();
      ve.dispose();
      be.dispose();
      xe.dispose();
      Ue.dispose();
      Ne.dispose();
      Se.dispose();
      Ge.dispose();
      Ge.removeEventListener("sessionstart", qe);
      Ge.removeEventListener("sessionend", Qe);
      Je.stop();
    };
    this.renderBufferDirect = function (e, t, n, r, a, s) {
      if (t === null) {
        t = ce;
      }
      const o = a.isMesh && a.matrixWorld.determinant() < 0;
      const l = function (e, t, n, r, a) {
        if (t.isScene !== true) {
          t = ce;
        }
        Ae.resetTextureUnits();
        const s = t.fog;
        const o = r.isMeshStandardMaterial ? t.environment : null;
        const l = O === null ? R.outputColorSpace : O.isXRRenderTarget === true ? O.texture.colorSpace : i.Zr2;
        const c = (r.isMeshStandardMaterial ? be : ve).get(r.envMap || o);
        const h = r.vertexColors === true && !!n.attributes.color && n.attributes.color.itemSize === 4;
        const d = !!n.attributes.tangent && (!!r.normalMap || r.anisotropy > 0);
        const u = !!n.morphAttributes.position;
        const f = !!n.morphAttributes.normal;
        const p = !!n.morphAttributes.color;
        let g = i.y_p;
        if (r.toneMapped) {
          if (O === null || O.isXRRenderTarget === true) {
            g = R.toneMapping;
          }
        }
        const m = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color;
        const A = m !== undefined ? m.length : 0;
        const v = me.get(r);
        const b = M.state.lights;
        if (re === true && (ae === true || e !== V)) {
          const t = e === V && r.id === W;
          Me.setState(r, e, t);
        }
        let y = false;
        if (r.version === v.__version) {
          if (v.needsLights && v.lightsStateVersion !== b.state.version || v.outputColorSpace !== l || a.isBatchedMesh && v.batching === false) {
            y = true;
          } else if (a.isBatchedMesh || v.batching !== true) {
            if (a.isBatchedMesh && v.batchingColor === true && a.colorTexture === null || a.isBatchedMesh && v.batchingColor === false && a.colorTexture !== null || a.isInstancedMesh && v.instancing === false) {
              y = true;
            } else if (a.isInstancedMesh || v.instancing !== true) {
              if (a.isSkinnedMesh && v.skinning === false) {
                y = true;
              } else if (a.isSkinnedMesh || v.skinning !== true) {
                if (a.isInstancedMesh && v.instancingColor === true && a.instanceColor === null || a.isInstancedMesh && v.instancingColor === false && a.instanceColor !== null || a.isInstancedMesh && v.instancingMorph === true && a.morphTexture === null || a.isInstancedMesh && v.instancingMorph === false && a.morphTexture !== null || v.envMap !== c || r.fog === true && v.fog !== s) {
                  y = true;
                } else if (v.numClippingPlanes === undefined || v.numClippingPlanes === Me.numPlanes && v.numIntersection === Me.numIntersection) {
                  if (v.vertexAlphas !== h || v.vertexTangents !== d || v.morphTargets !== u || v.morphNormals !== f || v.morphColors !== p || v.toneMapping !== g || v.morphTargetsCount !== A) {
                    y = true;
                  }
                } else {
                  y = true;
                }
              } else {
                y = true;
              }
            } else {
              y = true;
            }
          } else {
            y = true;
          }
        } else {
          y = true;
          v.__version = r.version;
        }
        let w = v.currentProgram;
        if (y === true) {
          w = tt(r, t, a);
        }
        let x = false;
        let S = false;
        let k = false;
        const T = w.getUniforms();
        const E = v.uniforms;
        if (pe.useProgram(w.program)) {
          x = true;
          S = true;
          k = true;
        }
        if (r.id !== W) {
          W = r.id;
          S = true;
        }
        if (x || V !== e) {
          if (pe.buffers.depth.getReversed() && e.reversedDepth !== true) {
            e._reversedDepth = true;
            e.updateProjectionMatrix();
          }
          T.setValue(ze, "projectionMatrix", e.projectionMatrix);
          T.setValue(ze, "viewMatrix", e.matrixWorldInverse);
          const t = T.map.cameraPosition;
          if (t !== undefined) {
            t.setValue(ze, oe.setFromMatrixPosition(e.matrixWorld));
          }
          if (fe.logarithmicDepthBuffer) {
            T.setValue(ze, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2));
          }
          if (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial) {
            T.setValue(ze, "isOrthographic", e.isOrthographicCamera === true);
          }
          if (V !== e) {
            V = e;
            S = true;
            k = true;
          }
        }
        if (a.isSkinnedMesh) {
          T.setOptional(ze, a, "bindMatrix");
          T.setOptional(ze, a, "bindMatrixInverse");
          const e = a.skeleton;
          if (e) {
            if (e.boneTexture === null) {
              e.computeBoneTexture();
            }
            T.setValue(ze, "boneTexture", e.boneTexture, Ae);
          }
        }
        if (a.isBatchedMesh) {
          T.setOptional(ze, a, "batchingTexture");
          T.setValue(ze, "batchingTexture", a._matricesTexture, Ae);
          T.setOptional(ze, a, "batchingIdTexture");
          T.setValue(ze, "batchingIdTexture", a._indirectTexture, Ae);
          T.setOptional(ze, a, "batchingColorTexture");
          if (a._colorsTexture !== null) {
            T.setValue(ze, "batchingColorTexture", a._colorsTexture, Ae);
          }
        }
        const _ = n.morphAttributes;
        if (_.position !== undefined || _.normal !== undefined || _.color !== undefined) {
          Re.update(a, n, w);
        }
        if (S || v.receiveShadow !== a.receiveShadow) {
          v.receiveShadow = a.receiveShadow;
          T.setValue(ze, "receiveShadow", a.receiveShadow);
        }
        if (r.isMeshGouraudMaterial && r.envMap !== null) {
          E.envMap.value = c;
          E.flipEnvMap.value = c.isCubeTexture && c.isRenderTargetTexture === false ? -1 : 1;
        }
        if (r.isMeshStandardMaterial && r.envMap === null && t.environment !== null) {
          E.envMapIntensity.value = t.environmentIntensity;
        }
        if (E.dfgLUT !== undefined) {
          E.dfgLUT.value = (Bt === null && (Bt = new i.GYF(Dt, 32, 32, i.paN, i.ix0), Bt.minFilter = i.k6q, Bt.magFilter = i.k6q, Bt.wrapS = i.ghU, Bt.wrapT = i.ghU, Bt.generateMipmaps = false, Bt.needsUpdate = true), Bt);
        }
        if (S) {
          T.setValue(ze, "toneMappingExposure", R.toneMappingExposure);
          if (v.needsLights) {
            P = k;
            (C = E).ambientLightColor.needsUpdate = P;
            C.lightProbe.needsUpdate = P;
            C.directionalLights.needsUpdate = P;
            C.directionalLightShadows.needsUpdate = P;
            C.pointLights.needsUpdate = P;
            C.pointLightShadows.needsUpdate = P;
            C.spotLights.needsUpdate = P;
            C.spotLightShadows.needsUpdate = P;
            C.rectAreaLights.needsUpdate = P;
            C.hemisphereLights.needsUpdate = P;
          }
          if (s && r.fog === true) {
            ke.refreshFogUniforms(E, s);
          }
          ke.refreshMaterialUniforms(E, r, Y, X, M.state.transmissionRenderTarget[e.id]);
          He.upload(ze, nt(v), E, Ae);
        }
        var C;
        var P;
        if (r.isShaderMaterial && r.uniformsNeedUpdate === true) {
          He.upload(ze, nt(v), E, Ae);
          r.uniformsNeedUpdate = false;
        }
        if (r.isSpriteMaterial) {
          T.setValue(ze, "center", a.center);
        }
        T.setValue(ze, "modelViewMatrix", a.modelViewMatrix);
        T.setValue(ze, "normalMatrix", a.normalMatrix);
        T.setValue(ze, "modelMatrix", a.matrixWorld);
        if (r.isShaderMaterial || r.isRawShaderMaterial) {
          const e = r.uniformsGroups;
          for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t];
            Ne.update(n, w);
            Ne.bind(n, w);
          }
        }
        return w;
      }(e, t, n, r, a);
      pe.setMaterial(r, o);
      let c = n.index;
      let h = 1;
      if (r.wireframe === true) {
        c = we.getWireframeAttribute(n);
        if (c === undefined) {
          return;
        }
        h = 2;
      }
      const d = n.drawRange;
      const u = n.attributes.position;
      let f = d.start * h;
      let p = (d.start + d.count) * h;
      if (s !== null) {
        f = Math.max(f, s.start * h);
        p = Math.min(p, (s.start + s.count) * h);
      }
      if (c !== null) {
        f = Math.max(f, 0);
        p = Math.min(p, c.count);
      } else if (u != null) {
        f = Math.max(f, 0);
        p = Math.min(p, u.count);
      }
      const g = p - f;
      if (g < 0 || g === Infinity) {
        return;
      }
      let m;
      Ue.setup(a, r, l, n, c);
      let A = Pe;
      if (c !== null) {
        m = ye.get(c);
        A = Ie;
        A.setIndex(m);
      }
      if (a.isMesh) {
        if (r.wireframe === true) {
          pe.setLineWidth(r.wireframeLinewidth * de());
          A.setMode(ze.LINES);
        } else {
          A.setMode(ze.TRIANGLES);
        }
      } else if (a.isLine) {
        let e = r.linewidth;
        if (e === undefined) {
          e = 1;
        }
        pe.setLineWidth(e * de());
        if (a.isLineSegments) {
          A.setMode(ze.LINES);
        } else if (a.isLineLoop) {
          A.setMode(ze.LINE_LOOP);
        } else {
          A.setMode(ze.LINE_STRIP);
        }
      } else if (a.isPoints) {
        A.setMode(ze.POINTS);
      } else if (a.isSprite) {
        A.setMode(ze.TRIANGLES);
      }
      if (a.isBatchedMesh) {
        if (a._multiDrawInstances !== null) {
          (0, i.mcG)("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.");
          A.renderMultiDrawInstances(a._multiDrawStarts, a._multiDrawCounts, a._multiDrawCount, a._multiDrawInstances);
        } else if (ue.get("WEBGL_multi_draw")) {
          A.renderMultiDraw(a._multiDrawStarts, a._multiDrawCounts, a._multiDrawCount);
        } else {
          const e = a._multiDrawStarts;
          const t = a._multiDrawCounts;
          const n = a._multiDrawCount;
          const i = c ? ye.get(c).bytesPerElement : 1;
          const s = me.get(r).currentProgram.getUniforms();
          for (let r = 0; r < n; r++) {
            s.setValue(ze, "_gl_DrawID", r);
            A.render(e[r] / i, t[r]);
          }
        }
      } else if (a.isInstancedMesh) {
        A.renderInstances(f, g, a.count);
      } else if (n.isInstancedBufferGeometry) {
        const e = n._maxInstanceCount !== undefined ? n._maxInstanceCount : Infinity;
        const t = Math.min(n.instanceCount, e);
        A.renderInstances(f, g, t);
      } else {
        A.render(f, g);
      }
    };
    this.compile = function (e, t, n = null) {
      if (n === null) {
        n = e;
      }
      M = Ee.get(n);
      M.init(t);
      C.push(M);
      n.traverseVisible(function (e) {
        if (e.isLight && e.layers.test(t.layers)) {
          M.pushLight(e);
          if (e.castShadow) {
            M.pushShadow(e);
          }
        }
      });
      if (e !== n) {
        e.traverseVisible(function (e) {
          if (e.isLight && e.layers.test(t.layers)) {
            M.pushLight(e);
            if (e.castShadow) {
              M.pushShadow(e);
            }
          }
        });
      }
      M.setupLights();
      const i = new Set();
      e.traverse(function (e) {
        if (!e.isMesh && !e.isPoints && !e.isLine && !e.isSprite) {
          return;
        }
        const t = e.material;
        if (t) {
          if (Array.isArray(t)) {
            for (let r = 0; r < t.length; r++) {
              const a = t[r];
              je(a, n, e);
              i.add(a);
            }
          } else {
            je(t, n, e);
            i.add(t);
          }
        }
      });
      M = C.pop();
      return i;
    };
    this.compileAsync = function (e, t, n = null) {
      const i = this.compile(e, t, n);
      return new Promise(t => {
        function n() {
          i.forEach(function (e) {
            if (me.get(e).currentProgram.isReady()) {
              i.delete(e);
            }
          });
          if (i.size !== 0) {
            setTimeout(n, 10);
          } else {
            t(e);
          }
        }
        if (ue.get("KHR_parallel_shader_compile") !== null) {
          n();
        } else {
          setTimeout(n, 10);
        }
      });
    };
    let Ke = null;
    function qe() {
      Je.stop();
    }
    function Qe() {
      Je.start();
    }
    const Je = new r();
    function Xe(e, t, n, i) {
      if (e.visible === false) {
        return;
      }
      if (e.layers.test(t.layers)) {
        if (e.isGroup) {
          n = e.renderOrder;
        } else if (e.isLOD) {
          if (e.autoUpdate === true) {
            e.update(t);
          }
        } else if (e.isLight) {
          M.pushLight(e);
          if (e.castShadow) {
            M.pushShadow(e);
          }
        } else if (e.isSprite) {
          if (!e.frustumCulled || ie.intersectsSprite(e)) {
            if (i) {
              le.setFromMatrixPosition(e.matrixWorld).applyMatrix4(se);
            }
            const t = xe.update(e);
            const r = e.material;
            if (r.visible) {
              E.push(e, t, r, n, le.z, null);
            }
          }
        } else if ((e.isMesh || e.isLine || e.isPoints) && (!e.frustumCulled || ie.intersectsObject(e))) {
          const t = xe.update(e);
          const r = e.material;
          if (i) {
            if (e.boundingSphere !== undefined) {
              if (e.boundingSphere === null) {
                e.computeBoundingSphere();
              }
              le.copy(e.boundingSphere.center);
            } else {
              if (t.boundingSphere === null) {
                t.computeBoundingSphere();
              }
              le.copy(t.boundingSphere.center);
            }
            le.applyMatrix4(e.matrixWorld).applyMatrix4(se);
          }
          if (Array.isArray(r)) {
            const i = t.groups;
            for (let a = 0, s = i.length; a < s; a++) {
              const s = i[a];
              const o = r[s.materialIndex];
              if (o && o.visible) {
                E.push(e, t, o, n, le.z, s);
              }
            }
          } else if (r.visible) {
            E.push(e, t, r, n, le.z, null);
          }
        }
      }
      const r = e.children;
      for (let e = 0, a = r.length; e < a; e++) {
        Xe(r[e], t, n, i);
      }
    }
    function Ye(e, t, n, i) {
      const {
        opaque: r,
        transmissive: a,
        transparent: s
      } = e;
      M.setupLightsView(n);
      if (re === true) {
        Me.setGlobalState(R.clippingPlanes, n);
      }
      if (i) {
        pe.viewport(H.copy(i));
      }
      if (r.length > 0) {
        $e(r, t, n);
      }
      if (a.length > 0) {
        $e(a, t, n);
      }
      if (s.length > 0) {
        $e(s, t, n);
      }
      pe.buffers.depth.setTest(true);
      pe.buffers.depth.setMask(true);
      pe.buffers.color.setMask(true);
      pe.setPolygonOffset(false);
    }
    function Ze(e, t, n, r) {
      if ((n.isScene === true ? n.overrideMaterial : null) !== null) {
        return;
      }
      if (M.state.transmissionRenderTarget[r.id] === undefined) {
        M.state.transmissionRenderTarget[r.id] = new i.nWS(1, 1, {
          generateMipmaps: true,
          type: ue.has("EXT_color_buffer_half_float") || ue.has("EXT_color_buffer_float") ? i.ix0 : i.OUM,
          minFilter: i.$_I,
          samples: 4,
          stencilBuffer: o,
          resolveDepthBuffer: false,
          resolveStencilBuffer: false,
          colorSpace: i.ppV.workingColorSpace
        });
      }
      const a = M.state.transmissionRenderTarget[r.id];
      const s = r.viewport || H;
      a.setSize(s.z * R.transmissionResolutionScale, s.w * R.transmissionResolutionScale);
      const l = R.getRenderTarget();
      const c = R.getActiveCubeFace();
      const h = R.getActiveMipmapLevel();
      R.setRenderTarget(a);
      R.getClearColor(q);
      Q = R.getClearAlpha();
      if (Q < 1) {
        R.setClearColor(16777215, 0.5);
      }
      R.clear();
      if (he) {
        Ce.render(n);
      }
      const d = R.toneMapping;
      R.toneMapping = i.y_p;
      const u = r.viewport;
      if (r.viewport !== undefined) {
        r.viewport = undefined;
      }
      M.setupLightsView(r);
      if (re === true) {
        Me.setGlobalState(R.clippingPlanes, r);
      }
      $e(e, n, r);
      Ae.updateMultisampleRenderTarget(a);
      Ae.updateRenderTargetMipmap(a);
      if (ue.has("WEBGL_multisampled_render_to_texture") === false) {
        let e = false;
        for (let a = 0, s = t.length; a < s; a++) {
          const s = t[a];
          const {
            object: o,
            geometry: l,
            material: c,
            group: h
          } = s;
          if (c.side === i.$EB && o.layers.test(r.layers)) {
            const t = c.side;
            c.side = i.hsX;
            c.needsUpdate = true;
            et(o, n, r, l, c, h);
            c.side = t;
            c.needsUpdate = true;
            e = true;
          }
        }
        if (e === true) {
          Ae.updateMultisampleRenderTarget(a);
          Ae.updateRenderTargetMipmap(a);
        }
      }
      R.setRenderTarget(l, c, h);
      R.setClearColor(q, Q);
      if (u !== undefined) {
        r.viewport = u;
      }
      R.toneMapping = d;
    }
    function $e(e, t, n) {
      const i = t.isScene === true ? t.overrideMaterial : null;
      for (let r = 0, a = e.length; r < a; r++) {
        const a = e[r];
        const {
          object: s,
          geometry: o,
          group: l
        } = a;
        let c = a.material;
        if (c.allowOverride === true && i !== null) {
          c = i;
        }
        if (s.layers.test(n.layers)) {
          et(s, t, n, o, c, l);
        }
      }
    }
    function et(e, t, n, r, a, s) {
      e.onBeforeRender(R, t, n, r, a, s);
      e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld);
      e.normalMatrix.getNormalMatrix(e.modelViewMatrix);
      a.onBeforeRender(R, t, n, r, e, s);
      if (a.transparent === true && a.side === i.$EB && a.forceSinglePass === false) {
        a.side = i.hsX;
        a.needsUpdate = true;
        R.renderBufferDirect(n, t, r, a, e, s);
        a.side = i.hB5;
        a.needsUpdate = true;
        R.renderBufferDirect(n, t, r, a, e, s);
        a.side = i.$EB;
      } else {
        R.renderBufferDirect(n, t, r, a, e, s);
      }
      e.onAfterRender(R, t, n, r, a, s);
    }
    function tt(e, t, n) {
      if (t.isScene !== true) {
        t = ce;
      }
      const i = me.get(e);
      const r = M.state.lights;
      const a = M.state.shadowsArray;
      const s = r.state.version;
      const o = Se.getParameters(e, r.state, a, t, n);
      const l = Se.getProgramCacheKey(o);
      let c = i.programs;
      i.environment = e.isMeshStandardMaterial ? t.environment : null;
      i.fog = t.fog;
      i.envMap = (e.isMeshStandardMaterial ? be : ve).get(e.envMap || i.environment);
      i.envMapRotation = i.environment !== null && e.envMap === null ? t.environmentRotation : e.envMapRotation;
      if (c === undefined) {
        e.addEventListener("dispose", Ve);
        c = new Map();
        i.programs = c;
      }
      let h = c.get(l);
      if (h !== undefined) {
        if (i.currentProgram === h && i.lightsStateVersion === s) {
          it(e, o);
          return h;
        }
      } else {
        o.uniforms = Se.getUniforms(e);
        e.onBeforeCompile(o, R);
        h = Se.acquireProgram(o, l);
        c.set(l, h);
        i.uniforms = o.uniforms;
      }
      const d = i.uniforms;
      if (!e.isShaderMaterial && !e.isRawShaderMaterial || e.clipping === true) {
        d.clippingPlanes = Me.uniform;
      }
      it(e, o);
      i.needsLights = function (e) {
        return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && e.lights === true;
      }(e);
      i.lightsStateVersion = s;
      if (i.needsLights) {
        d.ambientLightColor.value = r.state.ambient;
        d.lightProbe.value = r.state.probe;
        d.directionalLights.value = r.state.directional;
        d.directionalLightShadows.value = r.state.directionalShadow;
        d.spotLights.value = r.state.spot;
        d.spotLightShadows.value = r.state.spotShadow;
        d.rectAreaLights.value = r.state.rectArea;
        d.ltc_1.value = r.state.rectAreaLTC1;
        d.ltc_2.value = r.state.rectAreaLTC2;
        d.pointLights.value = r.state.point;
        d.pointLightShadows.value = r.state.pointShadow;
        d.hemisphereLights.value = r.state.hemi;
        d.directionalShadowMap.value = r.state.directionalShadowMap;
        d.directionalShadowMatrix.value = r.state.directionalShadowMatrix;
        d.spotShadowMap.value = r.state.spotShadowMap;
        d.spotLightMatrix.value = r.state.spotLightMatrix;
        d.spotLightMap.value = r.state.spotLightMap;
        d.pointShadowMap.value = r.state.pointShadowMap;
        d.pointShadowMatrix.value = r.state.pointShadowMatrix;
      }
      i.currentProgram = h;
      i.uniformsList = null;
      return h;
    }
    function nt(e) {
      if (e.uniformsList === null) {
        const t = e.currentProgram.getUniforms();
        e.uniformsList = He.seqWithValue(t.seq, e.uniforms);
      }
      return e.uniformsList;
    }
    function it(e, t) {
      const n = me.get(e);
      n.outputColorSpace = t.outputColorSpace;
      n.batching = t.batching;
      n.batchingColor = t.batchingColor;
      n.instancing = t.instancing;
      n.instancingColor = t.instancingColor;
      n.instancingMorph = t.instancingMorph;
      n.skinning = t.skinning;
      n.morphTargets = t.morphTargets;
      n.morphNormals = t.morphNormals;
      n.morphColors = t.morphColors;
      n.morphTargetsCount = t.morphTargetsCount;
      n.numClippingPlanes = t.numClippingPlanes;
      n.numIntersection = t.numClipIntersection;
      n.vertexAlphas = t.vertexAlphas;
      n.vertexTangents = t.vertexTangents;
      n.toneMapping = t.toneMapping;
    }
    Je.setAnimationLoop(function (e) {
      if (Ke) {
        Ke(e);
      }
    });
    if (typeof self != "undefined") {
      Je.setContext(self);
    }
    this.setAnimationLoop = function (e) {
      Ke = e;
      Ge.setAnimationLoop(e);
      if (e === null) {
        Je.stop();
      } else {
        Je.start();
      }
    };
    Ge.addEventListener("sessionstart", qe);
    Ge.addEventListener("sessionend", Qe);
    this.render = function (e, t) {
      if (t !== undefined && t.isCamera !== true) {
        (0, i.z3S)("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (P === true) {
        return;
      }
      if (e.matrixWorldAutoUpdate === true) {
        e.updateMatrixWorld();
      }
      if (t.parent === null && t.matrixWorldAutoUpdate === true) {
        t.updateMatrixWorld();
      }
      if (Ge.enabled === true && Ge.isPresenting === true) {
        if (Ge.cameraAutoUpdate === true) {
          Ge.updateCamera(t);
        }
        t = Ge.getCamera();
      }
      if (e.isScene === true) {
        e.onBeforeRender(R, e, t, O);
      }
      M = Ee.get(e, C.length);
      M.init(t);
      C.push(M);
      se.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse);
      ie.setFromProjectionMatrix(se, i.TdN, t.reversedDepth);
      ae = this.localClippingEnabled;
      re = Me.init(this.clippingPlanes, ae);
      E = Te.get(e, _.length);
      E.init();
      _.push(E);
      if (Ge.enabled === true && Ge.isPresenting === true) {
        const e = R.xr.getDepthSensingMesh();
        if (e !== null) {
          Xe(e, t, -Infinity, R.sortObjects);
        }
      }
      Xe(e, t, 0, R.sortObjects);
      E.finish();
      if (R.sortObjects === true) {
        E.sort(Z, $);
      }
      he = Ge.enabled === false || Ge.isPresenting === false || Ge.hasDepthSensing() === false;
      if (he) {
        Ce.addToRenderList(E, e);
      }
      this.info.render.frame++;
      if (re === true) {
        Me.beginShadows();
      }
      const n = M.state.shadowsArray;
      _e.render(n, e, t);
      if (re === true) {
        Me.endShadows();
      }
      if (this.info.autoReset === true) {
        this.info.reset();
      }
      const r = E.opaque;
      const a = E.transmissive;
      M.setupLights();
      if (t.isArrayCamera) {
        const n = t.cameras;
        if (a.length > 0) {
          for (let t = 0, i = n.length; t < i; t++) {
            Ze(r, a, e, n[t]);
          }
        }
        if (he) {
          Ce.render(e);
        }
        for (let t = 0, i = n.length; t < i; t++) {
          const i = n[t];
          Ye(E, e, i, i.viewport);
        }
      } else {
        if (a.length > 0) {
          Ze(r, a, e, t);
        }
        if (he) {
          Ce.render(e);
        }
        Ye(E, e, t);
      }
      if (O !== null && F === 0) {
        Ae.updateMultisampleRenderTarget(O);
        Ae.updateRenderTargetMipmap(O);
      }
      if (e.isScene === true) {
        e.onAfterRender(R, e, t);
      }
      Ue.resetDefaultState();
      W = -1;
      V = null;
      C.pop();
      if (C.length > 0) {
        M = C[C.length - 1];
        if (re === true) {
          Me.setGlobalState(R.clippingPlanes, M.state.camera);
        }
      } else {
        M = null;
      }
      _.pop();
      E = _.length > 0 ? _[_.length - 1] : null;
    };
    this.getActiveCubeFace = function () {
      return I;
    };
    this.getActiveMipmapLevel = function () {
      return F;
    };
    this.getRenderTarget = function () {
      return O;
    };
    this.setRenderTargetTextures = function (e, t, n) {
      const i = me.get(e);
      i.__autoAllocateDepthBuffer = e.resolveDepthBuffer === false;
      if (i.__autoAllocateDepthBuffer === false) {
        i.__useRenderToTexture = false;
      }
      me.get(e.texture).__webglTexture = t;
      me.get(e.depthTexture).__webglTexture = i.__autoAllocateDepthBuffer ? undefined : n;
      i.__hasExternalTextures = true;
    };
    this.setRenderTargetFramebuffer = function (e, t) {
      const n = me.get(e);
      n.__webglFramebuffer = t;
      n.__useDefaultFramebuffer = t === undefined;
    };
    const rt = ze.createFramebuffer();
    this.setRenderTarget = function (e, t = 0, n = 0) {
      O = e;
      I = t;
      F = n;
      let i = true;
      let r = null;
      let a = false;
      let s = false;
      if (e) {
        const o = me.get(e);
        if (o.__useDefaultFramebuffer !== undefined) {
          pe.bindFramebuffer(ze.FRAMEBUFFER, null);
          i = false;
        } else if (o.__webglFramebuffer === undefined) {
          Ae.setupRenderTarget(e);
        } else if (o.__hasExternalTextures) {
          Ae.rebindTextures(e, me.get(e.texture).__webglTexture, me.get(e.depthTexture).__webglTexture);
        } else if (e.depthBuffer) {
          const t = e.depthTexture;
          if (o.__boundDepthTexture !== t) {
            if (t !== null && me.has(t) && (e.width !== t.image.width || e.height !== t.image.height)) {
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            }
            Ae.setupDepthRenderbuffer(e);
          }
        }
        const l = e.texture;
        if (l.isData3DTexture || l.isDataArrayTexture || l.isCompressedArrayTexture) {
          s = true;
        }
        const c = me.get(e).__webglFramebuffer;
        if (e.isWebGLCubeRenderTarget) {
          r = Array.isArray(c[t]) ? c[t][n] : c[t];
          a = true;
        } else {
          r = e.samples > 0 && Ae.useMultisampledRTT(e) === false ? me.get(e).__webglMultisampledFramebuffer : Array.isArray(c) ? c[n] : c;
        }
        H.copy(e.viewport);
        j.copy(e.scissor);
        K = e.scissorTest;
      } else {
        H.copy(ee).multiplyScalar(Y).floor();
        j.copy(te).multiplyScalar(Y).floor();
        K = ne;
      }
      if (n !== 0) {
        r = rt;
      }
      if (pe.bindFramebuffer(ze.FRAMEBUFFER, r) && i) {
        pe.drawBuffers(e, r);
      }
      pe.viewport(H);
      pe.scissor(j);
      pe.setScissorTest(K);
      if (a) {
        const i = me.get(e.texture);
        ze.framebufferTexture2D(ze.FRAMEBUFFER, ze.COLOR_ATTACHMENT0, ze.TEXTURE_CUBE_MAP_POSITIVE_X + t, i.__webglTexture, n);
      } else if (s) {
        const i = t;
        for (let t = 0; t < e.textures.length; t++) {
          const r = me.get(e.textures[t]);
          ze.framebufferTextureLayer(ze.FRAMEBUFFER, ze.COLOR_ATTACHMENT0 + t, r.__webglTexture, n, i);
        }
      } else if (e !== null && n !== 0) {
        const t = me.get(e.texture);
        ze.framebufferTexture2D(ze.FRAMEBUFFER, ze.COLOR_ATTACHMENT0, ze.TEXTURE_2D, t.__webglTexture, n);
      }
      W = -1;
    };
    this.readRenderTargetPixels = function (e, t, n, r, a, s, o, l = 0) {
      if (!e || !e.isWebGLRenderTarget) {
        (0, i.z3S)("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let c = me.get(e).__webglFramebuffer;
      if (e.isWebGLCubeRenderTarget && o !== undefined) {
        c = c[o];
      }
      if (c) {
        pe.bindFramebuffer(ze.FRAMEBUFFER, c);
        try {
          const o = e.textures[l];
          const c = o.format;
          const h = o.type;
          if (!fe.textureFormatReadable(c)) {
            (0, i.z3S)("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!fe.textureTypeReadable(h)) {
            (0, i.z3S)("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          if (t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - a) {
            if (e.textures.length > 1) {
              ze.readBuffer(ze.COLOR_ATTACHMENT0 + l);
            }
            ze.readPixels(t, n, r, a, Le.convert(c), Le.convert(h), s);
          }
        } finally {
          const e = O !== null ? me.get(O).__webglFramebuffer : null;
          pe.bindFramebuffer(ze.FRAMEBUFFER, e);
        }
      }
    };
    this.readRenderTargetPixelsAsync = async function (e, t, n, r, a, s, o, l = 0) {
      if (!e || !e.isWebGLRenderTarget) {
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      }
      let c = me.get(e).__webglFramebuffer;
      if (e.isWebGLCubeRenderTarget && o !== undefined) {
        c = c[o];
      }
      if (c) {
        if (t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - a) {
          pe.bindFramebuffer(ze.FRAMEBUFFER, c);
          const o = e.textures[l];
          const h = o.format;
          const d = o.type;
          if (!fe.textureFormatReadable(h)) {
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          }
          if (!fe.textureTypeReadable(d)) {
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          }
          const u = ze.createBuffer();
          ze.bindBuffer(ze.PIXEL_PACK_BUFFER, u);
          ze.bufferData(ze.PIXEL_PACK_BUFFER, s.byteLength, ze.STREAM_READ);
          if (e.textures.length > 1) {
            ze.readBuffer(ze.COLOR_ATTACHMENT0 + l);
          }
          ze.readPixels(t, n, r, a, Le.convert(h), Le.convert(d), 0);
          const f = O !== null ? me.get(O).__webglFramebuffer : null;
          pe.bindFramebuffer(ze.FRAMEBUFFER, f);
          const p = ze.fenceSync(ze.SYNC_GPU_COMMANDS_COMPLETE, 0);
          ze.flush();
          await (0, i.jej)(ze, p, 4);
          ze.bindBuffer(ze.PIXEL_PACK_BUFFER, u);
          ze.getBufferSubData(ze.PIXEL_PACK_BUFFER, 0, s);
          ze.deleteBuffer(u);
          ze.deleteSync(p);
          return s;
        }
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    };
    this.copyFramebufferToTexture = function (e, t = null, n = 0) {
      const i = Math.pow(2, -n);
      const r = Math.floor(e.image.width * i);
      const a = Math.floor(e.image.height * i);
      const s = t !== null ? t.x : 0;
      const o = t !== null ? t.y : 0;
      Ae.setTexture2D(e, 0);
      ze.copyTexSubImage2D(ze.TEXTURE_2D, n, 0, 0, s, o, r, a);
      pe.unbindTexture();
    };
    const at = ze.createFramebuffer();
    const st = ze.createFramebuffer();
    this.copyTextureToTexture = function (e, t, n = null, r = null, a = 0, s = null) {
      let o;
      let l;
      let c;
      let h;
      let d;
      let u;
      let f;
      let p;
      let g;
      if (s === null) {
        if (a !== 0) {
          (0, i.mcG)("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.");
          s = a;
          a = 0;
        } else {
          s = 0;
        }
      }
      const m = e.isCompressedTexture ? e.mipmaps[s] : e.image;
      if (n !== null) {
        o = n.max.x - n.min.x;
        l = n.max.y - n.min.y;
        c = n.isBox3 ? n.max.z - n.min.z : 1;
        h = n.min.x;
        d = n.min.y;
        u = n.isBox3 ? n.min.z : 0;
      } else {
        const t = Math.pow(2, -a);
        o = Math.floor(m.width * t);
        l = Math.floor(m.height * t);
        c = e.isDataArrayTexture ? m.depth : e.isData3DTexture ? Math.floor(m.depth * t) : 1;
        h = 0;
        d = 0;
        u = 0;
      }
      if (r !== null) {
        f = r.x;
        p = r.y;
        g = r.z;
      } else {
        f = 0;
        p = 0;
        g = 0;
      }
      const A = Le.convert(t.format);
      const v = Le.convert(t.type);
      let b;
      if (t.isData3DTexture) {
        Ae.setTexture3D(t, 0);
        b = ze.TEXTURE_3D;
      } else if (t.isDataArrayTexture || t.isCompressedArrayTexture) {
        Ae.setTexture2DArray(t, 0);
        b = ze.TEXTURE_2D_ARRAY;
      } else {
        Ae.setTexture2D(t, 0);
        b = ze.TEXTURE_2D;
      }
      ze.pixelStorei(ze.UNPACK_FLIP_Y_WEBGL, t.flipY);
      ze.pixelStorei(ze.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha);
      ze.pixelStorei(ze.UNPACK_ALIGNMENT, t.unpackAlignment);
      const y = ze.getParameter(ze.UNPACK_ROW_LENGTH);
      const w = ze.getParameter(ze.UNPACK_IMAGE_HEIGHT);
      const x = ze.getParameter(ze.UNPACK_SKIP_PIXELS);
      const S = ze.getParameter(ze.UNPACK_SKIP_ROWS);
      const k = ze.getParameter(ze.UNPACK_SKIP_IMAGES);
      ze.pixelStorei(ze.UNPACK_ROW_LENGTH, m.width);
      ze.pixelStorei(ze.UNPACK_IMAGE_HEIGHT, m.height);
      ze.pixelStorei(ze.UNPACK_SKIP_PIXELS, h);
      ze.pixelStorei(ze.UNPACK_SKIP_ROWS, d);
      ze.pixelStorei(ze.UNPACK_SKIP_IMAGES, u);
      const T = e.isDataArrayTexture || e.isData3DTexture;
      const E = t.isDataArrayTexture || t.isData3DTexture;
      if (e.isDepthTexture) {
        const n = me.get(e);
        const i = me.get(t);
        const r = me.get(n.__renderTarget);
        const m = me.get(i.__renderTarget);
        pe.bindFramebuffer(ze.READ_FRAMEBUFFER, r.__webglFramebuffer);
        pe.bindFramebuffer(ze.DRAW_FRAMEBUFFER, m.__webglFramebuffer);
        for (let n = 0; n < c; n++) {
          if (T) {
            ze.framebufferTextureLayer(ze.READ_FRAMEBUFFER, ze.COLOR_ATTACHMENT0, me.get(e).__webglTexture, a, u + n);
            ze.framebufferTextureLayer(ze.DRAW_FRAMEBUFFER, ze.COLOR_ATTACHMENT0, me.get(t).__webglTexture, s, g + n);
          }
          ze.blitFramebuffer(h, d, o, l, f, p, o, l, ze.DEPTH_BUFFER_BIT, ze.NEAREST);
        }
        pe.bindFramebuffer(ze.READ_FRAMEBUFFER, null);
        pe.bindFramebuffer(ze.DRAW_FRAMEBUFFER, null);
      } else if (a !== 0 || e.isRenderTargetTexture || me.has(e)) {
        const n = me.get(e);
        const i = me.get(t);
        pe.bindFramebuffer(ze.READ_FRAMEBUFFER, at);
        pe.bindFramebuffer(ze.DRAW_FRAMEBUFFER, st);
        for (let e = 0; e < c; e++) {
          if (T) {
            ze.framebufferTextureLayer(ze.READ_FRAMEBUFFER, ze.COLOR_ATTACHMENT0, n.__webglTexture, a, u + e);
          } else {
            ze.framebufferTexture2D(ze.READ_FRAMEBUFFER, ze.COLOR_ATTACHMENT0, ze.TEXTURE_2D, n.__webglTexture, a);
          }
          if (E) {
            ze.framebufferTextureLayer(ze.DRAW_FRAMEBUFFER, ze.COLOR_ATTACHMENT0, i.__webglTexture, s, g + e);
          } else {
            ze.framebufferTexture2D(ze.DRAW_FRAMEBUFFER, ze.COLOR_ATTACHMENT0, ze.TEXTURE_2D, i.__webglTexture, s);
          }
          if (a !== 0) {
            ze.blitFramebuffer(h, d, o, l, f, p, o, l, ze.COLOR_BUFFER_BIT, ze.NEAREST);
          } else if (E) {
            ze.copyTexSubImage3D(b, s, f, p, g + e, h, d, o, l);
          } else {
            ze.copyTexSubImage2D(b, s, f, p, h, d, o, l);
          }
        }
        pe.bindFramebuffer(ze.READ_FRAMEBUFFER, null);
        pe.bindFramebuffer(ze.DRAW_FRAMEBUFFER, null);
      } else if (E) {
        if (e.isDataTexture || e.isData3DTexture) {
          ze.texSubImage3D(b, s, f, p, g, o, l, c, A, v, m.data);
        } else if (t.isCompressedArrayTexture) {
          ze.compressedTexSubImage3D(b, s, f, p, g, o, l, c, A, m.data);
        } else {
          ze.texSubImage3D(b, s, f, p, g, o, l, c, A, v, m);
        }
      } else if (e.isDataTexture) {
        ze.texSubImage2D(ze.TEXTURE_2D, s, f, p, o, l, A, v, m.data);
      } else if (e.isCompressedTexture) {
        ze.compressedTexSubImage2D(ze.TEXTURE_2D, s, f, p, m.width, m.height, A, m.data);
      } else {
        ze.texSubImage2D(ze.TEXTURE_2D, s, f, p, o, l, A, v, m);
      }
      ze.pixelStorei(ze.UNPACK_ROW_LENGTH, y);
      ze.pixelStorei(ze.UNPACK_IMAGE_HEIGHT, w);
      ze.pixelStorei(ze.UNPACK_SKIP_PIXELS, x);
      ze.pixelStorei(ze.UNPACK_SKIP_ROWS, S);
      ze.pixelStorei(ze.UNPACK_SKIP_IMAGES, k);
      if (s === 0 && t.generateMipmaps) {
        ze.generateMipmap(b);
      }
      pe.unbindTexture();
    };
    this.initRenderTarget = function (e) {
      if (me.get(e).__webglFramebuffer === undefined) {
        Ae.setupRenderTarget(e);
      }
    };
    this.initTexture = function (e) {
      if (e.isCubeTexture) {
        Ae.setTextureCube(e, 0);
      } else if (e.isData3DTexture) {
        Ae.setTexture3D(e, 0);
      } else if (e.isDataArrayTexture || e.isCompressedArrayTexture) {
        Ae.setTexture2DArray(e, 0);
      } else {
        Ae.setTexture2D(e, 0);
      }
      pe.unbindTexture();
    };
    this.resetState = function () {
      I = 0;
      F = 0;
      O = null;
      pe.reset();
      Ue.reset();
    };
    if (typeof __THREE_DEVTOOLS__ != "undefined") {
      __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: this
      }));
    }
  }
  get coordinateSystem() {
    return i.TdN;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = i.ppV._getDrawingBufferColorSpace(e);
    t.unpackColorSpace = i.ppV._getUnpackColorSpace();
  }
}