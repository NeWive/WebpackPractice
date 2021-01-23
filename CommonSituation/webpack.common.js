const path = require('path');
const ConsoleLogOnBuildWebpackPlugin = require('./webpack_lib/ConsoleLogOnBuildWebpackPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');// clean unused files
const webpack = require('webpack');
//hot module replacement: webpack-dev-server cmd: webpack serve
//watch mode: --watch
// HMR
// uglifyjs-webpack-plugin: as its name
// webpack.optimize.SplitChunksPlugin: CommonsChunkPlugin: split and remove same chunk

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|svg|jpeg)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, './src/index.html')}),
        new ConsoleLogOnBuildWebpackPlugin(),
        new CleanWebpackPlugin(),
        new webpack.optimize.SplitChunksPlugin({
            name: 'common'// 指定公共 bundle 的名称。
        })
    ]
}