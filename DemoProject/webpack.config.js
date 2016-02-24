module.exports = {
entry: './Demo1.jsx',
ouput: {
path: './',
filename: './bundle.js'
},
devServer: {
port: 3333
},
module: {
loaders: [{
test: /\.js(x?)$/,
exclude: /node_modules/,
loader: 'babel-loader',
query: {
presets: ['es2015', 'react']
}
}
]
}
}