import { createMonorepoType } from "../../../types/monorepo.js";
import Monorepos from "../../index.js";

export const createMonorepo: createMonorepoType = function (req, res) {
  const { name, path, organization } = req.body;
  const monorepo = new Monorepos(name, path, organization);
  if (!name) res.json("ciao");
  if (!path) res.json("ciao");
  if (!organization) res.json("ciao");
  res.send(monorepo);
};
