(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{O6H6:function(e,t,n){"use strict";var l=n("vOnD"),a=n("u9kb"),i=n("aOgs"),o=n("q1tI"),r=n.n(o),c=n("7ljp"),b=n("pD55"),m=n("8Aig"),s=n("ReZb"),p=n("GCVy"),d=n("+6vE");var u=function(e){var t=e.children;return r.a.createElement(a.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(a.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},g=n("gnlW"),O=n("mwnC"),f=n("/Rw0"),j=n("dVM4"),N=Object(l.f)(a.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function y(e){var t=e.items,n=e.depth;return r.a.createElement(N,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(a.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(a.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(y,{items:e.items,depth:n+1}):null)})))}y.defaultProps={depth:0};var C=y,v=n("MfeC");function w(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var l=v.a.getVariantsForPage(e.root,n.page),i=[],o=l[0];return 0===l.length?null:(l.forEach((function(e){e.page.url===t&&(o=e),i.push(r.a.createElement(a.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(a.i,{overlay:e.overlay},r.a.createElement(a.i.Button,null,o.variant.title),r.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},i)))}w.Menu=Object(l.f)(a.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var E=w,k=Object(l.f)(a.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(l.f)(a.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(l.f)(a.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(l.f)(a.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(l.f)(a.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(l.f)(a.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,l=e.location,o=n.frontmatter,N=o.title,y=o.description,w=o.status,L=o.source,H=o.additionalContributors,A=void 0===H?[]:H,z=v.a.getVariantRoot(l.pathname);return r.a.createElement(c.a,{components:{Index:s.a,Note:p.a,Prompt:u,PromptReply:h,Screenshot:g.a}},r.a.createElement(a.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(b.a,{title:N,description:y}),r.a.createElement(m.b,{location:l,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(k,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(a.e,{display:["none",null,null,"block"]},r.a.createElement(O.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:l})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(a.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(a.e,null,r.a.createElement(a.e,null,r.a.createElement(a.m,{as:"h1"},N),y))),null!=z?r.a.createElement(I,null,r.a.createElement(E,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:z,location:l})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},r.a.createElement(a.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(C,{items:n.tableOfContents.items})):null,r.a.createElement(T,null,w||L?r.a.createElement(a.k,{mb:3,alignItems:"center"},w?r.a.createElement(j.a,{status:w}):null,r.a.createElement(a.e,{mx:"auto"}),L?r.a.createElement(f.a,{href:L}):null):null,n.tableOfContents.items?r.a.createElement(a.e,{display:["block",null,"none"],mb:3},r.a.createElement(a.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(a.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(a.r,{icon:i.b,mr:2}):r.a.createElement(a.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(a.e,{pt:1},r.a.createElement(C,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(d.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(A.map((function(e){return{login:e}})))}))))))}},d2CY:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return b}));var l=n("zLVn"),a=(n("q1tI"),n("7ljp")),i=n("O6H6"),o={},r={_frontmatter:o},c=i.a;function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(a.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",null,"Description"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"npm")," CLI has various mechanisms for showing different levels of information back to end-users for certain commands, configurations & environments."),Object(a.b)("h3",null,"Setting Log File Location"),Object(a.b)("p",null,"All logs are written to a debug log, with the path to that file printed if the execution of a command fails."),Object(a.b)("p",null,"The default location of the logs directory is a directory named ",Object(a.b)("inlineCode",{parentName:"p"},"_logs")," inside the npm cache. This can be changed\nwith the ",Object(a.b)("inlineCode",{parentName:"p"},"logs-dir")," config option."),Object(a.b)("p",null,"Log files will be removed from the ",Object(a.b)("inlineCode",{parentName:"p"},"logs-dir")," when the number of log files exceeds ",Object(a.b)("inlineCode",{parentName:"p"},"logs-max"),", with the oldest logs being deleted first."),Object(a.b)("p",null,"To turn off logs completely set ",Object(a.b)("inlineCode",{parentName:"p"},"--logs-max=0"),"."),Object(a.b)("h3",null,"Setting Log Levels"),Object(a.b)("h4",null,Object(a.b)("inlineCode",{parentName:"h4"},"loglevel")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"loglevel")," is a global argument/config that can be set to determine the type of information to be displayed."),Object(a.b)("p",null,"The default value of ",Object(a.b)("inlineCode",{parentName:"p"},"loglevel")," is ",Object(a.b)("inlineCode",{parentName:"p"},'"notice"')," but there are several levels/types of logs available, including:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},'"silent"')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},'"error"')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},'"warn"')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},'"notice"')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},'"http"')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},'"timing"')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},'"info"')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},'"verbose"')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},'"silly"'))),Object(a.b)("p",null,"All logs pertaining to a level proceeding the current setting will be shown."),Object(a.b)("h5",null,"Aliases"),Object(a.b)("p",null,"The log levels listed above have various corresponding aliases, including:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-d"),": ",Object(a.b)("inlineCode",{parentName:"li"},"--loglevel info")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--dd"),": ",Object(a.b)("inlineCode",{parentName:"li"},"--loglevel verbose")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--verbose"),": ",Object(a.b)("inlineCode",{parentName:"li"},"--loglevel verbose")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--ddd"),": ",Object(a.b)("inlineCode",{parentName:"li"},"--loglevel silly")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-q"),": ",Object(a.b)("inlineCode",{parentName:"li"},"--loglevel warn")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--quiet"),": ",Object(a.b)("inlineCode",{parentName:"li"},"--loglevel warn")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-s"),": ",Object(a.b)("inlineCode",{parentName:"li"},"--loglevel silent")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--silent"),": ",Object(a.b)("inlineCode",{parentName:"li"},"--loglevel silent"))),Object(a.b)("h4",null,Object(a.b)("inlineCode",{parentName:"h4"},"foreground-scripts")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"npm")," CLI began hiding the output of lifecycle scripts for ",Object(a.b)("inlineCode",{parentName:"p"},"npm install")," as of ",Object(a.b)("inlineCode",{parentName:"p"},"v7"),'. Notably, this means you will not see logs/output from packages that may be using "install scripts" to display information back to you or from your own project\'s scripts defined in ',Object(a.b)("inlineCode",{parentName:"p"},"package.json"),". If you'd like to change this behavior & log this output you can set ",Object(a.b)("inlineCode",{parentName:"p"},"foreground-scripts")," to ",Object(a.b)("inlineCode",{parentName:"p"},"true"),"."),Object(a.b)("h3",null,"Timing Information"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"--timing")," config can be set which does two things:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Always shows the full path to the debug log regardless of command exit status"),Object(a.b)("li",{parentName:"ol"},"Write timing information to a timing file in the cache or ",Object(a.b)("inlineCode",{parentName:"li"},"logs-dir"))),Object(a.b)("p",null,"This file is a newline delimited list of JSON  objects that can be inspected to see timing data for each task in a ",Object(a.b)("inlineCode",{parentName:"p"},"npm")," CLI run."),Object(a.b)("h3",null,"Registry Response Headers"),Object(a.b)("h4",null,Object(a.b)("inlineCode",{parentName:"h4"},"npm-notice")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"npm")," CLI reads from & logs any ",Object(a.b)("inlineCode",{parentName:"p"},"npm-notice")," headers that are returned from the configured registry. This mechanism can be used by third-party registries to provide useful information when network-dependent requests occur."),Object(a.b)("p",null,"This header is not cached, and will not be logged if the request is served from the cache."),Object(a.b)("h3",null,"Logs and Sensitive Information"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"npm")," CLI makes a best effort to redact the following from terminal output and log files:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Passwords inside basic auth URLs"),Object(a.b)("li",{parentName:"ul"},"npm tokens")),Object(a.b)("p",null,"However, this behavior should not be relied on to keep all possible sensitive information redacted. If you are concerned about secrets in your log file or terminal output, you can use ",Object(a.b)("inlineCode",{parentName:"p"},"--loglevel=silent")," and ",Object(a.b)("inlineCode",{parentName:"p"},"--logs-max=0")," to ensure no logs are written to your terminal or filesystem."),Object(a.b)("h3",null,"See also"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/cli/v8/using-npm/config"},"config"))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-8-using-npm-logging-md-e17d0d478c9f8f35d4ad.js.map