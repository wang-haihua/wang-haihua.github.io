(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{454:function(t,e,a){"use strict";a.r(e);var _=a(7),v=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_01-用户与用户组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_01-用户与用户组"}},[t._v("#")]),t._v(" 01 用户与用户组")]),t._v(" "),e("p",[t._v("Linux 是一个多用户系统，它允许多个用户同时登陆主机，并为他们分配不同的资源和工作环境进行使用。当然，不同的用户都有文件的私有需求，所以设置不同用户文件的权限管理十分重要。")]),t._v(" "),e("p",[t._v("Linux 中一般将文件访问权限的身份分为三种角色："),e("strong",[t._v("文件所有者、用户组成员、其他人（owner/group/others）")])]),t._v(" "),e("h3",{attrs:{id:"_1-1-用户身份"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-用户身份"}},[t._v("#")]),t._v(" 1.1 用户身份")]),t._v(" "),e("h4",{attrs:{id:"_1-1-1-文件所有者-owner"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-文件所有者-owner"}},[t._v("#")]),t._v(" 1.1.1 文件所有者 owner")]),t._v(" "),e("p",[t._v("文件所有者角色是 Linux 系统保护"),e("strong",[t._v("用户私有空间")]),t._v("的重要方式。")]),t._v(" "),e("p",[t._v("当多个用户同时登录主机时，文件所有者对文件具有绝对访问权限并可以限制其他用户对该文件的访问权限，其他用户如需访问该文件，需要文件所有者授权才可访问。")]),t._v(" "),e("h4",{attrs:{id:"_1-1-2-用户组成员-group"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-用户组成员-group"}},[t._v("#")]),t._v(" 1.1.2 用户组成员 group")]),t._v(" "),e("p",[t._v("用户组成员角色是为了方便用户在"),e("strong",[t._v("局部范围内共享文件")]),t._v("内容。")]),t._v(" "),e("p",[t._v("例如，在团队开发中，如果 Linux 系统仅提供 owner 和 others 角色，那么当文件所有者想给其他团队成员开放文件访问权限时，就会出现文件直接对团队之外角色公开的情况。")]),t._v(" "),e("p",[t._v("将文件所有者之外的用户角色区分为用户组成员 group 和其他人 others，可以在向与文件所有者划分在一个用户组的用户组成员开放文件访问权限的同时，对其他用户保持私用。")]),t._v(" "),e("h4",{attrs:{id:"_1-1-3-其他人-others"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-其他人-others"}},[t._v("#")]),t._v(" 1.1.3 其他人 others")]),t._v(" "),e("p",[t._v("其他人角色是用户"),e("strong",[t._v("公开文件访问权限")]),t._v("的方式。")]),t._v(" "),e("p",[t._v("文件所有者可以通过向 others 角色开放文件访问权限，向与文件所有者没有任何联系的其他用户共享文件。")]),t._v(" "),e("p",[t._v("当然，除了 owner/group/others 三种用户之外，还有掌控一切的"),e("strong",[t._v("系统用户 root")]),t._v("，root 用户可以访问主机中的一切文件。root 用户所在的用户组称为 "),e("strong",[t._v("root组")]),t._v("，处于 root 组的普通用户，能够通过 sudo 命令获取 root 权限。")]),t._v(" "),e("h3",{attrs:{id:"_1-2-用户管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-用户管理"}},[t._v("#")]),t._v(" 1.2 用户管理")]),t._v(" "),e("h4",{attrs:{id:"_1-2-1-用户管理相关文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-用户管理相关文件"}},[t._v("#")]),t._v(" 1.2.1 用户管理相关文件")]),t._v(" "),e("p",[t._v("在 Linux 系统中，默认情况下，系统上所有的用户账号通过用户 ID (User ID ，简称 UID)、一个是用户组 ID (Group ID ，简称 GID)标识，并都记录在 "),e("code",[t._v("/etc/passwd")]),t._v(" 这个文件内的，对应的密码则是记录在 "),e("code",[t._v("/etc/shadow")]),t._v(" 文件下。 此外，Linux 所有的用户组信息和密码都纪录在 "),e("code",[t._v("/etc/group")]),t._v(" 与 "),e("code",[t._v("/etc/gshadow")]),t._v(" 内。")]),t._v(" "),e("p",[t._v("这些文件中，每一行表示一条记录，每条记录中个属性字段通过冒号 "),e("code",[t._v(":")]),t._v("分隔。")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("/etc/passwd")])])]),t._v(" "),e("blockquote",[e("p",[t._v("该文件管理用户 UID 和 GID 等重要参数。")]),t._v(" "),e("p",[t._v("每一行都代表一个用户账号，其中包括一些系统正常运行所必须的系统账号，例如 bin, daemon, adm, nobody 等。")]),t._v(" "),e("img",{staticClass:"no-zoom",staticStyle:{margin:"0 auto"},attrs:{src:t.$withBase("/picture/03.分布式/01.Linux操作系统编程/01.Linux基础/img-05/etc-passwd.png"),alt:"etc-passwd.png"}}),t._v(" "),e("p",[t._v("冒号 "),e("code",[t._v(":")]),t._v("分隔开的 7 个字段含义是：")]),t._v(" "),e("ul",[e("li",[t._v("账号名称：用户账号的 username")]),t._v(" "),e("li",[t._v("口令：即账号密码，但是现在的账号密码都保持在 "),e("code",[t._v("/etc/shadow")]),t._v(" 文件中了，此处使用 x 符号占位")]),t._v(" "),e("li",[t._v("UID：用户标识符 User ID，root 用户的 UID 是 0")]),t._v(" "),e("li",[t._v("GID：用户组标识符 Group ID")]),t._v(" "),e("li",[t._v("用户账号描述：没实际含义")]),t._v(" "),e("li",[t._v("用户目录：用户空间")]),t._v(" "),e("li",[t._v("shell：用户登录系统后与主机进行交互的命令行工具，默认是 "),e("code",[t._v("/bin/bash")])])])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("code",[t._v("/etc/shadow")])])]),t._v(" "),e("blockquote",[e("p",[t._v("该文件管理用户的登录口令。")]),t._v(" "),e("p",[t._v("冒号 "),e("code",[t._v(":")]),t._v("分隔开的 9 个字段含义是：")]),t._v(" "),e("ul",[e("li",[t._v("账号名称：用户账号的 username")]),t._v(" "),e("li",[t._v("口令：经过编码加密的账号密码")]),t._v(" "),e("li",[t._v("最近更动口令的日期")]),t._v(" "),e("li",[t._v("口令不可被更动的天数")]),t._v(" "),e("li",[t._v("口令需要重新变更的天数")]),t._v(" "),e("li",[t._v("口令需要变更期限前的警告天数")]),t._v(" "),e("li",[t._v("口令过期后的账号宽限时间")]),t._v(" "),e("li",[t._v("账号失效日期")])])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[e("code",[t._v("/etc/group")])])]),t._v(" "),e("blockquote",[e("p",[t._v("该文件管理用户组信息，与 "),e("code",[t._v("/etc/passwd")]),t._v(" 中的 GID 对应。")]),t._v(" "),e("p",[t._v("每一行代表一个群组，冒号 "),e("code",[t._v(":")]),t._v("分隔开的 7 个字段含义是：")]),t._v(" "),e("ul",[e("li",[t._v("用户组名称")]),t._v(" "),e("li",[t._v("用户组口令：一般不需配置，用不到")]),t._v(" "),e("li",[t._v("GID：用户组标识符 Group ID")]),t._v(" "),e("li",[t._v("用户组包含的用户名称：一个账号可以加入多个群组，那某个账号想要加入此群组时，将该账号填入这个字段即可。")])])]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[e("code",[t._v("/etc/gshadow")])])]),t._v(" "),e("blockquote",[e("p",[t._v("用户组口令都不咋用，这个文件的存在感也比较弱......")])]),t._v(" "),e("h4",{attrs:{id:"_1-2-2-用户管理相关命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-用户管理相关命令"}},[t._v("#")]),t._v(" 1.2.2 用户管理相关命令")]),t._v(" "),e("p",[t._v("Linux 提供了一组用户账号和用户组管理命令对账号进行新增、 移除与更改")]),t._v(" "),e("ol",[e("li",[t._v("用户管理命令")])]),t._v(" "),e("blockquote",[e("ul",[e("li",[e("p",[e("code",[t._v("useradd")]),t._v("：新建用户")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("useradd [options] [username]\n")])])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("passwd")]),t._v("：设置或修改用户的口令和口令属性")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("passwd [options] [username]\n")])])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("usermod")]),t._v("：user modify 修改用户的属性")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("usermod [options] [username]\n")])])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("userdel")]),t._v("：user delete 删除指定用户账号")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("userdel [options] [username]\n")])])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("su")]),t._v("：切换用户身份；exit 退出超级用户")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("su [options] [username]\n")])])])])])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("用户组管理命令")])]),t._v(" "),e("blockquote",[e("ul",[e("li",[e("p",[e("code",[t._v("groupadd")]),t._v("：添加用户组")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("groupadd [options] [groupname]\n")])])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("groupmod")]),t._v("：修改用户组属性")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("groupmod [options] [groupname]\n")])])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("groupdel")]),t._v("：删除指定用户组")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("groupdel [options] [groupname]\n")])])])])])]),t._v(" "),e("h2",{attrs:{id:"_02-文件权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_02-文件权限"}},[t._v("#")]),t._v(" 02 文件权限")]),t._v(" "),e("p",[t._v("Linux 系统中文件有第一节中的三种访问角色 owner/group/others，对于文件这三种身份还各有 read/write/execute 三种访问权限。通过这三种角色和访问权限控制可以到来 Linux 系统的如下优势：")]),t._v(" "),e("ul",[e("li",[t._v("系统保护：关于系统服务的文件通常只有 root 角色能访问，可以有效保护系统中的重要文件。")]),t._v(" "),e("li",[t._v("团队开发文件共享：通过设置用户组权限，让团队成员能够共享指定目录下的文件数据。")])]),t._v(" "),e("h3",{attrs:{id:"_2-1-文件属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-文件属性"}},[t._v("#")]),t._v(" 2.1 文件属性")]),t._v(" "),e("p",[t._v("在 Linux 系统中进入任意目录，然后使用 "),e("code",[t._v("ls")]),t._v(" 命令查看当前目录下文件的文件名与相关属性，也可以增加选项参数 "),e("code",[t._v("ls -la")]),t._v(" 显示所有的文件详细的权限与属性。")]),t._v(" "),e("img",{staticClass:"no-zoom",staticStyle:{margin:"0 auto"},attrs:{src:t.$withBase("/picture/03.分布式/01.Linux操作系统编程/01.Linux基础/img-05/file-attri-1.png"),alt:"file-attri-1.png"}}),t._v(" "),e("p",[t._v("如上图所示，list 命令显示的内容中每一行即是一个文件的相关属性，每一条记录的 7 个字段含义如下：")]),t._v(" "),e("img",{staticClass:"no-zoom",staticStyle:{margin:"0 auto"},attrs:{src:t.$withBase("/picture/03.分布式/01.Linux操作系统编程/01.Linux基础/img-05/file-attri.png"),alt:"file-attri.png"}}),t._v(" "),e("ol",[e("li",[e("strong",[t._v("文件类型与权限")])])]),t._v(" "),e("blockquote",[e("p",[t._v("文件类型与权限由 10 个字符构成：")]),t._v(" "),e("img",{staticClass:"no-zoom",staticStyle:{margin:"0 auto"},attrs:{src:t.$withBase("/picture/03.分布式/01.Linux操作系统编程/01.Linux基础/img-05/file-auth.png"),alt:"file-auth.png"}}),t._v(" "),e("p",[t._v("第一个字符代表该文件的类型：")]),t._v(" "),e("ul",[e("li",[t._v("[ d ] 表示目录")]),t._v(" "),e("li",[t._v("[ - ] 表示文件")]),t._v(" "),e("li",[t._v("[ l ] 表示链接")]),t._v(" "),e("li",[t._v("[ b ] 表示装置文件里面的可供储存的接口设备，即可随机存取装置")]),t._v(" "),e("li",[t._v("[ c ] 表示装置文件里面的串行端口设备，例如键盘、鼠标等一次性读取装置")])]),t._v(" "),e("p",[t._v("剩下的 9 个字符，三个为一组分别表示 owner/group/others 三种角色的 read/write/execute 三种访问权限")]),t._v(" "),e("p",[e("strong",[t._v("权限对于文件的意义：")])]),t._v(" "),e("ul",[e("li",[t._v("r (read)：可读取此一文件的实际内容，如读取文本文件的文字内容等；")]),t._v(" "),e("li",[t._v("w (write)：可以编辑、新增或者是修改该文件的内容(但不含删除该文件)；")]),t._v(" "),e("li",[t._v("x (execute)：该文件具有可以被系统执行的权限。")])]),t._v(" "),e("p",[e("strong",[t._v("权限对于目录的意义：")])]),t._v(" "),e("ul",[e("li",[t._v("r (read contents in directory)：表示具有读取目录结构列表的权限，即表示可以查询该目录下的文件名数据（ls 命令查看目录信息）。")]),t._v(" "),e("li",[t._v("w (modify contents of directory)：表示具有向目录写入内容的权限，即可以修改目录的结构列表。例如，创建新的文件或目录、删除文件或目录、修改文件或目录的名称、移动文件或目录到其他位置等。")]),t._v(" "),e("li",[t._v("x (access directory)：表示用户具有进入该目录成为工作目录的权限（cd 命令进入到目录中）。")])])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("strong",[t._v("文件链接数")])])]),t._v(" "),e("blockquote",[e("p",[t._v("Linux 文件系统 Ext2 使用的是以 inode 为基础的文件系统，inode 的内容在记录文件的权限与相关属性，block 区块中才是记录文件实际内容的位置。")]),t._v(" "),e("p",[t._v("文件属性的这个字段就是记录的有多少不同的文件连结到相同的一个 inode 号码")])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[e("strong",[t._v("文件所有者")])])]),t._v(" "),e("blockquote",[e("p",[t._v("表示文件或目录的所有者名称")])]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[e("strong",[t._v("所属用户组")])])]),t._v(" "),e("blockquote",[e("p",[t._v("表示文件或目录所属用户组的名称")])]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[e("strong",[t._v("文件大小")])])]),t._v(" "),e("blockquote",[e("p",[t._v("表示文件的容量大小，默认单位为字节 bytes")])]),t._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[e("strong",[t._v("时间戳")])])]),t._v(" "),e("blockquote",[e("p",[t._v("记录文件的创建日期或者是最近的修改日期。")]),t._v(" "),e("p",[t._v("记录的时间一般为 月/日/时间 的形式，如果这个文件被修改的时间跨度过大，那么时间部分会仅显示年份。")])]),t._v(" "),e("ol",{attrs:{start:"7"}},[e("li",[e("strong",[t._v("文件名称")])])]),t._v(" "),e("blockquote",[e("p",[t._v("文件的名称，如果文件名以 "),e("code",[t._v(".")]),t._v("开头则说明他是隐藏文件")])]),t._v(" "),e("h3",{attrs:{id:"_2-2-文件属性修改命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-文件属性修改命令"}},[t._v("#")]),t._v(" 2.2 文件属性修改命令")]),t._v(" "),e("p",[t._v("文件属性的修改命令分别针对文件所有者和所属用户组有 "),e("code",[t._v("chown, chgrp")]),t._v("，文件权限修改命名则是 "),e("code",[t._v("chmod")])]),t._v(" "),e("ul",[e("li",[t._v("chown ：改变文件拥有者")]),t._v(" "),e("li",[t._v("chgrp ：改变文件所属群组")]),t._v(" "),e("li",[t._v("chmod ：改变文件的权限")])]),t._v(" "),e("ol",[e("li",[e("code",[t._v("chown")])])]),t._v(" "),e("blockquote",[e("p",[t._v("文件在创建的时候就指定了文件所有者，当将文件复制或移动到其他用户目录下时，就需要变更文件的所有者了，因为复制操作会根据执行命令的用户确定拷贝的文件文件所有者。")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("chown [options] [owner] [filename/directory]\n")])])]),e("p",[t._v("使用该命令修改目录时，可以通过添加 "),e("code",[t._v("-R")]),t._v(" 选项进行递归的持续变更，即连同次目录下的所有文件都变更文件所有者。")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("chown -R [owner] [irectory]\n")])])]),e("p",[t._v("chown 目录还可以顺带修改用户组，使用冒号连接 "),e("code",[t._v("用户:用户组")]),t._v(" 同时修改文件所有者和所属用户组。")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("chown [options] [owner:group] [filename/directory]\n")])])])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("code",[t._v("chgrp")])])]),t._v(" "),e("blockquote",[e("p",[t._v("仅修改文件所属的用户组可以使用 chgrp 命令实现，当然修改时要确保用户组是存在的。")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("chgrp [options] [group] [filename/directory]\n")])])]),e("p",[t._v("如果要修改目录下所有文件的所属用户组，同样的使用 "),e("code",[t._v("-R")]),t._v(" 参数进行递归的持续变更。")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("chgrp -R [group] [directory]\n")])])])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[e("code",[t._v("chmod")])])]),t._v(" "),e("blockquote",[e("p",[t._v("修改文件权限的命令则是 chmod，该命令可以通过数字类型和符号类型两种形式设定文件权限。")]),t._v(" "),e("p",[e("strong",[t._v("数字类型：")])]),t._v(" "),e("p",[t._v("Linux 系统中 read/write/execute 三种访问权限分别对应的数字分数是："),e("code",[t._v("read(4), write(2), execute(1)")])]),t._v(" "),e("p",[t._v("每个用户角色的权限可以用三种访问权限的数字分数累加结果表示，例如文件权限 "),e("code",[t._v("-rwxr-x---")]),t._v("的数字分数表示是 "),e("code",[t._v("750")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("owner = rwx = 4+2+1 = 7\ngroup = r-x = 4+0+1 = 5\nothers= --- = 0+0+0 = 0\n")])])]),e("p",[t._v("使用数字类型的 chmod 权限修改命令形式为：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("number"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("filename/directory"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# example:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-R")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("770")]),t._v(" /data/share\n")])])]),e("p",[e("strong",[t._v("符号类型：")])]),t._v(" "),e("p",[t._v("另一种修改文件权限的方式就是使用符号类型，owner/group/others 三种角色对应的符号表示是："),e("code",[t._v("owner(u), group(g), others(o)")]),t._v("，还有同时表示三种角色的符号："),e("code",[t._v("all(a)")]),t._v("。read/write/execute 三种访问权限的符号表示是："),e("code",[t._v("read(r), write(w), execute(x)")]),t._v("。")]),t._v(" "),e("p",[t._v("基于用户角色和文件权限的符号表示，使用符号 "),e("code",[t._v("+, -, =")]),t._v(" 为不同的用户角色添加、除去和设定不同的文件权限：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("命令")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("角色")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("操作")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("权限")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("对象")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("chmod")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("u/g/o/a")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("+/-/=")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("r/w/x")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("文件或目录")])])])]),t._v(" "),e("p",[t._v("例如，要使用 chmod 命令设置文件所有者权限为可读、可写、可执行，所属用户组和其他用户具有可读与执行的权限，即 "),e("code",[t._v("-rwxr-xr-x")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("u")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("rwx,go"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("rx fliename\n")])])]),e("p",[t._v("如果又要除去其他用户的可读与执行的权限是，即 "),e("code",[t._v("-rwxr-x--")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" o-rx fliename\n")])])])]),t._v(" "),e("h2",{attrs:{id:"_03-命令与文件权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_03-命令与文件权限"}},[t._v("#")]),t._v(" 03 命令与文件权限")]),t._v(" "),e("p",[t._v("文件权限限制了用户对文件或目录进行读取/创建/删除/修改等操作，我们进一步理解这操作命令是怎么和文件和目录权限对应起来的。")]),t._v(" "),e("p",[e("strong",[t._v("切换工作目录：")])]),t._v(" "),e("ul",[e("li",[t._v("可使用的命令：例如 cd 等变换工作目录的命令；")]),t._v(" "),e("li",[t._v("目录所需权限：用户需要对该目录具有可执行权限 (x)；如果还需要查阅目录结构信息，用户还需要可读权限（r）。")])]),t._v(" "),e("p",[e("strong",[t._v("读取文件内容：")])]),t._v(" "),e("ul",[e("li",[t._v("可使用的命令：例如 cat，more，less，head，tail 等查阅命令")]),t._v(" "),e("li",[t._v("目录所需权限：用户需要对工作目录（当前目录）具有可执行权限 (x)；")]),t._v(" "),e("li",[t._v("文件所需权限：用户需要对该文件具有可读权限（r）；")])]),t._v(" "),e("p",[e("strong",[t._v("修改文件内容：")])]),t._v(" "),e("ul",[e("li",[t._v("可使用的命令：例如 echo+重定向符号，vim 等文件修改命令")]),t._v(" "),e("li",[t._v("目录所需权限：用户需要对工作目录（当前目录）具有可执行权限 (x)；")]),t._v(" "),e("li",[t._v("文件所需权限：用户需要对该文件具有可读、可写权限（r，w）；")])]),t._v(" "),e("p",[e("strong",[t._v("新建文件/目录：")])]),t._v(" "),e("ul",[e("li",[t._v("可使用的命令：例如 touch，mkdir 等文件或目录创建命令")]),t._v(" "),e("li",[t._v("目录所需权限：用户需要对工作目录（当前目录）具有可执行权限 (x) 进入到该目录，还需要对工作目录具有可写权限 (w) 修改目录结构新建文件")])]),t._v(" "),e("p",[e("strong",[t._v("运行可执行文件：")])]),t._v(" "),e("ul",[e("li",[t._v("可使用的命令：例如 ./，bash 等文件执行命令")]),t._v(" "),e("li",[t._v("目录所需权限：用户需要对工作目录（当前目录）具有可执行权限 (x)；")]),t._v(" "),e("li",[t._v("文件所需权限：用户需要对该文件具有具有可执行权限 (x)；")])]),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/105482468",target:"_blank",rel:"noopener noreferrer"}},[t._v("一篇读懂 Linux 用户管理与操作"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"http://cn.linux.vbird.org/linux_basic/0210filepermission_1.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("鸟哥的 Linux 私房菜 -- Linux 的文件权限与目录配置-1"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"http://cn.linux.vbird.org/linux_basic/0210filepermission_2.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("鸟哥的 Linux 私房菜 -- Linux 的文件权限与目录配置-2"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"http://cn.linux.vbird.org/linux_basic/0410accountmanager_1.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("鸟哥的 Linux 私房菜 -- Linux 账号管理-1"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"http://cn.linux.vbird.org/linux_basic/0410accountmanager_2.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("鸟哥的 Linux 私房菜 -- Linux 账号管理-2"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"http://cn.linux.vbird.org/linux_basic/0220filemanager_6.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("鸟哥的 Linux 私房菜 -- 文件与目录管理"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=v.exports}}]);