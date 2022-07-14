class Person {
  constructor(
    public name: string,
    public street: string,
    public city: string,
    public state: string
  ) {}
  hydrate() {
    return JSON.stringify(this);
  }
  dehydrate(memento: string) {
    let m: Person = JSON.parse(memento);
    this.name = m.name;
    this.street = m.street;
    this.city = m.city;
    this.state = m.state;
  }
}

class CareTaker {
  mementos: { [key: string]: string } = {};
  constructor() {}
  add(key: string, memento: string) {
    this.mementos[key] = memento;
  }
  get(key: string) {
    return this.mementos[key];
  }
}

let mike = new Person("Mike Foley", "1112 Main", "Dallas", "TX");
let john = new Person("John Wang", "48th Street", "San Jose", "CA");

let caretaker = new CareTaker();
caretaker.add("1", mike.hydrate());
caretaker.add("2", john.hydrate());

// mess up names
mike.name = "King Kong";
john.name = "Kurt Cobain";

mike.dehydrate(caretaker.get("1"));
john.dehydrate(caretaker.get("2"));

console.log(mike);
console.log(john);
