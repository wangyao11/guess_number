var _ = require('lodash');
var Input = require('./input');
var PlayRule = require('./play-rule');
var RandomNumbers = require('./random-numbers');

start();

function start() {
  var rl = Input.getInput();

  console.log('游戏开始！');
  console.log('_ _ _ _');
  playStart(6, 4, rl);
}

function playStart(times, countLength, rl) {
  var playRule = new PlayRule(times);
  var answers = RandomNumbers.getRandomNumbers(countLength);
  console.log('请猜这' + countLength + '个数：');

  rl.on('line', function(input) {

    var inputNumbers = _.toArray(input);
    var prompt = playRule.getPrompt(inputNumbers, answers);
    console.log(prompt);

    if (prompt === 'GameOver!!!') {
      console.log('正确答案：' + answers.toString());
      rl.close();
    } else if (prompt === 'Congratulations!!!'){
      rl.close();
    } else {
      console.log('请再猜' + countLength + '个数：' + '(您还有' + playRule.times + '次机会）');
    }
  });
}
