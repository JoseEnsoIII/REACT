import{s as a,r,j as s}from"./index-a520d23b.js";import{a as p}from"./axios-3a76d256.js";const d=a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`,n=a.div`
  width: 200px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
  }

  h3 {
    margin-top: 10px;
    font-size: 16px;
  }
`,h=()=>{const[i,o]=r.useState([]);return r.useEffect(()=>{(async()=>{try{const e=await p.get("https://api.themoviedb.org/3/movie/popular?api_key=b2d47bc45b9596fab31b362d1db590f9");o(e.data.results)}catch(e){console.error(e)}})()},[]),s.jsx(d,{children:i.map(t=>s.jsxs(n,{children:[s.jsx("img",{src:`https://image.tmdb.org/t/p/w500${t.poster_path}`,alt:t.title}),s.jsx("h3",{children:t.title})]},t.id))})};export{h as default};
