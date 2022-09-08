const schema = new Schema({ firstName: String, lastName: String });

class HumanClass {
  get fullName() {
    return "My name";
  }
}

class PersonClass extends HumanClass {
  // `fullName` becomes a virtual
  get fullName() {
    return `${super.fullName} is ${this.firstName} ${this.lastName}`;
  }

  set fullName(v) {
    const firstSpace = v.indexOf(" ");
    this.firstName = v.split(" ")[0];
    this.lastName = firstSpace === -1 ? "" : v.substring(firstSpace + 1);
  }

  // `getFullName()` becomes a document method
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // `findByFullName()` becomes a static
  static findByFullName(name) {
    const firstSpace = name.indexOf(" ");
    const firstName = name.split(" ")[0];
    const lastName = firstSpace === -1 ? "" : name.substring(firstSpace + 1);
    return this.findOne({ firstName, lastName });
  }
}

schema.loadClass(PersonClass);
const Person = db.model("Person", schema);

const doc = await Person.create({
  firstName: "Jon",
  lastName: "Snow",
});

assert.equal(doc.fullName, "My name is Jon Snow");
doc.fullName = "Jon Stark";
assert.equal(doc.firstName, "Jon");
assert.equal(doc.lastName, "Stark");
const foundPerson = await Person.findByFullName("Jon Snow");

assert.equal(foundPerson.fullName, "My name is Jon Snow");
