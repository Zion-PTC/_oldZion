function edit<T, Prop extends keyof T>(obj: T, prop: [Prop, T[Prop]]): T {
  obj[prop[0]] = prop[1];
  return obj;
}

edit({ name: "" }, ["name", ""]);

function edit2<T, Prop extends keyof T>(
  obj: T,
  nested: false,
  prop: [Prop, T[Prop]],
  nestedProp: never
): T;
function edit2<
  T,
  C extends boolean,
  Prop extends keyof T,
  NestedProp extends keyof T[Prop]
>(
  obj: T,
  nested: C,
  prop: C extends false ? [Prop, T[Prop]] : Prop,
  nestedProp?: C extends true
    ? [Prop, [keyof T[Prop], T[Prop][NestedProp]]]
    : never
): T {
  if ("charAr" in prop) obj[prop[0]] = prop[1];
  if ("shift" in prop && nestedProp)
    obj[prop[0]][nestedProp[1][0]] = nestedProp[1][1];
  return obj;
}

type keys<T> = T extends [] ? keyof T : never;
type keysOfObject<T> = T extends Object ? keyof T : never;
type flatUnion<T> = T extends string ? T : false;
type flatKeysOfObj<T> = flatUnion<keysOfObject<T>>;
type ttt = flatUnion<keysOfObject<{ name: "" }>>;
type get = flatKeysOfObj<[]>;

function changPar(obj: { name: string }, value: string) {
  obj.name = value;
  return obj;
}
