const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist/assets'),
        filename: 'bundle.js',
        publicPath: 'assets'
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/},
            {test: /\.json$/, loader: "json-loader", exclude: /node_modules/},
            {test: /\.css$/, loader: "style-loader!css-loader!autoprefixer-loader"},
            {test: /\.scss$/, loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"},
        ]
    }
};