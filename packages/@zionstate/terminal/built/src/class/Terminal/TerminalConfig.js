const STOPCOMMAND = "close";
const APPNAME = "App";
const WELCOMEMESSAGE = `Welcome to `;
export const defaultConfig = {
    appName: "The Coolest App",
    welcomeMessage: WELCOMEMESSAGE,
    stopcommand: STOPCOMMAND,
};
export class TerminalConfig {
    static #config;
    constructor(config) {
        let instance = TerminalConfig.#config;
        this.getInstance = function () {
            if (!instance && config) {
                instance = this.#createInstance(config);
            }
            return instance;
        };
    }
    #createInstance(config) {
        let newconfig = defaultConfig;
        TerminalConfig.#config = newconfig;
        return TerminalConfig.#config;
    }
}
