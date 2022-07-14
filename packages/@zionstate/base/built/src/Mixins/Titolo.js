export const Titolo = function (Base, id) {
    return class extends Base {
        __type = Symbol("titolo");
        #titoloId = id;
        get titoloId() {
            return this.#titoloId;
        }
        #titolo;
        get titolo() {
            return this.#titolo;
        }
        constructor(...arg) {
            super(...arg);
            this.#titolo = arg[this.#titoloId];
        }
    };
};
