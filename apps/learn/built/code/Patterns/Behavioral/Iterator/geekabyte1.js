export class MakeRange {
    _first;
    _last;
    constructor(first, last) {
        this._first = first;
        this._last = last;
    }
    [Symbol.iterator]() {
        return {
            next: () => {
                if (this._first < this._last) {
                    return { value: this._first++, done: false };
                }
                else {
                    return { value: undefined, done: true };
                }
            },
        };
    }
}
for (let item of new MakeRange(0, 10)) {
    console.log(item);
}
