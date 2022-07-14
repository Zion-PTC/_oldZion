export const Nome = function (Base, id) {
    return class extends Base {
        __type = Symbol("nome");
        #nomeId = id;
        get nomeId() {
            return this.#nomeId;
        }
        #nome = "";
        get nome() {
            return this.#nome;
        }
        constructor(...arg) {
            super(...arg);
            this.#nome = arg[this.#nomeId];
        }
    };
};
