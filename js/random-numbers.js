var _ = require('lodash');

function RandomNumbers() {

}

RandomNumbers.getRandomNumbers = function (randomLength) {
  var numbers = [];

  while (numbers.length < randomLength) {
    var randomNumber = _.random(0,9);

    if (!_.contains(numbers , randomNumber.toString())) {
      numbers.push(randomNumber.toString());
    }
  }

  return numbers;
};

module.exports = RandomNumbers;
