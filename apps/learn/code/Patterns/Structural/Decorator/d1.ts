interface IUser {
  name: string;
  say(): void;
}

class User implements IUser {
  constructor(public name: string = 'nome') {}
  say() {
    console.log('User: ' + this.name);
  }
}

class DecoratedUser implements IUser {
  constructor(
    public user: User,
    public street: string,
    public city: string,
    public name: string = user.name,
    public say = function () {
      console.log(
        //@ts-expect-error
        'Decorated User: ' + this.name + ', ' + this.street + ', ' + this.city
      );
    }
  ) {}
}
function run1() {
  var user = new User('Kelly');
  user.say();

  var decorated = new DecoratedUser(user, 'Broadway', 'New York');
  decorated.say();
}
run1();
