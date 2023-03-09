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
  editLink: {
    pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    text: 'github上编辑错误'
  },
  socialLinks: [
    { icon: 'github', link: 'git@github.com:gaofeng222/mywebsite.git' }
  ],
  themeConfig: {
    // logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/mine/about' },
      { text: '联系我', link: '/mine/concat' },
      {
        text: '相关链接',
        items: [
          {
            text: 'github',
            link: 'https://github.com/gaofeng222/mywebsite.git'
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
              { text: '401和402的认识', link: '/browser/401' },
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
              { text: '括号匹配', link: '/dataStruct/isBalance' }
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
          { text: '移动端可伸缩布局方案', link: '/css/flexible' }
        ]
      },
      {
        text: 'vue2原理篇',
        items: [
          { text: 'vue3相关', link: '/vue/vue3.md' },
          { text: '声明式和命令式编程', link: '/vue/declare' },
          { text: 'Vue 基础必会', link: '/vue/vue-base' },
          { text: 'Vue的diff', link: '/vue/diff' },
          { text: 'Vue源码解析-new Vue做了啥', link: '/vue/vue-init' }
        ]
      },
      {
        text: 'react原理篇',
        items: [
          { text: '生命周期有哪些', link: '/react/lifeCycle' },
          {
            text: 'dva的connect通信',
            link: 'react/dva'
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
        items: [{ text: 'webpack原理相关', link: '/webpack/index' }]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Gaofeng'
    }
  }
})
