import{_ as m,e as a}from"./index.ba3f9cc2.js";import{B as b}from"./Button.3f2e0ab4.js";import{B as g}from"./Box.f4fd8ac3.js";const s={button:{padding:"0.5rem 1rem",margin:0,color:"rgba(16, 16, 16, 0.8)",border:"1px solid rgba(16, 16, 16, 0.5)","&:hover":{border:"1px solid rgba(16, 16, 16, 0.8)",backgroundColor:"rgba(210, 210, 210, 0.2)"}},input:{opacity:0,width:0,maxWidth:0}};function y({id:t="upload",multiple:o=!1,label:e="Upload",mimeType:r="image/*",onChange:i,style:c={},...d}){const l=m(),p=()=>{const n=l.current.files;i(n)},u={...s.button,...c};return a(g,{children:[a(b,{variant:"outlined",htmlFor:t,component:"label",sx:u,...d,children:e}),a("input",{name:t,id:t,type:"file",multiple:o,accept:r,style:s.input,ref:n=>l.current=n,onChange:p})]})}const B=async t=>new Promise(o=>{const e=new FileReader;e.onload=r=>o(r.target.result),e.readAsDataURL(t)});export{y as U,B as f};