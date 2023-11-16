import{s as n,r as c,j as e}from"./index-aef762e1.js";import{A as v}from"./footer-e6e4904e.js";import{N as C}from"./navbar-aa95f2c5.js";import"./index.esm-d6baa4b3.js";import"./iconBase-c6338860.js";const k=n.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center vertically */
  justify-content: center;
  height: 180vh;
  width: 100vw;
  background-color:gray;
`,T=n.div`
  text-align: center;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  height: 100%;
  margin-top: 15px;
  margin-bottom: 100px;
`,S=n.h1`
  font-size: 24px;
  margin-bottom: 20px;
`,d=n.section`
  margin-bottom: 20px;
`,a=n.label`
  margin-right: 10px;
`,t=n.input`
  margin-right: 5px;
`;n.select`
  margin-right: 5px;
`;const $=n.input`
  background-color: #0074d9;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin:5px;
`,N=n.a`
  background-color: #0074d9;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  text-decoration: none; /* Remove default link underline */
  display: inline-block;
`,w=n.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`,D=()=>{const[s,o]=c.useState("basic"),[l,h]=c.useState("monthly"),[r,i]=c.useState("paypal"),y={free:0,basic:10,premium:20},x={monthly:1,yearly:10},u={credit:5,debit:5,paypal:2,gcash:3},g=()=>{const p=y[s],m=x[l],P=u[r];return p+m+P},j=p=>{p.preventDefault();const m=g();f(m)},[b,f]=c.useState(0);return e.jsxs(k,{children:[e.jsx(C,{}),e.jsxs(T,{className:"form",onSubmit:j,children:[e.jsx(S,{children:"Checkout Form"}),e.jsxs(d,{className:"plan",children:[e.jsx("h2",{children:"Choose a plan:"}),e.jsxs(a,{children:[e.jsx(t,{type:"radio",name:"plan",value:"free",checked:s==="free",onChange:()=>o("free")}),"Free ($0)"]}),e.jsxs(a,{children:[e.jsx(t,{type:"radio",name:"plan",value:"basic",checked:s==="basic",onChange:()=>o("basic")}),"Basic ($10)"]}),e.jsxs(a,{children:[e.jsx(t,{type:"radio",name:"plan",value:"premium",checked:s==="premium",onChange:()=>o("premium")}),"Premium ($20)"]})]}),e.jsxs(d,{className:"payment-plan",children:[e.jsx("h2",{children:"Select a payment plan:"}),e.jsxs(a,{children:[e.jsx(t,{type:"radio",name:"paymentPlan",value:"monthly",checked:l==="monthly",onChange:()=>h("monthly")}),"Monthly ($1)"]}),e.jsxs(a,{children:[e.jsx(t,{type:"radio",name:"paymentPlan",value:"yearly",checked:l==="yearly",onChange:()=>h("yearly")}),"Yearly ($10)"]})]}),e.jsxs(d,{className:"payment-type",children:[e.jsx("h2",{children:"Select a payment type:"}),e.jsxs(a,{children:[e.jsx(t,{type:"radio",name:"paymentType",value:"credit",checked:r==="credit",onChange:()=>i("credit")}),"Credit Card ($5)"]}),e.jsxs(a,{children:[e.jsx(t,{type:"radio",name:"paymentType",value:"debit",checked:r==="debit",onChange:()=>i("debit")}),"Debit Card ($5)"]}),e.jsxs(a,{children:[e.jsx(t,{type:"radio",name:"paymentType",value:"paypal",checked:r==="paypal",onChange:()=>i("paypal")}),"Paypal ($2)"]}),e.jsxs(a,{children:[e.jsx(t,{type:"radio",name:"paymentType",value:"gcash",checked:r==="gcash",onChange:()=>i("gcash")}),"G-Cash ($3)"]})]}),e.jsx($,{className:"submit",type:"submit",value:"Submit"}),e.jsx("br",{}),e.jsx(N,{href:"/",children:"Click Me"}),e.jsxs(w,{children:["Total Price: $",b]})]}),e.jsx(v,{})]})};export{D as default};
