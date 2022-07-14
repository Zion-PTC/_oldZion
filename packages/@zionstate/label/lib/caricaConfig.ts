import { App } from "../src/App";
import { reader } from "../src/class/Reader.js";
import { creaAccount } from "./creaAccount.js";

export function caricaConfig(this: App) {
  let path = reader.readFilesInFolder(this.configPath)[0].path;
  let configObj = new reader.ZionYaml<{
    accounts: { name: string; paths: string[] }[];
  }>(path).parsed;
  const accounts = configObj.accounts.map(creaAccount);
  return { configObj, accounts };
}
