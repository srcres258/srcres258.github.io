"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[2413],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5315:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={},i="ForgeGradle Configurations",s={unversionedId:"docs/configuration/index",id:"version-5.x/docs/configuration/index",title:"ForgeGradle Configurations",description:"ForgeGradle has numerous configurations that can change how the development environment is configured. Most configurations are set using the minecraft block; however, some others can be specified within the dependencies block or modify the built jar, such as reobfJar.",source:"@site/neogradle_versioned_docs/version-5.x/docs/configuration/index.md",sourceDirName:"docs/configuration",slug:"/docs/configuration/",permalink:"/neogradle/5.x/docs/configuration/",draft:!1,tags:[],version:"5.x",frontMatter:{},sidebar:"ngSidebar",previous:{title:"ForgeGradle Documentation",permalink:"/neogradle/5.x/docs/"},next:{title:"Run Configurations",permalink:"/neogradle/5.x/docs/configuration/runs"}},l={},c=[{value:"Enabling Access Transformers",id:"enabling-access-transformers",level:2},{value:"Human-Readable Mappings",id:"human-readable-mappings",level:2},{value:"Parchment",id:"parchment",level:3}],p={toc:c},m="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"forgegradle-configurations"},"ForgeGradle Configurations"),(0,r.kt)("p",null,"ForgeGradle has numerous configurations that can change how the development environment is configured. Most configurations are set using the ",(0,r.kt)("inlineCode",{parentName:"p"},"minecraft")," block; however, some others can be specified within the ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," block or modify the built ",(0,r.kt)("inlineCode",{parentName:"p"},"jar"),", such as ",(0,r.kt)("inlineCode",{parentName:"p"},"reobfJar"),"."),(0,r.kt)("h2",{id:"enabling-access-transformers"},"Enabling Access Transformers"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.minecraftforge.net/en/latest/advanced/accesstransformers/"},"Access Transformers")," can widen the visibility or modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"final")," flag of Minecraft classes, methods, and fields. To enable access transformers in the production environment, you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"accessTransformer")," to configuration file in question:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gradle"},"minecraft {\n    // ...\n\n    // Add an access transformer file relative to the project's directory\n    accessTransformer = project.file('src/main/resources/META-INF/accesstransformer.cfg')\n}\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"While the access transformer in the development environment can be read from anywhere the user specifies, in production, the file will only be read from ",(0,r.kt)("inlineCode",{parentName:"p"},"META-INF/accesstransformer.cfg"),".")),(0,r.kt)("h2",{id:"human-readable-mappings"},"Human-Readable Mappings"),(0,r.kt)("p",null,"Minecraft's source code is obfuscated. As such, all classes, methods, and fields have machine-generated names with no package structures. Function-local variable names, meanwhile, are turned into a snowman (",(0,r.kt)("inlineCode",{parentName:"p"},"\u2603"),") due to how the Local Variable Table is stored. It is difficult to create mods using obfuscated names as reverse engineering them is tedious, may change between versions, and may be invalid in the language itself but not in the bytecode."),(0,r.kt)("p",null,"To address the last two issues, Forge fuzzily maps each class, method, field, and parameter to a unique identifier, known as the SRG name, via the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MinecraftForge/ForgeAutoRenamingTool"},"ForgeAutoRenamingTool"),". SRG mappings are used in production when the game is being run by the user client."),(0,r.kt)("p",null,"To allow easier development, ForgeGradle allows the user to choose a mapping set to apply on top of SRG mappings, which we will refer to as human-readable mappings. ForgeGradle knows how to convert the mod jar to SRG mappings for use in production via the ",(0,r.kt)("inlineCode",{parentName:"p"},"reobf*")," task."),(0,r.kt)("p",null,"The mapping set used can be specified by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"mappings")," field in the ",(0,r.kt)("inlineCode",{parentName:"p"},"minecraft")," block. The ",(0,r.kt)("inlineCode",{parentName:"p"},"mappings")," field takes in two arguments: ",(0,r.kt)("inlineCode",{parentName:"p"},"channel")," which is the type of the mapping set, and ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," which is the version of the mapping set to apply."),(0,r.kt)("p",null,"Currently, there are three default mapping sets built into ForgeGradle:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"official")," - This uses the mapping set provided by Mojang. These mappings do not have parameter names and only exist from 1.14 onward."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stable")," - This uses a mapping set generated by MCP. These are typically incomplete and no longer exist as of 1.17."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"snapshot")," - This also is a mapping set generated by MCP, similar to a nightly build of a program. These are also typically incomplete and no longer exist as of 1.17.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The class names used in production are from ",(0,r.kt)("inlineCode",{parentName:"p"},"stable")," prior to 1.17 and from ",(0,r.kt)("inlineCode",{parentName:"p"},"official")," from 1.17 onwards.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gradle"},"mappings {\n    // Sets the mappings to use those from Mojang for Minecraft 1.19.4.\n    mappings channel: 'official', version: '1.19.4'\n\n    // ...\n}\n")),(0,r.kt)("h3",{id:"parchment"},"Parchment"),(0,r.kt)("p",null,"Parchment is an official project maintained by ParchmentMC which provides open, community-sourced parameter names and javadocs on top of the ",(0,r.kt)("inlineCode",{parentName:"p"},"official")," mapping set. You can learn how setup and use the parchment mapping set on ",(0,r.kt)("a",{parentName:"p",href:"https://parchmentmc.org/docs/getting-started"},"their website"),"."))}d.isMDXComponent=!0}}]);