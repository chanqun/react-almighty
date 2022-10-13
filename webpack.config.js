const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const prod = process.env.NODE_ENV === 'production';

module.exports = ({final, root, title}) => {
    let config = {
        mode: prod ? 'production' : 'development',
        devtool: prod ? 'hidden-source-map' : 'source-map',
        entry: path.join(root, 'src', 'index.tsx'),

        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: ['babel-loader', 'ts-loader'],
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "assets/fonts/[name].[hash:8].[ext]",
                            },
                        },
                    ],
                }
            ],
        },

        output: {
            path: path.join(root, 'dist'),
            filename: '[name].[contenthash].js',
        },

        devServer: {
            historyApiFallback: true,
            // inline: true,
            port: 3000,
            hot: true,
            // publicPath: '/',

        },

        plugins: [
            new webpack.ProvidePlugin({
                React: 'react',
            }),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'public', 'index.html'),
                title,
            }),
            new webpack.HotModuleReplacementPlugin(),
        ],
    };

    if (final) {
        config = final(config);
    }

    return config;
}
