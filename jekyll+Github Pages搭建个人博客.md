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

### 04 修改主题



### 参考资料

[Jekyll官方文档](http://jekyllcn.com/docs/)

[github建站指南](https://qoclub.site/github%E5%BB%BA%E7%AB%99%E6%8C%87%E5%8D%97.html)

[jekyll主题使用说明文档](https://github.com/jsksxs360/xs-huxblog/blob/master/Document.md)

