export class Media {
  #media: number;
  #valori: number[];
  constructor(valori: number[] = []) {
    this.#valori = valori;
    this.#media = 0;
  }
  get valore() {
    this.#media = this.#valori.reduce((p, c) => p + c) / this.#valori.length;
    return this.#media;
  }
}
