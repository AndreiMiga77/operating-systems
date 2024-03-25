"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[1693],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),y=c(r),m=a,f=y["".concat(o,".").concat(m)]||y[m]||u[m]||l;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[y]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3937:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(8168),a=(r(6540),r(5680));const l={},i="Libcall with Syscall",s={unversionedId:"Software Stack/Lab 1 - Operating System Perspective/System Calls/Drills/Questions/libcall-syscall",id:"Software Stack/Lab 1 - Operating System Perspective/System Calls/Drills/Questions/libcall-syscall",title:"Libcall with Syscall",description:"Question Text",source:"@site/docs/Software Stack/Lab 1 - Operating System Perspective/System Calls/Drills/Questions/libcall-syscall.md",sourceDirName:"Software Stack/Lab 1 - Operating System Perspective/System Calls/Drills/Questions",slug:"/Software Stack/Lab 1 - Operating System Perspective/System Calls/Drills/Questions/libcall-syscall",permalink:"/operating-systems/72/Software Stack/Lab 1 - Operating System Perspective/System Calls/Drills/Questions/libcall-syscall",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Questions",permalink:"/operating-systems/72/Software Stack/Lab 1 - Operating System Perspective/System Calls/Drills/Questions/"},next:{title:"Syscall Wrappers",permalink:"/operating-systems/72/Software Stack/Lab 1 - Operating System Perspective/System Calls/Drills/Questions/syscall-wrapper"}},o={},c=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:c},y="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(y,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"libcall-with-syscall"},"Libcall with Syscall"),(0,a.yg)("h2",{id:"question-text"},"Question Text"),(0,a.yg)("p",null,"Which of the following library calls will for sure invoke a system call?"),(0,a.yg)("h2",{id:"question-answers"},"Question Answers"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"fopen()"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"fwrite()"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"printf()"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"strcpy()")))),(0,a.yg)("h2",{id:"feedback"},"Feedback"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"fopen()")," requires opening a file and access to the operating system (for filesystem access).\nThe others may not require a system call (",(0,a.yg)("inlineCode",{parentName:"p"},"strcpy()"),") or may use buffering to delay the invocation of a system call (",(0,a.yg)("inlineCode",{parentName:"p"},"fwrite()"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"printf()"),")."))}u.isMDXComponent=!0}}]);