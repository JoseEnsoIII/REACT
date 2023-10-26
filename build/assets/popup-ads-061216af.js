import{s as t,r as i,j as e}from"./index-0cbab773.js";import{n as h,o as f,F as g,a as j,p as b,q as v,b as w}from"./index.esm-ad064f6f.js";const y=t.div`
  width: 100%;
  max-width: 1000px; /* Limit maximum width */
  height: 150px;
  background-color: #f0f0f0;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 998;
`,C=t.div`
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3px;
`,T=t.p`
  font-size: 15px;
  color: #333;
  margin: 0;
  display: flex;
  align-items: center; 
  justify-content: center; 
  font-family: "Gotham", sans-serif;
  font-weight: bold;
  svg {
    margin-right: 5px; 
  }
`,A=t.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
  color: #000;
  margin:10px;
  font-weight: bold;
`,k=t.div`
  font-size: 15px;
  color: #999;
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  margin-right:250px
  
`,I=t.img`
  width: 100%;
  height: auto;
`;function X(){const[o,s]=i.useState(!0),[l,a]=i.useState(180),[p,m]=i.useState(!0);i.useEffect(()=>{if(o){const n=setInterval(()=>{a(c=>c-1)},1e3),d=setTimeout(()=>{x()},18e4);return()=>{clearTimeout(d),clearInterval(n)}}else if(p){const n=setTimeout(()=>{s(!0),a(180)},12e4);return()=>{clearTimeout(n)}}},[o,p]);const x=()=>{s(!1),m(!0)},u=n=>{const d=Math.floor(n/60),c=n%60;return`${d}:${c<10?"0":""}${c}`};return e.jsx(e.Fragment,{children:o&&e.jsxs(y,{children:[e.jsxs(C,{children:[e.jsxs(T,{children:[e.jsx(h,{style:{margin:"10px"}})," ","Promote Your Ads/Products Here"]}),e.jsxs(k,{children:["Auto close in ",u(l)]}),e.jsx(A,{onClick:x,children:"X"})]}),e.jsx(I,{src:"https://via.placeholder.com/900X100",alt:"Advertisement"})]})})}const F=t.div`
  display: ${o=>o.isOpen?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
`,S=t.div`
  background: white;
  width: 400px;
  height: 300px;
  margin: 100px auto;
  padding-bottom: 75px; /* Padding only on the bottom */
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`,z=t.img`
  width: 100%; /* Set the image width to cover the container */
  height: 100%; /* Set the image height to cover the container */
`,P=t.p`
  margin: 8px 0;
  font-family: "Gotham", sans-serif;
  font-weight: bold;
`,E=t.button`
  position: absolute;
  top: 17%;
  right: 38%;
  cursor: pointer;
  color: black;
  font-size: 15px;
  border-radius:25%;
`,O=t.div`
  display: flex;
  gap: 10px;
  margin: 5px 0;
`,r=t.div`
  font-size: 20px;
  cursor: pointer;
`,B=()=>{const[o,s]=i.useState(!1);i.useEffect(()=>{const a=setTimeout(()=>{s(!0)},5e3);return()=>{clearTimeout(a)}},[]);const l=()=>{s(!1)};return e.jsx(F,{isOpen:o,children:e.jsxs(S,{children:[e.jsx(E,{onClick:l,children:e.jsx(f,{})}),e.jsx(z,{src:"images/lou.jpg",alt:"Advertisement Image"}),e.jsx(P,{children:"Special Offer: 20% off on all products!"}),e.jsxs(O,{children:[e.jsx(r,{children:e.jsx(g,{})}),e.jsx(r,{children:e.jsx(j,{})}),e.jsx(r,{children:e.jsx(b,{})}),e.jsx(r,{children:e.jsx(v,{})}),e.jsx(r,{children:e.jsx(w,{})})]})]})})};export{X as A,B as P};
