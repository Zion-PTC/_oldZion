export class Singleton {
  static #instance;
  static get instance() {
    return Singleton.#instance;
  }
  constructor(obj) {
    if (!Singleton.#instance) Singleton.#instance = obj;
    return Object.freeze(Singleton.#instance);
  }
}

const a = new Singleton({ a: "ohhh" });
const b = new Singleton({ b: "ohh" });
console.log(Singleton.instance);
console.log(b);
a.a = 2;
console.log(a == b);
