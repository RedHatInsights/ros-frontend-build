(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{439:function(e,t,a){(t=a(9)(!1)).push([e.i,".ros-systems-table .pf-c-content.expanded-row{--pf-c-content--dl--RowGap: var(--pf-global--spacer--xs);--pf-c-content--FontSize: var(--pf-global--FontSize--sm)}.ros-systems-table .pf-link:hover{text-decoration:none}.ros-systems-table .recommendations.green-400{color:var(--pf-global--palette--green-400)}.ros-systems-table .recommendations{padding-left:var(--pf-global--spacer--lg);font-weight:var(--pf-global--FontWeight--bold)}.ros-systems-table .pf-c-progress{grid-template-columns:auto}.ros-systems-table .pf-c-progress .pf-c-progress__status{text-align:left}.progress-score-bar{grid-gap:var(--pf-global--spacer--xs)}.progress-score-bar span.pf-c-progress__status-icon{display:none}.progress-score-bar .pf-c-progress__bar:before{background:var(--pf-global--palette--black-400)}.progress-score-bar .pf-c-progress__measure{color:var(--pf-global--palette--black-600)}.green-100 .pf-c-progress__indicator{background:var(--pf-global--palette--green-100)}.green-400 .pf-c-progress__indicator{background:var(--pf-global--palette--green-300)}.gold-400 .pf-c-progress__indicator{background:var(--pf-global--palette--gold-300)}.orange-300 .pf-c-progress__indicator{background:var(--pf-global--palette--orange-300)}.danger-200 .pf-c-progress__indicator{background:var(--pf-global--palette--red-200)}\n",""]),e.exports=t},451:function(e,t,a){var r=a(439);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=a(10)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(439,(function(){var t=a(439);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},455:function(e,t,a){"use strict";a.r(t);var r=a(83),n=a.n(r),o=a(84),l=a.n(o),s=a(238),c=a.n(s),i=a(85),p=a.n(i),u=a(86),m=a.n(u),g=a(57),d=a.n(g),f=a(441),v=a.n(f),b=a(0),y=a.n(b),h=a(56),E=a(435),_=a(437),x=a(436),S=a(13),T=a.n(S),w=a(239),k=a(421),L=a(422),I=function(e){var t=e.id,a=[{label:"Provider",value:e.cloudProvider},{label:"Instance Type",value:e.instanceType},{label:"Idling time",value:e.idlingTime},{label:"I/O Wait",value:e.ioWait}];return y.a.createElement(w.TextContent,{className:"expanded-row"},y.a.createElement(k.TextList,{id:t,component:k.TextListVariants.dl},a.map((function(e,t){return y.a.createElement(y.a.Fragment,{key:t},y.a.createElement(L.TextListItem,{component:L.TextListItemVariants.dt},e.label),y.a.createElement(L.TextListItem,{component:L.TextListItemVariants.dd},e.value))}))))};I.propTypes={id:T.a.string,cloudProvider:T.a.string,instanceType:T.a.string,idlingTime:T.a.string,ioWait:T.a.string};var R=a(425),C=function(e){var t,a=e.valueScore,r=e.measureLocation,n=Math.round(a/20),o="".concat(n,"/5");return y.a.createElement(y.a.Fragment,null,y.a.createElement(R.Progress,{value:n,min:0,max:5,label:o,valueText:o,className:"progress-score-bar ".concat((t=n,{5:"green-400",4:"green-100",3:"gold-400",2:"orange-300"}[t]||"danger-200")),measureLocation:r}))};C.propTypes={measureLocation:T.a.string,valueScore:T.a.number};var N=a(426),P=a(167),F=a(168),V=a(169),W=a(120),O=function(e){var t=e.button,a=e.color,r=e.error,n=e.icon,o=e.isSmall,l=e.text,s=e.title;return y.a.createElement(P.EmptyState,{variant:o?P.EmptyStateVariant.small:P.EmptyStateVariant.large},n&&y.a.createElement(V.EmptyStateIcon,{icon:n,color:a||null,className:o?"small-empty-state-icon":null}),y.a.createElement(W.Title,{headingLevel:o?"h5":"h1",size:o?"md":"lg"},s),y.a.createElement(F.EmptyStateBody,null,null==l?void 0:l.join("\n"),r),t)};O.propTypes={button:T.a.object,color:T.a.string,error:T.a.string,icon:T.a.any,isSmall:T.a.bool,text:T.a.array,title:T.a.string};a(451);function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=d()(e);if(t){var n=d()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return m()(this,a)}}var M=function(e,t,a,r){return y.a.createElement("a",{href:r,className:"pf-link ".concat(a," link-").concat(e)},t)},j=function(e,t){var a="recommendations";return 0===t&&(a+=" green-400"),M(e,t,a,"#")},A=function(e){p()(a,e);var t=z(a);function a(e){var r;return n()(this,a),(r=t.call(this,e)).state={columns:[{title:"System Name",cellFormatters:[h.b]},{title:"CPU score"},{title:"Memory score"},{title:"I/O score"},{title:"Recommendations"},{title:"State"}],rows:r.createRows()},r.onCollapse=r.onCollapse.bind(c()(r)),r}return l()(a,[{key:"onCollapse",value:function(e,t,a){var r=this.state.rows;r[t].isOpen=a,this.setState({rows:r})}},{key:"createRows",value:function(){var e=this.props.systems;return 0!==e.length?v()(e,(function(e,t){var a=e.performance_score,r=a.cpu_score,n=a.memory_score,o=a.io_score,l=e.facts,s=l.cloud_provider,c=l.instance_type,i=l.idling_time,p=l.io_wait,u=e.id,m=e.recommendation_count;return[{id:t,isOpen:!1,cells:[{title:M(u,e.display_name,"system-link","#")},{title:y.a.createElement(C,{measureLocation:"outside",valueScore:r})},{title:y.a.createElement(C,{measureLocation:"outside",valueScore:n})},{title:y.a.createElement(C,{measureLocation:"outside",valueScore:o})},{title:j(u,m)},{title:e.state}]},{cells:[{title:y.a.createElement(I,{id:u,cloudProvider:s,instanceType:c,idlingTime:i,ioWait:p})}],parent:2*t}]})):[{heightAuto:!0,cells:[{props:{colSpan:7},title:y.a.createElement(N.EmptyTable,null,y.a.createElement(O,{title:"No matching records found"}))}]}]}},{key:"render",value:function(){var e=this.state,t=e.columns,a=e.rows;return y.a.createElement(E.a,{"aria-label":"Expandable table",onCollapse:this.onCollapse,variant:"compact",rows:a,cells:t,className:"ros-systems-table"},y.a.createElement(_.a,null),y.a.createElement(x.a,null))}}]),a}(y.a.Component);A.propTypes={systems:T.a.array};t.default=A}}]);
//# sourceMappingURL=9.f25b333ca232d961d85b.js.map