const PATH = require("path");
const ExtractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = PATH.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = PATH.join(__dirname, "static");

const config = {
  entry: ENTRY_FILE,
  output: {
    path: OUTPUT_DIR,
    mode: MODE,
    module: {
      rules: [
        {
          test: /\(.scss)$/,
          use: ExtractCSS.extract([
            {
              loader: "css-loader",
            },
            {
              loader: "postcss-loader",
            },
            {
              loader: "sass-loader",
            },
          ]),
        },
      ],
    },
    filename: "[name].[format]",
  },
};

module.exports = config;
