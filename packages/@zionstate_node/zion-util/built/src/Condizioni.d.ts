declare type StandardValues = string | number | boolean;
export declare function emptyString(el: string): boolean;
export declare class Condizioni {
    constructor();
    oggettoUgualeCostruttore(object: object, constructor: Function): boolean;
    proprietàName<T>(elemento: T extends {
        name: string;
    } ? T : never, name: string): boolean;
}
export declare class Condizionatore {
    #private;
    get property(): string | undefined;
    set property(property: string | undefined);
    get value(): StandardValues;
    set value(value: StandardValues);
    get servedArray(): never[];
    set servedArray(servedArray: never[]);
    id: number;
    constructor(value: string | number | boolean, property?: string);
    condizione: (oggetto: {
        [key: string]: string;
    }) => boolean;
    condizioneForEach: (oggetto: {
        [key: string]: string;
    }) => this;
}
export {};
