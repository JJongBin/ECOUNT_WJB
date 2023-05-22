var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/js/index.js",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "../server/public"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src/index.html"),
    }),
  ],
  mode: "production",
  // mode: "development",
  devtool: "source-map",
};
