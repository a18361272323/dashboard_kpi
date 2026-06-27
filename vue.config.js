const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

module.exports = defineConfig({
  transpileDependencies: ['@jiaminghi/data-view'],
  lintOnSave: false,
  runtimeCompiler: true,
  parallel: false,
  publicPath: 'https://cdn.jsdelivr.net/gh/a18361272323/dashboard_kpi@688ef81/dist/',
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
      }),
      new webpack.ProvidePlugin({
        defineComponent: ['vue', 'defineComponent'],
      }),
    ],
    optimization: { splitChunks: false, concatenateModules: false },
    output: { filename: 'js/app.js', chunkFilename: 'js/[name].js' }
  },
  css: { extract: { filename: 'css/[name].css', chunkFilename: 'css/[name].css' } }
})
