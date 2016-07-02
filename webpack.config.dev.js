var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    'eventsource-polyfill',
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './src/index'
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loaders: ['babel'],
        include: path.join(__dirname, './src')
      }
    ]
  }
};
