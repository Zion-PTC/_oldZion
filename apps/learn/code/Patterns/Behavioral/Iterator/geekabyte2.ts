interface Iterator<T> {
  next(value?: any): IteratorResult<T>;
  return?(value?: any): IteratorResult<T>;
  throw?(e?: any): IteratorResult<T>;
}

// within rangeIterator.ts
export class RangeIterator implements Iterator<number> {
  private _first: number;
  private _last: number;

  constructor(first: number, last: number) {
    this._first = first;
    this._last = last;
  }

  next(value?: any): IteratorResult<number> {
    if (this._first < this._last) {
      return new RangeYeald(this._first++);
    } else {
      return new RangeResult(undefined);
    }
  }
}
type ItYeald = IteratorYieldResult<number>;
type ItResult = IteratorReturnResult<number>;

// within rangeResult.ts
export class RangeResultBase {
  done: boolean = false;
  value: number;

  constructor(value: any) {
    this.value = value;
  }
}

export class RangeYeald extends RangeResultBase implements ItYeald {
  done: false = false;
  constructor(value: any) {
    super(value);
  }
}

export class RangeResult extends RangeResultBase implements ItResult {
  done: true = true;
  constructor(value: any) {
    super(value);
  }
}

export class MakeRange implements Iterable<number> {
  private _first: number;
  private _last: number;

  constructor(first: number, last: number) {
    this._first = first;
    this._last = last;
  }

  [Symbol.iterator](): Iterator<number> {
    return new RangeIterator(this._first, this._last);
  }
}
for (let item of new MakeRange(0, 10)) {
  console.log(item);
}
