export {};
interface ICommand {
  execute(currentValue: any, value: any): void;
  undo(currentValue: any, value: any): void;
  value: any;
}

class Receiver {
  currentvalue: any;
  commands: ICommand[] = [];
  execute(command: ICommand): void {
    command.execute(this.currentvalue, command.value);
    this.commands.push(command);
  }
  undo(): void {
    let command = this.commands.pop();
    if (!command) return;
    this.currentvalue = command.undo(this.currentvalue, command.value);
  }
  getCurrentValue(): any {
    return this.currentvalue;
  }
}
