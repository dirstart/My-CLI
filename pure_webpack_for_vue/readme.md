#### 1.html-webpack-plugin 用于引入含hash的打包后的js文件.

#### 2.为了将 ES6 转化为浏览器可以识别的 ES5
- babel-loader
- babel-core
- babel-preset-es2015
- 创建babel规则文件 .babelrc

#### 2.更改一下上面的 插件 -- 据说现在都用过 babel-preset-env 了，不用 babel-preset-es2015了
> 因为 preset-es20xx 只能帮我编译成 es2015 -> es5 [es2016 -> 2016] ，而自动化地编译才是我们需要的，所以，我们现在应该使用 babel-preset-env。

#### 3.但是上面的只能转换一些普通的 ES6 语法, 诸如 let/const，所以，我们还需要 ...
> 我写了一个 async/await 的例子，其中包含了  Promise，它并没有将 Promise 转换为 ES5。

- babel-runtime
- babel-plugin-transform-runtime

#### 4.一些html资源的打包

- css-loader 打包css
- style-loader 将打包好的css作为 style 插入进去
- file-loader 用于处理各类的资源文件，一般是图片.

#### 5.将文件大小低于指定值的图片，转化为 base64 格式的图片。

- url-loader 将文件低于指定值的图片，转码为 base64 格式的图片。
> !!!  url-loader 其实是 file-loader 的上层封装。装了一层过滤 base64 的东西。

#### 6.支持 less

- less
- less-loader

#### 7.css的浏览器兼容

- postcss-loader
- autoprefixer


### 待解决的问题
1.如何给 modules 配一个统一的 exclude，而不是每一个 loader 一一配置。

* * *

### 坑爹的问题

## 折腾了一晚上，没想到是因为 css-loader 的版本不对。 css-loader@1.0 的版本需要的是 webpack 4.
> !!!!!!!!!  以后一定要好好地看下 `npm install` 的信息.

## vue-loader 15之后的坑爹问题  ！！！！！！   注意了！！
- 参考官方文档 https://vue-loader.vuejs.org/migrating.html#a-plugin-is-now-required
- Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的,