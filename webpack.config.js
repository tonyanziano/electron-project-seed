const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  mode: "development",
  entry: path.resolve("./src/renderer/index.tsx"),
  output: {
    path: path.resolve("./dist"),
    filename: "renderer.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: path.resolve(__dirname, "tsconfig.renderer.json"),
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/renderer/index.html"),
      title: "Electron Shutdown POC App",
    }),
  ],
};
