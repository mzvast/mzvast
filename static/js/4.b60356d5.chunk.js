(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{59:function(e,t,n){"use strict";n.r(t),n.d(t,"readingTime",function(){return b}),n.d(t,"default",function(){return m}),n.d(t,"tableOfContents",function(){return h}),n.d(t,"frontMatter",function(){return g});var a=n(15),s=(n(0),n(21)),o=n(60),c=n.n(o),i=n(61),p=n.n(i),r=n(62),l=n.n(r),b={text:"2 min read",minutes:1.895,time:113700,words:379},d={},u="wrapper";function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)(u,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("div",{className:l.a.Welcome},Object(s.b)("div",{className:l.a.logo},Object(s.b)("img",{src:c.a,className:l.a["logo-navi"],alt:"logo"}),Object(s.b)("img",{src:p.a,className:l.a["logo-react"],alt:"logo"})),Object(s.b)("h2",{id:"how-to"},"How to\u2026"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"To update this post,")," edit ",Object(s.b)("inlineCode",{parentName:"p"},"src/pages/posts/2019-01-05-welcome/document.mdx")," and save to reload."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"To update the site\u2019s title,")," edit the metadata in ",Object(s.b)("inlineCode",{parentName:"p"},"src/siteMetadata.js"),"."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"To your bio and photo,")," edit the Bio component in ",Object(s.b)("inlineCode",{parentName:"p"},"src/components/Bio.js"),"."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"To change the site\u2019s colors,")," edit the ",Object(s.b)("inlineCode",{parentName:"p"},":root")," block in ",Object(s.b)("inlineCode",{parentName:"p"},"src/index.module.css"),"."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"To create a new post,")," add a new directory to ",Object(s.b)("inlineCode",{parentName:"p"},"src/pages/posts")," that is prefixed with the new post\u2019s publication date, then create a ",Object(s.b)("inlineCode",{parentName:"p"},"post.js")," file inside it:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  title<span class="token punctuation">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Learn How To Build This Blog From Scratch</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n  tags<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'react\'</span><span class="token punctuation">,</span> <span class="token string">\'navi\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  spoiler<span class="token punctuation">:</span> <span class="token string">"An online course with loads of live demos and exercises."</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">getContent</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'./document.mdx\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n'}}))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"To set the maximum number of posts on an index page,"),", set the ",Object(s.b)("inlineCode",{parentName:"p"},"indexPageSize")," property of the object exported by ",Object(s.b)("inlineCode",{parentName:"p"},"src/siteMetadata.js"),"."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"To modify the generated HTML,")," update the ",Object(s.b)("inlineCode",{parentName:"p"},"src/renderPageToString.js")," file."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"To add non-blog pages,")," just use ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://frontarm.com/navi/reference/declarations/#createpage"}),Object(s.b)("inlineCode",{parentName:"a"},"Navi.createPage()")),", ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://frontarm.com/navi/reference/declarations/#createswitch"}),Object(s.b)("inlineCode",{parentName:"a"},"Navi.createSwitch()"))," and ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://frontarm.com/navi/reference/declarations/#createredirect"}),Object(s.b)("inlineCode",{parentName:"a"},"Navi.createRedirect()")),". For an example, check the about page at ",Object(s.b)("inlineCode",{parentName:"p"},"src/pages/about/index.js"),". If you create a page, remember to add it to the root switch at ",Object(s.b)("inlineCode",{parentName:"p"},"src/pages/index.js"),"."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"To brush up on React\u2019s fundamentals,")," check out the ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://frontarm.com/courses/learn-raw-react/"}),"React (without the buzzwords)")," and ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://frontarm.com/courses/async-javascript/"}),"Asynchronous JavaScript")," courses."),Object(s.b)("h2",{id:"the-lowdown"},"The lowdown"),Object(s.b)("p",null,"This template is designed with a JAMstack architecture. This means that the blog is statically rendered for the fastest possible load time, but once loaded, it turns into a single page app\u200a\u2014\u200aensuring navigation is silky smooth."),Object(s.b)("p",null,"It follows a convention-over-configuation philosophy. It should work out of the box with minimal effort for most people\u2019s needs, but can also be configured where required."),Object(s.b)("p",null,"Finally, an effort has been made to prefer explicit code over concise code, and simplicity over complexity. Magic is avoided wherever possible, even if this means more code is required for the desired result."),Object(s.b)("h2",{id:"the-tools"},"The tools"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://reactjs.org"}),"React")," renders the UI"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://mdxjs.com"}),"MDX")," converts markdown into React components"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://frontarm.com/navi/"}),"Navi")," handles routing and creates static HTML files for each route"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://reactjs.org/docs/create-a-new-react-app.html"}),"create-react-app")," builds the app\u2019s assets and provides the dev server"))))}m.isMDXComponent=!0;var h=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[{id:"how-to",level:2,title:"How to\u2026",children:[]},{id:"the-lowdown",level:2,title:"The lowdown",children:[]},{id:"the-tools",level:2,title:"The tools",children:[]}]},g={}},60:function(e,t,n){e.exports=n.p+"static/media/navi-logo.0f2f9d7f.svg"},61:function(e,t,n){e.exports=n.p+"static/media/react-logo.5d5d9eef.svg"},62:function(e,t,n){e.exports={logo:"document_logo__clVwj","logo-navi":"document_logo-navi__3KPfj","logo-react":"document_logo-react__2TChU","Index-logo-navi-spin":"document_Index-logo-navi-spin__2ZC8T","Index-logo-react-spin":"document_Index-logo-react-spin__1KOvv"}}}]);
//# sourceMappingURL=4.b60356d5.chunk.js.map