import inquirer from "inquirer";
import { EventEmitter } from "node:events";
import readline from "node:readline";
import { defaultConfig, TerminalConfig, } from "./class/Terminal/TerminalConfig.js";
import { stop } from "./lib/Terminal/stop.js";
import { Styler } from "./Styler.js";
const styler = new Styler();
const styleMaker = styler.styler;
const welcomestyle = styleMaker("bold", "black", "bgMagenta");
const { magenta } = styler.basicColors;
const options = {
    input: process.stdin,
    output: process.stdout,
    terminal: false,
};
export class Terminal extends EventEmitter {
    constructor(config) {
        super();
        let newconfig = defaultConfig;
        if (config) {
            if (config.appName)
                newconfig.appName = config.appName;
            if (config.stopcommand)
                newconfig.stopcommand = config.stopcommand;
            if (config.welcomeMessage)
                newconfig.welcomeMessage = config.welcomeMessage;
        }
        this.interface = readline.createInterface(options);
        this.config = new TerminalConfig(newconfig).getInstance();
        // console.log(this.config.welcomeMessage);
        // this.interface.on("line", stop.bind(this));
    }
    async asyncOn(event, listener) {
        this.interface.on(event, listener);
        return this;
    }
    async start() {
        console.log(welcomestyle(this.config.welcomeMessage + this.config.appName + "!!"));
        await this.asyncOn("line", stop.bind(this));
        return this;
    }
    async prompt(prompt) {
        await inquirer
            .prompt(prompt)
            .catch((err) => {
            // throw new Error("error", { cause: err });
            throw err.message;
        })
            .then((value) => value);
    }
}
