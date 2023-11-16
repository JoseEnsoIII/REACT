var h=Object.defineProperty;var c=(n,s,r)=>s in n?h(n,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[s]=r;var d=(n,s,r)=>(c(n,typeof s!="symbol"?s+"":s,r),r);import{s as t,r as x,j as e,L as a}from"./index-aef762e1.js";import{m,p,q as f}from"./index.esm-d6baa4b3.js";import{F as o,h as g,c as j,i as b,j as y,k as u,l as w}from"./index-84bd2e27.js";const v=t.div`
  position: fixed; /* Make the navigation bar sticky */
  top: 0; /* Stick it to the top of the viewport */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #191970;
  height: 70px;
  padding: 0 20px;
  font-family: "Gotham", sans-serif; /* Use the Gotham font */
  font-weight: bold; /* Make it bold */
  width: 100%; /* Ensure it spans the full width of the viewport */
  z-index: 100; /* Ensure it's above other content */
  border-bottom: 1px solid black; /* Add the 1px solid black border at the bottom */
`,k=t(a)`
  font-family: "Gotham", sans-serif;
  font-size: 24px;
  height: 80px;
  display: flex;
  align-items: center;
  margin-right: auto;
  padding: 0 20px;
  font-weight: bold;
  color: white;
  text-decoration: none; // Remove the underline
  
  @media (max-width: 640px) {
  font-size:20px;
  }
`,S=t.div`
  position: fixed;
  top: 0;
  right: 15%;
  width: 300px;
  height: 100%;
  transition: right 0.3s ease-in-out;
  z-index: ${n=>n.isOpen?"1000":"-1"};
  background: rgba(255, 255, 255, 0.1); /* Adjust the background color and opacity */
  backdrop-filter: blur(10px); /* Adjust the blur amount for the glassmorphism effect */
  border-radius: 10px; /* Add border-radius for rounded corners */
  /* ... other styles */

  @media (max-width: 1200px) {
    width: 280px;
  }

  @media (max-width: 992px) {
    width: 250px;
  }

  @media (max-width: 768px) {
    width: 200px;
    right: 0;
  }

  @media (max-width: 320px) {
    width: 180px;
  }
`,B=t.div`
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 5%;
  margin-right: 20%; // Updated margin for smaller screens
  border: 1px solid black;
  height: 30px;
  border-radius: 5px;

  @media (max-width: 1200px) {
    margin-right: 5%;
  }

  @media (max-width: 992px) {
    margin-right: 5%;
  }

  @media (max-width: 768px) {
    margin-right: 5%;
  }

  @media (max-width: 640px) {
    margin-right: 5%; // Hide the HeaderButton on smaller screens
  }

  @media (max-width: 320px) {
    margin-right: 5%;// Hide the HeaderButton on screens less than 320px
  }
`,L=t.div`
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    margin-right: 0;
    display:none;
  }
  
  @media (max-width: 640px) {
    display: none; // Hide the NavButton on smaller screens
  }
`,z=t.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-right: 15%;

  @media (max-width: 1200px) {
    margin-right: 10%;
   
  }

  @media (max-width: 992px) {
    margin-right: 10%;
    display: none;
  }

  @media (max-width: 768px) {
    margin-right: 10%;
    display: none;
  }

  @media (max-width: 640px) {
    display: none; // Hide the LoginLink on smaller screens
  }
`,A=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,i=t.a`
  padding: 5px 10px;
  background-color: transparent;
  color: #000;
  border-radius: 5px;
  text-decoration: none;
  border: 1px solid black;
`,H=t.div`
color: white;
display: flex;
align-items: center;
margin: 20px;
font-family: "Gotham", sans-serif;
font-size: 16px;
margin-right: 23%;

ul {
  list-style: none;
  padding: 0;
  display: flex;
  margin: 0;
  justify-content: space-between;
}

li {
  margin: 0 25px;
  font-size: 20px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }

  a {
    text-decoration: none;
    color: white;
    position: relative;
    transition: color 0.3s, transform 0.3s;

    &:before {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: 3px;
      background: rgb(2,0,36);
      background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(0,212,255,1) 100%);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s;
    }

    &:hover {
      color: #ffff;

      &:before {
        transform: scaleX(1);
      }
    }
  }
}
@media (max-width: 1000px) {
  margin-right: 0;
  display:none;
}

@media (max-width: 640px) {
  display: none; // Hide the NavButton on smaller screens
}
`;class G extends x.Component{constructor(r){super(r);d(this,"toggleSidebar",()=>{this.setState(r=>({isSidebarOpen:!r.isSidebarOpen}))});d(this,"handleSearchChange",r=>{this.setState({searchTerm:r.target.value})});this.state={searchTerm:"",isSidebarOpen:!1}}render(){const{searchTerm:r,isSidebarOpen:l}=this.state;return e.jsxs("nav",{style:{height:"60px"},children:[e.jsxs(v,{children:[e.jsx(k,{to:"/",children:"ReactFlix "}),e.jsx(B,{onClick:this.toggleSidebar,children:e.jsx(m,{style:{width:"40px"}})}),e.jsx(L,{children:e.jsx(p,{style:{color:"white"}})}),e.jsx(H,{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(a,{to:"/home",children:"Home"})}),e.jsx("li",{children:e.jsx(a,{to:"/movie",children:"Movies"})}),e.jsx("li",{children:e.jsx(a,{to:"/series",children:"Series"})}),e.jsx("li",{children:e.jsx(a,{to:"/anime",children:"Anime"})})]})}),e.jsxs(z,{href:"/login",children:[e.jsx(f,{className:"user-icon",style:{margin:"5px"}}),e.jsx("span",{children:"Login"})]})]}),e.jsxs(S,{isOpen:l,children:[e.jsx("button",{onClick:this.toggleSidebar,style:{position:"absolute",top:"20px",right:"10px",borderRadius:"10px",width:"40px",height:"30px",background:"#666666",cursor:"pointer",border:"1px solid black",fontSize:"15px"},children:"←"}),e.jsx("br",{}),e.jsxs("ul",{children:[e.jsx("h3",{style:{color:"black"},children:"SideMenu"}),e.jsx("div",{style:{marginBottom:"20px"},children:e.jsxs("a",{href:"/home",style:{color:"black",textDecoration:"none",fontSize:"20px",marginLeft:"5px"},children:[e.jsx(o,{icon:g})," Home"]})}),e.jsx("div",{style:{marginBottom:"20px"},children:e.jsxs("a",{href:"/movie",style:{color:"black",textDecoration:"none",fontSize:"20px",marginLeft:"5px"},children:[e.jsx(o,{icon:j})," Movies"]})}),e.jsx("div",{style:{marginBottom:"20px"},children:e.jsxs("a",{href:"/series",style:{color:"black",textDecoration:"none",fontSize:"20px",marginLeft:"5px"},children:[e.jsx(o,{icon:b})," TV Shows"]})}),e.jsx("div",{style:{marginBottom:"20px"},children:e.jsxs("a",{href:"/anime",style:{color:"black",textDecoration:"none",fontSize:"20px",marginLeft:"5px"},children:[e.jsx(o,{icon:y})," Anime"]})}),e.jsx("div",{style:{marginBottom:"20px"},children:e.jsxs("a",{href:"/top-imdb",style:{color:"black",textDecoration:"none",fontSize:"20px",marginLeft:"5px"},children:[e.jsx(o,{icon:u})," Top IMDB"]})}),e.jsx("div",{style:{marginBottom:"20px"},children:e.jsxs("a",{href:"/login",style:{color:"Red",textDecoration:"none",fontSize:"20px",marginLeft:"5px"},children:[e.jsx(o,{icon:w})," Login"]})}),e.jsx("h3",{style:{color:"black"},children:"GENRE"}),e.jsxs(A,{children:[e.jsx(i,{href:"/action",children:"Action"}),e.jsx(i,{href:"/action-adventure",children:"Action & Adventure"}),e.jsx(i,{href:"/adventure",children:"Adventure"}),e.jsx(i,{href:"/animation",children:"Animation"}),e.jsx(i,{href:"/biography",children:"Biography"}),e.jsx(i,{href:"/comedy",children:"Comedy"}),e.jsx(i,{href:"/crime",children:"Crime"}),e.jsx(i,{href:"/documentary",children:"Documentary"}),e.jsx(i,{href:"/drama",children:"Drama"}),e.jsx(i,{href:"/family",children:"Family"}),e.jsx(i,{href:"/fantasy",children:"Fantasy"}),e.jsx(i,{href:"/history",children:"History"}),e.jsx(i,{href:"/horror",children:"Horror"}),e.jsx(i,{href:"/kids",children:"Kids"}),e.jsx(i,{href:"/music",children:"Music"}),e.jsx(i,{href:"/mystery",children:"Mystery"}),e.jsx(i,{href:"/news",children:"News"}),e.jsx(i,{href:"/reality",children:"Reality"}),e.jsx(i,{href:"/romance",children:"Romance"}),e.jsx(i,{href:"/sci-fi-fantasy",children:"Sci-Fi & Fantasy"}),e.jsx(i,{href:"/science-fiction",children:"Science Fiction"}),e.jsx(i,{href:"/soap",children:"Soap"}),e.jsx(i,{href:"/talk",children:"Talk"}),e.jsx(i,{href:"/thriller",children:"Thriller"}),e.jsx(i,{href:"/tv-movie",children:"TV Movie"}),e.jsx(i,{href:"/war",children:"War"}),e.jsx(i,{href:"/war-politics",children:"War & Politics"}),e.jsx(i,{href:"/western",children:"Western"})]})]})]})]})}}export{G as N};
