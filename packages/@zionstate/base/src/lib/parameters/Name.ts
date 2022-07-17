export class Name {
  #name: string;
  get name() {
    return this.#name;
  }
  constructor(name: string = "name") {
    this.#name = name;
  }
}
