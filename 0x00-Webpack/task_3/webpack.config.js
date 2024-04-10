const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    header: {
      import: path.resolve(__dirname, './modules/header/header.js'),
      dependOn: 'shared',
    },
    body: {
      import: path.resolve(__dirname, './modules/body/body.js'),
      dependOn: 'shared',
    },
    footer: {
      import: path.resolve(__dirname, './modules/footer/footer.js'),
      dependOn: 'shared',
    },
    shared: 'jquery',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    static: path.join(__dirname, './public'),
    port: 8564,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jp?g|svg|webp)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: 'inline-source-map',
}