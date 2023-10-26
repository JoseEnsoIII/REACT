import{j as t,s as o,r as l}from"./index-0cbab773.js";import"./index-d5b33ede.js";import{M as h,A as m}from"./multiplecard-216a628d.js";import"./aos-1e3720e2.js";import{N as g}from"./navbar1-7fc73374.js";import{S as u}from"./sidenav-fd7d1a2c.js";import{T as f}from"./TabbedHome-fef55ace.js";import{d as b}from"./index.esm-ad064f6f.js";import{A as j}from"./footer-4556424b.js";import{P as w,A as y}from"./popup-ads-061216af.js";import"./iconBase-a584e5dc.js";function v({script:e}){return t.jsx("div",{className:"speech-bubble",children:e})}const k=o.div`
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
`,C=o.div`
  position: fixed;
  top: 20px; 
  top: 10px;
  right: 0; 
  color: white;
`;function S(){const[e,a]=l.useState(!1),r="Hello! I'm your friendly hand.",s=()=>{a(!e),e||speakScript(r)};return t.jsxs(t.Fragment,{children:[t.jsxs(k,{onClick:s,children:[e&&t.jsx(v,{script:r}),t.jsx("img",{src:"/images/hand.png",alt:"Waving hand",style:{width:"30px",height:"30px"}})]}),t.jsx(C,{children:t.jsx("p",{children:"Hello!"})})]})}const A=o.h1`
  text-align: center;
  font-family: 'Gotham', sans-serif;
  color: black;
  font-size: 40px; /* Set the font size */
  margin-left: -70%;
`,z=o.div`
  position: relative;
  width: 200px;
  height: 300px;
  background: url(${e=>e.imageUrl}) no-repeat center/cover;
  border-radius: 10px;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
  margin: 10px;
  transition: 0.5s;

  &:hover {
    transition: 0.5s;
    .title {
      padding-bottom: 50px;
      opacity: 1;
      transition: 0.5s;
      font-size: 10px;
    }
    .watch-button {
      opacity: 1;
      transition: 0.5s;
      font-size: 10px;
    }
  }

  .title {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    font-size: 26px;
    font-weight: 300;
    padding: 30px 0;
    background: linear-gradient(to top, #000, transparent);
    text-transform: uppercase;
    text-align: center;
    opacity: 0;
    transition: 0.5s;
    color: white;
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
`,P=o.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,H=o.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

`,N=o.button`
  background-color: white;
  border: 1px solid white;
  color: black;
  cursor: pointer;
  margin: 0 5px;
  font-size: 18px;
  font-family: "Gotham", sans-serif; /* Use the Gotham font */
  padding: 5px 10px;
  border-radius: 5px;
  outline: none;
  
  &:hover {
    background-color: transparent;
    color: blue;
  }

  ${e=>e.active&&`
    background-color: transparent;
    color: blue;
  `}
`;function E(){const[e,a]=l.useState(1),r=6,s=[{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg",url:"/player"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg",url:"/player"}],p=(e-1)*r,c=p+r,d=s.slice(p,c),x=n=>{a(n)};return t.jsx("section",{children:t.jsxs("div",{style:{height:"120vh",width:"100vw",backgroundColor:"white"},children:[t.jsx(A,{children:"| Similar "}),t.jsx(P,{children:d.map((n,i)=>t.jsxs("a",{href:n.url,children:[" ",t.jsxs(z,{imageUrl:n.imageUrl,children:[t.jsx("div",{className:"title",children:n.title}),t.jsxs("button",{className:"watch-button",children:[t.jsx(b,{className:"play-icon"})," Watch"]})]})]},i))}),t.jsx(H,{children:Array.from({length:Math.ceil(s.length/r)},(n,i)=>t.jsx(N,{onClick:()=>x(i+1),active:i+1===e,children:i+1},i))})]})})}const X=()=>(l.useEffect(()=>{document.title="ReactFlix |  Home"},[]),t.jsxs("section",{className:"slider4 mbr-embla cid-tEzwvrEiry",style:{backgroundColor:"#8E95A5",width:"100vw"},id:"slider4-2j",children:[t.jsx(g,{}),t.jsx(u,{}),t.jsx(S,{}),t.jsx(h,{autoplay:!0,wrapAround:!0,speed:1e3,slidesToShow:1}),t.jsx(f,{}),t.jsx(m,{}),t.jsx(E,{}),t.jsx(w,{}),t.jsx(y,{}),t.jsx(j,{})]}));export{X as default};
