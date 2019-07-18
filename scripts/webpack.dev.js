import webpack from 'webpack';
import merge from "webpack-merge";
import WebpackDevServer from 'webpack-dev-server';

import webpackConfig from './webpack.config';

const config = merge(webpackConfig, {
    mode: 'development',
});
const devServerOptions = {
    contentBase: './dist',
    publicPath: '/',
    host: 'localhost',
    hot: true,
    noInfo: true,
    open: true,
    stats: {
        chunks: false,
        assets: false,
        colors: true,
        cachedAssets: false,
        modules: false,
        children: false,
        entrypoints: false,
    },
};
WebpackDevServer.addDevServerEntrypoints(config, devServerOptions);
const compiler = webpack(config);
const app = new WebpackDevServer(compiler, devServerOptions);
app.listen(9090);