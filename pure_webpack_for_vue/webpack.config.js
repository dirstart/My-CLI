const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// vue-loader 在 15.* 之后的版本, vue-loader 的使用都需要半生 VueLoaderPlugin
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
    // filename: 'dist.chunkhash=[chunkhash:10].name=[name].id=[id].js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              root: __dirname + '/static/',
              url: true,
              alias: {
                '@': __dirname + '/static/'
              },
              import: false,
              modules: false,
              minimize: true,
              sourceMap: true,
              camelCase: false,
              // importLoaders: 0 // 感觉没什么用
            }
          },
          {
            loader: 'postcss-loader',
            options:{
              plugins: [
                require("autoprefixer")({
                  browsers: [
                    "> 0.01%"
                  ]
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240000,
              mimetype: 'image/png',
              name: 'img/[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 这里是添加的插件
    new HtmlWebpackPlugin({
      title: 'title',
      filename: 'index.html',
      template: './demo.html'
    }),
    new VueLoaderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}