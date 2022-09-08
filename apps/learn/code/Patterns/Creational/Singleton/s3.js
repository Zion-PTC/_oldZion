export class Singleton {
  static #instance;
  constructor() {
    this.getInstance = function (object) {
      if (!Singleton.#instance)
        Singleton.instance = this.#createInstance(object);
      return Singleton.instance;
    };
  }
  #createInstance(object) {
    Singleton.#instance = new Object(object);
    return Singleton.#instance;
  }
}

const obj1 = { a: "ciao" };
const obj2 = { b: "ciao" };

function run() {
  const a = new Singleton().getInstance(obj1);
  const b = new Singleton().getInstance(obj2);
  console.log(a);
  console.log(b);
  console.log(a == b);
}

run();
