/// <reference types="node" />
import * as readline from 'node:readline';
interface ITerminal {
    name: string;
    answer: string;
    interface: readline.Interface;
    line: string;
    makeQuestion(question: string): Promise<this>;
    makeQuestions(questions: string[]): Promise<this>;
    sendMessage(data: string | Buffer, key?: readline.Key): this;
    listenForAnswer(): Promise<this>;
    close(): this;
}
export declare class Terminal implements ITerminal {
    name: string;
    answer: string;
    interface: readline.Interface;
    line: string;
    constructor(name: string, line: string);
    makeQuestion(question: string): Promise<this>;
    listenForAnswer(): Promise<this>;
    sendMessage(data: string | Buffer, key?: readline.Key): this;
    close(): this;
}
export {};
