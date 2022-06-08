---
layout: post
title:  "搭建个人博客"
subtitle:   " \"jekyll + Github Pages\""
date:   2022-06-08 13:46:10 +0800
author:     "清欢"
catalog: true
categories: 杂谈
---
## jekyll+Github Pages搭建个人博客

### 01 Github 新建博客仓库

新建一个仓库（repository），命名为`用户名.github.io`，选择`Add a README file`



### 02 安装 jekyll

#### 安装 Ruby 环境

​	因为 Jekyll 是用 Ruby 开发的，所以如果你的系统上没有安装，那么首先需要安装 Ruby。

​	官网https://rubyinstaller.org/downloads/ 下载RubyInstaller。注意：所有的勾都要选上（默认）。下载 ruby-dev 否则在安装 jekyll 时会出现`ERROR: Failed to build gem native extension`的报错。

```
ERROR:  Error installing jekyll:
    ERROR: Failed to build gem native extension.

    current directory: /var/lib/gems/2.3.0/gems/ffi-1.9.18/ext/ffi_c
/usr/bin/ruby2.3 -r ./siteconf20170316-3892-175h62n.rb extconf.rb
mkmf.rb can't find header files for ruby at /usr/lib/ruby/include/ruby.h

extconf failed, exit code 1

Gem files will remain installed in /var/lib/gems/2.3.0/gems/ffi-1.9.18 for inspection.
Results logged to /var/lib/gems/2.3.0/extensions/x86_64-linux/2.3.0/ffi-1.9.18/gem_make.out
```

​	无难点安装后 验证命令：ruby -v

#### 安装RubyGems

Windows中下载ZIP (下载页面[ https://rubygems.org/pages/download](https://rubygems.org/pages/download))，下载后解压到任意路径。打开Windows的cmd界面，输入命令： $ cd 解压的路径

#### 切换镜像源

```
gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/

gem sources -l
```

#### 安装Jekyll

```
gem install jekyll
```

#### 安装jekyll-paginate

```
gem install jekyll-paginate
```

验证 jekyll : jekyll -v

#### 安装 Bundler

```
gem install bundler
```

安装 一个名为 Bundler 的程序 —— 用于自动安装其他所需的程序

#### 本地启动服务

在命令行中切换到你的个人网站仓库内

```
jekyll serve 
```

 `127.0.0.1:4000` 或 `localhost:4000`

注意：如端口被占用修改端口 jekyll serve -P 5555

### 03 博文上传

####  Jekyll 初始化模板

以下是一个获取最简单 Jekyll 模板并生成静态页面并运行的例子

```
~ $ gem install jekyll
~ $ jekyll new myblog
~ $ cd myblog
~/myblog $ jekyll serve
# => Now browse to http://localhost:4000
```

如果你希望把 jekyll 安装到当前目录，你可以运行 `jekyll new .` 来代替。如果当前目录非空，你还需要增添 `--force` 参数，所以命令应为 `jekyll new . --force`。

就是这么简单。从现在开始，你可以通过创建文章、改变头信息来控制模板和输出、修改 Jekyll 设置来使你的站点变得更有趣

上传到github仓库

#### 撰写博文

​	在目录结构介绍中说明过，所有的文章都在 _posts 文件夹中。这些文件可以用 Markdown 编写，也可以用 Textile 格式编写。只要文件中有 YAML 头信息，它们就会从源格式转化成 HTML 页面，从而成为你的静态网站的一部分。

​	发表一篇新文章，你所需要做的就是在 `_posts` 文件夹中创建一个新的文件。文件名的命名非常重要。Jekyll 要求一篇文章的文件名遵循下面的格式：

```
年-月-日-标题.MARKUP
```

​	在这里，`年`是 4 位数字，`月`和`日`都是 2 位数字。`MARKUP`扩展名代表了这篇文章是用什么格式写的。下面是一些合法的文件名的例子：

```
2011-12-31-new-years-eve-is-awesome.md
2012-09-12-how-to-write-a-blog.textile
```

更多内容形式参考官方文档 [撰写博客 - Jekyll • 简单静态博客网站生成器](http://jekyllcn.com/docs/posts/)

#### 本地预览



Jekyll 运行的时候提示错误 cannot load such file -- webrick (LoadError)

这是因为：
从 Ruby 3.0 开始 webrick 已经不在绑定到 Ruby 中了，请参考链接： [Ruby 3.0.0 Released](https://link.zhihu.com/?target=https%3A//www.ruby-lang.org/en/news/2020/12/25/ruby-3-0-0-released/) 中的说明。

webrick 需要手动进行添加。

添加的命令为：

```
bundle add webrick
```

如果遇到超时问题，修改bundle的镜像为国内源

```
# 移除gem默认源，改成ruby-china源
$ gem sources -r https://rubygems.org/ -a https://gems.ruby-china.com/
# 使用Gemfile和Bundle的项目，可以做下面修改，就不用修改Gemfile的source
$ bundle config mirror.https://rubygems.org https://gems.ruby-china.com
# 删除Bundle的一个镜像源
$ bundle config --delete 'mirror.https://rubygems.org'
```



### 04 修改主题



#### 拷贝模板代码



#### 修改_config文件







### 参考资料

[Jekyll官方文档](http://jekyllcn.com/docs/)

[github建站指南](https://qoclub.site/github%E5%BB%BA%E7%AB%99%E6%8C%87%E5%8D%97.html)

[jekyll主题使用说明文档](https://github.com/jsksxs360/xs-huxblog/blob/master/Document.md)

[修改Gem,Bundler的镜像为国内源](https://www.jianshu.com/p/a56aa38a6403)

[码志 Jekyll 模板](https://mazhuang.org/)

[huxpro Jekyll 模板](https://github.com/Huxpro/huxpro.github.io)

[huxblog-boilerplate](https://github.com/Huxpro/huxblog-boilerplate)
