class ClassProtoype {
  constructor(name) {
    this.name;
  }
}

class Ciao {
  constructor(name) {
    this.name;
  }
  getName() {
    return this.name;
  }
}

let obj = { a: 'o' };

ClassProtoype.prototype = Ciao.prototype;
