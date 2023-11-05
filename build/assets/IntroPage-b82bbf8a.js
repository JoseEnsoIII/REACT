import{s as t,r as h,j as e}from"./index-1f365af0.js";import{N as g}from"./navbar-b6226a59.js";import{S as u}from"./index-af430b1a.js";import{A as m}from"./aos-2eb6a266.js";import{F as f,a as b,b as j,c as w}from"./index.esm-1ddb6421.js";import{A as y}from"./footer-e98b1504.js";import{P as k,A as v}from"./popup-ads-a02bfaed.js";import"./iconBase-547c3af8.js";const i=t.div`
  width: 350px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  margin: 200px 10px;
  margin-left: 20px; /* Add left gap */
  margin-right: 20px; /* Add right gap */
  position: relative;
  cursor: pointer;
  border-radius: 25px;
  transition: transform 0.3s ease, height 0.3s ease; /* Add transition for height */
  
  
  a {
    text-decoration: none;
    font-family: "Gotham", sans-serif;
  font-weight: bold;
  }
  /* Define styles for the play button */
  .play-button {
    position: absolute;
    top: 93%; /* Adjust to 90% from the bottom */
    left: 50%;
    transform: translate(
      -50%,
      -50%
    ); /* Center both horizontally and vertically */
    display: none;
    align-items: center;
    justify-content: center;
    color: white;
    width: 100px;
    height: 40px;
    background-color: #e50914; /* Add a semi-transparent background */
    border-radius: 15px; /* Make it round */
    border: 1px solid #e50914;
    font-family: "Gotham", sans-serif;
  }

  &:hover {
    height: 520px; /* Adjust the height to your preference */
    transform: translateY(-25px); /* Push the card slightly up */
    text-decoration: underline;

    .play-button {
      display: flex; /* Display the play button on hover */
    }
  }
  @media (max-width: 360px), (max-width: 640px) {
    height: 350px;

    &:hover {
      height: 350px; /* Adjust the height to your preference */
      transform: translateY(-25px); /* Remove the transform */
      text-decoration: underline;
    }
  }
`,n=t.img`
  width: 100%;
  height: 450px;
  border-top-left-radius: 25px; /* Rounded top-left corner */
  border-top-right-radius: 25px; /* Rounded top-right corner */
  border-bottom-left-radius: 25px; /* Rounded top-left corner */
  border-bottom-right-radius: 25px; /* Rounded top-right corner */
  
  @media (max-width: 360px), (max-width: 640px) {
    font-size: 10px;
    margin: 5px;
    width: 100%;
  height: 350px;
  }
`,S=t.section`
  background-color: black;
  height: 120vh;
  width: 100vw;
  position: relative;

  @media (max-width: 360px), (max-width: 640px) {
    font-size: 10px;
    margin: 3px;
    height: 900px;
  }
`,C=t.h2`
  color: white;
  font-family: "Gotham", sans-serif;
    font-weight: bold;
  text-align: center;
  font-size: 50px;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  z-index: 1;
`,a=t.img`
  width: 20px; /* Adjust the width as needed */
  height: 20px; /* Adjust the height as needed */
  margin-right: 5px;
  color:white;
`;class z extends h.Component{componentDidMount(){m.init({duration:1e3})}componentDidUpdate(){m.refresh()}render(){const l={className:"center",infinite:!0,centerPadding:"80px",slidesToShow:4,swipeToSlide:!0,autoplay:!0,autoplaySpeed:3e3,speed:500,pauseOnHover:!0,afterChange:function(d){console.log(`Slider Changed to: ${d+1}, background: #222; color: #bada55`)}};return e.jsxs(S,{style:{background:"#000000",background:"linear-gradient(to top, #000000 50%, #12104A 100%)"},children:[e.jsx(C,{"data-aos":"fade-up",children:"Discover Something New"}),e.jsxs(u,{...l,children:[e.jsxs(i,{children:[e.jsx(n,{src:"/images/saw.jpg",alt:"number 1"}),e.jsxs("a",{href:"/player",className:"play-button",children:[e.jsx(a,{src:"/images/play.svg",alt:"Play Icon"}),"  Watch"]})]}),e.jsxs(i,{children:[e.jsx(n,{src:"/images/mi.jpg",alt:"number 1"}),e.jsxs("a",{href:"/player",className:"play-button",children:[e.jsx(a,{src:"/images/play.svg",alt:"Play Icon"}),"  Watch"]})]}),e.jsxs(i,{children:[e.jsx(n,{src:"/images/gt.jpg",alt:"number 1"}),e.jsxs("a",{href:"/player",className:"play-button",children:[e.jsx(a,{src:"/images/play.svg",alt:"Play Icon"}),"  Watch"]})]}),e.jsxs(i,{children:[e.jsx(n,{src:"/images/sm.jpg",alt:"number 1"}),e.jsxs("a",{href:"/player",className:"play-button",children:[e.jsx(a,{src:"/images/play.svg",alt:"Play Icon"}),"  Watch"]})]}),e.jsxs(i,{children:[e.jsx(n,{src:"/images/fc.jpg",alt:"number 1"}),e.jsxs("a",{href:"/player",className:"play-button",children:[e.jsx(a,{src:"/images/play.svg",alt:"Play Icon"}),"  Watch"]})]}),e.jsxs(i,{children:[e.jsx(n,{src:"/images/lou.jpg",alt:"number 1"}),e.jsxs("a",{href:"/player",className:"play-button",children:[e.jsx(a,{src:"/images/play.svg",alt:"Play Icon"}),"  Watch"]})]})]})]})}}const A=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: white;

  @media (max-width: 360px), (max-width: 640px) {
    margin-top:20%;
  }
`,R=t.div`
  display: flex; /* Make the cards appear in a row */
  flex-wrap: wrap; /* Allow the cards to wrap to the next line if the screen is too narrow */
  justify-content: center;
`,p=t.div`
  margin: 5px;
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
  bottom: 50px;
  display: flex;
  flex-direction: column;

  @media (max-width: 360px), (max-width: 640px) {
    
    height:350px;
    width:200px;
    margin: 10px; 
  }
`,x=t.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: black;
  font-family: "Gotham", sans-serif;
  font-weight: bold;

  @media (max-width: 360px), (max-width: 640px){
  font-size:15px;
  }
`,o=t.p`
  font-size: 15px;
  flex-grow: 1;

  @media (max-width: 360px), (max-width: 640px){
    font-size:10px;
    }
`,W=t.section`
  margin-top: -60px;
  height: 120vh;
  width: 100vw;
  border-top: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 360px), (max-width: 640px) {
    height: 1500px;
  }
`,M=t.div`
  display: ${r=>r.isOpen?"block":"none"};
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
`,P=t.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: black;
  font-size: 20px;
  cursor: pointer;
`,c=t.div`
  display: flex;
  justify-content: center;
  margin-top: auto; /* Position the buttons at the bottom */

  @media (max-width: 360px), (max-width: 640px){
    width:10px;
    font-size:10px;
    }
`,F=t.button`
  background-color: #e50914;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
`,s=t.button`
  background-color: ${r=>r.backgroundColor};
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  margin: 5px;
`,T=()=>{const[r,l]=h.useState(!1),d=()=>{l(!r)};return h.useEffect(()=>{m.init()},[]),e.jsxs(W,{children:[e.jsx("h1",{"data-aos":"fade-up",style:{fontSize:"50px",fontWeight:"bold",fontFamily:"Gotham",marginTop:" 120px"},children:"Benefits Watching on Our Website"}),e.jsx(A,{children:e.jsxs(R,{children:[e.jsxs(p,{"data-aos":"fade-up",children:[e.jsx(x,{children:"BingeWatch"}),e.jsx(o,{children:"Stream movies, TV Shows, and Anime Everywhere"}),e.jsx(o,{children:"From Top Rated Movies, TV Shows, and Animes"}),e.jsx(o,{children:"and Animes"}),e.jsx(c,{children:e.jsx("a",{href:"/home",style:{backgroundColor:"#e50914",border:"none",borderRadius:"5px",color:"white",fontSize:"16px",padding:"10px 20px",textDecoration:"none",display:"inline-block",cursor:"pointer"},children:"Browse"})})]}),e.jsxs(p,{"data-aos":"fade-up",children:[e.jsx(x,{children:"You Can Watch Every Stream You Like for Free"}),e.jsx(o,{children:"You can also Subscribe For $5 Subscription"}),e.jsx(o,{children:"for Free Ads Lifetime"}),e.jsx(o,{children:"You Can Download Movies, TV Shows, And More"}),e.jsx(c,{children:e.jsx(s,{onClick:d,style:{backgroundColor:"#e50914",border:"none",borderRadius:"5px",color:"white",fontSize:"16px",padding:"10px 20px",cursor:"pointer"},children:"Subscribe"})}),e.jsxs(M,{isOpen:r,children:[e.jsx(P,{onClick:d,children:"×"}),e.jsx(o,{children:"for 1$ no ads 1 month"})," ",e.jsx(o,{children:"for 10$ 1 year"}),e.jsx(F,{children:e.jsx("a",{href:"/payment",style:{textDecoration:"none",color:"white"},children:"Subscribe Now"})})]})]}),e.jsxs(p,{"data-aos":"fade-up",children:[e.jsx(x,{children:"Send Feedback/Request"}),e.jsx(o,{children:"Send Feedback to our Social Media"}),e.jsx(o,{children:"Send Request to our Social Media"}),e.jsx(o,{children:"Send Request to our Social Media"}),e.jsxs(c,{children:[e.jsx(s,{style:{backgroundColor:"blue",border:"none",borderRadius:"5px",color:"white",fontSize:"16px",padding:"10px 20px",cursor:"pointer",margin:"5px"},children:e.jsx(f,{})}),e.jsx(s,{style:{backgroundColor:"skyblue",border:"none",borderRadius:"5px",color:"white",fontSize:"16px",padding:"10px 20px",cursor:"pointer",margin:"5px"},children:e.jsx(b,{})}),e.jsx(s,{style:{backgroundColor:"gray",border:"none",borderRadius:"5px",color:"white",fontSize:"16px",padding:"10px 20px",cursor:"pointer",margin:"5px"},children:e.jsx(j,{})}),e.jsx(s,{style:{backgroundColor:"black",border:"none",borderRadius:"5px",color:"white",fontSize:"16px",padding:"10px 20px",cursor:"pointer",margin:"5px"},children:e.jsx(w,{})})]})]})]})})]})},I=t.div`
  background-image: url("/images/ssa.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh; /* 100% of the viewport height */
  width: 100vw; /* 100% of the viewport width */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  text-align: center; /* Center text within */

  @media (max-width: 360px), (max-width: 640px) {
    font-size: 10px;
    margin: 3px;
    height: 900px;
    width:100%;
  }
`,N=t.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  text-align: center; /* Center text within */
`,G=t.h1`
  color: white;
  font-size: 50px;
  margin-top: -20px;
  font-family: "Gotham", sans-serif;
  font-weight: bold;

  @media (max-width: 360px), (max-width: 640px) {
    font-size: 30px;
    margin: 3px;
    
  }
`,D=t.a`
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
`,L=()=>e.jsxs("section",{children:[e.jsxs(I,{children:[e.jsx(g,{}),e.jsxs(N,{children:[e.jsxs(G,{children:["Unlimited movies, TV shows, and ",e.jsx("br",{})," more"]}),e.jsx(D,{href:"/home",children:"Get Started"})]})]}),e.jsx(z,{}),e.jsx(T,{}),e.jsx(k,{}),e.jsx(v,{}),e.jsx(y,{})]});export{L as default};
