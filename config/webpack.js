const 
  { getHtmlConfig } = require("./utils.js"),
  globby = require("globby"),
  path = require("path"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = async () => {
  const
    paths = await globby(['src/html/**']),
    HtmlWebpackConfig = getHtmlConfig(paths);

    
  return {
    entry: "./src/js/index.js",
    output: {
      filename: "js/index.js",
      path: path.resolve("dist"),
    },
    devServer: {
      openPage: 'index.html'
    },
    plugins: [
      new CleanWebpackPlugin(),
      ...HtmlWebpackConfig,
      new MiniCssExtractPlugin({
        filename: 'css/main.css'
      })
    ],
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
          loader: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
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
    }
  };
}




