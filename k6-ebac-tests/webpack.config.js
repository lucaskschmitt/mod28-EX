const path = require('path');

module.exports = {
  mode: 'production',
  entry: './simulations/user.test.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'user.test.js',
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: 'commonjs',
                  useBuiltIns: 'usage',
                  corejs: 3,
                  targets: {
                    node: 'current',
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
  target: 'web',
  externals: /^k6(\/.*)?$/,
  stats: {
    colors: true,
  },
  devtool: false,
};
