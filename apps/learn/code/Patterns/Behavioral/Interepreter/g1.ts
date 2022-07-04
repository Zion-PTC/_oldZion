class Context {
  constructor(public input: string, public output = 0) {}
  startsWith(str: string) {
    return this.input.substring(0, str.length) === str;
  }
}

class Expression {
  constructor(
    public name: string,
    public one: string,
    public four: string,
    public five: string,
    public nine: string,
    public multiplier: number
  ) {}
  interpreter(context: Context) {
    if (context.input.length == 0) {
      return;
    } else if (context.startsWith(this.nine)) {
      context.output += 9 * this.multiplier;
      context.input = context.input.substring(2);
    } else if (context.startsWith(this.four)) {
      context.output += 4 * this.multiplier;
      context.input = context.input.substring(2);
    } else if (context.startsWith(this.five)) {
      context.output += 5 * this.multiplier;
      context.input = context.input.substring(1);
    }
    while (context.startsWith(this.one)) {
      context.output += 1 * this.multiplier;
      context.input = context.input.substring(1);
    }
  }
}

let ctx = new Context("MCMLXXVII");
let tree = [];

tree.push(new Expression("mille", "M", " ", " ", " ", 1000));
tree.push(new Expression("cento", "C", "CD", "D", "CM", 100));
tree.push(new Expression("dieci", "X", "XL", "L", "XC", 10));
tree.push(new Expression("uno", "I", "IV", "V", "IX", 1));

for (let node of tree) {
  node.interpreter(ctx);
}

console.log(ctx.output);
