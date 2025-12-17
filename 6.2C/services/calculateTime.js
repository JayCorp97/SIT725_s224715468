function calculateTotalCookingTime(recipes) {
  if (!Array.isArray(recipes)) {
    throw new Error('Invalid input');
  }

  return recipes.reduce((total, recipe) => {
    if (typeof recipe.time !== 'number') {
      throw new Error('Invalid recipe time');
    }
    return total + recipe.time;
  }, 0);
}

module.exports = calculateTotalCookingTime;

