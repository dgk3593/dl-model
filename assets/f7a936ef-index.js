import{u as C,a as D,_ as L,h as S,g as y,p as w,o as a,v as p}from"./index-e9020148.js";import{u as b}from"./086c9a09-useKey.js";import{S as k}from"./ad60adfc-Stretcher.js";import{A as x,B as E}from"./ced8b2cd-BoneManager.js";import{B as r}from"./cf2a4255-Box.js";import{D as N,a as q}from"./d210b9bd-DialogTitle.js";import{S as I}from"./be5d4bf6-Gallery.js";import{M as K}from"./281b9c70-filterConfig.js";import{B as T}from"./504ee6c1-Button.js";import"./6f5f1b8d-three.js";/* empty css               */import"./99b0ac83-ModelIcon.js";import"./4396ac5f-Accordion.js";import"./f2880bca-useToggleState.js";import"./79dd5163-createSvgIcon.js";import"./f01c25ec-ButtonBase.js";import"./8a176eb6-Popover.js";import"./d47284d7-ColorButton.js";import"./a6614ee6-SkipPrevious.js";import"./927f85a8-Close.js";import"./6038e7dd-FaceSelect.js";import"./a0ccd46a-FacePartSelector.js";import"./9af5b9ee-Selector.js";import"./932cf65c-GlowToggle.js";import"./4e9550b7-MeshMouthSelect.js";import"./d9cb253a-FaceTexture.js";import"./e46e7f09-lists.js";import"./323807f1-styles.js";import"./44ba601f-AddWeapon.js";import"./86759eef-index.js";function pt(){var d;const{activeModel:e}=C();if(!e)return null;const[h,u]=b(),{inputModel:g}=D(),o=L(()=>{}),i=["root",...((d=e==null?void 0:e.bones)==null?void 0:d.list)??[]],[m,c]=S(i[0]),A=y(e.attachment.list.map(t=>t.parentBone));w(()=>{if(!e)return;c("root"),o.current();const t=e.addEventListener("AttachmentChanged",u);return o.current=()=>e.removeEventListener("AttachmentChanged",t),o.current},[e]);const f=t=>{c(t.target.value)},s=async(t=m)=>{const l=await g();if(!l)return;const[v,B]=l,n=await p.loadDLModel(v);n.userData.name=B,e.attach(n,t==="root"?void 0:t),n.outline.code=e.outline.code,n.material.code=e.material.code,p.render()},M=()=>s();return a(r,{className:"AttachmentManager",children:[a(r,{className:"AttachmentManager-top",children:[a(N,{children:"Manage Attachments"}),a(r,{className:"AttachmentManager-add",children:[a(I,{onChange:f,value:m,className:"AttachmentManager-select",children:i.map(t=>a(K,{value:t,children:t},t))}),a(T,{title:"Add Attachment",variant:"contained",onClick:M,children:a(x,{})})]})]}),a(q,{className:"AttachmentManager-body",children:[a(k,{}),A.map(t=>a(E,{add:s,bone:t},t))]},h)]})}export{pt as default};