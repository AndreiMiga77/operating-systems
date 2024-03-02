"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[4060],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>u});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),y=r,u=d["".concat(l,".").concat(y)]||d[y]||m[y]||o;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(8168),r=(n(6540),n(5680));const o={},i="Beyond Network Sockets",s={unversionedId:"Lab/IO/beyond-network-sockets",id:"Lab/IO/beyond-network-sockets",title:"Beyond Network Sockets",description:"Up until this point, we first learned how to use the Berkeley Sockets API, then we learned about the client-server model, based on this API.",source:"@site/docs/Lab/IO/beyond-network-sockets.md",sourceDirName:"Lab/IO",slug:"/Lab/IO/beyond-network-sockets",permalink:"/operating-systems/53/Lab/IO/beyond-network-sockets",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Client-Server Model",permalink:"/operating-systems/53/Lab/IO/client-server-model"},next:{title:"File Mappings",permalink:"/operating-systems/53/Lab/IO/file-mappings"}},l={},p=[{value:"UNIX Sockets",id:"unix-sockets",level:2},{value:"Practice: Receive from UNIX Socket",id:"practice-receive-from-unix-socket",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"beyond-network-sockets"},"Beyond Network Sockets"),(0,r.yg)("p",null,"Up until this point, we first learned how to use the ",(0,r.yg)("a",{parentName:"p",href:"/operating-systems/53/Lab/IO/remote-io#api---hail-berkeley-sockets"},"Berkeley Sockets API"),", then we learned about the ",(0,r.yg)("a",{parentName:"p",href:"/operating-systems/53/Lab/IO/client-server-model"},"client-server model"),", based on this API.\nSo now we know that sockets offer a ubiquitous interface for inter-process communication, which is great.\nA program written in Python can easily send data to another one written in C, D, Java, Haskell, you name it.\nHowever, in the ",(0,r.yg)("a",{parentName:"p",href:"/operating-systems/53/Lab/IO/networking-101"},"section dedicated to networking"),", we saw that it takes a whole stack of protocols to send this message from one process to the other.\nAs you might imagine, this is ",(0,r.yg)("strong",{parentName:"p"},"much slower even than local I/O using files"),"."),(0,r.yg)("p",null,"So far we've only used sockets for local communication, but in practice it is a bit counterproductive to use network sockets for local IPC due to their high latency.\nWouldn't it be great if we had a way to use the sockets API for local IPC without having to deal with this increased latency?\nWell, there is a way and it's called ",(0,r.yg)("strong",{parentName:"p"},"UNIX sockets"),"."),(0,r.yg)("h2",{id:"unix-sockets"},"UNIX Sockets"),(0,r.yg)("p",null,"UNIX sockets are created using the ",(0,r.yg)("inlineCode",{parentName:"p"},"socket()")," syscall and are bound ",(0,r.yg)("strong",{parentName:"p"},"TO A FILE")," instead of an IP and port using ",(0,r.yg)("inlineCode",{parentName:"p"},"bind()"),".\nYou may already see a similarity with ",(0,r.yg)("a",{parentName:"p",href:"/operating-systems/53/Lab/IO/pipes#named-pipes---mkfifo"},"named pipes"),".\nJust like them, UNIX sockets don't work by writing data to the file (that would be slow), but instead the kernel retains the data they send internally so that ",(0,r.yg)("inlineCode",{parentName:"p"},"send()")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"recv()")," can read it from the kernel's storage.\nYou can use ",(0,r.yg)("inlineCode",{parentName:"p"},"read()")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"write()")," to read/write data from/to both network and UNIX sockets as well, by the way.\nThe differences between using ",(0,r.yg)("inlineCode",{parentName:"p"},"send()"),"/",(0,r.yg)("inlineCode",{parentName:"p"},"recv()")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"write()"),"/",(0,r.yg)("inlineCode",{parentName:"p"},"read()")," are rather subtle and are described in ",(0,r.yg)("a",{parentName:"p",href:"https://stackoverflow.com/questions/1790750/what-is-the-difference-between-read-and-recv-and-between-send-and-write"},"this Stack Overflow thread"),"."),(0,r.yg)("p",null,"UNIX sockets are a feature of POSIX-compliant operating systems (e.g. Linux, macOS) and are not available on non-POSIX operating systems, such as Microsoft Windows.\nHowever, there are ",(0,r.yg)("a",{parentName:"p",href:"https://crates.io/crates/uds_windows"},"third-party libraries")," providing similar features to UNIX sockets in non-POSIX systems, but they might not have the same performance and reliability."),(0,r.yg)("h3",{id:"practice-receive-from-unix-socket"},"Practice: Receive from UNIX Socket"),(0,r.yg)("p",null,"Navigate to ",(0,r.yg)("inlineCode",{parentName:"p"},"support/receive-challenges/receive_unix_socket.c"),".\nDon't write any code yet.\nLet's compare UNIX sockets with network sockets first:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"To create them, give ",(0,r.yg)("inlineCode",{parentName:"p"},"socket()")," the ",(0,r.yg)("inlineCode",{parentName:"p"},"PF_UNIX"),"/",(0,r.yg)("inlineCode",{parentName:"p"},"AF_UNIX")," instead of ",(0,r.yg)("inlineCode",{parentName:"p"},"PF_INET"),"/",(0,r.yg)("inlineCode",{parentName:"p"},"AF_INET"),".\nThe latter are used to create network sockets.\nYou can use ",(0,r.yg)("inlineCode",{parentName:"p"},"PF_*")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"AF_*"),' interchangeably.\nThey mean "protocol families" and "address families", respectively, but they are ',(0,r.yg)("a",{parentName:"p",href:"https://stackoverflow.com/a/6737450"},"essentially the same thing"),".\nBut apart from this, UNIX sockets can be set to work in both TCP (",(0,r.yg)("inlineCode",{parentName:"p"},"SOCK_STREAM"),") and UDP (",(0,r.yg)("inlineCode",{parentName:"p"},"SOCK_DGRAM"),") modes.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"bind()")," call now takes a path as argument, as specified ",(0,r.yg)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man7/unix.7.html"},"in the UNIX socket man page"),"."))),(0,r.yg)("p",null,"And this is it.\nEverything else is the same."),(0,r.yg)("p",null,"Now fill in the ",(0,r.yg)("inlineCode",{parentName:"p"},"TODO"),"s in ",(0,r.yg)("inlineCode",{parentName:"p"},"receive_unix_socket.c"),".\nUse the example at the bottom of ",(0,r.yg)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man7/unix.7.html"},"the UNIX socket man page")," if you get stuck at ",(0,r.yg)("inlineCode",{parentName:"p"},"bind()"),".\nWhen you're done, compile the code and then run ",(0,r.yg)("inlineCode",{parentName:"p"},"send_unix_socket"),".\nIf you did this task correctly, ",(0,r.yg)("inlineCode",{parentName:"p"},"receive_unix_socket")," should display the flag."))}m.isMDXComponent=!0}}]);