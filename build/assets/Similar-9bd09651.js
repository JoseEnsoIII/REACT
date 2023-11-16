import{s as o,r as n,j as i}from"./index-ef4458a9.js";import{a as g}from"./axios-3a76d256.js";import{d as f}from"./index.esm-f965c28b.js";const u=o.h1`
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
`,b=o.div`
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
`,w=o.div`
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
`,y=o.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    margin-top: 30%;
  }
  @media (max-width: 400px) {
    margin-top:5%;
  }
`,v=o.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 640px) {

  }

  @media (max-width: 400px) {
    /* Add your styles for 400px or less here */
  }
`,j=o.button`
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

  ${a=>a.active&&`
    background-color: transparent;
    color: blue;
  `}
`;function P(){const[a,d]=n.useState(1),[c,x]=n.useState([]),r=16;n.useEffect(()=>{(async()=>{try{const e=await g.get("https://api.themoviedb.org/3/tv/series_id/videos?api_key=b2d47bc45b9596fab31b362d1db590f9");x(e.data.results)}catch(e){console.error(e)}})()},[]);const s=c.map(t=>({title:t.title,imageUrl:`https://image.tmdb.org/t/p/w500${t.poster_path}`,url:"#"})),p=(a-1)*r,l=p+r,h=s.slice(p,l),m=t=>{d(t)};return i.jsxs(w,{style:{height:"120vh",width:"100vw",backgroundColor:"white",marginTop:"-40px"},children:[i.jsx(u,{children:"| Similar "}),i.jsx(y,{children:h.map((t,e)=>i.jsx("a",{href:t.url,children:i.jsxs(b,{imageUrl:t.imageUrl,children:[i.jsx("div",{className:"title",children:t.title}),i.jsxs("button",{className:"watch-button",children:[i.jsx(f,{className:"play-icon"})," Watch"]})]})},e))}),i.jsx(v,{children:Array.from({length:Math.ceil(s.length/r)},(t,e)=>i.jsx(j,{onClick:()=>m(e+1),active:e+1===a,children:e+1},e))})]})}export{P as C};
