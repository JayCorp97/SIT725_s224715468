const express = require('express');
const recipeRoutes = require('./routes/recipes');

const app = express();
app.use(express.json());

app.use('/api/recipes', recipeRoutes);

module.exports = app;

// Only start server if not in test mode
if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server running on port 3000..');
  });
}
