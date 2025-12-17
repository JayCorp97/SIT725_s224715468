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

});
