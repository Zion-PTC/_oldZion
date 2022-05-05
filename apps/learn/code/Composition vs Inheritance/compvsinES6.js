/**
 * Composition over inheritance is the principle that classes should achieve polymorphic behavior and code reuse by their composition rather than inheritance from a base.
 */

/**
 * Inheritance
To better understand why we might favor composition over inheritance let’s first look at inheritance in Javascript, specifically ES6. The extends keyword is used in class declarations or class expressions to create a class that is a child of another class.
 */
function inheritance() {
  class Plant {
    constructor(name) {
      this.name = name;
    }
    water() {
      console.log('Water the ' + this.name);
    }
    repot() {
      console.log('Repot the ' + this.name);
    }
    harvest() {
      console.log('Harvest the ' + this.name);
    }
  }
  class Vegetable extends Plant {
    constructor(name, size, health) {
      super(name);
      this.health = health;
    }
  }
  class Flower extends Plant {
    constructor(name, size, health) {
      super(name);
      this.health = health;
    }
  }
  class Fruit extends Plant {
    constructor(name, size, health) {
      super(name);
      this.health = health;
    }
  }
}
/**
 * We see a potential problem beginning to form using the inheritance pattern.
The water method is shared among the instances of Flower, Vegetable and Fruit which is helpful since they will all need to be watered, but there is no need for an instance of Flower to have access to the harvest method and my vegetables are planted in the ground so there is no reason for them to have access to the repot method.
The associations should look like this:
Fruits are watered, repotted, harvested
Flowers are watered repotted
Vegetables are watered, harvested
OK, so what if I do something like this
 */

function dupliacation() {
  class Plant {
    constructor(name) {
      this.name = name;
    }
    water() {
      console.log('Water the ' + this.name);
    }
  }
  class Vegetable extends Plant {
    constructor(name, size, health) {
      super(name), (this.health = health);
    }
    harvest() {
      console.log('Harvest the ' + this.name);
    }
  }
  class Flower extends Plant {
    constructor(name, size, health) {
      super(name), (this.health = health);
    }
    repot() {
      console.log('Repot the ' + this.name);
    }
  }
  class Fruit extends Plant {
    constructor(name, size, health) {
      super(name), (this.health = health);
    }
    repot() {
      console.log('Repot the ' + this.name);
    }
    harvest() {
      console.log('Harvest the ' + this.name);
    }
  }
}
/**
 * This is a little better, but now we end up creating duplicate methods on the different instances that are doing the same thing, not adhering to DRY principles. This is a problem that can be created by the inheritance pattern.
The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle. — Joe Armstrong. Creator of Erlang.
Inheritance is by its nature tightly coupled compared to composition. An inheritance pattern forces us to predict the future and build a taxonomy of types. So unless we can predict the future we are invariably going to get a few things wrong.
 */

/**
 * Composition
A compositional pattern can help us here.
 */

function composition() {
  const harvest = () => {
    return { harvest: () => console.log('Harvesting') };
  };
  const water = () => {
    return { water: () => console.log('Watering') };
  };
  const repot = () => {
    return { repot: () => console.log('Repotting') };
  };
  const Flower = function (name) {
    return Object.assign({ name }, water(), repot());
  };
  const Vegatable = function (name) {
    return Object.assign({ name }, water(), harvest());
  };
  const Fruit = function (name) {
    return Object.assign(
      { name },
      water(),
      repot(),
      harvest()
    );
  };
  const daffodil = Flower();
  daffodil.harvest(); // undefined
  const banana = Fruit();
  banana.harvest(); // Harvesting

  /**
   * By favoring composition over inheritance and thinking in terms of what things do rather than what things are, you can see that we have freed ourselves from the tightly coupled inheritance structure.
  We no longer need to predict the future because additional methods can be easily added and incorporated into separate classes.
  One thing you may notice is that we no longer rely on prototypical inheritance and instead we use functional instantiation to create the object. Once instantiated a variable loses its connection to the shared methods. So, any modification there will not be passed along to instances instantiated before the change.
  If this is a problem we can still use prototypal inheritance and composition together to add new properties to prototypes after they are created and thus making them available to all the objects which delegate to that prototype.
  An arrow function expression can no longer be used since it does not have a constructor method build in.
   */
  function Vegatable(name) {
    this.name = name;
    return Object.assign(this, water(), harvest());
  }
  const Carrot = new Vegatable('Carrot');
}
/**
 * To Conclude
Composition is helpful when we are describing a “has a” relationship, while inheritance is useful in describing a “is a” relationship.
Both encourage code re-usability. On occasion, depending on the requirements and solution an inheritance can make sense.
But the vast majority of solutions will require you not just to think about the current requirements but what requirements will be needed in the future, in which case composition should more often than not win out the day.
And there we have it. I hope you have found this useful and thank you for reading. If you enjoyed this and found this helpful you may also enjoy some of the swag ideas we created at !!nerdy. New designs are launched every month.
1


2



 */
