import { reader } from "../src/class/Reader.js";
import { creaAccount } from "./creaAccount.js";
export function caricaConfig() {
    let path = reader.readFilesInFolder(this.configPath)[0].path;
    let configObj = new reader.ZionYaml(path).parsed;
    const accounts = configObj.accounts.map(creaAccount);
    return { configObj, accounts };
}
