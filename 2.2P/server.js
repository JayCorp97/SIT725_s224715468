// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Send index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Basic test endpoint
app.get('/hello', (req, res) => {
  res.send('Hello from Express!');
});

// -------------------------
//   CALCULATOR ENDPOINTS
// -------------------------

app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Both num1 and num2 must be numbers' });
  }

  const result = num1 + num2;
  res.json({ result });
});

app.get('/sub', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Both num1 and num2 must be numbers' });
  }

  const result = num1 - num2;
  res.json({ result });
});

app.get('/multiply', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Both num1 and num2 must be numbers' });
  }

  res.json({ result: num1 * num2 });
});

app.get('/divide', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Both num1 and num2 must be numbers' });
  }

  if (num2 === 0) {
    return res.status(400).json({ error: 'Cannot divide by zero' });
  }

  res.json({ result: num1 / num2 });
});

// Health endpoint
app.get('/health', (req, res) => {
  res.send('Server is healthy!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
