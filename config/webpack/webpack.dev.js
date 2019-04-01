const webpack = require('webpack')
const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  devServer: { historyApiFallback: true },

  entry: {
    app: './src/app.js',
    vendor: ['react', 'react-dom', 'styled-components'],
  },

  output: {
    filename: '[name].[chunkhash].js',
    publicPath: '/',
    path: path.resolve(__dirname, '../../dist'),
  },

  plugins: [
    new HTMLWebpackPlugin({ template: './src/html/index.ejs' }),
    new Dotenv(),
  ],

  mode: 'development',

  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      name: true,

      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true,
        },
      },
    },
  },
}
