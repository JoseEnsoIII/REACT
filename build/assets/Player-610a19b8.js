import{s,r,j as e}from"./index-c61d7640.js";import{N as c}from"./navbar-6576269a.js";import{C as p}from"./Similar-32223454.js";import{A as m}from"./footer-64d2299b.js";import{P as d,A as g}from"./popup-ads-91f20f67.js";import"./index.esm-8b7b8eba.js";import"./iconBase-78b2458b.js";import"./axios-3a76d256.js";const x=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 120vh;
  background-color:gray;
`,u=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,h=s.video`
  width: 150%;
  height: 45%;
  margin-top:15%;
`,j=s.div`
position:sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  margin-right:110%;
  flex-direction: row;
`,f=s.div`
  margin-top: 10px;
  margin-bottom: 10px;
`,v=s.div`
margin:20px;
color: white;
  text-align: center;
`,y=s.img`
  max-width: 150px;;
  max-height: 150px;
   color:black;
`,S=[{season:"season1",episodeNumber:1,link:"/player",imageSrc:"/images/lou.jpg"},{season:"season1",episodeNumber:2,link:"/player",imageSrc:"/images/lou.jpg"},{season:"season2",episodeNumber:1,link:"/player",imageSrc:"/images/lou.jpg"},{season:"season2",episodeNumber:2,link:"/player",imageSrc:"/images/lou.jpg"},{season:"season3",episodeNumber:1,link:"/player",imageSrc:"/images/lou.jpg"},{season:"season3",episodeNumber:2,link:"/player",imageSrc:"/images/lou.jpg"}];function b({videoSrc:i}){const t=r.useRef(null),[n,a]=r.useState("season1");return e.jsx(x,{children:e.jsxs(u,{style:{height:"150vh"},children:[e.jsxs(h,{ref:t,controls:!0,children:[e.jsx("source",{src:i,type:"video/mp4"}),"Your browser does not support the video tag."]}),e.jsxs(j,{children:[e.jsxs(f,{children:[e.jsxs("select",{value:n,onChange:o=>a(o.target.value),style:{marginTop:""},children:[e.jsx("option",{value:"season1",children:"Season 1"}),e.jsx("option",{value:"season2",children:"Season 2"}),e.jsx("option",{value:"season3",children:"Season 3"})]}),e.jsx("br",{})]}),S.map((o,l)=>o.season===n?e.jsx("a",{href:o.link,children:e.jsxs(v,{children:[e.jsx(y,{src:o.imageSrc,alt:`Episode ${o.episodeNumber}`,sty:!0}),"Episode ",o.episodeNumber]})},l):null)]})]})})}const k=s.div`
  position: relative;
  width: 100vw;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #000;
  margin-bottom: 10px;
`,I=({videoSrc:i})=>e.jsxs(k,{children:[e.jsx(c,{}),e.jsx(b,{}),e.jsx(p,{}),e.jsx(d,{}),e.jsx(g,{}),e.jsx(m,{})]});export{I as default};
