(self.webpackChunkros_frontend=self.webpackChunkros_frontend||[]).push([[880],{22858:e=>{e.exports=function(e){if(Array.isArray(e))return e}},13884:e=>{e.exports=function(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,o=!1,u=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(t.push(c.value),!r||t.length!==r);n=!0);}catch(e){o=!0,u=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw u}}return t}}},80521:e=>{e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},63038:(e,r,t)=>{var n=t(22858),o=t(13884),u=t(60379),c=t(80521);e.exports=function(e,r){return n(e)||o(e,r)||u(e,r)||c()}},86503:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>g});var n=t(63038),o=t.n(n),u=t(6479),c=t.n(u),i=t(67154),a=t.n(i),s=t(43297),l=t.n(s),f=t(45697),p=t.n(f),y=t(2983),v=t(79943),d=t(45103),h=l().lazy((function(){return Promise.all([t.e(939),t.e(192),t.e(91),t.e(671),t.e(632),t.e(837)]).then(t.bind(t,88422))})),m=function(e){var r=(0,y.v9)((function(e){var r,t=e.entityDetails;return null==t||null===(r=t.entity)||void 0===r?void 0:r.id}));return l().createElement(s.Suspense,{fallback:""},l().createElement(h,a()({inventoryId:r},e)))},b=function(e){var r=e.getRegistry,t=c()(e,["getRegistry"]),n=(0,s.useState)(),u=o()(n,2),i=u[0],a=u[1];return(0,s.useEffect)((function(){var e,t;r&&(null===(e=r())||void 0===e||null===(t=e.register)||void 0===t||t.call(e,{systemRecsReducer:v.rj})),a((function(){return r?y.zt:s.Fragment}))}),[r]),i?l().createElement(i,r&&{store:r().getStore()},l().createElement(m,t)):l().createElement(d.Bullseye,null,l().createElement(d.Spinner,{size:"xl"}))};b.propTypes={getRegistry:p().func};const g=b},92703:(e,r,t)=>{"use strict";var n=t(50414);function o(){}function u(){}u.resetWarningCache=o,e.exports=function(){function e(e,r,t,o,u,c){if(c!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function r(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:u,resetWarningCache:o};return t.PropTypes=t,t}},45697:(e,r,t)=>{e.exports=t(92703)()},50414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},59854:(e,r,t)=>{"use strict";t.d(r,{v:()=>l});var n=t(43297),o=t(2975),u=t(86496),c=t(1881),i=t(6526),a=function(e,r){return e===r};function s(e){void 0===e&&(e=i.E);var r=e===i.E?o.x:function(){return(0,n.useContext)(e)};return function(e,t){void 0===t&&(t=a);var o=r();return function(e,r,t,o){var i,a=(0,n.useReducer)((function(e){return e+1}),0)[1],s=(0,n.useMemo)((function(){return new u.Z(t,o)}),[t,o]),l=(0,n.useRef)(),f=(0,n.useRef)(),p=(0,n.useRef)();try{i=e!==f.current||l.current?e(t.getState()):p.current}catch(e){throw l.current&&(e.message+="\nThe error may be correlated with this previous error:\n"+l.current.stack+"\n\n"),e}return(0,c.L)((function(){f.current=e,p.current=i,l.current=void 0})),(0,c.L)((function(){function e(){try{var e=f.current(t.getState());if(r(e,p.current))return;p.current=e}catch(e){l.current=e}a({})}return s.onStateChange=e,s.trySubscribe(),e(),function(){return s.tryUnsubscribe()}}),[t,s]),i}(e,t,o.store,o.subscription)}}var l=s()}}]);