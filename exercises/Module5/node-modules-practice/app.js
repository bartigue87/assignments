function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

module.exports = {
  sum: sum,
  subtract: subtract,
  multiply: multiply,
  divide: divide
};

// also could do...
// module.exports.sum = funciton(a,b){
//     return a + b
// }
