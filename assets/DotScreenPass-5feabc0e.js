import{a as r,X as n,Z as o}from"./three-5c1cbd72.js";import{P as l,F as u}from"./Pass-4a28857e.js";const a={uniforms:{tDiffuse:{value:null},tSize:{value:new r(256,256)},center:{value:new r(.5,.5)},angle:{value:1.57},scale:{value:1}},vertexShader:`

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

		}`};class d extends l{constructor(e,i,t){super(),a===void 0&&console.error("THREE.DotScreenPass relies on DotScreenShader");const s=a;this.uniforms=n.clone(s.uniforms),e!==void 0&&this.uniforms.center.value.copy(e),i!==void 0&&(this.uniforms.angle.value=i),t!==void 0&&(this.uniforms.scale.value=t),this.material=new o({uniforms:this.uniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),this.fsQuad=new u(this.material)}render(e,i,t){this.uniforms.tDiffuse.value=t.texture,this.uniforms.tSize.value.set(t.width,t.height),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}export{d as DotScreenPass};
