module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/paco-global.scss";`
      }
    }
  }
};