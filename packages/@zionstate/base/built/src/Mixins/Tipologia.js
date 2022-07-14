export const Tipologia = function (Base, id) {
    return class extends Base {
        __type = Symbol("tipologia");
        #tipologiaId = id;
        get tipologiaId() {
            return this.#tipologiaId;
        }
        #tipologia;
        get tipologia() {
            return this.#tipologia;
        }
        constructor(...arg) {
            super(...arg);
            this.#tipologia = arg[this.#tipologiaId];
        }
    };
};
