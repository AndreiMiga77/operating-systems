"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[8134],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),f=o,y=c["".concat(u,".").concat(f)]||c[f]||d[f]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(8168),o=(n(6540),n(5680));const a={},i="Firefox: TCP or UDP?",s={unversionedId:"Lab/IO/quiz/firefox-tcp-udp",id:"Lab/IO/quiz/firefox-tcp-udp",title:"Firefox: TCP or UDP?",description:"Question Text",source:"@site/docs/Lab/IO/quiz/firefox-tcp-udp.md",sourceDirName:"Lab/IO/quiz",slug:"/Lab/IO/quiz/firefox-tcp-udp",permalink:"/operating-systems/54/Lab/IO/quiz/firefox-tcp-udp",draft:!1,tags:[],version:"current",frontMatter:{}},u={},l=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(c,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"firefox-tcp-or-udp"},"Firefox: TCP or UDP?"),(0,o.yg)("h2",{id:"question-text"},"Question Text"),(0,o.yg)("p",null,"If the user requests a text-based web page (such as ",(0,o.yg)("a",{parentName:"p",href:"https://open-education-hub.github.io/operating-systems/"},"our Operating Systems course"),"), should the browser transfer the content using TCP or UDP?\nWhat about video content, such as YouTube?"),(0,o.yg)("h2",{id:"question-answers"},"Question Answers"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"TCP and UDP, respectively")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"UDP and TCP, respectively")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"both connections should use TCP")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"both connections should use UDP"))),(0,o.yg)("h2",{id:"feedback"},"Feedback"),(0,o.yg)("p",null,'The "TCP vs UDP" question boils down to 2 things:'),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"is the data updated in real-time (multiple times per second)?"),(0,o.yg)("li",{parentName:"ul"},"can we afford a few errors / missing messages?")),(0,o.yg)("p",null,'If the answers to both questions is "Yes", then we should use UDP.\nIf they\'re "No", we should use TCP.\nHowever, if the answer to one question is "Yes" and the other one is "No", then it gets complicated.'),(0,o.yg)("p",null,"Luckily, in our cases, the answers are quite clear.\nWe don't update text-based content too often and since it needs to be precise, handling broken packets is important.\nOn the other hand, a streaming-based site, such as YouTube sends data in real time and thus a few errors here and there can be omitted.\nSo ",(0,o.yg)("a",{parentName:"p",href:"https://open-education-hub.github.io/operating-systems"},"https://open-education-hub.github.io/operating-systems")," is going to be served via TCP, while YouTube videos via UDP."))}d.isMDXComponent=!0}}]);