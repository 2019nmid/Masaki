const fs = require('fs')
const db = './db.json'
/**
 * 获取user列表
 */
exports.find = (userMsg) => {
  return new Promise((resolve, reject) => {
    fs.readFile(db, (err, data) => {
      if (err) {
        reject('读取数据失败')
      } else {
        resolve(JSON.parse(data).user)
      }
    })
  })
}

/**
 * 登录
 */
exports.login = (loginUser) => {
   return new Promise((resolve, reject) => {
    fs.readFile(db, (err, data) => {
      if (err) {
        reject('读取数据失败')
      } else {
        let userMsg = JSON.parse(data).user
        let userName = loginUser.userName
        let userPsw = loginUser.userPsw
        for (let i = 0; i < userMsg.length; i++) {
          const snapUser = userMsg[i];
    
          if (snapUser.userMail === userName && snapUser.userPsw === userPsw) {
            resolve(snapUser)
          } else if (i === userMsg.length-1) {
            reject('用户名或者密码错误')
          } else {
            continue;
          }
        }
      }
    })
  })
}



/**
 * 注册
 */
exports.register = (newUser) => {
  return new Promise((resolve, reject) => {
    fs.readFile(db, (err, data) => {
      if (err) {
        reject('读取数据失败')
      } else {
        let userMsg = JSON.parse(data).user
        newUser.id=userMsg[userMsg.length-1].id+1
        userMsg.push(newUser)
        let newUSerMsg = JSON.stringify({
          user: userMsg
        })
        fs.writeFile(db, newUSerMsg, (err) => {
          if (err) {
            reject('注册失败')
          } else {
            resolve('注册成功')
          }
        })   
      }
    })
  })
}