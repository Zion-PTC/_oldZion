const sym = Symbol("sym");
class Foo extends Object {
  constructor(id) {
    super();
    this.id = id;
    this[sym] = "ciao";
  }
  goo = () => {
    return "ciao";
  };
}
const foo = new Foo(10);
Object.defineProperty(Object, "getHash", {
  value: function () {
    return hash.update(this.prototype.constructor.toString()).digest("hex");
  },
});
Object.defineProperty(foo, "goo", { enumerable: true });
class Obj {
  get ciao() {
    return "ciao";
  }
  constructor(id) {
    this.id = id;
    this.bo = { o: 1 };
    this.name = "name";
    return "not";
  }
  goo = (name) => {
    this.name = name;
    return this.id;
  };
}
Object.defineProperty(Obj.prototype, "ciao", { enumerable: true });

const objj = new Obj(10);
console.log(Object.getOwnPropertyNames(objj));
