export const Tematica = function (Base, id) {
    return class extends Base {
        __type = Symbol("tematica");
        #tematicaId = id;
        get tematicaId() {
            return this.#tematicaId;
        }
        #tematica;
        get tematica() {
            return this.#tematica;
        }
        constructor(...arg) {
            super(...arg);
            this.#tematica = arg[this.#tematicaId];
        }
    };
};
