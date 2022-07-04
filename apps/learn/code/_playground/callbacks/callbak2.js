export class Calbacker {
  number;
  constructor(number) {
    this.number = number;
  }
  foo(callback, value) {
    this.number = this.number + callback(10, value);
    return this;
  }
}

function sum(number, value) {
  return number + value;
}

let o = new Calbacker(0);
o.foo(sum, 20).foo(sum, 30);

console.log(o.number);
