const proxy = require("http-proxy-middleware")

module.exports = function (app) {
  app.use(
    proxy.createProxyMiddleware("/api", {
      target: "https://mock.apifox.com/m1/3834506-0-default",
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        "^/api": ""
      }
    })
  )
}
