"use strict";
class Arithmetic {
    value;
    constructor() {
        //@ts-expect-error
        this.value = null;
    }
    get val() {
        return this.value;
    }
    sum(...args) {
        this.value = args.reduce((sum, current) => {
            return sum + current;
        });
        return this;
    }
    add(value) {
        this.value += value;
        return this;
    }
    sub(value) {
        this.value -= value;
        return this;
    }
    average(...args) {
        //@ts-expect-error
        this.value = args.length
            ? this.sum(...args).value / args.length
            : undefined;
        return this;
    }
}
let ar = new Arithmetic();
ar.sum(1, 1, 1).sum(ar.value, 10, 12).add(10).sub(24).sum(ar.value, 11);
console.log(ar.val);
