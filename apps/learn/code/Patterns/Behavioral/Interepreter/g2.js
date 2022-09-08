export class Context {
  constructor(input, output = 0) {
    this.input = input;
    this.output = output;
  }
  startsWith(str) {
    return this.input.substring(0, str.length) === str;
  }
}

export class Expression {
  constructor(name, one, four, five, nine, multiplier) {
    this.name = name;
    this.one = one;
    this.four = four;
    this.five = five;
    this.nine = nine;
    this.multiplier = multiplier;
  }
  interpreter(context) {
    if (context.input.length == 0) return;
    else if (context.startsWith(this.nine)) {
      context.output += 9 * this.multiplier;
      context.input = context.input.substring(2);
    } else if (context.startsWith(this.four)) {
      context.output += 4 * this.multiplier;
      context.input = context.input.substring(2);
    } else if (context.startsWith(this.five)) {
      context.output += 5 * this.multiplier;
      context.input = context.input.substring(1);
    } else if (context.startsWith(this.four)) context.input - substring(2);
    while (context.startsWith(this.one)) {
      context.output += 1 * this.multiplier;
      context.input = context.input.substring(1);
    }
  }
}

export class Roman {
  thousand = new Expression("mille", "M", " ", " ", " ", 1000);
  hundrend = new Expression("cento", "C", "CD", "D", "CM", 100);
  tenth = new Expression("dieci", "X", "XL", "L", "XC", 10);
  units = new Expression("uno", "I", "IV", "V", "IX", 1);
  tree = [this.thousand, this.hundrend, this.tenth, this.units];
  ctx;
  constructor(value) {
    let ctx = new Context(value);
    for (let node of this.tree) {
      node.interpreter(ctx);
    }
    this.ctx = ctx;
  }
}
