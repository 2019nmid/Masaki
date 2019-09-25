const mongoose = require('mongoose');

//引入db
const db = require('./mongoURI.js').mongoURI;

//连接数据库
mongoose.connect(db,{ useUnifiedTopology: true }).then(() => {
  console.log(`数据库连接成功`)
}).catch(err => {
  console.log(err)
})