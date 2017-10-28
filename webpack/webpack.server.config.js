let path = require('path');

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
        }
      }
    ]
  },
  target: 'node',
};
