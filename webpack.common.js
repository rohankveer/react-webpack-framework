/* eslint-disable no-undef */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
    main: './app/index.jsx'
  },
  // optimization
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.tsx', '.ts'],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'tsx', 'ts']
    })
  ],
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // This is required for asset imports in CSS, such as url()
            options: { publicPath: '' },
          },
          'css-loader',
          'postcss-loader',
          // according to the docs, sass-loader should be at the bottom, which
          // loads it first to avoid prefixes in your sourcemaps and other issues.
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: 'babel-loader',
          options: {
            /**
             * From the docs: When set, the given directory will be used
             * to cache the results of the loader. Future webpack builds
             * will attempt to read from the cache to avoid needing to run
             * the potentially expensive Babel recompilation process on each run.
             */
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext][query]'
        }
      }
    ]
  }
};