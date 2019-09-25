const Router = require('koa-router');
const router = new Router();

//引入User
import {User} from '../../models/User.js'

router.post('/login', async ctx => {
  // ctx.status = 200;
  // ctx.body = { msg: 'user login' }
  // console.log(ctx.request.body)
//  await User.find({email:ctx.request.body.email})
});

module.exports = router.routes();