const vertShader = `
uniform float size;

#include <skinning_pars_vertex>

void main() {
	#include <skinbase_vertex>
	
    vec3 transformed = position + normal * 0.0005 * size;
        
	#include <skinning_vertex>
	#include <project_vertex>
}`;

export default vertShader;
