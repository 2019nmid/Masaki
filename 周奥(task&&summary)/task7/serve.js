const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const router = require('./router')

app.engine('html', require('express-art-template'));

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/public/',express.static('./public/'))

app.use(bodyParser.json())

app.use(router)

app.listen(3000, () => {
  console.log('服务启动成功');
});

app.use((req, res) => {
  res.render('404.html')
})
