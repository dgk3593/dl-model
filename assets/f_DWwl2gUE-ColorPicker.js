import{D as C,i as f,p as k,u as o,L as p}from"./index-BdZM_6rm.js";import{C as i}from"./f_DvvWYLrg-ColorButton.js";const u=[{name:"Green",hex:"#00ff00"},{name:"Black",hex:"#000000"},{name:"Discord",hex:"#36393f",title:"Discord Dark Mode"},{name:"Grey",hex:"#cccccc"},{name:"Discord",hex:"#f2f3f5",title:"Discord Light Mode"},{name:"White",hex:"#ffffff"}],P=C(()=>f(()=>import("./f_B0biJXK7-index.js"),__vite__mapDeps([0,1,2,3])).then(c=>({default:c.ChromePicker})));function _({initColor:c="#cccccc",onSelect:t}){const[r,n]=k(c),a=({hex:e})=>n(e),m=e=>n(e.target.value),s=()=>t(r),d=o("div",{className:"ColorPicker-common",children:u.map(({name:e,hex:l,title:h})=>o(i,{onClick:m,value:l,color:l,title:h,children:e},l))});return o("div",{className:"ColorPicker",children:[o("div",{className:"ColorPicker-select",children:[d,o(p,{fallback:null,children:o(P,{color:r,onChangeComplete:a})})]}),o(i,{color:r,onClick:s,children:"Apply"})]})}export{_ as C};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/f_B0biJXK7-index.js","assets/index-BdZM_6rm.js","assets/f_D9omGRQB-three.js","assets/f_GACrSddE-index.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
