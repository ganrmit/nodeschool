const filteredLs = require('./mymodule')

const pathToDir = process.argv[2]
const extension = process.argv[3]

filteredLs(pathToDir, extension, (err, filteredFiles) => {
  if (err) return console.log(err)

  console.log(filteredFiles.join('\n'))
})