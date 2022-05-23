declare function identity<T>(arg: T): T;
declare let myid1: <T>(arg: T) => T;
declare function iReturnAString<T>(a: T): T;
declare let res: string;
interface GenericIdentityFn {
    <Type>(arg: Type): Type;
}
declare let myIdentity: GenericIdentityFn;
interface GenericIdentityFn1<Type> {
    (arg: Type): Type;
}
declare let myIdentity1: GenericIdentityFn1<number>;
declare type fun = {
    <T>(a: T): T;
};
declare function concatNumbers<T, U>(a: T | U, b: T): string | number | undefined;
declare let concatRes: string | number | undefined;
declare type union = string | number;
declare let a: union;
declare function define(a: number): number;
declare function define(a: string): string;
declare let b: string;
declare let c1: number;
declare let d: number;
