import { wrap } from "../justin-fagnani/decorators";
export const Graphable = (mixin) => wrap(mixin, (superclass) => class extends superclass {
    static #graph = [];
    static get nodes() {
        return this.#graph;
    }
    static showNodes() {
        console.log(this.nodes);
    }
    constructor(...arg) {
        super(...arg);
    }
});
