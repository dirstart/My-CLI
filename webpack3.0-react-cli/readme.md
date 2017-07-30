# webpack3.0+react+redux+less+stylus

### 使用帮助
1.如果要修改入口文件和其他路径，记得也要修改webpack.config里面的配置

#### 新增对react中propTypes的支持
> 解决方案
来自segmentfault，静态属性需要安装插件
``npm install --save-dev babel-preset-stage-0``
``presets:['react','es2015','stage-0']``
