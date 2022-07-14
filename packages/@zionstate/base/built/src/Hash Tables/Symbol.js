export class HashTable {
    #hashMap;
    table = [];
    constructor() {
        this.#hashMap = new Map();
        throw "not implemented";
    }
    set(key, value) {
        const symbolkey = Symbol(key);
        this.#hashMap.set(symbolkey, this.#hashMap.size - 1);
        this.table[this.#hashMap.size - 1] = value;
    }
}
