class Builder {
  build(builder) {
    builder.step1();
    builder.step2();
    return builder.get();
  }
}

class GenericTypeBuilder {
  object;
  prototype;
  step1 = () => (this.object = new this.prototype());
  step2 = () => this.object.editParam1();
  get = () => this.object;
}

class Type1Builder extends GenericTypeBuilder {
  prototype = Type1;
}

class Type2Builder extends GenericTypeBuilder {
  prototype = Type2;
}

class GenericType {
  param1;
  log = () => console.log(this.param1);
}

class Type1 extends GenericType {
  editParam1 = () => (this.param1 = 10);
}

class Type2 extends GenericType {
  editParam1 = () => (this.param1 = 15);
}

function run() {
  let builder = new Builder();
  let type1builder = new Type1Builder();
  let type2builder = new Type2Builder();
  let type1 = builder.build(type1builder);
  let type2 = builder.build(type2builder);
  type1.log();
  type2.log();
}

run();
