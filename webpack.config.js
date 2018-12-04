var path = require('path')
var BUILD_DIR = path.resolve(__dirname + '/build')
var APP_DIR = path.resolve(__dirname + '/app')
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: APP_DIR + '/index.jsx',
    output:{
        path: BUILD_DIR,
        filename: "bundle.js",
        publicPath: '/'
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            }
          ]
    },
    devtool: 'source-map',
    devServer: {        
        inline:true,
        contentBase: BUILD_DIR,
        hot: false
    },
}

module.exports = config