import { zionUtil } from "@zionstate_node/zion-util";
import readline from "node:readline";
import {
  ITerminalConfig,
  TerminalConfig,
} from "./class/Terminal/TerminalConfig.js";
import { stop } from "./lib/Terminal/stop.js";

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
  on(event: string, listener: (...args: any[]) => void): Promise<this>;
  on(event: "close", listener: () => void): Promise<this>;
  on(event: "line", listener: (input: string) => void): Promise<this>;
  on(event: "pause", listener: () => void): Promise<this>;
  on(event: "resume", listener: () => void): Promise<this>;
  on(event: "SIGCONT", listener: () => void): Promise<this>;
  on(event: "SIGINT", listener: () => void): Promise<this>;
  on(event: "SIGTSTP", listener: () => void): Promise<this>;
  on(event: string, listener: (...args: any[]) => void): void;
  prompt(): void;
  start(): Promise<this>;
}

const options: ReadlineOptions = {
  input: process.stdin,
  output: process.stdout,
  terminal: false,
};

export class Terminal {
  constructor() {
    this.interface = readline.createInterface(options);
    this.config = new TerminalConfig().getInstance();
    // console.log(this.config.welcomeMessage);
    // this.interface.on("line", stop.bind(this));
  }
  async on(event: string, listener: (...args: any[]) => void): Promise<this> {
    this.interface.on(event, listener);
    return this;
  }
  async start() {
    console.log(this.config.welcomeMessage);
    await this.on("line", stop.bind(this));
    return this;
  }
}
