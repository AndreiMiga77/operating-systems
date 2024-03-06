"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[1280],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(6540);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=s,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5147:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(8168),s=(r(6540),r(5680));const a={},i="Distributed system",o={unversionedId:"Exams/Distributed System/distributed-system",id:"Exams/Distributed System/distributed-system",title:"Distributed system",description:"Scenario",source:"@site/docs/Exams/Distributed System/distributed-system.md",sourceDirName:"Exams/Distributed System",slug:"/Exams/Distributed System/distributed-system",permalink:"/operating-systems/54/Exams/Distributed System/distributed-system",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Digital Forensics",permalink:"/operating-systems/54/Exams/Digital Forensics/digital-forensics"},next:{title:"Hackathons",permalink:"/operating-systems/54/Hackathons/"}},l={},c=[{value:"Scenario",id:"scenario",level:2},{value:"Questions",id:"questions",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,s.yg)(m,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"distributed-system"},"Distributed system"),(0,s.yg)("h2",{id:"scenario"},"Scenario"),(0,s.yg)("p",null,"We are designing a distributed e-learning system across multiple servers. The system consists of frontend services to handle client requests (for example, when a client accesses ",(0,s.yg)("a",{parentName:"p",href:"https://curs.upb.ro"},"https://curs.upb.ro"),") and backend services for information storage."),(0,s.yg)("p",null,'Respond to the following questions with "True" or "False" and provide reasoning for each answer.\nThe explanation should be concise, 2-3 sentences for each response.'),(0,s.yg)("h2",{id:"questions"},"Questions"),(0,s.yg)("ol",null,(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"The backend service will benefit from the use of buffer cache.\nAnswer: True")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"The frontend application must necessarily be multi-threaded.\nAnswer: False")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"Both components (frontend and backend) are I/O intensive.\nAnswer: True")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"Communication between backend services on different servers can be achieved through shared memory.\nAnswer: False")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"If a backend service becomes unavailable, the entire system becomes unusable.\nAnswer: False")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"The frontend service predominantly uses socket file descriptors, while backend services predominantly use file descriptors.\nAnswer: True")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"Both types of services need to run on a UNIX-based operating system (Linux, FreeBSD).\nAnswer: False")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"Exclusive access primitives are needed for communication between frontend and backend.\nAnswer: False")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"A higher processor load is expected for the frontend compared to the backend.\nAnswer: False")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"SSD storage is required for the frontend service.\nAnswer: False")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"The backend service uses a lot of memory - almost the entire system memory.\nAnswer: True"))))}u.isMDXComponent=!0}}]);