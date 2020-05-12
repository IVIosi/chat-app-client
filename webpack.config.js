const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
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
        test: /\.(ttf|eot|woff|woff2|png|gif|jpg|jpeg|svg)$/,
        use: ['file-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    port: 9000,
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
      template: 'public/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new CompressionPlugin(),
  ]
};