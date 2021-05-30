const http = require('http')

const url = process.argv[2]

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
      .on('error', console.log)
      .on('end', function summarize() {
        console.log(allData.length)
        console.log(allData)
      })
  })
  .on('error', console.log)
