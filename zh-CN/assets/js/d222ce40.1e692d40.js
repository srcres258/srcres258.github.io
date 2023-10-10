"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[2333],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(t),k=a,u=c["".concat(d,".").concat(k)]||c[k]||s[k]||o;return t?r.createElement(u,l(l({ref:n},m),{},{components:t})):r.createElement(u,l({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=k;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},3636:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={},l="\u70d8\u7119\u6a21\u578b\uff08BakedModel\uff09",i={unversionedId:"rendering/modelloaders/bakedmodel",id:"rendering/modelloaders/bakedmodel",title:"\u70d8\u7119\u6a21\u578b\uff08BakedModel\uff09",description:"BakedModel\u662f\u5bf9\u666e\u901a\u6a21\u578b\u52a0\u8f7d\u5668\u8c03\u7528UnbakedModel#bake\u6216\u5bf9\u81ea\u5b9a\u4e49\u6a21\u578b\u52a0\u8f7d\u5668\u8c03\u7528IUnbakedGeometry#bake\u7684\u7ed3\u679c\u3002\u4e0eUnbakedModel\u6216IUnbakedGeometry\u4e0d\u540c\uff0cBakedModel\u7eaf\u7cb9\u4ee3\u8868\u4e00\u79cd\u6ca1\u6709\u4efb\u4f55\u7269\u54c1\u6216\u65b9\u5757\u6982\u5ff5\u7684\u5f62\u72b6\uff0c\u800c\u4e0d\u662f\u62bd\u8c61\u7684\u3002\u5b83\u8868\u793a\u5df2\u7ecf\u4f18\u5316\u5e76\u7b80\u5316\u4e3a\u53ef\u4ee5\uff08\u51e0\u4e4e\uff09\u8fdb\u5165GPU\u7684\u51e0\u4f55\u4f53\u3002\u5b83\u8fd8\u53ef\u4ee5\u5904\u7406\u7269\u54c1\u6216\u65b9\u5757\u7684\u72b6\u6001\u4ee5\u66f4\u6539\u6a21\u578b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/rendering/modelloaders/bakedmodel.md",sourceDirName:"rendering/modelloaders",slug:"/rendering/modelloaders/bakedmodel",permalink:"/zh-CN/docs/rendering/modelloaders/bakedmodel",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u6a21\u578b\u52a0\u8f7d\u5668",permalink:"/zh-CN/docs/rendering/modelloaders/"},next:{title:"\u7269\u54c1\u91cd\u8f7d\uff08ItemOverrides\uff09",permalink:"/zh-CN/docs/rendering/modelloaders/itemoverrides"}},d={},p=[{value:"<code>getOverrides</code>",id:"getoverrides",level:3},{value:"<code>useAmbientOcclusion</code>",id:"useambientocclusion",level:3},{value:"<code>isGui3d</code>",id:"isgui3d",level:3},{value:"<code>isCustomRenderer</code>",id:"iscustomrenderer",level:3},{value:"<code>getParticleIcon</code>",id:"getparticleicon",level:3},{value:"<s><code>getTransforms</code></s>",id:"gettransforms",level:3},{value:"<code>applyTransform</code>",id:"applytransform",level:3},{value:"<code>getQuads</code>",id:"getquads",level:3}],m={toc:p},c="wrapper";function s(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u70d8\u7119\u6a21\u578bbakedmodel"},"\u70d8\u7119\u6a21\u578b\uff08",(0,a.kt)("inlineCode",{parentName:"h1"},"BakedModel"),"\uff09"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BakedModel"),"\u662f\u5bf9\u666e\u901a\u6a21\u578b\u52a0\u8f7d\u5668\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"UnbakedModel#bake"),"\u6216\u5bf9\u81ea\u5b9a\u4e49\u6a21\u578b\u52a0\u8f7d\u5668\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"IUnbakedGeometry#bake"),"\u7684\u7ed3\u679c\u3002\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"UnbakedModel"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"IUnbakedGeometry"),"\u4e0d\u540c\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"BakedModel"),"\u7eaf\u7cb9\u4ee3\u8868\u4e00\u79cd\u6ca1\u6709\u4efb\u4f55\u7269\u54c1\u6216\u65b9\u5757\u6982\u5ff5\u7684\u5f62\u72b6\uff0c\u800c\u4e0d\u662f\u62bd\u8c61\u7684\u3002\u5b83\u8868\u793a\u5df2\u7ecf\u4f18\u5316\u5e76\u7b80\u5316\u4e3a\u53ef\u4ee5\uff08\u51e0\u4e4e\uff09\u8fdb\u5165GPU\u7684\u51e0\u4f55\u4f53\u3002\u5b83\u8fd8\u53ef\u4ee5\u5904\u7406\u7269\u54c1\u6216\u65b9\u5757\u7684\u72b6\u6001\u4ee5\u66f4\u6539\u6a21\u578b\u3002"),(0,a.kt)("p",null,"\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u5b9e\u9645\u4e0a\u6ca1\u6709\u5fc5\u8981\u624b\u52a8\u5b9e\u73b0\u6b64\u63a5\u53e3\u3002\u76f8\u53cd\uff0c\u53ef\u4ee5\u4f7f\u7528\u73b0\u6709\u7684\u5b9e\u73b0\u4e4b\u4e00\u3002"),(0,a.kt)("h3",{id:"getoverrides"},(0,a.kt)("inlineCode",{parentName:"h3"},"getOverrides")),(0,a.kt)("p",null,"\u8fd4\u56de\u8981\u7528\u4e8e\u6b64\u6a21\u578b\u7684",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/rendering/modelloaders/itemoverrides"},(0,a.kt)("inlineCode",{parentName:"a"},"ItemOverrides")),"\u3002\u4ec5\u5f53\u6b64\u6a21\u578b\u88ab\u6e32\u67d3\u4e3a\u7269\u54c1\u65f6\u624d\u4f7f\u7528\u6b64\u9009\u9879\u3002"),(0,a.kt)("h3",{id:"useambientocclusion"},(0,a.kt)("inlineCode",{parentName:"h3"},"useAmbientOcclusion")),(0,a.kt)("p",null,"\u5982\u679c\u6a21\u578b\u5728\u5b58\u6863\u4e2d\u6e32\u67d3\u4e3a\u65b9\u5757\uff0c\u5219\u6709\u95ee\u9898\u7684\u65b9\u5757\u4e0d\u4f1a\u53d1\u51fa\u4efb\u4f55\u5149\uff0c\u5e76\u4e14\u73af\u5883\u5149\u906e\u6321\u5904\u4e8e\u542f\u7528\u72b6\u6001\u3002\u8fd9\u5c06\u5bfc\u81f4\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"ambocc"},"\u73af\u5883\u5149\u906e\u6321"),"\u6765\u6e32\u67d3\u6a21\u578b\u3002"),(0,a.kt)("h3",{id:"isgui3d"},(0,a.kt)("inlineCode",{parentName:"h3"},"isGui3d")),(0,a.kt)("p",null,"\u5982\u679c\u6a21\u578b\u88ab\u6e32\u67d3\u4e3a\u7269\u54c1\u680f\u4e2d\u7684\u7269\u54c1\uff0c\u5728\u5730\u9762\u4e0a\u88ab\u6e32\u67d3\u4e3a\u5b9e\u4f53\uff0c\u5728\u7269\u54c1\u6846\u67b6\u4e0a\uff0c\u7b49\u7b49\uff0c\u8fd9\u4f1a\u4f7f\u6a21\u578b\u770b\u8d77\u6765\u201c\u6241\u5e73\u201d\u3002\u5728GUI\u4e2d\uff0c\u8fd9\u4e5f\u4f1a\u7981\u7528\u7167\u660e\u3002"),(0,a.kt)("h3",{id:"iscustomrenderer"},(0,a.kt)("inlineCode",{parentName:"h3"},"isCustomRenderer")),(0,a.kt)("p",null,"!!! \u91cd\u8981\n\u9664\u975e\u4f60\u77e5\u9053\u81ea\u5df1\u5728\u505a\u4ec0\u4e48\uff0c\u5426\u5219\u53ea\u9700",(0,a.kt)("inlineCode",{parentName:"p"},"return false"),"\u7136\u540e\u7ee7\u7eed\u5176\u4ed6\u4e8b\u9879\u3002"),(0,a.kt)("p",null,"\u5c06\u5176\u6e32\u67d3\u4e3a\u7269\u54c1\u65f6\uff0c\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\u5c06\u5bfc\u81f4\u6a21\u578b\u4e0d\u88ab\u6e32\u67d3\uff0c\u8f6c\u800c\u56de\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntityWithoutLevelRenderer#renderByItem"),"\u3002\u5bf9\u4e8e\u67d0\u4e9b\u539f\u7248\u7269\u54c1\uff0c\u5982\u7bb1\u5b50\u548c\u65d7\u5e1c\uff0c\u6b64\u65b9\u6cd5\u88ab\u786c\u7f16\u7801\u4e3a\u5c06\u6570\u636e\u4ece\u7269\u54c1\u590d\u5236\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntity"),"\u4e2d\uff0c\u7136\u540e\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntityRenderer"),"\u6765\u6e32\u67d3BE\u4ee5\u4ee3\u66ff\u7269\u54c1\u3002\u5bf9\u4e8e\u6240\u6709\u5176\u4ed6\u7269\u54c1\uff0c\u5b83\u5c06\u4f7f\u7528\u7531",(0,a.kt)("inlineCode",{parentName:"p"},"IClientItemExtensions#getCustomRenderer"),"\u63d0\u4f9b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntityWithoutLevelRenderer"),"\u5b9e\u4f8b\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/items/bewlr"},"BlockEntityWithoutLevelRenderer"),"\u9875\u3002"),(0,a.kt)("h3",{id:"getparticleicon"},(0,a.kt)("inlineCode",{parentName:"h3"},"getParticleIcon")),(0,a.kt)("p",null,"\u7c92\u5b50\u5e94\u4f7f\u7528\u7684\u4efb\u4f55\u7eb9\u7406\u3002\u5bf9\u4e8e\u65b9\u5757\uff0c\u5b83\u5c06\u5728\u5b9e\u4f53\u6389\u843d\u5728\u5176\u4e0a\u6216\u5176\u88ab\u7834\u574f\u65f6\u663e\u793a\u3002\u5bf9\u4e8e\u7269\u54c1\uff0c\u5b83\u5c06\u5728\u62a5\u5e9f\u6216\u88ab\u5403\u6389\u65f6\u663e\u793a\u3002"),(0,a.kt)("p",null,"!!! \u91cd\u8981\n\u7531\u4e8e\u6a21\u578b\u6570\u636e\u53ef\u80fd\u4f1a\u5bf9\u7279\u5b9a\u6a21\u578b\u7684\u6e32\u67d3\u65b9\u5f0f\u4ea7\u751f\u5f71\u54cd\uff0c\u56e0\u6b64\u4e0d\u63a8\u8350\u4f7f\u7528\u4e0d\u5e26\u53c2\u6570\u7684\u539f\u7248\u65b9\u6cd5\uff0c\u800c\u63a8\u8350\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"#getParticleIcon(ModelData)"),"\u3002"),(0,a.kt)("h3",{id:"gettransforms"},(0,a.kt)("s",null,(0,a.kt)("inlineCode",{parentName:"h3"},"getTransforms"))),(0,a.kt)("p",null,"\u6b64\u65b9\u6cd5\u88ab\u5e9f\u5f03\uff0c\u63a8\u8350\u5b9e\u73b0",(0,a.kt)("inlineCode",{parentName:"p"},"#applyTransform"),"\u3002\u5982\u679c\u5b9e\u73b0\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"#applyTransform"),"\uff0c\u5219\u8be5\u9ed8\u8ba4\u5b9e\u73b0\u662f\u8db3\u591f\u7684\u3002\u53c2\u89c1",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/rendering/modelloaders/transform"},"\u53d8\u6362"),"\u3002"),(0,a.kt)("h3",{id:"applytransform"},(0,a.kt)("inlineCode",{parentName:"h3"},"applyTransform")),(0,a.kt)("p",null,"\u53c2\u89c1",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/rendering/modelloaders/transform"},"\u53d8\u6362"),"\u3002"),(0,a.kt)("h3",{id:"getquads"},(0,a.kt)("inlineCode",{parentName:"h3"},"getQuads")),(0,a.kt)("p",null,"\u8fd9\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"BakedModel"),"\u7684\u4e3b\u8981\u65b9\u6cd5\u3002\u5b83\u8fd4\u56de\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"BakedQuad"),"\u7684\u5217\u8868\uff1a\u5305\u542b\u5c06\u7528\u4e8e\u6e32\u67d3\u6a21\u578b\u7684\u4f4e\u7ea7\u9876\u70b9\u6570\u636e\u7684\u5bf9\u8c61\u3002\u5982\u679c\u6a21\u578b\u88ab\u5448\u73b0\u4e3a\u65b9\u5757\uff0c\u90a3\u4e48\u4f20\u5165\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"BlockState"),"\u662f\u975e\u7a7a\u7684\u3002\u5982\u679c\u6a21\u578b\u88ab\u5448\u73b0\u4e3a\u7269\u54c1\uff0c\u5219\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"#getOverrides"),"\u8fd4\u56de\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"ItemOverrides"),"\u8d1f\u8d23\u5904\u7406\u7269\u54c1\u7684\u72b6\u6001\uff0c\u5e76\u4e14",(0,a.kt)("inlineCode",{parentName:"p"},"BlockState"),"\u53c2\u6570\u5c06\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"\u3002"),(0,a.kt)("p",null,"\u4f20\u5165\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Direction"),"\u7528\u4e8e\u9762\u5254\u9664\u3002\u5982\u679c\u6b63\u5728\u6e32\u67d3\u7684\u53e6\u4e00\u4e2a\u65b9\u5757\u7684\u7ed9\u5b9a\u8fb9\u4e0a\u7684\u5757\u662f\u4e0d\u900f\u660e\u7684\uff0c\u5219\u4e0d\u4f1a\u6e32\u67d3\u4e0e\u8be5\u8fb9\u5173\u8054\u7684\u9762\u3002\u5982\u679c\u8be5\u53c2\u6570\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"\uff0c\u5219\u8fd4\u56de\u4e0e\u8fb9\u4e0d\u5173\u8054\u7684\u6240\u6709\u9762\uff08\u5176\u6c38\u8fdc\u4e0d\u4f1a\u88ab\u5254\u9664\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rand"),"\u53c2\u6570\u662fRandom\u7684\u4e00\u4e2a\u5b9e\u4f8b\u3002"),(0,a.kt)("p",null,"\u5b83\u8fd8\u63a5\u53d7\u4e00\u4e2a\u975enull\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"ModelData"),"\u5b9e\u4f8b\u3002\u8fd9\u53ef\u7528\u4e8e\u5728\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"ModelProperty"),"\u6e32\u67d3\u7279\u5b9a\u6a21\u578b\u65f6\u5b9a\u4e49\u989d\u5916\u6570\u636e\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a\u8fd9\u6837\u7684\u5c5e\u6027\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"CompositeModel$Data"),"\uff0c\u7528\u4e8e\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"forge:composite"),"\u6a21\u578b\u52a0\u8f7d\u5668\u5b58\u50a8\u6a21\u578b\u7684\u4efb\u4f55\u9644\u52a0\u5b50\u6a21\u578b\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u6b64\u65b9\u6cd5\u7ecf\u5e38\u88ab\u8c03\u7528\uff1a\u5bf9\u4e8e",(0,a.kt)("em",{parentName:"p"},"\u4e00\u4e2a\u5b58\u6863\u4e2d\u7684\u6bcf\u4e2a\u65b9\u5757"),"\uff0c\u975e\u5254\u9664\u9762\u548c\u652f\u6301\u7684\u65b9\u5757\u6e32\u67d3\u5c42\u7684\u6bcf\u4e2a\u7ec4\u5408\uff08\u4efb\u4f55\u4f4d\u7f6e\u4ece0\u523028\u6b21\uff09\u8c03\u7528\u4e00\u6b21\u3002\u8fd9\u7ed9\u65b9\u6cd5\u5e94\u8be5\u5c3d\u53ef\u80fd\u5feb\uff0c\u5e76\u4e14\u53ef\u80fd\u9700\u8981\u5927\u91cf\u7f13\u5b58\u3002"))}s.isMDXComponent=!0}}]);