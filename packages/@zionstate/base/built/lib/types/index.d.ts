import * as general from "./Types/General.js";
import * as Mixins from "./Mixin/Mixins.js";
import * as MixinDecorators from "./Mixin/MixinDecorators.js";
import * as Constructors from "./Class/Constructors.js";
import * as Interfaces from "./Interfaces/Interfaces.js";
export declare namespace array {
    type Flatten<T> = general.Flatten<T>;
    type IntersectionOfObjectInArray<T> = general.IntersectionOfObjectInArray<T>;
}
export declare namespace object {
    type Getters<Type> = general.Getters<Type>;
}
export declare namespace flatteners {
    type FlattenInterface<Type> = general.FlattenInterface<Type>;
    type InterfaceOfMixin<T> = general.InterfaceOfMixin<T>;
    type InterfaceOfClass<T> = general.InterfaceOfClass<T>;
    type InterfaceOfBoth<MixinType, Superclass> = general.InterfaceOfBoth<MixinType, Superclass>;
    type ConstrOfInterfaceOfBoth<MixinType, Superclass> = general.ConstrOfInterfaceOfBoth<MixinType, Superclass>;
}
export declare namespace mixins {
    namespace decorators {
        type MixinDecoratoBroad = MixinDecorators.MixinDecoratoBroad;
        type MixinDecorator_Mixin = MixinDecorators.MixinDecorator_Mixin;
        type MixinDecorator_Mixin_Mixin = MixinDecorators.MixinDecorator_Mixin_Mixin;
    }
    type MixinAny = Mixins.MixinAny;
    type Mixin = Mixins.Mixin;
    type MixinType = Mixins.MixinType;
    type MixinType1 = Mixins.MixinType1;
    type ComplexMixin<MixinType> = Mixins.ComplexMixin<MixinType>;
    type ComplexMixin2<MixinType> = Mixins.ComplexMixin2<MixinType>;
    type GenericMixin<T> = Mixins.GenericMixin<T>;
    type MixinTypeNoArgs = Mixins.MixinTypeNoArgs;
}
export declare namespace classes {
    namespace constructors {
        type Constructor1<T> = Constructors.Constructor1<T>;
        type Constructor = Constructors.Constructor;
        type GCtor<T> = Constructors.GCtor<T>;
        type GCtor2<T> = Constructors.GCtor2<T>;
    }
}
export declare namespace interfaces {
    type IHashTable = Interfaces.IHashTable;
}
