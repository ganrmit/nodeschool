const fs = require('fs')

const filename = process.argv[2]

fs.readFile(filename, 'utf8', (err, contents) => {
  if (err) return console.log(err)

  const newLines = contents.match(/\n/g).length
  console.log(newLines)
})
