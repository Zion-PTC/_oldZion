import * as Constructors from "../Class/Constructors.js";

/**
 *
 */
export type MixinAny = (superclass: any) => new (...arg: any[]) => any;

/**
 *
 */
export type Mixin = (superclass: Constructors.Constructor, id: number) => new (...arg: any[]) => {};

/**
 *
 */
export type MixinType1 = <T extends {}>(superclass: Constructors.Constructor1<T>) => new () => {};

/**
 *
 */
export type ComplexMixin<X> = <TBase extends new (...args: any[]) => {}>(
  Base: TBase,
  id: number
) => {
  new (...arg: any[]): X;
} & TBase;

/**
 *
 */
export type ComplexMixin2<X> = <TBase>(
  Base: TBase extends Constructors.Constructor ? TBase : never,
  id: number
) => {
  new (...arg: any[]): X;
} & TBase;

/**
 *
 */
export type GenericMixin<MixinType> = <Ctor extends Object>(
  superclass: Constructors.GCtor<Ctor>,
  id: number
) => new (...arg: any[]) => new (...arg: any[]) => MixinType & Ctor;

/**
 *
 */
export type MixinType = (
  superclass: Constructors.Constructor,
  id: number
) => new (...arg: any[]) => {};

/**
 *
 */
export type MixinTypeNoArgs = <T extends new (...args: any[]) => {}>(superclass: T) => new () => {};
