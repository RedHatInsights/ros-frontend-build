(self.webpackChunkros_frontend=self.webpackChunkros_frontend||[]).push([[465],{63540:(e,t,n)=>{"use strict";t.xv=t.qO=void 0;const r=n(21988),a=r.__importStar(n(1427)),s=n(38296),l=r.__importDefault(n(67526)),o=n(23053);var c;!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(c=t.qO||(t.qO={})),t.xv=e=>{var{children:n=null,className:i="",component:u=c.p,isVisitedLink:m=!1,ouiaId:p,ouiaSafe:f=!0}=e,d=r.__rest(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const h=u,v=o.useOUIAProps(t.xv.displayName,p,f);return a.createElement(h,Object.assign({},v,d,{"data-pf-content":!0,className:s.css(m&&u===c.a&&l.default.modifiers.visited,i)}),n)},t.xv.displayName="Text"},20018:(e,t,n)=>{"use strict";t.D=void 0;const r=n(21988),a=r.__importStar(n(1427)),s=r.__importDefault(n(67526)),l=n(38296);t.D=e=>{var{children:t=null,className:n="",isVisited:o=!1}=e,c=r.__rest(e,["children","className","isVisited"]);return a.createElement("div",Object.assign({},c,{className:l.css(s.default.content,o&&s.default.modifiers.visited,n)}),t)},t.D.displayName="TextContent"},35451:(e,t,n)=>{"use strict";t.__esModule=!0,t.CheckCircleIconConfig={name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0},t.CheckCircleIcon=n(35183).createIcon(t.CheckCircleIconConfig),t.default=t.CheckCircleIcon},67526:(e,t,n)=>{"use strict";t.__esModule=!0,n(10108),t.default={content:"pf-c-content",modifiers:{visited:"pf-m-visited",overpassFont:"pf-m-overpass-font"}}},96465:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>F});var r=n(34575),a=n.n(r),s=n(93913),l=n.n(s),o=n(81506),c=n.n(o),i=n(2205),u=n.n(i),m=n(78585),p=n.n(m),f=n(29754),d=n.n(f),h=n(94654),v=n.n(h),g=n(1427),b=n.n(g),y=n(88587),x=n(45697),C=n.n(x),E=n(67154),N=n.n(E),_=n(59713),k=n.n(_),O=n(6479),w=n.n(O),S=n(94184),I=n.n(S),D=function(e){var t=e.centered,n=e.className,r=e.children,a=w()(e,["centered","className","children"]),s=I()("ins-c-table__empty",k()({},"is-centered",t),n);return b().createElement("div",N()({className:s},a)," ",r)};const T=D;D.propTypes={centered:C().bool,children:C().any,className:C().string};var q=n(219),R=n(74183),j=n(86728),L=n(34348),M=function(e){var t=e.button,n=e.color,r=e.error,a=e.icon,s=e.isSmall,l=e.text,o=e.title;return b().createElement(q.ub,{variant:s?q.IQ.small:q.IQ.large},a&&b().createElement(j.k,{icon:a,color:n||null,className:s?"small-empty-state-icon":null}),b().createElement(L.Dx,{headingLevel:s?"h5":"h1",size:s?"md":"lg"},o),b().createElement(R.B,null,null==l?void 0:l.join("\n"),r),t)};M.propTypes={button:C().object,color:C().string,error:C().string,icon:C().any,isSmall:C().bool,text:C().array,title:C().string};var V=n(35451),z=n(20018),A=n(63540);var P=function(e){return b().createElement(z.D,null,b().createElement(A.xv,{component:A.qO.p,className:"newline tab"},b().createElement(A.xv,null,b().createElement("strong",null,"Detected issues")),e.reason),b().createElement(A.xv,{component:A.qO.p,className:"newline"},b().createElement(A.xv,null,b().createElement("strong",null,"Suggestion")),e.resolution))},B=function(e){u()(s,e);var t,n,r=(t=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=d()(t);if(n){var a=d()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return p()(this,e)});function s(e){var t;return a()(this,s),(t=r.call(this,e)).state={columns:[{title:"Name",cellFormatters:[y.expandable]}],rows:t.createRows()},t.onCollapse=t.onCollapse.bind(c()(t)),t}return l()(s,[{key:"onCollapse",value:function(e,t,n){var r=this.state.rows;r[t].isOpen=n,this.setState({rows:r})}},{key:"createRows",value:function(){var e=this.props.recommendations;return e&&0!==e.length?v()(e,(function(e,t){return[{id:t,isOpen:0===t,cells:[{title:e.description}]},{cells:[{title:P(e)}],parent:2*t}]})):[{heightAuto:!0,cells:[{props:{colSpan:7},title:b().createElement(T,{className:"recs-table-empty"},b().createElement(M,{title:"No suggestions",text:["There are no suggestions for this system."],icon:V.default}))}]}]}},{key:"render",value:function(){var e=this.state,t=e.columns,n=e.rows;return b().createElement(y.Table,{"aria-label":"Expandable table",onCollapse:this.onCollapse,variant:"compact",rows:n,cells:t,className:"ros-recommendations-table"},b().createElement(y.TableHeader,null),b().createElement(y.TableBody,null))}}]),s}(b().Component);B.propTypes={recommendations:C().array};const F=B},89881:(e,t,n)=>{var r=n(47816),a=n(99291)(r);e.exports=a},21078:(e,t,n)=>{var r=n(62488),a=n(37285);e.exports=function e(t,n,s,l,o){var c=-1,i=t.length;for(s||(s=a),o||(o=[]);++c<i;){var u=t[c];n>0&&s(u)?n>1?e(u,n-1,s,l,o):r(o,u):l||(o[o.length]=u)}return o}},69199:(e,t,n)=>{var r=n(89881),a=n(98612);e.exports=function(e,t){var n=-1,s=a(e)?Array(e.length):[];return r(e,(function(e,r,a){s[++n]=t(e,r,a)})),s}},99291:(e,t,n)=>{var r=n(98612);e.exports=function(e,t){return function(n,a){if(null==n)return n;if(!r(n))return e(n,a);for(var s=n.length,l=t?s:-1,o=Object(n);(t?l--:++l<s)&&!1!==a(o[l],l,o););return n}}},37285:(e,t,n)=>{var r=n(62705),a=n(35694),s=n(1469),l=r?r.isConcatSpreadable:void 0;e.exports=function(e){return s(e)||a(e)||!!(l&&e&&e[l])}},94654:(e,t,n)=>{var r=n(21078),a=n(35161);e.exports=function(e,t){return r(a(e,t),1)}},35161:(e,t,n)=>{var r=n(29932),a=n(67206),s=n(69199),l=n(1469);e.exports=function(e,t){return(l(e)?r:s)(e,a(t,3))}},10108:()=>{}}]);