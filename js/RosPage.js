(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{438:function(t,e,n){(e=n(9)(!1)).push([t.i,"",""]),t.exports=e},440:function(t,e,n){var r=n(438);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},s=n(10)(r,o);r.locals&&(t.exports=r.locals),t.hot.accept(438,(function(){var e=n(438);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var n,r=0;for(n in t){if(!e||t[n]!==e[n])return!1;r++}for(n in e)r--;return 0===r}(r.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(e)})),t.hot.dispose((function(){s()}))},456:function(t,e,n){"use strict";n.r(e);var r=n(159),o=n.n(r),s=n(173),a=n.n(s),c=n(83),i=n.n(c),u=n(84),l=n.n(u),f=n(238),h=n.n(f),m=n(85),p=n.n(m),d=n(86),y=n.n(d),v=n(57),g=n.n(v),w=n(0),R=n.n(w),E=n(11),S=n(240),b=n(241),k=n(419),x=n(420),F=(n(440),n(102));function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=g()(t);if(e){var o=g()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y()(this,n)}}var P=Object(F.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(8),n.e(9)]).then(n.bind(null,455))})),j=function(t){p()(r,t);var e,n=C(r);function r(t){var e;return i()(this,r),(e=n.call(this,t)).state={systems:[]},e.getSystemsForRos=e.getSystemsForRos.bind(h()(e)),e}return l()(r,[{key:"componentDidMount",value:(e=a()(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.insights.chrome.auth.getUser();case 2:this.getSystemsForRos();case 3:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"getSystemsForRos",value:function(){var t=this;fetch("/api".concat("/systems")).then((function(t){if(!t.ok)throw Error(t.statusText);return t.json()})).then((function(e){t.setState({systems:e.results})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t=this.state.systems;return R.a.createElement(R.a.Fragment,null,R.a.createElement(x.PageHeader,null,R.a.createElement(x.PageHeaderTitle,{title:"Resource Optimization"})),R.a.createElement(k.Main,null,R.a.createElement(S.Card,{className:"pf-t-light  pf-m-opaque-100"},R.a.createElement(b.CardBody,null,R.a.createElement("div",null,R.a.createElement(P,{systems:t}))))))}}]),r}(R.a.Component);e.default=Object(E.h)(j)}}]);
//# sourceMappingURL=RosPage.js.map