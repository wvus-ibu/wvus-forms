const webpack = require('webpack');
const path = require("path");
const ESLintPlugin = require('eslint-webpack-plugin');
const title = require("./package.json").description;
const name = require("./package.json").name;
const libName = name.split("-").map((s,i) => i ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : s.toLowerCase()).join("");

module.exports = (env, options) => {
  const { mode } = env;

  // Config Object
  const config = {
    entry: {
      [name]: [].concat([path.resolve(__dirname, './src/index.js')])
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "[name].js",
      library: {
        name: libName,
        type: "umd"
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          // exclude: /node_modules/,
          exclude: /node_modules\/(?!(slide-ui.*)\/).*/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(ttf|eot|woff|woff2|jpg|jpeg|png|gif|mp3|svg)$/,
          use: ['file-loader']
        }
      ]
    },
    plugins: []
  };

  // Eslint Plugin
  config.plugins.push(new ESLintPlugin({
    // See options - https://github.com/webpack-contrib/eslint-webpack-plugin#options
    fix: true,
    exclude: "node_modules",
    context: "src",
    extensions: ["js"],
    fix: false, // auto fix
  }));

  if (mode === "development") {
    // Include conditional webpack config for development builds
  }

  if (mode === "production") {
    // Include conditional webpack config for production builds
  }

  return config;
};