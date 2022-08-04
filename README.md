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

3. 使用SolidJS前端框架开发。

普及一些知识：

什么是SolidJS ? 
什么是组件？
什么是状态?
Reactive 响应式编程
React 函数式编程
React Vue

前端的趋势：

    * 工具编译流: Svelte, SolidJS, Vue


4. 纯静态的`Todo-App`，可以使用静态服务器提供服务，数据存储在浏览器。

使用SolidJS来编写。

我们使用[`http-server`](https://www.npmjs.com/package/http-server)来提供服务


5. 带有后端服务的`Todo-App`，前后端开发流程。

使用vite作为前端开发服务器，后端使用`koa`来提供api服务。使用`vite`的proxy机制代理请求。


6. 使用一个fullstack的web开发框架

如果没有找到适合SolidJS的框架，只能使用React的Next.js来解释了。

迁移前端的App，以及之前的API。后端数据存储使用vercel的fauna来存储数据。

7. 测试

单元测试
e2e测试

8. 打包

纯静态的项目的打包发布

带有web服务器的项目的打包发布

9. 部署

内网部署：


纯静态页面的部署

带有web服务器的项目的部署

公网部署：

纯静态页面的部署, 可以使用vercel的服务来发布。

带有web服务器的项目的部署：如果我们使用next.js编写，那么可以使用vercel的服务来发布。
