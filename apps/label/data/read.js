import { ZionYaml } from "@zionrepack/yaml";
import path from "path";

let file = new ZionYaml(
  "/Users/WAW/Documents/Projects/ZION/apps/label/data/ord.yaml"
);
console.log(file.parsed.home.children[1]);
// console.log(JSON.stringify(file.parsed, null, "  "));
