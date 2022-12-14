(function(){"use strict";const c=(e,t)=>t.length?e.filter(s=>t.every(([n,i])=>i.includes(s[n]))):e;addEventListener("message",e=>{const{fullList:t,conditions:s}=e.data,n=c(t,s);postMessage(n)})})();
