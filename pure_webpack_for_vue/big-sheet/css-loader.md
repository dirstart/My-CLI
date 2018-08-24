root

#### 面对图片路径，有三种情况

* 不设置root - css-loader 不解析 `/` 开头的图片路径，也不报错
* 设置 root - 为 `/`，css-loader 尝试解析，找不到图片 => 报错
* 设置 root 为非默认值，和 2 行为是一样。

#### 1.root

```
根目录
|-- src
| |-- app.js
| |-- src
|   |-- logo.png
|
|-- static
| |-- abc.png
|
|-- webpack.config.js
```

```
那么在 webpack.config.js 里配置的时候，应该这么写：root: __dirname + '/static/'。

__dirname 表示根目录的绝对路径。假如根目录的路径是 D:/abc/def，那么 __dirname 就表示 D:/abc/def ，而 __dirname + '/static/ 则表示 D:/abc/def/static

这就是告诉 css-loader ，遇见 / 开头的url路径，你应该去 D:/abc/def/static 这个路径下去找文件。
```

#### 2.url
```
首先，我们已知，css-loader 正常会解析css属性里的图片url路径，例如 background: url('/logo.png') 里面的值。

那么，假如某图片不在你的工程里，而是在服务器上。

而你是可以预知打包后的html文件和这个图片的相对路径关系，你就可以直接写那个时候的路径，并将url设置为false。

但是，如果设置为false，那么所有url都不会进行转义了（也不会触发file-loader），自然也不会报错（即使图片不存在）。

那么你如果想引用 logo.png ，那么把 url 设置为 false 之后，然后路径这么写就行了 background: url('./logo.png')。
```


## 具体还是参考此篇文章：  https://blog.csdn.net/qq20004604/article/details/78689170

