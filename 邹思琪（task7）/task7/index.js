var express = require('express')
var bodParser = require('body-parser')
var web = express()
web.use(express.static('public'))

web.use(bodParser.urlencoded({ extended: false }))

web.listen('8080', function () {
    console.log('服务器启动......')
})