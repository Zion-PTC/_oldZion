const STOPCOMMAND = "close";
const WELCOMEMESSAGE = "welcome";

interface DefaultConfig extends ITerminalConfig {
  welcomeMessage: "welcome";
  stopcommand: "close";
}
const defaultConfig: DefaultConfig = {
  welcomeMessage: WELCOMEMESSAGE,
  stopcommand: STOPCOMMAND,
};

export interface ITerminalConfig {
  welcomeMessage: string;
  stopcommand: string;
}
export interface TerminalConfig {
  getInstance(): ITerminalConfig;
  createInstance(config: ITerminalConfig): ITerminalConfig;
}
export class TerminalConfig implements TerminalConfig {
  static #config: ITerminalConfig;
  constructor(config: ITerminalConfig = defaultConfig) {
    let instance = TerminalConfig.#config;
    this.getInstance = function () {
      if (!instance && config) instance = this.createInstance(config);
      return instance;
    };
  }
  createInstance(config: ITerminalConfig): ITerminalConfig {
    TerminalConfig.#config = new Object(config) as ITerminalConfig;
    return TerminalConfig.#config;
  }
}
