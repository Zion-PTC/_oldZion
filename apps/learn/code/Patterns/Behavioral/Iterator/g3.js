class MakeRange {
  #first;
  #last;
  constructor(first, last) {
    this.#first = first;
    this.#last = last;
  }
  [Symbol.iterator]() {
    return this;
  }
  next = () => {
    if (this.#first < this.#last) {
      return { value: this.#first++, done: false };
    } else {
      return { value: undefined, done: true };
    }
  };
}

for (let item of new MakeRange(0, 10)) {
  console.log(item);
}
