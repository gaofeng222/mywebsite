# Win10 找不到 hosts 文件解决方法

## 状况

今天想要修改 Windows10 系统中的 hosts 文件，一开始以为被系统隐藏了，在文件夹选项中取消隐藏受保护的操作系统文件，却发现在 C:\Windows\System32\drivers\etc 文件夹下依然没有 hosts 文件，新拷贝了一个 hosts 文件到文件夹下也没有任何效果。那么遇到这个问题要如何解决呢？下面 IT 百科分享下 Win10 取消隐藏受保护的操作系统文件依然找不到 hosts 文件解决方法。

## 解决方案

打开 cmd 窗口，输入以下的代码

```js
for /f %P in ('dir %windir%\WinSxS\hosts /b /s') do copy %P %windir%\System32\drivers\etc & echo %P & Notepad %P
```

然后就可以看到 host 文件了
