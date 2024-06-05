const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: ["./dist/script.js", "./dist/frontend/output.css"],
  mode: "production",
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "dist2"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./dist/frontend/index.html",
      inject: "head",
      scriptLoading: "defer",
    }),
  ],
};
