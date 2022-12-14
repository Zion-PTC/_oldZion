function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

var reader = new Person('John Smith');
reader.getName();

/* Class Author. */

function Author(name, books) {
  Person.call(this, name); // Call the superclass' constructor in the scope of this.
  this.books = books; // Add an attribute to Author.
}

Author.prototype = new Person(); // Set up the prototype chain.
Author.prototype.constructor = Author; // Set the constructor attribute to Author.
Author.prototype.getBooks = function () {
  // Add a method to Author.
  return this.books;
};

var author = [];
author[0] = new Author('Dustin Diaz', [
  'JavaScript Design Patterns',
]);
author[1] = new Author('Ross Harmes', [
  'JavaScript Design Patterns',
]);

author[1].getName();
author[1].getBooks();
