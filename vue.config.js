const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  //解决微信开发者工具本地域名调试
  devServer: {
    disableHostCheck: true,
    host: 'localhost',
    port: 38888,
  
  },
  // outputDir: 'dist',
  // publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/'，
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  }
};
