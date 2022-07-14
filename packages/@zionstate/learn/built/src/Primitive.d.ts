export interface IStaticPrimitive<T> {
    new (): T;
    id: number;
}
export interface IPrimitive {
    id: number;
}
export declare function staticImplements<T>(): <U extends T>(constructor: U) => void;
export declare abstract class APrimitive {
    static id: any;
    id: any;
    constructor();
}
export declare class Primitive extends APrimitive {
}
