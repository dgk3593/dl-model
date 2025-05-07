import{U as r,S as a,x as h,W as o,H as l,N as n}from"./f_Chs6TF8_-three.js";import{P as p,C as s,F as d}from"./index-C9YTwzGb.js";const i={uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

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

		}`};class f extends p{constructor(e=.96){super(),this.uniforms=r.clone(i.uniforms),this.uniforms.damp.value=e,this.compFsMaterial=new a({uniforms:this.uniforms,vertexShader:i.vertexShader,fragmentShader:i.fragmentShader}),this.copyFsMaterial=new a({uniforms:r.clone(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,blending:h,depthTest:!1,depthWrite:!1}),this._textureComp=new o(window.innerWidth,window.innerHeight,{magFilter:n,type:l}),this._textureOld=new o(window.innerWidth,window.innerHeight,{magFilter:n,type:l}),this._compFsQuad=new d(this.compFsMaterial),this._copyFsQuad=new d(this.copyFsMaterial)}render(e,t,u){this.uniforms.tOld.value=this._textureOld.texture,this.uniforms.tNew.value=u.texture,e.setRenderTarget(this._textureComp),this._compFsQuad.render(e),this._copyFsQuad.material.uniforms.tDiffuse.value=this._textureComp.texture,this.renderToScreen?(e.setRenderTarget(null),this._copyFsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._copyFsQuad.render(e));const m=this._textureOld;this._textureOld=this._textureComp,this._textureComp=m}setSize(e,t){this._textureComp.setSize(e,t),this._textureOld.setSize(e,t)}dispose(){this._textureComp.dispose(),this._textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this._compFsQuad.dispose(),this._copyFsQuad.dispose()}}export{f as AfterimagePass};
