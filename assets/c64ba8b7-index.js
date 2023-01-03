import{x as V}from"./888d32ea-jsxRuntime.module.js";import{g as _}from"./042e6b4d-_commonjsHelpers.js";import{r as j}from"./264cfb41-compat.module.js";const g=t=>{let e;const n=new Set,o=(s,d)=>{const c=typeof s=="function"?s(e):s;if(!Object.is(c,e)){const a=e;e=d??typeof c!="object"?c:Object.assign({},e,c),n.forEach(p=>p(e,a))}},r=()=>e,l={setState:o,getState:r,subscribe:s=>(n.add(s),()=>n.delete(s)),destroy:()=>n.clear()};return e=t(o,r,l),l},q=t=>t?g(t):g;var y={},D={get exports(){return y},set exports(t){y=t}},$={},h={},b={get exports(){return h},set exports(t){h=t}},O={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=j;function k(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var I=typeof Object.is=="function"?Object.is:k,W=v.useState,B=v.useEffect,C=v.useLayoutEffect,F=v.useDebugValue;function L(t,e){var n=e(),o=W({inst:{value:n,getSnapshot:e}}),r=o[0].inst,u=o[1];return C(function(){r.value=n,r.getSnapshot=e,m(r)&&u({inst:r})},[t,n,e]),B(function(){return m(r)&&u({inst:r}),t(function(){m(r)&&u({inst:r})})},[t]),F(n),n}function m(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!I(t,n)}catch{return!0}}function M(t,e){return e()}var R=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?M:L;O.useSyncExternalStore=v.useSyncExternalStore!==void 0?v.useSyncExternalStore:R;(function(t){t.exports=O})(b);/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=j,z=h;function A(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var G=typeof Object.is=="function"?Object.is:A,H=z.useSyncExternalStore,J=x.useRef,K=x.useEffect,N=x.useMemo,P=x.useDebugValue;$.useSyncExternalStoreWithSelector=function(t,e,n,o,r){var u=J(null);if(u.current===null){var f={hasValue:!1,value:null};u.current=f}else f=u.current;u=N(function(){function s(i){if(!d){if(d=!0,c=i,i=o(i),r!==void 0&&f.hasValue){var S=f.value;if(r(S,i))return a=S}return a=i}if(S=a,G(c,i))return S;var E=o(i);return r!==void 0&&r(S,E)?S:(c=i,a=E)}var d=!1,c,a,p=n===void 0?null:n;return[function(){return s(e())},p===null?void 0:function(){return s(p())}]},[e,n,o,r]);var l=H(t,u[0],u[1]);return K(function(){f.hasValue=!0,f.value=l},[l]),P(l),l};(function(t){t.exports=$})(D);const Q=_(y),{useSyncExternalStoreWithSelector:T}=Q;function U(t,e=t.getState,n){const o=T(t.subscribe,t.getState,t.getServerState||t.getState,e,n);return V(o),o}const w=t=>{const e=typeof t=="function"?q(t):t,n=(o,r)=>U(e,o,r);return Object.assign(n,e),n},tt=t=>t?w(t):w;export{tt as c};
