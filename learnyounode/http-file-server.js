const http = require('http')
const fs = require('fs')
const { pipeline } = require('stream')

const port = +process.argv[2]
const filepath = process.argv[3]

const server = http.createServer((req, res) => {
  pipeline(fs.createReadStream(filepath), res, err => {
    if (err) return console.log(err)
  })
})
server.listen(port)
