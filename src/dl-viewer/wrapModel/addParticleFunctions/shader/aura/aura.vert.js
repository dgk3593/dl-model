const vertShader = `
uniform float uTime;
uniform float uSpread;
uniform float uThreshold;
uniform float uSpeed;
uniform float uParticleSize;
uniform float uAuraSize;

attribute float aRandom;

varying float vIsParticle;
varying float vRandom;

#include <skinning_pars_vertex>
void main() {
    #include <skinbase_vertex>

    vec3 transformed = position + normal * 0.005 * uSpread;

    #include <skinning_vertex>

    vec3 objectNormal = normal;

	#include <skinnormal_vertex>
    
    vec4 viewPosition = viewMatrix * modelMatrix * vec4(transformed, 1.0);
    float yDisplacement = fract( uTime * uSpeed + aRandom ) * 0.1;
    viewPosition.y += yDisplacement;
    viewPosition.x += sin( uTime * aRandom * uSpeed + aRandom ) * 0.02;
    
    gl_Position = projectionMatrix * viewPosition;
    
    objectNormal.z *= objectNormal.z > 0.7 ? -1.0 : 1.0;
    vIsParticle = objectNormal.z - uThreshold;

    gl_PointSize = vIsParticle > 0.0 ? uParticleSize : uAuraSize;
    gl_PointSize /= -viewPosition.z;

    vRandom = aRandom;
}`;

export default vertShader;
