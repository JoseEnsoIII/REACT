import{s as n,r as d,j as t,R as m}from"./index-1f365af0.js";import{d as x}from"./index.esm-1ddb6421.js";const h=n.h1`
  text-align: center;
  font-fapeacemakerly: 'Gotham', sans-serif;
  color: white;
  font-size: 30px; /* Set the font size */
  margin-left: -65%;
  font-weight:bold;
`,b=n.div`
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
`,f=n.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,u=n.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

`,w=n.button`
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
`;function j(){const[e,s]=d.useState(1),r=21,o=[{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"}],l=(e-1)*r,g=l+r,c=o.slice(l,g),p=i=>{s(i)};return t.jsxs("div",{style:{height:"120vh",width:"100vw",backgroundColor:"transparent",marginTop:"-6%",marginLeft:"-2%"},children:[t.jsx(h,{className:"card-heading",children:"| Trending Movies"}),t.jsx(f,{children:c.map((i,a)=>t.jsxs(b,{imageUrl:i.imageUrl,children:[t.jsx("div",{className:"title",children:i.title}),t.jsxs("button",{className:"watch-button",href:"/player",children:[t.jsx(x,{className:"play-icon"})," Watch"]})]},a))}),t.jsx(u,{children:Array.from({length:Math.ceil(o.length/r)},(i,a)=>t.jsx(w,{onClick:()=>p(a+1),active:a+1===e,children:a+1},a))})]})}const U=n.h1`
  text-align: center;
  font-fapeacemakerly: 'Gotham', sans-serif;
  color: white;
  font-size: 30px; /* Set the font size */
  margin-left: -65%;
  font-weight:bold;
`,v=n.div`
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
`,S=n.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,y=n.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

`,k=n.button`
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
`;function z(){const[e,s]=d.useState(1),r=21,o=[{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"}],l=(e-1)*r,g=l+r,c=o.slice(l,g),p=i=>{s(i)};return t.jsxs("div",{style:{height:"120vh",width:"100vw",backgroundColor:"transparent",marginTop:"-6%",marginLeft:"-2%"},children:[t.jsx(U,{children:"| Trending Series"}),t.jsx(S,{children:c.map((i,a)=>t.jsxs(v,{imageUrl:i.imageUrl,children:[t.jsx("div",{className:"title",children:i.title}),t.jsxs("button",{className:"watch-button",href:"/player",children:[t.jsx(x,{className:"play-icon"})," Watch"]})]},a))}),t.jsx(y,{children:Array.from({length:Math.ceil(o.length/r)},(i,a)=>t.jsx(k,{onClick:()=>p(a+1),active:a+1===e,children:a+1},a))})]})}const T=n.h1`
  text-align: center;
  font-fapeacemakerly: 'Gotham', sans-serif;
  color: white;
  font-size: 30px; /* Set the font size */
  margin-left: -65%;
  font-weight:bold;
`,C=n.div`
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
`,A=n.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,M=n.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

`,F=n.button`
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
`;function X(){const[e,s]=d.useState(1),r=21,o=[{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"}],l=(e-1)*r,g=l+r,c=o.slice(l,g),p=i=>{s(i)};return t.jsxs("div",{style:{height:"120vh",width:"100vw",backgroundColor:"transparent",marginTop:"-6%",marginLeft:"-2%"},children:[t.jsx(T,{children:"| Trending Anime"}),t.jsx(A,{children:c.map((i,a)=>t.jsxs(C,{imageUrl:i.imageUrl,children:[t.jsx("div",{className:"title",children:i.title}),t.jsxs("button",{className:"watch-button",href:"/player",children:[t.jsx(x,{className:"play-icon"})," Watch"]})]},a))}),t.jsx(M,{children:Array.from({length:Math.ceil(o.length/r)},(i,a)=>t.jsx(F,{onClick:()=>p(a+1),active:a+1===e,children:a+1},a))})]})}const P=n.div`
  background: transparent;
  width: 100vw; /* Set the width to 100vw */
  height: 140vh;
  padding: 1em;
  margin-left: auto;
  margin-right: 20px;
  border-top: 1px solid white;
  background: linear-gradient(to top, #000000 50%, #12104a 100%);
`,$=n.div`
  display: flex;
  align-items: center;
  font-family: "Gotham", sans-serif;
  font-size: 40px;
  color: white;
`,N=n.nav`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  color: white;
`,G=n.button`
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
`;class I extends m.Component{render(){return t.jsx(j,{})}}class W extends m.Component{render(){return t.jsx(z,{})}}class _ extends m.Component{render(){return t.jsx(X,{})}}class O extends m.Component{constructor(s){super(s),this.state={items:[{name:"Movies",content:t.jsx(I,{})},{name:"Series",content:t.jsx(W,{})},{name:"Anime",content:t.jsx(_,{})}],activeTab:0}}handleClick(s){this.setState({activeTab:s})}render(){const{items:s,activeTab:r}=this.state,o=s.map((l,g)=>t.jsx(G,{onClick:()=>this.handleClick(g),style:r===g?{color:"deepskyblue"}:{},children:l.name},g));return t.jsx("section",{children:t.jsxs(P,{children:[t.jsx($,{children:t.jsx(N,{children:o})}),t.jsx("div",{children:s[r].content})]})})}}const B=n.h1`
  text-align: center;
  font-fapeacemakerly: 'Gotham', sans-serif;
  color: white;
  font-size: 30px; /* Set the font size */
  margin-left: -75%;
  font-weight:bold;
`,D=n.div`
  position: relative;
  width: 150px;
  height: 200px;
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
`,H=n.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,L=n.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

`,R=n.button`
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
`;function Q(){const[e,s]=d.useState(1),r=16,o=[{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"}],l=(e-1)*r,g=l+r,c=o.slice(l,g),p=i=>{s(i)};return t.jsxs("div",{style:{backgroundColor:"black",height:"95vh",marginTop:"-15px",width:"100vw"},children:[t.jsx(B,{children:"| New Animes"}),t.jsx(H,{children:c.map((i,a)=>t.jsxs(D,{imageUrl:i.imageUrl,children:[t.jsx("div",{className:"title",children:i.title}),t.jsxs("button",{className:"watch-button",href:"/player",children:[t.jsx(x,{className:"play-icon"})," Watch"]})]},a))}),t.jsx(L,{children:Array.from({length:Math.ceil(o.length/r)},(i,a)=>t.jsx(R,{onClick:()=>p(a+1),active:a+1===e,children:a+1},a))})]})}const Y=()=>t.jsx(E,{children:t.jsx(V,{children:t.jsx(q,{href:"/",target:"_blank",style:{marginTop:"200px"},children:t.jsx("a",{href:"/",target:"_blank",style:{color:"black",textDecoration:"none"},children:"Visit Now"})})})}),E=n.section`
  background: url('https://mjminnovations.com/wp-content/uploads/2016/10/Management_Solutions-1.png') center/cover no-repeat; /* Use the image as the background */
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: -20px;
`,V=n.div`
  background-color: transparent;
  padding: 20px;
  border-radius: 5px;
`,q=n.button`
display: inline-block;
padding: 10px 10px;
border: 2px solid #000; /* Add a 2px border */
border-radius: 15px; /* Add border radius */
font-family: 'Gotham', sans-serif; /* Use the Gotham font */
text-decoration: none;
color: #000; /* Set the text color */
font-weight:bold;
font-size:15px;
margin:10px;
`;export{Q as A,Y as S,O as T};
