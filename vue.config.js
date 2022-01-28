module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/scss/styles.scss";'
      }
    },
  },
}
