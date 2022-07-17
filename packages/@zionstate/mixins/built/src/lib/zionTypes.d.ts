/**
 * Questo type dovrebbe poter dare la possibilità di creare
 * una classe usando un Type generico e definendone i
 * dettagli al momento della dichiarazione
 * Usage:
 * ```ts
 * const Blooo: ClassType<{ a: string, b:string, c:number },string|number> = class New {
 *  a: string = "";
 *  b: string = '';
 *  c: number = 0
 *  constructor(a: string,c:number) {
 *    this.a = a;
 *    this.c = c
 *  }
 * };
 * ```
 */
export declare type ClassType<X, T = number> = new (...args: (T extends ConstructorParameters<infer Params> ? Params extends string | number ? Params : never : T)[]) => X extends infer Type ? Type : never;
/**
 * Type presentato sul sito TSLang, serve per appiattire i
 * tipi contenuti in un array.
 */
export declare type Flatten<T> = T extends any[] ? T[number] : T;
/**
 * Costruttore di classe generico
 */
export declare type Constructor1<T> = new () => T;
export declare type Constructor = new (...args: any[]) => {};
export declare type GCtor<T> = new (...args: any[]) => T;
export declare type GCtor2 = new <T>(...args: any[]) => T;
export declare type MixinAny = (superclass: any) => new (...arg: any[]) => any;
/**
 * Tipo per mixin
 */
export declare type MixinType1 = <T extends {}>(superclass: Constructor1<T>) => new () => {};
export declare type Mixin = (superclass: Constructor, id: number) => new (...arg: any[]) => {};
export declare type ComplexMixin<X> = <TBase extends Constructor>(Base: TBase, id: number) => {
    new (...arg: any[]): X;
} & TBase;
export declare type GenericMixin<MixinType> = <Ctor extends Object>(superclass: GCtor<Ctor>, id: number) => new (...arg: any[]) => new (...arg: any[]) => MixinType & Ctor;
export declare type MixinType = (superclass: Constructor, id: number) => new (...arg: any[]) => {};
/**
 *
 * example
```
interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;
```
 * expected output:
```
type LazyPerson = {
    getName: () => string;
    getAge: () => number;
    getLocation: () => string;
}
```
 */
export declare type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property];
};
/**
 * Example
```
interface IdLabel {
  id: number ;
  bloo: boolean;
}

type IdLabelType = FlattenInterface<IdLabel>;
```
expected output:
```
type IdLabelType = {
    id: number;
    bloo: boolean;
}
```
 */
export declare type FlattenInterface<Type> = {
    [Property in keyof Type]: Type[Property];
};
export declare type InterfaceOfClass<T> = FlattenInterface<InstanceType<T extends Constructor ? T : never>>;
export declare type InterfaceOfMixin<T> = FlattenInterface<InstanceType<ReturnType<T extends Mixin ? T : never>>>;
export declare type InterfaceOfBoth<MixinType, Superclass> = InterfaceOfMixin<MixinType extends Mixin ? MixinType : never> & InterfaceOfClass<Superclass extends Constructor ? Superclass : never>;
export declare type ConstrOfInterfaceOfBoth<MixinType extends Mixin, Superclass extends Constructor> = GCtor<InterfaceOfBoth<MixinType, Superclass>>;
/**
 * Usage
 * ```
 * const arr2 = [{ a: 0 }, { b: true }, { c: { d: 0 } }]
 *
 * type InterOfArr = IntersctionOfObjectInArray<typeof arr2>
 * ```
 * expexcted output:
 * ```
 * type InterOfArr = {
 *     a?: number | undefined;
 *     b?: boolean | undefined;
 *     c?: {
 *         d: number;
 *     } | undefined;
 * }
 * ```
 */
export declare type IntersectionOfObjectInArray<T> = T extends Array<any> ? T extends Object ? {
    [Prop in keyof T[number]]: T[number][Prop];
} : never : never;
