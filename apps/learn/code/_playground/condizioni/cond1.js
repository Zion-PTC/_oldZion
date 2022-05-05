class Condizionatore {
  constructor(property, value) {
    this.property = property;
    this.value = value;
  }
  condizione = (elemento) => {
    return elemento[this.property] === this.value;
  };
}

class Elemento {
  static #elements = [];
  static get elements() {
    return this.#elements;
  }
  constructor(name) {
    this.name = name;
    Elemento.#elements.push(this);
    this.id = Elemento.#elements.length;
  }
  static trovaNome() {
    return Elemento.#elements.find(condizione);
  }
  static trova(condizione) {
    return Elemento.#elements.find(condizione);
  }
}

const run = function () {
  const el1 = new Elemento('el1');
  const el2 = new Elemento('el2');
  const el3 = new Elemento('ciao');
  let nome = new Condizionatore('name', 'ciao');
  let condizione1 = nome.condizione;
  let id = new Condizionatore('id', 1);
  let condizione2 = id.condizione;
  const res1 = Elemento.trova(condizione1);
  const res2 = Elemento.trova(condizione2);
  console.log(res1);
  console.log(res2);
};
run();
