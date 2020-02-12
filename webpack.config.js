const path = require('path')

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    mode: process.env.NODE_ENV,
    plugins: [],
    module: {
        rules: [
            {
                test: /.jsx?/,
                //react file test
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /.scss$/,
                //sass test
                use: [
                    // style-loader
                    { loader: 'style-loader' },
                    // css-loader
                    { loader: 'css-loader' },
                    // sass-loader
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /.css$/,
                //css test
                use: [
                    { loader: 'style-loader' },
                    // css-loader
                    { loader: 'css-loader' },
                ]
            },
        ]
    }
    ,
    devServer: {
        publicPath: 'http://localhost:8080/build',
        // compress: true,
        port: 8080,
        contentBase: path.join(__dirname, "./client/assets"),
        proxy: {
            '/': 'http://localhost:3000'
        }
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
}