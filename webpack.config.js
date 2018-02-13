// entry -> output
// entry gives us the file we go into
// output lets us configure where we want to output our code
// use the use key property when you want to use more than one loader

module.exports = {
    entry: './src/app.js',
    output: {
        path: `${__dirname}/public`,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: `${__dirname}/public`
    }
};