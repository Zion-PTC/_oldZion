interface IInspectArguments {
    object: any;
    showHidden?: boolean;
    depth?: number;
    color?: boolean;
}
export interface IUtils {
    inspect(obj: IInspectArguments): string;
    checkArraysContent: <T>(array: T[], nextArray: T[]) => boolean;
    checkArrayElementsConstructor<T>(array: T[], constructor: Function): boolean;
    checkObjectConstructor(object: object, constructor: Function): boolean;
    hasArrayObjectElements(array: object[]): boolean | string;
    isArrayEmpty(array?: any[]): boolean;
    changePosition<T>(array: T[], old: number, new_pos: number): T[] | string;
    extractSameElementsFromArray<T extends string | boolean | number>(array1: T[], array2: T[]): T[];
    popFirst<T>(array: T[]): T[];
    removeSpaceFromString(type: number, string: string): string;
    sliceArray<T>(size: number, array: T): T[][] | string;
    chiamaNVolteCallback<T>(volte: number, callback: Function): T[];
    quantiDecimaliDopoLaVirgola(number: number): number;
    massimoComuneDivisore(a: number, b: number): number;
    modulo(a: number, b: number): number;
    convertDecimalToFracionString(decimale: number): string;
}
export declare let zionUtil: IUtils;
export {};
