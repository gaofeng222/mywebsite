import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '高级前端工程师知识体系',
  lastUpdated: true,
  cleanUrls: true,
  base: '/mywebsite/',
  outDir: '../dist',
  description: "Gaofeng's website",
  markdown: {
    headers: {
      level: [0, 0]
    }
  },
  head: [['link', { rel: 'icon', href: './favicon.ico' }]], //必须是相对路径

  themeConfig: {
    logo: '/logo.png',

    socialLinks: [
      { icon: 'github', link: 'git@github.com:gaofeng222/mywebsite.git' }
    ],
    lastUpdatedText: '上次更新', // string | boolean
    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'github上编辑错误'
    // },
    outline: {
      label: '本页内容'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/mine/about' },
      { text: '联系我', link: '/mine/concat' },
      {
        text: '相关链接',
        items: [
          {
            text: '汤姆大叔的博客',
            link: 'https://www.cnblogs.com/TomXu/tag/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/'
          },
          {
            text: '张鑫旭博客',
            link: 'https://www.zhangxinxu.com/wordpress/'
          },
          {
            text: '前端小智',
            link: 'https://segmentfault.com/u/minnanitkong'
          },
          {
            text: '腾讯Web前端 Alloy',
            link: 'http://www.alloyteam.com/'
          },
          {
            text: '淘系前端团队',
            link: 'https://fed.taobao.org/?spm=taofed.bloginfo.header.1.3baf5ac8ngjb7z'
          },
          {
            text: '牧云云博客',
            link: 'https://github.com/MuYunyun/blog'
          }
        ]
      }
    ],
    sidebar: [
      {
        text: '指引',
        items: [{ text: '写在前面', link: '/guide/introduction' }]
      },
      {
        text: '浏览器端',
        items: [
          {
            text: '浏览器通信相关',
            items: [
              { text: 'dom树是怎么生成的', link: '/browser/index' },
              { text: '浏览器缓存策略', link: '/browser/cache' },
              { text: '301和302重定向', link: '/browser/301' },
              {
                text: 'http/https/http2的比较',
                link: '/browser/http'
              },
              { text: '401和403的认识', link: '/browser/401' },
              { text: '关于websocket', link: '/browser/websocket' },
              {
                text: '浏览器输入 url 到页面展示出来的全过程',
                link: '/browser/urls'
              },
              { text: '三次握手和四次挥手', link: 'browser/threeHands' }
            ]
          }
        ]
      },
      {
        text: 'js设计模式',
        items: [
          {
            text: '创建型设计模式',
            items: [
              {
                text: '工厂模式---简单工厂模式',
                link: '/jsmode/factory'
              },
              {
                text: '工厂模式---工厂方法模式',
                link: '/jsmode/factoryMethods'
              },
              {
                text: '工厂模式---抽象工厂模式',
                link: '/jsmode/abstractFac'
              }
            ]
          }
        ]
      },
      {
        text: 'js数据结构与算法',
        items: [
          {
            text: '基础数据结构',
            items: [
              {
                text: '数组',
                link: '/dataStruct/array'
              },
              {
                text: '队列',
                link: '/dataStruct/list'
              },
              {
                text: '栈',
                link: '/dataStruct/zhan'
              },
              {
                text: '链表',
                link: '/dataStruct/link'
              }
            ]
          },
          {
            text: '算法',
            items: [
              { text: '冒泡排序', link: '/dataStruct/mp' },
              { text: '选择排序', link: '/dataStruct/select' },
              { text: '插入排序', link: '/dataStruct/insert' },
              { text: '快速排序', link: '/dataStruct/quick' },
              { text: '二分搜索', link: '/dataStruct/binarySearch' },
              { text: '括号匹配', link: '/dataStruct/isBalance' },
              { text: 'arrayToTree', link: '/dataStruct/digui' },
              { text: '常见算法练习', link: '/dataStruct/lianxi' }
            ]
          }
        ]
      },
      {
        text: 'js篇',
        items: [
          {
            text: 'js原理',
            items: [
              { text: '原型及原型链', link: '/js/proto' },
              {
                text: '闭包',
                link: '/js/closure'
              },
              {
                text: '异步之generator',
                link: '/js/gen'
              },
              {
                text: '深拷贝',
                link: '/js/deepClone'
              },
              {
                text: 'EventLoop',
                link: '/js/eventloop'
              },
              {
                text: '防抖与节流',
                link: '/js/debounce'
              },
              {
                text: 'new发生了什么',
                link: '/js/new'
              }
            ]
          },
          {
            text: 'js手写篇',
            items: [
              { text: '手写call', link: '/js/mycall' },
              { text: '手写apply', link: '/js/myapply' },
              { text: '手写bind', link: '/js/mybind' },
              { text: '手写promise', link: '/js/mypromise' }
            ]
          }
        ]
      },
      {
        text: 'css篇',
        items: [
          { text: '面试题汇总', link: '/css/index' },
          { text: '＜!DOCTYPE html＞ 的作用', link: '/css/doctype' },
          { text: '盒子模型复习', link: '/css/boxModel' },
          { text: '你真的了解float吗', link: '/css/float' },
          { text: 'BFC是什么', link: '/css/bfc' },
          { text: '移动端可伸缩布局方案', link: '/css/flexible' },
          { text: 'vmin和vw的区别', link: '/css/vmin' },
          { text: '移动端的head配置', link: '/css/head.md' }
        ]
      },
      {
        text: 'vue2原理篇',
        items: [
          { text: '声明式和命令式编程', link: '/vue/declare' },
          { text: 'Vue 基础必会', link: '/vue/vue-base' },
          { text: 'Vue的diff', link: '/vue/diff' },
          { text: 'Vue源码解析-new Vue做了啥', link: '/vue/vue-init' },
          { text: '响应式的理解', link: '/vue/defineProperty' },
          { text: 'Vue中的this', link: '/vue/v-this' }
        ]
      },
      {
        text: 'vue3原理篇',
        items: [{ text: 'vue3相关', link: '/vue/vue3.md' }]
      },
      {
        text: 'react原理篇',
        items: [
          { text: '生命周期有哪些', link: '/react/lifeCycle' },
          {
            text: 'dva的connect通信',
            link: '/react/dva'
          },
          {
            text: 'React Fiber 原理实现',
            link: '/react/fiber'
          },
          {
            text: 'React中的setState是异步的吗？',
            link: '/react/setState'
          }
        ]
      },
      {
        text: 'mysql',
        items: [{ text: 'mysql数据库', link: '/mysql/index' }]
      },
      {
        text: 'jdbc',
        items: [{ text: 'jdbc快速入门', link: '/jdbc/quick' }]
      },
      {
        text: 'webpack',
        items: [
          { text: 'webpack原理相关', link: '/webpack/index' },
          { text: 'webpack热更新', link: '/webpack/hot' },
          { text: 'webpack多线程打包编译', link: '/webpack/happypack' }
        ]
      },
      {
        text: 'winSys',
        items: [
          {
            text: 'win10系统缺失hosts文件',
            link: '/win10/host.md'
          }
        ]
      },
      {
        text: 'web浏览器安全',
        items: [
          { text: '点击劫持', link: '/webSafe/clickAttack' },
          { text: 'csrf', link: '/webSafe/csrf' },
          { text: 'xss', link: '/webSafe/xss' },
          { text: '浏览器sandbox', link: '/webSafe/sandbox' }
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Gaofeng'
    }
  }
})
