(self.webpackChunkros_frontend=self.webpackChunkros_frontend||[]).push([[3285],{23646:(e,t,r)=>{var n=r(67228);e.exports=function(e){if(Array.isArray(e))return n(e)}},46860:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},98206:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:(e,t,r)=>{var n=r(23646),o=r(46860),i=r(60379),a=r(98206);e.exports=function(e){return n(e)||o(e)||i(e)||a()}},36438:(e,t,r)=>{"use strict";r.d(t,{I4:()=>o,Tw:()=>i,ZP:()=>a});var n=r(40400);const o={name:"CloseIcon",height:1024,width:730,svgPath:"M725.499315,767.757345 L469.242169,511.500499 L725.499315,255.243653 C729.196254,251.545719 731.096195,247.248119 731,242.4498 C731,237.653479 728.997365,233.35588 725.299427,229.558002 L647.542773,151.701495 C643.743891,147.903617 639.446287,146 634.64996,146 C629.852635,146 625.55503,147.803673 621.857092,151.500607 L365.5,407.857398 L109.241857,151.500607 C105.544917,147.803673 101.246314,145.904733 96.4499876,146 C91.6526619,146.104622 87.3550577,148.002562 83.5571748,151.701495 L5.7005771,229.457058 C1.90269428,233.255936 0,237.553535 0,242.350855 C0,247.148175 1.80175055,251.444775 5.50068853,255.143709 L261.857779,511.500499 L5.50068853,767.757345 C1.80175055,771.454279 -0.0961914123,775.752878 0,779.750645 C0.103697157,784.547965 2.00263857,788.845564 5.7005771,792.642443 L83.4572306,871.299502 C87.2541139,875.096381 91.5527176,877 96.3500433,877 C101.147369,877 105.444973,875.197325 109.142912,871.499391 L365.400058,615.241545 L621.657203,871.499391 C625.355142,875.197325 629.652746,877.095265 634.449072,877 C639.246398,877 643.545002,874.997437 647.342885,871.299502 L725.099538,793.54294 C728.896421,789.745062 730.796362,785.446463 730.796362,780.649143 C731.096195,775.752878 729.196254,771.454279 725.499315,767.757345",yOffset:0,xOffset:0},i=(0,n.IU)(o),a=i},51344:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>K});var n=r(2983),o=r(67154),i=r.n(o),a=r(34575),c=r.n(a),u=r(93913),s=r.n(u),l=r(81506),f=r.n(l),p=r(2205),d=r.n(p),h=r(78585),g=r.n(h),v=r(29754),m=r.n(v),y=r(59713),b=r.n(y),w=r(43297),x=r.n(w),O=r(26638),D=r(45697),E=r.n(D),S=r(6479),A=r.n(S),C=r(87116),j=r(68774),N=r(68340),P=r(56715),k=r(36438);var T=function(e){d()(o,e);var t,r,n=(t=o,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=m()(t);if(r){var o=m()(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return g()(this,e)});function o(e){var t;return c()(this,o),t=n.call(this,e),b()(f()(t),"handleDismiss",(function(){t.props.onDismiss(t.props.id)})),b()(f()(t),"setDismissTimeout",(function(){t.props.autoDismiss&&(t.dismissTimeout=setTimeout((function(){return t.handleDismiss()}),t.props.dismissDelay))})),b()(f()(t),"clearDismissTimeout",(function(){t.dismissTimeout&&clearTimeout(t.dismissTimeout)})),t.handleDismiss=t.handleDismiss.bind(f()(t)),t.setDismissTimeout(),t}return s()(o,[{key:"componentWillUnmount",value:function(){this.clearDismissTimeout()}},{key:"render",value:function(){var e=this.props,t=e.description,r=e.dismissable,n=(e.onDismiss,e.dismissDelay,e.title),o=e.sentryId,a=e.requestId,c=(e.autoDismiss,A()(e,["description","dismissable","onDismiss","dismissDelay","title","sentryId","requestId","autoDismiss"]));return x().createElement(C.b,i()({className:"notification-item",title:n&&n.replace(/<\/?[^>]+(>|$)/g,"")},c,{actionClose:r?x().createElement(P.g,{"aria-label":"close-notification",variant:"plain",onClick:this.handleDismiss},x().createElement(k.ZP,null)):null,onMouseEnter:this.clearDismissTimeout,onMouseLeave:this.setDismissTimeout}),"string"==typeof t?t.replace(/<\/?[^>]+(>|$)/g,""):t,o&&x().createElement(j.D,null,x().createElement(N.x,{component:N.q.small},"Tracking Id: ",o)),a&&x().createElement(j.D,null,x().createElement(N.x,{component:N.q.small},"Request Id: ",a)))}}]),o}(w.Component);T.propTypes={autoDismiss:E().bool,dismissable:E().bool,onDismiss:E().func.isRequired,id:E().string.isRequired,variant:E().oneOf(["info","success","warning","danger"]).isRequired,title:E().node.isRequired,description:E().node,dismissDelay:E().number,requestId:E().string,sentryId:E().string},T.defaultProps={dismissDelay:8e3,autoDismiss:!0,dismissable:!0};const I=T;var R=r(32203),L=r(62394),F=r(47173),q=r(71070),_=r(48140),M=r(86050),Z=function(e){var t=e.page,r=e.onSetPage,n=e.onClearAll,o=e.count;return x().createElement(R.Z,{className:"notification-item"},x().createElement(L.e,null,x().createElement(_.a,null,x().createElement(M.Z,null,x().createElement(F.zx,{variant:F.Wu.link,className:"ins-c-pagination__clear-all",onClick:n},"Clear all")),x().createElement(M.Z,null,x().createElement(q.t,{itemCount:o,variant:q.a.bottom,perPageOptions:[{title:"5",value:5}],titles:{items:"Notifications"},perPage:5,page:t,onSetPage:r})))))};Z.propTypes={count:E().number,page:E().number,onSetPage:E().func,onClearAll:E().func},Z.defaultProps={count:0,page:1,onSetPage:Function,onClearAll:Function};const B=Z;var G=function(e){d()(o,e);var t,r,n=(t=o,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=m()(t);if(r){var o=m()(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return g()(this,e)});function o(){var e;c()(this,o);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=n.call.apply(n,[this].concat(r)),b()(f()(e),"state",{page:1}),b()(f()(e),"onSetPage",(function(t,r){e.setState({page:r})})),e}return s()(o,[{key:"render",value:function(){var e=this.state.page,t=this.props,r=t.notifications,n=t.removeNotification,o=t.rootId,a=t.onClearAll,c=r&&r.length<=5?r:r&&r.slice(5*(e-1),5*e);return!r||Array.isArray(r)&&0===r.length?null:(0,O.createPortal)(x().createElement("div",{className:"notifications-portal"},r&&r.length>5&&x().createElement(B,{onSetPage:this.onSetPage,count:r.length,page:e,onClearAll:a}),c.map((function(e){return x().createElement(I,i()({onDismiss:n,key:e.id},e))}))),document.getElementById(o)||document.body)}}]),o}(w.Component);G.propTypes={notifications:E().arrayOf(E().shape({id:E().string.isRequired,title:E().string.isRequired,variant:E().string.isRequired,description:E().node,dismissable:E().bool})),removeNotification:E().func.isRequired,onClearAll:E().func,rootId:E().string};const H=G;var z=r(21458);const K=(0,n.$j)((function(e,t){var r=e.notifications;return{notifications:t.notifications||r}}),(function(e,t){return{removeNotification:t.removeNotification?t.removeNotification:function(t){return e((0,z.FV)(t))},onClearAll:t.clearNotifications?t.clearNotifications:function(){return e((0,z.L1)())}}}))(H)},17558:(e,t,r)=>{"use strict";r.d(t,{Dv:()=>o,Kf:()=>i,wt:()=>a});var n="@@INSIGHTS-CORE/NOTIFICATIONS/",o="".concat(n,"ADD_NOTIFICATION"),i="".concat(n,"REMOVE_NOTIFICATION"),a="".concat(n,"CLEAR_NOTIFICATIONS")},21458:(e,t,r)=>{"use strict";r.d(t,{wN:()=>o,FV:()=>i,L1:()=>a});var n=r(17558),o=function(e){return{type:n.Dv,payload:e}},i=function(e){return{type:n.Kf,payload:e}},a=function(){return{type:n.wt}}},83215:(e,t,r)=>{"use strict";r.d(t,{wN:()=>o.wN,L1:()=>o.L1,ee:()=>h});var n=r(17558),o=r(21458),i=r(59713),a=r.n(i),c=r(319),u=r.n(c);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e,t){var r=t.payload;return[].concat(u()(e),[l({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},r)])},p=function(e,t){var r=t.payload,n=e.findIndex((function(e){return e.id===r}));return[].concat(u()(e.slice(0,n)),u()(e.slice(n+1)))},d=[];const h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.Dv:return f(e,t);case n.Kf:return p(e,t);case n.wt:return[];default:return e}}},67336:(e,t,r)=>{"use strict";r.d(t,{JH:()=>a});var n,o=r(18546),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function a(e,t,r){return void 0===e&&(e={}),void 0===t&&(t=[]),function(e,t,r){return void 0===e&&(e={}),void 0===t&&(t=[]),n||(n=new o.ZP(e,function(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}([],t,!0),r)),n.register({routerData:function(e,t){var r=t.type,n=t.payload;return i(i({},e),"@@INSIGHTS-CORE/NAVIGATION"===r?n:{})}}),n}(e,t,r)}},35240:(e,t,r)=>{"use strict";r.d(t,{eb:()=>n}),r(82492),r(67523);function n(e,t){void 0===t&&(t=2);var r="/",n=e.replace(/(#|\?).*/,"").split("/");return n.shift(),"beta"===n[0]&&(n.shift(),r="/beta/"),function(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}([],new Array(t),!0).reduce((function(e,r,o){return"".concat(e).concat(n[o]||"").concat(o<t-1?"/":"")}),r)}},55140:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(54025),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};const i=function(e){var t,r=(0,n.useScalprum)(),i=(null===(t=r.api)||void 0===t?void 0:t.chrome)||{};return i=o(o({},i),{initialized:r.initialized}),"function"==typeof e?e(i):i}},47816:(e,t,r)=>{var n=r(28483),o=r(3674);e.exports=function(e,t){return e&&n(e,t,o)}},13:e=>{e.exports=function(e,t){return null!=e&&t in Object(e)}},2958:(e,t,r)=>{var n=r(46384),o=r(90939);e.exports=function(e,t,r,i){var a=r.length,c=a,u=!i;if(null==e)return!c;for(e=Object(e);a--;){var s=r[a];if(u&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++a<c;){var l=(s=r[a])[0],f=e[l],p=s[1];if(u&&s[2]){if(void 0===f&&!(l in e))return!1}else{var d=new n;if(i)var h=i(f,p,l,e,t,d);if(!(void 0===h?o(p,f,3,i,d):h))return!1}}return!0}},67206:(e,t,r)=>{var n=r(91573),o=r(16432),i=r(6557),a=r(1469),c=r(39601);e.exports=function(e){return"function"==typeof e?e:null==e?i:"object"==typeof e?a(e)?o(e[0],e[1]):n(e):c(e)}},91573:(e,t,r)=>{var n=r(2958),o=r(1499),i=r(42634);e.exports=function(e){var t=o(e);return 1==t.length&&t[0][2]?i(t[0][0],t[0][1]):function(r){return r===e||n(r,e,t)}}},16432:(e,t,r)=>{var n=r(90939),o=r(27361),i=r(79095),a=r(15403),c=r(89162),u=r(42634),s=r(40327);e.exports=function(e,t){return a(e)&&c(t)?u(s(e),t):function(r){var a=o(r,e);return void 0===a&&a===t?i(r,e):n(t,a,3)}}},40371:e=>{e.exports=function(e){return function(t){return null==t?void 0:t[e]}}},79152:(e,t,r)=>{var n=r(97786);e.exports=function(e){return function(t){return n(t,e)}}},1499:(e,t,r)=>{var n=r(89162),o=r(3674);e.exports=function(e){for(var t=o(e),r=t.length;r--;){var i=t[r],a=e[i];t[r]=[i,a,n(a)]}return t}},222:(e,t,r)=>{var n=r(71811),o=r(35694),i=r(1469),a=r(65776),c=r(41780),u=r(40327);e.exports=function(e,t,r){for(var s=-1,l=(t=n(t,e)).length,f=!1;++s<l;){var p=u(t[s]);if(!(f=null!=e&&r(e,p)))break;e=e[p]}return f||++s!=l?f:!!(l=null==e?0:e.length)&&c(l)&&a(p,l)&&(i(e)||o(e))}},89162:(e,t,r)=>{var n=r(13218);e.exports=function(e){return e==e&&!n(e)}},42634:e=>{e.exports=function(e,t){return function(r){return null!=r&&r[e]===t&&(void 0!==t||e in Object(r))}}},27361:(e,t,r)=>{var n=r(97786);e.exports=function(e,t,r){var o=null==e?void 0:n(e,t);return void 0===o?r:o}},79095:(e,t,r)=>{var n=r(13),o=r(222);e.exports=function(e,t){return null!=e&&o(e,t,n)}},67523:(e,t,r)=>{var n=r(89465),o=r(47816),i=r(67206);e.exports=function(e,t){var r={};return t=i(t,3),o(e,(function(e,o,i){n(r,t(e,o,i),e)})),r}},82492:(e,t,r)=>{var n=r(42980),o=r(21463)((function(e,t,r){n(e,t,r)}));e.exports=o},39601:(e,t,r)=>{var n=r(40371),o=r(79152),i=r(15403),a=r(40327);e.exports=function(e){return i(e)?n(a(e)):o(e)}},94500:function(e,t,r){!function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function n(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,r){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function i(e,t){i.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function a(e,t){a.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function c(e,t,r){c.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function u(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function s(e){var t=void 0===e?"undefined":S(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,n,f,p,d){d=d||[];var h=(f=f||[]).slice(0);if(void 0!==p){if(n){if("function"==typeof n&&n(h,p))return;if("object"===(void 0===n?"undefined":S(n))){if(n.prefilter&&n.prefilter(h,p))return;if(n.normalize){var g=n.normalize(h,p,e,t);g&&(e=g[0],t=g[1])}}}h.push(p)}"regexp"===s(e)&&"regexp"===s(t)&&(e=e.toString(),t=t.toString());var v=void 0===e?"undefined":S(e),m=void 0===t?"undefined":S(t),y="undefined"!==v||d&&d[d.length-1].lhs&&d[d.length-1].lhs.hasOwnProperty(p),b="undefined"!==m||d&&d[d.length-1].rhs&&d[d.length-1].rhs.hasOwnProperty(p);if(!y&&b)r(new i(h,t));else if(!b&&y)r(new a(h,e));else if(s(e)!==s(t))r(new o(h,e,t));else if("date"===s(e)&&e-t!=0)r(new o(h,e,t));else if("object"===v&&null!==e&&null!==t)if(d.filter((function(t){return t.lhs===e})).length)e!==t&&r(new o(h,e,t));else{if(d.push({lhs:e,rhs:t}),Array.isArray(e)){var w;for(e.length,w=0;w<e.length;w++)w>=t.length?r(new c(h,w,new a(void 0,e[w]))):l(e[w],t[w],r,n,h,w,d);for(;w<t.length;)r(new c(h,w,new i(void 0,t[w++])))}else{var x=Object.keys(e),O=Object.keys(t);x.forEach((function(o,i){var a=O.indexOf(o);a>=0?(l(e[o],t[o],r,n,h,o,d),O=u(O,a)):l(e[o],void 0,r,n,h,o,d)})),O.forEach((function(e){l(void 0,t[e],r,n,h,e,d)}))}d.length=d.length-1}else e!==t&&("number"===v&&isNaN(e)&&isNaN(t)||r(new o(h,e,t)))}function f(e,t,r,n){return n=n||[],l(e,t,(function(e){e&&n.push(e)}),r),n.length?n:void 0}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e=u(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)void 0===n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":p(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function h(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":h(o[r.path[n]],r.index,r.item);break;case"D":case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":h(e[t],r.index,r.item);break;case"D":case"E":e[t]=r.lhs;break;case"N":e=u(e,t)}return e}function g(e){return"color: "+j[e].color+"; font-weight: bold"}function v(e,t,r,n){var o=f(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach((function(e){var t=e.kind,n=function(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}(e);r.log.apply(r,["%c "+j[t].text,g(t)].concat(A(n)))})):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch(void 0===e?"undefined":S(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,A(r)):e[n];case"function":return e(t);default:return e}}function y(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?function(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}(t):o,a=t.collapsed,c=t.colors,u=t.level,s=t.diff,l=void 0===t.titleFormatter;e.forEach((function(o,f){var p=o.started,d=o.startedTime,h=o.action,g=o.prevState,y=o.error,b=o.took,w=o.nextState,x=e[f+1];x&&(w=x.prevState,b=x.started-p);var O=n(h),E="function"==typeof a?a((function(){return w}),h,o):a,S=D(d),A=c.title?"color: "+c.title(O)+";":"",C=["color: gray; font-weight: lighter;"];C.push(A),t.timestamp&&C.push("color: gray; font-weight: lighter;"),t.duration&&C.push("color: gray; font-weight: lighter;");var j=i(O,S,b);try{E?c.title&&l?r.groupCollapsed.apply(r,["%c "+j].concat(C)):r.groupCollapsed(j):c.title&&l?r.group.apply(r,["%c "+j].concat(C)):r.group(j)}catch(e){r.log(j)}var N=m(u,O,[g],"prevState"),P=m(u,O,[O],"action"),k=m(u,O,[y,g],"error"),T=m(u,O,[w],"nextState");if(N)if(c.prevState){var I="color: "+c.prevState(g)+"; font-weight: bold";r[N]("%c prev state",I,g)}else r[N]("prev state",g);if(P)if(c.action){var R="color: "+c.action(O)+"; font-weight: bold";r[P]("%c action    ",R,O)}else r[P]("action    ",O);if(y&&k)if(c.error){var L="color: "+c.error(y,g)+"; font-weight: bold;";r[k]("%c error     ",L,y)}else r[k]("error     ",y);if(T)if(c.nextState){var F="color: "+c.nextState(w)+"; font-weight: bold";r[T]("%c next state",F,w)}else r[T]("next state",w);s&&v(g,w,r,E);try{r.groupEnd()}catch(e){r.log("—— log end ——")}}))}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},N,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,c=t.diffPredicate;if(void 0===r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(s){if("function"==typeof i&&!i(r,s))return e(s);var l={};u.push(l),l.started=E.now(),l.startedTime=new Date,l.prevState=n(r()),l.action=s;var f=void 0;if(a)try{f=e(s)}catch(e){l.error=o(e)}else f=e(s);l.took=E.now()-l.started,l.nextState=n(r());var p=t.diff&&"function"==typeof c?c(r,s):t.diff;if(y(u,Object.assign({},t,{diff:p})),u.length=0,l.error)throw l.error;return f}}}}var w,x,O=function(e,t){return function(e,t){return new Array(t+1).join(e)}("0",t-e.toString().length)+e},D=function(e){return O(e.getHours(),2)+":"+O(e.getMinutes(),2)+":"+O(e.getSeconds(),2)+"."+O(e.getMilliseconds(),3)},E="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];w="object"===(void 0===r.g?"undefined":S(r.g))&&r.g?r.g:"undefined"!=typeof window?window:{},(x=w.DeepDiff)&&C.push((function(){void 0!==x&&w.DeepDiff===f&&(w.DeepDiff=x,x=void 0)})),t(o,n),t(i,n),t(a,n),t(c,n),Object.defineProperties(f,{diff:{value:f,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:function(e,t,r){e&&t&&l(e,t,(function(n){r&&!r(e,t,n)||d(e,t,n)}))},enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:function(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)void 0===i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":h(i[r.path[n]],r.index,r.item);break;case"D":case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}},enumerable:!0},isConflict:{value:function(){return void 0!==x},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach((function(e){e()})),C=null),f},enumerable:!0}});var j={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},N={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?b()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=N,e.createLogger=b,e.logger=P,e.default=P,Object.defineProperty(e,"__esModule",{value:!0})}(t)}}]);