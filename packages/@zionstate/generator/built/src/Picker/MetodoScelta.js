export class MetodoScelta {
    name;
    metodoScelta;
    static #metodiScelta = [];
    static get metodiScelta() {
        let copiedArray = [];
        this.#metodiScelta.forEach(metodo => copiedArray.push(metodo));
        return this.#metodiScelta;
    }
    static scegliMetodo(type) {
        return MetodoScelta.metodiScelta.find(metodo => metodo.name === type);
    }
    constructor(name, metodoScelta) {
        this.name = name;
        this.metodoScelta = metodoScelta;
        MetodoScelta.#metodiScelta.push(this);
    }
    assegnaMetodoScelta(metodo) {
        this.metodoScelta = metodo;
        return this;
    }
    scegliElemento() {
        if (!this.metodoScelta)
            throw new Error('no method');
        return this.metodoScelta();
    }
}
