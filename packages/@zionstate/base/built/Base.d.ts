export interface IStaticPrimitive<T> {
    new (): T;
    id: any;
}
export interface IPrimitive {
    id: any;
}
/**
 * classe astratta utilizzata per migliorare la versione
 */
declare abstract class APrimitive {
    static id: any;
    id: any;
    constructor();
}
export declare class Primitive extends APrimitive {
}
export {};
