(self.webpackChunkros_frontend=self.webpackChunkros_frontend||[]).push([[704],{58061:(t,n,r)=>{"use strict";r.d(n,{RC:()=>e,LO:()=>o,M4:()=>i,Up:()=>c,RM:()=>u,nV:()=>s,xP:()=>a});var e="/api/ros/v0",o="/is_configured",i="/systems",c="/rating",u=-1,s=0,a=1},53704:(t,n,r)=>{"use strict";r.d(n,{Pn:()=>O,t9:()=>p,Of:()=>h});var e=r(59713),o=r.n(e),i=r(58061);function c(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function u(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o()(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}function s(t){if(!t.ok)throw Error(t.statusText);return t}var a=function(t){var n=new URL(i.RC+i.M4+"/".concat(t),window.location.origin);return window.insights.chrome.auth.getUser().then((function(){return fetch(n).then(s).then((function(t){return t.json()})).then((function(t){return t}))}))},f=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={limit:n.perPage,offset:(n.page-1)*n.perPage};n.description&&n.description.trim()&&(r=u(u({},r),{},{description:n.description}));var e=new URL(i.RC+i.M4+"/".concat(t,"/suggestions"),window.location.origin);e.search=new URLSearchParams(r).toString();var o=window.insights.chrome.auth.getUser().then((function(){return fetch(e).then((function(t){if(!t.ok&&404===t.status)return{hasError:!0};if(!t.ok)throw Error(t.statusText);return t.json()})).then((function(t){return t}))}));return o},h=function(t){return{type:"LOAD_ROS_SYSTEM_INFO",payload:a(t)}},p=function(t,n){return{type:"FETCH_SYSTEM_RECOMMENDATIONS_LIST",payload:f(t,n)}},O=function(){return{type:"LOAD_IS_CONFIGURED_INFO",payload:(t=new URL(i.RC+i.LO,window.location.origin),window.insights.chrome.auth.getUser().then((function(){return fetch(t).then(s).then((function(t){return t.json()})).then((function(t){return t}))})))};var t}}}]);
//# sourceMappingURL=../sourcemaps/704.b89494f649dad0becce4.js.map