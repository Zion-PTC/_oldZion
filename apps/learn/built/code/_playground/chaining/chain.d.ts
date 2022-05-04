declare class Arithmetic {
    value: number;
    constructor();
    get val(): number;
    sum(...args: number[]): this;
    add(value: number): this;
    sub(value: number): this;
    average(...args: number[]): this;
}
declare let ar: Arithmetic;
