"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[7983],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(o,".").concat(u)]||m[u]||y[u]||s;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(8168),r=(n(6540),n(5680));const s={},l="System Call Wrappers",i={unversionedId:"Lab/Software Stack/syscall-wrapper",id:"Lab/Software Stack/syscall-wrapper",title:"System Call Wrappers",description:"The support/syscall-wrapper/ folder stores the implementation of a simple program written in C (main.c) that calls the write() and exit() functions.",source:"@site/docs/Lab/Software Stack/syscall-wrapper.md",sourceDirName:"Lab/Software Stack",slug:"/Lab/Software Stack/syscall-wrapper",permalink:"/operating-systems/64/Lab/Software Stack/syscall-wrapper",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Analyzing the Software Stack",permalink:"/operating-systems/64/Lab/Software Stack/basic-syscall"},next:{title:"Common Functions",permalink:"/operating-systems/64/Lab/Software Stack/common-functions"}},o={},p=[{value:"Practice",id:"practice",level:2}],c={toc:p},m="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"system-call-wrappers"},"System Call Wrappers"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"support/syscall-wrapper/")," folder stores the implementation of a simple program written in C (",(0,r.yg)("inlineCode",{parentName:"p"},"main.c"),") that calls the ",(0,r.yg)("inlineCode",{parentName:"p"},"write()")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"exit()")," functions.\nThe functions are defined in ",(0,r.yg)("inlineCode",{parentName:"p"},"syscall.asm")," as wrappers around corresponding system calls.\nEach function invokes the corresponding system call using the specific system call ID and the arguments provided for the function call."),(0,r.yg)("p",null,"The implementation of the two wrapper functions in ",(0,r.yg)("inlineCode",{parentName:"p"},"syscall.asm")," is very simple, as the function arguments are passed in the same registers required by the system call.\nThis is because of the overlap of the first three registers for the ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/X86_calling_conventions#System_V_AMD64_ABI"},"x86_64 Linux function calling convention")," and the ",(0,r.yg)("a",{parentName:"p",href:"https://x64.syscall.sh/"},"x86_64 Linux system call convention"),"."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"syscall.h")," contains the declaration of the two functions and is included in ",(0,r.yg)("inlineCode",{parentName:"p"},"main.c"),".\nThis way, C programs can be written that make function calls that end up making system calls."),(0,r.yg)("p",null,"Let's build, run and trace system calls for the program:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../lab/support/syscall-wrapper$ ls\nmain.c  Makefile  syscall.h  syscall.s\n\nstudent@os:~/.../lab/support/syscall-wrapper$ make\ngcc -c -o main.o main.c\nnasm -f elf64 -o syscall.o syscall.s\ncc -nostdlib -no-pie -Wl,--entry=main -Wl,--build-id=none  main.o syscall.o   -o main\n\nstudent@os:~/.../lab/support/syscall-wrapper$ ls\nmain  main.c  main.o  Makefile  syscall.h  syscall.o  syscall.s\n\nstudent@os:~/.../software-stack/lab/syscall-wrapper$ ./main\nHello, world!\n\nstudent@os:~/.../lab/support/syscall-wrapper$ strace ./main\nexecve("./main", ["./main"], 0x7ffee60fb590 /* 63 vars */) = 0\nwrite(1, "Hello, world!\\n", 14Hello, world!\n)         = 14\nexit(0)                                 = ?\n+++ exited with 0 +++\n')),(0,r.yg)("p",null,"The trace is similar to the previous example, showing the ",(0,r.yg)("inlineCode",{parentName:"p"},"write")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"exit")," system calls."),(0,r.yg)("p",null,"By creating system call wrappers as C functions, we are now relieved of the burden of writing assembly language code.\nOf course, there has to be an initial implementation of wrapper functions written in assembly language;\nbut, after that, we can use C only."),(0,r.yg)("h2",{id:"practice"},"Practice"),(0,r.yg)("p",null,"Update the files in the ",(0,r.yg)("inlineCode",{parentName:"p"},"support/syscall-wrapper/")," folder to make ",(0,r.yg)("inlineCode",{parentName:"p"},"read")," system call available as a wrapper.\nMake a call to the ",(0,r.yg)("inlineCode",{parentName:"p"},"read")," system call to read data from standard input in a buffer.\nThen call ",(0,r.yg)("inlineCode",{parentName:"p"},"write()")," to print data from that buffer."),(0,r.yg)("p",null,"Note that the ",(0,r.yg)("inlineCode",{parentName:"p"},"read")," system call returns the number of bytes read.\nUse that as the argument to the subsequent ",(0,r.yg)("inlineCode",{parentName:"p"},"write")," call that prints read data."),(0,r.yg)("p",null,"We can see that it's easier to have wrapper calls and write most of the code in C than in assembly language."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/operating-systems/64/Lab/Software%20Stack/quiz/syscall-wrapper"},"Quiz")))}y.isMDXComponent=!0}}]);