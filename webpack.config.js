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
      'style-loader',
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
  return {
    mode: "production",
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'index.js',
      sourceMapFilename: 'index.js.map',
      umdNamedDefine: true,
      library: '@dexma/ui-components',
      libraryTarget: 'umd',
    },
    optimization: {
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
      minimize: true,
      removeAvailableModules: true,
      flagIncludedChunks: true,
      usedExports: true,
      concatenateModules: true,
      sideEffects: false,
    },
    module: {
      rules: [babelLoader, cssLoader],
    },
    externals: {
      react: 'react',
      'react-dom': 'react-dom', }
  };
};
