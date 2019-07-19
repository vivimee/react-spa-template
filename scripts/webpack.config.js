import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackProgressPlugin from 'progress-bar-webpack-plugin';

export const PROJECT_ROOT = path.resolve(__dirname, '..');

export default {
    entry: "./src/index.js",
    output: {
        filename: "js/[name].js",
        path: path.resolve(PROJECT_ROOT, "dist"),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.*'],
    },
    optimization: {
        runtimeChunk: {
            name: 'runtime',
        },
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    {
                        loader: 'eslint-loader',
                        options: { fix: true }
                    }
                ]
            },
            {
                test: /\.(css|less)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            outputPath: 'images',
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new WebpackProgressPlugin(),
        new HtmlWebpackPlugin()
    ]
}
