const { Writable } = require('stream')

const logStream = new Writable({
  write(chunk, encoding, callback) {
    console.log('writing:', chunk.toString())
    callback()
  },
})

process.stdin.pipe(logStream)
