io.socket.on('connect', function () {
  io.socket.request({
    url: '/user',
    method: 'get'
  }, function (users) {
    console.log(users)
  })

  io.socket.on('message', function (message) {
    console.log('Mensagem', message)
  })
})
