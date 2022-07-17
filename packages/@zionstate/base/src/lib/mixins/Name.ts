export type Constructor = new (...args: any[]) => {};
export const Name = <T extends Constructor>(Superclass: T) => {
  class NewClass extends Superclass {
    name: string;
    constructor(...arg: any[]) {
      super(...arg);
      const name = arg[0];
      this.name = name;
    }
  }
  return NewClass;
};
