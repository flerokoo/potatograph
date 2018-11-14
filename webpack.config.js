const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: "development",
    output: {
        filename: 'potatograph.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimize: false
    },
    devServer: {
        host: "192.168.0.101", // local ip in LAN
        contentBase: path.join(__dirname, 'demo'),
        watchContentBase: true,
        port: 3000,
        publicPath: '/dist/'
    },
    module: {
        rules: [{
            test: require.resolve('./src/potatograph'),
            use: [{
                loader: 'expose-loader',
                options: 'Potatograph'
            }]
        }]
    }
};
