(self.webpackChunkros_frontend=self.webpackChunkros_frontend||[]).push([[821],{42269:(e,r,t)=>{(r=t(23645)(!1)).push([e.id,".ros .ins-c-primary-toolbar .ins-c-primary-toolbar__pagination,.inventory .ins-c-primary-toolbar .ins-c-primary-toolbar__pagination{margin-left:auto}.ros .ros-systems-table .pf-c-content.expanded-row,.inventory .ros-systems-table .pf-c-content.expanded-row{--pf-c-content--dl--RowGap: var(--pf-global--spacer--xs);--pf-c-content--FontSize: var(--pf-global--FontSize--sm)}.ros .ros-systems-table .pf-link:hover,.inventory .ros-systems-table .pf-link:hover{text-decoration:none}.ros .ros-systems-table .recommendations.green-400,.inventory .ros-systems-table .recommendations.green-400{color:var(--pf-global--palette--green-400)}.ros .ros-systems-table .recommendations,.inventory .ros-systems-table .recommendations{padding-left:var(--pf-global--spacer--lg);font-weight:var(--pf-global--FontWeight--bold)}.ros .ros-systems-table .pf-c-progress,.inventory .ros-systems-table .pf-c-progress{grid-template-columns:auto}.ros .ros-systems-table .pf-c-progress .pf-c-progress__status,.inventory .ros-systems-table .pf-c-progress .pf-c-progress__status{text-align:left}.ros .progress-score-bar,.inventory .progress-score-bar{grid-gap:var(--pf-global--spacer--xs)}.ros .progress-score-bar span.pf-c-progress__status-icon,.inventory .progress-score-bar span.pf-c-progress__status-icon{display:none}.ros .progress-score-bar .pf-c-progress__bar:before,.inventory .progress-score-bar .pf-c-progress__bar:before{background:var(--pf-global--palette--black-400)}.ros .progress-score-bar .pf-c-progress__measure,.inventory .progress-score-bar .pf-c-progress__measure{color:var(--pf-global--palette--black-600)}.ros .green-100 .pf-c-progress__indicator,.inventory .green-100 .pf-c-progress__indicator{background:var(--pf-global--palette--green-100)}.ros .green-400 .pf-c-progress__indicator,.inventory .green-400 .pf-c-progress__indicator{background:var(--pf-global--palette--green-300)}.ros .gold-400 .pf-c-progress__indicator,.inventory .gold-400 .pf-c-progress__indicator{background:var(--pf-global--palette--gold-300)}.ros .orange-300 .pf-c-progress__indicator,.inventory .orange-300 .pf-c-progress__indicator{background:var(--pf-global--palette--orange-300)}.ros .danger-200 .pf-c-progress__indicator,.inventory .danger-200 .pf-c-progress__indicator{background:var(--pf-global--palette--red-200)}\n",""]),e.exports=r},3292:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>$});var n=t(319),o=t.n(n),s=t(59713),a=t.n(s),i=t(87757),c=t.n(i),p=t(48926),l=t.n(p),u=t(34575),f=t.n(u),d=t(93913),m=t.n(d),g=t(81506),y=t.n(g),v=t(2205),b=t.n(v),_=t(78585),h=t.n(_),k=t(29754),w=t.n(k),O=t(1427),E=t.n(O),x=t(45697),P=t.n(x),S=t(16530),D=t(48716),R=t(39173),j=t(86350),F=t(2095),N=t(85962),I=t(86748),L=t(80962),T=t(33739),C=t(55206),B=(t(71526),t(18546)),A=t(82253),z=t(47945),G=function(e){var r,t=e.valueScore,n=e.measureLocation,o="".concat(t,"/5");return E().createElement(E().Fragment,null,E().createElement(z.Ex,{value:t,min:0,max:5,label:o,valueText:o,className:"progress-score-bar ".concat((r=t,{5:"green-400",4:"green-100",3:"gold-400",2:"orange-300"}[r]||"danger-200")),measureLocation:n}))};function W(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function Z(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?W(Object(t),!0).forEach((function(r){a()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}G.propTypes={measureLocation:P().string,valueScore:P().number};var H=function(e,r,t){var n=t.inventory_id;return E().createElement(S.Link,{to:{pathname:"/".concat(n)},className:"pf-link system-link link-".concat(n)},e)},U=function(e){return E().createElement(G,{measureLocation:"outside",valueScore:e})},q=function(e,r,t){var n=t.inventory_id;return E().createElement(S.Link,{to:{pathname:"/".concat(n)},className:"pf-link recommendations ".concat(0===e?"green-400":""," link-").concat(n)},e)},M=function(e,r){return Z(Z({},e),{},{rows:e.rows.map((function(e){return Z(Z({},e),{},{isOpen:e.id===r.payload.id?r.payload.isOpen:e.isOpen})}))})},X=t(8969),Y=t(46755),V=t(27839);function J(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function K(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?J(Object(t),!0).forEach((function(r){a()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Q=function(e){b()(d,e);var r,t,n,s,i,p,u=(i=d,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=w()(i);if(p){var t=w()(this).constructor;e=Reflect.construct(r,arguments,t)}else e=r.apply(this,arguments);return h()(this,e)});function d(e){var r;return f()(this,d),(r=u.call(this,e)).state={perPage:10,orderBy:"display_name",orderDirection:I.SortByDirection.asc,columns:[{key:"display_name",title:"Name",renderFunc:H},{key:"display_performance_score.cpu_score",title:"CPU score",renderFunc:U},{key:"display_performance_score.memory_score",title:"Memory score",renderFunc:U},{key:"display_performance_score.io_score",title:"I/O score",renderFunc:U},{key:"number_of_recommendations",title:"Recommendations",renderFunc:q},{key:"state",title:"State"}]},r.sortingHeader={display_name:"display_name","display_performance_score.cpu_score":"cpu_score","display_performance_score.memory_score":"memory_score","display_performance_score.io_score":"io_score",number_of_recommendations:"number_of_recommendations",state:"state"},r.chunkSize=50,r.inventory=E().createRef(),r.fetchSystems=r.fetchSystems.bind(y()(r)),r}return m()(d,[{key:"componentDidMount",value:(s=l()(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(r=insights.chrome)||void 0===r||null===(t=r.hideGlobalFilter)||void 0===t||t.call(r,!0),insights.chrome.appAction("ros-systems");case 2:case"end":return e.stop()}}),e)}))),function(){return s.apply(this,arguments)})},{key:"fetchSystems",value:(n=l()(c().mark((function e(r){var t,n,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return n=K({limit:r.perPage,offset:(r.page-1)*r.perPage,order_by:r.orderBy||this.state.orderBy,order_how:r.orderHow||this.state.orderDirection},(null==r||null===(t=r.filters)||void 0===t?void 0:t.hostnameOrId)&&{display_name:r.filters.hostnameOrId}),(o=new URL(X.RC+X.M4,window.location.origin)).search=new URLSearchParams(n).toString(),e.abrupt("return",fetch(o).then((function(e){if(!e.ok)throw Error(e.statusText);return e})).then((function(e){return e.json()})));case 6:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"chunkIdsArray",value:function(e){for(var r=[];e.length;)r.push(e.splice(0,this.chunkSize));return r}},{key:"fetchInventoryDetails",value:(t=l()(c().mark((function e(r,t){var n,s,a,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[],!(t.per_page>50&&r.length>50)){e.next=8;break}return e.next=4,this.multipleGetEntitiesRequests(r,t);case 4:e.sent.map((function(e){var r;(r=n).push.apply(r,o()(e))})),e.next=12;break;case 8:return e.next=10,null===(s=(a=this.state).getEntities)||void 0===s?void 0:s.call(a,r,t,!1);case 10:i=e.sent,n=i.results;case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e,this)}))),function(e,r){return t.apply(this,arguments)})},{key:"multipleGetEntitiesRequests",value:(r=l()(c().mark((function e(r,t){var n,o=this;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.chunkIdsArray(r),e.abrupt("return",Promise.all(n.map(function(){var e=l()(c().mark((function e(r){var n,s,a,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=(s=o.state).getEntities)||void 0===n?void 0:n.call(s,r,t,!1);case 2:return a=e.sent,i=a.results,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}())).then((function(e){return e})));case 2:case"end":return e.stop()}}),e,this)}))),function(e,t){return r.apply(this,arguments)})},{key:"render",value:function(){var e=this;return E().createElement(E().Fragment,null,E().createElement(D.Z,null,E().createElement(R.Z,{title:"Resource Optimization"})),E().createElement(j.Z,null,E().createElement(Y.B.Consumer,null,(function(r){return!1===r.permissions.systemsRead?E().createElement(V.Z,{serviceName:"Resource Optimization"}):E().createElement(F.Zb,{className:"pf-t-light  pf-m-opaque-100"},E().createElement(N.e,null,E().createElement(T.Z,{disableDefaultColumns:!0,ref:e.inventory,hasCheckbox:!1,tableProps:{canSelectAll:!1,className:"ros-systems-table"},variant:"compact",hideFilters:{stale:!0,registeredWith:!0},getEntities:function(){var r=l()(c().mark((function r(t,n){var o,s,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.setState((function(){return{orderBy:n.orderBy,orderDirection:n.orderDirection}})),r.next=3,e.fetchSystems({page:n.page,perPage:n.per_page,orderBy:e.sortingHeader[n.orderBy],orderHow:n.orderDirection,filters:n.filters});case 3:return o=r.sent,s=(o.data||[]).map((function(e){return e.inventory_id})),r.next=7,e.fetchInventoryDetails(s,K(K({},n),{},{page:1,hasItems:!0}));case 7:return a=r.sent,r.abrupt("return",{results:o.data.map((function(e){return K(K({},a.find((function(r){return r.id===e.inventory_id}))),e)})),total:o.meta.count,page:n.page,per_page:n.per_page});case 9:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}(),onLoad:function(r){var t,n,o,s,i=r.mergeWithEntities,c=r.INVENTORY_ACTION_TYPES,p=r.api;e.setState({getEntities:null==p?void 0:p.getEntities}),(0,C.z2)(K({},i((t=c,n=e.state.columns,s=t.LOAD_ENTITIES_FULFILLED,(0,B.Gg)((o={},a()(o,s,(function(e){return function(e,r){return Z(Z({},r),{},{columns:e,rows:r.rows.map((function(e){return Z(Z({},e),{},{children:(r=e,t=r.id,n=r.cloud_provider,o=r.instance_type,s=r.idling_time,a=r.io_wait,E().createElement(A.v,{id:t,cloudProvider:n,instanceType:o,idlingTime:s,ioWait:a}))});var r,t,n,o,s,a})),loaded:!0})}(n,e)})),a()(o,"EXPAND_ROW",M),o)))))),e.props.setSort(e.state.orderBy,e.state.orderDirection,"CHANGE_SORT")},expandable:"true",onExpandClick:function(r,t,n,o){var s=o.id;return e.props.expandRow(s,n,"EXPAND_ROW")}})))}))))}}]),d}(E().Component);Q.propTypes={expandRow:P().func,setSort:P().func};const $=(0,S.withRouter)((0,L.connect)(null,(function(e){return{expandRow:function(r,t,n){return e({type:n,payload:{id:r,isOpen:t}})},setSort:function(r,t,n){return e({type:n,payload:{key:r,direction:t}})}}}))(Q))},71526:(e,r,t)=>{"use strict";var n=t(93379),o=t.n(n),s=t(42269),a=t.n(s),i=o()(a(),{insert:"head",singleton:!1});if(!a().locals||e.hot.invalidate){var c=a().locals;e.hot.accept(42269,(r=>{s=t(42269),function(e,r,t){if(!e&&r||e&&!r)return!1;var n;for(n in e)if(e[n]!==r[n])return!1;for(n in r)if(!e[n])return!1;return!0}(c,(a=t.n(s))().locals)?(c=a().locals,i(a())):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),a().locals}}]);
//# sourceMappingURL=RosPage.95b66d3d977329f67e89.js.map