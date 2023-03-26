import{_ as a,c as p,o as l,b as s,d as n,a as o}from"./app.e6464ad1.js";const C="/mywebsite/assets/vue3.5c248560.jpg",T=JSON.parse('{"title":"Vue.js 设计与实现 (霍春阳)","description":"","frontmatter":{},"headers":[],"relativePath":"vue/vue3/vue3.md","lastUpdated":1679831978000}'),e={name:"vue/vue3/vue3.md"},c=C+"#pic_center",t=s("h1",{id:"vue-js-设计与实现-霍春阳",tabindex:"-1"},[n("Vue.js 设计与实现 (霍春阳) "),s("a",{class:"header-anchor",href:"#vue-js-设计与实现-霍春阳","aria-hidden":"true"},"#")],-1),r=s("h2",{id:"简介",tabindex:"-1"},[n("简介 "),s("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#")],-1),y=s("p",null,"基于 Vue.js 3，从规范出发，以源码为基础，并结合大量直观的配图，循序渐进地讲解 Vue.js 中各个功能模块的实现，细致剖析框架设计原理。全书共 18 章，分为六篇，主要内容包括：框架设计概览、响应系统、渲染器、组件化、编译器和服务端渲染等。通过阅读本书，对 Vue.js 2/3 具有上手经验的开发人员能够进一步理解 Vue.js 框架的实现细节，没有 Vue.js 使用经验但对框架设计感兴趣的前端开发人员，能够快速掌握 Vue.js 的设计原理",-1),A=s("p",null,[s("img",{src:c,alt:"Vue3设计与实现封面"})],-1),F=o(`<h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">序</span></span>
<span class="line"><span style="color:#FFCB6B;">前言</span></span>
<span class="line"><span style="color:#FFCB6B;">第</span><span style="color:#A6ACCD;">　 </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">章</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">权衡的艺术　</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#F78C6C;">1.1</span><span style="color:#A6ACCD;"> 　命令式和声明式　 </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#F78C6C;">1.2</span><span style="color:#A6ACCD;"> 　性能与可维护性的权衡　 </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#F78C6C;">1.3</span><span style="color:#A6ACCD;"> 　虚拟 DOM 的性能到底如何　 </span><span style="color:#F78C6C;">4</span></span>
<span class="line"><span style="color:#F78C6C;">1.4</span><span style="color:#A6ACCD;"> 　运行时和编译时　 </span><span style="color:#F78C6C;">8</span></span>
<span class="line"><span style="color:#F78C6C;">1.5</span><span style="color:#A6ACCD;"> 　总结　 </span><span style="color:#F78C6C;">11</span></span>
<span class="line"><span style="color:#FFCB6B;">第</span><span style="color:#A6ACCD;">　 </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">章</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">框架设计的核心要素　</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span></span>
<span class="line"><span style="color:#F78C6C;">2.1</span><span style="color:#A6ACCD;"> 　提升用户的开发体验　 </span><span style="color:#F78C6C;">12</span></span>
<span class="line"><span style="color:#F78C6C;">2.2</span><span style="color:#A6ACCD;"> 　控制框架代码的体积　 </span><span style="color:#F78C6C;">14</span></span>
<span class="line"><span style="color:#F78C6C;">2.3</span><span style="color:#A6ACCD;"> 　框架要做到良好的 Tree-Shaking 　 </span><span style="color:#F78C6C;">15</span></span>
<span class="line"><span style="color:#F78C6C;">2.4</span><span style="color:#A6ACCD;"> 　框架应该输出怎样的构建产物　 </span><span style="color:#F78C6C;">17</span></span>
<span class="line"><span style="color:#F78C6C;">2.5</span><span style="color:#A6ACCD;"> 　特性开关　 </span><span style="color:#F78C6C;">19</span></span>
<span class="line"><span style="color:#F78C6C;">2.6</span><span style="color:#A6ACCD;"> 　错误处理　 </span><span style="color:#F78C6C;">21</span></span>
<span class="line"><span style="color:#F78C6C;">2.7</span><span style="color:#A6ACCD;"> 　良好的 TypeScript 类型支持　 </span><span style="color:#F78C6C;">23</span></span>
<span class="line"><span style="color:#F78C6C;">2.8</span><span style="color:#A6ACCD;"> 　总结　 </span><span style="color:#F78C6C;">25</span></span>
<span class="line"><span style="color:#FFCB6B;">第</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">章　</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Vue.js</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">的设计思路　</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">27</span></span>
<span class="line"><span style="color:#F78C6C;">3.1</span><span style="color:#A6ACCD;"> 　声明式地描述 UI 　 </span><span style="color:#F78C6C;">27</span></span>
<span class="line"><span style="color:#F78C6C;">3.2</span><span style="color:#A6ACCD;"> 　初识渲染器　 </span><span style="color:#F78C6C;">29</span></span>
<span class="line"><span style="color:#F78C6C;">3.3</span><span style="color:#A6ACCD;"> 　组件的本质　 </span><span style="color:#F78C6C;">32</span></span>
<span class="line"><span style="color:#F78C6C;">3.4</span><span style="color:#A6ACCD;"> 　模板的工作原理　 </span><span style="color:#F78C6C;">34</span></span>
<span class="line"><span style="color:#F78C6C;">3.5</span><span style="color:#A6ACCD;"> 　 Vue.js 是各个模块组成的有机整体　 </span><span style="color:#F78C6C;">36</span></span>
<span class="line"><span style="color:#F78C6C;">3.6</span><span style="color:#A6ACCD;"> 　总结　 </span><span style="color:#F78C6C;">37</span></span>
<span class="line"><span style="color:#FFCB6B;">第</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">章　响应系统的作用与实现　</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40</span></span>
<span class="line"><span style="color:#F78C6C;">4.1</span><span style="color:#A6ACCD;"> 　响应式数据与副作用函数　 </span><span style="color:#F78C6C;">40</span></span>
<span class="line"><span style="color:#F78C6C;">4.2</span><span style="color:#A6ACCD;"> 　响应式数据的基本实现　 </span><span style="color:#F78C6C;">41</span></span>
<span class="line"><span style="color:#F78C6C;">4.3</span><span style="color:#A6ACCD;"> 　设计一个完善的响应系统　 </span><span style="color:#F78C6C;">43</span></span>
<span class="line"><span style="color:#F78C6C;">4.4</span><span style="color:#A6ACCD;"> 　分支切换与 cleanup 　 </span><span style="color:#F78C6C;">50</span></span>
<span class="line"><span style="color:#F78C6C;">4.5</span><span style="color:#A6ACCD;"> 　嵌套的 effect 与 effect 栈　 </span><span style="color:#F78C6C;">55</span></span>
<span class="line"><span style="color:#F78C6C;">4.6</span><span style="color:#A6ACCD;"> 　避免无限递归循环　 </span><span style="color:#F78C6C;">59</span></span>
<span class="line"><span style="color:#F78C6C;">4.7</span><span style="color:#A6ACCD;"> 　调度执行　 </span><span style="color:#F78C6C;">60</span></span>
<span class="line"><span style="color:#F78C6C;">4.8</span><span style="color:#A6ACCD;"> 　计算属性 computed 与 lazy 　 </span><span style="color:#F78C6C;">64</span></span>
<span class="line"><span style="color:#F78C6C;">4.9</span><span style="color:#A6ACCD;"> 　 watch 的实现原理　 </span><span style="color:#F78C6C;">71</span></span>
<span class="line"><span style="color:#F78C6C;">4.10</span><span style="color:#A6ACCD;"> 　立即执行的 watch 与回调执行时机　 </span><span style="color:#F78C6C;">75</span></span>
<span class="line"><span style="color:#F78C6C;">4.11</span><span style="color:#A6ACCD;"> 　过期的副作用　 </span><span style="color:#F78C6C;">77</span></span>
<span class="line"><span style="color:#F78C6C;">4.12</span><span style="color:#A6ACCD;"> 　总结　 </span><span style="color:#F78C6C;">82</span></span>
<span class="line"><span style="color:#FFCB6B;">第</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">章　非原始值的响应式方案　</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">84</span></span>
<span class="line"><span style="color:#F78C6C;">5.1</span><span style="color:#A6ACCD;"> 　理解 Proxy 和 Reflect 　 </span><span style="color:#F78C6C;">84</span></span>
<span class="line"><span style="color:#F78C6C;">5.2</span><span style="color:#A6ACCD;"> 　 JavaScript 对象及 Proxy 的工作原理　 </span><span style="color:#F78C6C;">88</span></span>
<span class="line"><span style="color:#F78C6C;">5.3</span><span style="color:#A6ACCD;"> 　如何代理 Object 　 </span><span style="color:#F78C6C;">92</span></span>
<span class="line"><span style="color:#F78C6C;">5.4</span><span style="color:#A6ACCD;"> 　合理地触发响应　 </span><span style="color:#F78C6C;">102</span></span>
<span class="line"><span style="color:#F78C6C;">5.5</span><span style="color:#A6ACCD;"> 　浅响应与深响应　 </span><span style="color:#F78C6C;">108</span></span>
<span class="line"><span style="color:#F78C6C;">5.6</span><span style="color:#A6ACCD;"> 　只读和浅只读　 </span><span style="color:#F78C6C;">110</span></span>
<span class="line"><span style="color:#F78C6C;">5.7</span><span style="color:#A6ACCD;"> 　代理数组　 </span><span style="color:#F78C6C;">113</span></span>
<span class="line"><span style="color:#A6ACCD;">5.7.1 　数组的索引与 length 　 </span><span style="color:#F78C6C;">114</span></span>
<span class="line"><span style="color:#A6ACCD;">5.7.2 　遍历数组　 </span><span style="color:#F78C6C;">119</span></span>
<span class="line"><span style="color:#A6ACCD;">5.7.3 　数组的查找方法　 </span><span style="color:#F78C6C;">124</span></span>
<span class="line"><span style="color:#A6ACCD;">5.7.4 　隐式修改数组长度的原型方法　 </span><span style="color:#F78C6C;">129</span></span>
<span class="line"><span style="color:#F78C6C;">5.8</span><span style="color:#A6ACCD;"> 　代理 Set 和 Map 　 </span><span style="color:#F78C6C;">132</span></span>
<span class="line"><span style="color:#A6ACCD;">5.8.1 　如何代理 Set 和 Map 　 </span><span style="color:#F78C6C;">133</span></span>
<span class="line"><span style="color:#A6ACCD;">5.8.2 　建立响应联系　 </span><span style="color:#F78C6C;">137</span></span>
<span class="line"><span style="color:#A6ACCD;">5.8.3 　避免污染原始数据　 </span><span style="color:#F78C6C;">140</span></span>
<span class="line"><span style="color:#A6ACCD;">5.8.4 　处理 forEach 　 </span><span style="color:#F78C6C;">143</span></span>
<span class="line"><span style="color:#A6ACCD;">5.8.5 　迭代器方法　 </span><span style="color:#F78C6C;">147</span></span>
<span class="line"><span style="color:#A6ACCD;">5.8.6 　 values 与 keys 方法　 </span><span style="color:#F78C6C;">152</span></span>
<span class="line"><span style="color:#F78C6C;">5.9</span><span style="color:#A6ACCD;"> 　总结　 </span><span style="color:#F78C6C;">155</span></span>
<span class="line"><span style="color:#FFCB6B;">第</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">章　原始值的响应式方案　</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">158</span></span>
<span class="line"><span style="color:#F78C6C;">6.1</span><span style="color:#A6ACCD;"> 　引入 ref 的概念　 </span><span style="color:#F78C6C;">158</span></span>
<span class="line"><span style="color:#F78C6C;">6.2</span><span style="color:#A6ACCD;"> 　响应丢失问题　 </span><span style="color:#F78C6C;">160</span></span>
<span class="line"><span style="color:#F78C6C;">6.3</span><span style="color:#A6ACCD;"> 　自动脱 ref 　 </span><span style="color:#F78C6C;">164</span></span>
<span class="line"><span style="color:#F78C6C;">6.4</span><span style="color:#A6ACCD;"> 　总结　 </span><span style="color:#F78C6C;">166</span></span>
<span class="line"><span style="color:#FFCB6B;">第</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">章　渲染器的设计　</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">170</span></span>
<span class="line"><span style="color:#F78C6C;">7.1</span><span style="color:#A6ACCD;"> 　渲染器与响应系统的结合　 </span><span style="color:#F78C6C;">170</span></span>
<span class="line"><span style="color:#F78C6C;">7.2</span><span style="color:#A6ACCD;"> 　渲染器的基本概念　 </span><span style="color:#F78C6C;">172</span></span>
<span class="line"><span style="color:#F78C6C;">7.3</span><span style="color:#A6ACCD;"> 　自定义渲染器　 </span><span style="color:#F78C6C;">175</span></span>
<span class="line"><span style="color:#F78C6C;">7.4</span><span style="color:#A6ACCD;"> 　总结　 </span><span style="color:#F78C6C;">179</span></span>
<span class="line"><span style="color:#FFCB6B;">第</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">章　挂载与更新　</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">180</span></span>
<span class="line"><span style="color:#F78C6C;">8.1</span><span style="color:#A6ACCD;"> 　挂载子节点和元素的属性　 </span><span style="color:#F78C6C;">180</span></span>
<span class="line"><span style="color:#F78C6C;">8.2</span><span style="color:#A6ACCD;"> 　 HTML Attributes 与 DOM Properties 　 </span><span style="color:#F78C6C;">182</span></span>
<span class="line"><span style="color:#F78C6C;">8.3</span><span style="color:#A6ACCD;"> 　正确地设置元素属性　 </span><span style="color:#F78C6C;">184</span></span>
<span class="line"><span style="color:#F78C6C;">8.4</span><span style="color:#A6ACCD;"> 　 class 的处理　 </span><span style="color:#F78C6C;">189</span></span>
<span class="line"><span style="color:#F78C6C;">8.5</span><span style="color:#A6ACCD;"> 　卸载操作　 </span><span style="color:#F78C6C;">192</span></span>
<span class="line"><span style="color:#F78C6C;">8.6</span><span style="color:#A6ACCD;"> 　区分 vnode 的类型　 </span><span style="color:#F78C6C;">195</span></span>
<span class="line"><span style="color:#F78C6C;">8.7</span><span style="color:#A6ACCD;"> 　事件的处理　 </span><span style="color:#F78C6C;">196</span></span>
<span class="line"><span style="color:#F78C6C;">8.8</span><span style="color:#A6ACCD;"> 　事件冒泡与更新时机问题　 </span><span style="color:#F78C6C;">201</span></span>
<span class="line"><span style="color:#F78C6C;">8.9</span><span style="color:#A6ACCD;"> 　更新子节点　 </span><span style="color:#F78C6C;">204</span></span>
<span class="line"><span style="color:#F78C6C;">8.10</span><span style="color:#A6ACCD;"> 　文本节点和注释节点　 </span><span style="color:#F78C6C;">209</span></span>
<span class="line"><span style="color:#F78C6C;">8.11</span><span style="color:#A6ACCD;"> 　 Fragment 　 </span><span style="color:#F78C6C;">212</span></span>
<span class="line"><span style="color:#F78C6C;">8.12</span><span style="color:#A6ACCD;"> 　总结　 </span><span style="color:#F78C6C;">215</span></span>
<span class="line"><span style="color:#FFCB6B;">第</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">章　简单</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Diff</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">算法　</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">218</span></span>
<span class="line"><span style="color:#F78C6C;">9.1</span><span style="color:#A6ACCD;"> 　减少 DOM 操作的性能开销　 </span><span style="color:#F78C6C;">218</span></span>
<span class="line"><span style="color:#F78C6C;">9.2</span><span style="color:#A6ACCD;"> 　 DOM 复用与 key 的作用　 </span><span style="color:#F78C6C;">221</span></span>
<span class="line"><span style="color:#F78C6C;">9.3</span><span style="color:#A6ACCD;"> 　找到需要移动的元素　 </span><span style="color:#F78C6C;">225</span></span>
<span class="line"><span style="color:#F78C6C;">9.4</span><span style="color:#A6ACCD;"> 　如何移动元素　 </span><span style="color:#F78C6C;">228</span></span>
<span class="line"><span style="color:#F78C6C;">9.5</span><span style="color:#A6ACCD;"> 　添加新元素　 </span><span style="color:#F78C6C;">233</span></span>
<span class="line"><span style="color:#F78C6C;">9.6</span><span style="color:#A6ACCD;"> 　移除不存在的元素　 </span><span style="color:#F78C6C;">238</span></span>
<span class="line"><span style="color:#F78C6C;">9.7</span><span style="color:#A6ACCD;"> 　总结　 </span><span style="color:#F78C6C;">241</span></span>
<span class="line"><span style="color:#FFCB6B;">第</span><span style="color:#A6ACCD;">　 </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">章</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">双端</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Diff</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">算法　</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">242</span></span>
<span class="line"><span style="color:#F78C6C;">10.1</span><span style="color:#A6ACCD;"> 　双端比较的原理　 </span><span style="color:#F78C6C;">242</span></span>
<span class="line"><span style="color:#F78C6C;">10.2</span><span style="color:#A6ACCD;"> 　双端比较的优势　 </span><span style="color:#F78C6C;">252</span></span>
<span class="line"><span style="color:#F78C6C;">10.3</span><span style="color:#A6ACCD;"> 　非理想状况的处理方式　 </span><span style="color:#F78C6C;">255</span></span>
<span class="line"><span style="color:#F78C6C;">10.4</span><span style="color:#A6ACCD;"> 　添加新元素　 </span><span style="color:#F78C6C;">263</span></span>
<span class="line"><span style="color:#F78C6C;">10.5</span><span style="color:#A6ACCD;"> 　移除不存在的元素　 </span><span style="color:#F78C6C;">268</span></span>
<span class="line"><span style="color:#F78C6C;">10.6</span><span style="color:#A6ACCD;"> 　总结　 </span><span style="color:#F78C6C;">270</span></span>
<span class="line"><span style="color:#FFCB6B;">第</span><span style="color:#A6ACCD;">　 </span><span style="color:#F78C6C;">11</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">章</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">快速</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Diff</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">算法　</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">271</span></span>
<span class="line"><span style="color:#F78C6C;">11.1</span><span style="color:#A6ACCD;"> 　相同的前置元素和后置元素　 </span><span style="color:#F78C6C;">271</span></span>
<span class="line"><span style="color:#F78C6C;">11.2</span><span style="color:#A6ACCD;"> 　判断是否需要进行 DOM 移动操作　 </span><span style="color:#F78C6C;">279</span></span>
<span class="line"><span style="color:#F78C6C;">11.3</span><span style="color:#A6ACCD;"> 　如何移动元素　 </span><span style="color:#F78C6C;">288</span></span>
<span class="line"><span style="color:#F78C6C;">11.4</span><span style="color:#A6ACCD;"> 　总结　 </span><span style="color:#F78C6C;">296</span></span>
<span class="line"><span style="color:#FFCB6B;">第</span><span style="color:#A6ACCD;">　 </span><span style="color:#F78C6C;">12</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">章</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">组件的实现原理　</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">298</span></span>
<span class="line"><span style="color:#F78C6C;">12.1</span><span style="color:#A6ACCD;"> 　渲染组件　 </span><span style="color:#F78C6C;">298</span></span>
<span class="line"><span style="color:#F78C6C;">12.2</span><span style="color:#A6ACCD;"> 　组件状态与自更新　 </span><span style="color:#F78C6C;">301</span></span>
<span class="line"><span style="color:#F78C6C;">12.3</span><span style="color:#A6ACCD;"> 　组件实例与组件的生命周期　 </span><span style="color:#F78C6C;">304</span></span>
<span class="line"><span style="color:#F78C6C;">12.4</span><span style="color:#A6ACCD;"> 　 props 与组件的被动更新　 </span><span style="color:#F78C6C;">306</span></span>
<span class="line"><span style="color:#F78C6C;">12.5</span><span style="color:#A6ACCD;"> 　 setup 函数的作用与实现　 </span><span style="color:#F78C6C;">311</span></span>
<span class="line"><span style="color:#F78C6C;">12.6</span><span style="color:#A6ACCD;"> 　组件事件与 emit 的实现　 </span><span style="color:#F78C6C;">314</span></span>
<span class="line"><span style="color:#F78C6C;">12.7</span><span style="color:#A6ACCD;"> 　插槽的工作原理与实现　 </span><span style="color:#F78C6C;">316</span></span>
<span class="line"><span style="color:#F78C6C;">12.8</span><span style="color:#A6ACCD;"> 　注册生命周期　 </span><span style="color:#F78C6C;">318</span></span>
<span class="line"><span style="color:#F78C6C;">12.9</span><span style="color:#A6ACCD;"> 　总结　 </span><span style="color:#F78C6C;">320</span></span>
<span class="line"><span style="color:#FFCB6B;">第</span><span style="color:#A6ACCD;">　 </span><span style="color:#F78C6C;">13</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">章</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">异步组件与函数式组件　</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">322</span></span>
<span class="line"><span style="color:#F78C6C;">13.1</span><span style="color:#A6ACCD;"> 　异步组件要解决的问题　 </span><span style="color:#F78C6C;">322</span></span>
<span class="line"><span style="color:#F78C6C;">13.2</span><span style="color:#A6ACCD;"> 　异步组件的实现原理　 </span><span style="color:#F78C6C;">324</span></span>
<span class="line"><span style="color:#A6ACCD;">13.2.1 　封装 defineAsyncComponent 函数　 </span><span style="color:#F78C6C;">324</span></span>
<span class="line"><span style="color:#A6ACCD;">13.2.2 　超时与 Error 组件　 </span><span style="color:#F78C6C;">325</span></span>
<span class="line"><span style="color:#A6ACCD;">13.2.3 　延迟与 Loading 组件　 </span><span style="color:#F78C6C;">328</span></span>
<span class="line"><span style="color:#A6ACCD;">13.2.4 　重试机制　 </span><span style="color:#F78C6C;">331</span></span>
<span class="line"><span style="color:#F78C6C;">13.3</span><span style="color:#A6ACCD;"> 　函数式组件　 </span><span style="color:#F78C6C;">333</span></span>
<span class="line"><span style="color:#F78C6C;">13.4</span><span style="color:#A6ACCD;"> 　总结　 </span><span style="color:#F78C6C;">335</span></span>
<span class="line"><span style="color:#FFCB6B;">第</span><span style="color:#A6ACCD;">　 </span><span style="color:#F78C6C;">14</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">章</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">内建组件和模块　</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">337</span></span>
<span class="line"><span style="color:#F78C6C;">14.1</span><span style="color:#A6ACCD;"> 　 KeepAlive 组件的实现原理　 </span><span style="color:#F78C6C;">337</span></span>
<span class="line"><span style="color:#A6ACCD;">14.1.1 　组件的激活与失活　 </span><span style="color:#F78C6C;">337</span></span>
<span class="line"><span style="color:#A6ACCD;">14.1.2 　 include 和 exclude 　 </span><span style="color:#F78C6C;">342</span></span>
<span class="line"><span style="color:#A6ACCD;">14.1.3 　缓存管理　 </span><span style="color:#F78C6C;">343</span></span>
<span class="line"><span style="color:#F78C6C;">14.2</span><span style="color:#A6ACCD;"> 　 Teleport 组件的实现原理　 </span><span style="color:#F78C6C;">346</span></span>
<span class="line"><span style="color:#A6ACCD;">14.2.1 　 Teleport 组件要解决的问题　 </span><span style="color:#F78C6C;">346</span></span>
<span class="line"><span style="color:#A6ACCD;">14.2.2 　实现 Teleport 组件　 </span><span style="color:#F78C6C;">347</span></span>
<span class="line"><span style="color:#F78C6C;">14.3</span><span style="color:#A6ACCD;"> 　 Transition 组件的实现原理　 </span><span style="color:#F78C6C;">350</span></span>
<span class="line"><span style="color:#A6ACCD;">14.3.1 　原生 DOM 的过渡　 </span><span style="color:#F78C6C;">351</span></span>
<span class="line"><span style="color:#A6ACCD;">14.3.2 　实现 Transition 组件　 </span><span style="color:#F78C6C;">356</span></span>
<span class="line"><span style="color:#F78C6C;">14.4</span><span style="color:#A6ACCD;"> 　总结　 </span><span style="color:#F78C6C;">360</span></span>
<span class="line"><span style="color:#FFCB6B;">第</span><span style="color:#A6ACCD;">　 </span><span style="color:#F78C6C;">15</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">章</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">编译器核心技术概览　</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">364</span></span>
<span class="line"><span style="color:#F78C6C;">15.1</span><span style="color:#A6ACCD;"> 　模板 DSL 的编译器　 </span><span style="color:#F78C6C;">364</span></span>
<span class="line"><span style="color:#F78C6C;">15.2</span><span style="color:#A6ACCD;"> 　 parser 的实现原理与状态机　 </span><span style="color:#F78C6C;">368</span></span>
<span class="line"><span style="color:#F78C6C;">15.3</span><span style="color:#A6ACCD;"> 　构造 AST 　 </span><span style="color:#F78C6C;">374</span></span>
<span class="line"><span style="color:#F78C6C;">15.4</span><span style="color:#A6ACCD;"> 　 AST 的转换与插件化架构　 </span><span style="color:#F78C6C;">383</span></span>
<span class="line"><span style="color:#A6ACCD;">15.4.1 　节点的访问　 </span><span style="color:#F78C6C;">383</span></span>
<span class="line"><span style="color:#A6ACCD;">15.4.2 　转换上下文与节点操作　 </span><span style="color:#F78C6C;">387</span></span>
<span class="line"><span style="color:#A6ACCD;">15.4.3 　进入与退出　 </span><span style="color:#F78C6C;">392</span></span>
<span class="line"><span style="color:#F78C6C;">15.5</span><span style="color:#A6ACCD;"> 　将模板 AST 转为 JavaScript AST 　 </span><span style="color:#F78C6C;">396</span></span>
<span class="line"><span style="color:#F78C6C;">15.6</span><span style="color:#A6ACCD;"> 　代码生成　 </span><span style="color:#F78C6C;">402</span></span>
<span class="line"><span style="color:#F78C6C;">15.7</span><span style="color:#A6ACCD;"> 　总结　 </span><span style="color:#F78C6C;">407</span></span>
<span class="line"><span style="color:#FFCB6B;">第</span><span style="color:#A6ACCD;">　 </span><span style="color:#F78C6C;">16</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">章</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">解析器　</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">409</span></span>
<span class="line"><span style="color:#F78C6C;">16.1</span><span style="color:#A6ACCD;"> 　文本模式及其对解析器的影响　 </span><span style="color:#F78C6C;">409</span></span>
<span class="line"><span style="color:#F78C6C;">16.2</span><span style="color:#A6ACCD;"> 　递归下降算法构造模板 AST 　 </span><span style="color:#F78C6C;">413</span></span>
<span class="line"><span style="color:#F78C6C;">16.3</span><span style="color:#A6ACCD;"> 　状态机的开启与停止　 </span><span style="color:#F78C6C;">419</span></span>
<span class="line"><span style="color:#F78C6C;">16.4</span><span style="color:#A6ACCD;"> 　解析标签节点　 </span><span style="color:#F78C6C;">426</span></span>
<span class="line"><span style="color:#F78C6C;">16.5</span><span style="color:#A6ACCD;"> 　解析属性　 </span><span style="color:#F78C6C;">430</span></span>
<span class="line"><span style="color:#F78C6C;">16.6</span><span style="color:#A6ACCD;"> 　解析文本与解码 HTML 实体　 </span><span style="color:#F78C6C;">436</span></span>
<span class="line"><span style="color:#A6ACCD;">16.6.1 　解析文本　 </span><span style="color:#F78C6C;">436</span></span>
<span class="line"><span style="color:#A6ACCD;">16.6.2 　解码命名字符引用　 </span><span style="color:#F78C6C;">438</span></span>
<span class="line"><span style="color:#A6ACCD;">16.6.3 　解码数字字符引用　 </span><span style="color:#F78C6C;">445</span></span>
<span class="line"><span style="color:#F78C6C;">16.7</span><span style="color:#A6ACCD;"> 　解析插值与注释　 </span><span style="color:#F78C6C;">449</span></span>
<span class="line"><span style="color:#F78C6C;">16.8</span><span style="color:#A6ACCD;"> 　总结　 </span><span style="color:#F78C6C;">451</span></span>
<span class="line"><span style="color:#FFCB6B;">第</span><span style="color:#A6ACCD;">　 </span><span style="color:#F78C6C;">17</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">章</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">编译优化　</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">453</span></span>
<span class="line"><span style="color:#F78C6C;">17.1</span><span style="color:#A6ACCD;"> 　动态节点收集与补丁标志　 </span><span style="color:#F78C6C;">453</span></span>
<span class="line"><span style="color:#A6ACCD;">17.1.1 　传统 Diff 算法的问题　 </span><span style="color:#F78C6C;">453</span></span>
<span class="line"><span style="color:#A6ACCD;">17.1.2 　 Block 与 PatchFlags 　 </span><span style="color:#F78C6C;">454</span></span>
<span class="line"><span style="color:#A6ACCD;">17.1.3 　收集动态节点　 </span><span style="color:#F78C6C;">457</span></span>
<span class="line"><span style="color:#A6ACCD;">17.1.4 　渲染器的运行时支持　 </span><span style="color:#F78C6C;">459</span></span>
<span class="line"><span style="color:#F78C6C;">17.2</span><span style="color:#A6ACCD;"> 　 Block 树　 </span><span style="color:#F78C6C;">461</span></span>
<span class="line"><span style="color:#A6ACCD;">17.2.1 　带有 v-if 指令的节点　 </span><span style="color:#F78C6C;">462</span></span>
<span class="line"><span style="color:#A6ACCD;">17.2.2 　带有 v-for 指令的节点　 </span><span style="color:#F78C6C;">464</span></span>
<span class="line"><span style="color:#A6ACCD;">17.2.3 　 Fragment 的稳定性　 </span><span style="color:#F78C6C;">465</span></span>
<span class="line"><span style="color:#F78C6C;">17.3</span><span style="color:#A6ACCD;"> 　静态提升　 </span><span style="color:#F78C6C;">466</span></span>
<span class="line"><span style="color:#F78C6C;">17.4</span><span style="color:#A6ACCD;"> 　预字符串化　 </span><span style="color:#F78C6C;">468</span></span>
<span class="line"><span style="color:#F78C6C;">17.5</span><span style="color:#A6ACCD;"> 　缓存内联事件处理函数　 </span><span style="color:#F78C6C;">469</span></span>
<span class="line"><span style="color:#F78C6C;">17.6</span><span style="color:#A6ACCD;"> 　 v-once 　 </span><span style="color:#F78C6C;">470</span></span>
<span class="line"><span style="color:#F78C6C;">17.7</span><span style="color:#A6ACCD;"> 　总结　 </span><span style="color:#F78C6C;">471</span></span>
<span class="line"><span style="color:#FFCB6B;">第</span><span style="color:#A6ACCD;">　 </span><span style="color:#F78C6C;">18</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">章</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">同构渲染　</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">474</span></span>
<span class="line"><span style="color:#F78C6C;">18.1</span><span style="color:#A6ACCD;"> 　 CSR、SSR 以及同构渲染　 </span><span style="color:#F78C6C;">474</span></span>
<span class="line"><span style="color:#F78C6C;">18.2</span><span style="color:#A6ACCD;"> 　将虚拟 DOM 渲染为 HTML 字符串　 </span><span style="color:#F78C6C;">478</span></span>
<span class="line"><span style="color:#F78C6C;">18.3</span><span style="color:#A6ACCD;"> 　将组件渲染为 HTML 字符串　 </span><span style="color:#F78C6C;">484</span></span>
<span class="line"><span style="color:#F78C6C;">18.4</span><span style="color:#A6ACCD;"> 　客户端激活的原理　 </span><span style="color:#F78C6C;">489</span></span>
<span class="line"><span style="color:#F78C6C;">18.5</span><span style="color:#A6ACCD;"> 　编写同构的代码　 </span><span style="color:#F78C6C;">494</span></span>
<span class="line"><span style="color:#A6ACCD;">18.5.1 　组件的生命周期　 </span><span style="color:#F78C6C;">494</span></span>
<span class="line"><span style="color:#A6ACCD;">18.5.2 　使用跨平台的 API 　 </span><span style="color:#F78C6C;">496</span></span>
<span class="line"><span style="color:#A6ACCD;">18.5.3 　只在某一端引入模块　 </span><span style="color:#F78C6C;">496</span></span>
<span class="line"><span style="color:#A6ACCD;">18.5.4 　避免交叉请求引起的状态污染　 </span><span style="color:#F78C6C;">497</span></span>
<span class="line"><span style="color:#A6ACCD;">18.5.5 　组件　 </span><span style="color:#F78C6C;">498</span></span>
<span class="line"><span style="color:#F78C6C;">18.6</span><span style="color:#A6ACCD;"> 　总结　 </span><span style="color:#F78C6C;">499</span></span>
<span class="line"></span></code></pre></div>`,2),D=[t,r,y,A,F];function i(d,B,u,E,_,h){return l(),p("div",null,D)}const v=a(e,[["render",i]]);export{T as __pageData,v as default};
