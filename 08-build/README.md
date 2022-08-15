# 08 部署

## 本地部署，或者私有环境部署

1. 静态文件的方式部署，将编译后的js，html，css部署到静态文件服务器，例如`nginx`。

    > 编译 `04-simple-todo-app` 
    > ```shell
    > npm run build 
    > ```
    > 这里会有类型错误，感兴趣的同学可以可以去修改使编译通过，我们可以修改package.json文件的build脚本
    > ```
    > "build": "vite build"
    > ```
    > ```shell
    > npm run build
    > ```
    > 我们使用`http-server`来启动静态文件服务器
    > ```shell
    > npx http-server dist
    > ```
    > 在浏览器中访问 `http://localhost:8080`，我们就可以看到刚才的开发的Todo应用。

2. 带有web服务器的部署，包含了Node.js。

    > 编译 `06-fullstack-todo-app`
    > ```shell
    > npm run build
    > ``` 
    > 运行生产环境
    > ```shell
    > npm start
    > ```
    > 在浏览器中访问 `http://localhost:3000`，我们就可以访问刚才开发的Todo应用了。


## 使用云服务提供商来部署

    我们使用 vercel 来部署 `06-fullstack-todo-app`。
