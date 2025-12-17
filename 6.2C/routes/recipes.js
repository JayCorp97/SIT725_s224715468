const express = require('express');
const router = express.Router();

// Mock recipe data
let recipes = [
  { name: 'Pasta', time: 30 },
  { name: 'Salad', time: 10 }
];

// REST API endpoint
router.get('/count', (req, res) => {
  res.json({ count: recipes.length });
});

module.exports = router;
