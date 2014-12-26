var _ = require('lodash');
function PlayRule(times){

  this.times = times;

}

PlayRule.prototype.getPrompt = function(answers, inputs) {
  var countA = 0;
  var countB = 0;
  this.times -= 1;
  for (var i = 0; i < inputs.length; i++) {
    if(inputs[i] === answers[i]) {
      countA += 1;
      continue;
    }
    if(_.contains(answers, inputs[i])){
      countB += 1;
    }
  }

  var prompt =  countA + 'A' + countB + 'B';
  if(this.times === 0) {
    prompt = 'GameOver!!!';
  }
  if(answers.toString() === inputs.toString()) {
    prompt = 'Congratulations!!!';
  }

  return prompt;
}

module.exports = PlayRule;
