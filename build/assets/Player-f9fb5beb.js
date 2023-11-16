import{s as i,r as a,j as e}from"./index-0c4216c9.js";import{N as g}from"./navbar-f4fade08.js";import{F as u,g as f}from"./index-c4b36ef0.js";import{a as j}from"./axios-3a76d256.js";import{e as v}from"./index.esm-01fc7427.js";import{A as b}from"./footer-3a1bf108.js";import{P as y,A as w}from"./popup-ads-f96a8fd2.js";import"./iconBase-633bf7ef.js";const k=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 120vh;
  background-color:gray;
`,N=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,C=i.video`
  width: 150%;
  height: 45%;
  margin-top:15%;
`,S=i.div`
position:sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  margin-right:110%;
  flex-direction: row;
`,P=i.div`
  margin-top: 10px;
  margin-bottom: 10px;
`,z=i.div`
margin:20px;
color: white;
  text-align: center;
`,A=i.img`
  max-width: 150px;;
  max-height: 150px;
   color:black;
`,M=[{season:"season1",episodeNumber:1,link:"/player",imageSrc:"/images/lou.jpg"},{season:"season1",episodeNumber:2,link:"/player",imageSrc:"/images/lou.jpg"},{season:"season2",episodeNumber:1,link:"/player",imageSrc:"/images/lou.jpg"},{season:"season2",episodeNumber:2,link:"/player",imageSrc:"/images/lou.jpg"},{season:"season3",episodeNumber:1,link:"/player",imageSrc:"/images/lou.jpg"},{season:"season3",episodeNumber:2,link:"/player",imageSrc:"/images/lou.jpg"}];function E({videoSrc:s}){const l=a.useRef(null),[c,r]=a.useState("season1");return e.jsx(k,{children:e.jsxs(N,{style:{height:"150vh"},children:[e.jsxs(C,{ref:l,controls:!0,children:[e.jsx("source",{src:s,type:"video/mp4"}),"Your browser does not support the video tag."]}),e.jsxs(S,{children:[e.jsxs(P,{children:[e.jsxs("select",{value:c,onChange:t=>r(t.target.value),style:{marginTop:""},children:[e.jsx("option",{value:"season1",children:"Season 1"}),e.jsx("option",{value:"season2",children:"Season 2"}),e.jsx("option",{value:"season3",children:"Season 3"})]}),e.jsx("br",{})]}),M.map((t,d)=>t.season===c?e.jsx("a",{href:t.link,children:e.jsxs(z,{children:[e.jsx(A,{src:t.imageSrc,alt:`Episode ${t.episodeNumber}`,sty:!0}),"Episode ",t.episodeNumber]})},d):null)]})]})})}const D=i.div`
  display: flex;
  font-family: Gotham, sans-serif;
  margin-top: -100px;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url("/images/lou1.jpg");
  background-size: 100% 100%;
`,R=i.div`
  padding: 20px;
  flex: 1;
`,T=i(R)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`,F=i.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  padding: 10px;
  background-color: transparent;
  flex:2;
`;i.div`
  text-align: left;
  margin-bottom: 10px;
`;i.h2`
  margin: 0;
`;i.p`
  margin: 0;
`;i.strong`
  margin: 0;
`;const $=()=>{const[s,l]=a.useState(null);return a.useEffect(()=>{(async()=>{try{const r=await fetch("http://localhost:3003/api/movie/1");if(r.ok){const t=await r.json();l(t)}else console.error("Failed to fetch movie details")}catch(r){console.error("Error during fetch:",r)}})()},[]),i.p`
    font-weight: bold;
    margin: 0;
  `,i.p`
    font-weight: bold;
    margin: 0;
  `,i.p`
    font-weight: bold;
    margin: 0;
  `,i.p`
    font-weight: bold;
    margin: 0;
  `,i.p`
    font-weight: bold;
    margin: 0;
  `,i.p`
    font-weight: bold;
    margin: 0;
  `,i.p`
    font-weight: bold;
    margin: 0;
  `,e.jsx("section",{style:{backgroundColor:"#404757"},children:e.jsxs(D,{children:[e.jsx(T,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx("img",{style:{height:"300px",width:"200px"},src:"/images/lou.jpg",alt:"Movie Poster"}),e.jsx("p",{style:{marginTop:"10px"},children:e.jsxs("a",{href:"",style:{color:"white",textDecoration:"none"},children:[e.jsx(u,{icon:f,style:{marginRight:"10px"}}),"Watch Trailer"]})})]})}),e.jsx(F,{children:e.jsxs("div",{className:"column column-md",children:[e.jsxs("h1",{id:"title",children:["My Neighbor Totoro",e.jsx("span",{id:"date",children:" (1988)"})]}),e.jsx("div",{className:"row",children:e.jsx("span",{className:"badge",children:e.jsx("span",{id:"status",children:"Released"})})}),e.jsx("div",{className:"row",children:"1 hour 26 minutes | Fantasy, Animation, Family | 16 April 1988"}),e.jsx("h3",{id:"tagline",children:"These strange creatures still exist in Japan. Probably."}),e.jsx("div",{id:"overview",children:e.jsx("p",{id:"synopsis",children:"Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her."})}),e.jsxs("div",{className:"row",children:[e.jsx("h2",{children:"Company Credits"}),e.jsx("div",{id:"companies",children:"Studio Ghibli, Nibariki, Tokuma Japan Communications Co. Ltd."})]}),e.jsxs("div",{className:"row",children:[e.jsx("h2",{children:"Countries"}),e.jsx("div",{id:"countries",children:"Japan"})]}),e.jsxs("div",{className:"row",children:[e.jsx("h2",{children:"Box Office"}),e.jsxs("div",{id:"budget",children:[e.jsx("strong",{children:"Budget:"})," $0"]}),e.jsxs("div",{id:"revenue",children:[e.jsx("strong",{children:"Revenue:"})," $0"]})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"column column-md",children:e.jsxs("div",{className:"ratings",children:[e.jsx("h2",{children:"Rating"}),e.jsx("span",{id:"rating",children:"8/10"})]})}),e.jsxs("div",{className:"column column-md",children:[e.jsx("h2",{children:"Runtime"}),e.jsx("div",{children:e.jsx("div",{id:"runtime",children:"86 minutes"})})]}),e.jsxs("div",{className:"column column-lg",children:[e.jsx("h2",{children:"Related"}),e.jsx("ul",{id:"related"})]})]})]})})]})})},I=i.h1`
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
`,W=i.div`
  position: relative;
  width: 150px;
  height: 200px;
  background: url(${s=>s.imageUrl}) no-repeat center/cover;
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
`,G=i.div`
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
`,U=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    margin-top: 30%;
  }
  @media (max-width: 400px) {
    margin-top:5%;
  }
`,V=i.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 640px) {

  }

  @media (max-width: 400px) {
    /* Add your styles for 400px or less here */
  }
`,_=i.button`
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

  ${s=>s.active&&`
    background-color: transparent;
    color: blue;
  `}
`;function B(){const[s,l]=a.useState(1),[c,r]=a.useState([]),t=16;a.useEffect(()=>{(async()=>{try{const o=await j.get("https://api.themoviedb.org/3/tv/series_id/videos?api_key=b2d47bc45b9596fab31b362d1db590f9");r(o.data.results)}catch(o){console.error(o)}})()},[]);const d=c.map(n=>({title:n.title,imageUrl:`https://image.tmdb.org/t/p/w500${n.poster_path}`,url:"#"})),p=(s-1)*t,h=p+t,x=d.slice(p,h),m=n=>{l(n)};return e.jsxs(G,{style:{height:"120vh",width:"100vw",backgroundColor:"white",marginTop:"-40px"},children:[e.jsx(I,{children:"| Similar "}),e.jsx(U,{children:x.map((n,o)=>e.jsx("a",{href:n.url,children:e.jsxs(W,{imageUrl:n.imageUrl,children:[e.jsx("div",{className:"title",children:n.title}),e.jsxs("button",{className:"watch-button",children:[e.jsx(v,{className:"play-icon"})," Watch"]})]})},o))}),e.jsx(V,{children:Array.from({length:Math.ceil(d.length/t)},(n,o)=>e.jsx(_,{onClick:()=>m(o+1),active:o+1===s,children:o+1},o))})]})}const J=i.div`
  background-image: url('${s=>s.imageUrl||"/images/meg2.jpg"}');
  background-size: cover;
  background-position: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
`,H=i.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
`,L=()=>e.jsx(J,{children:e.jsxs(H,{children:[e.jsx("h1",{children:"Your Content Goes Here"}),e.jsx("p",{children:"More content here..."})]})}),Y=i.div`
  position: relative;
  width: 100vw;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #000;
  margin-bottom: 10px;
`,te=({videoSrc:s})=>e.jsxs(Y,{children:[e.jsx(g,{}),e.jsx(E,{}),e.jsx($,{}),e.jsx(B,{}),e.jsx(L,{}),e.jsx(y,{}),e.jsx(w,{}),e.jsx(b,{})]});export{te as default};
