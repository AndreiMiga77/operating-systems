"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[1169],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),y=a,d=m["".concat(s,".").concat(y)]||m[y]||u[y]||o;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},7281:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(8168),a=(t(6540),t(5680));const o={},i="Mini-shell Stops After Command",l={unversionedId:"Lab/Compute/quiz/mini-shell-stops-after-command",id:"Lab/Compute/quiz/mini-shell-stops-after-command",title:"Mini-shell Stops After Command",description:"Question Text",source:"@site/docs/Lab/Compute/quiz/mini-shell-stops-after-command.md",sourceDirName:"Lab/Compute/quiz",slug:"/Lab/Compute/quiz/mini-shell-stops-after-command",permalink:"/operating-systems/64/Lab/Compute/quiz/mini-shell-stops-after-command",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"mini-shell-stops-after-command"},"Mini-shell Stops After Command"),(0,a.yg)("h2",{id:"question-text"},"Question Text"),(0,a.yg)("p",null,"Why does the ",(0,a.yg)("inlineCode",{parentName:"p"},"mini_shell")," process stop after executing a single command?"),(0,a.yg)("h2",{id:"question-answers"},"Question Answers"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Because of an implementation error")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Because the ",(0,a.yg)("inlineCode",{parentName:"li"},"mini_shell")," process doesn't exist anymore")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Because the OS sees that the command has ended and ends the ",(0,a.yg)("inlineCode",{parentName:"p"},"mini_shell")," process as well")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Because ",(0,a.yg)("inlineCode",{parentName:"p"},"exec*()")," syscalls also kill the caller process when the callee ends"))),(0,a.yg)("h2",{id:"feedback"},"Feedback"),(0,a.yg)("p",null,"When you ",(0,a.yg)("inlineCode",{parentName:"p"},"exec*()")," any binary, the VAS current process is ",(0,a.yg)("strong",{parentName:"p"},"replaced")," by that corresponding to that binary.\nSo when you ",(0,a.yg)("inlineCode",{parentName:"p"},'exec*("ls")'),", for example, the ",(0,a.yg)("inlineCode",{parentName:"p"},"mini_shell")," process ",(0,a.yg)("em",{parentName:"p"},"becomes")," ",(0,a.yg)("inlineCode",{parentName:"p"},"ls"),".\nThere is no more ",(0,a.yg)("inlineCode",{parentName:"p"},"mini_shell")," past this point.\nSo when ",(0,a.yg)("inlineCode",{parentName:"p"},"ls")," ends, there is no ",(0,a.yg)("inlineCode",{parentName:"p"},"mini_shell")," process to continue its execution anymore."))}u.isMDXComponent=!0}}]);