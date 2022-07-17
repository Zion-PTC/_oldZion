import { ComplexMixin, GCtor } from "./lib/zionTypes";

export interface IBase {
  base: boolean;
}

export class Base implements IBase {
  base: true = true;
  constructor(...arg: any[]) {}
}

/**
 * questo pattern prevese l'uso di Mixin che accettano un
 * solo parametro nel costruttore.
 */
export class Mix<MixedInterfaces> {
  constructor(public superclass: GCtor<any>) {}
  with(...mixins: ComplexMixin<any>[]): GCtor<MixedInterfaces> {
    let counter = -1;
    mixins.forEach((mixin, index) => {
      this.superclass = class extends (
        mixin<typeof this.superclass>(this.superclass, index)
      ) {};
    });
    for (let mixin of mixins) {
      counter++;
      this.superclass = class extends (
        mixin<typeof this.superclass>(this.superclass, counter)
      ) {};
    }
    return this.superclass;
  }
}
