const
  CONFIG = require("./webpack.js"),
  { getHtmlConfig } = require("./utils.js"),
  { CleanWebpackPlugin } = require("clean-webpack-plugin"),
  globby = require("globby"),
  path = require("path"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = async (env, argv) => {
  const
    { mode } = argv,
    webpackConfig = CONFIG[mode],
    isDevelopment = mode === 'development',
    paths = await globby(["src/html/**"]),
    HtmlWebpackConfig = getHtmlConfig(paths, isDevelopment);
    
  return {
    entry: webpackConfig.entry,
    output: webpackConfig.output,
    devServer: {
      openPage: "html"
    },
    plugins: [
      ...webpackConfig.plugins,
      ...HtmlWebpackConfig
    ],
    resolve: webpackConfig.resolve,
    module: webpackConfig.module,
    optimization: webpackConfig.optimization
  };
}




