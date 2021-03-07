const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // APP ENTRY POINT
  entry: path.join(__dirname, "src", "index.js"),

  // OUTPUT DIRECTORY
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.bundle.js",
  },

  // PATH RESOLVE
  resolve: {
    extensions: [".js", ".jsx"],
  },

  // EVIROMENT MODE
  mode: process.env.NODE_ENV || "development",

  // DEV SERVER ENTRY POINT
  devServer: {
    contentBase: path.resolve(__dirname, "./public"),
    port: 3000,
    watchContentBase: true,
  },

  // LOADERS
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  // PLUGINS
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
};
