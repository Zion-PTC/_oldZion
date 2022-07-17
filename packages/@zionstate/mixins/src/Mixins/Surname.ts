import { ComplexMixin, Constructor } from "../lib/zionTypes";

export interface ISurname {
  surname: string;
}
export const Surname: ComplexMixin<ISurname> = function (Base, id: number) {
  return class Surname extends Base implements ISurname {
    #surnameId = id;
    get surnameId() {
      return this.#surnameId;
    }
    #surname: string = "";
    get surname() {
      return this.#surname;
    }
    constructor(...arg: any[]) {
      super(...arg);
      this.#surname = arg[this.#surnameId];
    }
  };
};
