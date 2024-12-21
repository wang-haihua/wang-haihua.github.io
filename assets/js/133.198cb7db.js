(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{459:function(t,e,v){"use strict";v.r(e);var _=v(7),c=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"vim解决问题的方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vim解决问题的方式"}},[t._v("#")]),t._v(" Vim解决问题的方式")]),t._v(" "),e("p",[t._v("​\tVim的特点在于它能够高效的简化工作中的重复内容，成倍的节省时间。而它能够高效的重复是应为它能够记录最近的操作，让使用者可以用一次按键就能重复上次的修改。")]),t._v(" "),e("h3",{attrs:{id:"技巧1-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技巧1-命令"}},[t._v("#")]),t._v(" 技巧1 . 命令")]),t._v(" "),e("p",[e("strong",[t._v(". 命令的作用")])]),t._v(" "),e("p",[t._v("​\t"),e("code",[t._v(".")]),t._v("命令实现的是重复上一次修改，而修改内容可以指代很多东西，一次修改的单位可以是字符、整行，甚至是整个文件。")]),t._v(" "),e("p",[e("strong",[t._v("使用示例")])]),t._v(" "),e("p",[t._v("​\t例如字符删除命令"),e("code",[t._v("x")]),t._v("、文本行删除命令"),e("code",[t._v("dd")]),t._v("都可以配合"),e("code",[t._v(".")]),t._v("命令来重复操作，而文档缩进命令"),e("code",[t._v(">")]),t._v("配合到文档末尾处命令"),e("code",[t._v("G")]),t._v("实现从当前行到末尾行整体的缩进，这种对文档整体操作的命令也可以通过"),e("code",[t._v(".")]),t._v("命令来重复。")]),t._v(" "),e("h3",{attrs:{id:"技巧2-不要自我重复"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技巧2-不要自我重复"}},[t._v("#")]),t._v(" 技巧2 不要自我重复")]),t._v(" "),e("p",[e("strong",[t._v("避免自我重复")])]),t._v(" "),e("p",[t._v("​\t在合适的使用场景中，尽量使用复合的单键命令来代替其等效的长命令，然后配合"),e("code",[t._v("·")]),t._v("命令可以极大提高效率。一些常用的符合命令如下表。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("复合命令")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("等效的长命令")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("复合命令")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("等效的长命令")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("C")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("c$")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("A")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$a")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("s")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("cl")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("o")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("A"),e("Enter")],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("S")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("^c")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("O")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("ko")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("I")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("^i")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),e("p",[e("strong",[t._v("使用示例")])]),t._v(" "),e("p",[t._v("​\t例如在代码中需要为每一行末尾添加"),e("code",[t._v(";")]),t._v("，首先想到的是可以使用"),e("code",[t._v("$")]),t._v("命令将光标移动到行末，然后使用"),e("code",[t._v("a")]),t._v("命令在当前光标之后添加分号后退出编辑模式。接下来就使用"),e("code",[t._v("j")]),t._v("命令移动到下一行并在此使用"),e("code",[t._v("$")]),t._v("命令移动到行末然后使用"),e("code",[t._v(".")]),t._v("命令重复"),e("code",[t._v("a;<Esc>")]),t._v("这三步动作。")]),t._v(" "),e("p",[t._v("​\t显然，在上述的重复过程中，移动过程较为繁琐，为了减少这无关的移动可以使用在当前行末尾添加内容的"),e("code",[t._v("A")]),t._v("命令来代替"),e("code",[t._v("a")]),t._v("命令，这样就可以简化重复过程中的移动不需要再使用"),e("code",[t._v("$")]),t._v("命令。")]),t._v(" "),e("h3",{attrs:{id:"技巧3-以退为进"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技巧3-以退为进"}},[t._v("#")]),t._v(" 技巧3 以退为进")]),t._v(" "),e("p",[e("strong",[t._v("替换操作")])]),t._v(" "),e("p",[t._v("​\t当需要对某个字符或单词进行替换时，考虑在全文都进行替换的情况下就要进行重复操作，那就要使得修改和移动都可以重复。vim中的实现可以使用替换字符串的"),e("code",[t._v("s")]),t._v("命令配合"),e("code",[t._v("·")]),t._v("命令使得修改操作可重复，然后使用查找下一处指定字符位置的"),e("code",[t._v("f{char}")]),t._v("命令配合用于重复上次"),e("code",[t._v("f")]),t._v("命令操作的"),e("code",[t._v(";")]),t._v("命令使得移动可重复，将他们合二为一便可以简化替换操作。")]),t._v(" "),e("p",[e("strong",[t._v("使用示例")])]),t._v(" "),e("p",[t._v("​\t例如要在"),e("code",[t._v('printf("%d+%d+%d=%d",a,b,c,a+b+c);')]),t._v("代码中将"),e("code",[t._v("+")]),t._v("替换成前后带空格的"),e("code",[t._v("+")]),t._v("。首先需要使用"),e("code",[t._v("f+")]),t._v("命令找到"),e("code",[t._v("+")]),t._v("号的位置，然后使用"),e("code",[t._v("s")]),t._v("命令替换内容并退出编辑模式，这样就可以使用"),e("code",[t._v(";.")]),t._v("的组合命令完成重复替换操作。")]),t._v(" "),e("h3",{attrs:{id:"技巧4-重复与回退"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技巧4-重复与回退"}},[t._v("#")]),t._v(" 技巧4 重复与回退")]),t._v(" "),e("p",[e("strong",[t._v("可重复的操作以及如何回退")])]),t._v(" "),e("p",[t._v("​\t在使用可重复操作进行重复性工作时可能出现命令使用错误导致的错误操作，这时候就需要回退到上一步操作，一般可重复的操作都是可以回退的，它们都是成对出现的，一些可重复的操作和其回退方式如下表所示。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("含义")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("操作")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("重复命令")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("回退命令")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("做出一个修改")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("{edit}")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v(".")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("u")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("文本行内查找下一指定字符")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("f{char}/t{char}")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v(";")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v(",")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("文本行内查找上一指定字符")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("F{char}/T{char}")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v(";")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v(",")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("文档内查找下一处匹配项")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("/{pattern}"),e("Enter")],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("n")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("文档内查找上一处匹配项")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("?{pattern}"),e("Enter")],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("n")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("N")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("替换")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("s{replacements}")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("&")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("u")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("执行一系列修改")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("qx{changes}q")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("@x")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("u")])])])]),t._v(" "),e("h3",{attrs:{id:"技巧5-查找并手动替换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技巧5-查找并手动替换"}},[t._v("#")]),t._v(" 技巧5 查找并手动替换")]),t._v(" "),e("p",[e("strong",[t._v("无输入的查找命令")])]),t._v(" "),e("p",[t._v("​\t前面已经提到文本行内字符查找可以使用f{char}/t{char}等命令，文档内的匹配项查找可以使用查找提示符"),e("code",[t._v("/")]),t._v("命令并输入完整的目标匹配项进行查找"),e("code",[t._v("/pattern")]),t._v("。除了这些方法，还可以使用"),e("code",[t._v("*")]),t._v("命令实现无输入的查找，只需要将光标移到目标匹配项上然后按下"),e("code",[t._v("*")]),t._v("键。使用"),e("code",[t._v("*")]),t._v("命令会产生两个结果，一是光标会从当前匹配项跳到下一个匹配项，二是文档中所有的匹配项都会高亮显示。和"),e("code",[t._v("/")]),t._v("查找提示符一样也可以使用"),e("code",[t._v("n/N")]),t._v("实现重复和回退。")]),t._v(" "),e("p",[e("strong",[t._v("替换")])]),t._v(" "),e("p",[t._v("​\t匹配项的替换无法使用"),e("code",[t._v("s")]),t._v("命令实现，但是也有对应的替换命令"),e("code",[t._v("cw")]),t._v("，使用该命令会删除从光标到单词结尾的所有字符，并进入插入模式。"),e("code",[t._v("cw")]),t._v("实现的替换操作和其他修改操作一样，vim编辑器会将从进入插入模式到离开的全部操作记录下来视为一次修改操作，可以使用"),e("code",[t._v("·")]),t._v("命令实现重复。")]),t._v(" "),e("p",[e("strong",[t._v("使用示例")])]),t._v(" "),e("p",[t._v("​\t例如要将文档中多个"),e("code",[t._v("content")]),t._v("替换为"),e("code",[t._v("copy")]),t._v("，首先将光标移动到任一"),e("code",[t._v("content")]),t._v("匹配项的开头，然后使用"),e("code",[t._v("*")]),t._v("命令查找所有匹配项。在第一个要修改的匹配项使用"),e("code",[t._v("cw")]),t._v("命令进行替换并退出插入模式。完成了查找和修改的可重复设定，就可以使用"),e("code",[t._v("n/N")]),t._v("命令来查找想要修改的匹配项，然后使用"),e("code",[t._v(".")]),t._v("重复修改操作完成替换任务。")]),t._v(" "),e("h3",{attrs:{id:"技巧6-·命令范式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技巧6-·命令范式"}},[t._v("#")]),t._v(" 技巧6 ·命令范式")]),t._v(" "),e("p",[e("strong",[t._v("一键移动 一键执行")])]),t._v(" "),e("p",[t._v("​\t本章中所有提到的使用示例都是基于这种"),e("strong",[t._v("一键移动 一键执行")]),t._v("的"),e("code",[t._v("·")]),t._v("命令范式实现的，让在文档中的光标移动可重复，然后让修改操作可重复，这样便是一个较为理想的重复工作解决方案，把繁琐的重复操作简化到"),e("strong",[t._v("一键移动 一键执行")]),t._v("的范式。")])])}),[],!1,null,null,null);e.default=c.exports}}]);