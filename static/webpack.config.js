const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

require('@babel/polyfill').default;

const PATHS = {
  app: path.join(__dirname, '/src/index.js'),
  build: path.join(__dirname, '/dist')
};

module.exports = {
  entry: {
    main: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].[chunkhash].js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader',
            options: {
              fix: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
      {
        test: /\.scss$/,
        use:  ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin('dist', {} ),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash()
  ]
};
