class Flyweight {
  constructor(
    public make: string,
    public model: string,
    public processor: string
  ) {}
}

class Computer {
  flyweight: Flyweight;
  constructor(
    public make: string,
    public model: string,
    public processor: string,
    public memory: string,
    public tag: string
  ) {
    this.flyweight = FlyWeightFactory.get(make, model, processor);
    // ...
  }
  getMake() {
    return this.flyweight.make;
  }
}

var FlyWeightFactory = (function () {
  var flyweights: { [key: string]: any } = {};

  return {
    get: function (make: string, model: string, processor: string) {
      if (!flyweights[make + model]) {
        flyweights[make + model] = new Flyweight(make, model, processor);
      }
      return flyweights[make + model];
    },

    getCount: function () {
      var count = 0;
      for (var f in flyweights) count++;
      return count;
    },
  };
})();

class ComputerCollection {
  computers: { [key: string]: any } = {};
  count = 0;

  get(tag: string) {
    return this.computers[tag];
  }
  getCount() {
    return this.count;
  }
  add(
    make: string,
    model: string,
    processor: string,
    memory: string,
    tag: string
  ) {
    this.computers[tag] = new Computer(make, model, processor, memory, tag);
    this.count++;
  }
}

var computers = new ComputerCollection();

computers.add("Dell", "Studio XPS", "Intel", "5G", "Y755P");
computers.add("Dell", "Studio XPS", "Intel", "6G", "X997T");
computers.add("Dell", "Studio XPS", "Intel", "2G", "U8U80");
computers.add("Dell", "Studio XPS", "Intel", "2G", "NT777");
computers.add("Dell", "Studio XPS", "Intel", "2G", "0J88A");
computers.add("HP", "Envy", "Intel", "4G", "CNU883701");
computers.add("HP", "Envy", "Intel", "2G", "TXU003283");

console.log("Computers: " + computers.getCount());
console.log("Flyweights: " + FlyWeightFactory.getCount());
