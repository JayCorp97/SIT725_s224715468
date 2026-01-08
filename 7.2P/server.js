const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

let intervalId = null;
let speed = 1000;

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  socket.emit('status-update', 'Connected to server');

  socket.on('start-stream', () => {
    if (!intervalId) {
      intervalId = setInterval(() => {
        const number = Math.floor(Math.random() * 100);
        io.emit('number-update', number);
      }, speed);

      io.emit('status-update', 'Number stream started');
    }
  });

  socket.on('stop-stream', () => {
    clearInterval(intervalId);
    intervalId = null;
    io.emit('status-update', 'Number stream stopped');
  });

  socket.on('change-speed', (newSpeed) => {
    speed = newSpeed;

    if (intervalId) {
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        const number = Math.floor(Math.random() * 100);
        io.emit('number-update', number);
      }, speed);
    }

    io.emit('status-update', `Speed changed to ${speed}ms`);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

http.listen(PORT, () => {
  console.log(`Server running on port ${PORT}..`);
});
