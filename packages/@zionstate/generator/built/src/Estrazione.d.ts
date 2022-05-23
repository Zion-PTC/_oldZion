export interface IEstrazione<T> {
    arrayOriginale: T[];
    elementoEstratto?: T;
    elementiRimanenti: T[];
    elementiEstratti: T[];
}
export declare class Estrazione<T> implements IEstrazione<T> {
    #private;
    arrayOriginale: T[];
    elementoEstratto?: T;
    elementiRimanenti: T[];
    elementiEstratti: T[];
    constructor(arrayOriginale?: T[]);
}
