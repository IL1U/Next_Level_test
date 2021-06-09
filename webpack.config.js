const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dir,'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dir,'dist'),
        filename: 'bundle.[hash].js',
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.[hash].css',
            }
        ),
    ],

    module: {
        rules: [
              {
                test: /\.s[ac]ss$/i,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  "sass-loader",
                ],
              },
         ],
    },
};