import{_ as D,a as pe,T as te,h as Z,o as $,c as he,p as je,k as J,l as Oe,j as nt,b as Y,A as ot}from"./888d32ea-jsxRuntime.module.js";import{t as rt,w as it,a as p,e as se,_ as j,u as ne,l as Ie,D as De,g as be,b as xe,A as $e,f as ye,i as st,T as qe,s as ae,m as Ae,d as Te}from"./c83da345-ButtonBase.js";function Fe(...e){return e.reduce((t,r)=>r==null?t:function(...i){t.apply(this,i),r.apply(this,i)},()=>{})}function at(e,t=166){let r;function o(...i){const n=()=>{e.apply(this,i)};clearTimeout(r),r=setTimeout(n,t)}return o.clear=()=>{clearTimeout(r)},o}function G(e){return e&&e.ownerDocument||document}function fe(e){return G(e).defaultView||window}function bn({controlled:e,default:t,name:r,state:o="value"}){const{current:i}=D(e!==void 0),[n,s]=pe(t),a=i?e:n,l=te(d=>{i||s(d)},[]);return[a,l]}function lt(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Ve(){return rt(it)}const ct=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},Le=ct;function Xe(e){return typeof e=="string"}function dt(e,t,r){return e===void 0||Xe(e)?t:p({},t,{ownerState:p({},t.ownerState,r)})}function ut(e,t=[]){if(e===void 0)return{};const r={};return Object.keys(e).filter(o=>o.match(/^on[A-Z]/)&&typeof e[o]=="function"&&!t.includes(o)).forEach(o=>{r[o]=e[o]}),r}function Ce(e,t){return typeof e=="function"?e(t):e}function _e(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(r=>!(r.match(/^on[A-Z]/)&&typeof e[r]=="function")).forEach(r=>{t[r]=e[r]}),t}function ft(e){const{getSlotProps:t,additionalProps:r,externalSlotProps:o,externalForwardedProps:i,className:n}=e;if(!t){const b=se(i==null?void 0:i.className,o==null?void 0:o.className,n,r==null?void 0:r.className),u=p({},r==null?void 0:r.style,i==null?void 0:i.style,o==null?void 0:o.style),x=p({},r,i,o);return b.length>0&&(x.className=b),Object.keys(u).length>0&&(x.style=u),{props:x,internalRef:void 0}}const s=ut(p({},i,o)),a=_e(o),l=_e(i),d=t(s),v=se(d==null?void 0:d.className,r==null?void 0:r.className,n,i==null?void 0:i.className,o==null?void 0:o.className),g=p({},d==null?void 0:d.style,r==null?void 0:r.style,i==null?void 0:i.style,o==null?void 0:o.style),T=p({},d,r,l,a);return v.length>0&&(T.className=v),Object.keys(g).length>0&&(T.style=g),{props:T,internalRef:d.ref}}const pt=["elementType","externalSlotProps","ownerState"];function Be(e){var t;const{elementType:r,externalSlotProps:o,ownerState:i}=e,n=j(e,pt),s=Ce(o,i),{props:a,internalRef:l}=ft(p({},n,{externalSlotProps:s})),d=ne(l,s==null?void 0:s.ref,(t=e.additionalProps)==null?void 0:t.ref);return dt(r,p({},a,{ref:d}),i)}const ht=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function mt(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function vt(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let r=t(`[name="${e.name}"]:checked`);return r||(r=t(`[name="${e.name}"]`)),r!==e}function Et(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||vt(e))}function gt(e){const t=[],r=[];return Array.from(e.querySelectorAll(ht)).forEach((o,i)=>{const n=mt(o);n===-1||!Et(o)||(n===0?t.push(o):r.push({documentOrder:i,tabIndex:n,node:o}))}),r.sort((o,i)=>o.tabIndex===i.tabIndex?o.documentOrder-i.documentOrder:o.tabIndex-i.tabIndex).map(o=>o.node).concat(t)}function bt(){return!0}function xt(e){const{children:t,disableAutoFocus:r=!1,disableEnforceFocus:o=!1,disableRestoreFocus:i=!1,getTabbable:n=gt,isEnabled:s=bt,open:a}=e,l=D(!1),d=D(null),v=D(null),g=D(null),T=D(null),b=D(!1),u=D(null),x=ne(t.ref,u),k=D(null);Z(()=>{!a||!u.current||(b.current=!r)},[r,a]),Z(()=>{if(!a||!u.current)return;const f=G(u.current);return u.current.contains(f.activeElement)||(u.current.hasAttribute("tabIndex")||u.current.setAttribute("tabIndex","-1"),b.current&&u.current.focus()),()=>{i||(g.current&&g.current.focus&&(l.current=!0,g.current.focus()),g.current=null)}},[a]),Z(()=>{if(!a||!u.current)return;const f=G(u.current),E=C=>{const{current:A}=u;if(A!==null){if(!f.hasFocus()||o||!s()||l.current){l.current=!1;return}if(!A.contains(f.activeElement)){if(C&&T.current!==C.target||f.activeElement!==T.current)T.current=null;else if(T.current!==null)return;if(!b.current)return;let F=[];if((f.activeElement===d.current||f.activeElement===v.current)&&(F=n(u.current)),F.length>0){var M,O;const H=Boolean(((M=k.current)==null?void 0:M.shiftKey)&&((O=k.current)==null?void 0:O.key)==="Tab"),z=F[0],h=F[F.length-1];typeof z!="string"&&typeof h!="string"&&(H?h.focus():z.focus())}else A.focus()}}},R=C=>{k.current=C,!(o||!s()||C.key!=="Tab")&&f.activeElement===u.current&&C.shiftKey&&(l.current=!0,v.current&&v.current.focus())};f.addEventListener("focusin",E),f.addEventListener("keydown",R,!0);const P=setInterval(()=>{f.activeElement&&f.activeElement.tagName==="BODY"&&E(null)},50);return()=>{clearInterval(P),f.removeEventListener("focusin",E),f.removeEventListener("keydown",R,!0)}},[r,o,i,s,a,n]);const w=f=>{g.current===null&&(g.current=f.relatedTarget),b.current=!0,T.current=f.target;const E=t.props.onFocus;E&&E(f)},S=f=>{g.current===null&&(g.current=f.relatedTarget),b.current=!0};return $(je,{children:[$("div",{tabIndex:a?0:-1,onFocus:S,ref:d,"data-testid":"sentinelStart"}),he(t,{ref:x,onFocus:w}),$("div",{tabIndex:a?0:-1,onFocus:S,ref:v,"data-testid":"sentinelEnd"})]})}function yt(e){return typeof e=="function"?e():e}const Tt=J(function(t,r){const{children:o,container:i,disablePortal:n=!1}=t,[s,a]=pe(null),l=ne(Oe(o)?o.ref:null,r);return Ie(()=>{n||a(yt(i)||document.body)},[i,n]),Ie(()=>{if(s&&!n)return De(r,s),()=>{De(r,null)}},[r,s,n]),n?Oe(o)?he(o,{ref:l}):o:$(je,{children:s&&nt(o,s)})}),Pt=Tt;function kt(e){const t=G(e);return t.body===e?fe(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function ue(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Ue(e){return parseInt(fe(e).getComputedStyle(e).paddingRight,10)||0}function St(e){const r=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return r||o}function He(e,t,r,o,i){const n=[t,r,...o];[].forEach.call(e.children,s=>{const a=n.indexOf(s)===-1,l=!St(s);a&&l&&ue(s,i)})}function ke(e,t){let r=-1;return e.some((o,i)=>t(o)?(r=i,!0):!1),r}function Rt(e,t){const r=[],o=e.container;if(!t.disableScrollLock){if(kt(o)){const s=lt(G(o));r.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${Ue(o)+s}px`;const a=G(o).querySelectorAll(".mui-fixed");[].forEach.call(a,l=>{r.push({value:l.style.paddingRight,property:"padding-right",el:l}),l.style.paddingRight=`${Ue(l)+s}px`})}let n;if(o.parentNode instanceof DocumentFragment)n=G(o).body;else{const s=o.parentElement,a=fe(o);n=(s==null?void 0:s.nodeName)==="HTML"&&a.getComputedStyle(s).overflowY==="scroll"?s:o}r.push({value:n.style.overflow,property:"overflow",el:n},{value:n.style.overflowX,property:"overflow-x",el:n},{value:n.style.overflowY,property:"overflow-y",el:n}),n.style.overflow="hidden"}return()=>{r.forEach(({value:n,el:s,property:a})=>{n?s.style.setProperty(a,n):s.style.removeProperty(a)})}}function Ct(e){const t=[];return[].forEach.call(e.children,r=>{r.getAttribute("aria-hidden")==="true"&&t.push(r)}),t}class Nt{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,r){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&ue(t.modalRef,!1);const i=Ct(r);He(r,t.mount,t.modalRef,i,!0);const n=ke(this.containers,s=>s.container===r);return n!==-1?(this.containers[n].modals.push(t),o):(this.containers.push({modals:[t],container:r,restore:null,hiddenSiblings:i}),o)}mount(t,r){const o=ke(this.containers,n=>n.modals.indexOf(t)!==-1),i=this.containers[o];i.restore||(i.restore=Rt(i,r))}remove(t,r=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const i=ke(this.containers,s=>s.modals.indexOf(t)!==-1),n=this.containers[i];if(n.modals.splice(n.modals.indexOf(t),1),this.modals.splice(o,1),n.modals.length===0)n.restore&&n.restore(),t.modalRef&&ue(t.modalRef,r),He(n.container,t.mount,t.modalRef,n.hiddenSiblings,!1),this.containers.splice(i,1);else{const s=n.modals[n.modals.length-1];s.modalRef&&ue(s.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function wt(e){return be("MuiModal",e)}xe("MuiModal",["root","hidden"]);const Mt=["children","classes","closeAfterTransition","component","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"],Ot=e=>{const{open:t,exited:r,classes:o}=e;return ye({root:["root",!t&&r&&"hidden"],backdrop:["backdrop"]},wt,o)};function It(e){return typeof e=="function"?e():e}function Dt(e){return e?e.props.hasOwnProperty("in"):!1}const $t=new Nt,At=J(function(t,r){var o,i;const{children:n,classes:s,closeAfterTransition:a=!1,component:l,container:d,disableAutoFocus:v=!1,disableEnforceFocus:g=!1,disableEscapeKeyDown:T=!1,disablePortal:b=!1,disableRestoreFocus:u=!1,disableScrollLock:x=!1,hideBackdrop:k=!1,keepMounted:w=!1,manager:S=$t,onBackdropClick:f,onClose:E,onKeyDown:R,open:P,onTransitionEnter:C,onTransitionExited:A,slotProps:M={},slots:O={}}=t,F=j(t,Mt),[H,z]=pe(!P),h=D({}),c=D(null),y=D(null),B=ne(y,r),_=Dt(n),I=(o=t["aria-hidden"])!=null?o:!0,m=()=>G(c.current),N=()=>(h.current.modalRef=y.current,h.current.mountNode=c.current,h.current),L=()=>{S.mount(N(),{disableScrollLock:x}),y.current&&(y.current.scrollTop=0)},le=$e(()=>{const U=It(d)||m().body;S.add(N(),U),y.current&&L()}),K=te(()=>S.isTopModal(N()),[S]),V=$e(U=>{c.current=U,!(!U||!y.current)&&(P&&K()?L():ue(y.current,I))}),X=te(()=>{S.remove(N(),I)},[S,I]);Z(()=>()=>{X()},[X]),Z(()=>{P?le():(!_||!a)&&X()},[P,X,_,a,le]);const oe=p({},t,{classes:s,closeAfterTransition:a,disableAutoFocus:v,disableEnforceFocus:g,disableEscapeKeyDown:T,disablePortal:b,disableRestoreFocus:u,disableScrollLock:x,exited:H,hideBackdrop:k,keepMounted:w}),ce=Ot(oe),me=()=>{z(!1),C&&C()},ve=()=>{z(!0),A&&A(),a&&X()},W=U=>{U.target===U.currentTarget&&(f&&f(U),E&&E(U,"backdropClick"))},Qe=U=>{R&&R(U),!(U.key!=="Escape"||!K())&&(T||(U.stopPropagation(),E&&E(U,"escapeKeyDown")))},Ee={};n.props.tabIndex===void 0&&(Ee.tabIndex="-1"),_&&(Ee.onEnter=Fe(me,n.props.onEnter),Ee.onExited=Fe(ve,n.props.onExited));const Me=(i=l??O.root)!=null?i:"div",et=Be({elementType:Me,externalSlotProps:M.root,externalForwardedProps:F,additionalProps:{ref:B,role:"presentation",onKeyDown:Qe},className:ce.root,ownerState:oe}),Pe=O.backdrop,tt=Be({elementType:Pe,externalSlotProps:M.backdrop,additionalProps:{"aria-hidden":!0,onClick:W,open:P},className:ce.backdrop,ownerState:oe});return!w&&!P&&(!_||H)?null:$(Pt,{ref:V,container:d,disablePortal:b,children:$(Me,p({},et,{children:[!k&&Pe?$(Pe,p({},tt)):null,$(xt,{disableEnforceFocus:g,disableAutoFocus:v,disableRestoreFocus:u,isEnabled:K,open:P,children:he(n,Ee)})]}))})}),Ft=At,We={disabled:!1};var Lt=function(t){return t.scrollTop},de="unmounted",Q="exited",ee="entering",ie="entered",Ne="exiting",q=function(e){st(t,e);function t(o,i){var n;n=e.call(this,o,i)||this;var s=i,a=s&&!s.isMounting?o.enter:o.appear,l;return n.appearStatus=null,o.in?a?(l=Q,n.appearStatus=ee):l=ie:o.unmountOnExit||o.mountOnEnter?l=de:l=Q,n.state={status:l},n.nextCallback=null,n}t.getDerivedStateFromProps=function(i,n){var s=i.in;return s&&n.status===de?{status:Q}:null};var r=t.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(i){var n=null;if(i!==this.props){var s=this.state.status;this.props.in?s!==ee&&s!==ie&&(n=ee):(s===ee||s===ie)&&(n=Ne)}this.updateStatus(!1,n)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var i=this.props.timeout,n,s,a;return n=s=a=i,i!=null&&typeof i!="number"&&(n=i.exit,s=i.enter,a=i.appear!==void 0?i.appear:s),{exit:n,enter:s,appear:a}},r.updateStatus=function(i,n){if(i===void 0&&(i=!1),n!==null)if(this.cancelNextCallback(),n===ee){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:Y.findDOMNode(this);s&&Lt(s)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Q&&this.setState({status:de})},r.performEnter=function(i){var n=this,s=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[Y.findDOMNode(this),a],d=l[0],v=l[1],g=this.getTimeouts(),T=a?g.appear:g.enter;if(!i&&!s||We.disabled){this.safeSetState({status:ie},function(){n.props.onEntered(d)});return}this.props.onEnter(d,v),this.safeSetState({status:ee},function(){n.props.onEntering(d,v),n.onTransitionEnd(T,function(){n.safeSetState({status:ie},function(){n.props.onEntered(d,v)})})})},r.performExit=function(){var i=this,n=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:Y.findDOMNode(this);if(!n||We.disabled){this.safeSetState({status:Q},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Ne},function(){i.props.onExiting(a),i.onTransitionEnd(s.exit,function(){i.safeSetState({status:Q},function(){i.props.onExited(a)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(i,n){n=this.setNextCallback(n),this.setState(i,n)},r.setNextCallback=function(i){var n=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,n.nextCallback=null,i(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},r.onTransitionEnd=function(i,n){this.setNextCallback(n);var s=this.props.nodeRef?this.props.nodeRef.current:Y.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],d=l[0],v=l[1];this.props.addEndListener(d,v)}i!=null&&setTimeout(this.nextCallback,i)},r.render=function(){var i=this.state.status;if(i===de)return null;var n=this.props,s=n.children;n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef;var a=j(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Y.createElement(qe.Provider,{value:null},typeof s=="function"?s(i,a):Y.cloneElement(Y.Children.only(s),a))},t}(Y.Component);q.contextType=qe;q.propTypes={};function re(){}q.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:re,onEntering:re,onEntered:re,onExit:re,onExiting:re,onExited:re};q.UNMOUNTED=de;q.EXITED=Q;q.ENTERING=ee;q.ENTERED=ie;q.EXITING=Ne;const Ye=q,Ze=e=>e.scrollTop;function ge(e,t){var r,o;const{timeout:i,easing:n,style:s={}}=e;return{duration:(r=s.transitionDuration)!=null?r:typeof i=="number"?i:i[t.mode]||0,easing:(o=s.transitionTimingFunction)!=null?o:typeof n=="object"?n[t.mode]:n,delay:s.transitionDelay}}function _t(e){return be("MuiPaper",e)}xe("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Bt=["className","component","elevation","square","variant"],Ut=e=>{const{square:t,elevation:r,variant:o,classes:i}=e,n={root:["root",o,!t&&"rounded",o==="elevation"&&`elevation${r}`]};return ye(n,_t,i)},Ht=ae("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],!r.square&&t.rounded,r.variant==="elevation"&&t[`elevation${r.elevation}`]]}})(({theme:e,ownerState:t})=>{var r;return p({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&p({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Ae("#fff",Le(t.elevation))}, ${Ae("#fff",Le(t.elevation))})`},e.vars&&{backgroundImage:(r=e.vars.overlays)==null?void 0:r[t.elevation]}))}),Wt=J(function(t,r){const o=Te({props:t,name:"MuiPaper"}),{className:i,component:n="div",elevation:s=1,square:a=!1,variant:l="elevation"}=o,d=j(o,Bt),v=p({},o,{component:n,elevation:s,square:a,variant:l}),g=Ut(v);return $(Ht,p({as:n,ownerState:v,className:se(g.root,i),ref:r},d))}),zt=Wt,Kt=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Gt={entering:{opacity:1},entered:{opacity:1}},jt=J(function(t,r){const o=Ve(),i={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:n,appear:s=!0,children:a,easing:l,in:d,onEnter:v,onEntered:g,onEntering:T,onExit:b,onExited:u,onExiting:x,style:k,timeout:w=i,TransitionComponent:S=Ye}=t,f=j(t,Kt),E=D(null),R=ne(E,a.ref,r),P=h=>c=>{if(h){const y=E.current;c===void 0?h(y):h(y,c)}},C=P(T),A=P((h,c)=>{Ze(h);const y=ge({style:k,timeout:w,easing:l},{mode:"enter"});h.style.webkitTransition=o.transitions.create("opacity",y),h.style.transition=o.transitions.create("opacity",y),v&&v(h,c)}),M=P(g),O=P(x),F=P(h=>{const c=ge({style:k,timeout:w,easing:l},{mode:"exit"});h.style.webkitTransition=o.transitions.create("opacity",c),h.style.transition=o.transitions.create("opacity",c),b&&b(h)}),H=P(u);return $(S,p({appear:s,in:d,nodeRef:E,onEnter:A,onEntered:M,onEntering:C,onExit:F,onExited:H,onExiting:O,addEndListener:h=>{n&&n(E.current,h)},timeout:w},f,{children:(h,c)=>he(a,p({style:p({opacity:0,visibility:h==="exited"&&!d?"hidden":void 0},Gt[h],k,a.props.style),ref:R},c))}))}),qt=jt;function Vt(e){return be("MuiBackdrop",e)}xe("MuiBackdrop",["root","invisible"]);const Xt=["children","component","components","componentsProps","className","invisible","open","slotProps","slots","transitionDuration","TransitionComponent"],Yt=e=>{const{classes:t,invisible:r}=e;return ye({root:["root",r&&"invisible"]},Vt,t)},Zt=ae("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.invisible&&t.invisible]}})(({ownerState:e})=>p({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Jt=J(function(t,r){var o,i,n;const s=Te({props:t,name:"MuiBackdrop"}),{children:a,component:l="div",components:d={},componentsProps:v={},className:g,invisible:T=!1,open:b,slotProps:u={},slots:x={},transitionDuration:k,TransitionComponent:w=qt}=s,S=j(s,Xt),f=p({},s,{component:l,invisible:T}),E=Yt(f),R=(o=u.root)!=null?o:v.root;return $(w,p({in:b,timeout:k},S,{children:$(Zt,p({"aria-hidden":!0},R,{as:(i=(n=x.root)!=null?n:d.Root)!=null?i:l,className:se(E.root,g,R==null?void 0:R.className),ownerState:p({},f,R==null?void 0:R.ownerState),classes:E,ref:r,children:a}))}))}),Qt=Jt,en=["BackdropComponent","BackdropProps","closeAfterTransition","children","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","slotProps","slots","theme"],tn=e=>e.classes,nn=ae("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.open&&r.exited&&t.hidden]}})(({theme:e,ownerState:t})=>p({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),on=ae(Qt,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),rn=J(function(t,r){var o,i,n,s,a,l;const d=Te({name:"MuiModal",props:t}),{BackdropComponent:v=on,BackdropProps:g,closeAfterTransition:T=!1,children:b,component:u,components:x={},componentsProps:k={},disableAutoFocus:w=!1,disableEnforceFocus:S=!1,disableEscapeKeyDown:f=!1,disablePortal:E=!1,disableRestoreFocus:R=!1,disableScrollLock:P=!1,hideBackdrop:C=!1,keepMounted:A=!1,slotProps:M,slots:O,theme:F}=d,H=j(d,en),[z,h]=pe(!0),c={closeAfterTransition:T,disableAutoFocus:w,disableEnforceFocus:S,disableEscapeKeyDown:f,disablePortal:E,disableRestoreFocus:R,disableScrollLock:P,hideBackdrop:C,keepMounted:A},y=p({},d,c,{exited:z}),B=tn(y),_=(o=(i=O==null?void 0:O.root)!=null?i:x.Root)!=null?o:nn,I=(n=(s=O==null?void 0:O.backdrop)!=null?s:x.Backdrop)!=null?n:v,m=(a=M==null?void 0:M.root)!=null?a:k.root,N=(l=M==null?void 0:M.backdrop)!=null?l:k.backdrop;return $(Ft,p({slots:{root:_,backdrop:I},slotProps:{root:()=>p({},Ce(m,y),!Xe(_)&&{as:u,theme:F}),backdrop:()=>p({},g,Ce(N,y))},onTransitionEnter:()=>h(!1),onTransitionExited:()=>h(!0),ref:r},H,{classes:B},c,{children:b}))}),sn=rn,an=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function we(e){return`scale(${e}, ${e**2})`}const ln={entering:{opacity:1,transform:we(1)},entered:{opacity:1,transform:"none"}},Se=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Je=J(function(t,r){const{addEndListener:o,appear:i=!0,children:n,easing:s,in:a,onEnter:l,onEntered:d,onEntering:v,onExit:g,onExited:T,onExiting:b,style:u,timeout:x="auto",TransitionComponent:k=Ye}=t,w=j(t,an),S=D(),f=D(),E=Ve(),R=D(null),P=ne(R,n.ref,r),C=c=>y=>{if(c){const B=R.current;y===void 0?c(B):c(B,y)}},A=C(v),M=C((c,y)=>{Ze(c);const{duration:B,delay:_,easing:I}=ge({style:u,timeout:x,easing:s},{mode:"enter"});let m;x==="auto"?(m=E.transitions.getAutoHeightDuration(c.clientHeight),f.current=m):m=B,c.style.transition=[E.transitions.create("opacity",{duration:m,delay:_}),E.transitions.create("transform",{duration:Se?m:m*.666,delay:_,easing:I})].join(","),l&&l(c,y)}),O=C(d),F=C(b),H=C(c=>{const{duration:y,delay:B,easing:_}=ge({style:u,timeout:x,easing:s},{mode:"exit"});let I;x==="auto"?(I=E.transitions.getAutoHeightDuration(c.clientHeight),f.current=I):I=y,c.style.transition=[E.transitions.create("opacity",{duration:I,delay:B}),E.transitions.create("transform",{duration:Se?I:I*.666,delay:Se?B:B||I*.333,easing:_})].join(","),c.style.opacity=0,c.style.transform=we(.75),g&&g(c)}),z=C(T),h=c=>{x==="auto"&&(S.current=setTimeout(c,f.current||0)),o&&o(R.current,c)};return Z(()=>()=>{clearTimeout(S.current)},[]),$(k,p({appear:i,in:a,nodeRef:R,onEnter:M,onEntered:O,onEntering:A,onExit:H,onExited:z,onExiting:F,addEndListener:h,timeout:x==="auto"?null:x},w,{children:(c,y)=>he(n,p({style:p({opacity:0,transform:we(.75),visibility:c==="exited"&&!a?"hidden":void 0},ln[c],u,n.props.style),ref:P},y))}))});Je.muiSupportAuto=!0;const cn=Je;function dn(e){return be("MuiPopover",e)}xe("MuiPopover",["root","paper"]);const un=["onEntering"],fn=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function ze(e,t){let r=0;return typeof t=="number"?r=t:t==="center"?r=e.height/2:t==="bottom"&&(r=e.height),r}function Ke(e,t){let r=0;return typeof t=="number"?r=t:t==="center"?r=e.width/2:t==="right"&&(r=e.width),r}function Ge(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Re(e){return typeof e=="function"?e():e}const pn=e=>{const{classes:t}=e;return ye({root:["root"],paper:["paper"]},dn,t)},hn=ae(sn,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),mn=ae(zt,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),vn=J(function(t,r){const o=Te({props:t,name:"MuiPopover"}),{action:i,anchorEl:n,anchorOrigin:s={vertical:"top",horizontal:"left"},anchorPosition:a,anchorReference:l="anchorEl",children:d,className:v,container:g,elevation:T=8,marginThreshold:b=16,open:u,PaperProps:x={},transformOrigin:k={vertical:"top",horizontal:"left"},TransitionComponent:w=cn,transitionDuration:S="auto",TransitionProps:{onEntering:f}={}}=o,E=j(o.TransitionProps,un),R=j(o,fn),P=D(),C=ne(P,x.ref),A=p({},o,{anchorOrigin:s,anchorReference:l,elevation:T,marginThreshold:b,PaperProps:x,transformOrigin:k,TransitionComponent:w,transitionDuration:S,TransitionProps:E}),M=pn(A),O=te(()=>{if(l==="anchorPosition")return a;const m=Re(n),L=(m&&m.nodeType===1?m:G(P.current).body).getBoundingClientRect();return{top:L.top+ze(L,s.vertical),left:L.left+Ke(L,s.horizontal)}},[n,s.horizontal,s.vertical,a,l]),F=te(m=>({vertical:ze(m,k.vertical),horizontal:Ke(m,k.horizontal)}),[k.horizontal,k.vertical]),H=te(m=>{const N={width:m.offsetWidth,height:m.offsetHeight},L=F(N);if(l==="none")return{top:null,left:null,transformOrigin:Ge(L)};const le=O();let K=le.top-L.vertical,V=le.left-L.horizontal;const X=K+N.height,oe=V+N.width,ce=fe(Re(n)),me=ce.innerHeight-b,ve=ce.innerWidth-b;if(K<b){const W=K-b;K-=W,L.vertical+=W}else if(X>me){const W=X-me;K-=W,L.vertical+=W}if(V<b){const W=V-b;V-=W,L.horizontal+=W}else if(oe>ve){const W=oe-ve;V-=W,L.horizontal+=W}return{top:`${Math.round(K)}px`,left:`${Math.round(V)}px`,transformOrigin:Ge(L)}},[n,l,O,F,b]),[z,h]=pe(u),c=te(()=>{const m=P.current;if(!m)return;const N=H(m);N.top!==null&&(m.style.top=N.top),N.left!==null&&(m.style.left=N.left),m.style.transformOrigin=N.transformOrigin,h(!0)},[H]),y=(m,N)=>{f&&f(m,N),c()},B=()=>{h(!1)};Z(()=>{u&&c()}),ot(i,()=>u?{updatePosition:()=>{c()}}:null,[u,c]),Z(()=>{if(!u)return;const m=at(()=>{c()}),N=fe(n);return N.addEventListener("resize",m),()=>{m.clear(),N.removeEventListener("resize",m)}},[n,u,c]);let _=S;S==="auto"&&!w.muiSupportAuto&&(_=void 0);const I=g||(n?G(Re(n)).body:void 0);return $(hn,p({BackdropProps:{invisible:!0},className:se(M.root,v),container:I,open:u,ref:r,ownerState:A},R,{children:$(w,p({appear:!0,in:u,onEntering:y,onExited:B,timeout:_},E,{children:$(mn,p({elevation:T},x,{ref:C,className:se(M.paper,x.className)},z?void 0:{style:p({},x.style,{opacity:0})},{ownerState:A,children:d}))}))}))}),xn=vn;export{Qt as B,qt as F,sn as M,zt as P,Ye as T,bn as a,xn as b,lt as c,at as d,G as e,Be as f,ge as g,Xe as i,fe as o,Ze as r,Ve as u};