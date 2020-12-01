const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const VENDOR_LIBS = [
    'react', 'lodash', 'react-dom'
];
// console.log(new MiniCssExtractPlugin({ filename: '[name]--.--[hash].css' }).loader);
const config = {
    entry: {
        bundle: './bundlers',
        vendor: VENDOR_LIBS
    },
    output: {
      // filename: '[name]--.--[hash].js',
      path: __dirname + '/builds/',
      publicPath: __dirname + '/builds/'
    },
    plugins: [
        new MiniCssExtractPlugin(),
        // new MiniCssExtractPlugin({ filename: 'ejlpt---[name].[hash].css' }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
                    // new webpack.optimize.CommonsChunkPlugin({
                    //     names: ['vendor', 'manifest']
                    // }),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        // })
    ],
    module: {
        rules: [
/**************************************************** */
//https://webpack.js.org/loaders/babel-loader/
            {
                test: /\.m?jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', 'react'],
                        // plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },  
/**************************************************** */
            {
            test: /.s?css$/i,
            use: [
              MiniCssExtractPlugin.loader,
              // 'style-loader',
              'css-loader',
              'sass-loader'
            ]
          },
        ]
    },
}

module.exports = config






