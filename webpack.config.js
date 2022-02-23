const webpack = require('webpack');
const path = require("path");
const ESLintPlugin = require('eslint-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const title = require("./package.json").description;
const name = require("./package.json").name;
const libName = "WvusForm";

// Variables
const useAnalyzer = (process.env.USE_ANALYZER && process.env.USE_ANALYZER.toLowerCase() == "true") === true;

module.exports = (env, options) => {
  const { mode } = env;

  // Config Object
  const config = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: `${name}.js`,
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
    optimization: {
      // chunkIds: 'named',  // 
      // concatenateModules: false, // true
      // emitOnErrors: false, // false
      // flagIncludedChunks: false, // true
      // innerGraph: true, // true
      // mangleExports: false, // deterministic
      // mangleWasmImports: false, // false
      // mergeDuplicateChunks: false, // true
      // minimize: false, // true
      // moduleIds: 'natural', // natural
      // nodeEnv: 'development', // not set
      // portableRecords: true, // false
      // providedExports: true, // true
      // realContentHash: false, // true
      // removeAvailableModules: false, // false
      // removeEmptyChunks: false, // true
      // usedExports: false,
    },
    resolve: {
      extensions: ['.jsx', '.js', '.json'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    externals: {
      "react": {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
        root: 'React',
      },
      "react-dom": {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'react-dom',
        root: 'ReactDOM',
      },
      "validator": {
        commonjs: 'validator',
        commonjs2: 'validator',
        amd: 'validator',
        root: 'validator',
      },
      "lodash.merge": {
        commonjs: 'lodash.merge',
        commonjs2: 'lodash.merge',
        amd: 'lodash.merge',
        root: '_merge'
      },
      "lodash": {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: 'lodash'
      },
      "prop-types": {
        commonjs: 'prop-types',
        commonjs2: 'prop-types',
        amd: 'prop-types',
        root: 'PropTypes'
      }
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

  if (useAnalyzer) {
    config.plugins.push(new BundleAnalyzerPlugin());
  }

  if (mode === "development") {
    // Include conditional webpack config for development builds
  }

  if (mode === "production") {
    // Include conditional webpack config for production builds
  }

  return config;
};