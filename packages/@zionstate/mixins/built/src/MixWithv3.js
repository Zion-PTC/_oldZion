export class Base {
    base = true;
    constructor(...arg) { }
}
/**
 * questo pattern prevese l'uso di Mixin che accettano un
 * solo parametro nel costruttore.
 */
export class Mix {
    superclass;
    constructor(superclass) {
        this.superclass = superclass;
    }
    with(...mixins) {
        let counter = -1;
        mixins.forEach((mixin, index) => {
            this.superclass = class extends (mixin(this.superclass, index)) {
            };
        });
        for (let mixin of mixins) {
            counter++;
            this.superclass = class extends (mixin(this.superclass, counter)) {
            };
        }
        return this.superclass;
    }
}
