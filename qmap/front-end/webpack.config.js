const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/jsx/index.jsx",
  output: {
    path: path.join(__dirname, "/src/js/front_end"),
    filename: "bundle.js",
    libraryTarget: 'commonjs',
  },
  name: 'commonjs',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: "/node_modules",
        use: { loader: "babel-loader" }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
