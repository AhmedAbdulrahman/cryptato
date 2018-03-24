const withCSS = require('@zeit/next-css')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = withCSS({
  exportPathMap() {
    return {
      '/': { page: '/' },
    }
  },
  assetPrefix: isProduction ? '/cryptato' : '',
  distDir: 'build',
})
