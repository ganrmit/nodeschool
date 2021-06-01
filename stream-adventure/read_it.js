const { Readable } = require('stream')

const argvStream = new Readable({
  read() {
    this.push(process.argv[2], 'utf8')
    this.push(null)
  },
})

argvStream.pipe(process.stdout)
