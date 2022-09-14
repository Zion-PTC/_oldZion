import { monoreposType } from "../../../types/monorepo.js";
import Monorepos from "../../index.js";

export const monorepos: monoreposType = function (req, res) {
  res.send(Monorepos.monorepos);
};
