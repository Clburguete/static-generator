// Vendors
const path = require("path");

const { config } = require("./config");

module.exports = {
  production: {
    entry: {
      app: "./src/js/index.js"
    },
    output: {
      path: path.resolve("dist"),
      filename: "js/app.[contenthash].js"
    },
    ...config
  },
  development: {
    entry: {
      app: "./src/js/index.js",
      contentTable: "./private/index.js"
    },
    output: {
      path: path.resolve("dist"),
      filename: "js/[name].js"
    },
    ...config
  }
};
