
class User {
  constructor(name) {
    this.name = name;

    this.say = function () {
      console.log("User: " + this.name);
    };
  }
}

class DecoratedUser {
  constructor(user, street, city) {
    this.user = user;
    this.name = user.name; // ensures interface stays the same
    this.street = street;
    this.city = city;

    this.say = function () {
      console.log("Decorated User: " + this.name + ", " +
        this.street + ", " + this.city);
    };
  }
}

function run() {

  var user = new User("Kelly");
  user.say();

  var decorated = new DecoratedUser(user, "Broadway", "New York");
  decorated.say();
}
