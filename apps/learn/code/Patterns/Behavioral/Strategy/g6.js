class Funzionalità {
  constructor() {
    this.name = 'informazione';
    this.strategia = null;
    this.logger = console.log;
  }
  assegnaStrategia(metodo) {
    this.strategia = metodo;
    return this;
  }
  eseguiStrategia(e) {
    this.strategia(e);
    return this;
  }
  setLogger(metodo) {
    this.logger = metodo;
    return this;
  }
  show(key) {
    this.log(this[key]);
    return this;
  }
  log(e) {
    this.logger(e);
  }
}

class Metodo {
  constructor(method) {
    this.metodo = method;
    this.id = 'woo';
    return this.metodo;
  }
}

class Metodo2 {
  constructor(metodo) {
    this.id = 'myeye';
    this.metodo = metodo;
    this.logger = console.log;
  }
  method(e) {
    this.metodo(e);
    return this;
  }
  show(key) {
    this.log(this[key]);
    return this;
  }
  log(e) {
    this.logger(e);
    return this;
  }
}

const run = function () {
  const log = new Metodo((e) => console.log(e));
  const funzionalità = new Funzionalità();
  funzionalità.assegnaStrategia(log);
  funzionalità.eseguiStrategia('i'); // i
  const somma = (e) => {
    return console.log(e + 1);
  };
  const sommaFoo = new Metodo(somma);
  funzionalità
    .assegnaStrategia(somma)
    .eseguiStrategia(1) // 2
    .assegnaStrategia(log)
    .eseguiStrategia(sommaFoo.id); // undefined
  let log2 = new Metodo2(console.log).metodo;
  funzionalità
    .assegnaStrategia(log2)
    .eseguiStrategia('oo')
    .show('name');
};
run();
