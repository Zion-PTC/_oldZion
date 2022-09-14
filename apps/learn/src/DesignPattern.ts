import { FS } from "@zionstate/database";
import { DesignPattern } from "@zionstate/learn";
import { getDesignPatterns } from "./lib/designPatterns.js";

const ZionYaml = FS.ZionYaml;

export type DesignPatternsCategories =
  | "Creational"
  | "Behavioral"
  | "Structural"
  | "Idempotency"
  | "non definito";

type DesignPatternMD = {
  nome?: string;
  categoria?: DesignPatternsCategories;
  isInCheatSheet?: boolean;
  isInTSCheatSheet?: boolean;
  isInBase?: boolean;
};
const designPattersMds = getDesignPatterns();
function creaDesignPatternFromMd(path: string) {
  let yaml = new ZionYaml<DesignPatternMD>(path);
  let parsed = yaml.parsed;
  let nwDesignPattern = new DesignPattern();
  if (parsed.nome) nwDesignPattern.nome = parsed.nome;
  if (parsed.categoria) nwDesignPattern.categoria = parsed.categoria;
  if (parsed.isInCheatSheet)
    nwDesignPattern.isInCheatSheet = parsed.isInCheatSheet;
  if (parsed.isInTSCheatSheet)
    nwDesignPattern.isInTSCheatSheet = parsed.isInTSCheatSheet;
  if (parsed.isInBase) nwDesignPattern.isInBase = parsed.isInBase;
}
designPattersMds.forEach(creaDesignPatternFromMd);

export default DesignPattern;
