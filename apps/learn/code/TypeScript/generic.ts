// second

// ARRAY
type arr = Array<string>;

// last()
const last = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
};

const l = last([1, 2, 3]);

const l2 = last<string>(['a', 'b', 'c']);

const makeArr = <T>(x: T): T[] => {
  return [x];
};

const v = makeArr(5);
const v2 = makeArr('a');

const makeDoubleArray = <X, Y>(x: X, y: Y) => {
  return [x, y];
};

type Ciccio = number;
let c: Ciccio = 10;
const v3 = makeDoubleArray(1, 2);
const v4 = makeDoubleArray('a', 'b');
const v5 = makeDoubleArray('b', 3);
const v6a = makeDoubleArray<number, string>(19, 'b');
const v6b = makeDoubleArray<Ciccio, string>(c, 'b');
const v6c = makeDoubleArray<number | null, string>(
  null,
  'b'
);

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

const v7 = makeTuple(1, 2);
const v8 = makeTuple('a', 'b');
const v9 = makeTuple(1, 'a');
const v10 = makeTuple<number | null, string>(1, 'a');

const makeTupleDefault = <X, Y = string>(x: X, y: Y) => {
  return [x, y];
};

const v11 = makeTupleDefault<number | null>(1, 'a');

const makeFullName = (obj: {
  firstName: string;
  lastName: string;
}) => {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName,
  };
};

const v12 = makeFullName({
  firstName: 'bob',
  lastName: 'junior',
  // age: 15, // TS si lamenta
});

const makeFullName1 = <
  T extends { firstName: string; lastName: string }
>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName,
  };
};

const v13 = makeFullName1({
  firstName: 'bob',
  lastName: 'junior',
  age: 15,
});

interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;
