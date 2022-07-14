declare class Utils {
    cii(): void;
    staticImplements<T>(): <U extends T>(constructor: U) => void;
}
export declare const utils: Utils;
export {};
