//webpack配置文件
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    plugins:[
        new UglifyJSPlugin(),
        new CopyWebpackPlugin(
            [
                {
                    from:__dirname + '/src/lib',
                    to:__dirname + '/dist/lib',
                    flatten:false
                }
            ]
        ),
        new CopyWebpackPlugin(
            [
                {
                    from:__dirname + '/src/img',
                    to:__dirname + '/dist/img',
                    flatten:false
                }
            ]
        ),
        new HtmlWebpackPlugin(
            {
                filename: 'concact.html',
                template:'./src/view/concact.jade',
                chunks:['public']
            }
        ),
        new HtmlWebpackPlugin(
            {
                filename: 'login.html',
                template:'./src/view/login.jade',
                chunks:['public']
            }
        ),
        new HtmlWebpackPlugin(
            {
                filename: 'sign.html',
                template:'./src/view/sign.jade',
                chunks:['public']
            }
        ),
        new HtmlWebpackPlugin(
            {
                filename: 'index.html',
                template:'./src/view/home.jade',
                chunks:['public','index']
            }
        ),
        new CleanWebpackPlugin([
            'dist'
        ]),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    entry:{
        public:'./src/js/public.js',
        index:'./src/js/index.js'
    },
    output:{
        filename:'js/[name].js',
        path: path.resolve(__dirname,'dist')
    },
    resolve: {
        alias: {
            jquery:'jquery/dist/jquery.min.js'
        }
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
                    'file-loader?name=img/[name].[ext]'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader?name=font/[name].[ext]'
                ]
            },
            {
                test:/\.jade/,
                use:[
                    'jade-loader'
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    }
};