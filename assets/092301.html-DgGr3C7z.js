import{_ as t,a as d,b as r,d as n,e as s,f as i,o as c,r as o}from"./app-C6z6gQkS.js";const p={},u=["src"],m=["src"],v=["src"],b={href:"https://developer.aliyun.com/article/785389?utm_content=m_1000284514",target:"_blank",rel:"noopener noreferrer"},f={href:"https://developer.aliyun.com/article/785389?utm_content=m_1000284514",target:"_blank",rel:"noopener noreferrer"},g={href:"https://developer.aliyun.com/article/785389?utm_content=m_1000284514",target:"_blank",rel:"noopener noreferrer"},h=["src"],B={href:"https://ucc.alicdn.com/pic/developer-ecology/dfd3cda3a651416a8b39780d2528a29b.png",target:"_blank",rel:"noopener noreferrer"},y={href:"https://wesmckinney.com/blog/arrow-streaming-columnar/#columnar-streaming-data",target:"_blank",rel:"noopener noreferrer"},_={href:"https://developer.aliyun.com/article/785389?utm_content=m_1000284514",target:"_blank",rel:"noopener noreferrer"},w={href:"https://engineering.fb.com/2015/07/31/android/improving-facebook-s-performance-on-android-with-flatbuffers/",target:"_blank",rel:"noopener noreferrer"};function R(l,e){const a=o("ExternalLinkIcon");return c(),d("div",null,[e[10]||(e[10]=r('<h2 id="_01-数据流格式" tabindex="-1"><a class="header-anchor" href="#_01-数据流格式"><span>01 数据流格式</span></a></h2><p>在 Apache Arrow 的进程间通信（Inter-Process Communication）中提供了 Streaming 和 RandomAccessFile 两种二进制格式，用于读取和写入 RecordBatch 数据</p><ul><li><p>Streaming Format：这种格式用于发送<strong>任意长度</strong>的 RecordBatch 序列，但它必须<strong>从开始到结束</strong>顺序处理，不支持随机访问，所以 Streaming Format 适用于数据流或网络传输等应用场景</p></li><li><p>RandomAccessFile Format：这种格式用于序列化<strong>固定数量</strong>的 RecordBatch，由于该格式包含有关 RecordBatch 数量和位置的元数据，所以<strong>支持随机访问</strong>，因此在与内存映射一起使用时非常有用</p></li></ul><p>在之前介绍 RecordBatch 时（article url），简单介绍了 Arrow IPC Stream 通常是按照 Schema 后面跟一个或多个 RecordBatch 的方式组织；如下图所示 Stream Format 中使用三种消息类型来传输数据：<code>Schema, RecordBatch, DictionaryBatch</code>，如果 Schema 中包含使用字段编码（dictionary-encoded）的数组，那么 Stream 中还会有 DictionaryBatch 格式的消息</p>',4)),n("img",{src:l.$withBase("/picture/bigdata/2024/082901/data-stream.png"),alt:"filename",class:"no-zoom",style:{margin:"0 auto"}},null,8,u),e[11]||(e[11]=n("p",null,[s("Arrow IPC 传输数据时封装的消息格式 Stream Format 如下图所示，（1）消息开头是 8 个字节 "),n("code",null,"0xFFFFFFFF"),s("表示有效消息的开始；（2）接着是一个表示 Schema 元数据信息长度的 32-bit 整数，该整数使用小端字节序编码（Little Endian Int）；（3）然后是实际的 Schema 元数据；（4）接着是为了确保数据结构的对齐实现跨平台特性，可能包含填充字节使得整个消息的总长度是 8 字节的倍数；（5）最后就是包含要传输数据 RecordBatchs 的消息体")],-1)),n("img",{src:l.$withBase("/picture/bigdata/2024/092301/stream-format.png"),alt:"filename",class:"no-zoom",style:{margin:"0 auto"}},null,8,m),e[12]||(e[12]=r("<p>RandomAccessFile Format 的文件格式只是 Streaming Format 的一个扩展，如下图所示仅比 Streaming Format 多了表示文件开头结尾的 <code>Magic String</code> 和包含元数据信息的<code>Footer</code>，具体来说包括：</p><ol><li><p><strong>Magic String (<strong><strong><code>ARROW1</code></strong></strong>)</strong>：表示文件开头，其中 <code>ARROW1</code>是一个固定的字节序列在源码<code>cppsrcarrowipcmetadata_internal.h</code>中被定义为<code>kArrowMagicBytes</code>，用于快速检查文件是否是 Arrow 格式</p></li><li><p><strong>Empty padding to 8-byte boundary</strong>：为了确保文件结构的对齐，可能包含空的填充字节，使得从<code>Magic String</code>开始到实际数据部分的开始是 8 字节边界对齐的</p></li><li><p><strong>Data Using the Streaming Format with EOS indicator</strong>：文件的主体，包含了使用 <code>Streaming Format</code>序列化的数据；数据最后面可能跟着一个 <code>End Of Stream（EOS）</code>指示器，表示没有更多的数据</p></li><li><p><strong>FlatBuffer Footer Message Bytes</strong>：这部分是 FlatBuffer 形式的 Footer 消息，包含了<code>Streaming Format</code>中 Schema 的拷贝和文件中每个数据块在内存中的偏移量（Offset）和长度，这些元数据信息是 <code>RandomAccessFile Format </code>文件格式实现随机访问的关键</p></li><li><p><strong>Footer Size</strong>：一个 32 位的整数采用小端字节序编码，表示 Footer 消息的字节长度</p></li><li><p><strong>Magic String (<strong><strong><code>ARROW1</code></strong></strong>)</strong>：文件结尾标识，与文件开始处相同，用于标识文件的结束</p></li></ol>",2)),n("img",{src:l.$withBase("/picture/bigdata/2024/092301/random-access-file-format.png"),alt:"filename",class:"no-zoom",style:{margin:"0 auto"}},null,8,v),e[13]||(e[13]=n("h2",{id:"_02-元数据序列化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_02-元数据序列化"},[n("span",null,"02 元数据序列化")])],-1)),e[14]||(e[14]=n("p",null,"Arrow IPC Format 中可以看到消息格式中的元数据信息都是使用 FlatBuffers 来进行序列化的，为什么这么做呢？",-1)),e[15]||(e[15]=n("p",null,"对于进行间通信而言，消息在不同进程之间传递需要进行序列化和反序列化（serialization/deserialization），数据序列化和反序列化的速度越快，数据发送的速度就越快；所以，对于 IPC 过程来说，序列化和反序列化的开销十分重要",-1)),e[16]||(e[16]=n("p",null,"为了优化序列化和反序列化的开销，Apache Arrow IPC Format 采用了高性能序列化方式 FlatBuffers 来对元数据（metadata）进行序列化，对于消息体直接使用数据缓冲区（raw data buffers）传输数据而不需要进行序列化操作（那么对于跨节点的操作，无法直接使用内存的情况下是怎么传输的呢？）",-1)),e[17]||(e[17]=n("p",null,"在介绍物理布局时（article url）已经详细介绍过了 raw data buffers 的传输格式，下面详细介绍一下元数据的序列化方式 FlatBuffers",-1)),n("p",null,[e[3]||(e[3]=s("FlatBuffers 相关内容重度参考：")),n("a",b,[e[0]||(e[0]=s("深入浅出FlatBuffers原理-阿里云开发者社区 (")),i(a)]),n("a",f,[e[1]||(e[1]=s("aliyun.com")),i(a)]),n("a",g,[e[2]||(e[2]=s(")")),i(a)])]),e[18]||(e[18]=r(`<h3 id="_2-1-flatbuffers-数据结构定义" tabindex="-1"><a class="header-anchor" href="#_2-1-flatbuffers-数据结构定义"><span>2.1 FlatBuffers 数据结构定义</span></a></h3><p>首先简单介绍一下 FlatBuffers，它是一个由 Google 开发的跨平台序列化库，允许<strong>直接访问</strong>序列化的数据结构，无需解析成中间格式；支持<strong>零拷贝反序列化</strong>，即在反序列化过程中无需复制数据到内存的其他部分，从而避免了额外的内存分配和临时对象的创建；基于诸多高性能特性，访问 FlatBuffers 序列化的数据比访问 JSON、CSV 和Protocol Buffers 等需要解析和复制步骤的格式要高效得多</p><p>FlatBuffers 通过 Schema 定义语言来描述要序列化的数据结构，其语法和结构与 C 语言类似是一种类型安全的 IDL（接口描述语言）。下面结合 Apache Arrow 中定义 Schema 的 <code>formatSchema.fbs</code>实例来说明其基本的语法：</p><ol><li><strong>namespace</strong>：定义命名空间，用于组织和区分不同的数据结构</li></ol><div class="language-Plain line-numbers-mode" data-highlighter="prismjs" data-ext="Plain" data-title="Plain"><pre><code><span class="line">namespace org.apache.arrow.flatbuf;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li><strong>enum</strong>：定义枚举类型，用于限定变量的取值范围</li></ol><div class="language-Plain line-numbers-mode" data-highlighter="prismjs" data-ext="Plain" data-title="Plain"><pre><code><span class="line">enum Endianness:short { Little, Big }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li><strong>struct</strong>：定义结构体，类似于 C 语言中的<code>struct</code>，用于创建复杂的数据类型</li></ol><div class="language-Plain line-numbers-mode" data-highlighter="prismjs" data-ext="Plain" data-title="Plain"><pre><code><span class="line">struct Buffer {</span>
<span class="line">  offset: long;</span>
<span class="line">  length: long;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><strong>table</strong>：定义表，类似于数据库中的表，可以包含多个字段，并且字段的值可以是不同的类型</li></ol><div class="language-Plain line-numbers-mode" data-highlighter="prismjs" data-ext="Plain" data-title="Plain"><pre><code><span class="line">table Schema {</span>
<span class="line">  endianness: Endianness=Little;</span>
<span class="line">  fields: [Field];</span>
<span class="line">  // User-defined metadata</span>
<span class="line">  custom_metadata: [ KeyValue ];</span>
<span class="line">  /// Features used in the stream/file.</span>
<span class="line">  features : [ Feature ];</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li><strong>root_type</strong>：指定序列化文件的根类型，即文件中最顶层的数据类型</li></ol><div class="language-Plain line-numbers-mode" data-highlighter="prismjs" data-ext="Plain" data-title="Plain"><pre><code><span class="line">root_type Schema;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="6"><li><strong>file_identifier</strong>：为文件定义一个唯一的标识符，用于文件格式的验证。</li></ol><div class="language-Plain line-numbers-mode" data-highlighter="prismjs" data-ext="Plain" data-title="Plain"><pre><code><span class="line">file_identifier:&quot;SCHEMA&quot;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="7"><li><strong>attribute</strong>：定义属性，可以用于表或结构体，提供额外的元数据</li></ol><div class="language-Plain line-numbers-mode" data-highlighter="prismjs" data-ext="Plain" data-title="Plain"><pre><code><span class="line">table Person {</span>
<span class="line">  id:int;</span>
<span class="line">  [deprecated] name:string; // 表示 name 字段已经废弃</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li><strong>array</strong>：定义固定长度的数组</li></ol><div class="language-Plain line-numbers-mode" data-highlighter="prismjs" data-ext="Plain" data-title="Plain"><pre><code><span class="line">array Vec3[3] = [ v1, v2, v3 ];</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="9"><li><strong>vector</strong>：定义动态数组，用于存储一系列相同类型的元素</li></ol><div class="language-Plain line-numbers-mode" data-highlighter="prismjs" data-ext="Plain" data-title="Plain"><pre><code><span class="line">vector inventory:[ubyte];</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="10"><li><strong>union</strong>：定义联合体，类似于 C 语言的联合体，可以存储多种不同但兼容的类型</li></ol><div class="language-Plain line-numbers-mode" data-highlighter="prismjs" data-ext="Plain" data-title="Plain"><pre><code><span class="line">union Type {</span>
<span class="line">  Null,</span>
<span class="line">  Int,</span>
<span class="line">  FloatingPoint,</span>
<span class="line">  Binary,</span>
<span class="line">  Utf8,</span>
<span class="line">  Bool,</span>
<span class="line">  Decimal,</span>
<span class="line">  Date,</span>
<span class="line">  Time,</span>
<span class="line">  Timestamp,</span>
<span class="line">  Interval,</span>
<span class="line">  List,</span>
<span class="line">  Struct_,</span>
<span class="line">  Union,</span>
<span class="line">  FixedSizeBinary,</span>
<span class="line">  FixedSizeList,</span>
<span class="line">  Map,</span>
<span class="line">  Duration,</span>
<span class="line">  LargeBinary,</span>
<span class="line">  LargeUtf8,</span>
<span class="line">  LargeList,</span>
<span class="line">  RunEndEncoded,</span>
<span class="line">  BinaryView,</span>
<span class="line">  Utf8View,</span>
<span class="line">  ListView,</span>
<span class="line">  LargeListView,</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="11"><li><strong>string</strong>：定义字符串类型</li></ol><div class="language-Plain line-numbers-mode" data-highlighter="prismjs" data-ext="Plain" data-title="Plain"><pre><code><span class="line">table KeyValue {</span>
<span class="line">  key: string;</span>
<span class="line">  value: string;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这些关键字，可以定义复杂的数据结构，并使用 FlatBuffers 工具生成相应的序列化和反序列化代码；一个使用上述关键字定义的 Arrow 中 Schema 的部分数据结构示例如下：</p><div class="language-Plain line-numbers-mode" data-highlighter="prismjs" data-ext="Plain" data-title="Plain"><pre><code><span class="line">// 定义命名空间</span>
<span class="line">namespace org.apache.arrow.flatbuf;</span>
<span class="line">// 定义枚举类型</span>
<span class="line">enum Endianness:short { Little, Big }</span>
<span class="line">// 定义结构体</span>
<span class="line">struct Buffer {</span>
<span class="line">  /// The relative offset into the shared memory page where the bytes for this</span>
<span class="line">  /// buffer starts</span>
<span class="line">  offset: long;</span>
<span class="line">  /// The absolute length (in bytes) of the memory buffer. The memory is found</span>
<span class="line">  /// from offset (inclusive) to offset + length (non-inclusive). When building</span>
<span class="line">  /// messages using the encapsulated IPC message, padding bytes may be written</span>
<span class="line">  /// after a buffer, but such padding bytes do not need to be accounted for in</span>
<span class="line">  /// the size here.</span>
<span class="line">  length: long;</span>
<span class="line">}</span>
<span class="line">// 定义表，包含字节序类型、字段、额外元数据等</span>
<span class="line">table Schema {</span>
<span class="line">  /// endianness of the buffer</span>
<span class="line">  /// it is Little Endian by default</span>
<span class="line">  /// if endianness doesn&#39;t match the underlying system then the vectors need to be converted</span>
<span class="line">  endianness: Endianness=Little;</span>
<span class="line">  fields: [Field];</span>
<span class="line">  // User-defined metadata</span>
<span class="line">  custom_metadata: [ KeyValue ];</span>
<span class="line">  /// Features used in the stream/file.</span>
<span class="line">  features : [ Feature ];</span>
<span class="line">}</span>
<span class="line">// 指定文件的根类型</span>
<span class="line">root_type Schema;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-flatbuffers-序列化" tabindex="-1"><a class="header-anchor" href="#_2-2-flatbuffers-序列化"><span>2.2 FlatBuffers 序列化</span></a></h3><p>FlatBuffers 序列化的主要逻辑是将对象数据存储于一个连续的一维字节数组 ByteBuffer 中；在该数组中，每个对象被划分为两个关键部分，元数据部分：包含必要的索引信息；真实数据部分：存储具体的数据值</p><p>与大多数内存中的数据结构不同的是，FlatBuffers 遵循严格的内存对齐规则和字节顺序序规范，确保了序列化数据的跨平台兼容性。此外，对于 table 类型的对象，FlatBuffers 还提供了前向和后向兼容性，以及对 <code>optional</code>字段的支持，从而适应数据格式的演变</p><p>除了解析效率以外，二进制格式还带来了另一个优势，数据的二进制表示通常更具有效率；可以使用 4 字节的 <code>uint</code> 而不是 10 个字符来存储 10 位数字的整数</p><p>FlatBuffers 序列化基本使用原则：</p><ul><li><p>小端模式：FlatBuffers 对各种基本数据的存储都是按照小端模式来进行的，因为这种模式目前和大部分处理器的存储模式是一致的，可以加快数据读写的数据。</p></li><li><p>写入数据方向和读取数据方向不同</p></li></ul>`,33)),n("img",{src:l.$withBase("/picture/bigdata/2024/092301/flatbuffers.png"),alt:"filename",class:"no-zoom",style:{margin:"0 auto"}},null,8,h),n("p",null,[e[5]||(e[5]=s("（图片来源：")),n("a",B,[e[4]||(e[4]=s("https://ucc.alicdn.com/pic/developer-ecology/dfd3cda3a651416a8b39780d2528a29b.png")),i(a)]),e[6]||(e[6]=s("）"))]),e[19]||(e[19]=r(`<p>FlatBuffers 向 ByteBuffer 中写入数据的顺序是从 ByteBuffer 的尾部向头部填充，由于这种增长方向和 ByteBuffer 默认的增长方向不同，因此 FlatBuffers 在向 ByteBuffer 中写入数据的时候就不能依赖 ByteBuffer 的 position 来标记有效数据位置，而是自己维护了一个 space 变量来指明有效数据的位置，在分析 FlatBuffersBuilder 的时候要特别注意这个变量的增长特点</p><p>但是，和数据的写入方向不同的是，FlatBuffers 从 ByteBuffer 中解析数据的时候又是按照 ByteBuffer 正常的顺序来进行的。FlatBuffers 这样组织数据存储的好处是，在从左到右解析数据的时候，能够保证最先读取到的就是整个 ByteBuffer 的概要信息（例如 Table 类型的 vtable 字段），方便解析。</p><h3 id="_2-3-flatbuffers-反序列化" tabindex="-1"><a class="header-anchor" href="#_2-3-flatbuffers-反序列化"><span>2.3 FlatBuffers 反序列化</span></a></h3><p>基于序列化阶段的严格处理，FlatBuffers 的反序列化过程就很简单了；由于在序列化阶段每个字段的偏移量 offset 已被精确记录，因此反序列化本质上是从 ByteBuffer 中的指定偏移量处提取数据</p><p>反序列化过程从 root table 开始，沿着二进制流逐步向后读取：</p><p>首先，从包含字段偏移量信息的 vtable 中检索所需的偏移量 offset</p><p>然后，根据对应的 offset 在相应的 object 中定位到具体的字段，如果字段是引用类型（string、vector、table 等），则读取出 offset 并解析这些引用的 offset，进一步检索它们指向的实际偏移量；对于非引用类型，则直接根据 vtable 中的 offset 定位到数据直接读取</p><p>对于标量字段需要区分默认值和非默认值两种情况：对于默认值字段，反序列化时会直接采用由 <code>flatc</code>编译器后生成的文件中记录的默认值读取出来；而对于非默认值字段，二进制流中就会记录该字段的 offset，值也会存储在二进制流中，反序列化时直接根据 offset 读取字段值即可</p><p>整个反序列化过程是零拷贝（zero-copy）的，这意味着它不会消耗额外的内存资源，也不会创建数据的副本。并且 FlatBuffers 可以读取任意字段，而不是像 Json 和 protocol buffer 需要读取整个对象以后才能获取某个字段。FlatBuffers 的主要优势就在反序列化这里了。所以 FlatBuffers 可以做到解码速度极快，或者说无需解码直接读取。</p><h2 id="_03-ipc-example" tabindex="-1"><a class="header-anchor" href="#_03-ipc-example"><span>03 IPC example</span></a></h2><p>下面通过一个简单的 IPC 实例来加深对 Arrow 中二进制数据流传输的理解，该例子没有真正意义上的多进程之间通信，而是简单模拟了向 Arrow IPC Stream 中写入数据，然后从中读取数据并打印，具体过程包括：</p><ul><li><p>根据 JSON 字符串创建一个 RecordBatch</p></li><li><p>将数据写入到 Arrow IPC Stream 中</p></li><li><p>从 Arrow IPC Stream 读取该数据并打印</p></li></ul><ol><li>引用必要的库文件</li></ol><p>引用与 Arrow IPC Stream 操作相关的 arrow 头文件，以及 json 数据处理等库文件</p><div class="language-C++ line-numbers-mode" data-highlighter="prismjs" data-ext="C++" data-title="C++"><pre><code><span class="line">#include &lt;arrow/api.h&gt;</span>
<span class="line">#include &lt;arrow/ipc/writer.h&gt;</span>
<span class="line">#include &lt;arrow/json/reader.h&gt;</span>
<span class="line">#include &lt;arrow/memory_pool.h&gt;</span>
<span class="line">#include &lt;arrow/result.h&gt;</span>
<span class="line">#include &lt;arrow/status.h&gt;</span>
<span class="line">#include &lt;iostream&gt;</span>
<span class="line">#include &lt;string&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>根据 JSON 字符串创建一个 RecordBatch</li></ol><p>在介绍 RecordBatch 时提到其由元数据 Schema 和具体数据 Arrays 组成，其中 Schema 又由表示 Arrays 名称和类型的 Fields 构成，下面创建 RecordBatch 也按这样的组织方式进行构建</p><p>首先，使用<code>arrow::field</code>函数创建一个字段，接受字段名和字段类型作为参数，并将将创建的字段添加到字段类型列表 <code>fields</code>中</p><p>然后，使用字段列表 fields 创建一个 Arrow 模式（Schema）对象 <code>schema</code></p><p>接着，使用 Arrow JSON 读取器解析 JSON 数据，并根据 JSON 数据创建一个 Arrow 数组 <code>array</code></p><p>最后，准备好了构建 RecordBatch 的所有组成部分，使用<code>schema</code>和<code>array</code>创建一个 RecordBatch</p><div class="language-C++ line-numbers-mode" data-highlighter="prismjs" data-ext="C++" data-title="C++"><pre><code><span class="line">std::shared_ptr&lt;arrow::MemoryPool&gt; mem = arrow::default_memory_pool();</span>
<span class="line">    arrow::DataTypeVector fields;</span>
<span class="line">    auto field = arrow::field(&quot;list&quot;, arrow::list(arrow::binary()));</span>
<span class="line">    fields.push_back(field);</span>
<span class="line">    auto schema = std::make_shared&lt;arrow::Schema&gt;(fields);</span>
<span class="line">    // Create a JSON reader from a string of data</span>
<span class="line">    auto input_data = R&quot;([</span>
<span class="line">        [&quot;index1&quot;],</span>
<span class="line">        [&quot;index3&quot;, &quot;tag_int&quot;], [&quot;index5&quot;, &quot;tag_int&quot;],</span>
<span class="line">        [&quot;index6&quot;, &quot;tag_int&quot;], [&quot;index7&quot;, &quot;tag_int&quot;],</span>
<span class="line">        [&quot;index7&quot;, &quot;tag_int&quot;],</span>
<span class="line">        [&quot;index8&quot;]</span>
<span class="line">    ])&quot;;</span>
<span class="line">    auto reader = arrow::json::Reader::Make(arrow::default_memory_pool(), schema, input_data);</span>
<span class="line">    // Read the data into an Array</span>
<span class="line">    std::shared_ptr&lt;arrow::Array&gt; array;</span>
<span class="line">    ARROW_ASSIGN_OR_RAISE(array, reader-&gt;Read());</span>
<span class="line">    // Create a RecordBatch from the Array</span>
<span class="line">    auto record = arrow::RecordBatch::Make(schema, array-&gt;length(), {array});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>将数据写入到 Arrow IPC Stream 中</li></ol><p>使用 <code>arrow::ipc::MakeStreamWriter</code> 创建的 IPC 流写入器，将使用 Slice 从 RecordBatch 提取出的部分数据序列化并写入到流中</p><div class="language-C++ line-numbers-mode" data-highlighter="prismjs" data-ext="C++" data-title="C++"><pre><code><span class="line">// Create a slice of the RecordBatch</span>
<span class="line">    auto slice = record-&gt;Slice(1, 2);</span>
<span class="line">    // Write the sliced RecordBatch to an IPC stream</span>
<span class="line">    ARROW_ASSIGN_OR_RAISE(auto output, arrow::ipc::MakeStreamWriter(arrow::default_memory_pool(), &amp;slice-&gt;schema()));</span>
<span class="line">    output-&gt;WriteRecordBatch(*slice);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>从 Arrow IPC Stream 读取该数据并打印</li></ol><p>创建一个的 <code>arrow::ipc::RecordBatchStreamReader</code>对象 reader2，该读取器从 output 对象的序列化输出中创建的，<code>output-&amp;gt;Finish()</code>方法返回一个包含序列化数据的 Buffer；然后从 reader2 中读取数据并打印输出</p><div class="language-C++ line-numbers-mode" data-highlighter="prismjs" data-ext="C++" data-title="C++"><pre><code><span class="line">// Read the IPC stream back into a RecordBatch</span>
<span class="line">    std::shared_ptr&lt;arrow::RecordBatchReader&gt; reader2;</span>
<span class="line">    ARROW_ASSIGN_OR_RAISE(reader2, arrow::ipc::RecordBatchStreamReader::Open(std::make_shared&lt;arrow::io::BufferReader&gt;(output-&gt;Finish())));</span>
<span class="line">    // Print the contents of the RecordBatch</span>
<span class="line">    std::shared_ptr&lt;arrow::RecordBatch&gt; readbatch;</span>
<span class="line">    ARROW_ASSIGN_OR_RAISE(readbatch, reader2-&gt;ReadRecordBatch());</span>
<span class="line">    std::cout &lt;&lt; readbatch-&gt;ToString() &lt;&lt; std::endl;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述实例的完整代码实现如下：</p><div class="language-C++ line-numbers-mode" data-highlighter="prismjs" data-ext="C++" data-title="C++"><pre><code><span class="line">#include &lt;arrow/api.h&gt;</span>
<span class="line">#include &lt;arrow/ipc/writer.h&gt;</span>
<span class="line">#include &lt;arrow/json/reader.h&gt;</span>
<span class="line">#include &lt;arrow/memory_pool.h&gt;</span>
<span class="line">#include &lt;arrow/result.h&gt;</span>
<span class="line">#include &lt;arrow/status.h&gt;</span>
<span class="line">#include &lt;iostream&gt;</span>
<span class="line">#include &lt;string&gt;</span>
<span class="line">int main() {</span>
<span class="line">    std::shared_ptr&lt;arrow::MemoryPool&gt; mem = arrow::default_memory_pool();</span>
<span class="line">    arrow::DataTypeVector fields;</span>
<span class="line">    auto field = arrow::field(&quot;list&quot;, arrow::list(arrow::binary()));</span>
<span class="line">    fields.push_back(field);</span>
<span class="line">    auto schema = std::make_shared&lt;arrow::Schema&gt;(fields);</span>
<span class="line">    // Create a JSON reader from a string of data</span>
<span class="line">    auto input_data = R&quot;([</span>
<span class="line">        [&quot;index1&quot;],</span>
<span class="line">        [&quot;index3&quot;, &quot;tag_int&quot;], [&quot;index5&quot;, &quot;tag_int&quot;],</span>
<span class="line">        [&quot;index6&quot;, &quot;tag_int&quot;], [&quot;index7&quot;, &quot;tag_int&quot;],</span>
<span class="line">        [&quot;index7&quot;, &quot;tag_int&quot;],</span>
<span class="line">        [&quot;index8&quot;]</span>
<span class="line">    ])&quot;;</span>
<span class="line">    auto reader = arrow::json::Reader::Make(arrow::default_memory_pool(), schema, input_data);</span>
<span class="line">    // Read the data into an Array</span>
<span class="line">    std::shared_ptr&lt;arrow::Array&gt; array;</span>
<span class="line">    ARROW_ASSIGN_OR_RAISE(array, reader-&gt;Read());</span>
<span class="line">    // Create a RecordBatch from the Array</span>
<span class="line">    auto record = arrow::RecordBatch::Make(schema, array-&gt;length(), {array});</span>
<span class="line">    // Create a slice of the RecordBatch</span>
<span class="line">    auto slice = record-&gt;Slice(1, 2);</span>
<span class="line">    // Write the sliced RecordBatch to an IPC stream</span>
<span class="line">    ARROW_ASSIGN_OR_RAISE(auto output, arrow::ipc::MakeStreamWriter(arrow::default_memory_pool(), &amp;slice-&gt;schema()));</span>
<span class="line">    output-&gt;WriteRecordBatch(*slice);</span>
<span class="line">    // Read the IPC stream back into a RecordBatch</span>
<span class="line">    std::shared_ptr&lt;arrow::RecordBatchReader&gt; reader2;</span>
<span class="line">    ARROW_ASSIGN_OR_RAISE(reader2, arrow::ipc::RecordBatchStreamReader::Open(std::make_shared&lt;arrow::io::BufferReader&gt;(output-&gt;Finish())));</span>
<span class="line">    // Print the contents of the RecordBatch</span>
<span class="line">    std::cout &lt;&lt; slice-&gt;ToString() &lt;&lt; std::endl;</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>`,31)),n("p",null,[n("a",y,[e[7]||(e[7]=s("Wes McKinney - Streaming Columnar Data with Apache Arrow")),i(a)])]),n("p",null,[n("a",_,[e[8]||(e[8]=s("深入浅出FlatBuffers原理-阿里云开发者社区 (aliyun.com)")),i(a)])]),n("p",null,[n("a",w,[e[9]||(e[9]=s("Improving Facebook's performance on Android with FlatBuffers - Engineering at Meta (fb.com)")),i(a)])])])}const F=t(p,[["render",R],["__file","092301.html.vue"]]),A=JSON.parse('{"path":"/blogs/bigdata/092301.html","title":"Apache Arrow 进程间通信消息格式","lang":"zh-CN","frontmatter":{"title":"Apache Arrow 进程间通信消息格式","date":"2024-09-23T00:00:00.000Z","tags":["Arrow"],"categories":["大数据"],"sidebar":true},"headers":[{"level":2,"title":"01 数据流格式","slug":"_01-数据流格式","link":"#_01-数据流格式","children":[]},{"level":2,"title":"02 元数据序列化","slug":"_02-元数据序列化","link":"#_02-元数据序列化","children":[{"level":3,"title":"2.1 FlatBuffers 数据结构定义","slug":"_2-1-flatbuffers-数据结构定义","link":"#_2-1-flatbuffers-数据结构定义","children":[]},{"level":3,"title":"2.2 FlatBuffers 序列化","slug":"_2-2-flatbuffers-序列化","link":"#_2-2-flatbuffers-序列化","children":[]},{"level":3,"title":"2.3 FlatBuffers 反序列化","slug":"_2-3-flatbuffers-反序列化","link":"#_2-3-flatbuffers-反序列化","children":[]}]},{"level":2,"title":"03 IPC example","slug":"_03-ipc-example","link":"#_03-ipc-example","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1780078668000,"updatedTime":1780281297000,"contributors":[{"name":"wanghaihua.randy","email":"wanghaihua.randy@jd.com","commits":2}]},"filePathRelative":"blogs/bigdata/092301.md"}');export{F as comp,A as data};
