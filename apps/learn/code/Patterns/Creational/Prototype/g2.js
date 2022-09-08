class Prototype {
  constructor(proto) {
    this.proto = proto;
  }
  clone() {
    let object = new ObjectMaker();
    object.param1 = this.proto.param1;
    object.param2 = this.proto.param2;
    object.param3 = this.proto.param3;
    return object;
  }
}

class ObjectMaker {
  constructor(param1 = 0, param2 = 0, param3 = 0) {
    this.param1 = param1;
    this.param2 = param2;
    this.param3 = param3;
  }
  say() {
    if (this.param1 && this.param2 && this.param3)
      console.log(
        "param1: " + this.param1,
        "param2: " + this.param2,
        "param3: " + this.param3
      );
  }
}

function run() {
  let object = new ObjectMaker(3, 2, "pending");
  let prototype = new Prototype(object);
  let clone = prototype.clone();
  clone.param1 = 1000;
  clone.param3 = 345;
  object.say();
  clone.say();
}
run();
