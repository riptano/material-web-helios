// const webpack = require("webpack");
// const HtmlWebPackPlugin = require("html-webpack-plugin");

// const plugins = [
//   new webpack.HotModuleReplacementPlugin(),
//   new HtmlWebPackPlugin({
//     title: "Material Web Helios",
//     template: "./index.html",
//     filename: "./index.html",
//   }),
// ];

// module.exports = {
//   mode: "development",
//   watch: true,
//   entry: "./index.ts",
//   output: {
//     filename: "index.js",
//     path: __dirname + "/dist",
//   },
//   resolve: {
//     extensions: [".ts", ".js"],
//   },
//   devtool: "source-map",
//   plugins,
//   devServer: {
//     static: ["dist"],
//     port: 3000,
//     open: true,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         use: ["style-loader", "css-loader", "sass-loader"],
//         // options: {
//         //   fiber: require("fibers"),
//         // },
//       },
//       { test: /\.ts?$/, loader: "babel-loader" },
//       { test: /\.ts?$/, loader: "ts-loader" },
//     ],
//   },
// };

function getStyleUse(bundleFilename) {
  return [
    {
      loader: "file-loader",
      options: {
        name: bundleFilename,
      },
    },
    { loader: "extract-loader" },
    { loader: "css-loader" },
    {
      loader: "sass-loader",
      options: {
        // includePaths: ["./node_modules"],
        implementation: require("dart-sass"),
        // fiber: require('fibers'),
      },
    },
  ];
}

module.exports = [
  {
    entry: "./index.scss",
    mode: "development",
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: "index.js",
    },
    module: {
      rules: [
        {
          test: /index.scss$/,
          use: getStyleUse("index.css"),
        },
      ],
    },
  },
  {
    entry: "./index.ts",
    output: {
      filename: "index.js",
    },
    module: {
      rules: [
        {
          test: /index.ts$/,
          use: [{ loader: "babel-loader" }, { loader: "ts-loader" }],
        },
      ],
    },
  },
];
