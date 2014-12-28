var _ = require('lodash');

function RandomNumbers(randomLength) {
  this.randomLength = randomLength;
}

RandomNumbers.prototype.getRandomNumbers = function () {
  var numbers = [];

  while (numbers.length < this.randomLength) {
    var randomNumber = _.random(0,9);

    if (!_.contains(numbers , randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return numbers;
};

module.exports = RandomNumbers;
