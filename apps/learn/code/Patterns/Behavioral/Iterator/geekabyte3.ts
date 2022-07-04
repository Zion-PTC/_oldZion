// generator function
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
console.log(generator.next().value); // prints 1
console.log(generator.next().value); // prints 2
console.log(generator.next().value); // prints 3
console.log(generator.next().value); // prints undefined
console.log(generator.next().done); // prints true

class MakeRangeOld {
  private first: number;
  private last: number;
  constructor(first: number, last: number) {
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
console.log(genObj.next()); //  prints {value: 0, done: false }
console.log(genObj.next()); //  prints {value: 1, done: false }
console.log(genObj.next()); //  prints {value: 2, done: false }
console.log(genObj.next()); //  prints {value: undefined, done: true }

export class MakeRange {
  private _first: number;
  private _last: number;

  constructor(first: number, last: number) {
    this._first = first;
    this._last = last;
  }

  *[Symbol.iterator]() {
    while (this._first < this._last) {
      yield this._first++;
    }
  }
}

// the value returned from calling a generator functions,
// which technically is the GeneratorFunction object, can
// implement both the iterable and iterator interface

export function* genFn() {
  yield 1;
  yield 2;
}

// No error is thrown by TS, so it means that the getFn can
// be used as both, an Iterator or an Iterable

let asIterator: Iterator<number> = genFn();
let asIterable: Iterable<number> = genFn();
let asIterableIterator: IterableIterator<number> = genFn();
