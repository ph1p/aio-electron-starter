const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const IS_DEV = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,
  watch: IS_DEV,
  entry: './src/index.js',
  target: 'electron-main',
  output: {
    path: path.resolve(__dirname, '../../app/dist'),
    filename: 'app.js'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6
        }
      })
    ]
  },
  plugins: [new webpack.IgnorePlugin(/electron-reloader/)],
  node: {
    __dirname: false,
    __filename: false
  }
};
