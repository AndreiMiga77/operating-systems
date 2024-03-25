"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[3972],{5680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>d});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),y=o,d=p["".concat(s,".").concat(y)]||p[y]||f[y]||a;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},2135:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(8168),o=(t(6540),t(5680));const a={},i="I/O Errors",l={unversionedId:"Lab/IO/quiz/local-io-errors",id:"Lab/IO/quiz/local-io-errors",title:"I/O Errors",description:"Question Text",source:"@site/docs/Lab/IO/quiz/local-io-errors.md",sourceDirName:"Lab/IO/quiz",slug:"/Lab/IO/quiz/local-io-errors",permalink:"/operating-systems/72/Lab/IO/quiz/local-io-errors",draft:!1,tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],u={toc:c},p="wrapper";function f(e){let{components:r,...t}=e;return(0,o.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"io-errors"},"I/O Errors"),(0,o.yg)("h2",{id:"question-text"},"Question Text"),(0,o.yg)("p",null,"Which of the following types of errors are ",(0,o.yg)("strong",{parentName:"p"},"unlikely")," to occur during an I/O operation?"),(0,o.yg)("h2",{id:"question-answers"},"Question Answers"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"The current user does not have sufficient permisions to access a given file")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"There is not enough space left on the disk"))),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The file offset has reached the end of the file when reading")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Some data blocks in the filesystem are corrupted")),(0,o.yg)("h2",{id:"feedback"},"Feedback"),(0,o.yg)("p",null,"We can always reposition the file offset within a given file with either a ",(0,o.yg)("inlineCode",{parentName:"p"},"fseek()")," library call or an ",(0,o.yg)("inlineCode",{parentName:"p"},"lseek()")," syscall, so this is not an error.\nThe others are more difficult to manage, so can be regarded as errors."))}f.isMDXComponent=!0}}]);