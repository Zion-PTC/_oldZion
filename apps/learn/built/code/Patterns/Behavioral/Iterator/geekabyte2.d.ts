interface Iterator<T> {
    next(value?: any): IteratorResult<T>;
    return?(value?: any): IteratorResult<T>;
    throw?(e?: any): IteratorResult<T>;
}
export declare class RangeIterator implements Iterator<number> {
    private _first;
    private _last;
    constructor(first: number, last: number);
    next(value?: any): IteratorResult<number>;
}
declare type ItYeald = IteratorYieldResult<number>;
declare type ItResult = IteratorReturnResult<number>;
export declare class RangeResultBase {
    done: boolean;
    value: number;
    constructor(value: any);
}
export declare class RangeYeald extends RangeResultBase implements ItYeald {
    done: false;
    constructor(value: any);
}
export declare class RangeResult extends RangeResultBase implements ItResult {
    done: true;
    constructor(value: any);
}
export declare class MakeRange implements Iterable<number> {
    private _first;
    private _last;
    constructor(first: number, last: number);
    [Symbol.iterator](): Iterator<number>;
}
export {};
