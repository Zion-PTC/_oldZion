export declare class MakeRange {
    private _first;
    private _last;
    constructor(first: number, last: number);
    [Symbol.iterator](): {
        next: () => {
            value: number;
            done: boolean;
        } | {
            value: undefined;
            done: boolean;
        };
    };
}
