import{a as u,u as e,l as h}from"./index-Vn9sW6Ph.js";import{E as y,M as S,a as v,b as x}from"./f_tnW2ntms-MeshMouthSelect.js";import{B as f}from"./f_p1NpbBli-Button.js";import{D as g,a as C}from"./f_5V1ltYPF-DialogTitle.js";import"./f_VbypFjz6-three.js";import"./f_ZQDgv7VF-Box.js";import"./f_fPerj8HH-ButtonBase.js";const M=[1,2,3,4,5,6,7,8,9],F={eye:y,mouth:S},N={eye:v,mouth:x};function m({part:t,onSelect:i}){var s;const{activeModel:a}=u(),n=(s=a==null?void 0:a.face)==null?void 0:s.type,c=o=>{const l=parseInt(o.currentTarget.dataset.index);i(l,t)};switch(n){case"uv":const o=F[t],l=a.face[`${t}Texture`];return e("div",{className:"PartialFaceSelect-body",children:[M.map(d=>e(o,{index:d,texture:l,"data-index":d,onClick:c},d)),e(f,{"data-index":"0",onClick:c,children:"Remove"})]});case"meshes":const r=N[t];return e("div",{className:"PartialFaceSelect-body",children:e(r,{target:a,onSelect:i})});default:return e(h,{children:"Not Available"})}}const P={eye:"Select Eye",mouth:"Select Mouth"};function p({part:t,onSelect:i,onAfterSelect:a}){var o;const{activeModel:n}=u(),c=(o=n==null?void 0:n.face)==null?void 0:o.type;if(!c)return e(h,{children:"Not Available"});const s=(l,r)=>{i(l,r),a==null||a()};return c==="uv"?e("div",{className:"PartialFaceSelect","data-type":c,children:[e(g,{sx:{textAlign:"center"},children:P[t]}),e(C,{sx:{padding:"1rem"},children:e(m,{part:t,onSelect:s})})]}):e("div",{className:"PartialFaceSelect","data-type":c,children:e(m,{part:t,onSelect:s})})}const I=t=>e(p,{part:"eye",...t}),R=t=>e(p,{part:"mouth",...t});export{I as EyeSelect,R as MouthSelect,p as default};