"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[4512],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(8168),a=(n(6540),n(5680));const i={},o="ULT Thread IDs",s={unversionedId:"Lab/Compute/quiz/ult-thread-ids",id:"Lab/Compute/quiz/ult-thread-ids",title:"ULT Thread IDs",description:"Question Text",source:"@site/docs/Lab/Compute/quiz/ult-thread-ids.md",sourceDirName:"Lab/Compute/quiz",slug:"/Lab/Compute/quiz/ult-thread-ids",permalink:"/operating-systems/71/Lab/Compute/quiz/ult-thread-ids",draft:!1,tags:[],version:"current",frontMatter:{}},l={},u=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"ult-thread-ids"},"ULT Thread IDs"),(0,a.yg)("h2",{id:"question-text"},"Question Text"),(0,a.yg)("p",null,"Why do the thread IDs returned by ",(0,a.yg)("inlineCode",{parentName:"p"},"threads_create()")," start from 2 and not 1?\nWhy is this necessary."),(0,a.yg)("h2",{id:"question-answers"},"Question Answers"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Because ID 1 is associated with the main thread.\nThis is an implementation detail and can be omitted.")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Because ID 1 belongs to the main thread.\nThis is needed in order to associate a ",(0,a.yg)("inlineCode",{parentName:"li"},"ucontext_t")," with the main thread as well, so the main thread can also be run.")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Because the underlying kernel thread is assigned ID 1.\nThis is mandatory in order for the OS's scheduler to run this thread.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Because ",(0,a.yg)("inlineCode",{parentName:"p"},"libult.so")," first creates a pool of threads from which it ",(0,a.yg)("inlineCode",{parentName:"p"},"threads_create()")," retrieves the threads it returns."))),(0,a.yg)("h2",{id:"feedback"},"Feedback"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"threads_create()")," function calls ",(0,a.yg)("inlineCode",{parentName:"p"},"init_first_context()"),", which, in turn, calls ",(0,a.yg)("inlineCode",{parentName:"p"},"tcb_new()"),", thus creating the first context associated with the main thread (the one calling ",(0,a.yg)("inlineCode",{parentName:"p"},"threads_create()")," the first time).\nWithout this, the scheduler in ",(0,a.yg)("inlineCode",{parentName:"p"},"libult.so")," wouldn't be able to run the main thread."))}p.isMDXComponent=!0}}]);