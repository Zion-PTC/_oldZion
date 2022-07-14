export type Constructor = new (...args: any[]) => {};
export const Surname = <T extends Constructor>(Superclass: T) => {
  class NewClass extends Superclass {
    surname: string;
    constructor(...arg: any[]) {
      super(...arg);
      const surname = arg[1];
      this.surname = surname;
    }
  }
  return NewClass;
};
