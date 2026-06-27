const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

const vueApis = ['ref','reactive','shallowReactive','watch','computed','onMounted','onUnmounted','onBeforeUnmount','nextTick','defineComponent','toRefs','toRef','watchEffect','provide','inject','getCurrentInstance','markRaw','shallowRef','triggerRef','customRef','shallowReadonly','readonly','isRef','unref','isReactive','isReadonly','isProxy','toRaw','effectScope','getCurrentScope','onScopeDispose']

const provide = {}
vueApis.forEach(k => { provide[k] = ['vue', k] })
provide['VueRouter'] = ['vue-router', 'default']
provide['createRouter'] = ['vue-router', 'createRouter']
provide['createMemoryHistory'] = ['vue-router', 'createMemoryHistory']

module.exports = defineConfig({
  transpileDependencies: ['@jiaminghi/data-view'],
  lintOnSave: false,
  runtimeCompiler: true,
  parallel: false,
  publicPath: 'https://cdn.jsdelivr.net/gh/a18361272323/dashboard_kpi@5532cf0/dist/',
  configureWebpack: {
    plugins: [new webpack.ProvidePlugin(provide)],
    optimization: { splitChunks: false, concatenateModules: false, usedExports: false, sideEffects: true },
    output: { filename: 'js/app.js', chunkFilename: 'js/[name].js' }
  },
  css: { extract: { filename: 'css/[name].css', chunkFilename: 'css/[name].css' } }
})
