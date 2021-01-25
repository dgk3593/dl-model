#define OUTLINE
uniform float size;
varying vec3 vViewPosition;
#include <common>
#include <color_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	
    vec3 transformed = position + objectNormal*0.0005*size;
        
	#include <skinning_vertex>
	#include <project_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
}