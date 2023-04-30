(self.webpackChunkros_frontend=self.webpackChunkros_frontend||[]).push([[821],{3955:(e,t,n)=>{"use strict";n.d(t,{v:()=>l});var r=n(55138),o=n(2112),a=n(43297),i=n.n(a),s=n(58061),l=function(){return i().createElement(r.Bullseye,null,i().createElement(r.EmptyState,{className:"empty-state-not-configured"},i().createElement(r.EmptyStateIcon,{icon:o.ZP}),i().createElement(r.Title,{headingLevel:"h5",size:"lg"},"Resource optimization isn't configured yet"),i().createElement(r.EmptyStateBody,null,i().createElement(r.Bullseye,null,i().createElement(r.Stack,{hasGutter:!0},i().createElement(r.StackItem,null,"Resource Optimization requires installing and configuring Performance Co-Pilot on the client system."),i().createElement(r.StackItem,null,"Check the documentation to find how to configure Resource Optimization with Ansible. An alternative method which does not require Ansible is also described."),i().createElement(r.StackItem,null,"After configuring Resource Optimization, it may take up to 24 hours until suggestions are available.")))),i().createElement(r.Button,{component:"a",href:s.wy,target:"_blank",variant:"primary"},"Getting started documentation")))}},1704:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Pe});var r=n(67154),o=n.n(r),a=n(319),i=n.n(a),s=n(87757),l=n.n(s),c=n(48926),u=n.n(c),p=n(34575),f=n.n(p),d=n(93913),m=n.n(d),h=n(81506),y=n.n(h),g=n(2205),v=n.n(g),S=n(78585),b=n.n(S),w=n(29754),O=n.n(w),E=n(59713),x=n.n(E),C=n(43297),k=n.n(C),_=n(45697),F=n.n(_),R=n(16530),D=n(80123),P=n(39173),j=n(14748),B=n(55138),T=n(68770),z=n(2983),N=n(33739),I=n(30319),L=n(70702),A=n(94778),V=n(58061),H=n(3955),M=n(87999),U=n(85333),G=n(63038),q=n.n(G);function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){x()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y=function(e){var t=e.modalColumns,n=e.isModalOpen,r=e.setModalOpen,o=e.saveColumns,a=(0,C.useState)(t),s=q()(a,2),l=s[0],c=s[1],u=function(){r(!1),c(t)};return k().createElement(B.Modal,{title:"Manage columns",onClose:u,isOpen:n,variant:"small",description:k().createElement(B.TextContent,null,k().createElement(B.Text,{component:B.TextVariants.p},"Selected categories will be displayed in the table"),k().createElement(B.Split,{hasGutter:!0},k().createElement(B.SplitItem,null,k().createElement(B.Button,{isInline:!0,onClick:function(){c(l.map((function(e){return Z(Z({},e),{},{isChecked:!0})})))},variant:"link"},"Select all")),k().createElement(B.SplitItem,null,k().createElement(B.Button,{isInline:!0,onClick:function(){c(l.map((function(e){var t;return Z(Z({},e),{},{isChecked:null!==(t=e.isShownByDefault)&&void 0!==t&&t})})))},variant:"link"},"Reset to default")))),actions:[k().createElement(B.Button,{key:"save",variant:"primary",onClick:function(){r(!1),o(l)}},"Save"),k().createElement(B.Button,{key:"cancel",variant:"secondary",onClick:u},"Cancel")]},k().createElement(B.DataList,{"aria-label":"Column management table",id:"column-management-table",isCompact:!0},l.map((function(e,t){return k().createElement(B.DataListItem,{key:e.key},k().createElement(B.DataListItemRow,null,k().createElement(B.DataListCheck,{checked:e.isChecked,id:"checkbox-".concat(t),onChange:function(){return function(e){var t=i()(l),n=Z({},t[e]);n.isChecked=!n.isChecked,t[e]=n,c(t)}(t)},isDisabled:e.isDisabled}),k().createElement(B.DataListItemCells,{dataListCells:[k().createElement(B.DataListCell,{key:"column-table-item-".concat(t)},k().createElement("label",null,e.modalTitle))]})))}))))};Y.propTypes={modalColumns:F().arrayOf(F().object).isRequired,isModalOpen:F().bool.isRequired,setModalOpen:F().func.isRequired,saveColumns:F().func.isRequired};var W=n(6479),$=n.n(W),J=n(3968),X=["display_name","os","performance_utilization.cpu","performance_utilization.memory","performance_utilization.max_io","number_of_suggestions","state","report_date"],K=["display_name","os","performance_utilization.cpu","performance_utilization.memory","performance_utilization.max_io","number_of_suggestions","state","cloud_provider","instance_type","idling_time","report_date"],ee=["performance_utilization.cpu","performance_utilization.memory","idling_time"],te={variant:"info",title:"Generating data. Download may take a moment to start."},ne={variant:"success",title:"Export successful"},re={variant:"danger",autoDismiss:!1,title:"Export failed. Please try exporting again."},oe=n(30859),ae=n(27361),ie=n.n(ae),se=n(39371),le=function(e,t){var n=[],r="json"===t?K:X;return e.map((function(e){var o="json"===t?{}:[];r.map((function(n){var r=ie()(e,n,"");r="N/A"!==(r=null===r||-1===r?"N/A":r.toString())&&ee.includes(n)?"".concat(r,"%"):r,r="report_date"===n?(0,se.dateStringByType)("exact")(new Date(r)):r,"json"===t?o[n]=r:"pdf"===t&&o.push(r)})),n.push(o)})),n},ce=function(e){var t=le(e,"json");return JSON.stringify(t)},ue=function(e){var t=le(e,"json"),n=Object.keys(t[0]);return[n.join(",")].concat(i()(t.map((function(e){return n.map((function(t){return e[t]})).join(",")})))).join("\r\n")},pe=function(e){var t,n,r,o="",a="\n",i=(null==e||null===(t=e.stateFilter)||void 0===t?void 0:t.length)>0,s=(null==e||null===(n=e.hostnameOrId)||void 0===n?void 0:n.length)>0,l=(null==e||null===(r=e.osFilter)||void 0===r?void 0:r.length)>0;return(i||s||l)&&(o="".concat(a,"Filters applied").concat(a),o=s?o.concat("Name: ".concat(e.hostnameOrId).concat(a)):o,o=i?o.concat("State: ".concat(e.stateFilter.toString()).concat(a)):o,o=l?o.concat("Operating System: ".concat(e.osFilter.sort().toString()).concat(a)):o),o},fe=function(){var e="".concat((new Date).toISOString().replace(/[T:]/g,"-").split(".")[0],"-utc");return"".concat("resource_optimization--").concat(e)},de=n(69748),me=n(94805);const he=de.mM.create({bodyCell:{textAlign:"left",fontSize:8,paddingBottom:2,paddingTop:2,paddingRight:2,flex:1},headerCell:{textAlign:"left",fontSize:8,flex:1},systemNameCell:{textAlign:"left",fontSize:8,flex:2.5,paddingBottom:2,paddingTop:2,paddingRight:2},lastReportedCell:{textAlign:"left",fontSize:8,flex:1.2,paddingBottom:2,paddingTop:2,paddingRight:2},headerStyle:{display:"flex",flexDirection:"row",justifyContent:"space-around"},rowStyle:{display:"flex",flexDirection:"row",justifyContent:"center"},execHeading:{textAlign:"left",fontSize:10,color:"#C9190B",marginBottom:4,marginTop:10},occurrenceHeading:{textAlign:"left",fontSize:10,color:"#C9190B",marginTop:12,marginBottom:-4},execInfoText:{flex:1,textAlign:"right",fontSize:7,color:"#6A6E73"},instanceTypeHeading:{textAlign:"left",fontSize:10,color:"#C9190B",marginTop:20},instanceTypeHeadingFirst:{textAlign:"left",fontSize:10,color:"#C9190B"},instanceTypeDesc:{fontSize:10,textAlign:"left",marginBottom:4},flexRow:{display:"flex",flexDirection:"row"},tableRowBackground:{backgroundColor:me.ZP.value},instanceTableHeading:{fontSize:10,color:"#6A6E73",paddingBottom:4,fontWeight:"bold"},bold:{fontFamily:"Helvetica-Bold",fontWeight:700}});var ye=function(e){var t=e.value,n=e.style,r=e.key;return k().createElement(de.xv,{key:r,style:n},t)},ge=["Name","OS","CPU utilization","Memory utilization","I/O utilization","Suggestions","State","Last reported"],ve=function(e){var t=e.data,n=e.page,r=ge.map((function(e,t){var n="Name"===e?[he.systemNameCell]:"Last reported"===e?[he.lastReportedCell]:[he.headerCell];return ye({value:e,style:n,key:"".concat(t,"-").concat(e)})})),o=t.map((function(e){return e.map((function(e,t){var n=ge.indexOf("Name"),r=ge.indexOf("Last reported"),o=t===n?[he.systemNameCell]:t===r?[he.lastReportedCell]:[he.bodyCell];return ye({value:e,style:o,key:"".concat(t,"-").concat(e)})}))}));return k().createElement(C.Fragment,{key:n},k().createElement(J.$0,null,k().createElement(J.sg,null,k().createElement(J.iA,{withHeader:!0,rows:[r].concat(i()(o))}))))};ve.propTypes={data:F().array,page:F().number},ye.propTypes={value:F().string,style:F().array,key:F().string};var Se=function(e){var t=e.data,n=e.totalSystems,r=e.filterText;return k().createElement(C.Fragment,{key:"first-section"},k().createElement(J.$0,null,k().createElement(J.sg,null,"This report identified ".concat(n," ").concat(n>1?"RHEL systems":"RHEL system",". ").concat(r))),k().createElement(ve,{data:t,page:0}))};Se.propTypes={data:F().array,totalSystems:F().number,filterText:F().string};var be=n(83215),we=function(e){var t=e.filters,n=e.orderBy,r=e.orderHow,a=$()(e,["filters","orderBy","orderHow"]),s=fe(),c=(0,z.I0)(),p=te,f=ne,d=re;(0,C.useEffect)((function(){c((0,be.wN)(p))}),[]);var m=function(){var e=u()(l().mark((function e(t,n,r){var a,s,u,p,m,h,y,g,v;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=16,p=22,m={filters:t,stateFilter:t.stateFilter,osFilter:t.osFilter,orderBy:n,orderHow:r},e.prev=2,e.next=5,(0,oe.lc)(m);case 5:h=e.sent,e.next=13;break;case 8:return e.prev=8,e.t0=e.catch(2),c((0,be.L1)()),c((0,be.wN)(d)),e.abrupt("return",[]);case 13:for(y=le(h.data,"pdf"),g={data:y.splice(0,u),totalSystems:null===(a=h)||void 0===a||null===(s=a.meta)||void 0===s?void 0:s.count,filterText:pe(t)},v=[];y.length>0;)v.push(y.splice(0,p));return c((0,be.L1)()),c((0,be.wN)(f)),e.abrupt("return",[k().createElement(Se,o()({key:"first-page"},g))].concat(i()(v.map((function(e,t){return k().createElement(ve,{key:t,data:e,page:t+1})})))));case 20:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n,r){return e.apply(this,arguments)}}();return k().createElement("div",null,k().createElement(J.o6,o()({},a,{reportName:"Insights Resource Optimization Systems Report",type:"",fileName:"".concat(s,".pdf"),size:"A4",orientation:"landscape",allPagesHaveTitle:!1,asyncFunction:function(){return m(t,n,r)}})))};we.propTypes={filters:F().object,orderBy:F().string,orderHow:F().string};var Oe=n(1284),Ee=function(){var e=u()(l().mark((function e(t,n,r,o,a,i){var s,c,u,p,f,d;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=fe(),c=ne,u=re,a(te),p={filters:n,stateFilter:n.stateFilter,osFilter:n.osFilter,orderBy:r,orderHow:o},e.prev=4,e.next=7,(0,oe.lc)(p);case 7:f=e.sent,d="json"===t?ce(f.data):ue(f.data),(0,Oe.downloadFile)(d,s,t),i(),a(c),e.next=19;break;case 14:throw e.prev=14,e.t0=e.catch(4),i(),a(u),"".concat(e.t0);case 19:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t,n,r,o,a,i){return e.apply(this,arguments)}}(),xe=n(1657),Ce=function(e){var t=e.isDisabled,n=(0,C.useState)(!1),r=q()(n,2),o=r[0],a=r[1],i=(0,z.I0)(),s=te,c=ne,p=re,f=function(){var e=u()(l().mark((function e(){var t,n,r,o,u;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat((new Date).toISOString().replace(/[T:]/g,"-").split(".")[0],"-utc.pdf"),n="".concat("Resource-Optimization-Executive-Report--").concat(t),e.prev=2,a(!0),i((0,be.wN)(s)),e.next=7,(0,oe.Q5)();case 7:r=e.sent,o=window.URL.createObjectURL(r),(u=document.createElement("a")).href=o,u.download=n,document.body.appendChild(u),u.click(),u.remove(),i((0,be.L1)()),i((0,be.wN)(c)),a(!1),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(2),i((0,be.L1)()),i((0,be.wN)(p)),a(!1);case 25:case"end":return e.stop()}}),e,null,[[2,20]])})));return function(){return e.apply(this,arguments)}}();return k().createElement(C.Fragment,null,k().createElement(B.Button,{variant:"link",icon:k().createElement(xe.ZP,null),iconPosition:"left",onClick:function(){return f()},isDisabled:o||t,className:"downloadButtonOverride"},o?"Loading...":"Download executive report"))};Ce.propTypes={isDisabled:F().bool};var ke=n(55140),_e=n(76866);function Fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Fe(Object(n),!0).forEach((function(t){x()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var De=function(e){v()(p,e);var t,n,r,o,a,s,c=(a=p,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O()(a);if(s){var n=O()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b()(this,e)});function p(e){var t;return f()(this,p),t=c.call(this,e),x()(y()(t),"updateStateFilter",(function(e){t.setState({stateFilterValue:e})})),x()(y()(t),"updateOSFilter",(function(e){t.setState({osFilterValue:e})})),x()(y()(t),"onDeleteFilters",(function(e,n){var r=n.filter((function(e){return"State"===e.category})),o=n.filter((function(e){return"Operating System"===e.category}));if(r.length>0){var a;t.clearStateQueryParams();var i=null===(a=r[0])||void 0===a?void 0:a.chips.map((function(e){return null==e?void 0:e.name})),s=t.state.stateFilterValue.filter((function(e){return!i.includes(e)}));t.setState({stateFilterValue:s})}if(o.length>0){var l,c=null===(l=o[0])||void 0===l?void 0:l.chips.map((function(e){return null==e?void 0:e.name})),u=t.state.osFilterValue.filter((function(e){return!c.includes(e)}));t.setState({osFilterValue:u})}})),x()(y()(t),"getActiveFilterConfig",(function(){var e=t.state.stateFilterValue.map((function(e){return{name:e}})),n=t.state.osFilterValue.map((function(e){return{name:e}})),r=[];return e.length>0&&r.push({category:"State",chips:e}),n.length>0&&r.push({category:"Operating System",chips:n}),r})),x()(y()(t),"setColumnModalOpen",(function(e){t.setState({isColumnModalOpen:e})})),x()(y()(t),"getActiveColumns",(function(){return t.props.columns.filter((function(e){return e.isChecked}))})),t.state={perPage:10,orderBy:"report_date",orderDirection:T.SortByDirection.desc,stateFilterValue:[],isColumnModalOpen:!1,exportSystemsPDF:!1,nameFilterValue:"",disableExport:!0,osFilterValue:[],OSFObject:{}},t.sortingHeader={display_name:"display_name",os:"os","performance_utilization.cpu":"cpu","performance_utilization.memory":"memory","performance_utilization.max_io":"max_io",number_of_suggestions:"number_of_suggestions",state:"state",report_date:"report_date"},t.chunkSize=50,t.inventory=k().createRef(),t.fetchSystems=t.fetchSystems.bind(y()(t)),t}return m()(p,[{key:"componentDidMount",value:(o=u()(l().mark((function e(){var t,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.title="Resource Optimization | Red Hat Insights",null==(n=this.props.chrome)||null===(t=n.hideGlobalFilter)||void 0===t||t.call(n,!0),null==n||n.appAction("ros-systems"),e.next=6,this.props.isROSConfigured();case 6:this.processQueryParams(),this.processOsVersion();case 8:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"processQueryParams",value:function(){var e=this.props.location,t=new URLSearchParams(e.search),n=t.get(V.Q0);"true"===t.get(V.H7)?this.setState({stateFilterValue:["Waiting for data"]}):"true"===n&&this.setState({stateFilterValue:["Undersized","Oversized","Under pressure","Idling"]})}},{key:"processOsVersion",value:function(){var e=this,t={label:"Operating system"};t.type=_e.conditionalFilterType.checkbox,t.filterValues={},this.fetchSystems({perPage:-1,orderBy:"os",orderHow:T.SortByDirection.desc}).then((function(n){t.filterValues.items=Array.from(new Set(n.data.reduce((function(e,t){return t.os&&e.push(t.os),e}),[]))).map((function(e){return{label:e,value:e.split(" ")[1]}})),0===t.filterValues.items.length&&(t.filterValues.items=[{label:"No versions available"}],t.type=_e.conditionalFilterType.group),e.setState({OSFObject:t})}))}},{key:"clearStateQueryParams",value:function(){var e=this.props.location,t=new URL(window.location),n=new URLSearchParams(e.search),r=n.get(V.Q0);(n.get(V.H7)||r)&&(n.delete(V.Q0),n.delete(V.H7),window.history.replaceState(null,"","".concat(t.origin).concat(t.pathname,"?").concat(n.toString()).concat(window.location.hash)))}},{key:"fetchSystems",value:(r=u()(l().mark((function e(t){var n,r,o,a,i,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Re(Re({limit:t.perPage},(null==t?void 0:t.page)&&{offset:(t.page-1)*t.perPage}),{},{order_by:t.orderBy||this.state.orderBy,order_how:t.orderHow||this.state.orderDirection},(null==t||null===(n=t.filters)||void 0===n?void 0:n.hostnameOrId)&&{display_name:t.filters.hostnameOrId}),i=new URL(V.RC+V.M4,window.location.origin),s=new URLSearchParams(a),null==t||null===(r=t.stateFilter)||void 0===r||r.forEach((function(e){s.append("state",e)})),null==t||null===(o=t.osFilter)||void 0===o||o.forEach((function(e){s.append("os",e)})),i.search=s.toString(),e.abrupt("return",fetch(i).then((function(e){if(!e.ok)throw Error(e.statusText);return e})).then((function(e){return e.json()})));case 7:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"chunkIdsArray",value:function(e){for(var t=[];e.length;)t.push(e.splice(0,this.chunkSize));return t}},{key:"fetchInventoryDetails",value:(n=u()(l().mark((function e(t,n){var r,o,a,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=[],!(n.per_page>50&&t.length>50)){e.next=8;break}return e.next=4,this.multipleGetEntitiesRequests(t,n);case 4:e.sent.map((function(e){var t;(t=r).push.apply(t,i()(e))})),e.next=12;break;case 8:return e.next=10,null===(o=(a=this.state).getEntities)||void 0===o?void 0:o.call(a,t,n,!1);case 10:s=e.sent,r=s.results;case 12:return e.abrupt("return",r);case 13:case"end":return e.stop()}}),e,this)}))),function(e,t){return n.apply(this,arguments)})},{key:"multipleGetEntitiesRequests",value:(t=u()(l().mark((function e(t,n){var r,o=this;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.chunkIdsArray(t),e.abrupt("return",Promise.all(r.map(function(){var e=u()(l().mark((function e(t){var r,a,i,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(r=(a=o.state).getEntities)||void 0===r?void 0:r.call(a,t,n,!1);case 2:return i=e.sent,s=i.results,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){return e})));case 2:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})},{key:"setExportSystemsPDF",value:function(e){this.setState({exportSystemsPDF:e})}},{key:"onExportOptionSelect",value:function(e){var t=this.state,n=t.stateFilterValue,r=t.nameFilterValue,o=t.osFilterValue,a=t.orderBy,i=t.orderDirection,s={stateFilter:n,hostnameOrId:r,osFilter:o},l=this.props,c=l.addNotification,u=l.clearNotifications;Ee(e,s,a,i,(function(e){return c(e)}),(function(){return u()}))}},{key:"renderConfigStepsOrTable",value:function(){var e,t=this,n=V.N7.state,r=this.getActiveColumns(),o=this.state,a=o.exportSystemsPDF,i=o.stateFilterValue,s=o.nameFilterValue,c=o.osFilterValue,p=o.orderBy,f=o.orderDirection,d=o.disableExport,m=o.isColumnModalOpen,h=o.OSFObject;return this.props.showConfigSteps?k().createElement(H.v,null):k().createElement(B.Card,{className:"pf-t-light  pf-m-opaque-100"},k().createElement(B.CardBody,null,k().createElement(Y,{isModalOpen:m,setModalOpen:this.setColumnModalOpen,modalColumns:this.props.columns,saveColumns:function(e){return t.props.changeSystemColumns({columns:e})}}),k().createElement(N.Z,{disableDefaultColumns:!0,ref:this.inventory,hasCheckbox:!1,tableProps:{canSelectAll:!1,className:"ros-systems-table"},variant:"compact",hideFilters:{all:!0,name:!1},autoRefresh:!0,customFilters:{stateFilter:i,osFilter:c},columns:r,getEntities:function(){var e=u()(l().mark((function e(n,r){var o,a,i,s,c;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState((function(){var e;return{orderBy:r.orderBy,orderDirection:r.orderDirection,nameFilterValue:null===(e=r.filters)||void 0===e?void 0:e.hostnameOrId}})),e.next=3,t.fetchSystems({page:r.page,perPage:r.per_page,orderBy:t.sortingHeader[r.orderBy],orderHow:r.orderDirection,filters:r.filters,stateFilter:r.stateFilter,osFilter:r.osFilter});case 3:return a=e.sent,i=(a.data||[]).map((function(e){return e.inventory_id})),e.next=7,t.fetchInventoryDetails(i,Re(Re({},r),{},{orderBy:void 0,orderDirection:void 0,page:1,hasItems:!0}));case 7:return s=e.sent,c=0===(null==a||null===(o=a.meta)||void 0===o?void 0:o.count),t.setState((function(){return{disableExport:c}})),e.abrupt("return",{results:a.data.map((function(e){var t=s.find((function(t){return t.id===e.inventory_id}));return Re(Re(Re({},t),t?{isDeleted:!1}:{id:e.inventory_id,isDeleted:!0}),e)})),total:a.meta.count,page:r.page,per_page:r.per_page});case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),onLoad:function(e){var n=e.mergeWithEntities,r=e.INVENTORY_ACTION_TYPES,o=e.api;t.setState({getEntities:null==o?void 0:o.getEntities}),(0,I.z2)(Re({},n((0,L.zw)(r,V.XY)))),t.props.setSort(p,f,"CHANGE_SORT")},expandable:"true",filterConfig:{items:[{label:n.label,type:n.type,value:"checkbox-state",filterValues:{items:n.filterValues.items,onChange:function(e,n){return t.updateStateFilter(n)},value:i}},{label:h.label,type:h.type,value:"checkbox-os",filterValues:{items:null===(e=h.filterValues)||void 0===e?void 0:e.items,onChange:function(e,n){return t.updateOSFilter(n)},value:c}}]},activeFiltersConfig:{filters:this.getActiveFilterConfig(),onDelete:this.onDeleteFilters},actionsConfig:{actions:["",{label:"Manage columns",onClick:function(){return t.setColumnModalOpen(!0)}}]},exportConfig:{isDisabled:d,extraItems:[k().createElement("li",{key:"pdf-button-item",role:"menuitem"},k().createElement(B.Button,{key:"pdf-download-button",variant:"none",className:"pf-c-dropdown__menu-item",onClick:function(){return t.setExportSystemsPDF(!0)}},"Export to PDF"))],ouiaId:"export",onSelect:function(e,n){return t.onExportOptionSelect(n)}},onExpandClick:function(e,n,r,o){var a=o.id;return t.props.expandRow(a,r,"EXPAND_ROW")}}),a&&k().createElement(we,{showButton:!1,onSuccess:function(){return t.setExportSystemsPDF(!1)},filters:{stateFilter:i,hostnameOrId:s,osFilter:c},orderBy:p,orderHow:f})))}},{key:"render",value:function(){var e=this;return k().createElement(k().Fragment,null,k().createElement(D.Z,{className:"ros-page-header"},k().createElement(P.Z,{title:"Resource Optimization"}),k().createElement(Ce,{isDisabled:this.state.disableExport})),k().createElement(j.Z,null,k().createElement(M.B.Consumer,null,(function(t){return!1===t.permissions.systemsRead?k().createElement(U.Z,{serviceName:"Resource Optimization"}):e.renderConfigStepsOrTable()}))))}}]),p}(k().Component);De.propTypes={expandRow:F().func,setSort:F().func,isROSConfigured:F().func,showConfigSteps:F().bool,location:F().object,columns:F().array,changeSystemColumns:F().func,addNotification:F().func,clearNotifications:F().func,chrome:F().object};const Pe=(0,R.withRouter)((0,z.$j)((function(e,t){var n;return Re({showConfigSteps:null===(n=e.isConfiguredReducer)||void 0===n?void 0:n.showConfigSteps,columns:e.systemColumnsReducer.columns},t)}),(function(e){return{expandRow:function(t,n,r){return e({type:r,payload:{id:t,isOpen:n}})},setSort:function(t,n,r){return e({type:r,payload:{key:t,direction:n}})},isROSConfigured:function(){return e((0,A.Pn)())},changeSystemColumns:function(t){return e((0,A.zz)(t))},addNotification:function(t){return e((0,be.wN)(t))},clearNotifications:function(){return e((0,be.L1)())}}}))((function(e){var t=(0,ke.Z)();return k().createElement(De,o()({},e,{chrome:t}))})))},30859:(e,t,n)=>{"use strict";n.d(t,{Q5:()=>S,S7:()=>h,jL:()=>m,lc:()=>g,tp:()=>v,x2:()=>y});var r=n(87757),o=n.n(r),a=n(48926),i=n.n(a),s=n(59713),l=n.n(s),c=n(68770),u=n(58061);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){if(!e.ok)throw Error(e.statusText);return e}var m=function(){var e=new URL(u.RC+u.LO,window.location.origin);return fetch(e).then(d).then((function(e){return e.json()})).then((function(e){return e}))},h=function(e){var t=new URL(u.RC+u.M4+"/".concat(e),window.location.origin);return fetch(t).then(d).then((function(e){return e.json()})).then((function(e){return e}))},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={limit:t.perPage,offset:(t.page-1)*t.perPage};t.description&&t.description.trim()&&(n=f(f({},n),{},{description:t.description}));var r=new URL(u.RC+u.M4+"/".concat(e,"/suggestions"),window.location.origin);return r.search=new URLSearchParams(n).toString(),fetch(r).then((function(e){if(!e.ok&&404===e.status)return{hasError:!0};if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){return e}))},g=function(){var e=i()(o().mark((function e(t){var n,r,a,i,s,l,p,d,m,h;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=(i=t||{}).perPage,l=i.orderBy,p=i.orderHow,d=f(f({order_by:{display_name:"display_name",os:"os","performance_utilization.cpu":"cpu","performance_utilization.memory":"memory","performance_utilization.max_io":"max_io",number_of_suggestions:"number_of_suggestions",state:"state",report_date:"report_date"}[l]||"report_date",order_how:p||c.SortByDirection.desc,limit:s||-1},(null==t?void 0:t.page)&&{offset:(t.page-1)*t.perPage}),(null==t||null===(n=t.filters)||void 0===n?void 0:n.hostnameOrId)&&{display_name:t.filters.hostnameOrId}),m=new URL(u.RC+u.M4,window.location.origin),h=new URLSearchParams(d),null==t||null===(r=t.stateFilter)||void 0===r||r.forEach((function(e){h.append("state",e)})),null==t||null===(a=t.osFilter)||void 0===a||a.forEach((function(e){h.append("os",e)})),m.search=h.toString(),e.abrupt("return",fetch(m).then((function(e){if(!e.ok)throw Error(e.statusText);return e})).then((function(e){return e.json()})));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e,t){var n=new URL("".concat(u.RC).concat(u.M4,"/").concat(e,"/history"),window.location.origin),r=new URLSearchParams({limit:t});return n.search=r.toString(),fetch(n).then(d).then((function(e){return e.json()})).then((function(e){return e}))},S=function(){var e=i()(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URL(u.t5,window.location.origin),e.abrupt("return",fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service:"ros",template:"executiveReport"})}).then(d).then((function(e){return e.blob()})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},94778:(e,t,n)=>{"use strict";n.d(t,{Of:()=>o,Pn:()=>i,t9:()=>a,zz:()=>s});var r=n(30859),o=function(e){return{type:"LOAD_ROS_SYSTEM_INFO",payload:(0,r.S7)(e)}},a=function(e,t){return{type:"FETCH_SYSTEM_RECOMMENDATIONS_LIST",payload:(0,r.x2)(e,t)}},i=function(){return{type:"LOAD_IS_CONFIGURED_INFO",payload:(0,r.jL)()}},s=function(e){return{type:"CHANGE_SYSTEM_COLUMNS",payload:e}}},42480:()=>{},19527:()=>{},69331:()=>{},52361:()=>{},94616:()=>{}}]);