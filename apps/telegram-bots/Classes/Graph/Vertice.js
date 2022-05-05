export class Vertice {
  #valore;
  #listaDiLati = [];
  constructor(valore) {
    this.#valore = valore;
  }
  get valore() {
    return this.#valore;
  }
  get listaDiLati() {
    return this.#listaDiLati;
  }
  set valore(valore) {
    return (this.#valore = valore);
  }
  set listaDiLati(lati) {
    return this.#listaDiLati.push(...lati);
  }
  connettiA(vertice) {
    this.listaDiLati.push(vertice);
    vertice.listaDiLati.push(this);
  }
  trovaVerticiAdiacenti() {
    return this.listaDiLati.map(
      (vertice) => vertice.valore
    );
  }
  èConnessoA(vertice) {
    return this.listaDiLati.some(
      (lato) => lato.valore === vertice.valore
    );
  }
}
