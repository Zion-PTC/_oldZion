interface Context {
  input: any;
  output?: any;
  validation(input: any): boolean;
}

interface Interpreter {
  id: any;
  token1: any;
  token2: any;
  context?: any;
  interpret(context: Context): void;
  computeOutput(input: any): any;
  treatInput(input: any): any;
}

interface Language {
  expression1: Interpreter;
  expression2: Interpreter;
  tree: Interpreter[];
  context: Context;
}

class Context {
  constructor(input: any, output?: any) {
    this.input = input;
    this.output = output;
    this.validation = (input: any) => {
      return (this.input = input);
    };
  }
}

class Interpreter {
  constructor(id: any, token1: any, token2: any, context?: any) {
    this.id = id;
    this.token1 = token1;
    this.token2 = token2;
    if (context) this.context = context;
  }
  interpret(context: Context) {
    if (context.validation(this.token1)) {
      context.output = this.computeOutput(context.input);
      context.input = this.treatInput(context.input);
    } else if (context.validation(this.token2)) {
      context.output = this.computeOutput(context.input);
      context.input = this.treatInput(context.input);
    }
  }
  computeOutput(input: any) {
    let computedOutput;
    return computedOutput;
  }
  treatInput(input: any) {
    let computedInput;
    return computedInput;
  }
}

class Language {
  constructor(input: string) {
    this.expression1 = new Interpreter("id", "token1", "token2", "context");
    this.expression2 = new Interpreter("id", "token1", "token2", "context");
    this.tree = [this.expression1, this.expression2];
    let ctx = new Context(input);
    for (let node of this.tree) {
      node.interpret(ctx);
    }
    this.context = ctx;
  }
}
