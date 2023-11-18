var G=Object.defineProperty;var X=(r,i,o)=>i in r?G(r,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[i]=o;var y=(r,i,o)=>(X(r,typeof i!="symbol"?i+"":i,o),o);import{R as d,b as w,r as h,d as W,s as N,j as c}from"./index-c61d7640.js";import{P as T,N as q}from"./navbar1-41016fbc.js";import{C as z}from"./AnimeSection-115ff9dc.js";import{m as B,n as Y}from"./index.esm-8b7b8eba.js";import{A as H}from"./footer-64d2299b.js";import"./axios-3a76d256.js";import"./iconBase-78b2458b.js";function j(){return j=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(r[t]=o[t])}return r},j.apply(this,arguments)}function R(r,i){if(r==null)return{};var o={},t=Object.keys(r),n,e;for(e=0;e<t.length;e++)n=t[e],!(i.indexOf(n)>=0)&&(o[n]=r[n]);return o}function M(r,i){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},M(r,i)}function I(r,i){r.prototype=Object.create(i.prototype),r.prototype.constructor=r,M(r,i)}function J(r,i){return r.classList?!!i&&r.classList.contains(i):(" "+(r.className.baseVal||r.className)+" ").indexOf(" "+i+" ")!==-1}function Q(r,i){r.classList?r.classList.add(i):J(r,i)||(typeof r.className=="string"?r.className=r.className+" "+i:r.setAttribute("class",(r.className&&r.className.baseVal||"")+" "+i))}function L(r,i){return r.replace(new RegExp("(^|\\s)"+i+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Z(r,i){r.classList?r.classList.remove(i):typeof r.className=="string"?r.className=L(r.className,i):r.setAttribute("class",L(r.className&&r.className.baseVal||"",i))}const F={disabled:!1},O=d.createContext(null);var V=function(i){return i.scrollTop},S="unmounted",v="exited",E="entering",b="entered",A="exiting",m=function(r){I(i,r);function i(t,n){var e;e=r.call(this,t,n)||this;var s=n,a=s&&!s.isMounting?t.enter:t.appear,l;return e.appearStatus=null,t.in?a?(l=v,e.appearStatus=E):l=b:t.unmountOnExit||t.mountOnEnter?l=S:l=v,e.state={status:l},e.nextCallback=null,e}i.getDerivedStateFromProps=function(n,e){var s=n.in;return s&&e.status===S?{status:v}:null};var o=i.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(n){var e=null;if(n!==this.props){var s=this.state.status;this.props.in?s!==E&&s!==b&&(e=E):(s===E||s===b)&&(e=A)}this.updateStatus(!1,e)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var n=this.props.timeout,e,s,a;return e=s=a=n,n!=null&&typeof n!="number"&&(e=n.exit,s=n.enter,a=n.appear!==void 0?n.appear:s),{exit:e,enter:s,appear:a}},o.updateStatus=function(n,e){if(n===void 0&&(n=!1),e!==null)if(this.cancelNextCallback(),e===E){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:w.findDOMNode(this);s&&V(s)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===v&&this.setState({status:S})},o.performEnter=function(n){var e=this,s=this.props.enter,a=this.context?this.context.isMounting:n,l=this.props.nodeRef?[a]:[w.findDOMNode(this),a],u=l[0],p=l[1],f=this.getTimeouts(),x=a?f.appear:f.enter;if(!n&&!s||F.disabled){this.safeSetState({status:b},function(){e.props.onEntered(u)});return}this.props.onEnter(u,p),this.safeSetState({status:E},function(){e.props.onEntering(u,p),e.onTransitionEnd(x,function(){e.safeSetState({status:b},function(){e.props.onEntered(u,p)})})})},o.performExit=function(){var n=this,e=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:w.findDOMNode(this);if(!e||F.disabled){this.safeSetState({status:v},function(){n.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:A},function(){n.props.onExiting(a),n.onTransitionEnd(s.exit,function(){n.safeSetState({status:v},function(){n.props.onExited(a)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(n,e){e=this.setNextCallback(e),this.setState(n,e)},o.setNextCallback=function(n){var e=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,e.nextCallback=null,n(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},o.onTransitionEnd=function(n,e){this.setNextCallback(e);var s=this.props.nodeRef?this.props.nodeRef.current:w.findDOMNode(this),a=n==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],u=l[0],p=l[1];this.props.addEndListener(u,p)}n!=null&&setTimeout(this.nextCallback,n)},o.render=function(){var n=this.state.status;if(n===S)return null;var e=this.props,s=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var a=R(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return d.createElement(O.Provider,{value:null},typeof s=="function"?s(n,a):d.cloneElement(d.Children.only(s),a))},i}(d.Component);m.contextType=O;m.propTypes={};function C(){}m.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:C,onEntering:C,onEntered:C,onExit:C,onExiting:C,onExited:C};m.UNMOUNTED=S;m.EXITED=v;m.ENTERING=E;m.ENTERED=b;m.EXITING=A;const K=m;var tt=function(i,o){return i&&o&&o.split(" ").forEach(function(t){return Q(i,t)})},D=function(i,o){return i&&o&&o.split(" ").forEach(function(t){return Z(i,t)})},P=function(r){I(i,r);function i(){for(var t,n=arguments.length,e=new Array(n),s=0;s<n;s++)e[s]=arguments[s];return t=r.call.apply(r,[this].concat(e))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(a,l){var u=t.resolveArguments(a,l),p=u[0],f=u[1];t.removeClasses(p,"exit"),t.addClass(p,f?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(a,l)},t.onEntering=function(a,l){var u=t.resolveArguments(a,l),p=u[0],f=u[1],x=f?"appear":"enter";t.addClass(p,x,"active"),t.props.onEntering&&t.props.onEntering(a,l)},t.onEntered=function(a,l){var u=t.resolveArguments(a,l),p=u[0],f=u[1],x=f?"appear":"enter";t.removeClasses(p,x),t.addClass(p,x,"done"),t.props.onEntered&&t.props.onEntered(a,l)},t.onExit=function(a){var l=t.resolveArguments(a),u=l[0];t.removeClasses(u,"appear"),t.removeClasses(u,"enter"),t.addClass(u,"exit","base"),t.props.onExit&&t.props.onExit(a)},t.onExiting=function(a){var l=t.resolveArguments(a),u=l[0];t.addClass(u,"exit","active"),t.props.onExiting&&t.props.onExiting(a)},t.onExited=function(a){var l=t.resolveArguments(a),u=l[0];t.removeClasses(u,"exit"),t.addClass(u,"exit","done"),t.props.onExited&&t.props.onExited(a)},t.resolveArguments=function(a,l){return t.props.nodeRef?[t.props.nodeRef.current,a]:[a,l]},t.getClassNames=function(a){var l=t.props.classNames,u=typeof l=="string",p=u&&l?l+"-":"",f=u?""+p+a:l[a],x=u?f+"-active":l[a+"Active"],U=u?f+"-done":l[a+"Done"];return{baseClassName:f,activeClassName:x,doneClassName:U}},t}var o=i.prototype;return o.addClass=function(n,e,s){var a=this.getClassNames(e)[s+"ClassName"],l=this.getClassNames("enter"),u=l.doneClassName;e==="appear"&&s==="done"&&u&&(a+=" "+u),s==="active"&&n&&V(n),a&&(this.appliedClasses[e][s]=a,tt(n,a))},o.removeClasses=function(n,e){var s=this.appliedClasses[e],a=s.base,l=s.active,u=s.done;this.appliedClasses[e]={},a&&D(n,a),l&&D(n,l),u&&D(n,u)},o.render=function(){var n=this.props;n.classNames;var e=R(n,["classNames"]);return d.createElement(K,j({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},i}(d.Component);P.defaultProps={classNames:""};P.propTypes={};const et=P;function nt(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function _(r,i){var o=function(e){return i&&h.isValidElement(e)?i(e):e},t=Object.create(null);return r&&h.Children.map(r,function(n){return n}).forEach(function(n){t[n.key]=o(n)}),t}function rt(r,i){r=r||{},i=i||{};function o(p){return p in i?i[p]:r[p]}var t=Object.create(null),n=[];for(var e in r)e in i?n.length&&(t[e]=n,n=[]):n.push(e);var s,a={};for(var l in i){if(t[l])for(s=0;s<t[l].length;s++){var u=t[l][s];a[t[l][s]]=o(u)}a[l]=o(l)}for(s=0;s<n.length;s++)a[n[s]]=o(n[s]);return a}function g(r,i,o){return o[i]!=null?o[i]:r.props[i]}function it(r,i){return _(r.children,function(o){return h.cloneElement(o,{onExited:i.bind(null,o),in:!0,appear:g(o,"appear",r),enter:g(o,"enter",r),exit:g(o,"exit",r)})})}function st(r,i,o){var t=_(r.children),n=rt(i,t);return Object.keys(n).forEach(function(e){var s=n[e];if(h.isValidElement(s)){var a=e in i,l=e in t,u=i[e],p=h.isValidElement(u)&&!u.props.in;l&&(!a||p)?n[e]=h.cloneElement(s,{onExited:o.bind(null,s),in:!0,exit:g(s,"exit",r),enter:g(s,"enter",r)}):!l&&a&&!p?n[e]=h.cloneElement(s,{in:!1}):l&&a&&h.isValidElement(u)&&(n[e]=h.cloneElement(s,{onExited:o.bind(null,s),in:u.props.in,exit:g(s,"exit",r),enter:g(s,"enter",r)}))}}),n}var at=Object.values||function(r){return Object.keys(r).map(function(i){return r[i]})},ot={component:"div",childFactory:function(i){return i}},k=function(r){I(i,r);function i(t,n){var e;e=r.call(this,t,n)||this;var s=e.handleExited.bind(nt(e));return e.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},e}var o=i.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},i.getDerivedStateFromProps=function(n,e){var s=e.children,a=e.handleExited,l=e.firstRender;return{children:l?it(n,a):st(n,s,a),firstRender:!1}},o.handleExited=function(n,e){var s=_(this.props.children);n.key in s||(n.props.onExited&&n.props.onExited(e),this.mounted&&this.setState(function(a){var l=j({},a.children);return delete l[n.key],{children:l}}))},o.render=function(){var n=this.props,e=n.component,s=n.childFactory,a=R(n,["component","childFactory"]),l=this.state.contextValue,u=at(this.state.children).map(s);return delete a.appear,delete a.enter,delete a.exit,e===null?d.createElement(O.Provider,{value:l},u):d.createElement(O.Provider,{value:l},d.createElement(e,a,u))},i}(d.Component);k.propTypes={};k.defaultProps=ot;const lt=k;W`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;const ut=N(et)`
  &.carouselContent-enter {
    opacity: 0;
    transform: translateX(100%); /* Start off-screen to the right */
  }

  &.carouselContent-enter-active {
    opacity: 1;
    transform: translateX(0); /* Move to the left, center position */
    transition: opacity ${r=>r.timeout||500}ms,
                transform ${r=>r.timeout||500}ms;
  }

  &.carouselContent-exit {
    opacity: 1;
    transform: translateX(0); /* Start from the center position */
  }

  &.carouselContent-exit-active {
    opacity: 0;
    transform: translateX(-100%); /* Move to the left, off-screen position */
    transition: opacity 0ms, transform ${r=>r.timeout||500}ms;
  }
`,pt=N.div`
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;

  @media screen and (max-width: 320px) {
    max-width: 100%;
    width: auto;
    height: 50vh; /* Adjust the height for screens up to 320px wide */
  }

  @media screen and (min-width: 321px) and (max-width: 640px) {
    max-width: 640px;
    width: 100%;
    height: 50%;
  }

  /* Media query for 768px */
  @media screen and (min-width: 641px) and (max-width: 768px) {
    max-width: 768px;
    width: 100%;
    height: 60vh; /* Adjust the height for screens between 641px and 768px wide */
  }

  /* Media query for 992px */
  @media screen and (min-width: 769px) and (max-width: 992px) {
    max-width: 992px;
    width: 100%;
    height: 70vh; /* Adjust the height for screens between 769px and 992px wide */
  }

  /* Media query for 1200px */
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    max-width: 1200px;
    width: 100%;
    height: 80vh; /* Adjust the height for screens between 993px and 1200px wide */
  }

  
`,ct=N.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,dt=N.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  height:50px;
  font-size:30px;
  color:white;
`,ft=N.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size:30px;
  color:white;
`;class $ extends d.Component{constructor(o){super(o);y(this,"addCurrent",()=>{const{images:o,loop:t}=this.props,{currentId:n}=this.state,e=n+1;e<o.length?this.setState({currentId:e,key:Date.now()}):t&&this.setState({currentId:0,key:Date.now()})});y(this,"subCurrent",()=>{const{images:o,loop:t}=this.props,{currentId:n}=this.state,e=n-1;e>=0?this.setState({currentId:e,key:Date.now()}):t&&this.setState({currentId:o.length-1,key:Date.now()})});this.state={currentId:0}}render(){let t=(this.props.images||[])[this.state.currentId];return t?c.jsxs(pt,{className:"carousel",children:[c.jsx("div",{className:"carousel-main",alt:"",children:c.jsx(lt,{children:c.jsx(ut,{timeout:500,children:c.jsx(ct,{src:t,alt:t})},this.state.currentId)})}),c.jsx(dt,{onClick:this.subCurrent,children:c.jsx(B,{})}),c.jsx(ft,{onClick:this.addCurrent,children:c.jsx(Y,{})})]}):null}}$.propTypes={images:T.array.isRequired,thumb:T.bool,loop:T.bool,autoplay:T.number};$.defaultProps={images:[],thumb:!0,loop:!0};class ht extends d.Component{constructor(i){super(i),this.state={hasError:!1}}static getDerivedStateFromError(i){return{hasError:!0}}componentDidCatch(i,o){console.error("Error caught by ErrorBoundary:",i,o)}render(){return this.state.hasError?c.jsx("h1",{children:"Something went wrong. Please try again later."}):this.props.children}}function mt(){const r=["https://img.sflix.to/xxrz/1200x600/224/a5/c1/a5c1674ed733c43933cd11e877f050b5/a5c1674ed733c43933cd11e877f050b5.jpg","/images/bb.jpg","/images/meg2.jpg"];return c.jsx(ht,{children:c.jsx($,{images:r})})}const xt=N.div`
  height: 150%; 
  background-color:black;
  overflow-x: hidden;
`,Tt=()=>c.jsxs(xt,{children:[c.jsx(q,{}),c.jsx(mt,{}),c.jsx(z,{}),c.jsx(H,{})]});export{Tt as default};
