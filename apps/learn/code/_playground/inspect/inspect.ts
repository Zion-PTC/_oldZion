//@ts-expect-error
import util from 'util';
const a = { a: 1, b: 2, c: 3, d: 4 };
class B {
  static coo = 'coo';
  #id;
  constructor(id) {
    this.#id = id;
  }
  get ciao() {
    return 'blu';
  }
  set ciao(ciao) {
    this.ciao = ciao;
  }
  mostra() {
    console.log(this.#id);
  }
}
const b = new B('10');
delete B.coo;

const inspected = util.inspect(Object.getPrototypeOf(B), {
  showHidden: true,
  depth: null,
  compact: false,
  sorted: true,
  getters: true,
});
b.mostra();
console.log(Object.getOwnPropertyNames(B));
