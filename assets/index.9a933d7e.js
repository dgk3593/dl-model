import{e as n,p as s,h,o as v,Q as B,v as y}from"./index.ba3f9cc2.js";import{u as C}from"./useKey.9db69553.js";import{A as u}from"./Accordion.be104df2.js";/* empty css               */import{M as T}from"./ModelIcon.bcdd68f5.js";import{B as b}from"./Button.3f2e0ab4.js";import{C as M}from"./Check.ef9234c6.js";import{a as D,b as I}from"./DialogTitle.d6038b91.js";import{B as N}from"./Box.f4fd8ac3.js";import"./useToggleState.59cc0039.js";import"./createSvgIcon.60cd059e.js";import"./ButtonBase.3bb0e513.js";function k({list:e,label:r,defaultOpen:o=!1,onSelect:l}){return n(u,{disableGutters:!0,defaultOpen:o,className:"BoneChildren",children:[n(s,{children:r}),n(s,{children:e.map(t=>n(p,{target:t,onSelect:l},t.uniqueId))})]})}function p({target:e,onSelect:r}){if(!e)return null;const[o,l]=C();h(()=>{const i=e.addEventListener("AttachmentChanged",l);return()=>e.removeEventListener("AttachmentChanged",i)},[]),h(()=>{e.userData.name||v(e.id).then(i=>{e.userData.name=i==null?void 0:i.name,l()})},[]);const t=e.id,a=e==null?void 0:e.userData.name,f=a!=null?a:t,x=n(T,{modelId:t,alt:a!=null?a:t,className:"ModelTree-icon"}),c=B(e.attachment.list.map(i=>i.parentBone)),g=()=>r(e),m=n(s,{children:[x,n("div",{className:"target-name",children:f}),n(b,{title:"Select",variant:"contained",onClick:g,children:n(M,{})})]});return c.length?n(u,{disableGutters:!0,className:"ModelTree",children:[m,n(s,{children:c.map(i=>n(k,{defaultOpen:c.length===1,label:i,onSelect:r,list:e.attachment[i]}))})]},o):n("div",{className:"ModelTree",children:m},o)}const d={root:{display:"flex",flexDirection:"column",overflowY:"hidden",minHeight:"20rem",minWidth:"20rem"},title:{textAlign:"center",padding:"0.5rem 2rem",display:"flex",alignItems:"center",justifyContent:"center",borderBottom:"1px solid rgba(16, 16, 16, 0.4)",boxShadow:"0 0.2rem 0.3rem rgba(16, 16, 16, 0.4)",minHeight:"4rem"},content:{padding:"2rem 1rem",display:"flex",flexDirection:"column",flexWrap:"wrap"}};function Q({onSelect:e=console.log,onAfterSelect:r}){const o=y.model,l=t=>{e(t),r==null||r()};return n(N,{sx:d.root,className:"TargetPicker",children:[n(D,{sx:d.title,children:"Select Target"}),n(I,{sx:d.content,children:o.length?o.map(t=>n(p,{target:t,onSelect:l},t.uniqueId)):"No model"})]})}export{Q as default};