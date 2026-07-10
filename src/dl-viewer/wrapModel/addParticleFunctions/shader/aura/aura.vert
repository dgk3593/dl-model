uniform float uTime;
uniform float uSpread;
uniform float uThreshold;
uniform float uSpeed;
uniform float uParticleSize;
uniform float uAuraSize;

attribute float aRandom;

varying float vIsParticle;
varying float vRandom;
varying vec3 vWorldPosition; 
varying vec3 vNormal;

#include <skinning_pars_vertex>

void main() {
    #include <skinbase_vertex>

    vec3 transformed = position + normal * 0.005 * uSpread;

    #include <skinning_vertex>
    
    vec3 objectNormal = normal;
    #include <skinnormal_vertex>
    
    vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
    
    float yDisplacement = fract(uTime * uSpeed + aRandom) * 0.5;
    worldPosition.y += yDisplacement;
    
    vWorldPosition = worldPosition.xyz;

    vec4 viewPosition = viewMatrix * worldPosition;
    gl_Position = projectionMatrix * viewPosition;

    vNormal = normalize(normalMatrix * objectNormal);
    
    float condition = step(0.7, objectNormal.z);
    objectNormal.z *= mix(1.0, -1.0, condition);
    vIsParticle = objectNormal.z - uThreshold;

    float isParticleMask = step(0.0, vIsParticle);
    gl_PointSize = mix(uAuraSize, uParticleSize, isParticleMask);
    gl_PointSize /= -viewPosition.z;

    vRandom = aRandom;
}