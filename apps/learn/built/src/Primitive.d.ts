export interface IStaticPrimitive<T> {
    new (): T;
    id: any;
}
export interface IPrimitive {
    id: any;
}
export declare function staticImplements<T>(): <U extends T>(constructor: U) => void;
export declare abstract class APrimitive {
    static id: any;
    id: any;
    constructor();
}
export declare class Primitive extends APrimitive {
}
