export declare class MakeRangeIterableIterator {
    private _first;
    private _last;
    constructor(first: number, last: number);
    [Symbol.iterator](): this;
    next(): {
        value: number;
        done: boolean;
    } | {
        value: undefined;
        done: boolean;
    };
}
