export const Annotazioni = function (Base, id) {
    return class extends Base {
        __type = Symbol("annotazioni");
        #annotazioniId = id;
        get annotazioniId() {
            return this.#annotazioniId;
        }
        #annotazioni;
        get annotazioni() {
            return this.#annotazioni;
        }
        constructor(...arg) {
            super(...arg);
            this.#annotazioni = arg[this.#annotazioniId];
        }
    };
};
