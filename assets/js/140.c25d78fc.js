(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{463:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("在计算机系统中运行程序时，问题经常发生，而且通常很难找到根源。幸运的是，有一种叫做 coredump 的文件可以帮助我们找到问题的源头。本文将解释什么是 coredump，它是如何工作的，以及如何利用它来定位问题。")]),t._v(" "),s("h2",{attrs:{id:"_01-什么是-coredump"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_01-什么是-coredump"}},[t._v("#")]),t._v(" 01 什么是 coredump")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("Core dump（核心转储）是指在程序运行过程中发生错误或异常时，操作系统将程序的内存内容保存到磁盘上的一种文件。这个文件包含了程序崩溃时的内存状态，包括变量的值、函数调用栈、寄存器状态等信息。通过分析 coredump 文件，可以了解程序崩溃的原因，以便进行调试和修复。")]),t._v(" "),s("h3",{attrs:{id:"_1-1-ulimit-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-ulimit-命令"}},[t._v("#")]),t._v(" 1.1 ulimit 命令")]),t._v(" "),s("p",[t._v("要生成 core dump 文件，通常需要在操作系统中设置相应的配置。在 Linux 和 Unix 系统中，可以使用 ulimit 命令设置 core dump 文件的大小限制，并使用 gcore 或 kill -SIGQUIT 命令生成 core dump 文件。")]),t._v(" "),s("p",[s("code",[t._v("ulimit")]),t._v(" 是 Unix 和 Linux 系统中的内置命令，用于控制用户级别的系统资源限制。这些资源包括文件大小、进程数、核心文件大小、堆栈大小等等。以下是一些使用 ulimit 的基础知识。")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("ulimit -a")]),t._v(" 可以列出所有的限制，每一行都对应一个资源类型和其对应的限制。\n以下是一些比较常用的 ulimit 选项：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("ulimit -u")]),t._v(" : 查看用户可以用的最大进程数。")]),t._v(" "),s("li",[s("code",[t._v("ulimit -n")]),t._v(" : 文件描述符的最大个数，即一个进程可以同时打开的最大文件数。")]),t._v(" "),s("li",[s("code",[t._v("ulimit -d")]),t._v(" : 一个进程可以使用的最大数据段大小，单位为KB。")]),t._v(" "),s("li",[s("code",[t._v("ulimit -s")]),t._v(" : 最大堆栈大小，单位为KB。")]),t._v(" "),s("li",[s("code",[t._v("ulimit -c")]),t._v(" : 生成coredump文件的最大大小，单位为KB。")]),t._v(" "),s("li",[s("code",[t._v("ulimit -v")]),t._v(" : 进程虚拟内存的最大值，单位KB。")])]),t._v(" "),s("p",[t._v("我们可以在命令后添加具体的数值来设置对应的资源限制，例如：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("ulimit -n 1024")]),t._v(" : 设置最大可以打开的文件描述符数为1024。")]),t._v(" "),s("li",[s("code",[t._v("ulimit -c unlimited")]),t._v(" : 设置coredump的大小为无限。")])]),t._v(" "),s("p",[t._v("需要注意的是，ulimit 命令设置的资源限制是以 Shell 环境为单位的，而不是全局性的。也就是说，在一个 Shell 环境中设置的资源限制，并不会影响到其他的 Shell 环境。同时，这些限制只对当前 Shell 环境以及它派生出来的子进程生效，对已经存在的其他进程没有影响。")]),t._v(" "),s("p",[t._v("总的来说，ulimit 命令是一个很有用的工具，它可以帮助我们控制进程对系统资源的使用，从而防止一些程序错误导致系统资源的耗尽。\n3")]),t._v(" "),s("h3",{attrs:{id:"_1-2-coredump-实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-coredump-实例"}},[t._v("#")]),t._v(" 1.2 coredump 实例")]),t._v(" "),s("p",[s("strong",[t._v("1. ulimit 查看资源限制")])]),t._v(" "),s("p",[t._v("一般情况下如果 coredump 文件没有生成，很大可能是由于受到资源限制，使用 ulimit命令查看和设置资源限制")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("ulimit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v("\t\t\t\t\t\t "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看是否开启 core，0 表示关闭 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("ulimit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("filesize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置 core 文件大小")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("ulimit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" unlimited  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置 core 文件大小为无限")]),t._v("\n")])])]),s("p",[s("strong",[t._v("2. 设置 core 文件路径")])]),t._v(" "),s("p",[t._v("在 Linux 系统中，core dump 文件的路径是由 "),s("code",[t._v("/proc/sys/kernel/core_pattern")]),t._v(" 定义的，如果这个文件不存在，或者内容为空，那么 core dump 文件就会生成在当前目录下")]),t._v(" "),s("p",[t._v("也可以通过修改 "),s("code",[t._v("/proc/sys/kernel/core_pattern")]),t._v(" 指定 core 文件生成的路径和文件名")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前 core 文件路径")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /proc/sys/kernel/core_pattern \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定 core 文件路径")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yourpath/core.%e.%p.%h.%t"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /proc/sys/kernel/core_pattern\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sysctl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-w")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("kernel.core_pattern")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("yourpath/core.%e.%p.%h.%t  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# # 也可以使用 sysctl 修改 kernel.core_pattern 来指定 core 文件路径")]),t._v("\n")])])]),s("p",[t._v("其中 core 文件名称定义中，可以使用占位符保留一些有用信息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("%p: pid\n%u: uid\n%g: gid\n%s: signal number\n%t: UNIX "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" of dump\n%h: "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hostname")]),t._v("\n%e: executable filename\n")])])]),s("p",[s("strong",[t._v("3. 空指针 core 示例")])]),t._v(" "),s("p",[t._v("下面这个例子中试图通过一个 NULL 指针来访问内存，这是非法的，因为 NULL 指针并没有指向任何有效的内存位置，因而在运行时，操作系统将识别这个非法操作，并生成一个 Coredump 文件。")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ptr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ptr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("编译运行这段程序如下，可以看到触发了 core dumped")]),t._v(" "),s("p",[t._v("需要注意的是编译的时候记得加上 "),s("code",[t._v("-g")]),t._v(" 参数保留调试信息，否则使用 GDB 调试时会找不到函数名或者变量名")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ gcc "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v(" main.c "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" main\n$ ./main\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("277")]),t._v(" segmentation fault "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("core dumped"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  ./main\n")])])]),s("p",[s("strong",[t._v("4. 使用 GDB 调试 core 文件")])]),t._v(" "),s("p",[t._v("找到 core 文件，然后使用命令 "),s("code",[t._v("gdb [exec file] [core file]")]),t._v(" 调试 core 文件")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" your-core-path\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\ncore.main\n$ gdb ~/main ./core.main\n")])])]),s("p",[t._v("GDB 运行后会停止在发生异常的代码处，并且将发生异常的代码打印出来，如下图中指出了异常位于 mian.c 的第 5 行代码 "),s("code",[t._v("*ptr")]),t._v(" 是一个空指针")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://img-blog.csdnimg.cn/5459a44df5f9448aa7eb35507df96d40.png#pic_center",alt:"pic"}}),t._v(" "),s("h2",{attrs:{id:"_02-coredump-是怎么发生的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_02-coredump-是怎么发生的"}},[t._v("#")]),t._v(" 02 coredump 是怎么发生的")]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"_2-1-程序运行错误导致-coredump"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-程序运行错误导致-coredump"}},[t._v("#")]),t._v(" 2.1 程序运行错误导致 coredump")]),t._v(" "),s("p",[t._v("程序执行非法操作时，例如解引用空指针，除数为零，或者访问越界的内存，操作系统就会生成一个 coredump 文件并终止程序运行。以下是一些常见导致 core dump 发生的原因：")]),t._v(" "),s("ul",[s("li",[t._v("空指针引用：当程序试图访问一个空指针时，操作系统会捕获这个错误并生成 core dump 文件")]),t._v(" "),s("li",[t._v("内存越界：当程序试图访问超出其分配内存范围的位置时，可能会导致内存越界错误，从而触发 core dump")]),t._v(" "),s("li",[t._v("栈溢出：当程序的函数调用栈超过其允许的最大深度时，可能会发生栈溢出错误，导致 core dump 发生")]),t._v(" "),s("li",[t._v("除零错误：当程序试图除以零时，会触发除零错误，操作系统可能会生成 core dump 文件")]),t._v(" "),s("li",[t._v("非法指令：当程序执行了无效或非法的机器指令时，操作系统通常会生成 core dump 文件")]),t._v(" "),s("li",[t._v("内存分配错误：当程序遇到内存分配错误，如申请内存失败或释放已释放的内存时，可能会触发 core dump")])]),t._v(" "),s("p",[t._v("这些程序执行非法操作时，操作系统会向指定进程发送特定信号（signal）终止程序运行并生成 coredump，一些常见信号有：")]),t._v(" "),s("ul",[s("li",[t._v("SIGSEGV (信号值 11)：当一个进程由于无效的内存访问，如解引用空指针，或访问受保护的内存区域时，系统会向它发送此信号。这是生成coredump最常见的原因")]),t._v(" "),s("li",[t._v("SIGABRT (信号值 6)：当进程自身检测到一个无法恢复的问题，并选择主动终止时，它会发送这个信号给自己。例如，C库函数abort()就会发送这个信号")]),t._v(" "),s("li",[t._v("SIGILL (信号值 4)：当CPU检测到进程试图执行一条无效或未定义的指令时，系统会发送此信号。一个可能的原因是代码的内存被错误地当作数据修改")]),t._v(" "),s("li",[t._v("SIGFPE (信号值 8)：在数学运算错误时发送，比如除以零或浮点溢出")]),t._v(" "),s("li",[t._v("SIGBUS (信号值 7)：用于处理错误的内存访问，但这个信号在不同的系统和架构下含义可能会有所不同。在某些系统中，它用于处理对齐（alignment）问题")]),t._v(" "),s("li",[t._v("SIGQUIT (信号值 3)：用户通过控制台（通常是按Ctrl+\\）向进程发送此信号，它不仅会停止进程的运行，还会生成coredump")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Signal")]),t._v(" "),s("th",[t._v("Value")]),t._v(" "),s("th",[t._v("Action")]),t._v(" "),s("th",[t._v("Comment")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("SIGSEGV")]),t._v(" "),s("td",[t._v("11")]),t._v(" "),s("td",[t._v("Core")]),t._v(" "),s("td",[t._v("Invalid memory reference")])]),t._v(" "),s("tr",[s("td",[t._v("SIGABRT")]),t._v(" "),s("td",[t._v("6")]),t._v(" "),s("td",[t._v("Core")]),t._v(" "),s("td",[t._v("Abort signal from abort")])]),t._v(" "),s("tr",[s("td",[t._v("SIGILL")]),t._v(" "),s("td",[t._v("4")]),t._v(" "),s("td",[t._v("Core")]),t._v(" "),s("td",[t._v("Illegal Instruction")])]),t._v(" "),s("tr",[s("td",[t._v("SIGFPE")]),t._v(" "),s("td",[t._v("8")]),t._v(" "),s("td",[t._v("Core")]),t._v(" "),s("td",[t._v("Floating point exception")])]),t._v(" "),s("tr",[s("td",[t._v("SIGBUS")]),t._v(" "),s("td",[t._v("7")]),t._v(" "),s("td",[t._v("Core")]),t._v(" "),s("td",[t._v("Bus error (bad memory access)")])]),t._v(" "),s("tr",[s("td",[t._v("SIGQUIT")]),t._v(" "),s("td",[t._v("3")]),t._v(" "),s("td",[t._v("Core")]),t._v(" "),s("td",[t._v("Quit from keyboard")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-2-coredump-文件生成原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-coredump-文件生成原理"}},[t._v("#")]),t._v(" 2.2 coredump 文件生成原理")]),t._v(" "),s("blockquote",[s("p",[t._v("本节参考如有侵权，请告知：https://cloud.tencent.com/developer/article/1860631")])]),t._v(" "),s("p",[t._v("coredump 文件的产生过程如下图所示：")]),t._v(" "),s("p",[t._v("Linux 内核实现中使用一个复杂的任务结构（task_struct）结构体来代表系统中的每个进程或线程，这个结构体被定义在 "),s("code",[t._v("include/linux/sched.h")]),t._v(" 文件中，其中也包含了记录信号处理相关的属性，如用于存放待处理信号的 pending 信号队列和阻塞信号 blocked 等。")]),t._v(" "),s("p",[t._v("当一个信号被发送到进程时，它首先被添加到该进程的 pending 信号队列中。而内核在进程切换的上下文切换中，在运行被调用进程时会先检查这个 pending 信号队列。如果有待处理的信号，内核会在恢复进程运行前，调用信号的处理函数。这个过程大多数发生在 "),s("code",[t._v("do_signal")]),t._v(" 函数中，这个函数在每次中断返回，系统调用返回，或者任何可能会改变进程状态的操作后执行。")]),t._v(" "),s("p",[t._v("如果一个信号是致命的（如 SIGSEGV, SIGABRT），并且进程并没有注册处理函数来处理它，那么内核会根据这个信号的默认行为来操作，比如可能会终止进程，或者产生 coredump 文件等。\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/49403a93fefb43e885cf7e9bdf0aa617.png#pic_center",alt:"在这里插入图片描述"}}),t._v("\n通过上述分析，coredump 文件生成的过程可以总结为：程序运行产生 core 相关的信号 signal；do_signal 函数处理信号；如果默认行为是 Core 则调用 do_coredump 函数生成 core 文件。下面结合源码进一步分析该过程")]),t._v(" "),s("p",[s("strong",[t._v("1. 信号处理过程")])]),t._v(" "),s("p",[t._v("在进程切换的上下文切换时，检查信号队列 pending 是否有待处理信号，有则调用 do_singal 函数处理，该函数中使用 "),s("code",[t._v("get_signal_to_deliver")]),t._v(" 函数从进程的信号队列 pending 中获取一个信号，然后根据信号的类型来进行不同的操作。")]),t._v(" "),s("p",[s("code",[t._v("get_signal_to_deliver")]),t._v(" 函数中处理 coredump 相关信号的代码实现如下，首先使用 "),s("code",[t._v("dequeue_signal")]),t._v(" 函数获取信号，然后使用 "),s("code",[t._v("sig_kernel_coredump")]),t._v(" 函数判断该信号是否为 coredump 相关信号，如果是则执行 core 相关动作")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_signal_to_deliver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("siginfo_t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("k_sigaction")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("return_ka"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("pt_regs")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("regs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("cookie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("sigset_t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("mask "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("blocked"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" signr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 从进程信号队列中获取一个信号")]),t._v("\n        signr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dequeue_signal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 判断是否会生成 coredump 文件的信号")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sig_kernel_coredump")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. 调用 do_coredump() 函数生成 coredump 文件")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("do_coredump")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("signr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" signr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" regs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("2. 生成 coredump 文件")])]),t._v(" "),s("p",[t._v("当 coredump 相关信号被处理时，调用内核就会调用 "),s("code",[t._v("do_coredump")]),t._v(" 函数来生成 coredump 文件，该函数核心代码如下，首先判断 ulimit 的资源限制情况，如果可用则创建 coredump 文件，最后将当前进程的寄存器、内存管理等相关信息写入到该文件中。")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("do_coredump")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" signr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" exit_code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("pt_regs")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("regs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" corename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CORENAME_MAX_SIZE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mm_struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("mm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" current"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("mm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("linux_binfmt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("binfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("inode")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("inode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("file")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" retval "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" fsuid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" current"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("fsuid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" flag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ispipe "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    binfmt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" current"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("binfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前进程所使用的可执行文件格式（如ELF格式）")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 判断当前进程可生成的 coredump 文件大小是否受到资源限制")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("signal"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("rlim"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("RLIMIT_CORE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rlim_cur "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" binfmt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("min_coredump"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("goto")]),t._v(" fail_unlock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 生成 coredump 文件名")]),t._v("\n    ispipe "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format_corename")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("corename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" core_pattern"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" signr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. 创建 coredump 文件")]),t._v("\n    file "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("filp_open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("corename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" O_CREAT"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("O_NOFOLLOW"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("O_LARGEFILE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4. 把进程的内存信息写入到 coredump 文件中")]),t._v("\n    retval "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" binfmt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("core_dump")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" regs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfail_unlock"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" retval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1860631",target:"_blank",rel:"noopener noreferrer"}},[t._v("一文读懂 | coredump文件是如何生成的-腾讯云开发者社区-腾讯云"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/636765151",target:"_blank",rel:"noopener noreferrer"}},[t._v("core dump 路径定义以及监控"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.aliyun.com/article/1133857#:~:text=3.%E8%B0%83%E8%AF%95core%E6%96%87%E4%BB%B6%20%EF%BC%881%EF%BC%89%E6%96%B9%E6%B3%951%3A%20gdb%20%5Bexec%20file%5D%20%5Bcore%20file%5D%20%E7%84%B6%E5%90%8E%E6%89%A7%E8%A1%8Cbt%E7%9C%8B%E5%A0%86%E6%A0%88%E4%BF%A1%E6%81%AF%EF%BC%9A,-c%20%5Bcore%20file%5D%2C%E7%84%B6%E5%90%8E%20file%20%5Bexec%20file%5D%2C%E6%9C%80%E5%90%8E%E5%86%8D%E4%BD%BF%E7%94%A8%20bt%20%E6%9F%A5%E7%9C%8B%E9%94%99%E8%AF%AF%E4%BD%8D%E7%BD%AE%EF%BC%9A",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux下gdb调试生成core文件并调试core文件-阿里云开发者社区"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/112970875",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux进程描述符task_struct结构体详解"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/46605905",target:"_blank",rel:"noopener noreferrer"}},[t._v("gdb调试coredump（使用篇）"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);