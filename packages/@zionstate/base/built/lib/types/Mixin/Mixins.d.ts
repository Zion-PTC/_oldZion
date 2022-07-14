import * as Constructors from "../Class/Constructors.js";
/**
 *
 */
export declare type MixinAny = (superclass: any) => new (...arg: any[]) => any;
/**
 *
 */
export declare type Mixin = (superclass: Constructors.Constructor, id: number) => new (...arg: any[]) => {};
/**
 *
 */
export declare type MixinType1 = <T extends {}>(superclass: Constructors.Constructor1<T>) => new () => {};
/**
 *
 */
export declare type ComplexMixin<X> = <TBase extends new (...args: any[]) => {}>(Base: TBase, id: number) => {
    new (...arg: any[]): X;
} & TBase;
/**
 *
 */
export declare type ComplexMixin2<X> = <TBase>(Base: TBase extends Constructors.Constructor ? TBase : never, id: number) => {
    new (...arg: any[]): X;
} & TBase;
/**
 *
 */
export declare type GenericMixin<MixinType> = <Ctor extends Object>(superclass: Constructors.GCtor<Ctor>, id: number) => new (...arg: any[]) => new (...arg: any[]) => MixinType & Ctor;
/**
 *
 */
export declare type MixinType = (superclass: Constructors.Constructor, id: number) => new (...arg: any[]) => {};
/**
 *
 */
export declare type MixinTypeNoArgs = <T extends new (...args: any[]) => {}>(superclass: T) => new () => {};
