const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./js/app.js",
    hex: "./js/hex.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
};
