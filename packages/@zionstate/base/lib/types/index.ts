import * as general from "./Types/General.js";
import * as Mixins from "./Mixin/Mixins.js";
import * as MixinDecorators from "./Mixin/MixinDecorators.js";
import * as Constructors from "./Class/Constructors.js";
import * as Interfaces from "./Interfaces/Interfaces.js";

export namespace array {
  export type Flatten<T> = general.Flatten<T>;
  export type IntersectionOfObjectInArray<T> = general.IntersectionOfObjectInArray<T>;
}

export namespace object {
  export type Getters<Type> = general.Getters<Type>;
}

export namespace flatteners {
  export type FlattenInterface<Type> = general.FlattenInterface<Type>;
  export type InterfaceOfMixin<T> = general.InterfaceOfMixin<T>;
  export type InterfaceOfClass<T> = general.InterfaceOfClass<T>;
  export type InterfaceOfBoth<MixinType, Superclass> = general.InterfaceOfBoth<
    MixinType,
    Superclass
  >;
  export type ConstrOfInterfaceOfBoth<MixinType, Superclass> = general.ConstrOfInterfaceOfBoth<
    MixinType,
    Superclass
  >;
}

export namespace mixins {
  export namespace decorators {
    export type MixinDecoratoBroad = MixinDecorators.MixinDecoratoBroad;
    export type MixinDecorator_Mixin = MixinDecorators.MixinDecorator_Mixin;
    export type MixinDecorator_Mixin_Mixin = MixinDecorators.MixinDecorator_Mixin_Mixin;
  }

  export type MixinAny = Mixins.MixinAny;
  export type Mixin = Mixins.Mixin;
  export type MixinType = Mixins.MixinType;
  export type MixinType1 = Mixins.MixinType1;
  export type ComplexMixin<MixinType> = Mixins.ComplexMixin<MixinType>;
  export type ComplexMixin2<MixinType> = Mixins.ComplexMixin2<MixinType>;
  export type GenericMixin<T> = Mixins.GenericMixin<T>;
  export type MixinTypeNoArgs = Mixins.MixinTypeNoArgs;
}

export namespace classes {
  export namespace constructors {
    export type Constructor1<T> = Constructors.Constructor1<T>;
    export type Constructor = Constructors.Constructor;
    export type GCtor<T> = Constructors.GCtor<T>;
    export type GCtor2<T> = Constructors.GCtor2<T>;
  }
}

export namespace interfaces {
  export type IHashTable = Interfaces.IHashTable;
}
