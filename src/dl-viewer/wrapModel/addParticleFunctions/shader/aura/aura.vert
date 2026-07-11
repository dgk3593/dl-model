uniform float uTime;
uniform float uSpread;
uniform float uThreshold;
uniform float uSpeed;
uniform float uParticleSize;
uniform float uAuraSize;
uniform bool uIsPulse; 

attribute float aRandom;

varying float vIsParticle;
varying float vRandom;
varying vec3 vWorldPosition; 
varying vec3 vNormal;

#include <skinning_pars_vertex>

float hash(float n) { 
    return fract(sin(n) * 43758.5453123); 
}

void main() {
    #include <skinbase_vertex>

    float isPulseFactor = float(uIsPulse);

    float h1 = hash(aRandom * 12.9898);
    float h2 = hash(aRandom * 78.233);
    float h3 = hash(aRandom * 45.164);
    vec3 jitter = vec3(h1 - 0.5, h2 - 0.5, h3 - 0.5) * 0.04 * uSpread * isPulseFactor;

    vec3 transformed = position + normal * 0.005 * uSpread + jitter;

    #include <skinning_vertex>
    
    vec3 objectNormal = normal;
    #include <skinnormal_vertex>
    
    vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
    
    float yDisplacement = fract(uTime * uSpeed + aRandom) * 0.8;
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