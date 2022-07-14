import { wrap } from "../justin-fagnani/decorators";
import * as MixinDecorators from "../../types/Mixin/MixinDecorators.js";

export const Graphable: MixinDecorators.MixinDecoratoBroad = (mixin) =>
  wrap(
    mixin,
    (superclass: any) =>
      class extends superclass {
        static #graph: typeof superclass[] = [];
        static get nodes() {
          return this.#graph;
        }
        static showNodes() {
          console.log(this.nodes);
        }
        constructor(...arg: any) {
          super(...arg);
        }
      }
  );
