export {};

class Flyweight {
  constructor(common1, common2, common3) {
    this.common1 = common1;
    this.common2 = common2;
    this.common3 = common3;
  }
}

class ObjectMaker {
  flyweigth;
  constructor(common1, common2, common3, param4, param5) {
    this.common1 = common1;
    this.common2 = common2;
    this.common3 = common3;
    this.param4 = param4;
    this.param5 = param5;
    this.flyweigth = factory.get(common1, common2, common3);
  }
  getMake() {
    return this.flyweigth.make;
  }
}

class FlyweightFactory {
  constructor() {
    var flyweights = {};
    this.get = function (common1, common2, common3) {
      if (!flyweights[common1 + common2]) {
        flyweights[common1 + common2] = new Flyweight(
          common1,
          common2,
          common3
        );
      }
      return flyweights[common1 + common2];
    };
    this.getCount = function () {
      var count = 0;
      for (var f in flyweights) count++;
      return count;
    };
  }
}
const factory = new FlyweightFactory();

function run() {
  class ObjectCollection {
    objects = {};
    count = 0;
    get = (param5) => this.objects[param5];
    getCount = () => this.count;
    add(common1, common2, common3, param4, param5) {
      this.objects[param5] = new ObjectMaker(
        common1,
        common2,
        common3,
        param4,
        param5
      );
      this.count++;
    }
  }
  var objects = new ObjectCollection();
  objects.add("tnl", "tnl05", '12"', "gotek", "ciao");
  objects.add("tnl", "tnl05", '12"', "gotek", "bomba");
  objects.add("tnl", "tnl05", '12"', "kosmo", "tana");
  objects.add("utm", "utm23", "cd", "kosmo", "cruna");
  objects.add("utm", "utm23", "cd", "oregano", "fauna");
  console.log(objects.count);
  console.log(factory.getCount());
}
run();
