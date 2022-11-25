const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: (config) => {
    // 路径别名
    config.resolve.alias
      .set('@', path.join(__dirname, 'src'))
  },
  devServer: {
    host: 'localhost',
    port: 3030,
    open: true,
    proxy: {
      '/api': {
        target: 'https://www.fastmock.site/mock/18c2724ae4c2605f0c0caef8af93be62',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }

  }
})
