(self.webpackChunkros_frontend=self.webpackChunkros_frontend||[]).push([[52],{78236:(e,t)=>{"use strict";t.k2={name:"--pf-global--breakpoint--md",value:"768px",var:"var(--pf-global--breakpoint--md)"},t.ZP=t.k2},48799:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var o=n(43297),r=n.n(o),l=n(94184),a=n.n(l),i=n(55138),c=n(62472),u=function(){return u=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u.apply(this,arguments)},s=function(e,t,n){if(n||2===arguments.length)for(var o,r=0,l=t.length;r<l;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};const d=function(e){var t=e.id,n=e.isDisabled,l=void 0!==n&&n,d=e.items,p=void 0===d?[]:d,f=e.onSelect,v=void 0===f?function(){}:f,m=e.checked,b=void 0!==m&&m,g=e.toggleProps,y=e.count,h=e.className,E=void 0===h?"":h,k=e.ouiaId,C=e.ouiaSafe,w=void 0===C||C,S=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(e,["id","isDisabled","items","onSelect","checked","toggleProps","count","className","ouiaId","ouiaSafe"]),O=(0,o.useState)(!1),I=O[0],x=O[1],D=(0,o.useRef)(!1).current,P=(0,o.useRef)((0,c.ql)("RHI/BulkSelect")).current,N=function(e){return x(e)},j=void 0!==k?k:P;return r().createElement(o.Fragment,null,p&&p.length>0?r().createElement(i.Dropdown,u({onSelect:function(){return N(!1)}},S,{className:a()(E,"ins-c-bulk-select"),ouiaId:j,ouiaSafe:w,toggle:r().createElement(i.DropdownToggle,u({},g,{isDisabled:l,ouiaId:j,splitButtonItems:[r().createElement(o.Fragment,{key:"split-checkbox"},D?r().createElement(i.DropdownToggleCheckbox,{id:t?"".concat(t,"-toggle-checkbox"):"toggle-checkbox","aria-label":"Select all",onChange:v,checked:b,ouiaId:j}):r().createElement(i.DropdownToggleCheckbox,{id:t?"".concat(t,"-toggle-checkbox"):"toggle-checkbox","aria-label":"Select all",onChange:v,isChecked:b,ouiaId:j},y?"".concat(y," selected"):""))],onToggle:N})),isOpen:I,dropdownItems:s(s([],void 0!==y&&y>0?[r().createElement(i.DropdownItem,{key:"count",isDisabled:!0,className:a()({"ins-c-bulk-select__selected":!D})},y," Selected")]:[],!0),p.map((function(e,t){return r().createElement(i.DropdownItem,u({component:"button",key:e.key||t,ouiaId:"".concat(j,"-").concat(e.key||t),onClick:function(n){return e.onClick&&e.onClick(n,e,t)}},null==e?void 0:e.props),e.title)})),!0)})):r().createElement(i.Checkbox,u({},S,{"aria-label":"Select all",className:a()(E,"ins-c-bulk-select"),id:"".concat(t,"-checkbox"),isChecked:b,onChange:v})))}},40787:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var o=n(43297),r=n.n(o),l=n(55138),a=n(18446),i=n.n(a),c=n(57557),u=n.n(c),s=n(68097),d=function(){return d=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},d.apply(this,arguments)},p=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},f=function(e,t,n){if(n||2===arguments.length)for(var o,r=0,l=t.length;r<l;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};const v=function(e){var t=e.items,n=void 0===t?[]:t,a=e.value,c=void 0===a?[]:a,v=e.onChange,m=void 0===v?function(){}:v,b=e.isDisabled,g=void 0!==b&&b,y=p(e,["items","value","onChange","isDisabled"]),h=y.placeholder,E=y.className,k=(0,o.useState)(!1),C=k[0],w=k[1],S=(0,o.useState)([]),O=S[0],I=S[1],x=(0,o.useRef)(O),D=function(e){x.current=O,I(e)};(0,o.useEffect)((function(){!i()(x.current,c)&&c&&D(c)}),[O,c]);var P=function(){return Array.from(new Set(f(f([],c&&c.length>0&&c.constructor===Array?c.map((function(e){return(0,s.P)(e)?e.value:e})):[],!0),O,!0)))};return r().createElement(o.Fragment,null,!n||n&&n.length<=0?r().createElement(s.Z,d({},y,{onChange:m,isDisabled:g,value:"".concat(P())})):r().createElement(l.Select,{className:E,variant:l.SelectVariant.checkbox,"aria-label":"Select Input",onToggle:function(e){return w(e)},isDisabled:g,onSelect:function(e,t){return function(e,t){var n=P();n=n.includes(t)?n.filter((function(e){return e!==t})):f(f([],n,!0),[t],!1),null==m||m(e,n,t),D(n)}(e,t)},selections:P(),isOpen:C,placeholderText:h,ouiaId:h},n.map((function(e,t){var n=e.value,o=e.onClick,a=e.label,i=e.id,c=p(e,["value","onClick","label","id"]);return r().createElement(l.SelectOption,d({},u()(c,"onChange"),{key:i||t,value:String(n||i||t),onClick:function(e){return null==o?void 0:o(e,d({value:n,label:a,id:i},c),t)}}),a)}))))}},18213:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var o=n(43297),r=n.n(o),l=n(94184),a=n.n(l),i=n(78236),c=n(55138),u=n(83632),s=n(68097),d=n(87123),p=(n(74131),function(){return p=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},p.apply(this,arguments)});const f=function(e){var t=e.hideLabel,n=void 0!==t&&t,l=e.id,f=void 0===l?"default-input":l,v=e.isDisabled,m=void 0!==v&&v,b=e.items,g=void 0===b?[]:b,y=e.onChange,h=e.placeholder,E=e.useMobileLayout,k=void 0!==E&&E,C=e.value,w=void 0===C?"":C,S=parseInt(i.ZP.value.replace("px","")),O=function(e){return e<=S},I=(0,o.useState)(!1),x=I[0],D=I[1],P=(0,o.useState)(),N=P[0],j=P[1],T=(0,o.useState)(O(window.innerWidth)),_=T[0],Z=T[1],V=(0,o.useRef)((function(e){Z(O((null==e?void 0:e.target).innerWidth))}));(0,o.useEffect)((function(){return k||console.warn('The prop "useMobileLayout" is set to false. You are using an outdated mobile layout of conditional filter.\n    Please switch to new layout by adding "useMobileLayout={true}" prop to the PrimaryToolbar or ConditionalFilter directly.\n    The new mobile layout will become the default in next minor release.'),window.addEventListener("resize",V.current),function(){V.current&&window.removeEventListener("resize",V.current)}}),[]);var A=y?w:N,F=g&&g.length&&(g.find((function(e,t){return e.value===A||t===Number(A)}))||g[0]),B=y||function(e,t){return j(t)},R=k&&_,M=function(e){return e[0].toUpperCase()+e.substring(1)},L=F&&(d.w[F.type]||d.w.text),G=k&&_?function(e){return r().createElement(c.ToolbarToggleGroup,p({},e,{breakpoint:"md",toggleIcon:r().createElement(u.FilterIcon,null)}))}:o.Fragment;return r().createElement(G,null,k&&_&&r().createElement(c.ToolbarGroup,{className:"ins-c-conditional-filter mobile"},g.map((function(e,t){var n=e&&(d.w[e.type]||d.w.text);return r().createElement(c.ToolbarItem,{key:t},r().createElement(n,p({},e.type!==d.Y.custom&&{placeholder:h||e.placeholder||"Filter by ".concat(e.label),id:e.filterValues?e.filterValues.id:A?String(A):void 0},e.filterValues)))}))),!R&&r().createElement(o.Fragment,null,!g||g&&g.length<=0?r().createElement("div",{className:a()("ins-c-conditional-filter",{desktop:k})},r().createElement(s.Z,{id:f,isDisabled:m,onChange:function(e){return B(e,Number(e.target.value))},placeholder:h,value:A?String(A):void 0,"widget-type":"InsightsInput"})):r().createElement(c.Split,{className:a()("ins-c-conditional-filter",{desktop:k})},g.length>1&&r().createElement(c.SplitItem,null,r().createElement(c.Dropdown,{className:"ins-c-conditional-filter__group",onSelect:function(){return D(!1)},isOpen:x,ouiaId:"ConditionalFilter",toggle:r().createElement(c.DropdownToggle,{"aria-label":"Conditional filter",onToggle:D,isDisabled:m,className:n?"ins-c-conditional-filter__no-label":"",ouiaId:"ConditionalFilter"},r().createElement(u.FilterIcon,{size:"sm"}),!n&&r().createElement("span",{className:"ins-c-conditional-filter__value-selector"},F&&M(String(F.label)))),dropdownItems:g.map((function(e,t){return r().createElement(c.DropdownItem,{key:e.id?"".concat(e.id,"-dropdown"):t,component:"button",ouiaId:String(e.label),onClick:function(n){return B(n,e.value||t)},isHovered:F.label===e.label},M(String(e.label)))}))})),L&&r().createElement(c.SplitItem,{isFilled:!0},r().createElement(L,p({},F.type!==d.Y.custom&&{placeholder:h||F.placeholder||"Filter by ".concat(F.label),id:F.filterValues&&F.filterValues.id||A?String(A):void 0},F.filterValues))))))}},21556:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var o=n(43297),r=n.n(o),l=n(94184),a=n.n(l),i=n(55138),c=n(22137),u=function(){return u=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u.apply(this,arguments)},s=function(e,t,n){if(n||2===arguments.length)for(var o,r=0,l=t.length;r<l;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))},d=function(e,t,n,o,r,l){var a,i,c,s,d=u(u({},l),r);if(void 0===d[e])return!1;if(function(e){var t;return void 0!==(null===(t=e)||void 0===t?void 0:t.items)}(d[e][t])){var p=d[e][t];if(p.isSelected){if(null===(a=null==p?void 0:p.item)||void 0===a?void 0:a.id)return n===(null===(i=null==p?void 0:p.item)||void 0===i?void 0:i.id);if(null===(c=null==p?void 0:p.item)||void 0===c?void 0:c.tagValue)return o===(null===(s=null==p?void 0:p.item)||void 0===s?void 0:s.tagValue)}return Boolean(p.isSelected)}return Boolean(d[e][t])},p=function(e,t,n,o,r,l,a,i){return void 0===r&&(r=""),((null==e?void 0:e.map((function(s,d){return u(u({},s),{className:"".concat((null==s?void 0:s.className)||"pf-u-pl-sm"),key:s.id||s.value||d,value:String(s.value||s.id||d),onClick:function(d,p,f){var v,m=[d,n(o||s.type,r,(o||s.type)===c.Z.treeView?p:s.value,f),u({value:r,label:l||s.label,id:a||s.id,type:o||s.type,items:e},i||s),s,r,s.value];null==t||t.apply(void 0,m),null===(v=null==s?void 0:s.onClick)||void 0===v||v.call(s,d,u(u({},s),{label:"string"==typeof s.label?s.label:""}),void 0,f)}})})))||[]).filter((function(e){return!e.noFilter}))},f=function(e){return e.id=e.id||e.value,e.name=e.label||e.name,e.value=e.id,e.label=e.name||"",e.children?u(u({},e),{children:e.children.map((function(e){return f(e)}))}):e},v=function(e){return function(t,n,o,r){void 0===t&&(t=c.Z.button),void 0===n&&(n=""),void 0===o&&(o=""),void 0===r&&(r=!1);var l=null==e?void 0:e[n],a=t===c.Z.treeView?[o].reduce((function e(t,n){return Array.isArray(null==n?void 0:n.children)?n.children.reduce(e,t)||[]:(t.push(n),t)}),[]):[],i=t===c.Z.treeView?a.map((function(e){return e.id})):[String(o)];if(l){var s=e;return i.map((function(e){var o,l,a,i;void 0===e&&(e="");var d=s[n];s=t!==c.Z.radio&&(d[e]instanceof Object?d[e].isSelected:Boolean(d[e]))?u(u({},s),((o={})[n]=u(u({},d||{}),((l={})[e]=t===c.Z.treeView&&r,l)),o)):u(u({},s),((a={})[n]=u(u({},t!==c.Z.radio&&d||{}),((i={})[e]=!0,i)),a))})),s}return i.reduce((function(e,t){var o,r;return u(u({},e),((o={})[n]=u(u({},null==e?void 0:e[n]),((r={})[t||""]=!0,r)),o))}),e)}},m=function(e,t,n,o){return e.children?e.children.every((function(e){return m(e,t,n,o)})):d(t,e.id||"",void 0,void 0,n,o)},b=function(e,t,n,o){return e.children?e.children.some((function(e){return b(e,t,n,o)})):d(t,e.id||"",void 0,void 0,n,o)},g=function(e,t,n,o){var r=m(e,t,n,o);return e.checkProps={checked:!1},r?e.checkProps.checked=!0:b(e,t,n,o)&&(e.checkProps={checked:null}),e.children?u(u({},e),{children:e.children.map((function(e){return g(e,t,n,o)}))}):e},y=function(){return y=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},y.apply(this,arguments)};const h=function(e){var t=e.className,n=e.filterBy,l=void 0===n?"":n,m=e.groups,b=void 0===m?[]:m,h=e.items,E=e.isFilterable,k=e.onFilter,C=e.onChange,w=e.onShowMore,S=e.placeholder,O=e.selected,I=e.showMoreTitle,x=e.showMoreOptions,D=(0,o.useState)({}),P=D[0],N=D[1],j=(0,o.useState)(""),T=j[0],_=j[1],Z=(0,o.useState)(!1),V=Z[0],A=Z[1],F=(0,o.useRef)(null),B=(0,o.useRef)(null),R=(0,o.useRef)(null);(0,o.useEffect)((function(){O&&N(O)}),[O]),(0,o.useEffect)((function(){_(l)}),[l]);var M=function(e){var t,n,o;V&&((null===(t=R.current)||void 0===t?void 0:t.contains(e.target))||(null===(n=F.current)||void 0===n?void 0:n.contains(e.target)))&&("Escape"!==e.key&&"Enter"!==e.key||(A(!V),null===(o=F.current)||void 0===o||o.focus()))},L=function(e){var t;V&&!(null===(t=R.current)||void 0===t?void 0:t.contains(e.target))&&A(!1)};(0,o.useEffect)((function(){return window.addEventListener("keydown",M),window.addEventListener("click",L),function(){window.removeEventListener("keydown",M),window.removeEventListener("click",L)}}),[V,R]);var G=p((null==h?void 0:h.map((function(e){return e.type===c.Z.treeView?f(e):e})))||[],C,v(O||{})),z=function(e,t,n){return e.map((function(e){var o=e.value,r=e.label,l=e.groupSelectable,a=e.id,i=e.type,d=e.items,v=e.noFilter,m=i===c.Z.treeView?d.map((function(e){return f(e)})):d;return{label:r,noFilter:v,value:o,type:i,groupSelectable:l,items:p(s(s([],l?[u({value:o||"",label:r||"",id:a||"",type:i,className:"pf-u-pl-xs"},e)]:[],!0),m,!0),t,n,i,o,r,a,e)}})).filter((function(e){var t=e.noFilter,n=e.items;return!t||(void 0===n?[]:n).length>0}))}(b,C,v(O||{})),Y=function(e,t,n,o){return void 0===o&&(o=""),r().createElement(i.MenuItem,{itemId:t,key:"".concat(e.value,"-").concat(t,"-item"),className:null==e?void 0:e.className,onClick:e.onClick&&(n||e.type)===c.Z.checkbox?function(t){e.onClick&&e.onClick(),t.preventDefault()}:void 0},(n||e.type)===c.Z.treeView?r().createElement(i.TreeView,{data:[g(e,o,P,O||{})],onCheck:function(t,n){return function(e,t,n){var o,r,l;return null===(r=(o=n[0]).onClick)||void 0===r?void 0:r.call(o,e,t,void 0,null===(l=null==e?void 0:e.target)||void 0===l?void 0:l.checked)}(t,n,[e])},hasChecks:!0}):(n||e.type)===c.Z.checkbox?r().createElement(i.Checkbox,y({},e,{label:null==e?void 0:e.label,isChecked:(null==e?void 0:e.isChecked)||d(o,(null==e?void 0:e.value)||t,null==e?void 0:e.id,null==e?void 0:e.tagValue,P,O||{})||!1,onChange:function(t,n){var o;null===(o=null==e?void 0:e.onChange)||void 0===o||o.call(e,t,n)},onClick:e.onClick?function(t){e.onClick&&e.onClick(),t.stopPropagation()}:void 0,name:(null==e?void 0:e.name)||(null==e?void 0:e.value)||"".concat(o,"-").concat(t),id:(null==e?void 0:e.id)||(null==e?void 0:e.value)||"".concat(o,"-").concat(t)})):(n||e.type)===c.Z.radio?r().createElement(i.Radio,y({},e,{isChecked:(null==e?void 0:e.isChecked)||d(o,(null==e?void 0:e.value)||t,null==e?void 0:e.id,null==e?void 0:e.tagValue,P,O||{})||!1,onChange:function(t,n){var o;null===(o=null==e?void 0:e.onChange)||void 0===o||o.call(e,t,n)},value:(null==e?void 0:e.value)||t,name:(null==e?void 0:e.name)||(null==e?void 0:e.value)||"".concat(o,"-").concat(t),label:(null==e?void 0:e.label)||"",id:(null==e?void 0:e.id)||(null==e?void 0:e.value)||"".concat(o,"-").concat(t)})):(n||e.type)===c.Z.button?r().createElement(i.Button,{id:e.id,className:"pf-c-select__option-button ".concat((null==e?void 0:e.className)||""),variant:null==e?void 0:e.variant,onClick:e.onClick},null==e?void 0:e.label):(null==e?void 0:e.label)||"")},H=function(e,t,n){return void 0===n&&(n=""),e.map((function(e,o){return(t||e.type)===c.Z.treeView?r().createElement("div",{key:"".concat(e.value,"-").concat(o,"-item"),className:"ins-c-tree-view"},Y(e,o,t,n)):Y(e,o,t,n)}))};return r().createElement("div",{ref:B},r().createElement(i.Popper,{appendTo:B.current,trigger:r().createElement(i.MenuToggle,{"aria-label":"Group filter",ref:F,onClick:function(e){e.stopPropagation(),e.persist(),A(!V)},isExpanded:V,className:t},E||k?r().createElement(i.TextInput,{"aria-label":"input with dropdown and clear button",placeholder:S,value:T,tabIndex:0,onChange:function(e){_(e),null==k||k(e)},type:"search"}):S),popper:r().createElement(i.Menu,{ref:R,className:a()("ins-c-menu__scrollable",t,{"pf-m-expanded":V})},r().createElement(i.MenuContent,null,r().createElement(i.MenuList,{"aria-label":"Group filter"},G.length>0&&r().createElement(i.MenuGroup,null,H(G)),z.map((function(e,t){return r().createElement(i.MenuGroup,{label:e.groupSelectable&&"string"==typeof e.label?e.label:void 0,key:"".concat(e.label,"-").concat(t,"-group")},H(e.items,e.type,e.value))})),w?r().createElement(i.MenuItem,y({itemId:"loader",className:"ins-c-menu__show--more"},x,{onClick:function(e){return w(e)}}),I):r().createElement("span",{hidden:!0,value:""})))),isVisible:V}))}},26154:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(43297),r=n.n(o),l=n(55138),a=n(68097),i=function(){return i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)},c=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const u=function(e){var t=e.items,n=void 0===t?[]:t,u=e.onChange,s=void 0===u?function(){}:u,d=e.isDisabled,p=void 0!==d&&d,f=c(e,["items","onChange","isDisabled"]),v=f.placeholder,m=f.className,b=f.value,g=(0,o.useState)(!1),y=g[0],h=g[1],E=(0,o.useState)(),k=E[0],C=E[1],w=function(){return b?(0,a.P)(b)?b.value:b:k?(0,a.P)(k)?k.value:k:void 0},S=w();return r().createElement(o.Fragment,null,!n||n&&n.length<=0?r().createElement(a.Z,i({},f,{onChange:s,isDisabled:p,value:"".concat(w())})):r().createElement(l.Select,{className:m,variant:l.SelectVariant.single,"aria-label":"Select Input",isDisabled:p,onToggle:function(e){return h(e)},onSelect:function(e,t){return function(e,t){null==s||s(e,t),C(t)}(e,t)},isOpen:y,placeholderText:v,ouiaId:v},n.map((function(e,t){var n=e.value,o=e.isChecked,a=e.onChange,u=e.label,s=e.id,d=c(e,["value","isChecked","onChange","label","id"]);return r().createElement(l.SelectOption,i({},d,{key:s||t,value:n||""+t}),r().createElement(l.Radio,{name:s||"".concat(t,"-radio"),label:u,value:n||t,isChecked:o||void 0!==S&&S===n||void 0!==S&&S===""+t||!1,onChange:function(e,r){return null==a?void 0:a(r,i({id:s,label:u,value:n,isChecked:o},d),t)},id:s||"".concat(n,"-").concat(t)}))}))))}},68097:(e,t,n)=>{"use strict";n.d(t,{P:()=>c,Z:()=>u});var o=n(43297),r=n.n(o),l=n(55138),a=n(83632),i=(n(74131),function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n});function c(e){return void 0!==e.value}const u=function(e){var t=e.icon,n=e.id,c=e.isDisabled,u=void 0!==c&&c,s=e.className,d=e.onChange,p=e.onSubmit,f=void 0===p?function(){}:p,v=e.value,m=void 0===v?"":v,b=e.placeholder,g=i(e,["icon","id","isDisabled","className","onChange","onSubmit","value","placeholder"]),y=(0,o.useState)(""),h=y[0],E=y[1],k=t||a.SearchIcon;return r().createElement(o.Fragment,null,r().createElement(l.TextInput,{"aria-label":g["aria-label"]||"text input",className:"ins-c-conditional-filter ".concat(s||""),"data-ouia-component-type":"PF4/TextInput",id:n,isDisabled:u,value:d?"string"==typeof m?m:m.value:h,onChange:function(e,t){return function(e,t){return d?d(e,t):E(t)}(t,t.target.value)},onKeyDown:function(e){return"Enter"===e.key&&(null==f?void 0:f(e,("string"==typeof m?m:m.value)||h))},ouiaId:"ConditionalFilter",placeholder:b,"widget-type":"InsightsInput"}),r().createElement(k,{size:"sm",className:"ins-c-search-icon"}))}},87123:(e,t,n)=>{"use strict";n.d(t,{Y:()=>c,w:()=>u});var o=n(43297),r=n(68097),l=n(40787),a=n(26154),i=n(21556),c={text:"text",checkbox:"checkbox",radio:"radio",custom:"custom",group:"group"},u={text:r.Z,checkbox:l.Z,radio:a.Z,custom:o.Fragment,group:i.Z}},22137:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o={treeView:"treeView",checkbox:"checkbox",radio:"radio",button:"button",plain:"plain"}},97138:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(55138),r=n(43297),l=n.n(r),a=n(83632),i=function(){return i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)},c=function(e,t,n){if(n||2===arguments.length)for(var o,r=0,l=t.length;r<l;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};const u=function(e){var t,n=e.extraItems,u=void 0===n?[]:n,s=e.onSelect,d=void 0===s?function(){}:s,p=e.isDisabled,f=e.tooltipText,v=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(e,["extraItems","onSelect","isDisabled","tooltipText"]),m=(0,r.useState)(!1),b=m[0],g=m[1];return l().createElement(l().Fragment,null,(t=l().createElement(o.Dropdown,i({},v,{isPlain:!0,onSelect:function(){return g((function(e){return!e}))},toggle:l().createElement(o.DropdownToggle,{"aria-label":"Export",toggleIndicator:null,onToggle:function(e){return g(e)},isDisabled:p,ouiaId:"Export"},l().createElement(a.ExportIcon,{size:"sm"})),isOpen:b,ouiaId:"Export",dropdownItems:c([l().createElement(o.DropdownItem,{key:"download-csv",ouiaId:"DownloadCSV",component:"button",onClick:function(e){return d(e,"csv")},isDisabled:p},"Export to CSV"),l().createElement(o.DropdownItem,{key:"download-json",ouiaId:"DownloadJSON",component:"button",onClick:function(e){return d(e,"json")},isDisabled:p},"Export to JSON")],u,!0)})),l().createElement(l().Fragment,null,f?l().createElement(o.Tooltip,{content:f},t):t)))}},51812:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var o=n(43297),r=n.n(o),l=n(55138),a=n(94184),i=n.n(a),c=function(){return c=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)};function u(e){return Object.prototype.hasOwnProperty.call(e,"category")}function s(e){return!u(e)}const d=function(e){var t=e.className,n=e.filters,o=void 0===n?[]:n,a=e.onDelete,d=void 0===a?function(){}:a,p=e.deleteTitle,f=void 0===p?"Clear filters":p,v=e.showDeleteButton,m=e.onDeleteGroup,b=o.filter(u),g=b.map((function(e,t){return r().createElement(l.ChipGroup,c({key:"group_".concat(e.category),categoryName:String(e.category)||" "},m&&{isClosable:!0,onClick:function(n){n.stopPropagation(),m(n,[e],b.filter((function(e,n){return n!==t})))}}),e.chips.map((function(t){return r().createElement(l.Chip,{key:t.name,onClick:function(n){n.stopPropagation(),d(n,[c(c({},e),{chips:[t]})])}},t.name,t.count&&r().createElement(l.Badge,{key:"chip_badge_".concat(t.id),isRead:t.isRead},t.count))})))})),y=o.filter(s);return r().createElement("span",{className:i()(t,"ins-c-chip-filters")},g,y&&y.map((function(e){return r().createElement(l.ChipGroup,{key:"group_plain_chip_".concat(e.name)},r().createElement(l.Chip,{onClick:function(t){t.stopPropagation(),d(t,[e])}},e.name,e.count&&r().createElement(l.Badge,{key:"chip_badge_".concat(e.id),isRead:e.isRead},e.count)))})),(!0===v||void 0===v&&o.length>0)&&r().createElement(l.Button,{variant:"link",ouiaId:"ClearFilters",onClick:function(e){return d(e,o,!0)}},f))}},63753:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>f});var o=n(43297),r=n.n(o),l=n(55138),a=n(97138),i=n(94184),c=n.n(i),u=function(){return u=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u.apply(this,arguments)},s=function(e,t,n){if(n||2===arguments.length)for(var o,r=0,l=t.length;r<l;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};function d(e){return void 0!==e.label}var p=function(e,t){var n,o,l,a,i,c="object"==typeof e&&null!==typeof e&&"function"==typeof(null===(n=e)||void 0===n?void 0:n.onClick)?function(n){var o;return null===(o=e)||void 0===o?void 0:o.onClick(n,e,t)}:void 0;return u(u({},null===(o=e)||void 0===o?void 0:o.props),{onClick:c,component:(null===(a=null===(l=e)||void 0===l?void 0:l.props)||void 0===a?void 0:a.component)||(r().isValidElement(e.label||e)?"div":"button"),children:"object"==typeof e&&null!==typeof e?null===(i=e)||void 0===i?void 0:i.label:e})};const f=function(e){var t,n=e.actions,i=void 0===n?[]:n,f=e.overflowActions,v=void 0===f?[]:f,m=e.onSelect,b=void 0===m?function(){}:m,g=e.dropdownProps,y=void 0===g?{}:g,h=e.kebabToggleProps,E=e.exportConfig,k=(0,o.useState)(!1),C=k[0],w=k[1],S=function(e){return w(e)},O=i[0],I=i.slice(1),x=s(s(s(s([],O?[r().createElement(l.DropdownItem,u({key:"first-action"},p(O,"first-action"),{className:c()("ins-c-primary-toolbar__first-action",d(O)?null===(t=null==O?void 0:O.props)||void 0===t?void 0:t.className:void 0)}))]:[],!0),I.map((function(e,t){var n,o,a;return r().createElement(l.DropdownItem,u({key:(null===(n=e)||void 0===n?void 0:n.key)||(null===(a=null===(o=e)||void 0===o?void 0:o.props)||void 0===a?void 0:a.key)||t},p(e,t)))})),!0),i.length>0&&v.length>0?[r().createElement(l.DropdownSeparator,{key:"separator",className:"ins-c-primary-toolbar__overflow-actions-separator"})]:[],!0),v.map((function(e,t){return function(e,t){var n=e;return r().createElement(l.DropdownItem,u({},n.props,{className:"ins-c-primary-toolbar__overflow-actions",key:n.value||n.key||"".concat(t,"-overflow"),component:n.props&&n.props.component||r().isValidElement(n.label||e)?"div":"button",onClick:function(e){return n.onClick&&n.onClick(e,n,t)}}),n.label||e)}(e,t)})),!0);return r().createElement(o.Fragment,null,O&&r().createElement(l.ToolbarItem,{className:"ins-c-primary-toolbar__first-action pf-m-spacer-sm"},d(O)?r().createElement(l.Button,u({ouiaId:"".concat(O.label)},O.props,{onClick:O.onClick||O.props&&O.props.onClick||void 0}),O.label):O),E&&(E.extraItems||E.onSelect)&&r().createElement(l.ToolbarItem,{className:"pf-m-spacer-sm"},r().createElement(a.Z,u({},E))),(i&&(null==i?void 0:i.length)>0||v.length>0)&&r().createElement(l.ToolbarItem,{className:"".concat(i.length<=1?"ins-m-actions--empty":""," ins-c-primary-toolbar__actions pf-m-spacer-sm")},r().createElement(l.Dropdown,u({},y,{isOpen:C,isPlain:!0,onSelect:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];b&&b.apply(void 0,e),S(!1)},ouiaId:"Actions",toggle:r().createElement(l.KebabToggle,u({},h,{onToggle:function(e){S(e)}})),dropdownItems:x}))))}},95809:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var o=n(43297),r=n.n(o),l=n(55138),a=n(83632),i=n(68770),c=n(63753),u=n(48799),s=n(18213),d=n(51812),p=n(68379),f=function(){return f=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},f.apply(this,arguments)};const v=function(e){var t,n=e.id,o=e.className,v=e.toggleIsExpanded,m=e.bulkSelect,b=e.filterConfig,g=e.dedicatedAction,y=e.actionsConfig,h=e.sortByConfig,E=e.pagination,k=e.activeFiltersConfig,C=e.children,w=e.exportConfig,S=e.expandAll,O=e.useMobileLayout,I=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(e,["id","className","toggleIsExpanded","bulkSelect","filterConfig","dedicatedAction","actionsConfig","sortByConfig","pagination","activeFiltersConfig","children","exportConfig","expandAll","useMobileLayout"]),x=function(e,t,n){if(n||2===arguments.length)for(var o,r=0,l=t.length;r<l;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}([],h?[{label:"Sort order ASC",props:{isDisabled:h.direction===i.SortByDirection.asc},onClick:function(e){return h.onSortChange&&h.onSortChange(e,i.SortByDirection.asc)}},{label:"Sort order DESC",props:{isDisabled:h.direction===i.SortByDirection.desc},onClick:function(e){return h.onSortChange&&h.onSortChange(e,i.SortByDirection.desc)}}]:[],!0);return r().createElement(l.Toolbar,f({},I,{className:"".concat(o||""," ins-c-primary-toolbar"),toggleIsExpanded:v,id:n?"".concat(n):"ins-primary-data-toolbar",ouiaId:"PrimaryToolbar"}),r().createElement(l.ToolbarContent,null,(S||m||b||g)&&r().createElement(l.ToolbarGroup,{className:"ins-c-primary-toolbar__group-filter pf-m-spacer-md pf-m-space-items-lg",variant:"filter-group"},S&&r().createElement(l.ToolbarItem,null,(t=S,r().isValidElement(t)?S:r().createElement(l.Button,f({},S.buttonProps,{variant:"plain","aria-label":"".concat(S.isAllExpanded?"Collapse":"Expand"," all"),onClick:function(e){return S.onClick(e,!S.isAllExpanded)},ouiaId:"ExpandCollapseAll",isDisabled:S.isDisabled}),r().createElement(l.ToolbarExpandIconWrapper,null,S.isAllExpanded?r().createElement(a.AngleDownIcon,null):r().createElement(a.AngleRightIcon,null))))),m&&r().createElement(l.ToolbarItem,null,r().isValidElement(m)?m:r().createElement(u.Z,f({ouiaId:"BulkSelect"},m))),b&&r().createElement(l.ToolbarItem,{className:"ins-c-primary-toolbar__filter"},r().isValidElement(b)?b:r().createElement(s.Z,f({useMobileLayout:O},b))),g&&r().createElement(l.ToolbarItem,null,g)),r().isValidElement(y)?y:(y&&y.actions&&y.actions.length>0||h||w)&&r().createElement(c.ZP,f({},y||{},{exportConfig:w,overflowActions:x})),h&&r().createElement(l.ToolbarItem,{className:"ins-c-primary-toolbar__sort-by"},r().isValidElement(h)?h:r().createElement(p.Z,f({},h))),C,E&&r().createElement(l.ToolbarItem,{className:"ins-c-primary-toolbar__pagination"},r().isValidElement(E)?E:r().createElement(l.Pagination,f({isCompact:!0,ouiaId:"CompactPagination"},E)))),k&&r().isValidElement(k)?r().createElement(l.ToolbarContent,null,r().createElement(l.ToolbarItem,null,k)):void 0!==(null==k?void 0:k.filters)&&(k.filters.length>0||!0===k.showDeleteButton)&&r().createElement(l.ToolbarContent,null,r().createElement(l.ToolbarItem,null,r().createElement(d.Z,f({},k)))))}},68379:(e,t,n)=>{"use strict";n.d(t,{N:()=>c,Z:()=>u});var o=n(43297),r=n.n(o),l=n(68770),a=n(55138),i=n(83632);function c(e){return e===l.SortByDirection.asc?l.SortByDirection.desc:l.SortByDirection.asc}const u=function(e){var t=e.direction,n=void 0===t?l.SortByDirection.asc:t,o=e.onSortChange,u=void 0===o?function(){}:o;return r().createElement(a.Button,{variant:"plain",onClick:function(e){return u(e,c(n))}},n===l.SortByDirection.asc?r().createElement(i.SortAmountUpIcon,{size:"sm"}):r().createElement(i.SortAmountDownIcon,{size:"sm"}))}},65550:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(43297),r=n.n(o),l=n(55138),a=n(62472),i=n(94184),c=n.n(i),u=function(){return u=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u.apply(this,arguments)};const s=function(e){var t,n=e.isFooter,i=void 0!==n&&n,s=e.results,d=e.className,p=e.selected,f=e.children,v=e.ouiaId,m=e.ouiaSafe,b=void 0===m||m,g=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(e,["isFooter","results","className","selected","children","ouiaId","ouiaSafe"]),y=c()("ins-c-table__toolbar",((t={})["ins-m-footer"]=i,t),d),h="RHI/TableToolbar",E=(0,a.Z1)(h,v,b);return r().createElement(o.Fragment,null,r().createElement(l.Toolbar,u({className:y,"data-ouia-component-type":h,"data-ouia-component-id":E,"data-ouia-safe":b},g),f),(s&&s>=0||p&&p>=0)&&r().createElement("div",{className:"ins-c-table__toolbar-results"},s&&s>=0&&r().createElement("span",{className:"ins-c-table__toolbar-results-count"}," ",function(e){return"".concat(e,e>1||e<1?" Results":" Result")}(s)," "),p&&p>=0&&r().createElement("span",{className:"ins-c-table__toolbar-results-selected"}," ",p," Selected ")))}},14259:e=>{e.exports=function(e,t,n){var o=-1,r=e.length;t<0&&(t=-t>r?0:r+t),(n=n>r?r:n)<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var l=Array(r);++o<r;)l[o]=e[o+t];return l}},57406:(e,t,n)=>{var o=n(71811),r=n(10928),l=n(40292),a=n(40327);e.exports=function(e,t){return t=o(t,e),null==(e=l(e,t))||delete e[a(r(t))]}},60696:(e,t,n)=>{var o=n(68630);e.exports=function(e){return o(e)?void 0:e}},40292:(e,t,n)=>{var o=n(97786),r=n(14259);e.exports=function(e,t){return t.length<2?e:o(e,r(t,0,-1))}},57557:(e,t,n)=>{var o=n(29932),r=n(85990),l=n(57406),a=n(71811),i=n(98363),c=n(60696),u=n(99021),s=n(46904),d=u((function(e,t){var n={};if(null==e)return n;var u=!1;t=o(t,(function(t){return t=a(t,e),u||(u=t.length>1),t})),i(e,s(e),n),u&&(n=r(n,7,c));for(var d=t.length;d--;)l(n,t[d]);return n}));e.exports=d},74131:()=>{}}]);