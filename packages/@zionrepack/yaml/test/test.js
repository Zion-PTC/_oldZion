import * as yaml from "yaml";
import fs from "fs";
import path from "path";
import { system, ZionPath } from "@zionstate/system";
import { testEnvironment } from "@zionstate/test-suite-1";

const { expect, log } = testEnvironment();

const testObj = {
  nome: "giacomo",
  cognome: "gagliano",
  indirizzo: { via: "Fuori le Mura", n: 10, cap: 58100 },
  array: ["ciao", "come", "stai"],
};

const testPath = new ZionPath(import.meta.url).directory();
const yamlFolder = "yaml";
const yamlfileName = "test1.yaml";
const filepath = path.join(testPath, yamlFolder, yamlfileName);

// PARSE
let string = system.stringifyFile(filepath);
const parseResult = yaml.parse(string);

it("Dovrebbe tornare nome giacomo", () => {
  expect(parseResult.nome).to.be.equal(testObj.nome);
});
