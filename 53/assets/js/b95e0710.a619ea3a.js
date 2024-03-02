"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[22],{5680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>y});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(n),g=a,y=c["".concat(l,".").concat(g)]||c[g]||s[g]||o;return n?r.createElement(y,p(p({ref:t},m),{},{components:n})):r.createElement(y,p({ref:t},m))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,p[1]=i;for(var u=2;u<o;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(8168),a=(n(6540),n(5680));const o={},p="Copy-on-write Flag for `mmap()`",i={unversionedId:"Lab/Compute/quiz/mmap-cow-flag",id:"Lab/Compute/quiz/mmap-cow-flag",title:"Copy-on-write Flag for `mmap()`",description:"Question Text",source:"@site/docs/Lab/Compute/quiz/mmap-cow-flag.md",sourceDirName:"Lab/Compute/quiz",slug:"/Lab/Compute/quiz/mmap-cow-flag",permalink:"/operating-systems/53/Lab/Compute/quiz/mmap-cow-flag",draft:!1,tags:[],version:"current",frontMatter:{}},l={},u=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],m={toc:u},c="wrapper";function s(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"copy-on-write-flag-for-mmap"},"Copy-on-write Flag for ",(0,a.yg)("inlineCode",{parentName:"h1"},"mmap()")),(0,a.yg)("h2",{id:"question-text"},"Question Text"),(0,a.yg)("p",null,"From the description in its ",(0,a.yg)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/mmap.2.html"},"man page"),", what flag should we pass to ",(0,a.yg)("inlineCode",{parentName:"p"},"mmap()")," in order to mark the mapped pages as copy-on-write?"),(0,a.yg)("h2",{id:"question-answers"},"Question Answers"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"MAP_SHARED"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"MAP_PRIVATE"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"MAP_ANONYMOUS"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"MAP_POPULATE")))),(0,a.yg)("h2",{id:"feedback"},"Feedback"),(0,a.yg)("p",null,"Quoting the ",(0,a.yg)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/mmap.2.html"},"man page"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"MAP_PRIVATE\n              Create a private copy-on-write mapping.\n")))}s.isMDXComponent=!0}}]);