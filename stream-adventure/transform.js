const { Transform } = require('stream')

const uppercaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase())
    callback()
  },
})

process.stdin.pipe(uppercaseTransform).pipe(process.stdout)
