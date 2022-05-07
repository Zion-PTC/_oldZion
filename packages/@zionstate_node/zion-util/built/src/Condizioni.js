export class Condizioni {
    constructor() { }
    oggettoUgualeCostruttore(object, constructor) {
        return object.constructor === constructor;
    }
    proprietàNome(elemento, name) {
        return elemento.name === name;
    }
}
export class Condizionatore {
    static #condizionatori = [];
    #property;
    get property() {
        return this.#property;
    }
    set property(property) {
        this.#property = property;
    }
    #value;
    get value() {
        return this.#value;
    }
    set value(value) {
        this.#value = value;
    }
    #result;
    get result() {
        return this.#result;
    }
    set result(result) {
        this.#result = result;
    }
    #servedArray = [];
    get servedArray() {
        return this.#servedArray;
    }
    set servedArray(servedArray) {
        this.#servedArray = servedArray;
    }
    id;
    constructor(property, value) {
        this.#property = property;
        this.#value = value;
        Condizionatore.#condizionatori.push(this);
        this.id = Condizionatore.#condizionatori.length;
    }
    condizione = (oggetto) => {
        return oggetto[this.property] === this.value;
    };
    condizioneForEach = (oggetto) => {
        let servedArray = this.servedArray;
        if (oggetto[this.property] === this.value) {
            servedArray.push(oggetto);
        }
        return this;
    };
}
