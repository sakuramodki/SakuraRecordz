const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/scripts/index.js',
    mastring: './src/scripts/mastring.js'
  },
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
    filename: "[name].bundle.js",
    path: path.join(__dirname, "assets"),
    publicPath: "fonts/"
  }
}
