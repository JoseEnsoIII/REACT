import{s as v,r as o,j as e}from"./index-aab812e7.js";import{N as C}from"./navbar-d7704092.js";import{A as f}from"./footer-64ef0b89.js";import{P as b,A as k}from"./popup-ads-4e5b88b8.js";import"./index.esm-1aa73e51.js";import"./iconBase-e1c2ec00.js";const g=v.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  border: 1px solid white;
  color: white;
  padding: 20px;
`,$=()=>{const[r,i]=o.useState(""),[s,n]=o.useState(1),[a,l]=o.useState(""),u=["Movie 1","Movie 2","Movie 3"],h=t=>{i(t.target.value)},d=t=>{n(Number(t.target.value))},c=()=>s*10,x=()=>{alert(`Ticket purchased for ${r} x ${s} for a total of $${c()}.`)},p=t=>{l(t.target.value)},m=u.filter(t=>t.toLowerCase().includes(a.toLowerCase()));return e.jsxs(g,{children:[e.jsx(C,{}),e.jsx("h1",{children:"Cinema Ticket Purchase"}),e.jsxs("label",{children:["Search for a movie:",e.jsx("input",{type:"text",value:a,onChange:p})]}),e.jsx("br",{}),e.jsxs("label",{children:["Select a movie:",e.jsxs("select",{value:r,onChange:h,children:[e.jsx("option",{value:"",children:"Select a movie"}),m.map((t,j)=>e.jsx("option",{value:t,children:t},j))]})]}),e.jsx("br",{}),e.jsxs("label",{children:["Number of tickets:",e.jsx("input",{type:"number",value:s,onChange:d,min:1})]}),e.jsx("br",{}),e.jsxs("p",{children:["Total Price: $",c()]}),e.jsx("button",{onClick:x,children:"Purchase Ticket"}),e.jsx(b,{}),e.jsx(k,{}),e.jsx(f,{})]})};export{$ as default};
