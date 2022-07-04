export class MakeRange {
  private _first: number;
  private _last: number;
  constructor(first: number, last: number) {
    this._first = first;
    this._last = last;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this._first < this._last) {
          return { value: this._first++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }
}

// making use of features not available in es5
for (let item of new MakeRange(0, 10)) {
  console.log(item);
}
