import * as yaml from "yaml";
import fs from "fs";
import path from "path";
import { ZionPath } from "@zionstate/system";

const testPath = new ZionPath(import.meta.url).directory();
const yamlFolder = "yaml";
const yamlfileName = "test1.yaml";
const filepath = path.join(testPath, yamlFolder, yamlfileName);

// PARSE
let string = fs.readFileSync(filepath).toString();
const parseResult = yaml.parse(string);
console.log(parseResult);
