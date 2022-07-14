export class HashTable {
  #map: Map<string, number>;
  table: any[];
  get size() {
    return this.table.length;
  }
  constructor(size: number) {
    this.table = new Array(size);
    this.#map = new Map();
  }
  set(key: string, value: any) {
    let hashedkey = this.#hash(key);
    this.#map.set(hashedkey, this.#map.size - 1);
    this.table[this.#map.size - 1] = value;
  }
  #hash(key: string) {
    let hashedString;
    hashedString = key;
    return hashedString;
  }
}
