uniform float size;

#include <skinning_pars_vertex>

void main() {
  #include <skinbase_vertex>
  
  vec3 transformed = position;
  
  #include <skinning_vertex>
  #include <project_vertex>
  
  vec3 viewNormal = normalize(normalMatrix * normal);
  
  vec3 clipNormal = mat3(projectionMatrix) * viewNormal;
  vec2 ndcNormal = normalize(clipNormal.xy);
  
  vec2 aspectCorrection = vec2(projectionMatrix[0][0], projectionMatrix[1][1]);
  gl_Position.xy += ndcNormal * size * (aspectCorrection * 0.0005) * gl_Position.w;
  
  gl_Position.z += 0.0005 * gl_Position.w;
}