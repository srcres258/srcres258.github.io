"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[3997],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),o=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=o(e.components);return r.createElement(d.Provider,{value:n},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=o(t),g=i,k=c["".concat(d,".").concat(g)]||c[g]||s[g]||a;return t?r.createElement(k,p(p({ref:n},m),{},{components:t})):r.createElement(k,p({ref:n},m))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,p=new Array(a);p[0]=g;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[c]="string"==typeof e?e:i,p[1]=l;for(var o=2;o<a;o++)p[o]=t[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2625:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var r=t(7462),i=(t(7294),t(3905));const a={},p="\u539f\u6599",l={unversionedId:"resources/server/recipes/ingredients",id:"resources/server/recipes/ingredients",title:"\u539f\u6599",description:"Ingredient\u662f\u57fa\u4e8e\u7269\u54c1\u7684\u8f93\u5165\u7684predicate\u5904\u7406\u5668\uff0c\u7528\u4e8e\u68c0\u67e5\u67d0\u4e2aItemStack\u662f\u5426\u6ee1\u8db3\u6210\u4e3a\u914d\u65b9\u4e2d\u6709\u6548\u8f93\u5165\u7684\u6761\u4ef6\u3002\u6240\u6709\u63a5\u53d7\u8f93\u5165\u7684\u539f\u7248\u914d\u65b9\u90fd\u4f7f\u7528Ingredient\u6216Ingredient\u7684\u5217\u8868\uff0c\u7136\u540e\u5c06\u5176\u5408\u5e76\u4e3a\u5355\u4e00\u7684Ingredient\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/resources/server/recipes/ingredients.md",sourceDirName:"resources/server/recipes",slug:"/resources/server/recipes/ingredients",permalink:"/zh-CN/docs/resources/server/recipes/ingredients",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"\u975e\u6570\u636e\u5305\u914d\u65b9",permalink:"/zh-CN/docs/resources/server/recipes/incode"},next:{title:"\u6807\u7b7e",permalink:"/zh-CN/docs/resources/server/tags"}},d={},o=[{value:"\u81ea\u5b9a\u4e49\u539f\u6599",id:"\u81ea\u5b9a\u4e49\u539f\u6599",level:2},{value:"Forge\u7c7b\u578b",id:"forge\u7c7b\u578b",level:3},{value:"CompoundIngredient",id:"compoundingredient",level:4},{value:"StrictNBTIngredient",id:"strictnbtingredient",level:4},{value:"PartialNBTIngredient",id:"partialnbtingredient",level:3},{value:"IntersectionIngredient",id:"intersectioningredient",level:3},{value:"DifferenceIngredient",id:"differenceingredient",level:3},{value:"\u521b\u5efa\u81ea\u5b9a\u4e49\u539f\u6599",id:"\u521b\u5efa\u81ea\u5b9a\u4e49\u539f\u6599",level:2},{value:"\u539f\u6599\u7684\u5b50\u7c7b",id:"\u539f\u6599\u7684\u5b50\u7c7b",level:3},{value:"IIngredientSerializer",id:"iingredientserializer",level:3}],m={toc:o},c="wrapper";function s(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u539f\u6599"},"\u539f\u6599"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Ingredient"),"\u662f\u57fa\u4e8e\u7269\u54c1\u7684\u8f93\u5165\u7684predicate\u5904\u7406\u5668\uff0c\u7528\u4e8e\u68c0\u67e5\u67d0\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"ItemStack"),"\u662f\u5426\u6ee1\u8db3\u6210\u4e3a\u914d\u65b9\u4e2d\u6709\u6548\u8f93\u5165\u7684\u6761\u4ef6\u3002\u6240\u6709\u63a5\u53d7\u8f93\u5165\u7684",(0,i.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Recipe#List_of_recipe_types"},"\u539f\u7248\u914d\u65b9"),"\u90fd\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"Ingredient"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"Ingredient"),"\u7684\u5217\u8868\uff0c\u7136\u540e\u5c06\u5176\u5408\u5e76\u4e3a\u5355\u4e00\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Ingredient"),"\u3002"),(0,i.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u539f\u6599"},"\u81ea\u5b9a\u4e49\u539f\u6599"),(0,i.kt)("p",null,"\u81ea\u5b9a\u4e49\u539f\u6599\u53ef\u4ee5\u901a\u8fc7\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"type"),"\u8bbe\u7f6e\u4e3a",(0,i.kt)("a",{parentName:"p",href:"#iingredientserializer"},"\u539f\u6599\u7684\u5e8f\u5217\u5316\u5668"),"\u7684\u540d\u79f0\u6765\u6307\u5b9a\uff0c",(0,i.kt)("a",{parentName:"p",href:"#compoundingredient"},"\u590d\u5408\u539f\u6599"),"\u9664\u5916\u3002\u5f53\u6ca1\u6709\u6307\u5b9a\u7c7b\u578b\u65f6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"type"),"\u9ed8\u8ba4\u4e3a\u539f\u7248\u539f\u6599",(0,i.kt)("inlineCode",{parentName:"p"},"minecraft:item"),"\u3002\u81ea\u5b9a\u4e49\u539f\u6599\u4e5f\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u7528\u4e8e",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/datagen/server/recipes"},"\u6570\u636e\u751f\u6210"),"\u3002"),(0,i.kt)("h3",{id:"forge\u7c7b\u578b"},"Forge\u7c7b\u578b"),(0,i.kt)("p",null,"Forge\u63d0\u4f9b\u4e86\u4e00\u4e9b\u989d\u5916\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Ingredient"),"\u7c7b\u578b\u4f9b\u7a0b\u5e8f\u5458\u5b9e\u73b0\u3002"),(0,i.kt)("h4",{id:"compoundingredient"},"CompoundIngredient"),(0,i.kt)("p",null,"\u5c3d\u7ba1\u5b83\u4eec\u5728\u529f\u80fd\u4e0a\u662f\u76f8\u540c\u7684\uff0c\u4f46\u590d\u5408\u539f\u6599\u53d6\u4ee3\u4e86\u5728\u914d\u65b9\u4e2d\u5b9e\u73b0\u539f\u6599\u5217\u8868\u7684\u65b9\u5f0f\u3002\u5b83\u4eec\u4f5c\u4e3a\u4e00\u4e2a\u903b\u8f91\u6216\uff08OR\uff09\u96c6\u5408\u5de5\u4f5c\uff0c\u5176\u4e2d\u4f20\u5165\u7684\u7269\u54c1\u6808\u5fc5\u987b\u81f3\u5c11\u5728\u4e00\u4e2a\u63d0\u4f9b\u7684\u539f\u6599\u4e2d\u3002\u8fdb\u884c\u6b64\u66f4\u6539\u662f\u4e3a\u4e86\u5141\u8bb8\u81ea\u5b9a\u4e49\u539f\u6599\u5728\u5217\u8868\u4e2d\u6b63\u786e\u5de5\u4f5c\u3002\u56e0\u6b64\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u65e0\u9700\u6307\u5b9a\u7c7b\u578b"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// \u5bf9\u4e8e\u67d0\u4e2a\u8f93\u5165\n[\n  // \u8fd9\u4e9b\u539f\u6599\u4e2d\u5fc5\u987b\u81f3\u5c11\u6709\u4e00\u79cd\u5fc5\u987b\u5339\u914d\u624d\u80fd\u6210\u529f\n  {\n    // \u539f\u6599\n  },\n  {\n    // \u81ea\u5b9a\u4e49\u539f\u6599\n    "type": "examplemod:example_ingredient"\n  }\n]\n')),(0,i.kt)("h4",{id:"strictnbtingredient"},"StrictNBTIngredient"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"StrictNBTIngredient"),"\u6bd4\u8f83",(0,i.kt)("inlineCode",{parentName:"p"},"ItemStack"),"\u4e0a\u7684\u7269\u54c1\u3001\u8010\u4e45\u548c\u5171\u4eab\u6807\u7b7e\uff08\u7531",(0,i.kt)("inlineCode",{parentName:"p"},"IForgeItem#getShareTag"),"\u5b9a\u4e49\uff09\uff0c\u4ee5\u4fdd\u8bc1\u786e\u5207\u7684\u7b49\u6548\u6027\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"type"),"\u6307\u5b9a\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"forge:nbt"),"\u6765\u4f7f\u7528\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// \u5bf9\u4e8e\u67d0\u4e2a\u8f93\u5165\n{\n  "type": "forge:nbt",\n  "item": "examplemod:example_item",\n  "nbt": {\n    // \u6dfb\u52a0nbt\u6570\u636e\uff08\u5fc5\u987b\u4e0e\u7269\u54c1\u6808\u4e0a\u7684\u6570\u636e\u5b8c\u5168\u5339\u914d\uff09\n  }\n}\n')),(0,i.kt)("h3",{id:"partialnbtingredient"},"PartialNBTIngredient"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PartialNBTIngredient"),"\u662f",(0,i.kt)("a",{parentName:"p",href:"#strictnbtingredient"},(0,i.kt)("inlineCode",{parentName:"a"},"StrictNBTIngredient")),"\u7684\u5bbd\u677e\u7248\u672c\uff0c\u56e0\u4e3a\u5b83\u4eec\u4e0e\u5171\u4eab\u6807\u7b7e\u4e2d\u6307\u5b9a\u7684\u5355\u4e2a\u6216\u4e00\u7ec4\u7269\u54c1\u4ee5\u53ca\u4ec5\u952e\uff08\u7531",(0,i.kt)("inlineCode",{parentName:"p"},"IForgeItem#getShareTag"),"\u5b9a\u4e49\uff09\u8fdb\u884c\u6bd4\u8f83\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"type"),"\u6307\u5b9a\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"forge:partial_nbt"),"\u6765\u4f7f\u7528\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// \u5bf9\u4e8e\u67d0\u4e2a\u8f93\u5165\n{\n  "type": "forge:partial_nbt",\n\n  // \'item\'\u6216\'items\'\u5fc5\u987b\u88ab\u6307\u5b9a\n  // \u5982\u679c\u90fd\u6307\u5b9a\u4e86\uff0c\u90a3\u4e48\u53ea\u6709\'item\'\u4f1a\u88ab\u8bfb\u53d6\n  "item": "examplemod:example_item",\n  "items": [\n    "examplemod:example_item",\n    "examplemod:example_item2"\n    // ...\n  ],\n\n  "nbt": {\n    // \u4ec5\u68c0\u67e5\'key1\'\u548c\'key2\'\u7684\u7b49\u6548\u6027\n    // \u4e0d\u4f1a\u68c0\u67e5\u7269\u54c1\u6808\u4e2d\u7684\u6240\u6709\u5176\u4ed6\u952e\n    "key1": "data1",\n    "key2": {\n      // \u6570\u636e2\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"intersectioningredient"},"IntersectionIngredient"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IntersectionIngredient"),"\u5de5\u4f5c\u4e3a\u4e00\u4e2a\u903b\u8f91\u548c\uff08AND\uff09\u96c6\u5408\uff0c\u5176\u4e2d\u4f20\u5165\u7684\u7269\u54c1\u5fc5\u987b\u4e0e\u6240\u6709\u63d0\u4f9b\u7684\u539f\u6599\u5339\u914d\u3002\u5fc5\u987b\u81f3\u5c11\u63d0\u4f9b\u4e24\u79cd\u539f\u6599\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"type"),"\u6307\u5b9a\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"forge:intersection"),"\u6765\u4f7f\u7528\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// \u5bf9\u4e8e\u67d0\u4e2a\u8f93\u5165\n{\n  "type": "forge:intersection",\n\n  // \u6240\u6709\u8fd9\u4e9b\u539f\u6599\u90fd\u5fc5\u987b\u8fd4\u56detrue\u624d\u80fd\u6210\u529f\n  "children": [\n    {\n      // \u539f\u65991\n    },\n    {\n      // \u539f\u65992\n    }\n    // ...\n  ]\n}\n')),(0,i.kt)("h3",{id:"differenceingredient"},"DifferenceIngredient"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DifferenceIngredient"),"\u5de5\u4f5c\u4e3a\u4e00\u4e2a\u51cf\u6cd5\uff08SUB\uff09\u96c6\u5408\uff0c\u5176\u4e2d\u4f20\u5165\u7684\u7269\u54c1\u6808\u5fc5\u987b\u4e0e\u7b2c\u4e00\u4e2a\u539f\u6599\u5339\u914d\uff0c\u4f46\u4e0d\u80fd\u4e0e\u7b2c\u4e8c\u4e2a\u539f\u6599\u5339\u914d\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"type"),"\u6307\u5b9a\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"forge:difference"),"\u6765\u4f7f\u7528\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// \u5bf9\u4e8e\u67d0\u4e2a\u8f93\u5165\n{\n  "type": "forge:difference",\n  "base": {\n    // \u8be5\u7269\u54c1\u6808\u6240\u5b58\u5728\u7684\u539f\u6599\n  },\n  "subtracted": {\n    // \u8be5\u7269\u54c1\u6808\u6240\u4e0d\u5b58\u5728\u7684\u539f\u6599\n  }\n}\n')),(0,i.kt)("h2",{id:"\u521b\u5efa\u81ea\u5b9a\u4e49\u539f\u6599"},"\u521b\u5efa\u81ea\u5b9a\u4e49\u539f\u6599"),(0,i.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4e3a\u521b\u5efa\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Ingredient"),"\u5b50\u7c7b\u5b9e\u73b0",(0,i.kt)("inlineCode",{parentName:"p"},"IIngredientSerializer"),"\u6765\u521b\u5efa\u81ea\u5b9a\u4e49\u539f\u6599\u3002"),(0,i.kt)("p",null,"!!! \u63d0\u793a\n\u81ea\u5b9a\u4e49\u539f\u6599\u5e94\u8be5\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractIngredient"),"\u7684\u5b50\u7c7b\uff0c\u56e0\u4e3a\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e9b\u6709\u7528\u7684\u62bd\u8c61\u4ee5\u4fbf\u4e8e\u5b9e\u73b0\u3002"),(0,i.kt)("h3",{id:"\u539f\u6599\u7684\u5b50\u7c7b"},"\u539f\u6599\u7684\u5b50\u7c7b"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u6bcf\u4e2a\u539f\u6599\u5b50\u7c7b\uff0c\u6709\u4e09\u79cd\u91cd\u8981\u7684\u65b9\u6cd5\u9700\u8981\u5b9e\u73b0\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"\u65b9\u6cd5"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"getSerializer"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8fd4\u56de\u7528\u4e8e\u8bfb\u53d6\u548c\u5199\u5165\u539f\u6599\u7684",(0,i.kt)("a",{parentName:"td",href:"#iingredientserializer"},"serializer"),"\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"test"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5982\u679c\u8f93\u5165\u5bf9\u6b64\u539f\u6599\u6709\u6548\uff0c\u5219\u8fd4\u56detrue\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"isSimple"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5982\u679c\u539f\u6599\u4e0e\u7269\u54c1\u6808\u7684\u6807\u7b7e\u5339\u914d\uff0c\u5219\u8fd4\u56defalse\u3002",(0,i.kt)("inlineCode",{parentName:"td"},"AbstractIngredient"),"\u7684\u5b50\u7c7b\u9700\u8981\u5b9a\u4e49\u6b64\u884c\u4e3a\uff0c\u800c",(0,i.kt)("inlineCode",{parentName:"td"},"Ingredient"),"\u5b50\u7c7b\u9ed8\u8ba4\u8fd4\u56detrue\u3002")))),(0,i.kt)("p",null,"\u6240\u6709\u5176\u4ed6\u5b9a\u4e49\u7684\u65b9\u6cd5\u90fd\u7559\u7ed9\u8bfb\u8005\u7ec3\u4e60\uff0c\u4ee5\u4fbf\u6839\u636e\u539f\u6599\u5b50\u7c7b\u7684\u9700\u8981\u4f7f\u7528\u3002"),(0,i.kt)("h3",{id:"iingredientserializer"},"IIngredientSerializer"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IIngredientSerializer"),"\u5b50\u7c7b\u578b\u5fc5\u987b\u5b9e\u73b0\u4e09\u79cd\u65b9\u6cd5\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"\u65b9\u6cd5"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"parse (JSON)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5c06",(0,i.kt)("inlineCode",{parentName:"td"},"JsonObject"),"\u8f6c\u6362\u4e3a",(0,i.kt)("inlineCode",{parentName:"td"},"Ingredient"),"\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"parse (Network)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8fd4\u56de\u7528\u4e8e\u89e3\u7801",(0,i.kt)("inlineCode",{parentName:"td"},"Ingredient"),"\u7684\u7f51\u7edc\u7f13\u51b2\u533a\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"write"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5c06\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"td"},"Ingredient"),"\u5199\u5165\u7f51\u7edc\u7f13\u51b2\u533a\u3002")))),(0,i.kt)("p",null,"\u6b64\u5916\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Ingredient"),"\u5b50\u7c7b\u5e94\u5b9e\u73b0",(0,i.kt)("inlineCode",{parentName:"p"},"Ingredient#toJson"),"\uff0c\u4ee5\u4fbf\u4e0e",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/datagen/server/recipes"},"\u6570\u636e\u751f\u6210"),"\u4e00\u8d77\u4f7f\u7528\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractIngredient"),"\u7684\u5b50\u7c7b\u4f7f",(0,i.kt)("inlineCode",{parentName:"p"},"#toJson"),"\u6210\u4e3a\u4e00\u4e2a\u9700\u8981\u5b9e\u73b0\u8be5\u65b9\u6cd5\u7684\u62bd\u8c61\u65b9\u6cd5\u3002"),(0,i.kt)("p",null,"\u4e4b\u540e\uff0c\u5e94\u58f0\u660e\u4e00\u4e2a\u9759\u6001\u5b9e\u4f8b\u6765\u4fdd\u5b58\u521d\u59cb\u5316\u7684\u5e8f\u5217\u5316\u5668\uff0c\u7136\u540e\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"RecipeSerializer"),"\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"RegisterEvent"),"\u671f\u95f4\u6216\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"FMLCommonSetupEvent"),"\u671f\u95f4\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"CraftingHelper#register"),"\u8fdb\u884c\u6ce8\u518c\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"Ingredient"),"\u5b50\u7c7b\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"Ingredient#getSerializer"),"\u4e2d\u8fd4\u56de\u5e8f\u5217\u5316\u5668\u7684\u9759\u6001\u5b9e\u4f8b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// \u5728\u67d0\u4e2a\u5e8f\u5217\u5316\u5668\u7c7b\u4e2d\npublic static final ExampleIngredientSerializer INSTANCE = new ExampleIngredientSerializer();\n\n// \u5728\u67d0\u4e2a\u5904\u7406\u5668\u7c7b\u4e2d\npublic void registerSerializers(RegisterEvent event) {\n  event.register(ForgeRegistries.Keys.RECIPE_SERIALIZERS,\n    helper -> CraftingHelper.register(registryName, INSTANCE)\n  );\n}\n\n// \u5728\u67d0\u4e2a\u539f\u6599\u7c7b\u4e2d\n@Override\npublic IIngredientSerializer<? extends Ingredient> getSerializer() {\n  return INSTANCE;\n}\n")),(0,i.kt)("p",null,"!!! \u63d0\u793a\n\u5982\u679c\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"FMLCommonSetupEvent"),"\u6ce8\u518c\u539f\u6599\u5e8f\u5217\u5316\u5668\uff0c\u5219\u5fc5\u987b\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"FMLCommonSetupEvent#enqueueWork"),"\u5c06\u5176\u6392\u5165\u540c\u6b65\u5de5\u4f5c\u961f\u5217\uff0c\u56e0\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"CraftingHelper#register"),"\u4e0d\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002"))}s.isMDXComponent=!0}}]);