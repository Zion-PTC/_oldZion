class ObjectClass {
  constructor(name) {
    this.name = name;
  }
  hydrate = () => JSON.stringify(this);
  dehydrate = (memento) => (this.name = JSON.parse(memento).name);
}

class ObjectUser {
  mementos = {};
  add = (key, memento) => (this.mementos[key] = memento);
  get = (key) => this.mementos[key];
}

let obj1 = new ObjectClass("1");
let obj2 = new ObjectClass("2");

let user1 = new ObjectUser();
user1.add("1", obj1.hydrate());
user1.add("2", obj2.hydrate());

console.log(obj1);
console.log(obj2);

// mess names
obj1.name = "boh";
obj2.name = "boh";

obj1.dehydrate(user1.get("1"));
obj2.dehydrate(user1.get("2"));

console.log(obj1);
console.log(obj2);
