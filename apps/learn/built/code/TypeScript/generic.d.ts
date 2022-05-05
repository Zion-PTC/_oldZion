declare type arr = Array<string>;
declare const last: <T>(arr: T[]) => T;
declare const l: number;
declare const l2: string;
declare const makeArr: <T>(x: T) => T[];
declare const v: number[];
declare const v2: string[];
declare const makeDoubleArray: <X, Y>(x: X, y: Y) => (X | Y)[];
declare type Ciccio = number;
declare let c: Ciccio;
declare const v3: number[];
declare const v4: string[];
declare const v5: (string | number)[];
declare const v6a: (string | number)[];
declare const v6b: (string | number)[];
declare const v6c: (string | number)[];
declare const makeTuple: <X, Y>(x: X, y: Y) => [X, Y];
declare const v7: [number, number];
declare const v8: [string, string];
declare const v9: [number, string];
declare const v10: [number, string];
declare const makeTupleDefault: <X, Y = string>(x: X, y: Y) => (X | Y)[];
declare const v11: (string | number)[];
declare const makeFullName: (obj: {
    firstName: string;
    lastName: string;
}) => {
    fullName: string;
    firstName: string;
    lastName: string;
};
declare const v12: {
    fullName: string;
    firstName: string;
    lastName: string;
};
declare const makeFullName1: <T extends {
    firstName: string;
    lastName: string;
}>(obj: T) => T & {
    fullName: string;
};
declare const v13: {
    firstName: string;
    lastName: string;
    age: number;
} & {
    fullName: string;
};
interface Tab<T> {
    id: string;
    position: number;
    data: T;
}
declare type NumberTab = Tab<number>;
declare type StringTab = Tab<string>;
