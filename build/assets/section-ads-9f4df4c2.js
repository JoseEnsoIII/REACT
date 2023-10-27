import{s as a,r as m,j as t,R as p}from"./index-aab812e7.js";import{d as x}from"./index.esm-1aa73e51.js";const h=a.h1`
  text-align: center;
  font-fapeacemakerly: 'Gotham', sans-serif;
  color: white;
  font-size: 30px; /* Set the font size */
  margin-left: -65%;
  font-weight:bold;
`,b=a.div`
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
`,f=a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,u=a.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

`,w=a.button`
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
`;function j(){const[e,s]=m.useState(1),r=21,o=[{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"},{title:"Saw X",imageUrl:"https://img.sflix.to/xxrz/250x400/224/d7/18/d718293c00206ab88508da84cb00456f/d718293c00206ab88508da84cb00456f.jpg"}],l=(e-1)*r,g=l+r,c=o.slice(l,g),d=n=>{s(n)};return t.jsxs("div",{style:{height:"120vh",width:"100vw",backgroundColor:"transparent",marginTop:"-6%",marginLeft:"-2%"},children:[t.jsx(h,{className:"card-heading",children:"| Trending Movies"}),t.jsx(f,{children:c.map((n,i)=>t.jsxs(b,{imageUrl:n.imageUrl,children:[t.jsx("div",{className:"title",children:n.title}),t.jsxs("button",{className:"watch-button",href:"/player",children:[t.jsx(x,{className:"play-icon"})," Watch"]})]},i))}),t.jsx(u,{children:Array.from({length:Math.ceil(o.length/r)},(n,i)=>t.jsx(w,{onClick:()=>d(i+1),active:i+1===e,children:i+1},i))})]})}const U=a.h1`
  text-align: center;
  font-fapeacemakerly: 'Gotham', sans-serif;
  color: white;
  font-size: 30px; /* Set the font size */
  margin-left: -65%;
  font-weight:bold;
`,v=a.div`
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
`,S=a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,y=a.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

`,z=a.button`
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
`;function k(){const[e,s]=m.useState(1),r=21,o=[{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"}],l=(e-1)*r,g=l+r,c=o.slice(l,g),d=n=>{s(n)};return t.jsxs("div",{style:{height:"120vh",width:"100vw",backgroundColor:"transparent",marginTop:"-6%",marginLeft:"-2%"},children:[t.jsx(U,{children:"| Trending Series"}),t.jsx(S,{children:c.map((n,i)=>t.jsxs(v,{imageUrl:n.imageUrl,children:[t.jsx("div",{className:"title",children:n.title}),t.jsxs("button",{className:"watch-button",href:"/player",children:[t.jsx(x,{className:"play-icon"})," Watch"]})]},i))}),t.jsx(y,{children:Array.from({length:Math.ceil(o.length/r)},(n,i)=>t.jsx(z,{onClick:()=>d(i+1),active:i+1===e,children:i+1},i))})]})}const T=a.h1`
  text-align: center;
  font-fapeacemakerly: 'Gotham', sans-serif;
  color: white;
  font-size: 30px; /* Set the font size */
  margin-left: -65%;
  font-weight:bold;
`,A=a.div`
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
`,C=a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,M=a.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

`,F=a.button`
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
`;function X(){const[e,s]=m.useState(1),r=21,o=[{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"},{title:"FullMetal Alchemist",imageUrl:"images/fmab.jpg"}],l=(e-1)*r,g=l+r,c=o.slice(l,g),d=n=>{s(n)};return t.jsxs("div",{style:{height:"120vh",width:"100vw",backgroundColor:"transparent",marginTop:"-6%",marginLeft:"-2%"},children:[t.jsx(T,{children:"| Trending Anime"}),t.jsx(C,{children:c.map((n,i)=>t.jsxs(A,{imageUrl:n.imageUrl,children:[t.jsx("div",{className:"title",children:n.title}),t.jsxs("button",{className:"watch-button",href:"/player",children:[t.jsx(x,{className:"play-icon"})," Watch"]})]},i))}),t.jsx(M,{children:Array.from({length:Math.ceil(o.length/r)},(n,i)=>t.jsx(F,{onClick:()=>d(i+1),active:i+1===e,children:i+1},i))})]})}const P=a.div`
  background: transparent;
  width: 100vw; /* Set the width to 100vw */
  height: 140vh;
  padding: 1em;
  margin-left: auto;
  margin-right: 20px;
  border-top: 1px solid white;
  background: linear-gradient(to top, #000000 50%, #12104a 100%);
`,$=a.div`
  display: flex;
  align-items: center;
  font-family: "Gotham", sans-serif;
  font-size: 40px;
  color: white;
`,N=a.nav`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  color: white;
`,G=a.button`
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
`;class I extends p.Component{render(){return t.jsx(j,{})}}class W extends p.Component{render(){return t.jsx(k,{})}}class B extends p.Component{render(){return t.jsx(X,{})}}class E extends p.Component{constructor(s){super(s),this.state={items:[{name:"Movies",content:t.jsx(I,{})},{name:"Series",content:t.jsx(W,{})},{name:"Anime",content:t.jsx(B,{})}],activeTab:0}}handleClick(s){this.setState({activeTab:s})}render(){const{items:s,activeTab:r}=this.state,o=s.map((l,g)=>t.jsx(G,{onClick:()=>this.handleClick(g),style:r===g?{color:"deepskyblue"}:{},children:l.name},g));return t.jsx("section",{children:t.jsxs(P,{children:[t.jsx($,{children:t.jsx(N,{children:o})}),t.jsx("div",{children:s[r].content})]})})}}const V=()=>t.jsx(_,{children:t.jsx(H,{children:t.jsx(D,{href:"/",target:"_blank",style:{marginTop:"150px"},children:"Visit Now"})})}),_=a.section`
  background: url('https://mjminnovations.com/wp-content/uploads/2016/10/Management_Solutions-1.png') center/cover no-repeat; /* Use the image as the background */
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: -20px;
`,H=a.div`
  background-color: transparent;
  padding: 20px;
  border-radius: 5px;
`,D=a.button`
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
`;export{V as S,E as T};
