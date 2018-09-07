const path = require ('path');
const webpack = require ('webpack');
const CleanWebpackPlugin = require ('clean-webpack-plugin');
const workspace_path = __dirname;
const demo_path = path.resolve(workspace_path,"packages/relax-demo")
const HtmlWebpackPlugin = require ('html-webpack-plugin');
module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    path.resolve(demo_path,'main.js'),
  ],
  output: {
    filename: '[id].bundle.js',
    publicPath: '/',
    path: path.resolve (demo_path, 'build'),
  },
  mode: 'development',
  module: {
    rules: [
      {test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/},

      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader', // 将 JS 字符串生成为 style 节点
          },
          {
            loader: 'css-loader', // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: 'sass-loader', // 将 Sass 编译成 CSS
          },
        ],
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 50000,
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin ({
      title: 'Relax Demo',
      template: path.resolve (demo_path, 'template.html'),
    }),
    new webpack.HotModuleReplacementPlugin (),
    new webpack.NamedModulesPlugin (),
  ],
  devServer: {
    hot: true,
    inline: true,
    contentBase: path.resolve(demo_path,'build'),
    publicPath: '/',
    port: 8080,
    historyApiFallback: true,
  },
};
