export const Sorgente = function (Base, id) {
    return class extends Base {
        __type = Symbol("sorgente");
        #sorgenteId = id;
        get sorgenteId() {
            return this.#sorgenteId;
        }
        #sorgente;
        get sorgente() {
            return this.#sorgente;
        }
        constructor(...arg) {
            super(...arg);
            this.#sorgente = arg[this.#sorgenteId];
        }
    };
};
