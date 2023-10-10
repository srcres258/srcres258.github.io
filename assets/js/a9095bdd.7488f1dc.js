"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[9546],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(r),g=a,f=l["".concat(c,".").concat(g)]||l[g]||u[g]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6917:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const i={},o="Datapack Registry Object Generation",s={unversionedId:"datagen/server/datapackregistries",id:"datagen/server/datapackregistries",title:"Datapack Registry Object Generation",description:"Datapack registry objects can be generated for a mod by constructing a new DatapackBuiltinEntriesProvider and providing a RegistrySetBuilder with the new objects to register. The provider must be added to the DataGenerator.",source:"@site/docs/datagen/server/datapackregistries.md",sourceDirName:"datagen/server",slug:"/datagen/server/datapackregistries",permalink:"/docs/datagen/server/datapackregistries",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Advancement Generation",permalink:"/docs/datagen/server/advancements"},next:{title:"Global Loot Modifier Generation",permalink:"/docs/datagen/server/glm"}},c={},d=[{value:"<code>RegistrySetBuilder</code>",id:"registrysetbuilder",level:2},{value:"Registering with <code>BootstapContext</code>",id:"registering-with-bootstapcontext",level:2},{value:"Datapack Registry Object Lookup",id:"datapack-registry-object-lookup",level:3}],p={toc:d},l="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"datapack-registry-object-generation"},"Datapack Registry Object Generation"),(0,a.kt)("p",null,"Datapack registry objects can be generated for a mod by constructing a new ",(0,a.kt)("inlineCode",{parentName:"p"},"DatapackBuiltinEntriesProvider")," and providing a ",(0,a.kt)("inlineCode",{parentName:"p"},"RegistrySetBuilder")," with the new objects to register. The provider must be ",(0,a.kt)("a",{parentName:"p",href:"/docs/datagen/#data-providers"},"added")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"DataGenerator"),"."),(0,a.kt)("p",null,"!!! note\n",(0,a.kt)("inlineCode",{parentName:"p"},"DatapackBuiltinEntriesProvider")," is a Forge extension on top of ",(0,a.kt)("inlineCode",{parentName:"p"},"RegistriesDatapackGenerator")," which properly handles referencing existing datapack registry objects without exploding the entry. So, this documentation will use ",(0,a.kt)("inlineCode",{parentName:"p"},"DatapackBuiltinEntriesProvider"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// On the MOD event bus\n@SubscribeEvent\npublic void gatherData(GatherDataEvent event) {\n    event.getGenerator().addProvider(\n        // Tell generator to run only when server data are generating\n        event.includeServer(),\n        output -> new DatapackBuiltinEntriesProvider(\n          output,\n          event.getLookupProvider(),\n          // The builder containing the datapack registry objects to generate\n          new RegistrySetBuilder().add(/* ... */),\n          // Set of mod ids to generate the datapack registry objects of\n          Set.of(MOD_ID)\n        )\n    );\n}\n")),(0,a.kt)("h2",{id:"registrysetbuilder"},(0,a.kt)("inlineCode",{parentName:"h2"},"RegistrySetBuilder")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"RegistrySetBuilder")," is responsible for building all datapack registry objects to be used within the game. The builder can add a new entry for a registry, which can then register objects to that registry."),(0,a.kt)("p",null,"First, a new instance of a ",(0,a.kt)("inlineCode",{parentName:"p"},"RegistrySetBuilder")," can be initialized by calling the constructor. Then, the ",(0,a.kt)("inlineCode",{parentName:"p"},"#add")," method (which takes in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ResourceKey")," of the registry, a ",(0,a.kt)("inlineCode",{parentName:"p"},"RegistryBootstrap")," consumer containing the ",(0,a.kt)("inlineCode",{parentName:"p"},"BootstapContext")," to register the objects, and an optional ",(0,a.kt)("inlineCode",{parentName:"p"},"Lifecycle")," argument to indicate the registry's current lifecycle status) can be called to handle a specific registry for registration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"new RegistrySetBuilder()\n  // Create configured features\n  .add(Registries.CONFIGURED_FEATURE, bootstrap -> {\n    // Register configured features here\n  })\n  // Create placed features\n  .add(Registries.PLACED_FEATURE, bootstrap -> {\n    // Register placed features here\n  });\n")),(0,a.kt)("p",null,"!!! note\nDatapack registries created through Forge can also generate their objects using this builder by also passing in the associated ",(0,a.kt)("inlineCode",{parentName:"p"},"ResourceKey"),"."),(0,a.kt)("h2",{id:"registering-with-bootstapcontext"},"Registering with ",(0,a.kt)("inlineCode",{parentName:"h2"},"BootstapContext")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"#register")," method in the ",(0,a.kt)("inlineCode",{parentName:"p"},"BootstapContext")," provided by the builder can be used to register objects. It takes in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ResourceKey")," representing the registry name of the object, the object to register, and an optional ",(0,a.kt)("inlineCode",{parentName:"p"},"Lifecycle")," argument to indicate the registry object's current lifecycle status. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public static final ResourceKey<ConfiguredFeature<?, ?>> EXAMPLE_CONFIGURED_FEATURE = ResourceKey.create(\n  Registries.CONFIGURED_FEATURE,\n  new ResourceLocation(MOD_ID, "example_configured_feature")\n);\n\n// In some constant location or argument\nnew RegistrySetBuilder()\n  // Create configured features\n  .add(Registries.CONFIGURED_FEATURE, bootstrap -> {\n    // Register configured features here\n    bootstrap.register(\n      // The resource key for the configured feature\n      EXAMPLE_CONFIGURED_FEATURE,\n      new ConfiguredFeature<>(\n        Feature.ORE, // Create an ore feature\n        new OreConfiguration(\n          List.of(), // Does nothing\n          8 // in veins of at most 8\n        )\n      )\n    );\n  })\n  // Create placed features\n  .add(Registries.PLACED_FEATURE, bootstrap -> {\n    // Register placed features here\n  });\n')),(0,a.kt)("h3",{id:"datapack-registry-object-lookup"},"Datapack Registry Object Lookup"),(0,a.kt)("p",null,"Sometimes datapack registry objects may want to use other datapack registry objects or tags containing datapack registry objects. In those cases, you can look up another datapack registry using ",(0,a.kt)("inlineCode",{parentName:"p"},"BootstapContext#lookup")," to get a ",(0,a.kt)("inlineCode",{parentName:"p"},"HolderGetter"),". From there, you can get a ",(0,a.kt)("inlineCode",{parentName:"p"},"Holder$Reference")," to the datapack registry object or a ",(0,a.kt)("inlineCode",{parentName:"p"},"HolderSet$Named")," for the tag via ",(0,a.kt)("inlineCode",{parentName:"p"},"#getOrThrow")," by passing in the associated key."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public static final ResourceKey<ConfiguredFeature<?, ?>> EXAMPLE_CONFIGURED_FEATURE = ResourceKey.create(\n  Registries.CONFIGURED_FEATURE,\n  new ResourceLocation(MOD_ID, "example_configured_feature")\n);\n\npublic static final ResourceKey<PlacedFeature> EXAMPLE_PLACED_FEATURE = ResourceKey.create(\n  Registries.PLACED_FEATURE,\n  new ResourceLocation(MOD_ID, "example_placed_feature")\n);\n\n// In some constant location or argument\nnew RegistrySetBuilder()\n  // Create configured features\n  .add(Registries.CONFIGURED_FEATURE, bootstrap -> {\n    // Register configured features here\n    bootstrap.register(\n      // The resource key for the configured feature\n      EXAMPLE_CONFIGURED_FEATURE,\n      new ConfiguredFeature(/* ... */)\n    );\n  })\n  // Create placed features\n  .add(Registries.PLACED_FEATURE, bootstrap -> {\n    // Register placed features here\n\n    // Get configured feature registry\n    HolderGetter<ConfiguredFeature<?, ?>> configured = bootstrap.lookup(Registries.CONFIGURED_FEATURE);\n\n    bootstrap.register(\n      // The resource key for the placed feature\n      EXAMPLE_PLACED_FEATURE,\n      new PlacedFeature(\n        configured.getOrThrow(EXAMPLE_CONFIGURED_FEATURE), // Get the configured feature\n        List.of() // and do nothing to the placement location\n      )\n    )\n  });\n')))}u.isMDXComponent=!0}}]);