(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),o=n("aOgs"),i=n("q1tI"),r=n.n(i),c=n("7ljp"),p=n("pD55"),s=n("8Aig"),m=n("ReZb"),b=n("GCVy"),d=n("+6vE");var u=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},g=n("gnlW"),f=n("mwnC"),y=n("/Rw0"),O=n("dVM4"),j=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function k(e){var t=e.items,n=e.depth;return r.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(k,{items:e.items,depth:n+1}):null)})))}k.defaultProps={depth:0};var w=k,v=n("MfeC");function E(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),o=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),o.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,i.variant.title),r.a.createElement(E.Menu,{direction:e.direction,width:e.menuWidth},o)))}E.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var N=E,C=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,j=i.title,k=i.description,E=i.status,z=i.source,H=i.additionalContributors,M=void 0===H?[]:H,P=v.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:m.a,Note:b.a,Prompt:u,PromptReply:h,Screenshot:g.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:j,description:k}),r.a.createElement(s.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(f.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},j),k))),null!=P?r.a.createElement(I,null,r.a.createElement(N,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:P,location:a})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(w,{items:n.tableOfContents.items})):null,r.a.createElement(T,null,E||z?r.a.createElement(l.k,{mb:3,alignItems:"center"},E?r.a.createElement(O.a,{status:E}):null,r.a.createElement(l.e,{mx:"auto"}),z?r.a.createElement(y.a,{href:z}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:o.b,mr:2}):r.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(d.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}},xpYw:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return m}));var a,l=n("zLVn"),o=(n("q1tI"),n("7ljp")),i=n("O6H6"),r={},c=(a="Note",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),p={_frontmatter:r},s=i.a;function m(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(o.b)(s,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can ",Object(o.b)("a",{parentName:"p",href:"/cli-documentation/install"},"install")," a package locally if you want to depend on the package from your own module, using something like Node.js ",Object(o.b)("inlineCode",{parentName:"p"},"require"),". This is ",Object(o.b)("inlineCode",{parentName:"p"},"npm install"),"'s default behavior."),Object(o.b)("h2",null,"Installing an unscoped package"),Object(o.b)("p",null,"Unscoped packages are always public, which means they can be searched for, downloaded, and installed by anyone. To install a public package, on the command line, run"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm install <package_name>\n")),Object(o.b)("p",null,"This will create the ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," directory in your current directory (if one doesn't exist yet) and will download the package to that directory."),Object(o.b)(c,{mdxType:"Note"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," If there is no ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file in the local directory, the latest version of the package is installed."),Object(o.b)("p",null,"If there is a ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file, npm installs the latest version that satisfies the ",Object(o.b)("a",{parentName:"p",href:"about-semantic-versioning"},"semver rule")," declared in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),".")),Object(o.b)("h2",null,"Installed a scoped public package"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"about-scopes"},"Scoped public packages")," can be downloaded and installed by anyone, as long as the scope name is referenced during installation:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm install @scope/package-name\n")),Object(o.b)("h2",null,"Installing a private package"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"about-private-packages"},"Private packages")," can only be downloaded and installed by those who have been granted read access to the package. Since private packages are always scoped, you must reference the scope name during installation:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm install @scope/private-package-name\n")),Object(o.b)("h2",null,"Testing package installation"),Object(o.b)("p",null,"To confirm that ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," worked correctly, in your module directory, check that a ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," directory exists and that it contains a directory for the package(s) you installed:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"ls node_modules\n")),Object(o.b)("h2",null,"Installed package version"),Object(o.b)("p",null,"If there is a ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file in the directory in which ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," is run, npm installs the latest version of the package that satisfies the ",Object(o.b)("a",{parentName:"p",href:"about-semantic-versioning"},"semantic versioning rule")," declared in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(o.b)("p",null,"If there is no ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file, the latest version of the package is installed."),Object(o.b)("h2",null,"Installing a package with dist-tags"),Object(o.b)("p",null,"Like ",Object(o.b)("inlineCode",{parentName:"p"},"npm publish"),", ",Object(o.b)("inlineCode",{parentName:"p"},"npm install <package_name>")," will use the ",Object(o.b)("inlineCode",{parentName:"p"},"latest")," tag by default."),Object(o.b)("p",null,"To override this behavior, use ",Object(o.b)("inlineCode",{parentName:"p"},"npm install <package_name>@<tag>"),". For example, to install the ",Object(o.b)("inlineCode",{parentName:"p"},"example-package")," at the version tagged with ",Object(o.b)("inlineCode",{parentName:"p"},"beta"),", you would run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm install example-package@beta\n")),Object(o.b)("h2",null,"Resources"),Object(o.b)("iframe",{src:"https://www.youtube.com/embed/JDSfqFFbNYQ",frameBorder:"0",allowFullScreen:!0}))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-packages-and-modules-getting-packages-from-the-registry-downloading-and-installing-packages-locally-mdx-181bf73f55d42501a457.js.map