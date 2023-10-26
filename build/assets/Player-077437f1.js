import{s as o,r as l,j as e}from"./index-0cbab773.js";import{N as y}from"./navbar-d20fdd4f.js";import{f as k,d as w,g as S,h as C}from"./index.esm-ad064f6f.js";import{C as P}from"./Similar-6ea06b9d.js";import{A}from"./footer-4556424b.js";import{P as D,A as N}from"./popup-ads-061216af.js";import"./iconBase-a584e5dc.js";const M=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  padding: 50px;

  video {
    width: 90%;
    height: 60%;
    margin: 5px 0;
  }

  button {
    background: none;
    border: none;
    font-size: 24px;
    color: #0077b6;
    cursor: pointer;
    margin: 10px 0;
  }

  input {
    width: 50%;
  }
`,R=o.div`
  background-color: white;
  font-family: 'Gotham', sans-serif;
  font-size: 50px;
  margin-right: 75%;
   /* Adjust the width as needed */
`;function T({videoSrc:i}){const r=l.useRef(null),[c,d]=l.useState(!1),[a,u]=l.useState(!1),[p,x]=l.useState(1),g=()=>{r.current.paused?(r.current.play(),d(!0)):(r.current.pause(),d(!1))},m=()=>{r.current.muted=!a,u(!a)},h=s=>{const t=s.target.value;r.current.volume=t,x(t)};return e.jsxs(M,{children:[e.jsx(R,{children:"Movie Title"}),e.jsxs("video",{ref:r,controls:!0,children:[e.jsx("source",{src:i,type:"video/mp4"}),"Your browser does not support the video tag."]}),e.jsxs("div",{children:[e.jsx("button",{onClick:g,children:c?e.jsx(k,{}):e.jsx(w,{})}),e.jsx("button",{onClick:m,children:a?e.jsx(S,{}):e.jsx(C,{})}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:p,onChange:h})]})]})}const E=o.div`
  display: flex;
  font-family: Gotham, sans-serif;
  margin-top: -100px;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url("/images/lou1.jpg");
  background-size: 100% 100%;
`,v=o.div`
  padding: 20px;
  flex: 1;
`,V=o(v)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`,z=o.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  padding: 10px;
  background-color: transparent;
  flex:2;
`,F=o.div`
  text-align: left;
  margin-bottom: 10px;
`,G=o.h2`
  margin: 0;
`,b=o.p`
  margin: 0;
`,_=o.strong`
  margin: 0;
`,I=o(v)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  margin-right:50px;
  border:1px solid black;
  background-color:#404757;
  max-width:250px;
  max-height: 500px;
  overflow-y: auto;
`,O=o.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #AAAAAA;
  text-decoration: none;
`,H=o.img`
  width: 80px;
  height: 80px;
  margin-right: 10px;
`;o.button`
  background-color: #0073e6;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;const B=[{season:"season1",episodeNumber:1,imageSrc:"/images/lou.jpg",link:"/player"},{season:"season1",episodeNumber:2,imageSrc:"/images/lou.jpg",link:"/player"},{season:"season2",episodeNumber:1,imageSrc:"/images/lou.jpg",link:"/player"},{season:"season2",episodeNumber:2,imageSrc:"/images/lou.jpg",link:"/player"},{season:"season2",episodeNumber:3,imageSrc:"/images/lou.jpg",link:"/player"},{season:"season3",episodeNumber:1,imageSrc:"/images/lou.jpg",link:"/player"},{season:"season3",episodeNumber:2,imageSrc:"/images/lou.jpg",link:"/player"},{season:"season3",episodeNumber:3,imageSrc:"/images/lou.jpg",link:"/player"}],U=()=>{const[i,r]=l.useState("season1"),c=`HD Trailer | IMDB | 1:20:60
    Overview: At America's only college for superheroes, gifted students put their moral boundaries to the test, competing for the university's top ranking, and a chance to join The Seven, Vought International's elite superhero team. When the school's dark secrets come to light, they must decide what kind of heroes they want to become.
    Released: 2023-09-28
    Genre: Sci-Fi & Fantasy, Action & Adventure, Comedy, Drama
    Casts: Jaz Sinclair, Chance Perdomo, Lizze Broadway, Shelley Conn, Maddie Phillips
    Duration: 50 min
    Country: United States of America
    Production: Sony Pictures Television Studios, Amazon Studios, Kripke Enterprises, Point Grey Pictures, Original Film, Sony Pictures Television`,d=o.p`
    font-weight: bold;
    margin: 0;
  `,a=o.p`
    font-weight: bold;
    margin: 0;
  `,u=o.p`
    font-weight: bold;
    margin: 0;
  `,p=o.p`
    font-weight: bold;
    margin: 0;
  `,x=o.p`
    font-weight: bold;
    margin: 0;
  `,g=o.p`
    font-weight: bold;
    margin: 0;
  `,m=o.p`
    font-weight: bold;
    margin: 0;
  `,h=c.split(`
`);return e.jsx("section",{style:{backgroundColor:"#404757"},children:e.jsxs(E,{children:[e.jsx(V,{children:e.jsx("img",{style:{height:"300px",width:"200px"},src:"/images/lou.jpg",alt:"Movie Poster"})}),e.jsxs(z,{children:[e.jsx(G,{children:e.jsx(_,{children:"Expend4bles"})}),e.jsx(F,{children:h.map((s,t)=>{const j=s.split(":");if(j.length===2){const n=j[0].trim(),f=j[1].trim();return n==="HD Trailer"?e.jsx("div",{children:e.jsx("a",{href:f,target:"_blank",rel:"noopener noreferrer",children:e.jsx("button",{children:n})})},t):e.jsxs("div",{children:[n==="Overview"&&e.jsxs(d,{children:[n,":"]}),n==="Released"&&e.jsxs(a,{children:[n,":"]}),n==="Genre"&&e.jsxs(u,{children:[n,":"]}),n==="Casts"&&e.jsxs(p,{children:[n,":"]}),n==="Duration"&&e.jsxs(x,{children:[n,":"]}),n==="Country"&&e.jsxs(g,{children:[n,":"]}),n==="Production"&&e.jsxs(m,{children:[n,":"]}),n!=="HD Trailer"&&n!=="Overview"&&n!=="Released"&&n!=="Genre"&&n!=="Casts"&&n!=="Duration"&&n!=="Country"&&n!=="Production"&&e.jsxs(b,{children:[n,":"]}),f]},t)}else return e.jsx(b,{children:s},t)})}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.jsx("div",{children:e.jsx("a",{href:"link_to_download",target:"_blank",rel:"noopener noreferrer",children:e.jsx("button",{style:{border:"2px solid blue",margin:"0 10px",borderRadius:"25px"},children:"Download"})})}),e.jsx("div",{children:e.jsx("a",{href:"link_to_buy_ticket",target:"_blank",rel:"noopener noreferrer",children:e.jsx("button",{style:{border:"2px solid blue",margin:"0 10px",borderRadius:"25px"},children:"Buy Ticket"})})}),e.jsx("div",{children:e.jsx("button",{style:{border:"2px solid blue",margin:"0 10px",borderRadius:"25px"},children:"Share"})})]})]}),e.jsxs(I,{children:[e.jsxs("select",{value:i,onChange:s=>r(s.target.value),children:[e.jsx("option",{value:"season1",children:"Season 1"}),e.jsx("option",{value:"season2",children:"Season 2"}),e.jsx("option",{value:"season3",children:"Season 3"})]}),B.map((s,t)=>s.season===i?e.jsx("a",{href:s.link,children:e.jsxs(O,{children:[e.jsx(H,{src:s.imageSrc,alt:`Episode ${s.episodeNumber}`}),"Episode ",s.episodeNumber]})},t):null)]})]})})},L=o.div`
  background-image: url('${i=>i.imageUrl||"/images/meg2.jpg"}');
  background-size: cover;
  background-position: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
`,W=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
`,Y=()=>e.jsx(L,{children:e.jsxs(W,{children:[e.jsx("h1",{children:"Your Content Goes Here"}),e.jsx("p",{children:"More content here..."})]})}),$=o.div`
  position: relative;
  width: 100vw;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #000;
  margin-bottom: 10px;
`,ne=({videoSrc:i})=>e.jsxs($,{children:[e.jsx(y,{}),e.jsx(T,{}),e.jsx(U,{}),e.jsx(P,{}),e.jsx(Y,{}),e.jsx(D,{}),e.jsx(N,{}),e.jsx(A,{})]});export{ne as default};
