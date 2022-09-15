#!/usr/bin/env node
import fs from "fs";
import { runProcess } from "../../IPFS/lib/runProcess.js";
import { jsconfigJSON, tsconfigJSON } from "../lib/types/index.js";
import { join } from "path";
import { ZionRegExp } from "@zionstate_js/regexp";

const check1 = ZionRegExp.tsComment;
const check2 = ZionRegExp.tsComment2;

const sourceRepo: string =
  "/Users/WAW/Documents/Projects/ZION/packages/@zionstate_node/crypto";
const targetName: string = "built";
const newFolderNale: string = "build/index.js";
const packJson: string = "package.json";
const tsConfig: string = "tsconfig.json";
const packJsonPath: string = join(sourceRepo, packJson);
const tsConfigPath: string = join(sourceRepo, tsConfig);
const error1: string = "No compiler options in the tsconfig file";

async function deleteFolder(path: string) {
  fs.rmSync(path, { recursive: true, force: true });
  console.log("Folder deleted at this path: " + path);
}
type writeFile<T> = (
  path: string,
  data: string,
  extension: string
) => Promise<void>;
const writeFile = async function <T>(
  path: string,
  data: string,
  extension?: string
) {
  fs.writeFileSync(path, data);
  console.log("Written file: " + path);
};

type getKnownData<T> = (path: string) => Promise<T>;
const getKnownData = function <T>(path: string): Promise<T> {
  let file = fs.readFileSync(path).toString();
  const cond1 = file.match(check1);
  const cond2 = file.match(check2);
  cond1 ? (file = file.replace(check1, "")) : file;
  cond2 ? (file = file.replace(check2, "")) : file;
  return JSON.parse(file);
};
const getPackJson = getKnownData<jsconfigJSON.DataType>;
const getTsConfig = getKnownData<tsconfigJSON.DataType>;
async function changePackJson(packJson: jsconfigJSON.DataType) {
  packJson.main = newFolderNale;
  console.log("Updated: " + packJson.main);

  return packJson;
}
async function changeTsConfig(tsConfig: tsconfigJSON.DataType) {
  if (!tsConfig.compilerOptions) throw new Error(error1);
  tsConfig.compilerOptions.outDir = "./build";
  console.log("Updated: " + tsConfig.compilerOptions.outDir);
  if (!Array.isArray(tsConfig.exclude)) throw new Error(error1);
  tsConfig.exclude[0] = "./build/**/*";
  console.log("Updated: " + tsConfig.exclude[0]);

  return tsConfig;
}

async function main() {
  // check if there is a folder with the taget name
  const dirent: string[] = fs.readdirSync(sourceRepo);
  const hasBuilt = dirent.some((entity) => entity === targetName);
  hasBuilt ? await deleteFolder(join(sourceRepo, targetName)) : {};
  const packJson = await getPackJson(packJsonPath);
  const updatedJson = await changePackJson(packJson);
  const tsConfigJson = await getTsConfig(tsConfigPath);
  const updatedTs = await changeTsConfig(tsConfigJson);
  [
    [updatedJson, packJsonPath],
    [updatedTs, tsConfigPath],
  ].forEach(
    async (tuple) =>
      await writeFile(tuple[1] as string, JSON.stringify(tuple[0]))
  );
}

runProcess(main, "Build system enabled");
