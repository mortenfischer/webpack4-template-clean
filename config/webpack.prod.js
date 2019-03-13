const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // https://github.com/webpack-contrib/copy-webpack-plugin
const common = require('./webpack.common.js');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new WebpackShellPlugin({
            onBuildEnd: 'node config/copy-to-solution.js'
        })
    ]
});