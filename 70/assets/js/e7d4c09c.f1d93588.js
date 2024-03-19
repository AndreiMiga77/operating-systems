"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[9278],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=n,d=m["".concat(c,".").concat(f)]||m[f]||y[f]||s;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9813:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=r(8168),n=(r(6540),r(5680));const s={},o="Modern Software Stacks",i={unversionedId:"Software Stack/Lab 1 - Operating System Perspective/Modern Software Stacks/modern-sw-stack",id:"Software Stack/Lab 1 - Operating System Perspective/Modern Software Stacks/modern-sw-stack",title:"Modern Software Stacks",description:"Most modern computing systems use a software stack such as the one in the figure below:",source:"@site/docs/Software Stack/Lab 1 - Operating System Perspective/Modern Software Stacks/modern-sw-stack.md",sourceDirName:"Software Stack/Lab 1 - Operating System Perspective/Modern Software Stacks",slug:"/Software Stack/Lab 1 - Operating System Perspective/Modern Software Stacks/modern-sw-stack",permalink:"/operating-systems/70/Software Stack/Lab 1 - Operating System Perspective/Modern Software Stacks/modern-sw-stack",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Modern Software Stacks",permalink:"/operating-systems/70/Software Stack/Lab 1 - Operating System Perspective/Modern Software Stacks/"},next:{title:"System Calls",permalink:"/operating-systems/70/Software Stack/Lab 1 - Operating System Perspective/System Calls/"}},c={},l=[],p={toc:l},m="wrapper";function y(e){let{components:t,...s}=e;return(0,n.yg)(m,(0,a.A)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"modern-software-stacks"},"Modern Software Stacks"),(0,n.yg)("p",null,"Most modern computing systems use a software stack such as the one in the figure below:"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Modern Software Stack",src:r(229).A})),(0,n.yg)("p",null,"This modern software stack allows fast development and provides a rich set of applications to the user."),(0,n.yg)("p",null,"The basic software component is the ",(0,n.yg)("strong",{parentName:"p"},"operating system*- (OS) (technically the operating system "),"kernel",(0,n.yg)("strong",{parentName:"p"},").\nThe OS provides the fundamental primitives to interact with hardware (read and write data) and to manage the running of applications (such as memory allocation, thread creation, scheduling).\nThese primitives form the "),"system call API*- or ",(0,n.yg)("strong",{parentName:"p"},"system API"),".\nAn item in the system call API, i.e. the equivalent of a function call that triggers the execution of a functionality in the operating system, is a ",(0,n.yg)("strong",{parentName:"p"},"system call"),"."),(0,n.yg)("p",null,"The system call API is well-defined, stable and complete: it exposes the entire functionality of the operating system and hardware.\nHowever, it is also minimalistic with respect to features, and it provides a low-level (close to hardware) specification, making it cumbersome to use and ",(0,n.yg)("strong",{parentName:"p"},"not portable"),"."),(0,n.yg)("p",null,"Due to the downsides of the system call API, a basic library, the ",(0,n.yg)("strong",{parentName:"p"},"standard C library*- (also called "),"libc",(0,n.yg)("strong",{parentName:"p"},"), is built on top of it.\nBecause the system call API uses an OS-specific calling convention, the standard C library typically wraps each system call into an equivalent function call, following a portable calling convention.\nMore than these wrappers, the standard C library provides its own API that is typically portable.\nPart of the API exposed by the standard C library is the "),"standard C API",(0,n.yg)("strong",{parentName:"p"},", also called "),"ANSI C*- or ",(0,n.yg)("strong",{parentName:"p"},"ISO C"),";\nthis API is typically portable across all platforms (operating systems and hardware).\nThis API, going beyond system call wrappers, has several advantages:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"portability: irrespective of the underlying operating system (and system call API), the API is the same"),(0,n.yg)("li",{parentName:"ul"},"extensive features: string management, I/O formatting"),(0,n.yg)("li",{parentName:"ul"},"possibility of increased efficiency with techniques such as buffering, as we show later")))}y.isMDXComponent=!0},229:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/modern-sw-stack-4a2427d07a59c3a6599305b8eedc43dd.svg"}}]);