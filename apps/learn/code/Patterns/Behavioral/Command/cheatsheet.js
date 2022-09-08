export {};

const log = (mess) => {
  console.log(mess);
  return true;
};
const operation1 = (prev, value) => log("operation1 with: " + value);
const undooperation1 = (prev, value) => log("undooperation1 with: " + value);
const operation2 = (prev, value) => log("dooperation2 with: " + value);
const undooperation2 = (prev, value) => log("undooperation2 with: " + value);

class Command {
  execute;
  undo;
  value;
  constructor(exe, undo, value) {
    this.execute = exe;
    this.undo = undo;
    this.value = value;
  }
}

let commandOp1 = (value) => new Command(operation1, undooperation1, value);
let commandOp2 = (value) => new Command(operation2, undooperation2, value);

class Operator {
  constructor() {
    this.current = null;
    this.commands = [];
  }
  execute(command) {
    this.current = command.execute(this.current, command.value);
    this.commands.push(command);
  }
  undo() {
    let command = this.commands.pop();
    this.current = command.undo(this.current, command.value);
  }
  getCurrentValue() {
    return this.current;
  }
}

function run() {
  const op = new Operator();
  op.execute(commandOp1("a"));
  op.execute(commandOp2("b"));
  op.undo();
  op.undo();
}
run();
