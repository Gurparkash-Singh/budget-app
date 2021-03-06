const path = require("path")

module.exports = {
    entry: "./components/app.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js"
    },
    module : {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },
    ]
    },
    devtool: "eval-cheap-module-source-map",
    devServer: {
        static: path.join(__dirname, 'public'),
        historyApiFallback: true,
        port: 3000
    }
}