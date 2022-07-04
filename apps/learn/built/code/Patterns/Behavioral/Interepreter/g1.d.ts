declare class Context {
    input: string;
    output: number;
    constructor(input: string, output?: number);
    startsWith(str: string): boolean;
}
declare class Expression {
    name: string;
    one: string;
    four: string;
    five: string;
    nine: string;
    multiplier: number;
    constructor(name: string, one: string, four: string, five: string, nine: string, multiplier: number);
    interpreter(context: Context): void;
}
declare let ctx: Context;
declare let tree: any[];
