class StaticMeth {
  static sayHi(hi) {
    return console.log(hi);
  }
}

StaticMeth.sayHi(StaticMeth.prototype); // {}

class Make {
  constructor() {
    this.prop1 = 'Instance Prop1';
    this.id = Make.count++;
  }
}
Make.count = 0;
Make.prototype.prop2 = 'Prototype Property';

const obj1 = new Make();
const obj2 = new Make();

console.log(obj1); // Make { prop1: 'Instance Prop1', id: 0 }
console.log(obj2); // Make { prop1: 'Instance Prop1', id: 1 }
console.log(obj2.prop2); // Prototype Property
console.log(obj2.count); // undefined
console.log(Make.count); // 2
console.log(Make.id); // undefined
