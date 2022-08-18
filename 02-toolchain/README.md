# 工具链

## 包管理

### yarn

Yarn 是一个新的快速安全可信赖的可以替代 NPM 的依赖管理工具，我们使用 NPM 安装依赖经常有失败的情形。Yarn出自FaceBook。Facebook 使用 NPM 与 npm.js 存放管理大量的依赖项目，不过随着依赖项数目与复杂度的增加，NPM 本身在一致性、安全性以及性能方面的弊端逐渐暴露。因此忍无可忍的 Facebook 重构了 Yarn 这个新型的可替换 NPM 客户端的依赖管理工具。Yarn 仍然基于 NPM Registry 作为主要的仓库，不过其提供了更快的安装速度与不同环境下的一致性保证。 

### pnpm

1. 快速: pnpm 是同类工具速度的将近 2 倍
2. 高效: node_modules 中的所有文件均链接自单一存储位置
3. 支持单体仓库: pnpm 内置了对单个源码仓库中包含多个软件包的支持
4. 权限严格: pnpm 创建的 node_modules 默认并非扁平结构，因此代码无法对任意软件包进行访问


## 开发服务器

## vite

`Vite`（法语意为 "快速的"，发音 `/vit/`，发音同 "veet"）是一种新型前端构建工具，能够显著提升前端开发体验。它主要由两部分组成：

一个开发服务器，它基于 原生 ES 模块 提供了 丰富的内建功能，如速度快到惊人的 模块热更新（HMR）。

一套构建指令，它使用 Rollup 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。

**浏览器支持**

默认的构建目标是能支持 原生 ESM 语法的 script 标签、原生 ESM 动态导入 和 import.meta 的浏览器。

## webpack

webpack是一款强大的模块加载器兼打包工具，它能把各种资源，例如JS（含JSX）、coffee、样式（含less/sass）、图片等都作为模块来使用和处理。

* 插件：丰富的插件资源。
* 构建性能: async I/O。（？）
* 加载器: 打包各种静态资源。
* 对模块的支持: 支持AMD，CMD，UMD模块的打包。
* 代码拆分: 切分代码chunks
* 性能优化: 各种性能优化，减少打包大小，请求缓存。
* 开发者工具: SourceMaps & development middleware & development server
* 多端适用: 支持web，node.js。

## 编译

## babel

Babel 是一个工具链，主要用于将采用 ECMAScript 2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。下面列出的是 Babel 能为你做的事情：

* 语法转换
* 通过 Polyfill 方式在目标环境中添加缺失的特性 （通过引入第三方 polyfill 模块，例如 core-js）
* 源码转换（codemods）

```js
// Babel 输入： ES2015 箭头函数
[1, 2, 3].map(n => n + 1);

// Babel 输出： ES5 语法实现的同等功能
[1, 2, 3].map(function(n) {
  return n + 1;
});
```


## SWC (Speedy Web Compiler)

SWC（Speedy Web Compiler）是用 Rust 编写的超快的 TypeScript / JavaScript 编译器。它同时是 Rust 和 JavaScript 的库。

SWC 可用于编译和捆绑。对于编译，它使用现代 JavaScript 功能获取 JavaScript / TypeScript 文件，并输出所有主流浏览器都支持的有效代码。

## esbuild

esbuild是用Go编写的 TypeScript / Javascript编译器。

* 极速，无需缓存
* ES6 和 CommonJS 模块
* ES6 模块的 Tree Shaking
* JavaScript 和 Go的API
* TypeScript和JSX语法
* SourceMap
* Minify
* Plugin

## 多仓库管理

## lerna

Lerna 是一个管理工具，用于管理包含多个软件包（package）的 JavaScript 项目。
类似`Rust`中的`workspace`的概念。

```
lerna.json

packages
  package-main # reference package-b, package-c
  package-b
  package-c
```

## TurboRepo

TurboRepo 是 JavaScript 和 TypeScript monorepos 的构建调度工具。

TurboRepo当前没有版本管理功能（lerna有），但是Turborepo的构建速度比Lerna的要快很多。

TurboRepo会分析构建依赖，发起并行构建，并且使用缓存大大加速了MonoRepo的构建速度。

![turborepo pipline](/images/turbo-vs-lerna-execution.png)

## 参考

1. [pnpm对比 npm/yarn好在哪里](https://juejin.cn/post/7047556067877716004)
2. [与你项目相关的npm知识总结](https://juejin.cn/post/6933167787435261959)