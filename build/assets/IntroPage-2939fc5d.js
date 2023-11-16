import{s as o,r as l,j as e}from"./index-a520d23b.js";import{N as p}from"./navbar-0142c199.js";import{F as h,a as m,b as f,c as u}from"./index.esm-ee168830.js";import{A as g}from"./aos-46b5d53d.js";import{A as b}from"./footer-e3df149c.js";import{P as j,A as w}from"./popup-ads-edb04de7.js";import"./iconBase-edaa5f7e.js";const y=o.section`
  margin-top: -60px;
  height: 120vh;
  width: 100vw;
  border-top: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 640px) {
    height: auto; /* Adjust the height for smaller screens */
  }
`,k=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  @media (max-width: 640px) {
  margin-top:20px;
  }
`,C=o.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,i=o.div`
  margin: 10px;
  position: relative;
  width: 370px;
  max-width: calc(100vw - 48px);
  height: 350px;
  padding: 40px 30px 30px;
  color: #000;
  background: #fff;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border: 4px solid #fff;
  border-radius: 20px;
  text-align: left;
  transition: all 0.2s linear;
  border: 0.1px solid black;
  display: flex;
  flex-direction: column;

  @media (max-width: 640px) {
    width: 100%; /* Adjust the width for smaller screens */
    height: 250px;
    margin-top:5%;
    margin-bottom:10%;
    padding: 30px 20px 20px;
  }
`,S=o.h1`
  font-size: 50px;
  font-weight: bold;
  color: black;
  font-family: "Gotham", sans-serif;
  margin-top: 120px;

  @media (max-width: 640px) {
    font-size: 30px; /* Adjust the font size for smaller screens */
    margin-top: 20px; /* Adjust the margin for smaller screens */
    text-align: center; /* Center the text horizontally */
  }
`,a=o.h2`
  font-size: 24px;
  margin bottom: 10px;
  color: black;
  font-family: "Gotham", sans-serif;
  font-weight: bold;

  @media (max-width: 640px) {
    font-family: "Gotham", sans-serif;
    font-size: 15px;
    text-align: center; /* Center the text horizontally */
    display: flex;
    align-items: center; /* Center vertically */
    justify-content: center; /* Center horizontally */
  }
`,n=o.p`
  font-size: 15px;
  flex-grow: 1;

  @media (max-width: 640px) {
    font-size: 10px;
  }
`,z=o.div`
  display: ${t=>t.isOpen?"block":"none"};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  color: black;
  padding: 20px;
  z-index: 1000;
  border-radius: 10px;
  border: 1px solid black;
  text-align: center;
`,v=o.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: black;
  font-size: 20px;
  cursor: pointer;
`,s=o.div`
  display: flex;
  justify-content: center;
  align-items: center; /* Center the buttons vertically */
  flex-direction: row; /* Make the buttons inline and horizontal */

  @media (max-width: 640px) {
    flex-direction: column; /* Stack buttons vertically on smaller screens */
    align-items: center;
  }
`,A=o.button`
  background-color: #e50914;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  
`,r=o.button`
  background-color: ${t=>t.backgroundColor};
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  margin: 5px;

  @media (max-width: 640px) {
    margin: 0 5px; /* Apply horizontal margin on smaller screens */
    padding: 10px 15px; /* Adjust the padding for smaller screens */
    
  }
`,M=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row; /* Make the buttons inline and horizontal */

  @media (max-width: 640px) {
    flex-direction: row; /* Ensure buttons remain inline on smaller screens */
  }
`,x=()=>{const[t,c]=l.useState(!1),d=()=>{c(!t)};return l.useEffect(()=>{g.init()},[]),e.jsxs(y,{children:[e.jsx(S,{"data-aos":"fade-up",style:{fontSize:"50px",fontWeight:"bold",fontFamily:"Gotham",marginTop:" 120px"},children:"Benefits Watching on our Website"}),e.jsx(k,{children:e.jsxs(C,{children:[e.jsxs(i,{"data-aos":"fade-up",children:[e.jsx(a,{children:"BingeWatch"}),e.jsx(n,{children:"Stream movies, TV Shows, and Anime Everywhere"}),e.jsx(n,{children:"From Top Rated Movies, TV Shows, and Animes"}),e.jsx(n,{children:"and Animes"}),e.jsx(s,{children:e.jsx("a",{href:"/home",style:{backgroundColor:"#e50914",border:"none",borderRadius:"5px",color:"white",fontSize:"16px",padding:"10px 20px",textDecoration:"none",display:"inline-block",cursor:"pointer"},children:"Browse"})})]}),e.jsxs(i,{"data-aos":"fade-up",children:[e.jsx(a,{children:"You Can Watch Every Stream You Like for Free"}),e.jsx(n,{children:"You can also Subscribe For $5 Subscription"}),e.jsx(n,{children:"for Free Ads Lifetime"}),e.jsx(n,{children:"You Can Download Movies, TV Shows, And More"}),e.jsx(s,{children:e.jsx(r,{onClick:d,style:{backgroundColor:"#e50914",border:"none",borderRadius:"5px",color:"white",fontSize:"16px",padding:"10px 20px",cursor:"pointer"},children:"Subscribe"})}),e.jsxs(z,{isOpen:t,children:[e.jsx(v,{onClick:d,children:"×"}),e.jsx(n,{children:"for 1$ no ads 1 month"})," ",e.jsx(n,{children:"for 10$ 1 year"}),e.jsx(A,{children:e.jsx("a",{href:"/payment",style:{textDecoration:"none",color:"white"},children:"Subscribe Now"})})]})]}),e.jsxs(i,{"data-aos":"fade-up",children:[e.jsx(a,{children:"Send Feedback/Request"}),e.jsx(n,{children:"Send Feedback to our Social Media"}),e.jsx(n,{children:"Send Request to our Social Media"}),e.jsx(n,{children:"Send Request to our Social Media"}),e.jsx(s,{children:e.jsxs(M,{children:[e.jsx(r,{style:{backgroundColor:"blue",border:"none",borderRadius:"5px",color:"white",fontSize:"16px",padding:"10px 20px",cursor:"pointer",margin:"5px"},children:e.jsx(h,{})}),e.jsx(r,{style:{backgroundColor:"skyblue",border:"none",borderRadius:"5px",color:"white",fontSize:"16px",padding:"10px 20px",cursor:"pointer",margin:"5px"},children:e.jsx(m,{})}),e.jsx(r,{style:{backgroundColor:"gray",border:"none",borderRadius:"5px",color:"white",fontSize:"16px",padding:"10px 20px",cursor:"pointer",margin:"5px"},children:e.jsx(f,{})}),e.jsx(r,{style:{backgroundColor:"black",border:"none",borderRadius:"5px",color:"white",fontSize:"16px",padding:"10px 20px",cursor:"pointer",margin:"5px"},children:e.jsx(u,{})})]})})]})]})})]})},F=o.div`
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
`,R=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  text-align: center; /* Center text within */
`,T=o.h1`
  color: white;
  font-size: 50px;
  margin-top: -20px;
  font-family: "Gotham", sans-serif;
  font-weight: bold;

  @media (max-width: 360px), (max-width: 640px) {
    font-size: 30px;
    margin: 3px;
    
  }
`,G=o.a`
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
`,V=()=>e.jsxs("section",{children:[e.jsxs(F,{children:[e.jsx(p,{}),e.jsxs(R,{children:[e.jsxs(T,{children:["Unlimited movies, TV shows, and ",e.jsx("br",{})," more"]}),e.jsx(G,{href:"/home",children:"Get Started"})]})]}),e.jsx(x,{}),e.jsx(x,{}),e.jsx(b,{}),e.jsx(j,{}),e.jsx(w,{})]});export{V as default};
