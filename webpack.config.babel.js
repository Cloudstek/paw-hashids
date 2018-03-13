const path = require('path');

module.exports = {
    target: 'web',
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: [
        'hashids',
        './src/Hashids.js'
    ],
    output: {
        filename: 'Hashids.js',
        path: path.resolve(__dirname, 'build', 'nl.cloudstek.Hashids')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, 'src')],
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
