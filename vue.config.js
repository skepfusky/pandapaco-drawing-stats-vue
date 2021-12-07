module.exports = {
  // Custom elements
//  chainWebpack: config => {
//    config.module
//    .rule('vue')
//    .use('vue-loader')
//    .tap(options => ({
//      ...options,
//      compilerOptions: {
//        // treat any tag that starts with 'wc-paco' as custom elements
//        isCustomElement: tag => tag.startsWith('wc-paco-')
//      }
//    }))
//  },

  // Append scss to every goddamn component
  // Fortnite sucks btw lol
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/scss/global.scss";`
      }
    }
  }
};