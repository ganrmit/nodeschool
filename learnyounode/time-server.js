const net = require('net')

function now() {
  const date = new Date()
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
}

const server = net.createServer(function handleSocket(socket) {
  socket.end(now() + '\n')
})
server.listen(+process.argv[2])