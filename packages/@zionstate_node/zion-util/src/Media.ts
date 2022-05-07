export class Media {
  #media: number;
  #valori: number[];
  constructor(valori = []) {
    this.#valori = valori;
  }
  get valore() {
    this.#media = this.#valori.reduce((p, c) => p + c) / this.#valori.length;
    return this.#media;
  }
}
