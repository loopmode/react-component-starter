var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var SRC_PATH = path.resolve(__dirname, 'src');
var DEV_SERVER = {
    IP: '127.0.0.1',
    PORT: 8888
};
module.exports = {
    debug: true,
    ip: DEV_SERVER.IP,
    port: DEV_SERVER.PORT,
    entry: [
        path.join(SRC_PATH, 'example.js'),
        'webpack-dev-server/client?http://' + DEV_SERVER.IP + ':' + DEV_SERVER.PORT,
        'webpack/hot/only-dev-server',
    ],
    module: {
        preLoaders: [{
            include: SRC_PATH,
            test: /\.jsx?$/,
            loaders: ['eslint'],
        }, ],
        loaders: [{
            include: SRC_PATH,
            test: /\.jsx?$/,
            loaders: [
                'react-hot',
                'babel',
                'flowcheck',
                'babel?blacklist=flow'
            ],
        }, ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: SRC_PATH
    },
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: path.basename(__dirname)
        }),
    ],
};
