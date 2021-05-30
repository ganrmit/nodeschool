const fs = require('fs')

const filename = process.argv[2]
const contents = fs.readFileSync(filename, 'utf8')
const newLines = contents.match(/\n/g).length

console.log(newLines)