module.exports = {
  devServer: {
    proxy: 'http://localhost:8000',
    disableHostCheck: true,
    overlay: {
      warnyings: false,
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
