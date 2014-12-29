jest.dontMock('../js/play-rule');
jest.dontMock('lodash');

describe('PlayRule', function() {
  var playRule;
  beforeEach(function() {
    var PlayRule = require('../js/play-rule');
    playRule = new PlayRule(4);
  });

  describe('.getPrompt()', function() {

    it('shuold return a 0A0B String', function() {

      var result = playRule.getPrompt([1, 2, 3, 4], [5, 6, 7, 8]);

      expect(result).toBe('0A0B');
    });

    it('shuold return a 1A1B String', function() {

      var result = playRule.getPrompt([1, 6, 4, 7], [4, 6, 9, 8]);

      expect(result).toBe('1A1B');
    });

    it('shuold return a 0A4B String', function() {

      var result = playRule.getPrompt([1, 3, 4, 7], [3, 1, 7, 4]);

      expect(result).toBe('0A4B');
    });

    it('shuold return a Congratulations!!! String', function() {

      var result = playRule.getPrompt([1, 3, 4, 7], [1, 3, 4, 7]);

      expect(result).toBe('Congratulations!!!');
    });

    it('shuold return a GameOver!!! String', function() {

      playRule.times = 1;
      var result = playRule.getPrompt([1, 3, 4, 7], [1, 3, 5, 7]);

      expect(result).toBe('GameOver!!!');
    });

    it('shuold return a Congratulations!!! String', function() {
      playRule.times = 1;
      var result = playRule.getPrompt([1, 3, 4, 7], [1, 3, 4, 7]);

      expect(result).toBe('Congratulations!!!');
    });
  });
});
