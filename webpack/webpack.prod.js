// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-undef */
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

module.exports = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
    chunkFilename: '[name].[contenthash].bundle.js',
  },
  optimization: {
    minimizer: [
      // eslint-disable-next-line quotes
      `...`,
      new CssMinimizerPlugin(),
      new HtmlWebpackPlugin({
        template: './app/index.html',
        favicon: 'images/favicon.png',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      __DEBUG__: false,
    }),
  ],
  target: 'browserslist',
}
