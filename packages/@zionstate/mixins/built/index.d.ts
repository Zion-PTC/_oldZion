import { Constructor as C, GConstructor as GC, Mixin } from "./src/TSMixin.js";
import { Mix, Base, IBase as IB } from "./src/MixWithv3.js";
import { IName as IN } from "./src/Mixins/Name.js";
import { ISurname as IS } from "./src/Mixins/Surname.js";
import { ComplexMixin, Constructor as ZC, Flatten as ZF, FlattenInterface as ZFI, GCtor as ZGC, GCtor2 as ZGC2, GenericMixin as ZGM, InterfaceOfBoth as ZIOB, InterfaceOfClass as ZIOF, InterfaceOfMixin as ZIOM, IntersectionOfObjectInArray as ZIOOIA, Mixin as ZM, MixinType as ZMT, MixinType1 as ZMT1 } from "./src/lib/zionTypes";
export declare namespace ZionTypes {
    namespace ZionMixinsInterfaces {
        type IName = IN;
        type ISurname = IS;
        type IBase = IB;
        type InterfaceOfBoth<MixinType, Superclass> = ZIOB<MixinType, Superclass>;
        type InterfaceOfClass<T> = ZIOF<T>;
        type InterfaceOfMixin<T> = ZIOM<T>;
    }
    namespace MixinTypes {
        type GenericMixin<MixinType> = ZGM<MixinType>;
        type Mixin = ZM;
        type MixinWithId = ZMT;
        type MixinWithId2 = ZMT1;
    }
    namespace Constructors {
        type Constructor = ZC;
        type GCtor<T> = ZGC<T>;
        type GCtor2 = ZGC2;
    }
    namespace Array {
        type Flatten<T> = ZF<T>;
        type IntersectionOfObjectInArray<T> = ZIOOIA<T>;
    }
    namespace Flatteners {
        type FlattenInterface<Type> = ZFI<Type>;
    }
}
export declare type Constructor = C;
export declare type GConstructor = GC;
declare const _default: {
    Mixin: typeof Mixin;
};
export default _default;
export declare let ZionMixins: {
    Mix: typeof Mix;
    Base: typeof Base;
    Name: ComplexMixin<IN>;
    Surname: ComplexMixin<IS>;
};
export declare let ZionDecorators: {
    justin: {
        BaseMixin: (mixin: import("./src/lib/zionTypes").MixinAny) => {};
        Cached: (mixin: any) => any;
        DeDupe: (mixin: any) => any;
        hasMixin: (o: any, mixin: any) => boolean;
        isApplicationOf: (proto: any, mixin: any) => any;
        unwrap: (wrapper: any) => any;
        wrap: (mixin: any, wrapper: any) => any;
    };
};
