import{a as C,b as y,A as D,h as L,g as S,y as b,u as a,v as p}from"./index-n64Ypy0r.js";import{u as w}from"./f_ToekG8aS-useKey.js";import{S as k}from"./f_BAgd6EWl-Stretcher.js";import{A as x,B as E}from"./f_CpqaZ_wj-BoneManager.js";import{B as n}from"./f_tMe7AYQe-Box.js";import{D as N,a as q}from"./f_87vLqCtc-DialogTitle.js";import{S as I}from"./f_sPH8noGo-Gallery.js";import{M as K}from"./f_CufLonnG-filterConfig.js";import{B as T}from"./f_Dypr_CtN-Button.js";import"./f_xkHyBaMY-three.js";/* empty css                 */import"./f_Q8KP7Za3-ModelIcon.js";import"./f_5e48ws-j-Accordion.js";import"./f_CR2SUsV--useToggleState.js";import"./f_CcwnGMA5-createSvgIcon.js";import"./f_D7UFpVqS-ButtonBase.js";import"./f_CUtpJZlc-Popover.js";import"./f_C5BAwPJi-SkipPrevious.js";import"./f_B046vbvP-ColorButton.js";import"./f__vGqJY9U-Close.js";import"./f_Dg3PmupT-index.js";import"./f_DI9B5SiD-FacePartSelector.js";import"./f_CZG5wGZF-Selector.js";import"./f_Dw-47c0h-GlowToggle.js";import"./f_mnIUAV6D-MeshMouthSelect.js";import"./f_CtkOP3qW-index.js";import"./f_cIn0Pu3n-lists.js";import"./f_D21S-h_9-styles.js";import"./f_DWUPKFdo-index.js";import"./f_BVKWgaq0-index.js";function pt(){var d;const{activeModel:e}=C();if(!e)return null;const[h,u]=w(),{inputModel:A}=y(),o=D(()=>{}),i=["root",...((d=e==null?void 0:e.bones)==null?void 0:d.list)??[]],[m,c]=L(i[0]),g=S(e.attachment.list.map(t=>t.parentBone));b(()=>{if(!e)return;c("root"),o.current();const t=e.addEventListener("AttachmentChanged",u);return o.current=()=>e.removeEventListener("AttachmentChanged",t),o.current},[e]);const f=t=>{c(t.target.value)},s=async(t=m)=>{const l=await A();if(!l)return;const[M,B]=l,r=await p.loadDLModel(M);r.userData.name=B,e.attach(r,t==="root"?void 0:t),r.outline.code=e.outline.code,r.material.code=e.material.code,p.render()},v=()=>s();return a(n,{className:"AttachmentManager",children:[a(n,{className:"AttachmentManager-top",children:[a(N,{children:"Manage Attachments"}),a(n,{className:"AttachmentManager-add",children:[a(I,{onChange:f,value:m,className:"AttachmentManager-select",children:i.map(t=>a(K,{value:t,children:t},t))}),a(T,{title:"Add Attachment",variant:"contained",onClick:v,children:a(x,{})})]})]}),a(q,{className:"AttachmentManager-body",children:[a(k,{}),g.map(t=>a(E,{add:s,bone:t},t))]},h)]})}export{pt as default};