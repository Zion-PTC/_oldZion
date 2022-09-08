export class Singleton {
  static #instance;
  getInstance(obj) {
    if (!Singleton.#instance) Singleton.#instance = this.#createInstance(obj);
    return Singleton.#instance;
  }
  #createInstance(obj) {
    Singleton.#instance = new Object(obj);
    return Singleton.#instance;
  }
}

const a = new Singleton().getInstance({ a: "ohh" });
const b = new Singleton().getInstance({ a: "booo" });
console.log(a);
console.log(b);
console.log(a == b);
