const CircularDependencyPlugin = require("circular-dependency-plugin");
const WebpackBar = require("webpackbar");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");

const path = require("path");

const extraWebpackPlugins =
  process.env.NODE_ENV === "development"
    ? [
        new CircularDependencyPlugin({
          exclude: /node_modules/,
          failOnError: true,
          allowAsyncCycles: false,
          cwd: process.cwd(),
        }),
      ]
    : []; // prod plugins

module.exports = {
  style: {
    css: {
      loaderOptions: {
        modules: {
          exportLocalsConvention: "camelCase",
          getLocalIdent: (context, localIdentName, localName, options) =>
            context.resourcePath.includes("node_modules")
              ? localName
              : getCSSModuleLocalIdent(context, localIdentName, localName, options),
          localIdentName:
            process.env.NODE_ENV === "production" ? "[hash:base64]" : "[path][name]__[local]--[hash:base64:5]",
        },
      },
    },
  },
  webpack: {
    performance: {
      hints: true,
    },
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
    devServer: {
      historyApiFallback: true, // * to handle react-router-dom browserHistory
      inline: true,
      compress: true,
      open: false,
      port: 3000,
    },
    plugins: [new WebpackBar({ profile: true }), ...extraWebpackPlugins],
  },
};
