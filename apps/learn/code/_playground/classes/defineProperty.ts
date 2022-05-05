class ABoo {
  static #aboos: ABoo[] = [];
  constructor() {
    ABoo.#aboos.push(this);
  }
}
console.log(ABoo.name);
Object.defineProperty(ABoo, 'name', { value: 'cinci' });
console.log(ABoo.name);
let ab = new ABoo();
console.log(ab.constructor);
export let obj = {};
class Ulla {}
Object.defineProperty(obj, 'constructor', { value: Ulla });
console.log(obj.constructor);
