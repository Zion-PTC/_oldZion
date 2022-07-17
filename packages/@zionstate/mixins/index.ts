import { Constructor as C, GConstructor as GC, Mixin } from "./src/TSMixin.js";
import { Mix, Base, IBase as IB } from "./src/MixWithv3.js";
import { Name, IName as IN } from "./src/Mixins/Name.js";
import { Surname, ISurname as IS } from "./src/Mixins/Surname.js";
import {
  ClassType,
  ComplexMixin,
  ConstrOfInterfaceOfBoth as ZCOFOB,
  Constructor as ZC,
  Constructor1,
  Flatten as ZF,
  FlattenInterface as ZFI,
  GCtor as ZGC,
  GCtor2 as ZGC2,
  GenericMixin as ZGM,
  Getters as ZGet,
  InterfaceOfBoth as ZIOB,
  InterfaceOfClass as ZIOF,
  InterfaceOfMixin as ZIOM,
  IntersectionOfObjectInArray as ZIOOIA,
  Mixin as ZM,
  MixinType as ZMT,
  MixinType1 as ZMT1,
} from "./src/lib/zionTypes";
import {
  BaseMixin as JBM,
  Cached as JC,
  DeDupe as JDD,
  hasMixin as JHS,
  isApplicationOf as JIA,
  unwrap as JU,
  wrap as JW,
} from "./src/lib/justin-fagnani/decorators.js";

export namespace ZionTypes {
  export namespace ZionMixinsInterfaces {
    export type IName = IN;
    export type ISurname = IS;
    export type IBase = IB;
    export type InterfaceOfBoth<MixinType, Superclass> = ZIOB<
      MixinType,
      Superclass
    >;
    export type InterfaceOfClass<T> = ZIOF<T>;
    export type InterfaceOfMixin<T> = ZIOM<T>;
  }
  export namespace MixinTypes {
    export type GenericMixin<MixinType> = ZGM<MixinType>;
    export type Mixin = ZM;
    export type MixinWithId = ZMT;
    export type MixinWithId2 = ZMT1;
  }
  export namespace Constructors {
    export type Constructor = ZC;
    export type GCtor<T> = ZGC<T>;
    export type GCtor2 = ZGC2;
  }
  export namespace Array {
    export type Flatten<T> = ZF<T>;
    export type IntersectionOfObjectInArray<T> = ZIOOIA<T>;
  }
  export namespace Flatteners {
    export type FlattenInterface<Type> = ZFI<Type>;
  }
}

export type Constructor = C;
export type GConstructor = GC;
export default { Mixin };
export let ZionMixins = {
  Mix,
  Base,
  Name,
  Surname,
};
export let ZionDecorators = {
  justin: {
    BaseMixin: JBM,
    Cached: JC,
    DeDupe: JDD,
    hasMixin: JHS,
    isApplicationOf: JIA,
    unwrap: JU,
    wrap: JW,
  },
};
