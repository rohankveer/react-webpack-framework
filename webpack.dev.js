/* eslint-disable no-undef */
const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      publicPath: '/'
    }),
    //new BundleAnalyzerPlugin()
  ],
  devServer: {
    client: {
      overlay: true,
    },
    host: 'localhost',
    port: 9090,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader', //3. Inject styles into DOM
          'css-loader', //2. Turns css into commonjs
          'sass-loader' //1. Turns sass into css
        ]
      }
    ]
  }
});