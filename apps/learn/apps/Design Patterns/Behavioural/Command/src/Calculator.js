export {};

const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;

class Command {
  constructor(execute, undo, value) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
  }
}

const aggCommand = (value) => new Command(add, sub, value);
const subCommand = (value) => new Command(sub, add, value);
const mulCommand = (value) => new Command(mul, div, value);
const divCommand = (value) => new Command(div, mul, value);
const upperCaseFirst = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export class Calculator {
  availableCommands = [aggCommand, subCommand, mulCommand, divCommand];
  current;
  commands = [];
  constructor() {
    this.current = 0;
    this.commands = new Array(50);
  }
  #action(command) {
    let name = command.execute.name.toString();
    return upperCaseFirst(name);
  }
  execute(command) {
    this.current = command.execute(this.current, command.value);
    this.commands.push(command);
    console.log(this.#action(command) + ": " + command.value);
  }
  undo() {
    let command = this.commands.pop();
    if (!this.current) return;
    if (!command) return;
    this.current = command.undo(this.current, command.value);
    console.log("Undo " + this.#action(command) + ": " + command.value);
  }
  getCurrentValue() {
    return this.current;
  }
}
