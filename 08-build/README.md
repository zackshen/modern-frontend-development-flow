# 08 构建

一般我们使用工具生成的项目，都会有自带的构建命令，可以在项目根目录下的`package.json`文件中的`scripts`中找到相应的构建命令。

通常的默认构建命令是 ```npm run build```。

## 用例：04-simple-todo-app

```
npm run build
```

## 用例：05-todo-app-with-api

```
npm run build
```

## 用例：06-fullstack-todo-app

```
npm run build
```

每个`build`命令背后使用的构建工具都是不一样的。

现在主流的构建工具有 `webpack`, `vite`, `parcel`, `snowpack`, `rollup`, `swc`, `esbuild`。

他们面向的使用场景有一些区别，

1. 针对web开发，`webpack`, `vite`, `parcel`, `snowpack`会比较合适一些。

web开发的场景构建比较复杂，要考虑到js，css，html以及图片，字体等一些资源文件的处理，这方面 `webpack`可以说生态是最好的，但是`webpack`的构建速度可能是这几个中比较差的。

2. 针对一些库的开发，`rollup`, `swc`, `esbuild`会比较合适一些。