var path = require('path');

module.exports = {
     entry: './client/components/app.js',
     output: {         
         publicPath: "/client/public/js", 
         filename: 'bundle.js'
     },
     module: {
        rules: [
            {
                test: /\.js?$/,
                include: [
                    path.resolve(__dirname, "client")
                ],
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ['react', 'es2015']
                },
            }
        ]
    },
    // node: {
    //     fs: 'empty',
    //     net: 'empty'
    // },
    target: "web"
 };