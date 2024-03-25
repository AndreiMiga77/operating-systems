"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[5214],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),y=a,d=s["".concat(c,".").concat(y)]||s[y]||m[y]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(8168),a=(n(6540),n(5680));const i={},o="VM Creation",l={unversionedId:"Lab/Application Interaction/quiz/vm-creation",id:"Lab/Application Interaction/quiz/vm-creation",title:"VM Creation",description:"Question Text",source:"@site/docs/Lab/Application Interaction/quiz/vm-creation.md",sourceDirName:"Lab/Application Interaction/quiz",slug:"/Lab/Application Interaction/quiz/vm-creation",permalink:"/operating-systems/72/Lab/Application Interaction/quiz/vm-creation",draft:!1,tags:[],version:"current",frontMatter:{}},c={},u=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(s,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"vm-creation"},"VM Creation"),(0,a.yg)("h2",{id:"question-text"},"Question Text"),(0,a.yg)("p",null,"How do you create a new virtual machine with a memory of 3GB and disk size of 100 GB?"),(0,a.yg)("h2",{id:"question-answers"},"Question Answers"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"By running ",(0,a.yg)("inlineCode",{parentName:"li"},'curl -H "Content-Type: application/json" -d \'{ "name": "my_vm", "image": "ubuntu_22.04", "network": "default", "mem_size": "3G", "disk_size": "100G"}\' localhost:5000/vm_create'))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"By running ",(0,a.yg)("inlineCode",{parentName:"p"},'curl -H "Content-Type: application/json" -d \'{ "name": "my_vm", "image": "ubuntu_22.04", "network": "default", "mem_size": "3G", "disk_size": "100G"}\' localhost:5000/vm_delete'))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"By running ",(0,a.yg)("inlineCode",{parentName:"p"},'curl -H "Content-Type: application/json" -d \'{ "name": "my_vm", "image": "ubuntu_22.04", "network": "default", "mem_size": "3G", "disk_size": "101G"}\' localhost:5000/vm_create'))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"By running ",(0,a.yg)("inlineCode",{parentName:"p"},'curl -H "Content-Type: application/json" -d \'{ "name": "my_vm", "image": "ubuntu_22.04", "network": "default", "mem_size": "6G", "disk_size": "1000G"}\' localhost:5000/vm_delete')))),(0,a.yg)("h2",{id:"feedback"},"Feedback"),(0,a.yg)("p",null,"We need to uso ",(0,a.yg)("inlineCode",{parentName:"p"},"curl")," with the right path ",(0,a.yg)("inlineCode",{parentName:"p"},"localhost:5000/vm_create"),", specifying the right data ",(0,a.yg)("inlineCode",{parentName:"p"},'{ "name": "my_vm", "image": "ubuntu_22.04", "network": "default", "mem_size": "3G", "disk_size": "100G"}'),"."))}m.isMDXComponent=!0}}]);