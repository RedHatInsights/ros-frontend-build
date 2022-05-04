"use strict";(self.webpackChunkros_frontend=self.webpackChunkros_frontend||[]).push([[403],{22910:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Dropdown=void 0;const n=o(21988),i=n.__importStar(o(1427)),s=n.__importDefault(o(79942)),r=o(92512),l=o(19830),a=o(23053);t.Dropdown=e=>{var{onSelect:o,ref:d,ouiaId:p,ouiaSafe:c,alignments:u,contextProps:m}=e,f=n.__rest(e,["onSelect","ref","ouiaId","ouiaSafe","alignments","contextProps"]);return i.createElement(r.DropdownContext.Provider,{value:Object.assign({onSelect:e=>o&&o(e),toggleTextClass:s.default.dropdownToggleText,toggleIconClass:s.default.dropdownToggleImage,toggleIndicatorClass:s.default.dropdownToggleIcon,menuClass:s.default.dropdownMenu,itemClass:s.default.dropdownMenuItem,toggleClass:s.default.dropdownToggle,baseClass:s.default.dropdown,baseComponent:"div",sectionClass:s.default.dropdownGroup,sectionTitleClass:s.default.dropdownGroupTitle,sectionComponent:"section",disabledClass:s.default.modifiers.disabled,plainTextClass:s.default.modifiers.text,ouiaId:a.useOUIAId(t.Dropdown.displayName,p),ouiaSafe:c,ouiaComponentType:t.Dropdown.displayName,alignments:u},m)},i.createElement(l.DropdownWithContext,Object.assign({},f)))},t.Dropdown.displayName="Dropdown"},96823:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DropdownItem=void 0;const n=o(21988),i=n.__importStar(o(1427)),s=o(39496),r=o(92512),l=o(23053);t.DropdownItem=e=>{var{children:o,className:a,component:d="a",isDisabled:p=!1,isAriaDisabled:c=!1,isPlainText:u=!1,isHovered:m=!1,href:f,tooltip:g,tooltipProps:h={},listItemClassName:C,onClick:w,ref:D,additionalChild:b,customChild:E,tabIndex:y=-1,icon:v=null,autoFocus:T,description:_=null,styleChildren:x,ouiaId:P,ouiaSafe:R}=e,O=n.__rest(e,["children","className","component","isDisabled","isAriaDisabled","isPlainText","isHovered","href","tooltip","tooltipProps","listItemClassName","onClick","ref","additionalChild","customChild","tabIndex","icon","autoFocus","description","styleChildren","ouiaId","ouiaSafe"]);const I=l.useOUIAProps(t.DropdownItem.displayName,P,R);return i.createElement(r.DropdownArrowContext.Consumer,null,(e=>i.createElement(s.InternalDropdownItem,Object.assign({context:e,role:"menuitem",tabIndex:y,className:a,component:d,isDisabled:p,isAriaDisabled:c,isPlainText:u,isHovered:m,href:f,tooltip:g,tooltipProps:h,listItemClassName:C,onClick:w,additionalChild:b,customChild:E,icon:v,autoFocus:T,styleChildren:x,description:_},I,O),o)))},t.DropdownItem.displayName="DropdownItem"},5410:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DropdownMenu=void 0;const n=o(21988),i=n.__importStar(o(1427)),s=n.__importStar(o(88696)),r=n.__importDefault(o(79942)),l=o(38296),a=o(42319),d=o(92512);class p extends i.Component{constructor(){super(...arguments),this.refsCollection=[],this.componentWillUnmount=()=>{document.removeEventListener("keydown",this.onKeyDown)},this.onKeyDown=e=>{if(!this.props.isOpen||!Array.from(document.activeElement.classList).find((e=>p.validToggleClasses.concat(this.context.toggleClass).includes(e))))return;const t=this.refsCollection;if("ArrowDown"===e.key){const o=t.find((e=>e&&e[0]&&!e[0].hasAttribute("disabled")));p.focusFirstRef(o),e.stopPropagation()}else if("ArrowUp"===e.key){const o=t.length,n=t.slice(o-1,o),i=n&&n[0];p.focusFirstRef(i),e.stopPropagation()}},this.childKeyHandler=(e,t,o,n=!1)=>{a.keyHandler(e,t,o,this.refsCollection,this.props.isGrouped?this.refsCollection:i.Children.toArray(this.props.children),n)},this.sendRef=(e,t,o,n)=>{this.refsCollection[e]=[],t.map(((t,o)=>{t?t.getAttribute?this.refsCollection[e][o]=n?null:t:this.refsCollection[e][o]=s.findDOMNode(t):this.refsCollection[e][o]=null}))}}componentDidMount(){document.addEventListener("keydown",this.onKeyDown);const{autoFocus:e}=this.props;if(e){const e=this.refsCollection.find((e=>e&&e[0]&&!e[0].hasAttribute("disabled"))),t=e&&e[0];t&&t.focus&&setTimeout((()=>t.focus()))}}shouldComponentUpdate(){return this.refsCollection=[],!0}extendChildren(){const{children:e,isGrouped:t}=this.props;if(t){let t=0;return i.Children.map(e,(e=>{const o=e,n={};return o.props&&o.props.children&&(Array.isArray(o.props.children)?n.children=i.Children.map(o.props.children,(e=>i.cloneElement(e,{index:t++}))):n.children=i.cloneElement(o.props.children,{index:t++})),i.cloneElement(o,n)}))}return i.Children.map(e,((e,t)=>i.cloneElement(e,{index:t})))}render(){const e=this.props,{className:t,isOpen:o,position:s,children:p,component:c,isGrouped:u,setMenuComponentRef:m,openedOnEnter:f,alignments:g}=e,h=n.__rest(e,["className","isOpen","position","children","component","isGrouped","setMenuComponentRef","openedOnEnter","alignments"]);return i.createElement(d.DropdownArrowContext.Provider,{value:{keyHandler:this.childKeyHandler,sendRef:this.sendRef}},"div"===c?i.createElement(d.DropdownContext.Consumer,null,(({onSelect:e,menuClass:n})=>i.createElement("div",{className:l.css(n,s===d.DropdownPosition.right&&r.default.modifiers.alignRight,a.formatBreakpointMods(g,r.default,"align-"),t),hidden:!o,onClick:t=>e&&e(t),ref:m},p))):u&&i.createElement(d.DropdownContext.Consumer,null,(({menuClass:e,menuComponent:n})=>{const p=n||"div";return i.createElement(p,Object.assign({},h,{className:l.css(e,s===d.DropdownPosition.right&&r.default.modifiers.alignRight,a.formatBreakpointMods(g,r.default,"align-"),t),hidden:!o,role:"menu",ref:m}),this.extendChildren())}))||i.createElement(d.DropdownContext.Consumer,null,(({menuClass:e,menuComponent:n})=>{const p=n||c;return i.createElement(p,Object.assign({},h,{className:l.css(e,s===d.DropdownPosition.right&&r.default.modifiers.alignRight,a.formatBreakpointMods(g,r.default,"align-"),t),hidden:!o,role:"menu",ref:m}),this.extendChildren())})))}}t.DropdownMenu=p,p.displayName="DropdownMenu",p.defaultProps={className:"",isOpen:!0,openedOnEnter:!1,autoFocus:!0,position:d.DropdownPosition.left,component:"ul",isGrouped:!1,setMenuComponentRef:null},p.validToggleClasses=[r.default.dropdownToggle,r.default.dropdownToggleButton],p.focusFirstRef=e=>{e&&e[0]&&e[0].focus&&setTimeout((()=>e[0].focus()))},p.contextType=d.DropdownContext},80765:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DropdownToggle=void 0;const n=o(21988),i=n.__importStar(o(1427)),s=n.__importDefault(o(96466)),r=o(75902),l=n.__importDefault(o(79942)),a=o(92512),d=o(38296),p=o(23053);t.DropdownToggle=e=>{var{id:o="",children:c=null,className:u="",isOpen:m=!1,parentRef:f=null,getMenuRef:g=null,isDisabled:h=!1,isPlain:C=!1,isText:w=!1,isPrimary:D=!1,toggleVariant:b="default",isActive:E=!1,onToggle:y=(e=>{}),icon:v=null,toggleIndicator:T=s.default,splitButtonItems:_,splitButtonVariant:x="checkbox","aria-haspopup":P,ouiaId:R,ouiaSafe:O,ref:I}=e,N=n.__rest(e,["id","children","className","isOpen","parentRef","getMenuRef","isDisabled","isPlain","isText","isPrimary","toggleVariant","isActive","onToggle","icon","toggleIndicator","splitButtonItems","splitButtonVariant","aria-haspopup","ouiaId","ouiaSafe","ref"]);const k=p.useOUIAProps(t.DropdownToggle.displayName,R,O),M=i.createElement(a.DropdownContext.Consumer,null,(({toggleTextClass:e,toggleIndicatorClass:t,toggleIconClass:n})=>i.createElement(r.Toggle,Object.assign({},N,{id:o,className:u,isOpen:m,parentRef:f,getMenuRef:g,isActive:E,isDisabled:h,isPlain:C,isText:w,isPrimary:D,toggleVariant:b,onToggle:y,"aria-haspopup":P},k,_&&{isSplitButton:!0,"aria-label":N["aria-label"]||"Select"}),v&&i.createElement("span",{className:d.css(n)},v),c&&i.createElement("span",{className:T&&d.css(e)},c),T&&i.createElement("span",{className:d.css(!_&&t)},i.createElement(T,null)))));return _?i.createElement("div",{className:d.css(l.default.dropdownToggle,l.default.modifiers.splitButton,"action"===x&&l.default.modifiers.action,("primary"===b||D)&&"action"===x&&l.default.modifiers.primary,h&&l.default.modifiers.disabled)},_,M):M},t.DropdownToggle.displayName="DropdownToggle"},19830:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DropdownWithContext=void 0;const n=o(21988),i=n.__importStar(o(1427)),s=n.__importDefault(o(79942)),r=o(38296),l=o(5410),a=o(92512),d=o(23053),p=o(69708);class c extends i.Component{constructor(e){super(e),this.openedOnEnter=!1,this.baseComponentRef=i.createRef(),this.menuComponentRef=i.createRef(),this.onEnter=()=>{this.openedOnEnter=!0},this.setMenuComponentRef=e=>{this.menuComponentRef=e},this.getMenuComponentRef=()=>this.menuComponentRef,e.dropdownItems&&e.dropdownItems.length>0&&e.children&&console.error("Children and dropdownItems props have been provided. Only the dropdownItems prop items will be rendered")}componentDidUpdate(){this.props.isOpen||(this.openedOnEnter=!1)}render(){const e=this.props,{children:t,className:o,direction:u,dropdownItems:m,isOpen:f,isPlain:g,isText:h,isGrouped:C,isFullHeight:w,onSelect:D,position:b,toggle:E,autoFocus:y,menuAppendTo:v}=e,T=n.__rest(e,["children","className","direction","dropdownItems","isOpen","isPlain","isText","isGrouped","isFullHeight","onSelect","position","toggle","autoFocus","menuAppendTo"]),_=E.props.id||"pf-dropdown-toggle-id-"+c.currentId++;let x,P,R=!1;m&&m.length>0?(x="ul",P=m,R=!0):(x="div",P=i.Children.toArray(t));const O=this.openedOnEnter;return i.createElement(a.DropdownContext.Consumer,null,(({baseClass:e,baseComponent:t,id:n,ouiaId:c,ouiaComponentType:m,ouiaSafe:D,alignments:I})=>{const N=t,k=i.createElement(l.DropdownMenu,{setMenuComponentRef:this.setMenuComponentRef,component:x,isOpen:f,position:b,"aria-labelledby":n?`${n}-toggle`:_,isGrouped:C,autoFocus:O&&y,alignments:I},P),M=i.createElement("div",{className:r.css(e,u===a.DropdownDirection.up&&s.default.modifiers.top,b===a.DropdownPosition.right&&s.default.modifiers.alignRight,f&&s.default.modifiers.expanded,o)},f&&k),A=i.createElement(N,Object.assign({},T,{className:r.css(e,u===a.DropdownDirection.up&&s.default.modifiers.top,b===a.DropdownPosition.right&&s.default.modifiers.alignRight,f&&s.default.modifiers.expanded,w&&s.default.modifiers.fullHeight,o),ref:this.baseComponentRef},d.getOUIAProps(m,c,D)),i.Children.map(E,(e=>i.cloneElement(e,{parentRef:this.baseComponentRef,getMenuRef:this.getMenuComponentRef,isOpen:f,id:_,isPlain:g,isText:h,"aria-haspopup":R,onEnter:()=>{this.onEnter(),e.props.onEnter&&e.props.onEnter()}}))),"inline"===v&&f&&k);return"inline"===v?A:i.createElement(p.Popper,{trigger:A,popper:M,direction:u,position:b,appendTo:"parent"===v?(()=>this.baseComponentRef&&this.baseComponentRef.current?this.baseComponentRef.current.parentElement:null)():v,isVisible:f})}))}}t.DropdownWithContext=c,c.displayName="DropdownWithContext",c.currentId=0,c.defaultProps={className:"",dropdownItems:[],isOpen:!1,isPlain:!1,isText:!1,isGrouped:!1,position:a.DropdownPosition.left,direction:a.DropdownDirection.down,onSelect:()=>{},autoFocus:!0,menuAppendTo:"inline"}},75902:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Toggle=void 0;const n=o(21988),i=n.__importStar(o(1427)),s=n.__importDefault(o(79942)),r=o(92512),l=o(38296),a=o(26670),d={default:"",primary:s.default.modifiers.primary,secondary:s.default.modifiers.secondary};class p extends i.Component{constructor(){super(...arguments),this.buttonRef=i.createRef(),this.componentDidMount=()=>{document.addEventListener("click",this.onDocClick),document.addEventListener("touchstart",this.onDocClick),document.addEventListener("keydown",this.onEscPress)},this.componentWillUnmount=()=>{document.removeEventListener("click",this.onDocClick),document.removeEventListener("touchstart",this.onDocClick),document.removeEventListener("keydown",this.onEscPress)},this.onDocClick=e=>{const{isOpen:t,parentRef:o,onToggle:n,getMenuRef:i}=this.props,s=i&&i(),r=o&&o.current&&o.current.contains(e.target),l=s&&s.contains&&s.contains(e.target);!t||r||l||n(!1,e)},this.onEscPress=e=>{const{parentRef:t,getMenuRef:o}=this.props,n=e.keyCode||e.which,i=o&&o(),s=t&&t.current&&t.current.contains(e.target),r=i&&i.contains&&i.contains(e.target);!this.props.isOpen||n!==a.KEY_CODES.ESCAPE_KEY&&"Tab"!==e.key||!s&&!r||(this.props.onToggle(!1,e),this.buttonRef.current.focus())},this.onKeyDown=e=>{("Tab"!==e.key||this.props.isOpen)&&("Tab"!==e.key&&"Enter"!==e.key&&" "!==e.key||!this.props.isOpen?"Enter"!==e.key&&" "!==e.key||this.props.isOpen||(this.props.bubbleEvent||e.stopPropagation(),e.preventDefault(),this.props.onToggle(!this.props.isOpen,e),this.props.onEnter()):(this.props.bubbleEvent||e.stopPropagation(),e.preventDefault(),this.props.onToggle(!this.props.isOpen,e)))}}render(){const e=this.props,{className:t,children:o,isOpen:a,isDisabled:p,isPlain:c,isText:u,isPrimary:m,isSplitButton:f,toggleVariant:g,onToggle:h,"aria-haspopup":C,isActive:w,bubbleEvent:D,onEnter:b,parentRef:E,getMenuRef:y,id:v,type:T}=e,_=n.__rest(e,["className","children","isOpen","isDisabled","isPlain","isText","isPrimary","isSplitButton","toggleVariant","onToggle","aria-haspopup","isActive","bubbleEvent","onEnter","parentRef","getMenuRef","id","type"]);return i.createElement(r.DropdownContext.Consumer,null,(({toggleClass:e})=>i.createElement("button",Object.assign({},_,{id:v,ref:this.buttonRef,className:l.css(f?s.default.dropdownToggleButton:e||s.default.dropdownToggle,w&&s.default.modifiers.active,c&&s.default.modifiers.plain,u&&s.default.modifiers.text,m&&s.default.modifiers.primary,d[g],t),type:T||"button",onClick:e=>h(!a,e),"aria-expanded":a,"aria-haspopup":C,onKeyDown:e=>this.onKeyDown(e),disabled:p}),o)))}}t.Toggle=p,p.displayName="Toggle",p.defaultProps={className:"",isOpen:!1,isActive:!1,isDisabled:!1,isPlain:!1,isText:!1,isPrimary:!1,isSplitButton:!1,onToggle:()=>{},onEnter:()=>{},bubbleEvent:!1}},95511:(e,t,o)=>{t.__esModule=!0,t.AngleRightIconConfig={name:"AngleRightIcon",height:512,width:256,svgPath:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",yOffset:0,xOffset:0},t.AngleRightIcon=o(35183).createIcon(t.AngleRightIconConfig),t.default=t.AngleRightIcon}}]);