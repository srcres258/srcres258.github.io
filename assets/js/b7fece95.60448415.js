"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[8266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o="Versioning",l={unversionedId:"gettingstarted/versioning",id:"gettingstarted/versioning",title:"Versioning",description:"In general projects, semantic versioning is often used (which has the format MAJOR.MINOR.PATCH). However, in the case of modding it may be more beneficial to use the format MCVERSION-MAJORMOD.MAJORAPI.MINOR.PATCH to be able to differentiate between world-breaking and API-breaking changes of a mod.",source:"@site/docs/gettingstarted/versioning.md",sourceDirName:"gettingstarted",slug:"/gettingstarted/versioning",permalink:"/docs/gettingstarted/versioning",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Structuring Your Mod",permalink:"/docs/gettingstarted/structuring"},next:{title:"Access Transformers",permalink:"/docs/advanced/accesstransformers"}},s={},p=[{value:"Examples",id:"examples",level:2},{value:"Work In Progress",id:"work-in-progress",level:3},{value:"Multiple Minecraft Versions",id:"multiple-minecraft-versions",level:3},{value:"Final Release",id:"final-release",level:3},{value:"Pre-releases",id:"pre-releases",level:3},{value:"Release Candidates",id:"release-candidates",level:3}],d={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"versioning"},"Versioning"),(0,r.kt)("p",null,"In general projects, ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantic versioning")," is often used (which has the format ",(0,r.kt)("inlineCode",{parentName:"p"},"MAJOR.MINOR.PATCH"),"). However, in the case of modding it may be more beneficial to use the format ",(0,r.kt)("inlineCode",{parentName:"p"},"MCVERSION-MAJORMOD.MAJORAPI.MINOR.PATCH")," to be able to differentiate between world-breaking and API-breaking changes of a mod."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Forge uses ",(0,r.kt)("a",{parentName:"p",href:"https://maven.apache.org/ref/3.5.2/maven-artifact/apidocs/org/apache/maven/artifact/versioning/ComparableVersion.html"},"Maven version ranges")," to compare version strings, which is not fully compatible with the Semantic Versioning 2.0.0 spec, such as the 'prerelease' tag.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Here is a list of examples that can increment the various variables."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MCVERSION"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Always matches the Minecraft version the mod is for."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MAJORMOD"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removing items, blocks, block entities, etc."),(0,r.kt)("li",{parentName:"ul"},"Changing or removing previously existing mechanics."),(0,r.kt)("li",{parentName:"ul"},"Updating to a new Minecraft version."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MAJORAPI"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Changing the order or variables of enums."),(0,r.kt)("li",{parentName:"ul"},"Changing return types of methods."),(0,r.kt)("li",{parentName:"ul"},"Removing public methods altogether."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MINOR"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Adding items, blocks, block entities, etc."),(0,r.kt)("li",{parentName:"ul"},"Adding new mechanics."),(0,r.kt)("li",{parentName:"ul"},"Deprecating public methods. (This is not a ",(0,r.kt)("inlineCode",{parentName:"li"},"MAJORAPI")," increment since it doesn't break an API.)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PATCH"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Bugfixes.")))),(0,r.kt)("p",null,"When incrementing any variable, all lesser variables should reset to ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),". For instance, if ",(0,r.kt)("inlineCode",{parentName:"p"},"MINOR")," would increment, ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," would become ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"MAJORMOD")," would increment, all other variables would become ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("h3",{id:"work-in-progress"},"Work In Progress"),(0,r.kt)("p",null,"If you are in the initial development stage of your mod (before any official releases), the ",(0,r.kt)("inlineCode",{parentName:"p"},"MAJORMOD")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MAJORAPI")," should always be ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),". Only ",(0,r.kt)("inlineCode",{parentName:"p"},"MINOR")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," should be updated every time you build your mod. Once you build an official release (most of the time with a stable API), you should increment ",(0,r.kt)("inlineCode",{parentName:"p"},"MAJORMOD")," to version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0.0.0"),". For any further development stages, refer to the ",(0,r.kt)("a",{parentName:"p",href:"#pre-releases"},"Prereleases")," and ",(0,r.kt)("a",{parentName:"p",href:"#release-candidates"},"Release candidates")," section of this document."),(0,r.kt)("h3",{id:"multiple-minecraft-versions"},"Multiple Minecraft Versions"),(0,r.kt)("p",null,"If the mod upgrades to a new version of Minecraft, and the old version will only receive bug fixes, the ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," variable should be updated based on the version before the upgrade. If the mod is still in active development in both the old and the new version of Minecraft, it is advised to append the version to ",(0,r.kt)("strong",{parentName:"p"},"both")," build numbers. For example, if the mod is upgraded to version ",(0,r.kt)("inlineCode",{parentName:"p"},"3.0.0.0")," due to a Minecraft version change, the old mod should also be updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"3.0.0.0"),". The old version will become, for example, version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.7.10-3.0.0.0"),", while the new version will become ",(0,r.kt)("inlineCode",{parentName:"p"},"1.8-3.0.0.0"),". If there are no changes at all when building for a newer Minecraft version, all variables except for the Minecraft version should stay the same."),(0,r.kt)("h3",{id:"final-release"},"Final Release"),(0,r.kt)("p",null,"When dropping support for a Minecraft version, the last build for that version should get the ",(0,r.kt)("inlineCode",{parentName:"p"},"-final")," suffix. This denotes that the mod will no longer be supported for the denoted ",(0,r.kt)("inlineCode",{parentName:"p"},"MCVERSION")," and that players should upgrade to a newer version of the mod to continue receiving updates and bug fixes."),(0,r.kt)("h3",{id:"pre-releases"},"Pre-releases"),(0,r.kt)("p",null,'It is also possible to prerelease work-in-progress features, which means new features are released that are not quite done yet. These can be seen as a sort of "beta". These versions should be appended with ',(0,r.kt)("inlineCode",{parentName:"p"},"-betaX"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"X")," is the number of the prerelease. (This guide does not use ",(0,r.kt)("inlineCode",{parentName:"p"},"-pre")," since, at the time of writing, it is not a valid alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"-beta"),".) Note that already released versions and versions before the initial release can not go into prerelease; variables (mostly ",(0,r.kt)("inlineCode",{parentName:"p"},"MINOR"),", but ",(0,r.kt)("inlineCode",{parentName:"p"},"MAJORAPI")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MAJORMOD")," can also prerelease) should be updated accordingly before adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"-beta")," suffix. Versions before the initial release are simply work-in-progress builds."),(0,r.kt)("h3",{id:"release-candidates"},"Release Candidates"),(0,r.kt)("p",null,"Release candidates act as prereleases before an actual version change. These versions should be appended with ",(0,r.kt)("inlineCode",{parentName:"p"},"-rcX"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"X")," is the number of the release candidate which should, in theory, only be increased for bugfixes. Already released versions can not receive release candidates; variables (mostly ",(0,r.kt)("inlineCode",{parentName:"p"},"MINOR"),", but ",(0,r.kt)("inlineCode",{parentName:"p"},"MAJORAPI")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MAJORMOD")," can also prerelease)  should be updated accordingly before adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"-rc")," suffix. When releasing a release candidate as stable build, it can either be exactly the same as the last release candidate or have a few more bug fixes."))}c.isMDXComponent=!0}}]);