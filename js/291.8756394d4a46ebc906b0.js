(self.webpackChunkros_frontend=self.webpackChunkros_frontend||[]).push([[291],{24814:(e,t,n)=>{"use strict";n.d(t,{v:()=>c});var r=n(43297),s=n.n(r),a=n(45697),i=n.n(a),o=n(55138),l=n(58061),c=function(e){var t=e.inventoryId,n=e.cloudProvider,r=e.instanceType,a=e.idlingTime,i=[{label:"Provider",value:null===n?l.t0:n},{label:"Instance type",value:null===r?l.t0:r},{label:"Idling time",value:null===a?l.t0:"".concat(a,"%")}];return s().createElement(o.DescriptionList,{className:"expanded-row",isCompact:!0,isHorizontal:!0},s().createElement(o.DescriptionListGroup,{id:t},i.map((function(e,t){return s().createElement(s().Fragment,{key:t},s().createElement(o.DescriptionListTerm,null,e.label),s().createElement(o.DescriptionListDescription,null,e.value))}))))};c.propTypes={inventoryId:i().string,cloudProvider:i().string,instanceType:i().string,idlingTime:i().string}},77938:(e,t,n)=>{"use strict";n.d(t,{cK:()=>y,d1:()=>b,hb:()=>f,r6:()=>j});var r=n(55138),s=n(43297),a=n.n(s),i=n(58061),o=n(29165),l=n(64107),c=n(19694),u=n(30381),m=n.n(u),d=n(68770),p={color:"white",backgroundColor:"black",padding:"0px"},j=function(e,t,n){var s=n.state,o=n.performance_utilization.io_all;return s===i.QR?a().createElement("span",null,i.t0):a().createElement(r.Tooltip,{position:"right",content:a().createElement(d.TableComposable,{"arial-label":"disk usage",variant:"compactBorderless",borders:!1},a().createElement(d.Thead,null,a().createElement(d.Tr,null,a().createElement(d.Th,{modifier:"nowrap",textCenter:!0,style:p},"Device Name"),a().createElement(d.Th,{textCenter:!0,style:p},"Value"))),a().createElement(d.Tbody,null,Object.keys(o).map((function(e,t){return a().createElement(d.Tr,{key:t},a().createElement(d.Td,{style:p},e),a().createElement(d.Td,{modifier:"nowrap",style:p},o[e]," IOPS"))}))))},a().createElement("span",null,e))},y=function(e){return null===e?a().createElement("span",null,i.t0):a().createElement("span",null,e)},f=function(e){if(!e)return a().createElement("span",null,i.t0);var t=m()().subtract(7,"days"),n=m()(e).isBefore(t),s=new Date(e),u=(0,o.y_)("exact")(s),d=(0,o.y_)("relative")(s),p="System was not refreshed in the last 7 days.\nSuggestions for this system might be outdated due to reporting issues.\nLast reported: ".concat(u);return n?a().createElement(r.Tooltip,{content:a().createElement("div",null,p)},a().createElement("span",{className:"staleText"},a().createElement(c.ZP,{color:"var(--pf-global--warning-color--100)",size:"sm"})," ",d)):a().createElement(l.Z,{date:e})},b=function(e){return 0===e.length?a().createElement("span",null,i.t0):a().createElement("span",null,e[0].name)}},36269:(e,t,n)=>{"use strict";n.d(t,{l:()=>f});var r=n(43297),s=n.n(r),a=n(55138),i=n(84564),o=n(19694),l=n(35451),c=n(2293),u=n(5381),m=n(82727),d=n(18802),p=n(58773),j=n(45697),y=n.n(j),f=function(e){var t,n=e.stateValue,r=(t=n,{Oversized:{text:"This system is not fully consuming available resources and may be oversized.",icon:s().createElement(c.ZP,{color:"#f09800",size:"sm"})},Undersized:{text:"This system is depleting available resources and may be undersized.",icon:s().createElement(u.ZP,{color:"red",size:"sm"})},Idling:{text:"This system displays higher idling cycles than is expected.",icon:s().createElement(m.ZP,{size:"sm"})},"Storage rightsizing":{text:"This system is experiencing a storage Input/Output bottleneck.",icon:s().createElement(o.ZP,{color:"#f09800",size:"sm"})},Optimized:{text:"This system is running efficiently.",icon:s().createElement(l.ZP,{color:"green",size:"sm"})},Crashloop:{text:"This system is experiencing a crash loop.",icon:s().createElement(i.ZP,{color:"red",size:"sm"})},"Waiting for data":{text:"This system is configured, please allow 24 hours for your upload to complete.",icon:s().createElement(d.ZP,{color:"#2B9AF3",size:"sm"})},"Under pressure":{text:"System resources adequate but experiencing occasional peaks.",icon:s().createElement(p.ZP,{color:"#030303",size:"sm"})}}[t]||{}),j=r.text,y=r.icon;return s().createElement("span",null,s().createElement("span",null,j?s().createElement(a.Tooltip,{content:s().createElement("div",null,j)},s().createElement("span",null,y," ",n)):n))};f.propTypes={stateValue:y().string}},58061:(e,t,n)=>{"use strict";n.d(t,{H7:()=>D,LO:()=>u,M4:()=>m,Mo:()=>z,N7:()=>v,NG:()=>S,Q0:()=>_,QR:()=>b,RC:()=>c,RM:()=>j,Ru:()=>O,Up:()=>d,XY:()=>k,gg:()=>w,m_:()=>h,nV:()=>y,t0:()=>g,t5:()=>p,tj:()=>E,xP:()=>f,zO:()=>T});var r=n(43297),s=n.n(r),a=n(68770),i=n(55138),o=n(70702),l=n(77938),c="/api/ros/v1",u="/is_configured",m="/systems",d="/rating",p="/api/crc-pdf-generator/v1/generate",j=-1,y=0,f=1,b="Waiting for data",g="N/A",O="https://access.redhat.com/documentation/en-us/red_hat_insights/2023/html-single/assessing_and_monitoring_rhel_resource_optimization_with_insights_for_red_hat_enterprise_linux/index#proc-ros-psi-enable__assembly-ros-install",h="Resource Optimization",E="https://access.redhat.com/documentation/en-us/red_hat_insights/2023/html/assessing_and_monitoring_rhel_resource_optimization_with_insights_for_red_hat_enterprise_linux/index",v={state:{label:"State",type:"checkbox",filterValues:{items:[{label:"Idling",value:"Idling"},{label:"Optimized",value:"Optimized"},{label:"Oversized",value:"Oversized"},{label:"Under pressure",value:"Under pressure"},{label:"Undersized",value:"Undersized"},{label:"Waiting for data",value:"Waiting for data"}]}}},_="with_suggestions",D="with_waiting_for_data",k=[{key:"display_name",title:"Name",modalTitle:"Name",renderFunc:function(e,t,n){return(0,o.B3)(e,t,n)},isChecked:!0,isDisabled:!0,isShownByDefault:!0},{key:"groups",title:"Group",modalTitle:"Group",dataLabel:"Group",renderFunc:function(e){return(0,l.d1)(e)},isChecked:!0,isDisabled:!1,isShownByDefault:!0,props:{isStatic:!0}},{key:"os",title:s().createElement(i.Tooltip,{content:s().createElement("span",null,"Operating system")},s().createElement("span",null,"OS")),modalTitle:"Operating system",dataLabel:"Operating system",renderFunc:function(e){return(0,l.cK)(e)},isChecked:!0,isDisabled:!1,isShownByDefault:!0},{key:"performance_utilization.cpu",title:"CPU utilization",modalTitle:"CPU utilization",renderFunc:function(e,t,n){return(0,o.yV)(e,t,n)},isChecked:!0,isDisabled:!1,isShownByDefault:!0},{key:"performance_utilization.memory",title:"Memory utilization",modalTitle:"Memory utilization",renderFunc:function(e,t,n){return(0,o.yV)(e,t,n)},isChecked:!0,isDisabled:!1,isShownByDefault:!0},{key:"performance_utilization.max_io",title:s().createElement(i.Tooltip,{content:s().createElement("span",null,"IOPS")},s().createElement("span",null,"I/O utilization")),modalTitle:"I/O utilization",dataLabel:"I/O utilization",renderFunc:function(e,t,n){return(0,l.r6)(e,t,n)},isChecked:!0,isDisabled:!1,isShownByDefault:!0},{key:"number_of_suggestions",title:"Suggestions",modalTitle:"Suggestions",renderFunc:function(e,t,n){return(0,o.uM)(e,t,n)},isChecked:!0,isDisabled:!1,isShownByDefault:!0},{key:"state",title:"State",modalTitle:"State",renderFunc:function(e){return(0,o.YR)(e)},isChecked:!0,isDisabled:!1,isShownByDefault:!0},{key:"report_date",title:"Last reported",modalTitle:"Last reported",renderFunc:function(e){return(0,l.hb)(e)},isChecked:!0,isDisabled:!1,isShownByDefault:!0,transforms:[a.nowrap],cellTransforms:[a.nowrap]}],w=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],z=7,S=49,T=45},70702:(e,t,n)=>{"use strict";n.d(t,{YR:()=>E,zw:()=>k,uM:()=>_,yV:()=>v,B3:()=>h});var r=n(59713),s=n.n(r),a=n(18546),i=n(16530),o=n(43297),l=n.n(o),c=n(55138),u=n(24814),m=n(67154),d=n.n(m),p=n(45697),j=n.n(p),y=function(e){var t=e.utilizedValue,n=e.measureLocation,r=e.eleId;return l().createElement(l().Fragment,null,l().createElement(c.Progress,d()({value:t,className:"progress-score-bar blue-300",measureLocation:n},r?{id:r}:null)))};y.propTypes={measureLocation:j().string,valueScore:j().number,utilizedValue:j().number,eleId:j().string};var f=n(36269),b=n(58061);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e,t,n){var r=n.inventory_id,s=n.isDeleted,a=n.state;return s?l().createElement(c.Tooltip,{content:l().createElement("div",null,e," has been deleted from inventory")},l().createElement("span",{tabIndex:"0"},e)):a===b.QR?l().createElement("span",null,e):l().createElement(i.Link,{to:{pathname:"/".concat(r)},className:"pf-link system-link link-".concat(r)},e)},E=function(e){return l().createElement(f.l,{stateValue:e})},v=function(e,t,n){return n.state===b.QR?l().createElement("span",null,b.t0):l().createElement(y,{measureLocation:"outside",utilizedValue:e})},_=function(e,t,n){var r=n.inventory_id,s=n.isDeleted,a=n.state;return s?l().createElement("span",null,a===b.QR?b.t0:e):a===b.QR?l().createElement("span",null,b.t0):l().createElement(i.Link,{to:{pathname:"/".concat(r)},className:"pf-link link-".concat(r)},e)},D=function(e,t){return O(O({},e),{},{rows:e.rows.map((function(e){return O(O({},e),{},{isOpen:e.id===t.payload.id?t.payload.isOpen:e.isOpen})}))})},k=function(e,t){var n,r=e.LOAD_ENTITIES_FULFILLED;return(0,a.Gg)((n={},s()(n,r,(function(e){return function(e,t){return O(O({},t),{},{columns:e,rows:t.rows.map((function(e){return O(O({},e),{},{children:(t=e,n=t.id,r=t.cloud_provider,s=t.instance_type,a=t.idling_time,l().createElement(u.v,{id:n,cloudProvider:r,instanceType:s,idlingTime:a}))});var t,n,r,s,a})),loaded:!0})}(t,e)})),s()(n,"EXPAND_ROW",D),n))}},79943:(e,t,n)=>{"use strict";n.d(t,{Tz:()=>j,l1:()=>g,q3:()=>l,rj:()=>m});var r=n(59713),s=n.n(r),a=n(18546);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const l=(0,a.Gg)({LOAD_ROS_SYSTEM_INFO_PENDING:function(e){return o(o({},e),{},{systemInfo:{},loading:!0})},LOAD_ROS_SYSTEM_INFO_FULFILLED:function(e,t){var n=t.payload;return o(o({},e),{},{loading:!1,systemInfo:n})}},{});function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const m=(0,a.Gg)({FETCH_SYSTEM_RECOMMENDATIONS_LIST_PENDING:function(e){return u(u({},e),{},{loading:!0})},FETCH_SYSTEM_RECOMMENDATIONS_LIST_FULFILLED:function(e,t){return t.payload.hasError?u(u({},e),{},{loading:!1,emptyState:!0}):u(u({},e),{},{loading:!1,emptyState:!1,recommendationsData:t.payload.data,totalRecommendations:t.payload.meta.count})},FETCH_SYSTEM_RECOMMENDATIONS_LIST_REJECTED:function(e,t){return u(u({},e),{},{loading:!1,emptyState:!0,systemRecError:t.payload})}},{loading:!1,recommendationsData:[],systemRecError:{},totalRecommendations:0,emptyState:!1});function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const j=(0,a.Gg)({LOAD_IS_CONFIGURED_INFO_PENDING:function(e){return p(p({},e),{},{loaded:!0})},LOAD_IS_CONFIGURED_INFO_FULFILLED:function(e,t){return p(p({},e),{},{loaded:!1,showConfigSteps:!t.payload.success,serverCode:t.payload.code,systemCount:t.payload.count})},LOAD_IS_CONFIGURED_INFO_REJECTED:function(e,t){return p(p({},e),{},{loaded:!1,serverError:t.payload})}},{loaded:!1,serverError:{},serverCode:"",showConfigSteps:!1,systemCount:0});function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={columns:n(58061).XY};const g=(0,a.Gg)({CHANGE_SYSTEM_COLUMNS:function(e,t){return f(f({},e),{},{columns:t.payload.columns})}},b)},46700:(e,t,n)=>{var r={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function s(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=a,e.exports=s,s.id=46700}}]);
//# sourceMappingURL=../sourcemaps/291.12235ff553b9cd53add9551170cae20e.js.map