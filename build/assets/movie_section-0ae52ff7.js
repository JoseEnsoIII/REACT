import{s as a,r as l,j as t}from"./index-0c4216c9.js";import{a as u}from"./axios-3a76d256.js";import{e as b,f as w}from"./index.esm-01fc7427.js";const y=a.h1`
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
`,v=a.div`
  position: relative;
  width: 150px;
  height: 200px;
  background: url(${o=>o.imageUrl}) no-repeat center/cover;
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
`,j=a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    height: 100%;
  }
`,k=a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    margin-top: -10%;
  }
`,C=a.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,z=a.button`
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

  ${o=>o.active&&`
    background-color: transparent;
    color: blue;
  `}
`;function W(){const[o,x]=l.useState(1),[h,m]=l.useState([]),s=16;l.useEffect(()=>{(async()=>{try{const i=await u.get("https://api.themoviedb.org/3/tv/on_the_air?api_key=b2d47bc45b9596fab31b362d1db590f9");m(i.data.results)}catch(i){console.error(i)}})()},[]);const p=h.map(n=>({title:n.title,imageUrl:`https://image.tmdb.org/t/p/w500${n.poster_path}`,url:"#"})),c=(o-1)*s,g=c+s,d=p.slice(c,g),f=n=>{x(n)};return t.jsxs(j,{style:{height:"120vh",width:"100vw",backgroundColor:"black",marginTop:"-40px"},children:[t.jsx(y,{children:"| New Show "}),t.jsx(k,{children:d.map((n,i)=>t.jsx("a",{href:n.url,children:t.jsxs(v,{imageUrl:n.imageUrl,children:[t.jsx("div",{className:"title",children:n.title}),t.jsxs("button",{className:"watch-button",children:[t.jsx(b,{className:"play-icon"})," Watch"]})]})},i))}),t.jsx(C,{children:Array.from({length:Math.ceil(p.length/s)},(n,i)=>t.jsx(z,{onClick:()=>f(i+1),active:i+1===o,children:i+1},i))})]})}const P=a.h1`
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
`,$=a.div`
  position: relative;
  width: 150px;
  height: 200px;
  background: url(${o=>o.imageUrl}) no-repeat center/cover;
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
`,M=a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    @apply h-screen;
  }
  @media (max-width: 400px) {
    @apply h-60vh mb-[-45%];
  }
`,_=a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    @apply mt-30%;
  }
  @media (max-width: 400px) {
    @apply mt-5%;
  }
`,N=a.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 640px) {
  }
`,U=a.button`
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

  ${o=>o.active&&`
    background-color: transparent;
    color: blue;
  `}
`,S=a(w)`
  color: yellow;
  font-size: 10px;
`,I=a.div`
  margin-left: 70%;
  margin-top: 25%;
  color: yellow;
  font-size: 14px;
  text-decoration: none;

  @media (max-width: 640px) {
    @apply ml-70 mt-25 text-yellow-500 text-sm;
  }
`;function A(){const[o,x]=l.useState(1),[h,m]=l.useState([]),s=16;l.useEffect(()=>{(async()=>{try{const r=await u.get("https://api.themoviedb.org/3/movie/popular?api_key=b2d47bc45b9596fab31b362d1db590f9");m(r.data.results)}catch(r){console.error(r)}})()},[]);const p=h.map(e=>({title:e.title,imageUrl:`https://image.tmdb.org/t/p/w500${e.poster_path}`,url:"#",rating:e.vote_average})),c=p.slice().sort((e,r)=>r.rating-e.rating),g=Math.ceil(p.length*.1);c.slice(0,g);const d=(o-1)*s,f=d+s,n=p.slice(d,f),i=e=>{x(e)};return t.jsxs(M,{style:{height:"120vh",width:"100vw",backgroundColor:"black",marginTop:"-40px"},children:[t.jsx(P,{children:"| New Movies1 "}),t.jsx(_,{children:n.map((e,r)=>t.jsx("a",{href:e.url,children:t.jsxs($,{imageUrl:e.imageUrl,children:[t.jsx("div",{className:"title",children:e.title}),t.jsxs(I,{children:[t.jsx(S,{})," ",e.rating.toFixed(1)]}),t.jsxs("button",{className:"watch-button",children:[t.jsx(b,{className:"play-icon"})," Watch"]})]})},r))}),t.jsx(N,{children:Array.from({length:Math.ceil(p.length/s)},(e,r)=>t.jsx(U,{onClick:()=>i(r+1),active:r+1===o,children:r+1},r))})]})}export{W as C,A as a};
