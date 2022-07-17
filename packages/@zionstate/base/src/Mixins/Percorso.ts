import * as Mixins from "../lib/types/Mixin/Mixins.js";

type ComplexMixin<T> = Mixins.ComplexMixin<T>;

export interface IPercorso {
  __type: Symbol;
  percorso: string;
}
export const Percorso: ComplexMixin<IPercorso> = function (Base, id: number) {
  return class extends Base implements IPercorso {
    __type: Symbol = Symbol("percorso");
    #percorsoId = id;
    get percorsoId() {
      return this.#percorsoId;
    }
    #percorso: string;
    get percorso() {
      return this.#percorso;
    }
    constructor(...arg: any[]) {
      super(...arg);
      this.#percorso = arg[this.#percorsoId];
    }
  };
};
