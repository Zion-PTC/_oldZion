export class Name {
    #name;
    get name() {
        return this.#name;
    }
    constructor(name = "name") {
        this.#name = name;
    }
}
