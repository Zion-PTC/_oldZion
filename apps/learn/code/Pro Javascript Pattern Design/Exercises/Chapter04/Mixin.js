import util from 'util';

class Person {
  constructor() {
    this.name = 'default name';
  }
}

class Author extends Person {
  constructor() {
    super();
    this.books = [];
  }
  getName() {
    return this.name;
  }
  getBooks() {
    return this.books;
  }
}

class Mixin {
  constructor() {
    this.lobo;
  }
  sayCiao() {
    console.log(Mixin.prototype);
  }
}

Mixin.prototype.serialize = function serialize() {
  return console.log('gogo');
};

augment(Author, Mixin);

new Author('Ross Harmes', ['JavaScript Design Patterns']);

Author.prototype.sara = function () {
  return console.log('ketchup');
};
Author.prototype.serialize = Mixin.prototype.serialize;
Author.prototype.sayCiao = Mixin.prototype.sayCiao;

let m = new Author();
m.serialize(); // gogo

function augment(receiving, giving) {
  for (let methodName in giving.prototype) {
    receiving.prototype[methodName] =
      giving.prototype.methodName;
  }
}

m.sayCiao(); // { serialize: [Function: serialize] }
