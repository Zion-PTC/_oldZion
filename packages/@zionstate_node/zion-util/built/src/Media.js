export class Media {
    #media;
    #valori;
    constructor(valori = []) {
        this.#valori = valori;
        this.#media = 0;
    }
    get valore() {
        this.#media = this.#valori.reduce((p, c) => p + c) / this.#valori.length;
        return this.#media;
    }
}
