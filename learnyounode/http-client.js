const http = require('http')

const url = process.argv[2]

http
  .get(url, response => {
    response.setEncoding('utf8')
    response
      .on('readable', function () {
        let data
        while ((data = this.read())) {
          console.log(data)
        }
      })
      .on('error', console.log)
  })
  .on('error', console.log)
