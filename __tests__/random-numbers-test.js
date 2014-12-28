jest.dontMock('../js/random-numbers');
jest.dontMock('lodash');

describe('RandomNumber', function() {

  describe('#getRandomNumbers()', function() {
    it('shuold return array contain four number and number not repeat ', function() {
      var _ = require('lodash');
      var RandomNumbers = require('../js/random-numbers');
      var randomNumbers = new RandomNumbers(4);
      var expectArray = randomNumbers.getRandomNumbers();
      var array = _.uniq(expectArray);

      expect(expectArray.length).toBe(4);
      expect(array).toEqual(expectArray);
    });
  });
});
