const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

require('@babel/polyfill').default;

const devMode = (process.env.DEV_MODE === 'true' || process.env.DEV_MODE === true) || false;
const mode = devMode ? 'development' : 'production';
const PATHS = {
  app: path.join(__dirname, '/src/index.js'),
  build: path.join(__dirname, '/dist')
};

module.exports = {
  mode,
  context: __dirname,
  entry: {
    main: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.jsx', '.js', '.html']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
              failOnWarning: false,
              failOnError: false,
              cache: false
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
    new CleanWebpackPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, 'src/data/*.json'), to: 'data/', flatten: true },
      { from: path.join(__dirname, 'src/assets/*'), to: 'assets/', flatten: true },
      { from: path.join(__dirname, 'src/favicon.ico'), flatten: true }
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        ENV: JSON.stringify(mode),
      }
    }),
    ...(devMode ? [
      new webpack.ProgressPlugin({
        profile: true
      })
    ] : [])
  ],
  devtool: devMode ? 'cheap-source-map' : false,
  cache: devMode,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 3000
  },
  profile: true,
  stats: {
    errorDetails: true
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          compress: {
            drop_debugger: false
          }
        }
      })
    ]
  }
};
