const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    main: './test/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
  },
  mode: 'development',
    plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      title: 'zhouao',
      minify: {
        removeAttributeQuotes:true,
      },
      hash:true,
      filename: 'index.html',
      template:__dirname +'/test/index.html'
    }),
  ],
  module: {
    rules: [ {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'less-loader',
        ]
    },
    {
    test: /\.(png|jpg|gif|jpeg)$/,
    loader: 'file-loader',
    options: {
        name: 'img/[name].[ext]'
    }
},]
  },

};