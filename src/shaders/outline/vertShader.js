const outlineVertShader = `
uniform float size;

#include <common>
#include <skinning_pars_vertex>

void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	
    vec3 transformed = position + objectNormal * 0.0005 * size;
        
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
}`;

export default outlineVertShader;
