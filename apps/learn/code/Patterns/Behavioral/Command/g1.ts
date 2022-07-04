const agg = (x: number, y: number): number => x + y;
const sot = (x: number, y: number): number => x - y;
const mol = (x: number, y: number): number => x * y;
const div = (x: number, y: number): number => x / y;

class Command {
  constructor(
    public execute: Function,
    public undo: Function,
    public value: number
  ) {}
}

let AggCommand = (value: number) => new Command(agg, sot, value);
let SotCommand = (value: number) => new Command(sot, agg, value);
let MolCommand = (value: number) => new Command(sot, agg, value);
let DivCommand = (value: number) => new Command(sot, agg, value);

class Calculator {
  current;
  commands: Command[];
  constructor() {
    this.current = 0;
    this.commands = new Array(50);
  }
  #action(command: Command) {
    let name = command.execute.toString().substr(9, 3);
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  execute(command: Command) {
    this.current = command.execute(this.current, command.value);
    this.commands.push(command);
    console.log(this.#action(command) + ": " + command.value);
  }
  undo() {
    let command = this.commands.pop();
    if (!this.current) return;
    if (!command) return;
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
