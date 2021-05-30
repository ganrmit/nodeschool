const fs = require('fs')

const pathToDir = process.argv[2]
const extension = process.argv[3]

fs.readdir(pathToDir, (err, list) => {
  if (err) return console.log(err)

  let filteredFiles = list.filter(filename => new RegExp(`\.${extension}$`).test(filename))
  console.log(filteredFiles.join('\n'))
})
