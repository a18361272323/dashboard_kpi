const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['@jiaminghi/data-view'],
  lintOnSave: false,
  runtimeCompiler: true,
  parallel: false
})
