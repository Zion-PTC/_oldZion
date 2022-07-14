export const Percorso = function (Base, id) {
    return class extends Base {
        __type = Symbol("percorso");
        #percorsoId = id;
        get percorsoId() {
            return this.#percorsoId;
        }
        #percorso;
        get percorso() {
            return this.#percorso;
        }
        constructor(...arg) {
            super(...arg);
            this.#percorso = arg[this.#percorsoId];
        }
    };
};
