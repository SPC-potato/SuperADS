/**
 * Created by 微软 on 2017/9/2.
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry:{
        index:'./src/js/index.js',
        test:'./src/js/test.js'
    },
    output:{
        filename:'js/[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    'babel-loader'
                ]
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.styl$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader?name=images/[name].[ext]'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader?name=font/[name].[ext]'
                ]
            },
            {
                test:/\.html$/,
                use:[
                    'html-withimg-loader'
                ]
            }
        ]
    },
    plugins:[
        new CopyWebpackPlugin(
            [
                {
                    from:__dirname + '/src/lib',
                    to:__dirname + '/dist/lib',
                    flatten:false
                }
            ]
        ),
        new HtmlWebpackPlugin(
            {
                filename: 'index.html',
                template:'./src/index.html',
                chunks:['index']

            }
        ),
        new HtmlWebpackPlugin(
            {
                filename: 'test.html',
                template:'./src/html/test.html',
                chunks:['test']
            }
        ),
        new CleanWebpackPlugin([
            'dist'
        ]),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    resolve: {
        alias: {
            jquery:'jquery/dist/jquery.min.js'
        }
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    }
};