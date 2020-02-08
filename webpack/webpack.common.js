const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: 'public', to: './' }
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(svg|png|jpg|gif|jpeg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img',
            esModule: false,
          }
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts',
          }
        }
      },
    ]
  }
}