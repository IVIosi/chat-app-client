const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

require('dotenv').config({
  path: '.env'
});

const isDev = process.env.NODE_ENV === 'development';

const envVariables = Object.keys(process.env).reduce((acc, curr) => {
  return Object.assign({}, acc, {
    [`__${curr}__`]: JSON.stringify(process.env[curr])
  });
}, {});

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: isDev ? 'eval-source-map' : 'none',
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/bundle'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules)|(app\/static)/,
        use: ['babel-loader']
      },
      {
        test: /(\.scss|\.sass)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'file-loader',
            options: {
              name: 'resources/css/[name].css',
              publicPath: '/',
              sourceMap: true
            }
          },
          {
            loader: 'extract-loader',
            options: {
              publicPath: '/dist',
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')],
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'app', 'scss')],
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2|png|gif|jpg|jpeg|svg)$/,
        use: ['file-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    port: process.env.PORT,
    host: process.env.HOST,
    disableHostCheck: true,
    compress: true,
    writeToDisk: true,
    historyApiFallback: true
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'app'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'bundle/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new webpack.DefinePlugin(envVariables),
    new CompressionPlugin(),
  ]
};