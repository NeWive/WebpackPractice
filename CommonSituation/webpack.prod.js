const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(commonConfig, {
    plugins: [
        new UglifyJsPlugin({
            test: /\.js/i
        })
    ],
    mode: 'production'
});