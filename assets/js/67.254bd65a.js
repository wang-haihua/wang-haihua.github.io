(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{393:function(t,a,s){"use strict";s.r(a);var e=s(7),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"leetcode刷题笔记-回溯算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#leetcode刷题笔记-回溯算法"}},[t._v("#")]),t._v(" LeetCode刷题笔记 回溯算法")]),t._v(" "),a("h3",{attrs:{id:"回溯算法简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回溯算法简介"}},[t._v("#")]),t._v(" 回溯算法简介")]),t._v(" "),a("p",[t._v("递归 回溯 DFS 的区别")]),t._v(" "),a("h4",{attrs:{id:"递归是一种算法结构-dfs是一种搜索-方法-工具-回溯是一种算法思想。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归是一种算法结构-dfs是一种搜索-方法-工具-回溯是一种算法思想。"}},[t._v("#")]),t._v(" 递归是一种算法结构，DFS是一种搜索（方法）工具，回溯是一种算法思想。")]),t._v(" "),a("p",[a("strong",[t._v("1.在函数中调用函数本身来解决子问题以达到解决原问题的方法就叫递归")])]),t._v(" "),a("p",[t._v("​\t对于一个可以分解的问题，子问题与原问题处理过程完全相同，区别只在于数据规模，可以用递归来解。。")]),t._v(" "),a("p",[a("strong",[t._v("2.回溯就是通过不同的尝试来搜索问题的解。")])]),t._v(" "),a("p",[t._v("​\t有点类似于穷举（搜索全部解空间），但是和穷举不同的是回溯会“剪枝”，对已经知道错误的结果没必要再枚举接下来的答案了。")]),t._v(" "),a("p",[a("strong",[t._v("3.回溯搜索是深度优先搜索（DFS）的一种情况")])]),t._v(" "),a("p",[t._v("​\t对于某一个搜索树来说（搜索树是起记录路径和状态判断的作用），回溯和DFS，其主要的区别是，回溯法在求解过程中不保留完整的树结构（剪枝），而深度优先搜索则记下完整的搜索树。\n​\t为了减少存储空间，在深度优先搜索中，用标志的方法记录访问过的状态，这种处理方法使得深度优先搜索法与回溯法没什么区别了。")]),t._v(" "),a("h3",{attrs:{id:"回溯算法的代码模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回溯算法的代码模板"}},[t._v("#")]),t._v(" 回溯算法的代码模板")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("路径"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 选择列表"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" 满足结束条件"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("路径"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" 选择 in 选择列表"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        做选择\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("路径"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 选择列表"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        撤销选择\n")])])]),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/circle/discuss/8uubaL/view/kg2lF1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何理解回溯和递归以及DFS"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.zhihu.com/question/266403334?sort=created",target:"_blank",rel:"noopener noreferrer"}},[t._v("DFS 、动态规划、回溯法、递归之间的关系是什么？"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/112926891",target:"_blank",rel:"noopener noreferrer"}},[t._v("回溯法套路模板 刷通leetcode"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/subsets/solution/c-zong-jie-liao-hui-su-wen-ti-lei-xing-dai-ni-gao-/",target:"_blank",rel:"noopener noreferrer"}},[t._v("C++ 总结了回溯问题类型 带你搞懂回溯算法(大量例题)"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);