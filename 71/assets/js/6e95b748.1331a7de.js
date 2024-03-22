"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[1759],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=i,d=s["".concat(c,".").concat(m)]||s[m]||y[m]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2921:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(8168),i=(n(6540),n(5680));const a={},o="Time Server Protocol",l={unversionedId:"Lab/Application Interaction/quiz/time-server",id:"Lab/Application Interaction/quiz/time-server",title:"Time Server Protocol",description:"Question Text",source:"@site/docs/Lab/Application Interaction/quiz/time-server.md",sourceDirName:"Lab/Application Interaction/quiz",slug:"/Lab/Application Interaction/quiz/time-server",permalink:"/operating-systems/71/Lab/Application Interaction/quiz/time-server",draft:!1,tags:[],version:"current",frontMatter:{}},c={},p=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],u={toc:p},s="wrapper";function y(e){let{components:t,...n}=e;return(0,i.yg)(s,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"time-server-protocol"},"Time Server Protocol"),(0,i.yg)("h2",{id:"question-text"},"Question Text"),(0,i.yg)("p",null,"What format does the message exchanged between the server and the client have?"),(0,i.yg)("h2",{id:"question-answers"},"Question Answers"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"4 byte length (little endian) followed by 8 byte timestamp (little endian)")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"8 byte length (little endian) followed by 4 byte timestamp (little endian)"))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"4 byte length (big endian) followed by 8 byte timestamp (big endian)")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"8 byte length (big endian) followed by 4 byte timestamp (big endian)")),(0,i.yg)("h2",{id:"feedback"},"Feedback"),(0,i.yg)("p",null,"If we consider one output example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"00000000  00 00 00 08 00 00 00 00  63 1b a9 50              |........c..P|\n0000000c\n")),(0,i.yg)("p",null,"We can identify the 4 byte length in big endian (",(0,i.yg)("inlineCode",{parentName:"p"},"00 00 00 08"),"), then the 8 byte timestamp (",(0,i.yg)("inlineCode",{parentName:"p"},"00 00 00 00  63 1b a9 50"),"), also in big endian."))}y.isMDXComponent=!0}}]);