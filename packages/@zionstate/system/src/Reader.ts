export { readJSON } from "../lib/readJSON.js";
export { readPackageJSON } from "../lib/readPackageJSON.js";
export { readTSconfigJSON } from "../lib/readTSconfigJSON.js";
import { readTSconfigJSON } from "../lib/readTSconfigJSON.js";
import { readJSON } from "../lib/readJSON.js";
import { readPackageJSON } from "../lib/readPackageJSON.js";
import { system } from "./System.js";
import { ZionCsv } from "./ZionCsv.js";
import { ZionYaml, ZionYamlToFile } from "./ZionYaml.js";
import {
  jsconfigJSON,
  packageJSON,
  prettierrcJSON,
  tsconfigJSON,
} from "../lib/types";

enum SupportedFileExtensions {
  json = ".json",
  csv = ".csv",
  yaml = ".yaml",
  yml = ".yml",
  md = ".md",
  mdx = "mdx",
}

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
