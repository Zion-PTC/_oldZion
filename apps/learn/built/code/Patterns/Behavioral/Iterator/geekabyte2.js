export class RangeIterator {
    _first;
    _last;
    constructor(first, last) {
        this._first = first;
        this._last = last;
    }
    next(value) {
        if (this._first < this._last) {
            return new RangeYeald(this._first++);
        }
        else {
            return new RangeResult(undefined);
        }
    }
}
export class RangeResultBase {
    done = false;
    value;
    constructor(value) {
        this.value = value;
    }
}
export class RangeYeald extends RangeResultBase {
    done = false;
    constructor(value) {
        super(value);
    }
}
export class RangeResult extends RangeResultBase {
    done = true;
    constructor(value) {
        super(value);
    }
}
export class MakeRange {
    _first;
    _last;
    constructor(first, last) {
        this._first = first;
        this._last = last;
    }
    [Symbol.iterator]() {
        return new RangeIterator(this._first, this._last);
    }
}
for (let item of new MakeRange(0, 10)) {
    console.log(item);
}
