import{R as q,r as o,j as r,s as x}from"./index-c61d7640.js";import{F as te,f as xt,a as mt,b as bt,c as vt,d as yt,e as wt}from"./navbar1-41016fbc.js";import{e as Re}from"./index.esm-8b7b8eba.js";var Ct=Object.defineProperty,kt=Object.defineProperties,jt=Object.getOwnPropertyDescriptors,Be=Object.getOwnPropertySymbols,St=Object.prototype.hasOwnProperty,Mt=Object.prototype.propertyIsEnumerable,Rt=Math.pow,Ee=(e,n,t)=>n in e?Ct(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,R=(e,n)=>{for(var t in n||(n={}))St.call(n,t)&&Ee(e,t,n[t]);if(Be)for(var t of Be(n))Mt.call(n,t)&&Ee(e,t,n[t]);return e},Se=(e,n)=>kt(e,jt(n)),Tt=(e,n,t)=>{const[i,c]=o.useState(),a=o.useRef(t);return o.useEffect(()=>{a.current=t},[t]),o.useEffect(()=>{const s=e==null?void 0:e.current,u=n==null?void 0:n.current;if(!window.IntersectionObserver||!s||!u)return;const f=new IntersectionObserver(d=>{d.forEach(l=>{c(l),a.current(l)})},{threshold:[.05,.95],root:u});return f.observe(s),()=>f.disconnect()},[e,n]),i},zt=(e,n)=>`${n?100/(3*e):100/e}%`,Pt=(e,n,t,i,c,a,s,u,f,d,l)=>{const g=l??zt(e,i),h=t?1:0,y=a==="fade"?200:500;let w="auto";return f&&(d?w="100%":t?w="auto":w="0"),{width:g,height:w,padding:`0 ${c?c/2:0}px`,transition:a?`${s||y}ms ease 0s`:void 0,transform:a==="zoom"?`scale(${n&&t?1:u||.85})`:void 0,opacity:a==="fade"?h:1}},Nt=(e,n,t)=>t==="prev-cloned"?e-n:t==="next-cloned"?e+n:e,At=({count:e,children:n,index:t,isCurrentSlide:i,typeOfSlide:c,wrapAround:a,cellSpacing:s,slideWidth:u,animation:f,speed:d,zoomScale:l,onVisibleSlideHeightChange:g,adaptiveHeight:h,initializedAdaptiveHeight:y,updateIOEntry:w,id:A,carouselRef:I})=>{var G;const B=a?Nt(t,e,c):t,K=o.useRef(null),_=Tt(K,I,P=>{w(A,(P==null?void 0:P.intersectionRatio)>=.95)}),E=!!(_!=null&&_.isIntersecting),F=((G=_==null?void 0:_.intersectionRatio)!=null?G:1)>=.95,k=o.useRef(!1);o.useEffect(()=>{var P;const Y=K.current;if(Y){const ne=(P=Y.getBoundingClientRect())==null?void 0:P.height,S=k.current;E&&!S?g(B,ne):!E&&S&&g(B,null),k.current=E}},[B,E,g]);const O=i&&F?" slide-current":"";return r.jsx("div",Se(R({ref:K},{inert:F?void 0:"true"}),{className:`slide${O}${c?` ${c}`:""}${F?" slide-visible":""}`,style:Pt(e,i,F,a,s,f,d,l,h,y,u),children:n}))},$t=At,Lt={position:"absolute",width:"1px",height:"1px",overflow:"hidden",padding:0,margin:"-1px",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},Dt=({message:e,ariaLive:n="polite"})=>r.jsx("div",{"aria-live":n,"aria-atomic":"true",style:Lt,tabIndex:-1,children:e}),It=({currentSlide:e,count:n})=>`Slide ${e+1} of ${n}`,_t=Dt,Fe=(e,n,t,i,c,a,s)=>n?t+c:t>=i-1||s==="left"&&t>=i-a?t:e==="remainder"&&s==="left"?Math.min(t+c,i-a):Math.min(t+c,i-1),Oe=(e,n,t,i,c,a)=>n?t-i:t<=0||a==="right"&&t<=c-1?t:e==="remainder"&&a==="right"?Math.max(t-i,c-1):Math.max(t-i,0),Bt=(e,n,t,i,c,a,s)=>{if(e!==void 0)return e;const u=ge(n,i,s,t,!1,c);return a?u[u.length-1]:u[0]},We=(e,n)=>(e%n+n)%n,Ve=e=>({border:0,background:"rgba(0,0,0,0.4)",color:"white",padding:10,textTransform:"uppercase",opacity:e?.3:1,cursor:e?"not-allowed":"pointer"}),Et=({cellAlign:e,currentSlide:n,slidesToShow:t,wrapAround:i})=>i?!1:n===0||e==="right"&&n<=t-1,Ft=({previousSlide:e,defaultControlsConfig:{prevButtonClassName:n,prevButtonStyle:t={},prevButtonText:i,prevButtonOnClick:c},onUserNavigation:a,previousDisabled:s})=>{const u=f=>{c==null||c(f),!f.defaultPrevented&&(a(f),f.preventDefault(),e())};return r.jsx("button",{className:n,style:R(R({},Ve(s)),t),disabled:s,onClick:u,"aria-label":"previous",type:"button",children:i||"Prev"})},Ot=({cellAlign:e,currentSlide:n,slideCount:t,slidesToShow:i,wrapAround:c})=>c?!1:n>=t-1||e==="left"&&n>=t-i,Ht=({nextSlide:e,defaultControlsConfig:{nextButtonClassName:n,nextButtonStyle:t={},nextButtonText:i,nextButtonOnClick:c},nextDisabled:a,onUserNavigation:s})=>{const u=f=>{c==null||c(f),!f.defaultPrevented&&(s(f),f.preventDefault(),e())};return r.jsx("button",{className:n,style:R(R({},Ve(a)),t),disabled:a,onClick:u,"aria-label":"next",type:"button",children:i||"Next"})},ge=(e,n,t,i,c,a)=>{const s=[],u=n<=0?1:n;if(c){for(let f=0;f<e;f+=u)s.push(f);return s}if(a==="center"){for(let f=0;f<e-1;f+=u)s.push(f);return e>0&&s.push(e-1),s}if(a==="left"){if(i>=e)return[0];const f=e-i;for(let d=0;d<f;d+=u)s.push(d);return t==="remainder"?s.push(f):s.push(s[s.length-1]+u),s}if(a==="right"){if(i>=e)return[e-1];const f=i-1;if(t==="remainder"){for(let d=f;d<e-1;d+=u)s.push(d);s.push(e-1)}else{for(let d=e-1;d>f;d-=u)s.push(d);s.push(s[s.length-1]-u),s.reverse()}return s}return s},Wt=({pagingDotsIndices:e,defaultControlsConfig:{pagingDotsContainerClassName:n,pagingDotsClassName:t,pagingDotsStyle:i={},pagingDotsOnClick:c},currentSlide:a,onUserNavigation:s,slideCount:u,goToSlide:f})=>{const d={position:"relative",top:-10,display:"flex",margin:0,padding:0,listStyleType:"none"},l=o.useCallback(h=>({cursor:"pointer",opacity:h?1:.5,background:"transparent",border:"none",fill:"black"}),[]),g=We(a,u);return r.jsx("ul",{className:n,style:d,children:e.map((h,y)=>{const w=g===h||g<h&&(y===0||g>e[y-1]);return r.jsx("li",{className:w?"paging-item active":"paging-item",children:r.jsx("button",{className:t,type:"button",style:R(R({},l(w)),i),onClick:A=>{c==null||c(A),!A.defaultPrevented&&(s(A),f(h))},"aria-label":`slide ${h+1} bullet`,"aria-selected":w,children:r.jsx("svg",{className:"paging-dot",width:"6",height:"6","aria-hidden":"true",focusable:"false",viewBox:"0 0 6 6",children:r.jsx("circle",{cx:"3",cy:"3",r:"3"})})})},h)})})},Vt=(e,n,t,i)=>{const[c,a]=o.useState(1),s=o.useRef(Date.now()),u=o.useRef(),f=o.useRef(!0),d=o.useRef(null),l=d.current===null||d.current===t||i?c:0;return o.useEffect(()=>{if(d.current=t,f.current){f.current=!1;return}if(i)return;s.current=Date.now(),a(0);const g=()=>{u.current=requestAnimationFrame(()=>{const h=Date.now(),y=Math.min(1,(h-s.current)/e);a(y),y<1?g():u.current=void 0})};return g(),()=>{u.current!==void 0&&(cancelAnimationFrame(u.current),a(1))}},[t,e,i]),{isAnimating:l!==1,value:n(l)}},Me=(e,n,t,i,c)=>{const a=c?3*n:n,s=100/a;let u=c?-100/3:0;if(i==="right"&&t>1){const d=t-1;u+=s*d}if(i==="center"&&t>1){const l=(t-1)/2;u+=s*l}const f=100/a*e;return u-f},Ue=q.forwardRef(({animation:e,animationDistance:n,cellAlign:t,children:i,currentSlide:c,disableAnimation:a,disableEdgeSwiping:s,draggedOffset:u,easing:f,edgeEasing:d,isDragging:l,scrollMode:g,slideCount:h,slidesToScroll:y,slidesToShow:w,speed:A,wrapAround:I,slideWidth:G,setIsAnimating:B},K)=>{const _=I?3*h:h,E=G?`calc(${G} * ${_})`:`${_*100/w}%`,F=[h,w,t,I],k=ge(h,y,g,w,I,t);let O=`${u}px`;if(l&&s&&!I){const J=[k[0],k[k.length-1]].map(Q=>Me(Q,...F));O=`clamp(${J[1]}%, ${u}px, ${J[0]}%)`}const P=Me(c,...F),Y=!s&&!I&&(c===k[0]&&n<0||c===k[k.length-1]&&n>0),{value:ne,isAnimating:S}=Vt(A,Y?d:f,c+n,l||a||e==="fade");let V;if(l||P!==0||S)if(l)V=`translateX(${O})`;else{const J=S?(1-ne)*n:0;V=`translateX(calc(${P}% - ${J}px))`}return o.useEffect(()=>{B(S)},[S,B]),r.jsx("div",{ref:K,className:"slider-list",style:{width:E,textAlign:"left",userSelect:"auto",transform:V,display:"flex"},children:i})});Ue.displayName="SliderList";var Ut={position:"absolute",display:"flex",zIndex:1,top:0,left:0,bottom:0,right:0},Xt=e=>{let n;switch(e){case"TopLeft":case"TopCenter":case"TopRight":n="flex-start";break;case"CenterLeft":case"CenterCenter":case"CenterRight":n="center";break;case"BottomLeft":case"BottomCenter":case"BottomRight":n="flex-end";break}let t;switch(e){case"TopLeft":case"CenterLeft":case"BottomLeft":t="flex-start";break;case"TopCenter":case"CenterCenter":case"BottomCenter":t="center";break;case"TopRight":case"CenterRight":case"BottomRight":t="flex-end";break}return{alignItems:n,justifyContent:t}},Gt=e=>R(R({},Xt(e)),Ut),Kt=[{funcName:"renderTopLeftControls",key:"TopLeft"},{funcName:"renderTopCenterControls",key:"TopCenter"},{funcName:"renderTopRightControls",key:"TopRight"},{funcName:"renderCenterLeftControls",key:"CenterLeft"},{funcName:"renderCenterCenterControls",key:"CenterCenter"},{funcName:"renderCenterRightControls",key:"CenterRight"},{funcName:"renderBottomLeftControls",key:"BottomLeft"},{funcName:"renderBottomCenterControls",key:"BottomCenter"},{funcName:"renderBottomRightControls",key:"BottomRight"}],qt=(e,n,t,i,c,a,s)=>{if(e.withoutControls)return null;const u=Se(R({},e),{currentSlide:t,slideCount:n}),f=Ot(u),d=Et(u),l=ge(n,s,e.scrollMode,e.slidesToShow,e.wrapAround,e.cellAlign);return Kt.map(g=>{var h;return!e[g.funcName]||typeof e[g.funcName]!="function"?r.jsx(o.Fragment,{},g.funcName):r.jsx("div",{style:Se(R({},Gt(g.key)),{pointerEvents:"none"}),children:r.jsx("div",{className:[`slider-control-${g.key.toLowerCase()}`,e.defaultControlsConfig.containerClassName||""].join(" ").trim(),style:{pointerEvents:"auto"},children:(h=e[g.funcName])==null?void 0:h.call(e,{cellAlign:e.cellAlign,cellSpacing:e.cellSpacing,currentSlide:t,defaultControlsConfig:e.defaultControlsConfig||{},pagingDotsIndices:l,goToSlide:i,nextDisabled:f,nextSlide:c,onUserNavigation:e.onUserNavigation,previousDisabled:d,previousSlide:a,scrollMode:e.scrollMode,slideCount:n,slidesToScroll:s,slidesToShow:e.slidesToShow||1,vertical:e.vertical,wrapAround:e.wrapAround})})},g.funcName)})},Yt=qt,He=e=>Rt(e-1,3)+1,Jt={adaptiveHeight:!1,adaptiveHeightAnimation:!0,afterSlide:()=>{},autoplay:!1,autoplayInterval:3e3,autoplayReverse:!1,beforeSlide:()=>{},cellAlign:"left",cellSpacing:0,defaultControlsConfig:{},disableAnimation:!1,disableEdgeSwiping:!1,dragging:!0,dragThreshold:.5,easing:He,edgeEasing:He,enableKeyboardControls:!1,frameAriaLabel:"carousel-slider",keyCodeConfig:{nextSlide:[39,68,38,87],previousSlide:[37,65,40,83],firstSlide:[81],lastSlide:[69],pause:[32]},onDragStart:()=>{},onDrag:()=>{},onDragEnd:()=>{},onUserNavigation:()=>{},pauseOnHover:!0,renderAnnounceSlideMessage:It,renderBottomCenterControls:e=>r.jsx(Wt,R({},e)),renderCenterLeftControls:e=>r.jsx(Ft,R({},e)),renderCenterRightControls:e=>r.jsx(Ht,R({},e)),scrollMode:"page",slidesToScroll:1,slidesToShow:1,speed:500,style:{},swiping:!0,vertical:!1,withoutControls:!1,wrapAround:!1,children:r.jsx(r.Fragment,{})},Qt=Jt,Zt=e=>{const[n,t]=o.useState(e),i=o.useRef(e),c=o.useCallback(a=>{i.current=a,t(a)},[]);return[n,c,i]},en=(e,n,t)=>{const[i,c,a]=Zt([]),[s,u]=o.useState(!1),f=o.useCallback((l,g)=>{const h=a.current;let y;g===null?y=h.filter(w=>w.slideIndex!==l):y=[...h,{slideIndex:l,height:g}],c(y),y.length>=Math.min(t,Math.ceil(n))&&u(!0)},[t,c,n,a]),d=o.useMemo(()=>e&&s?`${Math.max(0,...i.map(g=>g.height))}px`:"auto",[e,s,i]);return{handleVisibleSlideHeightChange:f,frameHeight:d,initializedAdaptiveHeight:s}},tn=e=>{const n=o.useRef(null);return o.useEffect(()=>{e&&(typeof e=="function"?e(n.current):e.current=n.current)},[e]),n},Te=q.forwardRef((e,n)=>{const t=e,{adaptiveHeight:i,adaptiveHeightAnimation:c,afterSlide:a,animation:s,autoplay:u,autoplayInterval:f,autoplayReverse:d,beforeSlide:l,cellAlign:g,cellSpacing:h,children:y,className:w,disableAnimation:A,dragging:I,dragThreshold:G,enableKeyboardControls:B,frameAriaLabel:K,keyCodeConfig:_,onDrag:E,onDragEnd:F,onDragStart:k,onUserNavigation:O,pauseOnHover:P,renderAnnounceSlideMessage:Y,scrollMode:ne,slideIndex:S,slidesToScroll:V,slidesToShow:J,slideWidth:Q,speed:le,style:Xe,swiping:ze,wrapAround:T,zoomScale:Ge}=t,Pe=q.Children.toArray(y).filter(Boolean),z=Pe.length,$=Q||V==="auto"?"left":g,H=V==="auto"?"remainder":ne,[he,Ke]=o.useState(new Map),xe=Array.from(he).filter(([,p])=>p).length,[Ne,qe]=o.useState(xe),M=Q?Ne:J,N=s==="fade"?M:V==="auto"?Math.max(Ne,1):V,[j,Ye]=o.useState(()=>Bt(S,z,M,N,$,d,H)),[Z,me]=o.useState(!1),[L,be]=o.useState(!1),[re,Ae]=o.useState(0),[Je,Qe]=o.useState(0),[$e,Ze]=o.useState(!1),et=o.useCallback((p,m)=>{!!he.get(p)!==m&&Ke(b=>{const C=new Map(b);return C.set(p,m),C})},[he]),ve=o.useRef(!1);o.useEffect(()=>{L&&(ve.current=!0),L||$e||(ve.current||qe(xe),ve.current=!1)},[$e,L,xe]);const ie=o.useRef(null),ye=o.useRef(0),U=o.useRef(null),tt=o.useRef(null),we=o.useRef(),ae=o.useRef(null),Ce=o.useRef(!0),nt=o.useCallback(p=>{p&&p.querySelectorAll(".slider-list img").forEach(m=>m.setAttribute("draggable","false")),U.current=p},[]);o.useEffect(()=>(Ce.current=!0,()=>{Ce.current=!1}),[]);const v=tn(n)||tt,D=o.useCallback(p=>{if(!U.current||!v.current)return;const m=We(p,z),b=p!==j;b&&l(j,m);const C=U.current.getBoundingClientRect().left-v.current.getBoundingClientRect().left,X=U.current.offsetWidth;let pe=Me(m,z,M,$,T)/100*X;if(T){const oe=X/3;p<0&&(pe+=oe),p>=z&&(pe-=oe)}Qe(pe-C),b&&(Ye(m),setTimeout(()=>{Ce.current&&a(m)},A?40:le||500))},[a,l,v,$,j,A,le,z,M,T]),ce=o.useCallback(()=>{const p=Fe(H,T,j,z,N,M,$);j!==p&&D(p)},[$,j,D,N,H,z,M,T]),de=o.useCallback(()=>{const p=Oe(H,T,j,N,M,$);j!==p&&D(p)},[$,j,D,N,H,M,T]),Le=o.useRef(S);o.useEffect(()=>{S!==void 0&&S!==Le.current&&!d&&(D(S),Le.current=S)},[S,d,D]),o.useEffect(()=>{let p=null;return Z&&(p=Date.now()),()=>{p!==null&&ae.current!==null&&(ae.current+=Date.now()-p)}},[Z]),o.useEffect(()=>{if(u&&!Z){const p=ae.current!==null?f-(Date.now()-ae.current):f;we.current=setTimeout(()=>{ae.current=Date.now(),d?de():ce()},p)}return u&&Z&&clearTimeout(we.current),()=>{clearTimeout(we.current)}},[Z,u,f,d,de,ce]);const rt=p=>{let m=null;if(Object.keys(_).forEach(b=>{var C;(C=_[b])!=null&&C.includes(p.keyCode)&&(m=b)}),m!==null)switch(p.preventDefault(),p.stopPropagation(),m){case"nextSlide":O(p),ce();break;case"previousSlide":O(p),de();break;case"firstSlide":case"lastSlide":{O(p);const b=ge(z,N,H,M,T,$);D(m==="firstSlide"?b[0]:b[b.length-1]);break}case"pause":me(b=>!b);break}},W=o.useRef([]),De=p=>{if(!L||!v.current)return;be(!1);let m=0;if(W.current.length>1){const se=W.current[0],_e=W.current[W.current.length-1],ft=_e.time-se.time,gt=9,ht=.92;let je=gt*Math.abs((_e.pos-se.pos)/ft);for(;Math.abs(je)>1;)m+=je,je*=ht}W.current=[];const b=Math.abs(re)+Math.abs(m);F(p),ie.current=null,Ae(0);const C=v.current.offsetWidth*Math.min(1,N/M),X=C*G;if(b<X){D(j);return}const oe=M>=2*N?1+Math.floor((b-X)/C):1;let ee=j;for(let se=0;se<oe;se+=1)re>0?ee=Fe(H,T,ee,z,N,M,$):ee=Oe(H,T,ee,N,M,$);ee!==j&&O(p),D(ee)},it=o.useCallback(p=>{!ze||!U.current||!v.current||(be(!0),ye.current=U.current.getBoundingClientRect().left-v.current.getBoundingClientRect().left,k(p))},[v,k,ze]),ue=o.useCallback(p=>{if(!L)return;const m=ie.current===null,b=ie.current!==null?p-ie.current:0,C=re+b,X=Date.now();for(;W.current.length>0&&!(X-W.current[0].time<=100);)W.current.shift();W.current.push({pos:C,time:X}),m||Ae(C),ie.current=p},[L,re]),at=o.useCallback(p=>{if(!L||!v.current)return;k(p);const m=v.current.offsetWidth-p.touches[0].pageX;ue(m)},[L,v,ue,k]),ot=o.useCallback(p=>{!I||!U.current||!v.current||(be(!0),ye.current=U.current.getBoundingClientRect().left-v.current.getBoundingClientRect().left,k(p))},[v,I,k]),st=o.useCallback(p=>{if(!L||!v.current)return;E(p);const m=p.clientX-v.current.getBoundingClientRect().left,b=v.current.offsetWidth-m;ue(b)},[v,L,ue,E]),Ie=p=>{p.preventDefault(),De(p)},lt=o.useCallback(()=>{P&&me(!0)},[P]),ct=o.useCallback(()=>{P&&me(!1)},[P]),{frameHeight:dt,handleVisibleSlideHeightChange:ut,initializedAdaptiveHeight:pt}=en(i,M,z),ke=p=>Pe.map((b,C)=>r.jsx($t,{id:`${p}-${C}`,count:z,index:C,isCurrentSlide:j===C,typeOfSlide:p,wrapAround:T,cellSpacing:h,animation:s,speed:le,zoomScale:Ge,onVisibleSlideHeightChange:ut,slideWidth:Q,updateIOEntry:et,adaptiveHeight:i,initializedAdaptiveHeight:pt,carouselRef:v,children:b},`${p}-${C}`));return r.jsxs("div",{className:"slider-container",style:{position:"relative"},onMouseEnter:lt,onMouseLeave:ct,children:[r.jsx(_t,{ariaLive:u&&!Z?"off":"polite",message:Y({currentSlide:j,count:z})}),Yt(t,z,j,D,ce,de,N),r.jsx("div",{className:["slider-frame",w||""].join(" ").trim(),style:R({overflow:"hidden",width:"100%",position:"relative",outline:"none",touchAction:"pan-y",height:dt,transition:c?"height 300ms ease-in-out":void 0,willChange:"height",userSelect:"none"},Xe),"aria-label":K,role:"region",tabIndex:B?0:-1,onKeyDown:B?rt:void 0,ref:v,onMouseUp:Ie,onMouseDown:ot,onMouseMove:st,onMouseLeave:Ie,onTouchStart:it,onTouchEnd:De,onTouchMove:at,children:r.jsxs(Ue,{animationDistance:Je,cellAlign:$,currentSlide:j,disableEdgeSwiping:t.disableEdgeSwiping,draggedOffset:ye.current-re,disableAnimation:A,easing:t.easing,edgeEasing:t.edgeEasing,isDragging:L,ref:nt,scrollMode:H,animation:s,slideCount:z,slidesToScroll:N,slidesToShow:M,speed:le,slideWidth:Q,wrapAround:T,setIsAnimating:Ze,children:[T?ke("prev-cloned"):null,ke(),T?ke("next-cloned"):null]})})]})});Te.defaultProps=Qt;Te.displayName="Carousel";const nn=["/images/peacemaker.jpg","/images/meg2.jpg","/images/transformer.jpg","/images/opp.jpg","/images/fmab.jpg","/images/bleach.jpg"],fe=x.a`
  background: #d6d4d4;
  border: 1px solid #d6d4d4;
  color: black;
  text-decoration: none;
  transition: background-color 0.5s;
  height: 50px;
  width: 100px;
  border-radius: 100px; /* You can simplify the border-radius to make it a circle */
  display: inline-flex; /* Use inline-flex to center both horizontally and vertically */
  align-items: center; /* Center vert/images/spidey.jpgically */
  justify-content: center; /* Center horizontally */
  margin: 10px;
  margin-left: 0px;
  border; 1px solid black;

  &:hover {
    background: black;
    color: white;
  }

  &.clicked {
    background: black;
    color: white;
  }
`;function Fn(){const[e,n]=o.useState(!1),t=[{imageSrc:"/images/peacemaker.jpg",playLink:"/player",trailerLink:"/trailer/spidey",text:"Peacemaker",genre:"Action"},{imageSrc:"/images/meg2.jpg",playLink:"/player",trailerLink:"/trailer/transformer",text:"One Piece: Live Action",genre:"Adventure"},{imageSrc:"/images/transformer.jpg",playLink:"/player",trailerLink:"/trailer/got",text:"Transformer: Rise of The Beast",genre:"Sci-fi"},{imageSrc:"/images/opp.jpg",playLink:"/player",trailerLink:"/trailer/ig",text:"Oppenheimer",genre:"Sci-fi"},{imageSrc:"/images/fmab.jpg",playLink:"/player",trailerLink:"/trailer/d",text:"Fullmetal Alchemist Brotherhood",genre:"Adventure"},{imageSrc:"/images/bleach.jpg",playLink:"/player",trailerLink:"/trailer/s",text:"Bleach: Thousand Year Blood War ",genre:"Action"}];return r.jsx("div",{children:r.jsx(Te,{autoplay:!0,wrapAround:!0,speed:1e3,slidesToShow:1,style:{height:"85vh",width:"100vw",backgroundColor:"#212016",marginTop:"-70px"},renderCenterLeftControls:({previousSlide:i})=>r.jsx("button",{onClick:i,className:"carousel-button",style:{margin:"10px",left:"70px",background:"transparent",color:"black",display:"flex",alignItems:"center",justifyContent:"center",padding:"5px",borderRadius:"10%",width:"40px",height:"60px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)",border:"1px solid black"},children:r.jsx(te,{icon:xt,size:"2x",color:"white",style:{fontSize:"30px"}})}),renderCenterRightControls:({nextSlide:i})=>r.jsx("button",{onClick:i,className:"carousel-button",style:{margin:"10px",right:"70px",background:"transparent",color:"white",display:"flex",alignItems:"center",justifyContent:"center",padding:"5px",borderRadius:"10%",width:"40px",height:"60px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)",border:"1px solid white"},children:r.jsx(te,{icon:mt,size:"2x",color:"white",style:{fontSize:"30px"}})}),renderBottomCenterControls:({slideCount:i,currentSlide:c,goToSlide:a})=>r.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.map((s,u)=>r.jsx("img",{src:nn[u],alt:`Dot ${u+1}`,style:{height:"50px",width:"100%",marginBottom:"110px",cursor:"pointer",margin:"5px",opacity:c===u?1:.5,border:"1px solid black"},onClick:()=>a(u)},u))}),children:t.map((i,c)=>r.jsx("div",{className:"carousel-item",children:r.jsxs("div",{style:{position:"relative"},children:[r.jsx("img",{src:i.imageSrc,alt:`Image ${c+1}`,style:{width:"100%",height:"85vh"}}),r.jsx("div",{style:{position:"absolute",marginLeft:"50px",bottom:"60px",left:"0",right:"0",backgroundColor:"tranparent",color:"#000",fontWeight:"bold",padding:"5px 10px",display:"flex",justifyContent:"space-between",alignItems:"center",fontFamily:"Montserrat, sans-serif"},children:r.jsxs("div",{children:[r.jsxs("div",{style:{fontSize:"50px",fontFamily:"Montserrat, sans-serif"},children:[i.text,r.jsx("div",{style:{fontSize:"15px",marginTop:"5px",fontFamily:"Montserrat, sans-serif",backgroundColor:"#fff",color:"#000",width:"100px",height:"30px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"100px",border:"1px solid black"},children:i.genre})]}),r.jsx("div",{style:{fontSize:"15px"},children:e?r.jsx("iframe",{title:`Trailer ${c+1}`,width:"560",height:"315",src:i.trailerSrc,frameBorder:"0",allowFullScreen:!0}):r.jsxs(r.Fragment,{children:[r.jsxs(fe,{href:i.playLink,onClick:a=>{a.preventDefault(),a.target.classList.toggle("clicked")},style:{height:"50px",border:"1px solid black"},children:[r.jsx(te,{icon:bt,size:"2x",style:{height:"20px",marginRight:"5px"}}),"Play"]}),r.jsxs(fe,{href:i.trailerLink,onClick:a=>{a.preventDefault(),a.target.classList.toggle("clicked")},style:{height:"50px",border:"1px solid black"},children:[r.jsx(te,{icon:vt,size:"2x",style:{height:"20px",marginRight:"5px"}}),"Trailer"]}),r.jsx(fe,{href:i.trailerLink,onClick:a=>{a.preventDefault(),a.target.classList.toggle("clicked")},style:{height:"50px",border:"1px solid black"},children:r.jsx(te,{icon:yt,size:"2x",style:{height:"20px",marginRight:"5px"}})}),r.jsxs(fe,{href:i.trailerLink,onClick:a=>{a.preventDefault(),a.target.classList.toggle("clicked")},style:{height:"50px",border:"1px solid black"},children:[r.jsx(te,{icon:wt,size:"2x",style:{height:"20px",marginRight:"5px"}}),"Share"]})]})})]})})]})},c))})})}const rn=x.h1`
  text-align: center;
  font-family: 'Gotham', sans-serif;
  color: white;
  font-size: 30px;
  margin-left: -75%;
  margin-top:3%;
  font-weight: bold;

  @media (max-width: 640px) {
    margin-left: -60%;
    font-weight: bold;
    font-size: 20px;
    margin-top: 10%;
  }
`,an=x.div`
  position: relative;
  width: 150px;
  height: 200px;
  background: url(${e=>e.imageUrl}) no-repeat center/cover;
  border-radius: 10px;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
  margin: 15px;
  transition: 0.5s;

  @media (max-width: 640px) {
    width: 80px;
    height: 100px;
    margin: 5px;
    font-size:10px;
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
`,on=x.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    height: 100%;
  }
`,sn=x.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    margin-top: -10%;
  }
`,ln=x.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,cn=x.button`
  background-color: white;
  border: 1px solid white;
  color: black;
  cursor: pointer;
  margin: 0 5px;
  font-size: 18px;
  font-family: "Gotham", sans-serif;
  padding: 5px 10px;
  border-radius: 5px;
  outline: none;
  height:50px;
  
  &:hover {
    background-color: transparent;
    color: blue;
  }

  ${e=>e.active&&`
    background-color: transparent;
    color: blue;
  `}

  @media (max-width: 640px) {
    font-size: 14px; /* Reduce font size for smaller screens */
    padding: 3px 8px; /* Adjust padding for smaller screens */
    height: 30px; /* Set a specific height for the button */
  }
`;function dn(){const[e,n]=o.useState(1),t=16,[i,c]=o.useState([]);o.useEffect(()=>{(async()=>{try{const l=await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=b2d47bc45b9596fab31b362d1db590f9");if(l.ok){const g=await l.json();c(g.results)}else console.error("Failed to fetch trending movies")}catch(l){console.error(l)}})()},[]);const a=(e-1)*t,s=a+t,u=i.slice(a,s),f=d=>{n(d)};return r.jsxs(on,{style:{height:"120vh",width:"100vw",backgroundColor:"transparent",marginTop:"-6%",marginLeft:"-2%"},children:[r.jsx(rn,{className:"card-heading",children:"| Trending Movies"}),r.jsx(sn,{children:u.map((d,l)=>r.jsxs(an,{imageUrl:`https://image.tmdb.org/t/p/w500/${d.poster_path}`,children:[r.jsx("div",{className:"title",children:d.title}),r.jsxs("button",{className:"watch-button",href:"/player",children:[r.jsx(Re,{className:"play-icon"})," Watch"]})]},l))}),r.jsx(ln,{children:Array.from({length:Math.ceil(i.length/t)},(d,l)=>r.jsx(cn,{onClick:()=>f(l+1),active:l+1===e,children:l+1},l))})]})}const un=x.h1`
  text-align: center;
  font-family: 'Gotham', sans-serif;
  color: white;
  font-size: 30px;
  margin-left: -75%;
  margin-top:3%;
  font-weight: bold;

  @media (max-width: 640px) {
    margin-left: -60%;
    font-weight: bold;
    font-size: 20px;
    margin-top: 10%;
  }
`,pn=x.div`
  position: relative;
  width: 150px;
  height: 200px;
  background: url(${e=>e.imageUrl}) no-repeat center/cover;
  border-radius: 10px;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
  margin: 15px;
  transition: 0.5s;

  @media (max-width: 640px) {
    width: 80px;
    height: 100px;
    margin: 5px;
    font-size:10px;
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
`,fn=x.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    height: 100%;
  }
`,gn=x.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    margin-top: -10%;
  }
`,hn=x.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,xn=x.button`
  background-color: white;
  border: 1px solid white;
  color: black;
  cursor: pointer;
  margin: 0 5px;
  font-size: 18px;
  font-family: "Gotham", sans-serif;
  padding: 5px 10px;
  border-radius: 5px;
  outline: none;
  height:50px;
  
  &:hover {
    background-color: transparent;
    color: blue;
  }

  ${e=>e.active&&`
    background-color: transparent;
    color: blue;
  `}

  
  @media (max-width: 640px) {
    font-size: 14px; /* Reduce font size for smaller screens */
    padding: 3px 8px; /* Adjust padding for smaller screens */
    height: 30px; /* Set a specific height for the button */
  }
`;function mn(){const[e,n]=o.useState(1),t=16,[i,c]=o.useState([]);o.useEffect(()=>{(async()=>{try{const l=await fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=b2d47bc45b9596fab31b362d1db590f9");if(l.ok){const g=await l.json();c(g.results)}else console.error("Failed to fetch trending movies")}catch(l){console.error(l)}})()},[]);const a=(e-1)*t,s=a+t,u=i.slice(a,s),f=d=>{n(d)};return r.jsxs(fn,{style:{height:"120vh",width:"100vw",backgroundColor:"transparent",marginTop:"-6%",marginLeft:"-2%"},children:[r.jsx(un,{className:"card-heading",children:"| Trending Series"}),r.jsx(gn,{children:u.map((d,l)=>r.jsxs(pn,{imageUrl:`https://image.tmdb.org/t/p/w500/${d.poster_path}`,children:[r.jsx("div",{className:"title",children:d.title}),r.jsxs("button",{className:"watch-button",href:"/player",children:[r.jsx(Re,{className:"play-icon"})," Watch"]})]},l))}),r.jsx(hn,{children:Array.from({length:Math.ceil(i.length/t)},(d,l)=>r.jsx(xn,{onClick:()=>f(l+1),active:l+1===e,children:l+1},l))})]})}const bn=x.h1`
  text-align: center;
  font-family: 'Gotham', sans-serif;
  color: white;
  font-size: 30px;
  margin-left: -75%;
  margin-top:3%;
  font-weight: bold;

  @media (max-width: 640px) {
    margin-left: -60%;
    font-weight: bold;
    font-size: 20px;
    margin-top: 10%;
  }
`,vn=x.div`
  position: relative;
  width: 150px;
  height: 200px;
  background: url(${e=>e.imageUrl}) no-repeat center/cover;
  border-radius: 10px;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
  margin: 15px;
  transition: 0.5s;

  @media (max-width: 640px) {
    width: 80px;
    height: 100px;
    margin: 5px;
    font-size:10px;
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
`,yn=x.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    height: 100%;
  }
`,wn=x.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    margin-top: -10%;
  }
`,Cn=x.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  
`,kn=x.button`
  background-color: white;
  border: 1px solid white;
  color: black;
  cursor: pointer;
  margin: 0 5px;
  font-size: 18px;
  font-family: "Gotham", sans-serif;
  padding: 5px 10px;
  border-radius: 5px;
  outline: none;
  height:50px;
  
  &:hover {
    background-color: transparent;
    color: blue;
  }

  ${e=>e.active&&`
    background-color: transparent;
    color: blue;
  `}

  
  @media (max-width: 640px) {
    font-size: 14px; /* Reduce font size for smaller screens */
    padding: 3px 8px; /* Adjust padding for smaller screens */
    height: 30px; /* Set a specific height for the button */
  }
`;function jn(){const[e,n]=o.useState(1),t=16,[i,c]=o.useState([]);o.useEffect(()=>{(async()=>{try{const l=await fetch("https://api.themoviedb.org/3/trending/tv/day?api_key=b2d47bc45b9596fab31b362d1db590f9");if(l.ok){const g=await l.json();c(g.results)}else console.error("Failed to fetch trending movies")}catch(l){console.error(l)}})()},[]);const a=(e-1)*t,s=a+t,u=i.slice(a,s),f=d=>{n(d)};return r.jsxs(yn,{style:{height:"120vh",width:"100vw",backgroundColor:"transparent",marginTop:"-6%",marginLeft:"-2%"},children:[r.jsx(bn,{className:"card-heading",children:"| Trending Movies"}),r.jsx(wn,{children:u.map((d,l)=>r.jsxs(vn,{imageUrl:`https://image.tmdb.org/t/p/w500/${d.poster_path}`,children:[r.jsx("div",{className:"title",children:d.title}),r.jsxs("button",{className:"watch-button",href:"/player",children:[r.jsx(Re,{className:"play-icon"})," Watch"]})]},l))}),r.jsx(Cn,{children:Array.from({length:Math.ceil(i.length/t)},(d,l)=>r.jsx(kn,{onClick:()=>f(l+1),active:l+1===e,children:l+1},l))})]})}const Sn=x.div`
  background: transparent;
  width: 100vw; /* Set the width to 100vw */
  height: 140vh;
  padding: 1em;
  margin-left: auto;
  margin-right: 20px;
  border-top: 1px solid white;
  background: linear-gradient(to top, #000000 50%, #12104a 100%);

 
`,Mn=x.div`
  display: flex;
  align-items: center;
  font-family: "Gotham", sans-serif;
  font-size: 40px;
  color: white;
  
 
`,Rn=x.nav`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  color: white;

   @media (max-width: 640px) {
    margin-top:5%;
   margin-right:25%;
  }
`,Tn=x.button`
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
  @media (max-width: 640px) {
    font-size: 15px;
    height: 50px;
    margin-left:-30%;
    margin:-5%;
  }
  }
`;class zn extends q.Component{render(){return r.jsx(dn,{})}}class Pn extends q.Component{render(){return r.jsx(mn,{})}}class Nn extends q.Component{render(){return r.jsx(jn,{})}}class On extends q.Component{constructor(n){super(n),this.state={items:[{name:"Movies",content:r.jsx(zn,{})},{name:"Series",content:r.jsx(Pn,{})},{name:"Anime",content:r.jsx(Nn,{})}],activeTab:0}}handleClick(n){this.setState({activeTab:n})}render(){const{items:n,activeTab:t}=this.state,i=n.map((c,a)=>r.jsx(Tn,{onClick:()=>this.handleClick(a),style:t===a?{color:"deepskyblue"}:{},children:c.name},a));return r.jsx("section",{children:r.jsxs(Sn,{children:[r.jsx(Mn,{children:r.jsx(Rn,{children:i})}),r.jsx("div",{children:n[t].content})]})})}}const Hn=()=>r.jsx(An,{children:r.jsx($n,{children:r.jsx(Ln,{href:"/",target:"_blank",style:{marginTop:"200px"},children:r.jsx("a",{href:"/",target:"_blank",style:{color:"black",textDecoration:"none"},children:"Visit Now"})})})}),An=x.section`
  background: url('https://mjminnovations.com/wp-content/uploads/2016/10/Management_Solutions-1.png') center/cover no-repeat;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: -20px;
  
  @media (max-width: 640px) {
    background-size: 640px; 
    height: 150px;
  }
`,$n=x.div`
  background-color: transparent;
  padding: 20px;
  border-radius: 5px;

  @media (max-width: 640px) {
    width: 100%;
    margin-top:-23%; /* Make the container fit within 640 pixels */
  }
`,Ln=x.button`
  display: inline-block;
  padding: 10px 10px;
  border: 2px solid #000;
  border-radius: 15px;
  font-family: 'Gotham', sans-serif;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  font-size: 15px;
  margin: 10px;
  width: 100%%; /* Set the width to 20% for all screen sizes */

  @media (max-width: 640px) {
    font-size: 10px;
    padding: 5px 5px;
    margin:25%;
  }
`;export{Fn as M,Hn as S,On as T};
