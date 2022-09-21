const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require( 'path' );

module.exports = {
    
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'index.js',
     }, 
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', {
                        loader: 'css-loader', options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            },
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.json']
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve( __dirname, 'public/index.html' ),
            filename: './index.html'
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        port:3000,
        open:true,
    }
};