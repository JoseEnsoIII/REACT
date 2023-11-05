import{s as r,j as e}from"./index-1f365af0.js";import{F as l,c,a as h,j as d}from"./index.esm-1ddb6421.js";const x="/images/op1.jpg",m=r.div`
  margin-top: -60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 5px;
  /* Add background image styles */
  background-image: url(${x});
  background-size: cover;
  background-position: 80% center; /* Move the image to the right end and center vertically */
  background-repeat: no-repeat;
  background-color: black;

  @media (max-width: 300px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: auto;
    height: 250px;
  }

  @media (min-width: 600px) and (max-width: 800px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    height: 130px;
  }
`,i=r.div`
  flex: 1;
  max-width: calc(20% - 20px);
  padding: 10px;
  margin: 10px;
  font-size: 18px; /* Default font size */

  &:first-child {
    margin-left: 30px; /* Add left margin to the first column */
  }

  h2,
  h3 {
    font-size: 18px;
    margin-top: 15px;
    color: black;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 15px;
    color: black;
  }

  p {
    color: black;
  }

  a {
    text-decoration: none;
    color: black;

    &:hover {
      text-decoration: underline green;
    }
  }

  @media (max-width: 400px) and (min-width: 300px) {
    max-width: 100%; /* Remove max-width to fit all columns in the same line */
    width: 100%;
    margin: -10px;

    h2 {
      font-size: 5px; /* Adjust the font size for h2 on smaller screens */
      margin-top: 10px;
    }
    h3 {
      font-size: 6px; /* Adjust font size for h2 and h3 on smaller screens */
      margin-bottom: -25px;
      margin-top: 10px;

      &:last-child {
        margin-right: 20px; /* Corrected the property name */
      }
    }

    li {
      margin-bottom: -10px;
    }
    p {
      font-size: 5px; /* Adjust font size for p on smaller screens */
    }
    a {
      font-size: 5px;
    }
  }
  @media (min-width: 600px) and (max-width: 800px) {
    max-width: 100%;
    width: 100%;
    margin: -10px;
    margin-right: -15px;

    h2 {
      font-size: 5px;
      margin-top: 10px;
    }
    h3 {
      font-size: 10px;
      margin-bottom: -25px;
      margin-top: 10px;

      &:nth-child(2) {
        margin-right: 5px;
      }
    }

    li {
      margin-bottom: -10px;
    }
    p {
      font-size: 6px;
    }
    a {
      font-size: 5px;
    }
  }
`,p=r.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex; /* Display icons in a row */
  flex-wrap: wrap; /* Allow icons to wrap to the next line on smaller screens */
  justify-content: space-between; /* Create two columns */

  @media (max-width: 400px) {
    flex-direction: row; /* Display icons in a single row on very small screens */
    justify-content: center; /* Center-align icons horizontally */
  }

  @media (min-width: 600px) and (max-width: 800px) {
    flex-direction: row; /* Display icons in a single row on medium screens */
    justify-content: center; /* Center-align icons horizontally */
  }
`,n=r.li`
  font-size: 20px;
  flex: 1; /* Distribute icons equally in the two columns */

  @media (max-width: 400px) {
    margin-bottom: 5px;
    margin-right: 5px; /* Adjust spacing between icons on very small screens */
  }

  &:first-child {
    margin-top: 0; /* Remove margin-top for the first social media icon */
  }

  @media (min-width: 600px) and (max-width: 800px) {
    margin-right: 5px; /* Adjust spacing between icons on medium screens */
  }
`;function f(){const t="https://www.facebook.com/",s="https://twitter.com/",o="https://www.instagram.com/",a="https://www.linkedin.com/";return e.jsxs(m,{children:[e.jsxs(i,{children:[e.jsx("h2",{style:{fontSize:"30px"},children:e.jsx("strong",{children:"ReactFlix"})}),e.jsxs("p",{children:[e.jsx("strong",{children:"ReactFlix"})," is a Free Movies streaming app with zero ads. We let you watch movies online without having to register or pay, with over 10,000 movies and TV-Series. You can also download full movies from MoviesCloud and watch them later if you want"]})]}),e.jsxs(i,{children:[e.jsx("h3",{children:e.jsx("strong",{children:"ABOUT"})}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"/about",children:"About ReactFlix"})}),e.jsx("li",{children:e.jsx("a",{href:"/term",children:"Terms & Conditions"})}),e.jsx("li",{children:e.jsx("a",{href:"/legal",children:"Legal"})}),e.jsx("li",{children:e.jsx("a",{href:"/contact",children:"Contact us:"})}),e.jsx("li",{children:e.jsx("a",{href:"/faq",children:"FAQs"})})]})]}),e.jsxs(i,{children:[e.jsx("h3",{children:e.jsx("strong",{children:"SHOW"})}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"/movie",children:"Movies"})}),e.jsx("li",{children:e.jsx("a",{href:"/series",children:"TV Shows"})}),e.jsx("li",{children:e.jsx("a",{href:"/anime",children:"Anime"})})]})]}),e.jsxs(i,{children:[e.jsx("h3",{children:e.jsx("strong",{children:"GENRE"})}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"/horror",children:"Horror"})}),e.jsx("li",{children:e.jsx("a",{href:"/sci-fi",children:"Sci-Fi"})}),e.jsx("li",{children:e.jsx("a",{href:"/romance",children:"Romance"})}),e.jsx("li",{children:e.jsx("a",{href:"/actions",children:"Actions"})}),e.jsx("li",{children:e.jsx("a",{href:"/adventure",children:"Adventure"})})]})]}),e.jsxs(i,{children:[e.jsx("h3",{children:e.jsx("strong",{children:"SOCIAL MEDIA"})}),e.jsxs(p,{children:[e.jsx(n,{children:e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:e.jsx(l,{})})}),e.jsx(n,{children:e.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:e.jsx(c,{})})}),e.jsx(n,{children:e.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer",children:e.jsx(h,{})})}),e.jsx("br",{}),e.jsx(n,{children:e.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:e.jsx(d,{})})})]})]}),e.jsxs(i,{children:[e.jsx("h3",{children:e.jsx("strong",{children:"CREDIT"})}),e.jsx("ul",{children:e.jsx("li",{children:e.jsx("a",{href:"/credit",children:"About My Team"})})})]})]})}export{f as A};
