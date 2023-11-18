import{j as t,r as p,s as i}from"./index-c61d7640.js";import{N as w}from"./navbar1-41016fbc.js";import{S as u}from"./index-fb33a164.js";import{d as y,A as v}from"./index.esm-df26b61a.js";import{A as j}from"./footer-64d2299b.js";import{P as b,A as k}from"./popup-ads-91f20f67.js";import{a as m}from"./axios-3a76d256.js";import{e as f}from"./index.esm-8b7b8eba.js";import"./iconBase-78b2458b.js";const C=({imageSrc:o,text:s})=>t.jsx("div",{children:t.jsx("img",{src:o,alt:s})});class z extends p.Component{render(){const s={dots:!0,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1,vertical:!1},d={top:"90%",color:"black"},x={height:"500px",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative"},r={position:"absolute",display:"flex",alignItems:"center",top:"45%",color:"black"},a={padding:"10px 20px",backgroundColor:"rgba(0, 0, 0, 0.7)",color:"white",cursor:"pointer"},c=[{imageSrc:"/images/peacemaker.jpg",playLink:"/player",trailerLink:"/trailer/spidey",text:"Peacemaker",genre:"Action",genreLink:"/genre/action"},{imageSrc:"/images/meg2.jpg",playLink:"/player",trailerLink:"/trailer/transformer",text:"One Piece: Live Action",genre:"Adventure",genreLink:"/genre/adventure"}];return t.jsxs("div",{style:x,children:[t.jsx(u,{...s,children:c.map((l,h)=>t.jsx(C,{imageSrc:l.imageSrc,text:l.text,genre:l.genre,genreLink:l.genreLink},h))}),t.jsx("div",{style:{...r,left:0},children:t.jsx("div",{style:a,children:t.jsx(y,{size:20})})}),t.jsx("div",{style:{...r,right:0},children:t.jsx("div",{style:a,children:t.jsx(v,{size:20})})}),t.jsx("div",{className:"custom-dot-container",style:d,children:t.jsx(u,{...s})})]})}}const P=i.h1`
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
`,S=i.div`
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
`,$=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    height: 100%;
  }
`,A=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    margin-top: -10%;
  }
`,M=i.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,N=i.button`
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
`;function U(){const[o,s]=p.useState(1),[d,x]=p.useState([]),r=24;p.useEffect(()=>{(async()=>{try{const n=await m.get("https://api.themoviedb.org/3/tv/top_rated?api_key=b2d47bc45b9596fab31b362d1db590f9");x(n.data.results)}catch(n){console.error(n)}})()},[]);const a=d.map(e=>({title:e.title,imageUrl:`https://image.tmdb.org/t/p/w500${e.poster_path}`,url:"#"})),c=(o-1)*r,l=c+r,h=a.slice(c,l),g=e=>{s(e)};return t.jsxs($,{style:{height:"150vh",width:"100vw",backgroundColor:"black",marginTop:"-40px"},children:[t.jsx(P,{children:"| Top Rated Movies "}),t.jsx(A,{children:h.map((e,n)=>t.jsx("a",{href:e.url,children:t.jsxs(S,{imageUrl:e.imageUrl,children:[t.jsx("div",{className:"title",children:e.title}),t.jsxs("button",{className:"watch-button",children:[t.jsx(f,{className:"play-icon"})," Watch"]})]})},n))}),t.jsx(M,{children:Array.from({length:Math.ceil(a.length/r)},(e,n)=>t.jsx(N,{onClick:()=>g(n+1),active:n+1===o,children:n+1},n))})]})}const _=i.h1`
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
`,L=i.div`
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
`,T=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    height: 100%;
  }
`,I=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    margin-top: -10%;
  }
`,D=i.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,G=i.button`
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
`;function W(){const[o,s]=p.useState(1),[d,x]=p.useState([]),r=24;p.useEffect(()=>{(async()=>{try{const n=await m.get("https://api.themoviedb.org/3/tv/top_rated?api_key=b2d47bc45b9596fab31b362d1db590f9");x(n.data.results)}catch(n){console.error(n)}})()},[]);const a=d.map(e=>({title:e.title,imageUrl:`https://image.tmdb.org/t/p/w500${e.poster_path}`,url:"#"})),c=(o-1)*r,l=c+r,h=a.slice(c,l),g=e=>{s(e)};return t.jsxs(T,{style:{height:"150vh",width:"100vw",backgroundColor:"black",marginTop:"-40px"},children:[t.jsx(_,{children:"| Top Rated Anime "}),t.jsx(I,{children:h.map((e,n)=>t.jsx("a",{href:e.url,children:t.jsxs(L,{imageUrl:e.imageUrl,children:[t.jsx("div",{className:"title",children:e.title}),t.jsxs("button",{className:"watch-button",children:[t.jsx(f,{className:"play-icon"})," Watch"]})]})},n))}),t.jsx(D,{children:Array.from({length:Math.ceil(a.length/r)},(e,n)=>t.jsx(G,{onClick:()=>g(n+1),active:n+1===o,children:n+1},n))})]})}const E=i.h1`
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
`,R=i.div`
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
`,F=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    height: 100%;
  }
`,B=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    margin-top: -10%;
  }
`,H=i.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,O=i.button`
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
`;function X(){const[o,s]=p.useState(1),[d,x]=p.useState([]),r=24;p.useEffect(()=>{(async()=>{try{const n=await m.get("ccccccccccccccccc                                                                                                                                                                                                                          c?api_key=b2d47bc45b9596fab31b362d1db590f9");x(n.data.results)}catch(n){console.error(n)}})()},[]);const a=d.map(e=>({title:e.title,imageUrl:`https://image.tmdb.org/t/p/w500${e.poster_path}`,url:"#"})),c=(o-1)*r,l=c+r,h=a.slice(c,l),g=e=>{s(e)};return t.jsxs(F,{style:{height:"150vh",width:"100vw",backgroundColor:"black",marginTop:"-40px"},children:[t.jsx(E,{children:"| Top Rated Tv Shows "}),t.jsx(B,{children:h.map((e,n)=>t.jsx("a",{href:e.url,children:t.jsxs(R,{imageUrl:e.imageUrl,children:[t.jsx("div",{className:"title",children:e.title}),t.jsxs("button",{className:"watch-button",children:[t.jsx(f,{className:"play-icon"})," Watch"]})]})},n))}),t.jsx(H,{children:Array.from({length:Math.ceil(a.length/r)},(e,n)=>t.jsx(O,{onClick:()=>g(n+1),active:n+1===o,children:n+1},n))})]})}const nt=()=>t.jsxs("div",{style:{height:"100vh"},children:[t.jsx(w,{}),t.jsx(z,{}),t.jsx(U,{}),t.jsx(W,{}),t.jsx(X,{}),t.jsx(j,{}),t.jsx(b,{}),t.jsx(k,{}),t.jsx(b,{})]});export{nt as default};
