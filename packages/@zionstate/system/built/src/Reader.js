export { readJSON } from "../lib/readJSON.js";
export { readPackageJSON } from "../lib/readPackageJSON.js";
export { readTSconfigJSON } from "../lib/readTSconfigJSON.js";
import { readTSconfigJSON } from "../lib/readTSconfigJSON.js";
import { readJSON } from "../lib/readJSON.js";
import { readPackageJSON } from "../lib/readPackageJSON.js";
import { system } from "./System.js";
import { ZionCsv } from "./ZionCsv.js";
import { ZionYaml, ZionYamlToFile } from "./ZionYaml.js";
var SupportedFileExtensions;
(function (SupportedFileExtensions) {
    SupportedFileExtensions["json"] = ".json";
    SupportedFileExtensions["csv"] = ".csv";
    SupportedFileExtensions["yaml"] = ".yaml";
    SupportedFileExtensions["yml"] = ".yml";
    SupportedFileExtensions["md"] = ".md";
    SupportedFileExtensions["mdx"] = "mdx";
})(SupportedFileExtensions || (SupportedFileExtensions = {}));
export class Reader {
    ZionYaml = ZionYaml;
    ZionYamlToFile = ZionYamlToFile;
    ZionCsv = ZionCsv;
    stringifyFile = system.stringifyFile;
    readFoldersInDir = system.arrayOfFoldersInDirectory;
    readFilesInFolder = system.arrayOfNamesOfFilesInFolder;
    joinPaths = system.joinPaths;
    readJSON = readJSON;
    readPackageJSON = readPackageJSON;
    readTSconfigJSON = readTSconfigJSON;
}
export let reader = new Reader();
