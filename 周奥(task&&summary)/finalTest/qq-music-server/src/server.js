const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');


//实例化koa和中间件
const app = new Koa();
const router = new Router();

//使用router
app.use(router.routes()).use(router.allowedMethods());
app.use(bodyParser());



//引入api地址
const users=require('./routes/users')
const songList=require('./routes/songList')

//配置路由地址
router.use('/api/users', users)
router.use('/api/songList',songList)



//配置端口
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`启动服务成功`)
})
