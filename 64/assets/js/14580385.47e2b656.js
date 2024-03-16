"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[7841],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>h});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,h=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return t?r.createElement(h,s(s({ref:n},c),{},{components:t})):r.createElement(h,s({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8964:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(8168),a=(t(6540),t(5680));const o={},s="Arena",i={unversionedId:"Lab/IO/arena",id:"Lab/IO/arena",title:"Arena",description:"Open File Structure in the Kernel",source:"@site/docs/Lab/IO/arena.md",sourceDirName:"Lab/IO",slug:"/Lab/IO/arena",permalink:"/operating-systems/64/Lab/IO/arena",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"I/O Multiplexing",permalink:"/operating-systems/64/Lab/IO/io-multiplexing"},next:{title:"Application Interaction",permalink:"/operating-systems/64/Lab/Application Interaction/"}},l={},p=[{value:"Open File Structure in the Kernel",id:"open-file-structure-in-the-kernel",level:2},{value:"Mini-shell with Blackjack and Pipes",id:"mini-shell-with-blackjack-and-pipes",level:2},{value:"To Drop or Not to Drop?",id:"to-drop-or-not-to-drop",level:2}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"arena"},"Arena"),(0,a.yg)("h2",{id:"open-file-structure-in-the-kernel"},"Open File Structure in the Kernel"),(0,a.yg)("p",null,'The "open file" ',(0,a.yg)("inlineCode",{parentName:"p"},"struct")," in the Linux kernel is called ",(0,a.yg)("a",{parentName:"p",href:"https://elixir.bootlin.com/linux/v6.0.9/source/include/linux/fs.h#L940"},(0,a.yg)("inlineCode",{parentName:"a"},"struct file")),"\nIts most important fields are:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},"struct file {\n        struct path                     f_path;\n        /* Identifier within the filesystem. */\n        struct inode                    *f_inode;\n\n        /**\n         * Contains pointers to functions that implement operations that\n         * correspond to syscalls, such as `read()`, `write()`, `lseek()` etc.\n         */\n        const struct file_operations    *f_op;\n\n        /**\n         * Reference count. A `struct file` is deallocated when this reaches 0,\n         * i.e. nobody uses it anymore.\n         */\n        atomic_long_t                   f_count;\n\n        /* Those passed to `open()`. */\n        unsigned int                    f_flags;\n        fmode_t                         f_mode;\n\n        /* Cursor from where reads/writes are made */\n        loff_t                          f_pos;\n        /* To allow `f_pos` to be modified atomically. */\n        struct mutex                    f_pos_lock;\n}\n")),(0,a.yg)("p",null,"As mentioned above, ",(0,a.yg)("a",{parentName:"p",href:"https://elixir.bootlin.com/linux/v6.0.9/source/include/linux/fs.h#L2093"},(0,a.yg)("inlineCode",{parentName:"a"},"struct file_operations"))," contains function pointers that well-known syscalls such as ",(0,a.yg)("inlineCode",{parentName:"p"},"read()")," end up calling.\nEach filesystem needs to define its own implementations of these functions.\nSome of the most widely known ",(0,a.yg)("inlineCode",{parentName:"p"},"file_operations")," are listed below.\nBy now, you should recognise most of them:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},"struct file_operations {\n        loff_t (*llseek) (struct file *, loff_t, int);\n        ssize_t (*read) (struct file *, char __user *, size_t, loff_t *);\n        ssize_t (*write) (struct file *, const char __user *, size_t, loff_t *);\n        int (*mmap) (struct file *, struct vm_area_struct *);\n        unsigned long mmap_supported_flags;\n        int (*open) (struct inode *, struct file *);\n        int (*flush) (struct file *, fl_owner_t id);\n        int (*fsync) (struct file *, loff_t, loff_t, int datasync);\n        int (*fasync) (int, struct file *, int);\n}\n")),(0,a.yg)("h2",{id:"mini-shell-with-blackjack-and-pipes"},"Mini-shell with Blackjack and Pipes"),(0,a.yg)("p",null,"OK, there will be no Blackjack...\nfor now at least.\nBut there ",(0,a.yg)("strong",{parentName:"p"},"will")," be pipes.\nNavigate back to ",(0,a.yg)("inlineCode",{parentName:"p"},"support/mini-shell/mini_shell.c")," and add support for piping 2 commands together like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},"> cat bosses.txt | head -n 5\nDarkeater Midir\nSlave Knight Gael\nNameless King\nDancer Of The Boreal Valley\nAncient Dragon\n")),(0,a.yg)("h2",{id:"to-drop-or-not-to-drop"},"To Drop or Not to Drop?"),(0,a.yg)("p",null,"Remember ",(0,a.yg)("inlineCode",{parentName:"p"},"support/buffering/benchmark_buffering.sh")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"support/file-mappings/benchmark_cp.sh"),".\nThey both used this line:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'sudo sh -c "sync; echo 3 > /proc/sys/vm/drop_caches"\n')),(0,a.yg)("p",null,"Note that ",(0,a.yg)("inlineCode",{parentName:"p"},"sync")," has a ",(0,a.yg)("a",{parentName:"p",href:"https://linux.die.net/man/8/sync"},"man page")," and it partially explains what's going on:"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"The kernel keeps data in memory to avoid doing (relatively slow) disk reads and writes. This improves performance")),(0,a.yg)("p",null,"So the kernel does ",(0,a.yg)("strong",{parentName:"p"},"even more ",(0,a.yg)("a",{parentName:"strong",href:"/operating-systems/64/Lab/IO/io-internals#io-buffering"},"buffering"),"!"),"\nBut this time, it's not at the syscall level, like with ",(0,a.yg)("inlineCode",{parentName:"p"},"read()")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"write()"),".\nAnd it's used a bit differently."),(0,a.yg)("p",null,"While buffering is a means of either receiving data in advance (for reading) or committing it retroactively (for writing) to speed up subsequent syscalls that use the ",(0,a.yg)("strong",{parentName:"p"},"next data"),", caching is a means of speeding up calls that use the ",(0,a.yg)("strong",{parentName:"p"},"same data"),".\nJust like your browser caches the pages you visit so you refresh them faster or your CPU caches your most recently accessed addresses, so does your OS ",(0,a.yg)("strong",{parentName:"p"},"with your files"),"."),(0,a.yg)("p",null,"Some files are read more often than others: logs, some configs etc.\nUpon encountering a first request (read / write) to a file, the kernel stores chunks of them in its memory so that subsequent requests can receive / modify the data in the RAM rather than waiting for the slow disk.\nThis makes I/O faster."),(0,a.yg)("p",null,'The line from which this discussion started invalidates those caches and forces the OS to perform I/O operations "the slow way" by interrogating the disk.\nThe scripts use it to benchmark only the C code, not the OS.'),(0,a.yg)("p",null,"To see just how much faster this type of caching is, navigate to ",(0,a.yg)("inlineCode",{parentName:"p"},"support/buffering/benchmark_buffering.sh")," once again and comment-out the line with ",(0,a.yg)("inlineCode",{parentName:"p"},'sudo sh -c "sync; echo 3 > /proc/sys/vm/drop_caches"'),".\nNow run the script ",(0,a.yg)("strong",{parentName:"p"},"a few times")," and compare the results.\nYou should see some drastic improvements in the running times, such as:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},"student@os:/.../support/file-mappings$ ./benchmark_cp.sh\nmake: Nothing to be done for 'all'.\nBenchmarking mmap_cp on a 1 GB file...\n\nreal    0m13,299s\nuser    0m0,522s\nsys     0m1,695s\nBenchmarking cp on a 1 GB file...\n\nreal    0m10,921s\nuser    0m0,013s\nsys     0m1,301s\n\n\nstudent@os:/.../support/file-mappings$ ./benchmark_cp.sh\nmake: Nothing to be done for 'all'.\nBenchmarking mmap_cp on a 1 GB file...\n\nreal    0m1,286s\nuser    0m0,174s\nsys     0m0,763s\nBenchmarking cp on a 1 GB file...\n\nreal    0m5,411s\nuser    0m0,012s\nsys     0m1,201s\n")),(0,a.yg)("p",null,"Each subsequent benchmark actually reads the data from the caches populated or refreshed by the previous one."),(0,a.yg)("p",null,"You can use ",(0,a.yg)("inlineCode",{parentName:"p"},"free -h")," to view how much data your kernel is caching.\nLook at the ",(0,a.yg)("inlineCode",{parentName:"p"},"buff/cache")," column.\nOne possible output is shown below.\nIt says the OS is caching 7 GB of data."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~$ free -h\n              total        used        free      shared  buff/cache   available\nMem:           15Gi       8,1Gi       503Mi       691Mi       7,0Gi       6,5Gi\nSwap:         7,6Gi       234Mi       7,4Gi\n")))}m.isMDXComponent=!0}}]);