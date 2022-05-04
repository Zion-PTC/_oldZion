// what is there in the proto of a class?
class What {
  constructor() {
    this.ciao = 1;
    this.droga = function () {
      return console.log('droga');
    };
  }
  putta() {
    return console.log('putta');
  }
}
let putin = new What();
putin.droga(); // droga
putin.putta(); // putta

console.log(What.prototype); // {}

What.prototype.go = function () {
  return console.log('belfiore');
};

What.prototype.arrow = () => {
  return console.log(What.prototype);
};

putin.go(); // belfiore

console.log(What.prototype); // { go: [Function (anonymous)], arrow: [Function (anonymous)] }
console.log(What); // [class What]
