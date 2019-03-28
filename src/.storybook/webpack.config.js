const path = require('path');

const resolve = {
  alias: {
    components: path.resolve('src', 'components'),
    config: path.resolve('src', 'config'),
    utils: path.resolve('src', 'utils'),
    styles: path.resolve('src', 'styles'),
    test: path.resolve('src', 'test'),
  }
};

module.exports = {
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("autoprefixer"),
                require("cssnano")({ preset: "default" }),
              ],
            },
          },
        ],
      },
    ],
  },
  resolve
};