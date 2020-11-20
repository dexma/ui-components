const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const safePostCssParser = require('postcss-safe-parser');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

module.exports = function(env, argv) {
  const isEnvDevelopment = argv.mode === 'development';
  const isEnvProduction = argv.mode === 'production';
  const babelLoader = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader'],
  };
  const cssLoader = {
    test: /\.css$/,
    use: [
      isEnvDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            require('autoprefixer'),
            require('cssnano')({ preset: 'default' }),
          ],
        },
      },
    ],
  };
  const resolve = {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      hoc: path.resolve(__dirname, 'src/hoc/'),
      config: path.resolve(__dirname, 'src/config/'),
      utils: path.resolve(__dirname, 'src/utils/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      test: path.resolve(__dirname, 'test/'),
    },
  };
  const plugins = [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ];
  return {
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
    bail: isEnvProduction,
    devtool: isEnvProduction
      ? shouldUseSourceMap
        ? 'source-map'
        : false
      : isEnvDevelopment && 'cheap-module-source-map',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].bundle.js',
      library: '@dexma/ui-components',
      libraryTarget: 'umd',
    },
    optimization: {
      minimize: isEnvProduction,
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
            output: {
              comments: false,
            },
            keep_fnames: true,
            comments: false,
          },
          cache: true,
          parallel: true,
          sourceMap: true,
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            parser: safePostCssParser,
            map: shouldUseSourceMap
              ? {
                inline: false,
                annotation: true,
              }
              : false,
          },
        }),
      ],
    },
    module: {
      rules: [babelLoader, cssLoader],
    },
    resolve,
    plugins,
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
    }
  };
};
