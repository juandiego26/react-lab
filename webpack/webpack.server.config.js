const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './source/server.js',
  output: {
    filename: 'index.js',
    path: __dirname + './../built/server',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['latest-minimal', 'react']
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules',
        }),
      },
    ],
    exprContextCritical: false,
  },
  target: 'node',
  plugins: [
    new ExtractTextPlugin({
      filename:'../statics/styles.css',
    }),
  ],
};
