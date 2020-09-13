const config = {
    entry: "./src/index.js",
    output: {
      path: __dirname + "/public/dist",
      filename: "bundle.js"
    },
    mode: "development"
  };
  
  module.exports = config;
  