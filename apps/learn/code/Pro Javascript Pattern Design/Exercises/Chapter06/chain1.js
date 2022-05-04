class Some {
  constructor(a, b) {
    this.a = a;
    this.b = b;
    this.risultatoSomma = null;
  }
  somma() {
    this.risultatoSomma = this.a + this.b;
    return this;
  }
  show() {
    console.log(this.risultatoSomma);
    return this;
  }
}
const run = function () {
  let newSome = new Some(1, 2);
  newSome.somma().show();
};
run();
