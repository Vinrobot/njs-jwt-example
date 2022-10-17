const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: false,
  },
  node: {
    global: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$$/,
        exclude: /(bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'babel-preset-njs',
            ],
          },
        },
      },
    ],
  },
};