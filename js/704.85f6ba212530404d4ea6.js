"use strict";(self.webpackChunkros_frontend=self.webpackChunkros_frontend||[]).push([[704],{58061:(t,n,r)=>{r.d(n,{RC:()=>e,LO:()=>o,M4:()=>i,Up:()=>s,RM:()=>c,nV:()=>a,xP:()=>u,QR:()=>h,t0:()=>f,wy:()=>p});var e="/api/ros/v1",o="/is_configured",i="/systems",s="/rating",c=-1,a=0,u=1,h="Waiting for data",f="N/A",p="https://access.redhat.com/documentation/en-us/red_hat_insights/2022/html/assessing_and_monitoring_rhel_resource_optimization_with_insights_for_red_hat_enterprise_linux/proc-ros-install_ros-getting-started"},53704:(t,n,r)=>{r.d(n,{Pn:()=>g,t9:()=>p,Of:()=>f});var e=r(59713),o=r.n(e),i=r(58061);function s(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function c(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){o()(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}function a(t){if(!t.ok)throw Error(t.statusText);return t}var u=function(t){var n=new URL(i.RC+i.M4+"/".concat(t),window.location.origin);return window.insights.chrome.auth.getUser().then((function(){return fetch(n).then(a).then((function(t){return t.json()})).then((function(t){return t}))}))},h=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={limit:n.perPage,offset:(n.page-1)*n.perPage};n.description&&n.description.trim()&&(r=c(c({},r),{},{description:n.description}));var e=new URL(i.RC+i.M4+"/".concat(t,"/suggestions"),window.location.origin);e.search=new URLSearchParams(r).toString();var o=window.insights.chrome.auth.getUser().then((function(){return fetch(e).then((function(t){if(!t.ok&&404===t.status)return{hasError:!0};if(!t.ok)throw Error(t.statusText);return t.json()})).then((function(t){return t}))}));return o},f=function(t){return{type:"LOAD_ROS_SYSTEM_INFO",payload:u(t)}},p=function(t,n){return{type:"FETCH_SYSTEM_RECOMMENDATIONS_LIST",payload:h(t,n)}},g=function(){return{type:"LOAD_IS_CONFIGURED_INFO",payload:(t=new URL(i.RC+i.LO,window.location.origin),window.insights.chrome.auth.getUser().then((function(){return fetch(t).then(a).then((function(t){return t.json()})).then((function(t){return t}))})))};var t}}}]);
//# sourceMappingURL=../sourcemaps/704.a5b61857a33fb7aeb6ec3fdddba8d0ce.js.map