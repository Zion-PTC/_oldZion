import { classes, mixins } from "../lib/types";
export declare class Mix {
    superclass: classes.constructors.Constructor;
    constructor(superclass: classes.constructors.Constructor);
    with<T>(...mixins: mixins.MixinType[]): T;
}
