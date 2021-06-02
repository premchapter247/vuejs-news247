module.exports = {
  devServer: {
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: false
    }
  },

  lintOnSave: false,

  transpileDependencies: ['vuetify'],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
