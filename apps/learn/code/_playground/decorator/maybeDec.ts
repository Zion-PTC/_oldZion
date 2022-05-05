export abstract class APrimitive {
  static #primitives: APrimitive[];
  id: string;
  ciao: string;
  static get primitives() {
    return APrimitive.#primitives;
  }
  constructor() {}
  abstract show(): APrimitive;
}

type Bla = APrimitive;
let g: APrimitive = {
  id: 'io',
  ciao: 'ciao',
  show: function () {
    console.log(this.id);
    return this;
  },
};

interface Gee extends APrimitive {
  foo(): Gee;
}

const addFoo = function <V>(obj: any): V {
  obj['foo'] = function () {
    console.log(this.ciao);
    return this;
  };
  // obj['robux'] = 1000;
  return obj;
};
console.log(g);
addFoo<Gee>(g);
g.show();
//@ts-expect-error
g.foo();

const j: Gee = {
  foo: function () {
    return this;
  },
  id: 'ciao',
  ciao: 'ok',
  show: function () {
    console.log(this.ciao);
    return this;
  },
};
j.show();

class Ooob {
  id: string;
  showId() {
    console.log(this.id);
    return this;
  }
}

let oob: Ooob = new Ooob();
oob.id = 'ciao';
oob.showId();

function ooobFoo() {
  console.log(this.id);
  return this;
}

let oob2: Ooob = {
  id: 'ola',
  showId: ooobFoo,
};

function makeObj(obj): Bla {
  obj = {
    ...obj,
    nome: 'culo',
    showNome: function () {
      console.log(this.nome);
    },
  };
  return obj;
}

let emtObj = makeObj({});

console.log(oob2);
console.log(emtObj);
