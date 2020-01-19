// Vendors
const
    path = require("path"),
    { CleanWebpackPlugin } = require("clean-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin");


const webpackModule = {
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
};
const optimization = {
    splitChunks: {
        chunks: 'all'
    }
}
const resolve = {
    alias: {
        "@css": path.resolve("src", "css"),
        "@html": path.resolve("src", "html"),
        "@js": path.resolve("src", "js")
    }
}
const plugins = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: "css/[name].css"
    })
]
const commonConfig = {
    module: webpackModule,
    optimization,
    resolve,
    plugins
}

module.exports = {
  production: {
    entry: {
      app: "./src/js/index.js"
    },
    output: {
      path: path.resolve("dist"),
      filename: "js/app.[contenthash].js"
    },
    ...commonConfig
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
    ...commonConfig
  }
};
