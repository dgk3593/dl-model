/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yr="149",Zu={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ju={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uc=0,Ja=1,kc=2,$u=3,Ku=0,Fo=1,Vc=2,Di=3,pn=0,Lt=1,hn=2,Qu=2,fn=0,ti=1,$a=2,Ka=3,Qa=4,Gc=5,Jn=100,Hc=101,Wc=102,ja=103,eo=104,Xc=200,qc=201,Yc=202,Zc=203,zo=204,Oo=205,Jc=206,$c=207,Kc=208,Qc=209,jc=210,eh=0,th=1,nh=2,Hr=3,ih=4,sh=5,rh=6,ah=7,Is=0,oh=1,lh=2,$t=0,ch=1,hh=2,uh=3,dh=4,fh=5,Zr=300,An=301,En=302,ps=303,ms=304,Hi=306,gs=1e3,bt=1001,xs=1002,it=1003,Wr=1004,ju=1004,hs=1005,ed=1005,st=1006,Bo=1007,td=1007,Cn=1008,nd=1008,Ln=1009,ph=1010,mh=1011,Uo=1012,gh=1013,wn=1014,un=1015,Ui=1016,xh=1017,_h=1018,ni=1020,yh=1021,Ft=1023,vh=1024,Mh=1025,Tn=1026,ai=1027,bh=1028,Sh=1029,wh=1030,Th=1031,Ah=1033,Nr=33776,Fr=33777,zr=33778,Or=33779,to=35840,no=35841,io=35842,so=35843,Eh=36196,ro=37492,ao=37496,oo=37808,lo=37809,co=37810,ho=37811,uo=37812,fo=37813,po=37814,mo=37815,go=37816,xo=37817,_o=37818,yo=37819,vo=37820,Mo=37821,Br=36492,Ch=36283,bo=36284,So=36285,wo=36286,Lh=2200,Ph=2201,Rh=2202,_s=2300,ys=2301,Ur=2302,Kn=2400,Qn=2401,vs=2402,Jr=2500,ko=2501,id=0,sd=1,rd=2,Pn=3e3,$e=3001,Ih=3200,Dh=3201,In=0,Nh=1,ad="",Xt="srgb",ki="srgb-linear",od=0,kr=7680,ld=7681,cd=7682,hd=7683,ud=34055,dd=34056,fd=5386,pd=512,md=513,gd=514,xd=515,_d=516,yd=517,vd=518,Fh=519,Ms=35044,Md=35048,bd=35040,Sd=35045,wd=35049,Td=35041,Ad=35046,Ed=35050,Cd=35042,Ld="100",To="300 es",Xr=1035;class gn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yl=1234567;const ii=Math.PI/180,bs=180/Math.PI;function zt(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[o&255]+vt[o>>8&255]+vt[o>>16&255]+vt[o>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function rt(o,e,t){return Math.max(e,Math.min(t,o))}function Vo(o,e){return(o%e+e)%e}function Pd(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function Rd(o,e,t){return o!==e?(t-o)/(e-o):0}function us(o,e,t){return(1-t)*o+t*e}function Id(o,e,t,n){return us(o,e,1-Math.exp(-t*n))}function Dd(o,e=1){return e-Math.abs(Vo(o,e*2)-e)}function Nd(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Fd(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function zd(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Od(o,e){return o+Math.random()*(e-o)}function Bd(o){return o*(.5-Math.random())}function Ud(o){o!==void 0&&(yl=o);let e=yl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kd(o){return o*ii}function Vd(o){return o*bs}function Ao(o){return(o&o-1)===0&&o!==0}function zh(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function qr(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Gd(o,e,t,n,i){const s=Math.cos,r=Math.sin,a=s(t/2),l=r(t/2),c=s((e+n)/2),h=r((e+n)/2),d=s((e-n)/2),u=r((e-n)/2),f=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":o.set(a*h,l*d,l*u,a*c);break;case"YZY":o.set(l*u,a*h,l*d,a*c);break;case"ZXZ":o.set(l*d,l*u,a*h,a*c);break;case"XZX":o.set(a*h,l*g,l*f,a*c);break;case"YXY":o.set(l*f,a*h,l*g,a*c);break;case"ZYZ":o.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function dn(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ze(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var Hd=Object.freeze({__proto__:null,DEG2RAD:ii,RAD2DEG:bs,ceilPowerOfTwo:zh,clamp:rt,damp:Id,degToRad:kd,denormalize:dn,euclideanModulo:Vo,floorPowerOfTwo:qr,generateUUID:zt,inverseLerp:Rd,isPowerOfTwo:Ao,lerp:us,mapLinear:Pd,normalize:Ze,pingpong:Dd,radToDeg:Vd,randFloat:Od,randFloatSpread:Bd,randInt:zd,seededRandom:Ud,setQuaternionFromProperEuler:Gd,smootherstep:Fd,smoothstep:Nd});class ${constructor(e=0,t=0){$.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Et{constructor(){Et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,r,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],p=i[0],m=i[3],_=i[6],v=i[1],x=i[4],y=i[7],S=i[2],E=i[5],L=i[8];return s[0]=r*p+a*v+l*S,s[3]=r*m+a*x+l*E,s[6]=r*_+a*y+l*L,s[1]=c*p+h*v+d*S,s[4]=c*m+h*x+d*E,s[7]=c*_+h*y+d*L,s[2]=u*p+f*v+g*S,s[5]=u*m+f*x+g*E,s[8]=u*_+f*y+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*a*c-n*s*h+n*a*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*r-a*c,u=a*l-h*s,f=c*s-r*l,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=d*p,e[1]=(i*c-h*n)*p,e[2]=(a*n-i*r)*p,e[3]=u*p,e[4]=(h*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=f*p,e[7]=(n*l-c*t)*p,e[8]=(r*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*a)+r+e,-i*c,i*l,-i*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ma.makeScale(e,t)),this}rotate(e){return this.premultiply(ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(ma.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new Et;function Oh(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}const Wd={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Ni(o,e){return new Wd[o](e)}function Ss(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function si(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Vr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const ga={[Xt]:{[ki]:si},[ki]:{[Xt]:Vr}},Mt={legacyMode:!0,get workingColorSpace(){return ki},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(ga[e]&&ga[e][t]!==void 0){const n=ga[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},Bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ht={r:0,g:0,b:0},Gt={h:0,s:0,l:0},Js={h:0,s:0,l:0};function xa(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function $s(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Mt.workingColorSpace){if(e=Vo(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=xa(r,s,e+1/3),this.g=xa(r,s,e),this.b=xa(r,s,e-1/3)}return Mt.toWorkingColorSpace(this,i),this}setStyle(e,t=Xt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Mt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Mt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Mt.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Mt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Xt){const n=Bh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Mt.fromWorkingColorSpace($s(this,ht),e),rt(ht.r*255,0,255)<<16^rt(ht.g*255,0,255)<<8^rt(ht.b*255,0,255)<<0}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace($s(this,ht),t);const n=ht.r,i=ht.g,s=ht.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const d=r-a;switch(c=h<=.5?d/(r+a):d/(2-r-a),r){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace($s(this,ht),t),e.r=ht.r,e.g=ht.g,e.b=ht.b,e}getStyle(e=Xt){return Mt.fromWorkingColorSpace($s(this,ht),e),e!==Xt?`color(${e} ${ht.r} ${ht.g} ${ht.b})`:`rgb(${ht.r*255|0},${ht.g*255|0},${ht.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Gt),Gt.h+=e,Gt.s+=t,Gt.l+=n,this.setHSL(Gt.h,Gt.s,Gt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gt),e.getHSL(Js);const n=us(Gt.h,Js.h,t),i=us(Gt.s,Js.s,t),s=us(Gt.l,Js.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}fe.NAMES=Bh;let mi;class Go{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{mi===void 0&&(mi=Ss("canvas")),mi.width=e.width,mi.height=e.height;const n=mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ss("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=si(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class jn{constructor(e=null){this.isSource=!0,this.uuid=zt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(_a(i[r].image)):s.push(_a(i[r]))}else s=_a(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function _a(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Go.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xd=0;class at extends gn{constructor(e=at.DEFAULT_IMAGE,t=at.DEFAULT_MAPPING,n=bt,i=bt,s=st,r=Cn,a=Ft,l=Ln,c=at.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=zt(),this.name="",this.source=new jn(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zr)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gs:e.x=e.x-Math.floor(e.x);break;case bt:e.x=e.x<0?0:1;break;case xs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gs:e.y=e.y-Math.floor(e.y);break;case bt:e.y=e.y<0?0:1;break;case xs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}at.DEFAULT_IMAGE=null;at.DEFAULT_MAPPING=Zr;at.DEFAULT_ANISOTROPY=1;class Ye{constructor(e=0,t=0,n=0,i=1){Ye.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],p=l[2],m=l[6],_=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(f+1)/2,S=(_+1)/2,E=(h+u)/4,L=(d+p)/4,M=(g+m)/4;return x>y&&x>S?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=E/n,s=L/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=M/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=L/s,i=M/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-p)*(d-p)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-p)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yt extends gn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new at(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:st,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new jn(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends at{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=it,this.minFilter=it,this.wrapR=bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qd extends Yt{constructor(e=1,t=1,n=1){super(e,t),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new $r(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Ho extends at{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=it,this.minFilter=it,this.wrapR=bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yd extends Yt{constructor(e=1,t=1,n=1){super(e,t),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Ho(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Zd extends Yt{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLMultipleRenderTargets=!0;const s=this.texture;this.texture=[];for(let r=0;r<n;r++)this.texture[r]=s.clone(),this.texture[r].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class Pt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[r+0],f=s[r+1],g=s[r+2],p=s[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=p;return}if(d!==p||l!==u||c!==f||h!==g){let m=1-a;const _=l*u+c*f+h*g+d*p,v=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const S=Math.sqrt(x),E=Math.atan2(S,_*v);m=Math.sin(m*E)/S,a=Math.sin(a*E)/S}const y=a*v;if(l=l*m+u*y,c=c*m+f*y,h=h*m+g*y,d=d*m+p*y,m===1-a){const S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[r],u=s[r+1],f=s[r+2],g=s[r+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*a+i*c-s*l,this._y=i*h+r*l+s*a-n*c,this._z=s*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z,l=e.w,c=l*t+r*i-a*n,h=l*n+a*t-s*i,d=l*i+s*n-r*t,u=-s*t-r*n-a*i;return this.x=c*l+u*-s+h*-a-d*-r,this.y=h*l+u*-r+d*-s-c*-a,this.z=d*l+u*-a+c*-r-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ya.copy(this).projectOnVector(e),this.sub(ya)}reflect(e){return this.sub(ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new A,vl=new Pt;class hi{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],d=e[l+1],u=e[l+2];h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>r&&(r=d),u>a&&(a=u)}return this.min.set(t,n,i),this.max.set(s,r,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),d=e.getY(l),u=e.getZ(l);h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>r&&(r=d),u>a&&(a=u)}return this.min.set(t,n,i),this.max.set(s,r,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,a=s.count;r<a;r++)kn.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(kn)}else n.boundingBox===null&&n.computeBoundingBox(),va.copy(n.boundingBox),va.applyMatrix4(e.matrixWorld),this.union(va);const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ki),Ks.subVectors(this.max,Ki),gi.subVectors(e.a,Ki),xi.subVectors(e.b,Ki),_i.subVectors(e.c,Ki),_n.subVectors(xi,gi),yn.subVectors(_i,xi),Vn.subVectors(gi,_i);let t=[0,-_n.z,_n.y,0,-yn.z,yn.y,0,-Vn.z,Vn.y,_n.z,0,-_n.x,yn.z,0,-yn.x,Vn.z,0,-Vn.x,-_n.y,_n.x,0,-yn.y,yn.x,0,-Vn.y,Vn.x,0];return!Ma(t,gi,xi,_i,Ks)||(t=[1,0,0,0,1,0,0,0,1],!Ma(t,gi,xi,_i,Ks))?!1:(Qs.crossVectors(_n,yn),t=[Qs.x,Qs.y,Qs.z],Ma(t,gi,xi,_i,Ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return kn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nn=[new A,new A,new A,new A,new A,new A,new A,new A],kn=new A,va=new hi,gi=new A,xi=new A,_i=new A,_n=new A,yn=new A,Vn=new A,Ki=new A,Ks=new A,Qs=new A,Gn=new A;function Ma(o,e,t,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){Gn.fromArray(o,s);const a=i.x*Math.abs(Gn.x)+i.y*Math.abs(Gn.y)+i.z*Math.abs(Gn.z),l=e.dot(Gn),c=t.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Jd=new hi,Qi=new A,ba=new A;class ui{constructor(e=new A,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Jd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Qi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(ba)),this.expandByPoint(Qi.copy(e.center).sub(ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new A,Sa=new A,js=new A,vn=new A,wa=new A,er=new A,Ta=new A;class Ds{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.direction).multiplyScalar(t).add(this.origin),sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Sa.copy(e).add(t).multiplyScalar(.5),js.copy(t).sub(e).normalize(),vn.copy(this.origin).sub(Sa);const s=e.distanceTo(t)*.5,r=-this.direction.dot(js),a=vn.dot(this.direction),l=-vn.dot(js),c=vn.lengthSq(),h=Math.abs(1-r*r);let d,u,f,g;if(h>0)if(d=r*l-a,u=r*a-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const p=1/h;d*=p,u*=p,f=d*(d+r*u+2*a)+u*(r*d+u+2*l)+c}else u=s,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(r*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=r>0?-s:s,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(js).multiplyScalar(u).add(Sa),f}intersectSphere(e,t){sn.subVectors(e.center,this.origin);const n=sn.dot(this.direction),i=sn.dot(sn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,n,i,s){wa.subVectors(t,e),er.subVectors(n,e),Ta.crossVectors(wa,er);let r=this.direction.dot(Ta),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;vn.subVectors(this.origin,e);const l=a*this.direction.dot(er.crossVectors(vn,er));if(l<0)return null;const c=a*this.direction.dot(wa.cross(vn));if(c<0||l+c>r)return null;const h=-a*vn.dot(Ta);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,r,a,l,c,h,d,u,f,g,p,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=r,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=d,_[14]=u,_[3]=f,_[7]=g,_[11]=p,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/yi.setFromMatrixColumn(e,0).length(),s=1/yi.setFromMatrixColumn(e,1).length(),r=1/yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=r*h,f=r*d,g=a*h,p=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-p*c,t[9]=-a*l,t[2]=p-u*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,p=c*d;t[0]=u+p*a,t[4]=g*a-f,t[8]=r*c,t[1]=r*d,t[5]=r*h,t[9]=-a,t[2]=f*a-g,t[6]=p+u*a,t[10]=r*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,p=c*d;t[0]=u-p*a,t[4]=-r*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=r*h,t[9]=p-u*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const u=r*h,f=r*d,g=a*h,p=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+p,t[1]=l*d,t[5]=p*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const u=r*l,f=r*c,g=a*l,p=a*c;t[0]=l*h,t[4]=p-u*d,t[8]=g*d+f,t[1]=d,t[5]=r*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-p*d}else if(e.order==="XZY"){const u=r*l,f=r*c,g=a*l,p=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+p,t[5]=r*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=p*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($d,e,Kd)}lookAt(e,t,n){const i=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),Mn.crossVectors(n,Dt),Mn.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),Mn.crossVectors(n,Dt)),Mn.normalize(),tr.crossVectors(Dt,Mn),i[0]=Mn.x,i[4]=tr.x,i[8]=Dt.x,i[1]=Mn.y,i[5]=tr.y,i[9]=Dt.y,i[2]=Mn.z,i[6]=tr.z,i[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],p=n[6],m=n[10],_=n[14],v=n[3],x=n[7],y=n[11],S=n[15],E=i[0],L=i[4],M=i[8],w=i[12],P=i[1],B=i[5],H=i[9],N=i[13],I=i[2],k=i[6],J=i[10],te=i[14],q=i[3],ne=i[7],K=i[11],me=i[15];return s[0]=r*E+a*P+l*I+c*q,s[4]=r*L+a*B+l*k+c*ne,s[8]=r*M+a*H+l*J+c*K,s[12]=r*w+a*N+l*te+c*me,s[1]=h*E+d*P+u*I+f*q,s[5]=h*L+d*B+u*k+f*ne,s[9]=h*M+d*H+u*J+f*K,s[13]=h*w+d*N+u*te+f*me,s[2]=g*E+p*P+m*I+_*q,s[6]=g*L+p*B+m*k+_*ne,s[10]=g*M+p*H+m*J+_*K,s[14]=g*w+p*N+m*te+_*me,s[3]=v*E+x*P+y*I+S*q,s[7]=v*L+x*B+y*k+S*ne,s[11]=v*M+x*H+y*J+S*K,s[15]=v*w+x*N+y*te+S*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],p=e[7],m=e[11],_=e[15];return g*(+s*l*d-i*c*d-s*a*u+n*c*u+i*a*f-n*l*f)+p*(+t*l*f-t*c*u+s*r*u-i*r*f+i*c*h-s*l*h)+m*(+t*c*d-t*a*f-s*r*d+n*r*f+s*a*h-n*c*h)+_*(-i*a*h-t*l*d+t*a*u+i*r*d-n*r*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],p=e[13],m=e[14],_=e[15],v=d*m*c-p*u*c+p*l*f-a*m*f-d*l*_+a*u*_,x=g*u*c-h*m*c-g*l*f+r*m*f+h*l*_-r*u*_,y=h*p*c-g*d*c+g*a*f-r*p*f-h*a*_+r*d*_,S=g*d*l-h*p*l-g*a*u+r*p*u+h*a*m-r*d*m,E=t*v+n*x+i*y+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/E;return e[0]=v*L,e[1]=(p*u*s-d*m*s-p*i*f+n*m*f+d*i*_-n*u*_)*L,e[2]=(a*m*s-p*l*s+p*i*c-n*m*c-a*i*_+n*l*_)*L,e[3]=(d*l*s-a*u*s-d*i*c+n*u*c+a*i*f-n*l*f)*L,e[4]=x*L,e[5]=(h*m*s-g*u*s+g*i*f-t*m*f-h*i*_+t*u*_)*L,e[6]=(g*l*s-r*m*s-g*i*c+t*m*c+r*i*_-t*l*_)*L,e[7]=(r*u*s-h*l*s+h*i*c-t*u*c-r*i*f+t*l*f)*L,e[8]=y*L,e[9]=(g*d*s-h*p*s-g*n*f+t*p*f+h*n*_-t*d*_)*L,e[10]=(r*p*s-g*a*s+g*n*c-t*p*c-r*n*_+t*a*_)*L,e[11]=(h*a*s-r*d*s-h*n*c+t*d*c+r*n*f-t*a*f)*L,e[12]=S*L,e[13]=(h*p*i-g*d*i+g*n*u-t*p*u-h*n*m+t*d*m)*L,e[14]=(g*a*i-r*p*i-g*n*l+t*p*l+r*n*m-t*a*m)*L,e[15]=(r*d*i-h*a*i+h*n*l-t*d*l-r*n*u+t*a*u)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,a=e.y,l=e.z,c=s*r,h=s*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,a=t._z,l=t._w,c=s+s,h=r+r,d=a+a,u=s*c,f=s*h,g=s*d,p=r*h,m=r*d,_=a*d,v=l*c,x=l*h,y=l*d,S=n.x,E=n.y,L=n.z;return i[0]=(1-(p+_))*S,i[1]=(f+y)*S,i[2]=(g-x)*S,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(u+_))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(g+x)*L,i[9]=(m-v)*L,i[10]=(1-(u+p))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=yi.set(i[0],i[1],i[2]).length();const r=yi.set(i[4],i[5],i[6]).length(),a=yi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ht.copy(this);const c=1/s,h=1/r,d=1/a;return Ht.elements[0]*=c,Ht.elements[1]*=c,Ht.elements[2]*=c,Ht.elements[4]*=h,Ht.elements[5]*=h,Ht.elements[6]*=h,Ht.elements[8]*=d,Ht.elements[9]*=d,Ht.elements[10]*=d,t.setFromRotationMatrix(Ht),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,i,s,r){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),u=-(r+s)/(r-s),f=-2*r*s/(r-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,r){const a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(r-s),d=(t+e)*l,u=(n+i)*c,f=(r+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const yi=new A,Ht=new Ie,$d=new A(0,0,0),Kd=new A(1,1,1),Mn=new A,tr=new A,Dt=new A,Ml=new Ie,bl=new Pt;class Ns{constructor(e=0,t=0,n=0,i=Ns.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ml.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ml,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bl.setFromEuler(this),this.setFromQuaternion(bl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ns.DEFAULT_ORDER="XYZ";class Kr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qd=0;const Sl=new A,vi=new Pt,rn=new Ie,nr=new A,ji=new A,jd=new A,ef=new Pt,wl=new A(1,0,0),Tl=new A(0,1,0),Al=new A(0,0,1),tf={type:"added"},El={type:"removed"};class We extends gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=zt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const e=new A,t=new Ns,n=new Pt,i=new A(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Et}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(wl,e)}rotateY(e){return this.rotateOnAxis(Tl,e)}rotateZ(e){return this.rotateOnAxis(Al,e)}translateOnAxis(e,t){return Sl.copy(e).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wl,e)}translateY(e){return this.translateOnAxis(Tl,e)}translateZ(e){return this.translateOnAxis(Al,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?nr.copy(e):nr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(ji,nr,this.up):rn.lookAt(nr,ji,this.up),this.quaternion.setFromRotationMatrix(rn),i&&(rn.extractRotation(i.matrixWorld),vi.setFromRotationMatrix(rn),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(tf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(El)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(El)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(e,t);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,jd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,ef,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),d=r(e.shapes),u=r(e.skeletons),f=r(e.animations),g=r(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}We.DEFAULT_UP=new A(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wt=new A,an=new A,Aa=new A,on=new A,Mi=new A,bi=new A,Cl=new A,Ea=new A,Ca=new A,La=new A;class Vt{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wt.subVectors(e,t),i.cross(Wt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Wt.subVectors(i,t),an.subVectors(n,t),Aa.subVectors(e,t);const r=Wt.dot(Wt),a=Wt.dot(an),l=Wt.dot(Aa),c=an.dot(an),h=an.dot(Aa),d=r*c-a*a;if(d===0)return s.set(-2,-1,-1);const u=1/d,f=(c*l-a*h)*u,g=(r*h-a*l)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,on),on.x>=0&&on.y>=0&&on.x+on.y<=1}static getUV(e,t,n,i,s,r,a,l){return this.getBarycoord(e,t,n,i,on),l.set(0,0),l.addScaledVector(s,on.x),l.addScaledVector(r,on.y),l.addScaledVector(a,on.z),l}static isFrontFacing(e,t,n,i){return Wt.subVectors(n,t),an.subVectors(e,t),Wt.cross(an).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Wt.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Vt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Vt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,a;Mi.subVectors(i,n),bi.subVectors(s,n),Ea.subVectors(e,n);const l=Mi.dot(Ea),c=bi.dot(Ea);if(l<=0&&c<=0)return t.copy(n);Ca.subVectors(e,i);const h=Mi.dot(Ca),d=bi.dot(Ca);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(Mi,r);La.subVectors(e,s);const f=Mi.dot(La),g=bi.dot(La);if(g>=0&&f<=g)return t.copy(s);const p=f*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(bi,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Cl.subVectors(s,i),a=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(Cl,a);const _=1/(m+p+u);return r=p*_,a=u*_,t.copy(n).addScaledVector(Mi,r).addScaledVector(bi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let nf=0;class St extends gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=zt(),this.name="",this.type="Material",this.blending=ti,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=zo,this.blendDst=Oo,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ti&&(n.blending=this.blending),this.side!==pn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dn extends St{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new A,ir=new $;class Je{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ms,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ir.fromBufferAttribute(this,t),ir.applyMatrix3(e),this.setXY(t,ir.x,ir.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ms&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class sf extends Je{constructor(e,t,n){super(new Int8Array(e),t,n)}}class rf extends Je{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class af extends Je{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class of extends Je{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Wo extends Je{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class lf extends Je{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Xo extends Je{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class cf extends Je{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}}class pe extends Je{constructor(e,t,n){super(new Float32Array(e),t,n)}}class hf extends Je{constructor(e,t,n){super(new Float64Array(e),t,n)}}let uf=0;const Ut=new Ie,Pa=new We,Si=new A,Nt=new hi,es=new hi,gt=new A;class Ne extends gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=zt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oh(e)?Xo:Wo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return Pa.lookAt(e),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];es.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Nt.min,es.min),Nt.expandByPoint(gt),gt.addVectors(Nt.max,es.max),Nt.expandByPoint(gt)):(Nt.expandByPoint(es.min),Nt.expandByPoint(es.max))}Nt.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)gt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(gt));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)gt.fromBufferAttribute(a,c),l&&(Si.fromBufferAttribute(e,c),gt.add(Si)),i=Math.max(i,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let P=0;P<a;P++)c[P]=new A,h[P]=new A;const d=new A,u=new A,f=new A,g=new $,p=new $,m=new $,_=new A,v=new A;function x(P,B,H){d.fromArray(i,P*3),u.fromArray(i,B*3),f.fromArray(i,H*3),g.fromArray(r,P*2),p.fromArray(r,B*2),m.fromArray(r,H*2),u.sub(d),f.sub(d),p.sub(g),m.sub(g);const N=1/(p.x*m.y-m.x*p.y);isFinite(N)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(N),v.copy(f).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(N),c[P].add(_),c[B].add(_),c[H].add(_),h[P].add(v),h[B].add(v),h[H].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let P=0,B=y.length;P<B;++P){const H=y[P],N=H.start,I=H.count;for(let k=N,J=N+I;k<J;k+=3)x(n[k+0],n[k+1],n[k+2])}const S=new A,E=new A,L=new A,M=new A;function w(P){L.fromArray(s,P*3),M.copy(L);const B=c[P];S.copy(B),S.sub(L.multiplyScalar(L.dot(B))).normalize(),E.crossVectors(M,B);const N=E.dot(h[P])<0?-1:1;l[P*4]=S.x,l[P*4+1]=S.y,l[P*4+2]=S.z,l[P*4+3]=N}for(let P=0,B=y.length;P<B;++P){const H=y[P],N=H.start,I=H.count;for(let k=N,J=N+I;k<J;k+=3)w(n[k+0]),w(n[k+1]),w(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new A,s=new A,r=new A,a=new A,l=new A,c=new A,h=new A,d=new A;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),p=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,m),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let p=0,m=l.length;p<m;p++){a.isInterleavedBufferAttribute?f=l[p]*a.data.stride+a.offset:f=l[p]*h;for(let _=0;_<h;_++)u[g++]=c[f++]}return new Je(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ne,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ll=new Ie,wi=new Ds,Ra=new ui,ts=new A,ns=new A,is=new A,Ia=new A,sr=new A,rr=new $,ar=new $,or=new $,Da=new A,lr=new A;class _t extends We{constructor(e=new Ne,t=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){sr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(Ia.fromBufferAttribute(d,e),r?sr.addScaledVector(Ia,h):sr.addScaledVector(Ia.sub(t),h))}t.add(sr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),e.ray.intersectsSphere(Ra)===!1)||(Ll.copy(s).invert(),wi.copy(e.ray).applyMatrix4(Ll),n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1))return;let r;const a=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,d=n.groups,u=n.drawRange;if(a!==null)if(Array.isArray(i))for(let f=0,g=d.length;f<g;f++){const p=d[f],m=i[p.materialIndex],_=Math.max(p.start,u.start),v=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let x=_,y=v;x<y;x+=3){const S=a.getX(x),E=a.getX(x+1),L=a.getX(x+2);r=cr(this,m,e,wi,c,h,S,E,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const f=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let p=f,m=g;p<m;p+=3){const _=a.getX(p),v=a.getX(p+1),x=a.getX(p+2);r=cr(this,i,e,wi,c,h,_,v,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(i))for(let f=0,g=d.length;f<g;f++){const p=d[f],m=i[p.materialIndex],_=Math.max(p.start,u.start),v=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let x=_,y=v;x<y;x+=3){const S=x,E=x+1,L=x+2;r=cr(this,m,e,wi,c,h,S,E,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const f=Math.max(0,u.start),g=Math.min(l.count,u.start+u.count);for(let p=f,m=g;p<m;p+=3){const _=p,v=p+1,x=p+2;r=cr(this,i,e,wi,c,h,_,v,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function df(o,e,t,n,i,s,r,a){let l;if(e.side===Lt?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,e.side===pn,a),l===null)return null;lr.copy(a),lr.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(lr);return c<t.near||c>t.far?null:{distance:c,point:lr.clone(),object:o}}function cr(o,e,t,n,i,s,r,a,l){o.getVertexPosition(r,ts),o.getVertexPosition(a,ns),o.getVertexPosition(l,is);const c=df(o,e,t,n,ts,ns,is,Da);if(c){i&&(rr.fromBufferAttribute(i,r),ar.fromBufferAttribute(i,a),or.fromBufferAttribute(i,l),c.uv=Vt.getUV(Da,ts,ns,is,rr,ar,or,new $)),s&&(rr.fromBufferAttribute(s,r),ar.fromBufferAttribute(s,a),or.fromBufferAttribute(s,l),c.uv2=Vt.getUV(Da,ts,ns,is,rr,ar,or,new $));const h={a:r,b:a,c:l,normal:new A,materialIndex:0};Vt.getNormal(ts,ns,is,h.normal),c.face=h}return c}class Nn extends Ne{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(d,2));function g(p,m,_,v,x,y,S,E,L,M,w){const P=y/L,B=S/M,H=y/2,N=S/2,I=E/2,k=L+1,J=M+1;let te=0,q=0;const ne=new A;for(let K=0;K<J;K++){const me=K*B-N;for(let z=0;z<k;z++){const Q=z*P-H;ne[p]=Q*v,ne[m]=me*x,ne[_]=I,c.push(ne.x,ne.y,ne.z),ne[p]=0,ne[m]=0,ne[_]=E>0?1:-1,h.push(ne.x,ne.y,ne.z),d.push(z/L),d.push(1-K/M),te+=1}}for(let K=0;K<M;K++)for(let me=0;me<L;me++){const z=u+me+k*K,Q=u+me+k*(K+1),ae=u+(me+1)+k*(K+1),oe=u+(me+1)+k*K;l.push(z,Q,oe),l.push(Q,ae,oe),q+=6}a.addGroup(f,q,w),f+=q,u+=te}}static fromJSON(e){return new Nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vi(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function At(o){const e={};for(let t=0;t<o.length;t++){const n=Vi(o[t]);for(const i in n)e[i]=n[i]}return e}function ff(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Uh(o){return o.getRenderTarget()===null&&o.outputEncoding===$e?Xt:ki}const kh={clone:Vi,merge:At};var pf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qt extends St{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pf,this.fragmentShader=mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vi(e.uniforms),this.uniformsGroups=ff(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Qr extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class xt extends Qr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ii*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(ii*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ii*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ti=-90,Ai=1;class Vh extends We{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new xt(Ti,Ai,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new xt(Ti,Ai,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new xt(Ti,Ai,e,t);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const a=new xt(Ti,Ai,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new xt(Ti,Ai,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new xt(Ti,Ai,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,a,l,c]=this.children,h=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=$t,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Fs extends at{constructor(e,t,n,i,s,r,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:An,super(e,t,n,i,s,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gh extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Fs(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:st}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Nn(5,5,5),s=new Qt({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:fn});s.uniforms.tEquirect.value=t;const r=new _t(i,s),a=t.minFilter;return t.minFilter===Cn&&(t.minFilter=st),new Vh(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const Na=new A,gf=new A,xf=new Et;class Sn{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Na.subVectors(n,t).cross(gf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Na),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xf.getNormalMatrix(e),i=this.coplanarPoint(Na).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new ui,hr=new A;class jr{constructor(e=new Sn,t=new Sn,n=new Sn,i=new Sn,s=new Sn,r=new Sn){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7],u=n[8],f=n[9],g=n[10],p=n[11],m=n[12],_=n[13],v=n[14],x=n[15];return t[0].setComponents(a-i,d-l,p-u,x-m).normalize(),t[1].setComponents(a+i,d+l,p+u,x+m).normalize(),t[2].setComponents(a+s,d+c,p+f,x+_).normalize(),t[3].setComponents(a-s,d-c,p-f,x-_).normalize(),t[4].setComponents(a-r,d-h,p-g,x-v).normalize(),t[5].setComponents(a+r,d+h,p+g,x+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSprite(e){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(hr.x=i.normal.x>0?e.max.x:e.min.x,hr.y=i.normal.y>0?e.max.y:e.min.y,hr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hh(){let o=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function _f(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,f=o.createBuffer();o.bindBuffer(h,f),o.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const u=h.array,f=h.updateRange;o.bindBuffer(d,c),f.count===-1?o.bufferSubData(d,0,u):(t?o.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):o.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(o.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:r,remove:a,update:l}}class Wi extends Ne{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],p=[],m=[];for(let _=0;_<h;_++){const v=_*u-r;for(let x=0;x<c;x++){const y=x*d-s;g.push(y,-v,0),p.push(0,0,1),m.push(x/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<a;v++){const x=v+c*_,y=v+c*(_+1),S=v+1+c*(_+1),E=v+1+c*_;f.push(x,y,E),f.push(y,S,E)}this.setIndex(f),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(p,3)),this.setAttribute("uv",new pe(m,2))}static fromJSON(e){return new Wi(e.width,e.height,e.widthSegments,e.heightSegments)}}var yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tf="vec3 transformed = vec3( position );",Af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ef=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Cf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Uf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",qf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,np=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ip=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,op=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lp=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,pp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,_p=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Mp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Pp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Rp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Dp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Op=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Bp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,im=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,om=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,cm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,hm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,um=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,dm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,fm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,pm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,mm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_m=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Tm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Am=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rm=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Um=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,km=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ym=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Jm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,De={alphamap_fragment:yf,alphamap_pars_fragment:vf,alphatest_fragment:Mf,alphatest_pars_fragment:bf,aomap_fragment:Sf,aomap_pars_fragment:wf,begin_vertex:Tf,beginnormal_vertex:Af,bsdfs:Ef,iridescence_fragment:Cf,bumpmap_pars_fragment:Lf,clipping_planes_fragment:Pf,clipping_planes_pars_fragment:Rf,clipping_planes_pars_vertex:If,clipping_planes_vertex:Df,color_fragment:Nf,color_pars_fragment:Ff,color_pars_vertex:zf,color_vertex:Of,common:Bf,cube_uv_reflection_fragment:Uf,defaultnormal_vertex:kf,displacementmap_pars_vertex:Vf,displacementmap_vertex:Gf,emissivemap_fragment:Hf,emissivemap_pars_fragment:Wf,encodings_fragment:Xf,encodings_pars_fragment:qf,envmap_fragment:Yf,envmap_common_pars_fragment:Zf,envmap_pars_fragment:Jf,envmap_pars_vertex:$f,envmap_physical_pars_fragment:lp,envmap_vertex:Kf,fog_vertex:Qf,fog_pars_vertex:jf,fog_fragment:ep,fog_pars_fragment:tp,gradientmap_pars_fragment:np,lightmap_fragment:ip,lightmap_pars_fragment:sp,lights_lambert_fragment:rp,lights_lambert_pars_fragment:ap,lights_pars_begin:op,lights_toon_fragment:cp,lights_toon_pars_fragment:hp,lights_phong_fragment:up,lights_phong_pars_fragment:dp,lights_physical_fragment:fp,lights_physical_pars_fragment:pp,lights_fragment_begin:mp,lights_fragment_maps:gp,lights_fragment_end:xp,logdepthbuf_fragment:_p,logdepthbuf_pars_fragment:yp,logdepthbuf_pars_vertex:vp,logdepthbuf_vertex:Mp,map_fragment:bp,map_pars_fragment:Sp,map_particle_fragment:wp,map_particle_pars_fragment:Tp,metalnessmap_fragment:Ap,metalnessmap_pars_fragment:Ep,morphcolor_vertex:Cp,morphnormal_vertex:Lp,morphtarget_pars_vertex:Pp,morphtarget_vertex:Rp,normal_fragment_begin:Ip,normal_fragment_maps:Dp,normal_pars_fragment:Np,normal_pars_vertex:Fp,normal_vertex:zp,normalmap_pars_fragment:Op,clearcoat_normal_fragment_begin:Bp,clearcoat_normal_fragment_maps:Up,clearcoat_pars_fragment:kp,iridescence_pars_fragment:Vp,output_fragment:Gp,packing:Hp,premultiplied_alpha_fragment:Wp,project_vertex:Xp,dithering_fragment:qp,dithering_pars_fragment:Yp,roughnessmap_fragment:Zp,roughnessmap_pars_fragment:Jp,shadowmap_pars_fragment:$p,shadowmap_pars_vertex:Kp,shadowmap_vertex:Qp,shadowmask_pars_fragment:jp,skinbase_vertex:em,skinning_pars_vertex:tm,skinning_vertex:nm,skinnormal_vertex:im,specularmap_fragment:sm,specularmap_pars_fragment:rm,tonemapping_fragment:am,tonemapping_pars_fragment:om,transmission_fragment:lm,transmission_pars_fragment:cm,uv_pars_fragment:hm,uv_pars_vertex:um,uv_vertex:dm,uv2_pars_fragment:fm,uv2_pars_vertex:pm,uv2_vertex:mm,worldpos_vertex:gm,background_vert:xm,background_frag:_m,backgroundCube_vert:ym,backgroundCube_frag:vm,cube_vert:Mm,cube_frag:bm,depth_vert:Sm,depth_frag:wm,distanceRGBA_vert:Tm,distanceRGBA_frag:Am,equirect_vert:Em,equirect_frag:Cm,linedashed_vert:Lm,linedashed_frag:Pm,meshbasic_vert:Rm,meshbasic_frag:Im,meshlambert_vert:Dm,meshlambert_frag:Nm,meshmatcap_vert:Fm,meshmatcap_frag:zm,meshnormal_vert:Om,meshnormal_frag:Bm,meshphong_vert:Um,meshphong_frag:km,meshphysical_vert:Vm,meshphysical_frag:Gm,meshtoon_vert:Hm,meshtoon_frag:Wm,points_vert:Xm,points_frag:qm,shadow_vert:Ym,shadow_frag:Zm,sprite_vert:Jm,sprite_frag:$m},re={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Et},uv2Transform:{value:new Et},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Et}}},qt={basic:{uniforms:At([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:At([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new fe(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:At([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:At([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:At([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new fe(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:At([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:At([re.points,re.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:At([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:At([re.common,re.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:At([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:At([re.sprite,re.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:At([re.common,re.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:At([re.lights,re.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};qt.physical={uniforms:At([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new $(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const ur={r:0,b:0,g:0};function Km(o,e,t,n,i,s,r){const a=new fe(0);let l=s===!0?0:1,c,h,d=null,u=0,f=null;function g(m,_){let v=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const y=o.xr,S=y.getSession&&y.getSession();S&&S.environmentBlendMode==="additive"&&(x=null),x===null?p(a,l):x&&x.isColor&&(p(x,1),v=!0),(o.autoClear||v)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Hi)?(h===void 0&&(h=new _t(new Nn(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:Vi(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,L,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=x.encoding!==$e,(d!==x||u!==x.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=o.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new _t(new Wi(2,2),new Qt({name:"BackgroundMaterial",uniforms:Vi(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==$e,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,f=o.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,_){m.getRGB(ur,Uh(o)),n.buffers.color.setClear(ur.r,ur.g,ur.b,_,r)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(a,l)},render:g}}function Qm(o,e,t,n){const i=o.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,a={},l=m(null);let c=l,h=!1;function d(I,k,J,te,q){let ne=!1;if(r){const K=p(te,J,k);c!==K&&(c=K,f(c.object)),ne=_(I,te,J,q),ne&&v(I,te,J,q)}else{const K=k.wireframe===!0;(c.geometry!==te.id||c.program!==J.id||c.wireframe!==K)&&(c.geometry=te.id,c.program=J.id,c.wireframe=K,ne=!0)}q!==null&&t.update(q,34963),(ne||h)&&(h=!1,M(I,k,J,te),q!==null&&o.bindBuffer(34963,t.get(q).buffer))}function u(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function f(I){return n.isWebGL2?o.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?o.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function p(I,k,J){const te=J.wireframe===!0;let q=a[I.id];q===void 0&&(q={},a[I.id]=q);let ne=q[k.id];ne===void 0&&(ne={},q[k.id]=ne);let K=ne[te];return K===void 0&&(K=m(u()),ne[te]=K),K}function m(I){const k=[],J=[],te=[];for(let q=0;q<i;q++)k[q]=0,J[q]=0,te[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:J,attributeDivisors:te,object:I,attributes:{},index:null}}function _(I,k,J,te){const q=c.attributes,ne=k.attributes;let K=0;const me=J.getAttributes();for(const z in me)if(me[z].location>=0){const ae=q[z];let oe=ne[z];if(oe===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor)),ae===void 0||ae.attribute!==oe||oe&&ae.data!==oe.data)return!0;K++}return c.attributesNum!==K||c.index!==te}function v(I,k,J,te){const q={},ne=k.attributes;let K=0;const me=J.getAttributes();for(const z in me)if(me[z].location>=0){let ae=ne[z];ae===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor));const oe={};oe.attribute=ae,ae&&ae.data&&(oe.data=ae.data),q[z]=oe,K++}c.attributes=q,c.attributesNum=K,c.index=te}function x(){const I=c.newAttributes;for(let k=0,J=I.length;k<J;k++)I[k]=0}function y(I){S(I,0)}function S(I,k){const J=c.newAttributes,te=c.enabledAttributes,q=c.attributeDivisors;J[I]=1,te[I]===0&&(o.enableVertexAttribArray(I),te[I]=1),q[I]!==k&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,k),q[I]=k)}function E(){const I=c.newAttributes,k=c.enabledAttributes;for(let J=0,te=k.length;J<te;J++)k[J]!==I[J]&&(o.disableVertexAttribArray(J),k[J]=0)}function L(I,k,J,te,q,ne){n.isWebGL2===!0&&(J===5124||J===5125)?o.vertexAttribIPointer(I,k,J,q,ne):o.vertexAttribPointer(I,k,J,te,q,ne)}function M(I,k,J,te){if(n.isWebGL2===!1&&(I.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const q=te.attributes,ne=J.getAttributes(),K=k.defaultAttributeValues;for(const me in ne){const z=ne[me];if(z.location>=0){let Q=q[me];if(Q===void 0&&(me==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),me==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),Q!==void 0){const ae=Q.normalized,oe=Q.itemSize,O=t.get(Q);if(O===void 0)continue;const Me=O.buffer,ge=O.type,ye=O.bytesPerElement;if(Q.isInterleavedBufferAttribute){const le=Q.data,Oe=le.stride,Z=Q.offset;if(le.isInstancedInterleavedBuffer){for(let Y=0;Y<z.locationSize;Y++)S(z.location+Y,le.meshPerAttribute);I.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Y=0;Y<z.locationSize;Y++)y(z.location+Y);o.bindBuffer(34962,Me);for(let Y=0;Y<z.locationSize;Y++)L(z.location+Y,oe/z.locationSize,ge,ae,Oe*ye,(Z+oe/z.locationSize*Y)*ye)}else{if(Q.isInstancedBufferAttribute){for(let le=0;le<z.locationSize;le++)S(z.location+le,Q.meshPerAttribute);I.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let le=0;le<z.locationSize;le++)y(z.location+le);o.bindBuffer(34962,Me);for(let le=0;le<z.locationSize;le++)L(z.location+le,oe/z.locationSize,ge,ae,oe*ye,oe/z.locationSize*le*ye)}}else if(K!==void 0){const ae=K[me];if(ae!==void 0)switch(ae.length){case 2:o.vertexAttrib2fv(z.location,ae);break;case 3:o.vertexAttrib3fv(z.location,ae);break;case 4:o.vertexAttrib4fv(z.location,ae);break;default:o.vertexAttrib1fv(z.location,ae)}}}}E()}function w(){H();for(const I in a){const k=a[I];for(const J in k){const te=k[J];for(const q in te)g(te[q].object),delete te[q];delete k[J]}delete a[I]}}function P(I){if(a[I.id]===void 0)return;const k=a[I.id];for(const J in k){const te=k[J];for(const q in te)g(te[q].object),delete te[q];delete k[J]}delete a[I.id]}function B(I){for(const k in a){const J=a[k];if(J[I.id]===void 0)continue;const te=J[I.id];for(const q in te)g(te[q].object),delete te[q];delete J[I.id]}}function H(){N(),h=!0,c!==l&&(c=l,f(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:H,resetDefaultState:N,dispose:w,releaseStatesOfGeometry:P,releaseStatesOfProgram:B,initAttributes:x,enableAttribute:y,disableUnusedAttributes:E}}function jm(o,e,t,n){const i=n.isWebGL2;let s;function r(c){s=c}function a(c,h){o.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,d){if(d===0)return;let u,f;if(i)u=o,f="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[f](s,c,h,d),t.update(h,s,d)}this.setMode=r,this.render=a,this.renderInstances=l}function eg(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=o.getParameter(34930),u=o.getParameter(35660),f=o.getParameter(3379),g=o.getParameter(34076),p=o.getParameter(34921),m=o.getParameter(36347),_=o.getParameter(36348),v=o.getParameter(36349),x=u>0,y=r||e.has("OES_texture_float"),S=x&&y,E=r?o.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:E}}function tg(o){const e=this;let t=null,n=0,i=!1,s=!1;const r=new Sn,a=new Et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,p=d.clipIntersection,m=d.clipShadows,_=o.get(d);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const v=s?0:n,x=v*4;let y=_.clippingState||null;l.value=y,y=h(g,u,x,f);for(let S=0;S!==x;++S)y[S]=t[S];_.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const p=d!==null?d.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const _=f+p*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<_)&&(m=new Float32Array(_));for(let x=0,y=f;x!==p;++x,y+=4)r.copy(d[x]).applyMatrix4(v,a),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function ng(o){let e=new WeakMap;function t(r,a){return a===ps?r.mapping=An:a===ms&&(r.mapping=En),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const a=r.mapping;if(a===ps||a===ms)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Gh(l.height/2);return c.fromEquirectangularTexture(o,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ea extends Qr{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fi=4,Pl=[.125,.215,.35,.446,.526,.582],$n=20,Fa=new ea,Rl=new fe;let za=null;const Zn=(1+Math.sqrt(5))/2,Ci=1/Zn,Il=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,Zn,Ci),new A(0,Zn,-Ci),new A(Ci,0,Zn),new A(-Ci,0,Zn),new A(Zn,Ci,0),new A(-Zn,Ci,0)];class Eo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){za=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(za),e.scissorTest=!1,dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===An||e.mapping===En?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),za=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:st,minFilter:st,generateMipmaps:!1,type:Ui,format:Ft,encoding:Pn,depthBuffer:!1},i=Dl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ig(s)),this._blurMaterial=sg(s,e,t)}return i}_compileMaterial(e){const t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,n,i){const a=new xt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Rl),h.toneMapping=$t,h.autoClear=!1;const f=new Dn({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),g=new _t(new Nn,f);let p=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Rl),p=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):v===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const x=this._cubeSize;dr(i,v*x,_>2?x:0,x,x),h.setRenderTarget(i),p&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===An||e.mapping===En;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nl());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new _t(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;dr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Fa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Il[(i-1)%Il.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new _t(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*$n-1),p=s/g,m=isFinite(s)?1+Math.floor(h*p):$n;m>$n&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);const _=[];let v=0;for(let L=0;L<$n;++L){const M=L/p,w=Math.exp(-M*M/2);_.push(w),L===0?v+=w:L<m&&(v+=2*w)}for(let L=0;L<_.length;L++)_[L]=_[L]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=_,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const y=this._sizeLods[i],S=3*y*(i>x-Fi?i-x+Fi:0),E=4*(this._cubeSize-y);dr(t,S,E,3*y,2*y),l.setRenderTarget(t),l.render(d,Fa)}}function ig(o){const e=[],t=[],n=[];let i=o;const s=o-Fi+1+Pl.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);let l=1/a;r>o-Fi?l=Pl[r-o+Fi-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,p=3,m=2,_=1,v=new Float32Array(p*g*f),x=new Float32Array(m*g*f),y=new Float32Array(_*g*f);for(let E=0;E<f;E++){const L=E%3*2/3-1,M=E>2?0:-1,w=[L,M,0,L+2/3,M,0,L+2/3,M+1,0,L,M,0,L+2/3,M+1,0,L,M+1,0];v.set(w,p*g*E),x.set(u,m*g*E);const P=[E,E,E,E,E,E];y.set(P,_*g*E)}const S=new Ne;S.setAttribute("position",new Je(v,p)),S.setAttribute("uv",new Je(x,m)),S.setAttribute("faceIndex",new Je(y,_)),e.push(S),i>Fi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Dl(o,e,t){const n=new Yt(o,e,t);return n.texture.mapping=Hi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function dr(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function sg(o,e,t){const n=new Float32Array($n),i=new A(0,1,0);return new Qt({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Nl(){return new Qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Fl(){return new Qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function qo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rg(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ps||l===ms,h=l===An||l===En;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Eo(o)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Eo(o));const u=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function ag(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function og(o,e,t,n){const i={},s=new WeakMap;function r(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete i[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],34962);const f=d.morphAttributes;for(const g in f){const p=f[g];for(let m=0,_=p.length;m<_;m++)e.update(p[m],34962)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let p=0;if(f!==null){const v=f.array;p=f.version;for(let x=0,y=v.length;x<y;x+=3){const S=v[x+0],E=v[x+1],L=v[x+2];u.push(S,E,E,L,L,S)}}else{const v=g.array;p=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const S=x+0,E=x+1,L=x+2;u.push(S,E,E,L,L,S)}}const m=new(Oh(u)?Xo:Wo)(u,1);m.version=p;const _=s.get(d);_&&e.remove(_),s.set(d,m)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function lg(o,e,t,n){const i=n.isWebGL2;let s;function r(u){s=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function h(u,f){o.drawElements(s,f,a,u*l),t.update(f,s,1)}function d(u,f,g){if(g===0)return;let p,m;if(i)p=o,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,f,a,u*l,g),t.update(f,s,g)}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=d}function cg(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(t.calls++,r){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function hg(o,e){return o[0]-e[0]}function ug(o,e){return Math.abs(e[1])-Math.abs(o[1])}function dg(o,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new Ye,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d,u){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=g!==void 0?g.length:0;let m=s.get(h);if(m===void 0||m.count!==p){let k=function(){N.dispose(),s.delete(h),h.removeEventListener("dispose",k)};m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],M=h.morphAttributes.color||[];let w=0;x===!0&&(w=1),y===!0&&(w=2),S===!0&&(w=3);let P=h.attributes.position.count*w,B=1;P>e.maxTextureSize&&(B=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const H=new Float32Array(P*B*4*p),N=new $r(H,P,B,p);N.type=un,N.needsUpdate=!0;const I=w*4;for(let J=0;J<p;J++){const te=E[J],q=L[J],ne=M[J],K=P*B*4*J;for(let me=0;me<te.count;me++){const z=me*I;x===!0&&(r.fromBufferAttribute(te,me),H[K+z+0]=r.x,H[K+z+1]=r.y,H[K+z+2]=r.z,H[K+z+3]=0),y===!0&&(r.fromBufferAttribute(q,me),H[K+z+4]=r.x,H[K+z+5]=r.y,H[K+z+6]=r.z,H[K+z+7]=0),S===!0&&(r.fromBufferAttribute(ne,me),H[K+z+8]=r.x,H[K+z+9]=r.y,H[K+z+10]=r.z,H[K+z+11]=ne.itemSize===4?r.w:1)}}m={count:p,texture:N,size:new $(P,B)},s.set(h,m),h.addEventListener("dispose",k)}let _=0;for(let x=0;x<f.length;x++)_+=f[x];const v=h.morphTargetsRelative?1:1-_;u.getUniforms().setValue(o,"morphTargetBaseInfluence",v),u.getUniforms().setValue(o,"morphTargetInfluences",f),u.getUniforms().setValue(o,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(o,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let p=n[h.id];if(p===void 0||p.length!==g){p=[];for(let y=0;y<g;y++)p[y]=[y,0];n[h.id]=p}for(let y=0;y<g;y++){const S=p[y];S[0]=y,S[1]=f[y]}p.sort(ug);for(let y=0;y<8;y++)y<g&&p[y][1]?(a[y][0]=p[y][0],a[y][1]=p[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(hg);const m=h.morphAttributes.position,_=h.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const S=a[y],E=S[0],L=S[1];E!==Number.MAX_SAFE_INTEGER&&L?(m&&h.getAttribute("morphTarget"+y)!==m[E]&&h.setAttribute("morphTarget"+y,m[E]),_&&h.getAttribute("morphNormal"+y)!==_[E]&&h.setAttribute("morphNormal"+y,_[E]),i[y]=L,v+=L):(m&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),_&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const x=h.morphTargetsRelative?1:1-v;u.getUniforms().setValue(o,"morphTargetBaseInfluence",x),u.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function fg(o,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}const Wh=new at,Xh=new $r,qh=new Ho,Yh=new Fs,zl=[],Ol=[],Bl=new Float32Array(16),Ul=new Float32Array(9),kl=new Float32Array(4);function Xi(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let s=zl[i];if(s===void 0&&(s=new Float32Array(i),zl[i]=s),e!==0){n.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,o[r].toArray(s,a)}return s}function ut(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function dt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function ta(o,e){let t=Ol[e];t===void 0&&(t=new Int32Array(e),Ol[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function pg(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function mg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;o.uniform2fv(this.addr,e),dt(t,e)}}function gg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;o.uniform3fv(this.addr,e),dt(t,e)}}function xg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;o.uniform4fv(this.addr,e),dt(t,e)}}function _g(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;kl.set(n),o.uniformMatrix2fv(this.addr,!1,kl),dt(t,n)}}function yg(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;Ul.set(n),o.uniformMatrix3fv(this.addr,!1,Ul),dt(t,n)}}function vg(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;Bl.set(n),o.uniformMatrix4fv(this.addr,!1,Bl),dt(t,n)}}function Mg(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function bg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;o.uniform2iv(this.addr,e),dt(t,e)}}function Sg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;o.uniform3iv(this.addr,e),dt(t,e)}}function wg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;o.uniform4iv(this.addr,e),dt(t,e)}}function Tg(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Ag(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;o.uniform2uiv(this.addr,e),dt(t,e)}}function Eg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;o.uniform3uiv(this.addr,e),dt(t,e)}}function Cg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;o.uniform4uiv(this.addr,e),dt(t,e)}}function Lg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Wh,i)}function Pg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||qh,i)}function Rg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Yh,i)}function Ig(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Xh,i)}function Dg(o){switch(o){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return xg;case 35674:return _g;case 35675:return yg;case 35676:return vg;case 5124:case 35670:return Mg;case 35667:case 35671:return bg;case 35668:case 35672:return Sg;case 35669:case 35673:return wg;case 5125:return Tg;case 36294:return Ag;case 36295:return Eg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Ig}}function Ng(o,e){o.uniform1fv(this.addr,e)}function Fg(o,e){const t=Xi(e,this.size,2);o.uniform2fv(this.addr,t)}function zg(o,e){const t=Xi(e,this.size,3);o.uniform3fv(this.addr,t)}function Og(o,e){const t=Xi(e,this.size,4);o.uniform4fv(this.addr,t)}function Bg(o,e){const t=Xi(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Ug(o,e){const t=Xi(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function kg(o,e){const t=Xi(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Vg(o,e){o.uniform1iv(this.addr,e)}function Gg(o,e){o.uniform2iv(this.addr,e)}function Hg(o,e){o.uniform3iv(this.addr,e)}function Wg(o,e){o.uniform4iv(this.addr,e)}function Xg(o,e){o.uniform1uiv(this.addr,e)}function qg(o,e){o.uniform2uiv(this.addr,e)}function Yg(o,e){o.uniform3uiv(this.addr,e)}function Zg(o,e){o.uniform4uiv(this.addr,e)}function Jg(o,e,t){const n=this.cache,i=e.length,s=ta(t,i);ut(n,s)||(o.uniform1iv(this.addr,s),dt(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Wh,s[r])}function $g(o,e,t){const n=this.cache,i=e.length,s=ta(t,i);ut(n,s)||(o.uniform1iv(this.addr,s),dt(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||qh,s[r])}function Kg(o,e,t){const n=this.cache,i=e.length,s=ta(t,i);ut(n,s)||(o.uniform1iv(this.addr,s),dt(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Yh,s[r])}function Qg(o,e,t){const n=this.cache,i=e.length,s=ta(t,i);ut(n,s)||(o.uniform1iv(this.addr,s),dt(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Xh,s[r])}function jg(o){switch(o){case 5126:return Ng;case 35664:return Fg;case 35665:return zg;case 35666:return Og;case 35674:return Bg;case 35675:return Ug;case 35676:return kg;case 5124:case 35670:return Vg;case 35667:case 35671:return Gg;case 35668:case 35672:return Hg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return qg;case 36295:return Yg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return Qg}}class e0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Dg(t.type)}}class t0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=jg(t.type)}}class n0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function Vl(o,e){o.seq.push(e),o.map[e.id]=e}function i0(o,e,t){const n=o.name,i=n.length;for(Oa.lastIndex=0;;){const s=Oa.exec(n),r=Oa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){Vl(t,c===void 0?new e0(a,o,e):new t0(a,o,e));break}else{let d=t.map[a];d===void 0&&(d=new n0(a),Vl(t,d)),t=d}}}class Gr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);i0(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Gl(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let s0=0;function r0(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}function a0(o){switch(o){case Pn:return["Linear","( value )"];case $e:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Hl(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+r0(o.getShaderSource(e),r)}else return i}function o0(o,e){const t=a0(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function l0(o,e){let t;switch(e){case ch:t="Linear";break;case hh:t="Reinhard";break;case uh:t="OptimizedCineon";break;case dh:t="ACESFilmic";break;case fh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function c0(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(cs).join(`
`)}function h0(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function u0(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=o.getActiveAttrib(e,i),r=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[r]={type:s.type,location:o.getAttribLocation(e,r),locationSize:a}}return t}function cs(o){return o!==""}function Wl(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xl(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const d0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(o){return o.replace(d0,f0)}function f0(o,e){const t=De[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Co(t)}const p0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ql(o){return o.replace(p0,m0)}function m0(o,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Yl(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function g0(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Fo?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Vc?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function x0(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case An:case En:e="ENVMAP_TYPE_CUBE";break;case Hi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _0(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case En:e="ENVMAP_MODE_REFRACTION";break}return e}function y0(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Is:e="ENVMAP_BLENDING_MULTIPLY";break;case oh:e="ENVMAP_BLENDING_MIX";break;case lh:e="ENVMAP_BLENDING_ADD";break}return e}function v0(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function M0(o,e,t,n){const i=o.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=g0(t),c=x0(t),h=_0(t),d=y0(t),u=v0(t),f=t.isWebGL2?"":c0(t),g=h0(s),p=i.createProgram();let m,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(cs).join(`
`),m.length>0&&(m+=`
`),_=[f,g].filter(cs).join(`
`),_.length>0&&(_+=`
`)):(m=[Yl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),_=[f,Yl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$t?"#define TONE_MAPPING":"",t.toneMapping!==$t?De.tonemapping_pars_fragment:"",t.toneMapping!==$t?l0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.encodings_pars_fragment,o0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cs).join(`
`)),r=Co(r),r=Wl(r,t),r=Xl(r,t),a=Co(a),a=Wl(a,t),a=Xl(a,t),r=ql(r),a=ql(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===To?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===To?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=v+m+r,y=v+_+a,S=Gl(i,35633,x),E=Gl(i,35632,y);if(i.attachShader(p,S),i.attachShader(p,E),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),o.debug.checkShaderErrors){const w=i.getProgramInfoLog(p).trim(),P=i.getShaderInfoLog(S).trim(),B=i.getShaderInfoLog(E).trim();let H=!0,N=!0;if(i.getProgramParameter(p,35714)===!1){H=!1;const I=Hl(i,S,"vertex"),k=Hl(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+w+`
`+I+`
`+k)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(P===""||B==="")&&(N=!1);N&&(this.diagnostics={runnable:H,programLog:w,vertexShader:{log:P,prefix:m},fragmentShader:{log:B,prefix:_}})}i.deleteShader(S),i.deleteShader(E);let L;this.getUniforms=function(){return L===void 0&&(L=new Gr(i,p)),L};let M;return this.getAttributes=function(){return M===void 0&&(M=u0(i,p)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=s0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=E,this}let b0=0;class S0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new w0(e),t.set(e,n)),n}}class w0{constructor(e){this.id=b0++,this.code=e,this.usedTimes=0}}function T0(o,e,t,n,i,s,r){const a=new Kr,l=new S0,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M,w,P,B,H){const N=B.fog,I=H.geometry,k=M.isMeshStandardMaterial?B.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||k),te=J&&J.mapping===Hi?J.image.height:null,q=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const ne=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,K=ne!==void 0?ne.length:0;let me=0;I.morphAttributes.position!==void 0&&(me=1),I.morphAttributes.normal!==void 0&&(me=2),I.morphAttributes.color!==void 0&&(me=3);let z,Q,ae,oe;if(q){const Oe=qt[q];z=Oe.vertexShader,Q=Oe.fragmentShader}else z=M.vertexShader,Q=M.fragmentShader,l.update(M),ae=l.getVertexShaderID(M),oe=l.getFragmentShaderID(M);const O=o.getRenderTarget(),Me=M.alphaTest>0,ge=M.clearcoat>0,ye=M.iridescence>0;return{isWebGL2:h,shaderID:q,shaderName:M.type,vertexShader:z,fragmentShader:Q,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:oe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,instancing:H.isInstancedMesh===!0,instancingColor:H.isInstancedMesh===!0&&H.instanceColor!==null,supportsVertexTextures:u,outputEncoding:O===null?o.outputEncoding:O.isXRRenderTarget===!0?O.texture.encoding:Pn,map:!!M.map,matcap:!!M.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:te,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===Nh,tangentSpaceNormalMap:M.normalMapType===In,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===$e,clearcoat:ge,clearcoatMap:ge&&!!M.clearcoatMap,clearcoatRoughnessMap:ge&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:ge&&!!M.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!M.iridescenceMap,iridescenceThicknessMap:ye&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===ti,alphaMap:!!M.alphaMap,alphaTest:Me,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!I.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!N,useFog:M.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:me,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:M.toneMapped?o.toneMapping:$t,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hn,flipSided:M.side===Lt,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)w.push(P),w.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(_(w,M),v(w,M),w.push(o.outputEncoding)),w.push(M.customProgramCacheKey),w.join()}function _(M,w){M.push(w.precision),M.push(w.outputEncoding),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.combine),M.push(w.vertexUvs),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function v(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.map&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.lightMap&&a.enable(7),w.aoMap&&a.enable(8),w.emissiveMap&&a.enable(9),w.bumpMap&&a.enable(10),w.normalMap&&a.enable(11),w.objectSpaceNormalMap&&a.enable(12),w.tangentSpaceNormalMap&&a.enable(13),w.clearcoat&&a.enable(14),w.clearcoatMap&&a.enable(15),w.clearcoatRoughnessMap&&a.enable(16),w.clearcoatNormalMap&&a.enable(17),w.iridescence&&a.enable(18),w.iridescenceMap&&a.enable(19),w.iridescenceThicknessMap&&a.enable(20),w.displacementMap&&a.enable(21),w.specularMap&&a.enable(22),w.roughnessMap&&a.enable(23),w.metalnessMap&&a.enable(24),w.gradientMap&&a.enable(25),w.alphaMap&&a.enable(26),w.alphaTest&&a.enable(27),w.vertexColors&&a.enable(28),w.vertexAlphas&&a.enable(29),w.vertexUvs&&a.enable(30),w.vertexTangents&&a.enable(31),w.uvsVertexOnly&&a.enable(32),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.physicallyCorrectLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.specularIntensityMap&&a.enable(15),w.specularColorMap&&a.enable(16),w.transmission&&a.enable(17),w.transmissionMap&&a.enable(18),w.thicknessMap&&a.enable(19),w.sheen&&a.enable(20),w.sheenColorMap&&a.enable(21),w.sheenRoughnessMap&&a.enable(22),w.decodeVideoTexture&&a.enable(23),w.opaque&&a.enable(24),M.push(a.mask)}function x(M){const w=g[M.type];let P;if(w){const B=qt[w];P=kh.clone(B.uniforms)}else P=M.uniforms;return P}function y(M,w){let P;for(let B=0,H=c.length;B<H;B++){const N=c[B];if(N.cacheKey===w){P=N,++P.usedTimes;break}}return P===void 0&&(P=new M0(o,w,M,s),c.push(P)),P}function S(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:y,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:L}}function A0(){let o=new WeakMap;function e(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function t(s){o.delete(s)}function n(s,r,a){o.get(s)[r]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function E0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Zl(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Jl(){const o=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(d,u,f,g,p,m){let _=o[e];return _===void 0?(_={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:p,group:m},o[e]=_):(_.id=d.id,_.object=d,_.geometry=u,_.material=f,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=p,_.group=m),e++,_}function a(d,u,f,g,p,m){const _=r(d,u,f,g,p,m);f.transmission>0?n.push(_):f.transparent===!0?i.push(_):t.push(_)}function l(d,u,f,g,p,m){const _=r(d,u,f,g,p,m);f.transmission>0?n.unshift(_):f.transparent===!0?i.unshift(_):t.unshift(_)}function c(d,u){t.length>1&&t.sort(d||E0),n.length>1&&n.sort(u||Zl),i.length>1&&i.sort(u||Zl)}function h(){for(let d=e,u=o.length;d<u;d++){const f=o[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function C0(){let o=new WeakMap;function e(n,i){const s=o.get(n);let r;return s===void 0?(r=new Jl,o.set(n,[r])):i>=s.length?(r=new Jl,s.push(r)):r=s[i],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function L0(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new fe};break;case"SpotLight":t={position:new A,direction:new A,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new A,halfWidth:new A,halfHeight:new A};break}return o[e.id]=t,t}}}function P0(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let R0=0;function I0(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function D0(o,e){const t=new L0,n=P0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new A);const s=new A,r=new Ie,a=new Ie;function l(h,d){let u=0,f=0,g=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let p=0,m=0,_=0,v=0,x=0,y=0,S=0,E=0,L=0,M=0;h.sort(I0);const w=d!==!0?Math.PI:1;for(let B=0,H=h.length;B<H;B++){const N=h[B],I=N.color,k=N.intensity,J=N.distance,te=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=I.r*k*w,f+=I.g*k*w,g+=I.b*k*w;else if(N.isLightProbe)for(let q=0;q<9;q++)i.probe[q].addScaledVector(N.sh.coefficients[q],k);else if(N.isDirectionalLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity*w),N.castShadow){const ne=N.shadow,K=n.get(N);K.shadowBias=ne.bias,K.shadowNormalBias=ne.normalBias,K.shadowRadius=ne.radius,K.shadowMapSize=ne.mapSize,i.directionalShadow[p]=K,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=N.shadow.matrix,y++}i.directional[p]=q,p++}else if(N.isSpotLight){const q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(I).multiplyScalar(k*w),q.distance=J,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,i.spot[_]=q;const ne=N.shadow;if(N.map&&(i.spotLightMap[L]=N.map,L++,ne.updateMatrices(N),N.castShadow&&M++),i.spotLightMatrix[_]=ne.matrix,N.castShadow){const K=n.get(N);K.shadowBias=ne.bias,K.shadowNormalBias=ne.normalBias,K.shadowRadius=ne.radius,K.shadowMapSize=ne.mapSize,i.spotShadow[_]=K,i.spotShadowMap[_]=te,E++}_++}else if(N.isRectAreaLight){const q=t.get(N);q.color.copy(I).multiplyScalar(k),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),i.rectArea[v]=q,v++}else if(N.isPointLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity*w),q.distance=N.distance,q.decay=N.decay,N.castShadow){const ne=N.shadow,K=n.get(N);K.shadowBias=ne.bias,K.shadowNormalBias=ne.normalBias,K.shadowRadius=ne.radius,K.shadowMapSize=ne.mapSize,K.shadowCameraNear=ne.camera.near,K.shadowCameraFar=ne.camera.far,i.pointShadow[m]=K,i.pointShadowMap[m]=te,i.pointShadowMatrix[m]=N.shadow.matrix,S++}i.point[m]=q,m++}else if(N.isHemisphereLight){const q=t.get(N);q.skyColor.copy(N.color).multiplyScalar(k*w),q.groundColor.copy(N.groundColor).multiplyScalar(k*w),i.hemi[x]=q,x++}}v>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==p||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==v||P.hemiLength!==x||P.numDirectionalShadows!==y||P.numPointShadows!==S||P.numSpotShadows!==E||P.numSpotMaps!==L)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=v,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+L-M,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=M,P.directionalLength=p,P.pointLength=m,P.spotLength=_,P.rectAreaLength=v,P.hemiLength=x,P.numDirectionalShadows=y,P.numPointShadows=S,P.numSpotShadows=E,P.numSpotMaps=L,i.version=R0++)}function c(h,d){let u=0,f=0,g=0,p=0,m=0;const _=d.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const y=h[v];if(y.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),u++}else if(y.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(_),a.identity(),r.copy(y.matrixWorld),r.premultiply(_),a.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(_),f++}else if(y.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function $l(o,e){const t=new D0(o,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(d){n.push(d)}function a(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:a}}function N0(o,e){let t=new WeakMap;function n(s,r=0){const a=t.get(s);let l;return a===void 0?(l=new $l(o,e),t.set(s,[l])):r>=a.length?(l=new $l(o,e),a.push(l)):l=a[r],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Yo extends St{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zo extends St{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new A,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const F0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function O0(o,e,t){let n=new jr;const i=new $,s=new $,r=new Ye,a=new Yo({depthPacking:Dh}),l=new Zo,c={},h=t.maxTextureSize,d={[pn]:Lt,[Lt]:pn,[hn]:hn},u=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:F0,fragmentShader:z0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ne;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new _t(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fo,this.render=function(y,S,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const L=o.getRenderTarget(),M=o.getActiveCubeFace(),w=o.getActiveMipmapLevel(),P=o.state;P.setBlending(fn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let B=0,H=y.length;B<H;B++){const N=y[B],I=N.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const k=I.getFrameExtents();if(i.multiply(k),s.copy(I.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/k.x),i.x=s.x*k.x,I.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/k.y),i.y=s.y*k.y,I.mapSize.y=s.y)),I.map===null){const te=this.type!==Di?{minFilter:it,magFilter:it}:{};I.map=new Yt(i.x,i.y,te),I.map.texture.name=N.name+".shadowMap",I.camera.updateProjectionMatrix()}o.setRenderTarget(I.map),o.clear();const J=I.getViewportCount();for(let te=0;te<J;te++){const q=I.getViewport(te);r.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),P.viewport(r),I.updateMatrices(N,te),n=I.getFrustum(),x(S,E,I.camera,N,this.type)}I.isPointLightShadow!==!0&&this.type===Di&&_(I,E),I.needsUpdate=!1}m.needsUpdate=!1,o.setRenderTarget(L,M,w)};function _(y,S){const E=e.update(p);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Yt(i.x,i.y)),u.uniforms.shadow_pass.value=y.map.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,o.setRenderTarget(y.mapPass),o.clear(),o.renderBufferDirect(S,null,E,u,p,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,o.setRenderTarget(y.map),o.clear(),o.renderBufferDirect(S,null,E,f,p,null)}function v(y,S,E,L,M,w){let P=null;const B=E.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(B!==void 0)P=B;else if(P=E.isPointLight===!0?l:a,o.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const H=P.uuid,N=S.uuid;let I=c[H];I===void 0&&(I={},c[H]=I);let k=I[N];k===void 0&&(k=P.clone(),I[N]=k),P=k}return P.visible=S.visible,P.wireframe=S.wireframe,w===Di?P.side=S.shadowSide!==null?S.shadowSide:S.side:P.side=S.shadowSide!==null?S.shadowSide:d[S.side],P.alphaMap=S.alphaMap,P.alphaTest=S.alphaTest,P.map=S.map,P.clipShadows=S.clipShadows,P.clippingPlanes=S.clippingPlanes,P.clipIntersection=S.clipIntersection,P.displacementMap=S.displacementMap,P.displacementScale=S.displacementScale,P.displacementBias=S.displacementBias,P.wireframeLinewidth=S.wireframeLinewidth,P.linewidth=S.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(E.matrixWorld),P.nearDistance=L,P.farDistance=M),P}function x(y,S,E,L,M){if(y.visible===!1)return;if(y.layers.test(S.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&M===Di)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,y.matrixWorld);const B=e.update(y),H=y.material;if(Array.isArray(H)){const N=B.groups;for(let I=0,k=N.length;I<k;I++){const J=N[I],te=H[J.materialIndex];if(te&&te.visible){const q=v(y,te,L,E.near,E.far,M);o.renderBufferDirect(E,null,B,q,y,J)}}}else if(H.visible){const N=v(y,H,L,E.near,E.far,M);o.renderBufferDirect(E,null,B,N,y,null)}}const P=y.children;for(let B=0,H=P.length;B<H;B++)x(P[B],S,E,L,M)}}function B0(o,e,t){const n=t.isWebGL2;function i(){let R=!1;const V=new Ye;let j=null;const de=new Ye(0,0,0,0);return{setMask:function(ve){j!==ve&&!R&&(o.colorMask(ve,ve,ve,ve),j=ve)},setLocked:function(ve){R=ve},setClear:function(ve,Xe,pt,yt,zn){zn===!0&&(ve*=yt,Xe*=yt,pt*=yt),V.set(ve,Xe,pt,yt),de.equals(V)===!1&&(o.clearColor(ve,Xe,pt,yt),de.copy(V))},reset:function(){R=!1,j=null,de.set(-1,0,0,0)}}}function s(){let R=!1,V=null,j=null,de=null;return{setTest:function(ve){ve?Me(2929):ge(2929)},setMask:function(ve){V!==ve&&!R&&(o.depthMask(ve),V=ve)},setFunc:function(ve){if(j!==ve){switch(ve){case eh:o.depthFunc(512);break;case th:o.depthFunc(519);break;case nh:o.depthFunc(513);break;case Hr:o.depthFunc(515);break;case ih:o.depthFunc(514);break;case sh:o.depthFunc(518);break;case rh:o.depthFunc(516);break;case ah:o.depthFunc(517);break;default:o.depthFunc(515)}j=ve}},setLocked:function(ve){R=ve},setClear:function(ve){de!==ve&&(o.clearDepth(ve),de=ve)},reset:function(){R=!1,V=null,j=null,de=null}}}function r(){let R=!1,V=null,j=null,de=null,ve=null,Xe=null,pt=null,yt=null,zn=null;return{setTest:function(je){R||(je?Me(2960):ge(2960))},setMask:function(je){V!==je&&!R&&(o.stencilMask(je),V=je)},setFunc:function(je,en,Bt){(j!==je||de!==en||ve!==Bt)&&(o.stencilFunc(je,en,Bt),j=je,de=en,ve=Bt)},setOp:function(je,en,Bt){(Xe!==je||pt!==en||yt!==Bt)&&(o.stencilOp(je,en,Bt),Xe=je,pt=en,yt=Bt)},setLocked:function(je){R=je},setClear:function(je){zn!==je&&(o.clearStencil(je),zn=je)},reset:function(){R=!1,V=null,j=null,de=null,ve=null,Xe=null,pt=null,yt=null,zn=null}}}const a=new i,l=new s,c=new r,h=new WeakMap,d=new WeakMap;let u={},f={},g=new WeakMap,p=[],m=null,_=!1,v=null,x=null,y=null,S=null,E=null,L=null,M=null,w=!1,P=null,B=null,H=null,N=null,I=null;const k=o.getParameter(35661);let J=!1,te=0;const q=o.getParameter(7938);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),J=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),J=te>=2);let ne=null,K={};const me=o.getParameter(3088),z=o.getParameter(2978),Q=new Ye().fromArray(me),ae=new Ye().fromArray(z);function oe(R,V,j){const de=new Uint8Array(4),ve=o.createTexture();o.bindTexture(R,ve),o.texParameteri(R,10241,9728),o.texParameteri(R,10240,9728);for(let Xe=0;Xe<j;Xe++)o.texImage2D(V+Xe,0,6408,1,1,0,6408,5121,de);return ve}const O={};O[3553]=oe(3553,3553,1),O[34067]=oe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Me(2929),l.setFunc(Hr),ce(!1),Pe(Ja),Me(2884),se(fn);function Me(R){u[R]!==!0&&(o.enable(R),u[R]=!0)}function ge(R){u[R]!==!1&&(o.disable(R),u[R]=!1)}function ye(R,V){return f[R]!==V?(o.bindFramebuffer(R,V),f[R]=V,n&&(R===36009&&(f[36160]=V),R===36160&&(f[36009]=V)),!0):!1}function le(R,V){let j=p,de=!1;if(R)if(j=g.get(V),j===void 0&&(j=[],g.set(V,j)),R.isWebGLMultipleRenderTargets){const ve=R.texture;if(j.length!==ve.length||j[0]!==36064){for(let Xe=0,pt=ve.length;Xe<pt;Xe++)j[Xe]=36064+Xe;j.length=ve.length,de=!0}}else j[0]!==36064&&(j[0]=36064,de=!0);else j[0]!==1029&&(j[0]=1029,de=!0);de&&(t.isWebGL2?o.drawBuffers(j):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(j))}function Oe(R){return m!==R?(o.useProgram(R),m=R,!0):!1}const Z={[Jn]:32774,[Hc]:32778,[Wc]:32779};if(n)Z[ja]=32775,Z[eo]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(Z[ja]=R.MIN_EXT,Z[eo]=R.MAX_EXT)}const Y={[Xc]:0,[qc]:1,[Yc]:768,[zo]:770,[jc]:776,[Kc]:774,[Jc]:772,[Zc]:769,[Oo]:771,[Qc]:775,[$c]:773};function se(R,V,j,de,ve,Xe,pt,yt){if(R===fn){_===!0&&(ge(3042),_=!1);return}if(_===!1&&(Me(3042),_=!0),R!==Gc){if(R!==v||yt!==w){if((x!==Jn||E!==Jn)&&(o.blendEquation(32774),x=Jn,E=Jn),yt)switch(R){case ti:o.blendFuncSeparate(1,771,1,771);break;case $a:o.blendFunc(1,1);break;case Ka:o.blendFuncSeparate(0,769,0,1);break;case Qa:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ti:o.blendFuncSeparate(770,771,1,771);break;case $a:o.blendFunc(770,1);break;case Ka:o.blendFuncSeparate(0,769,0,1);break;case Qa:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}y=null,S=null,L=null,M=null,v=R,w=yt}return}ve=ve||V,Xe=Xe||j,pt=pt||de,(V!==x||ve!==E)&&(o.blendEquationSeparate(Z[V],Z[ve]),x=V,E=ve),(j!==y||de!==S||Xe!==L||pt!==M)&&(o.blendFuncSeparate(Y[j],Y[de],Y[Xe],Y[pt]),y=j,S=de,L=Xe,M=pt),v=R,w=!1}function xe(R,V){R.side===hn?ge(2884):Me(2884);let j=R.side===Lt;V&&(j=!j),ce(j),R.blending===ti&&R.transparent===!1?se(fn):se(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const de=R.stencilWrite;c.setTest(de),de&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),be(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Me(32926):ge(32926)}function ce(R){P!==R&&(R?o.frontFace(2304):o.frontFace(2305),P=R)}function Pe(R){R!==Uc?(Me(2884),R!==B&&(R===Ja?o.cullFace(1029):R===kc?o.cullFace(1028):o.cullFace(1032))):ge(2884),B=R}function Ae(R){R!==H&&(J&&o.lineWidth(R),H=R)}function be(R,V,j){R?(Me(32823),(N!==V||I!==j)&&(o.polygonOffset(V,j),N=V,I=j)):ge(32823)}function Ke(R){R?Me(3089):ge(3089)}function qe(R){R===void 0&&(R=33984+k-1),ne!==R&&(o.activeTexture(R),ne=R)}function C(R,V,j){j===void 0&&(ne===null?j=33984+k-1:j=ne);let de=K[j];de===void 0&&(de={type:void 0,texture:void 0},K[j]=de),(de.type!==R||de.texture!==V)&&(ne!==j&&(o.activeTexture(j),ne=j),o.bindTexture(R,V||O[R]),de.type=R,de.texture=V)}function b(){const R=K[ne];R!==void 0&&R.type!==void 0&&(o.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function U(){try{o.compressedTexImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ee(){try{o.compressedTexImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(){try{o.texSubImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{o.texSubImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Le(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function X(){try{o.texStorage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{o.texStorage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ce(){try{o.texImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{o.texImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ee(R){Q.equals(R)===!1&&(o.scissor(R.x,R.y,R.z,R.w),Q.copy(R))}function we(R){ae.equals(R)===!1&&(o.viewport(R.x,R.y,R.z,R.w),ae.copy(R))}function Ge(R,V){let j=d.get(V);j===void 0&&(j=new WeakMap,d.set(V,j));let de=j.get(R);de===void 0&&(de=o.getUniformBlockIndex(V,R.name),j.set(R,de))}function Qe(R,V){const de=d.get(V).get(R);h.get(V)!==de&&(o.uniformBlockBinding(V,de,R.__bindingPointIndex),h.set(V,de))}function ft(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),u={},ne=null,K={},f={},g=new WeakMap,p=[],m=null,_=!1,v=null,x=null,y=null,S=null,E=null,L=null,M=null,w=!1,P=null,B=null,H=null,N=null,I=null,Q.set(0,0,o.canvas.width,o.canvas.height),ae.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Me,disable:ge,bindFramebuffer:ye,drawBuffers:le,useProgram:Oe,setBlending:se,setMaterial:xe,setFlipSided:ce,setCullFace:Pe,setLineWidth:Ae,setPolygonOffset:be,setScissorTest:Ke,activeTexture:qe,bindTexture:C,unbindTexture:b,compressedTexImage2D:U,compressedTexImage3D:ee,texImage2D:Ce,texImage3D:_e,updateUBOMapping:Ge,uniformBlockBinding:Qe,texStorage2D:X,texStorage3D:Se,texSubImage2D:ie,texSubImage3D:he,compressedTexSubImage2D:Le,compressedTexSubImage3D:ue,scissor:Ee,viewport:we,reset:ft}}function U0(o,e,t,n,i,s,r){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,b){return _?new OffscreenCanvas(C,b):Ss("canvas")}function x(C,b,U,ee){let ie=1;if((C.width>ee||C.height>ee)&&(ie=ee/Math.max(C.width,C.height)),ie<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const he=b?qr:Math.floor,Le=he(ie*C.width),ue=he(ie*C.height);p===void 0&&(p=v(Le,ue));const X=U?v(Le,ue):p;return X.width=Le,X.height=ue,X.getContext("2d").drawImage(C,0,0,Le,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Le+"x"+ue+")."),X}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return Ao(C.width)&&Ao(C.height)}function S(C){return a?!1:C.wrapS!==bt||C.wrapT!==bt||C.minFilter!==it&&C.minFilter!==st}function E(C,b){return C.generateMipmaps&&b&&C.minFilter!==it&&C.minFilter!==st}function L(C){o.generateMipmap(C)}function M(C,b,U,ee,ie=!1){if(a===!1)return b;if(C!==null){if(o[C]!==void 0)return o[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let he=b;return b===6403&&(U===5126&&(he=33326),U===5131&&(he=33325),U===5121&&(he=33321)),b===33319&&(U===5126&&(he=33328),U===5131&&(he=33327),U===5121&&(he=33323)),b===6408&&(U===5126&&(he=34836),U===5131&&(he=34842),U===5121&&(he=ee===$e&&ie===!1?35907:32856),U===32819&&(he=32854),U===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function w(C,b,U){return E(C,U)===!0||C.isFramebufferTexture&&C.minFilter!==it&&C.minFilter!==st?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function P(C){return C===it||C===Wr||C===hs?9728:9729}function B(C){const b=C.target;b.removeEventListener("dispose",B),N(b),b.isVideoTexture&&g.delete(b)}function H(C){const b=C.target;b.removeEventListener("dispose",H),k(b)}function N(C){const b=n.get(C);if(b.__webglInit===void 0)return;const U=C.source,ee=m.get(U);if(ee){const ie=ee[b.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&I(C),Object.keys(ee).length===0&&m.delete(U)}n.remove(C)}function I(C){const b=n.get(C);o.deleteTexture(b.__webglTexture);const U=C.source,ee=m.get(U);delete ee[b.__cacheKey],r.memory.textures--}function k(C){const b=C.texture,U=n.get(C),ee=n.get(b);if(ee.__webglTexture!==void 0&&(o.deleteTexture(ee.__webglTexture),r.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)o.deleteFramebuffer(U.__webglFramebuffer[ie]),U.__webglDepthbuffer&&o.deleteRenderbuffer(U.__webglDepthbuffer[ie]);else{if(o.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&o.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&o.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let ie=0;ie<U.__webglColorRenderbuffer.length;ie++)U.__webglColorRenderbuffer[ie]&&o.deleteRenderbuffer(U.__webglColorRenderbuffer[ie]);U.__webglDepthRenderbuffer&&o.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ie=0,he=b.length;ie<he;ie++){const Le=n.get(b[ie]);Le.__webglTexture&&(o.deleteTexture(Le.__webglTexture),r.memory.textures--),n.remove(b[ie])}n.remove(b),n.remove(C)}let J=0;function te(){J=0}function q(){const C=J;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),J+=1,C}function ne(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.encoding),b.join()}function K(C,b){const U=n.get(C);if(C.isVideoTexture&&Ke(C),C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(U,C,b);return}}t.bindTexture(3553,U.__webglTexture,33984+b)}function me(C,b){const U=n.get(C);if(C.version>0&&U.__version!==C.version){ge(U,C,b);return}t.bindTexture(35866,U.__webglTexture,33984+b)}function z(C,b){const U=n.get(C);if(C.version>0&&U.__version!==C.version){ge(U,C,b);return}t.bindTexture(32879,U.__webglTexture,33984+b)}function Q(C,b){const U=n.get(C);if(C.version>0&&U.__version!==C.version){ye(U,C,b);return}t.bindTexture(34067,U.__webglTexture,33984+b)}const ae={[gs]:10497,[bt]:33071,[xs]:33648},oe={[it]:9728,[Wr]:9984,[hs]:9986,[st]:9729,[Bo]:9985,[Cn]:9987};function O(C,b,U){if(U?(o.texParameteri(C,10242,ae[b.wrapS]),o.texParameteri(C,10243,ae[b.wrapT]),(C===32879||C===35866)&&o.texParameteri(C,32882,ae[b.wrapR]),o.texParameteri(C,10240,oe[b.magFilter]),o.texParameteri(C,10241,oe[b.minFilter])):(o.texParameteri(C,10242,33071),o.texParameteri(C,10243,33071),(C===32879||C===35866)&&o.texParameteri(C,32882,33071),(b.wrapS!==bt||b.wrapT!==bt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(C,10240,P(b.magFilter)),o.texParameteri(C,10241,P(b.minFilter)),b.minFilter!==it&&b.minFilter!==st&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===it||b.minFilter!==hs&&b.minFilter!==Cn||b.type===un&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Ui&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(o.texParameterf(C,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Me(C,b){let U=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",B));const ee=b.source;let ie=m.get(ee);ie===void 0&&(ie={},m.set(ee,ie));const he=ne(b);if(he!==C.__cacheKey){ie[he]===void 0&&(ie[he]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,U=!0),ie[he].usedTimes++;const Le=ie[C.__cacheKey];Le!==void 0&&(ie[C.__cacheKey].usedTimes--,Le.usedTimes===0&&I(b)),C.__cacheKey=he,C.__webglTexture=ie[he].texture}return U}function ge(C,b,U){let ee=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=35866),b.isData3DTexture&&(ee=32879);const ie=Me(C,b),he=b.source;t.bindTexture(ee,C.__webglTexture,33984+U);const Le=n.get(he);if(he.version!==Le.__version||ie===!0){t.activeTexture(33984+U),o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const ue=S(b)&&y(b.image)===!1;let X=x(b.image,ue,!1,h);X=qe(b,X);const Se=y(X)||a,Ce=s.convert(b.format,b.encoding);let _e=s.convert(b.type),Ee=M(b.internalFormat,Ce,_e,b.encoding,b.isVideoTexture);O(ee,b,Se);let we;const Ge=b.mipmaps,Qe=a&&b.isVideoTexture!==!0,ft=Le.__version===void 0||ie===!0,R=w(b,X,Se);if(b.isDepthTexture)Ee=6402,a?b.type===un?Ee=36012:b.type===wn?Ee=33190:b.type===ni?Ee=35056:Ee=33189:b.type===un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Tn&&Ee===6402&&b.type!==Uo&&b.type!==wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=wn,_e=s.convert(b.type)),b.format===ai&&Ee===6402&&(Ee=34041,b.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=ni,_e=s.convert(b.type))),ft&&(Qe?t.texStorage2D(3553,1,Ee,X.width,X.height):t.texImage2D(3553,0,Ee,X.width,X.height,0,Ce,_e,null));else if(b.isDataTexture)if(Ge.length>0&&Se){Qe&&ft&&t.texStorage2D(3553,R,Ee,Ge[0].width,Ge[0].height);for(let V=0,j=Ge.length;V<j;V++)we=Ge[V],Qe?t.texSubImage2D(3553,V,0,0,we.width,we.height,Ce,_e,we.data):t.texImage2D(3553,V,Ee,we.width,we.height,0,Ce,_e,we.data);b.generateMipmaps=!1}else Qe?(ft&&t.texStorage2D(3553,R,Ee,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,Ce,_e,X.data)):t.texImage2D(3553,0,Ee,X.width,X.height,0,Ce,_e,X.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Qe&&ft&&t.texStorage3D(35866,R,Ee,Ge[0].width,Ge[0].height,X.depth);for(let V=0,j=Ge.length;V<j;V++)we=Ge[V],b.format!==Ft?Ce!==null?Qe?t.compressedTexSubImage3D(35866,V,0,0,0,we.width,we.height,X.depth,Ce,we.data,0,0):t.compressedTexImage3D(35866,V,Ee,we.width,we.height,X.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage3D(35866,V,0,0,0,we.width,we.height,X.depth,Ce,_e,we.data):t.texImage3D(35866,V,Ee,we.width,we.height,X.depth,0,Ce,_e,we.data)}else{Qe&&ft&&t.texStorage2D(3553,R,Ee,Ge[0].width,Ge[0].height);for(let V=0,j=Ge.length;V<j;V++)we=Ge[V],b.format!==Ft?Ce!==null?Qe?t.compressedTexSubImage2D(3553,V,0,0,we.width,we.height,Ce,we.data):t.compressedTexImage2D(3553,V,Ee,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage2D(3553,V,0,0,we.width,we.height,Ce,_e,we.data):t.texImage2D(3553,V,Ee,we.width,we.height,0,Ce,_e,we.data)}else if(b.isDataArrayTexture)Qe?(ft&&t.texStorage3D(35866,R,Ee,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,Ce,_e,X.data)):t.texImage3D(35866,0,Ee,X.width,X.height,X.depth,0,Ce,_e,X.data);else if(b.isData3DTexture)Qe?(ft&&t.texStorage3D(32879,R,Ee,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,Ce,_e,X.data)):t.texImage3D(32879,0,Ee,X.width,X.height,X.depth,0,Ce,_e,X.data);else if(b.isFramebufferTexture){if(ft)if(Qe)t.texStorage2D(3553,R,Ee,X.width,X.height);else{let V=X.width,j=X.height;for(let de=0;de<R;de++)t.texImage2D(3553,de,Ee,V,j,0,Ce,_e,null),V>>=1,j>>=1}}else if(Ge.length>0&&Se){Qe&&ft&&t.texStorage2D(3553,R,Ee,Ge[0].width,Ge[0].height);for(let V=0,j=Ge.length;V<j;V++)we=Ge[V],Qe?t.texSubImage2D(3553,V,0,0,Ce,_e,we):t.texImage2D(3553,V,Ee,Ce,_e,we);b.generateMipmaps=!1}else Qe?(ft&&t.texStorage2D(3553,R,Ee,X.width,X.height),t.texSubImage2D(3553,0,0,0,Ce,_e,X)):t.texImage2D(3553,0,Ee,Ce,_e,X);E(b,Se)&&L(ee),Le.__version=he.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ye(C,b,U){if(b.image.length!==6)return;const ee=Me(C,b),ie=b.source;t.bindTexture(34067,C.__webglTexture,33984+U);const he=n.get(ie);if(ie.version!==he.__version||ee===!0){t.activeTexture(33984+U),o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const Le=b.isCompressedTexture||b.image[0].isCompressedTexture,ue=b.image[0]&&b.image[0].isDataTexture,X=[];for(let V=0;V<6;V++)!Le&&!ue?X[V]=x(b.image[V],!1,!0,c):X[V]=ue?b.image[V].image:b.image[V],X[V]=qe(b,X[V]);const Se=X[0],Ce=y(Se)||a,_e=s.convert(b.format,b.encoding),Ee=s.convert(b.type),we=M(b.internalFormat,_e,Ee,b.encoding),Ge=a&&b.isVideoTexture!==!0,Qe=he.__version===void 0||ee===!0;let ft=w(b,Se,Ce);O(34067,b,Ce);let R;if(Le){Ge&&Qe&&t.texStorage2D(34067,ft,we,Se.width,Se.height);for(let V=0;V<6;V++){R=X[V].mipmaps;for(let j=0;j<R.length;j++){const de=R[j];b.format!==Ft?_e!==null?Ge?t.compressedTexSubImage2D(34069+V,j,0,0,de.width,de.height,_e,de.data):t.compressedTexImage2D(34069+V,j,we,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(34069+V,j,0,0,de.width,de.height,_e,Ee,de.data):t.texImage2D(34069+V,j,we,de.width,de.height,0,_e,Ee,de.data)}}}else{R=b.mipmaps,Ge&&Qe&&(R.length>0&&ft++,t.texStorage2D(34067,ft,we,X[0].width,X[0].height));for(let V=0;V<6;V++)if(ue){Ge?t.texSubImage2D(34069+V,0,0,0,X[V].width,X[V].height,_e,Ee,X[V].data):t.texImage2D(34069+V,0,we,X[V].width,X[V].height,0,_e,Ee,X[V].data);for(let j=0;j<R.length;j++){const ve=R[j].image[V].image;Ge?t.texSubImage2D(34069+V,j+1,0,0,ve.width,ve.height,_e,Ee,ve.data):t.texImage2D(34069+V,j+1,we,ve.width,ve.height,0,_e,Ee,ve.data)}}else{Ge?t.texSubImage2D(34069+V,0,0,0,_e,Ee,X[V]):t.texImage2D(34069+V,0,we,_e,Ee,X[V]);for(let j=0;j<R.length;j++){const de=R[j];Ge?t.texSubImage2D(34069+V,j+1,0,0,_e,Ee,de.image[V]):t.texImage2D(34069+V,j+1,we,_e,Ee,de.image[V])}}}E(b,Ce)&&L(34067),he.__version=ie.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function le(C,b,U,ee,ie){const he=s.convert(U.format,U.encoding),Le=s.convert(U.type),ue=M(U.internalFormat,he,Le,U.encoding);n.get(b).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,ue,b.width,b.height,b.depth,0,he,Le,null):t.texImage2D(ie,0,ue,b.width,b.height,0,he,Le,null)),t.bindFramebuffer(36160,C),be(b)?u.framebufferTexture2DMultisampleEXT(36160,ee,ie,n.get(U).__webglTexture,0,Ae(b)):(ie===3553||ie>=34069&&ie<=34074)&&o.framebufferTexture2D(36160,ee,ie,n.get(U).__webglTexture,0),t.bindFramebuffer(36160,null)}function Oe(C,b,U){if(o.bindRenderbuffer(36161,C),b.depthBuffer&&!b.stencilBuffer){let ee=33189;if(U||be(b)){const ie=b.depthTexture;ie&&ie.isDepthTexture&&(ie.type===un?ee=36012:ie.type===wn&&(ee=33190));const he=Ae(b);be(b)?u.renderbufferStorageMultisampleEXT(36161,he,ee,b.width,b.height):o.renderbufferStorageMultisample(36161,he,ee,b.width,b.height)}else o.renderbufferStorage(36161,ee,b.width,b.height);o.framebufferRenderbuffer(36160,36096,36161,C)}else if(b.depthBuffer&&b.stencilBuffer){const ee=Ae(b);U&&be(b)===!1?o.renderbufferStorageMultisample(36161,ee,35056,b.width,b.height):be(b)?u.renderbufferStorageMultisampleEXT(36161,ee,35056,b.width,b.height):o.renderbufferStorage(36161,34041,b.width,b.height),o.framebufferRenderbuffer(36160,33306,36161,C)}else{const ee=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ie=0;ie<ee.length;ie++){const he=ee[ie],Le=s.convert(he.format,he.encoding),ue=s.convert(he.type),X=M(he.internalFormat,Le,ue,he.encoding),Se=Ae(b);U&&be(b)===!1?o.renderbufferStorageMultisample(36161,Se,X,b.width,b.height):be(b)?u.renderbufferStorageMultisampleEXT(36161,Se,X,b.width,b.height):o.renderbufferStorage(36161,X,b.width,b.height)}}o.bindRenderbuffer(36161,null)}function Z(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K(b.depthTexture,0);const ee=n.get(b.depthTexture).__webglTexture,ie=Ae(b);if(b.depthTexture.format===Tn)be(b)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ie):o.framebufferTexture2D(36160,36096,3553,ee,0);else if(b.depthTexture.format===ai)be(b)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ie):o.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function Y(C){const b=n.get(C),U=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Z(b.__webglFramebuffer,C)}else if(U){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]=o.createRenderbuffer(),Oe(b.__webglDepthbuffer[ee],C,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=o.createRenderbuffer(),Oe(b.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function se(C,b,U){const ee=n.get(C);b!==void 0&&le(ee.__webglFramebuffer,C,C.texture,36064,3553),U!==void 0&&Y(C)}function xe(C){const b=C.texture,U=n.get(C),ee=n.get(b);C.addEventListener("dispose",H),C.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture()),ee.__version=b.version,r.memory.textures++);const ie=C.isWebGLCubeRenderTarget===!0,he=C.isWebGLMultipleRenderTargets===!0,Le=y(C)||a;if(ie){U.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)U.__webglFramebuffer[ue]=o.createFramebuffer()}else{if(U.__webglFramebuffer=o.createFramebuffer(),he)if(i.drawBuffers){const ue=C.texture;for(let X=0,Se=ue.length;X<Se;X++){const Ce=n.get(ue[X]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&be(C)===!1){const ue=he?b:[b];U.__webglMultisampledFramebuffer=o.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer);for(let X=0;X<ue.length;X++){const Se=ue[X];U.__webglColorRenderbuffer[X]=o.createRenderbuffer(),o.bindRenderbuffer(36161,U.__webglColorRenderbuffer[X]);const Ce=s.convert(Se.format,Se.encoding),_e=s.convert(Se.type),Ee=M(Se.internalFormat,Ce,_e,Se.encoding,C.isXRRenderTarget===!0),we=Ae(C);o.renderbufferStorageMultisample(36161,we,Ee,C.width,C.height),o.framebufferRenderbuffer(36160,36064+X,36161,U.__webglColorRenderbuffer[X])}o.bindRenderbuffer(36161,null),C.depthBuffer&&(U.__webglDepthRenderbuffer=o.createRenderbuffer(),Oe(U.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,ee.__webglTexture),O(34067,b,Le);for(let ue=0;ue<6;ue++)le(U.__webglFramebuffer[ue],C,b,36064,34069+ue);E(b,Le)&&L(34067),t.unbindTexture()}else if(he){const ue=C.texture;for(let X=0,Se=ue.length;X<Se;X++){const Ce=ue[X],_e=n.get(Ce);t.bindTexture(3553,_e.__webglTexture),O(3553,Ce,Le),le(U.__webglFramebuffer,C,Ce,36064+X,3553),E(Ce,Le)&&L(3553)}t.unbindTexture()}else{let ue=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ue=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,ee.__webglTexture),O(ue,b,Le),le(U.__webglFramebuffer,C,b,36064,ue),E(b,Le)&&L(ue),t.unbindTexture()}C.depthBuffer&&Y(C)}function ce(C){const b=y(C)||a,U=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ee=0,ie=U.length;ee<ie;ee++){const he=U[ee];if(E(he,b)){const Le=C.isWebGLCubeRenderTarget?34067:3553,ue=n.get(he).__webglTexture;t.bindTexture(Le,ue),L(Le),t.unbindTexture()}}}function Pe(C){if(a&&C.samples>0&&be(C)===!1){const b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],U=C.width,ee=C.height;let ie=16384;const he=[],Le=C.stencilBuffer?33306:36096,ue=n.get(C),X=C.isWebGLMultipleRenderTargets===!0;if(X)for(let Se=0;Se<b.length;Se++)t.bindFramebuffer(36160,ue.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+Se,36161,null),t.bindFramebuffer(36160,ue.__webglFramebuffer),o.framebufferTexture2D(36009,36064+Se,3553,null,0);t.bindFramebuffer(36008,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ue.__webglFramebuffer);for(let Se=0;Se<b.length;Se++){he.push(36064+Se),C.depthBuffer&&he.push(Le);const Ce=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(Ce===!1&&(C.depthBuffer&&(ie|=256),C.stencilBuffer&&(ie|=1024)),X&&o.framebufferRenderbuffer(36008,36064,36161,ue.__webglColorRenderbuffer[Se]),Ce===!0&&(o.invalidateFramebuffer(36008,[Le]),o.invalidateFramebuffer(36009,[Le])),X){const _e=n.get(b[Se]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,_e,0)}o.blitFramebuffer(0,0,U,ee,0,0,U,ee,ie,9728),f&&o.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),X)for(let Se=0;Se<b.length;Se++){t.bindFramebuffer(36160,ue.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+Se,36161,ue.__webglColorRenderbuffer[Se]);const Ce=n.get(b[Se]).__webglTexture;t.bindFramebuffer(36160,ue.__webglFramebuffer),o.framebufferTexture2D(36009,36064+Se,3553,Ce,0)}t.bindFramebuffer(36009,ue.__webglMultisampledFramebuffer)}}function Ae(C){return Math.min(d,C.samples)}function be(C){const b=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ke(C){const b=r.render.frame;g.get(C)!==b&&(g.set(C,b),C.update())}function qe(C,b){const U=C.encoding,ee=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Xr||U!==Pn&&(U===$e?a===!1?e.has("EXT_sRGB")===!0&&ee===Ft?(C.format=Xr,C.minFilter=st,C.generateMipmaps=!1):b=Go.sRGBToLinear(b):(ee!==Ft||ie!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",U)),b}this.allocateTextureUnit=q,this.resetTextureUnits=te,this.setTexture2D=K,this.setTexture2DArray=me,this.setTexture3D=z,this.setTextureCube=Q,this.rebindTextures=se,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=le,this.useMultisampledRTT=be}function Zh(o,e,t){const n=t.isWebGL2;function i(s,r=null){let a;if(s===Ln)return 5121;if(s===xh)return 32819;if(s===_h)return 32820;if(s===ph)return 5120;if(s===mh)return 5122;if(s===Uo)return 5123;if(s===gh)return 5124;if(s===wn)return 5125;if(s===un)return 5126;if(s===Ui)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===yh)return 6406;if(s===Ft)return 6408;if(s===vh)return 6409;if(s===Mh)return 6410;if(s===Tn)return 6402;if(s===ai)return 34041;if(s===Xr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===bh)return 6403;if(s===Sh)return 36244;if(s===wh)return 33319;if(s===Th)return 33320;if(s===Ah)return 36249;if(s===Nr||s===Fr||s===zr||s===Or)if(r===$e)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Nr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Nr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Or)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===to||s===no||s===io||s===so)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===to)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===no)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===io)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===so)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Eh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ro||s===ao)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ro)return r===$e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ao)return r===$e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===oo||s===lo||s===co||s===ho||s===uo||s===fo||s===po||s===mo||s===go||s===xo||s===_o||s===yo||s===vo||s===Mo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===oo)return r===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===lo)return r===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===co)return r===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ho)return r===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===uo)return r===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fo)return r===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===po)return r===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===mo)return r===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===go)return r===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xo)return r===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_o)return r===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yo)return r===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vo)return r===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mo)return r===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Br)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Br)return r===$e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Ch||s===bo||s===So||s===wo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Br)return a.COMPRESSED_RED_RGTC1_EXT;if(s===bo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===So)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ni?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}class Jh extends xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zi extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const k0={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,n),_=this._getHandJoint(c,p);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(k0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class $h extends at{constructor(e,t,n,i,s,r,a,l,c,h){if(h=h!==void 0?h:Tn,h!==Tn&&h!==ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Tn&&(n=wn),n===void 0&&h===ai&&(n=ni),super(null,i,s,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:it,this.minFilter=l!==void 0?l:it,this.flipY=!1,this.generateMipmaps=!1}}class V0 extends gn{constructor(e,t){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const p=t.getContextAttributes();let m=null,_=null;const v=[],x=[],y=new Set,S=new Map,E=new xt;E.layers.enable(1),E.viewport=new Ye;const L=new xt;L.layers.enable(2),L.viewport=new Ye;const M=[E,L],w=new Jh;w.layers.enable(1),w.layers.enable(2);let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Q=v[z];return Q===void 0&&(Q=new Ba,v[z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(z){let Q=v[z];return Q===void 0&&(Q=new Ba,v[z]=Q),Q.getGripSpace()},this.getHand=function(z){let Q=v[z];return Q===void 0&&(Q=new Ba,v[z]=Q),Q.getHandSpace()};function H(z){const Q=x.indexOf(z.inputSource);if(Q===-1)return;const ae=v[Q];ae!==void 0&&ae.dispatchEvent({type:z.type,data:z.inputSource})}function N(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",I);for(let z=0;z<v.length;z++){const Q=x[z];Q!==null&&(x[z]=null,v[z].disconnect(Q))}P=null,B=null,e.setRenderTarget(m),f=null,u=null,d=null,i=null,_=null,me.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",N),i.addEventListener("inputsourceschange",I),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:f}),_=new Yt(f.framebufferWidth,f.framebufferHeight,{format:Ft,type:Ln,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let Q=null,ae=null,oe=null;p.depth&&(oe=p.stencil?35056:33190,Q=p.stencil?ai:Tn,ae=p.stencil?ni:wn);const O={colorFormat:32856,depthFormat:oe,scaleFactor:s};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(O),i.updateRenderState({layers:[u]}),_=new Yt(u.textureWidth,u.textureHeight,{format:Ft,type:Ln,depthTexture:new $h(u.textureWidth,u.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const Me=e.properties.get(_);Me.__ignoreDepthValues=u.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),me.setContext(i),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(z){for(let Q=0;Q<z.removed.length;Q++){const ae=z.removed[Q],oe=x.indexOf(ae);oe>=0&&(x[oe]=null,v[oe].disconnect(ae))}for(let Q=0;Q<z.added.length;Q++){const ae=z.added[Q];let oe=x.indexOf(ae);if(oe===-1){for(let Me=0;Me<v.length;Me++)if(Me>=x.length){x.push(ae),oe=Me;break}else if(x[Me]===null){x[Me]=ae,oe=Me;break}if(oe===-1)break}const O=v[oe];O&&O.connect(ae)}}const k=new A,J=new A;function te(z,Q,ae){k.setFromMatrixPosition(Q.matrixWorld),J.setFromMatrixPosition(ae.matrixWorld);const oe=k.distanceTo(J),O=Q.projectionMatrix.elements,Me=ae.projectionMatrix.elements,ge=O[14]/(O[10]-1),ye=O[14]/(O[10]+1),le=(O[9]+1)/O[5],Oe=(O[9]-1)/O[5],Z=(O[8]-1)/O[0],Y=(Me[8]+1)/Me[0],se=ge*Z,xe=ge*Y,ce=oe/(-Z+Y),Pe=ce*-Z;Q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Pe),z.translateZ(ce),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Ae=ge+ce,be=ye+ce,Ke=se-Pe,qe=xe+(oe-Pe),C=le*ye/be*Ae,b=Oe*ye/be*Ae;z.projectionMatrix.makePerspective(Ke,qe,C,b,Ae,be)}function q(z,Q){Q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;w.near=L.near=E.near=z.near,w.far=L.far=E.far=z.far,(P!==w.near||B!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),P=w.near,B=w.far);const Q=z.parent,ae=w.cameras;q(w,Q);for(let O=0;O<ae.length;O++)q(ae[O],Q);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),z.matrix.copy(w.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const oe=z.children;for(let O=0,Me=oe.length;O<Me;O++)oe[O].updateMatrixWorld(!0);ae.length===2?te(w,E,L):w.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(z){l=z,u!==null&&(u.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.getPlanes=function(){return y};let ne=null;function K(z,Q){if(h=Q.getViewerPose(c||r),g=Q,h!==null){const ae=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let oe=!1;ae.length!==w.cameras.length&&(w.cameras.length=0,oe=!0);for(let O=0;O<ae.length;O++){const Me=ae[O];let ge=null;if(f!==null)ge=f.getViewport(Me);else{const le=d.getViewSubImage(u,Me);ge=le.viewport,O===0&&(e.setRenderTargetTextures(_,le.colorTexture,u.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(_))}let ye=M[O];ye===void 0&&(ye=new xt,ye.layers.enable(O),ye.viewport=new Ye,M[O]=ye),ye.matrix.fromArray(Me.transform.matrix),ye.projectionMatrix.fromArray(Me.projectionMatrix),ye.viewport.set(ge.x,ge.y,ge.width,ge.height),O===0&&w.matrix.copy(ye.matrix),oe===!0&&w.cameras.push(ye)}}for(let ae=0;ae<v.length;ae++){const oe=x[ae],O=v[ae];oe!==null&&O!==void 0&&O.update(oe,Q,c||r)}if(ne&&ne(z,Q),Q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Q.detectedPlanes});let ae=null;for(const oe of y)Q.detectedPlanes.has(oe)||(ae===null&&(ae=[]),ae.push(oe));if(ae!==null)for(const oe of ae)y.delete(oe),S.delete(oe),n.dispatchEvent({type:"planeremoved",data:oe});for(const oe of Q.detectedPlanes)if(!y.has(oe))y.add(oe),S.set(oe,Q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:oe});else{const O=S.get(oe);oe.lastChangedTime>O&&(S.set(oe,oe.lastChangedTime),n.dispatchEvent({type:"planechanged",data:oe}))}}g=null}const me=new Hh;me.setAnimationLoop(K),this.setAnimationLoop=function(z){ne=z},this.dispose=function(){}}}function G0(o,e){function t(p,m){m.color.getRGB(p.fogColor.value,Uh(o)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,_,v,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),h(p,m)):m.isMeshPhongMaterial?(i(p,m),c(p,m)):m.isMeshStandardMaterial?(i(p,m),d(p,m),m.isMeshPhysicalMaterial&&u(p,m,x)):m.isMeshMatcapMaterial?(i(p,m),f(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),g(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&r(p,m)):m.isPointsMaterial?a(p,m,_,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===Lt&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===Lt&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const y=o.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*y}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let v;m.map?v=m.map:m.specularMap?v=m.specularMap:m.displacementMap?v=m.displacementMap:m.normalMap?v=m.normalMap:m.bumpMap?v=m.bumpMap:m.roughnessMap?v=m.roughnessMap:m.metalnessMap?v=m.metalnessMap:m.alphaMap?v=m.alphaMap:m.emissiveMap?v=m.emissiveMap:m.clearcoatMap?v=m.clearcoatMap:m.clearcoatNormalMap?v=m.clearcoatNormalMap:m.clearcoatRoughnessMap?v=m.clearcoatRoughnessMap:m.iridescenceMap?v=m.iridescenceMap:m.iridescenceThicknessMap?v=m.iridescenceThicknessMap:m.specularIntensityMap?v=m.specularIntensityMap:m.specularColorMap?v=m.specularColorMap:m.transmissionMap?v=m.transmissionMap:m.thicknessMap?v=m.thicknessMap:m.sheenColorMap?v=m.sheenColorMap:m.sheenRoughnessMap&&(v=m.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let x;m.aoMap?x=m.aoMap:m.lightMap&&(x=m.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function r(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,_,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=v*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Lt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function f(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function H0(o,e,t,n){let i={},s={},r=[];const a=t.isWebGL2?o.getParameter(35375):0;function l(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function c(v,x){let y=i[v.id];y===void 0&&(g(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",m));const S=x.program;n.updateUBOMapping(v,S);const E=e.render.frame;s[v.id]!==E&&(u(v),s[v.id]=E)}function h(v){const x=d();v.__bindingPointIndex=x;const y=o.createBuffer(),S=v.__size,E=v.usage;return o.bindBuffer(35345,y),o.bufferData(35345,S,E),o.bindBuffer(35345,null),o.bindBufferBase(35345,x,y),y}function d(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const x=i[v.id],y=v.uniforms,S=v.__cache;o.bindBuffer(35345,x);for(let E=0,L=y.length;E<L;E++){const M=y[E];if(f(M,E,S)===!0){const w=M.__offset,P=Array.isArray(M.value)?M.value:[M.value];let B=0;for(let H=0;H<P.length;H++){const N=P[H],I=p(N);typeof N=="number"?(M.__data[0]=N,o.bufferSubData(35345,w+B,M.__data)):N.isMatrix3?(M.__data[0]=N.elements[0],M.__data[1]=N.elements[1],M.__data[2]=N.elements[2],M.__data[3]=N.elements[0],M.__data[4]=N.elements[3],M.__data[5]=N.elements[4],M.__data[6]=N.elements[5],M.__data[7]=N.elements[0],M.__data[8]=N.elements[6],M.__data[9]=N.elements[7],M.__data[10]=N.elements[8],M.__data[11]=N.elements[0]):(N.toArray(M.__data,B),B+=I.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,w,M.__data)}}o.bindBuffer(35345,null)}function f(v,x,y){const S=v.value;if(y[x]===void 0){if(typeof S=="number")y[x]=S;else{const E=Array.isArray(S)?S:[S],L=[];for(let M=0;M<E.length;M++)L.push(E[M].clone());y[x]=L}return!0}else if(typeof S=="number"){if(y[x]!==S)return y[x]=S,!0}else{const E=Array.isArray(y[x])?y[x]:[y[x]],L=Array.isArray(S)?S:[S];for(let M=0;M<E.length;M++){const w=E[M];if(w.equals(L[M])===!1)return w.copy(L[M]),!0}}return!1}function g(v){const x=v.uniforms;let y=0;const S=16;let E=0;for(let L=0,M=x.length;L<M;L++){const w=x[L],P={boundary:0,storage:0},B=Array.isArray(w.value)?w.value:[w.value];for(let H=0,N=B.length;H<N;H++){const I=B[H],k=p(I);P.boundary+=k.boundary,P.storage+=k.storage}if(w.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,L>0){E=y%S;const H=S-E;E!==0&&H-P.boundary<0&&(y+=S-E,w.__offset=y)}y+=P.storage}return E=y%S,E>0&&(y+=S-E),v.__size=y,v.__cache={},this}function p(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=r.indexOf(x.__bindingPointIndex);r.splice(y,1),o.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function _(){for(const v in i)o.deleteBuffer(i[v]);r=[],i={},s={}}return{bind:l,update:c,dispose:_}}function W0(){const o=Ss("canvas");return o.style.display="block",o}function Kh(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:W0(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,s=o.antialias!==void 0?o.antialias:!1,r=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,a=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=o.alpha!==void 0?o.alpha:!1;let d=null,u=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Pn,this.physicallyCorrectLights=!1,this.toneMapping=$t,this.toneMappingExposure=1;const p=this;let m=!1,_=0,v=0,x=null,y=-1,S=null;const E=new Ye,L=new Ye;let M=null,w=e.width,P=e.height,B=1,H=null,N=null;const I=new Ye(0,0,w,P),k=new Ye(0,0,w,P);let J=!1;const te=new jr;let q=!1,ne=!1,K=null;const me=new Ie,z=new $,Q=new A,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return x===null?B:1}let O=t;function Me(T,F){for(let G=0;G<T.length;G++){const D=T[G],W=e.getContext(D,F);if(W!==null)return W}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yr}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",Ge,!1),O===null){const F=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&F.shift(),O=Me(F,T),O===null)throw Me(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ge,ye,le,Oe,Z,Y,se,xe,ce,Pe,Ae,be,Ke,qe,C,b,U,ee,ie,he,Le,ue,X,Se;function Ce(){ge=new ag(O),ye=new eg(O,ge,o),ge.init(ye),ue=new Zh(O,ge,ye),le=new B0(O,ge,ye),Oe=new cg,Z=new A0,Y=new U0(O,ge,le,Z,ye,ue,Oe),se=new ng(p),xe=new rg(p),ce=new _f(O,ye),X=new Qm(O,ge,ce,ye),Pe=new og(O,ce,Oe,X),Ae=new fg(O,Pe,ce,Oe),ie=new dg(O,ye,Y),b=new tg(Z),be=new T0(p,se,xe,ge,ye,X,b),Ke=new G0(p,Z),qe=new C0,C=new N0(ge,ye),ee=new Km(p,se,xe,le,Ae,h,r),U=new O0(p,Ae,ye),Se=new H0(O,Oe,ye,le),he=new jm(O,ge,Oe,ye),Le=new lg(O,ge,Oe,ye),Oe.programs=be.programs,p.capabilities=ye,p.extensions=ge,p.properties=Z,p.renderLists=qe,p.shadowMap=U,p.state=le,p.info=Oe}Ce();const _e=new V0(p,O);this.xr=_e,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=ge.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ge.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(w,P,!1))},this.getSize=function(T){return T.set(w,P)},this.setSize=function(T,F,G){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=T,P=F,e.width=Math.floor(T*B),e.height=Math.floor(F*B),G!==!1&&(e.style.width=T+"px",e.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(w*B,P*B).floor()},this.setDrawingBufferSize=function(T,F,G){w=T,P=F,B=G,e.width=Math.floor(T*G),e.height=Math.floor(F*G),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(I)},this.setViewport=function(T,F,G,D){T.isVector4?I.set(T.x,T.y,T.z,T.w):I.set(T,F,G,D),le.viewport(E.copy(I).multiplyScalar(B).floor())},this.getScissor=function(T){return T.copy(k)},this.setScissor=function(T,F,G,D){T.isVector4?k.set(T.x,T.y,T.z,T.w):k.set(T,F,G,D),le.scissor(L.copy(k).multiplyScalar(B).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(T){le.setScissorTest(J=T)},this.setOpaqueSort=function(T){H=T},this.setTransparentSort=function(T){N=T},this.getClearColor=function(T){return T.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(T=!0,F=!0,G=!0){let D=0;T&&(D|=16384),F&&(D|=256),G&&(D|=1024),O.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Ge,!1),qe.dispose(),C.dispose(),Z.dispose(),se.dispose(),xe.dispose(),Ae.dispose(),X.dispose(),Se.dispose(),be.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",de),_e.removeEventListener("sessionend",ve),K&&(K.dispose(),K=null),Xe.stop()};function Ee(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const T=Oe.autoReset,F=U.enabled,G=U.autoUpdate,D=U.needsUpdate,W=U.type;Ce(),Oe.autoReset=T,U.enabled=F,U.autoUpdate=G,U.needsUpdate=D,U.type=W}function Ge(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Qe(T){const F=T.target;F.removeEventListener("dispose",Qe),ft(F)}function ft(T){R(T),Z.remove(T)}function R(T){const F=Z.get(T).programs;F!==void 0&&(F.forEach(function(G){be.releaseProgram(G)}),T.isShaderMaterial&&be.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,G,D,W,Te){F===null&&(F=ae);const Re=W.isMesh&&W.matrixWorld.determinant()<0,Fe=Wu(T,F,G,D,W);le.setMaterial(D,Re);let ze=G.index,He=1;D.wireframe===!0&&(ze=Pe.getWireframeAttribute(G),He=2);const Be=G.drawRange,Ue=G.attributes.position;let ot=Be.start*He,Rt=(Be.start+Be.count)*He;Te!==null&&(ot=Math.max(ot,Te.start*He),Rt=Math.min(Rt,(Te.start+Te.count)*He)),ze!==null?(ot=Math.max(ot,0),Rt=Math.min(Rt,ze.count)):Ue!=null&&(ot=Math.max(ot,0),Rt=Math.min(Rt,Ue.count));const tn=Rt-ot;if(tn<0||tn===1/0)return;X.setup(W,D,Fe,G,ze);let On,lt=he;if(ze!==null&&(On=ce.get(ze),lt=Le,lt.setIndex(On)),W.isMesh)D.wireframe===!0?(le.setLineWidth(D.wireframeLinewidth*oe()),lt.setMode(1)):lt.setMode(4);else if(W.isLine){let ke=D.linewidth;ke===void 0&&(ke=1),le.setLineWidth(ke*oe()),W.isLineSegments?lt.setMode(1):W.isLineLoop?lt.setMode(2):lt.setMode(3)}else W.isPoints?lt.setMode(0):W.isSprite&&lt.setMode(4);if(W.isInstancedMesh)lt.renderInstances(ot,tn,W.count);else if(G.isInstancedBufferGeometry){const ke=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ua=Math.min(G.instanceCount,ke);lt.renderInstances(ot,tn,ua)}else lt.render(ot,tn)},this.compile=function(T,F){function G(D,W,Te){D.transparent===!0&&D.side===hn&&D.forceSinglePass===!1?(D.side=Lt,D.needsUpdate=!0,Bt(D,W,Te),D.side=pn,D.needsUpdate=!0,Bt(D,W,Te),D.side=hn):Bt(D,W,Te)}u=C.get(T),u.init(),g.push(u),T.traverseVisible(function(D){D.isLight&&D.layers.test(F.layers)&&(u.pushLight(D),D.castShadow&&u.pushShadow(D))}),u.setupLights(p.physicallyCorrectLights),T.traverse(function(D){const W=D.material;if(W)if(Array.isArray(W))for(let Te=0;Te<W.length;Te++){const Re=W[Te];G(Re,T,D)}else G(W,T,D)}),g.pop(),u=null};let V=null;function j(T){V&&V(T)}function de(){Xe.stop()}function ve(){Xe.start()}const Xe=new Hh;Xe.setAnimationLoop(j),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(T){V=T,_e.setAnimationLoop(T),T===null?Xe.stop():Xe.start()},_e.addEventListener("sessionstart",de),_e.addEventListener("sessionend",ve),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(F),F=_e.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,F,x),u=C.get(T,g.length),u.init(),g.push(u),me.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),te.setFromProjectionMatrix(me),ne=this.localClippingEnabled,q=b.init(this.clippingPlanes,ne),d=qe.get(T,f.length),d.init(),f.push(d),pt(T,F,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(H,N),q===!0&&b.beginShadows();const G=u.state.shadowsArray;if(U.render(G,T,F),q===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(d,T),u.setupLights(p.physicallyCorrectLights),F.isArrayCamera){const D=F.cameras;for(let W=0,Te=D.length;W<Te;W++){const Re=D[W];yt(d,T,Re,Re.viewport)}}else yt(d,T,F);x!==null&&(Y.updateMultisampleRenderTarget(x),Y.updateRenderTargetMipmap(x)),T.isScene===!0&&T.onAfterRender(p,T,F),X.resetDefaultState(),y=-1,S=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,f.pop(),f.length>0?d=f[f.length-1]:d=null};function pt(T,F,G,D){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)u.pushLight(T),T.castShadow&&u.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||te.intersectsSprite(T)){D&&Q.setFromMatrixPosition(T.matrixWorld).applyMatrix4(me);const Re=Ae.update(T),Fe=T.material;Fe.visible&&d.push(T,Re,Fe,G,Q.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Oe.render.frame&&(T.skeleton.update(),T.skeleton.frame=Oe.render.frame),!T.frustumCulled||te.intersectsObject(T))){D&&Q.setFromMatrixPosition(T.matrixWorld).applyMatrix4(me);const Re=Ae.update(T),Fe=T.material;if(Array.isArray(Fe)){const ze=Re.groups;for(let He=0,Be=ze.length;He<Be;He++){const Ue=ze[He],ot=Fe[Ue.materialIndex];ot&&ot.visible&&d.push(T,Re,ot,G,Q.z,Ue)}}else Fe.visible&&d.push(T,Re,Fe,G,Q.z,null)}}const Te=T.children;for(let Re=0,Fe=Te.length;Re<Fe;Re++)pt(Te[Re],F,G,D)}function yt(T,F,G,D){const W=T.opaque,Te=T.transmissive,Re=T.transparent;u.setupLightsView(G),q===!0&&b.setGlobalState(p.clippingPlanes,G),Te.length>0&&zn(W,F,G),D&&le.viewport(E.copy(D)),W.length>0&&je(W,F,G),Te.length>0&&je(Te,F,G),Re.length>0&&je(Re,F,G),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function zn(T,F,G){const D=ye.isWebGL2;K===null&&(K=new Yt(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?Ui:Ln,minFilter:Cn,samples:D&&s===!0?4:0})),p.getDrawingBufferSize(z),D?K.setSize(z.x,z.y):K.setSize(qr(z.x),qr(z.y));const W=p.getRenderTarget();p.setRenderTarget(K),p.clear();const Te=p.toneMapping;p.toneMapping=$t,je(T,F,G),p.toneMapping=Te,Y.updateMultisampleRenderTarget(K),Y.updateRenderTargetMipmap(K),p.setRenderTarget(W)}function je(T,F,G){const D=F.isScene===!0?F.overrideMaterial:null;for(let W=0,Te=T.length;W<Te;W++){const Re=T[W],Fe=Re.object,ze=Re.geometry,He=D===null?Re.material:D,Be=Re.group;Fe.layers.test(G.layers)&&en(Fe,F,G,ze,He,Be)}}function en(T,F,G,D,W,Te){T.onBeforeRender(p,F,G,D,W,Te),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(p,F,G,D,T,Te),W.transparent===!0&&W.side===hn&&W.forceSinglePass===!1?(W.side=Lt,W.needsUpdate=!0,p.renderBufferDirect(G,F,D,W,T,Te),W.side=pn,W.needsUpdate=!0,p.renderBufferDirect(G,F,D,W,T,Te),W.side=hn):p.renderBufferDirect(G,F,D,W,T,Te),T.onAfterRender(p,F,G,D,W,Te)}function Bt(T,F,G){F.isScene!==!0&&(F=ae);const D=Z.get(T),W=u.state.lights,Te=u.state.shadowsArray,Re=W.state.version,Fe=be.getParameters(T,W.state,Te,F,G),ze=be.getProgramCacheKey(Fe);let He=D.programs;D.environment=T.isMeshStandardMaterial?F.environment:null,D.fog=F.fog,D.envMap=(T.isMeshStandardMaterial?xe:se).get(T.envMap||D.environment),He===void 0&&(T.addEventListener("dispose",Qe),He=new Map,D.programs=He);let Be=He.get(ze);if(Be!==void 0){if(D.currentProgram===Be&&D.lightsStateVersion===Re)return gl(T,Fe),Be}else Fe.uniforms=be.getUniforms(T),T.onBuild(G,Fe,p),T.onBeforeCompile(Fe,p),Be=be.acquireProgram(Fe,ze),He.set(ze,Be),D.uniforms=Fe.uniforms;const Ue=D.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=b.uniform),gl(T,Fe),D.needsLights=qu(T),D.lightsStateVersion=Re,D.needsLights&&(Ue.ambientLightColor.value=W.state.ambient,Ue.lightProbe.value=W.state.probe,Ue.directionalLights.value=W.state.directional,Ue.directionalLightShadows.value=W.state.directionalShadow,Ue.spotLights.value=W.state.spot,Ue.spotLightShadows.value=W.state.spotShadow,Ue.rectAreaLights.value=W.state.rectArea,Ue.ltc_1.value=W.state.rectAreaLTC1,Ue.ltc_2.value=W.state.rectAreaLTC2,Ue.pointLights.value=W.state.point,Ue.pointLightShadows.value=W.state.pointShadow,Ue.hemisphereLights.value=W.state.hemi,Ue.directionalShadowMap.value=W.state.directionalShadowMap,Ue.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ue.spotShadowMap.value=W.state.spotShadowMap,Ue.spotLightMatrix.value=W.state.spotLightMatrix,Ue.spotLightMap.value=W.state.spotLightMap,Ue.pointShadowMap.value=W.state.pointShadowMap,Ue.pointShadowMatrix.value=W.state.pointShadowMatrix);const ot=Be.getUniforms(),Rt=Gr.seqWithValue(ot.seq,Ue);return D.currentProgram=Be,D.uniformsList=Rt,Be}function gl(T,F){const G=Z.get(T);G.outputEncoding=F.outputEncoding,G.instancing=F.instancing,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Wu(T,F,G,D,W){F.isScene!==!0&&(F=ae),Y.resetTextureUnits();const Te=F.fog,Re=D.isMeshStandardMaterial?F.environment:null,Fe=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Pn,ze=(D.isMeshStandardMaterial?xe:se).get(D.envMap||Re),He=D.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Be=!!D.normalMap&&!!G.attributes.tangent,Ue=!!G.morphAttributes.position,ot=!!G.morphAttributes.normal,Rt=!!G.morphAttributes.color,tn=D.toneMapped?p.toneMapping:$t,On=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,lt=On!==void 0?On.length:0,ke=Z.get(D),ua=u.state.lights;if(q===!0&&(ne===!0||T!==S)){const It=T===S&&D.id===y;b.setState(D,T,It)}let mt=!1;D.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ua.state.version||ke.outputEncoding!==Fe||W.isInstancedMesh&&ke.instancing===!1||!W.isInstancedMesh&&ke.instancing===!0||W.isSkinnedMesh&&ke.skinning===!1||!W.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==ze||D.fog===!0&&ke.fog!==Te||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==b.numPlanes||ke.numIntersection!==b.numIntersection)||ke.vertexAlphas!==He||ke.vertexTangents!==Be||ke.morphTargets!==Ue||ke.morphNormals!==ot||ke.morphColors!==Rt||ke.toneMapping!==tn||ye.isWebGL2===!0&&ke.morphTargetsCount!==lt)&&(mt=!0):(mt=!0,ke.__version=D.version);let Bn=ke.currentProgram;mt===!0&&(Bn=Bt(D,F,W));let xl=!1,$i=!1,da=!1;const wt=Bn.getUniforms(),Un=ke.uniforms;if(le.useProgram(Bn.program)&&(xl=!0,$i=!0,da=!0),D.id!==y&&(y=D.id,$i=!0),xl||S!==T){if(wt.setValue(O,"projectionMatrix",T.projectionMatrix),ye.logarithmicDepthBuffer&&wt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),S!==T&&(S=T,$i=!0,da=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const It=wt.map.cameraPosition;It!==void 0&&It.setValue(O,Q.setFromMatrixPosition(T.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&wt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||W.isSkinnedMesh)&&wt.setValue(O,"viewMatrix",T.matrixWorldInverse)}if(W.isSkinnedMesh){wt.setOptional(O,W,"bindMatrix"),wt.setOptional(O,W,"bindMatrixInverse");const It=W.skeleton;It&&(ye.floatVertexTextures?(It.boneTexture===null&&It.computeBoneTexture(),wt.setValue(O,"boneTexture",It.boneTexture,Y),wt.setValue(O,"boneTextureSize",It.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fa=G.morphAttributes;if((fa.position!==void 0||fa.normal!==void 0||fa.color!==void 0&&ye.isWebGL2===!0)&&ie.update(W,G,D,Bn),($i||ke.receiveShadow!==W.receiveShadow)&&(ke.receiveShadow=W.receiveShadow,wt.setValue(O,"receiveShadow",W.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(Un.envMap.value=ze,Un.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),$i&&(wt.setValue(O,"toneMappingExposure",p.toneMappingExposure),ke.needsLights&&Xu(Un,da),Te&&D.fog===!0&&Ke.refreshFogUniforms(Un,Te),Ke.refreshMaterialUniforms(Un,D,B,P,K),Gr.upload(O,ke.uniformsList,Un,Y)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Gr.upload(O,ke.uniformsList,Un,Y),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&wt.setValue(O,"center",W.center),wt.setValue(O,"modelViewMatrix",W.modelViewMatrix),wt.setValue(O,"normalMatrix",W.normalMatrix),wt.setValue(O,"modelMatrix",W.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const It=D.uniformsGroups;for(let pa=0,Yu=It.length;pa<Yu;pa++)if(ye.isWebGL2){const _l=It[pa];Se.update(_l,Bn),Se.bind(_l,Bn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bn}function Xu(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function qu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(T,F,G){Z.get(T.texture).__webglTexture=F,Z.get(T.depthTexture).__webglTexture=G;const D=Z.get(T);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=G===void 0,D.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,F){const G=Z.get(T);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,G=0){x=T,_=F,v=G;let D=!0,W=null,Te=!1,Re=!1;if(T){const ze=Z.get(T);ze.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),D=!1):ze.__webglFramebuffer===void 0?Y.setupRenderTarget(T):ze.__hasExternalTextures&&Y.rebindTextures(T,Z.get(T.texture).__webglTexture,Z.get(T.depthTexture).__webglTexture);const He=T.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Re=!0);const Be=Z.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(W=Be[F],Te=!0):ye.isWebGL2&&T.samples>0&&Y.useMultisampledRTT(T)===!1?W=Z.get(T).__webglMultisampledFramebuffer:W=Be,E.copy(T.viewport),L.copy(T.scissor),M=T.scissorTest}else E.copy(I).multiplyScalar(B).floor(),L.copy(k).multiplyScalar(B).floor(),M=J;if(le.bindFramebuffer(36160,W)&&ye.drawBuffers&&D&&le.drawBuffers(T,W),le.viewport(E),le.scissor(L),le.setScissorTest(M),Te){const ze=Z.get(T.texture);O.framebufferTexture2D(36160,36064,34069+F,ze.__webglTexture,G)}else if(Re){const ze=Z.get(T.texture),He=F||0;O.framebufferTextureLayer(36160,36064,ze.__webglTexture,G||0,He)}y=-1},this.readRenderTargetPixels=function(T,F,G,D,W,Te,Re){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Fe=Fe[Re]),Fe){le.bindFramebuffer(36160,Fe);try{const ze=T.texture,He=ze.format,Be=ze.type;if(He!==Ft&&ue.convert(He)!==O.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Be===Ui&&(ge.has("EXT_color_buffer_half_float")||ye.isWebGL2&&ge.has("EXT_color_buffer_float"));if(Be!==Ln&&ue.convert(Be)!==O.getParameter(35738)&&!(Be===un&&(ye.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-D&&G>=0&&G<=T.height-W&&O.readPixels(F,G,D,W,ue.convert(He),ue.convert(Be),Te)}finally{const ze=x!==null?Z.get(x).__webglFramebuffer:null;le.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(T,F,G=0){const D=Math.pow(2,-G),W=Math.floor(F.image.width*D),Te=Math.floor(F.image.height*D);Y.setTexture2D(F,0),O.copyTexSubImage2D(3553,G,0,0,T.x,T.y,W,Te),le.unbindTexture()},this.copyTextureToTexture=function(T,F,G,D=0){const W=F.image.width,Te=F.image.height,Re=ue.convert(G.format),Fe=ue.convert(G.type);Y.setTexture2D(G,0),O.pixelStorei(37440,G.flipY),O.pixelStorei(37441,G.premultiplyAlpha),O.pixelStorei(3317,G.unpackAlignment),F.isDataTexture?O.texSubImage2D(3553,D,T.x,T.y,W,Te,Re,Fe,F.image.data):F.isCompressedTexture?O.compressedTexSubImage2D(3553,D,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,Re,F.mipmaps[0].data):O.texSubImage2D(3553,D,T.x,T.y,Re,Fe,F.image),D===0&&G.generateMipmaps&&O.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(T,F,G,D,W=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=T.max.x-T.min.x+1,Re=T.max.y-T.min.y+1,Fe=T.max.z-T.min.z+1,ze=ue.convert(D.format),He=ue.convert(D.type);let Be;if(D.isData3DTexture)Y.setTexture3D(D,0),Be=32879;else if(D.isDataArrayTexture)Y.setTexture2DArray(D,0),Be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(37440,D.flipY),O.pixelStorei(37441,D.premultiplyAlpha),O.pixelStorei(3317,D.unpackAlignment);const Ue=O.getParameter(3314),ot=O.getParameter(32878),Rt=O.getParameter(3316),tn=O.getParameter(3315),On=O.getParameter(32877),lt=G.isCompressedTexture?G.mipmaps[0]:G.image;O.pixelStorei(3314,lt.width),O.pixelStorei(32878,lt.height),O.pixelStorei(3316,T.min.x),O.pixelStorei(3315,T.min.y),O.pixelStorei(32877,T.min.z),G.isDataTexture||G.isData3DTexture?O.texSubImage3D(Be,W,F.x,F.y,F.z,Te,Re,Fe,ze,He,lt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Be,W,F.x,F.y,F.z,Te,Re,Fe,ze,lt.data)):O.texSubImage3D(Be,W,F.x,F.y,F.z,Te,Re,Fe,ze,He,lt),O.pixelStorei(3314,Ue),O.pixelStorei(32878,ot),O.pixelStorei(3316,Rt),O.pixelStorei(3315,tn),O.pixelStorei(32877,On),W===0&&D.generateMipmaps&&O.generateMipmap(Be),le.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Y.setTextureCube(T,0):T.isData3DTexture?Y.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Y.setTexture2DArray(T,0):Y.setTexture2D(T,0),le.unbindTexture()},this.resetState=function(){_=0,v=0,x=null,le.reset(),X.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Qh extends Kh{}Qh.prototype.isWebGL1Renderer=!0;class na{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new fe(e),this.density=t}clone(){return new na(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class ia{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new fe(e),this.near=t,this.far=n}clone(){return new ia(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class jh extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class sa{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ms,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=zt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Tt=new A;class oi{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Je(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new oi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Jo extends St{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Li;const ss=new A,Pi=new A,Ri=new A,Ii=new $,rs=new $,eu=new Ie,fr=new A,as=new A,pr=new A,Kl=new $,Ua=new $,Ql=new $;class tu extends We{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Li===void 0){Li=new Ne;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new sa(t,5);Li.setIndex([0,1,2,0,2,3]),Li.setAttribute("position",new oi(n,3,0,!1)),Li.setAttribute("uv",new oi(n,2,3,!1))}this.geometry=Li,this.material=e!==void 0?e:new Jo,this.center=new $(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pi.setFromMatrixScale(this.matrixWorld),eu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ri.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pi.multiplyScalar(-Ri.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const r=this.center;mr(fr.set(-.5,-.5,0),Ri,r,Pi,i,s),mr(as.set(.5,-.5,0),Ri,r,Pi,i,s),mr(pr.set(.5,.5,0),Ri,r,Pi,i,s),Kl.set(0,0),Ua.set(1,0),Ql.set(1,1);let a=e.ray.intersectTriangle(fr,as,pr,!1,ss);if(a===null&&(mr(as.set(-.5,.5,0),Ri,r,Pi,i,s),Ua.set(0,1),a=e.ray.intersectTriangle(fr,pr,as,!1,ss),a===null))return;const l=e.ray.origin.distanceTo(ss);l<e.near||l>e.far||t.push({distance:l,point:ss.clone(),uv:Vt.getUV(ss,fr,as,pr,Kl,Ua,Ql,new $),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function mr(o,e,t,n,i,s){Ii.subVectors(o,t).addScalar(.5).multiply(n),i!==void 0?(rs.x=s*Ii.x-i*Ii.y,rs.y=i*Ii.x+s*Ii.y):rs.copy(Ii),o.copy(e),o.x+=rs.x,o.y+=rs.y,o.applyMatrix4(eu)}const gr=new A,jl=new A;class nu extends We{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){gr.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(gr);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){gr.setFromMatrixPosition(e.matrixWorld),jl.setFromMatrixPosition(this.matrixWorld);const n=gr.distanceTo(jl)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let r=t[i].distance;if(t[i].object.visible&&(r-=r*t[i].hysteresis),n>=r)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const r=n[i];t.object.levels.push({object:r.object.uuid,distance:r.distance,hysteresis:r.hysteresis})}return t}}const ec=new A,tc=new Ye,nc=new Ye,X0=new A,ic=new Ie;class iu extends _t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ye,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;tc.fromBufferAttribute(i.attributes.skinIndex,e),nc.fromBufferAttribute(i.attributes.skinWeight,e),ec.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=nc.getComponent(s);if(r!==0){const a=tc.getComponent(s);ic.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(X0.copy(ec).applyMatrix4(ic),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class $o extends We{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Bi extends at{constructor(e=null,t=1,n=1,i,s,r,a,l,c=it,h=it,d,u){super(null,r,a,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sc=new Ie,q0=new Ie;class ra{constructor(e=[],t=[]){this.uuid=zt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const a=e[s]?e[s].matrixWorld:q0;sc.multiplyMatrices(a,t[s]),sc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ra(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=zh(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Bi(t,e,e,Ft,un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new $o),this.bones.push(r),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Gi extends Je{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const rc=new Ie,ac=new Ie,xr=[],Y0=new Ie,os=new _t;class su extends _t{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gi(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,Y0)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(os.geometry=this.geometry,os.material=this.material,os.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,rc),ac.multiplyMatrices(n,rc),os.matrixWorld=ac,os.raycast(e,xr);for(let r=0,a=xr.length;r<a;r++){const l=xr[r];l.instanceId=s,l.object=this,t.push(l)}xr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gi(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ct extends St{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oc=new A,lc=new A,cc=new Ie,ka=new Ds,_r=new ui;class Rn extends We{constructor(e=new Ne,t=new Ct){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)oc.fromBufferAttribute(t,i-1),lc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=oc.distanceTo(lc);e.setAttribute("lineDistance",new pe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(i),_r.radius+=s,e.ray.intersectsSphere(_r)===!1)return;cc.copy(i).invert(),ka.copy(e.ray).applyMatrix4(cc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new A,h=new A,d=new A,u=new A,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,r.start),v=Math.min(g.count,r.start+r.count);for(let x=_,y=v-1;x<y;x+=f){const S=g.getX(x),E=g.getX(x+1);if(c.fromBufferAttribute(m,S),h.fromBufferAttribute(m,E),ka.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(u);M<e.near||M>e.far||t.push({distance:M,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,r.start),v=Math.min(m.count,r.start+r.count);for(let x=_,y=v-1;x<y;x+=f){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),ka.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(u);E<e.near||E>e.far||t.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const hc=new A,uc=new A;class jt extends Rn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)hc.fromBufferAttribute(t,i),uc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hc.distanceTo(uc);e.setAttribute("lineDistance",new pe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ru extends Rn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ko extends St{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dc=new Ie,Lo=new Ds,yr=new ui,vr=new A;class au extends We{constructor(e=new Ne,t=new Ko){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(i),yr.radius+=s,e.ray.intersectsSphere(yr)===!1)return;dc.copy(i).invert(),Lo.copy(e.ray).applyMatrix4(dc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=u,p=f;g<p;g++){const m=c.getX(g);vr.fromBufferAttribute(d,m),fc(vr,m,l,i,e,t,this)}}else{const u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=u,p=f;g<p;g++)vr.fromBufferAttribute(d,g),fc(vr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function fc(o,e,t,n,i,s,r){const a=Lo.distanceSqToPoint(o);if(a<t){const l=new A;Lo.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:r})}}class Z0 extends at{constructor(e,t,n,i,s,r,a,l,c){super(e,t,n,i,s,r,a,l,c),this.isVideoTexture=!0,this.minFilter=r!==void 0?r:st,this.magFilter=s!==void 0?s:st,this.generateMipmaps=!1;const h=this;function d(){h.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class J0 extends at{constructor(e,t,n){super({width:e,height:t}),this.isFramebufferTexture=!0,this.format=n,this.magFilter=it,this.minFilter=it,this.generateMipmaps=!1,this.needsUpdate=!0}}class Qo extends at{constructor(e,t,n,i,s,r,a,l,c,h,d,u){super(null,r,a,l,c,h,i,s,d,u),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class $0 extends Qo{constructor(e,t,n,i,s,r){super(e,t,n,s,r),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=bt}}class K0 extends at{constructor(e,t,n,i,s,r,a,l,c){super(e,t,n,i,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let r;t?r=t:r=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const h=n[i],u=n[i+1]-h,f=(r-h)/u;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),a=this.getPoint(s),l=t||(r.isVector2?new $:new A);return l.copy(a).sub(r).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new A,i=[],s=[],r=[],a=new A,l=new Ie;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new A)}s[0]=new A,r[0]=new A;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(rt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}r[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(rt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),r[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class aa extends Zt{constructor(e=0,t=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new $,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ou extends aa{constructor(e,t,n,i,s,r){super(e,t,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function jo(){let o=0,e=0,t=0,n=0;function i(s,r,a,l){o=s,e=a,t=-3*s+3*r-2*a-l,n=2*s-2*r+a+l}return{initCatmullRom:function(s,r,a,l,c){i(r,a,c*(a-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,a,l,c,h,d){let u=(r-s)/c-(a-s)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+d)+(l-a)/d;u*=h,f*=h,i(r,a,u,f)},calc:function(s){const r=s*s,a=r*s;return o+e*s+t*r+n*a}}}const Mr=new A,Va=new jo,Ga=new jo,Ha=new jo;class lu extends Zt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new A){const n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Mr.subVectors(i[0],i[1]).add(i[0]),c=Mr);const d=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Mr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Mr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);p<1e-4&&(p=1),g<1e-4&&(g=p),m<1e-4&&(m=p),Va.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,p,m),Ga.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,p,m),Ha.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,p,m)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Ga.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Ha.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Va.calc(l),Ga.calc(l),Ha.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new A().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function pc(o,e,t,n,i){const s=(n-e)*.5,r=(i-t)*.5,a=o*o,l=o*a;return(2*t-2*n+s+r)*l+(-3*t+3*n-2*s-r)*a+s*o+t}function Q0(o,e){const t=1-o;return t*t*e}function j0(o,e){return 2*(1-o)*o*e}function ex(o,e){return o*o*e}function ds(o,e,t,n){return Q0(o,e)+j0(o,t)+ex(o,n)}function tx(o,e){const t=1-o;return t*t*t*e}function nx(o,e){const t=1-o;return 3*t*t*o*e}function ix(o,e){return 3*(1-o)*o*o*e}function sx(o,e){return o*o*o*e}function fs(o,e,t,n,i){return tx(o,e)+nx(o,t)+ix(o,n)+sx(o,i)}class el extends Zt{constructor(e=new $,t=new $,n=new $,i=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new $){const n=t,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(fs(e,i.x,s.x,r.x,a.x),fs(e,i.y,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cu extends Zt{constructor(e=new A,t=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new A){const n=t,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(fs(e,i.x,s.x,r.x,a.x),fs(e,i.y,s.y,r.y,a.y),fs(e,i.z,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class oa extends Zt{constructor(e=new $,t=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new $;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hu extends Zt{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tl extends Zt{constructor(e=new $,t=new $,n=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new $){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(ds(e,i.x,s.x,r.x),ds(e,i.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nl extends Zt{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(ds(e,i.x,s.x,r.x),ds(e,i.y,s.y,r.y),ds(e,i.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class il extends Zt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $){const n=t,i=this.points,s=(i.length-1)*e,r=Math.floor(s),a=s-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],d=i[r>i.length-3?i.length-1:r+2];return n.set(pc(a,l.x,c.x,h.x,d.x),pc(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new $().fromArray(i))}return this}}var sl=Object.freeze({__proto__:null,ArcCurve:ou,CatmullRomCurve3:lu,CubicBezierCurve:el,CubicBezierCurve3:cu,EllipseCurve:aa,LineCurve:oa,LineCurve3:hu,QuadraticBezierCurve:tl,QuadraticBezierCurve3:nl,SplineCurve:il});class uu extends Zt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new oa(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const r=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],a=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new sl[i.type]().fromJSON(i))}return this}}class ws extends uu{constructor(e){super(),this.type="Path",this.currentPoint=new $,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new oa(this.currentPoint.clone(),new $(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new tl(this.currentPoint.clone(),new $(e,t),new $(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,r){const a=new el(this.currentPoint.clone(),new $(e,t),new $(n,i),new $(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new il(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,r),this}absarc(e,t,n,i,s,r){return this.absellipse(e,t,n,n,i,s,r),this}ellipse(e,t,n,i,s,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,r,a,l),this}absellipse(e,t,n,i,s,r,a,l){const c=new aa(e,t,n,i,s,r,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class qi extends Ne{constructor(e=[new $(0,-.5),new $(.5,0),new $(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=rt(i,0,Math.PI*2);const s=[],r=[],a=[],l=[],c=[],h=1/t,d=new A,u=new $,f=new A,g=new A,p=new A;let m=0,_=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,_=e[v+1].y-e[v].y,f.x=_*1,f.y=-m,f.z=_*0,p.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(p.x,p.y,p.z);break;default:m=e[v+1].x-e[v].x,_=e[v+1].y-e[v].y,f.x=_*1,f.y=-m,f.z=_*0,g.copy(f),f.x+=p.x,f.y+=p.y,f.z+=p.z,f.normalize(),l.push(f.x,f.y,f.z),p.copy(g)}for(let v=0;v<=t;v++){const x=n+v*h*i,y=Math.sin(x),S=Math.cos(x);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*y,d.y=e[E].y,d.z=e[E].x*S,r.push(d.x,d.y,d.z),u.x=v/t,u.y=E/(e.length-1),a.push(u.x,u.y);const L=l[3*E+0]*y,M=l[3*E+1],w=l[3*E+0]*S;c.push(L,M,w)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){const y=x+v*e.length,S=y,E=y+e.length,L=y+e.length+1,M=y+1;s.push(S,E,M),s.push(L,M,E)}this.setIndex(s),this.setAttribute("position",new pe(r,3)),this.setAttribute("uv",new pe(a,2)),this.setAttribute("normal",new pe(c,3))}static fromJSON(e){return new qi(e.points,e.segments,e.phiStart,e.phiLength)}}class zs extends qi{constructor(e=1,t=1,n=4,i=8){const s=new ws;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new zs(e.radius,e.length,e.capSegments,e.radialSegments)}}class Os extends Ne{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],r=[],a=[],l=[],c=new A,h=new $;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[u]/e+1)/2,h.y=(r[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(a,3)),this.setAttribute("uv",new pe(l,2))}static fromJSON(e){return new Os(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class di extends Ne{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let g=0;const p=[],m=n/2;let _=0;v(),r===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(f,2));function v(){const y=new A,S=new A;let E=0;const L=(t-e)/n;for(let M=0;M<=s;M++){const w=[],P=M/s,B=P*(t-e)+e;for(let H=0;H<=i;H++){const N=H/i,I=N*l+a,k=Math.sin(I),J=Math.cos(I);S.x=B*k,S.y=-P*n+m,S.z=B*J,d.push(S.x,S.y,S.z),y.set(k,L,J).normalize(),u.push(y.x,y.y,y.z),f.push(N,1-P),w.push(g++)}p.push(w)}for(let M=0;M<i;M++)for(let w=0;w<s;w++){const P=p[w][M],B=p[w+1][M],H=p[w+1][M+1],N=p[w][M+1];h.push(P,B,N),h.push(B,H,N),E+=6}c.addGroup(_,E,0),_+=E}function x(y){const S=g,E=new $,L=new A;let M=0;const w=y===!0?e:t,P=y===!0?1:-1;for(let H=1;H<=i;H++)d.push(0,m*P,0),u.push(0,P,0),f.push(.5,.5),g++;const B=g;for(let H=0;H<=i;H++){const I=H/i*l+a,k=Math.cos(I),J=Math.sin(I);L.x=w*J,L.y=m*P,L.z=w*k,d.push(L.x,L.y,L.z),u.push(0,P,0),E.x=k*.5+.5,E.y=J*.5*P+.5,f.push(E.x,E.y),g++}for(let H=0;H<i;H++){const N=S+H,I=B+H;y===!0?h.push(I,I+1,N):h.push(I+1,I,N),M+=3}c.addGroup(_,M,y===!0?1:2),_+=M}}static fromJSON(e){return new di(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bs extends di{constructor(e=1,t=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,e,t,n,i,s,r,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(e){return new Bs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xn extends Ne{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],r=[];a(i),c(n),h(),this.setAttribute("position",new pe(s,3)),this.setAttribute("normal",new pe(s.slice(),3)),this.setAttribute("uv",new pe(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new A,y=new A,S=new A;for(let E=0;E<t.length;E+=3)f(t[E+0],x),f(t[E+1],y),f(t[E+2],S),l(x,y,S,v)}function l(v,x,y,S){const E=S+1,L=[];for(let M=0;M<=E;M++){L[M]=[];const w=v.clone().lerp(y,M/E),P=x.clone().lerp(y,M/E),B=E-M;for(let H=0;H<=B;H++)H===0&&M===E?L[M][H]=w:L[M][H]=w.clone().lerp(P,H/B)}for(let M=0;M<E;M++)for(let w=0;w<2*(E-M)-1;w++){const P=Math.floor(w/2);w%2===0?(u(L[M][P+1]),u(L[M+1][P]),u(L[M][P])):(u(L[M][P+1]),u(L[M+1][P+1]),u(L[M+1][P]))}}function c(v){const x=new A;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(v),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function h(){const v=new A;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const y=m(v)/2/Math.PI+.5,S=_(v)/Math.PI+.5;r.push(y,1-S)}g(),d()}function d(){for(let v=0;v<r.length;v+=6){const x=r[v+0],y=r[v+2],S=r[v+4],E=Math.max(x,y,S),L=Math.min(x,y,S);E>.9&&L<.1&&(x<.2&&(r[v+0]+=1),y<.2&&(r[v+2]+=1),S<.2&&(r[v+4]+=1))}}function u(v){s.push(v.x,v.y,v.z)}function f(v,x){const y=v*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function g(){const v=new A,x=new A,y=new A,S=new A,E=new $,L=new $,M=new $;for(let w=0,P=0;w<s.length;w+=9,P+=6){v.set(s[w+0],s[w+1],s[w+2]),x.set(s[w+3],s[w+4],s[w+5]),y.set(s[w+6],s[w+7],s[w+8]),E.set(r[P+0],r[P+1]),L.set(r[P+2],r[P+3]),M.set(r[P+4],r[P+5]),S.copy(v).add(x).add(y).divideScalar(3);const B=m(S);p(E,P+0,v,B),p(L,P+2,x,B),p(M,P+4,y,B)}}function p(v,x,y,S){S<0&&v.x===1&&(r[x]=v.x-1),y.x===0&&y.z===0&&(r[x]=S/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function _(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}static fromJSON(e){return new xn(e.vertices,e.indices,e.radius,e.details)}}class Us extends xn{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Us(e.radius,e.detail)}}const br=new A,Sr=new A,Wa=new A,wr=new Vt;class du extends Ne{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(ii*t),r=e.getIndex(),a=e.getAttribute("position"),l=r?r.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let g=0;g<l;g+=3){r?(c[0]=r.getX(g),c[1]=r.getX(g+1),c[2]=r.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:p,b:m,c:_}=wr;if(p.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),_.fromBufferAttribute(a,c[2]),wr.getNormal(Wa),d[0]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const x=(v+1)%3,y=d[v],S=d[x],E=wr[h[v]],L=wr[h[x]],M=`${y}_${S}`,w=`${S}_${y}`;w in u&&u[w]?(Wa.dot(u[w].normal)<=s&&(f.push(E.x,E.y,E.z),f.push(L.x,L.y,L.z)),u[w]=null):M in u||(u[M]={index0:c[v],index1:c[x],normal:Wa.clone()})}}for(const g in u)if(u[g]){const{index0:p,index1:m}=u[g];br.fromBufferAttribute(a,p),Sr.fromBufferAttribute(a,m),f.push(br.x,br.y,br.z),f.push(Sr.x,Sr.y,Sr.z)}this.setAttribute("position",new pe(f,3))}}}class ri extends ws{constructor(e){super(e),this.uuid=zt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ws().fromJSON(i))}return this}}const rx={triangulate:function(o,e,t=2){const n=e&&e.length,i=n?e[0]*t:o.length;let s=fu(o,0,i,t,!0);const r=[];if(!s||s.next===s.prev)return r;let a,l,c,h,d,u,f;if(n&&(s=hx(o,e,s,t)),o.length>80*t){a=c=o[0],l=h=o[1];for(let g=t;g<i;g+=t)d=o[g],u=o[g+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Ts(s,r,t,a,l,f,0),r}};function fu(o,e,t,n,i){let s,r;if(i===Mx(o,e,t,n)>0)for(s=e;s<t;s+=n)r=mc(s,o[s],o[s+1],r);else for(s=t-n;s>=e;s-=n)r=mc(s,o[s],o[s+1],r);return r&&la(r,r.next)&&(Es(r),r=r.next),r}function li(o,e){if(!o)return o;e||(e=o);let t=o,n;do if(n=!1,!t.steiner&&(la(t,t.next)||et(t.prev,t,t.next)===0)){if(Es(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ts(o,e,t,n,i,s,r){if(!o)return;!r&&s&&mx(o,n,i,s);let a=o,l,c;for(;o.prev!==o.next;){if(l=o.prev,c=o.next,s?ox(o,n,i,s):ax(o)){e.push(l.i/t|0),e.push(o.i/t|0),e.push(c.i/t|0),Es(o),o=c.next,a=c.next;continue}if(o=c,o===a){r?r===1?(o=lx(li(o),e,t),Ts(o,e,t,n,i,s,2)):r===2&&cx(o,e,t,n,i,s):Ts(li(o),e,t,n,i,s,1);break}}}function ax(o){const e=o.prev,t=o,n=o.next;if(et(e,t,n)>=0)return!1;const i=e.x,s=t.x,r=n.x,a=e.y,l=t.y,c=n.y,h=i<s?i<r?i:r:s<r?s:r,d=a<l?a<c?a:c:l<c?l:c,u=i>s?i>r?i:r:s>r?s:r,f=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Oi(i,a,s,l,r,c,g.x,g.y)&&et(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ox(o,e,t,n){const i=o.prev,s=o,r=o.next;if(et(i,s,r)>=0)return!1;const a=i.x,l=s.x,c=r.x,h=i.y,d=s.y,u=r.y,f=a<l?a<c?a:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,p=a>l?a>c?a:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,_=Po(f,g,e,t,n),v=Po(p,m,e,t,n);let x=o.prevZ,y=o.nextZ;for(;x&&x.z>=_&&y&&y.z<=v;){if(x.x>=f&&x.x<=p&&x.y>=g&&x.y<=m&&x!==i&&x!==r&&Oi(a,h,l,d,c,u,x.x,x.y)&&et(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=p&&y.y>=g&&y.y<=m&&y!==i&&y!==r&&Oi(a,h,l,d,c,u,y.x,y.y)&&et(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=_;){if(x.x>=f&&x.x<=p&&x.y>=g&&x.y<=m&&x!==i&&x!==r&&Oi(a,h,l,d,c,u,x.x,x.y)&&et(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=p&&y.y>=g&&y.y<=m&&y!==i&&y!==r&&Oi(a,h,l,d,c,u,y.x,y.y)&&et(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function lx(o,e,t){let n=o;do{const i=n.prev,s=n.next.next;!la(i,s)&&pu(i,n,n.next,s)&&As(i,s)&&As(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Es(n),Es(n.next),n=o=s),n=n.next}while(n!==o);return li(n)}function cx(o,e,t,n,i,s){let r=o;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&_x(r,a)){let l=mu(r,a);r=li(r,r.next),l=li(l,l.next),Ts(r,e,t,n,i,s,0),Ts(l,e,t,n,i,s,0);return}a=a.next}r=r.next}while(r!==o)}function hx(o,e,t,n){const i=[];let s,r,a,l,c;for(s=0,r=e.length;s<r;s++)a=e[s]*n,l=s<r-1?e[s+1]*n:o.length,c=fu(o,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(xx(c));for(i.sort(ux),s=0;s<i.length;s++)t=dx(i[s],t);return t}function ux(o,e){return o.x-e.x}function dx(o,e){const t=fx(o,e);if(!t)return e;const n=mu(t,o);return li(n,n.next),li(t,t.next)}function fx(o,e){let t=e,n=-1/0,i;const s=o.x,r=o.y;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=s&&u>n&&(n=u,i=t.x<t.next.x?t:t.next,u===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,d;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&Oi(r<c?s:n,r,l,c,r<c?n:s,r,t.x,t.y)&&(d=Math.abs(r-t.y)/(s-t.x),As(t,o)&&(d<h||d===h&&(t.x>i.x||t.x===i.x&&px(i,t)))&&(i=t,h=d)),t=t.next;while(t!==a);return i}function px(o,e){return et(o.prev,o,e.prev)<0&&et(e.next,o,o.next)<0}function mx(o,e,t,n){let i=o;do i.z===0&&(i.z=Po(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==o);i.prevZ.nextZ=null,i.prevZ=null,gx(i)}function gx(o){let e,t,n,i,s,r,a,l,c=1;do{for(t=o,o=null,s=null,r=0;t;){for(r++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:o=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(r>1);return o}function Po(o,e,t,n,i){return o=(o-t)*i|0,e=(e-n)*i|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,o|e<<1}function xx(o){let e=o,t=o;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==o);return t}function Oi(o,e,t,n,i,s,r,a){return(i-r)*(e-a)>=(o-r)*(s-a)&&(o-r)*(n-a)>=(t-r)*(e-a)&&(t-r)*(s-a)>=(i-r)*(n-a)}function _x(o,e){return o.next.i!==e.i&&o.prev.i!==e.i&&!yx(o,e)&&(As(o,e)&&As(e,o)&&vx(o,e)&&(et(o.prev,o,e.prev)||et(o,e.prev,e))||la(o,e)&&et(o.prev,o,o.next)>0&&et(e.prev,e,e.next)>0)}function et(o,e,t){return(e.y-o.y)*(t.x-e.x)-(e.x-o.x)*(t.y-e.y)}function la(o,e){return o.x===e.x&&o.y===e.y}function pu(o,e,t,n){const i=Ar(et(o,e,t)),s=Ar(et(o,e,n)),r=Ar(et(t,n,o)),a=Ar(et(t,n,e));return!!(i!==s&&r!==a||i===0&&Tr(o,t,e)||s===0&&Tr(o,n,e)||r===0&&Tr(t,o,n)||a===0&&Tr(t,e,n))}function Tr(o,e,t){return e.x<=Math.max(o.x,t.x)&&e.x>=Math.min(o.x,t.x)&&e.y<=Math.max(o.y,t.y)&&e.y>=Math.min(o.y,t.y)}function Ar(o){return o>0?1:o<0?-1:0}function yx(o,e){let t=o;do{if(t.i!==o.i&&t.next.i!==o.i&&t.i!==e.i&&t.next.i!==e.i&&pu(t,t.next,o,e))return!0;t=t.next}while(t!==o);return!1}function As(o,e){return et(o.prev,o,o.next)<0?et(o,e,o.next)>=0&&et(o,o.prev,e)>=0:et(o,e,o.prev)<0||et(o,o.next,e)<0}function vx(o,e){let t=o,n=!1;const i=(o.x+e.x)/2,s=(o.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==o);return n}function mu(o,e){const t=new Ro(o.i,o.x,o.y),n=new Ro(e.i,e.x,e.y),i=o.next,s=e.prev;return o.next=e,e.prev=o,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function mc(o,e,t,n){const i=new Ro(o,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Es(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function Ro(o,e,t){this.i=o,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mx(o,e,t,n){let i=0;for(let s=e,r=t-n;s<t;s+=n)i+=(o[r]-o[s])*(o[s+1]+o[r+1]),r=s;return i}class Kt{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Kt.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];gc(e),xc(n,e);let r=e.length;t.forEach(gc);for(let l=0;l<t.length;l++)i.push(r),r+=t[l].length,xc(n,t[l]);const a=rx.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function gc(o){const e=o.length;e>2&&o[e-1].equals(o[0])&&o.pop()}function xc(o,e){for(let t=0;t<e.length;t++)o.push(e[t].x),o.push(e[t].y)}class ks extends Ne{constructor(e=new ri([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r(c)}this.setAttribute("position",new pe(i,3)),this.setAttribute("uv",new pe(s,2)),this.computeVertexNormals();function r(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,p=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:bx;let x,y=!1,S,E,L,M;_&&(x=_.getSpacedPoints(h),y=!0,u=!1,S=_.computeFrenetFrames(h,!1),E=new A,L=new A,M=new A),u||(m=0,f=0,g=0,p=0);const w=a.extractPoints(c);let P=w.shape;const B=w.holes;if(!Kt.isClockWise(P)){P=P.reverse();for(let Z=0,Y=B.length;Z<Y;Z++){const se=B[Z];Kt.isClockWise(se)&&(B[Z]=se.reverse())}}const N=Kt.triangulateShape(P,B),I=P;for(let Z=0,Y=B.length;Z<Y;Z++){const se=B[Z];P=P.concat(se)}function k(Z,Y,se){return Y||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().multiplyScalar(se).add(Z)}const J=P.length,te=N.length;function q(Z,Y,se){let xe,ce,Pe;const Ae=Z.x-Y.x,be=Z.y-Y.y,Ke=se.x-Z.x,qe=se.y-Z.y,C=Ae*Ae+be*be,b=Ae*qe-be*Ke;if(Math.abs(b)>Number.EPSILON){const U=Math.sqrt(C),ee=Math.sqrt(Ke*Ke+qe*qe),ie=Y.x-be/U,he=Y.y+Ae/U,Le=se.x-qe/ee,ue=se.y+Ke/ee,X=((Le-ie)*qe-(ue-he)*Ke)/(Ae*qe-be*Ke);xe=ie+Ae*X-Z.x,ce=he+be*X-Z.y;const Se=xe*xe+ce*ce;if(Se<=2)return new $(xe,ce);Pe=Math.sqrt(Se/2)}else{let U=!1;Ae>Number.EPSILON?Ke>Number.EPSILON&&(U=!0):Ae<-Number.EPSILON?Ke<-Number.EPSILON&&(U=!0):Math.sign(be)===Math.sign(qe)&&(U=!0),U?(xe=-be,ce=Ae,Pe=Math.sqrt(C)):(xe=Ae,ce=be,Pe=Math.sqrt(C/2))}return new $(xe/Pe,ce/Pe)}const ne=[];for(let Z=0,Y=I.length,se=Y-1,xe=Z+1;Z<Y;Z++,se++,xe++)se===Y&&(se=0),xe===Y&&(xe=0),ne[Z]=q(I[Z],I[se],I[xe]);const K=[];let me,z=ne.concat();for(let Z=0,Y=B.length;Z<Y;Z++){const se=B[Z];me=[];for(let xe=0,ce=se.length,Pe=ce-1,Ae=xe+1;xe<ce;xe++,Pe++,Ae++)Pe===ce&&(Pe=0),Ae===ce&&(Ae=0),me[xe]=q(se[xe],se[Pe],se[Ae]);K.push(me),z=z.concat(me)}for(let Z=0;Z<m;Z++){const Y=Z/m,se=f*Math.cos(Y*Math.PI/2),xe=g*Math.sin(Y*Math.PI/2)+p;for(let ce=0,Pe=I.length;ce<Pe;ce++){const Ae=k(I[ce],ne[ce],xe);Me(Ae.x,Ae.y,-se)}for(let ce=0,Pe=B.length;ce<Pe;ce++){const Ae=B[ce];me=K[ce];for(let be=0,Ke=Ae.length;be<Ke;be++){const qe=k(Ae[be],me[be],xe);Me(qe.x,qe.y,-se)}}}const Q=g+p;for(let Z=0;Z<J;Z++){const Y=u?k(P[Z],z[Z],Q):P[Z];y?(L.copy(S.normals[0]).multiplyScalar(Y.x),E.copy(S.binormals[0]).multiplyScalar(Y.y),M.copy(x[0]).add(L).add(E),Me(M.x,M.y,M.z)):Me(Y.x,Y.y,0)}for(let Z=1;Z<=h;Z++)for(let Y=0;Y<J;Y++){const se=u?k(P[Y],z[Y],Q):P[Y];y?(L.copy(S.normals[Z]).multiplyScalar(se.x),E.copy(S.binormals[Z]).multiplyScalar(se.y),M.copy(x[Z]).add(L).add(E),Me(M.x,M.y,M.z)):Me(se.x,se.y,d/h*Z)}for(let Z=m-1;Z>=0;Z--){const Y=Z/m,se=f*Math.cos(Y*Math.PI/2),xe=g*Math.sin(Y*Math.PI/2)+p;for(let ce=0,Pe=I.length;ce<Pe;ce++){const Ae=k(I[ce],ne[ce],xe);Me(Ae.x,Ae.y,d+se)}for(let ce=0,Pe=B.length;ce<Pe;ce++){const Ae=B[ce];me=K[ce];for(let be=0,Ke=Ae.length;be<Ke;be++){const qe=k(Ae[be],me[be],xe);y?Me(qe.x,qe.y+x[h-1].y,x[h-1].x+se):Me(qe.x,qe.y,d+se)}}}ae(),oe();function ae(){const Z=i.length/3;if(u){let Y=0,se=J*Y;for(let xe=0;xe<te;xe++){const ce=N[xe];ge(ce[2]+se,ce[1]+se,ce[0]+se)}Y=h+m*2,se=J*Y;for(let xe=0;xe<te;xe++){const ce=N[xe];ge(ce[0]+se,ce[1]+se,ce[2]+se)}}else{for(let Y=0;Y<te;Y++){const se=N[Y];ge(se[2],se[1],se[0])}for(let Y=0;Y<te;Y++){const se=N[Y];ge(se[0]+J*h,se[1]+J*h,se[2]+J*h)}}n.addGroup(Z,i.length/3-Z,0)}function oe(){const Z=i.length/3;let Y=0;O(I,Y),Y+=I.length;for(let se=0,xe=B.length;se<xe;se++){const ce=B[se];O(ce,Y),Y+=ce.length}n.addGroup(Z,i.length/3-Z,1)}function O(Z,Y){let se=Z.length;for(;--se>=0;){const xe=se;let ce=se-1;ce<0&&(ce=Z.length-1);for(let Pe=0,Ae=h+m*2;Pe<Ae;Pe++){const be=J*Pe,Ke=J*(Pe+1),qe=Y+xe+be,C=Y+ce+be,b=Y+ce+Ke,U=Y+xe+Ke;ye(qe,C,b,U)}}}function Me(Z,Y,se){l.push(Z),l.push(Y),l.push(se)}function ge(Z,Y,se){le(Z),le(Y),le(se);const xe=i.length/3,ce=v.generateTopUV(n,i,xe-3,xe-2,xe-1);Oe(ce[0]),Oe(ce[1]),Oe(ce[2])}function ye(Z,Y,se,xe){le(Z),le(Y),le(xe),le(Y),le(se),le(xe);const ce=i.length/3,Pe=v.generateSideWallUV(n,i,ce-6,ce-3,ce-2,ce-1);Oe(Pe[0]),Oe(Pe[1]),Oe(Pe[3]),Oe(Pe[1]),Oe(Pe[2]),Oe(Pe[3])}function le(Z){i.push(l[Z*3+0]),i.push(l[Z*3+1]),i.push(l[Z*3+2])}function Oe(Z){s.push(Z.x),s.push(Z.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Sx(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new sl[i.type]().fromJSON(i)),new ks(n,e.options)}}const bx={generateTopUV:function(o,e,t,n,i){const s=e[t*3],r=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new $(s,r),new $(a,l),new $(c,h)]},generateSideWallUV:function(o,e,t,n,i,s){const r=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[i*3],f=e[i*3+1],g=e[i*3+2],p=e[s*3],m=e[s*3+1],_=e[s*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new $(r,1-l),new $(c,1-d),new $(u,1-g),new $(p,1-_)]:[new $(a,1-l),new $(h,1-d),new $(f,1-g),new $(m,1-_)]}};function Sx(o,e,t){if(t.shapes=[],Array.isArray(o))for(let n=0,i=o.length;n<i;n++){const s=o[n];t.shapes.push(s.uuid)}else t.shapes.push(o.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Vs extends xn{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vs(e.radius,e.detail)}}class Yi extends xn{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Yi(e.radius,e.detail)}}class Gs extends Ne{constructor(e=.5,t=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let d=e;const u=(t-e)/i,f=new A,g=new $;for(let p=0;p<=i;p++){for(let m=0;m<=n;m++){const _=s+m/n*r;f.x=d*Math.cos(_),f.y=d*Math.sin(_),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let p=0;p<i;p++){const m=p*(n+1);for(let _=0;_<n;_++){const v=_+m,x=v,y=v+n+1,S=v+n+2,E=v+1;a.push(x,y,E),a.push(y,S,E)}}this.setIndex(a),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(h,2))}static fromJSON(e){return new Gs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Hs extends Ne{constructor(e=new ri([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],r=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new pe(i,3)),this.setAttribute("normal",new pe(s,3)),this.setAttribute("uv",new pe(r,2));function c(h){const d=i.length/3,u=h.extractPoints(t);let f=u.shape;const g=u.holes;Kt.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,_=g.length;m<_;m++){const v=g[m];Kt.isClockWise(v)===!0&&(g[m]=v.reverse())}const p=Kt.triangulateShape(f,g);for(let m=0,_=g.length;m<_;m++){const v=g[m];f=f.concat(v)}for(let m=0,_=f.length;m<_;m++){const v=f[m];i.push(v.x,v.y,0),s.push(0,0,1),r.push(v.x,v.y)}for(let m=0,_=p.length;m<_;m++){const v=p[m],x=v[0]+d,y=v[1]+d,S=v[2]+d;n.push(x,y,S),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return wx(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const r=t[e.shapes[i]];n.push(r)}return new Hs(n,e.curveSegments)}}function wx(o,e){if(e.shapes=[],Array.isArray(o))for(let t=0,n=o.length;t<n;t++){const i=o[t];e.shapes.push(i.uuid)}else e.shapes.push(o.uuid);return e}class Zi extends Ne{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],d=new A,u=new A,f=[],g=[],p=[],m=[];for(let _=0;_<=n;_++){const v=[],x=_/n;let y=0;_==0&&r==0?y=.5/t:_==n&&l==Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){const E=S/t;d.x=-e*Math.cos(i+E*s)*Math.sin(r+x*a),d.y=e*Math.cos(r+x*a),d.z=e*Math.sin(i+E*s)*Math.sin(r+x*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),p.push(u.x,u.y,u.z),m.push(E+y,1-x),v.push(c++)}h.push(v)}for(let _=0;_<n;_++)for(let v=0;v<t;v++){const x=h[_][v+1],y=h[_][v],S=h[_+1][v],E=h[_+1][v+1];(_!==0||r>0)&&f.push(x,y,E),(_!==n-1||l<Math.PI)&&f.push(y,S,E)}this.setIndex(f),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(p,3)),this.setAttribute("uv",new pe(m,2))}static fromJSON(e){return new Zi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ws extends xn{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ws(e.radius,e.detail)}}class Xs extends Ne{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],l=[],c=[],h=new A,d=new A,u=new A;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const p=g/i*s,m=f/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(p),d.y=(e+t*Math.cos(m))*Math.sin(p),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(p),h.y=e*Math.sin(p),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const p=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,_=(i+1)*(f-1)+g,v=(i+1)*f+g;r.push(p,m,v),r.push(m,_,v)}this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(c,2))}static fromJSON(e){return new Xs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class qs extends Ne{constructor(e=1,t=.4,n=64,i=8,s=2,r=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:r},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],h=[],d=new A,u=new A,f=new A,g=new A,p=new A,m=new A,_=new A;for(let x=0;x<=n;++x){const y=x/n*s*Math.PI*2;v(y,s,r,e,f),v(y+.01,s,r,e,g),m.subVectors(g,f),_.addVectors(g,f),p.crossVectors(m,_),_.crossVectors(p,m),p.normalize(),_.normalize();for(let S=0;S<=i;++S){const E=S/i*Math.PI*2,L=-t*Math.cos(E),M=t*Math.sin(E);d.x=f.x+(L*_.x+M*p.x),d.y=f.y+(L*_.y+M*p.y),d.z=f.z+(L*_.z+M*p.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(x/n),h.push(S/i)}}for(let x=1;x<=n;x++)for(let y=1;y<=i;y++){const S=(i+1)*(x-1)+(y-1),E=(i+1)*x+(y-1),L=(i+1)*x+y,M=(i+1)*(x-1)+y;a.push(S,E,M),a.push(E,L,M)}this.setIndex(a),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(h,2));function v(x,y,S,E,L){const M=Math.cos(x),w=Math.sin(x),P=S/y*x,B=Math.cos(P);L.x=E*(2+B)*.5*M,L.y=E*(2+B)*w*.5,L.z=E*Math.sin(P)*.5}}static fromJSON(e){return new qs(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Ys extends Ne{constructor(e=new nl(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const r=e.computeFrenetFrames(t,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new A,l=new A,c=new $;let h=new A;const d=[],u=[],f=[],g=[];p(),this.setIndex(g),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(f,2));function p(){for(let x=0;x<t;x++)m(x);m(s===!1?t:0),v(),_()}function m(x){h=e.getPointAt(x/t,h);const y=r.normals[x],S=r.binormals[x];for(let E=0;E<=i;E++){const L=E/i*Math.PI*2,M=Math.sin(L),w=-Math.cos(L);l.x=w*y.x+M*S.x,l.y=w*y.y+M*S.y,l.z=w*y.z+M*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function _(){for(let x=1;x<=t;x++)for(let y=1;y<=i;y++){const S=(i+1)*(x-1)+(y-1),E=(i+1)*x+(y-1),L=(i+1)*x+y,M=(i+1)*(x-1)+y;g.push(S,E,M),g.push(E,L,M)}}function v(){for(let x=0;x<=t;x++)for(let y=0;y<=i;y++)c.x=x/t,c.y=y/i,f.push(c.x,c.y)}}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ys(new sl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class gu extends Ne{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new A,s=new A;if(e.index!==null){const r=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],u=d.start,f=d.count;for(let g=u,p=u+f;g<p;g+=3)for(let m=0;m<3;m++){const _=a.getX(g+m),v=a.getX(g+(m+1)%3);i.fromBufferAttribute(r,_),s.fromBufferAttribute(r,v),_c(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const r=e.attributes.position;for(let a=0,l=r.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,d=3*a+(c+1)%3;i.fromBufferAttribute(r,h),s.fromBufferAttribute(r,d),_c(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new pe(t,3))}}}function _c(o,e,t){const n=`${o.x},${o.y},${o.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${o.x},${o.y},${o.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var yc=Object.freeze({__proto__:null,BoxGeometry:Nn,CapsuleGeometry:zs,CircleGeometry:Os,ConeGeometry:Bs,CylinderGeometry:di,DodecahedronGeometry:Us,EdgesGeometry:du,ExtrudeGeometry:ks,IcosahedronGeometry:Vs,LatheGeometry:qi,OctahedronGeometry:Yi,PlaneGeometry:Wi,PolyhedronGeometry:xn,RingGeometry:Gs,ShapeGeometry:Hs,SphereGeometry:Zi,TetrahedronGeometry:Ws,TorusGeometry:Xs,TorusKnotGeometry:qs,TubeGeometry:Ys,WireframeGeometry:gu});class xu extends St{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new fe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class _u extends Qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rl extends St{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=In,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yu extends rl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class vu extends St{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new fe(16777215),this.specular=new fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=In,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mu extends St{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=In,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class bu extends St{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=In,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Su extends St{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=In,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wu extends St{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new fe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=In,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tu extends Ct{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function kt(o,e,t){return al(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)}function ei(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function al(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Au(o){function e(i,s){return o[i]-o[s]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Io(o,e,t){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[r++]=o[a+l]}return i}function ol(o,e,t,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=o[i++];while(s!==void 0)}function Tx(o,e,t,n,i=30){const s=o.clone();s.name=e;const r=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){const g=c.times[f]*i;if(!(g<t||g>=n)){d.push(c.times[f]);for(let p=0;p<h;++p)u.push(c.values[f*h+p])}}d.length!==0&&(c.times=ei(d,c.times.constructor),c.values=ei(u,c.values.constructor),r.push(c))}s.tracks=r;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s}function Ax(o,e=0,t=o,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let r=0;r<i;++r){const a=t.tracks[r],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=o.tracks.find(function(_){return _.name===a.name&&_.ValueTypeName===l});if(c===void 0)continue;let h=0;const d=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);const g=a.times.length-1;let p;if(s<=a.times[0]){const _=h,v=d-h;p=kt(a.values,_,v)}else if(s>=a.times[g]){const _=g*d+h,v=_+d-h;p=kt(a.values,_,v)}else{const _=a.createInterpolant(),v=h,x=d-h;_.evaluate(s),p=kt(_.resultBuffer,v,x)}l==="quaternion"&&new Pt().fromArray(p).normalize().conjugate().toArray(p);const m=c.times.length;for(let _=0;_<m;++_){const v=_*f+u;if(l==="quaternion")Pt.multiplyQuaternionsFlat(c.values,v,p,0,c.values,v);else{const x=f-u*2;for(let y=0;y<x;++y)c.values[v+y]-=p[y]}}}return o.blendMode=ko,o}var Ex=Object.freeze({__proto__:null,arraySlice:kt,convertArray:ei,flattenJSON:ol,getKeyframeOrder:Au,isTypedArray:al,makeClipAdditive:Ax,sortedArray:Io,subclip:Tx});class Zs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}for(;n<r;){const a=n+r>>>1;e<t[a]?r=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Eu extends Zs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kn,endingEnd:Kn}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case Qn:s=e,a=2*t-n;break;case vs:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qn:r=e,l=2*n-t;break;case vs:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),p=g*g,m=p*g,_=-u*m+2*u*p-u*g,v=(1+u)*m+(-1.5-2*u)*p+(-.5+u)*g+1,x=(-1-f)*m+(1.5+f)*p+.5*g,y=f*m-f*p;for(let S=0;S!==a;++S)s[S]=_*r[h+S]+v*r[c+S]+x*r[l+S]+y*r[d+S];return s}}class ll extends Zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==a;++u)s[u]=r[c+u]*d+r[l+u]*h;return s}}class Cu extends Zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Jt{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ei(t,this.TimeBufferType),this.values=ei(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ei(e.times,Array),values:ei(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Eu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _s:t=this.InterpolantFactoryMethodDiscrete;break;case ys:t=this.InterpolantFactoryMethodLinear;break;case Ur:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _s;case this.InterpolantFactoryMethodLinear:return ys;case this.InterpolantFactoryMethodSmooth:return Ur}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=kt(n,s,r),this.values=kt(this.values,s*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(i!==void 0&&al(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=kt(this.times),t=kt(this.values),n=this.getValueSize(),i=this.getInterpolation()===Ur,s=e.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const p=t[d+g];if(p!==t[u+g]||p!==t[f+g]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];const d=a*n,u=r*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[a+c];++r}return r!==e.length?(this.times=kt(e,0,r),this.values=kt(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=kt(this.times,0),t=kt(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Jt.prototype.TimeBufferType=Float32Array;Jt.prototype.ValueBufferType=Float32Array;Jt.prototype.DefaultInterpolation=ys;class fi extends Jt{}fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=_s;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;class cl extends Jt{}cl.prototype.ValueTypeName="color";class Cs extends Jt{}Cs.prototype.ValueTypeName="number";class Lu extends Zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Pt.slerpFlat(s,0,r,c-a,r,c,l);return s}}class Ji extends Jt{InterpolantFactoryMethodLinear(e){return new Lu(this.times,this.values,this.getValueSize(),e)}}Ji.prototype.ValueTypeName="quaternion";Ji.prototype.DefaultInterpolation=ys;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;class pi extends Jt{}pi.prototype.ValueTypeName="string";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=_s;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ls extends Jt{}Ls.prototype.ValueTypeName="vector";class Ps{constructor(e,t=-1,n,i=Jr){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=zt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,a=n.length;r!==a;++r)t.push(Lx(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(Jt.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=Au(l);l=Io(l,1,h),c=Io(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new Cs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,g,p){if(f.length!==0){const m=[],_=[];ol(f,m,_,g),m.length!==0&&p.push(new d(u,m,_))}},i=[],s=e.name||"default",r=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let p=0;p<u[g].morphTargets.length;p++)f[u[g].morphTargets[p]]=-1;for(const p in f){const m=[],_=[];for(let v=0;v!==u[g].morphTargets.length;++v){const x=u[g];m.push(x.time),_.push(x.morphTarget===p?1:0)}i.push(new Cs(".morphTargetInfluence["+p+"]",m,_))}l=f.length*r}else{const f=".bones["+t[d].name+"]";n(Ls,f+".position",u,"pos",i),n(Ji,f+".quaternion",u,"rot",i),n(Ls,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Cx(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Cs;case"vector":case"vector2":case"vector3":case"vector4":return Ls;case"color":return cl;case"quaternion":return Ji;case"bool":case"boolean":return fi;case"string":return pi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Lx(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Cx(o.type);if(o.times===void 0){const t=[],n=[];ol(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const ci={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class hl{constructor(e,t,n){const i=this;let s=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,a),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Pu=new hl;class Ot{constructor(e){this.manager=e!==void 0?e:Pu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const ln={};class Px extends Error{constructor(e,t){super(e),this.response=t}}class mn extends Ot{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ci.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ln[e]!==void 0){ln[e].push({onLoad:t,onProgress:n,onError:i});return}ln[e]=[],ln[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ln[e],d=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=u?parseInt(u):0,g=f!==0;let p=0;const m=new ReadableStream({start(_){v();function v(){d.read().then(({done:x,value:y})=>{if(x)_.close();else{p+=y.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:f});for(let E=0,L=h.length;E<L;E++){const M=h[E];M.onProgress&&M.onProgress(S)}_.enqueue(y),v()}})}}});return new Response(m)}else throw new Px(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ci.add(e,c);const h=ln[e];delete ln[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=ln[e];if(h===void 0)throw this.manager.itemError(e),c;delete ln[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Rx extends Ot{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new mn(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Ps.parse(e[n]);t.push(i)}return t}}class Ix extends Ot{constructor(e){super(e)}load(e,t,n,i){const s=this,r=[],a=new Qo,l=new mn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function h(d){l.load(e[d],function(u){const f=s.parse(u,!0);r[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(a.minFilter=st),a.image=r,a.format=f.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let d=0,u=e.length;d<u;++d)h(d);else l.load(e,function(d){const u=s.parse(d,!0);if(u.isCubemap){const f=u.mipmaps.length/u.mipmapCount;for(let g=0;g<f;g++){r[g]={mipmaps:[]};for(let p=0;p<u.mipmapCount;p++)r[g].mipmaps.push(u.mipmaps[g*u.mipmapCount+p]),r[g].format=u.format,r[g].width=u.width,r[g].height=u.height}a.image=r}else a.image.width=u.width,a.image.height=u.height,a.mipmaps=u.mipmaps;u.mipmapCount===1&&(a.minFilter=st),a.format=u.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}}class Rs extends Ot{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=ci.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a=Ss("img");function l(){h(),ci.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){h(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Dx extends Ot{constructor(e){super(e)}load(e,t,n,i){const s=new Fs,r=new Rs(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let a=0;function l(c){r.load(e[c],function(h){s.images[c]=h,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class Nx extends Ot{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new Bi,a=new mn(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){const c=s.parse(l);c&&(c.image!==void 0?r.image=c.image:c.data!==void 0&&(r.image.width=c.width,r.image.height=c.height,r.image.data=c.data),r.wrapS=c.wrapS!==void 0?c.wrapS:bt,r.wrapT=c.wrapT!==void 0?c.wrapT:bt,r.magFilter=c.magFilter!==void 0?c.magFilter:st,r.minFilter=c.minFilter!==void 0?c.minFilter:st,r.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(r.encoding=c.encoding),c.flipY!==void 0&&(r.flipY=c.flipY),c.format!==void 0&&(r.format=c.format),c.type!==void 0&&(r.type=c.type),c.mipmaps!==void 0&&(r.mipmaps=c.mipmaps,r.minFilter=Cn),c.mipmapCount===1&&(r.minFilter=st),c.generateMipmaps!==void 0&&(r.generateMipmaps=c.generateMipmaps),r.needsUpdate=!0,t&&t(r,c))},n,i),r}}class Fx extends Ot{constructor(e){super(e)}load(e,t,n,i){const s=new at,r=new Rs(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Fn extends We{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Ru extends Fn{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Xa=new Ie,vc=new A,Mc=new A;class ul{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jr,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;vc.setFromMatrixPosition(e.matrixWorld),t.position.copy(vc),Mc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mc),t.updateMatrixWorld(),Xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zx extends ul{constructor(){super(new xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=bs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Iu extends Fn{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new zx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const bc=new Ie,ls=new A,qa=new A;class Ox extends ul{constructor(){super(new xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ls.setFromMatrixPosition(e.matrixWorld),n.position.copy(ls),qa.copy(n.position),qa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(qa),n.updateMatrixWorld(),i.makeTranslation(-ls.x,-ls.y,-ls.z),bc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc)}}class Du extends Fn{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ox}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Bx extends ul{constructor(){super(new ea(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nu extends Fn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new Bx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Fu extends Fn{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class zu extends Fn{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Ou{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new A)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,r=this.coefficients;return t.copy(r[0]).multiplyScalar(.282095),t.addScaledVector(r[1],.488603*i),t.addScaledVector(r[2],.488603*s),t.addScaledVector(r[3],.488603*n),t.addScaledVector(r[4],1.092548*(n*i)),t.addScaledVector(r[5],1.092548*(i*s)),t.addScaledVector(r[6],.315392*(3*s*s-1)),t.addScaledVector(r[7],1.092548*(n*s)),t.addScaledVector(r[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,r=this.coefficients;return t.copy(r[0]).multiplyScalar(.886227),t.addScaledVector(r[1],2*.511664*i),t.addScaledVector(r[2],2*.511664*s),t.addScaledVector(r[3],2*.511664*n),t.addScaledVector(r[4],2*.429043*n*i),t.addScaledVector(r[5],2*.429043*i*s),t.addScaledVector(r[6],.743125*s*s-.247708),t.addScaledVector(r[7],2*.429043*n*s),t.addScaledVector(r[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class ca extends Fn{constructor(e=new Ou,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class ha extends Ot{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,r=new mn(s.manager);r.setPath(s.path),r.setRequestHeader(s.requestHeader),r.setWithCredentials(s.withCredentials),r.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=ha.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==1&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const r=e.uniforms[s];switch(i.uniforms[s]={},r.type){case"t":i.uniforms[s].value=n(r.value);break;case"c":i.uniforms[s].value=new fe().setHex(r.value);break;case"v2":i.uniforms[s].value=new $().fromArray(r.value);break;case"v3":i.uniforms[s].value=new A().fromArray(r.value);break;case"v4":i.uniforms[s].value=new Ye().fromArray(r.value);break;case"m3":i.uniforms[s].value=new Et().fromArray(r.value);break;case"m4":i.uniforms[s].value=new Ie().fromArray(r.value);break;default:i.uniforms[s].value=r.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new $().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new $().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:xu,SpriteMaterial:Jo,RawShaderMaterial:_u,ShaderMaterial:Qt,PointsMaterial:Ko,MeshPhysicalMaterial:yu,MeshStandardMaterial:rl,MeshPhongMaterial:vu,MeshToonMaterial:Mu,MeshNormalMaterial:bu,MeshLambertMaterial:Su,MeshDepthMaterial:Yo,MeshDistanceMaterial:Zo,MeshBasicMaterial:Dn,MeshMatcapMaterial:wu,LineDashedMaterial:Tu,LineBasicMaterial:Ct,Material:St};return new t[e]}}class Do{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Bu extends Ne{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Uu extends Ot{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new mn(s.manager);r.setPath(s.path),r.setRequestHeader(s.requestHeader),r.setWithCredentials(s.withCredentials),r.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,g){if(t[g]!==void 0)return t[g];const m=f.interleavedBuffers[g],_=s(f,m.buffer),v=Ni(m.type,_),x=new sa(v,m.stride);return x.uuid=m.uuid,t[g]=x,x}function s(f,g){if(n[g]!==void 0)return n[g];const m=f.arrayBuffers[g],_=new Uint32Array(m).buffer;return n[g]=_,_}const r=e.isInstancedBufferGeometry?new Bu:new Ne,a=e.data.index;if(a!==void 0){const f=Ni(a.type,a.array);r.setIndex(new Je(f,1))}const l=e.data.attributes;for(const f in l){const g=l[f];let p;if(g.isInterleavedBufferAttribute){const m=i(e.data,g.data);p=new oi(m,g.itemSize,g.offset,g.normalized)}else{const m=Ni(g.type,g.array),_=g.isInstancedBufferAttribute?Gi:Je;p=new _(m,g.itemSize,g.normalized)}g.name!==void 0&&(p.name=g.name),g.usage!==void 0&&p.setUsage(g.usage),g.updateRange!==void 0&&(p.updateRange.offset=g.updateRange.offset,p.updateRange.count=g.updateRange.count),r.setAttribute(f,p)}const c=e.data.morphAttributes;if(c)for(const f in c){const g=c[f],p=[];for(let m=0,_=g.length;m<_;m++){const v=g[m];let x;if(v.isInterleavedBufferAttribute){const y=i(e.data,v.data);x=new oi(y,v.itemSize,v.offset,v.normalized)}else{const y=Ni(v.type,v.array);x=new Je(y,v.itemSize,v.normalized)}v.name!==void 0&&(x.name=v.name),p.push(x)}r.morphAttributes[f]=p}e.data.morphTargetsRelative&&(r.morphTargetsRelative=!0);const d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let f=0,g=d.length;f!==g;++f){const p=d[f];r.addGroup(p.start,p.count,p.materialIndex)}const u=e.data.boundingSphere;if(u!==void 0){const f=new A;u.center!==void 0&&f.fromArray(u.center),r.boundingSphere=new ui(f,u.radius)}return e.name&&(r.name=e.name),e.userData&&(r.userData=e.userData),r}}class Ux extends Ot{constructor(e){super(e)}load(e,t,n,i){const s=this,r=this.path===""?Do.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;const a=new mn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(d){i!==void 0&&i(d),console.error("THREE:ObjectLoader: Can't parse "+e+".",d.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Do.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new mn(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const r=await s.loadAsync(e,t),a=JSON.parse(r),l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),r=this.parseImages(e.images,function(){t!==void 0&&t(c)}),a=this.parseTextures(e.textures,r),l=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,s,l,a,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),t!==void 0){let d=!1;for(const u in r)if(r[u].data instanceof HTMLImageElement){d=!0;break}d===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),r=this.parseTextures(e.textures,s),a=this.parseMaterials(e.materials,r),l=this.parseObject(e.object,i,a,r,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new ri().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,r=e.length;s<r;s++){const a=new ra().fromJSON(e[s],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new Uu;for(let s=0,r=e.length;s<r;s++){let a;const l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in yc?a=yc[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),a.isBufferGeometry===!0&&l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new ha;s.setTextures(t);for(let r=0,a=e.length;r<a;r++){const l=e[r];n[l.uuid]===void 0&&(n[l.uuid]=s.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=Ps.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function r(l){return n.manager.itemStart(l),s.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return r(h)}else return l.data?{data:Ni(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new hl(t);s=new Rs(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const d=e[c],u=d.url;if(Array.isArray(u)){const f=[];for(let g=0,p=u.length;g<p;g++){const m=u[g],_=a(m);_!==null&&(_ instanceof HTMLImageElement?f.push(_):f.push(new Bi(_.data,_.width,_.height)))}i[d.uuid]=new jn(f)}else{const f=a(d.url);i[d.uuid]=new jn(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(r){if(typeof r=="string"){const a=r,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(l)}else return r.data?{data:Ni(r.type,r.data),width:r.width,height:r.height}:null}if(e!==void 0&&e.length>0){i=new Rs(this.manager),i.setCrossOrigin(this.crossOrigin);for(let r=0,a=e.length;r<a;r++){const l=e[r],c=l.url;if(Array.isArray(c)){const h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d],g=await s(f);g!==null&&(g instanceof HTMLImageElement?h.push(g):h.push(new Bi(g.data,g.width,g.height)))}n[l.uuid]=new jn(h)}else{const h=await s(l.url);n[l.uuid]=new jn(h)}}}return n}parseTextures(e,t){function n(s,r){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),r[s])}const i={};if(e!==void 0)for(let s=0,r=e.length;s<r;s++){const a=e[s];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const l=t[a.image],c=l.data;let h;Array.isArray(c)?(h=new Fs,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new Bi:h=new at,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,kx)),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],Sc),h.wrapT=n(a.wrap[1],Sc)),a.format!==void 0&&(h.format=a.format),a.type!==void 0&&(h.type=a.type),a.encoding!==void 0&&(h.encoding=a.encoding),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,wc)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,wc)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(e,t,n,i,s){let r;function a(u){return t[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",u),t[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){const f=[];for(let g=0,p=u.length;g<p;g++){const m=u[g];n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),f.push(n[m])}return f}return n[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",u),n[u]}}function c(u){return i[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",u),i[u]}let h,d;switch(e.type){case"Scene":r=new jh,e.background!==void 0&&(Number.isInteger(e.background)?r.background=new fe(e.background):r.background=c(e.background)),e.environment!==void 0&&(r.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?r.fog=new ia(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(r.fog=new na(e.fog.color,e.fog.density))),e.backgroundBlurriness!==void 0&&(r.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(r.backgroundIntensity=e.backgroundIntensity);break;case"PerspectiveCamera":r=new xt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(r.focus=e.focus),e.zoom!==void 0&&(r.zoom=e.zoom),e.filmGauge!==void 0&&(r.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(r.filmOffset=e.filmOffset),e.view!==void 0&&(r.view=Object.assign({},e.view));break;case"OrthographicCamera":r=new ea(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(r.zoom=e.zoom),e.view!==void 0&&(r.view=Object.assign({},e.view));break;case"AmbientLight":r=new Fu(e.color,e.intensity);break;case"DirectionalLight":r=new Nu(e.color,e.intensity);break;case"PointLight":r=new Du(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":r=new zu(e.color,e.intensity,e.width,e.height);break;case"SpotLight":r=new Iu(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":r=new Ru(e.color,e.groundColor,e.intensity);break;case"LightProbe":r=new ca().fromJSON(e);break;case"SkinnedMesh":h=a(e.geometry),d=l(e.material),r=new iu(h,d),e.bindMode!==void 0&&(r.bindMode=e.bindMode),e.bindMatrix!==void 0&&r.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(r.skeleton=e.skeleton);break;case"Mesh":h=a(e.geometry),d=l(e.material),r=new _t(h,d);break;case"InstancedMesh":h=a(e.geometry),d=l(e.material);const u=e.count,f=e.instanceMatrix,g=e.instanceColor;r=new su(h,d,u),r.instanceMatrix=new Gi(new Float32Array(f.array),16),g!==void 0&&(r.instanceColor=new Gi(new Float32Array(g.array),g.itemSize));break;case"LOD":r=new nu;break;case"Line":r=new Rn(a(e.geometry),l(e.material));break;case"LineLoop":r=new ru(a(e.geometry),l(e.material));break;case"LineSegments":r=new jt(a(e.geometry),l(e.material));break;case"PointCloud":case"Points":r=new au(a(e.geometry),l(e.material));break;case"Sprite":r=new tu(l(e.material));break;case"Group":r=new zi;break;case"Bone":r=new $o;break;default:r=new We}if(r.uuid=e.uuid,e.name!==void 0&&(r.name=e.name),e.matrix!==void 0?(r.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(r.matrixAutoUpdate=e.matrixAutoUpdate),r.matrixAutoUpdate&&r.matrix.decompose(r.position,r.quaternion,r.scale)):(e.position!==void 0&&r.position.fromArray(e.position),e.rotation!==void 0&&r.rotation.fromArray(e.rotation),e.quaternion!==void 0&&r.quaternion.fromArray(e.quaternion),e.scale!==void 0&&r.scale.fromArray(e.scale)),e.castShadow!==void 0&&(r.castShadow=e.castShadow),e.receiveShadow!==void 0&&(r.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(r.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(r.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(r.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&r.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(r.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(r.visible=e.visible),e.frustumCulled!==void 0&&(r.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(r.renderOrder=e.renderOrder),e.userData!==void 0&&(r.userData=e.userData),e.layers!==void 0&&(r.layers.mask=e.layers),e.children!==void 0){const u=e.children;for(let f=0;f<u.length;f++)r.add(this.parseObject(u[f],t,n,i,s))}if(e.animations!==void 0){const u=e.animations;for(let f=0;f<u.length;f++){const g=u[f];r.animations.push(s[g])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(r.autoUpdate=e.autoUpdate);const u=e.levels;for(let f=0;f<u.length;f++){const g=u[f],p=r.getObjectByProperty("uuid",g.object);p!==void 0&&r.addLevel(p,g.distance,g.hysteresis)}}return r}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const kx={UVMapping:Zr,CubeReflectionMapping:An,CubeRefractionMapping:En,EquirectangularReflectionMapping:ps,EquirectangularRefractionMapping:ms,CubeUVReflectionMapping:Hi},Sc={RepeatWrapping:gs,ClampToEdgeWrapping:bt,MirroredRepeatWrapping:xs},wc={NearestFilter:it,NearestMipmapNearestFilter:Wr,NearestMipmapLinearFilter:hs,LinearFilter:st,LinearMipmapNearestFilter:Bo,LinearMipmapLinearFilter:Cn};class Vx extends Ot{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=ci.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){ci.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}let Er;class dl{static getContext(){return Er===void 0&&(Er=new(window.AudioContext||window.webkitAudioContext)),Er}static setContext(e){Er=e}}class Gx extends Ot{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new mn(this.manager);r.setResponseType("arraybuffer"),r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(a){try{const l=a.slice(0);dl.getContext().decodeAudioData(l,function(h){t(h)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}class Hx extends ca{constructor(e,t,n=1){super(void 0,n),this.isHemisphereLightProbe=!0;const i=new fe().set(e),s=new fe().set(t),r=new A(i.r,i.g,i.b),a=new A(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(r).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(r).sub(a).multiplyScalar(c)}}class Wx extends ca{constructor(e,t=1){super(void 0,t),this.isAmbientLightProbe=!0;const n=new fe().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}const Tc=new Ie,Ac=new Ie,Hn=new Ie;class Xx{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new xt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new xt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Hn.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,r=t.near*Math.tan(ii*t.fov*.5)/t.zoom;let a,l;Ac.elements[12]=-i,Tc.elements[12]=i,a=-r*t.aspect+s,l=r*t.aspect+s,Hn.elements[0]=2*t.near/(l-a),Hn.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(Hn),a=-r*t.aspect-s,l=r*t.aspect-s,Hn.elements[0]=2*t.near/(l-a),Hn.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(Hn)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Ac),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Tc)}}class ku{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ec(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ec();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ec(){return(typeof performance>"u"?Date:performance).now()}const Wn=new A,Cc=new Pt,qx=new A,Xn=new A;class Yx extends We{constructor(){super(),this.type="AudioListener",this.context=dl.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new ku}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Wn,Cc,qx),Xn.set(0,0,-1).applyQuaternion(Cc),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Wn.x,i),t.positionY.linearRampToValueAtTime(Wn.y,i),t.positionZ.linearRampToValueAtTime(Wn.z,i),t.forwardX.linearRampToValueAtTime(Xn.x,i),t.forwardY.linearRampToValueAtTime(Xn.y,i),t.forwardZ.linearRampToValueAtTime(Xn.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(Wn.x,Wn.y,Wn.z),t.setOrientation(Xn.x,Xn.y,Xn.z,n.x,n.y,n.z)}}class Vu extends We{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const qn=new A,Lc=new Pt,Zx=new A,Yn=new A;class Jx extends Vu{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(qn,Lc,Zx),Yn.set(0,0,1).applyQuaternion(Lc);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(qn.x,n),t.positionY.linearRampToValueAtTime(qn.y,n),t.positionZ.linearRampToValueAtTime(qn.z,n),t.orientationX.linearRampToValueAtTime(Yn.x,n),t.orientationY.linearRampToValueAtTime(Yn.y,n),t.orientationZ.linearRampToValueAtTime(Yn.z,n)}else t.setPosition(qn.x,qn.y,qn.z),t.setOrientation(Yn.x,Yn.y,Yn.z)}}class $x{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Gu{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,r;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let r=this.cumulativeWeight;if(r===0){for(let a=0;a!==i;++a)n[s+a]=n[a];r=t}else{r+=t;const a=t/r;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,r=i;s!==r;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let r=0;r!==s;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){Pt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const r=this._workIndex*s;Pt.multiplyQuaternionsFlat(e,r,e,t,e,n),Pt.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,s){const r=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*r+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let r=0;r!==s;++r){const a=t+r;e[a]=e[a]+e[n+r]*i}}}const fl="\\[\\]\\.:\\/",Kx=new RegExp("["+fl+"]","g"),pl="[^"+fl+"]",Qx="[^"+fl.replace("\\.","")+"]",jx=/((?:WC+[\/:])*)/.source.replace("WC",pl),e_=/(WCOD+)?/.source.replace("WCOD",Qx),t_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pl),n_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pl),i_=new RegExp("^"+jx+e_+t_+n_+"$"),s_=["material","materials","bones","map"];class r_{constructor(e,t,n){const i=n||Ve.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ve{constructor(e,t,n){this.path=t,this.parsedPath=n||Ve.parseTrackName(t),this.node=Ve.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ve.Composite(e,t,n):new Ve(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Kx,"")}static parseTrackName(e){const t=i_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);s_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ve.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ve.Composite=r_;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class a_{constructor(){this.isAnimationObjectGroup=!0,this.uuid=zt(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,r=s.length;let a,l=e.length,c=this.nCachedObjects_;for(let h=0,d=arguments.length;h!==d;++h){const u=arguments[h],f=u.uuid;let g=t[f];if(g===void 0){g=l++,t[f]=g,e.push(u);for(let p=0,m=r;p!==m;++p)s[p].push(new Ve(u,n[p],i[p]))}else if(g<c){a=e[g];const p=--c,m=e[p];t[m.uuid]=g,e[g]=m,t[f]=p,e[p]=u;for(let _=0,v=r;_!==v;++_){const x=s[_],y=x[p];let S=x[g];x[g]=y,S===void 0&&(S=new Ve(u,n[_],i[_])),x[p]=S}}else e[g]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let r=0,a=arguments.length;r!==a;++r){const l=arguments[r],c=l.uuid,h=t[c];if(h!==void 0&&h>=s){const d=s++,u=e[d];t[u.uuid]=h,e[h]=u,t[c]=d,e[d]=l;for(let f=0,g=i;f!==g;++f){const p=n[f],m=p[d],_=p[h];p[h]=m,p[d]=_}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,r=e.length;for(let a=0,l=arguments.length;a!==l;++a){const c=arguments[a],h=c.uuid,d=t[h];if(d!==void 0)if(delete t[h],d<s){const u=--s,f=e[u],g=--r,p=e[g];t[f.uuid]=d,e[d]=f,t[p.uuid]=u,e[u]=p,e.pop();for(let m=0,_=i;m!==_;++m){const v=n[m],x=v[u],y=v[g];v[d]=x,v[u]=y,v.pop()}}else{const u=--r,f=e[u];u>0&&(t[f.uuid]=d),e[d]=f,e.pop();for(let g=0,p=i;g!==p;++g){const m=n[g];m[d]=m[u],m.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const r=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,d=new Array(c);i=s.length,n[e]=i,r.push(e),a.push(t),s.push(d);for(let u=h,f=l.length;u!==f;++u){const g=l[u];d[u]=new Ve(g,e,t)}return d}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,r=this._bindings,a=r.length-1,l=r[a],c=e[a];t[c]=n,r[n]=l,r.pop(),s[n]=s[a],s.pop(),i[n]=i[a],i.pop()}}}class o_{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,r=s.length,a=new Array(r),l={endingStart:Kn,endingEnd:Kn};for(let c=0;c!==r;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ph,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,r=s/i,a=i/s;e.warp(1,r,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,r=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/r,c[1]=t/r,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const r=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ko:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(r),c[h].accumulateAdditive(a);break;case Jr:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(r),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const r=n===Rh;if(e===0)return s===-1?i:r&&(s&1)===1?t-i:i;if(n===Lh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(r&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Qn,i.endingEnd=Qn):(e?i.endingStart=this.zeroSlopeAtStart?Qn:Kn:i.endingStart=vs,t?i.endingEnd=this.zeroSlopeAtEnd?Qn:Kn:i.endingEnd=vs)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);const a=r.parameterPositions,l=r.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const l_=new Float32Array(1);class c_ extends gn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,r=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==s;++d){const u=i[d],f=u.name;let g=h[f];if(g!==void 0)++g.referenceCount,r[d]=g;else{if(g=r[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const p=t&&t._propertyBindings[d].binding.parsedPath;g=new Gu(Ve.create(n,f,p),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),r[d]=g}a[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{const a=r.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,r=this._actionsByClip,a=r[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const d=a.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let r=i[t];r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,a=r[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete r[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new ll(new Float32Array(2),new Float32Array(2),1,l_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let r=typeof e=="string"?Ps.findByName(i,e):e;const a=r!==null?r.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(r!==null?n=r.blendMode:n=Jr),l!==void 0){const d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;const h=new o_(this,r,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Ps.findByName(n,e):e,r=s?s.uuid:e,a=this._actionsByClip[r];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,r);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const r=s.knownActions;for(let a=0,l=r.length;a!==l;++a){const c=r[a];this._deactivateAction(c);const h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const r in n){const a=n[r].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const r in s){const a=s[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class ml{constructor(e){this.value=e}clone(){return new ml(this.value.clone===void 0?this.value:this.value.clone())}}let h_=0;class u_ extends gn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:h_++}),this.name="",this.usage=Ms,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++)this.uniforms.push(t[n].clone());return this}clone(){return new this.constructor().copy(this)}}class d_ extends sa{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class f_{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class p_{constructor(e,t,n=0,i=1/0){this.ray=new Ds(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return No(e,this,n,t),n.sort(Pc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)No(e[i],this,n,t);return n.sort(Pc),n}}function Pc(o,e){return o.distance-e.distance}function No(o,e,t,n){if(o.layers.test(e.layers)&&o.raycast(e,t),n===!0){const i=o.children;for(let s=0,r=i.length;s<r;s++)No(i[s],e,t,!0)}}class m_{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class g_{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const Rc=new $;class x_{constructor(e=new $(1/0,1/0),t=new $(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Rc.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ic=new A,Cr=new A;class __{constructor(e=new A,t=new A){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ic.subVectors(e,this.start),Cr.subVectors(this.end,this.start);const n=Cr.dot(Cr);let s=Cr.dot(Ic)/n;return t&&(s=rt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Dc=new A;class y_ extends We{constructor(e,t){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new Ne,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let r=0,a=1,l=32;r<l;r++,a++){const c=r/l*Math.PI*2,h=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new pe(i,3));const s=new Ct({fog:!1,toneMapped:!1});this.cone=new jt(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Dc.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Dc),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const bn=new A,Lr=new Ie,Ya=new Ie;class v_ extends jt{constructor(e){const t=Hu(e),n=new Ne,i=[],s=[],r=new fe(0,0,1),a=new fe(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(r.r,r.g,r.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new pe(i,3)),n.setAttribute("color",new pe(s,3));const l=new Ct({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Ya.copy(this.root.matrixWorld).invert();for(let s=0,r=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(Lr.multiplyMatrices(Ya,a.matrixWorld),bn.setFromMatrixPosition(Lr),i.setXYZ(r,bn.x,bn.y,bn.z),Lr.multiplyMatrices(Ya,a.parent.matrixWorld),bn.setFromMatrixPosition(Lr),i.setXYZ(r+1,bn.x,bn.y,bn.z),r+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Hu(o){const e=[];o.isBone===!0&&e.push(o);for(let t=0;t<o.children.length;t++)e.push.apply(e,Hu(o.children[t]));return e}class M_ extends _t{constructor(e,t,n){const i=new Zi(t,4,2),s=new Dn({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const b_=new A,Nc=new fe,Fc=new fe;class S_ extends We{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Yi(t);i.rotateY(Math.PI*.5),this.material=new Dn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),r=new Float32Array(s.count*3);i.setAttribute("color",new Je(r,3)),this.add(new _t(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Nc.copy(this.light.color),Fc.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?Nc:Fc;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(b_.setFromMatrixPosition(this.light.matrixWorld).negate())}}class w_ extends jt{constructor(e=10,t=10,n=4473924,i=8947848){n=new fe(n),i=new fe(i);const s=t/2,r=e/t,a=e/2,l=[],c=[];for(let u=0,f=0,g=-a;u<=t;u++,g+=r){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const p=u===s?n:i;p.toArray(c,f),f+=3,p.toArray(c,f),f+=3,p.toArray(c,f),f+=3,p.toArray(c,f),f+=3}const h=new Ne;h.setAttribute("position",new pe(l,3)),h.setAttribute("color",new pe(c,3));const d=new Ct({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class T_ extends jt{constructor(e=10,t=16,n=8,i=64,s=4473924,r=8947848){s=new fe(s),r=new fe(r);const a=[],l=[];if(t>1)for(let d=0;d<t;d++){const u=d/t*(Math.PI*2),f=Math.sin(u)*e,g=Math.cos(u)*e;a.push(0,0,0),a.push(f,0,g);const p=d&1?s:r;l.push(p.r,p.g,p.b),l.push(p.r,p.g,p.b)}for(let d=0;d<n;d++){const u=d&1?s:r,f=e-e/n*d;for(let g=0;g<i;g++){let p=g/i*(Math.PI*2),m=Math.sin(p)*f,_=Math.cos(p)*f;a.push(m,0,_),l.push(u.r,u.g,u.b),p=(g+1)/i*(Math.PI*2),m=Math.sin(p)*f,_=Math.cos(p)*f,a.push(m,0,_),l.push(u.r,u.g,u.b)}}const c=new Ne;c.setAttribute("position",new pe(a,3)),c.setAttribute("color",new pe(l,3));const h=new Ct({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const zc=new A,Pr=new A,Oc=new A;class A_ extends We{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new Ne;i.setAttribute("position",new pe([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new Ct({fog:!1,toneMapped:!1});this.lightPlane=new Rn(i,s),this.add(this.lightPlane),i=new Ne,i.setAttribute("position",new pe([0,0,0,0,0,1],3)),this.targetLine=new Rn(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),zc.setFromMatrixPosition(this.light.matrixWorld),Pr.setFromMatrixPosition(this.light.target.matrixWorld),Oc.subVectors(Pr,zc),this.lightPlane.lookAt(Pr),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Pr),this.targetLine.scale.z=Oc.length()}}const Rr=new A,tt=new Qr;class E_ extends jt{constructor(e){const t=new Ne,n=new Ct({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],r={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(g,p){l(g),l(p)}function l(g){i.push(0,0,0),s.push(0,0,0),r[g]===void 0&&(r[g]=[]),r[g].push(i.length/3-1)}t.setAttribute("position",new pe(i,3)),t.setAttribute("color",new pe(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=r,this.update();const c=new fe(16755200),h=new fe(16711680),d=new fe(43775),u=new fe(16777215),f=new fe(3355443);this.setColors(c,h,d,u,f)}setColors(e,t,n,i,s){const a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;tt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),nt("c",t,e,tt,0,0,-1),nt("t",t,e,tt,0,0,1),nt("n1",t,e,tt,-n,-i,-1),nt("n2",t,e,tt,n,-i,-1),nt("n3",t,e,tt,-n,i,-1),nt("n4",t,e,tt,n,i,-1),nt("f1",t,e,tt,-n,-i,1),nt("f2",t,e,tt,n,-i,1),nt("f3",t,e,tt,-n,i,1),nt("f4",t,e,tt,n,i,1),nt("u1",t,e,tt,n*.7,i*1.1,-1),nt("u2",t,e,tt,-n*.7,i*1.1,-1),nt("u3",t,e,tt,0,i*2,-1),nt("cf1",t,e,tt,-n,0,1),nt("cf2",t,e,tt,n,0,1),nt("cf3",t,e,tt,0,-i,1),nt("cf4",t,e,tt,0,i,1),nt("cn1",t,e,tt,-n,0,-1),nt("cn2",t,e,tt,n,0,-1),nt("cn3",t,e,tt,0,-i,-1),nt("cn4",t,e,tt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function nt(o,e,t,n,i,s,r){Rr.set(i,s,r).unproject(n);const a=e[o];if(a!==void 0){const l=t.getAttribute("position");for(let c=0,h=a.length;c<h;c++)l.setXYZ(a[c],Rr.x,Rr.y,Rr.z)}}const Ir=new hi;class C_ extends jt{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new Ne;s.setIndex(new Je(n,1)),s.setAttribute("position",new Je(i,3)),super(s,new Ct({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Ir.setFromObject(this.object),Ir.isEmpty())return;const t=Ir.min,n=Ir.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class L_ extends jt{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new Ne;s.setIndex(new Je(n,1)),s.setAttribute("position",new pe(i,3)),super(s,new Ct({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class P_ extends Rn{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],r=new Ne;r.setAttribute("position",new pe(s,3)),r.computeBoundingSphere(),super(r,new Ct({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Ne;l.setAttribute("position",new pe(a,3)),l.computeBoundingSphere(),this.add(new _t(l,new Dn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Bc=new A;let Dr,Za;class R_ extends We{constructor(e=new A(0,0,1),t=new A(0,0,0),n=1,i=16776960,s=n*.2,r=s*.2){super(),this.type="ArrowHelper",Dr===void 0&&(Dr=new Ne,Dr.setAttribute("position",new pe([0,0,0,0,1,0],3)),Za=new di(0,.5,1,5,1),Za.translate(0,-.5,0)),this.position.copy(t),this.line=new Rn(Dr,new Ct({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new _t(Za,new Dn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,r)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Bc.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Bc,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class I_ extends jt{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Ne;i.setAttribute("position",new pe(t,3)),i.setAttribute("color",new pe(n,3));const s=new Ct({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new fe,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class D_{constructor(){this.type="ShapePath",this.color=new fe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ws,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,r){return this.currentPath.bezierCurveTo(e,t,n,i,s,r),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const v=[];for(let x=0,y=_.length;x<y;x++){const S=_[x],E=new ri;E.curves=S.curves,v.push(E)}return v}function n(_,v){const x=v.length;let y=!1;for(let S=x-1,E=0;E<x;S=E++){let L=v[S],M=v[E],w=M.x-L.x,P=M.y-L.y;if(Math.abs(P)>Number.EPSILON){if(P<0&&(L=v[E],w=-w,M=v[S],P=-P),_.y<L.y||_.y>M.y)continue;if(_.y===L.y){if(_.x===L.x)return!0}else{const B=P*(_.x-L.x)-w*(_.y-L.y);if(B===0)return!0;if(B<0)continue;y=!y}}else{if(_.y!==L.y)continue;if(M.x<=_.x&&_.x<=L.x||L.x<=_.x&&_.x<=M.x)return!0}}return y}const i=Kt.isClockWise,s=this.subPaths;if(s.length===0)return[];let r,a,l;const c=[];if(s.length===1)return a=s[0],l=new ri,l.curves=a.curves,c.push(l),c;let h=!i(s[0].getPoints());h=e?!h:h;const d=[],u=[];let f=[],g=0,p;u[g]=void 0,f[g]=[];for(let _=0,v=s.length;_<v;_++)a=s[_],p=a.getPoints(),r=i(p),r=e?!r:r,r?(!h&&u[g]&&g++,u[g]={s:new ri,p},u[g].s.curves=a.curves,h&&g++,f[g]=[]):f[g].push({h:a,p:p[0]});if(!u[0])return t(s);if(u.length>1){let _=!1,v=0;for(let x=0,y=u.length;x<y;x++)d[x]=[];for(let x=0,y=u.length;x<y;x++){const S=f[x];for(let E=0;E<S.length;E++){const L=S[E];let M=!0;for(let w=0;w<u.length;w++)n(L.p,u[w].p)&&(x!==w&&v++,M?(M=!1,d[w].push(L)):_=!0);M&&d[x].push(L)}}v>0&&_===!1&&(f=d)}let m;for(let _=0,v=u.length;_<v;_++){l=u[_].s,c.push(l),m=f[_];for(let x=0,y=m.length;x<y;x++)l.holes.push(m[x].h)}return c}}const cn=N_();function N_(){const o=new ArrayBuffer(4),e=new Float32Array(o),t=new Uint32Array(o),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),r=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)r[l]=l<<23;r[31]=1199570944,r[32]=2147483648;for(let l=33;l<63;++l)r[l]=2147483648+(l-32<<23);r[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:r,offsetTable:a}}function F_(o){Math.abs(o)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),o=rt(o,-65504,65504),cn.floatView[0]=o;const e=cn.uint32View[0],t=e>>23&511;return cn.baseTable[t]+((e&8388607)>>cn.shiftTable[t])}function z_(o){const e=o>>10;return cn.uint32View[0]=cn.mantissaTable[cn.offsetTable[e]+(o&1023)]+cn.exponentTable[e],cn.floatView[0]}var O_=Object.freeze({__proto__:null,fromHalfFloat:z_,toHalfFloat:F_});class B_ extends Nn{constructor(e,t,n,i,s,r){console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."),super(e,t,n,i,s,r)}}class U_ extends zs{constructor(e,t,n,i){console.warn("THREE.CapsuleBufferGeometry has been renamed to THREE.CapsuleGeometry."),super(e,t,n,i)}}class k_ extends Os{constructor(e,t,n,i){console.warn("THREE.CircleBufferGeometry has been renamed to THREE.CircleGeometry."),super(e,t,n,i)}}class V_ extends Bs{constructor(e,t,n,i,s,r,a){console.warn("THREE.ConeBufferGeometry has been renamed to THREE.ConeGeometry."),super(e,t,n,i,s,r,a)}}class G_ extends di{constructor(e,t,n,i,s,r,a,l){console.warn("THREE.CylinderBufferGeometry has been renamed to THREE.CylinderGeometry."),super(e,t,n,i,s,r,a,l)}}class H_ extends Us{constructor(e,t){console.warn("THREE.DodecahedronBufferGeometry has been renamed to THREE.DodecahedronGeometry."),super(e,t)}}class W_ extends ks{constructor(e,t){console.warn("THREE.ExtrudeBufferGeometry has been renamed to THREE.ExtrudeGeometry."),super(e,t)}}class X_ extends Vs{constructor(e,t){console.warn("THREE.IcosahedronBufferGeometry has been renamed to THREE.IcosahedronGeometry."),super(e,t)}}class q_ extends qi{constructor(e,t,n,i){console.warn("THREE.LatheBufferGeometry has been renamed to THREE.LatheGeometry."),super(e,t,n,i)}}class Y_ extends Yi{constructor(e,t){console.warn("THREE.OctahedronBufferGeometry has been renamed to THREE.OctahedronGeometry."),super(e,t)}}class Z_ extends Wi{constructor(e,t,n,i){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(e,t,n,i)}}class J_ extends xn{constructor(e,t,n,i){console.warn("THREE.PolyhedronBufferGeometry has been renamed to THREE.PolyhedronGeometry."),super(e,t,n,i)}}class $_ extends Gs{constructor(e,t,n,i,s,r){console.warn("THREE.RingBufferGeometry has been renamed to THREE.RingGeometry."),super(e,t,n,i,s,r)}}class K_ extends Hs{constructor(e,t){console.warn("THREE.ShapeBufferGeometry has been renamed to THREE.ShapeGeometry."),super(e,t)}}class Q_ extends Zi{constructor(e,t,n,i,s,r,a){console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."),super(e,t,n,i,s,r,a)}}class j_ extends Ws{constructor(e,t){console.warn("THREE.TetrahedronBufferGeometry has been renamed to THREE.TetrahedronGeometry."),super(e,t)}}class ey extends Xs{constructor(e,t,n,i,s){console.warn("THREE.TorusBufferGeometry has been renamed to THREE.TorusGeometry."),super(e,t,n,i,s)}}class ty extends qs{constructor(e,t,n,i,s,r){console.warn("THREE.TorusKnotBufferGeometry has been renamed to THREE.TorusKnotGeometry."),super(e,t,n,i,s,r)}}class ny extends Ys{constructor(e,t,n,i,s){console.warn("THREE.TubeBufferGeometry has been renamed to THREE.TubeGeometry."),super(e,t,n,i,s)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yr);const iy=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:dh,AddEquation:Jn,AddOperation:lh,AdditiveAnimationBlendMode:ko,AdditiveBlending:$a,AlphaFormat:yh,AlwaysDepth:th,AlwaysStencilFunc:Fh,AmbientLight:Fu,AmbientLightProbe:Wx,AnimationClip:Ps,AnimationLoader:Rx,AnimationMixer:c_,AnimationObjectGroup:a_,AnimationUtils:Ex,ArcCurve:ou,ArrayCamera:Jh,ArrowHelper:R_,Audio:Vu,AudioAnalyser:$x,AudioContext:dl,AudioListener:Yx,AudioLoader:Gx,AxesHelper:I_,BackSide:Lt,BasicDepthPacking:Ih,BasicShadowMap:Ku,Bone:$o,BooleanKeyframeTrack:fi,Box2:x_,Box3:hi,Box3Helper:L_,BoxBufferGeometry:B_,BoxGeometry:Nn,BoxHelper:C_,BufferAttribute:Je,BufferGeometry:Ne,BufferGeometryLoader:Uu,ByteType:ph,Cache:ci,Camera:Qr,CameraHelper:E_,CanvasTexture:K0,CapsuleBufferGeometry:U_,CapsuleGeometry:zs,CatmullRomCurve3:lu,CineonToneMapping:uh,CircleBufferGeometry:k_,CircleGeometry:Os,ClampToEdgeWrapping:bt,Clock:ku,Color:fe,ColorKeyframeTrack:cl,ColorManagement:Mt,CompressedArrayTexture:$0,CompressedTexture:Qo,CompressedTextureLoader:Ix,ConeBufferGeometry:V_,ConeGeometry:Bs,CubeCamera:Vh,CubeReflectionMapping:An,CubeRefractionMapping:En,CubeTexture:Fs,CubeTextureLoader:Dx,CubeUVReflectionMapping:Hi,CubicBezierCurve:el,CubicBezierCurve3:cu,CubicInterpolant:Eu,CullFaceBack:Ja,CullFaceFront:kc,CullFaceFrontBack:$u,CullFaceNone:Uc,Curve:Zt,CurvePath:uu,CustomBlending:Gc,CustomToneMapping:fh,CylinderBufferGeometry:G_,CylinderGeometry:di,Cylindrical:g_,Data3DTexture:Ho,DataArrayTexture:$r,DataTexture:Bi,DataTextureLoader:Nx,DataUtils:O_,DecrementStencilOp:hd,DecrementWrapStencilOp:dd,DefaultLoadingManager:Pu,DepthFormat:Tn,DepthStencilFormat:ai,DepthTexture:$h,DirectionalLight:Nu,DirectionalLightHelper:A_,DiscreteInterpolant:Cu,DodecahedronBufferGeometry:H_,DodecahedronGeometry:Us,DoubleSide:hn,DstAlphaFactor:Jc,DstColorFactor:Kc,DynamicCopyUsage:Ed,DynamicDrawUsage:Md,DynamicReadUsage:wd,EdgesGeometry:du,EllipseCurve:aa,EqualDepth:ih,EqualStencilFunc:gd,EquirectangularReflectionMapping:ps,EquirectangularRefractionMapping:ms,Euler:Ns,EventDispatcher:gn,ExtrudeBufferGeometry:W_,ExtrudeGeometry:ks,FileLoader:mn,Float16BufferAttribute:cf,Float32BufferAttribute:pe,Float64BufferAttribute:hf,FloatType:un,Fog:ia,FogExp2:na,FramebufferTexture:J0,FrontSide:pn,Frustum:jr,GLBufferAttribute:f_,GLSL1:Ld,GLSL3:To,GreaterDepth:rh,GreaterEqualDepth:sh,GreaterEqualStencilFunc:vd,GreaterStencilFunc:_d,GridHelper:w_,Group:zi,HalfFloatType:Ui,HemisphereLight:Ru,HemisphereLightHelper:S_,HemisphereLightProbe:Hx,IcosahedronBufferGeometry:X_,IcosahedronGeometry:Vs,ImageBitmapLoader:Vx,ImageLoader:Rs,ImageUtils:Go,IncrementStencilOp:cd,IncrementWrapStencilOp:ud,InstancedBufferAttribute:Gi,InstancedBufferGeometry:Bu,InstancedInterleavedBuffer:d_,InstancedMesh:su,Int16BufferAttribute:of,Int32BufferAttribute:lf,Int8BufferAttribute:sf,IntType:gh,InterleavedBuffer:sa,InterleavedBufferAttribute:oi,Interpolant:Zs,InterpolateDiscrete:_s,InterpolateLinear:ys,InterpolateSmooth:Ur,InvertStencilOp:fd,KeepStencilOp:kr,KeyframeTrack:Jt,LOD:nu,LatheBufferGeometry:q_,LatheGeometry:qi,Layers:Kr,LessDepth:nh,LessEqualDepth:Hr,LessEqualStencilFunc:xd,LessStencilFunc:md,Light:Fn,LightProbe:ca,Line:Rn,Line3:__,LineBasicMaterial:Ct,LineCurve:oa,LineCurve3:hu,LineDashedMaterial:Tu,LineLoop:ru,LineSegments:jt,LinearEncoding:Pn,LinearFilter:st,LinearInterpolant:ll,LinearMipMapLinearFilter:nd,LinearMipMapNearestFilter:td,LinearMipmapLinearFilter:Cn,LinearMipmapNearestFilter:Bo,LinearSRGBColorSpace:ki,LinearToneMapping:ch,Loader:Ot,LoaderUtils:Do,LoadingManager:hl,LoopOnce:Lh,LoopPingPong:Rh,LoopRepeat:Ph,LuminanceAlphaFormat:Mh,LuminanceFormat:vh,MOUSE:Zu,Material:St,MaterialLoader:ha,MathUtils:Hd,Matrix3:Et,Matrix4:Ie,MaxEquation:eo,Mesh:_t,MeshBasicMaterial:Dn,MeshDepthMaterial:Yo,MeshDistanceMaterial:Zo,MeshLambertMaterial:Su,MeshMatcapMaterial:wu,MeshNormalMaterial:bu,MeshPhongMaterial:vu,MeshPhysicalMaterial:yu,MeshStandardMaterial:rl,MeshToonMaterial:Mu,MinEquation:ja,MirroredRepeatWrapping:xs,MixOperation:oh,MultiplyBlending:Qa,MultiplyOperation:Is,NearestFilter:it,NearestMipMapLinearFilter:ed,NearestMipMapNearestFilter:ju,NearestMipmapLinearFilter:hs,NearestMipmapNearestFilter:Wr,NeverDepth:eh,NeverStencilFunc:pd,NoBlending:fn,NoColorSpace:ad,NoToneMapping:$t,NormalAnimationBlendMode:Jr,NormalBlending:ti,NotEqualDepth:ah,NotEqualStencilFunc:yd,NumberKeyframeTrack:Cs,Object3D:We,ObjectLoader:Ux,ObjectSpaceNormalMap:Nh,OctahedronBufferGeometry:Y_,OctahedronGeometry:Yi,OneFactor:qc,OneMinusDstAlphaFactor:$c,OneMinusDstColorFactor:Qc,OneMinusSrcAlphaFactor:Oo,OneMinusSrcColorFactor:Zc,OrthographicCamera:ea,PCFShadowMap:Fo,PCFSoftShadowMap:Vc,PMREMGenerator:Eo,Path:ws,PerspectiveCamera:xt,Plane:Sn,PlaneBufferGeometry:Z_,PlaneGeometry:Wi,PlaneHelper:P_,PointLight:Du,PointLightHelper:M_,Points:au,PointsMaterial:Ko,PolarGridHelper:T_,PolyhedronBufferGeometry:J_,PolyhedronGeometry:xn,PositionalAudio:Jx,PropertyBinding:Ve,PropertyMixer:Gu,QuadraticBezierCurve:tl,QuadraticBezierCurve3:nl,Quaternion:Pt,QuaternionKeyframeTrack:Ji,QuaternionLinearInterpolant:Lu,RED_GREEN_RGTC2_Format:So,RED_RGTC1_Format:Ch,REVISION:Yr,RGBADepthPacking:Dh,RGBAFormat:Ft,RGBAIntegerFormat:Ah,RGBA_ASTC_10x10_Format:yo,RGBA_ASTC_10x5_Format:go,RGBA_ASTC_10x6_Format:xo,RGBA_ASTC_10x8_Format:_o,RGBA_ASTC_12x10_Format:vo,RGBA_ASTC_12x12_Format:Mo,RGBA_ASTC_4x4_Format:oo,RGBA_ASTC_5x4_Format:lo,RGBA_ASTC_5x5_Format:co,RGBA_ASTC_6x5_Format:ho,RGBA_ASTC_6x6_Format:uo,RGBA_ASTC_8x5_Format:fo,RGBA_ASTC_8x6_Format:po,RGBA_ASTC_8x8_Format:mo,RGBA_BPTC_Format:Br,RGBA_ETC2_EAC_Format:ao,RGBA_PVRTC_2BPPV1_Format:so,RGBA_PVRTC_4BPPV1_Format:io,RGBA_S3TC_DXT1_Format:Fr,RGBA_S3TC_DXT3_Format:zr,RGBA_S3TC_DXT5_Format:Or,RGB_ETC1_Format:Eh,RGB_ETC2_Format:ro,RGB_PVRTC_2BPPV1_Format:no,RGB_PVRTC_4BPPV1_Format:to,RGB_S3TC_DXT1_Format:Nr,RGFormat:wh,RGIntegerFormat:Th,RawShaderMaterial:_u,Ray:Ds,Raycaster:p_,RectAreaLight:zu,RedFormat:bh,RedIntegerFormat:Sh,ReinhardToneMapping:hh,RepeatWrapping:gs,ReplaceStencilOp:ld,ReverseSubtractEquation:Wc,RingBufferGeometry:$_,RingGeometry:Gs,SIGNED_RED_GREEN_RGTC2_Format:wo,SIGNED_RED_RGTC1_Format:bo,SRGBColorSpace:Xt,Scene:jh,ShaderChunk:De,ShaderLib:qt,ShaderMaterial:Qt,ShadowMaterial:xu,Shape:ri,ShapeBufferGeometry:K_,ShapeGeometry:Hs,ShapePath:D_,ShapeUtils:Kt,ShortType:mh,Skeleton:ra,SkeletonHelper:v_,SkinnedMesh:iu,Source:jn,Sphere:ui,SphereBufferGeometry:Q_,SphereGeometry:Zi,Spherical:m_,SphericalHarmonics3:Ou,SplineCurve:il,SpotLight:Iu,SpotLightHelper:y_,Sprite:tu,SpriteMaterial:Jo,SrcAlphaFactor:zo,SrcAlphaSaturateFactor:jc,SrcColorFactor:Yc,StaticCopyUsage:Ad,StaticDrawUsage:Ms,StaticReadUsage:Sd,StereoCamera:Xx,StreamCopyUsage:Cd,StreamDrawUsage:bd,StreamReadUsage:Td,StringKeyframeTrack:pi,SubtractEquation:Hc,SubtractiveBlending:Ka,TOUCH:Ju,TangentSpaceNormalMap:In,TetrahedronBufferGeometry:j_,TetrahedronGeometry:Ws,Texture:at,TextureLoader:Fx,TorusBufferGeometry:ey,TorusGeometry:Xs,TorusKnotBufferGeometry:ty,TorusKnotGeometry:qs,Triangle:Vt,TriangleFanDrawMode:rd,TriangleStripDrawMode:sd,TrianglesDrawMode:id,TubeBufferGeometry:ny,TubeGeometry:Ys,TwoPassDoubleSide:Qu,UVMapping:Zr,Uint16BufferAttribute:Wo,Uint32BufferAttribute:Xo,Uint8BufferAttribute:rf,Uint8ClampedBufferAttribute:af,Uniform:ml,UniformsGroup:u_,UniformsLib:re,UniformsUtils:kh,UnsignedByteType:Ln,UnsignedInt248Type:ni,UnsignedIntType:wn,UnsignedShort4444Type:xh,UnsignedShort5551Type:_h,UnsignedShortType:Uo,VSMShadowMap:Di,Vector2:$,Vector3:A,Vector4:Ye,VectorKeyframeTrack:Ls,VideoTexture:Z0,WebGL1Renderer:Qh,WebGL3DRenderTarget:Yd,WebGLArrayRenderTarget:qd,WebGLCubeRenderTarget:Gh,WebGLMultipleRenderTargets:Zd,WebGLRenderTarget:Yt,WebGLRenderer:Kh,WebGLUtils:Zh,WireframeGeometry:gu,WrapAroundEnding:vs,ZeroCurvatureEnding:Kn,ZeroFactor:Xc,ZeroSlopeEnding:Qn,ZeroStencilOp:od,_SRGBAFormat:Xr,sRGBEncoding:$e},Symbol.toStringTag,{value:"Module"}));export{In as $,Fu as A,$o as B,Zt as C,Nu as D,gn as E,mn as F,zi as G,Ns as H,Ls as I,Ji as J,Dx as K,Ot as L,Zu as M,Cs as N,We as O,Ve as P,Pt as Q,gs as R,m_ as S,Ju as T,Wo as U,A as V,Kh as W,kh as X,qt as Y,Qt as Z,lh as _,$ as a,Is as a0,Bi as a1,vh as a2,it as a3,iy as a4,$t as a5,ch as a6,hh as a7,uh as a8,dh as a9,Wr as aA,hs as aB,Bo as aC,Cn as aD,xs as aE,Lt as aa,nh as ab,Ex as ac,c_ as ad,Ph as ae,Je as af,au as ag,$a as ah,hn as ai,Yt as aj,ku as ak,st as al,Ft as am,A_ as an,M_ as ao,jh as ap,Dn as aq,bu as ar,$h as as,Yo as at,Dh as au,fn as av,jn as aw,Pn as ax,_s as ay,ys as az,Ye as b,Do as c,Fx as d,bt as e,at as f,vu as g,Su as h,fe as i,ps as j,Ie as k,ea as l,xt as m,Du as n,Hd as o,Iu as p,iu as q,_t as r,$e as s,Ct as t,Rn as u,ra as v,Ne as w,pe as x,Et as y,Ps as z};
