const http = require('http')

const port = +process.argv[2]

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost')
  const path = url.pathname
  if (path !== '/api/parsetime' && path !== '/api/unixtime') {
    return res.writeHead(404).end('bad request')
  }

  const date = new Date(url.searchParams.get('iso'))
  res.writeHead(200, { 'Content-Type': 'application/json' })
  let result =
    path === '/api/parsetime'
      ? { hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() }
      : { unixtime: date.getTime() }
  console.log(result)
  res.end(JSON.stringify(result))
})
server.listen(port)
