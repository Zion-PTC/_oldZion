import * as Mixins from "../lib/types/Mixin/Mixins.js";

type ComplexMixin<T> = Mixins.ComplexMixin<T>;

export interface IDescrizione {
  __type: Symbol;
  descrizione: string;
}
export const Descrizione: ComplexMixin<IDescrizione> = function (
  Base,
  id: number
) {
  return class extends Base implements IDescrizione {
    __type: Symbol = Symbol("descrizione");
    #descrizioneId = id;
    get descrizioneId() {
      return this.#descrizioneId;
    }
    #descrizione: string;
    get descrizione() {
      return this.#descrizione;
    }
    constructor(...arg: any[]) {
      super(...arg);
      this.#descrizione = arg[this.#descrizioneId];
    }
  };
};
