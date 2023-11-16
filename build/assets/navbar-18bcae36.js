import{s as e,r as l,j as i,L as r}from"./index-0a318fa9.js";import{F as g,b as m,a as b,m as f}from"./index.esm-2a7cc156.js";const w=e.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100vw;
  font-family: "Gotham", sans-serif;
  font-weight: bold;
  color: white;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  transition: background-color 0.3s ease, color 0.3s ease;
  z-index: 999;

  @media (max-width: 360px), (max-width: 640px) {
    background-color:black;
  }

  
  
`,u=e.div`
  font-size: 24px;
  font-weight: bold;
  margin: 20px;
  margin-right: auto;
  border-radius: 10px;
  color: white;

  @media (max-width: 360px), (max-width: 640px) {
  font-size: 10px;
  margin: 3px;
  display: none;
}

`,j=e.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  justify-content: center;
  flex-grow: 1;
`,s=e.li`
  margin-left: 30px;
  position: relative;
  font-family: "Montserrat", sans-serif;
  background-color: transparent;
  border-radius: 25%;
  padding: 3px 10px;

  
`,a=e(r)`
  color: white;
  text-decoration: none;
  font-size: 20px;

  @media (max-width: 360px), (max-width: 640px) {
  font-size: 10px;
  display: none;
}

`,k=e(a)`
  background-color: #e50914;
  border-radius: 10px;
  height: 40px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;

  @media (max-width: 360px), (max-width: 640px) {
    margin: 3px;
    width: 60px;
    display: none;
  }
`,y=e.div`
  display: ${({isOpen:o})=>o?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;

  
`,v=e.div`
  background: white;
  border-radius: 10px;
  width: 60%;
  max-width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  text-align: center;

  @media (max-width: 640px) {
    width:200px;
    font-size: 10px;
    top: 10%;
  left: 30%;
  }
`,z=e.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  @media (max-width: 640px) {
    
  }
`,x=e.p`
  font-size: 18px;
`,S=e.p`
  font-size: 16px;
  margin: 10px 0;
`,L=e(f)`
  font-size: 24px;
  cursor: pointer;
  color: white;
  position: sticky;
  top: 0;
  margin-right: 20%;
  z-index: 100;
  display:none;

  @media (max-width: 640px) {
    position: sticky;
    font-size: 25px;
    display: block;
    margin-right: 10%;
    border: 1px solid white;
    height: 30px;
    width: 40px;
  }
`,M=e.div`
  position: absolute;
  top: 100px;
  right: -400px;
  width: 200px;
  height: 48%;
  background: rgba(0, 0, 0, 0.8);
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Adjusted to align links at the top */
  z-index: 998;

  &.open {
    right: 0;
  }
`,t=e(r)`
  color: white;
  text-decoration: none;
  font-size: 20px;
  margin: 10px;
  align-self: flex-start; /* Align links at the top */
`,N=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color:white;
  & > * {
    margin-right: 10px; // Adjust the spacing between icons as needed
  }
`,C=()=>{const[o,c]=l.useState(!1),[d,p]=l.useState(!1),n=()=>{c(!o)},h=()=>{p(!d)};return i.jsxs("div",{children:[i.jsxs(w,{children:[i.jsx(u,{children:"ReactFlix"}),i.jsxs(j,{children:[i.jsx(s,{children:i.jsx(a,{to:"/home",children:"Browse"})}),i.jsx(s,{children:i.jsx(a,{to:"/reg",children:"Login"})})]}),i.jsx(s,{children:i.jsx(k,{onClick:n,children:"Subscribe"})}),i.jsx(L,{onClick:h})]}),i.jsx(y,{isOpen:o,children:i.jsxs(v,{children:[i.jsx(z,{onClick:n,children:"×"}),i.jsxs("div",{children:[i.jsx(x,{children:"Want to Avail $12 Lifetime No Ads?"}),i.jsx(S,{children:"or"}),i.jsx(x,{children:"Want to Avail $1 1 Month No Ads?"})]}),i.jsx(r,{to:"/payment",children:"Proceed to Payment"})]})}),i.jsxs(M,{className:d?"open":"",children:[i.jsx(t,{to:"/home",children:"Home"}),i.jsx(t,{to:"/reg",children:"Register"}),i.jsx(t,{to:"/login",children:"Login"}),i.jsx(t,{onClick:n,style:{color:"red",textDecoration:"none"},children:"Subscribe"}),i.jsx(t,{children:"Follow us  "}),i.jsx(t,{children:i.jsxs(N,{children:[i.jsx(g,{size:30,color:"white"}),i.jsx(m,{size:30,color:"white"}),i.jsx(b,{size:30,color:"white"})]})})]})]})};export{C as N};
