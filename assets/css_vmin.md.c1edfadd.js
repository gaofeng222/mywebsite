import{_ as e,c as a,o as i,a as t}from"./app.e6464ad1.js";const s="/mywebsite/assets/vw.5c4ecdc5.png",n="/mywebsite/assets/vw-h.462b564b.png",r="/mywebsite/assets/vmin.b98906db.png",u=JSON.parse('{"title":"b 站移动端为什么用 vmin 不用 vw","description":"","frontmatter":{},"headers":[],"relativePath":"css/vmin.md","lastUpdated":1678935368000}'),c={name:"css/vmin.md"},d=t('<h1 id="b-站移动端为什么用-vmin-不用-vw" tabindex="-1">b 站移动端为什么用 vmin 不用 vw <a class="header-anchor" href="#b-站移动端为什么用-vmin-不用-vw" aria-hidden="true">#</a></h1><h2 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-hidden="true">#</a></h2><ul><li><p>vmin 可以照顾到移动端横屏和竖屏的显示效果</p></li><li><p>vh 和 vw 与视口的高度和宽度有关，1vw 就是视口宽度的 1%</p></li><li><p>vmin 和 vmax 是与当下屏幕的宽度和高度的最大值或最小值有关，取决于哪个更大和更小</p></li></ul><h2 id="效果对比" tabindex="-1">效果对比 <a class="header-anchor" href="#效果对比" aria-hidden="true">#</a></h2><ul><li><p>vw/vmin 竖屏显示 <img src="'+s+'" alt="vw竖屏"></p></li><li><p>vw 横屏显示 <img src="'+n+'" alt="vw横屏"></p></li></ul><p><strong>明显看出头部区域比例太大</strong></p><ul><li>vmin 横屏 <img src="'+r+'" alt="vmin横屏"></li></ul><h2 id="替换方法" tabindex="-1">替换方法 <a class="header-anchor" href="#替换方法" aria-hidden="true">#</a></h2><p>比较简单，直接将之前写好的 vw 替换成 vmin</p>',9),l=[d];function o(_,m,p,h,v,w){return i(),a("div",null,l)}const f=e(c,[["render",o]]);export{u as __pageData,f as default};