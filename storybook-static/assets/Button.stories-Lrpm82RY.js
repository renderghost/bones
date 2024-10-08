import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as d}from"./index-DJO9vBfz.js";const v=({label:t,size:n,variant:a,contentType:l,icon:r,leftIcon:o,rightIcon:s,fullWidth:m=!1,loading:c=!1,tooltip:p,className:f="",disabled:b=!1,...w})=>{const T=["bones-button",`bones-button--${n}`,`bones-button--${a}`,m?"bones-button--full-width":"",c?"bones-button--loading":"",b?"bones-button--disabled":"",f].filter(Boolean).join(" "),O=()=>{if(c)return e.jsx("span",{className:"bones-button__spinner","aria-hidden":"true"});switch(l){case"labelOnly":return e.jsx("span",{children:t});case"leftIcon":return e.jsxs(e.Fragment,{children:[o&&e.jsx(o,{className:"bones-button__icon bones-button__icon--left"}),e.jsx("span",{children:t})]});case"rightIcon":return e.jsxs(e.Fragment,{children:[e.jsx("span",{children:t}),s&&e.jsx(s,{className:"bones-button__icon bones-button__icon--right"})]});case"bothIcons":return e.jsxs(e.Fragment,{children:[o&&e.jsx(o,{className:"bones-button__icon bones-button__icon--left"}),e.jsx("span",{children:t}),s&&e.jsx(s,{className:"bones-button__icon bones-button__icon--right"})]});case"iconOnly":return r&&e.jsx(r,{className:"bones-button__icon","aria-hidden":"true"});default:return e.jsx("span",{children:t})}};return e.jsx("button",{className:T,disabled:b||c,title:p,"aria-label":l==="iconOnly"?t:void 0,...w,children:O()})};v.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{label:{required:!1,tsType:{name:"string"},description:"The text to display on the button"},size:{required:!0,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"The size of the button"},variant:{required:!0,tsType:{name:"union",raw:"'primary' | 'secondary' | 'caution' | 'transparent'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'caution'"},{name:"literal",value:"'transparent'"}]},description:"The visual style variant of the button"},contentType:{required:!0,tsType:{name:"union",raw:`| 'labelOnly'
| 'leftIcon'
| 'rightIcon'
| 'bothIcons'
| 'iconOnly'`,elements:[{name:"literal",value:"'labelOnly'"},{name:"literal",value:"'leftIcon'"},{name:"literal",value:"'rightIcon'"},{name:"literal",value:"'bothIcons'"},{name:"literal",value:"'iconOnly'"}]},description:"The content layout of the button"},icon:{required:!1,tsType:{name:"LucideIcon"},description:"Icon to display when contentType is 'iconOnly'"},leftIcon:{required:!1,tsType:{name:"LucideIcon"},description:"Icon to display on the left side of the label"},rightIcon:{required:!1,tsType:{name:"LucideIcon"},description:"Icon to display on the right side of the label"},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Whether the button should take up the full width of its container",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the button is in a loading state",defaultValue:{value:"false",computed:!1}},tooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text for the button"},className:{defaultValue:{value:"''",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),I=(...t)=>t.filter((n,a,l)=>!!n&&l.indexOf(n)===a).join(" ");/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var N={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=d.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:l,className:r="",children:o,iconNode:s,...m},c)=>d.createElement("svg",{ref:c,...N,width:n,height:n,stroke:t,strokeWidth:l?Number(a)*24/Number(n):a,className:I("lucide",r),...m},[...s.map(([p,f])=>d.createElement(p,f)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=(t,n)=>{const a=d.forwardRef(({className:l,...r},o)=>d.createElement(q,{ref:o,iconNode:n,className:I(`lucide-${k(t)}`,l),...r}));return a.displayName=`${t}`,a};/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=_("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=_("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]),i={None:void 0,Home:j,ArrowRight:x},V={title:"Components/Button",component:v,argTypes:{label:{control:"text"},variant:{control:"select",options:["primary","secondary","caution","transparent"],defaultValue:"primary"},size:{control:"select",options:["small","medium","large"],defaultValue:"medium"},contentType:{control:"select",options:["labelOnly","leftIcon","rightIcon","bothIcons","iconOnly"],defaultValue:"leftIcon"},icon:{control:"select",options:Object.keys(i),mapping:i,defaultValue:"None"},leftIcon:{control:"select",options:Object.keys(i),mapping:i,defaultValue:"Home"},rightIcon:{control:"select",options:Object.keys(i),mapping:i,defaultValue:"ArrowRight"},fullWidth:{control:"boolean",defaultValue:!1},loading:{control:"boolean",defaultValue:!1},disabled:{control:"boolean",defaultValue:!1},onClick:{action:"clicked"}}},u={args:{label:"Some Label",variant:"primary",size:"medium",contentType:"leftIcon",fullWidth:!1,loading:!1,disabled:!1,leftIcon:j,rightIcon:x}};var h,y,g;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Some Label',
    variant: 'primary',
    size: 'medium',
    contentType: 'leftIcon',
    fullWidth: false,
    loading: false,
    disabled: false,
    leftIcon: Home,
    rightIcon: ArrowRight
  }
}`,...(g=(y=u.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const C=["Default"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:u,__namedExportsOrder:C,default:V},Symbol.toStringTag,{value:"Module"}));export{z as B,u as D};
