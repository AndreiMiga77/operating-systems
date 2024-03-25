"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[3686],{5680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>m});var t=n(6540);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),p=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,m=u["".concat(s,".").concat(d)]||u[d]||y[d]||a;return n?t.createElement(m,l(l({ref:r},c),{},{components:n})):t.createElement(m,l({ref:r},c))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6764:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var t=n(8168),i=(n(6540),n(5680));const a={},l="`sender.py` and `receiver.py` Client-Server Parallel",o={unversionedId:"Lab/IO/quiz/client-server-sender-receiver",id:"Lab/IO/quiz/client-server-sender-receiver",title:"`sender.py` and `receiver.py` Client-Server Parallel",description:"Question Text",source:"@site/docs/Lab/IO/quiz/client-server-sender-receiver.md",sourceDirName:"Lab/IO/quiz",slug:"/Lab/IO/quiz/client-server-sender-receiver",permalink:"/operating-systems/72/Lab/IO/quiz/client-server-sender-receiver",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:p},u="wrapper";function y(e){let{components:r,...n}=e;return(0,i.yg)(u,(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"senderpy-and-receiverpy-client-server-parallel"},(0,i.yg)("inlineCode",{parentName:"h1"},"sender.py")," and ",(0,i.yg)("inlineCode",{parentName:"h1"},"receiver.py")," Client-Server Parallel"),(0,i.yg)("h2",{id:"question-text"},"Question Text"),(0,i.yg)("p",null,"Drawing a parallel from the UDP examples in ",(0,i.yg)("inlineCode",{parentName:"p"},"support/send-receive/"),", which of the sender and receiver is similar to the server and which is similar to the client?"),(0,i.yg)("h2",{id:"question-answers"},"Question Answers"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"both are similar to clients")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"both are similar to servers"))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"receiver.py")," is similar to a server and ",(0,i.yg)("inlineCode",{parentName:"li"},"sender.py")," is similar to a client")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"receiver.py")," is similar to a client and ",(0,i.yg)("inlineCode",{parentName:"li"},"sender.py")," is similar to a server")),(0,i.yg)("h2",{id:"feedback"},"Feedback"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"receiver.py")," is the passive component.\nIt has to be started first and then waits for ",(0,i.yg)("inlineCode",{parentName:"p"},"sender.py")," (the client) to send data.\nFurthermore, you can only have ",(0,i.yg)("strong",{parentName:"p"},"one")," ",(0,i.yg)("inlineCode",{parentName:"p"},"receiver.py")," running at the same time (remember the ",(0,i.yg)("a",{parentName:"p",href:"/operating-systems/72/Lab/IO/quiz/bind-error-cause"},"multiple ",(0,i.yg)("inlineCode",{parentName:"a"},"bind()")," bug"),") and multiple ",(0,i.yg)("inlineCode",{parentName:"p"},"sender.py"),"s."))}y.isMDXComponent=!0}}]);