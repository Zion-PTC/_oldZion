import * as Mixins from "../../lib/types/Mixin/Mixins.js";

type ComplexMixin<T> = Mixins.ComplexMixin<T>;

export interface IName {
  __type: Symbol;
  blood: string;
}
export const Name: ComplexMixin<IName> = function (Base, id: number) {
  return class extends Base implements IName {
    __type: Symbol = Symbol("blood");
    #bloodId = id;
    get bloodId() {
      return this.#bloodId;
    }
    #blood: string = "";
    get blood() {
      return this.#blood;
    }
    constructor(...arg: any[]) {
      super(...arg);
      this.#blood = arg[this.#bloodId];
    }
  };
};
