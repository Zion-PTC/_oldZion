"use strict";
class Context {
    input;
    output;
    constructor(input, output = 0) {
        this.input = input;
        this.output = output;
    }
    startsWith(str) {
        return this.input.substring(0, str.length) === str;
    }
}
class Expression {
    name;
    one;
    four;
    five;
    nine;
    multiplier;
    constructor(name, one, four, five, nine, multiplier) {
        this.name = name;
        this.one = one;
        this.four = four;
        this.five = five;
        this.nine = nine;
        this.multiplier = multiplier;
    }
    interpreter(context) {
        if (context.input.length == 0) {
            return;
        }
        else if (context.startsWith(this.nine)) {
            context.output += 9 * this.multiplier;
            context.input = context.input.substring(2);
        }
        else if (context.startsWith(this.four)) {
            context.output += 4 * this.multiplier;
            context.input = context.input.substring(2);
        }
        else if (context.startsWith(this.five)) {
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
