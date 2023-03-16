# 沙盒（sandbox）

沙盒（sandbox），另称沙箱，是一种按照安全策略限制程序行为的执行环境。“沙盒”技术的实践运用流程是：让疑似病毒文件的可疑行为在虚拟的“沙盒”里充分运行，“沙盒”会记下它的每一个动作；当疑似病毒充分暴露了其病毒属性后，“沙盒”就会执行“回滚”机制：将病毒的痕迹和动作抹去，恢复系统到正常状态。

## 安全策略

1. 不能运行任何本地的的可执行程序。

2. 不能从本地计算机文件系统中读取任何信息，也不能往本地计算机文件系统中写入任何信息。

3. 不能查看除 Java 版本信息和少数几个无害的操作系统详细信息外的任何有关本地计算机的信息。特别是，在沙箱中的代码不能查看用户名、E-mail 地址等信息。

4. 远程加载的程序不能与除下载程序所在的服务器之外的任何主机通信，这个服务器被称为源主机（originating host）。这条规则通常称为“远程代码只能与家人通话”这条规则将会确保用户不会被代码探查到内部网络资源（在 Java SE 6 中，Java Web Start 应用程序可以与其他网络连接，但必须得到用户的同意）。

简单说就是不能写，不能读，不给看。

## 针对什么

以 Chrome 为例，Chrome 采用的是多进程结构，进程类型主要有以下几种：

1. 主进程：负责所有资源管理、系统交互，前者包括 bookmark、cookie、history 管理等；后者包括屏幕绘制、处理 keyboard/mouse 输入、internet 连接等。（不在 Chrome 的 sandbox 中运行。）

2. web 渲染进程：负责 html 解析、javascript 执行、image decoding、页面布局等所有和网页相关的任务。所有的此类进程都强制在 sandbox 中运行。和用户、系统的联系不直接进行（也无法直接进行），而是通过 IPC（进程间通信）向主进程发送请求。

3. plugin 进程：每个 plugin 对应一个此类进程，动态地创建、销毁。目前的 plugin 大都需要直接操作系统资源，比如 flash plugin 会打开摄像头、下载临时文件到硬盘等，所以 plugin 进程不在 sandbox 中运行。

4. extension 进程：一种特殊的 web 渲染进程。

PS：extension 本身可以算是网页，安装了后是运行在沙盒里面的，但是点击扩展按钮后可能会启动额外的进程，这时候所进行的操作就不一定在沙箱内了。

总结起来就是只有和网页相关的任务（渲染进程）运行在 Chrome 的沙盒中。Chrome 的沙盒是依赖操作系统本身提供的机制实现，根据操作系统本身提供了相关的 API，限制进程的权限，比如让进程无法访问任何文件、无法获得用户输入、无法 hook 其他进程、无法创建子进程等，Chrome 的 sandbox 最大化的利用了这些限制。

## 限制：

1. 它主要防护恶意代码对系统的破坏，对其它类型的安全问题办法不多。比如：恶意代码可以从主进程获得所有的 cookie，并通过主进程发送出去。

2. 如果操作系统 API 本身存在漏洞而被攻破，Chrome 的 sandbox 也自然被穿。

3. plugin 进程不受 sandbox 保护，所以利用 plugin 漏洞的恶意代码在 Chrome 上都能发作

[学习资源](https://www.cnblogs.com/lovesong/p/5087423.html)