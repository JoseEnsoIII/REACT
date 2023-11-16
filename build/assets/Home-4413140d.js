import{s as a,j as t,r as n}from"./index-aef762e1.js";import"./index-dea16433.js";import{M as f,T as u,S as b}from"./section-ads-b5adaf13.js";import"./aos-d137a800.js";import{N as w}from"./navbar1-fe3d33b9.js";import{F as j,c as y,a as v,d as k,e as C}from"./index.esm-d6baa4b3.js";import{a as z}from"./axios-3a76d256.js";import{C as A}from"./anime_section-16001aea.js";import{A as P}from"./footer-e6e4904e.js";import{A as F,P as S}from"./popup-ads-cd300277.js";import"./index-84bd2e27.js";import"./iconBase-c6338860.js";const E=a.div`
  position: fixed;
  top: 69%;
  left: 96%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50px;
  background-color: transparent;
  padding: 10px;
  z-index: 999;
`,r=a.a`
  display: block;
  text-align: center;
  margin-bottom: 14px;
  font-size: 24px;
  color: skyblue; /* Change the color to match the social media icon color */
  text-decoration: none;
`,M=()=>t.jsxs(E,{children:[t.jsx(r,{href:"#",children:t.jsx(j,{})}),t.jsx(r,{href:"#",children:t.jsx(y,{})}),t.jsx(r,{href:"#",children:t.jsx(v,{})}),t.jsx(r,{href:"#",children:t.jsx(k,{})})]}),N=a.h1`
  text-align: center;
  font-family: 'Gotham', sans-serif;
  color: white;
  font-size: 30px;
  margin-left: -80%;
  margin-top:3%;
  font-weight: bold;

  @media (max-width: 640px) {
    margin-left: -60%;
    font-weight: bold;
    font-size: 20px;
    margin-top: 10%;
  }
`,T=a.div`
  position: relative;
  width: 150px;
  height: 200px;
  background: url(${i=>i.imageUrl}) no-repeat center/cover;
  border-radius: 10px;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
  margin: 15px;
  transition: 0.5s;

  @media (max-width: 640px) {
    width: 80px;
    height: 100px;
    margin: 5px;
    font-size:10px;
  }

  &:hover {
    transition: 1s;
    .title {
      padding-bottom: 50px;
      opacity: 1;
      transition: 0.3s;
      font-size: 10px;
    }
    .watch-button {
      opacity: 1;
      transition: 0.3s;
      font-size: 10px;
    }
  }

 .title {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  font-size: 26px;
  font-weight: 100;
  padding: 30px 0;
  background: linear-gradient(to top, #000, transparent);
  text-transform: uppercase;
  text-align: center;
  opacity: 0;
  transition: 0.5s;
  color: white;

  @media (max-width: 640px) {
    font-size: 10px; /* Add this line to change the font size to 10px on smaller screens */
  }
}


  .watch-button {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: transparent;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    opacity: 0;
    transition: 0.5s;
  }

  .play-icon {
    margin-right: 5px;
  }
`,I=a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    height:100%;
  }
  @media (max-width: 400px) {
    height: 60vh;
    margin-bottom:45%
  }
`,U=a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    margin-top: 30%;
  }
  @media (max-width: 400px) {
    margin-top:5%;
  }
`,$=a.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 640px) {
 
  }

  @media (max-width: 400px) {
    /* Add your styles for 400px or less here */
  }
`,G=a.button`
  background-color: white;
  border: 1px solid white;
  color: black;
  cursor: pointer;
  margin: 0 5px;
  font-size: 18px;
  font-family: "Gotham", sans-serif;
  padding: 5px 10px;
  border-radius: 5px;
  outline: none;
  height:50px;
  
  &:hover {
    background-color: transparent;
    color: blue;
  }
  @media (max-width: 640px) {
    font-size: 13px;
    height:45px
  }
  @media (max-width: 400px) {
    font-size: 10px;
    height:20px;
  }  

  ${i=>i.active&&`
    background-color: transparent;
    color: blue;
  `}
`;function H(){const[i,c]=n.useState(1),[l,x]=n.useState([]),s=16;n.useEffect(()=>{(async()=>{try{const o=await z.get("https://api.themoviedb.org/3/trending/all/day?api_key=b2d47bc45b9596fab31b362d1db590f9");x(o.data.results)}catch(o){console.error(o)}})()},[]);const p=l.map(e=>({title:e.title,imageUrl:`https://image.tmdb.org/t/p/w500${e.poster_path}`,url:"#"})),d=(i-1)*s,h=d+s,m=p.slice(d,h),g=e=>{c(e)};return t.jsxs(I,{style:{height:"120vh",width:"100vw",backgroundColor:"black",marginTop:"-40px"},children:[t.jsx(N,{children:"| All Trending "}),t.jsx(U,{children:m.map((e,o)=>t.jsx("a",{href:e.url,children:t.jsxs(T,{imageUrl:e.imageUrl,children:[t.jsx("div",{className:"title",children:e.title}),t.jsxs("button",{className:"watch-button",children:[t.jsx(C,{className:"play-icon"})," Watch"]})]})},o))}),t.jsx($,{children:Array.from({length:Math.ceil(p.length/s)},(e,o)=>t.jsx(G,{onClick:()=>g(o+1),active:o+1===i,children:o+1},o))})]})}const V=()=>(n.useEffect(()=>{document.title="ReactFlix |  Home"},[]),t.jsxs("section",{className:"slider4 mbr-embla cid-tEzwvrEiry",style:{backgroundColor:"#8E95A5",width:"100vw"},id:"slider4-2j",children:[t.jsx(w,{}),t.jsx(M,{}),t.jsx(f,{autoplay:!0,wrapAround:!0,speed:1e3,slidesToShow:1}),t.jsx(u,{}),t.jsx(b,{}),t.jsx(H,{}),t.jsx(A,{}),t.jsx(P,{}),t.jsx(F,{}),t.jsx(S,{})]}));export{V as default};
