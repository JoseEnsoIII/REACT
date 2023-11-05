import{s as o,r as h,j as s}from"./index-1f365af0.js";import{l as N}from"./logo-c65bdb44.js";import{G as c}from"./iconBase-547c3af8.js";import{a as v,b as g,c as u,d as p}from"./index.esm-e65d10dd.js";import{a as f,b,c as j,v as C,d as i}from"./index.esm-88ac4e5a.js";import{a as T,b as d,c as m}from"./index.esm-ad694ac0.js";function I(e){return c({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M128 416h256v48H128zM256 288c17.7 0 32-14.3 32-32s-14.3-32-32-32c-3 0-6 .4-8.8 1.2l-66.7-48.7-4 3.5 48.9 66.7c-.9 2.9-1.4 6-1.4 9.3 0 17.7 14.3 32 32 32z"}},{tag:"path",attr:{d:"M256 48C141.1 48 48 141.1 48 256c0 48.3 16.5 92.7 44.1 128h58.8l4-4 22.1-22.1-22.9-22.9-22.1 22c-19.9-24.3-32.1-54-35.2-85H128v-32H96.8c3.1-31 15.3-60.7 35.2-85l22.1 22 22.9-22.9-22-22.1c24.3-19.9 54-32.1 85-35.2V128h32V96.8c31 3.1 60.7 15.3 85 35.2l-22 22.1 22.9 22.9 22.1-22c19.9 24.3 32.1 54 35.2 85H384v32h31.2c-3.1 31-15.3 60.7-35.2 85l-22.1-22-22.9 22.9 22.1 22.1 4 4h58.8c27.6-35.3 44.1-79.7 44.1-128 0-114.9-93.1-208-208-208z"}}]})(e)}function k(e){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m2 12 5 4v-3h9v-2H7V8z"}},{tag:"path",attr:{d:"M13.001 2.999a8.938 8.938 0 0 0-6.364 2.637L8.051 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051 2.051 3.08 2.051 4.95-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637c1.7-1.699 2.637-3.959 2.637-6.364s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"}}]})(e)}function S(e){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"}},{tag:"path",attr:{d:"M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"}}]})(e)}function x(e){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m10 10.414 4 4 5.707-5.707L22 11V5h-6l2.293 2.293L14 11.586l-4-4-7.707 7.707 1.414 1.414z"}}]})(e)}o.div`
  position: relative;
  margin-bottom:300%;
  margin-left:-200%;
`;o.table`
  width: 80vw;
  position: absolute;
  top: 10;
  border: 1px solid #ccc;
  background-color: #fff;
  z-index: 1;

  th {
    width: 25%;
  }
`;const L=()=>{const[e,a]=h.useState("dashboard");return s.jsxs("div",{className:"sideBar grid",children:[s.jsxs("div",{className:"logoDiv flex",children:[s.jsx("img",{src:N,alt:"Logo"}),s.jsx("h2",{children:"ReactFlix"})]}),s.jsxs("div",{className:"menuDiv",children:[s.jsx("h3",{className:"divTitle",children:"MENU"}),s.jsxs("ul",{className:"menuLists grid",children:[s.jsx("li",{className:"listItem",children:s.jsxs("a",{onClick:()=>a("dashboard"),href:"#",className:"menuLink flex ${activeTab === 'dashboard' ? 'active' : ''}`",children:[s.jsx(I,{className:"icon"}),s.jsx("span",{className:"smallText",children:"Dashboard"})]})}),s.jsx("li",{className:"listItem",children:s.jsxs("a",{onClick:()=>a("roles"),href:"#",className:"menuLink flex ${activeTab === 'roles' ? 'active' : ''}`",children:[s.jsx(v,{className:"icon"}),s.jsx("span",{className:"smallText",children:"Roles"})]})}),s.jsx("li",{className:"listItem",children:s.jsxs("a",{onClick:()=>a("ads"),href:"#",className:"menuLink flex ${activeTab === 'ads' ? 'active' : ''}`",children:[s.jsx(g,{className:"icon"}),s.jsx("span",{className:"smallText",children:"Advertisement"})]})}),s.jsx("li",{className:"listItem",children:s.jsxs("a",{onClick:()=>a("upload"),href:"#",className:"menuLink flex ${activeTab === 'upload' ? 'active' : ''}`",children:[s.jsx(f,{className:"icon"}),s.jsx("span",{className:"smallText",children:"Upload"})]})})]})]}),s.jsxs("div",{className:"settingsDiv",children:[s.jsx("h3",{className:"divTitle",children:"SETTINGS"}),s.jsxs("ul",{className:"menuLists grid",children:[s.jsx("li",{className:"listItem",children:s.jsxs("a",{onClick:()=>a("charts"),href:"#",className:"menuLink flex ${activeTab === 'charts' ? 'active' : ''}`",children:[s.jsx(T,{className:"icon"}),s.jsx("span",{className:"smallText",children:"Charts"})]})}),s.jsx("li",{className:"listItem",children:s.jsxs("a",{onClick:()=>a("users-visits"),href:"#",className:"menuLink flex ${activeTab === 'users-visits' ? 'active' : ''}`",children:[s.jsx(x,{className:"icon"}),s.jsx("span",{className:"smallText",children:"User Visits"})]})}),s.jsx("li",{className:"listItem",children:s.jsxs("a",{onClick:()=>a("trends"),href:"#",className:"menuLink flex ${activeTab === 'trends' ? 'active' : ''}`",children:[s.jsx(x,{className:"icon"}),s.jsx("span",{className:"smallText",children:"Trends"})]})}),s.jsx("li",{className:"listItem",children:s.jsxs("a",{onClick:()=>a("contact"),href:"#",className:"menuLink flex ${activeTab === 'contact' ? 'active' : ''}`",children:[s.jsx(u,{className:"icon"}),s.jsx("span",{className:"smallText",children:"Contact"})]})}),s.jsx("li",{className:"listItem",children:s.jsxs("a",{onClick:()=>a("billing"),href:"#",className:"menuLink flex ${activeTab === 'billing' ? 'active' : ''}`",children:[s.jsx(b,{className:"icon"}),s.jsx("span",{className:"smallText",children:"Billing"})]})}),s.jsx("li",{className:"listItem",children:s.jsxs("a",{onClick:()=>a("logout"),href:"/",className:"menuLink flex ${activeTab === 'logout' ? 'active' : ''}`",children:[s.jsx(k,{className:"icon"}),s.jsx("span",{className:"smallText",children:"Log Out"})]})})]})]}),s.jsxs("div",{className:"sideBarCard",children:[s.jsx(j,{className:"icon"}),s.jsxs("div",{className:"cardContent",children:[s.jsx("div",{className:"circle1"}),s.jsx("div",{className:"circle2"}),s.jsx("h3",{children:"Help Center"}),s.jsx("p",{children:"Having trouble in ReactFlix, please contact us from for more questions."}),s.jsx("button",{className:"btn",children:"Go to help center"})]})]})]})};function M(e){return c({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1"}}]})(e)}const y="/images/enso.jpg",D="/images/images (2).png",A=()=>s.jsxs("div",{className:"topSection",children:[s.jsxs("div",{className:"headerSection flex",children:[s.jsxs("div",{className:"title",children:[s.jsx("h1",{children:"Welcome to ReactFlix"}),s.jsx("p",{children:"Hello Enso, Welcome back!"})]}),s.jsxs("div",{className:"searchBar flex",children:[s.jsx("input",{type:"text",placeholder:"Search Dashboard"}),s.jsx(S,{className:"icon"})]}),s.jsxs("div",{className:"adminDiv flex",children:[s.jsx(M,{className:"icon"}),s.jsx(p,{className:"icon"}),s.jsx("div",{className:"adminImage",children:s.jsx("img",{src:y,alt:"Admin Image"})})]})]}),s.jsxs("div",{className:"cardSection flex",children:[s.jsxs("div",{className:"rightCard flex",children:[s.jsx("h1",{children:"Create and sell extraordinary products"}),s.jsx("p",{children:"The world's fast growing industry today are natural made products!"}),s.jsxs("div",{className:"buttons flex",children:[s.jsx("button",{className:"btn",children:"Explore More"}),s.jsx("button",{className:"btn transparent",children:"Top Sellers"})]}),s.jsx("div",{className:"videoDiv",children:s.jsx("video",{src:C,autoPlay:!0,loop:!0,muted:!0})})]}),s.jsx("div",{className:"leftCard flex",children:s.jsxs("div",{className:"main flex",children:[s.jsxs("div",{className:"textDiv",children:[s.jsx("h1",{children:"My Stat"}),s.jsxs("div",{className:"flex",children:[s.jsxs("span",{children:["Today ",s.jsx("br",{})," ",s.jsx("small",{children:"4 Orders"})]}),s.jsxs("span",{children:["This Month ",s.jsx("br",{})," ",s.jsx("small",{children:"175 Orders"})]})]}),s.jsxs("span",{className:"flex link",children:["Go to my orders ",s.jsx(i,{className:"icon"})]})]}),s.jsx("div",{className:"imgDiv",children:s.jsx("img",{src:D,alt:"Image Name"})}),s.jsxs("div",{className:"sideBarCard",children:[s.jsx(j,{className:"icon"}),s.jsxs("div",{className:"cardContent",children:[s.jsx("div",{className:"circle1"}),s.jsx("div",{className:"circle2"}),s.jsx("h3",{children:"Help Center"}),s.jsx("p",{children:"Having trouble in Planti, please contact us from for more questions."}),s.jsx("button",{className:"btn",children:"Go to help center"})]})]})]})})]})]});const r="/images/images (1).png",B="/images/gt.jpg",l="/images/aldi.jpg",n="/images/dadang.jpg",t="/images/gilbert.jpg",w=()=>s.jsxs("div",{className:"lisitingSection",children:[s.jsxs("div",{className:"heading flex",children:[s.jsx("h1",{children:"My Listings"}),s.jsxs("button",{className:"btn flex",children:["See All ",s.jsx(i,{className:"icon"})]})]}),s.jsxs("div",{className:"secContainer flex",children:[s.jsxs("div",{className:"singleItem",children:[s.jsx(d,{className:"icon"}),s.jsx("img",{src:B,alt:"Image Name"}),s.jsx("h3",{children:"Movies"})]}),s.jsxs("div",{className:"singleItem",children:[s.jsx(m,{className:"icon"}),s.jsx("img",{src:r,alt:"Image Name"}),s.jsx("h3",{children:"Tv Shows"})]}),s.jsxs("div",{className:"singleItem",children:[s.jsx(m,{className:"icon"}),s.jsx("img",{src:r,alt:"Image Name"}),s.jsx("h3",{children:"Anime"})]}),s.jsxs("div",{className:"singleItem",children:[s.jsx(d,{className:"icon"}),s.jsx("img",{src:r,alt:"Image Name"}),s.jsx("h3",{children:"Spider Plant"})]})]}),s.jsxs("div",{className:"sellers flex",children:[s.jsxs("div",{className:"topSellers",children:[s.jsxs("div",{className:"heading flex",children:[s.jsx("h3",{children:"Top Sellers"}),s.jsxs("button",{className:"btn flex",children:["See All ",s.jsx(i,{className:"icon"})]})]}),s.jsxs("div",{className:"card flex",children:[s.jsxs("div",{className:"users",children:[s.jsx("img",{src:l,alt:"User Image"}),s.jsx("img",{src:n,alt:"User Image"}),s.jsx("img",{src:t,alt:"User Image"}),s.jsx("img",{src:l,alt:"User Image"})]}),s.jsx("div",{className:"cardText",children:s.jsxs("span",{children:["14.556 Plant sold ",s.jsx("br",{}),s.jsxs("small",{children:["21 Sellers ",s.jsx("span",{className:"date",children:"7 Days"})]})]})})]})]}),s.jsxs("div",{className:"featuredSellers",children:[s.jsxs("div",{className:"heading flex",children:[s.jsx("h3",{children:"Featured Sellers"}),s.jsxs("button",{className:"btn flex",children:["See All ",s.jsx(i,{className:"icon"})]})]}),s.jsxs("div",{className:"card flex",children:[s.jsxs("div",{className:"users",children:[s.jsx("img",{src:t,alt:"User Image"}),s.jsx("img",{src:l,alt:"User Image"}),s.jsx("img",{src:l,alt:"User Image"}),s.jsx("img",{src:n,alt:"User Image"})]}),s.jsx("div",{className:"cardText",children:s.jsxs("span",{children:["28,556 Plant sold ",s.jsx("br",{}),s.jsxs("small",{children:["26 Sellers ",s.jsx("span",{className:"date",children:"31 Days"})]})]})})]})]})]})]});const O=()=>s.jsxs("div",{className:"activitySection",children:[s.jsxs("div",{className:"heading flex",children:[s.jsx("h1",{children:"Recent Activity"}),s.jsxs("button",{className:"btn flex",children:["See All",s.jsx(i,{className:"icon"})]})]}),s.jsxs("div",{className:"secContainer grid",children:[s.jsxs("div",{className:"singleCustomer flex",children:[s.jsx("img",{src:l,alt:"Customer Image"}),s.jsxs("div",{className:"customerDetails",children:[s.jsx("span",{className:"name",children:"JoseEnso"}),s.jsx("small",{children:"Ordered a new plant"})]}),s.jsx("div",{className:"duration",children:"2 min ago"})]}),s.jsxs("div",{className:"singleCustomer flex",children:[s.jsx("img",{src:n,alt:"Customer Image"}),s.jsxs("div",{className:"customerDetails",children:[s.jsx("span",{className:"name",children:"JoseEnso"}),s.jsx("small",{children:"Ordered a new plant"})]}),s.jsx("div",{className:"duration",children:"2 min ago"})]}),s.jsxs("div",{className:"singleCustomer flex",children:[s.jsx("img",{src:t,alt:"Customer Image"}),s.jsxs("div",{className:"customerDetails",children:[s.jsx("span",{className:"name",children:"JoseEnso"}),s.jsx("small",{children:"Ordered a new plant"})]}),s.jsx("div",{className:"duration",children:"2 min ago"})]}),s.jsxs("div",{className:"singleCustomer flex",children:[s.jsx("img",{src:l,alt:"Customer Image"}),s.jsxs("div",{className:"customerDetails",children:[s.jsx("span",{className:"name",children:"JoseEnso"}),s.jsx("small",{children:"Ordered a new plant"})]}),s.jsx("div",{className:"duration",children:"2 min ago"})]}),s.jsxs("div",{className:"singleCustomer flex",children:[s.jsx("img",{src:n,alt:"Customer Image"}),s.jsxs("div",{className:"customerDetails",children:[s.jsx("span",{className:"name",children:"JoseEnso"}),s.jsx("small",{children:"Ordered a new plant"})]}),s.jsx("div",{className:"duration",children:"2 min ago"})]})]})]}),U=()=>s.jsxs("div",{className:"mainContent",children:[s.jsx(A,{}),s.jsxs("div",{className:"bottom flex",children:[s.jsx(w,{}),s.jsx(O,{})]})]}),F=()=>{const[e,a]=h.useState("dashboard");return s.jsx("div",{className:"dashboard flex",children:s.jsxs("div",{className:"dashboardContainer flex",children:[s.jsx(L,{setActiveTab:a}),e==="dashboard"&&s.jsx(U,{}),e==="roles"&&s.jsx(RolesContent,{}),e==="ads"&&s.jsx(AdsContent,{}),e==="upload"&&s.jsx(UploadContent,{handleUploadClick}),e==="settings"&&s.jsx(SettingsContent,{})]})})};export{F as default};