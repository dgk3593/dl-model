import{n,h as B,e,a7 as D,T as I}from"./index.ad6bad13.js";import{u as M}from"./useToggleState.dd4cb12b.js";import{L as k,u as N,S as Q}from"./lists.cccec2d1.js";import{F as G}from"./FacePartSelector.5c287e31.js";import{f as P,c as $,B as q,F as z,a as E}from"./filterConfig.26e1f0b0.js";import{u as R,G as W}from"./Gallery.d98a18ee.js";import{M as j,C as A,c as H,s as r,u as b}from"./styles.a9b26b4e.js";import{B as g}from"./Box.b11296f2.js";import{a as J,b as K}from"./DialogTitle.fb2bc14d.js";import{I as O}from"./Close.9117af21.js";function U({compact:i,searchQuery:s,filter:o,content:u,onSelect:a}){var f;const d=(f=R(t=>t[`chara-${u}`]))!=null?f:[],h=d.filter(({id:t})=>!t.endsWith("h")),[m,c]=n([]),[F,p]=n(!1);return B(()=>c(h),[u]),B(()=>{p(!0);async function t(){const l=s?await D(s):h;return await P(l,o)}setTimeout(async()=>{const l=await t();c(l),p(!1)})},[s,o]),d.length&&!F?e(W,{list:m,component:i?j:A,onClick:a}):e(k,{})}const C=H.find(({value:i})=>i==="chara").options,V=[],X={...r.top,"& .Selector":{margin:"0.1rem 2rem 0.1rem 0"}};function ie({compact:i,onSelect:s,onAfterSelect:o}){const u=!!indexedDB,[a,d]=n(0),h=(S,x)=>d(x),[m,c]=n(""),F=N(m,500);B(()=>{c("")},[a]);const[p,f]=n(V),[t,l]=n("Both"),[w,L]=M(!0),y=C[a].value==="regular"&&$,T=i||b("(max-width:640px)")||b("(max-height:640px)"),v=I(S=>{const{value:x}=S.currentTarget.dataset;t!=="Eyes"&&s(x,"mouth"),t!=="Mouth"&&s(x,"eye"),o==null||o()},[t]);return e(g,{className:"FaceTexture",sx:r.root,children:[e(g,{sx:X,children:[e(J,{sx:r.title,children:"Select Texture"}),e(G,{value:t,onClick:l}),e(q,{options:C,selectedIndices:[a],setIndex:h}),e(g,{sx:r.searchFilter,children:[e(g,{sx:r.search,children:[e(Q,{query:m,onChange:c,placeholder:u?"Search All":"Search"},a[0]),y&&e(O,{onClick:L,size:"large",children:e(z,{})})]}),w&&y&&e(E,{config:y,onChange:f,compact:T})]})]}),e(K,{sx:r.content,children:e(U,{compact:T,searchQuery:F,filter:p,content:C[a].value,onSelect:v})})]})}export{ie as F};