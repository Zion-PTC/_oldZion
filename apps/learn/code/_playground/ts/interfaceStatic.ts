import { staticImplements } from '../../../src/Primitive';

interface MyType {
  instanceMethod();
}

interface MyTypeStatic {
  new (): MyType;
  staticProp: string;
  staticMethod(): string;
}

/* class decorator */
// function staticImplements<T>() {
//   return <U extends T>(constructor: U) => {
//     constructor;
//   };
// }

console.log(this);

@staticImplements<MyTypeStatic>() /* this statement implements both normal interface & static interface */
class MyTypeClass {
  /* implements MyType { */ /* so this become optional not required */
  // public static staticProp: string
  static staticProp: string;
  public static staticMethod(): string {
    return '';
  }
  instanceMethod() {}
}
