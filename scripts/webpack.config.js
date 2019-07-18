import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackProgressPlugin from 'progress-bar-webpack-plugin';

export const PROJECT_ROOT = path.resolve(__dirname, '..');

export default {
    entry: "./src/index.js",
    output: {
        filename: "js/[name].js",
        path: path.resolve(PROJECT_ROOT, "dist")
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.(css|less)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new WebpackProgressPlugin(),
        new HtmlWebpackPlugin()
    ]
}
