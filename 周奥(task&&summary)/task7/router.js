const fs = require('fs');
const express = require('express');
const router = express.Router();
const user = require('./login');


/**
 * 主页
 */
router.get('/', (req, res) => {
  res.render('index.html')
});

/**
 * 登录
 */
router.post('/login', (req, res) => {
  let loginMsg = req.body
  let userMsg = ''
  let loginUser = {
    userName: loginMsg.loginName,
    userPsw: loginMsg.password1,
  }
  user.login(loginUser).then((s) => {
    console.log('登陆成功')
    res.render('login/loginMsg.html', {
      user: s
    })
   
  }).catch((f) => {
    console.log(f)
    res.redirect('/')
  })
})

/**
 * 注册
 */
router.post('/register', (req, res) => {
  let registerMsg = req.body
  let newUser = {
    userName: registerMsg.Rname,
    userMail: registerMsg.Remail,
    userPsw: registerMsg.password2
  }
  if (registerMsg.password2 === registerMsg.password3) {
      user.register(newUser).then((s) => {
    console.log(s)
    res.redirect('/')
  }).catch((f) => {
    console.log(f)
    res.send(f)
  })
  } else {
    console.log(registerMsg.password1)
    console.log(registerMsg.password2)
    console.log('第二次密码不一致')
    res.send('第二次密码不一致')
  }

})

module.exports = router