(self.webpackChunkros_frontend=self.webpackChunkros_frontend||[]).push([[2238,2841],{62472:(t,e,r)=>{"use strict";r.d(e,{dp:()=>i,S$:()=>u,Z1:()=>s,ql:()=>l});var n=r(43297);let o=0;const a="OUIA-Generated-",c={};function i(t,e,r=!0){return{"data-ouia-component-type":`PF4/${t}`,"data-ouia-safe":r,"data-ouia-component-id":e}}const u=(t,e,r=!0,n)=>({"data-ouia-component-type":`PF4/${t}`,"data-ouia-safe":r,"data-ouia-component-id":s(t,e,n)}),s=(t,e,r)=>void 0!==e?e:(0,n.useMemo)((()=>l(t,r)),[t,r]);function l(t,e){try{let r;return r="undefined"!=typeof window?`${window.location.href}-${t}-${e||""}`:`${t}-${e||""}`,c[r]||(c[r]=0),`${a}${t}-${e?`${e}-`:""}${++c[r]}`}catch(r){return`${a}${t}-${e?`${e}-`:""}${++o}`}}},40400:(t,e,r)=>{"use strict";r.d(e,{Jh:()=>n,IU:()=>i});var n,o=r(70655),a=r(43297);!function(t){t.sm="sm",t.md="md",t.lg="lg",t.xl="xl"}(n||(n={}));let c=0;function i({name:t,xOffset:e=0,yOffset:r=0,width:i,height:u,svgPath:s}){var l;return l=class extends a.Component{constructor(){super(...arguments),this.id="icon-title-"+c++}render(){const t=this.props,{size:c,color:l,title:p,noVerticalAlign:f}=t,v=(0,o.__rest)(t,["size","color","title","noVerticalAlign"]),d=Boolean(p),m=(t=>{switch(t){case n.sm:return"1em";case n.md:return"1.5em";case n.lg:return"2em";case n.xl:return"3em";default:return"1em"}})(c),h=-.125*Number.parseFloat(m),y=f?null:{verticalAlign:`${h}em`},g=[e,r,i,u].join(" ");return a.createElement("svg",Object.assign({style:y,fill:l,height:m,width:m,viewBox:g,"aria-labelledby":d?this.id:null,"aria-hidden":!d||null,role:"img"},v),d&&a.createElement("title",{id:this.id},p),a.createElement("path",{d:s}))}},l.displayName=t,l.defaultProps={color:"currentColor",size:n.sm,noVerticalAlign:!1},l}},43047:(t,e,r)=>{"use strict";r.d(e,{MX:()=>o,$O:()=>a,ZP:()=>c});var n=r(40400);const o={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},a=(0,n.IU)(o),c=a},53754:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});var n=r(43297);const o=r.n(n)().createContext("light")},14748:(t,e,r)=>{"use strict";r.d(e,{Z:()=>p});var n=r(43297),o=r.n(n),a=r(94184),c=r.n(a),i=r(2983),u=r(53754),s=function(){return s=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},s.apply(this,arguments)},l=function(t,e,r){if(r||2===arguments.length)for(var n,o=0,a=e.length;o<a;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))};const p=(0,i.$j)((function(t){var e=t.routerData;return{params:e&&e.params,path:e&&e.path}}),(function(){return{}}))((function(t){var e=t.path,r=t.params,n=void 0===r?{}:r,a=t.children,i=t.className,p=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["path","params","children","className"]),f=function(){var t,r,o;if(null===(o=null===(r=null===(t=null===window||void 0===window?void 0:window.insights)||void 0===t?void 0:t.chrome)||void 0===r?void 0:r.$internal)||void 0===o?void 0:o.store){var a=window.insights.chrome.$internal.store.getState();if(e&&a)return e.split("/").reduce((function(t,e){var r,o;return 0===e.indexOf(":")?t.dynamic=s(s({},t.dynamic),((r={})["data-".concat((o=e.substr(1),o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=n[e.substr(1)],r)):t.staticPart=l(l([],t.staticPart,!0),""!==e?[e]:[],!0),t}),{staticPart:[a.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),v=f.dynamic,d=f.staticPart;return o().createElement(u.Z.Consumer,null,(function(t){var e;void 0===t&&(t="light");var r=c()(((e={})["pf-m-".concat(t)]="dark"===t,e));return{dark:o().createElement("section",s({},p,v,{"page-type":d.join("-"),className:"".concat(c()(i,"pf-l-page__main-section pf-c-page__main-section")," ").concat(r)}),o().Children.map(a,(function(t){return o().cloneElement(t,{className:"pf-m-dark"})}))),light:o().createElement("section",s({},p,v,{"page-type":d.join("-"),className:"".concat(c()(i,"pf-l-page__main-section pf-c-page__main-section"))}),a)}[t]}))}))},85333:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});var n=r(43297),o=r.n(n),a=r(45103),c=r(83632),i=function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)},u=function(){return o().createElement(o().Fragment,null,"Contact your organization administrator(s) for more information or visit ",o().createElement("a",{href:"./settings/my-user-access"},"My User Access"),"  to learn more about your permissions.")};const s=function(t){var e=t.prevPageButtonText,r=void 0===e?"Return to previous page":e,n=t.toLandingPageText,s=void 0===n?"Go to landing page":n,l=t.title,p=t.actions,f=void 0===p?null:p,v=t.serviceName,d=t.icon,m=void 0===d?c.LockIcon:d,h=t.description,y=void 0===h?o().createElement(u,null):h,g=t.showReturnButton,b=void 0===g||g,O=t.className,x=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["prevPageButtonText","toLandingPageText","title","actions","serviceName","icon","description","showReturnButton","className"]),w=l||"You do not have access to ".concat(v);return o().createElement(a.EmptyState,i({variant:a.EmptyStateVariant.full,className:"ins-c-not-authorized ".concat(O||"")},x),o().createElement(a.EmptyStateIcon,{icon:m}),o().createElement(a.Title,{headingLevel:"h5",size:"lg"},w),o().createElement(a.EmptyStateBody,null,y),f,b&&(document.referrer?o().createElement(a.Button,{variant:"primary",onClick:function(){return history.back()}},r):o().createElement(a.Button,{variant:"primary",component:"a",href:"."},s)))}},80123:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});var n=r(43297),o=r.n(n),a=r(94184),c=r.n(a),i=r(53754),u=function(){return u=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},u.apply(this,arguments)};const s=function(t){var e=t.className,r=t.children,n=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["className","children"]),a=c()(e,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return o().createElement(i.Z.Consumer,null,(function(t){var e,i;void 0===t&&(t="light");var s=c()(((e={})["pf-m-".concat(t,"-200")]="dark"===t,e),((i={})["pf-m-light"]="light"===t,i));return o().createElement("section",u({},n,{className:"".concat(a," ").concat(s),"widget-type":"InsightsPageHeader"}),r)}))}},96874:t=>{t.exports=function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}},29932:t=>{t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}},34865:(t,e,r)=>{var n=r(89465),o=r(77813),a=Object.prototype.hasOwnProperty;t.exports=function(t,e,r){var c=t[e];a.call(t,e)&&o(c,r)&&(void 0!==r||e in t)||n(t,e,r)}},89465:(t,e,r)=>{var n=r(38777);t.exports=function(t,e,r){"__proto__"==e&&n?n(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}},3118:(t,e,r)=>{var n=r(13218),o=Object.create,a=function(){function t(){}return function(e){if(!n(e))return{};if(o)return o(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();t.exports=a},97786:(t,e,r)=>{var n=r(71811),o=r(40327);t.exports=function(t,e){for(var r=0,a=(e=n(e,t)).length;null!=t&&r<a;)t=t[o(e[r++])];return r&&r==a?t:void 0}},10313:(t,e,r)=>{var n=r(13218),o=r(25726),a=r(33498),c=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return a(t);var e=o(t),r=[];for(var i in t)("constructor"!=i||!e&&c.call(t,i))&&r.push(i);return r}},56560:(t,e,r)=>{var n=r(75703),o=r(38777),a=r(6557),c=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:n(e),writable:!0})}:a;t.exports=c},80531:(t,e,r)=>{var n=r(62705),o=r(29932),a=r(1469),c=r(33448),i=n?n.prototype:void 0,u=i?i.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return o(e,t)+"";if(c(e))return u?u.call(e):"";var r=e+"";return"0"==r&&1/e==-1/0?"-0":r}},71811:(t,e,r)=>{var n=r(1469),o=r(15403),a=r(55514),c=r(79833);t.exports=function(t,e){return n(t)?t:o(t,e)?[t]:a(c(t))}},74318:(t,e,r)=>{var n=r(11149);t.exports=function(t){var e=new t.constructor(t.byteLength);return new n(e).set(new n(t)),e}},64626:(t,e,r)=>{t=r.nmd(t);var n=r(55639),o=e&&!e.nodeType&&e,a=o&&t&&!t.nodeType&&t,c=a&&a.exports===o?n.Buffer:void 0,i=c?c.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var r=t.length,n=i?i(r):new t.constructor(r);return t.copy(n),n}},77133:(t,e,r)=>{var n=r(74318);t.exports=function(t,e){var r=e?n(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}},278:t=>{t.exports=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}},98363:(t,e,r)=>{var n=r(34865),o=r(89465);t.exports=function(t,e,r,a){var c=!r;r||(r={});for(var i=-1,u=e.length;++i<u;){var s=e[i],l=a?a(r[s],t[s],s,r,t):void 0;void 0===l&&(l=t[s]),c?o(r,s,l):n(r,s,l)}return r}},38777:(t,e,r)=>{var n=r(10852),o=function(){try{var t=n(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},85924:(t,e,r)=>{var n=r(5569)(Object.getPrototypeOf,Object);t.exports=n},38517:(t,e,r)=>{var n=r(3118),o=r(85924),a=r(25726);t.exports=function(t){return"function"!=typeof t.constructor||a(t)?{}:n(o(t))}},15403:(t,e,r)=>{var n=r(1469),o=r(33448),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/;t.exports=function(t,e){if(n(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!o(t))||c.test(t)||!a.test(t)||null!=e&&t in Object(e)}},24523:(t,e,r)=>{var n=r(88306);t.exports=function(t){var e=n(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}},33498:t=>{t.exports=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}},45357:(t,e,r)=>{var n=r(96874),o=Math.max;t.exports=function(t,e,r){return e=o(void 0===e?t.length-1:e,0),function(){for(var a=arguments,c=-1,i=o(a.length-e,0),u=Array(i);++c<i;)u[c]=a[e+c];c=-1;for(var s=Array(e+1);++c<e;)s[c]=a[c];return s[e]=r(u),n(t,this,s)}}},30061:(t,e,r)=>{var n=r(56560),o=r(21275)(n);t.exports=o},21275:t=>{var e=Date.now;t.exports=function(t){var r=0,n=0;return function(){var o=e(),a=16-(o-n);if(n=o,a>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(void 0,arguments)}}},55514:(t,e,r)=>{var n=r(24523),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,c=n((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,(function(t,r,n,o){e.push(n?o.replace(a,"$1"):r||t)})),e}));t.exports=c},40327:(t,e,r)=>{var n=r(33448);t.exports=function(t){if("string"==typeof t||n(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},75703:t=>{t.exports=function(t){return function(){return t}}},6557:t=>{t.exports=function(t){return t}},68630:(t,e,r)=>{var n=r(44239),o=r(85924),a=r(37005),c=Function.prototype,i=Object.prototype,u=c.toString,s=i.hasOwnProperty,l=u.call(Object);t.exports=function(t){if(!a(t)||"[object Object]"!=n(t))return!1;var e=o(t);if(null===e)return!0;var r=s.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&u.call(r)==l}},33448:(t,e,r)=>{var n=r(44239),o=r(37005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==n(t)}},81704:(t,e,r)=>{var n=r(14636),o=r(10313),a=r(98612);t.exports=function(t){return a(t)?n(t,!0):o(t)}},88306:(t,e,r)=>{var n=r(83369);function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var c=t.apply(this,n);return r.cache=a.set(o,c)||a,c};return r.cache=new(o.Cache||n),r}o.Cache=n,t.exports=o},79833:(t,e,r)=>{var n=r(80531);t.exports=function(t){return null==t?"":n(t)}},59854:(t,e,r)=>{"use strict";r.d(e,{v:()=>l});var n=r(43297),o=r(2975),a=r(86496),c=r(1881),i=r(6526),u=function(t,e){return t===e};function s(t){void 0===t&&(t=i.E);var e=t===i.E?o.x:function(){return(0,n.useContext)(t)};return function(t,r){void 0===r&&(r=u);var o=e();return function(t,e,r,o){var i,u=(0,n.useReducer)((function(t){return t+1}),0)[1],s=(0,n.useMemo)((function(){return new a.Z(r,o)}),[r,o]),l=(0,n.useRef)(),p=(0,n.useRef)(),f=(0,n.useRef)();try{i=t!==p.current||l.current?t(r.getState()):f.current}catch(t){throw l.current&&(t.message+="\nThe error may be correlated with this previous error:\n"+l.current.stack+"\n\n"),t}return(0,c.L)((function(){p.current=t,f.current=i,l.current=void 0})),(0,c.L)((function(){function t(){try{var t=p.current(r.getState());if(e(t,f.current))return;f.current=t}catch(t){l.current=t}u({})}return s.onStateChange=t,s.trySubscribe(),t(),function(){return s.tryUnsubscribe()}}),[r,s]),i}(t,r,o.store,o.subscription)}}var l=s()},75347:()=>{},31777:()=>{},34017:()=>{},59905:()=>{},64604:()=>{}}]);