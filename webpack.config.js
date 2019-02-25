const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

    entry:'./index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'app.bundle.js'
    },
    devServer: {
        inline: true,
        open: true,
        historyApiFallback: true,
        port: '3000',
    },

    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./index.html'
        })
    ]
    

}