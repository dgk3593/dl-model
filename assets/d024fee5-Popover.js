import{_ as A,h as Ee,T as se,q as at,G as lt,p as te,o as $,z as ge,l as Ie,k as oe,j as ze,J as ct,K as ee,H as dt}from"./index-ff2a5816.js";import{u as ut,A as ft,T as pt,b as f,c as ne,_ as V,v as ae,q as We,D as Ke,e as Pe,g as Te,w as Ge,k as ke,E as ht,F as nt,f as fe,i as qe,j as Se}from"./21352e2c-ButtonBase.js";function je(...e){return e.reduce((t,o)=>o==null?t:function(...i){t.apply(this,i),o.apply(this,i)},()=>{})}function mt(e,t=166){let o;function r(...i){const n=()=>{e.apply(this,i)};clearTimeout(o),o=setTimeout(n,t)}return r.clear=()=>{clearTimeout(o)},r}function X(e){return e&&e.ownerDocument||document}function ve(e){return X(e).defaultView||window}function wn({controlled:e,default:t,name:o,state:r="value"}){const{current:i}=A(e!==void 0),[n,s]=Ee(t),a=i?e:n,l=se(d=>{i||s(d)},[]);return[a,l]}function vt(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function ot(){const e=ut(ft);return e[pt]||e}const Et=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},Ve=Et;function Ae(e){return typeof e=="string"}function gt(e,t,o){return e===void 0||Ae(e)?t:f({},t,{ownerState:f({},t.ownerState,o)})}const bt={disableDefaultClasses:!1},xt=lt(bt);function yt(e){const{disableDefaultClasses:t}=at(xt);return o=>t?"":e(o)}function Pt(e,t=[]){if(e===void 0)return{};const o={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{o[r]=e[r]}),o}function $e(e,t,o){return typeof e=="function"?e(t,o):e}function Xe(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(o=>!(o.match(/^on[A-Z]/)&&typeof e[o]=="function")).forEach(o=>{t[o]=e[o]}),t}function Tt(e){const{getSlotProps:t,additionalProps:o,externalSlotProps:r,externalForwardedProps:i,className:n}=e;if(!t){const C=ne(i==null?void 0:i.className,r==null?void 0:r.className,n,o==null?void 0:o.className),E=f({},o==null?void 0:o.style,i==null?void 0:i.style,r==null?void 0:r.style),y=f({},o,i,r);return C.length>0&&(y.className=C),Object.keys(E).length>0&&(y.style=E),{props:y,internalRef:void 0}}const s=Pt(f({},i,r)),a=Xe(r),l=Xe(i),d=t(s),m=ne(d==null?void 0:d.className,o==null?void 0:o.className,n,i==null?void 0:i.className,r==null?void 0:r.className),p=f({},d==null?void 0:d.style,o==null?void 0:o.style,i==null?void 0:i.style,r==null?void 0:r.style),g=f({},d,o,l,a);return m.length>0&&(g.className=m),Object.keys(p).length>0&&(g.style=p),{props:g,internalRef:d.ref}}const kt=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function xe(e){var t;const{elementType:o,externalSlotProps:r,ownerState:i,skipResolvingSlotProps:n=!1}=e,s=V(e,kt),a=n?{}:$e(r,i),{props:l,internalRef:d}=Tt(f({},s,{externalSlotProps:a})),m=ae(d,a==null?void 0:a.ref,(t=e.additionalProps)==null?void 0:t.ref);return gt(o,f({},l,{ref:m}),i)}const St=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Ct(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Nt(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let o=t(`[name="${e.name}"]:checked`);return o||(o=t(`[name="${e.name}"]`)),o!==e}function Rt(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Nt(e))}function Mt(e){const t=[],o=[];return Array.from(e.querySelectorAll(St)).forEach((r,i)=>{const n=Ct(r);n===-1||!Rt(r)||(n===0?t.push(r):o.push({documentOrder:i,tabIndex:n,node:r}))}),o.sort((r,i)=>r.tabIndex===i.tabIndex?r.documentOrder-i.documentOrder:r.tabIndex-i.tabIndex).map(r=>r.node).concat(t)}function wt(){return!0}function Ot(e){const{children:t,disableAutoFocus:o=!1,disableEnforceFocus:r=!1,disableRestoreFocus:i=!1,getTabbable:n=Mt,isEnabled:s=wt,open:a}=e,l=A(!1),d=A(null),m=A(null),p=A(null),g=A(null),C=A(!1),E=A(null),y=ae(t.ref,E),P=A(null);te(()=>{!a||!E.current||(C.current=!o)},[o,a]),te(()=>{if(!a||!E.current)return;const u=X(E.current);return E.current.contains(u.activeElement)||(E.current.hasAttribute("tabIndex")||E.current.setAttribute("tabIndex","-1"),C.current&&E.current.focus()),()=>{i||(p.current&&p.current.focus&&(l.current=!0,p.current.focus()),p.current=null)}},[a]),te(()=>{if(!a||!E.current)return;const u=X(E.current),h=T=>{const{current:_}=E;if(_!==null){if(!u.hasFocus()||r||!s()||l.current){l.current=!1;return}if(!_.contains(u.activeElement)){if(T&&g.current!==T.target||u.activeElement!==g.current)g.current=null;else if(g.current!==null)return;if(!C.current)return;let N=[];if((u.activeElement===d.current||u.activeElement===m.current)&&(N=n(E.current)),N.length>0){var U,D;const H=!!((U=P.current)!=null&&U.shiftKey&&((D=P.current)==null?void 0:D.key)==="Tab"),z=N[0],v=N[N.length-1];typeof z!="string"&&typeof v!="string"&&(H?v.focus():z.focus())}else _.focus()}}},b=T=>{P.current=T,!(r||!s()||T.key!=="Tab")&&u.activeElement===E.current&&T.shiftKey&&(l.current=!0,m.current&&m.current.focus())};u.addEventListener("focusin",h),u.addEventListener("keydown",b,!0);const w=setInterval(()=>{u.activeElement&&u.activeElement.tagName==="BODY"&&h(null)},50);return()=>{clearInterval(w),u.removeEventListener("focusin",h),u.removeEventListener("keydown",b,!0)}},[o,r,i,s,a,n]);const S=u=>{p.current===null&&(p.current=u.relatedTarget),C.current=!0,g.current=u.target;const h=t.props.onFocus;h&&h(u)},M=u=>{p.current===null&&(p.current=u.relatedTarget),C.current=!0};return $(Ie,{children:[$("div",{tabIndex:a?0:-1,onFocus:M,ref:d,"data-testid":"sentinelStart"}),ge(t,{ref:y,onFocus:S}),$("div",{tabIndex:a?0:-1,onFocus:M,ref:m,"data-testid":"sentinelEnd"})]})}function It(e){return typeof e=="function"?e():e}const $t=oe(function(t,o){const{children:r,container:i,disablePortal:n=!1}=t,[s,a]=Ee(null),l=ae(ze(r)?r.ref:null,o);return We(()=>{n||a(It(i)||document.body)},[i,n]),We(()=>{if(s&&!n)return Ke(o,s),()=>{Ke(o,null)}},[o,s,n]),n?ze(r)?ge(r,{ref:l}):$(Ie,{children:r}):$(Ie,{children:s&&ct(r,s)})}),Dt=$t;function Ft(e){const t=X(e);return t.body===e?ve(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function me(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Ye(e){return parseInt(ve(e).getComputedStyle(e).paddingRight,10)||0}function At(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||r}function Ze(e,t,o,r,i){const n=[t,o,...r];[].forEach.call(e.children,s=>{const a=n.indexOf(s)===-1,l=!At(s);a&&l&&me(s,i)})}function Me(e,t){let o=-1;return e.some((r,i)=>t(r)?(o=i,!0):!1),o}function _t(e,t){const o=[],r=e.container;if(!t.disableScrollLock){if(Ft(r)){const s=vt(X(r));o.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${Ye(r)+s}px`;const a=X(r).querySelectorAll(".mui-fixed");[].forEach.call(a,l=>{o.push({value:l.style.paddingRight,property:"padding-right",el:l}),l.style.paddingRight=`${Ye(l)+s}px`})}let n;if(r.parentNode instanceof DocumentFragment)n=X(r).body;else{const s=r.parentElement,a=ve(r);n=(s==null?void 0:s.nodeName)==="HTML"&&a.getComputedStyle(s).overflowY==="scroll"?s:r}o.push({value:n.style.overflow,property:"overflow",el:n},{value:n.style.overflowX,property:"overflow-x",el:n},{value:n.style.overflowY,property:"overflow-y",el:n}),n.style.overflow="hidden"}return()=>{o.forEach(({value:n,el:s,property:a})=>{n?s.style.setProperty(a,n):s.style.removeProperty(a)})}}function Lt(e){const t=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&t.push(o)}),t}class Bt{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,o){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&me(t.modalRef,!1);const i=Lt(o);Ze(o,t.mount,t.modalRef,i,!0);const n=Me(this.containers,s=>s.container===o);return n!==-1?(this.containers[n].modals.push(t),r):(this.containers.push({modals:[t],container:o,restore:null,hiddenSiblings:i}),r)}mount(t,o){const r=Me(this.containers,n=>n.modals.indexOf(t)!==-1),i=this.containers[r];i.restore||(i.restore=_t(i,o))}remove(t,o=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const i=Me(this.containers,s=>s.modals.indexOf(t)!==-1),n=this.containers[i];if(n.modals.splice(n.modals.indexOf(t),1),this.modals.splice(r,1),n.modals.length===0)n.restore&&n.restore(),t.modalRef&&me(t.modalRef,o),Ze(n.container,t.mount,t.modalRef,n.hiddenSiblings,!1),this.containers.splice(i,1);else{const s=n.modals[n.modals.length-1];s.modalRef&&me(s.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Ht(e){return Pe("MuiModal",e)}Te("MuiModal",["root","hidden","backdrop"]);const Ut=["children","closeAfterTransition","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"],zt=e=>{const{open:t,exited:o}=e;return ke({root:["root",!t&&o&&"hidden"],backdrop:["backdrop"]},yt(Ht))};function Wt(e){return typeof e=="function"?e():e}function Kt(e){return e?e.props.hasOwnProperty("in"):!1}const Gt=new Bt,qt=oe(function(t,o){var r,i;const{children:n,closeAfterTransition:s=!1,container:a,disableAutoFocus:l=!1,disableEnforceFocus:d=!1,disableEscapeKeyDown:m=!1,disablePortal:p=!1,disableRestoreFocus:g=!1,disableScrollLock:C=!1,hideBackdrop:E=!1,keepMounted:y=!1,manager:P=Gt,onBackdropClick:S,onClose:M,onKeyDown:u,open:h,onTransitionEnter:b,onTransitionExited:w,slotProps:T={},slots:_={}}=t,U=V(t,Ut),D=P,[N,H]=Ee(!h),z=A({}),v=A(null),c=A(null),k=ae(c,o),O=Kt(n),W=(r=t["aria-hidden"])!=null?r:!0,L=()=>X(v.current),F=()=>(z.current.modalRef=c.current,z.current.mountNode=v.current,z.current),K=()=>{D.mount(F(),{disableScrollLock:C}),c.current&&(c.current.scrollTop=0)},Y=Ge(()=>{const R=Wt(a)||L().body;D.add(F(),R),c.current&&K()}),J=se(()=>D.isTopModal(F()),[D]),le=Ge(R=>{v.current=R,!(!R||!c.current)&&(h&&J()?K():me(c.current,W))}),G=se(()=>{D.remove(F(),W)},[D,W]);te(()=>()=>{G()},[G]),te(()=>{h?Y():(!O||!s)&&G()},[h,G,O,s,Y]);const q=f({},t,{closeAfterTransition:s,disableAutoFocus:l,disableEnforceFocus:d,disableEscapeKeyDown:m,disablePortal:p,disableRestoreFocus:g,disableScrollLock:C,exited:N,hideBackdrop:E,keepMounted:y}),pe=zt(q),Ce=()=>{H(!1),b&&b()},be=()=>{H(!0),w&&w(),s&&G()},Ne=R=>{R.target===R.currentTarget&&(S&&S(R),M&&M(R,"backdropClick"))},Re=R=>{u&&u(R),!(R.key!=="Escape"||!J())&&(m||(R.stopPropagation(),M&&M(R,"escapeKeyDown")))},x={};n.props.tabIndex===void 0&&(x.tabIndex="-1"),O&&(x.onEnter=je(Ce,n.props.onEnter),x.onExited=je(be,n.props.onExited));const I=(i=_.root)!=null?i:"div",B=xe({elementType:I,externalSlotProps:T.root,externalForwardedProps:U,additionalProps:{ref:k,role:"presentation",onKeyDown:Re},className:pe.root,ownerState:q}),ce=_.backdrop,Q=xe({elementType:ce,externalSlotProps:T.backdrop,additionalProps:{"aria-hidden":!0,onClick:Ne,open:h},className:pe.backdrop,ownerState:q});return!y&&!h&&(!O||N)?null:$(Dt,{ref:le,container:a,disablePortal:p,children:$(I,f({},B,{children:[!E&&ce?$(ce,f({},Q)):null,$(Ot,{disableEnforceFocus:d,disableAutoFocus:l,disableRestoreFocus:g,isEnabled:J,open:h,children:ge(n,x)})]}))})}),jt=qt,Je={disabled:!1};var Vt=function(t){return t.scrollTop},he="unmounted",re="exited",ie="entering",ue="entered",De="exiting",Z=function(e){ht(t,e);function t(r,i){var n;n=e.call(this,r,i)||this;var s=i,a=s&&!s.isMounting?r.enter:r.appear,l;return n.appearStatus=null,r.in?a?(l=re,n.appearStatus=ie):l=ue:r.unmountOnExit||r.mountOnEnter?l=he:l=re,n.state={status:l},n.nextCallback=null,n}t.getDerivedStateFromProps=function(i,n){var s=i.in;return s&&n.status===he?{status:re}:null};var o=t.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(i){var n=null;if(i!==this.props){var s=this.state.status;this.props.in?s!==ie&&s!==ue&&(n=ie):(s===ie||s===ue)&&(n=De)}this.updateStatus(!1,n)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var i=this.props.timeout,n,s,a;return n=s=a=i,i!=null&&typeof i!="number"&&(n=i.exit,s=i.enter,a=i.appear!==void 0?i.appear:s),{exit:n,enter:s,appear:a}},o.updateStatus=function(i,n){if(i===void 0&&(i=!1),n!==null)if(this.cancelNextCallback(),n===ie){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:ee.findDOMNode(this);s&&Vt(s)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===re&&this.setState({status:he})},o.performEnter=function(i){var n=this,s=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[ee.findDOMNode(this),a],d=l[0],m=l[1],p=this.getTimeouts(),g=a?p.appear:p.enter;if(!i&&!s||Je.disabled){this.safeSetState({status:ue},function(){n.props.onEntered(d)});return}this.props.onEnter(d,m),this.safeSetState({status:ie},function(){n.props.onEntering(d,m),n.onTransitionEnd(g,function(){n.safeSetState({status:ue},function(){n.props.onEntered(d,m)})})})},o.performExit=function(){var i=this,n=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:ee.findDOMNode(this);if(!n||Je.disabled){this.safeSetState({status:re},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:De},function(){i.props.onExiting(a),i.onTransitionEnd(s.exit,function(){i.safeSetState({status:re},function(){i.props.onExited(a)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(i,n){n=this.setNextCallback(n),this.setState(i,n)},o.setNextCallback=function(i){var n=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,n.nextCallback=null,i(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},o.onTransitionEnd=function(i,n){this.setNextCallback(n);var s=this.props.nodeRef?this.props.nodeRef.current:ee.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],d=l[0],m=l[1];this.props.addEndListener(d,m)}i!=null&&setTimeout(this.nextCallback,i)},o.render=function(){var i=this.state.status;if(i===he)return null;var n=this.props,s=n.children;n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef;var a=V(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ee.createElement(nt.Provider,{value:null},typeof s=="function"?s(i,a):ee.cloneElement(ee.Children.only(s),a))},t}(ee.Component);Z.contextType=nt;Z.propTypes={};function de(){}Z.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:de,onEntering:de,onEntered:de,onExit:de,onExiting:de,onExited:de};Z.UNMOUNTED=he;Z.EXITED=re;Z.ENTERING=ie;Z.ENTERED=ue;Z.EXITING=De;const rt=Z,it=e=>e.scrollTop;function ye(e,t){var o,r;const{timeout:i,easing:n,style:s={}}=e;return{duration:(o=s.transitionDuration)!=null?o:typeof i=="number"?i:i[t.mode]||0,easing:(r=s.transitionTimingFunction)!=null?r:typeof n=="object"?n[t.mode]:n,delay:s.transitionDelay}}function Xt(e){return Pe("MuiPaper",e)}Te("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Yt=["className","component","elevation","square","variant"],Zt=e=>{const{square:t,elevation:o,variant:r,classes:i}=e,n={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${o}`]};return ke(n,Xt,i)},Jt=fe("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],!o.square&&t.rounded,o.variant==="elevation"&&t[`elevation${o.elevation}`]]}})(({theme:e,ownerState:t})=>{var o;return f({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&f({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${qe("#fff",Ve(t.elevation))}, ${qe("#fff",Ve(t.elevation))})`},e.vars&&{backgroundImage:(o=e.vars.overlays)==null?void 0:o[t.elevation]}))}),Qt=oe(function(t,o){const r=Se({props:t,name:"MuiPaper"}),{className:i,component:n="div",elevation:s=1,square:a=!1,variant:l="elevation"}=r,d=V(r,Yt),m=f({},r,{component:n,elevation:s,square:a,variant:l}),p=Zt(m);return $(Jt,f({as:n,ownerState:m,className:ne(p.root,i),ref:o},d))}),en=Qt,tn=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],nn={entering:{opacity:1},entered:{opacity:1}},on=oe(function(t,o){const r=ot(),i={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:n,appear:s=!0,children:a,easing:l,in:d,onEnter:m,onEntered:p,onEntering:g,onExit:C,onExited:E,onExiting:y,style:P,timeout:S=i,TransitionComponent:M=rt}=t,u=V(t,tn),h=A(null),b=ae(h,a.ref,o),w=v=>c=>{if(v){const k=h.current;c===void 0?v(k):v(k,c)}},T=w(g),_=w((v,c)=>{it(v);const k=ye({style:P,timeout:S,easing:l},{mode:"enter"});v.style.webkitTransition=r.transitions.create("opacity",k),v.style.transition=r.transitions.create("opacity",k),m&&m(v,c)}),U=w(p),D=w(y),N=w(v=>{const c=ye({style:P,timeout:S,easing:l},{mode:"exit"});v.style.webkitTransition=r.transitions.create("opacity",c),v.style.transition=r.transitions.create("opacity",c),C&&C(v)}),H=w(E);return $(M,f({appear:s,in:d,nodeRef:h,onEnter:_,onEntered:U,onEntering:T,onExit:N,onExited:H,onExiting:D,addEndListener:v=>{n&&n(h.current,v)},timeout:S},u,{children:(v,c)=>ge(a,f({style:f({opacity:0,visibility:v==="exited"&&!d?"hidden":void 0},nn[v],P,a.props.style),ref:b},c))}))}),rn=on;function sn(e){return Pe("MuiBackdrop",e)}Te("MuiBackdrop",["root","invisible"]);const an=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],ln=e=>{const{classes:t,invisible:o}=e;return ke({root:["root",o&&"invisible"]},sn,t)},cn=fe("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.invisible&&t.invisible]}})(({ownerState:e})=>f({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),dn=oe(function(t,o){var r,i,n;const s=Se({props:t,name:"MuiBackdrop"}),{children:a,className:l,component:d="div",components:m={},componentsProps:p={},invisible:g=!1,open:C,slotProps:E={},slots:y={},TransitionComponent:P=rn,transitionDuration:S}=s,M=V(s,an),u=f({},s,{component:d,invisible:g}),h=ln(u),b=(r=E.root)!=null?r:p.root;return $(P,f({in:C,timeout:S},M,{children:$(cn,f({"aria-hidden":!0},b,{as:(i=(n=y.root)!=null?n:m.Root)!=null?i:d,className:ne(h.root,l,b==null?void 0:b.className),ownerState:f({},u,b==null?void 0:b.ownerState),classes:h,ref:o,children:a}))}))}),un=dn,fn=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","open","slotProps","slots","theme"],pn=fe("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.open&&o.exited&&t.hidden]}})(({theme:e,ownerState:t})=>f({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),hn=fe(un,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),mn=oe(function(t,o){var r,i,n,s,a,l;const d=Se({name:"MuiModal",props:t}),{BackdropComponent:m=hn,BackdropProps:p,classes:g,className:C,closeAfterTransition:E=!1,children:y,container:P,component:S,components:M={},componentsProps:u={},disableAutoFocus:h=!1,disableEnforceFocus:b=!1,disableEscapeKeyDown:w=!1,disablePortal:T=!1,disableRestoreFocus:_=!1,disableScrollLock:U=!1,hideBackdrop:D=!1,keepMounted:N=!1,onBackdropClick:H,onClose:z,open:v,slotProps:c,slots:k,theme:O}=d,W=V(d,fn),[L,F]=Ee(!0),K={container:P,closeAfterTransition:E,disableAutoFocus:h,disableEnforceFocus:b,disableEscapeKeyDown:w,disablePortal:T,disableRestoreFocus:_,disableScrollLock:U,hideBackdrop:D,keepMounted:N,onBackdropClick:H,onClose:z,open:v},Y=f({},d,K,{exited:L}),J=(r=(i=k==null?void 0:k.root)!=null?i:M.Root)!=null?r:pn,le=(n=(s=k==null?void 0:k.backdrop)!=null?s:M.Backdrop)!=null?n:m,G=(a=c==null?void 0:c.root)!=null?a:u.root,q=(l=c==null?void 0:c.backdrop)!=null?l:u.backdrop;return $(jt,f({slots:{root:J,backdrop:le},slotProps:{root:()=>f({},$e(G,Y),!Ae(J)&&{as:S,theme:O},{className:ne(C,G==null?void 0:G.className,g==null?void 0:g.root,!Y.open&&Y.exited&&(g==null?void 0:g.hidden))}),backdrop:()=>f({},p,$e(q,Y),{className:ne(q==null?void 0:q.className,p==null?void 0:p.className,g==null?void 0:g.backdrop)})},onTransitionEnter:()=>F(!1),onTransitionExited:()=>F(!0),ref:o},W,K,{children:y}))}),vn=mn,En=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Fe(e){return`scale(${e}, ${e**2})`}const gn={entering:{opacity:1,transform:Fe(1)},entered:{opacity:1,transform:"none"}},we=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),st=oe(function(t,o){const{addEndListener:r,appear:i=!0,children:n,easing:s,in:a,onEnter:l,onEntered:d,onEntering:m,onExit:p,onExited:g,onExiting:C,style:E,timeout:y="auto",TransitionComponent:P=rt}=t,S=V(t,En),M=A(),u=A(),h=ot(),b=A(null),w=ae(b,n.ref,o),T=c=>k=>{if(c){const O=b.current;k===void 0?c(O):c(O,k)}},_=T(m),U=T((c,k)=>{it(c);const{duration:O,delay:W,easing:L}=ye({style:E,timeout:y,easing:s},{mode:"enter"});let F;y==="auto"?(F=h.transitions.getAutoHeightDuration(c.clientHeight),u.current=F):F=O,c.style.transition=[h.transitions.create("opacity",{duration:F,delay:W}),h.transitions.create("transform",{duration:we?F:F*.666,delay:W,easing:L})].join(","),l&&l(c,k)}),D=T(d),N=T(C),H=T(c=>{const{duration:k,delay:O,easing:W}=ye({style:E,timeout:y,easing:s},{mode:"exit"});let L;y==="auto"?(L=h.transitions.getAutoHeightDuration(c.clientHeight),u.current=L):L=k,c.style.transition=[h.transitions.create("opacity",{duration:L,delay:O}),h.transitions.create("transform",{duration:we?L:L*.666,delay:we?O:O||L*.333,easing:W})].join(","),c.style.opacity=0,c.style.transform=Fe(.75),p&&p(c)}),z=T(g),v=c=>{y==="auto"&&(M.current=setTimeout(c,u.current||0)),r&&r(b.current,c)};return te(()=>()=>{clearTimeout(M.current)},[]),$(P,f({appear:i,in:a,nodeRef:b,onEnter:U,onEntered:D,onEntering:_,onExit:H,onExited:z,onExiting:N,addEndListener:v,timeout:y==="auto"?null:y},S,{children:(c,k)=>ge(n,f({style:f({opacity:0,transform:Fe(.75),visibility:c==="exited"&&!a?"hidden":void 0},gn[c],E,n.props.style),ref:w},k))}))});st.muiSupportAuto=!0;const bn=st;function xn(e){return Pe("MuiPopover",e)}Te("MuiPopover",["root","paper"]);const yn=["onEntering"],Pn=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"],Tn=["slotProps"];function Qe(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.height/2:t==="bottom"&&(o=e.height),o}function et(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.width/2:t==="right"&&(o=e.width),o}function tt(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Oe(e){return typeof e=="function"?e():e}const kn=e=>{const{classes:t}=e;return ke({root:["root"],paper:["paper"]},xn,t)},Sn=fe(vn,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Cn=fe(en,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Nn=oe(function(t,o){var r,i,n;const s=Se({props:t,name:"MuiPopover"}),{action:a,anchorEl:l,anchorOrigin:d={vertical:"top",horizontal:"left"},anchorPosition:m,anchorReference:p="anchorEl",children:g,className:C,container:E,elevation:y=8,marginThreshold:P=16,open:S,PaperProps:M={},slots:u,slotProps:h,transformOrigin:b={vertical:"top",horizontal:"left"},TransitionComponent:w=bn,transitionDuration:T="auto",TransitionProps:{onEntering:_}={}}=s,U=V(s.TransitionProps,yn),D=V(s,Pn),N=(r=h==null?void 0:h.paper)!=null?r:M,H=A(),z=ae(H,N.ref),v=f({},s,{anchorOrigin:d,anchorReference:p,elevation:y,marginThreshold:P,externalPaperSlotProps:N,transformOrigin:b,TransitionComponent:w,transitionDuration:T,TransitionProps:U}),c=kn(v),k=se(()=>{if(p==="anchorPosition")return m;const x=Oe(l),B=(x&&x.nodeType===1?x:X(H.current).body).getBoundingClientRect();return{top:B.top+Qe(B,d.vertical),left:B.left+et(B,d.horizontal)}},[l,d.horizontal,d.vertical,m,p]),O=se(x=>({vertical:Qe(x,b.vertical),horizontal:et(x,b.horizontal)}),[b.horizontal,b.vertical]),W=se(x=>{const I={width:x.offsetWidth,height:x.offsetHeight},B=O(I);if(p==="none")return{top:null,left:null,transformOrigin:tt(B)};const ce=k();let Q=ce.top-B.vertical,R=ce.left-B.horizontal;const _e=Q+I.height,Le=R+I.width,Be=ve(Oe(l)),He=Be.innerHeight-P,Ue=Be.innerWidth-P;if(Q<P){const j=Q-P;Q-=j,B.vertical+=j}else if(_e>He){const j=_e-He;Q-=j,B.vertical+=j}if(R<P){const j=R-P;R-=j,B.horizontal+=j}else if(Le>Ue){const j=Le-Ue;R-=j,B.horizontal+=j}return{top:`${Math.round(Q)}px`,left:`${Math.round(R)}px`,transformOrigin:tt(B)}},[l,p,k,O,P]),[L,F]=Ee(S),K=se(()=>{const x=H.current;if(!x)return;const I=W(x);I.top!==null&&(x.style.top=I.top),I.left!==null&&(x.style.left=I.left),x.style.transformOrigin=I.transformOrigin,F(!0)},[W]),Y=(x,I)=>{_&&_(x,I),K()},J=()=>{F(!1)};te(()=>{S&&K()}),dt(a,()=>S?{updatePosition:()=>{K()}}:null,[S,K]),te(()=>{if(!S)return;const x=mt(()=>{K()}),I=ve(l);return I.addEventListener("resize",x),()=>{x.clear(),I.removeEventListener("resize",x)}},[l,S,K]);let le=T;T==="auto"&&!w.muiSupportAuto&&(le=void 0);const G=E||(l?X(Oe(l)).body:void 0),q=(i=u==null?void 0:u.root)!=null?i:Sn,pe=(n=u==null?void 0:u.paper)!=null?n:Cn,Ce=xe({elementType:pe,externalSlotProps:f({},N,{style:L?N.style:f({},N.style,{opacity:0})}),additionalProps:{elevation:y,ref:z},ownerState:v,className:ne(c.paper,N==null?void 0:N.className)}),be=xe({elementType:q,externalSlotProps:(h==null?void 0:h.root)||{},externalForwardedProps:D,additionalProps:{ref:o,slotProps:{backdrop:{invisible:!0}},container:G,open:S},ownerState:v,className:ne(c.root,C)}),{slotProps:Ne}=be,Re=V(be,Tn);return $(q,f({},Re,!Ae(q)&&{slotProps:Ne},{children:$(w,f({appear:!0,in:S,onEntering:Y,onExited:J,timeout:le},U,{children:$(pe,f({},Ce,{children:g}))}))}))}),On=Nn;export{un as B,rn as F,vn as M,On as P,rt as T,ot as a,xe as b,en as c,mt as d,ve as e,Cn as f,vt as g,ye as h,Ae as i,X as o,it as r,wn as u};