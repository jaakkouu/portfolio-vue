// webpack.config.js
module.exports = {
    resolve: {
      alias: {
        vue: 'vue/dist/vue.js'
      }
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        }
      ]
    }
  }