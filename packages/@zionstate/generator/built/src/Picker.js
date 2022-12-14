import { zionUtil, Media } from '@zionstate_node/zion-util';
import { Estrazione } from './Estrazione.js';
let b = 0;
let x = { a: 1, b: 5, c: [1, 2, 3] };
x.c[2];
export class Picker {
    static Estrazione = Estrazione;
    /**
     *
     * @param {number[]} listaDiNumeri lista di numeri fra i
     * quali estrarre.
     * @returns {number} ritorna un numero a caso.
     */
    static scegliACasoNumeroFraNumeri(listaDiNumeri = []) {
        let condizione = zionUtil.checkArrayElementsConstructor(listaDiNumeri, Number);
        if (!condizione)
            throw new Error(`La lista contiene elementi che non sono numeri`);
        const elementoRandom = Picker.scegliACasoNumeroFraElementi(listaDiNumeri);
        return elementoRandom;
    }
    static scegliACasoNumeroFraElementi(listaDiElementi = []) {
        const elementoRandom = listaDiElementi[Math.floor(Math.random() * listaDiElementi.length)];
        return elementoRandom;
    }
    /**
     *
     * @param {Estrazione} estrazione
     * @returns
     */
    static scegliACasoETogliElementoDaArray(estrazione) {
        // console.log(estrazione.elementiRimanenti);
        let lunghezzaArray = estrazione.elementiRimanenti.length - 1;
        let indiceEstratto = this.scegliNumeroNellIntervallo(lunghezzaArray);
        let elementoEstratto = estrazione.elementiRimanenti[indiceEstratto];
        if (!estrazione.elementiRimanenti)
            return 'no rimanenti';
        zionUtil.changePosition(estrazione.elementiRimanenti, indiceEstratto, lunghezzaArray);
        let elementoEstrattoCheck = estrazione.elementiRimanenti.pop();
        if (elementoEstrattoCheck === undefined)
            return 'no popped';
        if (elementoEstratto.name !== elementoEstrattoCheck.name)
            throw new Error(`L'elemeto poppato dall'array non corrisponde con quello estratto`);
        estrazione.elementoEstratto = elementoEstratto;
        estrazione.elementiEstratti.push(elementoEstratto);
        if (!estrazione)
            return 'da fuk';
        return estrazione;
    }
    static scegliNumeroNellIntervallo(intervallo) {
        return Math.floor(Math.random() * intervallo);
    }
    /**
     *
     * @param {number[]} risultati array contenente dei
     * valori.
     * @param {number} numero numero per il quale bisogna
     * calcolare la percentuale di volte che ?? presente nei
     * risultati.
     * @returns {number} ritornare un valore percentuale
     * espresso in decimali
     */
    static calcolaPercentuale(risultati = [], numero) {
        let volteEstratto = [];
        risultati.forEach(risultato => {
            if (risultato === numero) {
                volteEstratto.push(risultato);
            }
        });
        let nRisultati = risultati.length;
        let nVolteEstratto = volteEstratto.length;
        let percentuale = nVolteEstratto / nRisultati;
        return percentuale;
    }
    /**
     *
     * @param {number[]} elementi
     * @param {number[]} estrazioni
     * @returns {number[][]}
     */
    static quanteVolteEstratti(numeri = [], estrazione) {
        let risultati = [];
        numeri.forEach(elemento => {
            risultati.push([
                elemento,
                Picker.calcolaPercentuale(estrazione, elemento),
            ]);
        });
        return risultati;
    }
    /**
     *
     * @param {number[]} valori array contenete i valori da
     * analizzare
     * @param {number} numeroEstrazioni array contenente i
     * valori estratti\
     * @returns {number[][]} array contenente una tuple key
     * value(percentuale) per ogni valore contenuto nelle
     * estrazioni.
     */
    static estraiERitornaPercentuali(valori, numeroEstrazioni) {
        let estrazioni = Picker.estraiConCallbacknVolte(valori, numeroEstrazioni, Picker.scegliACasoNumeroFraNumeri);
        let risultati = Picker.quanteVolteEstratti(valori, estrazioni);
        return risultati;
    }
    /**
     *
     * @param {*[][][]} array un array di array di tuple
     * @returns {object}
     */
    static creaObjWithKeysEMedie(array = [
        [[], []],
        [[], []],
    ]) {
        let obj = {};
        // TODO risolvere TS issues
        array[0].forEach(el => {
            //@ts-expect-error
            obj[el[0]] = { risultati: [], media: null };
        });
        while (array.length > 0) {
            let currentResults = array.shift();
            //@ts-expect-error
            currentResults.forEach(currentResult => {
                //@ts-expect-error
                obj[currentResult[0]].risultati.push(currentResult[1]);
            });
        }
        const calcolaMediaPerOgniKey = function (obj = {}) {
            for (let key in obj) {
                let media = new Media(obj[key].risultati).valore;
                obj[key].media = media;
                delete obj[key].risultati;
            }
            return obj;
        };
        obj = calcolaMediaPerOgniKey(obj);
        return obj;
    }
    /**
     *
     * @param {number[]} numeriFraIQualiEstrarre array con i
     * valori da estrarre.
     * @param {number} volte numero di volte che viene
     * chiamata la callback
     * @param {function} callback callback function
     * @returns {number[]}
     */
    static estraiConCallbacknVolte(numeriFraIQualiEstrarre, volte, callback) {
        let risultati = [];
        while (volte) {
            risultati.push(callback(numeriFraIQualiEstrarre));
            volte--;
        }
        return risultati;
    }
    /**
     *
     * @param {number} volte numero di volte che viene
     * chiamata la callback
     * @param {number[]} valori array contenente i valori da
     * estrarre.
     * @param {number} numeroEstrazioni numero di volte che
     * verr?? effettuata l'estrazione.
     * @param {function} callback funzione di estrazione.
     * @returns {number[][][]} array di array di tuple
     */
    static chiamaNVolteCallback(volte, valori, numeroEstrazioni, callback) {
        let array = [];
        while (volte) {
            array.push(callback(valori, numeroEstrazioni));
            volte--;
        }
        return array;
    }
    estrazione;
    constructor(arrayOriginale = []) {
        this.estrazione = new Estrazione(arrayOriginale);
    }
    scegliACasoETogliElementoDaArray() {
        let lunghezzaArray = this.estrazione.elementiRimanenti.length - 1;
        let indiceEstratto = Picker.scegliNumeroNellIntervallo(lunghezzaArray);
        let elementoEstratto = this.estrazione.elementiRimanenti[indiceEstratto];
        zionUtil.changePosition(this.estrazione.elementiRimanenti, indiceEstratto, lunghezzaArray);
        let elementoEstrattoCheck = this.estrazione.elementiRimanenti.pop();
        if (!elementoEstrattoCheck)
            return;
        if (elementoEstratto.name !== elementoEstrattoCheck.name)
            throw new Error(`L'elemeto poppato dall'array non corrisponde con quello estratto`);
        this.estrazione.elementoEstratto = elementoEstratto;
        this.estrazione.elementiEstratti.push(elementoEstratto);
        return this.estrazione;
    }
    estraiConCallbacknVolte(volte, callback) {
        let risultati = [];
        while (volte) {
            risultati.push(callback());
            volte--;
        }
        return risultati;
    }
}
