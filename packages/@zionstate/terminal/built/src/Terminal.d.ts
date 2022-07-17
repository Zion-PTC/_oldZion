/// <reference types="node" />
import readline from "node:readline";
import { ITerminalConfig } from "./class/Terminal/TerminalConfig.js";
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
export declare class Terminal {
    constructor();
}
export {};
