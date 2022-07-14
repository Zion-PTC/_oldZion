import readline from "node:readline";
import { TerminalConfig, } from "./class/Terminal/TerminalConfig.js";
import { stop } from "./lib/Terminal/stop.js";
const options = {
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
    async on(event, listener) {
        this.interface.on(event, listener);
        return this;
    }
    async start() {
        console.log(this.config.welcomeMessage);
        await this.on("line", stop.bind(this));
        return this;
    }
}
