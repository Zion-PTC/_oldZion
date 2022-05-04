class Accumulator {
  #current;
  constructor(start) {
    let current = start;
    return function (x) {
      if (x) return (current += x);
      return current;
    };
  }
}

const a = new Accumulator(5);
const b = new Accumulator(2);
let x = a(5);
console.log(x);
x = a(5);
console.log(x);
x = b(2);
console.log(x);
console.log(a());
