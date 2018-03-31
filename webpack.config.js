const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: ['./client/src/index.js'],
    output: {
        path: path.resolve(__dirname, './client/dist/'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            loader: 'babel-loader'
        }],
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './client/src/public' },
        ])
    ]
}
