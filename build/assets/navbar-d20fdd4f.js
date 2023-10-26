import{s as e,r as l,j as t,L as a}from"./index-0cbab773.js";const c=e.nav`
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
`,x=e.div`
  font-size: 24px;
  font-weight: bold;
  margin: 20px;
  margin-right: auto;
  border-radius: 10px;
  color: white;
`,p=e.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  justify-content: center;
  flex-grow: 1;
`,n=e.li`
  margin-left: 30px;
  position: relative;
  font-family: "Montserrat", sans-serif;
  background-color: transparent;
  border-radius: 25%;
  padding: 5px 10px;
`,i=e(a)`
  color: white;
  text-decoration: none;
  font-size: 20px;
`,h=e(i)`
  background-color: #e50914;
  border-radius: 25px;
  height: 40px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`,g=e.div`
  display: ${({isOpen:o})=>o?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`,b=e.div`
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
`,f=e.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`,r=e.p`
  font-size: 18px;
`,u=e.p`
  font-size: 16px;
  margin: 10px 0;
`,m=()=>{const[o,d]=l.useState(!1),s=()=>{d(!o)};return t.jsxs("div",{children:[t.jsxs(c,{children:[t.jsx(x,{children:"ReactFlix"}),t.jsxs(p,{children:[t.jsx(n,{children:t.jsx(i,{to:"/home",children:"Browse"})}),t.jsx(n,{children:t.jsx(i,{to:"/reg",children:"Login"})})]}),t.jsx(n,{children:t.jsx(h,{onClick:s,children:"Subscribe"})})]}),t.jsx(g,{isOpen:o,children:t.jsxs(b,{children:[t.jsx(f,{onClick:s,children:"×"}),t.jsxs("div",{children:[t.jsx(r,{children:"Want to Avail $12 Lifetime No Ads?"}),t.jsx(u,{children:"or"}),t.jsx(r,{children:"Want to Avail $1 1 Month No Ads?"})]}),t.jsx(a,{to:"/payment",children:"Proceed to Payment"})]})})]})};export{m as N};
