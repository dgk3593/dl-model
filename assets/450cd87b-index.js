import{l as d,v as t,o as e,h as C,u as S}from"./index-243a6f1f.js";import{u}from"./dca34302-useToggleState.js";import{G as k}from"./38eb6fba-GlowToggle.js";import{B as l}from"./206e7d59-Button.js";import{a as x}from"./beff0d02-Popover.js";import{S as P,B as T,b,a as B,P as R,c as y}from"./d8fe2bb5-SkipPrevious.js";import{I as A,C as w}from"./cd5ea58b-Close.js";import"./84b6da78-three.js";import"./66303c57-ButtonBase.js";import"./5a7cfe69-createSvgIcon.js";const g={popover:{backgroundColor:"#101010",minHeight:"16.5rem",maxHeight:"80vh",display:"flex",padding:"0.3rem",paddingBottom:"1.5rem",flexDirection:"column",justifyContent:"flex-end",alignItems:"center","& .MuiSlider-root":{marginRight:"3.2rem"}},slider:{minHeight:"15rem",maxHeight:"90%","& span.MuiSlider-markLabel":{color:"#bbb",textAlign:"right",width:"2.3rem"},"& span.MuiSlider-markLabelActive":{color:"#fff"}}},F=[.25,.5,.75,1,1.25,1.5,1.75,2].map(o=>({value:o,label:`${o}x`}));function H(){const[o,s]=d(t.loop.timeScale),[i,n]=d(null),c=r=>{r.stopPropagation(),n(r.currentTarget)},m=()=>n(null),p=(r,a)=>{t.loop.timeScale=a,s(a)};return e(C,{children:[e(l,{title:"Time Scale",onClick:c,children:`${o}x`}),e(x,{anchorEl:i,open:!!i,onClose:m,className:"TimeScaleSelect",PaperProps:{sx:g.popover},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"left"},children:e(P,{orientation:"vertical",track:!1,marks:F,min:.25,max:2,step:.05,value:o,onChange:p,sx:g.slider})})]})}function _(){const[o,s]=u(t.loop.paused),[i,n]=u(t.loop.reverse),{toggleTimeControl:c}=S(),m=()=>{o?t.loop.resume():t.loop.pause(),s()},p=()=>{t.loop.reverse=!i,n()},r=a=>{const{dir:h}=a.currentTarget.dataset,v=h==="next"?1:-1,f=1/60*v;t.update(f)};return e("div",{className:"TimeControl",children:[e(T,{children:[e(l,{variant:"contained","data-dir":"prev",onClick:r,title:"Previous Frame",children:e(b,{})}),e(l,{variant:"contained",onClick:m,title:o?"Resume":"Pause",children:o?e(B,{}):e(R,{})}),e(l,{variant:"contained","data-dir":"next",onClick:r,title:"Next Frame",children:e(y,{})})]}),e(k,{type:"text",value:"Reverse",checked:i,onClick:p,title:"Click to change animation direction"}),e(H,{}),e(A,{onClick:c,title:"Close",children:e(w,{})})]})}export{_ as default};