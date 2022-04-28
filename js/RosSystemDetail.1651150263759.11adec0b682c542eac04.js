(self.webpackChunkros_frontend=self.webpackChunkros_frontend||[]).push([[798],{86503:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var r=n(63038),o=n.n(r),i=n(6479),a=n.n(i),c=n(67154),s=n.n(c),u=n(1427),l=n.n(u),p=n(45697),f=n.n(p),m=n(2983),d=n(79943),y=n(8896),h=n(67463),v=l().lazy((function(){return Promise.all([n.e(939),n.e(514),n.e(324),n.e(254),n.e(381),n.e(81),n.e(400),n.e(505)]).then(n.bind(n,88422))})),g=function(e){var t=(0,m.v9)((function(e){var t,n=e.entityDetails;return null==n||null===(t=n.entity)||void 0===t?void 0:t.id}));return l().createElement(u.Suspense,{fallback:""},l().createElement(v,s()({inventoryId:t},e)))},O=function(e){var t=e.getRegistry,n=a()(e,["getRegistry"]),r=(0,u.useState)(),i=o()(r,2),c=i[0],s=i[1];return(0,u.useEffect)((function(){var e,n;t&&(null===(e=t())||void 0===e||null===(n=e.register)||void 0===n||n.call(e,{systemRecsReducer:d.rj})),s((function(){return t?m.zt:u.Fragment}))}),[t]),c?l().createElement(c,t&&{store:t().getStore()},l().createElement(g,n)):l().createElement(y.b,null,l().createElement(h.Spinner,{size:"xl"}))};O.propTypes={getRegistry:f().func};const b=O},98593:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ue});var r=n(59713),o=n.n(r),i=n(87757),a=n.n(i),c=n(48926),s=n.n(c),u=n(34575),l=n.n(u),p=n(93913),f=n.n(p),m=n(2205),d=n.n(m),y=n(78585),h=n.n(y),v=n(29754),g=n.n(v),O=n(1427),b=n.n(O),E=n(45697),w=n.n(E),P=n(16530),j=n(2983),S=n(49287),_=n(18038),I=n(85991),R=n(49489),D=n(86350),k=n(48716),T=n(38775),N=n(53895),C=n(33902),x=n(30319),L=n(94778),z=n(18546),U=n(86503);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z={loaded:!1},A=function(e){return F(F({},e),{},{loaded:!0,activeApps:[{title:"Resource optimization",name:"resource optimization",component:U.default}]})},B=n(24814),Y=n(63038),G=n.n(Y),H=n(6202),V=n(11239),W=n(49580),J=n(61088),$=n(90502),q=n(14906),K=function(e){var t=e.system,n=(0,O.useState)(t.rating),r=G()(n,2),o=r[0],i=r[1],c=(0,O.useState)(!1),u=G()(c,2),l=u[0],p=u[1],f=function(){var e=s()(a().mark((function e(n){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o===n?q.nV:n,e.prev=1,c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({inventory_id:t.inventoryId,rating:r})},e.next=5,fetch("".concat(q.RC).concat(q.Up),c);case 5:i(r),p(!0),setTimeout((function(){return p(!1)}),3e3),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return b().createElement("span",{className:"ratingSpanOverride"},"Is this suggestion helpful?",b().createElement(H.Button,{variant:"plain","aria-label":"thumbs-up",onClick:function(){return f(q.xP)},ouiaId:"thumbsUp"},o===q.xP?b().createElement(J.ZP,{className:"like",size:"sm"}):b().createElement(V.ZP,{size:"sm"})),b().createElement(H.Button,{variant:"plain","aria-label":"thumbs-down",onClick:function(){return f(q.RM)},ouiaId:"thumbsDown"},o===q.RM?b().createElement($.ZP,{className:"dislike",size:"sm"}):b().createElement(W.ZP,{size:"sm"})),l&&"Thank you for your feedback!")};K.propTypes={system:w().object};const Q=K;var X=n(36269),ee=n(56067),te=n(87999),ne=n(49099),re=n(90446),oe=n(698),ie=n(91845);function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var se=function(e){d()(c,e);var t,n,r,i=(n=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g()(n);if(r){var o=g()(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return h()(this,e)});function c(e){var t;return l()(this,c),(t=i.call(this,e)).state={inventoryId:t.props.match.params.inventoryId},t}return f()(c,[{key:"componentDidMount",value:(t=s()(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===(t=insights.chrome)||void 0===t||null===(n=t.hideGlobalFilter)||void 0===n||n.call(t,!0),insights.chrome.appAction("system-detail"),e.next=4,this.props.loadSystemInfo(this.state.inventoryId);case 4:document.title=this.props.rosSystemInfo.display_name;case 5:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"renderChildrenNode",value:function(){if(this.props.rosSystemInfo){var e=this.props.rosSystemInfo,t=e.cloud_provider,n=e.instance_type,r=e.idling_time,o=e.rating,i=e.state,a=this.props.match.params.inventoryId;return b().createElement(S.r,{className:"ros-system-info"},b().createElement(_.P,null,b().createElement(ne.o,{className:"expanded-row",isCompact:!0,isHorizontal:!0},b().createElement(oe.g,null,b().createElement(re.M,null,"State"),b().createElement(ie.b,null,b().createElement(X.l,{stateValue:i}))))),b().createElement(_.P,null,b().createElement(B.v,{cloudProvider:t,instanceType:n,idlingTime:r,inventoryId:a})),b().createElement(_.P,null,b().createElement(Q,{system:ce({},{rating:o,inventoryId:a})})))}return null}},{key:"render",value:function(){var e=this,t=this.props.entity;return b().createElement(b().Fragment,null,b().createElement(te.B.Consumer,null,(function(n){return!1===n.permissions.systemsRead?b().createElement(ee.Z,{serviceName:"Resource Optimization"}):b().createElement(T.Z,{onLoad:function(e){var t=e.mergeWithDetail,n=e.INVENTORY_ACTION_TYPES;(0,x.z2)(t(function(e){var t=e.LOAD_ENTITY_FULFILLED;return(0,z.Gg)(o()({},t,A),Z)}(n)))},className:"rosDetailWrapper"},b().createElement(k.Z,null,b().createElement(I.a,{ouiaId:"system-detail"},b().createElement(R.g,null,b().createElement(P.Link,{to:"/"},"Resource Optimization")),b().createElement(R.g,{isActive:!0},b().createElement("div",{className:"ins-c-inventory__detail--breadcrumb-name"},t?t.display_name:null))),b().createElement(N.Z,{hideBack:!0,showDelete:!1,hideInvDrawer:!0}),e.renderChildrenNode()),b().createElement(D.Z,null,b().createElement(S.r,{gutter:"md"},b().createElement(_.P,{span:12},b().createElement(C.Z,{showTags:!0,fallback:""})))))})))}}]),c}(b().Component);se.propTypes={match:w().any,entity:w().object,loading:w().bool,rosSystemInfo:w().object,loadSystemInfo:w().func};const ue=(0,P.withRouter)((0,j.$j)((function(e,t){var n,r;return ce({entity:e.entityDetails&&e.entityDetails.entity,loading:null===(n=e.systemDetailReducer)||void 0===n?void 0:n.loading,rosSystemInfo:null===(r=e.systemDetailReducer)||void 0===r?void 0:r.systemInfo},t)}),(function(e){return{loadSystemInfo:function(t){return e((0,L.Of)(t))}}}))(se))},30859:(e,t,n)=>{"use strict";n.d(t,{jL:()=>d,S7:()=>y,x2:()=>h,lc:()=>v});var r=n(87757),o=n.n(r),i=n(48926),a=n.n(i),c=n(59713),s=n.n(c),u=n(88587),l=n(14906);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){if(!e.ok)throw Error(e.statusText);return e}var d=function(){var e=new URL(l.RC+l.LO,window.location.origin);return window.insights.chrome.auth.getUser().then((function(){return fetch(e).then(m).then((function(e){return e.json()})).then((function(e){return e}))}))},y=function(e){var t=new URL(l.RC+l.M4+"/".concat(e),window.location.origin);return window.insights.chrome.auth.getUser().then((function(){return fetch(t).then(m).then((function(e){return e.json()})).then((function(e){return e}))}))},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={limit:t.perPage,offset:(t.page-1)*t.perPage};t.description&&t.description.trim()&&(n=f(f({},n),{},{description:t.description}));var r=new URL(l.RC+l.M4+"/".concat(e,"/suggestions"),window.location.origin);r.search=new URLSearchParams(n).toString();var o=window.insights.chrome.auth.getUser().then((function(){return fetch(r).then((function(e){if(!e.ok&&404===e.status)return{hasError:!0};if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){return e}))}));return o},v=function(){var e=a()(o().mark((function e(t){var n,r,i,a,c,s,p,m,d;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return a=(i=t||{}).perPage,c=i.orderBy,s=i.orderHow,p=f(f({order_by:{display_name:"display_name",os:"os","performance_utilization.cpu":"cpu","performance_utilization.memory":"memory","performance_utilization.max_io":"max_io",number_of_suggestions:"number_of_suggestions",state:"state",report_date:"report_date"}[c]||"report_date",order_how:s||u.SortByDirection.desc,limit:a||-1},(null==t?void 0:t.page)&&{offset:(t.page-1)*t.perPage}),(null==t||null===(n=t.filters)||void 0===n?void 0:n.hostnameOrId)&&{display_name:t.filters.hostnameOrId}),m=new URL(l.RC+l.M4,window.location.origin),d=new URLSearchParams(p),null==t||null===(r=t.stateFilter)||void 0===r||r.forEach((function(e){d.append("state",e)})),m.search=d.toString(),e.abrupt("return",fetch(m).then((function(e){if(!e.ok)throw Error(e.statusText);return e})).then((function(e){return e.json()})));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},94778:(e,t,n)=>{"use strict";n.d(t,{Of:()=>o,t9:()=>i,Pn:()=>a,zz:()=>c});var r=n(30859),o=function(e){return{type:"LOAD_ROS_SYSTEM_INFO",payload:(0,r.S7)(e)}},i=function(e,t){return{type:"FETCH_SYSTEM_RECOMMENDATIONS_LIST",payload:(0,r.x2)(e,t)}},a=function(){return{type:"LOAD_IS_CONFIGURED_INFO",payload:(0,r.jL)()}},c=function(e){return{type:"CHANGE_SYSTEM_COLUMNS",payload:e}}},58392:()=>{},81320:()=>{},314:()=>{},72816:()=>{}}]);