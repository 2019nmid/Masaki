var express = require('express')
var bodParser = require('body-parser')
var web = express()
web.use(express.static('public'))
web.use(bodParser.urlencoded({extended:false}))
var account = ''
var psw = ''
web.get('/regist',function(req ,res){
var password = req.query.psw
var password2 = req.query.pswa ;
var user = req.query.user
if(user != account && password == password2)
{
account = user
psw = password
res.send('恭喜注册成功！账号是'+ user + ',密码是'
+ password + ',请妥善保管')

}
else {
res.send('注册失败,账号已经注册或者密码不一致')
}
})
web.post('/login',function(req ,res){
var name = req.body.user ;
var password = req.body.password ;
if(name == account && password == psw)

{

res.send('恭喜你登录成功')

}

else{

res.send('登录失败，请检查账号密码')

}

 

})

web.listen('8080',function(){

console.log('服务器启动......')

})
