import { Mixin } from "./src/TSMixin.js";
import { Mix, Base } from "./src/MixWithv3.js";
import { Name } from "./src/Mixins/Name.js";
import { Surname } from "./src/Mixins/Surname.js";
import { BaseMixin as JBM, Cached as JC, DeDupe as JDD, hasMixin as JHS, isApplicationOf as JIA, unwrap as JU, wrap as JW, } from "./src/lib/justin-fagnani/decorators.js";
export default { Mixin };
export let ZionMixins = {
    Mix,
    Base,
    Name,
    Surname,
};
export let ZionDecorators = {
    justin: {
        BaseMixin: JBM,
        Cached: JC,
        DeDupe: JDD,
        hasMixin: JHS,
        isApplicationOf: JIA,
        unwrap: JU,
        wrap: JW,
    },
};
