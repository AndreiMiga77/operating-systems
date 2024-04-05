"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[8562],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(8168),o=(n(6540),n(5680));const i={},a="Memory Deduplication",l={unversionedId:"Exams/Memory Deduplication/memory-deduplication",id:"Exams/Memory Deduplication/memory-deduplication",title:"Memory Deduplication",description:"Scenario",source:"@site/docs/Exams/Memory Deduplication/memory-deduplication.md",sourceDirName:"Exams/Memory Deduplication",slug:"/Exams/Memory Deduplication/memory-deduplication",permalink:"/operating-systems/71/Exams/Memory Deduplication/memory-deduplication",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Web GUI 2",permalink:"/operating-systems/71/Exams/Web GUI 2/web-gui-2"},next:{title:"Cloud System",permalink:"/operating-systems/71/Exams/Cloud System/cloud-system"}},s={},c=[{value:"Scenario",id:"scenario",level:2},{value:"Questions",id:"questions",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"memory-deduplication"},"Memory Deduplication"),(0,o.yg)("h2",{id:"scenario"},"Scenario"),(0,o.yg)("p",null,"Memory deduplication is a technique commonly used in virtualized environments to reduce the memory footprint by employing a single instance of different memory areas for multiple virtual machines.\nLet's assume we have a custom operating system running on a specialized environment that lacks support for dynamic libraries due to efficient design reasons.\nIt runs applications solely from static executables.\nWe aim to have memory deduplication support for applications running on this operating system."),(0,o.yg)("p",null,"All answers should be justified."),(0,o.yg)("h2",{id:"questions"},"Questions"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Describe schematically which components of the system are involved in the memory deduplication part.\nDescribe the flow through which applications are built and executed to benefit from memory deduplication.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Describe the particularities of the build process (compilation, linking, etc.) that create static executables used for deduplication at runtime.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Describe the functionalities of the operating system and the runtime environment that allow memory deduplication.\nWhen and how will memory deduplication be performed with the support of the operating system?")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"How do we evaluate the functionality of memory deduplication?\nWhat metrics do we track?\nWhat scenarios will we use to monitor these metrics?"))))}u.isMDXComponent=!0}}]);