interface IClass {
  membro: string;
  membri: IClass[];
  foo1(): void;
}

type foo1Type = typeof foo1;
const foo1 = function () {
  //@ts-expect-error
  console.log(this.membro);
};

class Class implements IClass {
  //@ts-expect-error
  membro: string;
  //@ts-expect-error
  membri: Class[];
  foo1: foo1Type = foo1;
}

const ClassFactory = function (): IClass {
  let instance: IClass = new Class();
  return instance;
};
let instanza = ClassFactory();
instanza.membro = 'pp';
instanza.foo1();
// cosi funzion ma solo in typescript
let classe: IClass = new Class();
classe.membro = 'Ciao';
console.log(classe);
classe.foo1();

interface IChildClaas extends IClass {}
class ChildClass extends Class implements IChildClaas {}
// cosi non funziona
let child = new ChildClass();
child.membro = 'not';
child.foo1();

// cosi funziona ma non mostra i metodi quando si logga
// l'oggetto in console.
class Blarg {
  //@ts-expect-error
  id: string;
  public show() {
    console.log(this.id);
  }
}
let bla = new Blarg();
bla.id = 'bla';
console.log(bla);

setTimeout(() => {
  bla.show();
}, 1000);
