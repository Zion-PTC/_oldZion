/// <reference types="node" />
/// <reference types="node" />
import { InputQuestion } from "inquirer";
import { EventEmitter } from "node:events";
import readline from "node:readline";
import { ITerminalConfig, ITerminalOptions } from "./class/Terminal/TerminalConfig.js";
/**
 * Design Patterns
 * ```yaml
 * config: Singleton
 * Terminal:
 *  - Facade
 * ```
 */
declare type Interface = readline.Interface;
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
export declare class Terminal extends EventEmitter {
    constructor(config?: ITerminalOptions);
}
export {};
