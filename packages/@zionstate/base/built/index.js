// TODO creare export
import * as BaseExport from "./src/Base.js";
import * as MixExport from "./src/Mix.js";
import { Mixin } from "./src/TSMixin.js";
import { Mix as MW3M, Base as MW3B } from "./src/MixWithv3.js";
import { Name } from "./src/Mixins/en/Name.js";
import { Surname } from "./src/Mixins/en/Surname.js";
export { decorators } from "./lib/index.js";
import * as types_1 from "./lib/types/index.js";
export { types_1 as types };
import * as MixWithV2_1 from "./src/MixWithv2.js";
export { MixWithV2_1 as MixWithV2 };
// export default { Mixin };
export let ZionMixins = {
    Mix: MW3M,
    Base: MW3B,
    Name,
    Surname,
    Mixin,
};
export default BaseExport;
export const Base = BaseExport.Base;
export const ABase = BaseExport.ABase;
export const Mix = MixExport;
