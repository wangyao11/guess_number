var readline = require('readline');

function Input() {

}

Input.getInput = function() {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return rl;
}

module.exports = Input;
