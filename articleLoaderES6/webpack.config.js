module.exports = {
    entry: ["./app.js"],
    output: {
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel?presets[]=es2015'
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]

    },

    resolve: {
        extensions: ['', '.js', '.es6']
    },

}