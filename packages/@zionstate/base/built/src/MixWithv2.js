export class Mix {
    superclass;
    constructor(superclass) {
        this.superclass = superclass;
    }
    with(...mixins) {
        let counter = -1;
        for (let mixin of mixins) {
            counter++;
            this.superclass = class New extends mixin(this.superclass, counter) {
            };
        }
        return this.superclass;
    }
}
