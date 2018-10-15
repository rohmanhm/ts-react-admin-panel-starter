const path = require('path')
const tsImportPluginFactory = require('ts-import-plugin')
const rewireLess = require('react-app-rewire-less')
const { getLoader } = require('react-app-rewired')

module.exports = (config, env) => {
  const tsLoader = getLoader(
    config.module.rules,
    rule =>
      rule.loader &&
      typeof rule.loader === 'string' &&
      rule.loader.includes('ts-loader')
  )

  const importOptions = {
    libraryDirectory: 'es',
    libraryName: 'antd',
    style: true
  }

  tsLoader.options = {
    getCustomTransformers: () => ({
      before: [
        tsImportPluginFactory(importOptions),
        tsImportPluginFactory({
          libraryName: 'ant-design-pro',
          libraryDirectory: 'lib',
          style: true,
          camel2DashComponentName: false
        })
      ]
    })
  }

  // Enable LESS
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      '@primary-color': '#1890ff',
      '@link-color': '#1890ff'
    },
    javascriptEnabled: true
  })(config, env)

  // Aliases
  config.resolve.alias = {
    ...config.resolve.alias,
    '~/*': path.resolve(__dirname, 'src/')
  }

  return config
}
