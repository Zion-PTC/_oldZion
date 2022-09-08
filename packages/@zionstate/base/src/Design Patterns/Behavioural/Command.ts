/**
 * The command interface representes the shape that each
 * command have to implement in order to be used by a receiver.
 * * manatins the informations about the action to be taken.
 */
export interface ICommand {
  /**
   * The function which executes a certain action.
   */
  execute(currentValue: any, value: any): void;
  /**
   * This function undoes the action performed by the command.
   */
  undo(currentValue: any, value: any): void;
  /**
   * The value with wich the action shall be taken
   */
  value: any;
}

/**
 * The receiver class in a command pattern is responsible for
 * * knowing how to carry out the operation associated
 *   with the command
 * * mantains a history of execute commands
 *   Basically it acts like a state machine. It stores the
 *   current value of the state and the value with which a
 *   certain command has been called.
 */
export class Receiver {
  /**
   * This value represents the current state of the value
   * which is being computed.
   */
  currentvalue: any;
  /**
   * This list represents the history of the commands taken
   * by the invoker.
   */
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

/**
 * The invoker is the actor which provides the commands to
 * the receiver. It could be the application
 */
export type Invoker = Function;

/**
 * The client represents the environment in which the
 * Receiver is introduced as a dependency. The invoker acts
 * within the scope of the client.
 */
export type Client = {
  receiver: Receiver;
};
