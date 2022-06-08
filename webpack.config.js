module.exports = [
  {
    mode: "development",
    entry: "./index.scss",
    output: {
      // This is necessary for webpack to compile
      // But we never use style-bundle.js
      filename: "style-bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "bundle.css",
              },
            },
            "extract-loader",
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
  },
  {
    mode: "development",
    entry: "./index.ts",
    output: {
      filename: "bundle.js",
    },
    devServer: {
      static: {
        directory: "./",
      },
      liveReload: true,
      port: 3000,
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
        },
        {
          test: /\.ts$/,
          loader: "ts-loader",
        },
      ],
    },
  },
];
