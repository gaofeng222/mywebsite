import{_ as s,c as n,o as a,a as p}from"./app.e6464ad1.js";const C=JSON.parse('{"title":"vue 中的 provide& inject","description":"","frontmatter":{},"headers":[],"relativePath":"vue/provide.md","lastUpdated":1679798557000}'),l={name:"vue/provide.md"},o=p(`<h1 id="vue-中的-provide-inject" tabindex="-1">vue 中的 provide&amp; inject <a class="header-anchor" href="#vue-中的-provide-inject" aria-hidden="true">#</a></h1><p>跨组件通信传输数据的方法,父组件把自己暴露给子孙组件，子孙组件可以获取或操作父组件上的方法和属性</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">//parent.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">···</span></span>
<span class="line"><span style="color:#82AAFF;">data</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">       smoke</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">no-smoke</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//1.这样传递的数据不是响应式的</span></span>
<span class="line"><span style="color:#F07178;">       </span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;">:</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        smoke</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">no-smoke</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">//1.这样传递的数据是可响应式的</span></span>
<span class="line"><span style="color:#F07178;">       </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#82AAFF;">provide</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      smoke</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">smoke</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">   </span><span style="color:#676E95;font-style:italic;">//1.这样传递的数据不是响应式的</span></span>
<span class="line"><span style="color:#F07178;">      parent</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this,</span><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">//如果要实现子孙组件的响应性，直接传递整个父组件，再从上面获取</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#676E95;font-style:italic;">// 或者写成函数形式 smoke: () =&gt; this.smoke</span></span>
<span class="line"><span style="color:#F07178;">      obj</span><span style="color:#89DDFF;">:this.</span><span style="color:#A6ACCD;">obj</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">···</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//G2.vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">···</span></span>
<span class="line"><span style="color:#FFCB6B;">inject</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">parent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">smoke</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">//通过this获取</span></span>
<span class="line"><span style="color:#A6ACCD;">···</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="官方解释" tabindex="-1">官方解释 <a class="header-anchor" href="#官方解释" aria-hidden="true">#</a></h2><p>上面注释 1 那里这种方法传递过来的数据是没有响应性的，当你改变父组件中的 smoke 时，子组件中接收的 smoke 并不会改变。</p><p>官方解释：provide 和 inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的 property 还是可响应的。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><p>主要解决深层次的组件嵌套，祖先组件向子孙组件之间传值。<br> 一层嵌套的父子组件可以使用 props 来传值，props 本身就是有相应性的。<br> 根据自身代码选择合适的传值方式，并不一定非要用 provide/inject 的传值。</p>`,8),e=[o];function t(c,r,i,y,F,D){return a(),n("div",null,e)}const A=s(l,[["render",t]]);export{C as __pageData,A as default};
