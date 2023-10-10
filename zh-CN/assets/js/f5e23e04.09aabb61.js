"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[5222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=p(n),s=a,u=m["".concat(l,".").concat(s)]||m[s]||v[s]||i;return n?r.createElement(u,o(o({ref:t},c),{},{components:n})):r.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[m]="string"==typeof e?e:a,o[1]=d;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>v,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="\u8fdb\u5ea6\u751f\u6210",d={unversionedId:"datagen/server/advancements",id:"datagen/server/advancements",title:"\u8fdb\u5ea6\u751f\u6210",description:"\u53ef\u4ee5\u901a\u8fc7\u6784\u5efa\u65b0\u7684AdvancementProvider\u5e76\u63d0\u4f9bAdvancementSubProvider\u6765\u4e3a\u6a21\u7ec4\u751f\u6210\u8fdb\u5ea6\u3002\u8fdb\u5ea6\u65e2\u53ef\u4ee5\u624b\u52a8\u521b\u5efa\u548c\u63d0\u4f9b\uff0c\u4e5f\u53ef\u4ee5\u4e3a\u65b9\u4fbf\u8d77\u89c1\uff0c\u4f7f\u7528Advancement$Builder\u521b\u5efa\u3002\u8be5\u63d0\u4f9b\u8005\u5fc5\u987b\u88ab\u6dfb\u52a0\u5230DataGenerator\u4e2d\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/datagen/server/advancements.md",sourceDirName:"datagen/server",slug:"/datagen/server/advancements",permalink:"/zh-CN/docs/datagen/server/advancements",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"\u97f3\u6548\u5b9a\u4e49\u751f\u6210",permalink:"/zh-CN/docs/datagen/client/sounds"},next:{title:"\u6570\u636e\u5305\u6ce8\u518c\u8868\u5bf9\u8c61\u751f\u6210",permalink:"/zh-CN/docs/datagen/server/datapackregistries"}},l={},p=[{value:"<code>ForgeAdvancementProvider$AdvancementGenerator</code>",id:"forgeadvancementprovideradvancementgenerator",level:2},{value:"<code>Advancement$Builder</code>",id:"advancementbuilder",level:2}],c={toc:p},m="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8fdb\u5ea6\u751f\u6210"},"\u8fdb\u5ea6\u751f\u6210"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u6784\u5efa\u65b0\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"AdvancementProvider"),"\u5e76\u63d0\u4f9b",(0,a.kt)("inlineCode",{parentName:"p"},"AdvancementSubProvider"),"\u6765\u4e3a\u6a21\u7ec4\u751f\u6210",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/resources/server/advancements"},"\u8fdb\u5ea6"),"\u3002\u8fdb\u5ea6\u65e2\u53ef\u4ee5\u624b\u52a8\u521b\u5efa\u548c\u63d0\u4f9b\uff0c\u4e5f\u53ef\u4ee5\u4e3a\u65b9\u4fbf\u8d77\u89c1\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Advancement$Builder"),"\u521b\u5efa\u3002\u8be5\u63d0\u4f9b\u8005\u5fc5\u987b\u88ab",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/datagen/#data-providers"},"\u6dfb\u52a0"),"\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"DataGenerator"),"\u4e2d\u3002"),(0,a.kt)("p",null,"!!! \u6ce8\u610f\nForge\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"AdvancementProvider"),"\u63d0\u4f9b\u4e86\u4e00\u4e2a\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"ForgeAdvancementProvider"),"\u7684\u6269\u5c55\uff0c\u5b83\u53ef\u4ee5\u66f4\u597d\u5730\u96c6\u6210\u4ee5\u751f\u6210\u8fdb\u5ea6\u3002\u56e0\u6b64\uff0c\u672c\u6587\u6863\u5c06\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"ForgeAdvancementProvider"),"\u548c\u5b50\u63d0\u4f9b\u8005\u63a5\u53e3",(0,a.kt)("inlineCode",{parentName:"p"},"ForgeAdvancementProvider$AdvancementGenerator"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// \u5728\u6a21\u7ec4\u4e8b\u4ef6\u603b\u7ebf\u4e0a\n@SubscribeEvent\npublic void gatherData(GatherDataEvent event) {\n    event.getGenerator().addProvider(\n        // \u544a\u8bc9\u751f\u6210\u5668\u4ec5\u5728\u751f\u6210\u670d\u52a1\u7aef\u8d44\u6e90\u65f6\u8fd0\u884c\n        event.includeServer(),\n        output -> new ForgeAdvancementProvider(\n          output,\n          event.getLookupProvider(),\n          event.getExistingFileHelper(),\n          // \u751f\u6210\u8fdb\u5ea6\u7684\u5b50\u63d0\u4f9b\u8005\n          List.of(subProvider1, subProvider2, /*...*/)\n        )\n    );\n}\n")),(0,a.kt)("h2",{id:"forgeadvancementprovideradvancementgenerator"},(0,a.kt)("inlineCode",{parentName:"h2"},"ForgeAdvancementProvider$AdvancementGenerator")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ForgeAdvancementProvider$AdvancementGenerator"),"\u8d1f\u8d23\u751f\u6210\u8fdb\u5ea6\uff0c\u5305\u542b\u4e00\u4e2a\u63a5\u53d7\u6ce8\u518c\u8868\u67e5\u627e\u7684\u65b9\u6cd5\u3001\u5199\u5165\u5668\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"Consumer<Advancement>"),"\uff09\u548c\u73b0\u6709\u6587\u4ef6\u52a9\u624b.."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// \u5728ForgeAdvancementProvider$AdvancementGenerator\u7684\u67d0\u4e2a\u5b50\u7c7b\u4e2d\uff0c\u6216\u4f5c\u4e3a\u4e00\u4e2alambda\u5f15\u7528\n\n@Override\npublic void generate(HolderLookup.Provider registries, Consumer<Advancement> writer, ExistingFileHelper existingFileHelper) {\n  // \u5728\u6b64\u5904\u6784\u5efa\u8fdb\u5ea6\n}\n")),(0,a.kt)("h2",{id:"advancementbuilder"},(0,a.kt)("inlineCode",{parentName:"h2"},"Advancement$Builder")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Advancement$Builder"),"\u662f\u4e00\u4e2a\u65b9\u4fbf\u7684\u5b9e\u73b0\uff0c\u7528\u4e8e\u521b\u5efa\u8981\u751f\u6210\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Advancement"),"\u3002\u5b83\u5141\u8bb8\u5b9a\u4e49\u7236\u7ea7\u8fdb\u5ea6\u3001\u663e\u793a\u4fe1\u606f\u3001\u8fdb\u5ea6\u5b8c\u6210\u65f6\u7684\u5956\u52b1\u4ee5\u53ca\u89e3\u9501\u8fdb\u5ea6\u7684\u8981\u6c42\u3002\u53ea\u9700\u6307\u5b9a\u8981\u6c42\u5373\u53ef\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"Advancement"),"\u3002"),(0,a.kt)("p",null,"\u5c3d\u7ba1\u4e0d\u662f\u5fc5\u9700\u7684\uff0c\u4f46\u6709\u8bb8\u591a\u65b9\u6cd5\u5f88\u91cd\u8981\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u65b9\u6cd5"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"parent")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u6b64\u8fdb\u5ea6\u76f4\u63a5\u94fe\u63a5\u5230\u7684\u8fdb\u5ea6\u3002\u53ef\u4ee5\u6307\u5b9a\u8fdb\u5ea6\u7684\u540d\u79f0\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9a\u8fdb\u5ea6\u672c\u8eab\uff08\u5982\u679c\u5b83\u662f\u7531\u6a21\u7ec4\u5f00\u53d1\u8005\u751f\u6210\u7684\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"display")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u8981\u663e\u793a\u5728\u804a\u5929\u3001toast\u548c\u8fdb\u5ea6\u5c4f\u5e55\u4e0a\u7684\u4fe1\u606f\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"rewards")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u6b64\u8fdb\u5ea6\u5b8c\u6210\u65f6\u83b7\u5f97\u7684\u5956\u52b1\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"addCriterion")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u4e3a\u6b64\u8fdb\u5ea6\u6dfb\u52a0\u4e00\u4e2a\u6761\u4ef6\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"requirements")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u662f\u6240\u6709\u6761\u4ef6\u90fd\u5fc5\u987b\u8fd4\u56detrue\uff0c\u8fd8\u662f\u81f3\u5c11\u6709\u4e00\u4e2a\u6761\u4ef6\u5fc5\u987b\u8fd4\u56detrue\u3002\u53ef\u4ee5\u4f7f\u7528\u989d\u5916\u7684\u91cd\u8f7d\u6765\u6df7\u5408\u548c\u5339\u914d\u8fd9\u4e9b\u64cd\u4f5c\u3002")))),(0,a.kt)("p",null,"\u4e00\u65e6\u51c6\u5907\u597d\u6784\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"Advancement$Builder"),"\uff0c\u5c31\u5e94\u8be5\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"#save"),"\u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u63a5\u53d7\u5199\u5165\u5668\u3001\u8fdb\u5ea6\u7684\u6ce8\u518c\u8868\u540d\u4ee5\u53ca\u7528\u4e8e\u68c0\u67e5\u63d0\u4f9b\u7684\u7236\u7ea7\u662f\u5426\u5b58\u5728\u7684\u6587\u4ef6\u52a9\u624b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// \u5728\u67d0\u4e2aForgeAdvancementProvider$AdvancementGenerator#generate(registries, writer, existingFileHelper)\u4e2d\nAdvancement example = Advancement.Builder.advancement()\n  .addCriterion("example_criterion", triggerInstance) // \u8be5\u8fdb\u5ea6\u5982\u4f55\u89e3\u9501\n  .save(writer, name, existingFileHelper); // \u5c06\u6570\u636e\u52a0\u5165\u751f\u6210\u5668\n')))}v.isMDXComponent=!0}}]);