const socket = io();

const numberDiv = document.getElementById('number');
const statusText = document.getElementById('status');

document.getElementById('start').addEventListener('click', () => {
  socket.emit('start-stream');
});

document.getElementById('stop').addEventListener('click', () => {
  socket.emit('stop-stream');
});

document.getElementById('updateSpeed').addEventListener('click', () => {
  const speed = Number(document.getElementById('speed').value);
  socket.emit('change-speed', speed);
});

socket.on('number-update', (num) => {
  numberDiv.innerText = num;
});

socket.on('status-update', (msg) => {
  statusText.innerText = `Status: ${msg}`;
});
