import{h as n,y as C,u as e,an as v,q as I}from"./index-BF2ZrQZG.js";import{u as M}from"./f_D3jFwYaI-useToggleState.js";import{L as k,u as N,S as Q}from"./f_CCT1dFIk-lists.js";import{F as q}from"./f_D7HufTdo-FacePartSelector.js";import{f as G,c as P,B as $,F as z,a as E}from"./f_CSfoHQMM-filterConfig.js";import{u as R,G as W}from"./f_BTr3Zf9u-Gallery.js";import{M as j,C as A,c as H,s as i,u as T}from"./f_Cr4k8aXD-styles.js";import{B as x}from"./f_DYLjZCfp-Box.js";import{D as J,a as K}from"./f_DNM167fH-DialogTitle.js";import{I as O}from"./f_XUvX-Rkm-Close.js";import"./f_xkHyBaMY-three.js";import"./f_D0DQ6Xx7-createSvgIcon.js";import"./f_ByobH7CL-ButtonBase.js";import"./f_BeEF97wr-Selector.js";import"./f_DcG7boJm-GlowToggle.js";import"./f_CG99TNWd-Popover.js";import"./f_rFMAUBhM-useTheme.js";/* empty css                 */function U({compact:c,searchQuery:r,filter:s,content:m,onSelect:a}){const u=R(o=>o[`chara-${m}`])??[],d=u.filter(({id:o})=>!o.endsWith("h")),[h,l]=n([]),[g,p]=n(!1);return C(()=>l(d),[m]),C(()=>{p(!0);async function o(){const t=r?await v(r):d;return await G(t,s)}setTimeout(async()=>{const t=await o();l(t),p(!1)})},[r,s]),u.length&&!g?e(W,{list:h,component:c?j:A,onClick:a}):e(k,{})}const F=H.find(({value:c})=>c==="chara").options,V=[],X={...i.top,"& .Selector":{margin:"0.1rem 2rem 0.1rem 0"}};function fe({compact:c,onSelect:r,onAfterSelect:s}){const m=!!indexedDB,[a,u]=n(0),d=(S,f)=>u(f),[h,l]=n(""),g=N(h,500);C(()=>{l("")},[a]);const[p,o]=n(V),[t,w]=n("Both"),[D,L]=M(!0),y=F[a].value==="regular"&&P,B=c||T("(max-width:640px)")||T("(max-height:640px)"),b=I(S=>{const{value:f}=S.currentTarget.dataset;t!=="Eyes"&&r(f,"mouth"),t!=="Mouth"&&r(f,"eye"),s==null||s()},[t]);return e(x,{className:"FaceTexture",sx:i.root,children:[e(x,{sx:X,children:[e(J,{sx:i.title,children:"Select Texture"}),e(q,{value:t,onClick:w}),e($,{options:F,selectedIndices:[a],setIndex:d}),e(x,{sx:i.searchFilter,children:[e(x,{sx:i.search,children:[e(Q,{query:h,onChange:l,placeholder:m?"Search All":"Search"},a[0]),y&&e(O,{onClick:L,size:"large",children:e(z,{})})]}),D&&y&&e(E,{config:y,onChange:o,compact:B})]})]}),e(K,{sx:i.content,children:e(U,{compact:B,searchQuery:g,filter:p,content:F[a].value,onSelect:b})})]})}export{fe as default};