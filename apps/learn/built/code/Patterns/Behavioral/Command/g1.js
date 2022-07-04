"use strict";
const agg = (x, y) => x + y;
const sot = (x, y) => x - y;
const mol = (x, y) => x * y;
const div = (x, y) => x / y;
class Command {
    execute;
    undo;
    value;
    constructor(execute, undo, value) {
        this.execute = execute;
        this.undo = undo;
        this.value = value;
    }
}
let AggCommand = (value) => new Command(agg, sot, value);
let SotCommand = (value) => new Command(sot, agg, value);
let MolCommand = (value) => new Command(sot, agg, value);
let DivCommand = (value) => new Command(sot, agg, value);
class Calculator {
    current;
    commands;
    constructor() {
        this.current = 0;
        this.commands = new Array(50);
    }
    #action(command) {
        let name = command.execute.toString().substr(9, 3);
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
    execute(command) {
        this.current = command.execute(this.current, command.value);
        this.commands.push(command);
        console.log(this.#action(command) + ": " + command.value);
    }
    undo() {
        let command = this.commands.pop();
        if (!this.current)
            return;
        if (!command)
            return;
        this.current = command?.undo(this.current, command.value);
        console.log("Undo " + this.#action(command) + ": " + command?.value);
    }
    getCurrentValue() {
        return this.current;
    }
}
function run() {
    let calculator = new Calculator();
    calculator.execute(AggCommand(100));
    calculator.execute(AggCommand(24));
    calculator.execute(AggCommand(6));
    calculator.execute(AggCommand(2));
    calculator.undo();
    calculator.undo();
    console.log("\nValue: " + calculator.getCurrentValue());
}
