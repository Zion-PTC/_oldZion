class CreaPicker {
  constructor() {
    this.strategia = null;
  }
  assegnaMetodo(metodo) {
    this.strategia = metodo;
  }
  creaPicker() {
    return this.strategia.creaPicker();
  }
}
class Strategia {
  static #strategie = [];
  constructor(name, metodo) {
    this.name = name;
    this.strategia = metodo;
    Strategia.#strategie.push(this);
    this.id = Strategia.#strategie.length;
  }
  creaPicker() {
    return this.strategia();
  }
  static trovaStrategia(name) {
    const condizione = function (strategia) {
      return strategia.name === name;
    };
    return Strategia.#strategie.find(condizione);
  }
}

const run = function () {
  const log = console.log;
  let creaPicker = new CreaPicker();
  const metodo1 = () => {
    log('metodo1');
  };
  const metodo2 = () => {
    log('metodo2');
  };
  const strategia1 = new Strategia('strategia1', metodo1);
  const strategia2 = new Strategia('strategia2', metodo2);
  creaPicker.assegnaMetodo(strategia1);
  creaPicker.creaPicker();
  creaPicker.assegnaMetodo(strategia2);
  creaPicker.creaPicker();
  const res = Strategia.trovaStrategia('strategia1');
  console.log(res);
};
run();
