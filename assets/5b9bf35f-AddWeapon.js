import{L as k,u as D,S as F}from"./38dfdb0a-lists.js";import{o as e,Q as N,l as B,p as C,R,S as G,v as L,i as M,a as T,a3 as j}from"./index-243a6f1f.js";import{f as $,B as E,F as H,a as P}from"./5c4a7e16-filterConfig.js";import{G as Q}from"./38eb6fba-GlowToggle.js";import{g as q}from"./2a1351a9-index.js";import{u as z,G as O}from"./899f5031-Gallery.js";import{u as w}from"./dca34302-useToggleState.js";/* empty css               */import{M as V}from"./12e490b4-ModelIcon.js";import{B as x}from"./40b408c5-Box.js";import{D as Y,a as J}from"./c7426d51-DialogTitle.js";import{I as K}from"./cd5ea58b-Close.js";const h={root:{display:"flex",flexDirection:"column",overflowY:"hidden",minHeight:"90vh","& svg":{color:"rgba(16, 16, 16, 0.8)"}},top:{display:"flex",flexWrap:"wrap",borderBottom:"1px solid rgba(16, 16, 16, 0.4)",boxShadow:"0 0.2rem 0.3rem rgba(16, 16, 16, 0.4)"},searchFilter:{marginTop:"0.2rem",display:"flex",flexDirection:"column",width:"100%",minWidth:"20rem",alignItems:"center",justifyContent:"center","& .MuiTextField-root":{justifyContent:"center"}},search:{display:"flex",width:"100%",justifyContent:"center"},title:{padding:"0.5rem 1rem",textAlign:"center",flexGrow:.1,margin:"auto"},content:{padding:"0.3rem",textAlign:"center",minHeight:"60vh"}},W=[{value:"weapon",label:"Weapon",icon:"img/appIcon/weapon.png",options:[{value:"regular",label:"Regular"},{value:"special",label:"Special"},{value:"extra",label:"Extra"}]},{value:"chara",label:"Adventurer",icon:"img/appIcon/chara.png",options:[{value:"regular",label:"Regular"},{value:"allies",label:"Allies"},{value:"enemies",label:"Enemies"}]},{value:"dragon",label:"Dragon",icon:"img/appIcon/dragon.png",options:[{value:"regular",label:"Regular"},{value:"special",label:"Special"}]},{value:"boss",label:"Boss",icon:"img/appIcon/boss.png",options:[{value:"archdemon",label:"Archdemon",icon:"img/appIcon/archdemon.png"},{value:"agito",label:"Agito",icon:"img/appIcon/agito.png"},{value:"raid",label:"Raid",icon:"img/appIcon/raid.png"},{value:"void",label:"Void",icon:"img/appIcon/void.png"},{value:"others",label:"Others"}]}],U=o=>{let t=W;const n=[];return o.forEach(d=>{const a=t[d],i=a==null?void 0:a.value;i!==void 0&&(n.push(i),t=a.options)}),n.join("-")},X={Left:"⇐",Right:"⇒"},A=({side:o,onClick:t})=>e("div",{className:"WeaponButton-addBtn","data-side":o,onClick:t,children:X[o]});const Z=o=>o.stopPropagation();function _({id:o,name:t,noIcon:n,onClick:d}){const[a,i]=w(!1),[l,p]=w(!1),f=!n&&e(V,{modelId:o,className:"WeaponButton-icon"}),u=a&&e("div",{className:"WeaponButton-grip",onClick:Z,children:[e("input",{type:"checkbox",id:`grip-${o}`,checked:l,onChange:p}),e("label",{htmlFor:`grip-${o}`,children:"Reverse Grip"})]}),g=s=>{s.stopPropagation();const{side:c}=s.currentTarget.dataset;d({side:c,id:o,name:t,reverse:l})};return e("div",{className:"WeaponButton",children:[f,a?e("div",{className:"WeaponButton-add",onClick:i,children:[u,e("div",{className:"WeaponButton-addBtnGroup",children:[e(A,{side:"Left",onClick:g}),e("div",{children:"ADD"}),e(A,{side:"Right",onClick:g})]})]}):e("div",{className:"WeaponButton-name",onClick:i,children:t})]})}const ee=[];function oe({target:o,content:t,searchQuery:n,searchAll:d,filter:a=ee}){const i=z(s=>s[t])??[],[l,p]=B([]),[f,u]=B(!1);return C(()=>p(i),[t]),C(()=>{u(!0);async function s(){if(d)return n?await R(n):i;const c=await G(i,n);return await $(c,a)}setTimeout(async()=>{const c=await s();p(c),u(!1)})},[n,a,d]),f?e(k,{}):e(O,{list:l,component:_,onClick:async({side:s,id:c,name:v,reverse:b})=>{var y;const m=`jWeapon${s[0]}`;if(!(o!=null&&o.bones.list.includes(m)))return;const r=await L.loadDLModel(c);r.userData.name=v,b&&(r.rotation.y=Math.PI),(y=o.attachment[m])==null||y.forEach(S=>S.dispose()),o.attach(r,m),r.outline.code=o.outline.code,r.material.code=o.material.code,M(r)}})}const ne=N(oe),I=[];function he({target:o}){const{activeModel:t}=T();o??(o=t);const{indices:n,setIndex:d,showFilter:a,toggleFilter:i,searchAll:l,toggleSearchAll:p}=j(),f=!!indexedDB,[u,g]=B(""),s=D(u,500),[c,v]=B(I),b=U(n),m=q(b);C(()=>v(I),[a,n]),C(()=>{g(""),l&&p()},[n]);const r=n.join();return e(x,{className:"AddWeapon",sx:h.root,children:[e(x,{sx:h.top,children:[e(Y,{sx:h.title,children:"Add Weapon"}),e(E,{options:W,selectedIndices:n,setIndex:d}),e(x,{sx:h.searchFilter,children:[e(x,{sx:h.search,children:[f&&e(Q,{type:"text",value:"All",checked:l,onClick:p}),e(F,{query:u,onChange:g},r),m&&!l&&e(K,{onClick:i,size:"large",children:e(H,{})})]}),!l&&a&&m&&e(P,{config:m,onChange:v},r)]})]}),e(J,{sx:h.content,children:e(ne,{target:o,searchQuery:s,filter:c,content:b,searchAll:l})})]})}export{he as A};