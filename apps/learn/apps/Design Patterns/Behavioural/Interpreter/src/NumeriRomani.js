class RomanContext {
  constructor(input, output = 0) {
    this.input = input;
    this.output = output;
  }
  startsWith(str) {
    return this.input.substring(0, str.length) === str;
  }
}

class RomanToArabic {
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
  thousand = new RomanToArabic("mille", "M", " ", " ", " ", 1000);
  hundrend = new RomanToArabic("cento", "C", "CD", "D", "CM", 100);
  tenth = new RomanToArabic("dieci", "X", "XL", "L", "XC", 10);
  units = new RomanToArabic("uno", "I", "IV", "V", "IX", 1);
  tree = [this.thousand, this.hundrend, this.tenth, this.units];
  ctx;
  constructor(value) {
    let ctx = new RomanContext(value);
    for (let node of this.tree) {
      node.interpreter(ctx);
    }
    this.ctx = ctx;
  }
}

class ArabicContext {
  constructor(input, output = "") {
    this.input = input.toString();
    this.output = output;
  }
  startsWith(str) {
    return this.input.substring(0, str.length) === str;
  }
}

class ArabicToRoman {
  constructor(name, one, four, five, nine) {
    this.name = name;
    this.one = one;
    this.four = four;
    this.five = five;
    this.nine = nine;
  }
  interpreter(context) {
    if (context.input.lenght === 0) return;
    else if (context.input.length >= 5) return;
    else if (context.input[0] < 4 && context.input[0] > 0) {
      let array = [];
      let counter = new Number(context.input[0]).valueOf();
      Object.assign(counter, context.input[0]);
      while (counter > 0) {
        counter--;
        array.push(this.one);
      }
      context.output += array.join("");
      context.input = context.input.substring(1);
    } else if (context.input[0] === "4") {
      context.output += this.four;
      context.input = context.input.substring(1);
    } else if (context.input[0] === "5") {
      context.output += this.five;
      context.input = context.input.substring(1);
    } else if (context.input[0] < 9 && context.input[0] > 5) {
      let array = [];
      let counter = new Number(context.input[0]).valueOf() - 5;
      Object.assign(counter, context.input[0]);
      while (counter > 0) {
        counter--;
        array.push(this.one);
      }
      context.output += this.five;
      context.output += array.join("");
      context.input = context.input.substring(1);
    } else if (context.input[0] === "9") {
      context.output += this.nine;
      context.input = context.input.substring(1);
    }
  }
}

export class Arabic {
  thousands = new ArabicToRoman("migliaia", "M", "MV̅", "V̅", "MX̅");
  hundreds = new ArabicToRoman("centinaia", "C", "CD", "D", "CM");
  tenth = new ArabicToRoman("decine", "X", "XL", "L", "XC");
  units = new ArabicToRoman("unita", "I", "IV", "V", "IX");
  tree = [this.thousands, this.hundreds, this.tenth, this.units];
  ctx;
  constructor(value) {
    if (typeof value !== "number") return;
    if (value.length >= 5) return;
    let ctx = new ArabicContext(value);
    let delta = this.tree.length - ctx.input.length;
    while (delta > 0) {
      delta--;
      this.tree.shift();
    }
    for (let node of this.tree) {
      node.interpreter(ctx);
    }
    this.ctx = ctx;
  }
}
