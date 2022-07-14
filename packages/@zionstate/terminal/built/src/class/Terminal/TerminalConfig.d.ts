export interface ITerminalConfig {
    welcomeMessage: string;
    stopcommand: string;
}
export interface TerminalConfig {
    getInstance(): ITerminalConfig;
    createInstance(config: ITerminalConfig): ITerminalConfig;
}
export declare class TerminalConfig implements TerminalConfig {
    #private;
    constructor(config?: ITerminalConfig);
}
