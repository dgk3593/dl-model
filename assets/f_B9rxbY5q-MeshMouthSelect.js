import{n as N,o as S,u as c,r as X}from"./index-C0jUwk_y.js";import{B as z}from"./f_BQbYC9Yi-Box.js";import{B as C}from"./f_CekGJpok-Button.js";const O=t=>`${S}/${t}/${t}.png`,Y=[1,2,3,4,5,6,7,8,9],$=64,H=Y.map(t=>{if(t===1)return[-280,-170];const e=(t-2)%4,n=Math.floor(t/6),o=-(24+e*128),s=-(298+n*128);return[o,s]}),T=(t,e)=>{const[n,o]=H[e-1],[s,a]=N(t),r=s*128,u=a*128,h=n-r,i=o+u;return{x:h,y:i}},W=(t,e)=>{const{x:n,y:o}=T(t,e),s=o-$/2;return{x:n,y:s}};function k({texture:t,x:e,y:n,...o}){const a={backgroundImage:`url(${O(t)})`,backgroundSize:"512px 512px",backgroundPosition:`${e}px ${n}px`,width:$,height:$/2};return c("div",{style:a,...o})}function L({texture:t,index:e,...n}){const{x:o,y:s}=T(t,e);return c(k,{texture:t,x:o,y:s,className:"EyeBox",...n})}function Q({texture:t,index:e,...n}){const{x:o,y:s}=W(t,e);return c(k,{texture:t,x:o,y:s,className:"EyeBox",...n})}const P=t=>{let e=t[0],n=t[0];return t.forEach(o=>{e=o<e?o:e,n=o>n?o:n}),[e,n]},j=t=>t.map(e=>{const n=e.geometry.attributes.uv.array,o=n.filter((i,x)=>x%2===0),s=n.filter((i,x)=>x%2===1),[a,r]=P(o),[u,h]=P(s);return{u:[a,r],v:[u,h]}}),A=t=>`${S}/${t}/${X(t)}.png`,m=1024,d=160;function Z({id:t,uvList:e,onClick:n,part:o}){const s=A(t).replace(">",""),[a,r]=e[0].u,[u,h]=e[0].v,i=r-a,x=h-u,U=i*m,I=x*m,M=U/d,p=m/M,l=I/M,R={width:d,height:l,position:"relative",borderRadius:"0.5rem",overflow:"hidden"},b={content:'""',position:"absolute",backgroundImage:`url(${s})`,backgroundSize:`${p}px ${p}px`,width:d,height:l},_=({u:f,v:g})=>{const v=f[1]-f[0]!==i,D=f[0],F=g[0],y=D*p,B=F*p,E=v?(d-l)/2:0;return v?{width:l,height:d,"&::after":{...b,width:l,height:d,backgroundPosition:`left -${y}px bottom -${B}px`,transform:`rotate(90deg) translate(-${E}px, -${E}px)`,position:"absolute"}}:{width:d,height:l,position:"relative","&::after":{...b,backgroundPosition:`left -${y}px bottom -${B}px`}}};return c("div",{className:"MeshFaceButton",children:[e.map((f,g)=>c("div",{style:R,onClick:n,"data-index":g+1,"data-part":o,children:c(z,{sx:_(f)})})),c(C,{"data-part":o,"data-index":"0",onClick:n,variant:"outlined",children:"Remove"})]})}const q=([t,...e])=>`${t.toUpperCase()}${e.join("")}`;function w({target:t,onSelect:e,part:n}){var r;const o=(r=t==null?void 0:t.face)==null?void 0:r[`${n}List`];if(!o)return null;const s=t.userData[`${n}Uv`]??j(o);t.userData[`${n}Uv`]=s;const a=u=>{const{index:h,part:i}=u.currentTarget.dataset;e(parseInt(h),i)};return o&&c("div",{className:"MeshPartSelect",children:[c("h3",{children:["Select ",q(n)]}),c(Z,{id:t.id,uvList:s,onClick:a,part:n})]})}const V=t=>c(w,{part:"eye",...t}),tt=t=>c(w,{part:"mouth",...t});export{L as E,Q as M,V as a,tt as b,A as c,j as g,Y as i};