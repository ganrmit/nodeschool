const fs = require('fs')

module.exports = function filteredLs(pathToDir, extension, cb) {
  fs.readdir(pathToDir, (err, list) => {
    if (err) return cb(err)
  
    let filteredFiles = list.filter(filename => new RegExp(`\.${extension}$`).test(filename))
    return cb(null, filteredFiles)
  })
}