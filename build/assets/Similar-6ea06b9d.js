import{s as i,r as h,j as t}from"./index-0cbab773.js";import{d}from"./index.esm-ad064f6f.js";const m=i.h1`
  text-align: center;
  font-family: 'Gotham', sans-serif;
  color: black;
  font-size: 40px; /* Set the font size */
  margin-left: -70%;
`,x=i.div`
  position: relative;
  width: 150px;
  height: 200px;
  background: url(${e=>e.imageUrl}) no-repeat center/cover;
  border-radius: 10px;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
  margin: 5px;
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
      font-size: 15px;
      color:red;
      margin-bottom:-13px;
    }
  }

  .title {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    font-size: 20px;
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
`,u=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,w=i.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

`,y=i.button`
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
`;function v(){const[e,l]=h.useState(1),s=18,a=[{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg",url:"/player"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg",url:"/player"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg",url:"/player"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg",url:"/player"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg",url:"/player"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg",url:"/player"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg",url:"/player"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg",url:"/player"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg",url:"/player"},{title:"Stranger Things",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg",url:"/player"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg",url:"/player"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg",url:"/player"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg",url:"/player"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg",url:"/player"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg",url:"/player"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg",url:"/player"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg",url:"/player"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg",url:"/player"}],o=(e-1)*s,p=o+s,g=a.slice(o,p),c=n=>{l(n)};return t.jsxs("div",{style:{height:"120vh",width:"100vw",backgroundColor:"white"},children:[t.jsx(m,{children:"| Similar "}),t.jsx(u,{children:g.map((n,r)=>t.jsxs("a",{href:n.url,children:[" ",t.jsxs(x,{imageUrl:n.imageUrl,children:[t.jsx("div",{className:"title",children:n.title}),t.jsxs("button",{className:"watch-button",children:[t.jsx(d,{className:"play-icon"})," Watch"]})]})]},r))}),t.jsx(w,{children:Array.from({length:Math.ceil(a.length/s)},(n,r)=>t.jsx(y,{onClick:()=>c(r+1),active:r+1===e,children:r+1},r))})]})}export{v as C};
