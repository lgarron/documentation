(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),r=n("aOgs"),l=n("q1tI"),i=n.n(l),c=n("7ljp"),s=n("pD55"),m=n("8Aig"),u=n("ReZb"),p=n("GCVy"),d=n("+6vE");var b=function(e){var t=e.children;return i.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return i.a.createElement("strong",null,t)},f=n("gnlW"),y=n("mwnC"),w=n("/Rw0"),g=n("dVM4"),E=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function O(e){var t=e.items,n=e.depth;return i.a.createElement(E,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(O,{items:e.items,depth:n+1}):null)})))}O.defaultProps={depth:0};var v=O,j=n("MfeC");function k(e){var t=j.a.getPath(e.location.pathname),n=j.a.getVariantAndPage(e.root,t);if(!n)return null;var a=j.a.getVariantsForPage(e.root,n.page),r=[],l=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(l=e),r.push(i.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(o.i,{overlay:e.overlay},i.a.createElement(o.i.Button,null,l.variant.title),i.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},r)))}k.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=k,_=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),N=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),C=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),H=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,l=n.frontmatter,E=l.title,O=l.description,k=l.status,P=l.source,z=l.additionalContributors,B=void 0===z?[]:z,G=j.a.getVariantRoot(a.pathname);return i.a.createElement(c.a,{components:{Index:u.a,Note:p.a,Prompt:b,PromptReply:h,Screenshot:f.a}},i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(s.a,{title:E,description:O}),i.a.createElement(m.b,{location:a,isSearchEnabled:n.isSearchEnabled}),i.a.createElement(_,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(y.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),i.a.createElement(N,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(C,null,i.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(o.e,null,i.a.createElement(o.e,null,i.a.createElement(o.m,{as:"h1"},E),O))),null!=G?i.a.createElement(I,null,i.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:G,location:a})):null),n.tableOfContents.items?i.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},i.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(v,{items:n.tableOfContents.items})):null,i.a.createElement(H,null,k||P?i.a.createElement(o.k,{mb:3,alignItems:"center"},k?i.a.createElement(g.a,{status:k}):null,i.a.createElement(o.e,{mx:"auto"}),P?i.a.createElement(w.a,{href:P}):null):null,n.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(o.r,{icon:r.b,mr:2}):i.a.createElement(o.r,{icon:r.c,mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(d.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(B.map((function(e){return{login:e}})))}))))))}},g7qY:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),r=n("O6H6"),l={},i={_frontmatter:l},c=r.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(c,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Secure your npm account with a strong and unique password using a password manager."),Object(o.b)("p",null,"You must choose or generate a password for your npm account that:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"is longer than 10 characters"),Object(o.b)("li",{parentName:"ul"},"does not match or significantly contain your username, e.g. do not use 'username123'"),Object(o.b)("li",{parentName:"ul"},"is not a ",Object(o.b)("a",{parentName:"li",href:"https://www.npmjs.com/signup/common-passwords"},"commonly used password")),Object(o.b)("li",{parentName:"ul"},"has not been compromised and known to the ",Object(o.b)("a",{parentName:"li",href:"https://haveibeenpwned.com/"},"Have I Been Pwned")," breach database")),Object(o.b)("p",null,"To keep your account secure, we recommend you follow these best practices:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Use a password manager, such as ",Object(o.b)("a",{parentName:"li",href:"https://lastpass.com/"},"LastPass")," or ",Object(o.b)("a",{parentName:"li",href:"https://1password.com/"},"1Password"),", to generate a password more than 16 characters."),Object(o.b)("li",{parentName:"ul"},"Generate a unique password for npm. If you use your npm password elsewhere and that service is compromised, then attackers or other malicious actors could use that information to access your npm account."),Object(o.b)("li",{parentName:"ul"},'Configure two-factor authentication for your account. For more information, see "About two-factor authentication."'),Object(o.b)("li",{parentName:"ul"},'Never share your password, even with a potential collaborator. Each person should use their own personal account on npm. For more information on ways to collaborate, see: "',Object(o.b)("a",{parentName:"li",href:"/organizations"},"npm organizations"),'".')),Object(o.b)("p",null,"When you type a password to sign in, create an account, or change your password, npm will check if the password you entered is considered weak according to datasets like HaveIBeenPwned. The password may be identified as weak even if you have never used that password before."),Object(o.b)("p",null,"npm only inspects the password at the time you type it, and never stores the password you entered in plaintext. For more information, see ",Object(o.b)("a",{parentName:"p",href:"https://haveibeenpwned.com/"},"HaveIBeenPwned"),"."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-getting-started-setting-up-your-npm-user-account-creating-a-strong-password-mdx-87ce8090bb4318ade1cf.js.map