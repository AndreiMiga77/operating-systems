"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[2360],{5680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>m});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),i=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=i(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(t),g=a,m=u["".concat(s,".").concat(g)]||u[g]||y[g]||o;return t?n.createElement(m,l(l({ref:r},p),{},{components:t})):n.createElement(m,l({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=g;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3684:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=t(8168),a=(t(6540),t(5680));const o={},l="Operator Overloading",c={unversionedId:"Lab/Data/quiz/operators",id:"Lab/Data/quiz/operators",title:"Operator Overloading",description:"Question Text",source:"@site/docs/Lab/Data/quiz/operators.md",sourceDirName:"Lab/Data/quiz",slug:"/Lab/Data/quiz/operators",permalink:"/operating-systems/70/Lab/Data/quiz/operators",draft:!1,tags:[],version:"current",frontMatter:{}},s={},i=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:i},u="wrapper";function y(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"operator-overloading"},"Operator Overloading"),(0,a.yg)("h2",{id:"question-text"},"Question Text"),(0,a.yg)("p",null,"How many constructor calls, copy constructor calls, assignment operator calls and destructor calls does the following program issue?"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-d"},"Obj quiz(Obj o1, Obj o2)\n{\n    o2 = o1;\n    return o2;\n}\nvoid main()\n{\n    Obj b = quiz(o1, o2);\n}\n")),(0,a.yg)("h2",{id:"question-answers"},"Question Answers"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"constructor calls = 0, copy constructor calls = 3, assignment operator calls = 1, destructor calls = 3")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"constructor calls = 1, copy constructor calls = 2, assignment operator calls = 1, destructor calls = 2")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"constructor calls = 0, copy constructor calls = 2, assignment operator calls = 1, destructor calls = 2")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"constructor calls = 0, copy constructor calls = 3, assignment operator calls = 1, destructor calls = 1"))),(0,a.yg)("h2",{id:"feedback"},"Feedback"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"There are no constructor calls because there is no object construction when using ",(0,a.yg)("inlineCode",{parentName:"p"},"int"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"There are 3 copy constructor calls: for passing ",(0,a.yg)("inlineCode",{parentName:"p"},"o1"),", for passing ",(0,a.yg)("inlineCode",{parentName:"p"},"o2"),", and for returning ",(0,a.yg)("inlineCode",{parentName:"p"},"o2"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"There is 1 assignment operator call for ",(0,a.yg)("inlineCode",{parentName:"p"},"o2 = o1"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"There are 3 destructor calls, because each constructed object needs to be destroyed."))))}y.isMDXComponent=!0}}]);