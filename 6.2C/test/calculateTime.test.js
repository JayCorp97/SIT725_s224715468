const { expect } = require('chai');
const calculateTotalCookingTime = require('../services/calculateTime');

describe('Calculate Total Cooking Time', () => {

  it('should correctly calculate total cooking time', () => {
    const recipes = [
      { time: 20 },
      { time: 40 }
    ];
    const result = calculateTotalCookingTime(recipes);
    expect(result).to.equal(60);
  });

  it('should throw an error for invalid input', () => {
    expect(() => calculateTotalCookingTime('invalid'))
      .to.throw('Invalid input');
  });

  // EDGE CASE: empty array
  it('should return 0 for an empty array', () => {
    const result = calculateTotalCookingTime([]);
    expect(result).to.equal(0);
  });

  // EDGE CASE: recipe times including zero
  it('should correctly calculate total when recipe times include zero', () => {
    const recipes = [
      { time: 0 },
      { time: 15 },
      { time: 0 }
    ];
    const result = calculateTotalCookingTime(recipes);
    expect(result).to.equal(15);
  });

});
