const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        polyfill: 'babel-polyfill',
        styling: './src/style.scss',
    },
    output: {
        //filename: '[name].js',
        path: path.resolve(__dirname, '../build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'], 
                        plugins: ["@babel/plugin-proposal-object-rest-spread"]
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: [
                    path.resolve(__dirname, "../src/foundation/scss")
                ],
                use: [
                    {
                    loader: MiniCssExtractPlugin.loader,
                        options: {},
                    },
                    'css-loader',
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: '[name].css'
    }),
    ]
};

