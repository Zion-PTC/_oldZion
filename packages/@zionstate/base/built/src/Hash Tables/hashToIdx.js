export class HashTable {
    #map;
    table;
    get size() {
        return this.table.length;
    }
    constructor(size) {
        this.table = new Array(size);
        this.#map = new Map();
    }
    set(key, value) {
        let hashedkey = this.#hash(key);
        this.#map.set(hashedkey, this.#map.size - 1);
        this.table[this.#map.size - 1] = value;
    }
    #hash(key) {
        let hashedString;
        hashedString = key;
        return hashedString;
    }
}
