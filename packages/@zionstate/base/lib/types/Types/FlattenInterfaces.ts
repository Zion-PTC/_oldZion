import * as Constructors from "../Class/Constructors.js";
import * as Mixins from "../Mixin/Mixins.js";

/**
 * Example
 * ```
 * interface IdLabel {
 *   id: number ;
 *   bloo: boolean;
 * }
 *
 * type IdLabelType = FlattenInterface<IdLabel>;
 * ```
 * expected output:
 * ```
 * type IdLabelType = {
 *     id: number;
 *     bloo: boolean;
 * }
 * ```
 */
export type FlattenInterface<Type> = {
  [Property in keyof Type]: Type[Property];
};

export type InterfaceOfClass<T> = FlattenInterface<
  InstanceType<T extends Constructors.Constructor ? T : never>
>;

export type InterfaceOfMixin<T> = FlattenInterface<
  InstanceType<ReturnType<T extends Mixins.Mixin ? T : never>>
>;

export type InterfaceOfBoth<MixinType, Superclass> = InterfaceOfMixin<
  MixinType extends Mixins.Mixin ? MixinType : never
> &
  InterfaceOfClass<Superclass extends Constructors.Constructor ? Superclass : never>;

export type ConstrOfInterfaceOfBoth<MixinType, Superclass> = Constructors.GCtor<
  InterfaceOfBoth<
    MixinType extends Mixins.Mixin ? MixinType : never,
    Superclass extends Constructors.Constructor ? Superclass : never
  >
>;
