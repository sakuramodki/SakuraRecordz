const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/scripts/main.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],

  output: {
    filename: "main.bundle.js",
    path: path.join(__dirname, "assets"),
    publicPath: "fonts/"
  }
}
