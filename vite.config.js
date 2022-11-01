module.exports = {
  build: {
    minify: true,
    rollupOptions: {
      input: {
        app: './main.html',
      },
      output: {
        assetFileNames: '[name].[ext]',
      },
    },
  },
};
