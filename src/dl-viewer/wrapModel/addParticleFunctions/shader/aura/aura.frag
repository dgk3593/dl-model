uniform sampler2D uTexture;
uniform float uTime;
uniform float uSpeed;
uniform float uParticleOpacity;
uniform float uAuraOpacity;
uniform vec3 uColor;
uniform vec3 uColor2;

varying float vRandom;
varying float vIsParticle;
varying vec3 vWorldPosition;
varying vec3 vNormal;

void main() {
    vec4 textureColor = texture2D(uTexture, gl_PointCoord);
    
    float wave = sin(vWorldPosition.y * 15.0 - uTime * uSpeed) * 0.5 + 0.5;
    float alphaLife = abs(1.0 - fract(uTime + vRandom)) * 0.5;
    
    textureColor.a = length(textureColor.rgb) * alphaLife * wave;
    
    float isParticleMask = step(0.0, vIsParticle);
    textureColor.a *= mix(uAuraOpacity, uParticleOpacity * 4.0, isParticleMask);

    if (textureColor.a < 0.01) {
        discard;
    }
    
    float colorBrightness = length(uColor);
    float isBlack = step(colorBrightness, 0.05);

    vec3 safeColor1 = mix(uColor, vec3(0.15, 0.15, 0.15), isBlack); 
    vec3 safeColor2 = mix(uColor2, vec3(0.08, 0.08, 0.08), isBlack);

    textureColor.rgb = mix(safeColor1, safeColor2, clamp(textureColor.a * 2.0, 0.0, 1.0));
    
    float baseDimming = mix(4.0, 2.0, isParticleMask);
    float finalDimming = mix(1.0, baseDimming, isBlack);
    textureColor.rgb /= finalDimming;

    gl_FragColor = textureColor;
}