precision highp float;

#define SHADER_NAME OutlineMaterial

uniform float opacity;
uniform vec3 color;

void main() {
	gl_FragColor = vec4( color, opacity );
}