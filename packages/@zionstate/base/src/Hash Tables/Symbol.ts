export abstract class HashTable {
  #hashMap: Map<Symbol, number>;
  table: any[] = [];
  constructor() {
    this.#hashMap = new Map();
    throw "not implemented";
  }
  set(key: string, value: any) {
    const symbolkey = Symbol(key);
    this.#hashMap.set(symbolkey, this.#hashMap.size - 1);
    this.table[this.#hashMap.size - 1] = value;
  }
}
