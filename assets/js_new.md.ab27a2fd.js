import{_ as s,c as n,o as a,a as o}from"./app.e6464ad1.js";const A=JSON.parse('{"title":"new 绑定","description":"","frontmatter":{},"headers":[],"relativePath":"js/new.md","lastUpdated":1678935368000}'),e={name:"js/new.md"},l=o(`<h1 id="new-绑定" tabindex="-1">new 绑定 <a class="header-anchor" href="#new-绑定" aria-hidden="true">#</a></h1><blockquote><p>函数如果作为构造函数使用 <code>new</code> 调用时， <code>this</code> 绑定的是新创建的构造函数的实例。</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Foo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> bar </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Foo</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 输出: Foo 实例，this 就是 bar</span></span>
<span class="line"></span></code></pre></div><blockquote><p>实际上使用 new 调用构造函数时，会依次执行下面的操作：</p></blockquote><ul><li>创建一个新对象</li><li>构造函数的 prototype 被赋值给这个新对象的 <strong>__proto__</strong></li><li>将新对象赋给当前的 this</li><li>执行构造函数</li><li>如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象，如果返回的不是对象将被忽略</li></ul>`,5),t=[l];function p(c,r,i,_,d,y){return a(),n("div",null,t)}const D=s(e,[["render",p]]);export{A as __pageData,D as default};