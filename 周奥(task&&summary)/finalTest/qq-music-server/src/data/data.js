const fs = require('fs')
const path = require('path')

function readJson (file) {
  var file = path.join(__dirname, file);
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
    if (err) {
      console.log(err)
      reject(err)
    } else {
      resolve(data)
    }
  })
  })

}

module.exports=readJson