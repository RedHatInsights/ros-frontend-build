"use strict";(self.webpackChunkros_frontend=self.webpackChunkros_frontend||[]).push([[422],{88422:(e,t,n)=>{n.r(t),n.d(t,{isEmptyFilters:()=>M,constructActiveFilters:()=>V,onDeleteFilter:()=>$,default:()=>J});var r=n(87757),a=n.n(r),i=n(48926),o=n.n(i),l=n(34575),s=n.n(l),u=n(93913),c=n.n(u),p=n(81506),d=n.n(p),v=n(2205),f=n.n(v),h=n(78585),y=n.n(h),g=n(29754),m=n.n(g),b=n(59713),P=n.n(b),R=n(63038),S=n.n(R),F=n(1427),O=n.n(F),w=n(45697),k=n.n(w),E=n(37703),j=n(66031),D=n(32875),x=n(3955),C=n(53704),I=n(2095),K=n(85962),A=n(34348),L=n(81159),q=n(34023),H=n(13877),T=n(23279),Z=n.n(T);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){P()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=O().lazy((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(208)]).then(n.bind(n,66208))})),G={name:{label:"Name",value:""}},M=function(e){return Object.values(e).find((function(e){var t;return(null==e||null===(t=e.value)||void 0===t?void 0:t.length)>0||(null==e?void 0:e.length)>0}))},V=function(e){return Object.entries(e).map((function(e){var t=S()(e,2),n=t[0],r=t[1],a=(r=void 0===r?{}:r).label,i=r.value;return{category:a,chipKey:n,chips:(null==i?void 0:i.length)>0?Array.isArray(i)?i.map((function(e){return{name:e}})):[{name:i}]:[]}}))},$=function(e,t){var n,r,a,i=t[0];return N(N({},e),{},P()({},null==i?void 0:i.chipKey,N(N({},e[null==i?void 0:i.chipKey]||{}),{},{value:Array.isArray(null===(n=e[null==i?void 0:i.chipKey])||void 0===n?void 0:n.value)?null===(r=e[null==i?void 0:i.chipKey])||void 0===r||null===(a=r.value)||void 0===a?void 0:a.filter((function(e){var t;return!(null==i||null===(t=i.chips)||void 0===t?void 0:t.find((function(t){return t.name===e})))})):""})))},B=function(e){f()(v,e);var t,n,r,i,l,u,p=(l=v,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m()(l);if(u){var n=m()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y()(this,e)});function v(e){var t;return s()(this,v),(t=p.call(this,e)).state={page:1,perPage:10,inventoryId:e.inventoryId,activeFilters:G},t.debouncedThrottleHandleChange=Z()(t.throttleHandleChange.bind(d()(t)),800),t}return c()(v,[{key:"componentDidMount",value:(i=o()(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.requestLoadSysRecs();case 2:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"throttleHandleChange",value:(r=o()(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.requestLoadSysRecs(t);case 2:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"requestLoadSysRecs",value:(n=o()(a().mark((function e(){var t,n,r,i=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:{},r=N({page:this.state.page,perPage:this.state.perPage,description:null===(t=this.state)||void 0===t?void 0:t.descriptionFilter},n),e.next=4,this.props.loadSysRecs(this.state.inventoryId,r);case 4:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"applyFilters",value:function(e){var t,n;this.setState({activeFilters:e,descriptionFilter:null==e||null===(t=e.name)||void 0===t?void 0:t.value,page:1}),this.debouncedThrottleHandleChange({description:null==e||null===(n=e.name)||void 0===n?void 0:n.value,page:1})}},{key:"updatePagination",value:(t=o()(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState(t),e.next=3,this.requestLoadSysRecs(t);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"render",value:function(){var e,t,n=this,r=this.props,a=r.totalRecs,i=r.recsData,o=r.emptyState,l=this.state,s=l.page,u=l.perPage;return o?O().createElement(x.v,null):O().createElement(F.Suspense,{fallback:""},O().createElement(L.K,{hasGutter:!0},O().createElement(q.v,null,O().createElement(A.Dx,{headingLevel:"h3",size:"2xl"},"Suggestions")),O().createElement(q.v,null,O().createElement(I.Zb,null,O().createElement(K.e,null,O().createElement(j.Z,{className:"ros-primary-toolbar",pagination:{page:0===a?0:s,perPage:u,itemCount:a||0,onSetPage:function(e,t){return n.updatePagination({page:t,perPage:n.state.perPage})},onPerPageSelect:function(e,t){return n.updatePagination({page:1,perPage:t})},isCompact:!0,widgetId:"ros-pagination-top"},filterConfig:{items:[{label:G.name.label,type:"text",filterValues:{key:"text-filter",onChange:function(e,t){var r,a=N(N({},n.state.activeFilters),{},{name:N(N({},(null===(r=n.state.activeFilters)||void 0===r?void 0:r.name)||{}),{},{value:t})});n.applyFilters(a)},value:(null===(e=this.state.activeFilters)||void 0===e||null===(t=e.name)||void 0===t?void 0:t.value)||"",placeholder:"Filter by name"}}]},activeFiltersConfig:{filters:M(this.state.activeFilters)?V(this.state.activeFilters):[],onDelete:function(e,t,r){if(r)n.applyFilters(G);else{var a=$(n.state.activeFilters,t);n.applyFilters(a)}}}}),this.props.loading?null:O().createElement(_,{recommendations:i}),O().createElement(D.Z,null,O().createElement(H.tl,{itemCount:a||0,widgetId:"ros-pagination-bottom",page:0===a?0:s,perPage:u,variant:"bottom",onSetPage:function(e,t){return n.updatePagination({page:t,perPage:n.state.perPage})},onPerPageSelect:function(e,t){return n.updatePagination({page:1,perPage:t})}})))))))}}]),v}(O().Component);B.propTypes={inventoryId:k().string,loading:k().bool,recsData:k().array,totalRecs:k().number,loadSysRecs:k().func,emptyState:k().bool};const J=(0,E.$j)((function(e,t){var n,r,a,i;return N({loading:null===(n=e.systemRecsReducer)||void 0===n?void 0:n.loading,recsData:null===(r=e.systemRecsReducer)||void 0===r?void 0:r.recommendationsData,totalRecs:null===(a=e.systemRecsReducer)||void 0===a?void 0:a.totalRecommendations,emptyState:null===(i=e.systemRecsReducer)||void 0===i?void 0:i.emptyState},t)}),(function(e){return{loadSysRecs:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e((0,C.t9)(t,n))}}}))(B)}}]);