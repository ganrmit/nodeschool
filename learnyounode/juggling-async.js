const http = require('http')

const urls = process.argv.slice(2)

function getUrl(url, cb) {
  http
    .get(url, response => {
      response.setEncoding('utf8')
      let allData = ''
      response
        .on('readable', function () {
          let newData
          while ((newData = this.read())) {
            allData += newData
          }
        })
        .on('error', cb)
        .on('end', () => cb(null, allData))
    })
    .on('error', cb)
}

let counter = 0
let allContents = []
for (let i = 0; i < urls.length; i++) {
  getUrl(urls[i], (err, contents) => {
    if (err) return console.log(err)

    allContents[i] = contents
    if (++counter >= urls.length) {
      console.log(allContents.join('\n'))
    }
  })
}