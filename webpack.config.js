const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const currentPath = path.join(__dirname, "public");
console.log(currentPath);

module.exports = env => {
  console.log("env : ", env);
  const isProduction = env === "production";

  return {
    entry: "./src/app.js",
    output: {
      filename: "bundle.js",
      path: currentPath
    },

    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: "style.css"
      })
    ],

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.s?css$/,
          use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: currentPath
                }
              },
            "css-loader",
            "sass-loader"
            
          ]
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true
    }
  };
};
