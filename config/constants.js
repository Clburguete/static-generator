const path = require("path");

module.exports =  {
  production: {
    entry: {
      app: "./src/js/index.js"
    },
    output: {
      path: path.resolve("dist"),
      filename: "js/app.[contenthash].js"
    }
  },
  development: {
    entry: {
      app: "./src/js/index.js",
      contentTable: "./private/index.js"
    },
    output: {
      path: path.resolve("dist"),
      filename: "js/[name].js"
    }
  }
};