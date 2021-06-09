const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname,'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'prog.js',
        assetModuleFilename: 'assets/[hash][ext]'
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
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
                  "sass-loader"
                ],
              },
              {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]'
                },
              },
         ],
    },
};