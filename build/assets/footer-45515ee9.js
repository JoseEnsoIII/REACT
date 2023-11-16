import{s as n,j as e}from"./index-0a318fa9.js";import{F as t,c,b as x,h as d}from"./index.esm-2a7cc156.js";const h="/images/op1.jpg",p=n.div`
  margin-top: -60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 5px;
  background-image: url(${h});
  background-size: cover;
  background-position: 80% center;
  background-repeat: no-repeat;
  background-color: black;

  @media (max-width: 640px) {
    flex-direction: column;
    width: 100%;
    height: 105vh;
    display: flex;
    flex-wrap: wrap;
    margin-top:-45%;
    
  }
`,r=n.div`
  flex: 1;
  max-width: calc(20% - 20px);
  padding: 10px;
  margin: 10px;
  font-size: 18px;

  @media (max-width: 640px) {
    margin-top: -10px;
    margin-right:6px;
    
  }
  &:first-child {
    margin-left: 30px;

    @media (max-width: 640px) {
      margin-left: 5px;
    }
  }

  h2 {
    font-size: 30px;
    margin-top: 15px;
    color: black;

    @media (max-width: 640px) {
      font-size: 10px;
    }
  }
  h3 {
    font-size: 18px;
    margin-top: 15px;
    color: black;

    @media (max-width: 640px) {
      font-size: 10px;
      margin-top: 15px;
      color: black;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 15px;
    color: black;

    @media (max-width: 640px) {
      margin-bottom: 3px;
      font-size: 10px;
    }
  }

  p {
    color: black;

    @media (max-width: 640px) {
      color: black;
      font-size: 10px;
    }
  }

  a {
    text-decoration: none;
    color: black;

    &:hover {
      text-decoration: underline green;

      @media (max-width: 640px) { 
         font-size: 10px;
        &:hover {
          text-decoration: underline green;}
      
      }
    }
  }
`,m=n.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 640px) {
    margin:5px;
  }
`,i=n.li`
  font-size: 20px;
  flex: 1;
  @media (max-width: 640px) {
    font-size: 10px;
  }
  &:first-child {
    margin-top: 0;
  }
`;function g(){const a="https://www.facebook.com/",s="https://twitter.com/",l="https://www.instagram.com/",o="https://www.linkedin.com/";return e.jsxs(p,{children:[e.jsxs(r,{children:[e.jsx("h2",{children:e.jsx("strong",{children:"ReactFlix"})}),e.jsx("p",{children:"is a Free Movies streaming app with zero ads. We let you watch movies online without having to register or pay, with over 10,000 movies and TV-Series. You can also download full movies from MoviesCloud and watch them later if you want"})]}),e.jsxs(r,{children:[e.jsx("h3",{children:e.jsx("strong",{children:"ABOUT"})}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"/about",children:"About ReactFlix"})}),e.jsx("li",{children:e.jsx("a",{href:"/term",children:"Terms & Conditions"})}),e.jsx("li",{children:e.jsx("a",{href:"/legal",children:"Legal"})}),e.jsx("li",{children:e.jsx("a",{href:"/contact",children:"Contact us:"})}),e.jsx("li",{children:e.jsx("a",{href:"/faq",children:"FAQs"})})]})]}),e.jsxs(r,{children:[e.jsx("h3",{children:e.jsx("strong",{children:"SHOW"})}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"/movie",children:"Movies"})}),e.jsx("li",{children:e.jsx("a",{href:"/series",children:"TV Shows"})}),e.jsx("li",{children:e.jsx("a",{href:"/anime",children:"Anime"})})]})]}),e.jsxs(r,{children:[e.jsx("h3",{children:e.jsx("strong",{children:"GENRE"})}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"/horror",children:"Horror"})}),e.jsx("li",{children:e.jsx("a",{href:"/sci-fi",children:"Sci-Fi"})}),e.jsx("li",{children:e.jsx("a",{href:"/romance",children:"Romance"})}),e.jsx("li",{children:e.jsx("a",{href:"/actions",children:"Actions"})}),e.jsx("li",{children:e.jsx("a",{href:"/adventure",children:"Adventure"})})]})]}),e.jsxs(r,{children:[e.jsx("h3",{children:e.jsx("strong",{children:"SOCIAL MEDIA"})}),e.jsxs(m,{children:[e.jsx(i,{children:e.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:e.jsx(t,{})})}),e.jsx(i,{children:e.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:e.jsx(c,{})})}),e.jsx(i,{children:e.jsx("a",{href:l,target:"_blank",rel:"noopener noreferrer",children:e.jsx(x,{})})}),e.jsx("br",{}),e.jsx(i,{children:e.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer",children:e.jsx(d,{})})})]})]})]})}export{g as A};
