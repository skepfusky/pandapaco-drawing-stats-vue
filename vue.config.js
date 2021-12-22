module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/paco-styles.scss";`
      }
    }
  }
};