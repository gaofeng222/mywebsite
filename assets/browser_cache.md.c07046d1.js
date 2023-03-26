import{_ as e,c as a,o as r,a as t}from"./app.e6464ad1.js";const u=JSON.parse('{"title":"浏览器缓存那点事","description":"","frontmatter":{},"headers":[],"relativePath":"browser/cache.md","lastUpdated":1677403524000}'),i={name:"browser/cache.md"},o=t('<h1 id="浏览器缓存那点事" tabindex="-1">浏览器缓存那点事 <a class="header-anchor" href="#浏览器缓存那点事" aria-hidden="true">#</a></h1><p><img src="https://s1.ax1x.com/2023/02/22/pSvYS6s.png#pic_center" alt="浏览器缓存"></p><h2 id="_1-引入浏览器缓存位置和优先级" tabindex="-1">1.引入浏览器缓存位置和优先级 <a class="header-anchor" href="#_1-引入浏览器缓存位置和优先级" aria-hidden="true">#</a></h2><ul><li>Service Worker</li><li>内存缓存</li><li>磁盘缓存</li><li>推送缓存</li><li>如果上面的缓存没有命中，则会发起网络请求</li></ul><h2 id="_2-不同缓存的差异" tabindex="-1">2.不同缓存的差异 <a class="header-anchor" href="#_2-不同缓存的差异" aria-hidden="true">#</a></h2><ul><li>2.1 Service Worker 有点类似于 Web Worker，是一个独立的线程，可以在这个线程中缓存文件，当主线程需要的时候从这里读取文件。Service Worker 允许自由选择缓存哪些文件以及文件的匹配和读取规则。并且缓存是持久的。</li><li>2.2 内存缓存 即内存缓存，内存缓存不是持久化的，缓存会随着进程的释放而释放。</li><li>2.3 磁盘缓存 即硬盘缓存，与内存缓存相比，硬盘缓存具有更好的持久性和容量，会根据 HTTP 头的字段判断需要缓存哪些资源。</li><li>2.4 推送缓存 即 push cache，这是 HTTP/2 的内容，目前用的比较少。</li></ul><h2 id="_3-浏览器缓存策略" tabindex="-1">3.浏览器缓存策略 <a class="header-anchor" href="#_3-浏览器缓存策略" aria-hidden="true">#</a></h2><ul><li><p>3.1 强缓存（不需要向服务器索要缓存）</p><p>设置 expires</p><blockquote><p>就是过期时间，例如，expires: Tue, 18 Apr 2023 06:29:41 GMT 表示缓存将在这个时间后过期。这个到期日期是一个绝对日期。如果修改了本地日期，或者本地日期与服务器日期不一致，那么缓存过期时间就会出错。</p></blockquote><p>设置 Cache-Control</p><blockquote><p>HTTP/1.1 增加了一个新的字段，cache-control 可以通过 max-age 字段设置过期时间，cache-control: max-age=7776000 另外 cache-control 还可以设置 private/no-cache 等字段。</p></blockquote></li><li><p>3.2 协商缓存（需要询问服务器缓存是否过期）</p><p><strong>last-modified</strong></p><p>即最后修改时间，当浏览器第一次请求该资源时，服务器会在响应头中添加 last-modified。当浏览器再次请求该资源时，浏览器会在请求头中带上 if-modified-since 字段，该字段的值为上一个服务器返回的最后修改时间，服务器比较两次，如果相同则返回 304，否则返回新的资源并更新 last-modified。</p><p><strong>ETag</strong></p><p>HTTP/1.1 中的一个新字段表示文件的唯一标识符，只要文件内容发生变化，就会重新计算 ETag。缓存过程与 last-modified 相同：服务器发送 ETag 字段 -&gt; 浏览器再次请求时发送 If-None-Match -&gt; 如果 ETag 值不匹配，则文件已更改，返回新的资源并更新 ETag，匹配则返回 304。</p><p><strong>last-modified 和 ETag 的比较</strong></p><p>ETag 比 last-modified 更准确：如果打开没有修改的文件，last-modified 也会改变，last-modified 的单位时间是秒。如果文件在一秒钟内被修改，它仍然会命中缓存。 如果没有设置缓存策略，浏览器会将响应头中的 Date 减去 last-modified 值的 10%作为缓存时间。</p></li></ul><p>参考链接 1:<a href="https://juejin.cn/post/7011171333761400862" target="_blank" rel="noreferrer">强缓存和协商缓存</a><br> 参考链接 2:<a href="https://juejin.cn/post/7011171333761400862" target="_blank" rel="noreferrer">浏览器缓存</a></p>',9),l=[o];function c(s,d,n,p,h,_){return r(),a("div",null,l)}const T=e(i,[["render",c]]);export{u as __pageData,T as default};
