import{V as a,ap as s,U as o,S as l,at as u}from"./vendor.732e1712.js";const n={uniforms:{tDiffuse:{value:null},tSize:{value:new a(256,256)},center:{value:new a(.5,.5)},angle:{value:1.57},scale:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform vec2 center;
		uniform float angle;
		uniform float scale;
		uniform vec2 tSize;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		float pattern() {

			float s = sin( angle ), c = cos( angle );

			vec2 tex = vUv * tSize - center;
			vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;

			return ( sin( point.x ) * sin( point.y ) ) * 4.0;

		}

		void main() {

			vec4 color = texture2D( tDiffuse, vUv );

			float average = ( color.r + color.g + color.b ) / 3.0;

			gl_FragColor = vec4( vec3( average * 10.0 - 5.0 + pattern() ), color.a );

		}`};class f extends s{constructor(e,r,t){super();n===void 0&&console.error("THREE.DotScreenPass relies on DotScreenShader");var i=n;this.uniforms=o.clone(i.uniforms),e!==void 0&&this.uniforms.center.value.copy(e),r!==void 0&&(this.uniforms.angle.value=r),t!==void 0&&(this.uniforms.scale.value=t),this.material=new l({uniforms:this.uniforms,vertexShader:i.vertexShader,fragmentShader:i.fragmentShader}),this.fsQuad=new u(this.material)}render(e,r,t){this.uniforms.tDiffuse.value=t.texture,this.uniforms.tSize.value.set(t.width,t.height),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.clear&&e.clear(),this.fsQuad.render(e))}}export{f as DotScreenPass};
