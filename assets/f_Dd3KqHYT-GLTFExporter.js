import{C as ee,R as se,b as v,c as G,d as te,e as ne,f as k,g as ie,h as re,B as L,P as z,I as oe,i as Z,j as Y,k as ae,N as ce,l as ue,m as le,L as fe,n as he,o as pe,p as de,q as xe,r as ye,s as ge,Q as Te}from"./f_BgiqFapG-three.js";const j={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class H{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new Le(e)}),this.register(function(e){return new Se(e)}),this.register(function(e){return new Fe(e)}),this.register(function(e){return new Oe(e)}),this.register(function(e){return new ve(e)}),this.register(function(e){return new ze(e)}),this.register(function(e){return new _e(e)}),this.register(function(e){return new Ue(e)}),this.register(function(e){return new Ce(e)}),this.register(function(e){return new Be(e)}),this.register(function(e){return new Ge(e)}),this.register(function(e){return new De(e)}),this.register(function(e){return new Pe(e)}),this.register(function(e){return new ke(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,s,n,t){const i=new be,r=[];for(let o=0,c=this.pluginCallbacks.length;o<c;o++)r.push(this.pluginCallbacks[o](i));i.setPlugins(r),i.setTextureUtils(this.textureUtils),i.writeAsync(e,s,t).catch(n)}parseAsync(e,s){const n=this;return new Promise(function(t,i){n.parse(e,t,i,s)})}}const g={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},D="KHR_mesh_quantization",R={};R[ce]=g.NEAREST;R[ue]=g.NEAREST_MIPMAP_NEAREST;R[le]=g.NEAREST_MIPMAP_LINEAR;R[fe]=g.LINEAR;R[he]=g.LINEAR_MIPMAP_NEAREST;R[pe]=g.LINEAR_MIPMAP_LINEAR;R[de]=g.CLAMP_TO_EDGE;R[xe]=g.REPEAT;R[ye]=g.MIRRORED_REPEAT;const K={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},we=new ee,q=12,me=1179937895,Me=2,W=8,Ae=1313821514,Ee=5130562;function F(a,e){return a.length===e.length&&a.every(function(s,n){return s===e[n]})}function Ie(a){return new TextEncoder().encode(a).buffer}function Re(a){return F(a.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function Ne(a,e,s){const n={min:new Array(a.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(a.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let t=e;t<e+s;t++)for(let i=0;i<a.itemSize;i++){let r;a.itemSize>4?r=a.array[t*a.itemSize+i]:(i===0?r=a.getX(t):i===1?r=a.getY(t):i===2?r=a.getZ(t):i===3&&(r=a.getW(t)),a.normalized===!0&&(r=k.normalize(r,a.array))),n.min[i]=Math.min(n.min[i],r),n.max[i]=Math.max(n.max[i],r)}return n}function Q(a){return Math.ceil(a/4)*4}function P(a,e=0){const s=Q(a.byteLength);if(s!==a.byteLength){const n=new Uint8Array(s);if(n.set(new Uint8Array(a)),e!==0)for(let t=a.byteLength;t<s;t++)n[t]=e;return n.buffer}return a}function X(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function J(a,e){if(a.toBlob!==void 0)return new Promise(n=>a.toBlob(n,e));let s;return e==="image/jpeg"?s=.92:e==="image/webp"&&(s=.8),a.convertToBlob({type:e,quality:s})}class be{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+se}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,s,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);const t=this,i=t.buffers,r=t.json;n=t.options;const o=t.extensionsUsed,c=t.extensionsRequired,l=new Blob(i,{type:"application/octet-stream"}),h=Object.keys(o),u=Object.keys(c);if(h.length>0&&(r.extensionsUsed=h),u.length>0&&(r.extensionsRequired=u),r.buffers&&r.buffers.length>0&&(r.buffers[0].byteLength=l.size),n.binary===!0){const T=new FileReader;T.readAsArrayBuffer(l),T.onloadend=function(){const f=P(T.result),p=new DataView(new ArrayBuffer(W));p.setUint32(0,f.byteLength,!0),p.setUint32(4,Ee,!0);const d=P(Ie(JSON.stringify(r)),32),y=new DataView(new ArrayBuffer(W));y.setUint32(0,d.byteLength,!0),y.setUint32(4,Ae,!0);const M=new ArrayBuffer(q),N=new DataView(M);N.setUint32(0,me,!0),N.setUint32(4,Me,!0);const O=q+y.byteLength+d.byteLength+p.byteLength+f.byteLength;N.setUint32(8,O,!0);const x=new Blob([M,y,d,p,f],{type:"application/octet-stream"}),w=new FileReader;w.readAsArrayBuffer(x),w.onloadend=function(){s(w.result)}}}else if(r.buffers&&r.buffers.length>0){const T=new FileReader;T.readAsDataURL(l),T.onloadend=function(){const f=T.result;r.buffers[0].uri=f,s(r)}}else s(r)}serializeUserData(e,s){if(Object.keys(e.userData).length===0)return;const n=this.options,t=this.extensionsUsed;try{const i=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&i.gltfExtensions){s.extensions===void 0&&(s.extensions={});for(const r in i.gltfExtensions)s.extensions[r]=i.gltfExtensions[r],t[r]=!0;delete i.gltfExtensions}Object.keys(i).length>0&&(s.extras=i)}catch(i){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+i.message)}}getUID(e,s=!1){if(this.uids.has(e)===!1){const t=new Map;t.set(!0,this.uid++),t.set(!1,this.uid++),this.uids.set(e,t)}return this.uids.get(e).get(s)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const n=new v;for(let t=0,i=e.count;t<i;t++)if(Math.abs(n.fromBufferAttribute(e,t).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const s=this.cache;if(s.attributesNormalized.has(e))return s.attributesNormalized.get(e);const n=e.clone(),t=new v;for(let i=0,r=n.count;i<r;i++)t.fromBufferAttribute(n,i),t.x===0&&t.y===0&&t.z===0?t.setX(1):t.normalize(),n.setXYZ(i,t.x,t.y,t.z);return s.attributesNormalized.set(e,n),n}applyTextureTransform(e,s){let n=!1;const t={};(s.offset.x!==0||s.offset.y!==0)&&(t.offset=s.offset.toArray(),n=!0),s.rotation!==0&&(t.rotation=s.rotation,n=!0),(s.repeat.x!==1||s.repeat.y!==1)&&(t.scale=s.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=t,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,s){if(e===s)return e;function n(f){return f.colorSpace===ge?function(d){return d<.04045?d*.0773993808:Math.pow(d*.9478672986+.0521327014,2.4)}:function(d){return d}}e instanceof G&&(e=await this.decompressTextureAsync(e)),s instanceof G&&(s=await this.decompressTextureAsync(s));const t=e?e.image:null,i=s?s.image:null,r=Math.max(t?t.width:0,i?i.width:0),o=Math.max(t?t.height:0,i?i.height:0),c=X();c.width=r,c.height=o;const l=c.getContext("2d",{willReadFrequently:!0});l.fillStyle="#00ffff",l.fillRect(0,0,r,o);const h=l.getImageData(0,0,r,o);if(t){l.drawImage(t,0,0,r,o);const f=n(e),p=l.getImageData(0,0,r,o).data;for(let d=2;d<p.length;d+=4)h.data[d]=f(p[d]/256)*256}if(i){l.drawImage(i,0,0,r,o);const f=n(s),p=l.getImageData(0,0,r,o).data;for(let d=1;d<p.length;d+=4)h.data[d]=f(p[d]/256)*256}l.putImageData(h,0,0);const T=(e||s).clone();return T.source=new te(c),T.colorSpace=ne,T.channel=(e||s).channel,e&&s&&e.channel!==s.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),T}async decompressTextureAsync(e,s=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,s)}processBuffer(e){const s=this.json,n=this.buffers;return s.buffers||(s.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,s,n,t,i){const r=this.json;r.bufferViews||(r.bufferViews=[]);let o;switch(s){case g.BYTE:case g.UNSIGNED_BYTE:o=1;break;case g.SHORT:case g.UNSIGNED_SHORT:o=2;break;default:o=4}let c=e.itemSize*o;i===g.ARRAY_BUFFER&&(c=Math.ceil(c/4)*4);const l=Q(t*c),h=new DataView(new ArrayBuffer(l));let u=0;for(let p=n;p<n+t;p++){for(let d=0;d<e.itemSize;d++){let y;e.itemSize>4?y=e.array[p*e.itemSize+d]:(d===0?y=e.getX(p):d===1?y=e.getY(p):d===2?y=e.getZ(p):d===3&&(y=e.getW(p)),e.normalized===!0&&(y=k.normalize(y,e.array))),s===g.FLOAT?h.setFloat32(u,y,!0):s===g.INT?h.setInt32(u,y,!0):s===g.UNSIGNED_INT?h.setUint32(u,y,!0):s===g.SHORT?h.setInt16(u,y,!0):s===g.UNSIGNED_SHORT?h.setUint16(u,y,!0):s===g.BYTE?h.setInt8(u,y):s===g.UNSIGNED_BYTE&&h.setUint8(u,y),u+=o}u%c!==0&&(u+=c-u%c)}const T={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:l};return i!==void 0&&(T.target=i),i===g.ARRAY_BUFFER&&(T.byteStride=c),this.byteOffset+=l,r.bufferViews.push(T),{id:r.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const s=this,n=s.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(t){const i=new FileReader;i.readAsArrayBuffer(e),i.onloadend=function(){const r=P(i.result),o={buffer:s.processBuffer(r),byteOffset:s.byteOffset,byteLength:r.byteLength};s.byteOffset+=r.byteLength,t(n.bufferViews.push(o)-1)}})}processAccessor(e,s,n,t){const i=this.json,r={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let o;if(e.array.constructor===Float32Array)o=g.FLOAT;else if(e.array.constructor===Int32Array)o=g.INT;else if(e.array.constructor===Uint32Array)o=g.UNSIGNED_INT;else if(e.array.constructor===Int16Array)o=g.SHORT;else if(e.array.constructor===Uint16Array)o=g.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)o=g.BYTE;else if(e.array.constructor===Uint8Array)o=g.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(t===void 0||t===1/0)&&(t=e.count),t===0)return null;const c=Ne(e,n,t);let l;s!==void 0&&(l=e===s.index?g.ELEMENT_ARRAY_BUFFER:g.ARRAY_BUFFER);const h=this.processBufferView(e,o,n,t,l),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:o,count:t,max:c.max,min:c.min,type:r[e.itemSize]};return e.normalized===!0&&(u.normalized=!0),i.accessors||(i.accessors=[]),i.accessors.push(u)-1}processImage(e,s,n,t="image/png"){if(e!==null){const i=this,r=i.cache,o=i.json,c=i.options,l=i.pending;r.images.has(e)||r.images.set(e,{});const h=r.images.get(e),u=t+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];o.images||(o.images=[]);const T={mimeType:t},f=X();f.width=Math.min(e.width,c.maxTextureSize),f.height=Math.min(e.height,c.maxTextureSize);const p=f.getContext("2d",{willReadFrequently:!0});if(n===!0&&(p.translate(0,f.height),p.scale(1,-1)),e.data!==void 0){s!==ie&&console.error("GLTFExporter: Only RGBAFormat is supported.",s),(e.width>c.maxTextureSize||e.height>c.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const y=new Uint8ClampedArray(e.height*e.width*4);for(let M=0;M<y.length;M+=4)y[M+0]=e.data[M+0],y[M+1]=e.data[M+1],y[M+2]=e.data[M+2],y[M+3]=e.data[M+3];p.putImageData(new ImageData(y,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)p.drawImage(e,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");c.binary===!0?l.push(J(f,t).then(y=>i.processBufferViewImage(y)).then(y=>{T.bufferView=y})):f.toDataURL!==void 0?T.uri=f.toDataURL(t):l.push(J(f,t).then(y=>new FileReader().readAsDataURL(y)).then(y=>{T.uri=y}));const d=o.images.push(T)-1;return h[u]=d,d}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const s=this.json;s.samplers||(s.samplers=[]);const n={magFilter:R[e.magFilter],minFilter:R[e.minFilter],wrapS:R[e.wrapS],wrapT:R[e.wrapT]};return s.samplers.push(n)-1}async processTextureAsync(e){const n=this.options,t=this.cache,i=this.json;if(t.textures.has(e))return t.textures.get(e);i.textures||(i.textures=[]),e instanceof G&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let r=e.userData.mimeType;r==="image/webp"&&(r="image/png");const o={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,r)};e.name&&(o.name=e.name),await this._invokeAllAsync(async function(l){l.writeTexture&&await l.writeTexture(e,o)});const c=i.textures.push(o)-1;return t.textures.set(e,c),c}async processMaterialAsync(e){const s=this.cache,n=this.json;if(s.materials.has(e))return s.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const t={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const i=e.color.toArray().concat([e.opacity]);if(F(i,[1,1,1,1])||(t.pbrMetallicRoughness.baseColorFactor=i),e.isMeshStandardMaterial?(t.pbrMetallicRoughness.metallicFactor=e.metalness,t.pbrMetallicRoughness.roughnessFactor=e.roughness):(t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){const o=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),c={index:await this.processTextureAsync(o),texCoord:o.channel};this.applyTextureTransform(c,o),t.pbrMetallicRoughness.metallicRoughnessTexture=c}if(e.map){const o={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(o,e.map),t.pbrMetallicRoughness.baseColorTexture=o}if(e.emissive){const o=e.emissive;if(Math.max(o.r,o.g,o.b)>0&&(t.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const l={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(l,e.emissiveMap),t.emissiveTexture=l}}if(e.normalMap){const o={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(o.scale=e.normalScale.x),this.applyTextureTransform(o,e.normalMap),t.normalTexture=o}if(e.aoMap){const o={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(o.strength=e.aoMapIntensity),this.applyTextureTransform(o,e.aoMap),t.occlusionTexture=o}e.transparent?t.alphaMode="BLEND":e.alphaTest>0&&(t.alphaMode="MASK",t.alphaCutoff=e.alphaTest),e.side===re&&(t.doubleSided=!0),e.name!==""&&(t.name=e.name),this.serializeUserData(e,t),await this._invokeAllAsync(async function(o){o.writeMaterialAsync&&await o.writeMaterialAsync(e,t)});const r=n.materials.push(t)-1;return s.materials.set(e,r),r}async processMeshAsync(e){const s=this.cache,n=this.json,t=[e.geometry.uuid];if(Array.isArray(e.material))for(let x=0,w=e.material.length;x<w;x++)t.push(e.material[x].uuid);else t.push(e.material.uuid);const i=t.join(":");if(s.meshes.has(i))return s.meshes.get(i);const r=e.geometry;let o;e.isLineSegments?o=g.LINES:e.isLineLoop?o=g.LINE_LOOP:e.isLine?o=g.LINE_STRIP:e.isPoints?o=g.POINTS:o=e.material.wireframe?g.LINES:g.TRIANGLES;const c={},l={},h=[],u=[],T={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=r.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),r.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let p=null;for(let x in r.attributes){if(x.slice(0,5)==="morph")continue;const w=r.attributes[x];if(x=T[x]||x.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(x)||(x="_"+x),s.attributes.has(this.getUID(w))){l[x]=s.attributes.get(this.getUID(w));continue}p=null;const m=w.array;x==="JOINTS_0"&&!(m instanceof Uint16Array)&&!(m instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),p=new L(new Uint16Array(m),w.itemSize,w.normalized)):(m instanceof Uint32Array||m instanceof Int32Array)&&!x.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${x}" converted to type FLOAT.`),p=H.Utils.toFloat32BufferAttribute(w));const I=this.processAccessor(p||w,r);I!==null&&(x.startsWith("_")||this.detectMeshQuantization(x,w),l[x]=I,s.attributes.set(this.getUID(w),I))}if(f!==void 0&&r.setAttribute("normal",f),Object.keys(l).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const x=[],w=[],A={};if(e.morphTargetDictionary!==void 0)for(const m in e.morphTargetDictionary)A[e.morphTargetDictionary[m]]=m;for(let m=0;m<e.morphTargetInfluences.length;++m){const I={};let V=!1;for(const _ in r.morphAttributes){if(_!=="position"&&_!=="normal"){V||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),V=!0);continue}const b=r.morphAttributes[_][m],B=_.toUpperCase(),U=r.attributes[_];if(s.attributes.has(this.getUID(b,!0))){I[B]=s.attributes.get(this.getUID(b,!0));continue}const C=b.clone();if(!r.morphTargetsRelative)for(let E=0,$=b.count;E<$;E++)for(let S=0;S<b.itemSize;S++)S===0&&C.setX(E,b.getX(E)-U.getX(E)),S===1&&C.setY(E,b.getY(E)-U.getY(E)),S===2&&C.setZ(E,b.getZ(E)-U.getZ(E)),S===3&&C.setW(E,b.getW(E)-U.getW(E));I[B]=this.processAccessor(C,r),s.attributes.set(this.getUID(U,!0),I[B])}u.push(I),x.push(e.morphTargetInfluences[m]),e.morphTargetDictionary!==void 0&&w.push(A[m])}c.weights=x,w.length>0&&(c.extras={},c.extras.targetNames=w)}const d=Array.isArray(e.material);if(d&&r.groups.length===0)return null;let y=!1;if(d&&r.index===null){const x=[];for(let w=0,A=r.attributes.position.count;w<A;w++)x[w]=w;r.setIndex(x),y=!0}const M=d?e.material:[e.material],N=d?r.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let x=0,w=N.length;x<w;x++){const A={mode:o,attributes:l};if(this.serializeUserData(r,A),u.length>0&&(A.targets=u),r.index!==null){let I=this.getUID(r.index);(N[x].start!==void 0||N[x].count!==void 0)&&(I+=":"+N[x].start+":"+N[x].count),s.attributes.has(I)?A.indices=s.attributes.get(I):(A.indices=this.processAccessor(r.index,r,N[x].start,N[x].count),s.attributes.set(I,A.indices)),A.indices===null&&delete A.indices}const m=await this.processMaterialAsync(M[N[x].materialIndex]);m!==null&&(A.material=m),h.push(A)}y===!0&&r.setIndex(null),c.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(x){x.writeMesh&&x.writeMesh(e,c)});const O=n.meshes.push(c)-1;return s.meshes.set(i,O),O}detectMeshQuantization(e,s){if(this.extensionsUsed[D])return;let n;switch(s.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}s.normalized&&(n+=" normalized");const t=e.split("_",1)[0];j[t]&&j[t].includes(n)&&(this.extensionsUsed[D]=!0,this.extensionsRequired[D]=!0)}processCamera(e){const s=this.json;s.cameras||(s.cameras=[]);const n=e.isOrthographicCamera,t={type:n?"orthographic":"perspective"};return n?t.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:t.perspective={aspectRatio:e.aspect,yfov:k.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(t.name=e.type),s.cameras.push(t)-1}processAnimation(e,s){const n=this.json,t=this.nodeMap;n.animations||(n.animations=[]),e=H.Utils.mergeMorphTargetTracks(e.clone(),s);const i=e.tracks,r=[],o=[];for(let c=0;c<i.length;++c){const l=i[c],h=z.parseTrackName(l.name);let u=z.findNode(s,h.nodeName);const T=K[h.propertyName];if(h.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(h.objectIndex):u=void 0),!u||!T){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',l.name);continue}const f=1;let p=l.values.length/l.times.length;T===K.morphTargetInfluences&&(p/=u.morphTargetInfluences.length);let d;l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(d="CUBICSPLINE",p/=3):l.getInterpolation()===oe?d="STEP":d="LINEAR",o.push({input:this.processAccessor(new L(l.times,f)),output:this.processAccessor(new L(l.values,p)),interpolation:d}),r.push({sampler:o.length-1,target:{node:t.get(u),path:T}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:o,channels:r}),n.animations.length-1}processSkin(e){const s=this.json,n=this.nodeMap,t=s.nodes[n.get(e)],i=e.skeleton;if(i===void 0)return null;const r=e.skeleton.bones[0];if(r===void 0)return null;const o=[],c=new Float32Array(i.bones.length*16),l=new Z;for(let u=0;u<i.bones.length;++u)o.push(n.get(i.bones[u])),l.copy(i.boneInverses[u]),l.multiply(e.bindMatrix).toArray(c,u*16);return s.skins===void 0&&(s.skins=[]),s.skins.push({inverseBindMatrices:this.processAccessor(new L(c,16)),joints:o,skeleton:n.get(r)}),t.skin=s.skins.length-1}async processNodeAsync(e){const s=this.json,n=this.options,t=this.nodeMap;s.nodes||(s.nodes=[]);const i={};if(n.trs){const o=e.quaternion.toArray(),c=e.position.toArray(),l=e.scale.toArray();F(o,[0,0,0,1])||(i.rotation=o),F(c,[0,0,0])||(i.translation=c),F(l,[1,1,1])||(i.scale=l)}else e.matrixAutoUpdate&&e.updateMatrix(),Re(e.matrix)===!1&&(i.matrix=e.matrix.elements);if(e.name!==""&&(i.name=String(e.name)),this.serializeUserData(e,i),e.isMesh||e.isLine||e.isPoints){const o=await this.processMeshAsync(e);o!==null&&(i.mesh=o)}else e.isCamera&&(i.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const o=[];for(let c=0,l=e.children.length;c<l;c++){const h=e.children[c];if(h.visible||n.onlyVisible===!1){const u=await this.processNodeAsync(h);u!==null&&o.push(u)}}o.length>0&&(i.children=o)}await this._invokeAllAsync(function(o){o.writeNode&&o.writeNode(e,i)});const r=s.nodes.push(i)-1;return t.set(e,r),r}async processSceneAsync(e){const s=this.json,n=this.options;s.scenes||(s.scenes=[],s.scene=0);const t={};e.name!==""&&(t.name=e.name),s.scenes.push(t);const i=[];for(let r=0,o=e.children.length;r<o;r++){const c=e.children[r];if(c.visible||n.onlyVisible===!1){const l=await this.processNodeAsync(c);l!==null&&i.push(l)}}i.length>0&&(t.nodes=i),this.serializeUserData(e,t)}async processObjectsAsync(e){const s=new Y;s.name="AuxScene";for(let n=0;n<e.length;n++)s.children.push(e[n]);await this.processSceneAsync(s)}async processInputAsync(e){const s=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(t){t.beforeParse&&t.beforeParse(e)});const n=[];for(let t=0;t<e.length;t++)e[t]instanceof Y?await this.processSceneAsync(e[t]):n.push(e[t]);n.length>0&&await this.processObjectsAsync(n);for(let t=0;t<this.skins.length;++t)this.processSkin(this.skins[t]);for(let t=0;t<s.animations.length;++t)this.processAnimation(s.animations[t],e[0]);await this._invokeAllAsync(function(t){t.afterParse&&t.afterParse(e)})}async _invokeAllAsync(e){for(let s=0,n=this.plugins.length;s<n;s++)await e(this.plugins[s])}}class Le{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,s){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const n=this.writer,t=n.json,i=n.extensionsUsed,r={};e.name&&(r.name=e.name),r.color=e.color.toArray(),r.intensity=e.intensity,e.isDirectionalLight?r.type="directional":e.isPointLight?(r.type="point",e.distance>0&&(r.range=e.distance)):e.isSpotLight&&(r.type="spot",e.distance>0&&(r.range=e.distance),r.spot={},r.spot.innerConeAngle=(1-e.penumbra)*e.angle,r.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),i[this.name]||(t.extensions=t.extensions||{},t.extensions[this.name]={lights:[]},i[this.name]=!0);const o=t.extensions[this.name].lights;o.push(r),s.extensions=s.extensions||{},s.extensions[this.name]={light:o.length-1}}}class Se{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,s){if(!e.isMeshBasicMaterial)return;const t=this.writer.extensionsUsed;s.extensions=s.extensions||{},s.extensions[this.name]={},t[this.name]=!0,s.pbrMetallicRoughness.metallicFactor=0,s.pbrMetallicRoughness.roughnessFactor=.9}}class _e{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,s){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const n=this.writer,t=n.extensionsUsed,i={};if(i.clearcoatFactor=e.clearcoat,e.clearcoatMap){const r={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(r,e.clearcoatMap),i.clearcoatTexture=r}if(i.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const r={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(r,e.clearcoatRoughnessMap),i.clearcoatRoughnessTexture=r}if(e.clearcoatNormalMap){const r={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(r.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(r,e.clearcoatNormalMap),i.clearcoatNormalTexture=r}s.extensions=s.extensions||{},s.extensions[this.name]=i,t[this.name]=!0}}class Ue{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,s){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const t=this.writer.extensionsUsed,i={};i.dispersion=e.dispersion,s.extensions=s.extensions||{},s.extensions[this.name]=i,t[this.name]=!0}}class Ce{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,s){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const n=this.writer,t=n.extensionsUsed,i={};if(i.iridescenceFactor=e.iridescence,e.iridescenceMap){const r={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(r,e.iridescenceMap),i.iridescenceTexture=r}if(i.iridescenceIor=e.iridescenceIOR,i.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],i.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const r={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(r,e.iridescenceThicknessMap),i.iridescenceThicknessTexture=r}s.extensions=s.extensions||{},s.extensions[this.name]=i,t[this.name]=!0}}class Fe{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,s){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,t=n.extensionsUsed,i={};if(i.transmissionFactor=e.transmission,e.transmissionMap){const r={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(r,e.transmissionMap),i.transmissionTexture=r}s.extensions=s.extensions||{},s.extensions[this.name]=i,t[this.name]=!0}}class Oe{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,s){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,t=n.extensionsUsed,i={};if(i.thicknessFactor=e.thickness,e.thicknessMap){const r={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(r,e.thicknessMap),i.thicknessTexture=r}e.attenuationDistance!==1/0&&(i.attenuationDistance=e.attenuationDistance),i.attenuationColor=e.attenuationColor.toArray(),s.extensions=s.extensions||{},s.extensions[this.name]=i,t[this.name]=!0}}class ve{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,s){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const t=this.writer.extensionsUsed,i={};i.ior=e.ior,s.extensions=s.extensions||{},s.extensions[this.name]=i,t[this.name]=!0}}class ze{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,s){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(we)&&!e.specularIntensityMap&&!e.specularColorMap)return;const n=this.writer,t=n.extensionsUsed,i={};if(e.specularIntensityMap){const r={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(r,e.specularIntensityMap),i.specularTexture=r}if(e.specularColorMap){const r={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(r,e.specularColorMap),i.specularColorTexture=r}i.specularFactor=e.specularIntensity,i.specularColorFactor=e.specularColor.toArray(),s.extensions=s.extensions||{},s.extensions[this.name]=i,t[this.name]=!0}}class Be{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,s){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const n=this.writer,t=n.extensionsUsed,i={};if(e.sheenRoughnessMap){const r={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(r,e.sheenRoughnessMap),i.sheenRoughnessTexture=r}if(e.sheenColorMap){const r={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(r,e.sheenColorMap),i.sheenColorTexture=r}i.sheenRoughnessFactor=e.sheenRoughness,i.sheenColorFactor=e.sheenColor.toArray(),s.extensions=s.extensions||{},s.extensions[this.name]=i,t[this.name]=!0}}class Ge{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,s){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const n=this.writer,t=n.extensionsUsed,i={};if(e.anisotropyMap){const r={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(r,e.anisotropyMap),i.anisotropyTexture=r}i.anisotropyStrength=e.anisotropy,i.anisotropyRotation=e.anisotropyRotation,s.extensions=s.extensions||{},s.extensions[this.name]=i,t[this.name]=!0}}class De{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,s){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const t=this.writer.extensionsUsed,i={};i.emissiveStrength=e.emissiveIntensity,s.extensions=s.extensions||{},s.extensions[this.name]=i,t[this.name]=!0}}class Pe{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,s){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const n=this.writer,t=n.extensionsUsed,i={};if(e.bumpMap){const r={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(r,e.bumpMap),i.bumpTexture=r}i.bumpFactor=e.bumpScale,s.extensions=s.extensions||{},s.extensions[this.name]=i,t[this.name]=!0}}class ke{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,s){if(!e.isInstancedMesh)return;const n=this.writer,t=e,i=new Float32Array(t.count*3),r=new Float32Array(t.count*4),o=new Float32Array(t.count*3),c=new Z,l=new v,h=new Te,u=new v;for(let f=0;f<t.count;f++)t.getMatrixAt(f,c),c.decompose(l,h,u),l.toArray(i,f*3),h.toArray(r,f*4),u.toArray(o,f*3);const T={TRANSLATION:n.processAccessor(new L(i,3)),ROTATION:n.processAccessor(new L(r,4)),SCALE:n.processAccessor(new L(o,3))};t.instanceColor&&(T._COLOR_0=n.processAccessor(t.instanceColor)),s.extensions=s.extensions||{},s.extensions[this.name]={attributes:T},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}H.Utils={insertKeyframe:function(a,e){const n=a.getValueSize(),t=new a.TimeBufferType(a.times.length+1),i=new a.ValueBufferType(a.values.length+n),r=a.createInterpolant(new a.ValueBufferType(n));let o;if(a.times.length===0){t[0]=e;for(let c=0;c<n;c++)i[c]=0;o=0}else if(e<a.times[0]){if(Math.abs(a.times[0]-e)<.001)return 0;t[0]=e,t.set(a.times,1),i.set(r.evaluate(e),0),i.set(a.values,n),o=0}else if(e>a.times[a.times.length-1]){if(Math.abs(a.times[a.times.length-1]-e)<.001)return a.times.length-1;t[t.length-1]=e,t.set(a.times,0),i.set(a.values,0),i.set(r.evaluate(e),a.values.length),o=t.length-1}else for(let c=0;c<a.times.length;c++){if(Math.abs(a.times[c]-e)<.001)return c;if(a.times[c]<e&&a.times[c+1]>e){t.set(a.times.slice(0,c+1),0),t[c+1]=e,t.set(a.times.slice(c+1),c+2),i.set(a.values.slice(0,(c+1)*n),0),i.set(r.evaluate(e),(c+1)*n),i.set(a.values.slice((c+1)*n),(c+2)*n),o=c+1;break}}return a.times=t,a.values=i,o},mergeMorphTargetTracks:function(a,e){const s=[],n={},t=a.tracks;for(let i=0;i<t.length;++i){let r=t[i];const o=z.parseTrackName(r.name),c=z.findNode(e,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){s.push(r);continue}if(r.createInterpolant!==r.InterpolantFactoryMethodDiscrete&&r.createInterpolant!==r.InterpolantFactoryMethodLinear){if(r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),r=r.clone(),r.setInterpolation(ae)}const l=c.morphTargetInfluences.length,h=c.morphTargetDictionary[o.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let u;if(n[c.uuid]===void 0){u=r.clone();const f=new u.ValueBufferType(l*u.times.length);for(let p=0;p<u.times.length;p++)f[p*l+h]=u.values[p];u.name=(o.nodeName||"")+".morphTargetInfluences",u.values=f,n[c.uuid]=u,s.push(u);continue}const T=r.createInterpolant(new r.ValueBufferType(1));u=n[c.uuid];for(let f=0;f<u.times.length;f++)u.values[f*l+h]=T.evaluate(u.times[f]);for(let f=0;f<r.times.length;f++){const p=this.insertKeyframe(u,r.times[f]);u.values[p*l+h]=r.values[f]}}return a.tracks=s,a},toFloat32BufferAttribute:function(a){const e=new L(new Float32Array(a.count*a.itemSize),a.itemSize,!1);if(!a.normalized&&!a.isInterleavedBufferAttribute)return e.array.set(a.array),e;for(let s=0,n=a.count;s<n;s++)for(let t=0;t<a.itemSize;t++)e.setComponent(s,t,a.getComponent(s,t));return e}};export{H as GLTFExporter};