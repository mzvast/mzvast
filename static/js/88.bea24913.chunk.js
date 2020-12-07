(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{84:function(n,a,t){"use strict";t.r(a),t.d(a,"readingTime",function(){return p}),t.d(a,"default",function(){return o}),t.d(a,"tableOfContents",function(){return i}),t.d(a,"frontMatter",function(){return r});var s=t(15),e=(t(0),t(21)),p={text:"2 min read",minutes:1.25,time:75e3,words:250},c={},l="wrapper";function o(n){var a=n.components,t=Object(s.a)(n,["components"]);return Object(e.b)(l,Object.assign({},c,t,{components:a,mdxType:"MDXLayout"}),Object(e.b)("h2",{id:"\u81ea\u5b9a\u4e49\u5b57\u4f53"},"\u81ea\u5b9a\u4e49\u5b57\u4f53"),Object(e.b)("p",null,"\u901a\u5e38\u81ea\u5b9a\u4e49\u5b57\u4f53\u5728 css \u4e2d\u7528@font-face \u5b9a\u4e49\n\u52a0\u8f7d\u65b9\u5f0f\u662f\u61d2\u52a0\u8f7d\u3002\uff08\u5373\u7528\u5230\u7684\u65f6\u5019\u624d\u4f1a\u5f00\u59cb\u4e0b\u8f7d\uff09"),Object(e.b)("pre",null,Object(e.b)("code",Object.assign({parentName:"pre"},{className:"language-markup","data-language":"markup","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Web Font Sample<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>screen, print<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n    <span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>\n      <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"Bitstream Vera Serif Bold"</span><span class="token punctuation">;</span>\n      <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>"https://mdn.mozillademos.org/files/2468/VeraSeBd.ttf"<span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">body</span> <span class="token punctuation">{</span> <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"Bitstream Vera Serif Bold"</span><span class="token punctuation">,</span> serif <span class="token punctuation">}</span>\n  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n  This is Bitstream Vera Serif Bold.\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n'}}))),Object(e.b)("h2",{id:"javascript-\u63a7\u5236\u5b57\u4f53\u7684\u8f7d\u5165"},"Javascript \u63a7\u5236\u5b57\u4f53\u7684\u8f7d\u5165"),Object(e.b)("h3",{id:"font-face-observer"},"Font Face Observer"),Object(e.b)("pre",null,Object(e.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript","data-language":"javascript","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">var</span> font <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FontFaceObserver</span><span class="token punctuation">(</span><span class="token string">\'Source Han Sans\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nfont<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">\'\u4e2d\u56fd\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Source Han Sans has available\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n'}}))),Object(e.b)("h4",{id:"\u52a0\u8f7d\u6a21\u5f0f\u4e3e\u4f8b"},"\u52a0\u8f7d\u6a21\u5f0f\u4e3e\u4f8b"),Object(e.b)("p",null,Object(e.b)("a",Object.assign({parentName:"p"},{href:"https://www.bramstein.com/writing/web-font-loading-patterns.html"}),"web-font-loading-patterns")),Object(e.b)("ul",null,Object(e.b)("li",{parentName:"ul"},"Ba\xadsic font load\xading"),Object(e.b)("li",{parentName:"ul"},"Load\xading groups of fonts"),Object(e.b)("li",{parentName:"ul"},"Load\xading fonts with a time\xadout"),Object(e.b)("li",{parentName:"ul"},"Pri\xadori\xadtised load\xading"),Object(e.b)("li",{parentName:"ul"},"Cus\xadtom font dis\xadplay"),Object(e.b)("li",{parentName:"ul"},"Op\xadti\xadmise for caching")),Object(e.b)("h2",{id:"css-\u63a7\u5236\u5b57\u4f53\u7684\u8f7d\u5165"},"CSS \u63a7\u5236\u5b57\u4f53\u7684\u8f7d\u5165"),Object(e.b)("h3",{id:"font-display"},"font-display"),Object(e.b)("h4",{id:"\u65f6\u95f4\u7ebf"},"\u65f6\u95f4\u7ebf"),Object(e.b)("table",null,Object(e.b)("thead",{parentName:"table"},Object(e.b)("tr",{parentName:"thead"},Object(e.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u9636\u6bb5"),Object(e.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u4f5c\u7528"))),Object(e.b)("tbody",{parentName:"table"},Object(e.b)("tr",{parentName:"tbody"},Object(e.b)("td",Object.assign({parentName:"tr"},{align:null}),"block"),Object(e.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u5b57\u4f53\u672a\u52a0\u8f7d\uff0c\u7528\u5230\u8be5\u5b57\u4f53\u7684\u5143\u7d20\u5fc5\u987b\u5b9e\u73b0 invisible \u56de\u843d\uff0c\u5728\u6b64\u671f\u95f4\u5982\u679c\u4e0b\u8f7d\u5b8c\u6210\uff0c\u5219\u6b63\u5e38\u663e\u793a")),Object(e.b)("tr",{parentName:"tbody"},Object(e.b)("td",Object.assign({parentName:"tr"},{align:null}),"swap"),Object(e.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u5b57\u4f53\u672a\u52a0\u8f7d\uff0c\u7528\u5230\u8be5\u5b57\u4f53\u7684\u5143\u7d20\u5fc5\u987b\u6709\u4e00\u79cd\u56de\u843d\u5b57\u4f53\uff0c\u5728\u6b64\u671f\u95f4\u5982\u679c\u4e0b\u8f7d\u5b8c\u6210\uff0c\u5219\u6b63\u5e38\u663e\u793a")),Object(e.b)("tr",{parentName:"tbody"},Object(e.b)("td",Object.assign({parentName:"tr"},{align:null}),"failure"),Object(e.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u5b57\u4f53\u52a0\u8f7d\u5931\u8d25\uff0c\u8c03\u7528\u56de\u843d\u5b57\u4f53")))),Object(e.b)("h4",{id:"\u5c5e\u6027\u503c\u548c\u610f\u4e49"},"\u5c5e\u6027\u503c\u548c\u610f\u4e49"),Object(e.b)("pre",null,Object(e.b)("code",Object.assign({parentName:"pre"},{className:"language-css","data-language":"css","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token comment">/* Keyword values */</span>\n<span class="token property">font-display</span><span class="token punctuation">:</span> auto|block|swap|fallback|optional<span class="token punctuation">;</span>\n'}}))),Object(e.b)("table",null,Object(e.b)("thead",{parentName:"table"},Object(e.b)("tr",{parentName:"thead"},Object(e.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u503c"),Object(e.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u89e3\u91ca"))),Object(e.b)("tbody",{parentName:"table"},Object(e.b)("tr",{parentName:"tbody"},Object(e.b)("td",Object.assign({parentName:"tr"},{align:null}),"auto"),Object(e.b)("td",Object.assign({parentName:"tr"},{align:null}),"The font display strategy is defined by the user agent")),Object(e.b)("tr",{parentName:"tbody"},Object(e.b)("td",Object.assign({parentName:"tr"},{align:null}),"block"),Object(e.b)("td",Object.assign({parentName:"tr"},{align:null}),"Gives the font face a short block period and an infinite swap period.")),Object(e.b)("tr",{parentName:"tbody"},Object(e.b)("td",Object.assign({parentName:"tr"},{align:null}),"swap"),Object(e.b)("td",Object.assign({parentName:"tr"},{align:null}),"Gives the font face an extremely small block period and an infinite swap period.")),Object(e.b)("tr",{parentName:"tbody"},Object(e.b)("td",Object.assign({parentName:"tr"},{align:null}),"fallback"),Object(e.b)("td",Object.assign({parentName:"tr"},{align:null}),"Gives the font face an extremely small block period and a short swap period.")),Object(e.b)("tr",{parentName:"tbody"},Object(e.b)("td",Object.assign({parentName:"tr"},{align:null}),"optional"),Object(e.b)("td",Object.assign({parentName:"tr"},{align:null}),"Gives the font face an extremely small block period and no swap period.")))),Object(e.b)("h4",{id:"\u517c\u5bb9\u6027"},"\u517c\u5bb9\u6027"),Object(e.b)("p",null,"safari\uff0cchrome>60"),Object(e.b)("h3",{id:"\u6700\u4f73\u9009\u62e9"},"\u6700\u4f73\u9009\u62e9"),Object(e.b)("p",null,"font-display: swap;"),Object(e.b)("h2",{id:"refs"},"Refs"),Object(e.b)("p",null,Object(e.b)("a",Object.assign({parentName:"p"},{href:"https://fontfaceobserver.com/"}),"fontfaceobserver"),"\n",Object(e.b)("a",Object.assign({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display"}),"font-display")))}o.isMDXComponent=!0;var i=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[{id:"\u81ea\u5b9a\u4e49\u5b57\u4f53",level:2,title:"\u81ea\u5b9a\u4e49\u5b57\u4f53",children:[]},{id:"javascript-\u63a7\u5236\u5b57\u4f53\u7684\u8f7d\u5165",level:2,title:"Javascript \u63a7\u5236\u5b57\u4f53\u7684\u8f7d\u5165",children:[{id:"font-face-observer",level:3,title:"Font Face Observer",children:[]}]},{id:"css-\u63a7\u5236\u5b57\u4f53\u7684\u8f7d\u5165",level:2,title:"CSS \u63a7\u5236\u5b57\u4f53\u7684\u8f7d\u5165",children:[{id:"font-display",level:3,title:"font-display",children:[]},{id:"\u6700\u4f73\u9009\u62e9",level:3,title:"\u6700\u4f73\u9009\u62e9",children:[]}]},{id:"refs",level:2,title:"Refs",children:[]}]},r={}}}]);
//# sourceMappingURL=88.bea24913.chunk.js.map