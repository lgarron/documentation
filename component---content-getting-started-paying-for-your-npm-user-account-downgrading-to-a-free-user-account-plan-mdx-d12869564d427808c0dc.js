(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{KlHH:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return m})),n.d(t,"default",(function(){return p}));var a,l=n("zLVn"),o=n("q1tI"),i=n("7ljp"),r=n("O6H6"),c=n("4LHR"),m={},u=(a="Note",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),d={_frontmatter:m},s=r.a;function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)(s,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(u,{mdxType:"Note"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," This article only applies to users of the public npm registry.")),Object(i.b)("p",null,"If you have a paid user account, but no longer need private packages, you can downgrade your paid organization to a free organization. When you downgrade from a paid to a free organization, you will lose the ability to install and publish private packages at the end of your last paid billing cycle. Your private packages will ",Object(i.b)("em",{parentName:"p"},"not")," be made publicly visible when you downgrade to a free plan."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)(o.Fragment,null,c.a["user-login"].text),Object(i.b)(o.Fragment,null,c.a["user-login"].image)),Object(i.b)("li",{parentName:"ol"},Object(i.b)(o.Fragment,null,c.a["billing-info"].text),Object(i.b)(o.Fragment,null,c.a["billing-info"].image)),Object(i.b)("li",{parentName:"ol"},Object(i.b)(o.Fragment,null,c.a["billing-downgrade-selection"].text),Object(i.b)(o.Fragment,null,c.a["billing-downgrade-selection"].image)),Object(i.b)("li",{parentName:"ol"},Object(i.b)(o.Fragment,null,c.a["billing-downgrade-confirm"].text),Object(i.b)(o.Fragment,null,c.a["billing-downgrade-confirm"].image))))}p.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),o=n("aOgs"),i=n("q1tI"),r=n.n(i),c=n("7ljp"),m=n("pD55"),u=n("8Aig"),d=n("ReZb"),s=n("GCVy"),p=n("+6vE");var b=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return r.a.createElement("strong",null,t)},f=n("gnlW"),y=n("mwnC"),h=n("/Rw0"),E=n("dVM4"),O=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function w(e){var t=e.items,n=e.depth;return r.a.createElement(O,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(w,{items:e.items,depth:n+1}):null)})))}w.defaultProps={depth:0};var v=w,x=n("MfeC");function j(e){var t=x.a.getPath(e.location.pathname),n=x.a.getVariantAndPage(e.root,t);if(!n)return null;var a=x.a.getVariantsForPage(e.root,n.page),o=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),o.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,i.variant.title),r.a.createElement(j.Menu,{direction:e.direction,width:e.menuWidth},o)))}j.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var k=j,_=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),N=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),z=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,O=i.title,w=i.description,j=i.status,F=i.source,H=i.additionalContributors,M=void 0===H?[]:H,W=x.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:d.a,Note:s.a,Prompt:b,PromptReply:g,Screenshot:f.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(m.a,{title:O,description:w}),r.a.createElement(u.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(_,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(y.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),r.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(N,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},O),w))),null!=W?r.a.createElement(I,null,r.a.createElement(k,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:a})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:u.a+24,mt:"6px",maxHeight:"calc(100vh - "+u.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(v,{items:n.tableOfContents.items})):null,r.a.createElement(z,null,j||F?r.a.createElement(l.k,{mb:3,alignItems:"center"},j?r.a.createElement(E.a,{status:j}):null,r.a.createElement(l.e,{mx:"auto"}),F?r.a.createElement(h.a,{href:F}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:o.b,mr:2}):r.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(p.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-getting-started-paying-for-your-npm-user-account-downgrading-to-a-free-user-account-plan-mdx-d12869564d427808c0dc.js.map