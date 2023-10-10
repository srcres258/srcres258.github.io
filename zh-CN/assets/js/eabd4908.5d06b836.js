"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[6803],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5454:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={},i="Getting Started with ForgeGradle",l={unversionedId:"docs/gettingstarted/index",id:"version-5.x/docs/gettingstarted/index",title:"Getting Started with ForgeGradle",description:"If you have never used ForgeGradle before, here is the minimum amount of information needed to get a development environment setup.",source:"@site/neogradle_versioned_docs/version-5.x/docs/gettingstarted/index.md",sourceDirName:"docs/gettingstarted",slug:"/docs/gettingstarted/",permalink:"/zh-CN/neogradle/5.x/docs/gettingstarted/",draft:!1,tags:[],version:"5.x",frontMatter:{},sidebar:"ngSidebar",previous:{title:"Jar-in-Jar",permalink:"/zh-CN/neogradle/5.x/docs/dependencies/jarinjar"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Setting Up ForgeGradle",id:"setting-up-forgegradle",level:2},{value:"Eclipse",id:"eclipse",level:4},{value:"IntelliJ IDEA",id:"intellij-idea",level:4},{value:"Visual Studio Code",id:"visual-studio-code",level:4}],p={toc:d},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-forgegradle"},"Getting Started with ForgeGradle"),(0,a.kt)("p",null,"If you have never used ForgeGradle before, here is the minimum amount of information needed to get a development environment setup."),(0,a.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An installation of the Java Development Kit (JDK)")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Minecraft Versions"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Java Development Kit Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1.12 - 1.16"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://adoptium.net/temurin/releases/?version=8"},"JDK 8"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1.17"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://adoptium.net/temurin/releases/?version=16"},"JDK 16"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1.18 - 1.19"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://adoptium.net/temurin/releases/?version=17"},"JDK 17"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Familiarity with an Integrated Development Environment (IDE)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"It is preferable to use one with some form of Gradle integration")))),(0,a.kt)("h2",{id:"setting-up-forgegradle"},"Setting Up ForgeGradle"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First download a copy of the ",(0,a.kt)("a",{parentName:"li",href:"https://files.minecraftforge.net/"},"Modder Development Kit (MDK)")," from MinecraftForge and extract the zip to an empty directory."),(0,a.kt)("li",{parentName:"ol"},"Open the directory you extracted the MDK to within your IDE of choice. If your IDE integrates with Gradle, import it as a Gradle project."),(0,a.kt)("li",{parentName:"ol"},"Customize your Gradle buildscript for your mod:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"archivesBaseName")," to the desired mod id. Additionally, replace all occurrences of ",(0,a.kt)("inlineCode",{parentName:"li"},"examplemod")," with the mod id as well."),(0,a.kt)("li",{parentName:"ol"},"Change the ",(0,a.kt)("inlineCode",{parentName:"li"},"group")," to your desired package name. Make sure to follow existing ",(0,a.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/package/namingpkgs.html"},"naming conventions"),"."),(0,a.kt)("li",{parentName:"ol"},"Change the ",(0,a.kt)("inlineCode",{parentName:"li"},"version")," number to reflect the current version of your mod. It is highly recommended to use ",(0,a.kt)("a",{parentName:"li",href:"https://docs.minecraftforge.net/en/latest/gettingstarted/versioning/"},"Forge's extension on semantic versioning"),".")))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Make sure that any changes to the mod id are reflected in the mods.toml and main mod class. See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.minecraftforge.net/en/latest/gettingstarted/structuring/"},"Structuring Your Mod")," on the Forge docs for more information.")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Reload or refresh your Gradle project using your IDE. If your IDE does not have Gradle integration, run the following from a shell in your project's directory:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./gradlew build --refresh-dependencies\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"If your IDE is either Eclipse, IntelliJ IDEA, or Visual Studio Code, you can generate run configurations using one of the following commands, respectively:")),(0,a.kt)("h4",{id:"eclipse"},"Eclipse"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./gradlew genEclipseRuns\n")),(0,a.kt)("h4",{id:"intellij-idea"},"IntelliJ IDEA"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./gradlew genIntellijRuns\n")),(0,a.kt)("h4",{id:"visual-studio-code"},"Visual Studio Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./gradlew genVSCodeRuns\n")),(0,a.kt)("p",null,"You can the run the client, server, etc. using one of the generated run configurations."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If your IDE is not listed, you can still run the configurations using ",(0,a.kt)("inlineCode",{parentName:"p"},"./gradlew run*")," (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"runClient"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"runServer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"runData"),"). You can use these commands with the supported IDEs as well.")),(0,a.kt)("p",null,"Congratulations, now you have a development environment set up!"))}c.isMDXComponent=!0}}]);