(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),l=n("aOgs"),r=n("q1tI"),i=n.n(r),m=n("7ljp"),c=n("pD55"),p=n("8Aig"),b=n("ReZb"),s=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return i.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return i.a.createElement("strong",null,t)},g=n("gnlW"),O=n("mwnC"),j=n("/Rw0"),f=n("dVM4"),N=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function y(e){var t=e.items,n=e.depth;return i.a.createElement(N,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(y,{items:e.items,depth:n+1}):null)})))}y.defaultProps={depth:0};var w=y,C=n("MfeC");function E(e){var t=C.a.getPath(e.location.pathname),n=C.a.getVariantAndPage(e.root,t);if(!n)return null;var a=C.a.getVariantsForPage(e.root,n.page),l=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),l.push(i.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(o.i,{overlay:e.overlay},i.a.createElement(o.i.Button,null,r.variant.title),i.a.createElement(E.Menu,{direction:e.direction,width:e.menuWidth},l)))}E.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var v=E,x=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),k=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),z=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,N=r.title,y=r.description,E=r.status,T=r.source,D=r.additionalContributors,H=void 0===D?[]:D,A=C.a.getVariantRoot(a.pathname);return i.a.createElement(m.a,{components:{Index:b.a,Note:s.a,Prompt:d,PromptReply:h,Screenshot:g.a}},i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(c.a,{title:N,description:y}),i.a.createElement(p.b,{location:a,isSearchEnabled:n.isSearchEnabled}),i.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(O.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),i.a.createElement(k,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(_,null,i.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(o.e,null,i.a.createElement(o.e,null,i.a.createElement(o.m,{as:"h1"},N),y))),null!=A?i.a.createElement(I,null,i.a.createElement(v,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:A,location:a})):null),n.tableOfContents.items?i.a.createElement(z,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},i.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(w,{items:n.tableOfContents.items})):null,i.a.createElement(S,null,E||T?i.a.createElement(o.k,{mb:3,alignItems:"center"},E?i.a.createElement(f.a,{status:E}):null,i.a.createElement(o.e,{mx:"auto"}),T?i.a.createElement(j.a,{href:T}):null):null,n.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(o.r,{icon:l.b,mr:2}):i.a.createElement(o.r,{icon:l.c,mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(H.map((function(e){return{login:e}})))}))))))}},tlnp:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),l=n("O6H6"),r={},i={_frontmatter:r},m=l.a;function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(m,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",null,"Synopsis"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm team create <scope:team> [--otp <otpcode>]\nnpm team destroy <scope:team> [--otp <otpcode>]\nnpm team add <scope:team> <user> [--otp <otpcode>]\nnpm team rm <scope:team> <user> [--otp <otpcode>]\nnpm team ls <scope>|<scope:team>\n")),Object(o.b)("p",null,"Note: This command is unaware of workspaces."),Object(o.b)("h3",null,"Description"),Object(o.b)("p",null,"Used to manage teams in organizations, and change team memberships. Does not\nhandle permissions for packages."),Object(o.b)("p",null,"Teams must always be fully qualified with the organization/scope they belong to\nwhen operating on them, separated by a colon (",Object(o.b)("inlineCode",{parentName:"p"},":"),"). That is, if you have a\n",Object(o.b)("inlineCode",{parentName:"p"},"newteam")," team in an ",Object(o.b)("inlineCode",{parentName:"p"},"org")," organization, you must always refer to that team\nas ",Object(o.b)("inlineCode",{parentName:"p"},"@org:newteam")," in these commands."),Object(o.b)("p",null,"If you have two-factor authentication enabled in ",Object(o.b)("inlineCode",{parentName:"p"},"auth-and-writes")," mode, then\nyou can provide a code from your authenticator with ",Object(o.b)("inlineCode",{parentName:"p"},"[--otp <otpcode>]"),".\nIf you don't include this then you will be prompted."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"create / destroy:\nCreate a new team, or destroy an existing one. Note: You cannot remove the\n",Object(o.b)("inlineCode",{parentName:"p"},"developers")," team, ",Object(o.b)("a",{href:"https://docs.npmjs.com/about-developers-team",target:"_blank"},"learn more.")),Object(o.b)("p",{parentName:"li"},"Here's how to create a new team ",Object(o.b)("inlineCode",{parentName:"p"},"newteam")," under the ",Object(o.b)("inlineCode",{parentName:"p"},"org")," org:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm team create @org:newteam\n")),Object(o.b)("p",{parentName:"li"},"You should see a confirming message such as: ",Object(o.b)("inlineCode",{parentName:"p"},"+@org:newteam")," once the new\nteam has been created.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"add:\nAdd a user to an existing team."),Object(o.b)("p",{parentName:"li"},"Adding a new user ",Object(o.b)("inlineCode",{parentName:"p"},"username")," to a team named ",Object(o.b)("inlineCode",{parentName:"p"},"newteam")," under the ",Object(o.b)("inlineCode",{parentName:"p"},"org")," org:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm team add @org:newteam username\n")),Object(o.b)("p",{parentName:"li"},"On success, you should see a message: ",Object(o.b)("inlineCode",{parentName:"p"},"username added to @org:newteam"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"rm:\nUsing ",Object(o.b)("inlineCode",{parentName:"p"},"npm team rm")," you can also remove users from a team they belong to."),Object(o.b)("p",{parentName:"li"},"Here's an example removing user ",Object(o.b)("inlineCode",{parentName:"p"},"username")," from ",Object(o.b)("inlineCode",{parentName:"p"},"newteam")," team\nin ",Object(o.b)("inlineCode",{parentName:"p"},"org")," organization:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm team rm @org:newteam username\n")),Object(o.b)("p",{parentName:"li"},"Once the user is removed a confirmation message is displayed:\n",Object(o.b)("inlineCode",{parentName:"p"},"username removed from @org:newteam"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"ls:\nIf performed on an organization name, will return a list of existing teams\nunder that organization. If performed on a team, it will instead return a list\nof all users belonging to that particular team."),Object(o.b)("p",{parentName:"li"},"Here's an example of how to list all teams from an org named ",Object(o.b)("inlineCode",{parentName:"p"},"org"),":"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm team ls @org\n")),Object(o.b)("p",{parentName:"li"},"Example listing all members of a team named ",Object(o.b)("inlineCode",{parentName:"p"},"newteam"),":"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm team ls @org:newteam\n")))),Object(o.b)("h3",null,"Details"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"npm team")," always operates directly on the current registry, configurable from\nthe command line using ",Object(o.b)("inlineCode",{parentName:"p"},"--registry=<registry url>"),"."),Object(o.b)("p",null,"You must be a ",Object(o.b)("em",{parentName:"p"},"team admin")," to create teams and manage team membership, under\nthe given organization. Listing teams and team memberships may be done by\nany member of the organization."),Object(o.b)("p",null,"Organization creation and management of team admins and ",Object(o.b)("em",{parentName:"p"},"organization")," members\nis done through the website, not the npm CLI."),Object(o.b)("p",null,"To use teams to manage permissions on packages belonging to your organization,\nuse the ",Object(o.b)("inlineCode",{parentName:"p"},"npm access")," command to grant or revoke the appropriate permissions."),Object(o.b)("h3",null,"Configuration"),Object(o.b)("h4",null,Object(o.b)("inlineCode",{parentName:"h4"},"registry")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Default: "',Object(o.b)("a",{parentName:"li",href:"https://registry.npmjs.org/%22"},'https://registry.npmjs.org/"')),Object(o.b)("li",{parentName:"ul"},"Type: URL")),Object(o.b)("p",null,"The base URL of the npm registry."),Object(o.b)("h4",null,Object(o.b)("inlineCode",{parentName:"h4"},"otp")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Default: null"),Object(o.b)("li",{parentName:"ul"},"Type: null or String")),Object(o.b)("p",null,"This is a one-time password from a two-factor authenticator. It's needed\nwhen publishing or changing package permissions with ",Object(o.b)("inlineCode",{parentName:"p"},"npm access"),"."),Object(o.b)("p",null,"If not set, and a registry response fails with a challenge for a one-time\npassword, npm will prompt on the command line for one."),Object(o.b)("h4",null,Object(o.b)("inlineCode",{parentName:"h4"},"parseable")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Default: false"),Object(o.b)("li",{parentName:"ul"},"Type: Boolean")),Object(o.b)("p",null,"Output parseable results from commands that write to standard output. For\n",Object(o.b)("inlineCode",{parentName:"p"},"npm search"),", this will be tab-separated table format."),Object(o.b)("h4",null,Object(o.b)("inlineCode",{parentName:"h4"},"json")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Default: false"),Object(o.b)("li",{parentName:"ul"},"Type: Boolean")),Object(o.b)("p",null,"Whether or not to output JSON data, rather than the normal output."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In ",Object(o.b)("inlineCode",{parentName:"li"},"npm pkg set")," it enables parsing set values with JSON.parse() before\nsaving them to your ",Object(o.b)("inlineCode",{parentName:"li"},"package.json"),".")),Object(o.b)("p",null,"Not supported by all npm commands."),Object(o.b)("h3",null,"See Also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-access"},"npm access")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-config"},"npm config")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/cli/v8/using-npm/registry"},"npm registry"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-8-commands-npm-team-md-8e5917ffde2433cb2c06.js.map