const path = require('path');
const autoprefixer = require('autoprefixer');

require('babel-polyfill').default;

const PATHS = {
  app: path.join(__dirname, './src'),
  build: path.join(__dirname, './dist')
};

module.exports = {
  entry: [
    PATHS.app
  ],

  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.jsx', '.js', '.scss']
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
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  }
};
