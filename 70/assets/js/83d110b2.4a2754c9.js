"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[4298],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),y=a,d=u["".concat(o,".").concat(y)]||u[y]||g[y]||i;return n?r.createElement(d,p(p({ref:t},c),{},{components:n})):r.createElement(d,p({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=y;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,p[1]=s;for(var l=2;l<i;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(8168),a=(n(6540),n(5680));const i={},p="App Investigation",s={unversionedId:"Software Stack/Lab 2 - Library Perspective/Applications/Reading/app-investigate",id:"Software Stack/Lab 2 - Library Perspective/Applications/Reading/app-investigate",title:"App Investigation",description:"Let's spend some time investigating actual applications residing on the local system.",source:"@site/docs/Software Stack/Lab 2 - Library Perspective/Applications/Reading/app-investigate.md",sourceDirName:"Software Stack/Lab 2 - Library Perspective/Applications/Reading",slug:"/Software Stack/Lab 2 - Library Perspective/Applications/Reading/app-investigate",permalink:"/operating-systems/70/Software Stack/Lab 2 - Library Perspective/Applications/Reading/app-investigate",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Reading",permalink:"/operating-systems/70/Software Stack/Lab 2 - Library Perspective/Applications/Reading/"},next:{title:"Drills",permalink:"/operating-systems/70/Software Stack/Lab 2 - Library Perspective/Applications/Drills/"}},o={},l=[],c={toc:l},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"app-investigation"},"App Investigation"),(0,a.yg)("p",null,"Let's spend some time investigating actual applications residing on the local system.\nFor now, we know that applications are developed using high-level languages and then compiled or interpreted to use the lower-layer interfaces of the software stack, such as the system call API."),(0,a.yg)("p",null,"Let's enter the ",(0,a.yg)("inlineCode",{parentName:"p"},"app-investigation/support/")," folder and run the ",(0,a.yg)("inlineCode",{parentName:"p"},"get_app_types.sh")," script:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../tasks/app-investigation/support/$ ./get_app_types.sh\nbinary apps: 2223\nPerl apps: 256\nShell apps: 454\nPython apps: 123\nOther apps: 27\n")),(0,a.yg)("p",null,"The script prints the types of the application executables in the system.\nThe output will differ between systems, given each has particular types of applications installed."),(0,a.yg)("p",null,"We list them by running the command inside the ",(0,a.yg)("inlineCode",{parentName:"p"},"get_app_types.sh")," script:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../tasks/app-investigation/support/$ find /usr/bin /bin /usr/sbin /sbin -type f -exec file {} \\;\n[...]\n/usr/bin/qpdldecode: ELF 64-bit LSB shared object, x86-64 [...]\n/usr/bin/mimeopen: Perl script text executable\n[...]\n")),(0,a.yg)("p",null,"As above, the output will differ between systems."),(0,a.yg)("p",null,"So, depending on the developers' choice, applications may be:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"compiled into executables, from compiled languages such as C, C++, Go, Rust, D"),(0,a.yg)("li",{parentName:"ul"},"developed as scripts, from interpreted languages such as Python, Perl, JavaScript")))}g.isMDXComponent=!0}}]);