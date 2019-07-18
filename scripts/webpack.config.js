import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const PROJECT_ROOT = path.resolve(__dirname, '../');

export default {
    entry: "./src/index.js",
    output: {
        filename: "js/[name].js",
        path: path.resolve(PROJECT_ROOT, "dist")
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                use: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}
