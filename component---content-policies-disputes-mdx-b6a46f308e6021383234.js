(window.webpackJsonp=window.webpackJsonp||[]).push([[364],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),r=n("aOgs"),i=n("q1tI"),l=n.n(i),s=n("7ljp"),c=n("pD55"),p=n("8Aig"),u=n("ReZb"),m=n("GCVy"),b=n("+6vE");var d=function(e){var t=e.children;return l.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},l.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return l.a.createElement("strong",null,t)},f=n("gnlW"),g=n("mwnC"),y=n("/Rw0"),O=n("dVM4"),j=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function v(e){var t=e.items,n=e.depth;return l.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return l.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},l.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?l.a.createElement(v,{items:e.items,depth:n+1}):null)})))}v.defaultProps={depth:0};var k=v,w=n("MfeC");function E(e){var t=w.a.getPath(e.location.pathname),n=w.a.getVariantAndPage(e.root,t);if(!n)return null;var a=w.a.getVariantsForPage(e.root,n.page),r=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),r.push(l.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),l.a.createElement(o.i,{overlay:e.overlay},l.a.createElement(o.i.Button,null,i.variant.title),l.a.createElement(E.Menu,{direction:e.direction,width:e.menuWidth},r)))}E.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var N=E,C=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),T=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),z=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,j=i.title,v=i.description,E=i.status,P=i.source,S=i.additionalContributors,q=void 0===S?[]:S,W=w.a.getVariantRoot(a.pathname);return l.a.createElement(s.a,{components:{Index:u.a,Note:m.a,Prompt:d,PromptReply:h,Screenshot:f.a}},l.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},l.a.createElement(c.a,{title:j,description:v}),l.a.createElement(p.b,{location:a,isSearchEnabled:n.isSearchEnabled}),l.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},l.a.createElement(o.e,{display:["none",null,null,"block"]},l.a.createElement(g.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),l.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},l.a.createElement(_,null,l.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},l.a.createElement(o.e,null,l.a.createElement(o.e,null,l.a.createElement(o.m,{as:"h1"},j),v))),null!=W?l.a.createElement(I,null,l.a.createElement(N,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:a})):null),n.tableOfContents.items?l.a.createElement(T,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},l.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),l.a.createElement(k,{items:n.tableOfContents.items})):null,l.a.createElement(z,null,E||P?l.a.createElement(o.k,{mb:3,alignItems:"center"},E?l.a.createElement(O.a,{status:E}):null,l.a.createElement(o.e,{mx:"auto"}),P?l.a.createElement(y.a,{href:P}):null):null,n.tableOfContents.items?l.a.createElement(o.e,{display:["block",null,"none"],mb:3},l.a.createElement(o.h,null,(function(e){var t=e.open;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?l.a.createElement(o.r,{icon:r.b,mr:2}):l.a.createElement(o.r,{icon:r.c,mr:2}),"Table of contents"),l.a.createElement(o.e,{pt:1},l.a.createElement(k,{items:n.tableOfContents.items})))}))):null,t,l.a.createElement(b.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(q.map((function(e){return{login:e}})))}))))))}},"X/K7":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return c}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),r=n("O6H6"),i={},l={_frontmatter:i},s=r.a;function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(s,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document describes the steps that you should take to resolve\nnaming disputes with other npm publishers.  It also describes the steps\nyou should take if you think a name ",Object(o.b)("a",{parentName:"p",href:"#trademarks"},"infringes your trademark"),"."),Object(o.b)("p",null,"This document is additive to the guidelines in the\n",Object(o.b)("a",{parentName:"p",href:"/policies/conduct"},"npm Code of Conduct")," and\n",Object(o.b)("a",{parentName:"p",href:"/policies/open-source-terms"},"npm Open-Source terms"),".\nNothing in this document should be interpreted to contradict any aspect\nof the npm Code of Conduct or Open-Source Terms."),Object(o.b)("h2",null,"tl;dr"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open a support ticket at ",Object(o.b)("a",{parentName:"li",href:"https://npmjs.com/support"},"https://npmjs.com/support")),Object(o.b)("li",{parentName:"ol"},"Explain why you require a package, org, or username transferred"),Object(o.b)("li",{parentName:"ol"},"Support will address your request. Please note submitting a report does not\nguarantee the transfer of a package, org, or username.")),Object(o.b)("h2",null,"When to use this process"),Object(o.b)("p",null,"This process is an excellent way to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Request a name that you believe is currently misleading or could be confused with a name used by your company or open source project"),Object(o.b)("li",{parentName:"ul"},"Request a name related to your company or open source project that cannot be claimed via account recovery")),Object(o.b)("p",null,"This process does not apply if the package violates our\n",Object(o.b)("a",{parentName:"p",href:"/policies/open-source-terms"},"Terms of Use"),",\nin particular our\n",Object(o.b)("a",{parentName:"p",href:"/policies/open-source-terms#acceptable-use"},"Acceptable Use"),"\nand ",Object(o.b)("a",{parentName:"p",href:"/policies/open-source-terms#acceptable-content"},"Acceptable Content"),"\nrules, or our ",Object(o.b)("a",{parentName:"p",href:"/policies/conduct"},"Code of Conduct"),'.\nThose documents refer to this one to resolve cases of "squatting"; see\nbelow.'),Object(o.b)("p",null,"If you see bad behavior or content you believe is unacceptable, refer to\nthe Code of Conduct for guidelines on\n",Object(o.b)("a",{parentName:"p",href:"/policies/conduct#reporting-violations-of-this-code-of-conduct"},"reporting violations"),".\n",Object(o.b)("strong",{parentName:"p"},"You are never expected to resolve abusive behavior on your own."),"\n",Object(o.b)("strong",{parentName:"p"},"We are here to help.")),Object(o.b)("h2",null,"When not to use this process"),Object(o.b)("p",null,"This process is not available for dispute requests due to lack of activity\nrelated to a specific name."),Object(o.b)("p",null,"Please also note there are cases where a party may have claim to a specific name,\nbut giving that name to the requesting party would pose a supply-chain risk\nto the npm ecosystem. In such cases, requests may be denied independent of\nthe validity of the claim."),Object(o.b)("h2",null,"Beginning the process"),Object(o.b)("h3",null,"Packages"),Object(o.b)("p",null,"To dispute a package called ",Object(o.b)("inlineCode",{parentName:"p"},"foo"),", follow these steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open a support ticket at ",Object(o.b)("a",{parentName:"li",href:"https://npmjs.com/support"},"https://npmjs.com/support"),", indicating that\nyou would like to start the process to request ownership of the ",Object(o.b)("inlineCode",{parentName:"li"},"foo"),"\npackage. Please explain the why you believe the package should be transferred.\nYou will get an automated reply from npm support to your email address."),Object(o.b)("li",{parentName:"ol"},"Support will address your request. Please note submitting a report does not\nguarantee the transfer of a package.")),Object(o.b)("h3",null,"Organizations"),Object(o.b)("p",null,"To dispute an organization name, follow these steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open a support ticket at ",Object(o.b)("a",{parentName:"li",href:"https://npmjs.com/support"},"https://npmjs.com/support"),", indicating that\nyou dispute an organization name.  Include the name of the organization,\ne.g. ",Object(o.b)("inlineCode",{parentName:"li"},"@foo"),".  Please explain the why you believe the Organizations should\nbe transferred. You will get an automated reply from npm support to your\nemail address."),Object(o.b)("li",{parentName:"ol"},"Support will address your request. Please note submitting a report does not\nguarantee the transfer of an organization.")),Object(o.b)("h3",null,"User names"),Object(o.b)("p",null,"To dispute a user name, follow these steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open a support ticket at ",Object(o.b)("a",{parentName:"li",href:"https://npmjs.com/support"},"https://npmjs.com/support"),", indicating that\nyou dispute a user name.  Include the name of the user account,\ne.g. ",Object(o.b)("inlineCode",{parentName:"li"},"@foo"),". Please explain why you believe the Username should be\ntransferred. You will get an automated reply from npm support to your\nemail address."),Object(o.b)("li",{parentName:"ol"},"Support will address your request. Please note submitting a report does not\nguarantee the transfer of a user name.")),Object(o.b)("h2",null,"Trademarks"),Object(o.b)("p",null,"npm processes Trademark claims under GitHub's ",Object(o.b)("a",{parentName:"p",href:"https://docs.github.com/site-policy/content-removal-policies/github-trademark-policy"},"Trademark Policy"),"."),Object(o.b)("p",null,"If you think another npm publisher is infringing your trademark, such\nas by using a confusingly similar package, org, or user account name, please submit a Trademark Policy Violation Report via our ",Object(o.b)("a",{parentName:"p",href:"https://support.github.com/contact/trademark-policy"},"form"),"."),Object(o.b)("p",null,"Use of npm's own trademarks is covered by our ",Object(o.b)("a",{parentName:"p",href:"/policies/logos-and-usage"},"Logo and Usage Policy"),"."),Object(o.b)("h2",null,"Changes"),Object(o.b)("p",null,"This is a living document and may be updated from time to time.\nPlease refer to the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/npm/documentation/blob/main/content/policies/disputes.mdx"},"git history for this\ndocument"),"\nto view the changes."),Object(o.b)("h2",null,"Definitions"),Object(o.b)("h3",null,"Squatting"),Object(o.b)("p",null,"It is against npm's\n",Object(o.b)("a",{parentName:"p",href:"/policies/open-source-terms#acceptable-content"},"Terms of Use"),"\nto publish a package, register a user name or an organization name\nsimply for the purposes of reserving it for future use."),Object(o.b)("p",null,"We do not pro-actively scan the registry for squatted packages, so\nthe fact that a name is in use does not mean we consider it valid.\nThe standards for what we consider squatting depend on what is being\nsquatted:"),Object(o.b)("h4",null,"Packages"),Object(o.b)("p",null,"Package names are considered squatted if the package has no genuine\nfunction."),Object(o.b)("h4",null,"Organizations"),Object(o.b)("p",null,"Organization names are considered squatted if there are no packages\npublished within a reasonable time. If an organization is a paid\norganization, it may have private packages that are invisible to\nthird parties. For privacy reasons, we cannot reveal whether or not\nan organization has private packages, so a paid organization will\nnever be considered squatted."),Object(o.b)("h4",null,"User names"),Object(o.b)("p",null,"We are extremely unlikely to transfer control of a user name, as it\nis totally valid to be an npm user and never publish any packages:\nfor instance, you might be part of an organization or need read-only\naccess to private packages."),Object(o.b)("h2",null,"License"),Object(o.b)("p",null,"Copyright (C) npm, Inc., All rights reserved"),Object(o.b)("p",null,"This document may be reused under a ",Object(o.b)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-sa/4.0/"},"Creative Commons\nAttribution-ShareAlike\nLicense"),"."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-policies-disputes-mdx-b6a46f308e6021383234.js.map