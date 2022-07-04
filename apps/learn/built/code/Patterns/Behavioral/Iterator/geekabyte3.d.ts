export declare class MakeRange {
    private _first;
    private _last;
    constructor(first: number, last: number);
    [Symbol.iterator](): Generator<number, void, unknown>;
}
export declare function genFn(): Generator<1 | 2, void, unknown>;
