"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[8800],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),g=a,m=u["".concat(i,".").concat(g)]||u[g]||y[g]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=g;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,s[1]=p;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(8168),a=(n(6540),n(5680));const o={},s="Setting up the Lab Environment",p={unversionedId:"Lab/lab-setup",id:"Lab/lab-setup",title:"Setting up the Lab Environment",description:"If you have already cloned the repository, make sure it is updated:",source:"@site/docs/Lab/lab-setup.md",sourceDirName:"Lab",slug:"/Lab/lab-setup",permalink:"/operating-systems/71/Lab/lab-setup",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Lab",permalink:"/operating-systems/71/Lab/"},next:{title:"Data",permalink:"/operating-systems/71/Lab/Data/"}},i={},l=[],c={toc:l},u="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"setting-up-the-lab-environment"},"Setting up the Lab Environment"),(0,a.yg)("p",null,"If you have already cloned the repository, make sure it is updated:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~$ cd operating-systems\n\nstudent@os:~/operating-systems$ git pull --rebase\n")),(0,a.yg)("p",null,"The command may fail if you have uncommitted changes.\nIf that is the case, stash your changes, retry, and pop the stash:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~/operating-systems$ git stash\n\nstudent@os:~/operating-systems$ git pull --rebase\n\nstudent@os:~/operating-systems$ git stash pop\n")),(0,a.yg)("p",null,"If you haven't already cloned the repository, do so and then enter the repository:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~$ git clone https://github.com/cs-pub-ro/operating-systems\n\nstudent@os:~$ cd operating-systems\n")),(0,a.yg)("p",null,"Navigate to a chapter's lab directory:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~/operating-systems$ cd content/chapters/<chapter-name>/lab/\n")),(0,a.yg)("p",null,"The possible options are: ",(0,a.yg)("inlineCode",{parentName:"p"},"software-stack"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"data"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"compute"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"io")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"app-interact"),"."),(0,a.yg)("p",null,"If you're using the OS-runner Docker container, you can use the following shortcuts:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"go-ss"),"       - changes directory to Software Stack lab"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"go-data"),"     - changes directory to Data lab"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"go-compute"),"  - changes directory to Compute lab"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"go-io"),"       - changes directory to IO lab"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"go-appInt"),"   - changes directory to App Interaction lab"))}y.isMDXComponent=!0}}]);