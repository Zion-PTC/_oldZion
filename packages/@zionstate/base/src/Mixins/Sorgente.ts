import * as Mixins from "../../lib/types/Mixin/Mixins.js";

type ComplexMixin<T> = Mixins.ComplexMixin<T>;

export interface ISorgente {
  __type: Symbol;
  sorgente: string;
}
export const Sorgente: ComplexMixin<ISorgente> = function (Base, id: number) {
  return class extends Base implements ISorgente {
    __type: Symbol = Symbol("sorgente");
    #sorgenteId = id;
    get sorgenteId() {
      return this.#sorgenteId;
    }
    #sorgente: string;
    get sorgente() {
      return this.#sorgente;
    }
    constructor(...arg: any[]) {
      super(...arg);
      this.#sorgente = arg[this.#sorgenteId];
    }
  };
};
