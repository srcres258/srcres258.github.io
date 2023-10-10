"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[4517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const i={},r="Loot Tables",l={unversionedId:"resources/server/loottables",id:"resources/server/loottables",title:"Loot Tables",description:"Loot tables are logic files which dictate what should happen when various actions or scenarios occur. Although the vanilla system deals purely with item generation, the system can be expanded to perform any number of defined actions.",source:"@site/docs/resources/server/loottables.md",sourceDirName:"resources/server",slug:"/resources/server/loottables",permalink:"/docs/resources/server/loottables",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Global Loot Modifiers",permalink:"/docs/resources/server/glm"},next:{title:"Recipes",permalink:"/docs/resources/server/recipes/"}},s={},d=[{value:"Data-Driven Tables",id:"data-driven-tables",level:2},{value:"Using a Loot Table",id:"using-a-loot-table",level:2},{value:"Additional Features",id:"additional-features",level:2},{value:"<code>LootTableLoadEvent</code>",id:"loottableloadevent",level:3},{value:"Loot Pool Names",id:"loot-pool-names",level:3},{value:"Looting Modifiers",id:"looting-modifiers",level:3},{value:"Additional Context Parameters",id:"additional-context-parameters",level:3},{value:"Multiple Items on Smelting",id:"multiple-items-on-smelting",level:3},{value:"Loot Table Id Condition",id:"loot-table-id-condition",level:3},{value:"Can Tool Perform Action Condition",id:"can-tool-perform-action-condition",level:3}],p={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"loot-tables"},"Loot Tables"),(0,a.kt)("p",null,"Loot tables are logic files which dictate what should happen when various actions or scenarios occur. Although the vanilla system deals purely with item generation, the system can be expanded to perform any number of defined actions."),(0,a.kt)("h2",{id:"data-driven-tables"},"Data-Driven Tables"),(0,a.kt)("p",null,"Most loot tables within vanilla are data driven via JSON. This means that a mod is not necessary to create a new loot table, only a ",(0,a.kt)("a",{parentName:"p",href:"https://minecraft.wiki/w/Data_pack"},"Data pack"),". A full list on how to create and put these loot tables within the mod's ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," folder can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://minecraft.wiki/w/Loot_table"},"Minecraft Wiki"),"."),(0,a.kt)("h2",{id:"using-a-loot-table"},"Using a Loot Table"),(0,a.kt)("p",null,"A loot table is referenced by its ",(0,a.kt)("inlineCode",{parentName:"p"},"ResourceLocation")," which points to ",(0,a.kt)("inlineCode",{parentName:"p"},"data/<namespace>/loot_tables/<path>.json"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"LootTable")," associated with the reference can be obtained using ",(0,a.kt)("inlineCode",{parentName:"p"},"LootDataResolver#getLootTable"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"LootDataResolver")," can be obtained via ",(0,a.kt)("inlineCode",{parentName:"p"},"MinecraftServer#getLootData"),"."),(0,a.kt)("p",null,"A loot table is always generated with given parameters. The ",(0,a.kt)("inlineCode",{parentName:"p"},"LootParams")," contains the level the table is generated in, luck for better generation, the ",(0,a.kt)("inlineCode",{parentName:"p"},"LootContextParam"),"s which define scenario context, and any dynamic information that should occur on activation. The ",(0,a.kt)("inlineCode",{parentName:"p"},"LootParams")," can be created using the constructor of the ",(0,a.kt)("inlineCode",{parentName:"p"},"LootParams$Builder")," builder, and built via ",(0,a.kt)("inlineCode",{parentName:"p"},"LootParams$Builder#create")," by passing in the ",(0,a.kt)("inlineCode",{parentName:"p"},"LootContextParamSet"),"."),(0,a.kt)("p",null,"A loot table may also have some context. The ",(0,a.kt)("inlineCode",{parentName:"p"},"LootContext")," takes in the built ",(0,a.kt)("inlineCode",{parentName:"p"},"LootParams")," and can set some random seeded instance. The context is created via the builder ",(0,a.kt)("inlineCode",{parentName:"p"},"LootContext$Builder")," and built using ",(0,a.kt)("inlineCode",{parentName:"p"},"LootContext$Builder#create")," by passing in a nullable ",(0,a.kt)("inlineCode",{parentName:"p"},"ResourceLocation")," representing the random instance to use."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"LootTable")," can be used to generate ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemStack"),"s using one of the available methods which may take in a ",(0,a.kt)("inlineCode",{parentName:"p"},"LootParams")," or a ",(0,a.kt)("inlineCode",{parentName:"p"},"LootContext"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Method"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"getRandomItemsRaw")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Consumes the items generated by the loot table.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"getRandomItems")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Returns the items generated by the loot table.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"fill")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Fills a container with the generated loot table.")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Loot tables were built for generating items, so the methods expect some handling for the ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemStack"),"s.")),(0,a.kt)("h2",{id:"additional-features"},"Additional Features"),(0,a.kt)("p",null,"Forge provides some additional behavior to loot tables for greater control of the system."),(0,a.kt)("h3",{id:"loottableloadevent"},(0,a.kt)("inlineCode",{parentName:"h3"},"LootTableLoadEvent")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"LootTableLoadEvent")," is an ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/events#creating-an-event-handler"},"event")," fired on the Forge event bus which is fired whenever a loot table is loaded. If the event is canceled, then an empty loot table will be loaded instead."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Do ",(0,a.kt)("strong",{parentName:"p"},"not")," modify a loot table's drops through this event. Those modifications should be done using ",(0,a.kt)("a",{parentName:"p",href:"/docs/resources/server/glm"},"global loot modifiers"),".")),(0,a.kt)("h3",{id:"loot-pool-names"},"Loot Pool Names"),(0,a.kt)("p",null,"Loot pools can be named using the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," key. Any non-named loot pool will be the hash code of the pool prefixed by ",(0,a.kt)("inlineCode",{parentName:"p"},"custom#"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// For some loot pool\n{\n  "name": "example_pool", // Pool will be named \'example_pool\'\n  "rolls": {\n    // ...\n  },\n  "entries": {\n    // ...\n  }\n}\n')),(0,a.kt)("h3",{id:"looting-modifiers"},"Looting Modifiers"),(0,a.kt)("p",null,"Loot tables are now affected by the ",(0,a.kt)("inlineCode",{parentName:"p"},"LootingLevelEvent"),", on the Forge event bus, in addition to the looting enchantment."),(0,a.kt)("h3",{id:"additional-context-parameters"},"Additional Context Parameters"),(0,a.kt)("p",null,"Forge extends certain parameter sets to account for missing contexts which may be applicable. ",(0,a.kt)("inlineCode",{parentName:"p"},"LootContextParamSets#CHEST")," now allows for a ",(0,a.kt)("inlineCode",{parentName:"p"},"LootContextParams#KILLER_ENTITY")," as chest minecarts are entities which can be broken (or 'killed'). ",(0,a.kt)("inlineCode",{parentName:"p"},"LootContextParamSets#FISHING")," also allows for a ",(0,a.kt)("inlineCode",{parentName:"p"},"LootContextParams#KILLER_ENTITY")," since the fishing hook is also an entity which is retracted (or 'killed') when the player retrieves it."),(0,a.kt)("h3",{id:"multiple-items-on-smelting"},"Multiple Items on Smelting"),(0,a.kt)("p",null,"When using the ",(0,a.kt)("inlineCode",{parentName:"p"},"SmeltItemFunction"),", a smelted recipe will now return the actual number of items from the result instead of a single smelted item (e.g. if a smelting recipe returns 3 items and there are 3 drops, then the result would be 9 smelted items instead of 3)."),(0,a.kt)("h3",{id:"loot-table-id-condition"},"Loot Table Id Condition"),(0,a.kt)("p",null,"Forge adds an additional ",(0,a.kt)("inlineCode",{parentName:"p"},"LootItemCondition")," which allows certain items to generate for a specific table. This is typically used within ",(0,a.kt)("a",{parentName:"p",href:"/docs/resources/server/glm"},"global loot modifiers"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// In some loot pool or pool entry\n{\n  "conditions": [\n    {\n      "condition": "forge:loot_table_id",\n      // Will apply when the loot table is for dirt\n      "loot_table_id": "minecraft:blocks/dirt"\n    }\n  ]\n}\n')),(0,a.kt)("h3",{id:"can-tool-perform-action-condition"},"Can Tool Perform Action Condition"),(0,a.kt)("p",null,"Forge adds an additional ",(0,a.kt)("inlineCode",{parentName:"p"},"LootItemCondition")," which checks whether the given ",(0,a.kt)("inlineCode",{parentName:"p"},"LootContextParams#TOOL")," can perform the specified ",(0,a.kt)("inlineCode",{parentName:"p"},"ToolAction"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// In some loot pool or pool entry\n{\n  "conditions": [\n    {\n      "condition": "forge:can_tool_perform_action",\n      // Will apply when the tool can strip a log like an axe\n      "action": "axe_strip"\n    }\n  ]\n}\n')))}m.isMDXComponent=!0}}]);