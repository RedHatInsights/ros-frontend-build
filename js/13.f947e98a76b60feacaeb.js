(self.webpackChunkros_frontend=self.webpackChunkros_frontend||[]).push([[13],{48926:e=>{function t(e,t,n,r,o,s,c){try{var u=e[s](c),i=u.value}catch(e){return void n(e)}u.done?t(i):Promise.resolve(i).then(r,o)}e.exports=function(e){return function(){var n=this,r=arguments;return new Promise((function(o,s){var c=e.apply(n,r);function u(e){t(c,o,s,u,i,"next",e)}function i(e){t(c,o,s,u,i,"throw",e)}u(void 0)}))}}},87757:(e,t,n)=>{e.exports=n(35666)},87999:(e,t,n)=>{"use strict";n.d(t,{B:()=>U,Z:()=>j});var r=n(67154),o=n.n(r),s=n(87757),c=n.n(s),u=n(48926),i=n.n(u),a=n(34575),l=n.n(a),f=n(93913),h=n.n(f),p=n(2205),m=n.n(p),d=n(78585),v=n.n(d),y=n(29754),R=n.n(y),P=n(45697),E=n.n(P),b=n(43297),w=n.n(b),g=n(16530),k=n(2983),S=n(55138),x=(0,b.lazy)((function(){return Promise.all([n.e(612),n.e(167),n.e(9),n.e(429),n.e(632),n.e(821)]).then(n.bind(n,1704))})),C=(0,b.lazy)((function(){return Promise.all([n.e(612),n.e(167),n.e(321),n.e(632),n.e(798)]).then(n.bind(n,6997))})),z=function(){return w().createElement(b.Suspense,{fallback:w().createElement(S.Bullseye,null,w().createElement(S.Spinner,null))},w().createElement(g.Switch,null,w().createElement(g.Route,{exact:!0,path:"/",component:x}),w().createElement(g.Route,{path:"/:inventoryId",component:C}),w().createElement(g.Route,null,w().createElement(g.Redirect,{to:"/ros"}))))};z.propTypes={childProps:E().shape({history:E().shape({push:E().func})})};var A=n(51344),B=n(83215),I=n(79943),L=n(30319),T=n(55140);var U=(0,b.createContext)(),Z=function(e){m()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=R()(t);if(n){var o=R()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return v()(this,e)});function o(){var e;return l()(this,o),(e=r.call(this)).state={hasReadPermissions:void 0,arePermissionsLoaded:!1},e}return h()(o,[{key:"handlePermissionsUpdate",value:function(e){this.setState({hasReadPermissions:e,arePermissionsLoaded:!0})}},{key:"hasPermission",value:function(e,t){var n=!1;return t.forEach((function(t){e===t&&(n=!0)})),n}},{key:"componentDidMount",value:function(){var e=this;(0,L.z2)({notifications:B.ee,systemDetailReducer:I.q3,systemRecsReducer:I.rj,isConfiguredReducer:I.Tz,systemColumnsReducer:I.l1});var t=this.props.chrome;null==t||t.identifyApp("ros"),this.unregister=t.on("APP_NAVIGATION",(function(t){"ros"===t.navId?e.props.history.push("/".concat(location.search).concat(location.hash)):e.props.history.push("/".concat(t.navId).concat(location.search).concat(location.hash))})),i()(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getUserPermissions("ros",!0);case 2:r=n.sent,e.handlePermissionsUpdate(r.some((function(t){var n=t.permission;return e.hasPermission(n,["ros:*:*","ros:*:read"])})));case 4:case"end":return n.stop()}}),n)})))()}},{key:"componentWillUnmount",value:function(){"function"==typeof this.unregister&&this.unregister()}},{key:"render",value:function(){var e=this.state,t=e.hasReadPermissions;return e.arePermissionsLoaded?w().createElement(U.Provider,{value:{permissions:{systemsRead:t}}},w().createElement(A.ZP,null),w().createElement(z,{childProps:this.props})):null}}]),o}(b.Component);Z.propTypes={history:E().object,chrome:E().object};const j=(0,g.withRouter)((0,k.$j)()((function(e){var t=(0,T.Z)();return w().createElement(Z,o()({},e,{chrome:t}))})))},28412:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(43297),o=n.n(r),s=n(16530),c=n(2983),u=n(30319),i=n(87999),a=n(35240);n(94500);const l=function(){return o().createElement(c.zt,{store:(0,u.S1)().getStore()},o().createElement(s.BrowserRouter,{basename:(0,a.eb)(window.location.pathname,2)},o().createElement(i.Z,null)))}},30319:(e,t,n)=>{"use strict";n.d(t,{S1:()=>u,z2:()=>i});var r,o=n(67336),s=n(68573),c=n.n(s);function u(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r=(0,o.JH)({},[c()].concat(t))}function i(){var e;return(e=r).register.apply(e,arguments)}},59854:(e,t,n)=>{"use strict";n.d(t,{v:()=>l});var r=n(43297),o=n(2975),s=n(86496),c=n(1881),u=n(6526),i=function(e,t){return e===t};function a(e){void 0===e&&(e=u.E);var t=e===u.E?o.x:function(){return(0,r.useContext)(e)};return function(e,n){void 0===n&&(n=i);var o=t();return function(e,t,n,o){var u,i=(0,r.useReducer)((function(e){return e+1}),0)[1],a=(0,r.useMemo)((function(){return new s.Z(n,o)}),[n,o]),l=(0,r.useRef)(),f=(0,r.useRef)(),h=(0,r.useRef)();try{u=e!==f.current||l.current?e(n.getState()):h.current}catch(e){throw l.current&&(e.message+="\nThe error may be correlated with this previous error:\n"+l.current.stack+"\n\n"),e}return(0,c.L)((function(){f.current=e,h.current=u,l.current=void 0})),(0,c.L)((function(){function e(){try{var e=f.current(n.getState());if(t(e,h.current))return;h.current=e}catch(e){l.current=e}i({})}return a.onStateChange=e,a.trySubscribe(),e(),function(){return a.tryUnsubscribe()}}),[n,a]),u}(e,n,o.store,o.subscription)}}var l=a()}}]);