export const Descrizione = function (Base, id) {
    return class extends Base {
        __type = Symbol("descrizione");
        #descrizioneId = id;
        get descrizioneId() {
            return this.#descrizioneId;
        }
        #descrizione;
        get descrizione() {
            return this.#descrizione;
        }
        constructor(...arg) {
            super(...arg);
            this.#descrizione = arg[this.#descrizioneId];
        }
    };
};
