import{s as t,r as n,j as e}from"./index-ef4458a9.js";import{h as u,i as g,F as b,a as w,j,k,l as y}from"./index.esm-f965c28b.js";const A=t.div`
  width: 100%;
  max-width: 1000px; /* Limit maximum width */
  height: 180px;
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
  
  @media (max-width: 640px) {
    height: 120px;
    width: 100%;
    margin-left: 50%; 

    position: Sticky;
    bottom:-4%;
    top: auto
    position: sticky;
    z-index: 999;
  }
`,C=t.div`
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3px;

  @media (max-width: 640px) {
  height:30px;
  width: 100%;
  }
`,p=t.p`
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

  @media (max-width: 640px) {
    font-size:10px;
    margin:10px;
  }
`,v=t.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
  color: #000;
  margin:10px;
  font-weight: bold;
`,T=t.div`
  font-size: 15px;
  color: #999;
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  margin-right:250px
  
  
  @media (max-width: 640px) {
    font-size:10px;
    font-family:Gotham;
  }
`,z=t.img`
  width: 100%;
  height: auto;
  @media (max-width: 640px) {
    margin-top:-5px;
  }
`;function M(){const[i,s]=n.useState(!0),[c,a]=n.useState(180),[h,x]=n.useState(!0);n.useEffect(()=>{if(i){const o=setInterval(()=>{a(d=>d-1)},1e3),l=setTimeout(()=>{m()},18e4);return()=>{clearTimeout(l),clearInterval(o)}}else if(h){const o=setTimeout(()=>{s(!0),a(180)},12e4);return()=>{clearTimeout(o)}}},[i,h]);const m=()=>{s(!1),x(!0)},f=o=>{const l=Math.floor(o/60),d=o%60;return`${l}:${d<10?"0":""}${d}`};return e.jsx(e.Fragment,{children:i&&e.jsxs(A,{children:[e.jsxs(C,{children:[e.jsxs(p,{children:[e.jsx(u,{style:{margin:"10px"}})," ","Promote Your Ads/Products Here"]}),e.jsx(T,{children:e.jsxs(p,{children:["Auto close in ",f(c)]})}),e.jsx(v,{onClick:m,children:"X"})]}),e.jsx(z,{href:"/",src:"https://3.imimg.com/data3/AM/KK/IMFCP-2767301/excelsoft-banners-solution-implementation.jpg",alt:"Advertisement"})]})})}const S=t.div`
  display: ${i=>i.isOpen?"block":"none"};
  position: fixed; /* Use a fixed position to make it sticky */
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Center the element */
  width: 400px; /* Set your preferred width */
  height: 300px; /* Set your preferred height */
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000; /* Use a higher z-index to make it appear above other content */

  @media (max-width: 640px) {
    width: 200px;
    height: 200px;
    background-color: white;
     border:1px solid black;;
  }
`,I=t.div`
background-color: white; /* Set the background color to white outside of the media query */
  width: 100%; /* Adjust the width to fill the container */
  height: 100%; /* Adjust the height to fill the container */

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 640px) {
    width: 100%; /* Adjust the width for mobile */
    height: 160%; /* Adjust the height for mobile */
    /* Other mobile styles as needed */
    z-index: 1000;
    background-color: white;
    align-items: center;
  }
`,O=t.img`
  width: 100%; /* Set the image width to cover the container */
  height: 100%; /* Set the image height to cover the container */
  
  @media (max-width: 640px) {
    width: 100%; /* Adjust the width for mobile */
    height: 100%;
  }
`,F=t.p`
  margin: 8px 0;
  font-family: "Gotham", sans-serif;
  font-weight: bold;
  background-color: white;

  @media (max-width: 640px) { 
    font-family: "Gotham", sans-serif;
    font-weight: bold;
    font-size:10px;
    background-color: white;
  }
`,P=t.button`
  position: absolute;
  top: 5%;
  right: 5%;
  cursor: pointer;
  font-size: 20px;
  border: none; /* Remove the border */
  outline: none;

  @media (max-width: 640px) {
    top: 5%; /* Adjust the top position for spacing on small screens */
    left: 85%; /* Adjust the right position for spacing on small screens */
    z-index: 1;
    background-color: transparent;
  }
`,E=t.div`
  display: flex;
  gap: 10px;
  margin: 5px 0;
`,r=t.div`
  font-size: 20px;
  cursor: pointer;
  color:white;

  @media (max-width: 640px) { 
    font-weight: bold;
    font-size: 20px;
    color:black;
  }
`,U=()=>{const[i,s]=n.useState(!1);n.useEffect(()=>{const a=setTimeout(()=>{s(!0)},5e3);return()=>{clearTimeout(a)}},[]);const c=()=>{s(!1),fetch("/api/close-ad",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({adName:"Special Offer Ad"})})};return e.jsx(S,{isOpen:i,children:e.jsxs(I,{children:[e.jsx(P,{style:{backgroundColor:"transparent",color:"red"},onClick:c,children:e.jsx(g,{})}),e.jsx(O,{Link:"/",src:"https://www.bing.com/th/id/OGC.b546f6c13f759dc4d834469fea2267fe?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f27%2f94%2f6a%2f27946a99657cddf0cbde79a7e4e6f51f.gif&ehk=aEd7kEDfUPpHzTU%2blc4GOyKf1UOSaig012MuT1ceeMk%3d",alt:"Advertisement Image"}),e.jsx(F,{children:"Special Offer: 20% off on all products!"}),e.jsxs(E,{children:[e.jsx(r,{children:e.jsx(b,{})}),e.jsx(r,{children:e.jsx(w,{})}),e.jsx(r,{children:e.jsx(j,{})}),e.jsx(r,{children:e.jsx(k,{})}),e.jsx(r,{children:e.jsx(y,{})})]})]})})};export{M as A,U as P};
