"use strict";(self.webpackChunkros_frontend=self.webpackChunkros_frontend||[]).push([[892],{99621:(e,t,n)=>{n.d(t,{B:()=>D,Z:()=>U});var r=n(87757),s=n.n(r),o=n(48926),i=n.n(o),a=n(34575),c=n.n(a),u=n(93913),l=n.n(u),h=n(2205),p=n.n(h),f=n(78585),m=n.n(f),d=n(29754),v=n.n(d),y=n(45697),P=n.n(y),R=n(1427),E=n.n(R),g=n(16530),k=n(37703);const w=JSON.parse('{"_j":{"q":"/ros","j":"/:inventoryId"}}');var j=n(8896),b=n(67463),S=(0,R.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(704),n.e(622),n.e(901),n.e(821)]).then(n.bind(n,18771))})),z=(0,R.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(704),n.e(503),n.e(901),n.e(798)]).then(n.bind(n,98593))})),_=function(){return E().createElement(R.Suspense,{fallback:E().createElement(j.b,null,E().createElement(b.Spinner,null))},E().createElement(g.Switch,null,E().createElement(g.Route,{exact:!0,path:"/",component:S}),E().createElement(g.Route,{path:w._j.j,component:z}),E().createElement(g.Route,null,E().createElement(g.Redirect,{to:w._j.q}))))};_.propTypes={childProps:P().shape({history:P().shape({push:P().func})})};var x=n(24685),A=n(83215),C=n(9694),I=n(30319);var D=(0,R.createContext)(),T=function(e){p()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=v()(t);if(n){var s=v()(this).constructor;e=Reflect.construct(r,arguments,s)}else e=r.apply(this,arguments);return m()(this,e)});function o(){var e;return c()(this,o),(e=r.call(this)).state={hasReadPermissions:void 0,arePermissionsLoaded:!1},e}return l()(o,[{key:"handlePermissionsUpdate",value:function(e){this.setState({hasReadPermissions:e,arePermissionsLoaded:!0})}},{key:"hasPermission",value:function(e,t){var n=!1;return t.forEach((function(t){e===t&&(n=!0)})),n}},{key:"componentDidMount",value:function(){var e=this;(0,I.z2)({notifications:A.ee,systemDetailReducer:C.q3,systemRecsReducer:C.rj,isConfiguredReducer:C.Tz}),insights.chrome.init(),insights.chrome.identifyApp("ros"),this.unregister=insights.chrome.on("APP_NAVIGATION",(function(t){"ros"===t.navId?e.props.history.push("/".concat(location.search).concat(location.hash)):e.props.history.push("/".concat(t.navId).concat(location.search).concat(location.hash))})),i()(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,insights.chrome.getUserPermissions("ros");case 2:n=t.sent,e.handlePermissionsUpdate(n.some((function(t){var n=t.permission;return e.hasPermission(n,["ros:*:*","ros:*:read"])})));case 4:case"end":return t.stop()}}),t)})))()}},{key:"componentWillUnmount",value:function(){"function"==typeof this.unregister&&this.unregister()}},{key:"render",value:function(){var e=this.state,t=e.hasReadPermissions;return e.arePermissionsLoaded?E().createElement(D.Provider,{value:{permissions:{systemsRead:t}}},E().createElement(x.ZP,null),E().createElement(_,{childProps:this.props})):null}}]),o}(R.Component);T.propTypes={history:P().object};const U=(0,g.withRouter)((0,k.$j)()(T))},30319:(e,t,n)=>{n.d(t,{S1:()=>a,z2:()=>c});var r,s=n(18546),o=n(68573),i=n.n(o);function a(){if(r)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r=new s.ZP({},[i()].concat(t))}function c(){var e;return(e=r).register.apply(e,arguments)}}}]);
//# sourceMappingURL=../sourcemaps/892.2cbe936d8486b34693383cae5e89dd99.js.map