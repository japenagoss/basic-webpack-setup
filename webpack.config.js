const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test:/\.(s*)css$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[
                        {
                            loader: 'css-loader',
                            options: { minimize: true },
                        },
                        {
                            loader: 'sass-loader',
                            options: { minimize: true },
                        }
                    ],
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename:'app.bundle.css'}),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};
