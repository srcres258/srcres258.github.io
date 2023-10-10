"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[7272],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=o,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2585:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const i={},a="\u90e8\u5206\u53ef\u89c1\u5ea6",l={unversionedId:"rendering/modelextensions/visibility",id:"rendering/modelextensions/visibility",title:"\u90e8\u5206\u53ef\u89c1\u5ea6",description:'\u5728\u6a21\u578bJSON\u7684\u9876\u5c42\u6dfb\u52a0visibility\u6761\u76ee\u53ef\u4ee5\u63a7\u5236\u6a21\u578b\u4e0d\u540c\u90e8\u5206\u7684\u53ef\u89c1\u6027\uff0c\u4ee5\u51b3\u5b9a\u662f\u5426\u5e94\u5c06\u5b83\u4eec\u70d8\u7119\u5230\u6700\u7ec8\u7684BakedModel\u4e2d\u3002\u201c\u96f6\u4ef6\u201d\u7684\u5b9a\u4e49\u53d6\u51b3\u4e8e\u52a0\u8f7d\u6b64\u6a21\u578b\u7684\u6a21\u578b\u52a0\u8f7d\u5668\uff0c\u81ea\u5b9a\u4e49\u6a21\u578b\u52a0\u8f7d\u5668\u53ef\u4ee5\u5b8c\u5168\u5ffd\u7565\u6b64\u6761\u76ee\u3002\u5728Forge\u63d0\u4f9b\u7684\u6a21\u578b\u52a0\u8f7d\u5668\u4e2d\uff0c\u53ea\u6709\u590d\u5408\u6a21\u578b\u52a0\u8f7d\u5668\u548cOBJ\u6a21\u578b\u52a0\u8f7d\u5668\u4f7f\u7528\u4e86\u6b64\u529f\u80fd\u3002\u53ef\u89c1\u6027\u6761\u76ee\u88ab\u6307\u5b9a\u4e3a"part name": boolean\u6761\u76ee\u3002',source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/rendering/modelextensions/visibility.md",sourceDirName:"rendering/modelextensions",slug:"/rendering/modelextensions/visibility",permalink:"/zh-CN/docs/rendering/modelextensions/visibility",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"\u6839\u53d8\u6362",permalink:"/zh-CN/docs/rendering/modelextensions/transforms"},next:{title:"\u81ea\u5b9a\u4e49\u6a21\u578b\u52a0\u8f7d\u5668",permalink:"/zh-CN/docs/rendering/modelloaders/"}},s={},p=[],c={toc:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u90e8\u5206\u53ef\u89c1\u5ea6"},"\u90e8\u5206\u53ef\u89c1\u5ea6"),(0,o.kt)("p",null,"\u5728\u6a21\u578bJSON\u7684\u9876\u5c42\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"visibility"),"\u6761\u76ee\u53ef\u4ee5\u63a7\u5236\u6a21\u578b\u4e0d\u540c\u90e8\u5206\u7684\u53ef\u89c1\u6027\uff0c\u4ee5\u51b3\u5b9a\u662f\u5426\u5e94\u5c06\u5b83\u4eec\u70d8\u7119\u5230\u6700\u7ec8\u7684",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/rendering/modelloaders/bakedmodel"},(0,o.kt)("inlineCode",{parentName:"a"},"BakedModel")),"\u4e2d\u3002\u201c\u96f6\u4ef6\u201d\u7684\u5b9a\u4e49\u53d6\u51b3\u4e8e\u52a0\u8f7d\u6b64\u6a21\u578b\u7684\u6a21\u578b\u52a0\u8f7d\u5668\uff0c\u81ea\u5b9a\u4e49\u6a21\u578b\u52a0\u8f7d\u5668\u53ef\u4ee5\u5b8c\u5168\u5ffd\u7565\u6b64\u6761\u76ee\u3002\u5728Forge\u63d0\u4f9b\u7684\u6a21\u578b\u52a0\u8f7d\u5668\u4e2d\uff0c\u53ea\u6709",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/rendering/modelloaders//#composite-models"},"\u590d\u5408\u6a21\u578b\u52a0\u8f7d\u5668"),"\u548c",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/rendering/modelloaders//#wavefront-obj-models"},"OBJ\u6a21\u578b\u52a0\u8f7d\u5668"),"\u4f7f\u7528\u4e86\u6b64\u529f\u80fd\u3002\u53ef\u89c1\u6027\u6761\u76ee\u88ab\u6307\u5b9a\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},'"part name": boolean'),"\u6761\u76ee\u3002"),(0,o.kt)("p",null,"\u5177\u6709\u4e24\u4e2a\u90e8\u5206\u7684\u590d\u5408\u6a21\u578b\u7684\u793a\u4f8b\uff0c\u5176\u4e2d\u7b2c\u4e8c\u4e2a\u90e8\u5206\u4e0d\u4f1a\u70d8\u7119\u5230\u6700\u7ec8\u6a21\u578b\u4e2d\uff0c\u5e76\u4e14\u4e24\u4e2a\u5b50\u6a21\u578b\u8986\u76d6\u6b64\u53ef\u89c1\u6027\uff0c\u5206\u522b\u53ea\u663e\u793a\u7b2c\u4e00\u4e2a\u90e8\u5206\u548c\u4e24\u4e2a\u90e8\u5206\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// mycompositemodel.json\n{\n  "loader": "forge:composite",\n  "children": {\n    "part_one": {\n      "parent": "mymod:mypartmodel_one"\n    },\n    "part_two": {\n      "parent": "mymod:mypartmodel_two"\n    }\n  },\n  "visibility": {\n    "part_two": false\n  }\n}\n\n// mycompositechild_one.json\n{\n  "parent": "mymod:mycompositemodel",\n  "visibility": {\n    "part_one": false,\n    "part_two": true\n  }\n}\n\n// mycompositechild_two.json\n{\n  "parent": "mymod:mycompositemodel",\n  "visibility": {\n    "part_two": true\n  }\n}\n')),(0,o.kt)("p",null,"\u7ed9\u5b9a\u90e8\u5206\u7684\u53ef\u89c1\u6027\u662f\u901a\u8fc7\u68c0\u67e5\u6a21\u578b\u662f\u5426\u6307\u5b9a\u4e86\u8be5\u90e8\u5206\u7684\u53ef\u89c1\u6027\u6765\u786e\u5b9a\u7684\uff0c\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5219\u9012\u5f52\u5730\u68c0\u67e5\u6a21\u578b\u7684\u7236\u7ea7\uff0c\u76f4\u5230\u627e\u5230\u6761\u76ee\u6216\u6ca1\u6709\u5176\u4ed6\u7236\u7ea7\u8981\u68c0\u67e5\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5b83\u9ed8\u8ba4\u4e3atrue\u3002"),(0,o.kt)("p",null,"\u8fd9\u5141\u8bb8\u8fdb\u884c\u4ee5\u4e0b\u8bbe\u7f6e\uff0c\u5176\u4e2d\u591a\u4e2a\u6a21\u578b\u4f7f\u7528\u5355\u4e2a\u590d\u5408\u6a21\u578b\u7684\u4e0d\u540c\u90e8\u5206\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u590d\u5408\u6a21\u578b\u6307\u5b9a\u591a\u4e2a\u7ec4\u4ef6"),(0,o.kt)("li",{parentName:"ol"},"\u591a\u4e2a\u6a21\u578b\u5c06\u6b64\u590d\u5408\u6a21\u578b\u6307\u5b9a\u4e3a\u5176\u7236\u6a21\u578b"),(0,o.kt)("li",{parentName:"ol"},"\u8fd9\u4e9b\u5b50\u6a21\u578b\u5206\u522b\u6307\u5b9a\u90e8\u5206\u7684\u4e0d\u540c\u53ef\u89c1\u6027")))}m.isMDXComponent=!0}}]);