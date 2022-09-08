export class ObjectClass {
  constructor(name) {
    this.name = name;
  }
  stringify = () => JSON.stringify(this);
  parse = (memento) => (this.name = JSON.parse(memento).name);
}

/**
 * This class helps remembering the original values of a
 * particular object
 */
class MementoStorage {
  mementos = {};
  add = (key, memento) => (this.mementos[key] = memento);
  get = (key) => this.mementos[key];
}

function run() {
  let obj1 = new ObjectClass(10);
  let obj2 = new ObjectClass(13);
  let mementoStorage = new MementoStorage();
  mementoStorage.add("1", obj1.stringify());
  mementoStorage.add("2", obj2.stringify());
  obj1.name = "wrong";
  obj1.parse(mementoStorage.get("1"));
  console.log(obj1);
}

run();
