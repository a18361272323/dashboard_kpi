const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['@jiaminghi/data-view'],
  lintOnSave: false,
  runtimeCompiler: true,
  parallel: false,
  publicPath: 'https://cdn.jsdelivr.net/gh/a18361272323/dashboard_kpi@latest/dist/',
  configureWebpack: {
    optimization: { splitChunks: false },
    output: { filename: 'js/app.js', chunkFilename: 'js/[name].[contenthash:8].js' }
  },
  css: { extract: { filename: 'css/app.css' } }
})
