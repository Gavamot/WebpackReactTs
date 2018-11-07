const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: "./src/index.tsx", // string | object | array  // defaults to './src'
    // Here the application starts executing
    // and webpack starts bundling
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test : /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader",
                        options:{
                            minimize: true
                        }
                    },
                    'sass-loader'
                ],
                })
            }
        ]
    },
    devtool: "source-map", 
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new ExtractTextPlugin("style.css")
    ],
    resolve: {
        extensions : [".js", ".ts", ".tsx"]
    }
}