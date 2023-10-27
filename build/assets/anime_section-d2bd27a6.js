import{R as ke,r as o,j as s,s as U}from"./index-aab812e7.js";import{F as ee,f as mt,a as xt,b as vt,c as bt,d as wt,e as yt}from"./navbar1-a0827362.js";import{d as Fe}from"./index.esm-1aa73e51.js";var Ct=Object.defineProperty,jt=Object.defineProperties,kt=Object.getOwnPropertyDescriptors,Ee=Object.getOwnPropertySymbols,St=Object.prototype.hasOwnProperty,Rt=Object.prototype.propertyIsEnumerable,Tt=Math.pow,$e=(e,r,t)=>r in e?Ct(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,R=(e,r)=>{for(var t in r||(r={}))St.call(r,t)&&$e(e,t,r[t]);if(Ee)for(var t of Ee(r))Rt.call(r,t)&&$e(e,t,r[t]);return e},Se=(e,r)=>jt(e,kt(r)),Mt=(e,r,t)=>{const[n,l]=o.useState(),i=o.useRef(t);return o.useEffect(()=>{i.current=t},[t]),o.useEffect(()=>{const a=e==null?void 0:e.current,d=r==null?void 0:r.current;if(!window.IntersectionObserver||!a||!d)return;const c=new IntersectionObserver(g=>{g.forEach(f=>{l(f),i.current(f)})},{threshold:[.05,.95],root:d});return c.observe(a),()=>c.disconnect()},[e,r]),n},Dt=(e,r)=>`${r?100/(3*e):100/e}%`,Pt=(e,r,t,n,l,i,a,d,c,g,f)=>{const p=f??Dt(e,n),h=t?1:0,b=i==="fade"?200:500;let w="auto";return c&&(g?w="100%":t?w="auto":w="0"),{width:p,height:w,padding:`0 ${l?l/2:0}px`,transition:i?`${a||b}ms ease 0s`:void 0,transform:i==="zoom"?`scale(${r&&t?1:d||.85})`:void 0,opacity:i==="fade"?h:1}},Lt=(e,r,t)=>t==="prev-cloned"?e-r:t==="next-cloned"?e+r:e,Nt=({count:e,children:r,index:t,isCurrentSlide:n,typeOfSlide:l,wrapAround:i,cellSpacing:a,slideWidth:d,animation:c,speed:g,zoomScale:f,onVisibleSlideHeightChange:p,adaptiveHeight:h,initializedAdaptiveHeight:b,updateIOEntry:w,id:L,carouselRef:B})=>{var G;const $=i?Lt(t,e,l):t,K=o.useRef(null),E=Mt(K,B,D=>{w(L,(D==null?void 0:D.intersectionRatio)>=.95)}),z=!!(E!=null&&E.isIntersecting),_=((G=E==null?void 0:E.intersectionRatio)!=null?G:1)>=.95,C=o.useRef(!1);o.useEffect(()=>{var D;const q=K.current;if(q){const te=(D=q.getBoundingClientRect())==null?void 0:D.height,k=C.current;z&&!k?p($,te):!z&&k&&p($,null),C.current=z}},[$,z,p]);const O=n&&_?" slide-current":"";return s.jsx("div",Se(R({ref:K},{inert:_?void 0:"true"}),{className:`slide${O}${l?` ${l}`:""}${_?" slide-visible":""}`,style:Pt(e,n,_,i,a,c,g,f,h,b,d),children:r}))},At=Nt,It={position:"absolute",width:"1px",height:"1px",overflow:"hidden",padding:0,margin:"-1px",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},Ut=({message:e,ariaLive:r="polite"})=>s.jsx("div",{"aria-live":r,"aria-atomic":"true",style:It,tabIndex:-1,children:e}),Bt=({currentSlide:e,count:r})=>`Slide ${e+1} of ${r}`,Et=Ut,ze=(e,r,t,n,l,i,a)=>r?t+l:t>=n-1||a==="left"&&t>=n-i?t:e==="remainder"&&a==="left"?Math.min(t+l,n-i):Math.min(t+l,n-1),_e=(e,r,t,n,l,i)=>r?t-n:t<=0||i==="right"&&t<=l-1?t:e==="remainder"&&i==="right"?Math.max(t-n,l-1):Math.max(t-n,0),$t=(e,r,t,n,l,i,a)=>{if(e!==void 0)return e;const d=pe(r,n,a,t,!1,l);return i?d[d.length-1]:d[0]},He=(e,r)=>(e%r+r)%r,We=e=>({border:0,background:"rgba(0,0,0,0.4)",color:"white",padding:10,textTransform:"uppercase",opacity:e?.3:1,cursor:e?"not-allowed":"pointer"}),zt=({cellAlign:e,currentSlide:r,slidesToShow:t,wrapAround:n})=>n?!1:r===0||e==="right"&&r<=t-1,_t=({previousSlide:e,defaultControlsConfig:{prevButtonClassName:r,prevButtonStyle:t={},prevButtonText:n,prevButtonOnClick:l},onUserNavigation:i,previousDisabled:a})=>{const d=c=>{l==null||l(c),!c.defaultPrevented&&(i(c),c.preventDefault(),e())};return s.jsx("button",{className:r,style:R(R({},We(a)),t),disabled:a,onClick:d,"aria-label":"previous",type:"button",children:n||"Prev"})},Ot=({cellAlign:e,currentSlide:r,slideCount:t,slidesToShow:n,wrapAround:l})=>l?!1:r>=t-1||e==="left"&&r>=t-n,Ft=({nextSlide:e,defaultControlsConfig:{nextButtonClassName:r,nextButtonStyle:t={},nextButtonText:n,nextButtonOnClick:l},nextDisabled:i,onUserNavigation:a})=>{const d=c=>{l==null||l(c),!c.defaultPrevented&&(a(c),c.preventDefault(),e())};return s.jsx("button",{className:r,style:R(R({},We(i)),t),disabled:i,onClick:d,"aria-label":"next",type:"button",children:n||"Next"})},pe=(e,r,t,n,l,i)=>{const a=[],d=r<=0?1:r;if(l){for(let c=0;c<e;c+=d)a.push(c);return a}if(i==="center"){for(let c=0;c<e-1;c+=d)a.push(c);return e>0&&a.push(e-1),a}if(i==="left"){if(n>=e)return[0];const c=e-n;for(let g=0;g<c;g+=d)a.push(g);return t==="remainder"?a.push(c):a.push(a[a.length-1]+d),a}if(i==="right"){if(n>=e)return[e-1];const c=n-1;if(t==="remainder"){for(let g=c;g<e-1;g+=d)a.push(g);a.push(e-1)}else{for(let g=e-1;g>c;g-=d)a.push(g);a.push(a[a.length-1]-d),a.reverse()}return a}return a},Ht=({pagingDotsIndices:e,defaultControlsConfig:{pagingDotsContainerClassName:r,pagingDotsClassName:t,pagingDotsStyle:n={},pagingDotsOnClick:l},currentSlide:i,onUserNavigation:a,slideCount:d,goToSlide:c})=>{const g={position:"relative",top:-10,display:"flex",margin:0,padding:0,listStyleType:"none"},f=o.useCallback(h=>({cursor:"pointer",opacity:h?1:.5,background:"transparent",border:"none",fill:"black"}),[]),p=He(i,d);return s.jsx("ul",{className:r,style:g,children:e.map((h,b)=>{const w=p===h||p<h&&(b===0||p>e[b-1]);return s.jsx("li",{className:w?"paging-item active":"paging-item",children:s.jsx("button",{className:t,type:"button",style:R(R({},f(w)),n),onClick:L=>{l==null||l(L),!L.defaultPrevented&&(a(L),c(h))},"aria-label":`slide ${h+1} bullet`,"aria-selected":w,children:s.jsx("svg",{className:"paging-dot",width:"6",height:"6","aria-hidden":"true",focusable:"false",viewBox:"0 0 6 6",children:s.jsx("circle",{cx:"3",cy:"3",r:"3"})})})},h)})})},Wt=(e,r,t,n)=>{const[l,i]=o.useState(1),a=o.useRef(Date.now()),d=o.useRef(),c=o.useRef(!0),g=o.useRef(null),f=g.current===null||g.current===t||n?l:0;return o.useEffect(()=>{if(g.current=t,c.current){c.current=!1;return}if(n)return;a.current=Date.now(),i(0);const p=()=>{d.current=requestAnimationFrame(()=>{const h=Date.now(),b=Math.min(1,(h-a.current)/e);i(b),b<1?p():d.current=void 0})};return p(),()=>{d.current!==void 0&&(cancelAnimationFrame(d.current),i(1))}},[t,e,n]),{isAnimating:f!==1,value:r(f)}},Re=(e,r,t,n,l)=>{const i=l?3*r:r,a=100/i;let d=l?-100/3:0;if(n==="right"&&t>1){const g=t-1;d+=a*g}if(n==="center"&&t>1){const f=(t-1)/2;d+=a*f}const c=100/i*e;return d-c},Ve=ke.forwardRef(({animation:e,animationDistance:r,cellAlign:t,children:n,currentSlide:l,disableAnimation:i,disableEdgeSwiping:a,draggedOffset:d,easing:c,edgeEasing:g,isDragging:f,scrollMode:p,slideCount:h,slidesToScroll:b,slidesToShow:w,speed:L,wrapAround:B,slideWidth:G,setIsAnimating:$},K)=>{const E=B?3*h:h,z=G?`calc(${G} * ${E})`:`${E*100/w}%`,_=[h,w,t,B],C=pe(h,b,p,w,B,t);let O=`${d}px`;if(f&&a&&!B){const Y=[C[0],C[C.length-1]].map(J=>Re(J,..._));O=`clamp(${Y[1]}%, ${d}px, ${Y[0]}%)`}const D=Re(l,..._),q=!a&&!B&&(l===C[0]&&r<0||l===C[C.length-1]&&r>0),{value:te,isAnimating:k}=Wt(L,q?g:c,l+r,f||i||e==="fade");let W;if(f||D!==0||k)if(f)W=`translateX(${O})`;else{const Y=k?(1-te)*r:0;W=`translateX(calc(${D}% - ${Y}px))`}return o.useEffect(()=>{$(k)},[k,$]),s.jsx("div",{ref:K,className:"slider-list",style:{width:z,textAlign:"left",userSelect:"auto",transform:W,display:"flex"},children:n})});Ve.displayName="SliderList";var Vt={position:"absolute",display:"flex",zIndex:1,top:0,left:0,bottom:0,right:0},Xt=e=>{let r;switch(e){case"TopLeft":case"TopCenter":case"TopRight":r="flex-start";break;case"CenterLeft":case"CenterCenter":case"CenterRight":r="center";break;case"BottomLeft":case"BottomCenter":case"BottomRight":r="flex-end";break}let t;switch(e){case"TopLeft":case"CenterLeft":case"BottomLeft":t="flex-start";break;case"TopCenter":case"CenterCenter":case"BottomCenter":t="center";break;case"TopRight":case"CenterRight":case"BottomRight":t="flex-end";break}return{alignItems:r,justifyContent:t}},Gt=e=>R(R({},Xt(e)),Vt),Kt=[{funcName:"renderTopLeftControls",key:"TopLeft"},{funcName:"renderTopCenterControls",key:"TopCenter"},{funcName:"renderTopRightControls",key:"TopRight"},{funcName:"renderCenterLeftControls",key:"CenterLeft"},{funcName:"renderCenterCenterControls",key:"CenterCenter"},{funcName:"renderCenterRightControls",key:"CenterRight"},{funcName:"renderBottomLeftControls",key:"BottomLeft"},{funcName:"renderBottomCenterControls",key:"BottomCenter"},{funcName:"renderBottomRightControls",key:"BottomRight"}],qt=(e,r,t,n,l,i,a)=>{if(e.withoutControls)return null;const d=Se(R({},e),{currentSlide:t,slideCount:r}),c=Ot(d),g=zt(d),f=pe(r,a,e.scrollMode,e.slidesToShow,e.wrapAround,e.cellAlign);return Kt.map(p=>{var h;return!e[p.funcName]||typeof e[p.funcName]!="function"?s.jsx(o.Fragment,{},p.funcName):s.jsx("div",{style:Se(R({},Gt(p.key)),{pointerEvents:"none"}),children:s.jsx("div",{className:[`slider-control-${p.key.toLowerCase()}`,e.defaultControlsConfig.containerClassName||""].join(" ").trim(),style:{pointerEvents:"auto"},children:(h=e[p.funcName])==null?void 0:h.call(e,{cellAlign:e.cellAlign,cellSpacing:e.cellSpacing,currentSlide:t,defaultControlsConfig:e.defaultControlsConfig||{},pagingDotsIndices:f,goToSlide:n,nextDisabled:c,nextSlide:l,onUserNavigation:e.onUserNavigation,previousDisabled:g,previousSlide:i,scrollMode:e.scrollMode,slideCount:r,slidesToScroll:a,slidesToShow:e.slidesToShow||1,vertical:e.vertical,wrapAround:e.wrapAround})})},p.funcName)})},Yt=qt,Oe=e=>Tt(e-1,3)+1,Jt={adaptiveHeight:!1,adaptiveHeightAnimation:!0,afterSlide:()=>{},autoplay:!1,autoplayInterval:3e3,autoplayReverse:!1,beforeSlide:()=>{},cellAlign:"left",cellSpacing:0,defaultControlsConfig:{},disableAnimation:!1,disableEdgeSwiping:!1,dragging:!0,dragThreshold:.5,easing:Oe,edgeEasing:Oe,enableKeyboardControls:!1,frameAriaLabel:"carousel-slider",keyCodeConfig:{nextSlide:[39,68,38,87],previousSlide:[37,65,40,83],firstSlide:[81],lastSlide:[69],pause:[32]},onDragStart:()=>{},onDrag:()=>{},onDragEnd:()=>{},onUserNavigation:()=>{},pauseOnHover:!0,renderAnnounceSlideMessage:Bt,renderBottomCenterControls:e=>s.jsx(Ht,R({},e)),renderCenterLeftControls:e=>s.jsx(_t,R({},e)),renderCenterRightControls:e=>s.jsx(Ft,R({},e)),scrollMode:"page",slidesToScroll:1,slidesToShow:1,speed:500,style:{},swiping:!0,vertical:!1,withoutControls:!1,wrapAround:!1,children:s.jsx(s.Fragment,{})},Qt=Jt,Zt=e=>{const[r,t]=o.useState(e),n=o.useRef(e),l=o.useCallback(i=>{n.current=i,t(i)},[]);return[r,l,n]},er=(e,r,t)=>{const[n,l,i]=Zt([]),[a,d]=o.useState(!1),c=o.useCallback((f,p)=>{const h=i.current;let b;p===null?b=h.filter(w=>w.slideIndex!==f):b=[...h,{slideIndex:f,height:p}],l(b),b.length>=Math.min(t,Math.ceil(r))&&d(!0)},[t,l,r,i]),g=o.useMemo(()=>e&&a?`${Math.max(0,...n.map(p=>p.height))}px`:"auto",[e,a,n]);return{handleVisibleSlideHeightChange:c,frameHeight:g,initializedAdaptiveHeight:a}},tr=e=>{const r=o.useRef(null);return o.useEffect(()=>{e&&(typeof e=="function"?e(r.current):e.current=r.current)},[e]),r},Te=ke.forwardRef((e,r)=>{const t=e,{adaptiveHeight:n,adaptiveHeightAnimation:l,afterSlide:i,animation:a,autoplay:d,autoplayInterval:c,autoplayReverse:g,beforeSlide:f,cellAlign:p,cellSpacing:h,children:b,className:w,disableAnimation:L,dragging:B,dragThreshold:G,enableKeyboardControls:$,frameAriaLabel:K,keyCodeConfig:E,onDrag:z,onDragEnd:_,onDragStart:C,onUserNavigation:O,pauseOnHover:D,renderAnnounceSlideMessage:q,scrollMode:te,slideIndex:k,slidesToScroll:W,slidesToShow:Y,slideWidth:J,speed:oe,style:Xe,swiping:Me,wrapAround:T,zoomScale:Ge}=t,De=ke.Children.toArray(b).filter(Boolean),M=De.length,N=J||W==="auto"?"left":p,F=W==="auto"?"remainder":te,[fe,Ke]=o.useState(new Map),he=Array.from(fe).filter(([,u])=>u).length,[Pe,qe]=o.useState(he),S=J?Pe:Y,P=a==="fade"?S:W==="auto"?Math.max(Pe,1):W,[j,Ye]=o.useState(()=>$t(k,M,S,P,N,g,F)),[Q,me]=o.useState(!1),[A,xe]=o.useState(!1),[re,Le]=o.useState(0),[Je,Qe]=o.useState(0),[Ne,Ze]=o.useState(!1),et=o.useCallback((u,m)=>{!!fe.get(u)!==m&&Ke(x=>{const y=new Map(x);return y.set(u,m),y})},[fe]),ve=o.useRef(!1);o.useEffect(()=>{A&&(ve.current=!0),A||Ne||(ve.current||qe(he),ve.current=!1)},[Ne,A,he]);const ne=o.useRef(null),be=o.useRef(0),V=o.useRef(null),tt=o.useRef(null),we=o.useRef(),se=o.useRef(null),ye=o.useRef(!0),rt=o.useCallback(u=>{u&&u.querySelectorAll(".slider-list img").forEach(m=>m.setAttribute("draggable","false")),V.current=u},[]);o.useEffect(()=>(ye.current=!0,()=>{ye.current=!1}),[]);const v=tr(r)||tt,I=o.useCallback(u=>{if(!V.current||!v.current)return;const m=He(u,M),x=u!==j;x&&f(j,m);const y=V.current.getBoundingClientRect().left-v.current.getBoundingClientRect().left,X=V.current.offsetWidth;let ue=Re(m,M,S,N,T)/100*X;if(T){const ie=X/3;u<0&&(ue+=ie),u>=M&&(ue-=ie)}Qe(ue-y),x&&(Ye(m),setTimeout(()=>{ye.current&&i(m)},L?40:oe||500))},[i,f,v,N,j,L,oe,M,S,T]),le=o.useCallback(()=>{const u=ze(F,T,j,M,P,S,N);j!==u&&I(u)},[N,j,I,P,F,M,S,T]),ce=o.useCallback(()=>{const u=_e(F,T,j,P,S,N);j!==u&&I(u)},[N,j,I,P,F,S,T]),Ae=o.useRef(k);o.useEffect(()=>{k!==void 0&&k!==Ae.current&&!g&&(I(k),Ae.current=k)},[k,g,I]),o.useEffect(()=>{let u=null;return Q&&(u=Date.now()),()=>{u!==null&&se.current!==null&&(se.current+=Date.now()-u)}},[Q]),o.useEffect(()=>{if(d&&!Q){const u=se.current!==null?c-(Date.now()-se.current):c;we.current=setTimeout(()=>{se.current=Date.now(),g?ce():le()},u)}return d&&Q&&clearTimeout(we.current),()=>{clearTimeout(we.current)}},[Q,d,c,g,ce,le]);const nt=u=>{let m=null;if(Object.keys(E).forEach(x=>{var y;(y=E[x])!=null&&y.includes(u.keyCode)&&(m=x)}),m!==null)switch(u.preventDefault(),u.stopPropagation(),m){case"nextSlide":O(u),le();break;case"previousSlide":O(u),ce();break;case"firstSlide":case"lastSlide":{O(u);const x=pe(M,P,F,S,T,N);I(m==="firstSlide"?x[0]:x[x.length-1]);break}case"pause":me(x=>!x);break}},H=o.useRef([]),Ie=u=>{if(!A||!v.current)return;xe(!1);let m=0;if(H.current.length>1){const ae=H.current[0],Be=H.current[H.current.length-1],pt=Be.time-ae.time,ft=9,ht=.92;let je=ft*Math.abs((Be.pos-ae.pos)/pt);for(;Math.abs(je)>1;)m+=je,je*=ht}H.current=[];const x=Math.abs(re)+Math.abs(m);_(u),ne.current=null,Le(0);const y=v.current.offsetWidth*Math.min(1,P/S),X=y*G;if(x<X){I(j);return}const ie=S>=2*P?1+Math.floor((x-X)/y):1;let Z=j;for(let ae=0;ae<ie;ae+=1)re>0?Z=ze(F,T,Z,M,P,S,N):Z=_e(F,T,Z,P,S,N);Z!==j&&O(u),I(Z)},st=o.useCallback(u=>{!Me||!V.current||!v.current||(xe(!0),be.current=V.current.getBoundingClientRect().left-v.current.getBoundingClientRect().left,C(u))},[v,C,Me]),de=o.useCallback(u=>{if(!A)return;const m=ne.current===null,x=ne.current!==null?u-ne.current:0,y=re+x,X=Date.now();for(;H.current.length>0&&!(X-H.current[0].time<=100);)H.current.shift();H.current.push({pos:y,time:X}),m||Le(y),ne.current=u},[A,re]),it=o.useCallback(u=>{if(!A||!v.current)return;C(u);const m=v.current.offsetWidth-u.touches[0].pageX;de(m)},[A,v,de,C]),at=o.useCallback(u=>{!B||!V.current||!v.current||(xe(!0),be.current=V.current.getBoundingClientRect().left-v.current.getBoundingClientRect().left,C(u))},[v,B,C]),ot=o.useCallback(u=>{if(!A||!v.current)return;z(u);const m=u.clientX-v.current.getBoundingClientRect().left,x=v.current.offsetWidth-m;de(x)},[v,A,de,z]),Ue=u=>{u.preventDefault(),Ie(u)},lt=o.useCallback(()=>{D&&me(!0)},[D]),ct=o.useCallback(()=>{D&&me(!1)},[D]),{frameHeight:dt,handleVisibleSlideHeightChange:ut,initializedAdaptiveHeight:gt}=er(n,S,M),Ce=u=>De.map((x,y)=>s.jsx(At,{id:`${u}-${y}`,count:M,index:y,isCurrentSlide:j===y,typeOfSlide:u,wrapAround:T,cellSpacing:h,animation:a,speed:oe,zoomScale:Ge,onVisibleSlideHeightChange:ut,slideWidth:J,updateIOEntry:et,adaptiveHeight:n,initializedAdaptiveHeight:gt,carouselRef:v,children:x},`${u}-${y}`));return s.jsxs("div",{className:"slider-container",style:{position:"relative"},onMouseEnter:lt,onMouseLeave:ct,children:[s.jsx(Et,{ariaLive:d&&!Q?"off":"polite",message:q({currentSlide:j,count:M})}),Yt(t,M,j,I,le,ce,P),s.jsx("div",{className:["slider-frame",w||""].join(" ").trim(),style:R({overflow:"hidden",width:"100%",position:"relative",outline:"none",touchAction:"pan-y",height:dt,transition:l?"height 300ms ease-in-out":void 0,willChange:"height",userSelect:"none"},Xe),"aria-label":K,role:"region",tabIndex:$?0:-1,onKeyDown:$?nt:void 0,ref:v,onMouseUp:Ue,onMouseDown:at,onMouseMove:ot,onMouseLeave:Ue,onTouchStart:st,onTouchEnd:Ie,onTouchMove:it,children:s.jsxs(Ve,{animationDistance:Je,cellAlign:N,currentSlide:j,disableEdgeSwiping:t.disableEdgeSwiping,draggedOffset:be.current-re,disableAnimation:L,easing:t.easing,edgeEasing:t.edgeEasing,isDragging:A,ref:rt,scrollMode:F,animation:a,slideCount:M,slidesToScroll:P,slidesToShow:S,speed:oe,slideWidth:J,wrapAround:T,setIsAnimating:Ze,children:[T?Ce("prev-cloned"):null,Ce(),T?Ce("next-cloned"):null]})})]})});Te.defaultProps=Qt;Te.displayName="Carousel";const rr=["/images/peacemaker.jpg","/images/meg2.jpg","/images/transformer.jpg","/images/opp.jpg","/images/fmab.jpg","/images/bleach.jpg"],ge=U.a`
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
`;function vr(){const[e,r]=o.useState(!1),t=[{imageSrc:"/images/peacemaker.jpg",playLink:"/player",trailerLink:"/trailer/spidey",text:"Peacemaker",genre:"Action"},{imageSrc:"/images/meg2.jpg",playLink:"/player",trailerLink:"/trailer/transformer",text:"One Piece: Live Action",genre:"Adventure"},{imageSrc:"/images/transformer.jpg",playLink:"/player",trailerLink:"/trailer/got",text:"Transformer: Rise of The Beast",genre:"Sci-fi"},{imageSrc:"/images/opp.jpg",playLink:"/player",trailerLink:"/trailer/ig",text:"Oppenheimer",genre:"Sci-fi"},{imageSrc:"/images/fmab.jpg",playLink:"/player",trailerLink:"/trailer/d",text:"Fullmetal Alchemist Brotherhood",genre:"Adventure"},{imageSrc:"/images/bleach.jpg",playLink:"/player",trailerLink:"/trailer/s",text:"Bleach: Thousand Year Blood War ",genre:"Action"}];return s.jsx("div",{children:s.jsx(Te,{autoplay:!0,wrapAround:!0,speed:1e3,slidesToShow:1,style:{height:"85vh",width:"100vw",backgroundColor:"#212016",marginTop:"-70px"},renderCenterLeftControls:({previousSlide:n})=>s.jsx("button",{onClick:n,className:"carousel-button",style:{margin:"10px",left:"70px",background:"transparent",border:"none",color:"black",display:"flex",alignItems:"center",justifyContent:"center",padding:"5px",borderRadius:"10%",width:"40px",height:"60px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)",border:"1px solid black"},children:s.jsx(ee,{icon:mt,size:"2x",color:"white",style:{fontSize:"30px"}})}),renderCenterRightControls:({nextSlide:n})=>s.jsx("button",{onClick:n,className:"carousel-button",style:{margin:"10px",right:"70px",background:"transparent",border:"none",color:"white",display:"flex",alignItems:"center",justifyContent:"center",padding:"5px",borderRadius:"10%",width:"40px",height:"60px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)",border:"1px solid white"},children:s.jsx(ee,{icon:xt,size:"2x",color:"white",style:{fontSize:"30px"}})}),renderBottomCenterControls:({slideCount:n,currentSlide:l,goToSlide:i})=>s.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.map((a,d)=>s.jsx("img",{src:rr[d],alt:`Dot ${d+1}`,style:{height:"50px",width:"100%",marginBottom:"110px",cursor:"pointer",margin:"5px",opacity:l===d?1:.5,border:"1px solid black"},onClick:()=>i(d)},d))}),children:t.map((n,l)=>s.jsx("div",{className:"carousel-item",children:s.jsxs("div",{style:{position:"relative"},children:[s.jsx("img",{src:n.imageSrc,alt:`Image ${l+1}`,style:{width:"100%",height:"85vh"}}),s.jsx("div",{style:{position:"absolute",marginLeft:"50px",bottom:"60px",left:"0",right:"0",backgroundColor:"tranparent",color:"#000",fontWeight:"bold",padding:"5px 10px",display:"flex",justifyContent:"space-between",alignItems:"center",fontFamily:"Montserrat, sans-serif"},children:s.jsxs("div",{children:[s.jsxs("div",{style:{fontSize:"50px",fontFamily:"Montserrat, sans-serif"},children:[n.text,s.jsx("div",{style:{fontSize:"15px",marginTop:"5px",fontFamily:"Montserrat, sans-serif",backgroundColor:"#fff",color:"#000",width:"100px",height:"30px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"100px",border:"1px solid black"},children:n.genre})]}),s.jsx("div",{style:{fontSize:"15px"},children:e?s.jsx("iframe",{title:`Trailer ${l+1}`,width:"560",height:"315",src:n.trailerSrc,frameBorder:"0",allowFullScreen:!0}):s.jsxs(s.Fragment,{children:[s.jsxs(ge,{href:n.playLink,onClick:i=>{i.preventDefault(),i.target.classList.toggle("clicked")},style:{height:"50px",border:"1px solid black"},children:[s.jsx(ee,{icon:vt,size:"2x",style:{height:"20px",marginRight:"5px"}}),"Play"]}),s.jsxs(ge,{href:n.trailerLink,onClick:i=>{i.preventDefault(),i.target.classList.toggle("clicked")},style:{height:"50px",border:"1px solid black"},children:[s.jsx(ee,{icon:bt,size:"2x",style:{height:"20px",marginRight:"5px"}}),"Trailer"]}),s.jsx(ge,{href:n.trailerLink,onClick:i=>{i.preventDefault(),i.target.classList.toggle("clicked")},style:{height:"50px",border:"1px solid black"},children:s.jsx(ee,{icon:wt,size:"2x",style:{height:"20px",marginRight:"5px"}})}),s.jsxs(ge,{href:n.trailerLink,onClick:i=>{i.preventDefault(),i.target.classList.toggle("clicked")},style:{height:"50px",border:"1px solid black"},children:[s.jsx(ee,{icon:yt,size:"2x",style:{height:"20px",marginRight:"5px"}}),"Share"]})]})})]})})]})},l))})})}const nr=U.h1`
  text-align: center;
  font-fapeacemakerly: 'Gotham', sans-serif;
  color: white;
  font-size: 30px; /* Set the font size */
  margin-left: -75%;
  font-weight:bold;
`,sr=U.div`
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
`,ir=U.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,ar=U.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

`,or=U.button`
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
`;function br(){const[e,r]=o.useState(1),t=16,n=[{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"}],l=(e-1)*t,i=l+t,a=n.slice(l,i),d=c=>{r(c)};return s.jsxs("div",{style:{backgroundColor:"black",height:"95vh",marginBottom:"20px",width:"100vw"},children:[s.jsx(nr,{children:"| New Series"}),s.jsx(ir,{children:a.map((c,g)=>s.jsxs(sr,{imageUrl:c.imageUrl,children:[s.jsx("div",{className:"title",children:c.title}),s.jsxs("button",{className:"watch-button",href:"/player",children:[s.jsx(Fe,{className:"play-icon"})," Watch"]})]},g))}),s.jsx(ar,{children:Array.from({length:Math.ceil(n.length/t)},(c,g)=>s.jsx(or,{onClick:()=>d(g+1),active:g+1===e,children:g+1},g))})]})}const lr=U.h1`
  text-align: center;
  font-fapeacemakerly: 'Gotham', sans-serif;
  color: white;
  font-size: 30px; /* Set the font size */
  margin-left: -75%;
  font-weight:bold;
`,cr=U.div`
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
`,dr=U.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,ur=U.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

`,gr=U.button`
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
`;function wr(){const[e,r]=o.useState(1),t=16,n=[{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Stranger Things 1",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"},{title:"Card 2",imageUrl:"https://television.mxdwn.com/wp-content/uploads/2016/08/stranger-things1-770x470.jpeg"}],l=(e-1)*t,i=l+t,a=n.slice(l,i),d=c=>{r(c)};return s.jsxs("div",{style:{backgroundColor:"black",height:"95vh",marginTop:"-15px",width:"100vw"},children:[s.jsx(lr,{children:"| New Animes"}),s.jsx(dr,{children:a.map((c,g)=>s.jsxs(cr,{imageUrl:c.imageUrl,children:[s.jsx("div",{className:"title",children:c.title}),s.jsxs("button",{className:"watch-button",href:"/player",children:[s.jsx(Fe,{className:"play-icon"})," Watch"]})]},g))}),s.jsx(ur,{children:Array.from({length:Math.ceil(n.length/t)},(c,g)=>s.jsx(gr,{onClick:()=>d(g+1),active:g+1===e,children:g+1},g))})]})}export{br as A,vr as M,wr as a};
