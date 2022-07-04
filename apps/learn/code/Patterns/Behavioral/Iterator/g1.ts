interface Iterable<T> {
  [Symbol.iterator](): Iterator<T>;
}

interface IteratorYieldResult<TYield> {
  done?: false;
  value: TYield;
}

interface IteratorReturnResult<TReturn> {
    done: true;
    value: TReturn;
}

type IteratorResult<T, TReturn = any> = IteratorYieldResult<T> | IteratorReturnResult<TReturn>;
/**
 * Iterator compliant to the TypeScript requirements.
 */
export class Iterator<T, TReturn = any, TNext = undefined> {
  constructor(public items: any[], public index = 0) {}
  next(...args: [] | [TNext]): IteratorResult<T, TReturn> {
    return this.items[this.index++];
  }
  return?(value?: TReturn): IteratorResult<T, TReturn> {
    return this.items[this.index];
  }
  throw?(e?: Error) {
    console.log(e?.message);
  }
}
