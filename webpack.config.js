const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/robots.txt',
          to: 'robots.txt',
        },
        {
          from: './src/sitemap_index.xml',
          to: 'sitemap_index.xml',
        },
        {
          from: './src/.htaccess',
          to: '.htaccess',
        },
        {
          from: './src/favicon',
          to: 'favicon',
        },
        {
          from: './src/assets',
          to: 'assets',
        },
        {
          from: './src/images',
          to: 'images',
        },
        {
          from: './src/**/*.json',
          to({ absoluteFilename }) {
            // Preserve the relative path and file name for JSON files
            const relativePath = path.relative(
              path.join(__dirname, 'src'),
              absoluteFilename
            );
            return path.join('json', relativePath);
          },
        },
      ],
    }),
  ],
};
