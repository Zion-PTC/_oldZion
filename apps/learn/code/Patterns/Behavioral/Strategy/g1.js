// https://gist.github.com/Integralist/5736427

class Greeter {
  constructor(strategy) {
    this.greetMessage = 'ciao';
    this.strategy = strategy;
  }
  greet() {
    return this.strategy();
  }
}

const politeGreeterStrategy = function () {
  console.log(this.greetMessage);
  console.log('Hello');
};
const friendlyGreeterStrategy = function () {
  console.log(this.greetMessage);
  console.log('Hey!');
};
const boredGreeterStrategy = function () {
  console.log(this.greetMessage);
  console.log('sup.');
};

const politeGreeter = new Greeter(politeGreeterStrategy);
const friendlyGreeter = new Greeter(friendlyGreeterStrategy);
const boredGreeter = new Greeter(boredGreeterStrategy);

politeGreeter.greet();
friendlyGreeter.greet();
boredGreeter.greet();

// conclusioni:
// puo essere usato quando è necessario che un oggetto
// rispetti una determinata interfaccia, ad esempio come in
// questo caso implementando il metodo greet, il quale è
// diverso in base alla funzione strategy che gli si manda.
// In pratica viene create una classe lievemente diversa ma
// che rimane sempre una subclasse avendo sempre gli stessi
// metodi.
