import { zionUtil } from "@zionstate_node/zion-util";
import inquirer, { InputQuestion } from "inquirer";
import { EventEmitter } from "node:events";
import readline from "node:readline";
import {
  defaultConfig,
  ITerminalConfig,
  ITerminalOptions,
  TerminalConfig,
} from "./class/Terminal/TerminalConfig.js";
import { stop } from "./lib/Terminal/stop.js";
import { Styler } from "./Styler.js";

const styler = new Styler();
const styleMaker = styler.styler;
const welcomestyle = styleMaker("bold", "black", "bgMagenta");
const { magenta } = styler.basicColors;

/**
 * Design Patterns
 * ```yaml
 * config: Singleton
 * Terminal:
 *  - Facade
 * ```
 */

type Interface = readline.Interface;
type ReadlineOptions = readline.ReadLineOptions;

export interface Terminal {
  interface: Interface;
  config: ITerminalConfig;
  asyncOn(event: string, listener: (...args: any[]) => void): Promise<this>;
  asyncOn(event: "close", listener: () => void): Promise<this>;
  asyncOn(event: "line", listener: (input: string) => void): Promise<this>;
  asyncOn(event: "pause", listener: () => void): Promise<this>;
  asyncOn(event: "resume", listener: () => void): Promise<this>;
  asyncOn(event: "SIGCONT", listener: () => void): Promise<this>;
  asyncOn(event: "SIGINT", listener: () => void): Promise<this>;
  asyncOn(event: "SIGTSTP", listener: () => void): Promise<this>;
  asyncOn(event: string, listener: (...args: any[]) => void): void;
  start(): Promise<this>;
  prompt(prompt: InputQuestion): Promise<void>;
}

const options: ReadlineOptions = {
  input: process.stdin,
  output: process.stdout,
  terminal: false,
};

export class Terminal extends EventEmitter {
  constructor(config?: ITerminalOptions) {
    super();
    let newconfig: ITerminalConfig = defaultConfig;
    if (config) {
      if (config.appName) newconfig.appName = config.appName;
      if (config.stopcommand) newconfig.stopcommand = config.stopcommand;
      if (config.welcomeMessage)
        newconfig.welcomeMessage = config.welcomeMessage;
    }
    this.interface = readline.createInterface(options);
    this.config = new TerminalConfig(newconfig).getInstance();
    // console.log(this.config.welcomeMessage);
    // this.interface.on("line", stop.bind(this));
  }
  async asyncOn(
    event: string,
    listener: (...args: any[]) => void
  ): Promise<this> {
    this.interface.on(event, listener);
    return this;
  }
  async start() {
    console.log(
      welcomestyle(this.config.welcomeMessage + this.config.appName + "!!")
    );
    await this.asyncOn("line", stop.bind(this));
    return this;
  }
  async prompt(prompt: InputQuestion) {
    await inquirer
      .prompt(prompt)
      .catch((err) => {
        // throw new Error("error", { cause: err });
        throw err.message;
      })
      .then((value) => value);
  }
}
