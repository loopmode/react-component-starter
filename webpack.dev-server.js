var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var open = require('opn');
var config = require('./webpack.config');
new WebpackDevServer(webpack(config), {
    contentBase: __dirname,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true,
    },
}).listen(config.port, config.ip, function(err) {
    if (err) {
        return console.warn(err);
    }
    console.log('Development server listening at ' + config.ip + ':' + config.port);
    console.info('Please wait until your bundle is ready');
    open('http://' + config.ip + ':' + config.port);
});

