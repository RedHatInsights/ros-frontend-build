(self.webpackChunkros_frontend=self.webpackChunkros_frontend||[]).push([[798],{85991:(o,e,l)=>{"use strict";e.a=void 0;const n=l(21988),t=n.__importStar(l(1427)),r=n.__importDefault(l(74652)),f=l(38296),s=l(23053);e.a=o=>{var{children:l=null,className:a="","aria-label":c="Breadcrumb",ouiaId:m,ouiaSafe:i=!0}=o,p=n.__rest(o,["children","className","aria-label","ouiaId","ouiaSafe"]);const d=s.useOUIAProps(e.a.displayName,m,i);return t.createElement("nav",Object.assign({},p,{"aria-label":c,className:f.css(r.default.breadcrumb,a)},d),t.createElement("ol",{className:r.default.breadcrumbList},t.Children.map(l,((o,e)=>{const l=e>0;return t.isValidElement(o)?t.cloneElement(o,{showDivider:l}):o}))))},e.a.displayName="Breadcrumb"},49489:(o,e,l)=>{"use strict";e.g=void 0;const n=l(21988),t=n.__importStar(l(1427)),r=n.__importDefault(l(95511)),f=n.__importDefault(l(74652)),s=l(38296);e.g=o=>{var{children:e=null,className:l="",to:a,isActive:c=!1,isDropdown:m=!1,showDivider:i,target:p,component:d="a",render:u}=o,O=n.__rest(o,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const _=d,g=c?"page":void 0,C=s.css(f.default.breadcrumbLink,c&&f.default.modifiers.current);return t.createElement("li",Object.assign({},O,{className:s.css(f.default.breadcrumbItem,l)}),i&&t.createElement("span",{className:f.default.breadcrumbItemDivider},t.createElement(r.default,null)),"button"===d&&t.createElement("button",{className:C,"aria-current":g,type:"button"},e),m&&t.createElement("span",{className:s.css(f.default.breadcrumbDropdown)},e),u&&u({className:C,ariaCurrent:g}),a&&!u&&t.createElement(_,{href:a,target:p,className:C,"aria-current":g},e),!a&&"button"!==d&&!m&&e)},e.g.displayName="BreadcrumbItem"},49287:(o,e,l)=>{"use strict";e.r=void 0;const n=l(21988),t=n.__importStar(l(1427)),r=n.__importDefault(l(17067)),f=l(38296),s=l(39383),a=n.__importStar(l(24936)),c=l(42319);e.r=o=>{var{children:e=null,className:l="",component:m="div",hasGutter:i,span:p=null,order:d,style:u}=o,O=n.__rest(o,["children","className","component","hasGutter","span","order","style"]);const _=[r.default.grid,p&&r.default.modifiers[`all_${p}Col`]],g=m;return Object.entries(s.DeviceSizes).forEach((([o,e])=>{const l=o,n=O[l];n&&_.push(r.default.modifiers[`all_${n}ColOn${e}`]),delete O[l]})),t.createElement(g,Object.assign({className:f.css(..._,i&&r.default.modifiers.gutter,l),style:u||d?Object.assign(Object.assign({},u),c.setBreakpointCssVars(d,a.l_grid_item_Order.name)):void 0},O),e)},e.r.displayName="Grid"},18038:(o,e,l)=>{"use strict";e.P=void 0;const n=l(21988),t=n.__importStar(l(1427)),r=n.__importDefault(l(17067)),f=l(38296),s=l(39383),a=n.__importStar(l(24936)),c=l(42319);e.P=o=>{var{children:e=null,className:l="",component:m="div",span:i=null,rowSpan:p=null,offset:d=null,order:u,style:O}=o,_=n.__rest(o,["children","className","component","span","rowSpan","offset","order","style"]);const g=[r.default.gridItem,i&&r.default.modifiers[`${i}Col`],p&&r.default.modifiers[`${p}Row`],d&&r.default.modifiers[`offset_${d}Col`]],C=m;return Object.entries(s.DeviceSizes).forEach((([o,e])=>{const l=o,n=`${l}RowSpan`,t=`${l}Offset`,f=_[l],s=_[n],a=_[t];f&&g.push(r.default.modifiers[`${f}ColOn${e}`]),s&&g.push(r.default.modifiers[`${s}RowOn${e}`]),a&&g.push(r.default.modifiers[`offset_${a}ColOn${e}`]),delete _[l],delete _[n],delete _[t]})),t.createElement(C,Object.assign({className:f.css(...g,l),style:O||u?Object.assign(Object.assign({},O),c.setBreakpointCssVars(u,a.l_grid_item_Order.name)):void 0},_),e)},e.P.displayName="GridItem"},39383:(o,e)=>{"use strict";var l,n;Object.defineProperty(e,"__esModule",{value:!0}),e.DeviceSizes=e.BaseSizes=void 0,(n=e.BaseSizes||(e.BaseSizes={})).xs="xs",n.sm="sm",n.md="md",n.lg="lg",n.xl="xl",n["2xl"]="2xl",n["3xl"]="3xl",n["4xl"]="4xl",(l=e.DeviceSizes||(e.DeviceSizes={})).sm="Sm",l.md="Md",l.lg="Lg",l.xl="Xl",l.xl2="_2xl"},95511:(o,e,l)=>{"use strict";e.__esModule=!0,e.AngleRightIconConfig={name:"AngleRightIcon",height:512,width:256,svgPath:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",yOffset:0,xOffset:0},e.AngleRightIcon=l(35183).createIcon(e.AngleRightIconConfig),e.default=e.AngleRightIcon},49580:(o,e,l)=>{"use strict";e.uR={name:"OutlinedThumbsDownIcon",height:512,width:512,svgPath:"M466.27 225.31c4.674-22.647.864-44.538-8.99-62.99 2.958-23.868-4.021-48.565-17.34-66.99C438.986 39.423 404.117 0 327 0c-7 0-15 .01-22.22.01C201.195.01 168.997 40 128 40h-10.845c-5.64-4.975-13.042-8-21.155-8H32C14.327 32 0 46.327 0 64v240c0 17.673 14.327 32 32 32h64c11.842 0 22.175-6.438 27.708-16h7.052c19.146 16.953 46.013 60.653 68.76 83.4 13.667 13.667 10.153 108.6 71.76 108.6 57.58 0 95.27-31.936 95.27-104.73 0-18.41-3.93-33.73-8.85-46.54h36.48c48.602 0 85.82-41.565 85.82-85.58 0-19.15-4.96-34.99-13.73-49.84zM64 296c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm330.18 16.73H290.19c0 37.82 28.36 55.37 28.36 94.54 0 23.75 0 56.73-47.27 56.73-18.91-18.91-9.46-66.18-37.82-94.54C206.9 342.89 167.28 272 138.92 272H128V85.83c53.611 0 100.001-37.82 171.64-37.82h37.82c35.512 0 60.82 17.12 53.12 65.9 15.2 8.16 26.5 36.44 13.94 57.57 21.581 20.384 18.699 51.065 5.21 65.62 9.45 0 22.36 18.91 22.27 37.81-.09 18.91-16.71 37.82-37.82 37.82z",yOffset:0,xOffset:0},e.rq=l(35183).createIcon(e.uR),e.ZP=e.rq},11239:(o,e,l)=>{"use strict";e.UO={name:"OutlinedThumbsUpIcon",height:512,width:512,svgPath:"M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z",yOffset:0,xOffset:0},e.de=l(35183).createIcon(e.UO),e.ZP=e.de},90502:(o,e,l)=>{"use strict";e.ur={name:"ThumbsDownIcon",height:512,width:512,svgPath:"M0 56v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56zm40 200c0-13.255 10.745-24 24-24s24 10.745 24 24-10.745 24-24 24-24-10.745-24-24zm272 256c-20.183 0-29.485-39.293-33.931-57.795-5.206-21.666-10.589-44.07-25.393-58.902-32.469-32.524-49.503-73.967-89.117-113.111a11.98 11.98 0 0 1-3.558-8.521V59.901c0-6.541 5.243-11.878 11.783-11.998 15.831-.29 36.694-9.079 52.651-16.178C256.189 17.598 295.709.017 343.995 0h2.844c42.777 0 93.363.413 113.774 29.737 8.392 12.057 10.446 27.034 6.148 44.632 16.312 17.053 25.063 48.863 16.382 74.757 17.544 23.432 19.143 56.132 9.308 79.469l.11.11c11.893 11.949 19.523 31.259 19.439 49.197-.156 30.352-26.157 58.098-59.553 58.098H350.723C358.03 364.34 384 388.132 384 430.548 384 504 336 512 312 512z",yOffset:0,xOffset:0},e.kZ=l(35183).createIcon(e.ur),e.ZP=e.kZ},61088:(o,e,l)=>{"use strict";e._q={name:"ThumbsUpIcon",height:512,width:512,svgPath:"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z",yOffset:0,xOffset:0},e.lb=l(35183).createIcon(e._q),e.ZP=e.lb},74652:(o,e,l)=>{"use strict";e.__esModule=!0,l(58392),e.default={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"}}},17067:(o,e,l)=>{"use strict";e.__esModule=!0,l(72816),e.default={grid:"pf-l-grid",gridItem:"pf-l-grid__item",modifiers:{all_1Col:"pf-m-all-1-col",all_2Col:"pf-m-all-2-col",all_3Col:"pf-m-all-3-col",all_4Col:"pf-m-all-4-col",all_5Col:"pf-m-all-5-col",all_6Col:"pf-m-all-6-col",all_7Col:"pf-m-all-7-col",all_8Col:"pf-m-all-8-col",all_9Col:"pf-m-all-9-col",all_10Col:"pf-m-all-10-col",all_11Col:"pf-m-all-11-col",all_12Col:"pf-m-all-12-col",all_1ColOnSm:"pf-m-all-1-col-on-sm",all_2ColOnSm:"pf-m-all-2-col-on-sm",all_3ColOnSm:"pf-m-all-3-col-on-sm",all_4ColOnSm:"pf-m-all-4-col-on-sm",all_5ColOnSm:"pf-m-all-5-col-on-sm",all_6ColOnSm:"pf-m-all-6-col-on-sm",all_7ColOnSm:"pf-m-all-7-col-on-sm",all_8ColOnSm:"pf-m-all-8-col-on-sm",all_9ColOnSm:"pf-m-all-9-col-on-sm",all_10ColOnSm:"pf-m-all-10-col-on-sm",all_11ColOnSm:"pf-m-all-11-col-on-sm",all_12ColOnSm:"pf-m-all-12-col-on-sm",all_1ColOnMd:"pf-m-all-1-col-on-md",all_2ColOnMd:"pf-m-all-2-col-on-md",all_3ColOnMd:"pf-m-all-3-col-on-md",all_4ColOnMd:"pf-m-all-4-col-on-md",all_5ColOnMd:"pf-m-all-5-col-on-md",all_6ColOnMd:"pf-m-all-6-col-on-md",all_7ColOnMd:"pf-m-all-7-col-on-md",all_8ColOnMd:"pf-m-all-8-col-on-md",all_9ColOnMd:"pf-m-all-9-col-on-md",all_10ColOnMd:"pf-m-all-10-col-on-md",all_11ColOnMd:"pf-m-all-11-col-on-md",all_12ColOnMd:"pf-m-all-12-col-on-md",all_1ColOnLg:"pf-m-all-1-col-on-lg",all_2ColOnLg:"pf-m-all-2-col-on-lg",all_3ColOnLg:"pf-m-all-3-col-on-lg",all_4ColOnLg:"pf-m-all-4-col-on-lg",all_5ColOnLg:"pf-m-all-5-col-on-lg",all_6ColOnLg:"pf-m-all-6-col-on-lg",all_7ColOnLg:"pf-m-all-7-col-on-lg",all_8ColOnLg:"pf-m-all-8-col-on-lg",all_9ColOnLg:"pf-m-all-9-col-on-lg",all_10ColOnLg:"pf-m-all-10-col-on-lg",all_11ColOnLg:"pf-m-all-11-col-on-lg",all_12ColOnLg:"pf-m-all-12-col-on-lg",all_1ColOnXl:"pf-m-all-1-col-on-xl",all_2ColOnXl:"pf-m-all-2-col-on-xl",all_3ColOnXl:"pf-m-all-3-col-on-xl",all_4ColOnXl:"pf-m-all-4-col-on-xl",all_5ColOnXl:"pf-m-all-5-col-on-xl",all_6ColOnXl:"pf-m-all-6-col-on-xl",all_7ColOnXl:"pf-m-all-7-col-on-xl",all_8ColOnXl:"pf-m-all-8-col-on-xl",all_9ColOnXl:"pf-m-all-9-col-on-xl",all_10ColOnXl:"pf-m-all-10-col-on-xl",all_11ColOnXl:"pf-m-all-11-col-on-xl",all_12ColOnXl:"pf-m-all-12-col-on-xl",all_1ColOn_2xl:"pf-m-all-1-col-on-2xl",all_2ColOn_2xl:"pf-m-all-2-col-on-2xl",all_3ColOn_2xl:"pf-m-all-3-col-on-2xl",all_4ColOn_2xl:"pf-m-all-4-col-on-2xl",all_5ColOn_2xl:"pf-m-all-5-col-on-2xl",all_6ColOn_2xl:"pf-m-all-6-col-on-2xl",all_7ColOn_2xl:"pf-m-all-7-col-on-2xl",all_8ColOn_2xl:"pf-m-all-8-col-on-2xl",all_9ColOn_2xl:"pf-m-all-9-col-on-2xl",all_10ColOn_2xl:"pf-m-all-10-col-on-2xl",all_11ColOn_2xl:"pf-m-all-11-col-on-2xl",all_12ColOn_2xl:"pf-m-all-12-col-on-2xl","1Col":"pf-m-1-col","2Col":"pf-m-2-col","3Col":"pf-m-3-col","4Col":"pf-m-4-col","5Col":"pf-m-5-col","6Col":"pf-m-6-col","7Col":"pf-m-7-col","8Col":"pf-m-8-col","9Col":"pf-m-9-col","10Col":"pf-m-10-col","11Col":"pf-m-11-col","12Col":"pf-m-12-col",offset_1Col:"pf-m-offset-1-col",offset_2Col:"pf-m-offset-2-col",offset_3Col:"pf-m-offset-3-col",offset_4Col:"pf-m-offset-4-col",offset_5Col:"pf-m-offset-5-col",offset_6Col:"pf-m-offset-6-col",offset_7Col:"pf-m-offset-7-col",offset_8Col:"pf-m-offset-8-col",offset_9Col:"pf-m-offset-9-col",offset_10Col:"pf-m-offset-10-col",offset_11Col:"pf-m-offset-11-col",offset_12Col:"pf-m-offset-12-col","1Row":"pf-m-1-row","2Row":"pf-m-2-row","3Row":"pf-m-3-row","4Row":"pf-m-4-row","5Row":"pf-m-5-row","6Row":"pf-m-6-row","7Row":"pf-m-7-row","8Row":"pf-m-8-row","9Row":"pf-m-9-row","10Row":"pf-m-10-row","11Row":"pf-m-11-row","12Row":"pf-m-12-row","1ColOnSm":"pf-m-1-col-on-sm","2ColOnSm":"pf-m-2-col-on-sm","3ColOnSm":"pf-m-3-col-on-sm","4ColOnSm":"pf-m-4-col-on-sm","5ColOnSm":"pf-m-5-col-on-sm","6ColOnSm":"pf-m-6-col-on-sm","7ColOnSm":"pf-m-7-col-on-sm","8ColOnSm":"pf-m-8-col-on-sm","9ColOnSm":"pf-m-9-col-on-sm","10ColOnSm":"pf-m-10-col-on-sm","11ColOnSm":"pf-m-11-col-on-sm","12ColOnSm":"pf-m-12-col-on-sm",offset_1ColOnSm:"pf-m-offset-1-col-on-sm",offset_2ColOnSm:"pf-m-offset-2-col-on-sm",offset_3ColOnSm:"pf-m-offset-3-col-on-sm",offset_4ColOnSm:"pf-m-offset-4-col-on-sm",offset_5ColOnSm:"pf-m-offset-5-col-on-sm",offset_6ColOnSm:"pf-m-offset-6-col-on-sm",offset_7ColOnSm:"pf-m-offset-7-col-on-sm",offset_8ColOnSm:"pf-m-offset-8-col-on-sm",offset_9ColOnSm:"pf-m-offset-9-col-on-sm",offset_10ColOnSm:"pf-m-offset-10-col-on-sm",offset_11ColOnSm:"pf-m-offset-11-col-on-sm",offset_12ColOnSm:"pf-m-offset-12-col-on-sm","1RowOnSm":"pf-m-1-row-on-sm","2RowOnSm":"pf-m-2-row-on-sm","3RowOnSm":"pf-m-3-row-on-sm","4RowOnSm":"pf-m-4-row-on-sm","5RowOnSm":"pf-m-5-row-on-sm","6RowOnSm":"pf-m-6-row-on-sm","7RowOnSm":"pf-m-7-row-on-sm","8RowOnSm":"pf-m-8-row-on-sm","9RowOnSm":"pf-m-9-row-on-sm","10RowOnSm":"pf-m-10-row-on-sm","11RowOnSm":"pf-m-11-row-on-sm","12RowOnSm":"pf-m-12-row-on-sm","1ColOnMd":"pf-m-1-col-on-md","2ColOnMd":"pf-m-2-col-on-md","3ColOnMd":"pf-m-3-col-on-md","4ColOnMd":"pf-m-4-col-on-md","5ColOnMd":"pf-m-5-col-on-md","6ColOnMd":"pf-m-6-col-on-md","7ColOnMd":"pf-m-7-col-on-md","8ColOnMd":"pf-m-8-col-on-md","9ColOnMd":"pf-m-9-col-on-md","10ColOnMd":"pf-m-10-col-on-md","11ColOnMd":"pf-m-11-col-on-md","12ColOnMd":"pf-m-12-col-on-md",offset_1ColOnMd:"pf-m-offset-1-col-on-md",offset_2ColOnMd:"pf-m-offset-2-col-on-md",offset_3ColOnMd:"pf-m-offset-3-col-on-md",offset_4ColOnMd:"pf-m-offset-4-col-on-md",offset_5ColOnMd:"pf-m-offset-5-col-on-md",offset_6ColOnMd:"pf-m-offset-6-col-on-md",offset_7ColOnMd:"pf-m-offset-7-col-on-md",offset_8ColOnMd:"pf-m-offset-8-col-on-md",offset_9ColOnMd:"pf-m-offset-9-col-on-md",offset_10ColOnMd:"pf-m-offset-10-col-on-md",offset_11ColOnMd:"pf-m-offset-11-col-on-md",offset_12ColOnMd:"pf-m-offset-12-col-on-md","1RowOnMd":"pf-m-1-row-on-md","2RowOnMd":"pf-m-2-row-on-md","3RowOnMd":"pf-m-3-row-on-md","4RowOnMd":"pf-m-4-row-on-md","5RowOnMd":"pf-m-5-row-on-md","6RowOnMd":"pf-m-6-row-on-md","7RowOnMd":"pf-m-7-row-on-md","8RowOnMd":"pf-m-8-row-on-md","9RowOnMd":"pf-m-9-row-on-md","10RowOnMd":"pf-m-10-row-on-md","11RowOnMd":"pf-m-11-row-on-md","12RowOnMd":"pf-m-12-row-on-md","1ColOnLg":"pf-m-1-col-on-lg","2ColOnLg":"pf-m-2-col-on-lg","3ColOnLg":"pf-m-3-col-on-lg","4ColOnLg":"pf-m-4-col-on-lg","5ColOnLg":"pf-m-5-col-on-lg","6ColOnLg":"pf-m-6-col-on-lg","7ColOnLg":"pf-m-7-col-on-lg","8ColOnLg":"pf-m-8-col-on-lg","9ColOnLg":"pf-m-9-col-on-lg","10ColOnLg":"pf-m-10-col-on-lg","11ColOnLg":"pf-m-11-col-on-lg","12ColOnLg":"pf-m-12-col-on-lg",offset_1ColOnLg:"pf-m-offset-1-col-on-lg",offset_2ColOnLg:"pf-m-offset-2-col-on-lg",offset_3ColOnLg:"pf-m-offset-3-col-on-lg",offset_4ColOnLg:"pf-m-offset-4-col-on-lg",offset_5ColOnLg:"pf-m-offset-5-col-on-lg",offset_6ColOnLg:"pf-m-offset-6-col-on-lg",offset_7ColOnLg:"pf-m-offset-7-col-on-lg",offset_8ColOnLg:"pf-m-offset-8-col-on-lg",offset_9ColOnLg:"pf-m-offset-9-col-on-lg",offset_10ColOnLg:"pf-m-offset-10-col-on-lg",offset_11ColOnLg:"pf-m-offset-11-col-on-lg",offset_12ColOnLg:"pf-m-offset-12-col-on-lg","1RowOnLg":"pf-m-1-row-on-lg","2RowOnLg":"pf-m-2-row-on-lg","3RowOnLg":"pf-m-3-row-on-lg","4RowOnLg":"pf-m-4-row-on-lg","5RowOnLg":"pf-m-5-row-on-lg","6RowOnLg":"pf-m-6-row-on-lg","7RowOnLg":"pf-m-7-row-on-lg","8RowOnLg":"pf-m-8-row-on-lg","9RowOnLg":"pf-m-9-row-on-lg","10RowOnLg":"pf-m-10-row-on-lg","11RowOnLg":"pf-m-11-row-on-lg","12RowOnLg":"pf-m-12-row-on-lg","1ColOnXl":"pf-m-1-col-on-xl","2ColOnXl":"pf-m-2-col-on-xl","3ColOnXl":"pf-m-3-col-on-xl","4ColOnXl":"pf-m-4-col-on-xl","5ColOnXl":"pf-m-5-col-on-xl","6ColOnXl":"pf-m-6-col-on-xl","7ColOnXl":"pf-m-7-col-on-xl","8ColOnXl":"pf-m-8-col-on-xl","9ColOnXl":"pf-m-9-col-on-xl","10ColOnXl":"pf-m-10-col-on-xl","11ColOnXl":"pf-m-11-col-on-xl","12ColOnXl":"pf-m-12-col-on-xl",offset_1ColOnXl:"pf-m-offset-1-col-on-xl",offset_2ColOnXl:"pf-m-offset-2-col-on-xl",offset_3ColOnXl:"pf-m-offset-3-col-on-xl",offset_4ColOnXl:"pf-m-offset-4-col-on-xl",offset_5ColOnXl:"pf-m-offset-5-col-on-xl",offset_6ColOnXl:"pf-m-offset-6-col-on-xl",offset_7ColOnXl:"pf-m-offset-7-col-on-xl",offset_8ColOnXl:"pf-m-offset-8-col-on-xl",offset_9ColOnXl:"pf-m-offset-9-col-on-xl",offset_10ColOnXl:"pf-m-offset-10-col-on-xl",offset_11ColOnXl:"pf-m-offset-11-col-on-xl",offset_12ColOnXl:"pf-m-offset-12-col-on-xl","1RowOnXl":"pf-m-1-row-on-xl","2RowOnXl":"pf-m-2-row-on-xl","3RowOnXl":"pf-m-3-row-on-xl","4RowOnXl":"pf-m-4-row-on-xl","5RowOnXl":"pf-m-5-row-on-xl","6RowOnXl":"pf-m-6-row-on-xl","7RowOnXl":"pf-m-7-row-on-xl","8RowOnXl":"pf-m-8-row-on-xl","9RowOnXl":"pf-m-9-row-on-xl","10RowOnXl":"pf-m-10-row-on-xl","11RowOnXl":"pf-m-11-row-on-xl","12RowOnXl":"pf-m-12-row-on-xl","1ColOn_2xl":"pf-m-1-col-on-2xl","2ColOn_2xl":"pf-m-2-col-on-2xl","3ColOn_2xl":"pf-m-3-col-on-2xl","4ColOn_2xl":"pf-m-4-col-on-2xl","5ColOn_2xl":"pf-m-5-col-on-2xl","6ColOn_2xl":"pf-m-6-col-on-2xl","7ColOn_2xl":"pf-m-7-col-on-2xl","8ColOn_2xl":"pf-m-8-col-on-2xl","9ColOn_2xl":"pf-m-9-col-on-2xl","10ColOn_2xl":"pf-m-10-col-on-2xl","11ColOn_2xl":"pf-m-11-col-on-2xl","12ColOn_2xl":"pf-m-12-col-on-2xl",offset_1ColOn_2xl:"pf-m-offset-1-col-on-2xl",offset_2ColOn_2xl:"pf-m-offset-2-col-on-2xl",offset_3ColOn_2xl:"pf-m-offset-3-col-on-2xl",offset_4ColOn_2xl:"pf-m-offset-4-col-on-2xl",offset_5ColOn_2xl:"pf-m-offset-5-col-on-2xl",offset_6ColOn_2xl:"pf-m-offset-6-col-on-2xl",offset_7ColOn_2xl:"pf-m-offset-7-col-on-2xl",offset_8ColOn_2xl:"pf-m-offset-8-col-on-2xl",offset_9ColOn_2xl:"pf-m-offset-9-col-on-2xl",offset_10ColOn_2xl:"pf-m-offset-10-col-on-2xl",offset_11ColOn_2xl:"pf-m-offset-11-col-on-2xl",offset_12ColOn_2xl:"pf-m-offset-12-col-on-2xl","1RowOn_2xl":"pf-m-1-row-on-2xl","2RowOn_2xl":"pf-m-2-row-on-2xl","3RowOn_2xl":"pf-m-3-row-on-2xl","4RowOn_2xl":"pf-m-4-row-on-2xl","5RowOn_2xl":"pf-m-5-row-on-2xl","6RowOn_2xl":"pf-m-6-row-on-2xl","7RowOn_2xl":"pf-m-7-row-on-2xl","8RowOn_2xl":"pf-m-8-row-on-2xl","9RowOn_2xl":"pf-m-9-row-on-2xl","10RowOn_2xl":"pf-m-10-row-on-2xl","11RowOn_2xl":"pf-m-11-row-on-2xl","12RowOn_2xl":"pf-m-12-row-on-2xl",gutter:"pf-m-gutter"}}},24936:(o,e)=>{"use strict";e.__esModule=!0,e.l_grid_item_Order={name:"--pf-l-grid--item--Order",value:"0",var:"var(--pf-l-grid--item--Order)"},e.default=e.l_grid_item_Order},24814:(o,e,l)=>{"use strict";l.d(e,{v:()=>p});var n=l(1427),t=l.n(n),r=l(45697),f=l.n(r),s=l(49099),a=l(90446),c=l(698),m=l(91845),i=l(58061),p=function(o){var e=o.inventoryId,l=o.cloudProvider,n=o.instanceType,r=o.idlingTime,f=[{label:"Provider",value:null===l?i.t0:l},{label:"Instance type",value:null===n?i.t0:n},{label:"Idling time",value:null===r?i.t0:"".concat(r,"%")}];return t().createElement(s.o,{className:"expanded-row",isCompact:!0,isHorizontal:!0},t().createElement(c.g,{id:e},f.map((function(o,e){return t().createElement(t().Fragment,{key:e},t().createElement(a.M,null,o.label),t().createElement(m.b,null,o.value))}))))};p.propTypes={inventoryId:f().string,cloudProvider:f().string,instanceType:f().string,idlingTime:f().string}},36269:(o,e,l)=>{"use strict";l.d(e,{l:()=>_});var n=l(1427),t=l.n(n),r=l(76004),f=l(84564),s=l(19694),a=l(35451),c=l(2293),m=l(5381),i=l(82727),p=l(18802),d=l(58773),u=l(45697),O=l.n(u),_=function(o){var e,l=o.stateValue,n=(e=l,{Oversized:{text:"This system is not fully consuming available resources and may be oversized.",icon:t().createElement(c.ZP,{color:"#f09800",size:"sm"})},Undersized:{text:"This system is depleting available resources and may be undersized.",icon:t().createElement(m.ZP,{color:"red",size:"sm"})},Idling:{text:"This system displays higher idling cycles than is expected.",icon:t().createElement(i.ZP,{size:"sm"})},"Storage rightsizing":{text:"This system is experiencing a storage Input/Output bottleneck.",icon:t().createElement(s.default,{color:"#f09800",size:"sm"})},Optimized:{text:"This system is running efficiently.",icon:t().createElement(a.default,{color:"green",size:"sm"})},Crashloop:{text:"This system is experiencing a crash loop.",icon:t().createElement(f.ZP,{color:"red",size:"sm"})},"Waiting for data":{text:"This system is configured, please allow 24 hours for your upload to complete.",icon:t().createElement(p.ZP,{color:"#2B9AF3",size:"sm"})},"Under pressure":{text:"System resources adequate but experiencing occasional peaks.",icon:t().createElement(d.ZP,{color:"#030303",size:"sm"})}}[e]||{}),u=n.text,O=n.icon;return t().createElement("span",null,t().createElement("span",null,u?t().createElement(r.Tooltip,{content:t().createElement("div",null,u)},t().createElement("span",null,O," ",l)):l))};_.propTypes={stateValue:O().string}},86503:(o,e,l)=>{"use strict";l.r(e),l.d(e,{default:()=>x});var n=l(63038),t=l.n(n),r=l(6479),f=l.n(r),s=l(67154),a=l.n(s),c=l(1427),m=l.n(c),i=l(45697),p=l.n(i),d=l(2983),u=l(9694),O=l(8896),_=l(67463),g=m().lazy((function(){return Promise.all([l.e(514),l.e(324),l.e(87),l.e(939),l.e(964),l.e(241),l.e(51),l.e(806),l.e(558),l.e(587),l.e(185)]).then(l.bind(l,88422))})),C=function(o){var e=(0,d.v9)((function(o){var e,l=o.entityDetails;return null==l||null===(e=l.entity)||void 0===e?void 0:e.id}));return m().createElement(c.Suspense,{fallback:""},m().createElement(g,a()({inventoryId:e},o)))},w=function(o){var e=o.getRegistry,l=f()(o,["getRegistry"]),n=(0,c.useState)(),r=t()(n,2),s=r[0],a=r[1];return(0,c.useEffect)((function(){var o,l;e&&(null===(o=e())||void 0===o||null===(l=o.register)||void 0===l||l.call(o,{systemRecsReducer:u.rj})),a((function(){return e?d.zt:c.Fragment}))}),[e]),s?m().createElement(s,e&&{store:e().getStore()},m().createElement(C,l)):m().createElement(O.b,null,m().createElement(_.Spinner,{size:"xl"}))};w.propTypes={getRegistry:p().func};const x=w},24477:(o,e,l)=>{"use strict";l.r(e),l.d(e,{default:()=>vo});var n=l(59713),t=l.n(n),r=l(87757),f=l.n(r),s=l(48926),a=l.n(s),c=l(34575),m=l.n(c),i=l(93913),p=l.n(i),d=l(2205),u=l.n(d),O=l(78585),_=l.n(O),g=l(29754),C=l.n(g),w=l(1427),x=l.n(w),h=l(45697),v=l.n(h),y=l(16530),b=l(2983),R=l(49287),S=l(18038),E=l(85991),M=l(49489),P=l(86350),I=l(48716),L=l(67154),z=l.n(L),D=l(54025),j=l(52643),k=l(2372),N=l(39591),X=function(o){var e=(0,y.useHistory)(),l=(0,b.oR)();return x().createElement(w.Suspense,{fallback:o.fallback},x().createElement(D.ScalprumComponent,z()({history:e,store:l,appName:"inventory",module:"./DetailWrapper",scope:"inventory",ErrorComponent:x().createElement(N.Z,z()({component:"InventoryDetailHead",history:e,store:l},o)),ref:o.innerRef},o)))};X.propTypes={fallback:v().node,innerRef:v().object};var T=x().forwardRef((function(o,e){return x().createElement(X,z()({innerRef:e},o))}));T.propTypes={fallback:v().node},T.defaultProps={fallback:x().createElement(j.b,{className:"pf-u-p-lg"},x().createElement(k.$,{size:"xl"}))};const U=T;var Z=function(o){var e=(0,y.useHistory)(),l=(0,b.oR)();return x().createElement(w.Suspense,{fallback:o.fallback},x().createElement(D.ScalprumComponent,z()({history:e,store:l,appName:"inventory",module:"./InventoryDetailHead",scope:"inventory",ErrorComponent:x().createElement(N.Z,z()({component:"InventoryDetailHead",history:e,store:l},o)),ref:o.innerRef},o)))};Z.propTypes={fallback:v().node,innerRef:v().object};var H=x().forwardRef((function(o,e){return x().createElement(Z,z()({innerProps:e},o))}));H.propTypes={fallback:v().node},H.defaultProps={fallback:x().createElement(j.b,{className:"pf-u-p-lg"},x().createElement(k.$,{size:"xl"}))};const A=H;var $=function(o){var e=(0,y.useHistory)(),l=(0,b.oR)();return x().createElement(w.Suspense,{fallback:o.fallback},x().createElement(D.ScalprumComponent,z()({history:e,store:l,appName:"inventory",module:"./AppInfo",scope:"inventory",ErrorComponent:x().createElement(N.Z,z()({component:"InventoryDetailHead",history:e,store:l},o)),ref:o.innerRef},o)))};$.propTypes={fallback:v().node,innerRef:v().object};var V=x().forwardRef((function(o,e){return x().createElement($,z()({innerRef:e},o))}));V.propTypes={fallback:v().node},V.defaultProps={fallback:x().createElement(j.b,{className:"pf-u-p-lg"},x().createElement(k.$,{size:"xl"}))};const B=V;var F=l(30319),G=l(53704),W=l(18546),q=l(86503);function Y(o,e){var l=Object.keys(o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),l.push.apply(l,n)}return l}function Q(o){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?Y(Object(l),!0).forEach((function(e){t()(o,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(l)):Y(Object(l)).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(l,e))}))}return o}var J={loaded:!1},K=function(o){return Q(Q({},o),{},{loaded:!0,activeApps:[{title:"Resource optimization",name:"resource optimization",component:q.default}]})},oo=l(24814),eo=l(63038),lo=l.n(eo),no=l(6202),to=l(11239),ro=l(49580),fo=l(61088),so=l(90502),ao=l(58061),co=function(o){var e=o.system,l=(0,w.useState)(e.rating),n=lo()(l,2),t=n[0],r=n[1],s=(0,w.useState)(!1),c=lo()(s,2),m=c[0],i=c[1],p=function(){var o=a()(f().mark((function o(l){var n,s;return f().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=t===l?ao.nV:l,o.prev=1,s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({inventory_id:e.inventoryId,rating:n})},o.next=5,fetch("".concat(ao.RC).concat(ao.Up),s);case 5:r(n),i(!0),setTimeout((function(){return i(!1)}),3e3),o.next=13;break;case 10:o.prev=10,o.t0=o.catch(1),console.error(o.t0);case 13:case"end":return o.stop()}}),o,null,[[1,10]])})));return function(e){return o.apply(this,arguments)}}();return x().createElement("span",{className:"ratingSpanOverride"},"Is this suggestion helpful?",x().createElement(no.Button,{variant:"plain","aria-label":"thumbs-up",onClick:function(){return p(ao.xP)},ouiaId:"thumbsUp"},t===ao.xP?x().createElement(fo.ZP,{className:"like",size:"sm"}):x().createElement(to.ZP,{size:"sm"})),x().createElement(no.Button,{variant:"plain","aria-label":"thumbs-down",onClick:function(){return p(ao.RM)},ouiaId:"thumbsDown"},t===ao.RM?x().createElement(so.ZP,{className:"dislike",size:"sm"}):x().createElement(ro.ZP,{size:"sm"})),m&&"Thank you for your feedback!")};co.propTypes={system:v().object};const mo=co;var io=l(36269),po=l(56067),uo=l(87999),Oo=l(49099),_o=l(90446),go=l(698),Co=l(91845);function wo(o,e){var l=Object.keys(o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),l.push.apply(l,n)}return l}function xo(o){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?wo(Object(l),!0).forEach((function(e){t()(o,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(l)):wo(Object(l)).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(l,e))}))}return o}var ho=function(o){u()(s,o);var e,l,n,r=(l=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(o){return!1}}(),function(){var o,e=C()(l);if(n){var t=C()(this).constructor;o=Reflect.construct(e,arguments,t)}else o=e.apply(this,arguments);return _()(this,o)});function s(o){var e;return m()(this,s),(e=r.call(this,o)).state={inventoryId:e.props.match.params.inventoryId},e}return p()(s,[{key:"componentDidMount",value:(e=a()(f().mark((function o(){var e,l;return f().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return null===(e=insights.chrome)||void 0===e||null===(l=e.hideGlobalFilter)||void 0===l||l.call(e,!0),insights.chrome.appAction("system-detail"),o.next=4,this.props.loadSystemInfo(this.state.inventoryId);case 4:document.title=this.props.rosSystemInfo.display_name;case 5:case"end":return o.stop()}}),o,this)}))),function(){return e.apply(this,arguments)})},{key:"renderChildrenNode",value:function(){if(this.props.rosSystemInfo){var o=this.props.rosSystemInfo,e=o.cloud_provider,l=o.instance_type,n=o.idling_time,t=o.rating,r=o.state,f=this.props.match.params.inventoryId;return x().createElement(R.r,{className:"ros-system-info"},x().createElement(S.P,null,x().createElement(Oo.o,{className:"expanded-row",isCompact:!0,isHorizontal:!0},x().createElement(go.g,null,x().createElement(_o.M,null,"State"),x().createElement(Co.b,null,x().createElement(io.l,{stateValue:r}))))),x().createElement(S.P,null,x().createElement(oo.v,{cloudProvider:e,instanceType:l,idlingTime:n,inventoryId:f})),x().createElement(S.P,null,x().createElement(mo,{system:xo({},{rating:t,inventoryId:f})})))}return null}},{key:"render",value:function(){var o=this,e=this.props.entity;return x().createElement(x().Fragment,null,x().createElement(uo.B.Consumer,null,(function(l){return!1===l.permissions.systemsRead?x().createElement(po.Z,{serviceName:"Resource Optimization"}):x().createElement(U,{onLoad:function(o){var e=o.mergeWithDetail,l=o.INVENTORY_ACTION_TYPES;(0,F.z2)(e(function(o){var e=o.LOAD_ENTITY_FULFILLED;return(0,W.Gg)(t()({},e,K),J)}(l)))},className:"rosDetailWrapper"},x().createElement(I.Z,null,x().createElement(E.a,{ouiaId:"system-detail"},x().createElement(M.g,null,x().createElement(y.Link,{to:"/"},"Resource Optimization")),x().createElement(M.g,{isActive:!0},x().createElement("div",{className:"ins-c-inventory__detail--breadcrumb-name"},e?e.display_name:null))),x().createElement(A,{hideBack:!0,showDelete:!1,hideInvDrawer:!0}),o.renderChildrenNode()),x().createElement(P.Z,null,x().createElement(R.r,{gutter:"md"},x().createElement(S.P,{span:12},x().createElement(B,{showTags:!0,fallback:""})))))})))}}]),s}(x().Component);ho.propTypes={match:v().any,entity:v().object,loading:v().bool,rosSystemInfo:v().object,loadSystemInfo:v().func};const vo=(0,y.withRouter)((0,b.$j)((function(o,e){var l,n;return xo({entity:o.entityDetails&&o.entityDetails.entity,loading:null===(l=o.systemDetailReducer)||void 0===l?void 0:l.loading,rosSystemInfo:null===(n=o.systemDetailReducer)||void 0===n?void 0:n.systemInfo},e)}),(function(o){return{loadSystemInfo:function(e){return o((0,G.Of)(e))}}}))(ho))},58061:(o,e,l)=>{"use strict";l.d(e,{RC:()=>n,LO:()=>t,M4:()=>r,Up:()=>f,RM:()=>s,nV:()=>a,xP:()=>c,QR:()=>m,t0:()=>i,wy:()=>p,N7:()=>d,Q0:()=>u,H7:()=>O});var n="/api/ros/v1",t="/is_configured",r="/systems",f="/rating",s=-1,a=0,c=1,m="Waiting for data",i="N/A",p="https://access.redhat.com/documentation/en-us/red_hat_insights/2022/html/assessing_and_monitoring_rhel_resource_optimization_with_insights_for_red_hat_enterprise_linux/proc-ros-install_ros-getting-started",d={state:{label:"State",type:"checkbox",filterValues:{items:[{label:"Idling",value:"Idling"},{label:"Optimized",value:"Optimized"},{label:"Oversized",value:"Oversized"},{label:"Under pressure",value:"Under pressure"},{label:"Undersized",value:"Undersized"},{label:"Waiting for data",value:"Waiting for data"}]}}},u="with_suggestions",O="with_waiting_for_data"},53704:(o,e,l)=>{"use strict";l.d(e,{Pn:()=>d,t9:()=>p,Of:()=>i});var n=l(59713),t=l.n(n),r=l(58061);function f(o,e){var l=Object.keys(o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),l.push.apply(l,n)}return l}function s(o){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?f(Object(l),!0).forEach((function(e){t()(o,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(l)):f(Object(l)).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(l,e))}))}return o}function a(o){if(!o.ok)throw Error(o.statusText);return o}var c=function(o){var e=new URL(r.RC+r.M4+"/".concat(o),window.location.origin);return window.insights.chrome.auth.getUser().then((function(){return fetch(e).then(a).then((function(o){return o.json()})).then((function(o){return o}))}))},m=function(o){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l={limit:e.perPage,offset:(e.page-1)*e.perPage};e.description&&e.description.trim()&&(l=s(s({},l),{},{description:e.description}));var n=new URL(r.RC+r.M4+"/".concat(o,"/suggestions"),window.location.origin);n.search=new URLSearchParams(l).toString();var t=window.insights.chrome.auth.getUser().then((function(){return fetch(n).then((function(o){if(!o.ok&&404===o.status)return{hasError:!0};if(!o.ok)throw Error(o.statusText);return o.json()})).then((function(o){return o}))}));return t},i=function(o){return{type:"LOAD_ROS_SYSTEM_INFO",payload:c(o)}},p=function(o,e){return{type:"FETCH_SYSTEM_RECOMMENDATIONS_LIST",payload:m(o,e)}},d=function(){return{type:"LOAD_IS_CONFIGURED_INFO",payload:(o=new URL(r.RC+r.LO,window.location.origin),window.insights.chrome.auth.getUser().then((function(){return fetch(o).then(a).then((function(o){return o.json()})).then((function(o){return o}))})))};var o}},65088:()=>{},58392:()=>{},27567:()=>{},81320:()=>{},314:()=>{},72816:()=>{}}]);
//# sourceMappingURL=../sourcemaps/RosSystemDetail.5279f05aa626a65f95eab86e94b98334.js.map