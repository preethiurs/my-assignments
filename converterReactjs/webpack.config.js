module.exports = {
entry: './main.jsx',
ouput: {
path: './',
filename: './bundle.js'
},
devServer: {
inline: true,
port: 3333
},
module: {
loaders: [{
test: /\.js(x?)$/,
exclude: /node_modules/,
loader: 'babel',
query: {
presets: ['es2015', 'react']
}
}
]
}
}