class helloWorldOfGenerics {
  example1() {
    function identity(arg: number): number {
      return arg;
    }
  }
  example2() {
    function identity(arg: any): any {
      return arg;
    }
  }
  example3() {
    function identity<T>(arg: T): T {
      return arg;
    }
    let output = identity<string>('po');
  }
  example4() {
    function identity<T>(arg: T): T {
      return arg;
    }
    let output = identity('po');
  }
}
class workingWithGenericsTypeVariable {
  example1() {
    function identity<T>(arg: T): T {
      //@ts-expect-error
      console.log(arg.length);
      return arg;
    }
  }
  example2() {
    function identity<T>(arg: T[]): T[] {
      console.log(arg.length);
      return arg;
    }
  }
  example3() {
    function identity<T>(arg: Array<T>): Array<T> {
      console.log(arg.length);
      return arg;
    }
  }
}
class GenericType {
  static ex1() {
    function identity<T>(arg: T): T {
      return arg;
    }
    let myIdendity: <T>(arg: T) => T = identity;
    let res = myIdendity('ciao');
    console.log(res);
  }
  static ex2() {
    function identity<Y>(arg: Y): Y {
      return arg;
    }
    let myIdendity: <Input>(arg: Input) => Input = identity;
  }
  static ex3() {
    function identity<T>(arg: T): T {
      return arg;
    }
    let myIdentity: { <Input>(arg: Input): Input } = identity;
  }
  static ex4() {
    console.log(
      'questo ci porta a scrivere la nostra prima Interfaccia che usa i Generics'
    );
    interface GenericIdentityFn {
      <Input>(arg: Input): Input;
    }
    function identity<T>(arg: T): T {
      return arg;
    }
    let myIdentity: GenericIdentityFn = identity;
    let res = myIdentity(10);
    console.log(res);
  }
  static ex5() {
    console.log(
      'questo ci porta a scrivere la nostra prima Interfaccia che usa i Generics'
    );
    interface GenericIdentityFn<Input> {
      (arg: Input): Input;
    }
    function identity<T>(arg: T): T {
      return arg;
    }
    let myIdentity: GenericIdentityFn<number> = identity;
    let res1 = myIdentity(40);
    //@ts-expect-error
    let res2 = myIdentity('40');
    console.log(res1);
  }
}
class GenericClasse {
  static ex1() {
    console.log(
      'Una classe generica ha una forma simile alle Interfacce generiche. Le classi generiche hanno una lista di parametri di tipo generico incluse in <> dopo il nome della classe'
    );
    class GenericNumber<NumType> {
      //@ts-expect-error
      zeroValue: NumType;
      //@ts-expect-error
      add: (x: NumType, y: NumType) => NumType;
    }
    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) {
      return x + y;
    };
    // return GenericNumber;
  }
  static ex2() {
    class GenericNumber1<NumType> {
      //@ts-expect-error
      zeroValue: NumType;
      //@ts-expect-error
      add: (x: NumType, y: NumType) => NumType;
    }
    let GenericNumber = GenericClasse.ex1();
    let stringNumeric = new GenericNumber1<string>();
    stringNumeric.zeroValue = 'ull';
    stringNumeric.add = function (x, y) {
      return x + y;
    };
    console.log(stringNumeric.add(stringNumeric.zeroValue, 'test'));
  }
}
class GenericConstraints {
  ex1() {
    function loggindIdentity<T>(arg: T): T {
      //@ts-expect-error
      console.log(arg.length);
      return arg;
    }
    console.log(
      'Instead of working with any and all types, we’d like to constrain this function to work with any and all types that also  have the .length property. As long as the type has this member, we’ll allow it, but it’s required to have at least this member. To do so, we must list our requirement as a constraint on what Type can be.'
    );
    console.log('');
  }
  ex2() {
    console.log(
      'To do so, we’ll create an interface that describes our constraint. Here, we’ll create an interface that has a single .length property and then we’ll use this interface and the extends keyword to denote our constraint:'
    );
    interface Lengthwise3 {
      length: number;
    }
    function loggindIdentity<T extends Lengthwise3>(arg: T): T {
      console.log(arg.length);
      return arg;
    }
    // return loggindIdentity;
  }
  ex3() {
    console.log(
      'Because the generic function is now constrained, it will no longer work over any and all types:'
    );
    interface Lengthwise {
      length: number;
    }
    function loggindIdentity<T extends Lengthwise>(arg: T): T {
      console.log(arg.length);
      return arg;
    }
    //@ts-expect-error
    loggindIdentity(3);
  }
  ex4() {
    console.log(
      'nstead, we need to pass in values whose type has all the required properties:'
    );
    interface Lengthwise {
      length: number;
    }
    function loggindIdentity<T extends Lengthwise>(arg: T): T {
      console.log(arg.length);
      return arg;
    }
    loggindIdentity({ length: 10, value: 3 });
  }
}
class UsingTypeParametersInGenericConstraints {
  ex1() {
    console.log(
      'You can declare a type parameter that is constrained by another type parameter. For example, here we’d like to get a property from an object given its name. We’d like to ensure that we’re not accidentally grabbing a property that does not exist on the obj, so we’ll place a constraint between the two types:'
    );
    function getProperty<T, Key extends keyof T>(obj: T, key: Key) {
      return obj[key];
    }
    let x = { a: 1, b: 2, c: 3, d: 4 };
    getProperty(x, 'a');
    //@ts-expect-error
    getProperty(x, 'm');
  }
}
class UsingClassTypesInGenerics {
  static ex1() {
    console.log(
      'When creating factories in TypeScript using generics, it is necessary to refer to class types by their constructor functions. For example,'
    );

    function create<T>(c: { new (): T }): T {
      return new c();
    }
  }
  static ex2() {
    console.log(
      'A more advanced example uses the prototype property to infer and constrain relationships between the constructor function and the instance side of class types.'
    );
    class BeeKeeper {
      hasMask: boolean = true;
    }
    class ZooKeeper {
      nametag: string = 'Mikle';
    }
    class Animal {
      numLegs: number = 4;
    }
    class Bee extends Animal {
      keeper: BeeKeeper = new BeeKeeper();
    }
    class Lion extends Animal {
      keeper: ZooKeeper = new ZooKeeper();
    }
    function createInstance<A extends Animal>(c: new () => A): A {
      return new c();
    }
    let A = createInstance(Lion).keeper.nametag;
    let B = createInstance(Bee).keeper.hasMask;
    console.log(A, B);
    console.log('This pattern is used to power the mixins design pattern.');
  }
}

UsingClassTypesInGenerics.ex2();
