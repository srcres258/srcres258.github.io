"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[2405],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||s[m]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={},o="\u5b9e\u4f53",p={unversionedId:"networking/entities",id:"networking/entities",title:"\u5b9e\u4f53",description:"\u9664\u4e86\u5e38\u89c4\u7684\u7f51\u7edc\u6d88\u606f\u4e4b\u5916\uff0cForge\u8fd8\u63d0\u4f9b\u4e86\u5404\u79cd\u5176\u4ed6\u7cfb\u7edf\u6765\u5904\u7406\u540c\u6b65\u5b9e\u4f53\u6570\u636e\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/networking/entities.md",sourceDirName:"networking",slug:"/networking/entities",permalink:"/zh-CN/docs/networking/entities",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"\u7f51\u7edc",permalink:"/zh-CN/docs/networking/"},next:{title:"SimpleImpl",permalink:"/zh-CN/docs/networking/simpleimpl"}},l={},c=[{value:"\u751f\u6210\u6570\u636e",id:"\u751f\u6210\u6570\u636e",level:2},{value:"IEntityAdditionalSpawnData",id:"ientityadditionalspawndata",level:3},{value:"\u52a8\u6001\u6570\u636e",id:"\u52a8\u6001\u6570\u636e",level:2},{value:"\u6570\u636e\u53c2\u6570",id:"\u6570\u636e\u53c2\u6570",level:3}],d={toc:c},u="wrapper";function s(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5b9e\u4f53"},"\u5b9e\u4f53"),(0,i.kt)("p",null,"\u9664\u4e86\u5e38\u89c4\u7684\u7f51\u7edc\u6d88\u606f\u4e4b\u5916\uff0cForge\u8fd8\u63d0\u4f9b\u4e86\u5404\u79cd\u5176\u4ed6\u7cfb\u7edf\u6765\u5904\u7406\u540c\u6b65\u5b9e\u4f53\u6570\u636e\u3002"),(0,i.kt)("h2",{id:"\u751f\u6210\u6570\u636e"},"\u751f\u6210\u6570\u636e"),(0,i.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u7531\u6a21\u7ec4\u7f16\u5199\u7684\u5b9e\u4f53\u7684\u751f\u6210\u662f\u7531Forge\u5355\u72ec\u5904\u7406\u7684\u3002"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"\u8fd9\u610f\u5473\u7740\u7b80\u5355\u5730\u7ee7\u627f\u4e00\u4e2a\u539f\u7248\u5b9e\u4f53\u7c7b\u53ef\u80fd\u4e0d\u4f1a\u7ee7\u627f\u5b83\u7684\u6240\u6709\u884c\u4e3a\u3002\u4f60\u53ef\u80fd\u9700\u8981\u81ea\u5df1\u5b9e\u65bd\u67d0\u4e9b\u539f\u7248\u884c\u4e3a\u3002\n"))),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0\u4ee5\u4e0b\u63a5\u53e3\u5411Forge\u53d1\u9001\u7684\u751f\u6210\u6570\u636e\u5305\u6dfb\u52a0\u989d\u5916\u7684\u6570\u636e\u3002"),(0,i.kt)("h3",{id:"ientityadditionalspawndata"},"IEntityAdditionalSpawnData"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u7684\u5b9e\u4f53\u5177\u6709\u5ba2\u6237\u7aef\u6240\u9700\u7684\u6570\u636e\uff0c\u4f46\u4e0d\u4f1a\u968f\u65f6\u95f4\u53d8\u5316\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u6b64\u63a5\u53e3\u5c06\u5176\u6dfb\u52a0\u5230\u5b9e\u4f53\u751f\u6210\u6570\u636e\u5305\u4e2d\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"#writeSpawnData"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"#readSpawnData"),"\u63a7\u5236\u5982\u4f55\u5c06\u6570\u636e\u7f16\u7801\u5230\u7f51\u7edc\u7f13\u51b2\u533a/\u4ece\u7f51\u7edc\u7f13\u51b2\u533a\u89e3\u7801\u6570\u636e\u3002"),(0,i.kt)("h2",{id:"\u52a8\u6001\u6570\u636e"},"\u52a8\u6001\u6570\u636e"),(0,i.kt)("h3",{id:"\u6570\u636e\u53c2\u6570"},"\u6570\u636e\u53c2\u6570"),(0,i.kt)("p",null,"\u8fd9\u662f\u7528\u4e8e\u5c06\u5b9e\u4f53\u6570\u636e\u4ece\u670d\u52a1\u7aef\u540c\u6b65\u5230\u5ba2\u6237\u7aef\u7684\u4e3b\u8981\u539f\u7248\u7cfb\u7edf\u3002\u56e0\u6b64\uff0c\u53ef\u4ee5\u53c2\u8003\u4e00\u4e9b\u539f\u7248\u7684\u4f8b\u5b50\u3002"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u5bf9\u4e8e\u8981\u4fdd\u6301\u540c\u6b65\u7684\u6570\u636e\uff0c\u4f60\u9700\u8981\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"EntityDataAccessor<T>"),"\u3002\u8fd9\u5e94\u8be5\u5b58\u50a8\u4e3a\u4f60\u7684\u5b9e\u4f53\u7c7b\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"static final"),"\u5b57\u6bb5\uff0c\u901a\u8fc7\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"SynchedEntityData#defineId"),"\u5e76\u4f20\u9012\u5b9e\u4f53\u7c7b\u548c\u8be5\u7c7b\u578b\u6570\u636e\u7684\u5e8f\u5217\u5316\u5668\u6765\u83b7\u5f97\u3002\u53ef\u7528\u7684\u5e8f\u5217\u5316\u5668\u5b9e\u73b0\u53ef\u4ee5\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"EntityDataSerializers"),"\u7c7b\u4e2d\u7684\u9759\u6001\u5e38\u91cf\u627e\u5230\u3002"),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"\u4f60\u5e94\u8be5 __\u53ea__ _\u5728\u76f8\u5e94\u5b9e\u4f53\u7684\u7c7b_ \u4e2d\u4e3a\u81ea\u5df1\u7684\u5b9e\u4f53\u521b\u5efa\u6570\u636e\u53c2\u6570\u3002\n\u5411\u5e76\u975e\u4f60\u6240\u63a7\u5236\u7684\u5b9e\u4f53\u6dfb\u52a0\u53c2\u6570\u53ef\u80fd\u4f1a\u5bfc\u81f4\u7528\u4e8e\u901a\u8fc7\u7f51\u7edc\u53d1\u9001\u6570\u636e\u7684ID\u4e0d\u540c\u6b65\uff0c\u4ece\u800c\u5bfc\u81f4\u96be\u4ee5\u8c03\u8bd5\u7684\u5d29\u6e83\u3002\n"))),(0,i.kt)("p",null,"\u7136\u540e\uff0c\u91cd\u5199",(0,i.kt)("inlineCode",{parentName:"p"},"Entity#defineSynchedData"),"\u5e76\u4e3a\u6bcf\u4e2a\u6570\u636e\u53c2\u6570\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"this.entityData.define(...)"),"\uff0c\u4f20\u9012\u53c2\u6570\u548c\u8981\u4f7f\u7528\u7684\u521d\u59cb\u503c\u3002\u8bf7\u8bb0\u4f4f\u59cb\u7ec8\u9996\u5148\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"super"),"\u65b9\u6cd5\uff01"),(0,i.kt)("p",null,"\u7136\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5b9e\u4f53\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"entityData"),"\u5b9e\u4f8b\u83b7\u53d6\u5e76\u8bbe\u7f6e\u8fd9\u4e9b\u503c\u3002\u6240\u505a\u7684\u66f4\u6539\u5c06\u81ea\u52a8\u540c\u6b65\u5230\u5ba2\u6237\u7aef\u3002"))}s.isMDXComponent=!0}}]);