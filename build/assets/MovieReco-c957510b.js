import{j as e,r as m}from"./index-0cbab773.js";import{T as p}from"./TabbedHome-fef55ace.js";import{S as x}from"./sidenav-fd7d1a2c.js";import{S as g}from"./section-ads-2f728872.js";import{N as j}from"./navbar1-7fc73374.js";import{S as o}from"./index-d5b33ede.js";import{d as u,A as f}from"./index.esm-9df23cd0.js";import{C as y}from"./Similar-6ea06b9d.js";import{A as S}from"./footer-4556424b.js";import"./index.esm-ad064f6f.js";import"./iconBase-a584e5dc.js";const h=({imageSrc:i,text:t})=>e.jsx("div",{children:e.jsx("img",{src:i,alt:t})});class v extends m.Component{render(){const t={dots:!0,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1,vertical:!1},a={top:"90%",color:"black"},l={height:"500px",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative"},s={position:"absolute",display:"flex",alignItems:"center",top:"45%",color:"black"},n={padding:"10px 20px",backgroundColor:"rgba(0, 0, 0, 0.7)",color:"white",cursor:"pointer"},c=[{imageSrc:"/images/peacemaker.jpg",playLink:"/player",trailerLink:"/trailer/spidey",text:"Peacemaker",genre:"Action",genreLink:"/genre/action"},{imageSrc:"/images/meg2.jpg",playLink:"/player",trailerLink:"/trailer/transformer",text:"One Piece: Live Action",genre:"Adventure",genreLink:"/genre/adventure"}];return e.jsxs("div",{style:l,children:[e.jsx(o,{...t,children:c.map((r,d)=>e.jsx(h,{imageSrc:r.imageSrc,text:r.text,genre:r.genre,genreLink:r.genreLink},d))}),e.jsx("div",{style:{...s,left:0},children:e.jsx("div",{style:n,children:e.jsx(u,{size:20})})}),e.jsx("div",{style:{...s,right:0},children:e.jsx("div",{style:n,children:e.jsx(f,{size:20})})}),e.jsx("div",{className:"custom-dot-container",style:a,children:e.jsx(o,{...t})})]})}}function R(){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[e.jsx(j,{}),e.jsx(x,{}),e.jsxs("div",{style:{flex:1},children:[e.jsx(v,{}),e.jsx(p,{}),e.jsx(g,{}),e.jsx(y,{})]}),e.jsx(S,{})]})}export{R as default};
