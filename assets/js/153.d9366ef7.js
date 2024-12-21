(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{479:function(a,t,s){"use strict";s.r(t);var e=s(7),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"mr-介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mr-介绍"}},[a._v("#")]),a._v(" MR 介绍")]),a._v(" "),t("p",[a._v("分支合并请求 Merge Request（MR），也可叫 Pull Request（PR）")]),a._v(" "),t("p",[a._v("MR(或者PR)就是指将你开发的代码的内容以一种请求合并的方式来合并到它想去的分支上，这个请求的接收人(Reviewer)一般是项目、团队的负责人或者其他成员。")]),a._v(" "),t("p",[a._v("一般来讲，开发团队都对Code Review（代码复审/审查/检视）的重视程度比较高。因为Code Review的确实能够提升代码的质量以及减少BUG的产生率。")]),a._v(" "),t("p",[a._v("Merge Request在Code review中就是重要的一环。如果使用MR来发起合并请求，那么在代码审查时就完全可以以你本次请求的合并内容为单元进行代码审查，如果审查通过那么就成功合并。审查交由Reviewer进行，他可以是请求的接收人。")]),a._v(" "),t("h2",{attrs:{id:"提交-mr-流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交-mr-流程"}},[a._v("#")]),a._v(" 提交 MR 流程")]),a._v(" "),t("h3",{attrs:{id:"_1-创建新分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建新分支"}},[a._v("#")]),a._v(" 1. 创建新分支")]),a._v(" "),t("p",[a._v("每次新增功能，要基于 master（或其他基础分支） 分支创建新分支")]),a._v(" "),t("p",[a._v("任何新建或修改操作之前，养成先 pull 再操作的好习惯")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pull\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("new-branch-name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h3",{attrs:{id:"_2-开发后提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-开发后提交"}},[a._v("#")]),a._v(" 2. 开发后提交")]),a._v(" "),t("p",[a._v("在新分支上进行修改操作，开发完成之后进行提交")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"your commit messages"')]),a._v("\n")])])]),t("p",[a._v("最后，将代码推送到远程的仓库上，如下命令不仅完成关联并推送内容到远程仓库的分支，还可以在没有远程分支时创建该分支")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" origin your-branch\n")])])]),t("h3",{attrs:{id:"_3-创建-mr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建-mr"}},[a._v("#")]),a._v(" 3. 创建 MR")]),a._v(" "),t("p",[a._v("在远程仓库的页面找到创建 MR 的按钮，不同仓库不太一样，Github 和 Gitee 中称为 Pull Request，GitLab 中则是 Merge Request。")]),a._v(" "),t("p",[a._v("不论叫什么，流程大致是一样的，点击创建 MR，然后选择你提交的分支 "),t("code",[a._v("Source branch")]),a._v(" 和要合并到的目标分支 "),t("code",[a._v("Target branch")])]),a._v(" "),t("p",[a._v("选择委托人 Assignee，审查人 Reviewer，标签和里程碑，完成之后审查人就会收到你的 MR")]),a._v(" "),t("h3",{attrs:{id:"_4-合并后清理分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-合并后清理分支"}},[a._v("#")]),a._v(" 4. 合并后清理分支")]),a._v(" "),t("p",[a._v("合并完成之后，需要删除本地分支和远程分支")]),a._v(" "),t("p",[a._v("删除本地分支")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout master           \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pull\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" your-branch\n")])])]),t("p",[a._v("删除远程分支")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push origin "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--delete")]),a._v(" your-branch\n")])])]),t("hr"),a._v(" "),t("p",[t("strong",[a._v("reference")]),a._v(":")]),a._v(" "),t("ul",[t("li",[a._v("https://segmentfault.com/a/1190000040941132")]),a._v(" "),t("li",[a._v("https://blog.csdn.net/Alaska_State/article/details/121837486")])])])}),[],!1,null,null,null);t.default=r.exports}}]);