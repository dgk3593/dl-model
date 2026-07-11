uniform sampler2D uTexture;
uniform float uTime;
uniform float uSpeed;
uniform float uParticleOpacity;
uniform float uAuraOpacity;
uniform vec3 uColor;
uniform vec3 uColor2;
uniform bool uIsPulse;

varying float vRandom;
varying float vIsParticle;
varying vec3 vWorldPosition;
varying vec3 vNormal;

float stableHash(float p) {
    return fract(sin(p * 127.1) * 43758.5453123);
}

void main() {
    vec4 textureColor = texture2D(uTexture, gl_PointCoord);
    
    float smoothPhase = vWorldPosition.y * 4.0 - uTime * uSpeed + (vRandom * 25.0);
    float pulsePhase  = vWorldPosition.y * 15.0 - uTime * uSpeed;
    
    float wavePhase = mix(smoothPhase, pulsePhase, float(uIsPulse));
    float spatialWave = sin(wavePhase) * 0.5 + 0.5;
    
    float smoothAlpha = abs(1.0 - fract(uTime * 0.5 + vRandom)) * 0.5;
    float pulseAlpha  = abs(1.0 - fract(uTime + vRandom)) * 0.5;
    float alphaLife   = mix(smoothAlpha, pulseAlpha, float(uIsPulse));
    
    float brightnessPulse = mix(1.0, sin(uTime * uSpeed * 8.0) * 0.5 + 0.5, float(uIsPulse));
    
    if (uIsPulse) {
        float staticNoise = stableHash(vRandom * 543.21);
        float isParticleMask = step(0.0, vIsParticle);
        float cullingThreshold = mix(0.2, 0.5, isParticleMask);
        if (staticNoise > cullingThreshold) {
            discard;
        }
    }
    
    textureColor.a = length(textureColor.rgb) * alphaLife * spatialWave * brightnessPulse;
    
    float isParticleMask = step(0.0, vIsParticle);
    textureColor.a *= mix(uAuraOpacity, uParticleOpacity * 4.0, isParticleMask);

    if (textureColor.a < 0.01) {
        discard;
    }
    
    float colorBrightness = length(uColor);
    float isBlack = step(colorBrightness, 0.05);

    vec3 safeColor1 = mix(uColor, vec3(0.15, 0.15, 0.15), isBlack); 
    vec3 safeColor2 = mix(uColor2, vec3(0.08, 0.08, 0.08), isBlack);

    float colorMixFactor = mix(textureColor.a * 2.0, spatialWave, float(uIsPulse));
    textureColor.rgb = mix(safeColor1, safeColor2, clamp(colorMixFactor, 0.0, 1.0));
    
    float baseDimming = mix(4.0, 2.0, isParticleMask);
    float finalDimming = mix(1.0, baseDimming, isBlack);
    textureColor.rgb /= finalDimming;

    gl_FragColor = textureColor;
}