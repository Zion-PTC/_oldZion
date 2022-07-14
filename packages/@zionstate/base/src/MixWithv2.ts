import { classes, mixins } from "../lib/types";

export class Mix {
  constructor(public superclass: classes.constructors.Constructor) {}
  with<T>(...mixins: mixins.MixinType[]): T {
    let counter = -1;
    for (let mixin of mixins) {
      counter++;
      this.superclass = class New extends mixin(this.superclass, counter) {};
    }
    return this.superclass as unknown as T;
  }
}
