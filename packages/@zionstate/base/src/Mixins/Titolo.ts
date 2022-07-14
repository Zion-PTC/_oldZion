import * as Mixins from "../../lib/types/Mixin/Mixins.js";

type ComplexMixin<T> = Mixins.ComplexMixin<T>;

export interface ITitolo {
  __type: Symbol;
  titolo: string;
}
export const Titolo: ComplexMixin<ITitolo> = function (Base, id: number) {
  return class extends Base implements ITitolo {
    __type: Symbol = Symbol("titolo");
    #titoloId = id;
    get titoloId() {
      return this.#titoloId;
    }
    #titolo: string;
    get titolo() {
      return this.#titolo;
    }
    constructor(...arg: any[]) {
      super(...arg);
      this.#titolo = arg[this.#titoloId];
    }
  };
};
