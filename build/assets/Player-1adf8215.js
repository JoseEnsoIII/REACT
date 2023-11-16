import{s as i,r,j as e}from"./index-ef4458a9.js";import{N as w}from"./navbar-78d032f4.js";import{F as f,g as u}from"./index-9758f4da.js";import{C as j}from"./Similar-9bd09651.js";import{a as v}from"./axios-3a76d256.js";import{d as b}from"./index.esm-f965c28b.js";import{A as y}from"./footer-c9aca682.js";import{P as S,A as k}from"./popup-ads-b34ade85.js";import"./iconBase-464e3dd3.js";const N=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 120vh;
  background-color:gray;
`,C=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,z=i.video`
  width: 150%;
  height: 45%;
  margin-top:15%;
`,P=i.div`
position:sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  margin-right:110%;
  flex-direction: row;
`,E=i.div`
  margin-top: 10px;
  margin-bottom: 10px;
`,A=i.div`
margin:20px;
color: white;
  text-align: center;
`,M=i.img`
  max-width: 150px;;
  max-height: 150px;
   color:black;
`,D=[{season:"season1",episodeNumber:1,link:"/player",imageSrc:"/images/lou.jpg"},{season:"season1",episodeNumber:2,link:"/player",imageSrc:"/images/lou.jpg"},{season:"season2",episodeNumber:1,link:"/player",imageSrc:"/images/lou.jpg"},{season:"season2",episodeNumber:2,link:"/player",imageSrc:"/images/lou.jpg"},{season:"season3",episodeNumber:1,link:"/player",imageSrc:"/images/lou.jpg"},{season:"season3",episodeNumber:2,link:"/player",imageSrc:"/images/lou.jpg"}];function R({videoSrc:s}){const p=r.useRef(null),[x,d]=r.useState("season1");return e.jsx(N,{children:e.jsxs(C,{style:{height:"150vh"},children:[e.jsxs(z,{ref:p,controls:!0,children:[e.jsx("source",{src:s,type:"video/mp4"}),"Your browser does not support the video tag."]}),e.jsxs(P,{children:[e.jsxs(E,{children:[e.jsxs("select",{value:x,onChange:a=>d(a.target.value),style:{marginTop:""},children:[e.jsx("option",{value:"season1",children:"Season 1"}),e.jsx("option",{value:"season2",children:"Season 2"}),e.jsx("option",{value:"season3",children:"Season 3"})]}),e.jsx("br",{})]}),D.map((a,o)=>a.season===x?e.jsx("a",{href:a.link,children:e.jsxs(A,{children:[e.jsx(M,{src:a.imageSrc,alt:`Episode ${a.episodeNumber}`,sty:!0}),"Episode ",a.episodeNumber]})},o):null)]})]})})}const T=i.div`
  display: flex;
  font-family: Gotham, sans-serif;
  margin-top: -100px;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url("/images/lou1.jpg");
  background-size: 100% 100%;
`,F=i.div`
  padding: 20px;
  flex: 1;
`,W=i(F)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`,$=i.div`
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
`;const I=()=>{const[s,p]=r.useState(null);return r.useEffect(()=>{(async()=>{try{const d=await fetch("http://localhost:3003/api/movie/1");if(d.ok){const a=await d.json();p(a)}else console.error("Failed to fetch movie details")}catch(d){console.error("Error during fetch:",d)}})()},[]),i.p`
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
  `,e.jsx("section",{style:{backgroundColor:"#404757"},children:e.jsxs(T,{children:[e.jsx(W,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx("img",{style:{height:"300px",width:"200px"},src:"/images/lou.jpg",alt:"Movie Poster"}),e.jsx("p",{style:{marginTop:"10px"},children:e.jsxs("a",{href:"",style:{color:"white",textDecoration:"none"},children:[e.jsx(f,{icon:u,style:{marginRight:"10px"}}),"Watch Trailer"]})})]})}),e.jsx($,{children:e.jsxs("div",{className:"column column-md",children:[e.jsxs("h1",{id:"title",children:["My Neighbor Totoro",e.jsx("span",{id:"date",children:" (1988)"})]}),e.jsx("div",{className:"row",children:e.jsx("span",{className:"badge",children:e.jsx("span",{id:"status",children:"Released"})})}),e.jsx("div",{className:"row",children:"1 hour 26 minutes | Fantasy, Animation, Family | 16 April 1988"}),e.jsx("h3",{id:"tagline",children:"These strange creatures still exist in Japan. Probably."}),e.jsx("div",{id:"overview",children:e.jsx("p",{id:"synopsis",children:"Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her."})}),e.jsxs("div",{className:"row",children:[e.jsx("h2",{children:"Company Credits"}),e.jsx("div",{id:"companies",children:"Studio Ghibli, Nibariki, Tokuma Japan Communications Co. Ltd."})]}),e.jsxs("div",{className:"row",children:[e.jsx("h2",{children:"Countries"}),e.jsx("div",{id:"countries",children:"Japan"})]}),e.jsxs("div",{className:"row",children:[e.jsx("h2",{children:"Box Office"}),e.jsxs("div",{id:"budget",children:[e.jsx("strong",{children:"Budget:"})," $0"]}),e.jsxs("div",{id:"revenue",children:[e.jsx("strong",{children:"Revenue:"})," $0"]})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"column column-md",children:e.jsxs("div",{className:"ratings",children:[e.jsx("h2",{children:"Rating"}),e.jsx("span",{id:"rating",children:"8/10"})]})}),e.jsxs("div",{className:"column column-md",children:[e.jsx("h2",{children:"Runtime"}),e.jsx("div",{children:e.jsx("div",{id:"runtime",children:"86 minutes"})})]}),e.jsxs("div",{className:"column column-lg",children:[e.jsx("h2",{children:"Related"}),e.jsx("ul",{id:"related"})]})]})]})})]})})},U=i.h1`
  text-align: center;
  font-family: 'Gotham', sans-serif;
  color: white;
  font-size: 30px;
  margin-left: -80%;
  margin-top:8%;
  font-weight: bold;

  @media (max-width: 320px) {
    // Styles for screens up to 320px width
    margin-left: -30%;
    font-size: 15px;
    margin-top: 20%;
    
  }

  @media (max-width: 640px) {
    margin-left: -60%;
    font-weight: bold;
    font-size: 20px;
    margin-top: 15%;
  }
  @media (max-width: 400px) {
    // Styles for screens up to 400px width
    font-size: 15px;
    margin-top:15%;
  }
  @media  (max-width: 640px) {
    // Styles for screens between 641px and 768px width
    font-size: 30px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    // Styles for screens between 641px and 768px width
    font-size: 30px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    // Styles for screens between 769px and 992px width
    font-size: 28px;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    // Styles for screens between 993px and 1200px width
    font-size: 30px;
  }
`,G=i.div`
  position: relative;
  width: 180px;
  height: 250px;
  background: url(${s=>s.imageUrl}) no-repeat center/cover;
  border-radius: 10px;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
  margin: 10px 10px -40px 10px; /* Updated margin to include only top and left/right margins */
  transition: 0.5s;

  @media (max-width: 1200px) {
    width: 120px;
    height: 150px;
    margin: 10px;
  }

  @media (max-width: 992px) {
    width: 120px;
    height: 150px;
    margin: 8px;
    margin:10px 10px -15px 10px;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 150px;
    margin: 6px;
    margin: 5px 5px -35px 5px;
  }
  @media (max-width: 640px) {
    width: 120px;
    height: 150px;
    margin: 6px;
    margin: 5px 5px -150px 5px;
  }
  @media (max-width: 520px) {
    width: 120px;
    height: 150px;
    margin: 5px 5px -85px 5px;
  }
  @media (max-width: 400px) {
    width: 120px;
    height: 150px;
    margin: 5px 5px -55px 5px;
  }

  @media (max-width: 320px) {
    width: 120px;
    height: 150px;
    margin: 5px 5px -55px 5px;
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
  
`,L=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  
  @media (max-width: 320px) {
    height: 50vh; 
    margin-top:-40%
  }

  @media (max-width: 400px) {
    height: 60vh; 
    width:auto;
  }
  @media (max-width: 520px) {
    height: 60vh; 
    width:auto;
  }
  @media (max-width: 640px) {
    height: 50vh; /* Set height to 50% of the viewport height for screens up to 640px width */
  }

  @media (min-width: 641px) and (max-width: 768px) {
    width: 80%;
    height: auto; /* Set height to auto for screens between 641px and 768px width */
  }

  @media (min-width: 769px) and (max-width: 992px) {
    width: 70%;
    height: auto; 
    margin-top:10%;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    width: 60%;
    height: auto; /* Set height to auto for screens between 993px and 1200px width */
  }

  @media (min-width: 1201px) {
    height: 120vh; /* Set height to 120% of the viewport height for screens larger than 1200px width */
  }
`,V=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -5%;

  @media (max-width: 320px) {
    margin-top: -85%;
  }
  @media (min-width: 319px)and (max-width: 400px) {
    margin-top: -55%;
  }
 
  @media (min-width: 401px) and (max-width: 640px) {
    margin-top: -45%;
  }

  @media (min-width: 641px) and (max-width: 768px) {
    margin-top: -25%;
  }

  @media (min-width: 769px) and (max-width: 998px) {
    margin-top: -15%;
  }

  @media (min-width: 999px) and (max-width: 1200px) {
    margin-top: -15%;
  }
`,_=i.div`
  display: flex;
  justify-content: center;
  margin-top: -5%; /* Set initial margin-top to 5% */

  @media (max-width: 320px) {
    margin-top: 5%; /* Styles for screens up to 320px width */
  }

  @media (min-width: 321px) and (max-width: 400px) {
    margin-top: 5%; /* Styles for screens between 321px and 400px width */
  }

  @media (min-width: 401px) and (max-width: 640px) {
    margin-top: 5%; /* Styles for screens between 401px and 640px width */
  }

  @media (min-width: 641px) and (max-width: 768px) {
    margin-top: 5%; /* Styles for screens between 641px and 768px width */
  }

  @media (min-width: 769px) and (max-width: 992px) {
    margin-top: 5%; /* Styles for screens between 769px and 992px width */
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    margin-top: 5%; /* Styles for screens between 993px and 1200px width */
  }

  @media (min-width: 1201px) {
    margin-top: 5%; /* Styles for screens larger than 1200px width */
  }
`,B=i.button`
  background-color: white;
  border: 1px solid white;
  color: black;
  cursor: pointer;
  margin-top:5%;
  font-size: 18px;
  font-family: "Gotham", sans-serif;
  padding: 3px 10px;
  border-radius: 5px;
  outline: none;
  height: 20px;
  
  &:hover {
    background-color: transparent;
    color: blue;
  }

  @media (max-width: 640px) {
    font-size: 13px;
    height: 45px;
  }
  @media (max-width: 320px) {
    font-size: 10px;
    height: 20px;
    margin:3px;
  }
  @media (max-width: 400px) {
    font-size: 10px;
    height: 20px;
    margin:3px;
  }
  @media (max-width: 520px) {
    font-size: 10px;
    height: 20px;
    margin:3px;
  }

  @media (min-width: 401px) and (max-width: 768px) {
    font-size: 14px;
    height: 40px;
    margin:3px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 16px;
    height: 50px;
    margin:3px;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 20px;
    height: 60px;
    margin:3px;
  }

  @media (min-width: 1201px) {
    font-size: 22px;
    height: 70px;
    margin:3px;
  }

  ${s=>s.active&&`
    background-color: transparent;
    color: blue;
  `}

`;function J(){const[s,p]=r.useState(1),[x,d]=r.useState([]),[a,o]=r.useState(16);r.useEffect(()=>{const n=()=>{const t=window.innerWidth;t<320?o(8):t<400?o(12):t<520?o(9):t<640?o(12):t<768||t<992?o(25):t<1200?o(20):o(24)};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),r.useEffect(()=>{(async()=>{try{const t=await v.get("https://api.themoviedb.org/3/movie/movie_id/similar?api_key=b2d47bc45b9596fab31b362d1db590f9");d(t.data.results)}catch(t){console.error(t)}})()},[]);const h=x.map(n=>({title:n.title,imageUrl:`https://image.tmdb.org/t/p/w500${n.poster_path}`,url:"#"}))||[],l=(s-1)*a,m=l+a,c=h.slice(l,m),g=n=>{p(n)};return e.jsxs(L,{style:{height:"180vh",width:"100vw",backgroundColor:"black",marginTop:"-40px"},children:[e.jsx(U,{children:"| New Anime "}),e.jsx(V,{children:c.map((n,t)=>e.jsx("a",{href:n.url,children:e.jsxs(G,{imageUrl:n.imageUrl,children:[e.jsx("div",{className:"title",children:n.title}),e.jsxs("button",{className:"watch-button",children:[e.jsx(b,{className:"play-icon"})," Watch"]})]})},t))}),e.jsx(_,{children:Array.from({length:Math.ceil(h.length/a)},(n,t)=>e.jsx(B,{onClick:()=>g(t+1),active:t+1===s,children:t+1},t))})]})}const H=i.div`
  position: relative;
  width: 100vw;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #000;
  margin-bottom: 10px;
`,te=({videoSrc:s})=>e.jsxs(H,{children:[e.jsx(w,{}),e.jsx(R,{}),e.jsx(I,{}),e.jsx(j,{}),e.jsx(J,{}),e.jsx(S,{}),e.jsx(k,{}),e.jsx(y,{})]});export{te as default};
