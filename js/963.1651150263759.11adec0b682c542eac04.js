(self.webpackChunkros_frontend=self.webpackChunkros_frontend||[]).push([[963],{48926:e=>{function t(e,t,n,r,o,s,c){try{var i=e[s](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,o)}e.exports=function(e){return function(){var n=this,r=arguments;return new Promise((function(o,s){var c=e.apply(n,r);function i(e){t(c,o,s,i,u,"next",e)}function u(e){t(c,o,s,i,u,"throw",e)}i(void 0)}))}}},87757:(e,t,n)=>{e.exports=n(35666)},87999:(e,t,n)=>{"use strict";n.d(t,{B:()=>T,Z:()=>D});var r=n(87757),o=n.n(r),s=n(48926),c=n.n(s),i=n(34575),u=n.n(i),a=n(93913),l=n.n(a),f=n(2205),h=n.n(f),p=n(78585),m=n.n(p),d=n(29754),v=n.n(d),y=n(45697),R=n.n(y),P=n(1427),g=n.n(P),E=n(16530),b=n(2983),w=n(8896),k=n(67463),S=(0,P.lazy)((function(){return Promise.all([n.e(81),n.e(473),n.e(103),n.e(25),n.e(821)]).then(n.bind(n,5529))})),x=(0,P.lazy)((function(){return Promise.all([n.e(264),n.e(25),n.e(798)]).then(n.bind(n,98593))})),C=function(){return g().createElement(P.Suspense,{fallback:g().createElement(w.b,null,g().createElement(k.Spinner,null))},g().createElement(E.Switch,null,g().createElement(E.Route,{exact:!0,path:"/",component:S}),g().createElement(E.Route,{path:"/:inventoryId",component:x}),g().createElement(E.Route,null,g().createElement(E.Redirect,{to:"/ros"}))))};C.propTypes={childProps:R().shape({history:R().shape({push:R().func})})};var z=n(69601),A=n(83215),I=n(79943),L=n(30319);var T=(0,P.createContext)(),U=function(e){h()(s,e);var t,n,r=(t=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=v()(t);if(n){var o=v()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return m()(this,e)});function s(){var e;return u()(this,s),(e=r.call(this)).state={hasReadPermissions:void 0,arePermissionsLoaded:!1},e}return l()(s,[{key:"handlePermissionsUpdate",value:function(e){this.setState({hasReadPermissions:e,arePermissionsLoaded:!0})}},{key:"hasPermission",value:function(e,t){var n=!1;return t.forEach((function(t){e===t&&(n=!0)})),n}},{key:"componentDidMount",value:function(){var e=this;(0,L.z2)({notifications:A.ee,systemDetailReducer:I.q3,systemRecsReducer:I.rj,isConfiguredReducer:I.Tz,systemColumnsReducer:I.l1}),insights.chrome.init(),insights.chrome.identifyApp("ros"),this.unregister=insights.chrome.on("APP_NAVIGATION",(function(t){"ros"===t.navId?e.props.history.push("/".concat(location.search).concat(location.hash)):e.props.history.push("/".concat(t.navId).concat(location.search).concat(location.hash))})),c()(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,insights.chrome.getUserPermissions("ros",!0);case 2:n=t.sent,e.handlePermissionsUpdate(n.some((function(t){var n=t.permission;return e.hasPermission(n,["ros:*:*","ros:*:read"])})));case 4:case"end":return t.stop()}}),t)})))()}},{key:"componentWillUnmount",value:function(){"function"==typeof this.unregister&&this.unregister()}},{key:"render",value:function(){var e=this.state,t=e.hasReadPermissions;return e.arePermissionsLoaded?g().createElement(T.Provider,{value:{permissions:{systemsRead:t}}},g().createElement(z.ZP,null),g().createElement(C,{childProps:this.props})):null}}]),s}(P.Component);U.propTypes={history:R().object};const D=(0,E.withRouter)((0,b.$j)()(U))},28412:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(1427),o=n.n(r),s=n(16530),c=n(2983),i=n(30319),u=n(87999),a=n(35240);n(94500);const l=function(){return o().createElement(c.zt,{store:(0,i.S1)().getStore()},o().createElement(s.BrowserRouter,{basename:(0,a.eb)(window.location.pathname,2)},o().createElement(u.Z,null)))}},30319:(e,t,n)=>{"use strict";n.d(t,{S1:()=>i,z2:()=>u});var r,o=n(67336),s=n(68573),c=n.n(s);function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r=(0,o.JH)({},[c()].concat(t))}function u(){var e;return(e=r).register.apply(e,arguments)}},59854:(e,t,n)=>{"use strict";n.d(t,{v:()=>l});var r=n(1427),o=n(2975),s=n(86496),c=n(1881),i=n(6526),u=function(e,t){return e===t};function a(e){void 0===e&&(e=i.E);var t=e===i.E?o.x:function(){return(0,r.useContext)(e)};return function(e,n){void 0===n&&(n=u);var o=t();return function(e,t,n,o){var i,u=(0,r.useReducer)((function(e){return e+1}),0)[1],a=(0,r.useMemo)((function(){return new s.Z(n,o)}),[n,o]),l=(0,r.useRef)(),f=(0,r.useRef)(),h=(0,r.useRef)();try{i=e!==f.current||l.current?e(n.getState()):h.current}catch(e){throw l.current&&(e.message+="\nThe error may be correlated with this previous error:\n"+l.current.stack+"\n\n"),e}return(0,c.L)((function(){f.current=e,h.current=i,l.current=void 0})),(0,c.L)((function(){function e(){try{var e=f.current(n.getState());if(t(e,h.current))return;h.current=e}catch(e){l.current=e}u({})}return a.onStateChange=e,a.trySubscribe(),e(),function(){return a.tryUnsubscribe()}}),[n,a]),i}(e,n,o.store,o.subscription)}}var l=a()},81754:()=>{},34946:()=>{},80598:()=>{},10108:()=>{},30187:()=>{},93398:()=>{},46928:()=>{},74181:()=>{},11177:()=>{}}]);