const STOPCOMMAND = "close";
const APPNAME = "App";
const WELCOMEMESSAGE = `Welcome to `;

export const defaultConfig: ITerminalConfig = {
  appName: "The Coolest App",
  welcomeMessage: WELCOMEMESSAGE,
  stopcommand: STOPCOMMAND,
};
export interface ITerminalConfig {
  appName: string;
  welcomeMessage: string;
  stopcommand: string;
}
export interface ITerminalOptions {
  appName?: string;
  welcomeMessage?: string;
  stopcommand?: string;
}
export interface TerminalConfig {
  getInstance(): ITerminalConfig;
}
export class TerminalConfig implements TerminalConfig {
  static #config: ITerminalConfig;
  constructor(config?: ITerminalConfig) {
    let instance = TerminalConfig.#config;
    this.getInstance = function () {
      if (!instance && config) {
        instance = this.#createInstance(config);
      }
      return instance;
    };
  }
  #createInstance(config: ITerminalConfig): ITerminalConfig {
    let newconfig = defaultConfig;
    TerminalConfig.#config = newconfig;
    return TerminalConfig.#config;
  }
}
