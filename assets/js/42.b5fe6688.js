(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{369:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"快慢指针"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快慢指针"}},[t._v("#")]),t._v(" 快慢指针")]),t._v(" "),s("h4",{attrs:{id:"_142-环形链表-ii"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_142-环形链表-ii"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://leetcode-cn.com/problems/linked-list-cycle-ii/",target:"_blank",rel:"noopener noreferrer"}},[t._v("142 环形链表 II"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 "),s("code",[t._v("null")]),t._v("。")]),t._v(" "),s("p",[t._v("输入是一个链表，输出是链表的一个节点，如果没有环路，返回一个空指针。")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输入：head = [3,2,0,-4], pos = 1\n输出：返回索引为 1 的链表节点\n解释：链表中有一个环，其尾部连接到第二个节点。\n")])])])]),t._v(" "),s("p",[s("strong",[t._v("解析：")])]),t._v(" "),s("p",[t._v("​\t通常使用 Floyd 判圈法，解决链表找环路的问题。其基本思路就是使用快慢指针，快指针一次走两步，慢指针一次走一步，如果这两个指针会相遇则说明存在环路。现在再用一个指针从链表头节点开始一次走一步，慢指针从两个指针相遇的点开始继续一次一步往前走，当这两个指针相遇时，就是环路的入口。")]),t._v(" "),s("p",[t._v("​\t根据上述思路，我们给定两个指针，分别命名为 slow 和 fast，起始位置在链表的开头。每次 fast 前进两步，slow 前进一步：")]),t._v(" "),s("ul",[s("li",[t._v("如果 fast可以走到尽头，那么说明没有环路；")]),t._v(" "),s("li",[t._v("如果 fast 可以无限走下去，那么说明一定有环路，且一定存在一个时刻 slow 和 fast 相遇。")])]),t._v(" "),s("p",[t._v("​    如果存在环路，当 slow 和 fast 第一次相遇时，我们将 fast 重新移动到链表开头，并让 slow 和 fast 每次都前进一步。当 slow 和 fast 第二次相遇时，相遇的节点即为环路的开始点。")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    ListNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("detectCycle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ListNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ListNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("fast "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("slow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("fast "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("fast"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nullptr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            fast "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fast"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            slow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slow"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("slow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" fast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        fast "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("slow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" fast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            slow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slow"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            fast "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fast"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" fast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"_206-反转链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_206-反转链表"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://leetcode-cn.com/problems/reverse-linked-list/",target:"_blank",rel:"noopener noreferrer"}},[t._v("206 反转链表"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("给定单链表的头节点 "),s("code",[t._v("head")]),t._v(" ，请反转链表，并返回反转后的链表")]),t._v(" "),s("p",[t._v("输入一个链表，输出一个反转后的链表")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输入：head = [1,2,3,4,5]\n输出：[5,4,3,2,1]\n")])])])]),t._v(" "),s("p",[s("strong",[t._v("解析：")])]),t._v(" "),s("p",[t._v("​\t反转链表是快慢指针的经典应用场景。")]),t._v(" "),s("p",[t._v("​\t为了便于统一节点处理方式，我们在链表中加入一个虚拟头节点"),s("code",[t._v("dummy")]),t._v("，其 next 指向链表头节点。然后我们给定两个指针 slow 和 fast，初始时分别指向 dummy 和链表头节点。然后我们进行反转操作：")]),t._v(" "),s("ul",[s("li",[t._v("首先使用 tmp 保存 fast 的 next 指向的节点")]),t._v(" "),s("li",[t._v("反转 fast 的 next 指向，指向前一节点即 slow")]),t._v(" "),s("li",[t._v("移动 slow 到当前 fast")]),t._v(" "),s("li",[t._v("更新 fast 指向为其原始 next 指向节点，即 tmp 保存的节点")])]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    ListNode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverseList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ListNode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ListNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("slow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nullptr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("fast "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为了便于理解，我还是新建了 tmp。当然你可以直接使用闲置的 head 记录，节省空间开销")]),t._v("\n            ListNode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" tmp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fast"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            fast"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            slow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            fast "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tmp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" slow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"_19-删除链表的倒数第-n-个结点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_19-删除链表的倒数第-n-个结点"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/",target:"_blank",rel:"noopener noreferrer"}},[t._v("19 删除链表的倒数第 N 个结点"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("给定一个链表，删除链表的倒数第 "),s("code",[t._v("n")]),t._v(" 个结点，并且返回链表的头结点。")]),t._v(" "),s("p",[t._v("输入一个链表，输出一个按条件操作之后的链表")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输入：head = [1,2,3,4,5], n = 2\n输出：[1,2,3,5]\n")])])])]),t._v(" "),s("p",[s("strong",[t._v("解析：")])]),t._v(" "),s("p",[t._v("​\t对于本题首先我们来考虑删除链表的第 N 个节点怎么操作。我们可以使用一个指针从头节点开始遍历找到链表的第 N-1 个节点，然后改变其 next 指向为 "),s("code",[t._v("next->next")]),t._v(" ，最后删除第 N 个节点即可。")]),t._v(" "),s("p",[t._v("​\t那么我们怎么删除倒数第 N 个节点呢？我们要找到倒数第 N 个节点的前一个节点。假设链表总共有 M 个节点，那么倒数第 N 个节点就是第 M - N 个节点。")]),t._v(" "),s("p",[t._v("​\t所以我们可以使用快慢指针，快指针 fast 先遍历到链表的第 N 个节点，此时慢指针 slow 再出发与 fast 同步移动。当 fast 遍历完链表最后一个节点时，slow 指向的就是倒数第 N 个节点。")]),t._v(" "),s("p",[t._v("​\t为了便于删除操作，我们让 fast 先遍历到第 N+1 个节点，这时当 fast 遍历完时，slow 指向就是倒数第 N+1 个节点，即待删除节点的前一个节点。")]),t._v(" "),s("p",[t._v("​\t值得注意的是，我们定义一个虚拟头节点指向链表的头节点，这样同一的对头节点的删除操作。")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    ListNode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeNthFromEnd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ListNode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建虚拟头节点")]),t._v("\n        ListNode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" dummy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ListNode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        ListNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("slow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dummy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("fast "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dummy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 让 fast 先遍历到第 N+1 个节点")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" cnt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cnt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            fast "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fast"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("cnt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 慢指针 slow 与 fast 同步移动到第 N+1 个节点")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            fast "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fast"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            slow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slow"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除第 N 个节点")]),t._v("\n        ListNode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" tmp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slow"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        slow"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slow"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tmp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dummy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);