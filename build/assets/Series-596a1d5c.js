import{s as o,r as s,j as t}from"./index-a520d23b.js";import"./index-41860e25.js";import{M as b,T as w,S as y}from"./section-ads-7ff7231a.js";import"./aos-46b5d53d.js";import{N as j}from"./navbar1-9e12c282.js";import{C as v}from"./multiplecard-83ed6410.js";import{a as C}from"./axios-3a76d256.js";import{e as k,f as P}from"./index.esm-ee168830.js";import{C as A}from"./AnimeSection-4bd86a7b.js";import{A as z}from"./footer-e3df149c.js";import{P as l,A as M}from"./popup-ads-edb04de7.js";import"./iconBase-edaa5f7e.js";const S=o.h1`
  text-align: center;
  font-family: "Gotham", sans-serif;
  color: white;
  font-size: 30px;
  margin-left: -80%;
  margin-top: 3%;
  font-weight: bold;

  @media (max-width: 640px) {
    @apply ml-[-60%] text-2xl mt-10 font-bold;
  }
`,E=o.div`
  position: relative;
  width: 150px;
  height: 200px;
  background: url(${r=>r.imageUrl}) no-repeat center/cover;
  border-radius: 10px;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
  margin: 15px;
  transition: 0.5s;

  @media (max-width: 640px) {
    @apply w-80 h-100 m-5 text-sm;
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
      @apply text-sm;
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

    @media (max-width: 640px) {
      @apply text-sm;
    }
  }
`,N=o.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    @apply h-screen;
  }
  @media (max-width: 400px) {
    @apply h-60vh mb-[-45%];
  }
`,F=o.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    @apply mt-30%;
  }
  @media (max-width: 400px) {
    @apply mt-5%;
  }
`,$=o.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 640px) {
  }
`,I=o.button`
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
  height: 50px;

  &:hover {
    background-color: transparent;
    color: blue;
  }
  @media (max-width: 640px) {
    @apply text-sm h-45;
  }
  @media (max-width: 400px) {
    @apply text-xs h-20;
  }

  ${r=>r.active&&`
    background-color: transparent;
    color: blue;
  `}
`,T=o(P)`
  color: yellow;
  font-size: 10px;
`,U=o.div`
  margin-left: 70%;
  margin-top: 25%;
  color: yellow;
  font-size: 14px;
  text-decoration: none;

  @media (max-width: 640px) {
    @apply ml-70 mt-25 text-yellow-500 text-sm;
  }
`;function _(){const[r,c]=s.useState(1),[d,x]=s.useState([]),n=16;s.useEffect(()=>{(async()=>{try{const a=await C.get("https://api.themoviedb.org/3/movie/popular?api_key=b2d47bc45b9596fab31b362d1db590f9");x(a.data.results)}catch(a){console.error(a)}})()},[]);const i=d.map(e=>({title:e.title,imageUrl:`https://image.tmdb.org/t/p/w500${e.poster_path}`,url:"#",rating:e.vote_average})),m=i.slice().sort((e,a)=>a.rating-e.rating),h=Math.ceil(i.length*.1);m.slice(0,h);const p=(r-1)*n,f=p+n,g=i.slice(p,f),u=e=>{c(e)};return t.jsxs(N,{style:{height:"120vh",width:"100vw",backgroundColor:"black",marginTop:"-40px"},children:[t.jsx(S,{children:"| New Movies1 "}),t.jsx(F,{children:g.map((e,a)=>t.jsx("a",{href:e.url,children:t.jsxs(E,{imageUrl:e.imageUrl,children:[t.jsx("div",{className:"title",children:e.title}),t.jsxs(U,{children:[t.jsx(T,{})," ",e.rating.toFixed(1)]}),t.jsxs("button",{className:"watch-button",children:[t.jsx(k,{className:"play-icon"})," Watch"]})]})},a))}),t.jsx($,{children:Array.from({length:Math.ceil(i.length/n)},(e,a)=>t.jsx(I,{onClick:()=>u(a+1),active:a+1===r,children:a+1},a))})]})}const Q=()=>(s.useEffect(()=>{document.title="ReactFlix | Watch Series"},[]),t.jsxs("section",{className:"slider4 mbr-embla cid-tEzwvrEiry",style:{backgroundColor:"#8E95A5"},id:"slider4-2j",children:[t.jsx(j,{}),t.jsx(b,{autoplay:!0,wrapAround:!0,speed:1e3,slidesToShow:1}),t.jsx(w,{}),t.jsx(v,{}),t.jsx(_,{}),t.jsx(y,{}),t.jsx(A,{}),t.jsx(z,{}),t.jsx(l,{}),t.jsx(l,{}),t.jsx(M,{})]}));export{Q as default};
