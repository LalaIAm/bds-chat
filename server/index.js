const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:5173',
  },
});

io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error('invalid username'));
  }
  socket.username = username;
  next();
});

io.on('connection', (socket) => {
    const users = [];
    const messages = []

  for (let [id, socket] of io.of('/').sockets) {
    users.push({
      userID: id,
      username: socket.username,
    });
  }

  socket.emit('users', users);

  socket.broadcast.emit('user connected', {
    userID: socket.id,
    username: socket.username,
  });

  socket.on('message', (message) => {
      socket.emit('message', message);
      messages.push({message: message})
  });
    
    socket.on('disconnect', () => {
        socket.broadcast.emit('user disconnected', socket.id)
    })
});
server.listen(3000, () => {
  console.log(`listening on *:3000`);
});
