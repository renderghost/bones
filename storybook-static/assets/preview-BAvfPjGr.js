import"./index-DJO9vBfz.js";const{useParameter:c,addons:l,useEffect:d,useMemo:I}=__STORYBOOK_MODULE_PREVIEW_API__;var A=Object.defineProperty,R=(e,t)=>{for(var r in t)A(e,r,{get:t[r],enumerable:!0})},S={};R(S,{initializeThemeState:()=>n,pluckThemeFromContext:()=>T,useThemeParameters:()=>i});var m="themes",p=`storybook/${m}`,D="theme",M={},O={REGISTER_THEMES:`${p}/REGISTER_THEMES`};function T({globals:e}){return e[D]||""}function i(){return c(m,M)}function n(e,t){l.getChannel().emit(O.REGISTER_THEMES,{defaultTheme:t,themes:e})}var f="html",v="data-theme",P=({themes:e,defaultTheme:t,parentSelector:r=f,attributeName:_=v})=>(n(Object.keys(e),t),(s,h)=>{let{themeOverride:a}=i(),E=T(h);return d(()=>{let o=document.querySelector(r),u=a||E||t;o&&o.setAttribute(_,e[u])},[a,E]),s()});const L={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},docs:{}},decorators:[P({themes:{light:"light",dark:"dark"},defaultTheme:"light",attributeName:"data-mode"})]};export{L as default};