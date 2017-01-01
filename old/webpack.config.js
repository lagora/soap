var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    "./src/assets/less/soap.less",
    "./src/index.js"
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'soap.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  styleImportLoader: {
    base: process.cwd() + './dist/' // must be absolute path 
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel' ], exclude: /node_modules/, include: __dirname + '/src/' },
      { test: /\.less$/, loaders: [ 'css', 'less-loader' ], exclude: /node_modules/, include: __dirname + '/src/' },
    ]
  },
  devServer: {
    port: 9001,
    hot: true,
    noInfo: false,
    contentBase: './dist/',
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
