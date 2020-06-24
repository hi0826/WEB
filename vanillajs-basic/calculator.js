const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  devide: function (a, b) {
    return a / b;
  },
  poweroff: function (a, b) {
    return a ** b;
  },
};

const sum = calculator.plus;
const minus = calculator.minus;
const mul = calculator.multiply;
const dev = calculator.devide;
const pow = calculator.poweroff;

console.log(sum(5, 5));
console.log(minus(5, 5));
console.log(mul(5, 5));
console.log(dev(5, 5));
console.log(pow(5, 5));
