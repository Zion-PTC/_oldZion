class Context {
  constructor(input, output) {}
  someValidation(input) {
    let computedValue = treatDatas(input);
    return true;
  }
}

class Expression {
  constructor(id, one, two, three) {
    this.id = id;
    this.one = one;
    this.two = two;
    this.three = three;
    this.computer = () => {
      return something;
    };
  }
  interpreter(context) {
    if (context.someValidation(this.one)) {
      context.output = this.compute(this.input);
      context.input = doSomethingToInput(this.input);
    } else if (context.someValidation(this.two)) {
      context.output = this.compute(this.input);
      context.input = doSomethingToInput(this.input);
      return somethingElse;
    }
    // if something happens more than once
    while (context.someValidation(this.three)) {
      context.output = this.compute(this.input);
      context.input = doSomethingToInput(this.input);
      return somethingElse;
    }
  }
}
