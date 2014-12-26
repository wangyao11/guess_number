jest.dontMock('../js/play-rule');
jest.dontMock('lodash');

describe('PlayRule', function() {
  var PlayRule;
  beforeEach(function() {
    PlayRule = require('../js/play-rule');
  });

  describe('.getPrompt()', function() {

    it('shuold return a 0A0B String', function() {

      var result = PlayRule.getPrompt([1, 2, 3, 4], [5, 6, 7, 8]);

      expect(result).toBe('0A0B');
    });

    it('shuold return a 2A2B String', function() {

      var result = PlayRule.getPrompt([1, 3, 4, 7], [1, 3, 7, 4]);

      expect(result).toBe('2A2B');
    });

    it('shuold return a 0A4B String', function() {

      var result = PlayRule.getPrompt([1, 3, 4, 7], [3, 1, 7, 4]);

      expect(result).toBe('0A4B');
    });
  });
});
