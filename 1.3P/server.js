// server.js
const express = require('express');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS) from the "public" folder
app.use(express.static('public'));

// Basic endpoint to test your server
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Example test endpoint
app.get('/hello', (req, res) => {
  res.send('Hello from Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



/// GET API endpoint
app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send('Both num1 and num2 must be numbers');
  }

  const sum = num1 + num2;
  res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});

//
app.get('/multiply', (req, res) => {
  const { num1, num2 } = req.query;
  const result = parseFloat(num1) * parseFloat(num2);
  res.send(`The product of ${num1} and ${num2} is ${result}`);
});
