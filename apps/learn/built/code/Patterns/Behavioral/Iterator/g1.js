export class Iterator {
    items;
    index;
    constructor(items, index = 0) {
        this.items = items;
        this.index = index;
    }
    next(...args) {
        return this.items[this.index++];
    }
    return(value) {
        return this.items[this.index];
    }
    throw(e) {
        console.log(e?.message);
    }
}
