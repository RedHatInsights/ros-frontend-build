(self.webpackChunkros_frontend=self.webpackChunkros_frontend||[]).push([[821],{3955:(e,t,n)=>{"use strict";n.d(t,{v:()=>h});var r=n(8896),i=n(219),o=n(74183),a=n(86728),s=n(34348),c=n(81159),u=n(34023),l=n(6202),p=n(2112),f=n(1427),m=n.n(f),d=n(14906),h=function(){return m().createElement(r.b,null,m().createElement(i.ub,{className:"empty-state-not-configured"},m().createElement(a.k,{icon:p.ZP}),m().createElement(s.Dx,{headingLevel:"h5",size:"lg"},"Resource optimization isn't configured yet"),m().createElement(o.B,null,m().createElement(r.b,null,m().createElement(c.K,{hasGutter:!0},m().createElement(u.v,null,"Resource Optimization requires installing and configuring Performance Co-Pilot on the client system."),m().createElement(u.v,null,"Check the documentation to find how to configure Resource Optimization with Ansible. An alternative method which does not require Ansible is also described."),m().createElement(u.v,null,"After configuring Resource Optimization, it may take up to 24 hours until suggestions are available.")))),m().createElement(l.Button,{component:"a",href:d.wy,target:"_blank",variant:"primary"},"Getting started documentation")))}},32932:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ue});var r=n(319),i=n.n(r),o=n(87757),a=n.n(o),s=n(48926),c=n.n(s),u=n(34575),l=n.n(u),p=n(93913),f=n.n(p),m=n(81506),d=n.n(m),h=n(2205),y=n.n(h),g=n(78585),v=n.n(g),O=n(29754),b=n.n(O),w=n(59713),C=n.n(w),E=n(1427),S=n.n(E),k=n(45697),R=n.n(k),P=n(16530),D=n(48716),_=n(39173),j=n(86350),x=n(2095),F=n(85962),M=n(88587),z=n(2983),A=n(33739),I=n(30319),L=n(70702),B=n(53704),N=n(14906),T=n(3955),U=n(87999),V=n(56067),H=n(63038),q=n.n(H),G=n(6202),Q=n(26940),Z=n(38243),Y=n(70924),W=n(48826),J=n(4867),K=n(82224),X=n(78826),$=n(36842),ee=n(21508),te=n(63540),ne=n(20018);function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){C()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var oe=function(e){var t=e.modalColumns,n=e.isModalOpen,r=e.setModalOpen,o=e.saveColumns,a=(0,E.useState)(t),s=q()(a,2),c=s[0],u=s[1],l=function(){r(!1),u(t)};return S().createElement(X.u_,{title:"Manage columns",onClose:l,isOpen:n,variant:"small",description:S().createElement(ne.D,null,S().createElement(te.xv,{component:te.qO.p},"Selected categories will be displayed in the table"),S().createElement($.P,{hasGutter:!0},S().createElement(ee.J,null,S().createElement(G.Button,{isInline:!0,onClick:function(){u(c.map((function(e){return ie(ie({},e),{},{isChecked:!0})})))},variant:"link"},"Select all")),S().createElement(ee.J,null,S().createElement(G.Button,{isInline:!0,onClick:function(){u(c.map((function(e){var t;return ie(ie({},e),{},{isChecked:null!==(t=e.isShownByDefault)&&void 0!==t&&t})})))},variant:"link"},"Reset to default")))),actions:[S().createElement(G.Button,{key:"save",variant:"primary",onClick:function(){r(!1),o(c)}},"Save"),S().createElement(G.Button,{key:"cancel",variant:"secondary",onClick:l},"Cancel")]},S().createElement(Q.DataList,{"aria-label":"Column management table",id:"column-management-table",isCompact:!0},c.map((function(e,t){return S().createElement(W.L,{key:e.key},S().createElement(K.V,null,S().createElement(Y.$,{checked:e.isChecked,id:"checkbox-".concat(t),onChange:function(){return function(e){var t=i()(c),n=ie({},t[e]);n.isChecked=!n.isChecked,t[e]=n,u(t)}(t)},isDisabled:e.isDisabled}),S().createElement(J.p,{dataListCells:[S().createElement(Z.K,{key:"column-table-item-".concat(t)},S().createElement("label",null,e.title))]})))}))))};function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){C()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}oe.propTypes={modalColumns:R().arrayOf(R().object).isRequired,isModalOpen:R().bool.isRequired,setModalOpen:R().func.isRequired,saveColumns:R().func.isRequired};var ce=function(e){y()(m,e);var t,n,r,o,s,u,p=(s=m,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b()(s);if(u){var n=b()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v()(this,e)});function m(e){var t;return l()(this,m),t=p.call(this,e),C()(d()(t),"updateStateFilter",(function(e){t.setState({stateFilterValue:e})})),C()(d()(t),"onDeleteFilters",(function(e,n){var r=n.filter((function(e){return"State"===e.category}));if(r.length>0){var i;t.clearStateQueryParams();var o=null===(i=r[0])||void 0===i?void 0:i.chips.map((function(e){return null==e?void 0:e.name})),a=t.state.stateFilterValue.filter((function(e){return!o.includes(e)}));t.setState({stateFilterValue:a})}})),C()(d()(t),"getActiveFilterConfig",(function(){var e=t.state.stateFilterValue.map((function(e){return{name:e}}));return e.length>0?[{category:"State",chips:e}]:[]})),C()(d()(t),"setColumnModalOpen",(function(e){t.setState({isColumnModalOpen:e})})),C()(d()(t),"getActiveColumns",(function(){return t.props.columns.filter((function(e){return e.isChecked}))})),t.state={perPage:10,orderBy:"display_name",orderDirection:M.SortByDirection.asc,stateFilterValue:[],isColumnModalOpen:!1},t.sortingHeader={display_name:"display_name",os:"os","performance_utilization.cpu":"cpu","performance_utilization.memory":"memory","performance_utilization.max_io":"max_io",number_of_suggestions:"number_of_suggestions",state:"state"},t.chunkSize=50,t.inventory=S().createRef(),t.fetchSystems=t.fetchSystems.bind(d()(t)),t}return f()(m,[{key:"componentDidMount",value:(o=c()(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.title="Resource Optimization - Red Hat Insights",null===(t=insights.chrome)||void 0===t||null===(n=t.hideGlobalFilter)||void 0===n||n.call(t,!0),insights.chrome.appAction("ros-systems"),e.next=5,this.props.isROSConfigured();case 5:this.processQueryParams();case 6:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"processQueryParams",value:function(){var e=this.props.location,t=new URLSearchParams(e.search),n=t.get(N.Q0);"true"===t.get(N.H7)?this.setState({stateFilterValue:["Waiting for data"]}):"true"===n&&this.setState({stateFilterValue:["Undersized","Oversized","Under pressure","Idling"]})}},{key:"clearStateQueryParams",value:function(){var e=this.props.location,t=new URL(window.location),n=new URLSearchParams(e.search),r=n.get(N.Q0);(n.get(N.H7)||r)&&(n.delete(N.Q0),n.delete(N.H7),window.history.replaceState(null,"","".concat(t.origin).concat(t.pathname,"?").concat(n.toString()).concat(window.location.hash)))}},{key:"fetchSystems",value:(r=c()(a().mark((function e(t){var n,r,i,o,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return i=se({limit:t.perPage,offset:(t.page-1)*t.perPage,order_by:t.orderBy||this.state.orderBy,order_how:t.orderHow||this.state.orderDirection},(null==t||null===(n=t.filters)||void 0===n?void 0:n.hostnameOrId)&&{display_name:t.filters.hostnameOrId}),o=new URL(N.RC+N.M4,window.location.origin),s=new URLSearchParams(i),null==t||null===(r=t.stateFilter)||void 0===r||r.forEach((function(e){s.append("state",e)})),o.search=s.toString(),e.abrupt("return",fetch(o).then((function(e){if(!e.ok)throw Error(e.statusText);return e})).then((function(e){return e.json()})));case 8:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"chunkIdsArray",value:function(e){for(var t=[];e.length;)t.push(e.splice(0,this.chunkSize));return t}},{key:"fetchInventoryDetails",value:(n=c()(a().mark((function e(t,n){var r,o,s,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=[],!(n.per_page>50&&t.length>50)){e.next=8;break}return e.next=4,this.multipleGetEntitiesRequests(t,n);case 4:e.sent.map((function(e){var t;(t=r).push.apply(t,i()(e))})),e.next=12;break;case 8:return e.next=10,null===(o=(s=this.state).getEntities)||void 0===o?void 0:o.call(s,t,n,!1);case 10:c=e.sent,r=c.results;case 12:return e.abrupt("return",r);case 13:case"end":return e.stop()}}),e,this)}))),function(e,t){return n.apply(this,arguments)})},{key:"multipleGetEntitiesRequests",value:(t=c()(a().mark((function e(t,n){var r,i=this;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.chunkIdsArray(t),e.abrupt("return",Promise.all(r.map(function(){var e=c()(a().mark((function e(t){var r,o,s,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(r=(o=i.state).getEntities)||void 0===r?void 0:r.call(o,t,n,!1);case 2:return s=e.sent,c=s.results,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){return e})));case 2:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})},{key:"renderConfigStepsOrTable",value:function(){var e=this,t=N.N7.state,n=this.getActiveColumns();return this.props.showConfigSteps?S().createElement(T.v,null):S().createElement(x.Zb,{className:"pf-t-light  pf-m-opaque-100"},S().createElement(F.e,null,S().createElement(oe,{isModalOpen:this.state.isColumnModalOpen,setModalOpen:this.setColumnModalOpen,modalColumns:this.props.columns,saveColumns:function(t){return e.props.changeSystemColumns({columns:t})}}),S().createElement(A.Z,{disableDefaultColumns:!0,ref:this.inventory,hasCheckbox:!1,tableProps:{canSelectAll:!1,className:"ros-systems-table"},variant:"compact",hideFilters:{all:!0,name:!1},autoRefresh:!0,customFilters:{stateFilter:this.state.stateFilterValue},columns:n,getEntities:function(){var t=c()(a().mark((function t(n,r){var i,o,s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState((function(){return{orderBy:r.orderBy,orderDirection:r.orderDirection}})),t.next=3,e.fetchSystems({page:r.page,perPage:r.per_page,orderBy:e.sortingHeader[r.orderBy],orderHow:r.orderDirection,filters:r.filters,stateFilter:r.stateFilter});case 3:return i=t.sent,o=(i.data||[]).map((function(e){return e.inventory_id})),t.next=7,e.fetchInventoryDetails(o,se(se({},r),{},{page:1,hasItems:!0}));case 7:return s=t.sent,t.abrupt("return",{results:i.data.map((function(e){var t=s.find((function(t){return t.id===e.inventory_id}));return se(se(se({},t),t?{isDeleted:!1}:{id:e.inventory_id,isDeleted:!0}),e)})),total:i.meta.count,page:r.page,per_page:r.per_page});case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),onLoad:function(t){var n=t.mergeWithEntities,r=t.INVENTORY_ACTION_TYPES,i=t.api;e.setState({getEntities:null==i?void 0:i.getEntities}),(0,I.z2)(se({},n((0,L.zw)(r,N.XY)))),e.props.setSort(e.state.orderBy,e.state.orderDirection,"CHANGE_SORT")},expandable:"true",filterConfig:{items:[{label:t.label,type:t.type,value:"checkbox-state",filterValues:{items:t.filterValues.items,onChange:function(t,n){return e.updateStateFilter(n)},value:this.state.stateFilterValue}}]},activeFiltersConfig:{filters:this.getActiveFilterConfig(),onDelete:this.onDeleteFilters},actionsConfig:{actions:["",{label:"Manage columns",onClick:function(){return e.setColumnModalOpen(!0)}}]},onExpandClick:function(t,n,r,i){var o=i.id;return e.props.expandRow(o,r,"EXPAND_ROW")}})))}},{key:"render",value:function(){var e=this;return S().createElement(S().Fragment,null,S().createElement(D.Z,null,S().createElement(_.Z,{title:"Resource Optimization"})),S().createElement(j.Z,null,S().createElement(U.B.Consumer,null,(function(t){return!1===t.permissions.systemsRead?S().createElement(V.Z,{serviceName:"Resource Optimization"}):e.renderConfigStepsOrTable()}))))}}]),m}(S().Component);ce.propTypes={expandRow:R().func,setSort:R().func,isROSConfigured:R().func,showConfigSteps:R().bool,location:R().object,columns:R().array,changeSystemColumns:R().func};const ue=(0,P.withRouter)((0,z.$j)((function(e,t){var n;return se({showConfigSteps:null===(n=e.isConfiguredReducer)||void 0===n?void 0:n.showConfigSteps,columns:e.systemColumnsReducer.columns},t)}),(function(e){return{expandRow:function(t,n,r){return e({type:r,payload:{id:t,isOpen:n}})},setSort:function(t,n,r){return e({type:r,payload:{key:t,direction:n}})},isROSConfigured:function(){return e((0,B.Pn)())},changeSystemColumns:function(t){return e((0,B.zz)(t))}}}))(ce))},53704:(e,t,n)=>{"use strict";n.d(t,{zz:()=>d,Pn:()=>m,t9:()=>f,Of:()=>p});var r=n(59713),i=n.n(r),o=n(14906);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e){if(!e.ok)throw Error(e.statusText);return e}var u=function(e){var t=new URL(o.RC+o.M4+"/".concat(e),window.location.origin);return window.insights.chrome.auth.getUser().then((function(){return fetch(t).then(c).then((function(e){return e.json()})).then((function(e){return e}))}))},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={limit:t.perPage,offset:(t.page-1)*t.perPage};t.description&&t.description.trim()&&(n=s(s({},n),{},{description:t.description}));var r=new URL(o.RC+o.M4+"/".concat(e,"/suggestions"),window.location.origin);r.search=new URLSearchParams(n).toString();var i=window.insights.chrome.auth.getUser().then((function(){return fetch(r).then((function(e){if(!e.ok&&404===e.status)return{hasError:!0};if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){return e}))}));return i},p=function(e){return{type:"LOAD_ROS_SYSTEM_INFO",payload:u(e)}},f=function(e,t){return{type:"FETCH_SYSTEM_RECOMMENDATIONS_LIST",payload:l(e,t)}},m=function(){return{type:"LOAD_IS_CONFIGURED_INFO",payload:(e=new URL(o.RC+o.LO,window.location.origin),window.insights.chrome.auth.getUser().then((function(){return fetch(e).then(c).then((function(e){return e.json()})).then((function(e){return e}))})))};var e},d=function(e){return{type:"CHANGE_SYSTEM_COLUMNS",payload:e}}},70347:()=>{},11452:()=>{},32857:()=>{},93818:()=>{},94498:()=>{},18192:()=>{},23055:()=>{},28992:()=>{},81320:()=>{},90479:()=>{},78752:()=>{},25238:()=>{},36974:()=>{},314:()=>{},16166:()=>{},53519:()=>{}}]);
//# sourceMappingURL=../sourcemaps/RosPage.bfcb567c7e78f0b0635cae4dd5792035.js.map