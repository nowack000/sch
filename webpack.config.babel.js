import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
  entry: {
    client: [
      'babel-polyfill',
      './src/client.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src')],
        query: {
          presets: [
            'env',
            'stage-2',
            'react'
          ]
        }
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => /node_modules/.test(module.resource)
    }),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') })
  ],

  devtool: 'cheap-module-source-map'
};

export default config;