"use strict";(self.webpackChunkros_frontend=self.webpackChunkros_frontend||[]).push([[843],{9947:(e,t,n)=>{n.d(t,{I:()=>a,u:()=>r});var a,c=n(21988),i=n(1427),o=n(38296),l=n(3487);!function(e){e.xs="xs",e.small="small",e.large="large",e.xl="xl",e.full="full"}(a||(a={}));const r=e=>{var{children:t,className:n="",variant:r=a.full,isFullHeight:s}=e,m=(0,c.__rest)(e,["children","className","variant","isFullHeight"]);return i.createElement("div",Object.assign({className:(0,o.css)(l.default.emptyState,"xs"===r&&l.default.modifiers.xs,"small"===r&&l.default.modifiers.sm,"large"===r&&l.default.modifiers.lg,"xl"===r&&l.default.modifiers.xl,s&&l.default.modifiers.fullHeight,n)},m),i.createElement("div",{className:(0,o.css)(l.default.emptyStateContent)},t))};r.displayName="EmptyState"},75106:(e,t,n)=>{n.d(t,{B:()=>l});var a=n(21988),c=n(1427),i=n(38296),o=n(3487);const l=e=>{var{children:t,className:n=""}=e,l=(0,a.__rest)(e,["children","className"]);return c.createElement("div",Object.assign({className:(0,i.css)(o.default.emptyStateBody,n)},l),t)};l.displayName="EmptyStateBody"},38424:(e,t,n)=>{n.d(t,{k:()=>l});var a=n(21988),c=n(1427),i=n(38296),o=n(3487);const l=e=>{var{className:t="",icon:n,component:l,variant:r="icon"}=e,s=(0,a.__rest)(e,["className","icon","component","variant"]);const m=(0,i.css)(o.default.emptyStateIcon,t);return"icon"===r?c.createElement(n,Object.assign({className:m},s,{"aria-hidden":"true"})):c.createElement("div",{className:m},c.createElement(l,null))};l.displayName="EmptyStateIcon"},60485:(e,t,n)=>{n.d(t,{H:()=>a,D:()=>m});var a,c,i=n(21988),o=n(1427),l=n(38296),r=n(73755),s=n(62472);!function(e){e.md="md",e.lg="lg",e.xl="xl",e["2xl"]="2xl",e["3xl"]="3xl",e["4xl"]="4xl"}(a||(a={})),function(e){e.h1="2xl",e.h2="xl",e.h3="lg",e.h4="md",e.h5="md",e.h6="md"}(c||(c={}));const m=e=>{var{className:t="",children:n="",headingLevel:a,size:d=c[a],ouiaId:f,ouiaSafe:p=!0}=e,u=(0,i.__rest)(e,["className","children","headingLevel","size","ouiaId","ouiaSafe"]);const h=(0,s.S$)(m.displayName,f,p);return o.createElement(a,Object.assign({},h,u,{className:(0,l.css)(r.default.title,d&&r.default.modifiers[d],t)}),n)};m.displayName="Title"},52643:(e,t,n)=>{n.d(t,{b:()=>l});var a=n(21988),c=n(1427),i=n(38296),o=n(25687);const l=e=>{var{children:t=null,className:n="",component:l="div"}=e,r=(0,a.__rest)(e,["children","className","component"]);const s=l;return c.createElement(s,Object.assign({className:(0,i.css)(o.default.bullseye,n)},r),t)};l.displayName="Bullseye"},49099:(e,t,n)=>{t.o=void 0;const a=n(21988),c=a.__importStar(n(1427)),i=n(38296),o=a.__importDefault(n(16975)),l=n(23053),r=e=>{const t="--pf-c-description-list--GridTemplateColumns--min",n=e;return Object.keys(n||{}).reduce(((e,a)=>"default"===a?Object.assign(Object.assign({},e),{[t]:n[a]}):Object.assign(Object.assign({},e),{[`${t}-on-${a}`]:n[a]})),{})};t.o=e=>{var{className:t="",children:n=null,isHorizontal:s=!1,isAutoColumnWidths:m,isAutoFit:d,isInlineGrid:f,isCompact:p,isFluid:u,isFillColumns:h,columnModifier:g,autoFitMinModifier:C,orientation:v,style:O}=e,y=a.__rest(e,["className","children","isHorizontal","isAutoColumnWidths","isAutoFit","isInlineGrid","isCompact","isFluid","isFillColumns","columnModifier","autoFitMinModifier","orientation","style"]);return c.createElement("dl",Object.assign({className:i.css(o.default.descriptionList,(s||u)&&o.default.modifiers.horizontal,m&&o.default.modifiers.autoColumnWidths,d&&o.default.modifiers.autoFit,l.formatBreakpointMods(g,o.default),l.formatBreakpointMods(v,o.default),f&&o.default.modifiers.inlineGrid,p&&o.default.modifiers.compact,u&&o.default.modifiers.fluid,h&&o.default.modifiers.fillColumns,t),style:C||O?Object.assign(Object.assign({},d?r(C):{}),O):void 0},y),n)},t.o.displayName="DescriptionList"},91845:(e,t,n)=>{t.b=void 0;const a=n(21988),c=a.__importStar(n(1427)),i=a.__importDefault(n(16975)),o=n(38296);t.b=e=>{var{children:t=null,className:n}=e,l=a.__rest(e,["children","className"]);return c.createElement("dd",Object.assign({className:o.css(i.default.descriptionListDescription,n)},l),c.createElement("div",{className:"pf-c-description-list__text"},t))},t.b.displayName="DescriptionListDescription"},698:(e,t,n)=>{t.g=void 0;const a=n(21988),c=a.__importStar(n(1427)),i=a.__importDefault(n(16975)),o=n(38296);t.g=e=>{var{className:t,children:n}=e,l=a.__rest(e,["className","children"]);return c.createElement("div",Object.assign({className:o.css(i.default.descriptionListGroup,t)},l),n)},t.g.displayName="DescriptionListGroup"},90446:(e,t,n)=>{t.M=void 0;const a=n(21988),c=a.__importStar(n(1427)),i=a.__importDefault(n(16975)),o=n(38296);t.M=e=>{var{children:t,className:n}=e,l=a.__rest(e,["children","className"]);return c.createElement("dt",Object.assign({className:o.css(i.default.descriptionListTerm,n)},l),c.createElement("span",{className:o.css(i.default.descriptionListText)},t))},t.M.displayName="DescriptionListTerm"},5381:(e,t,n)=>{t.MA={name:"AngleDoubleDownIcon",height:512,width:320,svgPath:"M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z",yOffset:0,xOffset:0},t.II=n(35183).createIcon(t.MA),t.ZP=t.II},2293:(e,t,n)=>{t.zN={name:"AngleDoubleUpIcon",height:512,width:320,svgPath:"M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z",yOffset:0,xOffset:0},t.DW=n(35183).createIcon(t.zN),t.ZP=t.DW},82727:(e,t,n)=>{t.hh={name:"AutomationIcon",height:1024,width:1024,svgPath:"M768,256 L768,257.4 C765.102556,256.827424 762.153196,256.559301 759.2,256.6 C705.189545,255.686899 652.247869,271.702281 607.8,302.4 C591.952568,312.712568 582.951533,330.814358 584.293158,349.674109 C585.634783,368.53386 597.107623,385.179201 614.255294,393.144598 C631.402965,401.109995 651.522926,399.14007 666.8,388 C693.450143,369.582634 725.210685,359.998506 757.6,360.6 C761.083449,360.639748 764.563612,360.372043 768,359.8 L768,360.2 C851.8,360.2 920,428.4 920,512.1 C919.932562,571.254743 885.622089,625.020813 832,650 L832,760.2 C942.4,731.8 1024,631.6 1024,512.3 C1024,370.6 909.4,256 768,256 M746.6,452 C731.4,445.8 718.4,448.4 707.8,459.8 L635.2,531.8 L619.2,547.8 L367.6,292.9 C329,260.9 304.6,256 256,256 C114.6,256 0,371.5 0,512.8 C0,654.1 114.6,768 256,768 C304,768 344.2,750.9 380,722.9 L379.4,722.5 L384.8,718.9 C400.216562,708.213968 408.692351,690.060567 406.986867,671.380284 C405.281384,652.700001 393.658366,636.381592 376.561578,628.663984 C359.46479,620.946375 339.538112,623.023033 324.4,634.1 C301.295896,650.587389 274.106741,660.41146 245.8,662.5 C163.2,661.4 104,595.8 104,512.8 C104,430.4 165.8,363.3 247.6,360.9 L252.2,360.9 C253,361.1 253.8,360.9 254.4,361.1 L254.8,361.1 C269.4,360.9 292.6,366.3 312.6,382.3 L546.6,620.6 L458.8,708.4 C447.4,719.6 444.8,732.2 451,746.8 C457.2,761.6 468.2,768 483.8,768 L732.6,768 C742.2,768 750.6,765.4 757.6,758.4 C764.417003,751.876224 768.25027,742.835499 768.200488,733.4 L768.200488,484.8 C768.200488,469.2 761,458.2 746.6,452",yOffset:0,xOffset:0},t.ZK=n(35183).createIcon(t.hh),t.ZP=t.ZK},35451:(e,t,n)=>{t.__esModule=!0,t.CheckCircleIconConfig={name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0},t.CheckCircleIcon=n(35183).createIcon(t.CheckCircleIconConfig),t.default=t.CheckCircleIcon},84564:(e,t,n)=>{t.MX={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},t.$O=n(35183).createIcon(t.MX),t.ZP=t.$O},19694:(e,t,n)=>{t.__esModule=!0,t.ExclamationTriangleIconConfig={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},t.ExclamationTriangleIcon=n(35183).createIcon(t.ExclamationTriangleIconConfig),t.default=t.ExclamationTriangleIcon},18802:(e,t,n)=>{t.Y3={name:"InProgressIcon",height:1024,width:1024,svgPath:"M513.417211,16.013668 L513.417211,112.013668 C513.406007,120.539653 520.082422,127.576718 528.597211,128.013668 C732.697211,136.513668 896.147211,305.013668 896.147211,511.343668 C896.147211,723.013668 724.007211,895.163668 512.417211,895.163668 C437.186239,895.277345 363.602574,873.135095 300.927211,831.523668 C294.58293,827.2982 286.138663,828.135095 280.747211,833.523668 L211.807211,902.353668 C208.502935,905.676185 206.82123,910.280199 207.20607,914.950237 C207.590911,919.620275 210.00361,923.886884 213.807211,926.623668 C300.709573,989.398037 405.213535,1023.13146 512.417211,1023.01398 C794.537211,1023.01398 1023.91724,793.433668 1023.91724,511.413668 C1024.00721,235.103668 804.007211,9.22366802 529.897211,0.00645736761 C525.571205,-0.116171039 521.377128,1.51204372 518.271915,4.52681369 C515.166702,7.54158367 513.415263,11.6857144 513.417211,16.013668 M97.1272107,212.923668 C64.2190689,258.479443 39.0698895,309.162997 22.6972107,362.923668 C21.2705092,367.756559 22.2039184,372.979173 25.2163356,377.018685 C28.2287528,381.058197 32.9681443,383.442545 38.0072107,383.453683 L139.407211,383.453683 C145.970195,383.46249 151.873012,379.462528 154.297211,373.363668 C164.307669,347.593304 177.068112,322.977652 192.357211,299.943668 C196.579666,293.633658 195.741339,285.216847 190.357211,279.863668 L121.497211,211.013668 C118.186635,207.662531 113.567544,205.940538 108.871166,206.30669 C104.174788,206.672841 99.8783994,209.089927 97.1272107,212.913668 M112.907211,511.433663 L17.0072107,511.433663 C12.679257,511.433663 8.5351263,513.183159 5.52035633,516.288373 C2.50558635,519.393586 0.877371594,523.587662 1.00721065,527.913668 C4.13104542,629.408217 37.6085847,727.635936 97.1172107,809.913668 C99.8539943,813.717268 104.120603,816.129968 108.790642,816.514809 C113.46068,816.899649 118.064693,815.217944 121.387211,811.913668 L190.217211,743.073668 C195.605784,737.682216 196.442679,729.237949 192.217211,722.893668 C153.520825,664.580171 131.611534,596.745437 128.887211,526.813668 C128.553964,518.220138 121.487197,511.427209 112.887211,511.433663",yOffset:0,xOffset:0},t.pG=n(35183).createIcon(t.Y3),t.ZP=t.pG},58773:(e,t,n)=>{t.wP={name:"TachometerAltIcon",height:512,width:576,svgPath:"M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z",yOffset:0,xOffset:0},t.Le=n(35183).createIcon(t.wP),t.ZP=t.Le},16975:(e,t,n)=>{t.__esModule=!0,n(27567),t.default={descriptionList:"pf-c-description-list",descriptionListDescription:"pf-c-description-list__description",descriptionListGroup:"pf-c-description-list__group",descriptionListTerm:"pf-c-description-list__term",descriptionListTermIcon:"pf-c-description-list__term-icon",descriptionListText:"pf-c-description-list__text",modifiers:{inlineGrid:"pf-m-inline-grid",autoColumnWidths:"pf-m-auto-column-widths",autoFit:"pf-m-auto-fit",compact:"pf-m-compact",fluid:"pf-m-fluid",fillColumns:"pf-m-fill-columns",helpText:"pf-m-help-text","1Col":"pf-m-1-col","2Col":"pf-m-2-col","3Col":"pf-m-3-col",horizontal:"pf-m-horizontal",vertical:"pf-m-vertical","1ColOnSm":"pf-m-1-col-on-sm","2ColOnSm":"pf-m-2-col-on-sm","3ColOnSm":"pf-m-3-col-on-sm",horizontalOnSm:"pf-m-horizontal-on-sm",verticalOnSm:"pf-m-vertical-on-sm","1ColOnMd":"pf-m-1-col-on-md","2ColOnMd":"pf-m-2-col-on-md","3ColOnMd":"pf-m-3-col-on-md",horizontalOnMd:"pf-m-horizontal-on-md",verticalOnMd:"pf-m-vertical-on-md","1ColOnLg":"pf-m-1-col-on-lg","2ColOnLg":"pf-m-2-col-on-lg","3ColOnLg":"pf-m-3-col-on-lg",horizontalOnLg:"pf-m-horizontal-on-lg",verticalOnLg:"pf-m-vertical-on-lg","1ColOnXl":"pf-m-1-col-on-xl","2ColOnXl":"pf-m-2-col-on-xl","3ColOnXl":"pf-m-3-col-on-xl",horizontalOnXl:"pf-m-horizontal-on-xl",verticalOnXl:"pf-m-vertical-on-xl","1ColOn_2xl":"pf-m-1-col-on-2xl","2ColOn_2xl":"pf-m-2-col-on-2xl","3ColOn_2xl":"pf-m-3-col-on-2xl",horizontalOn_2xl:"pf-m-horizontal-on-2xl",verticalOn_2xl:"pf-m-vertical-on-2xl"}}},72466:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(1427);const c=n.n(a)().createContext("light")},39591:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(6479),c=n.n(a),i=n(1427),o=n.n(i),l=n(45697),r=function(e){var t=e.component,n=c()(e,["component"]);return(0,i.useEffect)((function(){console.error("Unable to load inventory component. Failed to load ".concat(t,"."),n)}),[]),o().createElement("div",null,o().createElement("h1",null,"Unable to load inventory component"),o().createElement("h2",null,"Failed to load ",t),o().createElement("code",null,"More info can be found in browser console output."))};r.propTypes={component:n.n(l)().string};const s=r},86350:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67154),c=n.n(a),i=n(6479),o=n.n(i),l=n(319),r=n.n(l),s=n(59713),m=n.n(s),d=n(34575),f=n.n(d),p=n(93913),u=n.n(p),h=n(2205),g=n.n(h),C=n(78585),v=n.n(C),O=n(29754),y=n.n(O),_=n(1427),x=n.n(_),L=n(45697),N=n.n(L),b=n(94184),z=n.n(b),E=n(2983),I=n(72466);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){m()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(e){g()(i,e);var t,n,a=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=y()(t);if(n){var c=y()(this).constructor;e=Reflect.construct(a,arguments,c)}else e=a.apply(this,arguments);return v()(this,e)});function i(){return f()(this,i),a.apply(this,arguments)}return u()(i,[{key:"calculateLocation",value:function(){var e=this.props,t=e.path,n=e.params;if(insights&&insights.chrome&&insights.chrome.$internal&&insights.chrome.$internal.store){var a=insights.chrome.$internal.store.getState();if(t&&a)return t.split("/").reduce((function(e,t){return 0===t.indexOf(":")?e.dynamic=M(M({},e.dynamic),{},m()({},"data-".concat(t.substr(1).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()),n[t.substr(1)])):e.staticPart=[].concat(r()(e.staticPart),r()(""!==t?[t]:[])),e}),{staticPart:[a.chrome.appId],dynamic:{}})}return{staticPart:[]}}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,a=(e.params,e.path,o()(e,["className","children","params","path"])),i=this.calculateLocation(),l=i.dynamic,r=i.staticPart;return x().createElement(I.Z.Consumer,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",i=z()(m()({},"pf-m-".concat(e),"dark"===e));return{dark:x().createElement("section",c()({},a,l,{"page-type":r.join("-"),className:"".concat(z()(t,"pf-l-page__main-section pf-c-page__main-section")," ").concat(i)}),x().Children.map(n,(function(e){return x().cloneElement(e,{className:"pf-m-dark"})}))),light:x().createElement("section",c()({},a,l,{"page-type":r.join("-"),className:"".concat(z()(t,"pf-l-page__main-section pf-c-page__main-section"))}),n)}[e]}))}}]),i}(_.Component);j.propTypes={className:N().string,children:N().any.isRequired,params:N().any,path:N().string};const w=(0,E.$j)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))(j)},56067:(e,t,n)=>{n.d(t,{Z:()=>O});var a=n(67154),c=n.n(a),i=n(6479),o=n.n(i),l=n(1427),r=n.n(l),s=n(45697),m=n.n(s),d=n(60485),f=n(47173),p=n(9947),u=n(38424),h=n(75106);const g=(0,n(40400).IU)({name:"LockIcon",height:512,width:448,svgPath:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",yOffset:0,xOffset:0});var C=function(){return r().createElement(r().Fragment,null,"Contact your organization administrator(s) for more information or visit ",r().createElement("a",{href:"./settings/my-user-access"},"My User Access"),"  to learn more about your permissions.")},v=function(e){var t=e.prevPageButtonText,n=e.toLandingPageText,a=e.title,i=e.actions,l=e.serviceName,s=e.icon,m=e.description,g=e.showReturnButton,C=e.className,v=o()(e,["prevPageButtonText","toLandingPageText","title","actions","serviceName","icon","description","showReturnButton","className"]),O=a||"You do not have access to ".concat(l);return r().createElement(p.u,c()({variant:p.I.full,className:"ins-c-not-authorized ".concat(C||"")},v),r().createElement(u.k,{icon:s}),r().createElement(d.D,{headingLevel:"h5",size:"lg"},O),r().createElement(h.B,null,m),i,g&&(document.referrer?r().createElement(f.zx,{variant:"primary",onClick:function(){return history.back()}},t):r().createElement(f.zx,{variant:"primary",component:"a",href:"."},n)))};v.propTypes={serviceName:function(e,t,n){if(void 0===e.title){for(var a,c=arguments.length,i=new Array(c>3?c-3:0),o=3;o<c;o++)i[o-3]=arguments[o];return(a=m().node).isRequired.apply(a,[e,t,n].concat(i))}},icon:m().func,description:m().node,showReturnButton:m().bool,className:m().string,title:m().node,actions:m().oneOfType([m().node,m().arrayOf(m().node)]),prevPageButtonText:m().node,toLandingPageText:m().node},v.defaultProps={icon:g,showReturnButton:!0,description:r().createElement(C,null),actions:null,prevPageButtonText:"Return to previous page",toLandingPageText:"Go to landing page"};const O=v},48716:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(67154),c=n.n(a),i=n(59713),o=n.n(i),l=n(6479),r=n.n(l),s=n(1427),m=n.n(s),d=n(45697),f=n.n(d),p=n(94184),u=n.n(p),h=n(72466),g=function(e){var t=e.className,n=e.children,a=r()(e,["className","children"]),i=u()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return m().createElement(h.Z.Consumer,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",t=u()(o()({},"pf-m-".concat(e,"-200"),"dark"===e),o()({},"pf-m-light","light"===e));return m().createElement("section",c()({},a,{className:"".concat(i," ").concat(t),"widget-type":"InsightsPageHeader"}),n)}))};const C=g;g.propTypes={children:f().any.isRequired,className:f().string}}}]);