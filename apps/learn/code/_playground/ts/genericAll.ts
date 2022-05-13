function identity<T>(arg: T): T {
  return arg;
}

let myid1: <T>(arg: T) => T = identity;

function iReturnAString<T>(a: T): T {
  return a;
}

let res = identity(iReturnAString<string>('1'));

interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

let myIdentity: GenericIdentityFn = function <T>(arg: T): T {
  return arg;
};

interface GenericIdentityFn1<Type> {
  (arg: Type): Type;
}

let myIdentity1: GenericIdentityFn1<number> = function (arg) {
  return arg;
};

type fun = {
  <T>(a: T): T;
};

function concatNumbers<T, U>(a: T | U, b: T) {
  let conc;
  if (typeof a === 'string' && typeof b === 'string') conc = a + b;
  if (typeof a === 'number' && typeof b === 'string') conc = a.toString() + b;
  if (typeof a === 'number' && typeof b === 'number') conc = a + b;
  return conc;
}
let concatRes = concatNumbers('1', 1);
console.log(concatRes);

myIdentity(1);
myIdentity1(1);

type union = string | number;
let a: union;
declare function define(a: number): number;
declare function define(a: string): string;

a = 'ciao';
let b = define(a);
let c1 = 1;
let d = define(c1);
