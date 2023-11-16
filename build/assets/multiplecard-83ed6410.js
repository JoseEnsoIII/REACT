import{s as n,r as i,j as o}from"./index-a520d23b.js";import{a as m}from"./axios-3a76d256.js";import{e as f}from"./index.esm-ee168830.js";const u=n.h1`
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
`,b=n.div`
  position: relative;
  width: 150px;
  height: 200px;
  background: url(${a=>a.imageUrl}) no-repeat center/cover;
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
`,w=n.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    height: 100%;
  }
`,y=n.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    margin-top: -10%;
  }
`,v=n.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,j=n.button`
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

  ${a=>a.active&&`
    background-color: transparent;
    color: blue;
  `}
`;function P(){const[a,c]=i.useState(1),[l,d]=i.useState([]),r=16;i.useEffect(()=>{(async()=>{try{const e=await m.get("https://api.themoviedb.org/3/tv/on_the_air?api_key=b2d47bc45b9596fab31b362d1db590f9");d(e.data.results)}catch(e){console.error(e)}})()},[]);const s=l.map(t=>({title:t.title,imageUrl:`https://image.tmdb.org/t/p/w500${t.poster_path}`,url:"#"})),p=(a-1)*r,x=p+r,h=s.slice(p,x),g=t=>{c(t)};return o.jsxs(w,{style:{height:"120vh",width:"100vw",backgroundColor:"black",marginTop:"-40px"},children:[o.jsx(u,{children:"| New Show "}),o.jsx(y,{children:h.map((t,e)=>o.jsx("a",{href:t.url,children:o.jsxs(b,{imageUrl:t.imageUrl,children:[o.jsx("div",{className:"title",children:t.title}),o.jsxs("button",{className:"watch-button",children:[o.jsx(f,{className:"play-icon"})," Watch"]})]})},e))}),o.jsx(v,{children:Array.from({length:Math.ceil(s.length/r)},(t,e)=>o.jsx(j,{onClick:()=>g(e+1),active:e+1===a,children:e+1},e))})]})}export{P as C};
