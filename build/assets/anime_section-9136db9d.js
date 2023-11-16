import{s as p,r as x,j as e}from"./index-0c4216c9.js";import{a as l}from"./axios-3a76d256.js";import{e as f}from"./index.esm-01fc7427.js";const u=p.h1`
  text-align: center;
  font-family: 'Gotham', sans-serif;
  color: white;
  font-size: 30px;
  margin-left: -80%;
  margin-top:5%;
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
`,b=p.div`
  position: relative;
  width: 150px;
  height: 200px;
  background: url(${n=>n.imageUrl}) no-repeat center/cover;
  border-radius: 10px;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
  margin: 15px 15px 0 15px; /* Updated margin to include only top and left/right margins */
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
  
`,y=p.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%; /* Set the width to 100% by default */
  
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
`,v=p.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0%;

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
`,z=p.div`
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
`,S=p.button`
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

  ${n=>n.active&&`
    background-color: transparent;
    color: blue;
  `}

`;function k(){const[n,h]=x.useState(1),[s,m]=x.useState([]),[d,a]=x.useState(16);x.useEffect(()=>{const i=()=>{const t=window.innerWidth;t<320?a(8):t<400?a(12):t<520?a(9):t<640?a(12):t<768||t<992?a(25):t<1200?a(20):a(24)};return i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]),x.useEffect(()=>{(async()=>{try{const t=await l.get("https://api.themoviedb.org/3/tv/on_the_air?api_key=b2d47bc45b9596fab31b362d1db590f9");m(t.data.results)}catch(t){console.error(t)}})()},[]);const r=s.map(i=>({title:i.title,imageUrl:`https://image.tmdb.org/t/p/w500${i.poster_path}`,url:"#"}))||[],o=(n-1)*d,w=o+d,g=r.slice(o,w),c=i=>{h(i)};return e.jsxs(y,{style:{height:"150vh",width:"100vw",backgroundColor:"black",marginTop:"-40px"},children:[e.jsx(u,{children:"| New Anime "}),e.jsx(v,{children:g.map((i,t)=>e.jsx("a",{href:i.url,children:e.jsxs(b,{imageUrl:i.imageUrl,children:[e.jsx("div",{className:"title",children:i.title}),e.jsxs("button",{className:"watch-button",children:[e.jsx(f,{className:"play-icon"})," Watch"]})]})},t))}),e.jsx(z,{children:Array.from({length:Math.ceil(r.length/d)},(i,t)=>e.jsx(S,{onClick:()=>c(t+1),active:t+1===n,children:t+1},t))})]})}export{k as C};
