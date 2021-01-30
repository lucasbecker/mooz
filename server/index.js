const server = require('http').createServer((request, response) => {
  response.writeHead(204, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
  });
  response.end('hey there!!');
})

const socketIo = require('socket.io');
const io = socketIo(server, {
  cors: {
    origin: '*',
    credentials: false,
  }
})

io.on('connection', socket => {
  console.log('connection', socket.id);
  // adicionando os usuários 
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).broadcast.emit('user-connected', userId);

    // removendo os usuários
    socket.on('disconnect', () => {
      console.log('disconnected!', roomId, userId);
      socket.to(roomId).broadcast.emit('user-disconnected', userId);
    })
  })
})

const startServer = () => {
  const { address, port } = server.address();
  console.info(`server app running at ${address}:${port}`);
}

// inverter or logic abaixo
server.listen(3000 || process.env.PORT, startServer);