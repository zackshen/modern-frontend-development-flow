# 现代化前端开发流程

当前的前端开发与几年前大家熟知的网页开发已经有了很大的变化，不仅是语言方面的，还有前端工程化，前端工具链发生了非常大的变化。

## 面向对象

没有接触过前端开发的同学、有意向了解前端开发流程的，例如`QA`，`后端开发`。

想了解如何入手开发一个网页应用，这里特指单页应用。

## 目标

通过一个简单的`待办事项App`来逐步说明整个开发流程。


## 本教学的几个章节

1. 环境搭建。

nodejs, npm，如何安装依赖。

初始化一个Javascript库的项目

初始化一个网页应用的项目(我们要做的, 使用`vite`)


2. 介绍前端工具链。

npm, yarn, vite, webpack, babel, swc, esbuild, 都会简单带个例子说明下。

主要使用 `vite`, `yarn`。

3. 前端框架介绍。

什么是组件？
什么是状态?
数据驱动的UI，框架帮我们完成绘制，我们负责数据、状态处理
Reactive 响应式编程
React 函数式编程
React Vue

前端的趋势：

    * 工具编译流: Svelte, SolidJS, Vue


4. 纯静态的`Todo-App`。

可以使用静态服务器提供服务，数据存储在浏览器。

5. 带有后端服务的`Todo-App`。

前后端分离开发流程。

使用`vite`作为前端开发服务器，后端使用`koa`来提供`api`服务。使用`vite`的proxy机制代理请求。

6. 使用一个fullstack的web开发框架。

迁移`05-todo-app-with-api`到`next`。

开发：使用`next`开发，数据库使用`PostgreSQL`。
部署：使用`Vercel`部署，后端数据存储使用`Railway`的`PostgreSQL`来存储数据。

7. 测试

单元测试和e2e测试。

8. 打包

纯静态的项目的打包发布

带有web服务器的项目的打包发布

9. 部署

1. 内网部署：

    * 纯静态页面的部署

    * 带有web服务器的项目的部署

2. 公网部署：

    * 纯静态页面的部署, 可以使用vercel的服务来发布。

    * 带有web服务器的项目的部署：使用vercel的服务来发布。


## 知识图谱

![知识图谱](/images/前端知识图谱.png)


## Roadmap

![线路图](/images/frontend-roadmap.jpeg)


## 参考

1. [开发者线路图](https://github.com/kamranahmedse/developer-roadmap)
2. [前端线路图](https://roadmap.sh/frontend)
3. [现代web开发与工程实践](https://ngte-web.gitbook.io/i/)