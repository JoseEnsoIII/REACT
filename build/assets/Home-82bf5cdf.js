import{j as e,s as o,r}from"./index-aab812e7.js";import"./index-18d93207.js";import{M as n,A as p,a as d}from"./anime_section-d2bd27a6.js";import"./aos-eacd0b5c.js";import{N as m}from"./navbar1-a0827362.js";import{S as l}from"./sidenav-b448aab0.js";import{T as c,S as x}from"./section-ads-9f4df4c2.js";import{C as h}from"./Similar-797b72b7.js";import{A as f}from"./footer-64ef0b89.js";import{P as j,A as u}from"./popup-ads-4e5b88b8.js";import"./index.esm-1aa73e51.js";import"./iconBase-e1c2ec00.js";function b({script:t}){return e.jsx("div",{className:"speech-bubble",children:t})}const g=o.div`
  position: fixed;
  top:12%;
  right: 1%;
  font-size: 10px;
  z-index: 999; /* Adjust the z-index to make sure it's on top of other content */
  /* Add other styling properties like width, height, etc. */

  /* Add a simple CSS animation */
  animation: wave 1s infinite alternate;
  @keyframes wave {
    0% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(5deg);
    }
    100% {
      transform: rotate(10deg);
    }
  }
`,A=o.div`
  position: fixed;
  top: 20px; 
  top: 10px;
  right: 0; 
  color: white;
`;function S(){const[t,i]=r.useState(!1),s="Hello! I'm your friendly hand.",a=()=>{i(!t),t||speakScript(s)};return e.jsxs(e.Fragment,{children:[e.jsxs(g,{onClick:a,children:[t&&e.jsx(b,{script:s}),e.jsx("img",{src:"/images/hand.png",alt:"Waving hand",style:{width:"30px",height:"30px"}})]}),e.jsx(A,{children:e.jsx("p",{children:"Hello!"})})]})}const F=()=>(r.useEffect(()=>{document.title="ReactFlix |  Home"},[]),e.jsxs("section",{className:"slider4 mbr-embla cid-tEzwvrEiry",style:{backgroundColor:"#8E95A5",width:"100vw"},id:"slider4-2j",children:[e.jsx(m,{}),e.jsx(l,{}),e.jsx(S,{}),e.jsx(n,{autoplay:!0,wrapAround:!0,speed:1e3,slidesToShow:1}),e.jsx(c,{}),e.jsx(p,{}),e.jsx(h,{}),e.jsx(x,{}),e.jsx(d,{}),e.jsx(j,{}),e.jsx(u,{}),e.jsx(f,{})]}));export{F as default};
