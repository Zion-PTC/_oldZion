export declare class Estrazione<T> {
    #private;
    arrayOriginale: T[];
    elementoEstratto: T | unknown;
    elementiRimanenti: T[];
    elementiEstratti: T[];
    constructor(arrayOriginale?: T[]);
}
