jest.dontMock('../js/play-rule');

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
  });
});
