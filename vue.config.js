const { defineConfig } = require('@vue/cli-service')
const path = require('path')


module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  chainWebpack:(config)=>{
    //路径别名
    config.resolve.alias
    .set('@',path.join(__dirname,'src'))
  }
})
