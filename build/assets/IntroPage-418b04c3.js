import{s as t,j as e}from"./index-ef4458a9.js";import{N as i}from"./navbar-78d032f4.js";import{A as o}from"./footer-c9aca682.js";import{P as r,A as n}from"./popup-ads-b34ade85.js";import"./index.esm-f965c28b.js";import"./iconBase-464e3dd3.js";const s=t.div`
  background-image: url("/images/ssa.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh; /* 100% of the viewport height */
  width: 100vw; /* 100% of the viewport width */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  text-align: center; /* Center text within */
  overflow-x: hidden;

  @media (max-width: 360px), (max-width: 640px) {
    font-size: 10px;
    margin: 3px;
    width:100%;      
    overflow-x: hidden;
  }
`,a=t.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  text-align: center; /* Center text within */
`,d=t.h1`
  color: white;
  font-size: 50px;
  margin-top: -20px;
  font-family: "Gotham", sans-serif;
  font-weight: bold;

  @media (max-width: 360px), (max-width: 640px) {
    font-size: 30px;
    margin: 3px;
    
  }
`,x=t.a`
  background-color: #e50914;
  color: white;
  font-size: 18px;
  text-decoration: none;
  margin-top: 10px;
  border: 2px solid #e50914;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Gotham", sans-serif;
  font-weight: bold;
`,g=()=>e.jsxs("section",{children:[e.jsxs(s,{children:[e.jsx(i,{}),e.jsxs(a,{children:[e.jsxs(d,{children:["Unlimited movies, TV shows, and ",e.jsx("br",{})," more"]}),e.jsx(x,{href:"/home",children:"Get Started"})]})]}),e.jsx(o,{}),e.jsx(r,{}),e.jsx(n,{})]});export{g as default};
