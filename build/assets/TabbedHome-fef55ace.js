import{s as i,r as m,j as t,R as p}from"./index-0cbab773.js";import{d as x}from"./index.esm-ad064f6f.js";const h=i.h1`
  text-align: center;
  font-fapeacemakerly: 'Gotham', sans-serif;
  color: white;
  font-size: 40px; /* Set the font size */
  margin-left: -70%;
`,b=i.div`
  position: relative;
  width: 150px;
  height: 200px;
  background: url(${e=>e.imageUrl}) no-repeat center/cover;
  border-radius: 10px;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
  margin: 15px;
  transition: 0.5s;

  &:hover {
    transition: 1s;
    .title {
      padding-bottom: 50px;
      opacity: 1;
      transition: .3s;
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
`,f=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,u=i.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

`,w=i.button`
  background-color: white;
  border: 1px solid white;
  color: black;
  cursor: pointer;
  margin: 0 5px;
  font-size: 18px;
  font-fapeacemakerly: "Gotham", sans-serif; /* Use the Gotham font */
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
`;function j(){const[e,s]=m.useState(1),r=21,l=[{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"}],o=(e-1)*r,g=o+r,c=l.slice(o,g),d=n=>{s(n)};return t.jsxs("div",{style:{height:"120vh",width:"100vw",backgroundColor:"transparent",marginTop:"-6%",marginLeft:"-2%"},children:[t.jsx(h,{children:"| Trending Movies"}),t.jsx(f,{children:c.map((n,a)=>t.jsxs(b,{imageUrl:n.imageUrl,children:[t.jsx("div",{className:"title",children:n.title}),t.jsxs("button",{className:"watch-button",href:"/player",children:[t.jsx(x,{className:"play-icon"})," Watch"]})]},a))}),t.jsx(u,{children:Array.from({length:Math.ceil(l.length/r)},(n,a)=>t.jsx(w,{onClick:()=>d(a+1),active:a+1===e,children:a+1},a))})]})}const U=i.h1`
  text-align: center;
  font-family: 'Gotham', sans-serif;
  color: white;
  font-size: 40px; /* Set the font size */
  margin-left: -70%;
`,v=i.div`
  position: relative;
  width: 150px;
  height: 200px;
  background: url(${e=>e.imageUrl}) no-repeat center/cover;
  border-radius: 10px;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
  margin: 15px;
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
`,S=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,y=i.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

`,z=i.button`
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
`;function T(){const[e,s]=m.useState(1),r=21,l=[{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"}],o=(e-1)*r,g=o+r,c=l.slice(o,g),d=n=>{s(n)};return t.jsxs("div",{style:{height:"120vh",width:"100vw",backgroundColor:"transparent",marginTop:"-6%",marginLeft:"-2%"},children:[t.jsx(U,{children:"| Trending Series"}),t.jsx(S,{children:c.map((n,a)=>t.jsxs(v,{imageUrl:n.imageUrl,children:[t.jsx("div",{className:"title",children:n.title}),t.jsxs("button",{className:"watch-button",href:"/player",children:[t.jsx(x,{className:"play-icon"})," Watch"]})]},a))}),t.jsx(y,{children:Array.from({length:Math.ceil(l.length/r)},(n,a)=>t.jsx(z,{onClick:()=>d(a+1),active:a+1===e,children:a+1},a))})]})}const k=i.h1`
  text-align: center;
  font-family: 'Gotham', sans-serif;
  color: white;
  font-size: 40px; /* Set the font size */
  margin-left: -70%;
`,C=i.div`
  position: relative;
  width: 150px;
  height: 200px;
  background: url(${e=>e.imageUrl}) no-repeat center/cover;
  border-radius: 10px;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
  margin: 15px;
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
`,M=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,A=i.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

`,F=i.button`
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
`;function X(){const[e,s]=m.useState(1),r=21,l=[{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"}],o=(e-1)*r,g=o+r,c=l.slice(o,g),d=n=>{s(n)};return t.jsxs("div",{style:{height:"120vh",width:"100vw",backgroundColor:"transparent",marginTop:"-6%",marginLeft:"-2%"},children:[t.jsx(k,{children:"| Trending Anime"}),t.jsx(M,{children:c.map((n,a)=>t.jsxs(C,{imageUrl:n.imageUrl,children:[t.jsx("div",{className:"title",children:n.title}),t.jsxs("button",{className:"watch-button",href:"/player",children:[t.jsx(x,{className:"play-icon"})," Watch"]})]},a))}),t.jsx(A,{children:Array.from({length:Math.ceil(l.length/r)},(n,a)=>t.jsx(F,{onClick:()=>d(a+1),active:a+1===e,children:a+1},a))})]})}const P=i.div`
  background: transparent;
  width: 100vw; /* Set the width to 100vw */
  height: 140vh;
  padding: 1em;
  margin-left: auto;
  margin-right: 20px;
  border-top: 1px solid white;
  background: linear-gradient(to top, #000000 50%, #12104a 100%);
`,$=i.div`
  display: flex;
  align-items: center;
  font-family: "Gotham", sans-serif;
  font-size: 40px;
  color: white;
`,N=i.nav`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  color: white;
`,G=i.button`
  flex: 1;
  background: none;
  border: none;
  padding: 1em 2em;
  text-align: center;
  cursor: pointer;
  color: white;
  transition: background-color 0.3s, color 0.3s;
  height: 70px;
  font-size: 20px;
  margin: 10% 0; /* Margin values: top and bottom */

  &:hover {
    background-color: #212016;
    color: #fff;
    text-decoration: underline;
  }

  &:last-child {
    margin-right: 10%; /* Margin only for the last tab on the right side */
  }

  & + & {
    margin-left: -1px;
  }
`;class I extends p.Component{render(){return t.jsx(j,{})}}class W extends p.Component{render(){return t.jsx(T,{})}}class B extends p.Component{render(){return t.jsx(X,{})}}class L extends p.Component{constructor(s){super(s),this.state={items:[{name:"Movies",content:t.jsx(I,{})},{name:"Series",content:t.jsx(W,{})},{name:"Anime",content:t.jsx(B,{})}],activeTab:0}}handleClick(s){this.setState({activeTab:s})}render(){const{items:s,activeTab:r}=this.state,l=s.map((o,g)=>t.jsx(G,{onClick:()=>this.handleClick(g),style:r===g?{color:"deepskyblue"}:{},children:o.name},g));return t.jsx("section",{children:t.jsxs(P,{children:[t.jsx($,{children:t.jsx(N,{children:l})}),t.jsx("div",{children:s[r].content})]})})}}export{L as T};
