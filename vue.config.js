const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
  // 在没有部署到网络上时可以使用代理，部署到网络上后基本没什么用，需要在后端添加允许跨域访问策略
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:5000/api',
  //       // 允许跨域
  //       changeOrigin: true,
  //       ws: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }
})
