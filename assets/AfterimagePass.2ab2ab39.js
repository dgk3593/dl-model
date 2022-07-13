import{ag as o,aj as d,ai as a,as as i,ak as h,ap as r,ao as u}from"./index.ae426466.js";const s={uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float damp;

		uniform sampler2D tOld;
		uniform sampler2D tNew;

		varying vec2 vUv;

		vec4 when_gt( vec4 x, float y ) {

			return max( sign( x - y ), 0.0 );

		}

		void main() {

			vec4 texelOld = texture2D( tOld, vUv );
			vec4 texelNew = texture2D( tNew, vUv );

			texelOld *= damp * when_gt( texelOld, 0.1 );

			gl_FragColor = max(texelNew, texelOld);

		}`};class v extends o{constructor(e=.96){super(),s===void 0&&console.error("THREE.AfterimagePass relies on AfterimageShader"),this.shader=s,this.uniforms=d.clone(this.shader.uniforms),this.uniforms.damp.value=e,this.textureComp=new a(window.innerWidth,window.innerHeight,{magFilter:i}),this.textureOld=new a(window.innerWidth,window.innerHeight,{magFilter:i}),this.shaderMaterial=new h({uniforms:this.uniforms,vertexShader:this.shader.vertexShader,fragmentShader:this.shader.fragmentShader}),this.compFsQuad=new r(this.shaderMaterial);const t=new u;this.copyFsQuad=new r(t)}render(e,t,n){this.uniforms.tOld.value=this.textureOld.texture,this.uniforms.tNew.value=n.texture,e.setRenderTarget(this.textureComp),this.compFsQuad.render(e),this.copyFsQuad.material.map=this.textureComp.texture,this.renderToScreen?(e.setRenderTarget(null),this.copyFsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.copyFsQuad.render(e));const l=this.textureOld;this.textureOld=this.textureComp,this.textureComp=l}setSize(e,t){this.textureComp.setSize(e,t),this.textureOld.setSize(e,t)}}export{v as AfterimagePass};
