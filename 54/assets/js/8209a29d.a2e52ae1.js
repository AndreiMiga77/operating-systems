"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[8838],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var i=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),l=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=l(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(t),h=a,y=c["".concat(s,".").concat(h)]||c[h]||m[h]||o;return t?i.createElement(y,r(r({ref:n},d),{},{components:t})):i.createElement(y,r({ref:n},d))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=h;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[c]="string"==typeof e?e:a,r[1]=p;for(var l=2;l<o;l++)r[l]=t[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1994:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var i=t(8168),a=(t(6540),t(5680));const o={},r="Pipes",p={unversionedId:"Lab/IO/pipes",id:"Lab/IO/pipes",title:"Pipes",description:"When it comes to inter-process communication, so far we know that 2 different processes can mmap() the same file and use that as some sort of shared memory, but this requires writing data to the disk which is slow.",source:"@site/docs/Lab/IO/pipes.md",sourceDirName:"Lab/IO",slug:"/Lab/IO/pipes",permalink:"/operating-systems/54/Lab/IO/pipes",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Redirections",permalink:"/operating-systems/54/Lab/IO/redirections"},next:{title:"Local I/O in Action",permalink:"/operating-systems/54/Lab/IO/local-io-in-action"}},s={},l=[{value:"Anonymous Pipes - <code>pipe()</code>",id:"anonymous-pipes---pipe",level:2},{value:"Practice: Find the Right <del>Hole</del> File Descriptor",id:"practice-find-the-right-hole-file-descriptor",level:2},{value:"Practice: Inheritance",id:"practice-inheritance",level:3},{value:"Practice: Now We Pipe",id:"practice-now-we-pipe",level:3},{value:"Practice: Receive Pipes",id:"practice-receive-pipes",level:3},{value:"Anonymous Pipes: Conclusion",id:"anonymous-pipes-conclusion",level:3},{value:"Named Pipes - <code>mkfifo()</code>",id:"named-pipes---mkfifo",level:2},{value:"Practice: From the CLI",id:"practice-from-the-cli",level:3},{value:"Practice: From the Code - Receive FIFO",id:"practice-from-the-code---receive-fifo",level:3},{value:"Named Pipes: Conclusion",id:"named-pipes-conclusion",level:3}],d={toc:l},c="wrapper";function m(e){let{components:n,...o}=e;return(0,a.yg)(c,(0,i.A)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"pipes"},"Pipes"),(0,a.yg)("p",null,"When it comes to inter-process communication, so far we know that 2 different processes can ",(0,a.yg)("inlineCode",{parentName:"p"},"mmap()")," the same file and use that as some sort of shared memory, but this requires writing data to the disk which is slow.\nThen we know they can ",(0,a.yg)("inlineCode",{parentName:"p"},"wait()"),"/",(0,a.yg)("inlineCode",{parentName:"p"},"waitpid()")," for each other to finish, or better yet, use shared semaphores or mutexes, but these mechanisms aren't good at passing data between processes.\nSo our goals for this session are to learn how to use an IPC (inter-process communication) mechanism that:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"allows transfers between processes, not notifications")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"is faster than reading and writing from/to files"))),(0,a.yg)("h2",{id:"anonymous-pipes---pipe"},"Anonymous Pipes - ",(0,a.yg)("inlineCode",{parentName:"h2"},"pipe()")),(0,a.yg)("p",null,"Have you ever wondered how Bash handles redirecting the ",(0,a.yg)("inlineCode",{parentName:"p"},"stdout")," of a command to the ",(0,a.yg)("inlineCode",{parentName:"p"},"stdin")," of the next command in one-liners such as:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"cat 'log_*.csv' | tr -s ' ' | cut -d ',' -f 2 | sort -u | head -n 10\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"stdout")," of ",(0,a.yg)("inlineCode",{parentName:"p"},"cat")," is the ",(0,a.yg)("inlineCode",{parentName:"p"},"stdin")," of ",(0,a.yg)("inlineCode",{parentName:"p"},"tr"),", whose ",(0,a.yg)("inlineCode",{parentName:"p"},"stdout")," is the ",(0,a.yg)("inlineCode",{parentName:"p"},"stdin")," of ",(0,a.yg)("inlineCode",{parentName:"p"},"cut"),' and so on.\nThis "chain" of commands looks like this:'),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Piped Commands",src:t(5414).A})),(0,a.yg)("p",null,"So here we have a ",(0,a.yg)("strong",{parentName:"p"},"unidirectional")," stream of data that starts from ",(0,a.yg)("inlineCode",{parentName:"p"},"cat"),", is modified by each new command, and then is passed to the next one.\nWe can tell from the image above that the communication channel between any 2 adjacent commands allows one process to write to it while the other reads from it.\nFor example, there is no need for ",(0,a.yg)("inlineCode",{parentName:"p"},"cat")," to read any of ",(0,a.yg)("inlineCode",{parentName:"p"},"tr"),"'s output, only vice versa."),(0,a.yg)("p",null,"Therefore, this communication channel needs 2 ends:\none for reading (from which commands get their input) and another for writing (to which commands write their output).\nIn UNIX, the need for such a channel is fulfilled by the ",(0,a.yg)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/pipe.2.html"},(0,a.yg)("inlineCode",{parentName:"a"},"pipe()")," syscall"),".\nImagine there's a literal pipe between any 2 adjacent commands in the image above, where data is what flows through this pipe ",(0,a.yg)("strong",{parentName:"p"},"in only a single way"),".\nThis is why the ",(0,a.yg)("inlineCode",{parentName:"p"},"|")," operator in Bash is called pipe and why the syscall is also named ",(0,a.yg)("inlineCode",{parentName:"p"},"pipe()"),"."),(0,a.yg)("p",null,"This type of pipe is also called an ",(0,a.yg)("strong",{parentName:"p"},"anonymous pipe"),", because it cannot be identified using a name (i.e. it is not backed by any file).\nThe data written to it is kept in a circular buffer inside the kernel from where it can be then read by the child process.\nThis is faster than writing data to a file, so we achieve both our ",(0,a.yg)("a",{parentName:"p",href:"#pipes"},"initial goals"),"."),(0,a.yg)("h2",{id:"practice-find-the-right-hole-file-descriptor"},"Practice: Find the Right ",(0,a.yg)("del",{parentName:"h2"},"Hole")," File Descriptor"),(0,a.yg)("p",null,"Navigate to ",(0,a.yg)("inlineCode",{parentName:"p"},"support/pipes/anonymous_pipe.c"),".\nCompile and run the code.\nIn another terminal, use ",(0,a.yg)("inlineCode",{parentName:"p"},"lsof")," to see:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"the file descriptors opened by the parent process between the creation of the pipe and the call to ",(0,a.yg)("inlineCode",{parentName:"p"},"fork()"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"the file descriptors opened by the child process"))),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/operating-systems/54/Lab/IO/quiz/pipe-ends"},"Quiz")),(0,a.yg)("p",null,"A simple way to memorise which pipe end is which is to think about ",(0,a.yg)("inlineCode",{parentName:"p"},"stdin")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"stdout"),", respectively.\n",(0,a.yg)("inlineCode",{parentName:"p"},"stdin")," is file descriptor 0 and is mostly for reading and ",(0,a.yg)("inlineCode",{parentName:"p"},"pipedes[0]")," is also for reading.\nConversely, ",(0,a.yg)("inlineCode",{parentName:"p"},"stdout")," is file descriptor 1 and is meant for writing, just like ",(0,a.yg)("inlineCode",{parentName:"p"},"pipedes[1]"),".\nNow you won't confuse them."),(0,a.yg)("h3",{id:"practice-inheritance"},"Practice: Inheritance"),(0,a.yg)("p",null,"An important thing to take note of before we actually use pipes is that file descriptors are ",(0,a.yg)("strong",{parentName:"p"},"inherited")," by the child process from the parent.\nSo if the parent opens some file descriptors (like, say, for a pipe), the child will also be able to use them.\nDon't believe us?"),(0,a.yg)("p",null,"Modify the code in ",(0,a.yg)("inlineCode",{parentName:"p"},"support/pipes/anonymous_pipes.c")," and call ",(0,a.yg)("inlineCode",{parentName:"p"},"wait_for_input()")," from the child process.\nThen use ",(0,a.yg)("inlineCode",{parentName:"p"},"lsof")," again with the PID of the child process to make sure file descriptors 3 and 4 are still open."),(0,a.yg)("h3",{id:"practice-now-we-pipe"},"Practice: Now We Pipe"),(0,a.yg)("p",null,"Now comes the moment you've most likely been waiting for.\nThe code in ",(0,a.yg)("inlineCode",{parentName:"p"},"support/pipes/anonymous_pipes.c")," wants to create something like a client-server dynamic between the parent and the child.\nThe parent reads data from ",(0,a.yg)("inlineCode",{parentName:"p"},"stdin")," and sends it to the child via the pipe they share.\nThe client (parent) ends communication when you type ",(0,a.yg)("inlineCode",{parentName:"p"},'"exit"'),"."),(0,a.yg)("p",null,"You can comment out the calls to ",(0,a.yg)("inlineCode",{parentName:"p"},"wait_for_input()")," if you find them annoying."),(0,a.yg)("p",null,"Sample output:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/pipes$ ./anonymous_pipe\npipedes[0] = 3; pipedes[1] = 4\n * pipe created\n -- Press ENTER to continue ...\necho\n[Child received]: echo\necho\n[Child received]: echo\nto pipe, or not to pipe\n[Child received]: to pipe, or not to pipe\n")),(0,a.yg)("h3",{id:"practice-receive-pipes"},"Practice: Receive Pipes"),(0,a.yg)("p",null,"Use your knowledge of pipes to solve a CTF challenge.\nNavigate to ",(0,a.yg)("inlineCode",{parentName:"p"},"support/receive-challenges")," and look into the files ",(0,a.yg)("inlineCode",{parentName:"p"},"receive_pipe.c")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"send_fd_4.c"),".\nModify ",(0,a.yg)("inlineCode",{parentName:"p"},"receive_pipe.c")," so that it creates a pipe, then spawns a child process.\nThe child will redirect file descriptor 4 to ",(0,a.yg)("inlineCode",{parentName:"p"},"stdout")," and then ",(0,a.yg)("inlineCode",{parentName:"p"},"execlp()")," ",(0,a.yg)("inlineCode",{parentName:"p"},"send_fd_4"),".\n",(0,a.yg)("inlineCode",{parentName:"p"},"send_fd_4")," writes the flag to file descriptor 4 (",(0,a.yg)("inlineCode",{parentName:"p"},"pipefd[1]"),"), so the parent process needs to read it from ",(0,a.yg)("inlineCode",{parentName:"p"},"pipedefd[0]"),"."),(0,a.yg)("p",null,"Once you do this, note that file descriptors are also maintained after calling ",(0,a.yg)("inlineCode",{parentName:"p"},"exec()")," to run a completely new program."),(0,a.yg)("p",null,"Now, if you want to use pipes even more, go over to ",(0,a.yg)("a",{parentName:"p",href:"/operating-systems/54/Lab/IO/arena#mini-shell-with-blackjack-and-pipes"},"the Arena")," and add support for pipes to the mini-shell you've previously worked on."),(0,a.yg)("h3",{id:"anonymous-pipes-conclusion"},"Anonymous Pipes: Conclusion"),(0,a.yg)("p",null,"Anonymous pipes give allow us to efficiently transmit data between 2 processes, as no disk access is required.\nHowever, they still have one major limitation."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/operating-systems/54/Lab/IO/quiz/anonymous-pipes-limitation"},"Quiz")),(0,a.yg)("p",null,"The answer to this is to employ ",(0,a.yg)("em",{parentName:"p"},"some")," filesystem support."),(0,a.yg)("h2",{id:"named-pipes---mkfifo"},"Named Pipes - ",(0,a.yg)("inlineCode",{parentName:"h2"},"mkfifo()")),(0,a.yg)("p",null,"We will give up on some performance by writing data to a file, but the reading and writing to the file must behave just like using a named pipe:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"reading doesn't block while there's still data in the pipe"),(0,a.yg)("li",{parentName:"ul"},"reading from an empty pipe stalls the current thread until data becomes available.\nThis is one of the cases where ",(0,a.yg)("inlineCode",{parentName:"li"},"read()")," might not return as many bytes as we requested.\nRemember:\nalways use loops with ",(0,a.yg)("inlineCode",{parentName:"li"},"read()")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"write()"))),(0,a.yg)("p",null,"Because this pipe uses a file, which must have a name, it is called a ",(0,a.yg)("strong",{parentName:"p"},"named pipe"),"."),(0,a.yg)("h3",{id:"practice-from-the-cli"},"Practice: From the CLI"),(0,a.yg)("p",null,"First, let's use named pipes from the terminal.\nUse the ",(0,a.yg)("inlineCode",{parentName:"p"},"mkfifo")," command to create one such file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~$ mkfifo fifo\n\nstudent@os:~$ ls -l fifo\nprw-rw-r-- 1 student student 0 Nov 22 23:20 fifo|\n")),(0,a.yg)("p",null,"The fact that pipes are also called FIFOs should come as no surprise.\nThey act like queues/FIFOs:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"you add data to one end (push/enqueue)"),(0,a.yg)("li",{parentName:"ul"},"you extract data from the other (pop/dequeue)")),(0,a.yg)("p",null,"Also note the ",(0,a.yg)("inlineCode",{parentName:"p"},"p")," at the beginning of the output above.\nIt symbolises the type of this file:\na named ",(0,a.yg)("strong",{parentName:"p"},"pipe"),"."),(0,a.yg)("p",null,"Now let's use it.\nOpen 2 terminals."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"In the first one, use ",(0,a.yg)("inlineCode",{parentName:"p"},"cat")," to read from ",(0,a.yg)("inlineCode",{parentName:"p"},"fifo"),".\nNote that the command is blocked because the pipe is empty, so ",(0,a.yg)("inlineCode",{parentName:"p"},"cat")," has nothing to read.\nThen, in the second terminal, write some message to ",(0,a.yg)("inlineCode",{parentName:"p"},"fifo")," using ",(0,a.yg)("inlineCode",{parentName:"p"},"echo"),".\nIn the first terminal, you should see that ",(0,a.yg)("inlineCode",{parentName:"p"},"cat")," has finished, and the message has appeared there.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Now do it the other way around:\nfirst ",(0,a.yg)("inlineCode",{parentName:"p"},"echo")," some string into the pipe and ",(0,a.yg)("strong",{parentName:"p"},"then")," read it with ",(0,a.yg)("inlineCode",{parentName:"p"},"cat"),".\nNote that now the ",(0,a.yg)("inlineCode",{parentName:"p"},"echo")," command is blocked.\nNow ",(0,a.yg)("inlineCode",{parentName:"p"},"cat")," should end immediately, and the string should appear because we have already placed some data in the pipe.\nAlso, the previous ",(0,a.yg)("inlineCode",{parentName:"p"},"echo")," should finish now."))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Remember:"),"\n",(0,a.yg)("strong",{parentName:"p"},"Reading from a pipe blocks while the pipe is empty."),"\n",(0,a.yg)("strong",{parentName:"p"},"Writing to a pipe blocks until it is empty.")),(0,a.yg)("h3",{id:"practice-from-the-code---receive-fifo"},"Practice: From the Code - Receive FIFO"),(0,a.yg)("p",null,"The libc function with which we can create named pipes is...\n",(0,a.yg)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man3/mkfifo.3.html"},(0,a.yg)("inlineCode",{parentName:"a"},"mkfifo()")),".\nYou weren't expecting this, were you?\nIts underlying syscall is ",(0,a.yg)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/mknodat.2.html"},(0,a.yg)("inlineCode",{parentName:"a"},"mknod()")),", which simply creates a file of whatever type we specify, but that's besides the point."),(0,a.yg)("p",null,"Navigate to ",(0,a.yg)("inlineCode",{parentName:"p"},"support/receive-challenges/")," and look into ",(0,a.yg)("inlineCode",{parentName:"p"},"receive_fifo.c")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"send_fifo.c"),".\nFollow the ",(0,a.yg)("inlineCode",{parentName:"p"},"TODO"),"s in the former file to read the flag that the latter writes into the named pipe.\nNote that after you create the named pipe, you have to read from it like you would from any regular file."),(0,a.yg)("h3",{id:"named-pipes-conclusion"},"Named Pipes: Conclusion"),(0,a.yg)("p",null,"It is nice to remember that named pipes sacrifice little to no performance when compared to anonymous pipes.\nWhile it may seem that the data being passed through them is written to the disk, then read and overwritten, this is not the case.\nThe FIFO file is just a handler within the filesystem that is used to write data to a buffer inside the kernel.\nThis buffer holds the data that is passed between processes, not the filesystem.\nSo we still don't break our 2 desires from the beginning of this section:\nto allow data transfer and to do so efficiently."))}m.isMDXComponent=!0},5414:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/piped-commands-118a36fba312c6bea5270dba74d653e2.svg"}}]);