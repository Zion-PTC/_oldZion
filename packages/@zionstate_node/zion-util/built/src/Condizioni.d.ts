declare type StandardValues = string | number | boolean;
export declare class Condizioni {
    constructor();
    oggettoUgualeCostruttore(object: object, constructor: Function): boolean;
    proprietàNome(elemento: {
        name: string;
    }, name: string): boolean;
}
export declare class Condizionatore {
    #private;
    get property(): string;
    set property(property: string);
    get value(): StandardValues;
    set value(value: StandardValues);
    get servedArray(): never[];
    set servedArray(servedArray: never[]);
    id: number;
    constructor(property: string, value: string | number | boolean);
    condizione: (oggetto: {
        [key: string]: string;
    }) => boolean;
    condizioneForEach: (oggetto: {
        [key: string]: string;
    }) => this;
}
export {};
