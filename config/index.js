const
  CONFIG = require("./webpack.js"),
  { getHtmlConfig } = require("./utils.js"),
  globby = require("globby");

module.exports = async (env, argv) => {
  const
    { mode } = argv,
    {
      entry,
      output,
      plugins,
      resolve,
      module,
      optimization
    } = CONFIG[mode],
    isDevelopment = mode === 'development',
    paths = await globby(["src/html/**"]),
    HtmlWebpackConfig = getHtmlConfig(paths, isDevelopment);

  return {
    entry,
    output,
    devServer: {
      openPage: "html"
    },
    plugins: [
      ...plugins,
      ...HtmlWebpackConfig
    ],
    resolve,
    module,
    optimization
  };
}




