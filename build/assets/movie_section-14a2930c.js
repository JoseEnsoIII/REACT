import{s as o,r as s,j as a}from"./index-ef4458a9.js";import{a as u}from"./axios-3a76d256.js";import{d as b,e as w}from"./index.esm-f965c28b.js";const y=o.h1`
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
`,v=o.div`
  position: relative;
  width: 150px;
  height: 200px;
  background: url(${i=>i.imageUrl}) no-repeat center/cover;
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
`,j=o.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    @apply h-screen;
  }
  @media (max-width: 400px) {
    @apply h-60vh mb-[-45%];
  }
`,k=o.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    @apply mt-30%;
  }
  @media (max-width: 400px) {
    @apply mt-5%;
  }
`,C=o.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 640px) {
  }
`,P=o.button`
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

  ${i=>i.active&&`
    background-color: transparent;
    color: blue;
  `}
`,z=o(w)`
  color: yellow;
  font-size: 10px;
`,M=o.div`
  margin-left: 70%;
  margin-top: 25%;
  color: yellow;
  font-size: 14px;
  text-decoration: none;

  @media (max-width: 640px) {
    @apply ml-70 mt-25 text-yellow-500 text-sm;
  }
`;function S(){const[i,l]=s.useState(1),[c,d]=s.useState([]),r=16;s.useEffect(()=>{(async()=>{try{const e=await u.get("https://api.themoviedb.org/3/movie/popular?api_key=b2d47bc45b9596fab31b362d1db590f9");d(e.data.results)}catch(e){console.error(e)}})()},[]);const n=c.map(t=>({title:t.title,imageUrl:`https://image.tmdb.org/t/p/w500${t.poster_path}`,url:"#",rating:t.vote_average})),x=n.slice().sort((t,e)=>e.rating-t.rating),m=Math.ceil(n.length*.1);x.slice(0,m);const p=(i-1)*r,h=p+r,g=n.slice(p,h),f=t=>{l(t)};return a.jsxs(j,{style:{height:"120vh",width:"100vw",backgroundColor:"black",marginTop:"-40px"},children:[a.jsx(y,{children:"| New Movies1 "}),a.jsx(k,{children:g.map((t,e)=>a.jsx("a",{href:t.url,children:a.jsxs(v,{imageUrl:t.imageUrl,children:[a.jsx("div",{className:"title",children:t.title}),a.jsxs(M,{children:[a.jsx(z,{})," ",t.rating.toFixed(1)]}),a.jsxs("button",{className:"watch-button",children:[a.jsx(b,{className:"play-icon"})," Watch"]})]})},e))}),a.jsx(C,{children:Array.from({length:Math.ceil(n.length/r)},(t,e)=>a.jsx(P,{onClick:()=>f(e+1),active:e+1===i,children:e+1},e))})]})}export{S as C};
