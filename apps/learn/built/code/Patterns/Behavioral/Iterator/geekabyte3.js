function* countToThree2() {
    let result = 0;
    result = result + 1;
    yield result;
    result = result + 1;
    yield result;
    result = result + 1;
    yield result;
}
let generator = countToThree2();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().done);
class MakeRangeOld {
    first;
    last;
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    *range() {
        while (this.first < this.last) {
            yield this.first;
            this.first++;
        }
    }
}
let genObj = new MakeRangeOld(0, 3).range();
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
export class MakeRange {
    _first;
    _last;
    constructor(first, last) {
        this._first = first;
        this._last = last;
    }
    *[Symbol.iterator]() {
        while (this._first < this._last) {
            yield this._first++;
        }
    }
}
export function* genFn() {
    yield 1;
    yield 2;
}
let asIterator = genFn();
let asIterable = genFn();
let asIterableIterator = genFn();
