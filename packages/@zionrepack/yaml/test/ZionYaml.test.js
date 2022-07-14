import { ZionYaml } from "@zionrepack/yaml";
import { testEnvironment } from "@zionstate/test-suite-1";
const { expect, log } = testEnvironment();

let testYaml = new ZionYaml(
  "/Users/WAW/Documents/Projects/ZION/packages/@zionrepack/yaml/test/yaml/test1.yaml"
).parsed;
log(testYaml);
