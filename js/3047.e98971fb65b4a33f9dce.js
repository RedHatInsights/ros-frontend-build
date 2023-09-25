/*! For license information please see 3047.e98971fb65b4a33f9dce.js.LICENSE.txt */
"use strict";(self.webpackChunkros_frontend=self.webpackChunkros_frontend||[]).push([[3047,655,1230],{40400:(t,e,n)=>{n.d(e,{IU:()=>l,Jh:()=>r});var r,o=n(70655),a=n(43297);!function(t){t.sm="sm",t.md="md",t.lg="lg",t.xl="xl"}(r||(r={}));const i=t=>{switch(t){case r.sm:return"1em";case r.md:return"1.5em";case r.lg:return"2em";case r.xl:return"3em";default:return"1em"}};let c=0;function l({name:t,xOffset:e=0,yOffset:n=0,width:l,height:u,svgPath:f}){var s;return s=class extends a.Component{constructor(){super(...arguments),this.id="icon-title-"+c++}render(){const t=this.props,{size:r,color:c,title:s,noVerticalAlign:p}=t,y=(0,o.__rest)(t,["size","color","title","noVerticalAlign"]),h=Boolean(s),d=i(r),_=-.125*Number.parseFloat(d),v=p?null:{verticalAlign:`${_}em`},m=[e,n,l,u].join(" ");return a.createElement("svg",Object.assign({style:v,fill:c,height:d,width:d,viewBox:m,"aria-labelledby":h?this.id:null,"aria-hidden":!h||null,role:"img"},y),h&&a.createElement("title",{id:this.id},s),a.createElement("path",{d:f}))}},s.displayName=t,s.defaultProps={color:"currentColor",size:r.sm,noVerticalAlign:!1},s}},43047:(t,e,n)=>{n.d(e,{$O:()=>a,MX:()=>o,ZP:()=>i});var r=n(40400);const o={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},a=(0,r.IU)(o),i=a},70655:(t,e,n)=>{n.r(e),n.d(e,{__assign:()=>a,__asyncDelegator:()=>w,__asyncGenerator:()=>b,__asyncValues:()=>g,__await:()=>m,__awaiter:()=>f,__classPrivateFieldGet:()=>S,__classPrivateFieldSet:()=>j,__createBinding:()=>p,__decorate:()=>c,__exportStar:()=>y,__extends:()=>o,__generator:()=>s,__importDefault:()=>P,__importStar:()=>x,__makeTemplateObject:()=>O,__metadata:()=>u,__param:()=>l,__read:()=>d,__rest:()=>i,__spread:()=>_,__spreadArrays:()=>v,__values:()=>h});var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},r(t,e)};function o(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var a=function(){return a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)};function i(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}function c(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i}function l(t,e){return function(n,r){e(n,r,t)}}function u(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function f(t,e,n,r){return new(n||(n=Promise))((function(o,a){function i(t){try{l(r.next(t))}catch(t){a(t)}}function c(t){try{l(r.throw(t))}catch(t){a(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}l((r=r.apply(t,e||[])).next())}))}function s(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}function p(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}function y(t,e){for(var n in t)"default"===n||e.hasOwnProperty(n)||(e[n]=t[n])}function h(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function d(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,a=n.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function _(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(d(arguments[e]));return t}function v(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var a=arguments[e],i=0,c=a.length;i<c;i++,o++)r[o]=a[i];return r}function m(t){return this instanceof m?(this.v=t,this):new m(t)}function b(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(t){o[t]&&(r[t]=function(e){return new Promise((function(n,r){a.push([t,e,n,r])>1||c(t,e)}))})}function c(t,e){try{(n=o[t](e)).value instanceof m?Promise.resolve(n.value.v).then(l,u):f(a[0][2],n)}catch(t){f(a[0][3],t)}var n}function l(t){c("next",t)}function u(t){c("throw",t)}function f(t,e){t(e),a.shift(),a.length&&c(a[0][0],a[0][1])}}function w(t){var e,n;return e={},r("next"),r("throw",(function(t){throw t})),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,o){e[r]=t[r]?function(e){return(n=!n)?{value:m(t[r](e)),done:"return"===r}:o?o(e):e}:o}}function g(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=h(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,o){!function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)}(r,o,(e=t[n](e)).done,e.value)}))}}}function O(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function x(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function P(t){return t&&t.__esModule?t:{default:t}}function S(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}function j(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n}}}]);