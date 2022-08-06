# 搭建环境

## Node.js

Node.js是一个开源的跨平台的Javascript运行时环境，内嵌`Google Chrome`的`V8`引擎。

两种方式安装`Node.js`

1. [Node.js](https://nodejs.org/zh-cn/)下载对应开发平台的安装包。
2. Node version manager - [nvm](https://github.com/nvm-sh/nvm)。
    > 通过`nvm`可以管理`Node.js`的版本，在多版本之间切换。
    > `nvm`可以在任何符合`POSIX`标准的shell中工作(sh,bash,zsh)，`windows`用户需要使用`WSL`来使用`nvm`
3. [fnm](https://github.com/Schniz/fnm) (推荐)

    > 跨平台支持，macOS，Windows，Linux。
    > 单文件安装。
    > 速度快。

## npm

`npm` 有三部分组成：
1. Command Line Cli：命令行工具。`Node.js`默认自带。
2. Npm website：npm的网站，https://www.npmjs.com/。
3. Npm registry：npm的包仓库，https://registry.npmjs.com/。

我们通常说的 `npm` 是一个包管理器(cli)，类似`Python`的`pip`, `Go lang`的`go`, `Rust`的`cargo`。

使用 `npm` 来安装别人在 `https://www.npmjs.com/` 分享的包，也可以从git仓库安装，也可以从本地文件安装。

`npm`命令不仅可以用来安装第三方包，也可以发布自己编写的`package`。

常用的`npm` 命令：

1. `npm install`

    > `npm install lodash`
    > `npm install -g lodash`

2. `npm uninstall`

    > `npm uninstall lodash`
    > `npm uninstall -g lodash`

`npm install` 一般有两种环境

1. 本地模式：在执行`npm install`命令的目录，或者父目录下存在`package.json`文件。

    当然如果当前目录及以上所有父目录都没有`package.json`, `npm install`也能执行成功，但是不是推荐的做法，因为无法记录安装的依赖的信息。

    > `mkdir -p a/b/c/d/e`

    > `cd a && npm init -y`

    > `cd b/c/d/e && npm install lodash`

2. 全局模式：`npm install`的结果会存储到当前使用的`Node.js`的`lib/node_modules`目录下。

    > `npm install -g lodash`

    > `which npm`

    > `ls (which npm | sed -e 's/bin\/npm$/lib\/node_modules/')`


## npx

网上有些文档里有 `npx` 的命令，`npx`是为了解决调用项目内部安装的模块，也可以避免全局安装模块。
实际开发中用到的机会不多，一般都是在初始化项目的时候有用，或者你想快速启动一个环境开发验证。

例如：

1. `npx create-react-app hello-world`

阮老师的[npx使用教程](https://www.ruanyifeng.com/blog/2019/02/npx.html)说的很明白了。


## 初始化 `package` 项目

一个 `package` 可以：

1. 给客户端使用，既一个纯前端使用的类库，不能有类似对文件系统操作。
2. 给服务端使用，既一个纯后端使用的类库，不能有浏览器的API的调用。
3. 一个同构的库，可以兼容浏览器和`Node.js`，例如 [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch)

初始化：

1. `mkdir my-lib`
2. `cd my-lib`
3. `npm init`
4. `mkdir lib && touch lib/index.mjs`
5. edit package.json

    ```json
    {
        "module": "lib/index.mjs",
        "main": "lib/index.mjs"
    }
    ```
6. edit lib/index.mjs

    ```javascript
    export function ping(message) {
        return `pong ${message}`;
    }
    ```

使用 `my-lib`，简单的例子

1. `mkdir my-lib-usage`
2. `cd my-lib-usage`
3. `npm init -y`
4. `npm link ../my-lib`
5. `touch index.mjs`
6. edit index.js

    ```javascript
    import assert from 'assert'
    import { ping } from 'my-lib'
    assert.equal(ping('hello'), 'pong: hello')
    ```
7. `node index.mjs`

## 初始化 `前端` 项目

一般我们会使用社区提供的工具来生成项目，例如 `create-react-app` 或者 `vite`。当然你可以自己完全手动搭建。

1. `npm create vite@latest`

## 参考

1. [npm官方文档](https://www.npmjs.com.cn/)
2. [npm模块管理器](https://javascript.ruanyifeng.com/nodejs/npm.html#toc18)
3. [npx使用教程](https://www.ruanyifeng.com/blog/2019/02/npx.html)