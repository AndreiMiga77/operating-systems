"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[7957],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(t),h=r,g=m["".concat(p,".").concat(h)]||m[h]||y[h]||s;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=h;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},29:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=t(8168),r=(t(6540),t(5680));const s={},o="Processes",i={unversionedId:"Lab/Compute/processes",id:"Lab/Compute/processes",title:"Processes",description:"A process is simply a running program.",source:"@site/docs/Lab/Compute/processes.md",sourceDirName:"Lab/Compute",slug:"/Lab/Compute/processes",permalink:"/operating-systems/54/Lab/Compute/processes",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Hardware Perspective",permalink:"/operating-systems/54/Lab/Compute/hardware-perspective"},next:{title:"Threads",permalink:"/operating-systems/54/Lab/Compute/threads"}},p={},l=[{value:"Sum of the Elements in an Array",id:"sum-of-the-elements-in-an-array",level:2},{value:"Spreading the Work Among Other Processes",id:"spreading-the-work-among-other-processes",level:2},{value:"Practice: Baby steps - Python",id:"practice-baby-steps---python",level:3},{value:"Practice: High level - Python",id:"practice-high-level---python",level:3},{value:"Practice: Lower level - C",id:"practice-lower-level---c",level:3},{value:"Practice: Wait for Me",id:"practice-wait-for-me",level:3},{value:"Practice: <code>fork()</code>",id:"practice-fork",level:3}],c={toc:l},m="wrapper";function y(e){let{components:n,...s}=e;return(0,r.yg)(m,(0,a.A)({},c,s,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"processes"},"Processes"),(0,r.yg)("p",null,"A process is simply a running program.\nLet's take the ",(0,r.yg)("inlineCode",{parentName:"p"},"ls")," command as a trivial example.\n",(0,r.yg)("inlineCode",{parentName:"p"},"ls")," is a ",(0,r.yg)("strong",{parentName:"p"},"program")," on your system.\nIt has a binary file which you can find and inspect with the help of the ",(0,r.yg)("inlineCode",{parentName:"p"},"which")," command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~$ which ls\n/usr/bin/ls\n\nstudent@os:~$ file /usr/bin/ls\n/usr/bin/ls: ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, BuildID[sha1]=6e3da6f0bc36b6398b8651bbc2e08831a21a90da, for GNU/Linux 3.2.0, stripped\n")),(0,r.yg)("p",null,"When you run it, the ",(0,r.yg)("inlineCode",{parentName:"p"},"ls")," binary stored ",(0,r.yg)("strong",{parentName:"p"},"on the disk")," at ",(0,r.yg)("inlineCode",{parentName:"p"},"/usr/bin/ls")," is read by another application called the ",(0,r.yg)("strong",{parentName:"p"},"loader"),".\nThe loader spawns a ",(0,r.yg)("strong",{parentName:"p"},"process")," by copying some of the contents ",(0,r.yg)("inlineCode",{parentName:"p"},"/usr/bin/ls")," in memory (such as the ",(0,r.yg)("inlineCode",{parentName:"p"},".text"),", ",(0,r.yg)("inlineCode",{parentName:"p"},".rodata")," and ",(0,r.yg)("inlineCode",{parentName:"p"},".data")," sections).\nUsing ",(0,r.yg)("inlineCode",{parentName:"p"},"strace"),", we can see the ",(0,r.yg)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/execve.2.html"},(0,r.yg)("inlineCode",{parentName:"a"},"execve"))," system call:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},'student@os:~$ strace -s 100 ls -a  # -s 100 limits strings to 100 bytes instead of the default 32\nexecve("/usr/bin/ls", ["ls", "-a"], 0x7fffa7e0d008 /* 61 vars */) = 0\n[...]\nwrite(1, ".  ..  content\\tCONTRIBUTING.md  COPYING.md  .git  .gitignore  README.md  REVIEWING.md\\n", 86.  ..  content   CONTRIBUTING.md  COPYING.md  .git  .gitignore  README.md  REVIEWING.md\n) = 86\nclose(1)                                = 0\nclose(2)                                = 0\nexit_group(0)                           = ?\n+++ exited with 0 +++\n')),(0,r.yg)("p",null,"Look at its parameters:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"the path to the ",(0,r.yg)("strong",{parentName:"li"},"program"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"/usr/bin/ls")),(0,r.yg)("li",{parentName:"ul"},"the list of arguments: ",(0,r.yg)("inlineCode",{parentName:"li"},'"ls", "-a"')),(0,r.yg)("li",{parentName:"ul"},"the environment variables: the rest of the syscall's arguments")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"execve")," invokes the loader to load the VAS of the ",(0,r.yg)("inlineCode",{parentName:"p"},"ls")," process ",(0,r.yg)("strong",{parentName:"p"},"by replacing that of the existing process"),".\nAll subsequent syscalls are performed by the newly spawned ",(0,r.yg)("inlineCode",{parentName:"p"},"ls")," process.\nWe will get into more details regarding ",(0,r.yg)("inlineCode",{parentName:"p"},"execve")," ",(0,r.yg)("a",{parentName:"p",href:"/operating-systems/54/Lab/Compute/arena#first-step-system-dissected"},"towards the end of this lab"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Loading of `ls` Process",src:t(5106).A})),(0,r.yg)("h2",{id:"sum-of-the-elements-in-an-array"},"Sum of the Elements in an Array"),(0,r.yg)("p",null,"Let's assume we only have one process on our system, and that process knows how to add the numbers in an array.\nIt can use however many resources it wants, since there is no other process to contest it.\nIt would probably look like the code in ",(0,r.yg)("inlineCode",{parentName:"p"},"support/sum-array/c/sum_array_sequential.c"),".\nThe program also measures the time spent computing the sum.\nLet's compile and run it:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/sum-array/c$ ./sum_array_sequential\nArray sum is: 49945994146\nTime spent: 127 ms\n")),(0,r.yg)("p",null,"You will most likely get a different sum (because the array is made up of random numbers) and a different time than the ones shown above.\nThis is perfectly fine.\nUse these examples qualitatively, not quantitatively."),(0,r.yg)("h2",{id:"spreading-the-work-among-other-processes"},"Spreading the Work Among Other Processes"),(0,r.yg)("p",null,"Due to how it's implemented so far, our program only uses one of our CPU's cores.\nWe never tell it to distribute its workload to other cores.\nThis is wasteful as the rest of our cores remain unused:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~$ lscpu | grep ^CPU\\(s\\):\nCPU(s):                          8\n")),(0,r.yg)("p",null,"We have 7 more cores waiting to add numbers in our array."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"What if we used 100% of the CPU?",src:t(490).A,width:"541",height:"500"})),(0,r.yg)("p",null,"What if we use 7 more processes and spread the task of adding the numbers in this array between them?\nIf we split the array into several equal parts and designate a separate process to calculate the sum of each part, we should get a speedup because now the work performed by each individual process is reduced."),(0,r.yg)("p",null,"Let's take it methodically.\nCompile and run ",(0,r.yg)("inlineCode",{parentName:"p"},"sum_array_processes.c")," using 1, 2, 4 and 8 processes respectively.\nIf your system only has 4 cores (",(0,r.yg)("a",{parentName:"p",href:"https://www.intel.com/content/www/us/en/gaming/resources/hyper-threading.html"},"hyperthreading")," included), limit your runs to 4 processes.\nNote the running times for each number of processes.\nWe expect the speedups compared to our reference run to be 1, 2, 4 and 8 respectively, right?"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/operating-systems/54/Lab/Compute/quiz/processes-speedup"},"Quiz")),(0,r.yg)("p",null,"You most likely did get some speedup, especially when using 8 processes.\nNow we will try to improve this speedup by using ",(0,r.yg)("strong",{parentName:"p"},"threads")," instead."),(0,r.yg)("p",null,"Also notice that we're not using hundreds or thousands of processes.\nAssuming our system has 8 cores, only 8 ",(0,r.yg)("em",{parentName:"p"},"threads")," (we'll see this later in the lab) can run at the same time.\nIn general, ",(0,r.yg)("strong",{parentName:"p"},"the maximum number of threads that can run at the same time is equal to the number of cores"),".\nIn our example, each process only has one thread: its main thread.\nSo by consequence and by forcing the terminology (because it's the main thread of these processes that is running, not the processes themselves), we can only run in parallel a number of processes equal to at most the number of cores."),(0,r.yg)("h3",{id:"practice-baby-steps---python"},"Practice: Baby steps - Python"),(0,r.yg)("p",null,"Run the code in ",(0,r.yg)("inlineCode",{parentName:"p"},"support/create-process/popen.py"),".\nIt simply spawns a new process running the ",(0,r.yg)("inlineCode",{parentName:"p"},"ls")," command using ",(0,r.yg)("a",{parentName:"p",href:"https://docs.python.org/3/library/subprocess.html#subprocess.Popen"},(0,r.yg)("inlineCode",{parentName:"a"},"subprocess.Popen()")),".\nDo not worry about the huge list of arguments that ",(0,r.yg)("inlineCode",{parentName:"p"},"Popen()")," takes.\nThey are used for ",(0,r.yg)("strong",{parentName:"p"},"inter-process-communication"),".\nYou'll learn more about this in the ",(0,r.yg)("a",{parentName:"p",href:"../../../app-interact/"},"Application Interaction chapter"),"."),(0,r.yg)("p",null,"Note that this usage of ",(0,r.yg)("inlineCode",{parentName:"p"},"Popen()")," is not entirely correct.\nYou'll discover why in the next exercise, but for now focus on simply understanding how to use ",(0,r.yg)("inlineCode",{parentName:"p"},"Popen()")," on its own."),(0,r.yg)("p",null,"Now change the command to anything you want.\nAlso give it some arguments.\nFrom the outside, it's as if you were running these commands from the terminal."),(0,r.yg)("h3",{id:"practice-high-level---python"},"Practice: High level - Python"),(0,r.yg)("p",null,"Head over to ",(0,r.yg)("inlineCode",{parentName:"p"},"support/sleepy/sleepy_creator.py"),".\nUse ",(0,r.yg)("inlineCode",{parentName:"p"},"subprocess.Popen()")," to spawn 10 ",(0,r.yg)("inlineCode",{parentName:"p"},"sleep 1000")," processes."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Solve ",(0,r.yg)("inlineCode",{parentName:"p"},"TODO 1"),": use ",(0,r.yg)("inlineCode",{parentName:"p"},"subprocess.Popen()")," to spawn 10 ",(0,r.yg)("inlineCode",{parentName:"p"},"sleep 1000")," processes."),(0,r.yg)("p",{parentName:"li"},"Start the script:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/sleepy$ python3 sleepy_creator.py\n")),(0,r.yg)("p",{parentName:"li"},"Look for the parent process:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-console"},'student@os:~$ ps -e -H -o pid,ppid,cmd | (head -1; grep "python3 sleepy_creator.py")\n')),(0,r.yg)("p",{parentName:"li"},"It is a ",(0,r.yg)("inlineCode",{parentName:"p"},"python3")," process, as this is the interpreter that runs the script, but we call it the ",(0,r.yg)("inlineCode",{parentName:"p"},"sleepy_creator.py")," process for simplicity.\nNo output will be provided by the above command, as the parent process (",(0,r.yg)("inlineCode",{parentName:"p"},"sleepy_creator.py"),") dies before its child processes (the 10 ",(0,r.yg)("inlineCode",{parentName:"p"},"sleep 1000")," subprocesses) finish their execution.\nThe parent process of the newly created child processes is an ",(0,r.yg)("inlineCode",{parentName:"p"},"init"),"-like process: either ",(0,r.yg)("inlineCode",{parentName:"p"},"systemd"),"/",(0,r.yg)("inlineCode",{parentName:"p"},"init")," or another system process that adopts orphan processes.\nLook for the ",(0,r.yg)("inlineCode",{parentName:"p"},"sleep")," child processes using:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~$ ps -e -H -o pid,ppid,cmd | (head -1; grep sleep)\n PID    PPID         CMD\n4164    1680     sleep 1000\n4165    1680     sleep 1000\n4166    1680     sleep 1000\n4167    1680     sleep 1000\n4168    1680     sleep 1000\n4169    1680     sleep 1000\n4170    1680     sleep 1000\n4171    1680     sleep 1000\n4172    1680     sleep 1000\n4173    1680     sleep 1000\n")),(0,r.yg)("p",{parentName:"li"},"Notice that the child processes do not have ",(0,r.yg)("inlineCode",{parentName:"p"},"sleepy_creator.py")," as a parent.\nWhat's more, as you saw above, ",(0,r.yg)("inlineCode",{parentName:"p"},"sleepy_creator.py")," doesn't even exist anymore.\nThe child processes have been adopted by an ",(0,r.yg)("inlineCode",{parentName:"p"},"init"),"-like process (in the output above, that process has PID ",(0,r.yg)("inlineCode",{parentName:"p"},"1680")," - ",(0,r.yg)("inlineCode",{parentName:"p"},"PPID")," stands for ",(0,r.yg)("em",{parentName:"p"},"parent process ID"),")."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"/operating-systems/54/Lab/Compute/quiz/parent-of-sleep-processes"},"Quiz"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Solve ",(0,r.yg)("inlineCode",{parentName:"p"},"TODO 2"),": change the code in ",(0,r.yg)("inlineCode",{parentName:"p"},"sleepy_creator.py")," so that the ",(0,r.yg)("inlineCode",{parentName:"p"},"sleep 1000")," processes remain the children of ",(0,r.yg)("inlineCode",{parentName:"p"},"sleepy_creator.py"),".\nThis means that the parent / creator process must ",(0,r.yg)("strong",{parentName:"p"},"not")," exit until its children have finished their execution.\nIn other words, the parent / creator process must ",(0,r.yg)("strong",{parentName:"p"},"wait")," for the termination of its children.\nCheck out ",(0,r.yg)("a",{parentName:"p",href:"https://docs.python.org/3/library/subprocess.html#subprocess.Popen.wait"},(0,r.yg)("inlineCode",{parentName:"a"},"Popen.wait()"))," and add the code that makes the parent / creator process wait for its children.\nBefore anything, terminate the ",(0,r.yg)("inlineCode",{parentName:"p"},"sleep")," processes created above:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~$ pkill sleep\n")),(0,r.yg)("p",{parentName:"li"},"Start the program, again, as you did before:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/sleepy$ python3 sleepy_creator.py\n")),(0,r.yg)("p",{parentName:"li"},"On another terminal, verify that ",(0,r.yg)("inlineCode",{parentName:"p"},"sleepy_creator.py")," remains the parent of the ",(0,r.yg)("inlineCode",{parentName:"p"},"sleep")," processes it creates:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~$ ps -e -H -o pid,ppid,cmd | (head -1; grep sleep)\n PID    PPID                CMD\n16107   9855         python3 sleepy_creator.py\n16108   16107           sleep 1000\n16109   16107           sleep 1000\n16110   16107           sleep 1000\n16111   16107           sleep 1000\n16112   16107           sleep 1000\n16113   16107           sleep 1000\n16114   16107           sleep 1000\n16115   16107           sleep 1000\n16116   16107           sleep 1000\n16117   16107           sleep 1000\n")),(0,r.yg)("p",{parentName:"li"},"Note that the parent process ",(0,r.yg)("inlineCode",{parentName:"p"},"sleepy_creator.py")," (",(0,r.yg)("inlineCode",{parentName:"p"},"PID 16107"),") is still alive, and its child processes (the 10 ",(0,r.yg)("inlineCode",{parentName:"p"},"sleep 1000"),") have its ID as their ",(0,r.yg)("inlineCode",{parentName:"p"},"PPID"),".\nYou've successfully waited for the child processes to finish their execution."))),(0,r.yg)("h3",{id:"practice-lower-level---c"},"Practice: Lower level - C"),(0,r.yg)("p",null,"Now let's see how to create a child process in C.\nThere are multiple ways of doing this.\nFor now, we'll start with a higher-level approach."),(0,r.yg)("p",null,"Go to ",(0,r.yg)("inlineCode",{parentName:"p"},"support/sleepy/sleepy_creator.c")," and use ",(0,r.yg)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man3/system.3.html"},(0,r.yg)("inlineCode",{parentName:"a"},"system"))," to create a ",(0,r.yg)("inlineCode",{parentName:"p"},"sleep 1000")," process."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/operating-systems/54/Lab/Compute/quiz/create-sleepy-process-ending"},"Quiz")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"man")," page also mentions that ",(0,r.yg)("inlineCode",{parentName:"p"},"system")," calls ",(0,r.yg)("inlineCode",{parentName:"p"},"fork()")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"exec()")," to run the command it's given.\nIf you want to find out more about them, head over to the ",(0,r.yg)("a",{parentName:"p",href:"/operating-systems/54/Lab/Compute/arena#mini-shell"},"Arena and create your own mini-shell"),"."),(0,r.yg)("h3",{id:"practice-wait-for-me"},"Practice: Wait for Me"),(0,r.yg)("p",null,"Run the code in ",(0,r.yg)("inlineCode",{parentName:"p"},"support/wait-for-me/wait_for_me_processes.py"),".\nThe parent process creates one child that writes and message to the given file.\nThen the parent reads that message.\nSimple enough, right?\nBut running the code raises a ",(0,r.yg)("inlineCode",{parentName:"p"},"FileNotFoundError"),".\nIf you inspect the file you gave the script as an argument, it does contain a string.\nWhat's going on?"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/operating-systems/54/Lab/Compute/quiz/cause-of-file-not-found-error"},"Quiz")),(0,r.yg)("p",null,"In order to solve race conditions, we need ",(0,r.yg)("strong",{parentName:"p"},"synchronization"),".\nThis is a mechanism similar to a set of traffic lights in a crossroads.\nJust like traffic lights allow some cars to pass only after others have already passed, synchronization is a means for threads to communicate with each other and tell each other to access a resource or not."),(0,r.yg)("p",null,"The most basic form of synchronization is ",(0,r.yg)("strong",{parentName:"p"},"waiting"),".\nConcretely, if the parent process ",(0,r.yg)("strong",{parentName:"p"},"waits")," for the child to end, we are sure the file is created and its contents are written.\nUse ",(0,r.yg)("inlineCode",{parentName:"p"},"join()")," to make the parent wait for its child before reading the file."),(0,r.yg)("h3",{id:"practice-fork"},"Practice: ",(0,r.yg)("inlineCode",{parentName:"h3"},"fork()")),(0,r.yg)("p",null,"Up to now we've been creating processes using various high-level APIs, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"Popen()"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Process()")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"system()"),".\nYes, despite being a C function, as you've seen from its man page, ",(0,r.yg)("inlineCode",{parentName:"p"},"system()")," itself calls 2 other functions: ",(0,r.yg)("inlineCode",{parentName:"p"},"fork()")," to create a process and ",(0,r.yg)("inlineCode",{parentName:"p"},"execve()")," to execute the given command.\nAs you already know from the ",(0,r.yg)("a",{parentName:"p",href:"../../../software-stack/"},"Software Stack")," chapter, library functions may call one or more underlying system calls or other functions.\nNow we will move one step lower on the call stack and call ",(0,r.yg)("inlineCode",{parentName:"p"},"fork()")," ourselves."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"fork()")," creates one child process that is ",(0,r.yg)("em",{parentName:"p"},"almost")," identical to its parent.\nWe say that ",(0,r.yg)("inlineCode",{parentName:"p"},"fork()")," returns ",(0,r.yg)("strong",{parentName:"p"},"twice"),": once in the parent process and once more in the child process.\nThis means that after ",(0,r.yg)("inlineCode",{parentName:"p"},"fork()")," returns, assuming no error has occurred, both the child and the parent resume execution from the same place: the instruction following the call to ",(0,r.yg)("inlineCode",{parentName:"p"},"fork()"),".\nWhat's different between the two processes is the value returned by ",(0,r.yg)("inlineCode",{parentName:"p"},"fork()"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"child process"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"fork()")," returns 0"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"parent process"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"fork()")," returns the PID of the child process (> 0)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"on error"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"fork()")," returns -1, only once, in the initial process")),(0,r.yg)("p",null,"Therefore, the typical code for handling a ",(0,r.yg)("inlineCode",{parentName:"p"},"fork()")," is available in ",(0,r.yg)("inlineCode",{parentName:"p"},"support/create-process/fork.c"),".\nTake a look at it and then run it.\nNotice what each of the two processes prints:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"the PID of the child is also known by the parent"),(0,r.yg)("li",{parentName:"ul"},"the PPID of the child is the PID of the parent")),(0,r.yg)("p",null,"Unlike ",(0,r.yg)("inlineCode",{parentName:"p"},"system()"),", who also waits for its child, when using ",(0,r.yg)("inlineCode",{parentName:"p"},"fork()")," we must do the waiting ourselves.\nIn order to wait for a process to end, we use the ",(0,r.yg)("a",{parentName:"p",href:"https://linux.die.net/man/2/waitpid"},(0,r.yg)("inlineCode",{parentName:"a"},"waitpid()"))," syscall.\nIt places the exit code of the child process in the ",(0,r.yg)("inlineCode",{parentName:"p"},"status")," parameter.\nThis argument is actually a bit-field containing more information than merely the exit code.\nTo retrieve the exit code, we use the ",(0,r.yg)("inlineCode",{parentName:"p"},"WEXITSTATUS")," macro.\nKeep in mind that ",(0,r.yg)("inlineCode",{parentName:"p"},"WEXITSTATUS")," only makes sense if ",(0,r.yg)("inlineCode",{parentName:"p"},"WIFEXITED")," is true, i.e. if the child process finished on its own and wasn't killed by another one or by an illegal action (such as a segfault or illegal instruction) for example.\nOtherwise, ",(0,r.yg)("inlineCode",{parentName:"p"},"WEXITSTATUS")," will return something meaningless.\nYou can view the rest of the information stored in the ",(0,r.yg)("inlineCode",{parentName:"p"},"status")," bit-field ",(0,r.yg)("a",{parentName:"p",href:"https://linux.die.net/man/2/waitpid"},"in the man page"),"."),(0,r.yg)("p",null,"Now modify the example to do the following:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Change the return value of the child process so that the value displayed by the parent is changed.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'Create a child process of the newly created child.\nUse a similar logic and a similar set of prints to those in the support code.\nTake a look at the printed PIDs.\nMake sure the PPID of the "grandchild" is the PID of the child, whose PPID is, in turn, the PID of the parent.'))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Moral of the story"),": Usually the execution flow is:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"fork()"),", followed by")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"wait()")," (called by the parent)")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"exit()"),", called by the child."))),(0,r.yg)("p",null,"The order of last 2 steps may be swapped."))}y.isMDXComponent=!0},490:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/100-percent-cpu-1138186529f154d864f643179e25cea1.jpeg"},5106:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/loading-of-ls-process-0dec67c0d0a826710e06f980224d5eb4.svg"}}]);