const http = require('http')
const { pipeline, Transform } = require('stream')

const port = +process.argv[2]

const uppercaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase())
    callback()
  },
})

const server = http.createServer((req, res) => {
  pipeline(req, uppercaseTransform, res, err => {
    if (err) return console.log(err)
  })
})
server.listen(port)
