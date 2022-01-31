module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/scss/styles.scss";'
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          /*  
            'pds-' in the beginning of an element stands for 'paco drawing statsitcs'
            as a placeholder nameto make sure these custom elements work cuz it won't
            work otherwise
          */
          isCustomElement: tag => tag.startsWith('pds-')
        }
      }))
  }
}
