export declare const defaultConfig: ITerminalConfig;
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
export declare class TerminalConfig implements TerminalConfig {
    #private;
    constructor(config?: ITerminalConfig);
}
