const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = process.env.NODE_ENV === "development";
const DEV_PORT = process.env.PORT || 9000;

const babelLoader = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: ["babel-loader"],
};

const scssLoader = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
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
};

const resolve = {
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
    config: path.resolve(__dirname, 'src/config/'),
    utils: path.resolve(__dirname, 'src/utils/'),
    styles: path.resolve(__dirname, 'src/styles/'),
    test: path.resolve(__dirname, 'test/'),
  }
};

const plugins = [
  new MiniCssExtractPlugin({
    filename: "[name].css"
  })
];

module.exports = {
  entry: path.join(__dirname, "src/components", "index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js",
    libraryTarget: 'commonjs2'
  },
  mode: process.env.NODE_ENV || "development",
  devtool: isProduction ? false : "inline-source-map",
  module: {
    rules: [
      babelLoader,
      scssLoader
    ],
  },
  resolve,
  plugins,
};
