/* empty css                 */import{N as ee,u as a,_ as te,r as Te,h as k,b as ae,k as y,p as E,G as oe,H as $e,Q as Ae,I as Fe,S as Be,g as ze,v as J,a as De}from"./index-CVXT0yTI.js";import{M as Le}from"./f_lXc9Qj2m-ModelIcon.js";import{A as O}from"./f_xrNGIdcN-Accordion.js";import{M as le,T as Ie}from"./f_Szi-eqaZ-filterConfig.js";import{b as We,c as Re,S as ye,T as ne,u as Se}from"./f_v4Z2_oKV-Gallery.js";import{a as se,g as ie,s as P,B as _e,_ as f,r as He,d as re,e as H,c as C,f as ce,u as xe,b as he,x as Oe,y as Ve}from"./f_Ay6M4Czo-ButtonBase.js";import{u as Ee,B as je,M as Ge,c as ke,a as Ue,F as qe,P as Ke}from"./f_1HPpxPCi-Popover.js";import{C as Xe}from"./f_AbBaWbtc-ColorButton.js";import{S as Ye,B as Qe,a as Je,P as Ze,b as et,c as tt}from"./f_pL79P6Dc-SkipPrevious.js";import{u as j}from"./f_zuz8L4CH-useKey.js";import{C as G,I as de}from"./f_CyD_Ow3q-Close.js";import{c as g}from"./f_nvRIFyfu-createSvgIcon.js";import{B as x}from"./f_6IUpBAdX-Button.js";import{B as at}from"./f_vSIS7KYZ-Box.js";import{b as ot}from"./f_ELjnEHza-DialogTitle.js";import lt from"./f_BtuvdPUu-index.js";import nt from"./f_0Ge8qFOI-index.js";import{u as ve}from"./f_qtUa96wf-useToggleState.js";import{G as st}from"./f_wJnDAivm-GlowToggle.js";import it from"./f_w3ITQbqD-index.js";function rt(e){return se("PrivateSwitchBase",e)}ie("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const ct=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],dt=e=>{const{classes:t,checked:o,disabled:l,edge:n}=e,s={root:["root",o&&"checked",l&&"disabled",n&&`edge${C(n)}`],input:["input"]};return ce(s,rt,t)},pt=P(_e)(({ownerState:e})=>f({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),ut=P("input",{shouldForwardProp:He})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),mt=ee(function(t,o){const{autoFocus:l,checked:n,checkedIcon:s,className:r,defaultChecked:c,disabled:i,disableFocusRipple:d=!1,edge:u=!1,icon:h,id:p,inputProps:m,inputRef:v,name:N,onBlur:b,onChange:M,onFocus:F,readOnly:I,required:B=!1,tabIndex:U,type:z,value:W}=t,q=re(t,ct),[V,D]=Ee({controlled:n,default:!!c,name:"SwitchBase",state:"checked"}),w=We(),R=A=>{F&&F(A),w&&w.onFocus&&w.onFocus(A)},K=A=>{b&&b(A),w&&w.onBlur&&w.onBlur(A)},X=A=>{if(A.nativeEvent.defaultPrevented)return;const me=A.target.checked;D(me),M&&M(A,me)};let T=i;w&&typeof T>"u"&&(T=w.disabled);const Y=z==="checkbox"||z==="radio",$=f({},t,{checked:V,disabled:T,disableFocusRipple:d,edge:u}),ue=dt($);return a(pt,f({component:"span",className:H(ue.root,r),centerRipple:!0,focusRipple:!d,disabled:T,tabIndex:null,role:void 0,onFocus:R,onBlur:K,ownerState:$,ref:o},q,{children:[a(ut,f({autoFocus:l,checked:n,defaultChecked:c,className:ue.input,disabled:T,id:Y?p:void 0,name:N,onChange:X,readOnly:I,ref:v,required:B,ownerState:$,tabIndex:U,type:z},z==="checkbox"&&W===void 0?{}:{value:W},m)),V?s:h]}))}),ht=mt;function vt(e){return se("MuiDialog",e)}const bt=ie("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),Q=bt,ft=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],yt=P(je,{name:"MuiDialog",slot:"Backdrop",overrides:(e,t)=>t.backdrop})({zIndex:-1}),St=e=>{const{classes:t,scroll:o,maxWidth:l,fullWidth:n,fullScreen:s}=e,r={root:["root"],container:["container",`scroll${C(o)}`],paper:["paper",`paperScroll${C(o)}`,`paperWidth${C(String(l))}`,n&&"paperFullWidth",s&&"paperFullScreen"]};return ce(r,vt,t)},xt=P(Ge,{name:"MuiDialog",slot:"Root",overridesResolver:(e,t)=>t.root})({"@media print":{position:"absolute !important"}}),kt=P("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.container,t[`scroll${C(o.scroll)}`]]}})(({ownerState:e})=>f({height:"100%","@media print":{height:"auto"},outline:0},e.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},e.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),gt=P(ke,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.paper,t[`scrollPaper${C(o.scroll)}`],t[`paperWidth${C(String(o.maxWidth))}`],o.fullWidth&&t.paperFullWidth,o.fullScreen&&t.paperFullScreen]}})(({theme:e,ownerState:t})=>f({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},t.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},t.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},t.maxWidth==="xs"&&{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${Q.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},t.maxWidth&&t.maxWidth!=="xs"&&{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,[`&.${Q.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[t.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${Q.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),Ct=ee(function(t,o){const l=xe({props:t,name:"MuiDialog"}),n=Ue(),s={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{"aria-describedby":r,"aria-labelledby":c,BackdropComponent:i,BackdropProps:d,children:u,className:h,disableEscapeKeyDown:p=!1,fullScreen:m=!1,fullWidth:v=!1,maxWidth:N="sm",onBackdropClick:b,onClose:M,open:F,PaperComponent:I=ke,PaperProps:B={},scroll:U="paper",TransitionComponent:z=qe,transitionDuration:W=s,TransitionProps:q}=l,V=re(l,ft),D=f({},l,{disableEscapeKeyDown:p,fullScreen:m,fullWidth:v,maxWidth:N,scroll:U}),w=St(D),R=te(),K=$=>{R.current=$.target===$.currentTarget},X=$=>{R.current&&(R.current=null,b&&b($),M&&M($,"backdropClick"))},T=Re(c),Y=Te(()=>({titleId:T}),[T]);return a(xt,f({className:H(w.root,h),closeAfterTransition:!0,components:{Backdrop:yt},componentsProps:{backdrop:f({transitionDuration:W,as:i},d)},disableEscapeKeyDown:p,onClose:M,open:F,ref:o,onClick:X,ownerState:D},V,{children:a(z,f({appear:!0,in:F,timeout:W,role:"presentation"},q,{children:a(kt,{className:H(w.container),onMouseDown:K,ownerState:D,children:a(gt,f({as:I,elevation:24,role:"dialog","aria-describedby":r,"aria-labelledby":T},B,{className:H(w.paper,B.className),ownerState:D,children:a(ot.Provider,{value:Y,children:u})}))})}))}))}),Mt=Ct;function wt(e){return se("MuiSwitch",e)}const Pt=ie("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),S=Pt,Nt=["className","color","edge","size","sx"],Tt=e=>{const{classes:t,edge:o,size:l,color:n,checked:s,disabled:r}=e,c={root:["root",o&&`edge${C(o)}`,`size${C(l)}`],switchBase:["switchBase",`color${C(n)}`,s&&"checked",r&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},i=ce(c,wt,t);return f({},t,i)},$t=P("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.edge&&t[`edge${C(o.edge)}`],t[`size${C(o.size)}`]]}})(({ownerState:e})=>f({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},e.edge==="start"&&{marginLeft:-8},e.edge==="end"&&{marginRight:-8},e.size==="small"&&{width:40,height:24,padding:7,[`& .${S.thumb}`]:{width:16,height:16},[`& .${S.switchBase}`]:{padding:4,[`&.${S.checked}`]:{transform:"translateX(16px)"}}})),At=P(ht,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.switchBase,{[`& .${S.input}`]:t.input},o.color!=="default"&&t[`color${C(o.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${S.checked}`]:{transform:"translateX(20px)"},[`&.${S.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${S.checked} + .${S.track}`]:{opacity:.5},[`&.${S.disabled} + .${S.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${S.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:t})=>f({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:he(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${S.checked}`]:{color:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:he(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${S.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t.color}DisabledColor`]:`${e.palette.mode==="light"?Oe(e.palette[t.color].main,.62):Ve(e.palette[t.color].main,.55)}`}},[`&.${S.checked} + .${S.track}`]:{backgroundColor:(e.vars||e).palette[t.color].main}})),Ft=P("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`})),Bt=P("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),zt=ee(function(t,o){const l=xe({props:t,name:"MuiSwitch"}),{className:n,color:s="primary",edge:r=!1,size:c="medium",sx:i}=l,d=re(l,Nt),u=f({},l,{color:s,edge:r,size:c}),h=Tt(u),p=a(Bt,{className:h.thumb,ownerState:u});return a($t,{className:H(h.root,n),sx:i,ownerState:u,children:[a(At,f({type:"checkbox",icon:p,checkedIcon:p,ref:o,ownerState:u},d,{classes:f({},h,{root:h.switchBase})})),a(Ft,{className:h.track,ownerState:u})]})}),Dt=zt,pe=g(a("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add"),Lt=g(a("path",{d:"M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5"}),"Attachment"),ge=g(a("path",{d:"m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25z"}),"AutoAwesome"),It=g([a("path",{d:"M15.54 5.54 13.77 7.3 12 5.54 10.23 7.3 8.46 5.54 12 2zm2.92 10-1.76-1.77L18.46 12l-1.76-1.77 1.76-1.77L22 12zm-10 2.92 1.77-1.76L12 18.46l1.77-1.76 1.77 1.76L12 22zm-2.92-10 1.76 1.77L5.54 12l1.76 1.77-1.76 1.77L2 12z"},"0"),a("circle",{cx:"12",cy:"12",r:"3"},"1")],"ControlCamera"),Wt=g(a("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zm-5.04-6.71-2.75 3.54-1.96-2.36L6.5 17h11z"}),"CropOriginal"),Ce=g(a("path",{d:"M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m-3.6 13.9 1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2z"}),"DirectionsRun"),Rt=g(a("path",{d:"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11"}),"Extension"),Me=g(a("path",{d:"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25m6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8"}),"Face"),_t=g(a("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5m-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5"}),"Mood"),Ht=g(a("path",{d:"M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10z"}),"OpenInFull"),Ot=g(a("path",{d:"M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"PersonOutlined"),Vt=g(a("path",{d:"M2 20h20v-4H2zm2-3h2v2H4zM2 4v4h20V4zm4 3H4V5h2zm-4 7h20v-4H2zm2-3h2v2H4z"}),"Storage"),Et=g(a("path",{d:"M19.51 3.08 3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41M11.88 3 3 11.88v2.83L14.71 3zM5 3c-1.1 0-2 .9-2 2v2l4-4zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4zm-9.71 0h2.83L21 12.12V9.29z"}),"Texture"),jt=g(a("path",{d:"M12 7C6.48 7 2 9.24 2 12c0 2.24 2.94 4.13 7 4.77V20l4-4-4-4v2.73c-3.15-.56-5-1.9-5-2.73 0-1.06 3.04-3 8-3s8 1.94 8 3c0 .73-1.46 1.89-4 2.53v2.05c3.53-.77 6-2.53 6-4.58 0-2.76-4.48-5-10-5"}),"ThreeSixty");function we({options:e,value:t,onChange:o,...l}){return a(ye,{className:"SelectBox",value:t,onChange:s=>o(s.target.value),...l,children:e.map(({value:s,label:r=s,title:c})=>a(le,{value:s,title:c,children:r}))})}function Gt({target:e,keyList:t,labels:o=[],scale:l=1,inputProps:n={},onBeforeChange:s=void 0,onChange:r=void 0,...c}){const i=t.map(m=>e[m]/l),[d,u]=k(i),h=m=>{const v=m.currentTarget.value;if(v.endsWith("."))return;const N=parseInt(m.currentTarget.getAttribute("index")),b=parseFloat(v);if(isNaN(b))return;let M;u(B=>(M=[...B],M[N]=b,M));const F=b*l,I=t[N];s==null||s(M),e[I]=F,r==null||r(M)},p=m=>m.currentTarget.select();return a("div",{className:"SetNumbers",...c,children:t.map((m,v)=>a(ne,{className:"SetNumbers-number",onChange:h,value:d[v],label:o[v]??m,size:"small",margin:"dense",variant:"outlined",inputProps:{type:"number",index:v,onFocus:p,...n}},m))})}const Ut=["x","y","z","w"];function Z({target:e,dimension:t=3,scale:o=1,min:l,max:n,step:s,...r}){const c=Ut.slice(0,t);return a(Gt,{target:e,keyList:c,scale:o,inputProps:{min:l,max:n,step:s},className:"SetVector SetNumbers","data-dimension":t,...r})}const qt=(e,t=-1/0,o=1/0)=>{if(e===void 0)return;let l=e;return l<t&&(l=t),l>o&&(l=o),l};function Pe({target:e,propName:t,label:o,min:l,max:n,step:s=1,onBeforeChange:r,onChange:c,...i}){const[d,u]=k(e[t]);return a("div",{className:"SetNumber",children:a(ne,{onChange:p=>{if(!p.currentTarget.value)return;const m=parseFloat(p.currentTarget.value)||l;let v=qt(m,l,n);u(v),r==null||r(v),e[t]=v,c==null||c(v)},value:d,label:o,size:"small",margin:"dense",variant:"outlined",inputProps:{type:"number",min:l,max:n,step:s},...i})})}function Kt({target:e,propName:t,label:o,inputProps:l={},onBeforeChange:n,onChange:s,...r}){const[c,i]=k(e[t]);return a("div",{className:"SetString",children:a(ne,{onChange:u=>{const h=u.currentTarget.value;i(h),n==null||n(h),e[t]=h,s==null||s(h)},value:c,label:o,size:"small",margin:"dense",variant:"outlined",inputProps:l,...r})})}function Xt({target:e,propName:t,onBeforeChange:o,onChange:l}){const[n,s]=k(e[t]);return a("div",{className:"SetBoolean",children:a(Dt,{onChange:()=>{const c=!n;s(c),o==null||o(c),e[t]=c,l==null||l(c)},checked:n})})}function Yt({target:e,propName:t,onBeforeChange:o,onChange:l}){const[n,s]=k(e[t]),{inputColor:r}=ae(),c=async()=>{const i=await r();i&&(s(i),o==null||o(i),e[t]=i,l==null||l(i))};return a("div",{className:"SetColor",children:a(Xe,{color:n.startsWith("#")?n:"#"+n,onClick:c,style:{border:"1px solid rgba(255, 255, 255, 0.5)"}})})}function Qt({target:e,propName:t,label:o,options:l,onBeforeChange:n,onChange:s,...r}){const[c,i]=k(e[t]);return a("div",{className:"SetFromList",children:a(we,{onChange:u=>{i(u),n==null||n(u),e[t]=u,s==null||s(u)},options:l,value:c,size:"small",margin:"dense",...r})})}function Jt({target:e,propName:t,label:o=t,title:l,valueMap:n=String,min:s=0,max:r=1,step:c=.01,onBeforeChange:i,onChange:d,...u}){const[h,p]=k(e[t]),m=(N,b)=>{p(b),i==null||i(b),e[t]=b,d==null||d(b)},v=`${o}: ${n(h)}`;return a(y,{children:[a("div",{className:"Setters-label",title:l,children:v}),a("div",{className:"Setters-slider",children:a(Ye,{size:"small",value:h,min:s,max:r,step:c,onChange:m,...u})})]})}function L({target:e,propList:t}){const o=t.map(l=>{const{propName:n,label:s=n,title:r,type:c,...i}=l,d=Zt[c];switch(c){case"slider":return a(Jt,{target:e,propName:n,label:s,title:r,...i});case"vector":return a(y,{children:[a("div",{className:"Setters-label vector",title:r,children:s}),a(Z,{target:e[n],...i})]});default:return a(y,{children:[a("div",{className:"Setters-label",title:r,children:s}),a(d,{target:e,propName:n,...i})]})}});return a("div",{className:"Setters",children:o})}const Zt={boolean:Xt,number:Pe,string:Kt,color:Yt,select:Qt};function ea({target:e,name:t}){if(!e)return null;const o=e.list.map(n=>({value:n}));o.push({value:"None"});const l=[{propName:"current",label:t.replaceAll("_"," "),type:"select",options:o}];return a(L,{target:e,propList:l})}function ta({list:e}){const t=e.map(({name:c})=>c),o=c=>e.find(({name:i})=>i===c),l=Object.fromEntries(t.map(c=>{var i;return[c,(i=o(c))==null?void 0:i.visible]})),[n,s]=k(l);return a(Ie,{name:"",options:t,type:"text",state:n,toggle:(c,i)=>{const d=!n[i];s({...n,[i]:d}),o(i).visible=d}})}function aa({target:e}){const{parts:t}=e;if(!t)return null;const{list:o,others:l}=t;return a("div",{className:"BodyPartsController",children:[o.map(n=>a(ea,{target:t[n],name:n})),l.length>0&&a(O,{children:[a(y,{children:o.length?"Other Parts":"Body Parts"}),a(ta,{list:l})]})]})}const oa=[{value:"img/textures/particle/cloud.png",label:"Cloud"},{value:"img/textures/particle/smoke.png",label:"Smoke"},{value:"img/textures/particle/heart.png",label:"Heart"}],la=[{propName:"visible",label:"Visible",type:"boolean"},{propName:"speed",label:"Speed",type:"slider",title:"How fast the aura rises",min:0,max:10,step:.5},{propName:"auraSize",label:"Aura Size",type:"number",title:"How big the aura is",min:0,step:10},{propName:"auraOpacity",label:"Aura Opacity",type:"slider",title:"How opaque the aura is",min:0,max:1,step:.05},{propName:"particleSize",label:"Particle Size",type:"number",title:"How big the particles are",min:0,step:1},{propName:"particleOpacity",label:"Particle Opacity",type:"slider",title:"How opaque the particles are",min:0,max:1,step:.05},{propName:"spread",label:"Spread",type:"number",title:"Distance from the model",min:0,step:1},{propName:"threshold",label:"Threshold",type:"slider",title:"Higher value means less aura, more particles",min:0,max:.7,step:.05},{propName:"color",label:"Color",type:"color"},{propName:"color2",label:"Color 2",type:"color"},{propName:"texture",label:"Texture",type:"select",options:oa}];function na({target:e}){const{name:t}=e,l=a(de,{title:"Remove",className:"closeButton",onClick:n=>{n.stopPropagation(),e.dispose()},children:a(G,{})});return a(O,{disableGutters:!0,className:"AuraController",children:[a(y,{children:[t,l]}),a(L,{target:e,propList:la})]})}function sa({target:e}){const{particle:t}=e,[o,l]=j();E(()=>{const{list:s}=t,r=s.addEventListener("change",l);return()=>s.removeEventListener("change",r)},[]);const n=s=>{s.stopPropagation(),t.add(),l()};return a(O,{disableGutters:!0,className:"ParticleController",children:[a(y,{children:[a("div",{className:"title",children:[a(ge,{}),"Particles"]}),a(x,{onClick:n,title:"Add particles",variant:"contained",children:a(pe,{})})]}),a(oe.Fragment,{children:t.list.length?t.list.map((s,r)=>a(na,{target:s},o+r)):"Click + to add particles"},o)]})}const ia=({onClick:e,color:t="#101010",title:o})=>a(at,{position:"absolute",top:0,right:0,children:a(de,{sx:{color:t,zIndex:5},onClick:e,size:"large",title:o,children:a(G,{})})}),ra={sx:{margin:"0.3rem",minWidth:"12rem",minHeight:"12rem",maxHeight:"calc(100% - 2rem)"}},Ne=({children:e,open:t,closeModal:o,...l})=>t?$e(a(Mt,{className:"Modal",maxWidth:"lg",open:t,onClose:o,PaperProps:ra,...l,children:[a(ia,{onClick:o,title:"Close"}),e]}),document.getElementById("modal-root")):a(y,{}),ca={face:lt,faceTexture:nt};function da({target:e}){const t=e==null?void 0:e.face;if(!t)return a(y,{});const[o,l]=k(""),n=()=>l(""),s=ca[o]??y,r=i=>{const{value:d}=i.currentTarget.dataset;l(d)},c=(...i)=>{const[d,u]=i;switch(o){case"face":e.face[`${u}BaseIdx`]=d;return;case"faceTexture":e.face[`${u}Texture`]=d;return;default:return}};return a("div",{className:"FaceController",children:[a(x,{variant:"contained",startIcon:a(_t,{}),onClick:r,"data-value":"face",children:"Facial Expresion"}),t.type==="uv"&&a(x,{variant:"contained",startIcon:a(Me,{}),onClick:r,"data-value":"faceTexture",children:"Face Texture"}),a(Ne,{closeModal:n,open:!!o,children:a(s,{target:e,onSelect:c,onAfterSelect:n})})]})}const pa={backgroundColor:"#101010",color:"#ccc","& li:not(:last-child)":{borderBottom:"1px solid #ffffff33"},"& li[data-current]":{backgroundColor:"#202020",color:"#fff",borderColor:"#fff"},"& li:hover":{backgroundColor:"#ffffff33"}};function ua({target:e,isReverse:t}){const{animation:o}=e,l=Math.abs(o.mixer.timeScale),[n,s]=k(l),[r,c]=k(null),i=p=>{p.stopPropagation(),c(p.currentTarget)},d=()=>c(null),u=Array(8).fill().map((p,m)=>m*.25+.25),h=p=>{const{value:m}=p.target.dataset;o.mixer.timeScale=t?-m:m,s(parseFloat(m)),d()};return a(y,{children:[a(x,{title:"Time Scale",onClick:i,children:`${n}x`}),a(Ke,{anchorEl:r,open:!!r,onClose:d,className:"TimeScaleSelect",PaperProps:{sx:pa},children:u.map(p=>a(le,{onClick:h,"data-value":p,"data-current":p===n,children:`${p}x`}))})]})}function ma({target:e}){const{animation:t}=e,[o,l]=ve(t.isPaused),[n,s]=ve(t.mixer.timeScale<0),r=()=>{o?t.resume():t.pause(),l()},c=()=>{t.mixer.timeScale*=-1,s()},i=d=>{const{dir:u}=d.currentTarget.dataset,h=u==="next"?1:-1,m=1/60*h;o?(t.resume(),t.update(m),t.pause()):t.update(m)};return a("div",{className:"ModelTimeControl",children:[a(Qe,{children:[a(x,{variant:"contained","data-dir":"prev",onClick:i,title:"Previous Frame",children:a(Je,{})}),a(x,{variant:"contained",onClick:r,title:o?"Resume":"Pause",children:o?a(Ze,{}):a(et,{})}),a(x,{variant:"contained","data-dir":"next",onClick:i,title:"Next Frame",children:a(tt,{})})]}),a(st,{type:"text",value:"Reverse",checked:n,onClick:c}),a(ua,{isReverse:n,target:e})]})}function ha({target:e}){const{inputAni:t}=ae(),{toggle:o,setTarget:l}=Ae(),{loadState:n}=Fe(),s=async()=>{var m;n(e==null?void 0:e.userData.aniSelectState);const i=await t();if(!i)return;const d=e==null?void 0:e.animation.isPaused,[u,h]=i;e==null||e.animation.addChain(u).then(()=>d&&e.animation.pause());const p=Be(u,h);e!=null&&e.userData&&(((m=e.userData.chain)==null?void 0:m.splice(0,1/0,...p))??(e.userData.chain=p))},r=()=>{var i,d;(i=e==null?void 0:e.animation)==null||i.reset(),(d=e==null?void 0:e.userData)==null||d.chain.splice(0,1/0)},c=()=>{l(e),n(e==null?void 0:e.userData.aniSelectState),o()};return a("div",{className:"AnimationController",children:[a(ma,{target:e}),a(x,{variant:"contained",startIcon:a(Ce,{}),onClick:s,title:"Add Animation",children:"Add Animation"}),a(x,{variant:"contained",startIcon:a(Vt,{}),onClick:c,title:"Open Chain Maker",children:"Chain Maker"}),a(x,{variant:"contained",startIcon:a(G,{}),onClick:r,title:"Remove Animation",children:"Reset"})]})}function va({target:e}){var h;if(!e)return a(y,{});const{inputModel:t}=ae(),o=["root",...((h=e==null?void 0:e.bones)==null?void 0:h.list)??[]],[l,n]=k(o[0]),s=ze(e.attachment.list.map(p=>p.parentBone)),[r,c]=j();E(()=>e==null?void 0:e.addEventListener("AttachmentChanged",c),[]);const i=p=>n(p.target.value),d=async(p=l)=>{const m=await t();if(!m)return;const[v,N]=m,b=await J.loadDLModel(v);b.userData.name=N,e.attach(b,p==="root"?void 0:p),b.outline.code=e.outline.code,b.material.code=e.material.code,J.render()},u=()=>d();return a(oe.Fragment,{children:[a("div",{className:"AttachmentController-add",children:[a(ye,{className:"AttachmentController-select",onChange:i,value:l,children:o.map(p=>a(le,{value:p,children:p},p))}),a(x,{title:"Add attachment to selected joint",variant:"contained",onClick:u,children:a(pe,{})})]}),a("div",{className:"AttachmentList",children:s.map(p=>a(Wa,{target:e,add:d,bone:p},p))},r)]},e.uniqueId)}const ba=a("img",{className:"btn-icon",src:"img/appIcon/weapon.png",alt:"Add Weapon"});function fa({target:e}){const[t,o]=k(!1),l=e.bones.list.includes("jWeaponR"),n=()=>o(!1);return a("div",{className:"AttachmentController",children:[l&&a(x,{title:"Add Weapon",startIcon:ba,onClick:()=>o(!0),children:"Add Weapon"}),a(va,{target:e}),a(Ne,{open:t,closeModal:n,children:a(it,{target:e})})]})}const ya={propName:"texture",label:"Texture",type:"select"};function Sa({target:e}){const t=Se(l=>l["model-texture"]);if(!(t!=null&&t[e.id]))return null;const o=[{...ya,options:t[e.id]}];return a("div",{className:"TextureController",children:a(L,{target:e,propList:o})})}const xa=e=>{var t,o;return!!((o=(t=Se.getState())==null?void 0:t["model-texture"])!=null&&o[e])},ka=["Position","Rotation","Scale","Outline","Material","Particles","Animation","Attachment"],ga={Position:It,Rotation:jt,Scale:Ht,Outline:Ot,Material:Et,Particles:ge,Animation:Ce,Attachment:Lt,"Body Parts":Rt,Face:Me,Texture:Wt},Ca=({target:e,type:t,...o})=>{switch(t){case"Position":return a(Z,{target:e.position,step:.005,...o},"position");case"Rotation":return a(Z,{target:e.rotation,min:-1,max:1,step:.05,scale:Math.PI*2,...o},"rotation");case"Scale":return a(Pe,{target:e,propName:"scale",label:"Scale",step:.05,...o});case"Outline":return a(Aa,{target:e});case"Material":return a(La,{target:e});case"Particles":return a(sa,{target:e});case"Animation":return a(ha,{target:e});case"Attachment":return a(fa,{target:e});case"Face":return a(da,{target:e});case"Body Parts":return a(aa,{target:e});case"Texture":return a(Sa,{target:e});default:return a(y,{})}},Ma=e=>{const t=[...ka];return e.face&&t.push("Face"),e.parts&&t.push("Body Parts"),xa(e.id)&&t.push("Texture"),t},wa=e=>e.map(t=>({value:t})),Pa=e=>e.map(t=>{const o=ga[t]??y;return{value:t,icon:a(o,{})}});function Na({value:e,onChange:t,tabs:o,orientation:l="horizontal",className:n=""}){n=`IconTabBar ${n} `+l;const s=r=>{const{value:c}=r.currentTarget.dataset;t(c)};return a("div",{className:n,children:o.map(r=>{const{icon:c,value:i,title:d=i}=r;return a("button",{...e===i&&{className:"selected"},title:d,"data-value":i,onClick:s,children:c})})})}function Ta({value:e,list:t,onChange:o}){const l=Pa(t);return a("div",{children:a(Na,{className:"QuickAccess",value:e,onChange:o,tabs:l})})}function $a({target:e}){const t=Ma(e),[o,l]=k(e.userData.controller??t[0]),n=wa(t),s=r=>{e.userData.controller=r,l(r)};return a("div",{className:"ModelController",children:[a(Ta,{list:t,value:o,onChange:s}),a(we,{options:n,value:o,onChange:s,fullWidth:!0,size:"small"}),a(Ca,{type:o,target:e})]})}const be=[{propName:"enabled",label:"Enabled",type:"boolean"},{propName:"size",label:"Size",type:"slider",min:1,max:20,step:1},{propName:"opacity",label:"Opacity",type:"slider",step:.1,valueMap:e=>`${~~(e*100)}%`},{propName:"color",label:"Color",type:"color"}];function Aa({target:e}){const{outline:t}=e,[o,l]=j(),n=te(!1);E(()=>{const c=t.addEventListener("change",()=>{if(n.current){n.current=!1;return}l()});return()=>t.removeEventListener("change",c)},[]);const s=()=>{const{code:c}=t;e.attachment.traverse(i=>i.outline.code=c)};be.forEach(c=>{c.onBeforeChange=()=>n.current=!0,c.onChange=s});const r=()=>{const c=J.settings.outline;Object.entries(c).forEach(([i,d])=>{t[i]=d}),s(),l()};return a(y,{children:[a(L,{target:t,propList:be},o),a("div",{className:"SettingGroup-extra",children:a(x,{onClick:r,children:"Reset"})})]})}const Fa=[{value:"Basic",title:"Most basic, doesn't respond to light"},{value:"Toon",title:"Toon shading, also called cell shading"},{value:"Lambert",title:"For matte or diffusely reflecting surface"},{value:"Phong",title:"For shiny surface"},{value:"Standard",title:"For physically based rendering"},{value:"Physical",title:"For physically based rendering, can simulate transparency like water or glass"},{value:"Matcap",title:"Material capture, doesn't respond to light"},{value:"MMDToon",label:"MMD Toon",title:"Combination of Phong, Toon, and Matcap material"}],Ba=[{value:"none",label:"None"},{value:"127,255",label:"2 Tones"},{value:"85,170,255",label:"3 Tones"},{value:"64,128,172,255",label:"4 Tones"}],za=[{label:"Fresnel",value:"matcap_fresnel.jpg"},{label:"Black Stone",value:"matcap_black_stone.jpg"},{label:"Chrome 1",value:"matcap_chrome_1.jpg"},{label:"Chrome 2",value:"matcap_chrome_2.jpg"},{label:"Brown Clay",value:"matcap_clay_brown.jpg"},{label:"Dark Brown Clay",value:"matcap_clay_dark_brown.jpg"},{label:"Flesh Clay",value:"matcap_clay_flesh_6.jpg"},{label:"Gray Clay",value:"matcap_clay_gray.jpg"},{label:"Metal Putty",value:"matcap_metal_putty.jpg"},{label:"Obsidian",value:"matcap_obsidian.jpg"},{label:"Pearl",value:"matcap_pearl.jpg"},{label:"Yellow Plastic",value:"matcap_plastic_yellow.jpg"},{label:"Sci-fi Plastic",value:"matcap_scifi_plastic.jpg"},{label:"Slick Mud",value:"matcap_slick_mud.jpg"},{label:"Shiny Metal",value:"metal_shiny.jpg"}],_=e=>`${~~(e*100)}%`,fe=[{propName:"type",label:"Type",type:"select",options:Fa}],Da=[{propName:"transparent",label:"Transparent",type:"boolean",title:"Whether to allow seeing through the model"},{propName:"opacity",label:"Opacity",type:"slider",title:"The opacity of the material",min:0,max:1,valueMap:_},{propName:"showTexture",label:"Texture",type:"boolean",title:"Show / hide model texture"},{propName:"color",label:"Color",type:"color",title:"The color of the material. Default is white"},{propName:"wireframe",label:"Wireframe",type:"boolean",title:"Whether to show the model as wireframe. Turn off outline to only see the wireframe"},{propName:"flatShading",label:"Flat Shading",type:"boolean",title:"Whether to use flat shading"},{propName:"emissive",label:"Emissive",type:"color",title:"The emissive color of the material, essentially a solid color unaffected by other lighting. Default is black"},{propName:"emissiveIntensity",label:"Emissive Intensity",type:"slider",title:"The intensity of the emissive light. Default is 1",min:0,max:1,valueMap:_},{propName:"specular",label:"Specular",type:"color"},{propName:"metalness",label:"Metalness",type:"slider",title:"How much the material is like a metal. Default is 0",min:0,max:1,valueMap:_},{propName:"roughness",label:"Roughness",type:"slider",title:"How rough the material is, 0 means a smooth mirror reflection, 1 means fully diffuse. Default is 1",min:0,max:1,valueMap:_},{propName:"shininess",label:"Shininess",type:"slider",title:"How shiny the specular highlight is, a higher value gives a sharper highlight. Default is 30",min:1,max:100,step:1},{propName:"gradientMap",label:"Gradient Map",type:"select",title:"The gradient map to use",options:Ba},{propName:"matcap",label:"Matcap",type:"select",title:"The matcap to use",options:za},{propName:"transmission",label:"Transmission",type:"slider",title:"The amount of light passing through the material. Default is 0",min:0,max:1,valueMap:_},{propName:"thickness",label:"Thickness",type:"slider",title:"The thickness of the material. Default is 0",min:0,max:10},{propName:"ior",label:"Index of Refraction",type:"slider",title:"The index of refraction of the material. Default is 1.5",min:1,max:2.333}];function La({target:e}){const{material:t}=e,{propList:o}=t,[l,n]=j(),s=te(!1);E(()=>{const i=t.addEventListener("change",()=>{if(s.current){s.current=!1;return}n()});return()=>t.removeEventListener("change",i)},[]);const r=()=>{const{code:i}=t;e.attachment.traverse(d=>{d.material.code=i})};fe[0].onChange=()=>{n(),r()};const c=Da.filter(({propName:i})=>o.includes(i));return c.forEach(i=>{i.onBeforeChange=()=>s.current=!0,i.onChange=r}),a(oe.Fragment,{children:[a(L,{target:t,propList:fe}),a(L,{target:t,propList:c})]},l)}function Ia({target:e,label:t=(o=>(o=e==null?void 0:e.userData)==null?void 0:o.name)()??e.id}){const l=r=>{r.stopPropagation(),e.dispose()},n=a(Le,{modelId:e.id,alt:e==null?void 0:e.userData.name,className:"FullModelController-icon"}),s=a(de,{title:"Remove",className:"closeButton",onClick:l,size:"large",children:a(G,{})});return a(O,{className:"FullModelController",children:[a(y,{children:[n,t,s]}),a($a,{target:e})]})}function Wa({bone:e,add:t,target:o}){const{activeModel:l}=De();o??(o=l);const n=(o==null?void 0:o.attachment[e])??[],s=r=>{r.stopPropagation(),t(e)};return a(O,{defaultOpen:!0,className:"BoneManager",disableGutters:!0,children:[a(y,{children:[a("div",{className:"BoneManager-name",children:e}),a(x,{variant:"contained",className:"BoneManager-add",onClick:s,children:a(pe,{})})]}),a(y,{children:n.map(r=>a(Ia,{target:r}))})]})}export{pe as A,Wa as B,ia as C,Ce as D,Ia as F,Na as I,Ne as M,Aa as O,Ot as P,Vt as S,Et as T,_t as a,Me as b,La as c,Sa as d,aa as e,Lt as f,sa as g,L as h,jt as i};