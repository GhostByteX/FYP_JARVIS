const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://fyp-model-api.onrender.com/',
      changeOrigin: true,
      secure: false
    })
  )
}
