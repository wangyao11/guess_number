jest.dontMock('../js/random-numbers');
jest.dontMock('lodash');

describe('RandomNumber', function() {

  describe('#getRandomNumbers()', function() {
    it('shuold return array contain four number and number not repeat ', function() {
      var _ = require('lodash');
      var RandomNumbers = require('../js/random-numbers');
      var expectArray = RandomNumbers.getRandomNumbers(4);
      var array = _.uniq(expectArray);

      expect(expectArray.length).toBe(4);
      expect(array).toEqual(expectArray);
    });
  });
});
