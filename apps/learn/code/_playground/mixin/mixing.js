var Mixin = function () {};
Mixin.prototype = {
  serialize: function () {
    var output = [];
    for (let key in this) {
      output.push(key + ": " + this[key]);
    }
    return output.join(", ");
  },
};

var Author = function (name) {
  this.name = name;
};

augment(Author, Mixin);

var author = new Author("Ross Harmes", ["JavaScript Design Patterns"]);
var serializedString = author.serialize();

function augment(receivingClass, givingClass) {
  for (let methodName in givingClass.prototype) {
    if (!receivingClass.prototype[methodName]) {
      receivingClass.prototype[methodName] = givingClass.prototype[methodName];
    }
  }
}
console.log(serializedString);

/* Augment function, improved. */

function augment2(receivingClass, givingClass) {
  if (arguments[2]) {
    // Only give certain methods.

    for (var i = 2, len = arguments.length; i < len; i++) {
      receivingClass.prototype[arguments[i]] =
        givingClass.prototype[arguments[i]];
    }
  } else {
    // Give all methods.

    for (methodName in givingClass.prototype) {
      if (!receivingClass.prototype[methodName]) {
        receivingClass.prototype[methodName] =
          givingClass.prototype[methodName];
      }
    }
  }
}

var Mixin2 = function () {};
Mixin2.prototype = {
  serialize: Mixin.prototype.serialize,
  log: function () {
    console.log("logged =)");
    return;
  },
};
augment2(Author, Mixin2, "log");

var author2 = new Author("Gagliano Giacomo", [
  "Mixin Pattern in Typescript e Javascript",
]);
author2.log();
