import{s as i,r as x,j as t,L as a}from"./index-1f365af0.js";import{k as g}from"./index.esm-1ddb6421.js";const m=i.nav`
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
  
  
  
`,f=i.div`
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

`,b=i.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  justify-content: center;
  flex-grow: 1;
`,s=i.li`
  margin-left: 30px;
  position: relative;
  font-family: "Montserrat", sans-serif;
  background-color: transparent;
  border-radius: 25%;
  padding: 3px 10px;

  
`,r=i(a)`
  color: white;
  text-decoration: none;
  font-size: 20px;

  @media (max-width: 360px), (max-width: 640px) {
  font-size: 10px;
  display: none;
}

`,u=i(r)`
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
`,j=i.div`
  display: ${({isOpen:e})=>e?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;

  
`,w=i.div`
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
`,k=i.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`,l=i.p`
  font-size: 18px;
`,y=i.p`
  font-size: 16px;
  margin: 10px 0;
`,v=i(g)`
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
    margin-right: 20%;
    border: 1px solid white;
    height: 30px;
    width: 40px;
  }
`,z=i.div`
  position: absolute;
  top: 100px;
  right: -400px;
  width: 200px;
  height: 13%;
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
`,o=i(a)`
  color: white;
  text-decoration: none;
  font-size: 20px;
  margin: 10px;
  align-self: flex-start; /* Align links at the top */
`,N=()=>{const[e,p]=x.useState(!1),[d,c]=x.useState(!1),n=()=>{p(!e)},h=()=>{c(!d)};return t.jsxs("div",{children:[t.jsxs(m,{children:[t.jsx(f,{children:"ReactFlix"}),t.jsxs(b,{children:[t.jsx(s,{children:t.jsx(r,{to:"/home",children:"Browse"})}),t.jsx(s,{children:t.jsx(r,{to:"/reg",children:"Login"})})]}),t.jsx(s,{children:t.jsx(u,{onClick:n,children:"Subscribe"})}),t.jsx(v,{onClick:h})]}),t.jsx(j,{isOpen:e,children:t.jsxs(w,{children:[t.jsx(k,{onClick:n,children:"×"}),t.jsxs("div",{children:[t.jsx(l,{children:"Want to Avail $12 Lifetime No Ads?"}),t.jsx(y,{children:"or"}),t.jsx(l,{children:"Want to Avail $1 1 Month No Ads?"})]}),t.jsx(a,{to:"/payment",children:"Proceed to Payment"})]})}),t.jsxs(z,{className:d?"open":"",children:[t.jsx(o,{to:"/home",children:"Home"}),t.jsx(o,{to:"/reg",children:"Register"}),t.jsx(o,{to:"/login",children:"Login"}),t.jsx(o,{onClick:n,style:{color:"red",textDecoration:"none"},children:"Subscribe"})]})]})};export{N};
