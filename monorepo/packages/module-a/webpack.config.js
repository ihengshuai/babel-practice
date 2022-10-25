const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js/i,
        loader: "babel-loader",
        options: {
          rootMode: "upward"
        },
        exclude: [path.resolve(__dirname, "node_modules")],
      },
    ],
  },
};
