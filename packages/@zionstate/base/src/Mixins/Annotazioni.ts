import * as Mixins from "../lib/types/Mixin/Mixins.js";

type ComplexMixin<T> = Mixins.ComplexMixin<T>;

export interface IAnnotazioni {
  __type: Symbol;
  annotazioni: string[];
}
export const Annotazioni: ComplexMixin<IAnnotazioni> = function (
  Base,
  id: number
) {
  return class extends Base implements IAnnotazioni {
    __type: Symbol = Symbol("annotazioni");
    #annotazioniId = id;
    get annotazioniId() {
      return this.#annotazioniId;
    }
    #annotazioni: string[];
    get annotazioni() {
      return this.#annotazioni;
    }
    constructor(...arg: any[]) {
      super(...arg);
      this.#annotazioni = arg[this.#annotazioniId];
    }
  };
};
