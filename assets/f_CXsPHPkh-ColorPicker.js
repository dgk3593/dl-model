function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/f_D0Qg3LWG-index.js","assets/index-dqy9pSaD.js","assets/f_CXIT8qpq-three.js","assets/f_GACrSddE-index.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{U as C,i as f,p as k,u as o,I as p}from"./index-dqy9pSaD.js";import{C as i}from"./f_Cp3kixhc-ColorButton.js";const u=[{name:"Green",hex:"#00ff00"},{name:"Black",hex:"#000000"},{name:"Discord",hex:"#36393f",title:"Discord Dark Mode"},{name:"Grey",hex:"#cccccc"},{name:"Discord",hex:"#f2f3f5",title:"Discord Light Mode"},{name:"White",hex:"#ffffff"}],P=C(()=>f(()=>import("./f_D0Qg3LWG-index.js"),__vite__mapDeps([0,1,2,3])).then(c=>({default:c.ChromePicker})));function D({initColor:c="#cccccc",onSelect:t}){const[r,n]=k(c),a=({hex:e})=>n(e),m=e=>n(e.target.value),s=()=>t(r),d=o("div",{className:"ColorPicker-common",children:u.map(({name:e,hex:l,title:h})=>o(i,{onClick:m,value:l,color:l,title:h,children:e},l))});return o("div",{className:"ColorPicker",children:[o("div",{className:"ColorPicker-select",children:[d,o(p,{fallback:null,children:o(P,{color:r,onChangeComplete:a})})]}),o(i,{color:r,onClick:s,children:"Apply"})]})}export{D as C};
