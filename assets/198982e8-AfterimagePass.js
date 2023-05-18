import{U as l,W as s,N as i,S as d,r as n}from"./faa6ee83-three.js";import{P as h,F as r}from"./index-336e170e.js";const u={uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

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

		}`};class c extends h{constructor(e=.96){super(),this.shader=u,this.uniforms=l.clone(this.shader.uniforms),this.uniforms.damp.value=e,this.textureComp=new s(window.innerWidth,window.innerHeight,{magFilter:i}),this.textureOld=new s(window.innerWidth,window.innerHeight,{magFilter:i}),this.compFsMaterial=new d({uniforms:this.uniforms,vertexShader:this.shader.vertexShader,fragmentShader:this.shader.fragmentShader}),this.compFsQuad=new r(this.compFsMaterial),this.copyFsMaterial=new n,this.copyFsQuad=new r(this.copyFsMaterial)}render(e,t,a){this.uniforms.tOld.value=this.textureOld.texture,this.uniforms.tNew.value=a.texture,e.setRenderTarget(this.textureComp),this.compFsQuad.render(e),this.copyFsQuad.material.map=this.textureComp.texture,this.renderToScreen?(e.setRenderTarget(null),this.copyFsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.copyFsQuad.render(e));const o=this.textureOld;this.textureOld=this.textureComp,this.textureComp=o}setSize(e,t){this.textureComp.setSize(e,t),this.textureOld.setSize(e,t)}dispose(){this.textureComp.dispose(),this.textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this.compFsQuad.dispose(),this.copyFsQuad.dispose()}}export{c as AfterimagePass};
