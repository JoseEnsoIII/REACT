import{s as i,r as t,j as e}from"./index-0a318fa9.js";import{N as c}from"./navbar-18bcae36.js";import{F as d,g as h}from"./index-7bdd7093.js";import{C as m}from"./Similar-09380d51.js";import{A as p}from"./footer-45515ee9.js";import{P as x,A as g}from"./popup-ads-8c7f4fec.js";import"./index.esm-2a7cc156.js";import"./iconBase-fdf9936c.js";import"./axios-3a76d256.js";const u=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 120vh;
  background-color:gray;
`,j=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,f=i.video`
  width: 150%;
  height: 45%;
  margin-top:15%;
`,v=i.div`
position:sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  margin-right:110%;
  flex-direction: row;
`,y=i.div`
  margin-top: 10px;
  margin-bottom: 10px;
`,b=i.div`
margin:20px;
color: white;
  text-align: center;
`,w=i.img`
  max-width: 150px;;
  max-height: 150px;
   color:black;
`,N=[{season:"season1",episodeNumber:1,link:"/player",imageSrc:"/images/lou.jpg"},{season:"season1",episodeNumber:2,link:"/player",imageSrc:"/images/lou.jpg"},{season:"season2",episodeNumber:1,link:"/player",imageSrc:"/images/lou.jpg"},{season:"season2",episodeNumber:2,link:"/player",imageSrc:"/images/lou.jpg"},{season:"season3",episodeNumber:1,link:"/player",imageSrc:"/images/lou.jpg"},{season:"season3",episodeNumber:2,link:"/player",imageSrc:"/images/lou.jpg"}];function k({videoSrc:o}){const r=t.useRef(null),[a,n]=t.useState("season1");return e.jsx(u,{children:e.jsxs(j,{style:{height:"150vh"},children:[e.jsxs(f,{ref:r,controls:!0,children:[e.jsx("source",{src:o,type:"video/mp4"}),"Your browser does not support the video tag."]}),e.jsxs(v,{children:[e.jsxs(y,{children:[e.jsxs("select",{value:a,onChange:s=>n(s.target.value),style:{marginTop:""},children:[e.jsx("option",{value:"season1",children:"Season 1"}),e.jsx("option",{value:"season2",children:"Season 2"}),e.jsx("option",{value:"season3",children:"Season 3"})]}),e.jsx("br",{})]}),N.map((s,l)=>s.season===a?e.jsx("a",{href:s.link,children:e.jsxs(b,{children:[e.jsx(w,{src:s.imageSrc,alt:`Episode ${s.episodeNumber}`,sty:!0}),"Episode ",s.episodeNumber]})},l):null)]})]})})}const S=i.div`
  display: flex;
  font-family: Gotham, sans-serif;
  margin-top: -100px;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url("/images/lou1.jpg");
  background-size: 100% 100%;
`,C=i.div`
  padding: 20px;
  flex: 1;
`,P=i(C)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`,E=i.div`
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
`;const R=()=>{const[o,r]=t.useState(null);return t.useEffect(()=>{(async()=>{try{const n=await fetch("http://localhost:3003/api/movie/1");if(n.ok){const s=await n.json();r(s)}else console.error("Failed to fetch movie details")}catch(n){console.error("Error during fetch:",n)}})()},[]),i.p`
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
  `,e.jsx("section",{style:{backgroundColor:"#404757"},children:e.jsxs(S,{children:[e.jsx(P,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx("img",{style:{height:"300px",width:"200px"},src:"/images/lou.jpg",alt:"Movie Poster"}),e.jsx("p",{style:{marginTop:"10px"},children:e.jsxs("a",{href:"",style:{color:"white",textDecoration:"none"},children:[e.jsx(d,{icon:h,style:{marginRight:"10px"}}),"Watch Trailer"]})})]})}),e.jsx(E,{children:e.jsxs("div",{className:"column column-md",children:[e.jsxs("h1",{id:"title",children:["My Neighbor Totoro",e.jsx("span",{id:"date",children:" (1988)"})]}),e.jsx("div",{className:"row",children:e.jsx("span",{className:"badge",children:e.jsx("span",{id:"status",children:"Released"})})}),e.jsx("div",{className:"row",children:"1 hour 26 minutes | Fantasy, Animation, Family | 16 April 1988"}),e.jsx("h3",{id:"tagline",children:"These strange creatures still exist in Japan. Probably."}),e.jsx("div",{id:"overview",children:e.jsx("p",{id:"synopsis",children:"Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her."})}),e.jsxs("div",{className:"row",children:[e.jsx("h2",{children:"Company Credits"}),e.jsx("div",{id:"companies",children:"Studio Ghibli, Nibariki, Tokuma Japan Communications Co. Ltd."})]}),e.jsxs("div",{className:"row",children:[e.jsx("h2",{children:"Countries"}),e.jsx("div",{id:"countries",children:"Japan"})]}),e.jsxs("div",{className:"row",children:[e.jsx("h2",{children:"Box Office"}),e.jsxs("div",{id:"budget",children:[e.jsx("strong",{children:"Budget:"})," $0"]}),e.jsxs("div",{id:"revenue",children:[e.jsx("strong",{children:"Revenue:"})," $0"]})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"column column-md",children:e.jsxs("div",{className:"ratings",children:[e.jsx("h2",{children:"Rating"}),e.jsx("span",{id:"rating",children:"8/10"})]})}),e.jsxs("div",{className:"column column-md",children:[e.jsx("h2",{children:"Runtime"}),e.jsx("div",{children:e.jsx("div",{id:"runtime",children:"86 minutes"})})]}),e.jsxs("div",{className:"column column-lg",children:[e.jsx("h2",{children:"Related"}),e.jsx("ul",{id:"related"})]})]})]})})]})})},A=i.div`
  background-image: url('${o=>o.imageUrl||"/images/meg2.jpg"}');
  background-size: cover;
  background-position: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
`,D=i.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
`,T=()=>e.jsx(A,{children:e.jsxs(D,{children:[e.jsx("h1",{children:"Your Content Goes Here"}),e.jsx("p",{children:"More content here..."})]})}),M=i.div`
  position: relative;
  width: 100vw;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #000;
  margin-bottom: 10px;
`,L=({videoSrc:o})=>e.jsxs(M,{children:[e.jsx(c,{}),e.jsx(k,{}),e.jsx(R,{}),e.jsx(m,{}),e.jsx(T,{}),e.jsx(x,{}),e.jsx(g,{}),e.jsx(p,{})]});export{L as default};
