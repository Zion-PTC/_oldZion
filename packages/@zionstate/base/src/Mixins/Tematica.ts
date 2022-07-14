import * as Mixins from "../../lib/types/Mixin/Mixins.js";

type ComplexMixin<T> = Mixins.ComplexMixin<T>;

export interface ITematica {
  __type: Symbol;
  tematica: string;
}
export const Tematica: ComplexMixin<ITematica> = function (Base, id: number) {
  return class extends Base implements ITematica {
    __type: Symbol = Symbol("tematica");
    #tematicaId = id;
    get tematicaId() {
      return this.#tematicaId;
    }
    #tematica: string;
    get tematica() {
      return this.#tematica;
    }
    constructor(...arg: any[]) {
      super(...arg);
      this.#tematica = arg[this.#tematicaId];
    }
  };
};
