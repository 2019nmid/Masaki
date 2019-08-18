const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
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
      title: 'zhouao-task6',
      minify: {
        removeAttributeQuotes:true,
      },
      hash:true,
      filename: 'index.html',
      template:__dirname +'/src/index.html'
    }),
  ],
  module: {
    rules: [ {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'sass-loader',
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