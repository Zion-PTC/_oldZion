interface IMetodo {
    name: string;
    metodo: Function;
}
export declare class Metodo implements IMetodo {
    #private;
    name: string;
    metodo: Function;
    static get metodi(): Metodo[];
    static findMetodo(name: string): Function;
    constructor(name: string, metodo: Function);
}
export {};
