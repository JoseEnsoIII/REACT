import{c as mt,R as de,r as g,j as l,s as M}from"./index-ef4458a9.js";import{F as he,f as xt,a as bt,b as vt,c as yt,d as wt,e as kt}from"./index-9758f4da.js";import{d as Le}from"./index.esm-f965c28b.js";var jt={exports:{}};(function(e,a){(function(n,r){e.exports=r()})(mt,function(){return function(n){function r(t){if(o[t])return o[t].exports;var s=o[t]={exports:{},id:t,loaded:!1};return n[t].call(s.exports,s,s.exports,r),s.loaded=!0,s.exports}var o={};return r.m=n,r.c=o,r.p="dist/",r(0)}([function(n,r,o){function t(v){return v&&v.__esModule?v:{default:v}}var s=Object.assign||function(v){for(var P=1;P<arguments.length;P++){var Y=arguments[P];for(var ie in Y)Object.prototype.hasOwnProperty.call(Y,ie)&&(v[ie]=Y[ie])}return v},d=o(1),p=(t(d),o(6)),i=t(p),c=o(7),f=t(c),h=o(8),b=t(h),y=o(9),C=t(y),R=o(10),ee=t(R),K=o(11),ne=t(K),U=o(14),X=t(U),A=[],_=!1,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},z=function(){var v=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(v&&(_=!0),_)return A=(0,ne.default)(A,j),(0,ee.default)(A,j.once),A},J=function(){A=(0,X.default)(),z()},x=function(){A.forEach(function(v,P){v.node.removeAttribute("data-aos"),v.node.removeAttribute("data-aos-easing"),v.node.removeAttribute("data-aos-duration"),v.node.removeAttribute("data-aos-delay")})},u=function(v){return v===!0||v==="mobile"&&C.default.mobile()||v==="phone"&&C.default.phone()||v==="tablet"&&C.default.tablet()||typeof v=="function"&&v()===!0},w=function(v){j=s(j,v),A=(0,X.default)();var P=document.all&&!window.atob;return u(j.disable)||P?x():(j.disableMutationObserver||b.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),j.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),j.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?z(!0):j.startEvent==="load"?window.addEventListener(j.startEvent,function(){z(!0)}):document.addEventListener(j.startEvent,function(){z(!0)}),window.addEventListener("resize",(0,f.default)(z,j.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(z,j.debounceDelay,!0)),window.addEventListener("scroll",(0,i.default)(function(){(0,ee.default)(A,j.once)},j.throttleDelay)),j.disableMutationObserver||b.default.ready("[data-aos]",J),A)};n.exports={init:w,refresh:z,refreshHard:J}},function(n,r){},,,,,function(n,r){(function(o){function t(u,w,v){function P(k){var V=D,W=te;return D=te=void 0,O=k,B=u.apply(W,V)}function Y(k){return O=k,$=setTimeout(L,w),F?P(k):B}function ie(k){var V=k-Q,W=k-O,pe=w-V;return S?J(pe,re-W):pe}function ae(k){var V=k-Q,W=k-O;return Q===void 0||V>=w||V<0||S&&W>=re}function L(){var k=x();return ae(k)?ue(k):void($=setTimeout(L,ie(k)))}function ue(k){return $=void 0,T&&D?P(k):(D=te=void 0,B)}function fe(){$!==void 0&&clearTimeout($),O=0,D=Q=te=$=void 0}function H(){return $===void 0?B:ue(x())}function E(){var k=x(),V=ae(k);if(D=arguments,te=this,Q=k,V){if($===void 0)return Y(Q);if(S)return $=setTimeout(L,w),P(Q)}return $===void 0&&($=setTimeout(L,w)),B}var D,te,re,B,$,Q,O=0,F=!1,S=!1,T=!0;if(typeof u!="function")throw new TypeError(h);return w=c(w)||0,d(v)&&(F=!!v.leading,S="maxWait"in v,re=S?z(c(v.maxWait)||0,w):re,T="trailing"in v?!!v.trailing:T),E.cancel=fe,E.flush=H,E}function s(u,w,v){var P=!0,Y=!0;if(typeof u!="function")throw new TypeError(h);return d(v)&&(P="leading"in v?!!v.leading:P,Y="trailing"in v?!!v.trailing:Y),t(u,w,{leading:P,maxWait:w,trailing:Y})}function d(u){var w=typeof u>"u"?"undefined":f(u);return!!u&&(w=="object"||w=="function")}function p(u){return!!u&&(typeof u>"u"?"undefined":f(u))=="object"}function i(u){return(typeof u>"u"?"undefined":f(u))=="symbol"||p(u)&&j.call(u)==y}function c(u){if(typeof u=="number")return u;if(i(u))return b;if(d(u)){var w=typeof u.valueOf=="function"?u.valueOf():u;u=d(w)?w+"":w}if(typeof u!="string")return u===0?u:+u;u=u.replace(C,"");var v=ee.test(u);return v||K.test(u)?ne(u.slice(2),v?2:8):R.test(u)?b:+u}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},h="Expected a function",b=NaN,y="[object Symbol]",C=/^\s+|\s+$/g,R=/^[-+]0x[0-9a-f]+$/i,ee=/^0b[01]+$/i,K=/^0o[0-7]+$/i,ne=parseInt,U=(typeof o>"u"?"undefined":f(o))=="object"&&o&&o.Object===Object&&o,X=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,A=U||X||Function("return this")(),_=Object.prototype,j=_.toString,z=Math.max,J=Math.min,x=function(){return A.Date.now()};n.exports=s}).call(r,function(){return this}())},function(n,r){(function(o){function t(x,u,w){function v(T){var k=E,V=D;return E=D=void 0,Q=T,re=x.apply(V,k)}function P(T){return Q=T,B=setTimeout(ae,u),O?v(T):re}function Y(T){var k=T-$,V=T-Q,W=u-k;return F?z(W,te-V):W}function ie(T){var k=T-$,V=T-Q;return $===void 0||k>=u||k<0||F&&V>=te}function ae(){var T=J();return ie(T)?L(T):void(B=setTimeout(ae,Y(T)))}function L(T){return B=void 0,S&&E?v(T):(E=D=void 0,re)}function ue(){B!==void 0&&clearTimeout(B),Q=0,E=$=D=B=void 0}function fe(){return B===void 0?re:L(J())}function H(){var T=J(),k=ie(T);if(E=arguments,D=this,$=T,k){if(B===void 0)return P($);if(F)return B=setTimeout(ae,u),v($)}return B===void 0&&(B=setTimeout(ae,u)),re}var E,D,te,re,B,$,Q=0,O=!1,F=!1,S=!0;if(typeof x!="function")throw new TypeError(f);return u=i(u)||0,s(w)&&(O=!!w.leading,F="maxWait"in w,te=F?j(i(w.maxWait)||0,u):te,S="trailing"in w?!!w.trailing:S),H.cancel=ue,H.flush=fe,H}function s(x){var u=typeof x>"u"?"undefined":c(x);return!!x&&(u=="object"||u=="function")}function d(x){return!!x&&(typeof x>"u"?"undefined":c(x))=="object"}function p(x){return(typeof x>"u"?"undefined":c(x))=="symbol"||d(x)&&_.call(x)==b}function i(x){if(typeof x=="number")return x;if(p(x))return h;if(s(x)){var u=typeof x.valueOf=="function"?x.valueOf():x;x=s(u)?u+"":u}if(typeof x!="string")return x===0?x:+x;x=x.replace(y,"");var w=R.test(x);return w||ee.test(x)?K(x.slice(2),w?2:8):C.test(x)?h:+x}var c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x},f="Expected a function",h=NaN,b="[object Symbol]",y=/^\s+|\s+$/g,C=/^[-+]0x[0-9a-f]+$/i,R=/^0b[01]+$/i,ee=/^0o[0-7]+$/i,K=parseInt,ne=(typeof o>"u"?"undefined":c(o))=="object"&&o&&o.Object===Object&&o,U=(typeof self>"u"?"undefined":c(self))=="object"&&self&&self.Object===Object&&self,X=ne||U||Function("return this")(),A=Object.prototype,_=A.toString,j=Math.max,z=Math.min,J=function(){return X.Date.now()};n.exports=t}).call(r,function(){return this}())},function(n,r){function o(c){var f=void 0,h=void 0;for(f=0;f<c.length;f+=1)if(h=c[f],h.dataset&&h.dataset.aos||h.children&&o(h.children))return!0;return!1}function t(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function s(){return!!t()}function d(c,f){var h=window.document,b=t(),y=new b(p);i=f,y.observe(h.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function p(c){c&&c.forEach(function(f){var h=Array.prototype.slice.call(f.addedNodes),b=Array.prototype.slice.call(f.removedNodes),y=h.concat(b);if(o(y))return i()})}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){};r.default={isSupported:s,ready:d}},function(n,r){function o(h,b){if(!(h instanceof b))throw new TypeError("Cannot call a class as a function")}function t(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function h(b,y){for(var C=0;C<y.length;C++){var R=y[C];R.enumerable=R.enumerable||!1,R.configurable=!0,"value"in R&&(R.writable=!0),Object.defineProperty(b,R.key,R)}}return function(b,y,C){return y&&h(b.prototype,y),C&&h(b,C),b}}(),d=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function h(){o(this,h)}return s(h,[{key:"phone",value:function(){var b=t();return!(!d.test(b)&&!p.test(b.substr(0,4)))}},{key:"mobile",value:function(){var b=t();return!(!i.test(b)&&!c.test(b.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),h}();r.default=new f},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var o=function(s,d,p){var i=s.node.getAttribute("data-aos-once");d>s.position?s.node.classList.add("aos-animate"):typeof i<"u"&&(i==="false"||!p&&i!=="true")&&s.node.classList.remove("aos-animate")},t=function(s,d){var p=window.pageYOffset,i=window.innerHeight;s.forEach(function(c,f){o(c,i+p,d)})};r.default=t},function(n,r,o){function t(i){return i&&i.__esModule?i:{default:i}}Object.defineProperty(r,"__esModule",{value:!0});var s=o(12),d=t(s),p=function(i,c){return i.forEach(function(f,h){f.node.classList.add("aos-init"),f.position=(0,d.default)(f.node,c.offset)}),i};r.default=p},function(n,r,o){function t(i){return i&&i.__esModule?i:{default:i}}Object.defineProperty(r,"__esModule",{value:!0});var s=o(13),d=t(s),p=function(i,c){var f=0,h=0,b=window.innerHeight,y={offset:i.getAttribute("data-aos-offset"),anchor:i.getAttribute("data-aos-anchor"),anchorPlacement:i.getAttribute("data-aos-anchor-placement")};switch(y.offset&&!isNaN(y.offset)&&(h=parseInt(y.offset)),y.anchor&&document.querySelectorAll(y.anchor)&&(i=document.querySelectorAll(y.anchor)[0]),f=(0,d.default)(i).top,y.anchorPlacement){case"top-bottom":break;case"center-bottom":f+=i.offsetHeight/2;break;case"bottom-bottom":f+=i.offsetHeight;break;case"top-center":f+=b/2;break;case"bottom-center":f+=b/2+i.offsetHeight;break;case"center-center":f+=b/2+i.offsetHeight/2;break;case"top-top":f+=b;break;case"bottom-top":f+=i.offsetHeight+b;break;case"center-top":f+=i.offsetHeight/2+b}return y.anchorPlacement||y.offset||isNaN(c)||(h=c),f+h};r.default=p},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var o=function(t){for(var s=0,d=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)s+=t.offsetLeft-(t.tagName!="BODY"?t.scrollLeft:0),d+=t.offsetTop-(t.tagName!="BODY"?t.scrollTop:0),t=t.offsetParent;return{top:d,left:s}};r.default=o},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var o=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,function(s){return{node:s}})};r.default=o}])})})(jt);var Ct=Object.defineProperty,St=Object.defineProperties,Mt=Object.getOwnPropertyDescriptors,We=Object.getOwnPropertySymbols,zt=Object.prototype.hasOwnProperty,Tt=Object.prototype.propertyIsEnumerable,Rt=Math.pow,qe=(e,a,n)=>a in e?Ct(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,Z=(e,a)=>{for(var n in a||(a={}))zt.call(a,n)&&qe(e,n,a[n]);if(We)for(var n of We(a))Tt.call(a,n)&&qe(e,n,a[n]);return e},_e=(e,a)=>St(e,Mt(a)),Ot=(e,a,n)=>{const[r,o]=g.useState(),t=g.useRef(n);return g.useEffect(()=>{t.current=n},[n]),g.useEffect(()=>{const s=e==null?void 0:e.current,d=a==null?void 0:a.current;if(!window.IntersectionObserver||!s||!d)return;const p=new IntersectionObserver(i=>{i.forEach(c=>{o(c),t.current(c)})},{threshold:[.05,.95],root:d});return p.observe(s),()=>p.disconnect()},[e,a]),r},Nt=(e,a)=>`${a?100/(3*e):100/e}%`,At=(e,a,n,r,o,t,s,d,p,i,c)=>{const f=c??Nt(e,r),h=n?1:0,b=t==="fade"?200:500;let y="auto";return p&&(i?y="100%":n?y="auto":y="0"),{width:f,height:y,padding:`0 ${o?o/2:0}px`,transition:t?`${s||b}ms ease 0s`:void 0,transform:t==="zoom"?`scale(${a&&n?1:d||.85})`:void 0,opacity:t==="fade"?h:1}},_t=(e,a,n)=>n==="prev-cloned"?e-a:n==="next-cloned"?e+a:e,Pt=({count:e,children:a,index:n,isCurrentSlide:r,typeOfSlide:o,wrapAround:t,cellSpacing:s,slideWidth:d,animation:p,speed:i,zoomScale:c,onVisibleSlideHeightChange:f,adaptiveHeight:h,initializedAdaptiveHeight:b,updateIOEntry:y,id:C,carouselRef:R})=>{var ee;const K=t?_t(n,e,o):n,ne=g.useRef(null),U=Ot(ne,R,z=>{y(C,(z==null?void 0:z.intersectionRatio)>=.95)}),X=!!(U!=null&&U.isIntersecting),A=((ee=U==null?void 0:U.intersectionRatio)!=null?ee:1)>=.95,_=g.useRef(!1);g.useEffect(()=>{var z;const J=ne.current;if(J){const x=(z=J.getBoundingClientRect())==null?void 0:z.height,u=_.current;X&&!u?f(K,x):!X&&u&&f(K,null),_.current=X}},[K,X,f]);const j=r&&A?" slide-current":"";return l.jsx("div",_e(Z({ref:ne},{inert:A?void 0:"true"}),{className:`slide${j}${o?` ${o}`:""}${A?" slide-visible":""}`,style:At(e,r,A,t,s,p,i,c,h,b,d),children:a}))},Lt=Pt,Et={position:"absolute",width:"1px",height:"1px",overflow:"hidden",padding:0,margin:"-1px",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},Dt=({message:e,ariaLive:a="polite"})=>l.jsx("div",{"aria-live":a,"aria-atomic":"true",style:Et,tabIndex:-1,children:e}),$t=({currentSlide:e,count:a})=>`Slide ${e+1} of ${a}`,It=Dt,Ve=(e,a,n,r,o,t,s)=>a?n+o:n>=r-1||s==="left"&&n>=r-t?n:e==="remainder"&&s==="left"?Math.min(n+o,r-t):Math.min(n+o,r-1),Ge=(e,a,n,r,o,t)=>a?n-r:n<=0||t==="right"&&n<=o-1?n:e==="remainder"&&t==="right"?Math.max(n-r,o-1):Math.max(n-r,0),Bt=(e,a,n,r,o,t,s)=>{if(e!==void 0)return e;const d=Me(a,r,s,n,!1,o);return t?d[d.length-1]:d[0]},Xe=(e,a)=>(e%a+a)%a,Ye=e=>({border:0,background:"rgba(0,0,0,0.4)",color:"white",padding:10,textTransform:"uppercase",opacity:e?.3:1,cursor:e?"not-allowed":"pointer"}),Ft=({cellAlign:e,currentSlide:a,slidesToShow:n,wrapAround:r})=>r?!1:a===0||e==="right"&&a<=n-1,Ht=({previousSlide:e,defaultControlsConfig:{prevButtonClassName:a,prevButtonStyle:n={},prevButtonText:r,prevButtonOnClick:o},onUserNavigation:t,previousDisabled:s})=>{const d=p=>{o==null||o(p),!p.defaultPrevented&&(t(p),p.preventDefault(),e())};return l.jsx("button",{className:a,style:Z(Z({},Ye(s)),n),disabled:s,onClick:d,"aria-label":"previous",type:"button",children:r||"Prev"})},Wt=({cellAlign:e,currentSlide:a,slideCount:n,slidesToShow:r,wrapAround:o})=>o?!1:a>=n-1||e==="left"&&a>=n-r,qt=({nextSlide:e,defaultControlsConfig:{nextButtonClassName:a,nextButtonStyle:n={},nextButtonText:r,nextButtonOnClick:o},nextDisabled:t,onUserNavigation:s})=>{const d=p=>{o==null||o(p),!p.defaultPrevented&&(s(p),p.preventDefault(),e())};return l.jsx("button",{className:a,style:Z(Z({},Ye(t)),n),disabled:t,onClick:d,"aria-label":"next",type:"button",children:r||"Next"})},Me=(e,a,n,r,o,t)=>{const s=[],d=a<=0?1:a;if(o){for(let p=0;p<e;p+=d)s.push(p);return s}if(t==="center"){for(let p=0;p<e-1;p+=d)s.push(p);return e>0&&s.push(e-1),s}if(t==="left"){if(r>=e)return[0];const p=e-r;for(let i=0;i<p;i+=d)s.push(i);return n==="remainder"?s.push(p):s.push(s[s.length-1]+d),s}if(t==="right"){if(r>=e)return[e-1];const p=r-1;if(n==="remainder"){for(let i=p;i<e-1;i+=d)s.push(i);s.push(e-1)}else{for(let i=e-1;i>p;i-=d)s.push(i);s.push(s[s.length-1]-d),s.reverse()}return s}return s},Vt=({pagingDotsIndices:e,defaultControlsConfig:{pagingDotsContainerClassName:a,pagingDotsClassName:n,pagingDotsStyle:r={},pagingDotsOnClick:o},currentSlide:t,onUserNavigation:s,slideCount:d,goToSlide:p})=>{const i={position:"relative",top:-10,display:"flex",margin:0,padding:0,listStyleType:"none"},c=g.useCallback(h=>({cursor:"pointer",opacity:h?1:.5,background:"transparent",border:"none",fill:"black"}),[]),f=Xe(t,d);return l.jsx("ul",{className:a,style:i,children:e.map((h,b)=>{const y=f===h||f<h&&(b===0||f>e[b-1]);return l.jsx("li",{className:y?"paging-item active":"paging-item",children:l.jsx("button",{className:n,type:"button",style:Z(Z({},c(y)),r),onClick:C=>{o==null||o(C),!C.defaultPrevented&&(s(C),p(h))},"aria-label":`slide ${h+1} bullet`,"aria-selected":y,children:l.jsx("svg",{className:"paging-dot",width:"6",height:"6","aria-hidden":"true",focusable:"false",viewBox:"0 0 6 6",children:l.jsx("circle",{cx:"3",cy:"3",r:"3"})})})},h)})})},Gt=(e,a,n,r)=>{const[o,t]=g.useState(1),s=g.useRef(Date.now()),d=g.useRef(),p=g.useRef(!0),i=g.useRef(null),c=i.current===null||i.current===n||r?o:0;return g.useEffect(()=>{if(i.current=n,p.current){p.current=!1;return}if(r)return;s.current=Date.now(),t(0);const f=()=>{d.current=requestAnimationFrame(()=>{const h=Date.now(),b=Math.min(1,(h-s.current)/e);t(b),b<1?f():d.current=void 0})};return f(),()=>{d.current!==void 0&&(cancelAnimationFrame(d.current),t(1))}},[n,e,r]),{isAnimating:c!==1,value:a(c)}},Pe=(e,a,n,r,o)=>{const t=o?3*a:a,s=100/t;let d=o?-100/3:0;if(r==="right"&&n>1){const i=n-1;d+=s*i}if(r==="center"&&n>1){const c=(n-1)/2;d+=s*c}const p=100/t*e;return d-p},Ke=de.forwardRef(({animation:e,animationDistance:a,cellAlign:n,children:r,currentSlide:o,disableAnimation:t,disableEdgeSwiping:s,draggedOffset:d,easing:p,edgeEasing:i,isDragging:c,scrollMode:f,slideCount:h,slidesToScroll:b,slidesToShow:y,speed:C,wrapAround:R,slideWidth:ee,setIsAnimating:K},ne)=>{const U=R?3*h:h,X=ee?`calc(${ee} * ${U})`:`${U*100/y}%`,A=[h,y,n,R],_=Me(h,b,f,y,R,n);let j=`${d}px`;if(c&&s&&!R){const v=[_[0],_[_.length-1]].map(P=>Pe(P,...A));j=`clamp(${v[1]}%, ${d}px, ${v[0]}%)`}const z=Pe(o,...A),J=!s&&!R&&(o===_[0]&&a<0||o===_[_.length-1]&&a>0),{value:x,isAnimating:u}=Gt(C,J?i:p,o+a,c||t||e==="fade");let w;if(c||z!==0||u)if(c)w=`translateX(${j})`;else{const v=u?(1-x)*a:0;w=`translateX(calc(${z}% - ${v}px))`}return g.useEffect(()=>{K(u)},[u,K]),l.jsx("div",{ref:ne,className:"slider-list",style:{width:X,textAlign:"left",userSelect:"auto",transform:w,display:"flex"},children:r})});Ke.displayName="SliderList";var Ut={position:"absolute",display:"flex",zIndex:1,top:0,left:0,bottom:0,right:0},Xt=e=>{let a;switch(e){case"TopLeft":case"TopCenter":case"TopRight":a="flex-start";break;case"CenterLeft":case"CenterCenter":case"CenterRight":a="center";break;case"BottomLeft":case"BottomCenter":case"BottomRight":a="flex-end";break}let n;switch(e){case"TopLeft":case"CenterLeft":case"BottomLeft":n="flex-start";break;case"TopCenter":case"CenterCenter":case"BottomCenter":n="center";break;case"TopRight":case"CenterRight":case"BottomRight":n="flex-end";break}return{alignItems:a,justifyContent:n}},Yt=e=>Z(Z({},Xt(e)),Ut),Kt=[{funcName:"renderTopLeftControls",key:"TopLeft"},{funcName:"renderTopCenterControls",key:"TopCenter"},{funcName:"renderTopRightControls",key:"TopRight"},{funcName:"renderCenterLeftControls",key:"CenterLeft"},{funcName:"renderCenterCenterControls",key:"CenterCenter"},{funcName:"renderCenterRightControls",key:"CenterRight"},{funcName:"renderBottomLeftControls",key:"BottomLeft"},{funcName:"renderBottomCenterControls",key:"BottomCenter"},{funcName:"renderBottomRightControls",key:"BottomRight"}],Jt=(e,a,n,r,o,t,s)=>{if(e.withoutControls)return null;const d=_e(Z({},e),{currentSlide:n,slideCount:a}),p=Wt(d),i=Ft(d),c=Me(a,s,e.scrollMode,e.slidesToShow,e.wrapAround,e.cellAlign);return Kt.map(f=>{var h;return!e[f.funcName]||typeof e[f.funcName]!="function"?l.jsx(g.Fragment,{},f.funcName):l.jsx("div",{style:_e(Z({},Yt(f.key)),{pointerEvents:"none"}),children:l.jsx("div",{className:[`slider-control-${f.key.toLowerCase()}`,e.defaultControlsConfig.containerClassName||""].join(" ").trim(),style:{pointerEvents:"auto"},children:(h=e[f.funcName])==null?void 0:h.call(e,{cellAlign:e.cellAlign,cellSpacing:e.cellSpacing,currentSlide:n,defaultControlsConfig:e.defaultControlsConfig||{},pagingDotsIndices:c,goToSlide:r,nextDisabled:p,nextSlide:o,onUserNavigation:e.onUserNavigation,previousDisabled:i,previousSlide:t,scrollMode:e.scrollMode,slideCount:a,slidesToScroll:s,slidesToShow:e.slidesToShow||1,vertical:e.vertical,wrapAround:e.wrapAround})})},f.funcName)})},Qt=Jt,Ue=e=>Rt(e-1,3)+1,Zt={adaptiveHeight:!1,adaptiveHeightAnimation:!0,afterSlide:()=>{},autoplay:!1,autoplayInterval:3e3,autoplayReverse:!1,beforeSlide:()=>{},cellAlign:"left",cellSpacing:0,defaultControlsConfig:{},disableAnimation:!1,disableEdgeSwiping:!1,dragging:!0,dragThreshold:.5,easing:Ue,edgeEasing:Ue,enableKeyboardControls:!1,frameAriaLabel:"carousel-slider",keyCodeConfig:{nextSlide:[39,68,38,87],previousSlide:[37,65,40,83],firstSlide:[81],lastSlide:[69],pause:[32]},onDragStart:()=>{},onDrag:()=>{},onDragEnd:()=>{},onUserNavigation:()=>{},pauseOnHover:!0,renderAnnounceSlideMessage:$t,renderBottomCenterControls:e=>l.jsx(Vt,Z({},e)),renderCenterLeftControls:e=>l.jsx(Ht,Z({},e)),renderCenterRightControls:e=>l.jsx(qt,Z({},e)),scrollMode:"page",slidesToScroll:1,slidesToShow:1,speed:500,style:{},swiping:!0,vertical:!1,withoutControls:!1,wrapAround:!1,children:l.jsx(l.Fragment,{})},en=Zt,tn=e=>{const[a,n]=g.useState(e),r=g.useRef(e),o=g.useCallback(t=>{r.current=t,n(t)},[]);return[a,o,r]},nn=(e,a,n)=>{const[r,o,t]=tn([]),[s,d]=g.useState(!1),p=g.useCallback((c,f)=>{const h=t.current;let b;f===null?b=h.filter(y=>y.slideIndex!==c):b=[...h,{slideIndex:c,height:f}],o(b),b.length>=Math.min(n,Math.ceil(a))&&d(!0)},[n,o,a,t]),i=g.useMemo(()=>e&&s?`${Math.max(0,...r.map(f=>f.height))}px`:"auto",[e,s,r]);return{handleVisibleSlideHeightChange:p,frameHeight:i,initializedAdaptiveHeight:s}},rn=e=>{const a=g.useRef(null);return g.useEffect(()=>{e&&(typeof e=="function"?e(a.current):e.current=a.current)},[e]),a},Ee=de.forwardRef((e,a)=>{const n=e,{adaptiveHeight:r,adaptiveHeightAnimation:o,afterSlide:t,animation:s,autoplay:d,autoplayInterval:p,autoplayReverse:i,beforeSlide:c,cellAlign:f,cellSpacing:h,children:b,className:y,disableAnimation:C,dragging:R,dragThreshold:ee,enableKeyboardControls:K,frameAriaLabel:ne,keyCodeConfig:U,onDrag:X,onDragEnd:A,onDragStart:_,onUserNavigation:j,pauseOnHover:z,renderAnnounceSlideMessage:J,scrollMode:x,slideIndex:u,slidesToScroll:w,slidesToShow:v,slideWidth:P,speed:Y,style:ie,swiping:ae,wrapAround:L,zoomScale:ue}=n,fe=de.Children.toArray(b).filter(Boolean),H=fe.length,E=P||w==="auto"?"left":f,D=w==="auto"?"remainder":x,[te,re]=g.useState(new Map),B=Array.from(te).filter(([,m])=>m).length,[$,Q]=g.useState(B),O=P?$:v,F=s==="fade"?O:w==="auto"?Math.max($,1):w,[S,T]=g.useState(()=>Bt(u,H,O,F,E,i,D)),[k,V]=g.useState(!1),[W,pe]=g.useState(!1),[me,De]=g.useState(0),[Je,Qe]=g.useState(0),[$e,Ze]=g.useState(!1),et=g.useCallback((m,N)=>{!!te.get(m)!==N&&re(I=>{const G=new Map(I);return G.set(m,N),G})},[te]),ze=g.useRef(!1);g.useEffect(()=>{W&&(ze.current=!0),W||$e||(ze.current||Q(B),ze.current=!1)},[$e,W,B]);const xe=g.useRef(null),Te=g.useRef(0),le=g.useRef(null),tt=g.useRef(null),Re=g.useRef(),be=g.useRef(null),Oe=g.useRef(!0),nt=g.useCallback(m=>{m&&m.querySelectorAll(".slider-list img").forEach(N=>N.setAttribute("draggable","false")),le.current=m},[]);g.useEffect(()=>(Oe.current=!0,()=>{Oe.current=!1}),[]);const q=rn(a)||tt,oe=g.useCallback(m=>{if(!le.current||!q.current)return;const N=Xe(m,H),I=m!==S;I&&c(S,N);const G=le.current.getBoundingClientRect().left-q.current.getBoundingClientRect().left,ce=le.current.offsetWidth;let Ce=Pe(N,H,O,E,L)/100*ce;if(L){const ve=ce/3;m<0&&(Ce+=ve),m>=H&&(Ce-=ve)}Qe(Ce-G),I&&(T(N),setTimeout(()=>{Oe.current&&t(N)},C?40:Y||500))},[t,c,q,E,S,C,Y,H,O,L]),we=g.useCallback(()=>{const m=Ve(D,L,S,H,F,O,E);S!==m&&oe(m)},[E,S,oe,F,D,H,O,L]),ke=g.useCallback(()=>{const m=Ge(D,L,S,F,O,E);S!==m&&oe(m)},[E,S,oe,F,D,O,L]),Ie=g.useRef(u);g.useEffect(()=>{u!==void 0&&u!==Ie.current&&!i&&(oe(u),Ie.current=u)},[u,i,oe]),g.useEffect(()=>{let m=null;return k&&(m=Date.now()),()=>{m!==null&&be.current!==null&&(be.current+=Date.now()-m)}},[k]),g.useEffect(()=>{if(d&&!k){const m=be.current!==null?p-(Date.now()-be.current):p;Re.current=setTimeout(()=>{be.current=Date.now(),i?ke():we()},m)}return d&&k&&clearTimeout(Re.current),()=>{clearTimeout(Re.current)}},[k,d,p,i,ke,we]);const rt=m=>{let N=null;if(Object.keys(U).forEach(I=>{var G;(G=U[I])!=null&&G.includes(m.keyCode)&&(N=I)}),N!==null)switch(m.preventDefault(),m.stopPropagation(),N){case"nextSlide":j(m),we();break;case"previousSlide":j(m),ke();break;case"firstSlide":case"lastSlide":{j(m);const I=Me(H,F,D,O,L,E);oe(N==="firstSlide"?I[0]:I[I.length-1]);break}case"pause":V(I=>!I);break}},se=g.useRef([]),Be=m=>{if(!W||!q.current)return;pe(!1);let N=0;if(se.current.length>1){const ye=se.current[0],He=se.current[se.current.length-1],pt=He.time-ye.time,gt=9,ht=.92;let Ae=gt*Math.abs((He.pos-ye.pos)/pt);for(;Math.abs(Ae)>1;)N+=Ae,Ae*=ht}se.current=[];const I=Math.abs(me)+Math.abs(N);A(m),xe.current=null,De(0);const G=q.current.offsetWidth*Math.min(1,F/O),ce=G*ee;if(I<ce){oe(S);return}const ve=O>=2*F?1+Math.floor((I-ce)/G):1;let ge=S;for(let ye=0;ye<ve;ye+=1)me>0?ge=Ve(D,L,ge,H,F,O,E):ge=Ge(D,L,ge,F,O,E);ge!==S&&j(m),oe(ge)},ot=g.useCallback(m=>{!ae||!le.current||!q.current||(pe(!0),Te.current=le.current.getBoundingClientRect().left-q.current.getBoundingClientRect().left,_(m))},[q,_,ae]),je=g.useCallback(m=>{if(!W)return;const N=xe.current===null,I=xe.current!==null?m-xe.current:0,G=me+I,ce=Date.now();for(;se.current.length>0&&!(ce-se.current[0].time<=100);)se.current.shift();se.current.push({pos:G,time:ce}),N||De(G),xe.current=m},[W,me]),it=g.useCallback(m=>{if(!W||!q.current)return;_(m);const N=q.current.offsetWidth-m.touches[0].pageX;je(N)},[W,q,je,_]),at=g.useCallback(m=>{!R||!le.current||!q.current||(pe(!0),Te.current=le.current.getBoundingClientRect().left-q.current.getBoundingClientRect().left,_(m))},[q,R,_]),st=g.useCallback(m=>{if(!W||!q.current)return;X(m);const N=m.clientX-q.current.getBoundingClientRect().left,I=q.current.offsetWidth-N;je(I)},[q,W,je,X]),Fe=m=>{m.preventDefault(),Be(m)},lt=g.useCallback(()=>{z&&V(!0)},[z]),ct=g.useCallback(()=>{z&&V(!1)},[z]),{frameHeight:dt,handleVisibleSlideHeightChange:ut,initializedAdaptiveHeight:ft}=nn(r,O,H),Ne=m=>fe.map((I,G)=>l.jsx(Lt,{id:`${m}-${G}`,count:H,index:G,isCurrentSlide:S===G,typeOfSlide:m,wrapAround:L,cellSpacing:h,animation:s,speed:Y,zoomScale:ue,onVisibleSlideHeightChange:ut,slideWidth:P,updateIOEntry:et,adaptiveHeight:r,initializedAdaptiveHeight:ft,carouselRef:q,children:I},`${m}-${G}`));return l.jsxs("div",{className:"slider-container",style:{position:"relative"},onMouseEnter:lt,onMouseLeave:ct,children:[l.jsx(It,{ariaLive:d&&!k?"off":"polite",message:J({currentSlide:S,count:H})}),Qt(n,H,S,oe,we,ke,F),l.jsx("div",{className:["slider-frame",y||""].join(" ").trim(),style:Z({overflow:"hidden",width:"100%",position:"relative",outline:"none",touchAction:"pan-y",height:dt,transition:o?"height 300ms ease-in-out":void 0,willChange:"height",userSelect:"none"},ie),"aria-label":ne,role:"region",tabIndex:K?0:-1,onKeyDown:K?rt:void 0,ref:q,onMouseUp:Fe,onMouseDown:at,onMouseMove:st,onMouseLeave:Fe,onTouchStart:ot,onTouchEnd:Be,onTouchMove:it,children:l.jsxs(Ke,{animationDistance:Je,cellAlign:E,currentSlide:S,disableEdgeSwiping:n.disableEdgeSwiping,draggedOffset:Te.current-me,disableAnimation:C,easing:n.easing,edgeEasing:n.edgeEasing,isDragging:W,ref:nt,scrollMode:D,animation:s,slideCount:H,slidesToScroll:F,slidesToShow:O,speed:Y,slideWidth:P,wrapAround:L,setIsAnimating:Ze,children:[L?Ne("prev-cloned"):null,Ne(),L?Ne("next-cloned"):null]})})]})});Ee.defaultProps=en;Ee.displayName="Carousel";const on=["/images/peacemaker.jpg","/images/meg2.jpg","/images/transformer.jpg","/images/opp.jpg","/images/fmab.jpg","/images/bleach.jpg"],Se=M.a`
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
`;function Hn(){const[e,a]=g.useState(!1),n=[{imageSrc:"/images/peacemaker.jpg",playLink:"/player",trailerLink:"/trailer/spidey",text:"Peacemaker",genre:"Action"},{imageSrc:"/images/meg2.jpg",playLink:"/player",trailerLink:"/trailer/transformer",text:"One Piece: Live Action",genre:"Adventure"},{imageSrc:"/images/transformer.jpg",playLink:"/player",trailerLink:"/trailer/got",text:"Transformer: Rise of The Beast",genre:"Sci-fi"},{imageSrc:"/images/opp.jpg",playLink:"/player",trailerLink:"/trailer/ig",text:"Oppenheimer",genre:"Sci-fi"},{imageSrc:"/images/fmab.jpg",playLink:"/player",trailerLink:"/trailer/d",text:"Fullmetal Alchemist Brotherhood",genre:"Adventure"},{imageSrc:"/images/bleach.jpg",playLink:"/player",trailerLink:"/trailer/s",text:"Bleach: Thousand Year Blood War ",genre:"Action"}];return l.jsx("div",{children:l.jsx(Ee,{autoplay:!0,wrapAround:!0,speed:1e3,slidesToShow:1,style:{height:"85vh",width:"100vw",backgroundColor:"#212016",marginTop:"-70px"},renderCenterLeftControls:({previousSlide:r})=>l.jsx("button",{onClick:r,className:"carousel-button",style:{margin:"10px",left:"70px",background:"transparent",color:"black",display:"flex",alignItems:"center",justifyContent:"center",padding:"5px",borderRadius:"10%",width:"40px",height:"60px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)",border:"1px solid black"},children:l.jsx(he,{icon:xt,size:"2x",color:"white",style:{fontSize:"30px"}})}),renderCenterRightControls:({nextSlide:r})=>l.jsx("button",{onClick:r,className:"carousel-button",style:{margin:"10px",right:"70px",background:"transparent",color:"white",display:"flex",alignItems:"center",justifyContent:"center",padding:"5px",borderRadius:"10%",width:"40px",height:"60px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)",border:"1px solid white"},children:l.jsx(he,{icon:bt,size:"2x",color:"white",style:{fontSize:"30px"}})}),renderBottomCenterControls:({slideCount:r,currentSlide:o,goToSlide:t})=>l.jsx("div",{style:{display:"flex",justifyContent:"center"},children:n.map((s,d)=>l.jsx("img",{src:on[d],alt:`Dot ${d+1}`,style:{height:"50px",width:"100%",marginBottom:"110px",cursor:"pointer",margin:"5px",opacity:o===d?1:.5,border:"1px solid black"},onClick:()=>t(d)},d))}),children:n.map((r,o)=>l.jsx("div",{className:"carousel-item",children:l.jsxs("div",{style:{position:"relative"},children:[l.jsx("img",{src:r.imageSrc,alt:`Image ${o+1}`,style:{width:"100%",height:"85vh"}}),l.jsx("div",{style:{position:"absolute",marginLeft:"50px",bottom:"60px",left:"0",right:"0",backgroundColor:"tranparent",color:"#000",fontWeight:"bold",padding:"5px 10px",display:"flex",justifyContent:"space-between",alignItems:"center",fontFamily:"Montserrat, sans-serif"},children:l.jsxs("div",{children:[l.jsxs("div",{style:{fontSize:"50px",fontFamily:"Montserrat, sans-serif"},children:[r.text,l.jsx("div",{style:{fontSize:"15px",marginTop:"5px",fontFamily:"Montserrat, sans-serif",backgroundColor:"#fff",color:"#000",width:"100px",height:"30px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"100px",border:"1px solid black"},children:r.genre})]}),l.jsx("div",{style:{fontSize:"15px"},children:e?l.jsx("iframe",{title:`Trailer ${o+1}`,width:"560",height:"315",src:r.trailerSrc,frameBorder:"0",allowFullScreen:!0}):l.jsxs(l.Fragment,{children:[l.jsxs(Se,{href:r.playLink,onClick:t=>{t.preventDefault(),t.target.classList.toggle("clicked")},style:{height:"50px",border:"1px solid black"},children:[l.jsx(he,{icon:vt,size:"2x",style:{height:"20px",marginRight:"5px"}}),"Play"]}),l.jsxs(Se,{href:r.trailerLink,onClick:t=>{t.preventDefault(),t.target.classList.toggle("clicked")},style:{height:"50px",border:"1px solid black"},children:[l.jsx(he,{icon:yt,size:"2x",style:{height:"20px",marginRight:"5px"}}),"Trailer"]}),l.jsx(Se,{href:r.trailerLink,onClick:t=>{t.preventDefault(),t.target.classList.toggle("clicked")},style:{height:"50px",border:"1px solid black"},children:l.jsx(he,{icon:wt,size:"2x",style:{height:"20px",marginRight:"5px"}})}),l.jsxs(Se,{href:r.trailerLink,onClick:t=>{t.preventDefault(),t.target.classList.toggle("clicked")},style:{height:"50px",border:"1px solid black"},children:[l.jsx(he,{icon:kt,size:"2x",style:{height:"20px",marginRight:"5px"}}),"Share"]})]})})]})})]})},o))})})}const an=M.h1`
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
`,sn=M.div`
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
`,ln=M.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    height: 100%;
  }
`,cn=M.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    margin-top: -10%;
  }
`,dn=M.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,un=M.button`
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
`;function fn(){const[e,a]=g.useState(1),n=16,[r,o]=g.useState([]);g.useEffect(()=>{(async()=>{try{const c=await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=b2d47bc45b9596fab31b362d1db590f9");if(c.ok){const f=await c.json();o(f.results)}else console.error("Failed to fetch trending movies")}catch(c){console.error(c)}})()},[]);const t=(e-1)*n,s=t+n,d=r.slice(t,s),p=i=>{a(i)};return l.jsxs(ln,{style:{height:"120vh",width:"100vw",backgroundColor:"transparent",marginTop:"-6%",marginLeft:"-2%"},children:[l.jsx(an,{className:"card-heading",children:"| Trending Movies"}),l.jsx(cn,{children:d.map((i,c)=>l.jsxs(sn,{imageUrl:`https://image.tmdb.org/t/p/w500/${i.poster_path}`,children:[l.jsx("div",{className:"title",children:i.title}),l.jsxs("button",{className:"watch-button",href:"/player",children:[l.jsx(Le,{className:"play-icon"})," Watch"]})]},c))}),l.jsx(dn,{children:Array.from({length:Math.ceil(r.length/n)},(i,c)=>l.jsx(un,{onClick:()=>p(c+1),active:c+1===e,children:c+1},c))})]})}const pn=M.h1`
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
`,gn=M.div`
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
`,hn=M.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    height: 100%;
  }
`,mn=M.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    margin-top: -10%;
  }
`,xn=M.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,bn=M.button`
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
`;function vn(){const[e,a]=g.useState(1),n=16,[r,o]=g.useState([]);g.useEffect(()=>{(async()=>{try{const c=await fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=b2d47bc45b9596fab31b362d1db590f9");if(c.ok){const f=await c.json();o(f.results)}else console.error("Failed to fetch trending movies")}catch(c){console.error(c)}})()},[]);const t=(e-1)*n,s=t+n,d=r.slice(t,s),p=i=>{a(i)};return l.jsxs(hn,{style:{height:"120vh",width:"100vw",backgroundColor:"transparent",marginTop:"-6%",marginLeft:"-2%"},children:[l.jsx(pn,{className:"card-heading",children:"| Trending Series"}),l.jsx(mn,{children:d.map((i,c)=>l.jsxs(gn,{imageUrl:`https://image.tmdb.org/t/p/w500/${i.poster_path}`,children:[l.jsx("div",{className:"title",children:i.title}),l.jsxs("button",{className:"watch-button",href:"/player",children:[l.jsx(Le,{className:"play-icon"})," Watch"]})]},c))}),l.jsx(xn,{children:Array.from({length:Math.ceil(r.length/n)},(i,c)=>l.jsx(bn,{onClick:()=>p(c+1),active:c+1===e,children:c+1},c))})]})}const yn=M.h1`
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
`,wn=M.div`
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
`,kn=M.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    height: 100%;
  }
`,jn=M.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    margin-top: -10%;
  }
`,Cn=M.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  
`,Sn=M.button`
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
`;function Mn(){const[e,a]=g.useState(1),n=16,[r,o]=g.useState([]);g.useEffect(()=>{(async()=>{try{const c=await fetch("https://api.themoviedb.org/3/trending/tv/day?api_key=b2d47bc45b9596fab31b362d1db590f9");if(c.ok){const f=await c.json();o(f.results)}else console.error("Failed to fetch trending movies")}catch(c){console.error(c)}})()},[]);const t=(e-1)*n,s=t+n,d=r.slice(t,s),p=i=>{a(i)};return l.jsxs(kn,{style:{height:"120vh",width:"100vw",backgroundColor:"transparent",marginTop:"-6%",marginLeft:"-2%"},children:[l.jsx(yn,{className:"card-heading",children:"| Trending Movies"}),l.jsx(jn,{children:d.map((i,c)=>l.jsxs(wn,{imageUrl:`https://image.tmdb.org/t/p/w500/${i.poster_path}`,children:[l.jsx("div",{className:"title",children:i.title}),l.jsxs("button",{className:"watch-button",href:"/player",children:[l.jsx(Le,{className:"play-icon"})," Watch"]})]},c))}),l.jsx(Cn,{children:Array.from({length:Math.ceil(r.length/n)},(i,c)=>l.jsx(Sn,{onClick:()=>p(c+1),active:c+1===e,children:c+1},c))})]})}const zn=M.div`
  background: transparent;
  width: 100vw; /* Set the width to 100vw */
  height: 140vh;
  padding: 1em;
  margin-left: auto;
  margin-right: 20px;
  border-top: 1px solid white;
  background: linear-gradient(to top, #000000 50%, #12104a 100%);

 
`,Tn=M.div`
  display: flex;
  align-items: center;
  font-family: "Gotham", sans-serif;
  font-size: 40px;
  color: white;
  
 
`,Rn=M.nav`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  color: white;

   @media (max-width: 640px) {
    margin-top:5%;
   margin-right:25%;
  }
`,On=M.button`
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
`;class Nn extends de.Component{render(){return l.jsx(fn,{})}}class An extends de.Component{render(){return l.jsx(vn,{})}}class _n extends de.Component{render(){return l.jsx(Mn,{})}}class Wn extends de.Component{constructor(a){super(a),this.state={items:[{name:"Movies",content:l.jsx(Nn,{})},{name:"Series",content:l.jsx(An,{})},{name:"Anime",content:l.jsx(_n,{})}],activeTab:0}}handleClick(a){this.setState({activeTab:a})}render(){const{items:a,activeTab:n}=this.state,r=a.map((o,t)=>l.jsx(On,{onClick:()=>this.handleClick(t),style:n===t?{color:"deepskyblue"}:{},children:o.name},t));return l.jsx("section",{children:l.jsxs(zn,{children:[l.jsx(Tn,{children:l.jsx(Rn,{children:r})}),l.jsx("div",{children:a[n].content})]})})}}const qn=()=>l.jsx(Pn,{children:l.jsx(Ln,{children:l.jsx(En,{href:"/",target:"_blank",style:{marginTop:"200px"},children:l.jsx("a",{href:"/",target:"_blank",style:{color:"black",textDecoration:"none"},children:"Visit Now"})})})}),Pn=M.section`
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
`,Ln=M.div`
  background-color: transparent;
  padding: 20px;
  border-radius: 5px;

  @media (max-width: 640px) {
    width: 100%;
    margin-top:-23%; /* Make the container fit within 640 pixels */
  }
`,En=M.button`
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
`;export{Hn as M,qn as S,Wn as T};
