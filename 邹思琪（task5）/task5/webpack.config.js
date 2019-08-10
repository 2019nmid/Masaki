const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [{
            test: /\.(sc|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader, {
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                }]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css', // 设置最终输出的文件名
            chunkFilename: '[id].css'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new HtmlWebpackPlugin({
                title: 'Custom template',
                template: './src/index.html', //指定要打包的html路径和文件名
                filename: './index.html' //指定输出路径和文件名
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
};