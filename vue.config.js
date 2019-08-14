const launchMiddleware = require("launch-editor-middleware");

module.exports = {
  configureWebpack: {
    devServer: {
      before(app) {
        app.use("/__open-in-editor", launchMiddleware());
      }
    }
  },

  pwa: {
    name: "BryanEnid Website",
    themeColor: "#9B9B9B"
  },

  publicPath: process.env.NODE_ENV === "production" ? "/Website2019/" : "/"
};
