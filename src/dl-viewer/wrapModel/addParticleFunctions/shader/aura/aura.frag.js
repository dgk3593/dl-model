const fragShader = `
uniform sampler2D uTexture;

uniform float uTime;
uniform float uParticleOpacity;
uniform float uAuraOpacity;
uniform vec3 uColor;
uniform vec3 uColor2;

varying float vRandom;
varying float vIsParticle;

void main(){
    vec4 textureColor = texture2D( uTexture, gl_PointCoord );
    textureColor.a = length( textureColor.rgb ) ;
    textureColor.a *= abs( 1.0 - fract( uTime + vRandom ) ) * 0.5;
    textureColor.rgb = mix( uColor, uColor2,  textureColor.a * 2.0 );
    textureColor.a *= vIsParticle > 0.0 ? uParticleOpacity * 4.0 : uAuraOpacity;

    gl_FragColor = textureColor;
    gl_FragColor /= vIsParticle > 0.0 ? 2.0 : 4.0;
}`;

export default fragShader;
