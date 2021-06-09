const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.jsx', '.js'],
    },
    devServer: {
        open: true,
        port: 5000,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        publicPath: '/',
    },
    devtool: 'eval-source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
        new CleanWebpackPlugin({ dry: true, verbose: true }),
    ],
    optimization: {
        minimize: false,
    },
});