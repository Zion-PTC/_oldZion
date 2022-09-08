import { aggiungi } from "../lib/aggiungi.js";
export class AEsercizio {
    oggetti;
    id;
    nome;
    autore;
    file;
    static #esercizi = [];
    static get esercizi() {
        return this.#esercizi;
    }
    static mostraEsercizi = () => {
        let obj = [];
        function add(esercizio) {
            let obj = {};
            aggiungi(obj, "nome", esercizio, "nome");
            aggiungi(obj, "autore", esercizio, "autore");
            aggiungi(obj, "oggetti", esercizio, "oggetti");
            aggiungi(obj, "file", esercizio, "file", false, [
                "file",
                "path",
            ]);
            this.push(obj);
        }
        AEsercizio.esercizi.forEach(add, obj);
        console.table(obj);
    };
    constructor(oggetti = [], id, nome, autore, file) {
        this.oggetti = oggetti;
        this.id = id;
        this.nome = nome;
        this.autore = autore;
        this.file = file;
        AEsercizio.#esercizi.push(this);
        this.id = AEsercizio.#esercizi.length;
    }
}
let o = 0;
// @staticImplements<IStaticEsercizio>()
// TODO capire come mai non funziona il membro statico
// privato quando viene chiamato esercizi sulla classe
export class Esercizio extends AEsercizio {
    oggetti;
    id;
    nome;
    autore;
    file;
    static #esercizi = [];
    static get esercizi() {
        return Esercizio.#esercizi;
    }
    constructor(oggetti = [], id, nome, autore, file) {
        super(oggetti, id, nome, autore, file);
        this.oggetti = oggetti;
        this.id = id;
        this.nome = nome;
        this.autore = autore;
        this.file = file;
        Esercizio.#esercizi.push(this);
        this.id = Esercizio.#esercizi.length;
    }
    /**
     * aggiunge anche l'esercizio all'oggetto
     * @param oggetto
     * @returns
     */
    aggiungiOggetto(oggetto) {
        this.oggetti.push(oggetto);
        oggetto.aggiungiEsercizio(this);
        return this;
    }
    mostraOggetti() {
        let array = [];
        const aggiungiNomeOggetto = function (oggetto) {
            array.push(oggetto.nome);
        };
        this.oggetti.forEach(aggiungiNomeOggetto);
        console.log(array.join(", "));
        return this;
    }
    runFile() {
        return this;
    }
    showCode() {
        return this;
    }
}
