"use strict";(self.webpackChunkros_frontend=self.webpackChunkros_frontend||[]).push([[837],{3955:(e,t,n)=>{n.d(t,{v:()=>u});var r=n(45103),o=n(2112),a=n(43297),i=n.n(a),c=n(58061),u=function(){return i().createElement(r.Bullseye,null,i().createElement(r.EmptyState,{className:"empty-state-not-configured"},i().createElement(r.EmptyStateIcon,{icon:o.ZP}),i().createElement(r.Title,{headingLevel:"h5",size:"lg"},"Resource optimization isn't configured yet"),i().createElement(r.EmptyStateBody,null,i().createElement(r.Bullseye,null,i().createElement(r.Stack,{hasGutter:!0},i().createElement(r.StackItem,null,"Resource Optimization requires installing and configuring Performance Co-Pilot on the client system."),i().createElement(r.StackItem,null,"Check the documentation to find how to configure Resource Optimization with Ansible. An alternative method which does not require Ansible is also described."),i().createElement(r.StackItem,null,"After configuring Resource Optimization, it may take up to 24 hours until suggestions are available.")))),i().createElement(r.Button,{component:"a",href:c.wy,target:"_blank",variant:"primary"},"Getting started documentation")))}},88422:(e,t,n)=>{n.r(t),n.d(t,{isEmptyFilters:()=>N,constructActiveFilters:()=>U,onDeleteFilter:()=>B,default:()=>q});var r=n(87757),o=n.n(r),a=n(48926),i=n.n(a),c=n(34575),u=n.n(c),l=n(93913),s=n.n(l),p=n(81506),f=n.n(p),d=n(2205),h=n.n(d),v=n(78585),m=n.n(v),y=n(29754),g=n.n(y),b=n(59713),w=n.n(b),O=n(63038),S=n.n(O),P=n(43297),R=n.n(P),E=n(45697),k=n.n(E),j=n(2983),_=n(7887),C=n(65550),F=n(3955),x=n(94778),L=n(45103),D=n(23279),I=n.n(D);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=R().lazy((function(){return n.e(597).then(n.bind(n,57597))})),M={name:{label:"Name",value:""}},N=function(e){return Object.values(e).find((function(e){var t;return(null==e||null===(t=e.value)||void 0===t?void 0:t.length)>0||(null==e?void 0:e.length)>0}))},U=function(e){return Object.entries(e).map((function(e){var t=S()(e,2),n=t[0],r=t[1],o=(r=void 0===r?{}:r).label,a=r.value;return{category:o,chipKey:n,chips:(null==a?void 0:a.length)>0?Array.isArray(a)?a.map((function(e){return{name:e}})):[{name:a}]:[]}}))},B=function(e,t){var n,r,o,a=t[0];return A(A({},e),{},w()({},null==a?void 0:a.chipKey,A(A({},e[null==a?void 0:a.chipKey]||{}),{},{value:Array.isArray(null===(n=e[null==a?void 0:a.chipKey])||void 0===n?void 0:n.value)?null===(r=e[null==a?void 0:a.chipKey])||void 0===r||null===(o=r.value)||void 0===o?void 0:o.filter((function(e){var t;return!(null==a||null===(t=a.chips)||void 0===t?void 0:t.find((function(t){return t.name===e})))})):""})))},H=function(e){h()(d,e);var t,n,r,a,c,l,p=(c=d,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g()(c);if(l){var n=g()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m()(this,e)});function d(e){var t;return u()(this,d),(t=p.call(this,e)).state={page:1,perPage:10,inventoryId:e.inventoryId,activeFilters:M},t.debouncedThrottleHandleChange=I()(t.throttleHandleChange.bind(f()(t)),800),t}return s()(d,[{key:"componentDidMount",value:(a=i()(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.requestLoadSysRecs();case 2:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"throttleHandleChange",value:(r=i()(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.requestLoadSysRecs(t);case 2:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"requestLoadSysRecs",value:(n=i()(o().mark((function e(){var t,n,r,a=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:{},r=A({page:this.state.page,perPage:this.state.perPage,description:null===(t=this.state)||void 0===t?void 0:t.descriptionFilter},n),e.next=4,this.props.loadSysRecs(this.state.inventoryId,r);case 4:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"applyFilters",value:function(e){var t,n;this.setState({activeFilters:e,descriptionFilter:null==e||null===(t=e.name)||void 0===t?void 0:t.value,page:1}),this.debouncedThrottleHandleChange({description:null==e||null===(n=e.name)||void 0===n?void 0:n.value,page:1})}},{key:"updatePagination",value:(t=i()(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState(t),e.next=3,this.requestLoadSysRecs(t);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"render",value:function(){var e,t,n=this,r=this.props,o=r.totalRecs,a=r.recsData,i=r.emptyState,c=this.state,u=c.page,l=c.perPage;return i?R().createElement(F.v,null):R().createElement(P.Suspense,{fallback:""},R().createElement(L.Stack,{hasGutter:!0},R().createElement(L.StackItem,null,R().createElement(L.Title,{headingLevel:"h3",size:"2xl"},"Suggestions")),R().createElement(L.StackItem,null,R().createElement(L.Card,null,R().createElement(L.CardBody,null,R().createElement(_.Z,{className:"ros-primary-toolbar",pagination:{page:0===o?0:u,perPage:l,itemCount:o||0,onSetPage:function(e,t){return n.updatePagination({page:t,perPage:n.state.perPage})},onPerPageSelect:function(e,t){return n.updatePagination({page:1,perPage:t})},isCompact:!0,widgetId:"ros-pagination-top"},filterConfig:{items:[{label:M.name.label,type:"text",filterValues:{key:"text-filter",onChange:function(e,t){var r,o=A(A({},n.state.activeFilters),{},{name:A(A({},(null===(r=n.state.activeFilters)||void 0===r?void 0:r.name)||{}),{},{value:t})});n.applyFilters(o)},value:(null===(e=this.state.activeFilters)||void 0===e||null===(t=e.name)||void 0===t?void 0:t.value)||"",placeholder:"Filter by name"}}]},activeFiltersConfig:{filters:N(this.state.activeFilters)?U(this.state.activeFilters):[],onDelete:function(e,t,r){if(r)n.applyFilters(M);else{var o=B(n.state.activeFilters,t);n.applyFilters(o)}}}}),this.props.loading?null:R().createElement(z,{recommendations:a}),R().createElement(C.Z,null,R().createElement(L.Pagination,{itemCount:o||0,widgetId:"ros-pagination-bottom",page:0===o?0:u,perPage:l,variant:"bottom",onSetPage:function(e,t){return n.updatePagination({page:t,perPage:n.state.perPage})},onPerPageSelect:function(e,t){return n.updatePagination({page:1,perPage:t})}})))))))}}]),d}(R().Component);H.propTypes={inventoryId:k().string,loading:k().bool,recsData:k().array,totalRecs:k().number,loadSysRecs:k().func,emptyState:k().bool};const q=(0,j.$j)((function(e,t){var n,r,o,a;return A({loading:null===(n=e.systemRecsReducer)||void 0===n?void 0:n.loading,recsData:null===(r=e.systemRecsReducer)||void 0===r?void 0:r.recommendationsData,totalRecs:null===(o=e.systemRecsReducer)||void 0===o?void 0:o.totalRecommendations,emptyState:null===(a=e.systemRecsReducer)||void 0===a?void 0:a.emptyState},t)}),(function(e){return{loadSysRecs:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e((0,x.t9)(t,n))}}}))(H)},30859:(e,t,n)=>{n.d(t,{jL:()=>h,S7:()=>v,x2:()=>m,lc:()=>y,tp:()=>g,Q5:()=>b});var r=n(87757),o=n.n(r),a=n(48926),i=n.n(a),c=n(59713),u=n.n(c),l=n(88587),s=n(58061);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){if(!e.ok)throw Error(e.statusText);return e}var h=function(){var e=new URL(s.RC+s.LO,window.location.origin);return fetch(e).then(d).then((function(e){return e.json()})).then((function(e){return e}))},v=function(e){var t=new URL(s.RC+s.M4+"/".concat(e),window.location.origin);return fetch(t).then(d).then((function(e){return e.json()})).then((function(e){return e}))},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={limit:t.perPage,offset:(t.page-1)*t.perPage};t.description&&t.description.trim()&&(n=f(f({},n),{},{description:t.description}));var r=new URL(s.RC+s.M4+"/".concat(e,"/suggestions"),window.location.origin);r.search=new URLSearchParams(n).toString();var o=fetch(r).then((function(e){if(!e.ok&&404===e.status)return{hasError:!0};if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){return e}));return o},y=function(){var e=i()(o().mark((function e(t){var n,r,a,i,c,u,p,d,h,v;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=(i=t||{}).perPage,u=i.orderBy,p=i.orderHow,d=f(f({order_by:{display_name:"display_name",os:"os","performance_utilization.cpu":"cpu","performance_utilization.memory":"memory","performance_utilization.max_io":"max_io",number_of_suggestions:"number_of_suggestions",state:"state",report_date:"report_date"}[u]||"report_date",order_how:p||l.SortByDirection.desc,limit:c||-1},(null==t?void 0:t.page)&&{offset:(t.page-1)*t.perPage}),(null==t||null===(n=t.filters)||void 0===n?void 0:n.hostnameOrId)&&{display_name:t.filters.hostnameOrId}),h=new URL(s.RC+s.M4,window.location.origin),v=new URLSearchParams(d),null==t||null===(r=t.stateFilter)||void 0===r||r.forEach((function(e){v.append("state",e)})),null==t||null===(a=t.osFilter)||void 0===a||a.forEach((function(e){v.append("os",e)})),h.search=v.toString(),e.abrupt("return",fetch(h).then((function(e){if(!e.ok)throw Error(e.statusText);return e})).then((function(e){return e.json()})));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e,t){var n=new URL("".concat(s.RC).concat(s.M4,"/").concat(e,"/history"),window.location.origin),r=new URLSearchParams({limit:t});return n.search=r.toString(),fetch(n).then(d).then((function(e){return e.json()})).then((function(e){return e}))},b=function(){var e=i()(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URL(s.t5,window.location.origin),e.abrupt("return",fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service:"ros",template:"executiveReport"})}).then(d).then((function(e){return e.blob()})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},94778:(e,t,n)=>{n.d(t,{Of:()=>o,t9:()=>a,Pn:()=>i,zz:()=>c});var r=n(30859),o=function(e){return{type:"LOAD_ROS_SYSTEM_INFO",payload:(0,r.S7)(e)}},a=function(e,t){return{type:"FETCH_SYSTEM_RECOMMENDATIONS_LIST",payload:(0,r.x2)(e,t)}},i=function(){return{type:"LOAD_IS_CONFIGURED_INFO",payload:(0,r.jL)()}},c=function(e){return{type:"CHANGE_SYSTEM_COLUMNS",payload:e}}}}]);