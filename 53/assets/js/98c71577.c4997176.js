"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[4226],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=p(n),u=o,g=y["".concat(l,".").concat(u)]||y[u]||m[u]||a;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[y]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(8168),o=(n(6540),n(5680));const a={},s="Zero-Copy",i={unversionedId:"Lab/IO/zero-copy",id:"Lab/IO/zero-copy",title:"Zero-Copy",description:"Imagine a server that responds with files that it stores locally.",source:"@site/docs/Lab/IO/zero-copy.md",sourceDirName:"Lab/IO",slug:"/Lab/IO/zero-copy",permalink:"/operating-systems/53/Lab/IO/zero-copy",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"I/O Internals",permalink:"/operating-systems/53/Lab/IO/io-internals"},next:{title:"Asynchronous I/O",permalink:"/operating-systems/53/Lab/IO/async-io"}},l={},p=[{value:"Practice: Measure It",id:"practice-measure-it",level:2}],c={toc:p},y="wrapper";function m(e){let{components:t,...a}=e;return(0,o.yg)(y,(0,r.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"zero-copy"},"Zero-Copy"),(0,o.yg)("p",null,"Imagine a server that responds with files that it stores locally.\nIts actions would be those highlighted in the image below:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Receive a new request and extract the filename"),(0,o.yg)("li",{parentName:"ol"},"Read the filename from the disk into memory"),(0,o.yg)("li",{parentName:"ol"},"Send the file from memory to the client")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Client-Server Steps",src:n(2843).A})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"The quiz below is tricky, yet very important."),"\n",(0,o.yg)("strong",{parentName:"p"},"Do NOT skip it in order for this section to make sense!")),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/operating-systems/53/Lab/IO/quiz/server-copies"},"Quiz")),(0,o.yg)("p",null,"As you might have guessed, 2 of these copies are useless.\nSince the app doesn't modify the file, there's no need for it to store the file in its own buffer.\nIt would be more efficient to use ",(0,o.yg)("strong",{parentName:"p"},"a single")," kernel buffer as intermediate storage between the disk and the NIC, as shown in the image below."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Server Copies - Zero-Copy",src:n(9665).A})),(0,o.yg)("p",null,'For an easier comparison with the "classic" ',(0,o.yg)("inlineCode",{parentName:"p"},"read()")," + ",(0,o.yg)("inlineCode",{parentName:"p"},"send()")," model, here's the first version again:"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Server Copies - Read-Send",src:n(8962).A})),(0,o.yg)("p",null,"It should be obvious that the former approach is more efficient than the latter.\nThe syscall with which we can leverage ",(0,o.yg)("strong",{parentName:"p"},"zero-copy")," is called ",(0,o.yg)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/sendfile.2.html"},(0,o.yg)("inlineCode",{parentName:"a"},"sendfile()")),"."),(0,o.yg)("h2",{id:"practice-measure-it"},"Practice: Measure It"),(0,o.yg)("p",null,"So we have all the reasons to believe zero-copy is the faster of the two approaches we know.\nBut belief alone is meaningless.\nLet's test it!"),(0,o.yg)("p",null,"First, look at the code in ",(0,o.yg)("inlineCode",{parentName:"p"},"support/zero-copy/server.py"),".\nIt spawns 2 threads.\nOne of them listens on port 8081 and serves connections via ",(0,o.yg)("inlineCode",{parentName:"p"},"read()")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"send()"),".\nThe other listens on port 8082 and serves connections via ",(0,o.yg)("inlineCode",{parentName:"p"},"sendfile()"),".\nAs you can see, the difference between them is minimal."),(0,o.yg)("p",null,"First generate the test file using the Makefile.\nThen start the server in one terminal.\nNow, in another one, use ",(0,o.yg)("inlineCode",{parentName:"p"},"benchmark_client.py")," to benchmark both implementations.\nBelow are some generic results.\nYours might differ by quite a lot, as they depend on your disk, your NIC, your kernel, your Python version, the load on your system etc."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-console"},"student@os:/.../support/zero-copy$ python3 benchmark_client.py read-send\nTime taken: 7.175773588009179 seconds\n\nstudent@os:/.../support/zero-copy$ python3 benchmark_client.py sendfile\nTime taken: 3.71454380400246 seconds\n")),(0,o.yg)("p",null,"This is quite good!\nUsing ",(0,o.yg)("inlineCode",{parentName:"p"},"sendfile()")," halves the number of copies needed from 4 to 2.\nThus, it makes sense for the running time to ",(0,o.yg)("em",{parentName:"p"},"roughly")," halve as well."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/operating-systems/53/Lab/IO/quiz/fewer-than-2-copies"},"Quiz")),(0,o.yg)("p",null,"You can read a slightly more detailed article about zero-copy ",(0,o.yg)("a",{parentName:"p",href:"https://developer.ibm.com/articles/j-zerocopy/"},"here"),"."))}m.isMDXComponent=!0},2843:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/client-server-file-c21c08a102e6557188be7f080092a12c.svg"},8962:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/server-copies-normal-7e82d53d42a478d0313cb85917335f94.svg"},9665:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/server-copies-zero-copy-fc1fa1195f2444d92486d7d63dfc81a3.svg"}}]);