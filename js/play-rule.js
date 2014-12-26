var _ = require('lodash');
function PlayRule(){

}

PlayRule.getPrompt = function(answers, inputs) {
  var countA = 0;
  var countB = 0;

  for (var i = 0; i < inputs.length; i++) {
    if(inputs[i] === answers[i]) {
      countA += 1;
      continue;
    }
    if(_.contains(answers, inputs[i])){
      countB += 1;
    }
  }
  return countA + 'A' + countB + 'B';
}

module.exports = PlayRule;