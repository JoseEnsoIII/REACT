var Sn=Object.defineProperty;var On=(t,e,n)=>e in t?Sn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var zt=(t,e,n)=>(On(t,typeof e!="symbol"?e+"":e,n),n);import{g as Pn,R as $e,s as F,r as Cn,j as u,L as rt}from"./index-a520d23b.js";import{m as En,p as Nn,q as jn}from"./index.esm-ee168830.js";function pe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?pe(Object(n),!0).forEach(function(a){P(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Ct(t){"@babel/helpers - typeof";return Ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ct(t)}function In(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function he(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Tn(t,e,n){return e&&he(t.prototype,e),n&&he(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function P(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ne(t,e){return Mn(t)||zn(t,e)||Ue(t,e)||Fn()}function dt(t){return _n(t)||Ln(t)||Ue(t)||Rn()}function _n(t){if(Array.isArray(t))return $t(t)}function Mn(t){if(Array.isArray(t))return t}function Ln(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function zn(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function Ue(t,e){if(t){if(typeof t=="string")return $t(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $t(t,e)}}function $t(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Rn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var be=function(){},ae={},We={},Ve=null,Be={mark:be,measure:be};try{typeof window<"u"&&(ae=window),typeof document<"u"&&(We=document),typeof MutationObserver<"u"&&(Ve=MutationObserver),typeof performance<"u"&&(Be=performance)}catch{}var Dn=ae.navigator||{},ge=Dn.userAgent,ye=ge===void 0?"":ge,U=ae,x=We,xe=Ve,ht=Be;U.document;var D=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",Ge=~ye.indexOf("MSIE")||~ye.indexOf("Trident/"),bt,gt,yt,xt,wt,L="___FONT_AWESOME___",Ut=16,Xe="fa",qe="svg-inline--fa",K="data-fa-i2svg",Wt="data-fa-pseudo-element",Hn="data-fa-pseudo-element-pending",re="data-prefix",ie="data-icon",we="fontawesome-i2svg",Yn="async",$n=["HTML","HEAD","STYLE","SCRIPT"],Ke=function(){try{return!0}catch{return!1}}(),y="classic",w="sharp",oe=[y,w];function vt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[y]}})}var ft=vt((bt={},P(bt,y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),P(bt,w,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),bt)),lt=vt((gt={},P(gt,y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),P(gt,w,{solid:"fass",regular:"fasr",light:"fasl"}),gt)),ct=vt((yt={},P(yt,y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),P(yt,w,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),yt)),Un=vt((xt={},P(xt,y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),P(xt,w,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),xt)),Wn=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Qe="fa-layers-text",Vn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Bn=vt((wt={},P(wt,y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),P(wt,w,{900:"fass",400:"fasr",300:"fasl"}),wt)),Je=[1,2,3,4,5,6,7,8,9,10],Gn=Je.concat([11,12,13,14,15,16,17,18,19,20]),Xn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],X={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ut=new Set;Object.keys(lt[y]).map(ut.add.bind(ut));Object.keys(lt[w]).map(ut.add.bind(ut));var qn=[].concat(oe,dt(ut),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",X.GROUP,X.SWAP_OPACITY,X.PRIMARY,X.SECONDARY]).concat(Je.map(function(t){return"".concat(t,"x")})).concat(Gn.map(function(t){return"w-".concat(t)})),ot=U.FontAwesomeConfig||{};function Kn(t){var e=x.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Qn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(x&&typeof x.querySelector=="function"){var Jn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Jn.forEach(function(t){var e=ne(t,2),n=e[0],a=e[1],r=Qn(Kn(n));r!=null&&(ot[a]=r)})}var Ze={styleDefault:"solid",familyDefault:"classic",cssPrefix:Xe,replacementClass:qe,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ot.familyPrefix&&(ot.cssPrefix=ot.familyPrefix);var nt=m(m({},Ze),ot);nt.autoReplaceSvg||(nt.observeMutations=!1);var v={};Object.keys(Ze).forEach(function(t){Object.defineProperty(v,t,{enumerable:!0,set:function(n){nt[t]=n,st.forEach(function(a){return a(v)})},get:function(){return nt[t]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(e){nt.cssPrefix=e,st.forEach(function(n){return n(v)})},get:function(){return nt.cssPrefix}});U.FontAwesomeConfig=v;var st=[];function Zn(t){return st.push(t),function(){st.splice(st.indexOf(t),1)}}var Y=Ut,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ta(t){if(!(!t||!D)){var e=x.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=x.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return x.head.insertBefore(e,a),t}}var ea="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function mt(){for(var t=12,e="";t-- >0;)e+=ea[Math.random()*62|0];return e}function at(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function se(t){return t.classList?at(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function tn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function na(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(tn(t[n]),'" ')},"").trim()}function It(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function fe(t){return t.size!==M.size||t.x!==M.x||t.y!==M.y||t.rotate!==M.rotate||t.flipX||t.flipY}function aa(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}function ra(t){var e=t.transform,n=t.width,a=n===void 0?Ut:n,r=t.height,i=r===void 0?Ut:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&Ge?f+="translate(".concat(e.x/Y-a/2,"em, ").concat(e.y/Y-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(e.x/Y,"em), calc(-50% + ").concat(e.y/Y,"em)) "):f+="translate(".concat(e.x/Y,"em, ").concat(e.y/Y,"em) "),f+="scale(".concat(e.size/Y*(e.flipX?-1:1),", ").concat(e.size/Y*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var ia=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function en(){var t=Xe,e=qe,n=v.cssPrefix,a=v.replacementClass,r=ia;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var ke=!1;function Rt(){v.autoAddCss&&!ke&&(ta(en()),ke=!0)}var oa={mixout:function(){return{dom:{css:en,insertCss:Rt}}},hooks:function(){return{beforeDOMElementCreation:function(){Rt()},beforeI2svg:function(){Rt()}}}},z=U||{};z[L]||(z[L]={});z[L].styles||(z[L].styles={});z[L].hooks||(z[L].hooks={});z[L].shims||(z[L].shims=[]);var T=z[L],nn=[],sa=function t(){x.removeEventListener("DOMContentLoaded",t),Et=1,nn.map(function(e){return e()})},Et=!1;D&&(Et=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),Et||x.addEventListener("DOMContentLoaded",sa));function fa(t){D&&(Et?setTimeout(t,0):nn.push(t))}function pt(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?tn(t):"<".concat(e," ").concat(na(a),">").concat(i.map(pt).join(""),"</").concat(e,">")}function Ae(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var la=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},Ft=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?la(n,r):n,f,l,c;for(a===void 0?(f=1,c=e[i[0]]):(f=0,c=a);f<o;f++)l=i[f],c=s(c,e[l],l,e);return c};function ca(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Vt(t){var e=ca(t);return e.length===1?e[0].toString(16):null}function ua(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Se(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function Bt(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Se(e);typeof T.hooks.addPack=="function"&&!r?T.hooks.addPack(t,Se(e)):T.styles[t]=m(m({},T.styles[t]||{}),i),t==="fas"&&Bt("fa",e)}var kt,At,St,J=T.styles,ma=T.shims,da=(kt={},P(kt,y,Object.values(ct[y])),P(kt,w,Object.values(ct[w])),kt),le=null,an={},rn={},on={},sn={},fn={},va=(At={},P(At,y,Object.keys(ft[y])),P(At,w,Object.keys(ft[w])),At);function pa(t){return~qn.indexOf(t)}function ha(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!pa(r)?r:null}var ln=function(){var e=function(i){return Ft(J,function(o,s,f){return o[f]=Ft(s,i,{}),o},{})};an=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),rn=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),fn=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var n="far"in J||v.autoFetchSvg,a=Ft(ma,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});on=a.names,sn=a.unicodes,le=Tt(v.styleDefault,{family:v.familyDefault})};Zn(function(t){le=Tt(t.styleDefault,{family:v.familyDefault})});ln();function ce(t,e){return(an[t]||{})[e]}function ba(t,e){return(rn[t]||{})[e]}function q(t,e){return(fn[t]||{})[e]}function cn(t){return on[t]||{prefix:null,iconName:null}}function ga(t){var e=sn[t],n=ce("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function W(){return le}var ue=function(){return{prefix:null,iconName:null,rest:[]}};function Tt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?y:n,r=ft[a][t],i=lt[a][t]||lt[a][r],o=t in T.styles?t:null;return i||o||null}var Oe=(St={},P(St,y,Object.keys(ct[y])),P(St,w,Object.keys(ct[w])),St);function _t(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},P(e,y,"".concat(v.cssPrefix,"-").concat(y)),P(e,w,"".concat(v.cssPrefix,"-").concat(w)),e),o=null,s=y;(t.includes(i[y])||t.some(function(l){return Oe[y].includes(l)}))&&(s=y),(t.includes(i[w])||t.some(function(l){return Oe[w].includes(l)}))&&(s=w);var f=t.reduce(function(l,c){var d=ha(v.cssPrefix,c);if(J[c]?(c=da[s].includes(c)?Un[s][c]:c,o=c,l.prefix=c):va[s].indexOf(c)>-1?(o=c,l.prefix=Tt(c,{family:s})):d?l.iconName=d:c!==v.replacementClass&&c!==i[y]&&c!==i[w]&&l.rest.push(c),!r&&l.prefix&&l.iconName){var p=o==="fa"?cn(l.iconName):{},b=q(l.prefix,l.iconName);p.prefix&&(o=null),l.iconName=p.iconName||b||l.iconName,l.prefix=p.prefix||l.prefix,l.prefix==="far"&&!J.far&&J.fas&&!v.autoFetchSvg&&(l.prefix="fas")}return l},ue());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===w&&(J.fass||v.autoFetchSvg)&&(f.prefix="fass",f.iconName=q(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=W()||"fas"),f}var ya=function(){function t(){In(this,t),this.definitions={}}return Tn(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=m(m({},n.definitions[s]||{}),o[s]),Bt(s,o[s]);var f=ct[y][s];f&&Bt(f,o[s]),ln()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,l=o.icon,c=l[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=l)}),n[s][f]=l}),n}}]),t}(),Pe=[],Z={},et={},xa=Object.keys(et);function wa(t,e){var n=e.mixoutsTo;return Pe=t,Z={},Object.keys(et).forEach(function(a){xa.indexOf(a)===-1&&delete et[a]}),Pe.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Ct(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Z[o]||(Z[o]=[]),Z[o].push(i[o])})}a.provides&&a.provides(et)}),n}function Gt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=Z[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function Q(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=Z[t]||[];r.forEach(function(i){i.apply(null,n)})}function R(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return et[t]?et[t].apply(null,e):void 0}function Xt(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||W();if(e)return e=q(n,e)||e,Ae(un.definitions,n,e)||Ae(T.styles,n,e)}var un=new ya,ka=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,Q("noAuto")},Aa={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(Q("beforeI2svg",e),R("pseudoElements2svg",e),R("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,fa(function(){Oa({autoReplaceSvgRoot:n}),Q("watch",e)})}},Sa={icon:function(e){if(e===null)return null;if(Ct(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:q(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Tt(e[0]);return{prefix:a,iconName:q(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(v.cssPrefix,"-"))>-1||e.match(Wn))){var r=_t(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||W(),iconName:q(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=W();return{prefix:i,iconName:q(i,e)||e}}}},I={noAuto:ka,config:v,dom:Aa,parse:Sa,library:un,findIconDefinition:Xt,toHtml:pt},Oa=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?x:n;(Object.keys(T.styles).length>0||v.autoFetchSvg)&&D&&v.autoReplaceSvg&&I.dom.i2svg({node:a})};function Mt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return pt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(D){var a=x.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Pa(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(fe(o)&&n.found&&!a.found){var s=n.width,f=n.height,l={x:s/f/2,y:.5};r.style=It(m(m({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ca(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(v.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:o}),children:a}]}]}function me(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,l=t.maskId,c=t.titleId,d=t.extra,p=t.watchable,b=p===void 0?!1:p,S=a.found?a:n,E=S.width,k=S.height,N=r==="fak",A=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(H){return d.classes.indexOf(H)===-1}).filter(function(H){return H!==""||!!H}).concat(d.classes).join(" "),O={children:[],attributes:m(m({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:A,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(k)})},j=N&&!~d.classes.indexOf("fa-fw")?{width:"".concat(E/k*16*.0625,"em")}:{};b&&(O.attributes[K]=""),f&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(c||mt())},children:[f]}),delete O.attributes.title);var C=m(m({},O),{},{prefix:r,iconName:i,main:n,mask:a,maskId:l,transform:o,symbol:s,styles:m(m({},j),d.styles)}),B=a.found&&n.found?R("generateAbstractMask",C)||{children:[],attributes:{}}:R("generateAbstractIcon",C)||{children:[],attributes:{}},G=B.children,Lt=B.attributes;return C.children=G,C.attributes=Lt,s?Ca(C):Pa(C)}function Ce(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,l=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(l[K]="");var c=m({},o.styles);fe(r)&&(c.transform=ra({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);var d=It(c);d.length>0&&(l.style=d);var p=[];return p.push({tag:"span",attributes:l,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Ea(t){var e=t.content,n=t.title,a=t.extra,r=m(m(m({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=It(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Dt=T.styles;function qt(t){var e=t[0],n=t[1],a=t.slice(4),r=ne(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(X.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(X.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(X.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Na={found:!1,width:512,height:512};function ja(t,e){!Ke&&!v.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Kt(t,e){var n=e;return e==="fa"&&v.styleDefault!==null&&(e=W()),new Promise(function(a,r){if(R("missingIconAbstract"),n==="fa"){var i=cn(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Dt[e]&&Dt[e][t]){var o=Dt[e][t];return a(qt(o))}ja(t,e),a(m(m({},Na),{},{icon:v.showMissingIcons&&t?R("missingIconAbstract")||{}:{}}))})}var Ee=function(){},Qt=v.measurePerformance&&ht&&ht.mark&&ht.measure?ht:{mark:Ee,measure:Ee},it='FA "6.4.2"',Ia=function(e){return Qt.mark("".concat(it," ").concat(e," begins")),function(){return mn(e)}},mn=function(e){Qt.mark("".concat(it," ").concat(e," ends")),Qt.measure("".concat(it," ").concat(e),"".concat(it," ").concat(e," begins"),"".concat(it," ").concat(e," ends"))},de={begin:Ia,end:mn},Ot=function(){};function Ne(t){var e=t.getAttribute?t.getAttribute(K):null;return typeof e=="string"}function Ta(t){var e=t.getAttribute?t.getAttribute(re):null,n=t.getAttribute?t.getAttribute(ie):null;return e&&n}function _a(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(v.replacementClass)}function Ma(){if(v.autoReplaceSvg===!0)return Pt.replace;var t=Pt[v.autoReplaceSvg];return t||Pt.replace}function La(t){return x.createElementNS("http://www.w3.org/2000/svg",t)}function za(t){return x.createElement(t)}function dn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?La:za:n;if(typeof t=="string")return x.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(dn(o,{ceFn:a}))}),r}function Ra(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Pt={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(dn(r),n)}),n.getAttribute(K)===null&&v.keepOriginalSource){var a=x.createComment(Ra(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~se(n).indexOf(v.replacementClass))return Pt.replace(e);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===v.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return pt(s)}).join(`
`);n.setAttribute(K,""),n.innerHTML=o}};function je(t){t()}function vn(t,e){var n=typeof e=="function"?e:Ot;if(t.length===0)n();else{var a=je;v.mutateApproach===Yn&&(a=U.requestAnimationFrame||je),a(function(){var r=Ma(),i=de.begin("mutate");t.map(r),i(),n()})}}var ve=!1;function pn(){ve=!0}function Jt(){ve=!1}var Nt=null;function Ie(t){if(xe&&v.observeMutations){var e=t.treeCallback,n=e===void 0?Ot:e,a=t.nodeCallback,r=a===void 0?Ot:a,i=t.pseudoElementsCallback,o=i===void 0?Ot:i,s=t.observeMutationsRoot,f=s===void 0?x:s;Nt=new xe(function(l){if(!ve){var c=W();at(l).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Ne(d.addedNodes[0])&&(v.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&v.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Ne(d.target)&&~Xn.indexOf(d.attributeName))if(d.attributeName==="class"&&Ta(d.target)){var p=_t(se(d.target)),b=p.prefix,S=p.iconName;d.target.setAttribute(re,b||c),S&&d.target.setAttribute(ie,S)}else _a(d.target)&&r(d.target)})}}),D&&Nt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Fa(){Nt&&Nt.disconnect()}function Da(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Ha(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=_t(se(t));return r.prefix||(r.prefix=W()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ba(r.prefix,t.innerText)||ce(r.prefix,Vt(t.innerText))),!r.iconName&&v.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ya(t){var e=at(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return v.autoA11y&&(n?e["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(a||mt()):(e["aria-hidden"]="true",e.focusable="false")),e}function $a(){return{iconName:null,title:null,titleId:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Te(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ha(t),a=n.iconName,r=n.prefix,i=n.rest,o=Ya(t),s=Gt("parseNodeAttributes",{},t),f=e.styleParser?Da(t):[];return m({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Ua=T.styles;function hn(t){var e=v.autoReplaceSvg==="nest"?Te(t,{styleParser:!1}):Te(t);return~e.extra.classes.indexOf(Qe)?R("generateLayersText",t,e):R("generateSvgReplacementMutation",t,e)}var V=new Set;oe.map(function(t){V.add("fa-".concat(t))});Object.keys(ft[y]).map(V.add.bind(V));Object.keys(ft[w]).map(V.add.bind(V));V=dt(V);function _e(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();var n=x.documentElement.classList,a=function(d){return n.add("".concat(we,"-").concat(d))},r=function(d){return n.remove("".concat(we,"-").concat(d))},i=v.autoFetchSvg?V:oe.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Ua));i.includes("fa")||i.push("fa");var o=[".".concat(Qe,":not([").concat(K,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(K,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=at(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=de.begin("onTree"),l=s.reduce(function(c,d){try{var p=hn(d);p&&c.push(p)}catch(b){Ke||b.name==="MissingIcon"&&console.error(b)}return c},[]);return new Promise(function(c,d){Promise.all(l).then(function(p){vn(p,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),c()})}).catch(function(p){f(),d(p)})})}function Wa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hn(t).then(function(n){n&&vn([n],e)})}function Va(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Xt(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Xt(r||{})),t(a,m(m({},n),{},{mask:r}))}}var Ba=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?M:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,f=s===void 0?null:s,l=n.maskId,c=l===void 0?null:l,d=n.title,p=d===void 0?null:d,b=n.titleId,S=b===void 0?null:b,E=n.classes,k=E===void 0?[]:E,N=n.attributes,A=N===void 0?{}:N,O=n.styles,j=O===void 0?{}:O;if(e){var C=e.prefix,B=e.iconName,G=e.icon;return Mt(m({type:"icon"},e),function(){return Q("beforeDOMElementCreation",{iconDefinition:e,params:n}),v.autoA11y&&(p?A["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(S||mt()):(A["aria-hidden"]="true",A.focusable="false")),me({icons:{main:qt(G),mask:f?qt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:B,transform:m(m({},M),r),symbol:o,title:p,maskId:c,titleId:S,extra:{attributes:A,styles:j,classes:k}})})}},Ga={mixout:function(){return{icon:Va(Ba)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=_e,n.nodeCallback=Wa,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?x:a,i=n.callback,o=i===void 0?function(){}:i;return _e(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,l=a.symbol,c=a.mask,d=a.maskId,p=a.extra;return new Promise(function(b,S){Promise.all([Kt(r,s),c.iconName?Kt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var k=ne(E,2),N=k[0],A=k[1];b([n,me({icons:{main:N,mask:A},prefix:s,iconName:r,transform:f,symbol:l,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(S)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,f=It(s);f.length>0&&(r.style=f);var l;return fe(o)&&(l=R("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(l||i.icon),{children:a,attributes:r}}}},Xa={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Mt({type:"layer"},function(){Q("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(dt(i)).join(" ")},children:o}]})}}}},qa={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,l=f===void 0?{}:f,c=a.styles,d=c===void 0?{}:c;return Mt({type:"counter",content:n},function(){return Q("beforeDOMElementCreation",{content:n,params:a}),Ea({content:n.toString(),title:i,extra:{attributes:l,styles:d,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(dt(s))}})})}}}},Ka={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?M:r,o=a.title,s=o===void 0?null:o,f=a.classes,l=f===void 0?[]:f,c=a.attributes,d=c===void 0?{}:c,p=a.styles,b=p===void 0?{}:p;return Mt({type:"text",content:n},function(){return Q("beforeDOMElementCreation",{content:n,params:a}),Ce({content:n,transform:m(m({},M),i),title:s,extra:{attributes:d,styles:b,classes:["".concat(v.cssPrefix,"-layers-text")].concat(dt(l))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(Ge){var l=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/l,f=c.height/l}return v.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ce({content:n.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},Qa=new RegExp('"',"ug"),Me=[1105920,1112319];function Ja(t){var e=t.replace(Qa,""),n=ua(e,0),a=n>=Me[0]&&n<=Me[1],r=e.length===2?e[0]===e[1]:!1;return{value:Vt(r?e[0]:e),isSecondary:a||r}}function Le(t,e){var n="".concat(Hn).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=at(t.children),o=i.filter(function(G){return G.getAttribute(Wt)===e})[0],s=U.getComputedStyle(t,e),f=s.getPropertyValue("font-family").match(Vn),l=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(f[2])?w:y,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?lt[p][f[2].toLowerCase()]:Bn[p][l],S=Ja(d),E=S.value,k=S.isSecondary,N=f[0].startsWith("FontAwesome"),A=ce(b,E),O=A;if(N){var j=ga(E);j.iconName&&j.prefix&&(A=j.iconName,b=j.prefix)}if(A&&!k&&(!o||o.getAttribute(re)!==b||o.getAttribute(ie)!==O)){t.setAttribute(n,O),o&&t.removeChild(o);var C=$a(),B=C.extra;B.attributes[Wt]=e,Kt(A,b).then(function(G){var Lt=me(m(m({},C),{},{icons:{main:G,mask:ue()},prefix:b,iconName:O,extra:B,watchable:!0})),H=x.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(H,t.firstChild):t.appendChild(H),H.outerHTML=Lt.map(function(An){return pt(An)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Za(t){return Promise.all([Le(t,"::before"),Le(t,"::after")])}function tr(t){return t.parentNode!==document.head&&!~$n.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Wt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ze(t){if(D)return new Promise(function(e,n){var a=at(t.querySelectorAll("*")).filter(tr).map(Za),r=de.begin("searchPseudoElements");pn(),Promise.all(a).then(function(){r(),Jt(),e()}).catch(function(){r(),Jt(),n()})})}var er={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ze,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?x:a;v.searchPseudoElements&&ze(r)}}},Re=!1,nr={mixout:function(){return{dom:{unwatch:function(){pn(),Re=!0}}}},hooks:function(){return{bootstrap:function(){Ie(Gt("mutationObserverCallbacks",{}))},noAuto:function(){Fa()},watch:function(n){var a=n.observeMutationsRoot;Re?Jt():Ie(Gt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Fe=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},ar={mixout:function(){return{parse:{transform:function(n){return Fe(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Fe(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(f," ").concat(l," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:d,path:p};return{tag:"g",attributes:m({},b.outer),children:[{tag:"g",attributes:m({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),b.path)}]}]}}}},Ht={x:0,y:0,width:"100%",height:"100%"};function De(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function rr(t){return t.tag==="g"?t.children:[t]}var ir={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?_t(r.split(" ").map(function(o){return o.trim()})):ue();return i.prefix||(i.prefix=W()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,f=n.transform,l=i.width,c=i.icon,d=o.width,p=o.icon,b=aa({transform:f,containerWidth:d,iconWidth:l}),S={tag:"rect",attributes:m(m({},Ht),{},{fill:"white"})},E=c.children?{children:c.children.map(De)}:{},k={tag:"g",attributes:m({},b.inner),children:[De(m({tag:c.tag,attributes:m(m({},c.attributes),b.path)},E))]},N={tag:"g",attributes:m({},b.outer),children:[k]},A="mask-".concat(s||mt()),O="clip-".concat(s||mt()),j={tag:"mask",attributes:m(m({},Ht),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,N]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:rr(p)},j]};return a.push(C,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(A,")")},Ht)}),{children:a,attributes:r}}}},or={provides:function(e){var n=!1;U.matchMedia&&(n=U.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},sr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},fr=[oa,Ga,Xa,qa,Ka,er,nr,ar,ir,or,sr];wa(fr,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;var Zt=I.parse;I.findIconDefinition;I.toHtml;var lr=I.icon;I.layer;I.text;I.counter;var bn={exports:{}},cr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ur=cr,mr=ur;function gn(){}function yn(){}yn.resetWarningCache=gn;var dr=function(){function t(a,r,i,o,s,f){if(f!==mr){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:yn,resetWarningCache:gn};return n.PropTypes=n,n};bn.exports=dr();var vr=bn.exports;const h=Pn(vr);function He(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?He(Object(n),!0).forEach(function(a){tt(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):He(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function jt(t){"@babel/helpers - typeof";return jt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},jt(t)}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function hr(t,e){if(t==null)return{};var n=pr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function te(t){return br(t)||gr(t)||yr(t)||xr()}function br(t){if(Array.isArray(t))return ee(t)}function gr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function yr(t,e){if(t){if(typeof t=="string")return ee(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ee(t,e)}}function ee(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function xr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,l=t.spinPulse,c=t.spinReverse,d=t.pulse,p=t.fixedWidth,b=t.inverse,S=t.border,E=t.listItem,k=t.flip,N=t.size,A=t.rotation,O=t.pull,j=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":c,"fa-spin-pulse":l,"fa-pulse":d,"fa-fw":p,"fa-inverse":b,"fa-border":S,"fa-li":E,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},tt(e,"fa-".concat(N),typeof N<"u"&&N!==null),tt(e,"fa-rotate-".concat(A),typeof A<"u"&&A!==null&&A!==0),tt(e,"fa-pull-".concat(O),typeof O<"u"&&O!==null),tt(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(j).map(function(C){return j[C]?C:null}).filter(function(C){return C})}function kr(t){return t=t-0,t===t}function xn(t){return kr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Ar=["style"];function Sr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Or(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=xn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[Sr(r)]=i:e[r]=i,e},{})}function wn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(f){return wn(t,f)}),r=Object.keys(e.attributes||{}).reduce(function(f,l){var c=e.attributes[l];switch(l){case"class":f.attrs.className=c,delete e.attributes.class;break;case"style":f.attrs.style=Or(c);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?f.attrs[l.toLowerCase()]=c:f.attrs[xn(l)]=c}return f},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=hr(n,Ar);return r.attrs.style=$($({},r.attrs.style),o),t.apply(void 0,[e.tag,$($({},r.attrs),s)].concat(te(a)))}var kn=!1;try{kn=!0}catch{}function Pr(){if(!kn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ye(t){if(t&&jt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Zt.icon)return Zt.icon(t);if(t===null)return null;if(t&&jt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Yt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?tt({},t,e):{}}var _=$e.forwardRef(function(t,e){var n=t.icon,a=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,f=t.maskId,l=Ye(n),c=Yt("classes",[].concat(te(wr(t)),te(i.split(" ")))),d=Yt("transform",typeof t.transform=="string"?Zt.transform(t.transform):t.transform),p=Yt("mask",Ye(a)),b=lr(l,$($($($({},c),d),p),{},{symbol:r,title:o,titleId:s,maskId:f}));if(!b)return Pr("Could not find icon",l),null;var S=b.abstract,E={ref:e};return Object.keys(t).forEach(function(k){_.defaultProps.hasOwnProperty(k)||(E[k]=t[k])}),Cr(S[0],E)});_.displayName="FontAwesomeIcon";_.propTypes={beat:h.bool,border:h.bool,beatFade:h.bool,bounce:h.bool,className:h.string,fade:h.bool,flash:h.bool,mask:h.oneOfType([h.object,h.array,h.string]),maskId:h.string,fixedWidth:h.bool,inverse:h.bool,flip:h.oneOf([!0,!1,"horizontal","vertical","both"]),icon:h.oneOfType([h.object,h.array,h.string]),listItem:h.bool,pull:h.oneOf(["right","left"]),pulse:h.bool,rotation:h.oneOf([0,90,180,270]),shake:h.bool,size:h.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:h.bool,spinPulse:h.bool,spinReverse:h.bool,symbol:h.oneOfType([h.bool,h.string]),title:h.string,titleId:h.string,transform:h.oneOfType([h.string,h.object]),swapOpacity:h.bool};_.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Cr=wn.bind(null,$e.createElement),Er={prefix:"fas",iconName:"film",icon:[512,512,[127902],"f008","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z"]},Nr={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"]},jr={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},Gr={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},Xr={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},Ir={prefix:"fas",iconName:"mobile-screen-button",icon:[384,512,["mobile-alt"],"f3cd","M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"]},Tr=Ir,qr={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},_r={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Mr=_r,Kr={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},Lr={prefix:"fas",iconName:"tv",icon:[640,512,[63717,"television","tv-alt"],"f26c","M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},Qr={prefix:"fas",iconName:"share",icon:[512,512,["arrow-turn-right","mail-forward"],"f064","M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"]};const zr=F.div`
  position: fixed; /* Make the navigation bar sticky */
  top: 0; /* Stick it to the top of the viewport */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #191970;
  height: 70px;
  padding: 0 20px;
  font-family: "Gotham", sans-serif; /* Use the Gotham font */
  font-weight: bold; /* Make it bold */
  width: 100%; /* Ensure it spans the full width of the viewport */
  z-index: 100; /* Ensure it's above other content */
  border-bottom: 1px solid black; /* Add the 1px solid black border at the bottom */
`,Rr=F(rt)`
  font-family: "Gotham", sans-serif;
  font-size: 24px;
  height: 80px;
  display: flex;
  align-items: center;
  margin-right: auto;
  padding: 0 20px;
  font-weight: bold;
  color: white;
  text-decoration: none; // Remove the underline
  
  @media (max-width: 640px) {
  font-size:20px;
  }
`,Fr=F.div`
  position: fixed;
  top: 0;
  right: 15%;
  width: 300px;
  height: 100%;
  transition: right 0.3s ease-in-out;
  z-index: ${t=>t.isOpen?"1000":"-1"};
  background: rgba(255, 255, 255, 0.1); /* Adjust the background color and opacity */
  backdrop-filter: blur(10px); /* Adjust the blur amount for the glassmorphism effect */
  border-radius: 10px; /* Add border-radius for rounded corners */
  /* ... other styles */

  @media (max-width: 1200px) {
    width: 280px;
  }

  @media (max-width: 992px) {
    width: 250px;
  }

  @media (max-width: 768px) {
    width: 200px;
    right: 0;
  }

  @media (max-width: 320px) {
    width: 180px;
  }
`,Dr=F.div`
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 5%;
  margin-right: 20%; // Updated margin for smaller screens
  border: 1px solid black;
  height: 30px;
  border-radius: 5px;

  @media (max-width: 1200px) {
    margin-right: 5%;
  }

  @media (max-width: 992px) {
    margin-right: 5%;
  }

  @media (max-width: 768px) {
    margin-right: 5%;
  }

  @media (max-width: 640px) {
    margin-right: 5%; // Hide the HeaderButton on smaller screens
  }

  @media (max-width: 320px) {
    margin-right: 5%;// Hide the HeaderButton on screens less than 320px
  }
`,Hr=F.div`
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    margin-right: 0;
    display:none;
  }
  
  @media (max-width: 640px) {
    display: none; // Hide the NavButton on smaller screens
  }
`,Yr=F.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-right: 15%;

  @media (max-width: 1200px) {
    margin-right: 10%;
   
  }

  @media (max-width: 992px) {
    margin-right: 10%;
    display: none;
  }

  @media (max-width: 768px) {
    margin-right: 10%;
    display: none;
  }

  @media (max-width: 640px) {
    display: none; // Hide the LoginLink on smaller screens
  }
`,$r=F.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,g=F.a`
  padding: 5px 10px;
  background-color: transparent;
  color: #000;
  border-radius: 5px;
  text-decoration: none;
  border: 1px solid black;
`,Ur=F.div`
color: white;
display: flex;
align-items: center;
margin: 20px;
font-family: "Gotham", sans-serif;
font-size: 16px;
margin-right: 23%;

ul {
  list-style: none;
  padding: 0;
  display: flex;
  margin: 0;
  justify-content: space-between;
}

li {
  margin: 0 25px;
  font-size: 20px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }

  a {
    text-decoration: none;
    color: white;
    position: relative;
    transition: color 0.3s, transform 0.3s;

    &:before {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: 3px;
      background: rgb(2,0,36);
      background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(0,212,255,1) 100%);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s;
    }

    &:hover {
      color: #ffff;

      &:before {
        transform: scaleX(1);
      }
    }
  }
}
@media (max-width: 1000px) {
  margin-right: 0;
  display:none;
}

@media (max-width: 640px) {
  display: none; // Hide the NavButton on smaller screens
}
`;class Jr extends Cn.Component{constructor(n){super(n);zt(this,"toggleSidebar",()=>{this.setState(n=>({isSidebarOpen:!n.isSidebarOpen}))});zt(this,"handleSearchChange",n=>{this.setState({searchTerm:n.target.value})});this.state={searchTerm:"",isSidebarOpen:!1}}render(){const{searchTerm:n,isSidebarOpen:a}=this.state;return u.jsxs("nav",{style:{height:"60px"},children:[u.jsxs(zr,{children:[u.jsx(Rr,{to:"/",children:"ReactFlix "}),u.jsx(Dr,{onClick:this.toggleSidebar,children:u.jsx(En,{style:{width:"40px"}})}),u.jsx(Hr,{children:u.jsx(Nn,{style:{color:"white"}})}),u.jsx(Ur,{children:u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx(rt,{to:"/home",children:"Home"})}),u.jsx("li",{children:u.jsx(rt,{to:"/movie",children:"Movies"})}),u.jsx("li",{children:u.jsx(rt,{to:"/series",children:"Series"})}),u.jsx("li",{children:u.jsx(rt,{to:"/anime",children:"Anime"})})]})}),u.jsxs(Yr,{href:"/login",children:[u.jsx(jn,{className:"user-icon",style:{margin:"5px"}}),u.jsx("span",{children:"Login"})]})]}),u.jsxs(Fr,{isOpen:a,children:[u.jsx("button",{onClick:this.toggleSidebar,style:{position:"absolute",top:"20px",right:"10px",borderRadius:"10px",width:"40px",height:"30px",background:"#666666",cursor:"pointer",border:"1px solid black",fontSize:"15px"},children:"←"}),u.jsx("br",{}),u.jsxs("ul",{children:[u.jsx("h3",{style:{color:"black"},children:"SideMenu"}),u.jsx("div",{style:{marginBottom:"20px"},children:u.jsxs("a",{href:"/home",style:{color:"black",textDecoration:"none",fontSize:"20px",marginLeft:"5px"},children:[u.jsx(_,{icon:Mr})," Home"]})}),u.jsx("div",{style:{marginBottom:"20px"},children:u.jsxs("a",{href:"/movie",style:{color:"black",textDecoration:"none",fontSize:"20px",marginLeft:"5px"},children:[u.jsx(_,{icon:Er})," Movies"]})}),u.jsx("div",{style:{marginBottom:"20px"},children:u.jsxs("a",{href:"/series",style:{color:"black",textDecoration:"none",fontSize:"20px",marginLeft:"5px"},children:[u.jsx(_,{icon:Lr})," TV Shows"]})}),u.jsx("div",{style:{marginBottom:"20px"},children:u.jsxs("a",{href:"/anime",style:{color:"black",textDecoration:"none",fontSize:"20px",marginLeft:"5px"},children:[u.jsx(_,{icon:Tr})," Anime"]})}),u.jsx("div",{style:{marginBottom:"20px"},children:u.jsxs("a",{href:"/top-imdb",style:{color:"black",textDecoration:"none",fontSize:"20px",marginLeft:"5px"},children:[u.jsx(_,{icon:jr})," Top IMDB"]})}),u.jsx("div",{style:{marginBottom:"20px"},children:u.jsxs("a",{href:"/login",style:{color:"Red",textDecoration:"none",fontSize:"20px",marginLeft:"5px"},children:[u.jsx(_,{icon:Nr})," Login"]})}),u.jsx("h3",{style:{color:"black"},children:"GENRE"}),u.jsxs($r,{children:[u.jsx(g,{href:"/action",children:"Action"}),u.jsx(g,{href:"/action-adventure",children:"Action & Adventure"}),u.jsx(g,{href:"/adventure",children:"Adventure"}),u.jsx(g,{href:"/animation",children:"Animation"}),u.jsx(g,{href:"/biography",children:"Biography"}),u.jsx(g,{href:"/comedy",children:"Comedy"}),u.jsx(g,{href:"/crime",children:"Crime"}),u.jsx(g,{href:"/documentary",children:"Documentary"}),u.jsx(g,{href:"/drama",children:"Drama"}),u.jsx(g,{href:"/family",children:"Family"}),u.jsx(g,{href:"/fantasy",children:"Fantasy"}),u.jsx(g,{href:"/history",children:"History"}),u.jsx(g,{href:"/horror",children:"Horror"}),u.jsx(g,{href:"/kids",children:"Kids"}),u.jsx(g,{href:"/music",children:"Music"}),u.jsx(g,{href:"/mystery",children:"Mystery"}),u.jsx(g,{href:"/news",children:"News"}),u.jsx(g,{href:"/reality",children:"Reality"}),u.jsx(g,{href:"/romance",children:"Romance"}),u.jsx(g,{href:"/sci-fi-fantasy",children:"Sci-Fi & Fantasy"}),u.jsx(g,{href:"/science-fiction",children:"Science Fiction"}),u.jsx(g,{href:"/soap",children:"Soap"}),u.jsx(g,{href:"/talk",children:"Talk"}),u.jsx(g,{href:"/thriller",children:"Thriller"}),u.jsx(g,{href:"/tv-movie",children:"TV Movie"}),u.jsx(g,{href:"/war",children:"War"}),u.jsx(g,{href:"/war-politics",children:"War & Politics"}),u.jsx(g,{href:"/western",children:"Western"})]})]})]})]})}}export{_ as F,Jr as N,h as P,Gr as a,Kr as b,Er as c,Xr as d,Qr as e,qr as f};
