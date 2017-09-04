var webpack = require('webpack'); // eslint-disable-line
var HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line
var OfflinePlugin = require('offline-plugin'); // eslint-disable-line
var path = require('path'); // eslint-disable-line
var env = process.env.NODE_ENV;   // eslint-disable-line
var config; // eslint-disable-line

module.exports = config = { // eslint-disable-line
  entry: [
    './src/index.js',
  ],
  output: {
    filename: './dist/bundle.js',
  },
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel-loader',
    },
    {
      test: /\.json$/,
      loader: 'json-loader',
    }],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: [
      '.js',
      '.json',
    ],
    mainFields: [
      'browser',
      'jsnext:main',
      'main',
    ],
  },
  plugins: [
    new webpack.BannerPlugin({ banner: ' /* eslint-disable */ ', raw: true, entryOnly: true }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ],
};

if (env === 'production') {
  config.output.filename = './dist/bundle.min.js';
  config.plugins.push(new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  }));
  config.plugins
  .push(new webpack.optimize.UglifyJsPlugin({
    compressor: {
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
      warnings: false,
      screw_ie8: false,
    },
    mangle: {
      screw_ie8: false,
    },
    output: {
      screw_ie8: false,
    },
  }));
}
