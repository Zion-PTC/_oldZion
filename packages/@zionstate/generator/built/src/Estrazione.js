export class Estrazione {
    arrayOriginale;
    elementoEstratto;
    elementiRimanenti;
    elementiEstratti;
    constructor(arrayOriginale = []) {
        this.arrayOriginale = arrayOriginale;
        this.elementiRimanenti = this.#copiaArray();
        this.elementiEstratti = [];
    }
    #copiaArray() {
        let servedArray = [];
        this.arrayOriginale.forEach(element => servedArray.push(element));
        return servedArray;
    }
}
