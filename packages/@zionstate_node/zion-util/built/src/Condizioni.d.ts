export declare class Condizioni {
    constructor();
    oggettoUgualeCostruttore(object: any, constructor: any): boolean;
    proprietàNome(elemento: any, name: any): boolean;
}
export declare class Condizionatore {
    #private;
    get property(): any;
    set property(property: any);
    get value(): any;
    set value(value: any);
    get result(): any;
    set result(result: any);
    get servedArray(): any[];
    set servedArray(servedArray: any[]);
    id: any;
    constructor(property: any, value: any);
    condizione: (oggetto: any) => boolean;
    condizioneForEach: (oggetto: any) => this;
}
