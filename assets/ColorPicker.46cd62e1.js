import{ab as C,z as f,y as k,o,U as p}from"./index.5c4264c3.js";import{C as t}from"./ColorButton.69be4728.js";const u=[{name:"Green",hex:"#00ff00"},{name:"Black",hex:"#000000"},{name:"Discord",hex:"#36393f",title:"Discord Dark Mode"},{name:"Grey",hex:"#cccccc"},{name:"Discord",hex:"#f2f3f5",title:"Discord Light Mode"},{name:"White",hex:"#ffffff"}];const P=C(()=>f(()=>import("./index.e0b405cc.js"),["assets/index.e0b405cc.js","assets/index.5c4264c3.js","assets/index.af0be273.css"]).then(c=>({default:c.ChromePicker})));function D({initColor:c="#cccccc",onSelect:a}){const[r,n]=k(c),i=({hex:e})=>n(e),s=e=>n(e.target.value),m=()=>a(r),d=o("div",{className:"ColorPicker-common",children:u.map(({name:e,hex:l,title:h})=>o(t,{onClick:s,value:l,color:l,title:h,children:e},l))});return o("div",{className:"ColorPicker",children:[o("div",{className:"ColorPicker-select",children:[d,o(p,{fallback:null,children:o(P,{color:r,onChangeComplete:i})})]}),o(t,{color:r,onClick:m,children:"Apply"})]})}export{D as C};