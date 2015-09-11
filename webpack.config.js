var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');


var SRC_PATH = path.resolve(__dirname, 'src');


var DEV_SERVER = {
    IP: '127.0.0.1',
    PORT: 8888
};


const LOADERS = {
    ESLINT: 'eslint',
    REACT_HOT: 'react-hot',
    BABEL: 'babel',
    FLOWCHECK: 'flowcheck',

    STYLE: 'style',
    CSS: 'css?localIdentName=[path][name]---[local]---[hash:base64:5]',
    LESS: 'less',
    SASS: 'sass?sourceMap&includePaths[]=' + SRC_PATH,
    POST_CSS: 'postcss',
};


module.exports = {
    debug: true,

    ip: DEV_SERVER.IP,
    port: DEV_SERVER.PORT,

    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: SRC_PATH
    },

    entry: [
        path.join(SRC_PATH, 'preview.js'),
        'webpack-dev-server/client?http://' + DEV_SERVER.IP + ':' + DEV_SERVER.PORT,
        'webpack/hot/only-dev-server',
    ],

    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/',
    },

    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ],

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

    module: {

        preLoaders: [{
            test: /\.jsx?$/,
            include: SRC_PATH,
            loaders: [LOADERS.ESLINT],
        }],

        loaders: [{
            test: /\.jsx?$/,
            include: SRC_PATH,
            loaders: [
                LOADERS.REACT_HOT,
                LOADERS.FLOWCHECK,
                LOADERS.BABEL + '?blacklist=flow'
            ],
        }, {
            test: /\.css$/,
            loaders: [
                LOADERS.STYLE,
                LOADERS.CSS,
                LOADERS.POST_CSS
            ],
        }, {
            test: /\.less$/,
            loaders: [
                LOADERS.STYLE,
                LOADERS.CSS,
                LOADERS.LESS,
                LOADERS.POST_CSS
            ]
        }, {
            test: /\.scss$/,
            loaders: [
                LOADERS.STYLE,
                LOADERS.CSS,
                LOADERS.SASS,
                LOADERS.POST_CSS
            ],
        }]
    },

};
