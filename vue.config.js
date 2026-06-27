const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['@jiaminghi/data-view'],
  lintOnSave: false,
  runtimeCompiler: true,
  parallel: false,
  publicPath: 'https://cdn.jsdelivr.net/gh/a18361272323/dashboard_kpi@9510641/dist/',
  configureWebpack: {
    optimization: { splitChunks: false, concatenateModules: false },
    output: { filename: 'js/app.js', chunkFilename: 'js/[name].js' }
  },
  css: { extract: { filename: 'css/[name].css', chunkFilename: 'css/[name].css' } }
})
