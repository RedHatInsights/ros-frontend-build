(self.webpackChunkros_frontend=self.webpackChunkros_frontend||[]).push([[723],{98452:(t,e,r)=>{"use strict";r.d(e,{q:()=>i,r:()=>u});var n=r(59713),o=r.n(n),c=r(18546);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const i=(0,c.Gg)({LOAD_ROS_SYSTEM_INFO_PENDING:function(t){return O(O({},t),{},{systemInfo:{},loading:!0})},LOAD_ROS_SYSTEM_INFO_FULFILLED:function(t,e){var r=e.payload;return O(O({},t),{},{loading:!1,systemInfo:r})}},{});function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const u=(0,c.Gg)({FETCH_SYSTEM_RECOMMENDATIONS_LIST_PENDING:function(t){return p(p({},t),{},{loading:!0})},FETCH_SYSTEM_RECOMMENDATIONS_LIST_FULFILLED:function(t,e){return p(p({},t),{},{loading:!1,emptyState:0===e.payload.meta.count,recommendationsData:e.payload.data,totalRecommendations:e.payload.meta.count})},FETCH_SYSTEM_RECOMMENDATIONS_LIST_REJECTED:function(t,e){return p(p({},t),{},{loading:!1,emptyState:!0,systemRecError:e.payload})}},{loading:!1,recommendationsData:[],systemRecError:{},totalRecommendations:0,emptyState:!1})}}]);
//# sourceMappingURL=723.359f911419b8978bfdf5.js.map