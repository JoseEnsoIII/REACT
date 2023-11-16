import{s as t,r as n,j as e}from"./index-aef762e1.js";import{N as m}from"./navbar-aa95f2c5.js";import{S as f}from"./index-dea16433.js";import{a as g}from"./axios-3a76d256.js";import{A as h}from"./aos-d137a800.js";import{F as u,a as b,b as w,c as j}from"./index.esm-d6baa4b3.js";import{A as y}from"./footer-e6e4904e.js";import{P as S,A as v}from"./popup-ads-cd300277.js";import"./iconBase-c6338860.js";const k=t.div`
  width: 350px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 200px 10px;
 
  position: relative;
  cursor: pointer;
  border:none;
  padding:10px;
  transition: transform 0.3s ease, height 0.3s ease;
 
  @media (max-width: 640px) {
    margin-left:10px;
    padding:10px;
    border: 1px solid white;
  }
  a {
    text-decoration: none;
    font-family: "Gotham", sans-serif;
    font-weight: bold;
  }

  .play-button {
    position: absolute;
    top: 93%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    align-items: center;
    justify-content: center;
    color: white;
    width: 100px;
    height: 40px;
    background-color: #e50914;
    border-radius: 15px;
    font-family: "Gotham", sans-serif;

    @media (max-width: 640px) {
      top: 95%;
      width: 70px;
      margin-left: 5px;
      margin-right: 0;
      
    }
  }

  &:hover {
    height: 520px;
    transform: translateY(-25px);
    text-decoration: underline;
    
  

    .play-button {
      display: flex;
      
    }
  }

  @media (max-width: 640px) {
    margin-top: 350%;
    height: 200px;
    border:none;
    
    width: 100%;
    transform: translateY(0);

    &:hover {
      height: 260px;
      transform: translateY(-25px);
      text-decoration: underline;
      border:none;
    }
    &:active {
      
    }
  }
`,C=t.img`
  width: 100%;
  height: 450px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  @media (max-width: 360px), (max-width: 640px) {
    font-size: 10px;
    margin: 5px;
    width: 100%;
    height: 200px;
  }
`,z=t.section`
background: linear-gradient(to top, #000000 50%, #12104A 100%);


  height: 120vh;
  width: 100vw;
  position: relative;

  @media (max-width: 360px), (max-width: 640px) {
    font-size: 10px;
    margin: 3px;
    height: 100%;
  }
`,A=t.h2`
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
`,M=t.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  color: white;
`;function F(){const[i,l]=n.useState([]);n.useEffect(()=>{(async()=>{try{const a=await g.get("https://api.themoviedb.org/3/movie/popular?api_key=b2d47bc45b9596fab31b362d1db590f9");l(a.data.results)}catch(a){console.error(a)}})()},[]),n.useEffect(()=>{h.init({duration:1e3})},[]),n.useEffect(()=>{h.refresh()},[]);const d={className:"center",infinite:!0,centerPadding:"80px",slidesToShow:4,swipeToSlide:!0,autoplay:!0,autoplaySpeed:3e3,speed:500,pauseOnHover:!0,afterChange:function(r){console.log(`Slider Changed to: ${r+1}, background: #222; color: #bada55`)}};return e.jsxs(z,{children:[e.jsx(A,{"data-aos":"fade-up",children:"Discover Something New"}),e.jsx(f,{...d,children:i.map((r,a)=>e.jsxs(k,{children:[e.jsx("a",{href:`/player/${r.id}`,children:e.jsx(C,{src:`https://image.tmdb.org/t/p/w500/${r.poster_path}`,alt:r.title})}),e.jsxs("a",{href:`/player/${r.id}`,className:"play-button",children:[e.jsx(M,{src:"/images/play.svg",alt:"Play Icon"})," Watch"]})]},a))})]})}const R=t.section`
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
`,T=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  @media (max-width: 640px) {
  margin-top:20px;
  }
`,G=t.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,p=t.div`
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
`,$=t.h1`
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
`,x=t.h2`
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
`,o=t.p`
  font-size: 15px;
  flex-grow: 1;

  @media (max-width: 640px) {
    font-size: 10px;
  }
`,W=t.div`
  display: ${i=>i.isOpen?"block":"none"};
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
`,E=t.button`
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
  align-items: center; /* Center the buttons vertically */
  flex-direction: row; /* Make the buttons inline and horizontal */

  @media (max-width: 640px) {
    flex-direction: column; /* Stack buttons vertically on smaller screens */
    align-items: center;
  }
`,B=t.button`
  background-color: #e50914;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  
`,s=t.button`
  background-color: ${i=>i.backgroundColor};
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
`,I=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row; /* Make the buttons inline and horizontal */

  @media (max-width: 640px) {
    flex-direction: row; /* Ensure buttons remain inline on smaller screens */
  }
`,P=()=>{const[i,l]=n.useState(!1),d=()=>{l(!i)};return n.useEffect(()=>{h.init()},[]),e.jsxs(R,{children:[e.jsx($,{"data-aos":"fade-up",style:{fontSize:"50px",fontWeight:"bold",fontFamily:"Gotham",marginTop:" 120px"},children:"Benefits Watching on our Website"}),e.jsx(T,{children:e.jsxs(G,{children:[e.jsxs(p,{"data-aos":"fade-up",children:[e.jsx(x,{children:"BingeWatch"}),e.jsx(o,{children:"Stream movies, TV Shows, and Anime Everywhere"}),e.jsx(o,{children:"From Top Rated Movies, TV Shows, and Animes"}),e.jsx(o,{children:"and Animes"}),e.jsx(c,{children:e.jsx("a",{href:"/home",style:{backgroundColor:"#e50914",border:"none",borderRadius:"5px",color:"white",fontSize:"16px",padding:"10px 20px",textDecoration:"none",display:"inline-block",cursor:"pointer"},children:"Browse"})})]}),e.jsxs(p,{"data-aos":"fade-up",children:[e.jsx(x,{children:"You Can Watch Every Stream You Like for Free"}),e.jsx(o,{children:"You can also Subscribe For $5 Subscription"}),e.jsx(o,{children:"for Free Ads Lifetime"}),e.jsx(o,{children:"You Can Download Movies, TV Shows, And More"}),e.jsx(c,{children:e.jsx(s,{onClick:d,style:{backgroundColor:"#e50914",border:"none",borderRadius:"5px",color:"white",fontSize:"16px",padding:"10px 20px",cursor:"pointer"},children:"Subscribe"})}),e.jsxs(W,{isOpen:i,children:[e.jsx(E,{onClick:d,children:"×"}),e.jsx(o,{children:"for 1$ no ads 1 month"})," ",e.jsx(o,{children:"for 10$ 1 year"}),e.jsx(B,{children:e.jsx("a",{href:"/payment",style:{textDecoration:"none",color:"white"},children:"Subscribe Now"})})]})]}),e.jsxs(p,{"data-aos":"fade-up",children:[e.jsx(x,{children:"Send Feedback/Request"}),e.jsx(o,{children:"Send Feedback to our Social Media"}),e.jsx(o,{children:"Send Request to our Social Media"}),e.jsx(o,{children:"Send Request to our Social Media"}),e.jsx(c,{children:e.jsxs(I,{children:[e.jsx(s,{style:{backgroundColor:"blue",border:"none",borderRadius:"5px",color:"white",fontSize:"16px",padding:"10px 20px",cursor:"pointer",margin:"5px"},children:e.jsx(u,{})}),e.jsx(s,{style:{backgroundColor:"skyblue",border:"none",borderRadius:"5px",color:"white",fontSize:"16px",padding:"10px 20px",cursor:"pointer",margin:"5px"},children:e.jsx(b,{})}),e.jsx(s,{style:{backgroundColor:"gray",border:"none",borderRadius:"5px",color:"white",fontSize:"16px",padding:"10px 20px",cursor:"pointer",margin:"5px"},children:e.jsx(w,{})}),e.jsx(s,{style:{backgroundColor:"black",border:"none",borderRadius:"5px",color:"white",fontSize:"16px",padding:"10px 20px",cursor:"pointer",margin:"5px"},children:e.jsx(j,{})})]})})]})]})})]})},Y=t.div`
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
`,N=t.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  text-align: center; /* Center text within */
`,O=t.h1`
  color: white;
  font-size: 50px;
  margin-top: -20px;
  font-family: "Gotham", sans-serif;
  font-weight: bold;

  @media (max-width: 360px), (max-width: 640px) {
    font-size: 30px;
    margin: 3px;
    
  }
`,H=t.a`
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
`,X=()=>e.jsxs("section",{children:[e.jsxs(Y,{children:[e.jsx(m,{}),e.jsxs(N,{children:[e.jsxs(O,{children:["Unlimited movies, TV shows, and ",e.jsx("br",{})," more"]}),e.jsx(H,{href:"/home",children:"Get Started"})]})]}),e.jsx(F,{}),e.jsx(P,{}),e.jsx(y,{}),e.jsx(S,{}),e.jsx(v,{})]});export{X as default};
