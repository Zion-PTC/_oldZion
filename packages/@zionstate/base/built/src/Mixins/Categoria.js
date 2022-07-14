export const Categoria = function (Base, id) {
    return class extends Base {
        __type = Symbol("categoria");
        #categoriaId = id;
        get categoriaId() {
            return this.#categoriaId;
        }
        #categoria = "";
        get categoria() {
            return this.#categoria;
        }
        constructor(...arg) {
            super(...arg);
            this.#categoria = arg[this.#categoriaId];
        }
    };
};
