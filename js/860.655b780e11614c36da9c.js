/*! For license information please see 860.655b780e11614c36da9c.js.LICENSE.txt */
"use strict";(self.webpackChunkros_frontend=self.webpackChunkros_frontend||[]).push([[860],{3955:(t,r,e)=>{e.d(r,{v:()=>u});var n=e(92950),o=e.n(n),i=e(55138),a=e(22663),c=e(41763),u=function(){return o().createElement(n.Suspense,{fallback:o().createElement(i.Bullseye,null,o().createElement(i.Spinner,null))},o().createElement(a.Z,{appId:"ros_zero_state",appName:"dashboard",module:"./AppZeroState",scope:"dashboard",ErrorComponent:o().createElement(c.Z,null),app:"Resource_Optimization"}))}},30859:(t,r,e)=>{e.d(r,{Q5:()=>g,S7:()=>p,jL:()=>h,lc:()=>d,tp:()=>v,x2:()=>y,xW:()=>m});var n=e(71002),o=e(15861),i=e(4942),a=e(68770),c=e(58061);function u(){u=function(){return r};var t,r={},e=Object.prototype,o=e.hasOwnProperty,i=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",f=a.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof w?r:w,a=Object.create(o.prototype),c=new N(n||[]);return i(a,"_invoke",{value:P(t,e,c)}),a}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var y="suspendedStart",d="suspendedYield",v="executing",g="completed",m={};function w(){}function _(){}function b(){}var E={};l(E,c,(function(){return this}));var O=Object.getPrototypeOf,L=O&&O(O(C([])));L&&L!==e&&o.call(L,c)&&(E=L);var S=b.prototype=w.prototype=Object.create(E);function x(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function j(t,r){function e(i,a,c,u){var s=p(t[i],t,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==(0,n.Z)(l)&&o.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):r.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return e("throw",t,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return a=a?a.then(o,o):o()}})}function P(r,e,n){var o=y;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=R(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=p(r,e,n);if("normal"===s.type){if(o=n.done?g:d,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function R(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,R(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function T(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function C(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var i=-1,a=function e(){for(;++i<r.length;)if(o.call(r,i))return e.value=r[i],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError((0,n.Z)(r)+" is not iterable")}return _.prototype=b,i(S,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:_,configurable:!0}),_.displayName=l(b,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===_||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,f,"GeneratorFunction")),t.prototype=Object.create(S),t},r.awrap=function(t){return{__await:t}},x(j.prototype),l(j.prototype,s,(function(){return this})),r.AsyncIterator=j,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new j(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(S),l(S,f,"Generator"),l(S,c,(function(){return this})),l(S,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=C,N.prototype={constructor:N,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!r)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function n(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),T(e),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;T(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:C(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),m}},r}function s(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?s(Object(e),!0).forEach((function(r){(0,i.Z)(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function l(t){if(!t.ok)throw Error(t.statusText);return t}var h=function(){var t=new URL(c.RC+c.LO,window.location.origin);return fetch(t).then(l).then((function(t){return t.json()})).then((function(t){return t}))},p=function(t){var r=new URL(c.RC+c.M4+"/".concat(t),window.location.origin);return fetch(r).then(l).then((function(t){return t.json()})).then((function(t){return t}))},y=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e={limit:r.perPage,offset:(r.page-1)*r.perPage};r.description&&r.description.trim()&&(e=f(f({},e),{},{description:r.description}));var n=new URL(c.RC+c.M4+"/".concat(t,"/suggestions"),window.location.origin);return n.search=new URLSearchParams(e).toString(),fetch(n).then((function(t){if(!t.ok&&404===t.status)return{hasError:!0};if(!t.ok)throw Error(t.statusText);return t.json()})).then((function(t){return t}))},d=function(){var t=(0,o.Z)(u().mark((function t(r){var e,n,o,i,s,l,h,p,y,d,v;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=(s=r||{}).perPage,h=s.orderBy,p=s.orderHow,y=f(f({order_by:{display_name:"display_name",groups:"group_name",os:"os","performance_utilization.cpu":"cpu","performance_utilization.memory":"memory","performance_utilization.max_io":"max_io",number_of_suggestions:"number_of_suggestions",state:"state",report_date:"report_date"}[h]||"report_date",order_how:p||a.SortByDirection.desc,limit:l||-1},(null==r?void 0:r.page)&&{offset:(r.page-1)*r.perPage}),(null==r||null===(e=r.filters)||void 0===e?void 0:e.hostnameOrId)&&{display_name:r.filters.hostnameOrId}),d=new URL(c.RC+c.M4,window.location.origin),v=new URLSearchParams(y),null==r||null===(n=r.stateFilter)||void 0===n||n.forEach((function(t){v.append("state",t)})),null==r||null===(o=r.osFilter)||void 0===o||o.forEach((function(t){v.append("os",t)})),null==r||null===(i=r.groupFilter)||void 0===i||i.forEach((function(t){v.append("group_name",t)})),d.search=v.toString(),t.abrupt("return",fetch(d).then((function(t){if(!t.ok)throw Error(t.statusText);return t})).then((function(t){return t.json()})));case 10:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(t,r){var e=new URL("".concat(c.RC).concat(c.M4,"/").concat(t,"/history"),window.location.origin),n=new URLSearchParams({limit:r});return e.search=n.toString(),fetch(e).then(l).then((function(t){return t.json()})).then((function(t){return t}))},g=function(){var t=(0,o.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URL(c.t5,window.location.origin),t.abrupt("return",fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service:"ros",template:"executiveReport"})}).then(l).then((function(t){return t.blob()})));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=(0,o.Z)(u().mark((function t(r){var e,n,o,i,a,s,f,h;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=(e=r||{}).page,o=e.perPage,i=e.activeSortColumnKey,a=e.activeSortDirection,s=new URL(c.RC+c.vx,window.location.origin),f=new URLSearchParams({page:n,per_page:o,order_by:i,order_how:a}),s.search=f.toString(),h=fetch(s).then(l).then((function(t){return t.json()})).then((function(t){return t})),t.abrupt("return",h);case 7:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},94778:(t,r,e)=>{e.d(r,{Of:()=>o,Pn:()=>a,o:()=>u,t9:()=>i,zz:()=>c});var n=e(30859),o=function(t){return{type:"LOAD_ROS_SYSTEM_INFO",payload:(0,n.S7)(t)}},i=function(t,r){return{type:"FETCH_SYSTEM_RECOMMENDATIONS_LIST",payload:(0,n.x2)(t,r)}},a=function(){return{type:"LOAD_IS_CONFIGURED_INFO",payload:(0,n.jL)()}},c=function(t){return{type:"CHANGE_SYSTEM_COLUMNS",payload:t}},u=function(t){return{type:"LOAD_SUGGESTED_INSTANCE_TYPES",payload:(0,n.xW)(t)}}}}]);