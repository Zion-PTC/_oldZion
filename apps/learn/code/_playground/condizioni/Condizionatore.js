class Condizionatore {
  #property;
  get property() {
    return this.#property;
  }
  set property(property) {
    return (this.#property = property);
  }
  #value;
  get value() {
    return this.#value;
  }
  set value(value) {
    return (this.#value = value);
  }
  constructor(property, value) {
    this.#property = property;
    this.#value = value;
  }
  condizione = (oggetto) => {
    return oggetto[this.property] === this.value;
  };
}
