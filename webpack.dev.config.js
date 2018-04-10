const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    /*入口*/
    entry: {
        app:[
            'react-hot-loader/patch',
            path.join(__dirname,'src/index.js')
        ],
        vendor: ['react', 'react-router', 'redux', 'react-dom', 'react-redux']
    },
    output: {
        path: path.join(__dirname,"./dist"),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    module:{
        rules :[{
            test:/\.js$/,
            use:['babel-loader?cacheDirectory=true'],
            include:path.join(__dirname,'src'),
            exclude:path.join(__dirname,'node_modules')
        },{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
              }, {
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
        }
    ]
    },
    devServer: {
        contentBase: path.join(__dirname,'./dist'),
        historyApiFallback: true 
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions')
            // reducers: path.join(__dirname, 'src/redux/reducers')
            // redux: path.join(__dirname, 'src/redux')            
        }
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })        
    ]
}