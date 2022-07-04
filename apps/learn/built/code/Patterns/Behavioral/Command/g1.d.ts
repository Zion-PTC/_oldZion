declare const agg: (x: number, y: number) => number;
declare const sot: (x: number, y: number) => number;
declare const mol: (x: number, y: number) => number;
declare const div: (x: number, y: number) => number;
declare class Command {
    execute: Function;
    undo: Function;
    value: number;
    constructor(execute: Function, undo: Function, value: number);
}
declare let AggCommand: (value: number) => Command;
declare let SotCommand: (value: number) => Command;
declare let MolCommand: (value: number) => Command;
declare let DivCommand: (value: number) => Command;
declare class Calculator {
    #private;
    current: number;
    commands: Command[];
    constructor();
    execute(command: Command): void;
    undo(): void;
    getCurrentValue(): number;
}
