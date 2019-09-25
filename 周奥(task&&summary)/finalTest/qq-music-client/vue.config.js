module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port:8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        }
      }
    }
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title:'index',
    },
    login: {
      entry:'src/pages/login/login.js',
      template: 'public/login.html',
      filename: 'login.html',
      title:'login',
    },
     myMusic: {
      entry:'src/pages/myMusic/myMusic.js',
      template: 'public/myMusic.html',
      filename: 'myMusic.html',
      title:'myMusic',
    },
  }
}