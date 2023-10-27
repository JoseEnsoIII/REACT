import{s as t,r as x,j as e}from"./index-aab812e7.js";import{N as m}from"./navbar-d7704092.js";import{S as u}from"./index-18d93207.js";import{A as g}from"./aos-eacd0b5c.js";import{F as f,a as b,b as j,c as y}from"./index.esm-1aa73e51.js";import{A as w}from"./footer-64ef0b89.js";import{P as v,A as S}from"./popup-ads-4e5b88b8.js";import"./iconBase-e1c2ec00.js";const r=t.div`
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
`,n=t.img`
  width: 100%;
  height: 450px;
  border-top-left-radius: 25px; /* Rounded top-left corner */
  border-top-right-radius: 25px; /* Rounded top-right corner */
  border-bottom-left-radius: 25px; /* Rounded top-left corner */
  border-bottom-right-radius: 25px; /* Rounded top-right corner */
`,k=t.section`
  background-color: black;
  height: 120vh;
  width: 100vw;
  position: relative;
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
`,i=t.img`
  width: 20px; /* Adjust the width as needed */
  height: 20px; /* Adjust the height as needed */
  margin-right: 5px;
  color:white;
`;class A extends x.Component{componentDidMount(){g.init({duration:1e3})}componentDidUpdate(){g.refresh()}render(){const d={className:"center",infinite:!0,centerPadding:"80px",slidesToShow:4,swipeToSlide:!0,autoplay:!0,autoplaySpeed:3e3,speed:500,pauseOnHover:!0,afterChange:function(a){console.log(`Slider Changed to: ${a+1}, background: #222; color: #bada55`)}};return e.jsxs(k,{style:{background:"#000000",background:"linear-gradient(to top, #000000 50%, #12104A 100%)"},children:[e.jsx(C,{"data-aos":"fade-up",children:"Discover Something New"}),e.jsxs(u,{...d,children:[e.jsxs(r,{children:[e.jsx(n,{src:"/images/saw.jpg",alt:"number 1"}),e.jsxs("a",{href:"/player",className:"play-button",children:[e.jsx(i,{src:"/images/play.svg",alt:"Play Icon"}),"  Watch"]})]}),e.jsxs(r,{children:[e.jsx(n,{src:"/images/mi.jpg",alt:"number 1"}),e.jsxs("a",{href:"/player",className:"play-button",children:[e.jsx(i,{src:"/images/play.svg",alt:"Play Icon"}),"  Watch"]})]}),e.jsxs(r,{children:[e.jsx(n,{src:"/images/gt.jpg",alt:"number 1"}),e.jsxs("a",{href:"/player",className:"play-button",children:[e.jsx(i,{src:"/images/play.svg",alt:"Play Icon"}),"  Watch"]})]}),e.jsxs(r,{children:[e.jsx(n,{src:"/images/sm.jpg",alt:"number 1"}),e.jsxs("a",{href:"/player",className:"play-button",children:[e.jsx(i,{src:"/images/play.svg",alt:"Play Icon"}),"  Watch"]})]}),e.jsxs(r,{children:[e.jsx(n,{src:"/images/fc.jpg",alt:"number 1"}),e.jsxs("a",{href:"/player",className:"play-button",children:[e.jsx(i,{src:"/images/play.svg",alt:"Play Icon"}),"  Watch"]})]}),e.jsxs(r,{children:[e.jsx(n,{src:"/images/lou.jpg",alt:"number 1"}),e.jsxs("a",{href:"/player",className:"play-button",children:[e.jsx(i,{src:"/images/play.svg",alt:"Play Icon"}),"  Watch"]})]})]})]})}}const I=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
`,c=t.div`
  margin: 5px;
  position: relative;
  width: 370px;
  max-width: calc(100vw - 48px);
  min-height: 290px;
  padding: 40px 30px 30px;
  color: #000;
  background: #fff;
  box-shadow: 0 149px 60px rgba(0, 0, 0, 0.02), 0 84px 50px rgba(0, 0, 0, 0.08),
    0 37px 37px rgba(0, 0, 0, 0.13), 0 9px 21px rgba(0, 0, 0, 0.15),
    0 0 0 rgba(0, 0, 0, 0.16);
  border: 4px solid #fff;
  border-radius: 20px;
  text-align: left;
  transition: all 0.2s linear;
  border: 0.1px solid black;
  bottom: 50px;
`,p=t.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: black;
  font-family: "Gotham", sans-serif;
  font-weight: bold;
`,o=t.p`
  margin-top: 5px;
  font-size: 20px;
`,M=t.section`
  margin-top: -60px;
  height: 120vh;
  width: 100vw;
  border-top: 1px solid white; /* Add a 1px solid white border to the top */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content vertically within the container */
`,z=t.div`
  display: ${s=>s.isOpen?"block":"none"};
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
  text-align: center; /* Center the text inside the modal */
`,T=t.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: black;
  font-size: 20px;
  cursor: pointer;
`,h=t.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,_=t.button`
  background-color: #e50914;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
`,F=t.div`
  margin-top: 80px;
`,l=t.a`
  text-decoration: none;
  color: black;
  margin: 0 10px;
  font-size: 24px;
`,R=()=>{const[s,d]=x.useState(!1),a=()=>{d(!s)};return x.useEffect(()=>{g.init()},[]),e.jsxs(M,{children:[e.jsx("h1",{"data-aos":"fade-up",style:{fontSize:"50px",fontWeight:"bold",fontFamily:"Gotham",marginTop:" 150px"},children:"Benefits Watching on Our Website"}),e.jsxs(I,{children:[e.jsxs(c,{"data-aos":"fade-up",children:[e.jsx(p,{children:"BingeWatch"}),e.jsx("br",{}),e.jsx(o,{children:"Stream movies, TV Shows, and Anime Everywhere"}),e.jsx(o,{children:"From Top Rated Movies ,TV Shows"}),e.jsx(o,{children:"and Animes"}),e.jsx(h,{children:e.jsx("a",{href:"/home",style:{backgroundColor:"#e50914",border:"none",borderRadius:"5px",color:"white",fontSize:"16px",padding:"10px 20px",textDecoration:"none",display:"inline-block",cursor:"pointer"},children:"Browse"})})]}),e.jsxs(c,{"data-aos":"fade-up",children:[e.jsx(p,{children:"You Can Watch Every Stream You Like for Free"}),e.jsx(o,{children:"You can also Subscribe For $5 Subscription"}),e.jsx(o,{children:"for Free Ads Lifetime"}),e.jsx(o,{children:"You Can Download Movies, TV Shows, And More"}),e.jsx(h,{children:e.jsx("button",{onClick:a,style:{backgroundColor:"#e50914",border:"none",borderRadius:"5px",color:"white",fontSize:"16px",padding:"10px 20px",cursor:"pointer"},children:"Subscribe"})}),e.jsxs(z,{isOpen:s,children:[e.jsx(T,{onClick:a,children:"×"}),e.jsx(o,{children:"For 5$ "}),e.jsx(_,{children:"Subscribe Now"})]})]}),e.jsxs(c,{"data-aos":"fade-up",children:[e.jsx(p,{children:"Send Feedback/Request"}),e.jsx("br",{}),e.jsx(o,{children:"Send Feedback to our Social Media"}),e.jsx(o,{children:"Send Request to our Social Media"}),e.jsx(h,{children:e.jsxs(F,{children:[e.jsx(l,{href:"URL_TO_FEEDBACK_SOCIAL_MEDIA",target:"_blank",children:e.jsx(f,{})}),e.jsx(l,{href:"URL_TO_REQUEST_SOCIAL_MEDIA",target:"_blank",children:e.jsx(b,{})}),e.jsx(l,{href:"https://t.me/+LsaZCwdEMe1iNzQ1",target:"_blank",children:e.jsx(j,{})}),e.jsx(l,{href:"URL_TO_INSTAGRAM_SOCIAL_MEDIA",target:"_blank",children:e.jsx(y,{})})]})})]})]})]})},W=t.div`
  background-image: url("/images/ssa.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh; /* 100% of the viewport height */
  width: 100vw; /* 100% of the viewport width */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  text-align: center; /* Center text within */
`,E=t.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  text-align: center; /* Center text within */
`,N=t.h1`
  color: white;
  font-size: 50px;
  margin-top: -20px;
  font-family: "Gotham", sans-serif;
  font-weight: bold;
`,O=t.a`
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
`,H=()=>e.jsxs("section",{children:[e.jsxs(W,{children:[e.jsx(m,{}),e.jsxs(E,{children:[e.jsxs(N,{children:["Unlimited movies, TV shows, and ",e.jsx("br",{})," more"]}),e.jsx(O,{href:"/home",children:"Get Started"})]})]}),e.jsx(A,{}),e.jsx(R,{}),e.jsx(v,{}),e.jsx(S,{}),e.jsx(w,{})]});export{H as default};
