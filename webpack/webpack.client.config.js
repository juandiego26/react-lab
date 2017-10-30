let path = require('path');

module.exports = {
  entry: './source/client.js',
  output: {
    filename: 'app.js',
    path: __dirname + './../built/statics',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2016', 'es2017', 'react'],
          plugins: ['transform-es2015-modules-commonjs'],
        }
      }
    ]
  },
  target: 'web',
};
