const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist')
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
                }]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css', // 设置最终输出的文件名
            chunkFilename: '[id].css'
        })
    ],
    optimization: {
        minimizer: [
            new HtmlWebpackPlugin({
                title: 'Custom template',
                template: './src/index.html', //指定要打包的html路径和文件名
                filename: './index.html' //指定输出路径和文件名
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
}