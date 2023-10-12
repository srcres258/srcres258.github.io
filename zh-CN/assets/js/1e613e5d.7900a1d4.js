"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[8863],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,f=s["".concat(i,".").concat(m)]||s[m]||u[m]||a;return r?n.createElement(f,c(c({ref:t},d),{},{components:r})):n.createElement(f,c({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6250:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=r(7462),o=r(7294),a=r(3905),c=r(9960);function l(e){return o.createElement("div",{className:"card"},o.createElement("div",{className:"card__header"},o.createElement("h3",null,e.title)),o.createElement("div",{className:"card__body"},o.createElement("p",null,e.body)),null!=e.link?o.createElement("div",{className:"card__footer"},o.createElement(c.Z,{isNavLink:!0,to:e.link,className:"button button--secondary button--block"},e.linkTitle)):"")}const i={},p="NeoForged \u6587\u6863",d={type:"mdx",permalink:"/zh-CN/",source:"@site/i18n/zh-CN/docusaurus-plugin-content-pages/index.mdx",title:"NeoForged \u6587\u6863",description:"\u8bf7\u6ce8\u610f\uff0c\u7531\u4e8eNeoForged\u5904\u4e8e\u521b\u59cb\u9636\u6bb5\uff0c\u672c\u6587\u6863\u53ef\u80fd\u672a\u7d27\u8ddf\u6700\u65b0\u7248\u672c\u3002",frontMatter:{}},s=[],u={toc:s},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"neoforged-\u6587\u6863"},"NeoForged \u6587\u6863"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u8bf7\u6ce8\u610f\uff0c\u7531\u4e8eNeoForged\u5904\u4e8e\u521b\u59cb\u9636\u6bb5\uff0c\u672c\u6587\u6863\u53ef\u80fd\u672a\u7d27\u8ddf\u6700\u65b0\u7248\u672c\u3002")),(0,a.kt)("p",null,"\u8fd9\u91cc\u662fMinecraft\u6a21\u7ec4API\u2014\u2014",(0,a.kt)("a",{parentName:"p",href:"https://neoforged.net"},"NeoForged"),"\u7684\u5b98\u65b9\u6587\u6863\u3002"),(0,a.kt)("p",null,"\u8be5\u6587\u6863 ",(0,a.kt)("em",{parentName:"p"},"\u4ec5")," \u9488\u5bf9Forge\u7f16\u7e82\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u800c\u4e0d\u662f\u4e00\u4e2aJava\u6559\u7a0b"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u613f\u610f\u5bf9\u6587\u6863\u505a\u51fa\u8d21\u732e\uff0c\u8bf7\u9605\u8bfb",(0,a.kt)("a",{parentName:"p",href:"./contributing"},"\u5411\u6587\u6863\u505a\u51fa\u8d21\u732e"),"\u3002"),(0,a.kt)("div",{class:"container"},(0,a.kt)("div",{class:"row"},(0,a.kt)("div",{class:"col col--6"},(0,a.kt)(l,{title:"NeoForged \u6587\u6863",body:"Learn how to create your first mod using NeoForge, and discover the vast APIs it provides.",body:"\u5b66\u4e60\u5982\u4f55\u4f7f\u7528NeoForge\u7f16\u5199\u4f60\u7684\u7b2c\u4e00\u4e2a\u6a21\u7ec4\uff0c\u5e76\u9886\u7565\u5176\u63d0\u4f9b\u7684\u4e30\u5bccAPI\u3002",link:"/docs/gettingstarted/",linkTitle:"\u5165\u95e8",mdxType:"Card"})),(0,a.kt)("div",{class:"col col--6"},(0,a.kt)(l,{title:"NeoGradle \u6587\u6863",body:"NeoGradle\u662f\u4e00\u4e2aGradle\u63d2\u4ef6\uff0c\u5141\u8bb8\u5f00\u53d1\u8005\u4e3aNeoForge\u521b\u5efa\u6a21\u7ec4\u5e76\u5f00\u53d1NeoForge\u81ea\u8eab\u3002",link:"/neogradle/docs/",linkTitle:"\u9605\u8bfb\u66f4\u591a",mdxType:"Card"})))))}f.isMDXComponent=!0}}]);