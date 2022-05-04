// https://gist.github.com/Integralist/5736427

class Greeter {
  constructor(strategy) {
    this.strategy = strategy;
  }
  greet() {
    return this.strategy();
  }
}

const politeGreeterStrategy = function () {
  console.log('Hello');
};
const friendlyGreeterStrategy = function () {
  console.log('Hey!');
};
const boredGreeterStrategy = function () {
  console.log('sup.');
};

const politeGreeter = new Greeter(politeGreeterStrategy);
const friendlyGreeter = new Greeter(friendlyGreeterStrategy);
const boredGreeter = new Greeter(boredGreeterStrategy);

politeGreeter.greet();
friendlyGreeter.greet();
boredGreeter.greet();
