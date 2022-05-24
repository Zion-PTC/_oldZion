export interface IMetodoScelta {
    name?: string;
    metodoScelta?: Function;
    assegnaMetodoScelta(metodo: Function): IMetodoScelta;
    scegliElemento(): Function;
}
export declare class MetodoScelta implements IMetodoScelta {
    #private;
    name?: string | undefined;
    metodoScelta?: Function | undefined;
    static get metodiScelta(): MetodoScelta[];
    static scegliMetodo(type: 'Edition' | 'Element'): MetodoScelta | undefined;
    constructor(name?: string | undefined, metodoScelta?: Function | undefined);
    assegnaMetodoScelta(metodo: Function): this;
    scegliElemento(): any;
}
