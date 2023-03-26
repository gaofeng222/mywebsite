import{_ as s,c as a,o as n,a as o}from"./app.e6464ad1.js";const y=JSON.parse('{"title":"Win10 找不到 hosts 文件解决方法","description":"","frontmatter":{},"headers":[],"relativePath":"win10/host.md","lastUpdated":1678935368000}'),e={name:"win10/host.md"},t=o(`<h1 id="win10-找不到-hosts-文件解决方法" tabindex="-1">Win10 找不到 hosts 文件解决方法 <a class="header-anchor" href="#win10-找不到-hosts-文件解决方法" aria-hidden="true">#</a></h1><h2 id="状况" tabindex="-1">状况 <a class="header-anchor" href="#状况" aria-hidden="true">#</a></h2><p>今天想要修改 Windows10 系统中的 hosts 文件，一开始以为被系统隐藏了，在文件夹选项中取消隐藏受保护的操作系统文件，却发现在 C:\\Windows\\System32\\drivers\\etc 文件夹下依然没有 hosts 文件，新拷贝了一个 hosts 文件到文件夹下也没有任何效果。那么遇到这个问题要如何解决呢？下面 IT 百科分享下 Win10 取消隐藏受保护的操作系统文件依然找不到 hosts 文件解决方法。</p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-hidden="true">#</a></h2><p>打开 cmd 窗口，输入以下的代码</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">for </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">f </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">P </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dir %windir%</span><span style="color:#A6ACCD;">\\W</span><span style="color:#C3E88D;">inSxS</span><span style="color:#A6ACCD;">\\h</span><span style="color:#C3E88D;">osts /b /s</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;font-style:italic;">do</span><span style="color:#A6ACCD;"> copy </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">P </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">windir</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">\\System32\\drivers\\etc </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> echo </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">P </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> Notepad </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">P</span></span>
<span class="line"></span></code></pre></div><p>然后就可以看到 host 文件了</p>`,7),p=[t];function l(r,c,i,D,d,h){return n(),a("div",null,p)}const A=s(e,[["render",l]]);export{y as __pageData,A as default};