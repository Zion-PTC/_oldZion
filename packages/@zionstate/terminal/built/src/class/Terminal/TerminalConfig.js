const STOPCOMMAND = "close";
const WELCOMEMESSAGE = "welcome";
const defaultConfig = {
    welcomeMessage: WELCOMEMESSAGE,
    stopcommand: STOPCOMMAND,
};
export class TerminalConfig {
    static #config;
    constructor(config = defaultConfig) {
        let instance = TerminalConfig.#config;
        this.getInstance = function () {
            if (!instance && config)
                instance = this.createInstance(config);
            return instance;
        };
    }
    createInstance(config) {
        TerminalConfig.#config = new Object(config);
        return TerminalConfig.#config;
    }
}
