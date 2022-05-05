class Boo {
  constructor(id) {
    this.id = id;
  }
  goo() {
    return 'goo';
  }
}

let obj = {};

let boobee = new Boo('id');
obj.goo = Boo.prototype.goo;

Object.assign(obj, Boo.prototype);
console.log(obj.goo());
console.log(obj.id);
obj.id = 'ciao';
console.log(obj.id);
console.log(boobee.id);

let obj1 = {};
obj.prototype = Boo.prototype;
console.log(obj1.prototype);
