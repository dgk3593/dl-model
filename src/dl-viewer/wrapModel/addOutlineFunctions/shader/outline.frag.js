const fragShader = `
uniform float opacity;
uniform vec3 color;

void main() {
	gl_FragColor = vec4( color, opacity );
}`;

export default fragShader;
