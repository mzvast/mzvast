(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{78:function(n,e,t){"use strict";t.r(e),t.d(e,"readingTime",function(){return s}),t.d(e,"default",function(){return b}),t.d(e,"tableOfContents",function(){return d}),t.d(e,"frontMatter",function(){return r});var i=t(15),o=(t(0),t(21)),s={text:"1 min read",minutes:.145,time:8700,words:29},l={},w="wrapper";function b(n){var e=n.components,t=Object(i.a)(n,["components"]);return Object(o.b)(w,Object.assign({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u672c\u6587\u65e7\u7248\u672c\u5df2\u53d1\u8868\u5728",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://www.zhihu.com/question/41967910/answer/134773244"}),"\u77e5\u4e4e")),Object(o.b)("h2",{id:"bash-on-windows-\u5b58\u5728\u7684\u95ee\u9898"},"bash on windows \u5b58\u5728\u7684\u95ee\u9898"),Object(o.b)("h3",{id:"1windows\u4e0b\u7684ide\u65e0\u6cd5\u6574\u5408wsl"},"1.windows\u4e0b\u7684IDE\u65e0\u6cd5\u6574\u5408WSL"),Object(o.b)("p",null,"\u6211\u89c9\u5f97\u4f5c\u4e3a\u5f00\u53d1\u73af\u5883\u5f88\u91cd\u8981\u7684\u4e00\u70b9\u5c31\u662fwin\u4e0b\u7684IDE\u4eec\u4e0d\u80fd\u201c\u65b9\u4fbf\u201d\u5730\u76f4\u63a5\u8c03\u7528WSL\u4e0b\u7684\u7a0b\u5e8f\uff0c\u6bd4\u5982\u5728vscode\u4e0b\u9762\u4e0d\u80fd\u8c03\u7528WSL\u91cc\u7684git\uff0c\u800c\u975e\u5f97\u88c5\u4e2agit-bash\u3002\u66f4\u522b\u8bf4IDE\u91cc\u76f4\u63a5\u8c03\u7528WSL\u91cc\u9762\u7684python\uff0cnode\uff0cgo\u4e86\u3002\n\u6839\u636e\u5fae\u8f6f",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://blogs.msdn.microsoft.com/commandline/"}),"\u6700\u65b0build\u4e2d"),"\u63d0\u51fa\u7684\u4e92\u64cd\u4f5c\uff0c\u91cd\u70b9\u4f3c\u4e4e\u5728WSL\u4fa7\u8c03\u7528windows\u7a0b\u5e8f\uff0c\u4ed6\u4eec\u5df2\u7ecf\u628awin\u4e0b\u7684path\u90fdappend\u5230WSL\u7684path\u4e86\uff0c\u4f46\u5728windows\u4fa7\u5219\u4e0d\u53ef\u89c1WSL\u7684path\uff0c\u53ea\u80fd\u901a\u8fc7\u8e69\u811a\u7684bash -c \u53bb\u8c03\u7528\u3002"),Object(o.b)("p",null,"\u5728\u5fae\u8f6f\u81ea\u5df1\u90fd\u6ca1\u6709\u641e\u6e05\u695a\u4e24\u8005\u4e92\u64cd\u4f5c\u5173\u7cfb\u7684\u524d\u63d0\u4e0b\uff0c\u5c31\u4f1a\u6709\u5404\u79cd\u7c7b\u4f3c\u4e8e\u8fd9\u6837\u7684\u95ee\u9898\uff1a\u7528xxx-for-win\u8fd8\u662f\u7528xxx-on-WSL\uff1f\n\u82e5\u53ea\u5728WSL\u4fa7\u88c5\u5de5\u5177\u94fe\uff0cwindows\u4fa7\u7684IDE\u5c31\u662f\u6b8b\u5e9f\u6210\u53ea\u80fd\u505a\u7f16\u8f91\u5668\u4e86\uff0c\u4f60\u7528\u7684win\u4e0b\u7684\u5de5\u5177\u94fe\u600e\u4e48\u6d4blinux\u4e0b\u7684bug\uff0c\u600e\u4e48\u52a0\u65ad\u70b9\u8c03\u8bd5\uff1f"),Object(o.b)("h3",{id:"2wsl\u9609\u5272gui\u786c\u4f24\u5bfc\u81f4\u4e0d\u5177\u5907\u9ad8\u6548\u7684\u5f00\u53d1\u73af\u5883"},"2.WSL\u9609\u5272GUI\u786c\u4f24\u5bfc\u81f4\u4e0d\u5177\u5907\u9ad8\u6548\u7684\u5f00\u53d1\u73af\u5883"),Object(o.b)("p",null,"\u4e0d\u4ec5\u4e92\u64cd\u4f5c\u4e0d\u884c\uff0c\u5728WSL\u91cc\u9762\u5f00\u53d1\u4f53\u9a8c\u4e5f\u662f\u5f88\u7cdf\u7cd5\u7684\u3002\n\u4e4b\u524d\u76db\u4f20\u7684\u5728windows\u4e0b\u7528xserver\u8fd0\u884cUbuntu\u684c\u9762\u7a0b\u5e8f\u7684\u89c6\u9891\u4e5f\u662f\u53cd\u6620\u4e86\u5f00\u53d1\u8005\u5bf9\u7f3a\u4e4fGUI\u652f\u6301\u7684\u8bc9\u6c42\u3002"),Object(o.b)("h3",{id:"3wsl\u5b9a\u4f4d\u7a76\u7adf\u662f\u5f00\u53d1\u73af\u5883or\u751f\u4ea7\u73af\u5883\uff1f"},"3.WSL\u5b9a\u4f4d\u7a76\u7adf\u662f\u5f00\u53d1\u73af\u5883or\u751f\u4ea7\u73af\u5883\uff1f"),Object(o.b)("p",null,"\u751a\u81f3\u6211\u89c9\u5f97\u5fae\u8f6f\u7684\u8868\u8ff0\u662f\u81ea\u76f8\u77db\u76fe\u7684\uff0c\u4ed6\u8bf4WSL\u662f\u9762\u5411\u5f00\u53d1\uff0c\u4f46\u65e0\u8bba\u600e\u4e48\u770b\u6ca1\u6709GUI\u7684Ubuntu\u66f4\u50cf\u662f\u4e00\u4e2a\u90e8\u7f72\u73af\u5883\uff0c\u800c\u4e0d\u662f\u5f00\u53d1\u73af\u5883\uff0c\u6ca1\u6709IDE\u7684\u652f\u6301\u600e\u4e48\u8c03\u8bd5\u600e\u4e48\u5f00\u53d1\u5462\uff1f\u800c\u4e14\u6309\u7167\u73b0\u5728\u7684\u5b8c\u6210\u5ea6\uff0c\u53ea\u662f\u4e2a\u73a9\u5177\u3002"),Object(o.b)("h3",{id:"4\u5173\u4e8ewsl\u672a\u6765\u7684\u51e0\u70b9\u60f3\u6cd5"},"4.\u5173\u4e8eWSL\u672a\u6765\u7684\u51e0\u70b9\u60f3\u6cd5"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5fae\u8f6f\u7edd\u5bf9\u4e0d\u4f1a\u653e\u5f03windows\u4e0b\u5de5\u5177\u94fe\u7684\u652f\u6301"),Object(o.b)("li",{parentName:"ul"},"WSL\u77ed\u671f\u5185\u4e0d\u80fd\u53d6\u4ee3windows\u4e0b\u5de5\u5177\u94fe\uff0c\u81f3\u5c11\u4eceIDE\u652f\u6301\u5ea6\u4e0a\u5dee\u8ddd\u5f88\u5927"),Object(o.b)("li",{parentName:"ul"},"\u5fae\u8f6f\u7684\u76ee\u524d\u7684\u6240\u6709\u52a8\u4f5c\u770b\u8d77\u6765\u90fd\u4f3c\u4e4e\u8868\u660eWSL\u7684\u771f\u5b9e\u76ee\u7684\u662f\u8ba9linux\u5f00\u53d1\u8005\u7528dotnet\u548cSQLserver\uff0c\u4e5f\u5c31\u662f\u628alinux\u7684\u5f00\u53d1\u8005\u62c9\u8fc7\u53bb\uff0c\u800c\u4e0d\u662f\u628awindows\u7684\u5f00\u53d1\u8005\u63a8\u51fa\u53bb\u3002")))}b.isMDXComponent=!0;var d=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[{id:"bash-on-windows-\u5b58\u5728\u7684\u95ee\u9898",level:2,title:"bash on windows \u5b58\u5728\u7684\u95ee\u9898",children:[{id:"1windows\u4e0b\u7684ide\u65e0\u6cd5\u6574\u5408wsl",level:3,title:"1.windows\u4e0b\u7684IDE\u65e0\u6cd5\u6574\u5408WSL",children:[]},{id:"2wsl\u9609\u5272gui\u786c\u4f24\u5bfc\u81f4\u4e0d\u5177\u5907\u9ad8\u6548\u7684\u5f00\u53d1\u73af\u5883",level:3,title:"2.WSL\u9609\u5272GUI\u786c\u4f24\u5bfc\u81f4\u4e0d\u5177\u5907\u9ad8\u6548\u7684\u5f00\u53d1\u73af\u5883",children:[]},{id:"3wsl\u5b9a\u4f4d\u7a76\u7adf\u662f\u5f00\u53d1\u73af\u5883or\u751f\u4ea7\u73af\u5883\uff1f",level:3,title:"3.WSL\u5b9a\u4f4d\u7a76\u7adf\u662f\u5f00\u53d1\u73af\u5883or\u751f\u4ea7\u73af\u5883\uff1f",children:[]},{id:"4\u5173\u4e8ewsl\u672a\u6765\u7684\u51e0\u70b9\u60f3\u6cd5",level:3,title:"4.\u5173\u4e8eWSL\u672a\u6765\u7684\u51e0\u70b9\u60f3\u6cd5",children:[]}]}]},r={}}}]);
//# sourceMappingURL=82.6cef4f52.chunk.js.map