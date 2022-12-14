"use strict";
class helloWorldOfGenerics {
    example1() {
        function identity(arg) {
            return arg;
        }
    }
    example2() {
        function identity(arg) {
            return arg;
        }
    }
    example3() {
        function identity(arg) {
            return arg;
        }
        let output = identity('po');
    }
    example4() {
        function identity(arg) {
            return arg;
        }
        let output = identity('po');
    }
}
class workingWithGenericsTypeVariable {
    example1() {
        function identity(arg) {
            console.log(arg.length);
            return arg;
        }
    }
    example2() {
        function identity(arg) {
            console.log(arg.length);
            return arg;
        }
    }
    example3() {
        function identity(arg) {
            console.log(arg.length);
            return arg;
        }
    }
}
class GenericType {
    static ex1() {
        function identity(arg) {
            return arg;
        }
        let myIdendity = identity;
        let res = myIdendity('ciao');
        console.log(res);
    }
    static ex2() {
        function identity(arg) {
            return arg;
        }
        let myIdendity = identity;
    }
    static ex3() {
        function identity(arg) {
            return arg;
        }
        let myIdentity = identity;
    }
    static ex4() {
        console.log('questo ci porta a scrivere la nostra prima Interfaccia che usa i Generics');
        function identity(arg) {
            return arg;
        }
        let myIdentity = identity;
        let res = myIdentity(10);
        console.log(res);
    }
    static ex5() {
        console.log('questo ci porta a scrivere la nostra prima Interfaccia che usa i Generics');
        function identity(arg) {
            return arg;
        }
        let myIdentity = identity;
        let res1 = myIdentity(40);
        let res2 = myIdentity('40');
        console.log(res1);
    }
}
class GenericClasse {
    static ex1() {
        console.log('Una classe generica ha una forma simile alle Interfacce generiche. Le classi generiche hanno una lista di parametri di tipo generico incluse in <> dopo il nome della classe');
        class GenericNumber {
            zeroValue;
            add;
        }
        let myGenericNumber = new GenericNumber();
        myGenericNumber.zeroValue = 0;
        myGenericNumber.add = function (x, y) {
            return x + y;
        };
    }
    static ex2() {
        class GenericNumber1 {
            zeroValue;
            add;
        }
        let GenericNumber = GenericClasse.ex1();
        let stringNumeric = new GenericNumber1();
        stringNumeric.zeroValue = 'ull';
        stringNumeric.add = function (x, y) {
            return x + y;
        };
        console.log(stringNumeric.add(stringNumeric.zeroValue, 'test'));
    }
}
class GenericConstraints {
    ex1() {
        function loggindIdentity(arg) {
            console.log(arg.length);
            return arg;
        }
        console.log('Instead of working with any and all types, we???d like to constrain this function to work with any and all types that also  have the .length property. As long as the type has this member, we???ll allow it, but it???s required to have at least this member. To do so, we must list our requirement as a constraint on what Type can be.');
        console.log('');
    }
    ex2() {
        console.log('To do so, we???ll create an interface that describes our constraint. Here, we???ll create an interface that has a single .length property and then we???ll use this interface and the extends keyword to denote our constraint:');
        function loggindIdentity(arg) {
            console.log(arg.length);
            return arg;
        }
    }
    ex3() {
        console.log('Because the generic function is now constrained, it will no longer work over any and all types:');
        function loggindIdentity(arg) {
            console.log(arg.length);
            return arg;
        }
        loggindIdentity(3);
    }
    ex4() {
        console.log('nstead, we need to pass in values whose type has all the required properties:');
        function loggindIdentity(arg) {
            console.log(arg.length);
            return arg;
        }
        loggindIdentity({ length: 10, value: 3 });
    }
}
class UsingTypeParametersInGenericConstraints {
    ex1() {
        console.log('You can declare a type parameter that is constrained by another type parameter. For example, here we???d like to get a property from an object given its name. We???d like to ensure that we???re not accidentally grabbing a property that does not exist on the obj, so we???ll place a constraint between the two types:');
        function getProperty(obj, key) {
            return obj[key];
        }
        let x = { a: 1, b: 2, c: 3, d: 4 };
        getProperty(x, 'a');
        getProperty(x, 'm');
    }
}
class UsingClassTypesInGenerics {
    static ex1() {
        console.log('When creating factories in TypeScript using generics, it is necessary to refer to class types by their constructor functions. For example,');
        function create(c) {
            return new c();
        }
    }
    static ex2() {
        console.log('A more advanced example uses the prototype property to infer and constrain relationships between the constructor function and the instance side of class types.');
        class BeeKeeper {
            hasMask = true;
        }
        class ZooKeeper {
            nametag = 'Mikle';
        }
        class Animal {
            numLegs = 4;
        }
        class Bee extends Animal {
            keeper = new BeeKeeper();
        }
        class Lion extends Animal {
            keeper = new ZooKeeper();
        }
        function createInstance(c) {
            return new c();
        }
        let A = createInstance(Lion).keeper.nametag;
        let B = createInstance(Bee).keeper.hasMask;
        console.log(A, B);
        console.log('This pattern is used to power the mixins design pattern.');
    }
}
UsingClassTypesInGenerics.ex2();
