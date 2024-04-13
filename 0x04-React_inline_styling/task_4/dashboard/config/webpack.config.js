const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
  },
  devServer: {
    static: path.join('./', 'dist'),
    port: 8564,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  devtool: "inline-source-map",
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'], // babel-loader
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // style-loader, css-loader
      },
      {
        test: /\.(png|jpg|gif|svg|webp)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true,
            },
          }
        ], // file-loader
      },
    ],
  },
};
