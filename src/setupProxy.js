const proxy = require('http-proxy-middleware')
const envToUse = 'LOCAL'
const signInurl = ''
const envs = {
  LOCAL: {
    '/auth': `${signInurl}/auth`
  }
}

const envUrls = envs[envToUse]

function handler(app) {
  for (const [route, url] of Object.entries(envUrls)) {
    app.use(
      route,
      proxy({
        target: url,
        changeOrigin: true,
        pathRewrite: Object.keys(envUrls).reduce((acc, u) => ({ ...acc, [`^${u}`]: '/' }), {})
      })
    )
  }
}

module.exports = handler
