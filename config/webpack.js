const
  CONFIG = require("./constants.js"),
  { getHtmlConfig } = require("./utils.js"),
  { CleanWebpackPlugin } = require("clean-webpack-plugin"),
  globby = require("globby"),
  path = require("path"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = async (env, argv) => {
  const
    { mode } = argv,
    isDevelopment = mode === 'development',
    paths = await globby(["src/html/**"]),
    HtmlWebpackConfig = getHtmlConfig(paths, isDevelopment);
    
  return {
    entry: CONFIG[mode].entry,
    output: CONFIG[mode].output,
    devServer: {
      openPage: "html",
    },
    plugins: [
      new CleanWebpackPlugin(),
      ...HtmlWebpackConfig,
      new MiniCssExtractPlugin({
        filename: "css/[name].css"
      })
    ],
    resolve: {
      alias: {
        "@css": path.resolve("src", "css"),
        "@html": path.resolve("src", "html"),
        "@js": path.resolve("src", "js")
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          query: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-transform-modules-amd"
            ]
          }
        },
        {
          test: /\.scss$/,
          loader: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ["file-loader"]
        }
      ]
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  };
}




