import{aq as m,U as u,x as r,u as i,N as a,v as s,S as h,au as n,at as x}from"./vendor.730f9508.js";const l={uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

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

		}`};class c extends m{constructor(e=.96){super();l===void 0&&console.error("THREE.AfterimagePass relies on AfterimageShader"),this.shader=l,this.uniforms=u.clone(this.shader.uniforms),this.uniforms.damp.value=e,this.textureComp=new r(window.innerWidth,window.innerHeight,{minFilter:i,magFilter:a,format:s}),this.textureOld=new r(window.innerWidth,window.innerHeight,{minFilter:i,magFilter:a,format:s}),this.shaderMaterial=new h({uniforms:this.uniforms,vertexShader:this.shader.vertexShader,fragmentShader:this.shader.fragmentShader}),this.compFsQuad=new n(this.shaderMaterial);const t=new x;this.copyFsQuad=new n(t)}render(e,t,o){this.uniforms.tOld.value=this.textureOld.texture,this.uniforms.tNew.value=o.texture,e.setRenderTarget(this.textureComp),this.compFsQuad.render(e),this.copyFsQuad.material.map=this.textureComp.texture,this.renderToScreen?(e.setRenderTarget(null),this.copyFsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.copyFsQuad.render(e));const d=this.textureOld;this.textureOld=this.textureComp,this.textureComp=d}setSize(e,t){this.textureComp.setSize(e,t),this.textureOld.setSize(e,t)}}export{c as AfterimagePass};
