interface IButtonObj {
    text: string;
    callback_data: string;
}
export declare class ButtonObj implements IButtonObj {
    text: string;
    callback_data: string;
    constructor(text: string, callback_data: string);
}
export {};
