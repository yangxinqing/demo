let path = require("path");
let {CleanWebpackPlugin} = require("clean-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
    entry:"./style/index.js",
    mode:"development",
    output:{
        filename:"loves.js",
        path:path.resolve(__dirname,"loves")
    },
    module:{
        rules:[
            {
                test:/\.(css|scss)$/,
                use:[
                    "style-loader",
                    {
                        loader:"css-loader",
                        options:{
                            importLoaders:2
                        }
                    },
                    "sass-loader",
                    "postcss-loader"
                ]
            },
            {
                test:/\.jpg/,
                use:
                    {loader:"url-loader",
                    options:{
                        name:"[name].[ext]",
                        outputPath:"wuyuwen",
                        limit:2000
                     }
                    }
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:"./index.html"
        })
    ]
}