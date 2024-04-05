"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[8629],{5680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>m});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,m=p["".concat(u,".").concat(d)]||p[d]||y[d]||o;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1535:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(8168),a=(t(6540),t(5680));const o={},i="Cause of `bind()` Error",l={unversionedId:"Lab/IO/quiz/bind-error-cause",id:"Lab/IO/quiz/bind-error-cause",title:"Cause of `bind()` Error",description:"Question Text",source:"@site/docs/Lab/IO/quiz/bind-error-cause.md",sourceDirName:"Lab/IO/quiz",slug:"/Lab/IO/quiz/bind-error-cause",permalink:"/operating-systems/71/Lab/IO/quiz/bind-error-cause",draft:!1,tags:[],version:"current",frontMatter:{}},u={},s=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:s},p="wrapper";function y(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"cause-of-bind-error"},"Cause of ",(0,a.yg)("inlineCode",{parentName:"h1"},"bind()")," Error"),(0,a.yg)("h2",{id:"question-text"},"Question Text"),(0,a.yg)("p",null,"While ",(0,a.yg)("inlineCode",{parentName:"p"},"receiver.py")," is still running, run it again from another terminal.\nYou will get an error.\nWhat is its cause?"),(0,a.yg)("h2",{id:"question-answers"},"Question Answers"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"the IP ",(0,a.yg)("inlineCode",{parentName:"li"},"127.0.0.1")," is already used by ",(0,a.yg)("inlineCode",{parentName:"li"},"receive.py"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"the port 5000 is already used (by ",(0,a.yg)("inlineCode",{parentName:"li"},"receive.py"),")")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"a port may not be used multiple times by the same process")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"the socket was not created correctly"))),(0,a.yg)("h2",{id:"feedback"},"Feedback"),(0,a.yg)("p",null,"One port may only be bound to ",(0,a.yg)("strong",{parentName:"p"},"one socket")," at a time.\nThe fact that it's the same program (same source code) using it is irrelevant because they're different processes."))}y.isMDXComponent=!0}}]);