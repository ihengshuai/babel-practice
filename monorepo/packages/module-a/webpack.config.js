const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/index.js"),
  module: {
    rules: [
      {
        test: /\.js/i,
        loader: "babel-loader",
        exclude: [path.resolve(__dirname, "node_modules")],
      },
    ],
  },
};
