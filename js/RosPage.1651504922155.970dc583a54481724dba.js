(self.webpackChunkros_frontend=self.webpackChunkros_frontend||[]).push([[821],{3955:(e,t,n)=>{"use strict";n.d(t,{v:()=>h});var r=n(8896),o=n(219),a=n(74183),i=n(86728),s=n(34348),c=n(81159),l=n(34023),u=n(6202),p=n(2112),f=n(1427),d=n.n(f),m=n(14906),h=function(){return d().createElement(r.b,null,d().createElement(o.ub,{className:"empty-state-not-configured"},d().createElement(i.k,{icon:p.ZP}),d().createElement(s.Dx,{headingLevel:"h5",size:"lg"},"Resource optimization isn't configured yet"),d().createElement(a.B,null,d().createElement(r.b,null,d().createElement(c.K,{hasGutter:!0},d().createElement(l.v,null,"Resource Optimization requires installing and configuring Performance Co-Pilot on the client system."),d().createElement(l.v,null,"Check the documentation to find how to configure Resource Optimization with Ansible. An alternative method which does not require Ansible is also described."),d().createElement(l.v,null,"After configuring Resource Optimization, it may take up to 24 hours until suggestions are available.")))),d().createElement(u.Button,{component:"a",href:m.wy,target:"_blank",variant:"primary"},"Getting started documentation")))}},5529:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ne});var r=n(319),o=n.n(r),a=n(87757),i=n.n(a),s=n(48926),c=n.n(s),l=n(34575),u=n.n(l),p=n(93913),f=n.n(p),d=n(81506),m=n.n(d),h=n(2205),y=n.n(h),g=n(78585),v=n.n(g),w=n(29754),O=n.n(w),S=n(59713),b=n.n(S),E=n(1427),C=n.n(E),k=n(45697),x=n.n(k),F=n(16530),_=n(48716),R=n(39173),P=n(86350),j=n(6202),D=n(2095),N=n(85962),M=n(88587),B=n(2983),L=n(33739),z=n(30319),T=n(70702),I=n(94778),A=n(14906),V=n(3955),U=n(87999),H=n(56067),q=n(63038),G=n.n(q),Q=n(26940),Z=n(38243),Y=n(70924),J=n(48826),$=n(4867),W=n(82224),X=n(78826),K=n(36842),ee=n(21508),te=n(63540),ne=n(20018);function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae=function(e){var t=e.modalColumns,n=e.isModalOpen,r=e.setModalOpen,a=e.saveColumns,i=(0,E.useState)(t),s=G()(i,2),c=s[0],l=s[1],u=function(){r(!1),l(t)};return C().createElement(X.u_,{title:"Manage columns",onClose:u,isOpen:n,variant:"small",description:C().createElement(ne.D,null,C().createElement(te.xv,{component:te.qO.p},"Selected categories will be displayed in the table"),C().createElement(K.P,{hasGutter:!0},C().createElement(ee.J,null,C().createElement(j.Button,{isInline:!0,onClick:function(){l(c.map((function(e){return oe(oe({},e),{},{isChecked:!0})})))},variant:"link"},"Select all")),C().createElement(ee.J,null,C().createElement(j.Button,{isInline:!0,onClick:function(){l(c.map((function(e){var t;return oe(oe({},e),{},{isChecked:null!==(t=e.isShownByDefault)&&void 0!==t&&t})})))},variant:"link"},"Reset to default")))),actions:[C().createElement(j.Button,{key:"save",variant:"primary",onClick:function(){r(!1),a(c)}},"Save"),C().createElement(j.Button,{key:"cancel",variant:"secondary",onClick:u},"Cancel")]},C().createElement(Q.DataList,{"aria-label":"Column management table",id:"column-management-table",isCompact:!0},c.map((function(e,t){return C().createElement(J.L,{key:e.key},C().createElement(W.V,null,C().createElement(Y.$,{checked:e.isChecked,id:"checkbox-".concat(t),onChange:function(){return function(e){var t=o()(c),n=oe({},t[e]);n.isChecked=!n.isChecked,t[e]=n,l(t)}(t)},isDisabled:e.isDisabled}),C().createElement($.p,{dataListCells:[C().createElement(Z.K,{key:"column-table-item-".concat(t)},C().createElement("label",null,e.modalTitle))]})))}))))};ae.propTypes={modalColumns:x().arrayOf(x().object).isRequired,isModalOpen:x().bool.isRequired,setModalOpen:x().func.isRequired,saveColumns:x().func.isRequired};var ie=n(67154),se=n.n(ie),ce=n(6479),le=n.n(ce),ue=n(3968),pe=n(30859),fe=n(27361),de=n.n(fe),me=n(39371),he=function(e,t){var n=[],r="json"===t?A.Jd:A._0;return e.map((function(e){var o="json"===t?{}:[];r.map((function(n){var r=de()(e,n,"");r="N/A"!==(r=null===r||-1===r?"N/A":r.toString())&&A.BX.includes(n)?"".concat(r,"%"):r,r="report_date"===n?(0,me.y_)("exact")(new Date(r)):r,"json"===t?o[n]=r:"pdf"===t&&o.push(r)})),n.push(o)})),n},ye=function(e){var t=he(e,"json");return JSON.stringify(t)},ge=function(e){var t=he(e,"json"),n=Object.keys(t[0]);return[n.join(",")].concat(o()(t.map((function(e){return n.map((function(t){return e[t]})).join(",")})))).join("\r\n")},ve=function(e){var t,n,r,o="",a="\n",i=(null==e||null===(t=e.stateFilter)||void 0===t?void 0:t.length)>0,s=(null==e||null===(n=e.hostnameOrId)||void 0===n?void 0:n.length)>0,c=(null==e||null===(r=e.osFilter)||void 0===r?void 0:r.length)>0;return(i||s||c)&&(o="".concat(a,"Filters applied").concat(a),o=s?o.concat("Name: ".concat(e.hostnameOrId).concat(a)):o,o=i?o.concat("State: ".concat(e.stateFilter.toString()).concat(a)):o,o=c?o.concat("Operating System: ".concat(e.osFilter.sort().toString()).concat(a)):o),o},we=function(){var e="".concat((new Date).toISOString().replace(/[T:]/g,"-").split(".")[0],"-utc");return"".concat(A.rv).concat(e)},Oe=n(69748);const Se=Oe.mM.create({bodyCell:{textAlign:"left",fontSize:8,paddingBottom:2,paddingTop:2,paddingRight:2,flex:1},headerCell:{textAlign:"left",fontSize:8,flex:1},systemNameCell:{textAlign:"left",fontSize:8,flex:2.5,paddingBottom:2,paddingTop:2,paddingRight:2},lastReportedCell:{textAlign:"left",fontSize:8,flex:1.2,paddingBottom:2,paddingTop:2,paddingRight:2},headerStyle:{display:"flex",flexDirection:"row",justifyContent:"space-around"},rowStyle:{display:"flex",flexDirection:"row",justifyContent:"center"}});var be=function(e){var t=e.value,n=e.style,r=e.key;return C().createElement(Oe.xv,{key:r,style:n},t)},Ee=["Name","OS","CPU utilization","Memory utilization","I/O utilization","Suggestions","State","Last reported"],Ce=function(e){var t=e.data,n=e.page,r=Ee.map((function(e,t){var n="Name"===e?[Se.systemNameCell]:"Last reported"===e?[Se.lastReportedCell]:[Se.headerCell];return be({value:e,style:n,key:"".concat(t,"-").concat(e)})})),a=t.map((function(e){return e.map((function(e,t){var n=Ee.indexOf("Name"),r=Ee.indexOf("Last reported"),o=t===n?[Se.systemNameCell]:t===r?[Se.lastReportedCell]:[Se.bodyCell];return be({value:e,style:o,key:"".concat(t,"-").concat(e)})}))}));return C().createElement(E.Fragment,{key:n},C().createElement(ue.$0,null,C().createElement(ue.sg,null,C().createElement(ue.iA,{withHeader:!0,rows:[r].concat(o()(a))}))))};Ce.propTypes={data:x().array,page:x().number},be.propTypes={value:x().string,style:x().array,key:x().string};var ke=function(e){var t=e.data,n=e.totalSystems,r=e.filterText;return C().createElement(E.Fragment,{key:"first-section"},C().createElement(ue.$0,null,C().createElement(ue.sg,null,"This report identified ".concat(n," ").concat(n>1?"RHEL systems":"RHEL system",". ").concat(r))),C().createElement(Ce,{data:t,page:0}))};ke.propTypes={data:x().array,totalSystems:x().number,filterText:x().string};var xe=n(83215),Fe=function(e){var t=e.filters,n=e.orderBy,r=e.orderHow,a=le()(e,["filters","orderBy","orderHow"]),s=we(),l=(0,B.I0)(),u=A._M.start,p=A._M.success,f=A._M.failure;(0,E.useEffect)((function(){l((0,xe.wN)(u))}),[]);var d=function(){var e=c()(i().mark((function e(t,n,r){var a,s,c,u,d,m,h,y,g;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=A.aA.firstPageCount,u=A.aA.otherPageCount,d={filters:t,stateFilter:t.stateFilter,osFilter:t.osFilter,orderBy:n,orderHow:r},e.prev=2,e.next=5,(0,pe.lc)(d);case 5:m=e.sent,e.next=13;break;case 8:return e.prev=8,e.t0=e.catch(2),l((0,xe.L1)()),l((0,xe.wN)(f)),e.abrupt("return",[]);case 13:for(h=he(m.data,"pdf"),y={data:h.splice(0,c),totalSystems:null===(a=m)||void 0===a||null===(s=a.meta)||void 0===s?void 0:s.count,filterText:ve(t)},g=[];h.length>0;)g.push(h.splice(0,u));return l((0,xe.L1)()),l((0,xe.wN)(p)),e.abrupt("return",[C().createElement(ke,se()({key:"first-page"},y))].concat(o()(g.map((function(e,t){return C().createElement(Ce,{key:t,data:e,page:t+1})})))));case 20:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n,r){return e.apply(this,arguments)}}();return C().createElement("div",null,C().createElement(ue.o6,se()({},a,{reportName:A.AC,type:"",fileName:"".concat(s,".pdf"),size:"A4",orientation:"landscape",allPagesHaveTitle:!1,asyncFunction:function(){return d(t,n,r)}})))};Fe.propTypes={filters:x().object,orderBy:x().string,orderHow:x().string};var _e=n(1284),Re=function(){var e=c()(i().mark((function e(t,n,r,o,a,s){var c,l,u,p,f,d,m;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=we(),l=A._M.start,u=A._M.success,p=A._M.failure,a(l),f={filters:n,stateFilter:n.stateFilter,osFilter:n.osFilter,orderBy:r,orderHow:o},e.prev=4,e.next=7,(0,pe.lc)(f);case 7:d=e.sent,m="json"===t?ye(d.data):ge(d.data),(0,_e.Sv)(m,c,t),s(),a(u),e.next=19;break;case 14:throw e.prev=14,e.t0=e.catch(4),s(),a(p),"".concat(e.t0);case 19:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t,n,r,o,a,i){return e.apply(this,arguments)}}();function Pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var De=function(e){y()(d,e);var t,n,r,a,s,l,p=(s=d,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O()(s);if(l){var n=O()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v()(this,e)});function d(e){var t;return u()(this,d),t=p.call(this,e),b()(m()(t),"updateStateFilter",(function(e){t.setState({stateFilterValue:e})})),b()(m()(t),"updateOSFilter",(function(e){t.setState({osFilterValue:e})})),b()(m()(t),"onDeleteFilters",(function(e,n){var r=n.filter((function(e){return"State"===e.category})),o=n.filter((function(e){return"Operating System"===e.category}));if(r.length>0){var a;t.clearStateQueryParams();var i=null===(a=r[0])||void 0===a?void 0:a.chips.map((function(e){return null==e?void 0:e.name})),s=t.state.stateFilterValue.filter((function(e){return!i.includes(e)}));t.setState({stateFilterValue:s})}if(o.length>0){var c,l=null===(c=o[0])||void 0===c?void 0:c.chips.map((function(e){return null==e?void 0:e.name})),u=t.state.osFilterValue.filter((function(e){return!l.includes(e)}));t.setState({osFilterValue:u})}})),b()(m()(t),"getActiveFilterConfig",(function(){var e=t.state.stateFilterValue.map((function(e){return{name:e}})),n=t.state.osFilterValue.map((function(e){return{name:e}})),r=[];return e.length>0&&r.push({category:"State",chips:e}),n.length>0&&r.push({category:"Operating System",chips:n}),r})),b()(m()(t),"setColumnModalOpen",(function(e){t.setState({isColumnModalOpen:e})})),b()(m()(t),"getActiveColumns",(function(){return t.props.columns.filter((function(e){return e.isChecked}))})),t.state={perPage:10,orderBy:"report_date",orderDirection:M.SortByDirection.desc,stateFilterValue:[],osFilterValue:[],isColumnModalOpen:!1,exportSystemsPDF:!1,nameFilterValue:"",disableExport:!0},t.sortingHeader={display_name:"display_name",os:"os","performance_utilization.cpu":"cpu","performance_utilization.memory":"memory","performance_utilization.max_io":"max_io",number_of_suggestions:"number_of_suggestions",state:"state",report_date:"report_date"},t.chunkSize=50,t.inventory=C().createRef(),t.fetchSystems=t.fetchSystems.bind(m()(t)),t}return f()(d,[{key:"componentDidMount",value:(a=c()(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.title="Resource Optimization - Red Hat Insights",null===(t=insights.chrome)||void 0===t||null===(n=t.hideGlobalFilter)||void 0===n||n.call(t,!0),insights.chrome.appAction("ros-systems"),e.next=5,this.props.isROSConfigured();case 5:this.processQueryParams();case 6:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"processQueryParams",value:function(){var e=this.props.location,t=new URLSearchParams(e.search),n=t.get(A.Q0);"true"===t.get(A.H7)?this.setState({stateFilterValue:["Waiting for data"]}):"true"===n&&this.setState({stateFilterValue:["Undersized","Oversized","Under pressure","Idling"]})}},{key:"clearStateQueryParams",value:function(){var e=this.props.location,t=new URL(window.location),n=new URLSearchParams(e.search),r=n.get(A.Q0);(n.get(A.H7)||r)&&(n.delete(A.Q0),n.delete(A.H7),window.history.replaceState(null,"","".concat(t.origin).concat(t.pathname,"?").concat(n.toString()).concat(window.location.hash)))}},{key:"fetchSystems",value:(r=c()(i().mark((function e(t){var n,r,o,a,s,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return a=je({limit:t.perPage,offset:(t.page-1)*t.perPage,order_by:t.orderBy||this.state.orderBy,order_how:t.orderHow||this.state.orderDirection},(null==t||null===(n=t.filters)||void 0===n?void 0:n.hostnameOrId)&&{display_name:t.filters.hostnameOrId}),s=new URL(A.RC+A.M4,window.location.origin),c=new URLSearchParams(a),null==t||null===(r=t.stateFilter)||void 0===r||r.forEach((function(e){c.append("state",e)})),null==t||null===(o=t.osFilter)||void 0===o||o.forEach((function(e){c.append("os",e)})),s.search=c.toString(),e.abrupt("return",fetch(s).then((function(e){if(!e.ok)throw Error(e.statusText);return e})).then((function(e){return e.json()})));case 9:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"chunkIdsArray",value:function(e){for(var t=[];e.length;)t.push(e.splice(0,this.chunkSize));return t}},{key:"fetchInventoryDetails",value:(n=c()(i().mark((function e(t,n){var r,a,s,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=[],!(n.per_page>50&&t.length>50)){e.next=8;break}return e.next=4,this.multipleGetEntitiesRequests(t,n);case 4:e.sent.map((function(e){var t;(t=r).push.apply(t,o()(e))})),e.next=12;break;case 8:return e.next=10,null===(a=(s=this.state).getEntities)||void 0===a?void 0:a.call(s,t,n,!1);case 10:c=e.sent,r=c.results;case 12:return e.abrupt("return",r);case 13:case"end":return e.stop()}}),e,this)}))),function(e,t){return n.apply(this,arguments)})},{key:"multipleGetEntitiesRequests",value:(t=c()(i().mark((function e(t,n){var r,o=this;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.chunkIdsArray(t),e.abrupt("return",Promise.all(r.map(function(){var e=c()(i().mark((function e(t){var r,a,s,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(r=(a=o.state).getEntities)||void 0===r?void 0:r.call(a,t,n,!1);case 2:return s=e.sent,c=s.results,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){return e})));case 2:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})},{key:"setExportSystemsPDF",value:function(e){this.setState({exportSystemsPDF:e})}},{key:"onExportOptionSelect",value:function(e){var t=this.state,n=t.stateFilterValue,r=t.nameFilterValue,o=t.osFilterValue,a=t.orderBy,i=t.orderDirection,s={stateFilter:n,hostnameOrId:r,osFilter:o},c=this.props,l=c.addNotification,u=c.clearNotifications;Re(e,s,a,i,(function(e){return l(e)}),(function(){return u()}))}},{key:"renderConfigStepsOrTable",value:function(){var e=this,t=A.N7.state,n=A.N7.os,r=this.getActiveColumns(),o=this.state,a=o.exportSystemsPDF,s=o.stateFilterValue,l=o.nameFilterValue,u=o.osFilterValue,p=o.orderBy,f=o.orderDirection,d=o.disableExport;return this.props.showConfigSteps?C().createElement(V.v,null):C().createElement(D.Zb,{className:"pf-t-light  pf-m-opaque-100"},C().createElement(N.e,null,C().createElement(ae,{isModalOpen:this.state.isColumnModalOpen,setModalOpen:this.setColumnModalOpen,modalColumns:this.props.columns,saveColumns:function(t){return e.props.changeSystemColumns({columns:t})}}),C().createElement(L.Z,{disableDefaultColumns:!0,ref:this.inventory,hasCheckbox:!1,tableProps:{canSelectAll:!1,className:"ros-systems-table"},variant:"compact",hideFilters:{all:!0,name:!1},autoRefresh:!0,customFilters:{stateFilter:s,osFilter:this.state.osFilterValue},columns:r,getEntities:function(){var t=c()(i().mark((function t(n,r){var o,a,s,c,l;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState((function(){var e;return{orderBy:r.orderBy,orderDirection:r.orderDirection,nameFilterValue:null===(e=r.filters)||void 0===e?void 0:e.hostnameOrId}})),t.next=3,e.fetchSystems({page:r.page,perPage:r.per_page,orderBy:e.sortingHeader[r.orderBy],orderHow:r.orderDirection,filters:r.filters,stateFilter:r.stateFilter,osFilter:r.osFilter});case 3:return a=t.sent,s=(a.data||[]).map((function(e){return e.inventory_id})),t.next=7,e.fetchInventoryDetails(s,je(je({},r),{},{page:1,hasItems:!0}));case 7:return c=t.sent,l=0===(null==a||null===(o=a.meta)||void 0===o?void 0:o.count),e.setState((function(){return{disableExport:l}})),t.abrupt("return",{results:a.data.map((function(e){var t=c.find((function(t){return t.id===e.inventory_id}));return je(je(je({},t),t?{isDeleted:!1}:{id:e.inventory_id,isDeleted:!0}),e)})),total:a.meta.count,page:r.page,per_page:r.per_page});case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),onLoad:function(t){var n=t.mergeWithEntities,r=t.INVENTORY_ACTION_TYPES,o=t.api;e.setState({getEntities:null==o?void 0:o.getEntities}),(0,z.z2)(je({},n((0,T.zw)(r,A.XY)))),e.props.setSort(e.state.orderBy,e.state.orderDirection,"CHANGE_SORT")},expandable:"true",filterConfig:{items:[{label:t.label,type:t.type,value:"checkbox-state",filterValues:{items:t.filterValues.items,onChange:function(t,n){return e.updateStateFilter(n)},value:s}},{label:n.label,type:n.type,value:"checkbox-os",filterValues:{items:n.filterValues.items,onChange:function(t,n){return e.updateOSFilter(n)},value:this.state.osFilterValue}}]},activeFiltersConfig:{filters:this.getActiveFilterConfig(),onDelete:this.onDeleteFilters},actionsConfig:{actions:["",{label:"Manage columns",onClick:function(){return e.setColumnModalOpen(!0)}}]},exportConfig:{isDisabled:d,extraItems:[C().createElement("li",{key:"pdf-button-item",role:"menuitem"},C().createElement(j.Button,{key:"pdf-download-button",variant:"none",className:"pf-c-dropdown__menu-item",onClick:function(){return e.setExportSystemsPDF(!0)}},"Export as PDF"))],ouiaId:"export",onSelect:function(t,n){return e.onExportOptionSelect(n)}},onExpandClick:function(t,n,r,o){var a=o.id;return e.props.expandRow(a,r,"EXPAND_ROW")}}),a&&C().createElement(Fe,{showButton:!1,onSuccess:function(){return e.setExportSystemsPDF(!1)},filters:{stateFilter:s,hostnameOrId:l,osFilter:u},orderBy:p,orderHow:f})))}},{key:"render",value:function(){var e=this;return C().createElement(C().Fragment,null,C().createElement(_.Z,null,C().createElement(R.Z,{title:"Resource Optimization"})),C().createElement(P.Z,null,C().createElement(U.B.Consumer,null,(function(t){return!1===t.permissions.systemsRead?C().createElement(H.Z,{serviceName:"Resource Optimization"}):e.renderConfigStepsOrTable()}))))}}]),d}(C().Component);De.propTypes={expandRow:x().func,setSort:x().func,isROSConfigured:x().func,showConfigSteps:x().bool,location:x().object,columns:x().array,changeSystemColumns:x().func,addNotification:x().func,clearNotifications:x().func};const Ne=(0,F.withRouter)((0,B.$j)((function(e,t){var n;return je({showConfigSteps:null===(n=e.isConfiguredReducer)||void 0===n?void 0:n.showConfigSteps,columns:e.systemColumnsReducer.columns},t)}),(function(e){return{expandRow:function(t,n,r){return e({type:r,payload:{id:t,isOpen:n}})},setSort:function(t,n,r){return e({type:r,payload:{key:t,direction:n}})},isROSConfigured:function(){return e((0,I.Pn)())},changeSystemColumns:function(t){return e((0,I.zz)(t))},addNotification:function(t){return e((0,xe.wN)(t))},clearNotifications:function(){return e((0,xe.L1)())}}}))(De))},30859:(e,t,n)=>{"use strict";n.d(t,{jL:()=>m,S7:()=>h,x2:()=>y,lc:()=>g,tp:()=>v});var r=n(87757),o=n.n(r),a=n(48926),i=n.n(a),s=n(59713),c=n.n(s),l=n(88587),u=n(14906);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){if(!e.ok)throw Error(e.statusText);return e}var m=function(){var e=new URL(u.RC+u.LO,window.location.origin);return window.insights.chrome.auth.getUser().then((function(){return fetch(e).then(d).then((function(e){return e.json()})).then((function(e){return e}))}))},h=function(e){var t=new URL(u.RC+u.M4+"/".concat(e),window.location.origin);return window.insights.chrome.auth.getUser().then((function(){return fetch(t).then(d).then((function(e){return e.json()})).then((function(e){return e}))}))},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={limit:t.perPage,offset:(t.page-1)*t.perPage};t.description&&t.description.trim()&&(n=f(f({},n),{},{description:t.description}));var r=new URL(u.RC+u.M4+"/".concat(e,"/suggestions"),window.location.origin);r.search=new URLSearchParams(n).toString();var o=window.insights.chrome.auth.getUser().then((function(){return fetch(r).then((function(e){if(!e.ok&&404===e.status)return{hasError:!0};if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){return e}))}));return o},g=function(){var e=i()(o().mark((function e(t){var n,r,a,i,s,c,p,d,m,h;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return s=(i=t||{}).perPage,c=i.orderBy,p=i.orderHow,d=f(f({order_by:{display_name:"display_name",os:"os","performance_utilization.cpu":"cpu","performance_utilization.memory":"memory","performance_utilization.max_io":"max_io",number_of_suggestions:"number_of_suggestions",state:"state",report_date:"report_date"}[c]||"report_date",order_how:p||l.SortByDirection.desc,limit:s||-1},(null==t?void 0:t.page)&&{offset:(t.page-1)*t.perPage}),(null==t||null===(n=t.filters)||void 0===n?void 0:n.hostnameOrId)&&{display_name:t.filters.hostnameOrId}),m=new URL(u.RC+u.M4,window.location.origin),h=new URLSearchParams(d),null==t||null===(r=t.stateFilter)||void 0===r||r.forEach((function(e){h.append("state",e)})),null==t||null===(a=t.osFilter)||void 0===a||a.forEach((function(e){h.append("os",e)})),m.search=h.toString(),e.abrupt("return",fetch(m).then((function(e){if(!e.ok)throw Error(e.statusText);return e})).then((function(e){return e.json()})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e,t){var n=new URL("".concat(u.RC).concat(u.M4,"/").concat(e,"/history"),window.location.origin),r=new URLSearchParams({limit:t});return n.search=r.toString(),window.insights.chrome.auth.getUser().then((function(){return fetch(n).then(d).then((function(e){return e.json()})).then((function(e){return e}))}))}},94778:(e,t,n)=>{"use strict";n.d(t,{Of:()=>o,t9:()=>a,Pn:()=>i,zz:()=>s});var r=n(30859),o=function(e){return{type:"LOAD_ROS_SYSTEM_INFO",payload:(0,r.S7)(e)}},a=function(e,t){return{type:"FETCH_SYSTEM_RECOMMENDATIONS_LIST",payload:(0,r.x2)(e,t)}},i=function(){return{type:"LOAD_IS_CONFIGURED_INFO",payload:(0,r.jL)()}},s=function(e){return{type:"CHANGE_SYSTEM_COLUMNS",payload:e}}},70347:()=>{},11452:()=>{},32857:()=>{},93818:()=>{},94498:()=>{},18192:()=>{},23055:()=>{},28992:()=>{},81320:()=>{},90479:()=>{},78752:()=>{},25238:()=>{},36974:()=>{},314:()=>{},16166:()=>{},53519:()=>{},42480:()=>{},19527:()=>{},69331:()=>{},52361:()=>{},94616:()=>{}}]);